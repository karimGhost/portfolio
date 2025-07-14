'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../../hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message must be at most 500 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_wbyap2p', // ✅ Replace with your actual service ID
        'template_heyl1lu', // ✅ Replace with your actual template ID
        {
          to_name: 'Abdulkarim',         // This goes to your template's {{to_name}}
          from_name: values.name,        // This goes to {{from_name}}
          message: values.message,       // This goes to {{message}}
          reply_to: values.email,        // Optional but useful to reply directly
        },
        'W9DZA7QifyzUuW86u' // ✅ Replace with your public key from EmailJS
      );

      console.log('Email successfully sent!', result.text);
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out, I'll get back to you soon.",
        variant: 'default',
      });
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: 'Oops!',
        description: 'Something went wrong while sending your message.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="getintouch w-full py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 md:mb-16 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="text-base py-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="text-base py-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        {...field}
                        className="text-base py-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full py-7 text-lg bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Puptown Parlor"
          />
        </div>

        <div id="contact-form" data-section="contact">
          <ContactSplitForm
            title="Get in Touch"
            description="Schedule your pet's next spa day. We're open Tuesday–Saturday, 8AM–5PM. Call us at (972) 736-3999."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" }
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your pup!", rows: 5 }}
            onSubmit={(data) => {
              console.log("Form submission:", data);
              window.location.href = "mailto:ajklein2@hotmail.com?subject=New Pet Spa Inquiry&body=Name: " + data.name + "%0AEmail: " + data.email + "%0APhone: " + data.phone + "%0AMessage: " + data.message;
            }}
            mediaPosition="right"
            useInvertedBackground={false}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Frequently Asked Questions"
            description="Everything you need to know about our services."
            faqsAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "What are your business hours?", content: "We are open Tuesday through Saturday from 8:00 AM to 5:00 PM." },
              { id: "2", title: "Do you accept walk-ins?", content: "We operate by appointment only to ensure every pup gets individual attention." },
              { id: "3", title: "Where are you located?", content: "691 East Princeton Drive, Suite 107, Princeton, TX 75407." }
            ]}
          />
        </div>

        <FooterBase
          logoText="Puptown Parlor"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
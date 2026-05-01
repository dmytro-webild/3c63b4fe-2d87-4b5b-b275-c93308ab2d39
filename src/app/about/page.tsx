"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function AboutPage() {
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
        <div id="about-content" className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-10">About Puptown Parlor</h1>
            <div className="grid gap-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p>Puptown Parlor began with a simple idea: that pets deserve a spa experience that feels like a gentle retreat rather than a chore. Based in Princeton, we have built a sanctuary where dogs feel safe, loved, and pampered.</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p>Our mission is to provide stress-free, luxury grooming services through patience, compassion, and professional expertise. We ensure every dog leaves feeling refreshed and happy.</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
                <p>Unlike high-volume salons, we focus on individualized attention. Our cage-free approach, gentle handling techniques, and commitment to using organic, soothing products make us unique in the region.</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Why Princeton Families Choose Puptown Parlor</h2>
                <p>We are the local leaders in senior pet care and anxious pup management. Families trust us because we prioritize the emotional well-being of their companions alongside their aesthetic care.</p>
              </section>
            </div>
          </div>
        </div>
        <div id="contact" data-section="contact">
          <ContactText
            text="Questions? Feel free to contact us or book your appointment today."
            buttons={[{ text: "Book Your Appointment Today", href: "tel:+19725550100" }]}
            background={{ variant: "cell-wave" }}
            useInvertedBackground={true}
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
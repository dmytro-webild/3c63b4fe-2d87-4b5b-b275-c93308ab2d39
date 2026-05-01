"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import LegalSection from '@/components/legal/LegalSection';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function PrivacyPolicyPage() {
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

        <div className="pt-32 pb-20">
          <LegalSection
            layout="page"
            title="Privacy Policy"
            subtitle="Last updated: May 20, 2024"
            sections={[
              {
                heading: "1. Information We Collect",                content: { type: "paragraph", text: "At Puptown Parlor, we collect personal information you provide when booking appointments, such as your name, contact details, and pet information." }
              },
              {
                heading: "2. How We Use Your Information",                content: { type: "list", items: ["To process your grooming appointments.", "To communicate regarding your service updates.", "To improve our service quality."] }
              },
              {
                heading: "3. Data Security",                content: { type: "paragraph", text: "We implement robust security measures to protect your personal information from unauthorized access or disclosure." }
              }
            ]}
          />
        </div>

        <FooterBase
          logoText="Puptown Parlor"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms of Service", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}

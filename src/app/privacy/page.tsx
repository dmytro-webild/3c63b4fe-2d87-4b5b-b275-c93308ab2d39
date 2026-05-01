"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterBase from '@/components/sections/footer/FooterBase';
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyPage() {
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
            subtitle="Last updated: May 2024"
            sections={[
              {
                heading: "Introduction",                content: { type: "paragraph", text: "At Puptown Parlor, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard the information you provide when visiting our website or using our grooming services." }
              },
              {
                heading: "Information We Collect",                content: { type: "list", items: ["Contact information (name, email, phone number)", "Pet details (name, breed, health/behavioral notes)", "Appointment scheduling data", "Website usage analytics"] }
              },
              {
                heading: "How We Use Your Information",                content: { type: "numbered-list", items: ["To schedule and manage your grooming appointments", "To provide personalized care for your pets", "To communicate regarding updates, promotions, or appointment changes", "To improve our website experience"] }
              },
              {
                heading: "Data Security",                content: { type: "paragraph", text: "We implement industry-standard security measures to ensure your personal information remains confidential. Your data is stored securely and never sold to third parties." }
              }
            ]}
          />
        </div>
        <FooterBase
          logoText="Puptown Parlor"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterBase from '@/components/sections/footer/FooterBase';
import LegalSection from '@/components/legal/LegalSection';

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
            sections={[
              { heading: "Introduction", content: { text: "At Puptown Parlor, we respect your privacy and are committed to protecting your personal data." } },
              { heading: "Information We Collect", content: { items: ["Contact information", "Pet details", "Appointment scheduling data"] } },
              { heading: "How We Use Your Information", content: { items: ["To manage appointments", "To provide personalized care"] } }
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
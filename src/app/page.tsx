"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Puptown Parlor"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "plain",
      }}
      title="Pamper Your Best Friend at Puptown Parlor"
      description="Princeton’s Premier Gentle Grooming Spa. Where Tails Wag & Paws Glow – Experience stress-free, luxury pampering tailored to your pup's unique needs."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarah_j",
          testimonial: "The best grooming experience ever. My anxious pup was so calm!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-blonde-female-dressed-old-fashioned-jacket-holds-red-badger-dog_613910-15889.jpg",
          imageAlt: "luxury pet spa grooming happy dog",
        },
        {
          name: "Mike D.",
          handle: "@mikedogowner",
          testimonial: "Puptown Parlor is amazing. Professional, kind, and excellent results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/drag-queen-putting-makeup-full-shot_23-2149434544.jpg",
          imageAlt: "luxury pet spa grooming happy dog",
        },
        {
          name: "Linda P.",
          handle: "@lp_doglove",
          testimonial: "Finally, a place that understands senior dogs. So gentle!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-greyhound-dog-home-couch_23-2150283067.jpg",
          imageAlt: "luxury pet spa grooming happy dog",
        },
        {
          name: "James T.",
          handle: "@jamest",
          testimonial: "My doodle has never looked this good. Absolutely stunning work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-asmr-microphone-with-objects-sound_23-2149319262.jpg",
          imageAlt: "luxury pet spa grooming happy dog",
        },
        {
          name: "Emily R.",
          handle: "@emily_r",
          testimonial: "Kind, clean, and professional. We are customers for life.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-vet-hand-examining-dog-flea-with-comb-clinic_23-2147928587.jpg",
          imageAlt: "luxury pet spa grooming happy dog",
        },
      ]}
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-blonde-female-dressed-old-fashioned-jacket-holds-red-badger-dog_613910-15889.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-with-cute-greyhound-dog_23-2150231835.jpg",
          alt: "Medium shot man with cute greyhound dog",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-pin-up-girl-with-little-dog_1157-18893.jpg",
          alt: "Stylish pin up girl with the little dog",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blonde-woman-holding-maltese-dog_1268-21797.jpg",
          alt: "Blonde woman holding maltese dog",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cute-teenage-girl-with-dog-pet-girl-playing-with-her-pet-dog-home_169016-68107.jpg",
          alt: "Cute teenage girl with a dog Pet Girl playing with her pet dog at home",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-blonde-female-dressed-old-fashioned-jacket-holds-red-badger-dog_613910-15889.jpg",
          alt: "Medium shot man with cute greyhound dog",
        },
      ]}
      avatarText="Trusted by 500+ Princeton Pet Parents"
      marqueeItems={[
        {
          type: "text",
          text: "Luxury Grooming",
        },
        {
          type: "text",
          text: "Gentle Handling",
        },
        {
          type: "text",
          text: "Senior Speciality",
        },
        {
          type: "text",
          text: "Blueberry Facials",
        },
        {
          type: "text",
          text: "Stress-free Spa",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Our Passion for Gentle Care"
      buttons={[
        {
          text: "Read Our Story",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Full Care",
          title: "Full Spa Groom",
          subtitle: "Bath, Cut, Nails & More",
          description: "Comprehensive grooming service including bath, haircut, nails, and teeth cleaning.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-greyhound-dog-home-couch_23-2150283067.jpg",
        },
        {
          tag: "Add-on",
          title: "Blueberry Facial",
          subtitle: "Refresh & Clean",
          description: "Deep cleaning blueberry facial for a fresh, clean scent and happy pup.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-asmr-microphone-with-objects-sound_23-2149319262.jpg",
        },
        {
          tag: "Specialty",
          title: "Senior Spa Care",
          subtitle: "Gentle Handling",
          description: "Specially tailored grooming for senior dogs needing extra patience and care.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-vet-hand-examining-dog-flea-with-comb-clinic_23-2147928587.jpg",
        },
      ]}
      title="Signature Spa Services"
      description="We offer a wide range of luxury services to keep your furry friend looking and feeling their absolute best."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$35",
          subtitle: "Quick Refresh",
          features: [
            "Bath",
            "Nail Trim",
            "Ear Cleaning",
          ],
          buttons: [
            {
              text: "Book Basic",
              href: "#contact",
            },
          ],
        },
        {
          id: "standard",
          badge: "Most Popular",
          price: "$65",
          subtitle: "Full Spa Experience",
          features: [
            "Full Groom",
            "Blueberry Facial",
            "Teeth Brushing",
          ],
          buttons: [
            {
              text: "Book Standard",
              href: "#contact",
            },
          ],
        },
        {
          id: "deluxe",
          badge: "Luxury",
          price: "$85+",
          subtitle: "Total Pampering",
          features: [
            "Full Groom",
            "De-shed Rescue",
            "Pawdicure",
            "Bow Tie",
          ],
          buttons: [
            {
              text: "Book Deluxe",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Grooming Packages"
      description="Transparent pricing for exceptional care. Custom quotes available for matted or highly anxious pups."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "619+",
          title: "Google Reviews",
          items: [
            "Top-rated local spa",
            "Reliable grooming experts",
          ],
        },
        {
          id: "m2",
          value: "4.9",
          title: "Average Rating",
          items: [
            "Exceptional quality",
            "Consistent feedback",
          ],
        },
        {
          id: "m3",
          value: "100%",
          title: "Gentle Care",
          items: [
            "Stress-free focus",
            "Expert handling",
          ],
        },
      ]}
      title="Trust by the Numbers"
      description="Princeton families trust Puptown Parlor for gentle and reliable pet grooming services."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice M.",
          handle: "@alicem",
          testimonial: "Jamie is wonderful! My dog usually hates grooming but she was so calm here.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-french-bulldog-striped-shirt_23-2151995696.jpg",
        },
        {
          id: "2",
          name: "Bob K.",
          handle: "@bobk",
          testimonial: "Fantastic service. They handled my matted dog with such grace and kindness.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-portrait-curly-european-tanned-woman-holds-happy-pet-dog-pomeranian-spitz_343596-1496.jpg",
        },
        {
          id: "3",
          name: "Carla F.",
          handle: "@carlaf",
          testimonial: "The best skunk bath rescue! My house smells great again thanks to you.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-playing-with-little-dog_1157-32627.jpg",
        },
        {
          id: "4",
          name: "Dave R.",
          handle: "@daver",
          testimonial: "So patient with my anxious senior pup. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/studio-shot-cute-border-collie-dog_23-2148097502.jpg",
        },
        {
          id: "5",
          name: "Elena W.",
          handle: "@elenaw",
          testimonial: "Five star service. Very professional, clean, and kind staff.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-portrait-funny-english-bulldog-puppy-wrapped-blanket-pink-surface_181624-43641.jpg",
        },
      ]}
      showRating={true}
      title="Real Wags from Our Community"
      description="Hear what families in Princeton and Collin County have to say about our spa services."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "cell-wave",
      }}
      text="Ready for your pup’s spa day? Reach out to schedule an appointment today. We are located at 691 E Princeton Dr, Princeton, TX 75407."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+19725550100",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
          ],
        },
      ]}
      logoText="Puptown Parlor"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

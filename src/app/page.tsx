"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
          logoSrc="/images/logo.svg"
          logoAlt="GlowFlow Logo"
          brandName="GlowFlow"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to GlowFlow!"
          subtitle="Your path to vibrant energy flows is here."
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Discover the GlowFlow Vision"
          descriptions={["GlowFlow is your solution to efficient energy management.", "We provide tools for users to monitor and optimize their energy usage."]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Our token operates on a unique model that supports growth and sustainability."
          kpiItems={[{ value: "1M", description: "Total Supply" }, { value: "70%", description: "Liquidity" }, { value: "30%", description: "Locked for Future Development" }]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="GlowFlow Logo"
          columns={[{ items: [{ label: 'Privacy Policy', onClick: () => console.log('Privacy Policy Clicked') }, { label: 'Terms of Service', onClick: () => console.log('Terms Clicked') }] }]} 
          logoText="GlowFlow"
          copyrightText="© 2023 GlowFlow"
          onPrivacyClick={() => console.log('Privacy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
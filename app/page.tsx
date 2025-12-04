
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import NarrativeSection from "@/components/NarrativeSection";
import DataCallout from "@/components/DataCallout";
import ProgressIndicator from "@/components/ProgressIndicator";
import FounderTakeaway from "@/components/FounderTakeaway";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProgressIndicator />
      <HeroSection />
      <IntroSection />

      <NarrativeSection
        id="universities"
        title="The Academic Pipeline"
        imageSrc="/images/top_universities.png"
        imageAlt="Chart showing top universities producing AI founders"
        backgroundColor="bg-white"
      >
        <p>
          <strong>It starts in the lab.</strong> Before they were founders, they were researchers.
        </p>
        <p>
          Stanford, MIT, and Berkeley are the undisputed engines of this wave. The density of talent moving from academic labs to venture-backed startups is unprecedented.
        </p>
        <FounderTakeaway>
          If you aren&apos;t in these labs, you need to be recruiting from them. The next unicorn is likely being built in a dorm room right now.
        </FounderTakeaway>
      </NarrativeSection>

      <NarrativeSection
        id="geography"
        title="Geographic Concentration"
        imageSrc="/images/sketch_1_cities.png"
        imageAlt="Map showing AI startup concentration in the Bay Area"
        backgroundColor="bg-gradient-to-b from-white to-teal-50/30"
        imagePosition="left"
        callout={
          <DataCallout
            stats={[
              { value: "277", label: "startups", subtext: "Bay Area, California" },
              { value: "29.5%", label: "of all funded AI companies" },
            ]}
          />
        }
      >
        <p>
          <strong>Geography is destiny.</strong> Despite the remote work promise, 277 of 940 new AI startups clustered in the Bay Area.
        </p>
        <p>
          That&apos;s 30% of the entire industry in a 30-mile radius. New York and London trail far behind. Proximity to capital and talent still beats bandwidth.
        </p>
        <FounderTakeaway>
          You can build anywhere, but you&apos;ll raise easier here. Network effects are real, and they are local.
        </FounderTakeaway>
      </NarrativeSection>

      <NarrativeSection
        id="global"
        title="Global Capital Dominance"
        imageSrc="/images/sketch_3_country.png"
        imageAlt="Chart showing global funding distribution"
        backgroundColor="bg-gradient-to-b from-white to-blue-50/30"
        callout={
          <DataCallout
            stats={[
              { value: "$14.7B", label: "raised by US startups" },
              { value: "$2.2B", label: "by UK startups" },
              { value: "7x", label: "funding gap" },
            ]}
          />
        }
      >
        <p>
          <strong>America stands alone.</strong> US startups captured $14.7B—76% of global funding. The UK is a distant second at $2.2B.
        </p>
        <p>
          China, Israel, and Europe are barely visible on the chart. Structural advantages in capital and regulation have turned AI into an American export.
        </p>
        <FounderTakeaway>
          If you want world-class capital, you likely need a Delaware C-Corp and a US presence. The gravity of American VC is inescapable.
        </FounderTakeaway>
      </NarrativeSection>

      <NarrativeSection
        id="trends"
        title="Temporal Trends"
        imageSrc="/images/sketch_5_year_comparison.png"
        imageAlt="Chart showing funding trends over time"
        backgroundColor="bg-gradient-to-r from-blue-50/30 to-pink-50/30"
        imagePosition="left"
      >
        <p>
          <strong>The Fever Breaks.</strong> 2024 saw $16.8B raised. 2025 is tracking for 70% less.
        </p>
        <p>
          Valuations are cooling too. Is this a crash? No, it&apos;s a correction. The hype cycle is over; now the building begins.
        </p>
        <FounderTakeaway>
          The &quot;easy money&quot; era is over. Focus on revenue, unit economics, and real problems. The next round won&apos;t be free.
        </FounderTakeaway>
      </NarrativeSection>

      <NarrativeSection
        id="industry"
        title="Industry Diversification"
        imageSrc="/images/sketch_6_industry.png"
        imageAlt="Chart showing industry diversification"
        backgroundColor="bg-white"
        callout={
          <DataCallout
            stats={[
              { value: "16", label: "Machinery & Equipment" },
              { value: "8", label: "E-Commerce" },
              { value: "Growth", label: "in physical industries" },
            ]}
          />
        }
      >
        <p>
          <strong>Atoms, not just Bits.</strong> AI is leaving the browser. We&apos;re seeing growth in Machinery, Semiconductors, and Logistics.
        </p>
        <p>
          The first wave was chatbots; the next wave is robots, chips, and factories. The &quot;Brain&quot; is getting a Body.
        </p>
        <FounderTakeaway>
          The digital world is crowded. Look to the physical world for the next massive opportunity.
        </FounderTakeaway>
      </NarrativeSection>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A1A1A] text-white w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">The Founder&apos;s Playbook</h2>
          <div className="prose prose-lg prose-invert mx-auto mb-16">
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-center text-gray-300">
              Based on the data, here is your checklist for building the next great AI company:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-teal-400">1. Scout the Labs</h3>
                <p className="text-gray-300">
                  Talent is concentrating in top research universities. If you aren&apos;t technical, find a co-founder who is publishing papers at Stanford or MIT.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-blue-400">2. Get to the Bay</h3>
                <p className="text-gray-300">
                  Remote work is great for execution, but bad for serendipity. To raise capital and build momentum, you need to be where the density is.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-purple-400">3. Go Vertical</h3>
                <p className="text-gray-300">
                  General purpose models are a race to the bottom. Build for specific industries—especially physical ones like manufacturing and logistics.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-pink-400">4. Survive the Winter</h3>
                <p className="text-gray-300">
                  The funding frenzy is cooling. Optimize for survival. Build real revenue, not just hype. The next 18 months will be a test of endurance.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              View Full Dataset on GitHub
            </a>
            <p className="mt-8 text-sm text-gray-500">
              Analysis based on CB Insights data for 940 venture-backed AI/ML companies (Nov 2024).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

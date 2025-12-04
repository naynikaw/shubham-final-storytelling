
import HeroSection from "@/components/HeroSection";
import NarrativeSection from "@/components/NarrativeSection";
import DataCallout from "@/components/DataCallout";
import ProgressIndicator from "@/components/ProgressIndicator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProgressIndicator />
      <HeroSection />

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
        <p>
          This isn&apos;t just about coding skills; it&apos;s about access to the frontier of model research. The path from PhD to CEO has never been shorter.
        </p>
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
      </NarrativeSection>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A1A1A] text-white w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Conclusion</h2>
          <div className="prose prose-lg prose-invert mx-auto mb-16 text-left">
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
              The verdict is in: <strong>Concentration wins.</strong>
            </p>
            <p className="mb-8">
              The AI revolution is happening in specific places, funded by specific people. For founders, the message is clear: Go where the action is. The long tail is lonely.
            </p>
            <p>
              The boom of 2024 wasn&apos;t just a bubble—it was a selection event. Only time will tell which of these 940 companies build the future, and which become history.
            </p>
          </div>

          <div className="text-sm text-gray-400 mb-12">
            <p className="font-bold mb-2">Data source note</p>
            <p>Analysis based on CB Insights data for 940 venture-backed AI/ML companies founded January 1, 2024 or later with minimum $250K funding. Data extracted November 2024.</p>
          </div>

          <a
            href="#"
            className="inline-block bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            View Full Dataset on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

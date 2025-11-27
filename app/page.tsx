import Image from "next/image";
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
        id="geography"
        title="Geographic Concentration"
        imageSrc="/images/sketch_1_cities.png"
        imageAlt="Map showing AI startup concentration in the Bay Area"
        backgroundColor="bg-gradient-to-b from-white to-teal-50/30"
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
          Nearly one in three AI startups chooses the same 30-mile radius to build their company.
        </p>
        <p>
          Despite predictions that remote work would democratize startup formation, the Bay Area captured 277 of the 940 venture-backed AI companies founded since 2024. That&apos;s 29.5% clustering in San Francisco, Menlo Park, Palo Alto, and surrounding cities.
        </p>
        <p>
          New York ranks second with 69 companies. London captures 39. The gap between first and second place spans 208 companies—more than London, Paris, Tokyo, and Seattle combined.
        </p>
        <p>
          This concentration isn&apos;t accidental. Proximity to capital, talent density, and network effects create advantages that video calls can&apos;t replicate. The data suggests that for AI startups, geography remains destiny.
        </p>
      </NarrativeSection>

      <NarrativeSection
        id="funding"
        title="Funding Maturity"
        imageSrc="/images/sketch_2_funding_rounds.png"
        imageAlt="Chart showing funding rounds distribution"
        imagePosition="left"
        backgroundColor="bg-white"
        callout={
          <DataCallout
            stats={[
              { value: "532", label: "companies at Seed stage" },
              { value: "290", label: "at Pre-Seed" },
              { value: "12", label: "reached Series B" },
            ]}
          />
        }
      >
        <p>
          Most AI startups remain in early stages despite raising significant capital.
        </p>
        <p>
          532 companies—more than half the dataset—sit at Seed stage. Another 290 companies remain at Pre-Seed, including Angel and Convertible Note rounds. Only 104 have progressed to Series A.
        </p>
        <p>
          The dropoff accelerates dramatically beyond Series A. Just 12 companies reached Series B. One achieved Series C. This distribution reveals how recently these companies were founded and how few have matured into growth-stage businesses.
        </p>
        <p>
          The compressed timeline from founding to institutional capital suggests investors are making earlier, larger bets on AI than previous technology waves. But the question remains: will these companies mature faster, or are we witnessing an early-stage funding bubble that precedes inevitable consolidation?
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
          The United States isn&apos;t just leading AI startup funding. It&apos;s dominating it.
        </p>
        <p>
          American companies captured $14.7 billion in total funding—76% of global AI investment for companies founded since 2024. The United Kingdom ranks second with $2.2 billion. China appears third at $535 million despite its significant AI research output.
        </p>
        <p>
          This gap exceeds the total funding of the next 14 countries combined. Israel, Singapore, France, Germany, and the Netherlands each deployed between $90-360 million—respectable sums that nonetheless pale beside American venture capital deployment.
        </p>
        <p>
          The disparity reflects structural advantages: deeper capital pools, sophisticated venture ecosystems, liquid exit markets, and regulatory frameworks favorable to startup formation. Despite AI&apos;s global research community, venture funding remains concentrated in a single country.
        </p>
      </NarrativeSection>

      <NarrativeSection
        id="investors"
        title="Investor Concentration"
        imageSrc="/images/sketch_4_investors.png"
        imageAlt="Chart showing top investors"
        imagePosition="left"
        backgroundColor="bg-white"
        callout={
          <DataCallout
            stats={[
              { value: "146", label: "companies backed by YC" },
              { value: "4x", label: "more than #2 investor" },
              { value: "$607M", label: "total portfolio funding" },
            ]}
          />
        }
      >
        <p>
          Y Combinator has backed more AI startups in 18 months than most venture firms invest in across a decade.
        </p>
        <p>
          146 companies in this dataset carry Y Combinator backing. That&apos;s four times more than Transpose Platform&apos;s 36 investments and Pioneer Fund&apos;s 34. The gap between first and second place exceeds the total portfolio size of most traditional venture firms.
        </p>
        <p>
          This volume represents a distinct investment strategy. While traditional VCs write fewer, larger checks with deeper diligence, Y Combinator deploys smaller capital across broader portfolios, betting that power law returns from one or two breakouts justify the hit rate.
        </p>
        <p>
          The data also reveals capital concentration beyond count. Some investors deploy massive total dollars across fewer companies, targeting later stages with larger rounds. This bifurcation creates two parallel venture ecosystems: high-volume accelerators betting on quantity, and concentrated funds betting on selection.
        </p>
      </NarrativeSection>

      <NarrativeSection
        id="trends"
        title="Temporal Trends"
        imageSrc="/images/sketch_5_year_comparison.png"
        imageAlt="Chart showing funding trends over time"
        backgroundColor="bg-gradient-to-r from-blue-50/30 to-pink-50/30"
        callout={
          <DataCallout
            stats={[
              { value: "712", label: "startups in 2024" },
              { value: "228", label: "startups in 2025" },
              { value: "40%", label: "fewer funded companies" },
            ]}
          />
        }
      >
        <p>
          The AI funding boom sustained through 2024 but showed signs of cooling in 2025.
        </p>
        <p>
          Companies founded in 2024 raised $16.8 billion across 712 startups. The 2025 cohort, measured through November, shows $2.7 billion across 228 companies. Extrapolated annually, this suggests 2025 will see roughly 40% fewer funded startups and 70% less total capital deployed.
        </p>
        <p>
          Valuations tell a similar story. Safe Superintelligence achieved a $32 billion valuation in 2024, driven by founder pedigree and foundational model ambitions. Labs leads 2025 valuations at $12.5 billion—substantial but 60% below the prior year&apos;s peak.
        </p>
        <p>
          Whether this represents natural market correction or the beginning of an AI funding winter remains unclear. The data captures a snapshot of transition between enthusiasm and recalibration.
        </p>
      </NarrativeSection>

      <NarrativeSection
        id="industry"
        title="Industry Diversification"
        imageSrc="/images/sketch_6_industry.png"
        imageAlt="Chart showing industry diversification"
        imagePosition="left"
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
          AI applications extend beyond pure software into physical industries.
        </p>
        <p>
          When excluding Internet Software & Services, IT Services, and Mobile Software categories, Machinery & Equipment leads with 16 funded startups. E-Commerce follows with 8. Chips & Semiconductors captures 6.
        </p>
        <p>
          These numbers remain small compared to the 805 software companies in the dataset. But they signal AI&apos;s expansion into manufacturing, logistics, hardware, and physical infrastructure. TARS raised $245 million for machinery applications. Vertical Compute secured $20 million for semiconductor design.
        </p>
        <p>
          The pattern suggests AI follows previous technology waves: initial concentration in pure software, followed by gradual penetration into traditional industries. As foundation models commoditize, competitive advantage shifts to vertical application and specialized use cases.
        </p>
      </NarrativeSection>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A1A1A] text-white w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Conclusion</h2>
          <div className="prose prose-lg prose-invert mx-auto mb-16 text-left">
            <p>
              The data reveals a story of concentration: geographic, capital, investor, and temporal.
            </p>
            <p>
              Bay Area dominance, American funding advantage, Y Combinator&apos;s investment volume, and 2024&apos;s capital surge all point to clustering effects that remote work and global connectivity have not disrupted. AI startup formation follows power law distributions across every dimension measured.
            </p>
            <p>
              For founders, the implications are clear. Proximity to capital matters. Ecosystem effects compound. Early funding abundance creates opportunity but also signals eventual consolidation.
            </p>
            <p>
              For investors, the data suggests both opportunity and caution. Early-stage deployment reached historic levels in 2024, but maturation lags. The gap between Seed and Series A companies raises questions about how many will survive.
            </p>
            <p>
              For students and aspiring entrepreneurs, the landscape shows both accessibility and competition. More companies raised funding than ever before. But success concentrates in specific geographies, industries, and investor networks.
            </p>
            <p>
              The AI startup boom of 2024 may prove an inflection point or an aberration. Only time will reveal which of these 940 companies build enduring businesses and which fade into the long tail of venture capital&apos;s power law.
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

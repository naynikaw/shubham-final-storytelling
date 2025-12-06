# Geography of Artificial Intelligence

## The final data story
You can view the final data story and codebase here:
[https://github.com/naynikaw/shubham-final-storytelling](https://github.com/naynikaw/shubham-final-storytelling)

(Note: This is a Next.js application. To run locally, clone the repo, run `npm install`, then `npm run dev`, and visit `http://localhost:3000`.)

## Changes made since Part II
Since Part II, the project has evolved from a collection of static charts into a cohesive, narrative-driven experience titled "The Geography of Intelligence."

Key changes include:
1.  **Narrative Restructuring**: We moved away from a generic "state of the market" report to a specific argument: *AI is concentrating in specific physical locations.* We added a new "Intro Section" to set this hook ("The Signal in the Noise").
2.  **New Sections**: We added "The Academic Pipeline" to highlight the critical role of universities (Stanford, MIT, Berkeley) as the supply chain for founders.
3.  **De-cluttering**: We removed the "Funding Maturity" and "Investor Concentration" sections to maintain focus on the core "Location & Origin" narrative.
4.  **Actionable Insights**: We added specific "Founder Takeaways" to every section, transforming the data from passive observations into active advice.
5.  **The Founder's Playbook**: The conclusion was completely rewritten from a summary into a tactical checklist for entrepreneurs.

## The audience
The primary audience for this story is **Aspiring AI Founders and Entrepreneurs**.

We narrowed this focus based on the insight that "data is only useful if it helps you make a decision." For a founder, the decision is "Where should I build?" and "What should I build?".

Adjustments made for this audience:
*   **Tone**: We shifted from academic/neutral to "entrepreneurial, curious, and warm."
*   **Format**: We used "Founder Takeaways" in distinct dialog bubbles to make the "So What?" immediately visible.
*   **Content**: We emphasized "Network Effects" and "Talent Density" over raw financial metrics.

## Final design decisions
*   **Visual Hierarchy**: We used a high-contrast design. The Hero section is dark and immersive (using a custom `DynamicBackground` particle effect) to signal "future/tech," while the narrative sections are clean and white for maximum readability.
*   **Motion**: We implemented subtle scroll animations using `Framer Motion` to give the site a "scrollytelling" feel without overwhelming the user.
*   **Typography**: We paired a Serif font (*Playfair Display*) for headings to give the narrative weight and authority, with a Sans-serif font (*Inter*) for body text to ensure clarity.
*   **Components**: We created a reusable `FounderTakeaway` component with a glassmorphism effect to visually distinguish actionable advice from the narrative text.

## References
*   **Data Source**: Analysis of 940 venture-backed AI companies founded since January 2024. Data provided by CB Insights (extracted November 2024).
*   **Images**: City landscapes and university logos were sourced for the visual storytelling elements.

## AI acknowledgements
AI was used as a co-pilot throughout the development of this final story:
*   **Coding**: AI assisted in generating the React components, specifically the `DynamicBackground` canvas animation and the `FounderTakeaway` styling.
*   **Content Refinement**: AI helped refine the narrative voice to be more conversational and punchy, ensuring the "Founder's Playbook" tone was consistent.
*   **Structure**: AI suggested the reordering of sections to create a logical flow from "Origins" (Universities) to "Location" (Geography) to "Action" (Playbook).

## Final thoughts
This project demonstrated the power of "opinionated data." By taking a stance—that geography still matters—we were able to turn a spreadsheet of 940 companies into a story. The most exciting part was seeing how the "Founder Takeaways" instantly made the charts feel relevant. If I had more time, I would have loved to add an interactive map component where users could filter startups by specific university origins.

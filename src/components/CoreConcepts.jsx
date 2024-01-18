import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts te" id="core-concepts">
      {/* <h2>Core Concepts</h2> */}

      {/*-------------------option using map used---------------------- */}
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
      {/* <ul> */}
      {/* ----------------------  option 1----------------- */}
      {/* <CoreConcepts 
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      image={CORE_CONCEPTS[0].image}
      
      /> */}
      {/* <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul> */}
    </Section>
  );
}

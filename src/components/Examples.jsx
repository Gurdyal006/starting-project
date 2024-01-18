import { useState } from "react";
import TabButton from "../components/TabButton.jsx";
import { EXAMPLES } from "../dataTab.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setseletedTopic] = useState("components");
  function handleClick(selectedTab) {
    // selected 'components', 'jsx', 'props', 'state'
    setseletedTopic(selectedTab);
  }

  // ---------------------------option 3 -----------------
  let tabContent = <p>Please select tab</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Components" id="examples">
      <Tabs
        buttons={
          <>
            <menu>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleClick("jsx")}
              >
                Jsx
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleClick("state")}
              >
                State
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleClick("props")}
              >
                Props
              </TabButton>
            </menu>
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* <h2>Components</h2> */}
      {/* <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
      </menu> */}
      {/* ----------------------------option 1 ----------------------------------------------------*/}
      {/* {!selectedTopic ? <p>Please select tab</p> : null}
        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : null} */}

      {/* ----------------------------------option 2----------------------------------------------------------- */}
      {/* {!selectedTopic && <p>Please select tab</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}

      {/*------------------------------------- option 3 -----------------------------------------------------------*/}

      {/* {tabContent} */}
    </Section>
  );
}

import { CORE_CONCEPTS } from './data.js'

import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import  TabButton  from './components/TabButton.jsx';



function App() {


  function handleClick(selectedTab){
    // selected 'components', 'jsx', 'props', 'state'
    console.log(selectedTab);
  }



  return (
    <div>
     <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
        {/* <CoreConcepts 
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
        
        /> */}
        <CoreConcept {...CORE_CONCEPTS[0]} />
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} />
</ul>
        </section>

        <section id='examples'>
        <h2>Components</h2>
         <menu>
       
          <TabButton onSelect={() =>handleClick('components')}>Components</TabButton>
          <TabButton onSelect={() =>handleClick('jsx')}>Jsx</TabButton>
          <TabButton onSelect={() =>handleClick('state')}>State</TabButton>
          <TabButton onSelect={() =>handleClick('props')}>Props</TabButton>
         </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

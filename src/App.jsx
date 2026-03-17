
    import './App.css'
    import Hero from './Hero'
    import Contact from './Contact'
    
    const businessData = {
      name: "סדרת שולים בחינוך",
      tagline: "מוגשת עם ניסיון והצלחה מוכחת",
      about: "שיטת קריאה מעובדת ומובנת במקצועיות רבה, שלב אחר שלב. בשילוב מיומנויות הבנה, מושגים לשוניים וחיזוק מעבדי הקריאה, לקראת קורא מיומן ושטף מידי בתהליך הקריאה.",
      contact: {
          phone: "050-419-1608",
          email: "sh0504191608@gmail.com"
      }
    };
    
    function App() {
      return (
        <div className="App">
          <Hero name={businessData.name} tagline={businessData.tagline} about={businessData.about} />
          <Contact info={businessData.contact} />
        </div>
      )
    }
    
    export default App
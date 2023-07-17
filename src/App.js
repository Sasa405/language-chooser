import React, { useState, createContext, useContext } from 'react';
//Diese Zeile importiert notwendige Komponenten und Hooks aus der "react"-Bibliothek. 
//Dazu gehören das "React"-Objekt, der "useState"-Hook für die Verwaltung des Zustands, 
//die "createContext"-Funktion für die Erstellung eines Kontexts und der "useContext"-Hook für den Zugriff auf Kontextwerte.




// Create a context for language selection
const LanguageContext = createContext();      //Diese Zeile erzeugt einen neuen Kontext mit dem Namen `LanguageContext` unter Verwendung der Funktion 
                                              //`createContext`. 
                                              //Kontexte ermöglichen die gemeinsame Nutzung von Daten zwischen Komponenten, ohne dass props manuell durch jede Ebene des Komponentenbaums geleitet werden müssen.



// Header component                         //Die Komponente `Header` ist als funktionale Komponente definiert, die ein Kopfzeilenelement mit einem Titel 
function Header() {                         //darin wiedergibt.
  return (
    <header>
      <h1>Please select your language</h1>
    </header>
  );
}

// LanguageChooser component
function LanguageChooser() {
  const { setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="language-chooser">
      <select onChange={handleLanguageChange}>
        <option value="GER">Germany 🇩🇪</option>
        <option value="ENG">United States 🇺🇸</option>
        <option value="FRA">France 🇫🇷</option>
        <option value="ESP">Spain 🇪🇸</option>
        <option value="ITA">Italy 🇮🇹</option>
        <option value="JPN">Japan 🇯🇵</option>
        <option value="CHN">China 🇨🇳</option>
      </select>
    </div>
  );
}

// Content component
function Content() {
  return (
    <div className="content">
      <WelcomeMessage />
    </div>
  );
}

// WelcomeMessage component
function WelcomeMessage() {
  const { language } = useContext(LanguageContext);

  let message = '';

  if (language === 'GER') {
    message = 'Willkommen!';
  } else if (language === 'ENG') {
    message = 'Welcome!';
  } else if (language === 'FRA') {
    message = 'Bienvenue !';
  } else if (language === 'ESP') {
    message = 'Bienvenido!';
  } else if (language === 'ITA') {
    message = 'Benvenuto!';
  } else if (language === 'JPN') {
    message = 'ようこそ！';
  } else if (language === 'CHN') {
    message = '欢迎!';
  }

  return <h2>{message}</h2>;
}

// App component
function App() {
  const [language, setLanguage] = useState('GER');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="App">
        <Header />
        <LanguageChooser />
        <Content />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;



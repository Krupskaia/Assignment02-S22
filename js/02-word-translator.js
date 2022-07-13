var language = window.prompt("Please select the language between: es, de, en and fr")

if (language === "es") {
    window.document.write("Hello World translated in Spanish is: Hola Mundo.");
} else if (language === "de") {
    window.document.write("Hello World translated in German is: Hallo Welt.");    
} else if (language === "en") {
    window.document.write("Hello World translated in English is: Hello Word.");    
} else if (language === "fr") {
    window.document.write("Hello World translated in French is: Bonjour le monde.");    
} else {
    window.document.write("Hello World translated in English is: Hello Word.");
}


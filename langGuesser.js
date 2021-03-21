const franc = require('franc')
const langs = require('langs')
const userInput = process.argv[2]
const langCode = franc(userInput)

if (langCode === 'und') {
    console.log("Sorry, couldn't figure it out, try more sample text")
} else {
    const language = langs.where("3", langCode);
    console.log(language.name);
}

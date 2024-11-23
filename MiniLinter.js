let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// 1 - USING SPLIT METHOD TO ISOLATE EACH WORD TO AN ARRAY
const wordsArray = story.split(' ');

// 2 - USING REDUCE TO COUNT ITEMS IN THE ARRAY
let storyWords = wordsArray.reduce((count, word) => {
    return count + word.split(' ').length;
}, 0);

// 3 - USE FILTER TO REMOVE UNNECESSARY WORDS
const betterWords = wordsArray.filter(word => !unnecessaryWords.includes(word));


// 4 - COUNT INSTANCES OF OVERUSED WORDS USING REDUCE

const overusedCount = betterWords.reduce((accumulator, word) => {
    if (overusedWords.includes(word)){
        accumulator[word] = (accumulator[word] || 0) +1;
    }
    return accumulator;
}, {});

// MODIFIED FORMAT THE REMOVE BRACES AND QUOTES
let overusedFormatted = 'Overused words include: ';
for (const [word, count] of Object.entries(overusedCount)){
    overusedFormatted += ` ${word}: ${count}, `;

    overusedFormatted = overusedFormatted.slice(0, -2);
};

// 5 - COUNT SENTENCES. REDUCE  FOR '.' AND '!' USING REDUCE METHOD
// AND ENDSWITH STRING METHOD
let sentenceCount = betterWords.reduce((accumulator, item) => {
    const endsWithPunct = item.endsWith('.') || item.endsWith('!') || item.endsWith('?');
    
    if (endsWithPunct) {
        accumulator.sentenceCount = (accumulator.sentenceCount || 0) +1;
    }
    return accumulator;
}, {});

console.log(`The total word count is: ${storyWords}`);
console.log(`The sentence count is: ${sentenceCount.sentenceCount}`);
console.log(`Over used words include: ${overusedFormatted}`);

// LOGGING BETTER WORDS AS A STRING USING JOIN METHOD
console.log(betterWords.join(' '));


# CatSurf

CatSurf is a fun project I did to practice instantly-updating search with JavaScript.

The topic is from Day 6 of [Wes Bos's amazing course on JavaScript](https://courses.wesbos.com/).

## What I learned from this project

- **API**: I took one request from the API and stored the parts I'll be needing for the app in an array. That way, I didn't need to send a request to API everytime a search query was updated.
- **CSS**: The fancy CSS for list items is made using `linear-gradient` and `perspective()`. I've also been noticing how `box-shadow` is incredibly useful in making things pop.
- **JS**: I practiced using `map()` and `filter()` on an array. I also practiced constructing an object. Something new I learned is Regular Expressions. They're useful when working with patterns in strings.
- **Note about map**: I encountered a bug because `map()` always returns an array, and I wanted to return one string only. So I used `.join("")` to turn everything in an array into one big string.

### Refresher on topics:

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)

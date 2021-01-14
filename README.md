# CatSurf

[![Netlify Status](https://api.netlify.com/api/v1/badges/4c06681f-c92c-4ea3-b79e-6bac3ae3be13/deploy-status)](https://app.netlify.com/sites/cat-surf/deploys)

CatSurf is a fun project I did to practice instantly-updating search with JavaScript.

Preview: https://cat-surf.netlify.app/

The topic is from Day 6 of [Wes Bos's amazing course on JavaScript](https://courses.wesbos.com/). 

The API I used is [thecatapi](https://docs.thecatapi.com/1.0/api-reference/breeds/breeds-list).

## What I learned from this project

- **API**: I took one request from the API and stored the parts I'll be needing for the app in an array. That way, I didn't need to send a request to API everytime a search query was updated.
- **CSS**: The fancy CSS for list items is made using `linear-gradient` and `perspective()`. I've also been noticing how `box-shadow` is incredibly useful in making things pop.
- **JS**: I practiced using `map()` and `filter()` on an array. I also practiced constructing an object. Something new I learned is Regular Expressions. They're useful when working with patterns in strings.
- **Note about map**: I encountered a bug because `map()` always returns an array, and I wanted to return one string only. So I used `.join("")` to turn everything in an array into one big string.

### Refresher on topics:

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)

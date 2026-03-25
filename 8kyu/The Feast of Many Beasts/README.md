# The Feast of Many Beasts

**Difficulty:** 8kyu  
**Language:** JavaScript  
**Link:** https://www.codewars.com/kata/5aa736a455f906981800360d

---

## 1. The Challenge

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name.

For example:
- The great blue heron is bringing **g**arlic naa**n**
- The chickadee is bringing **c**hocolate ca**k**e

Write a function `feast(beast, dish)` that takes the animal's name and dish as arguments and returns `true` or `false` to indicate whether the beast is allowed to bring the dish to the feast.

### Rules
- `beast` and `dish` are always lowercase strings
- Each has at least two letters
- May contain hyphens and spaces (but not at the start/end)
- No numerals

### Examples
```javascript
feast("great blue heron", "garlic naan")     // true
feast("chickadee", "chocolate cake")         // true
feast("brown bear", "bear claw")              // false
```

---

## 2. Tech Stack

- **Language:** JavaScript (ES6+)
- **Concepts:** String manipulation, Boolean logic, Return statements

---

## 3. Approach

The solution checks two conditions using the Logical AND (`&&`) operator:

1. **First letter match:** The first letter of `beast` must equal the first letter of `dish`.
2. **Last letter match:** The last letter of `beast` must equal the last letter of `dish`.

I used the `.at()` method (or bracket notation `[0]` and `[length-1]`) to access the first and last characters of each string. The function returns a Boolean directly—either `true` (both conditions met) or `false` (one or both fail)—rather than logging a string, which allows the function to be used in conditional logic elsewhere.

---

## 4. How to Run It

```bash
# To run the script:
node solution.js
```

---

## 5. Test Cases

```javascript
console.log(feast("great blue heron", "garlic naan"));     // true
console.log(feast("chickadee", "chocolate cake"));         // true
console.log(feast("brown bear", "bear claw"));              // false
console.log(feast("dog", "dinner"));                        // false
console.log(feast("lion", "lunch"));                        // true
```

---

## 6. Tags

`strings` `boolean` `fundamentals`

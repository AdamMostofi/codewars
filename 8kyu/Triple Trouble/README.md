# Triple Trouble

**Difficulty:** 8kyu  
**Language:** JavaScript  
**Link:** https://www.codewars.com/kata/5a0c0b8630ca0d985a00006a

---

## 1. The Challenge

Create a function that combines three input strings by interleaving their characters. Take the first letter from all inputs and group them together, then the second letter from all inputs, and so on.

### Examples
```javascript
tripleTrouble("aa", "bb", "cc")    // "abcabc"
tripleTrouble("abc", "def", "ghi") // "adgbehcfi"
tripleTrouble("1234", "5678", "abcd") // "15263748abcd"
```

### Note
All inputs will be the same length.

---

## 2. Tech Stack

- **Language:** JavaScript (ES6+)
- **Concepts:** String manipulation, Arrays, Iteration

---

## 3. Approach

The solution iterates through the characters of each string by index. For each position, it collects the character from each of the three input strings and concatenates them together. I can use a loop or `map()` to build the result by accessing characters at the same index from each string.

---

## 4. How to Run It

```bash
node solution.js
```

---

## 5. Test Cases

```javascript
console.log(tripleTrouble("aa", "bb", "cc"));           // "abcabc"
console.log(tripleTrouble("abc", "def", "ghi"));        // "adgbehcfi"
console.log(tripleTrouble("1234", "5678", "abcd"));     // "15263748abcd"
console.log(tripleTrouble("love", "war", "peace"));     // "lwpaoerazrceoen"
```

---

## 6. Tags

`strings` `arrays` `fundamentals`

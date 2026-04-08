# Sentence Smash

**Difficulty:** 8kyu  
**Language:** Python


## 1. The Challenge

Write a function that takes an array of words and "smashes" them together into a single sentence. The function should add spaces between each word, but ensure there are no leading or trailing spaces in the final result.

Example

Python
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
Note
You can assume you are only given words in the array.

You cannot assume the size of the array.

You should not add any punctuation or sanitize the words.

## 2. Tech Stack

**Language:** Python 3.x
**Concepts:** String manipulation, Iterables, Built-in Methods

## 3. Approach

The solution utilizes Python's built-in .join() string method. This method is specifically designed to concatenate elements of an iterable (like a list) into a single string using a specified separator. By using a single space " " as the separator, the method automatically places spaces between words while correctly omitting them at the start and end of the string.

## 4. How to Run It

Bash
python solution.py

## 5. Test Cases

Python
print(smash(['hello', 'world'])) # "hello world"
print(smash(['this', 'is', 'great'])) # "this is great"
print(smash([])) # ""
print(smash(['single'])) # "single"

## 6. Tags

strings arrays fundamentals
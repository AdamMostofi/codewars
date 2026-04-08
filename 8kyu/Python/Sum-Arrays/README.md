# Sum Arrays

**Difficulty:** 8kyu  
**Language:** Python

---

## The Challenge

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.

### Examples

```python
sum_array([1, 5.2, 4, 0, -1])  # 9.2
sum_array([-2.398])           # -2.398
sum_array([])                  # 0
```

**Note:** You can assume that you are given a valid array containing only numbers. The numbers can be integers or floats.

## Tech Stack

- **Language:** Python 3.11
- **Concepts:** Math operations, Arrays, Built-in Functions

## Approach

The most professional and "Pythonic" way to solve this is using the built-in `sum()` function. Unlike manual loops that require initializing a variable and iterating through each element, `sum()` is highly optimized and handles both integer and floating-point math directly. It also correctly returns 0 when provided with an empty list, satisfying the challenge requirements without additional conditional logic.

## How to Run It

```bash
python Sum-Arrays.py
```

## Test Cases

```python
# The built-in Pythonic solution
def sum_array(a):
    return sum(a)

# Verification
print(sum_array([1, 5.2, 4, 0, -1]))  # 9.2
print(sum_array([-2.398]))             # -2.398
print(sum_array([]))                   # 0
```

---

**Tags:** `fundamentals` `arrays` `math` `python`
# Overlapping intervals

> https://leetcode.com/problems/non-overlapping-intervals

## Explanations

### Look for the "longest" non-overlapping sequence

- Find the lowest starting point
- Init an empty array
- For each options, look for the next non-overlapping element
- Find the longest sequence
- Return `all_options_length - longest_sequence_length`

Example 1: `intervals = [[1,2],[2,3],[3,4],[1,3]]`
```
[
  [[1,2], [1,3]],
  [[2,3]],
  [[3,4]]
]
[]
[
  [[1,2], [2,3], [3,4]]
  [[1,3], [2,3], [3,4]]
]
- Output: 1
```

Example 2: `[[1,2],[1,2],[1,2]]`
```
[
  
]
[]
[
  [1,2],
  [1,2],
  [1,2],
]
- Output: 2
```

Example 3: `[[1,2],[2,3]]`
```
[]
[
  [[1,2], [2,3]]
]

Output: 0
```

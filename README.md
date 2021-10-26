# EBS FE Test 1

## Requirements
1. Typescript
2. [TS Compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
3. ESLint + Prettier

## Todo:

(scroll down to see more information about every task)

1. Create **reduce** function
2. Create **find** function
3. Create **concat** function
4. Create **pipe** function

### All the functions should not use regular Array.prototype.reduce(), Array.prototype.concat() or Array.prototype.find(), they should be realized using only for(), while() and etc ..

## reduce(arr, (stop) => (acc, current, index) => {}, initialValue)

- It should have functionality to stop cycle using stop function

```js
const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const obj = reduce(
  arr,
  (stop) => (acc, current, index) => {
    if (index === 3) {
      stop()
    }
    
    return { ...acc, [index]: current }
  },
  {}
)

console.log(obj) // Result: { 0: 'spray', 1: 'limit', 2: 'elite' }
```

## find(arr, (item, index) => {})

```js
const arr = [
  { id: 0, name: 'spray' },
  { id: 1, name: 'limit' },
]

console.log(find(arr, (item) => item.id === 1)) // Result: { id: 1, name: 'limit' }
console.log(find(arr, (item) => item.id === 10)) // Result: undefined
```

## concat(arr1, arr2, arr3)

- The number of arrays should be unlimited. It can be 2, 3 or even 10.

```js
const arr1 = ['spray', 'limit', 'elite']
const arr2 = ['exuberant', 'destruction']
const arr3 = ['present']

concat(arr1, arr2) // Result: ['spray', 'limit', 'elite', 'exuberant', 'destruction']
concat(arr1, arr2, arr3) // Result: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
```

## pipe

- All functions such as **reduce**, **find** & **concat** should not expect first argument (array) in case when they're in a pipe, it should be passed automatically.

```js
const arr1 = ["spray", "limit", "elite"]
const arr2 = ["exuberant", "destruction"]
const arr3 = ["present"]

pipe(arr1, [
  concat(arr2, arr3), // Result: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
  reduce(
    (stop) => (acc, current, index) => {
      if (acc.length === 2) {
        stop();
      }

      // get only even elements
      if (index % 2 == 0) {
        acc.push({ index, label: current });
      }

      return acc;
    },
    []
  ), // Result: [{ index: 2, label: 'limit' }, { index: 4, label: 'exuberant' }]
  find((item) => item.label.length > 5), // Result { index: 4, label: 'exuberant' }
])

// Result { index: 4, label: 'exuberant' }

```

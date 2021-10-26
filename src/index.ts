type ArrItem = {
  id: number;
  name: string;
};

// *********************** REDUCE method start*********************************

const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

type ReduceType = {
  arr: string[];
  reducer: (
    stop: () => void
  ) => (acc: object, current: string | number, index: number) => void;
  initialValue: object;
};

const obj = reduce(
  arr,
  (stop) => (acc, current, index) => {
    if (index === 3) {
      stop();
    }

    return { ...acc, [index]: current };
  },
  {}
);

console.log(obj); // Result: { 0: 'spray', 1: 'limit', 2: 'elite' }

// *********************** REDUCE method end*********************************

// *********************** FIND method start*********************************
const find_arr = [
  { id: 0, name: 'spray' },
  { id: 1, name: 'limit' },
];

console.log(find(find_arr, (item) => item.id === 1)); // Result: { id: 1, name: 'limit' }
console.log(find(find_arr, (item) => item.id === 10)); // Result: undefined

// *********************** FIND method end*********************************

// *********************** CONCAT method start*********************************
const concat_arr1 = ['spray', 'limit', 'elite'];
const concat_arr2 = ['exuberant', 'destruction'];
const concat_arr3 = ['present'];

console.log(concat(concat_arr1, concat_arr2)); // Result: ['spray', 'limit', 'elite', 'exuberant', 'destruction']
console.log(concat(concat_arr1, concat_arr2, concat_arr3)); // Result: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// *********************** CONCAT method end*********************************

// Reduce method
function reduce(
  arr: string[],
  arg1: (
    stop: () => void
  ) => (acc: object, current: string, index: number) => any,
  arg2: {}
) {
  let value = arg2;
  const stop_fn = () => {
    while (arr.length) arr.pop();
  };
  for (let i = 0; i < arr.length; i++) {
    value = arg1(stop_fn)(value, arr[i], i);
  }

  return value;
}

// Find method
function find(arr: ArrItem[], arg1: (item: ArrItem) => boolean) {
  for (const val of arr) {
    if (arg1(val)) return val;
  }
}

// Concat method
function concat(...args: any[]) {
  let arrs: any[] = [];
  args.map((el) => el.map((el: any[]) => arrs.push(el)));
  return arrs;
}

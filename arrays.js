const currentSums = (numbers) => {
    let array = [];

    numbers.reduce((item, current) => {
        array.push(item);
        return item + current;
    })
    return array;
}

console.log(currentSums([2, 3, 5, 7, 11, 13, 17]));

// --------------------------------------------------------------

let str = "Каждый охотник желает знать, где сидит фазан.";

const newArray = str => {
    return str.split(' ').map(item => item.slice(0,1)); // использовал map, не придумал как сделать это с filter
}
console.log(newArray(str));

// --------------------------------------------------------------

const changeArray = (arr) => {
    const center = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        let first = arr.slice(center, arr.length);
        let second = arr. slice(0, center);
        return first.concat(second);
    } else {
        let first = arr.slice(center + 1, arr.length);
        let second = arr. slice(0, center);
        return first.concat(arr[center], second);
    }
}

console.log(changeArray([ 1, 2, 3, 4, 5 ])); //[ 4, 5, 3, 1, 2 ]
console.log(changeArray([ 1, 2 ])); //[ 2, 1 ]
console.log(changeArray([ 1, 2, 3, 4, 5, 6, 7, 8]));  //[ 5, 6, 7, 8, 1, 2, 3, 4 ]

// --------------------------------------------------------------


const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 3, 4, 6, 8];


function mergeSortedArrays(arr1, arr2) {

    const merged = [];

    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    let arr1Position = 0;
    let arr2Position = 0;
    let mergedPosition = 0;

    while (arr1Position < arr1Length && arr2Position < arr2Length) {
        if (arr1[arr1Position] < arr2[arr2Position]) {
            merged[mergedPosition] = arr1[arr1Position];
            arr1Position++;
        } else {
            merged[mergedPosition] = arr2[arr2Position];
            arr2Position++;
        }
        mergedPosition++;
    }

    while (arr1Position < arr1Length) {
        merged[mergedPosition] = arr1[arr1Position];
        arr1Position++;
        mergedPosition++;
    }

    while (arr2Position < arr2Length) {
        merged[mergedPosition] = arr2[arr2Position];
        arr2Position++;
        mergedPosition++;
    }

    return merged
}

const merged = mergeSortedArrays(arr1, arr2);

console.log(arr1);
console.log(arr2);
console.log(merged);

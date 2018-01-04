export function doubleArray(arr){

    const newArr = [];

    for(let count = 0; count<2; count++){
        for (let index=0; index<arr.length; index++){
            let jsonString = JSON.stringify(arr[index]);
            let newObject = JSON. parse(jsonString);

            newArr.push(newObject);
        }
    }

    return newArr;

}

export function shuffleArray(arr){
    for(let index=0; index<arr.length; index++){
        const randIndex = Math.floor(Math.random() * arr.length);
        const temp = arr[index];
        arr[index] = arr[randIndex];
        arr[randIndex] = temp;
    }

    return arr;
}
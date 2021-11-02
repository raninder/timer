const args = process.argv;
const arr1 = args.slice(2);
const arr = arr1.map(ele => Number(ele) * 1000);
console.log(arr);

for (let time of arr) {
    if ((time > 0) && Number.isInteger(time)) {
        setTimeout(() => {
            process.stdout.write('\x07');
        }, time);
    }
}
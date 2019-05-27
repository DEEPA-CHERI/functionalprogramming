<script>
let elements = [1,2,3,4,5];
const sum = elements.reduce((acc,x) => acc+x);
console.log(`sum is ${sum}`);
const squares = elements.map((x) => x*x);
//console.log(squares);
const sumOfSquares = squares.reduce((acc,x) => acc+x);
console.log(`sum of squares of the array elements  ${sumOfSquares}`);
const cubes = elements.map((x) => x*x*x);
const sumOfCubes = cubes.reduce((acc,x) => acc+x);
console.log(`sum of the cubes of the array elements ${sumOfCubes}`);
</script>
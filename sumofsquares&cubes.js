<script>

const square = (x) => x*x ;
const cube = (x) => x*x*x ;
const add = (x,y)=> x+y ;
//console.log(square(10));
//console.log(cube(10));
function sumOfSquares(arr)
{
  return arr.length==0 ?0 :add(square(arr[0]),sumOfSquares(arr.slice(1)));
}
function sumOfCubes(arr)
{
	return arr.length==0 ? 0 : add(cube(arr[0]),sumOfCubes(arr.slice(1)));
}
function common(arr,operation)
{
   return arr.length==0 ? 0 : add(operation(arr[0]),common(arr.slice(1),operation));
}   
//console.log(sumOfSquares([1,2,3]));
//console.log(sumOfCubes([1,2,3]));
// operations are square,cube
console.log(`sum of squares of the array elements is ${common([1,2,3],square)}`);
console.log(`sum of cubes of the array elements ${common([1,2,3],cube)}`);
</script>

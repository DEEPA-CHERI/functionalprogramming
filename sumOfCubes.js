<script>
//sumofsquares and sumofcubes
const square = (x) => x*x ;
const cube = (x) => x*x*x ;


// console.log(square(10));
// console.log(cube(10));
function sumOfSquares(arr)
{
  return arr.length==0 ? 0 :square(arr[0])+sumOfSquares(arr.slice(1));
}
function sumOfCubes(arr)
{
	return arr.length==0 ? 0 : cube(arr[0])+sumOfCubes(arr.slice(1));
}
// console.log(sumOfSquares([1,2,3]));
// console.log(sumOfCubes([1,2,3]));

</script>

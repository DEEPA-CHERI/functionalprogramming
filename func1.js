<script>
function f(arr){
  return arr.length==0?0:((arr[0]*arr[0])+f(arr.slice(1)));
}
console.log(f([1,2,3]));
</script>

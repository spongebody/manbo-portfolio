/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param planks int整型一维数组
 * @return bool布尔型
 */
function CheckSquare(planks) {
  // write code here
  let sum = 0;
  let max = 0;
  for (let i = 0; i < planks.length; i++) {
    sum += planks[i];
    max = Math.max(max, planks[i]);
  }
  if (sum % 4 !== 0 || max > sum / 4) {
    return false;
  }
  let side = sum / 4;
  let visited = new Array(planks.length).fill(false);
  return dfs(planks, visited, 0, 0, side, 0);
}
function dfs(planks, visited, start, cur, side, count) {
  if (count === 3) {
    return true;
  }
  if (cur === side) {
    return dfs(planks, visited, 0, 0, side, count + 1);
  }
  for (let i = start; i < planks.length; i++) {
    if (!visited[i] && cur + planks[i] <= side) {
      visited[i] = true;
      if (dfs(planks, visited, i + 1, cur + planks[i], side, count)) {
        return true;
      }
      visited[i] = false;
    }
  }
  return false;
}

let arr = [21, 21, 21, 21, 42, 42, 84, 84, 84, 84];
console.log(CheckSquare(arr));
let arr2 = [5, 10, 10, 5, 15, 15, 15, 15];
console.log(CheckSquare(arr2));

// - create function to determine the given expression is correct or not
// - expression will be string of open bracket nor close bracket e.g `({[[()]]})`
// - your function should determine the expression is it correct or not
// - examples:
//   - `({[]})` => true
//   - `([][]{})`=> true
//   - `({)(]){[}` => false
//   - `[)()]` => false

const bracket = (string) => {
  let str = ["{", "}", "(", ")", "[", "]"];
  if (str === "{" && str === "}") {
    return true;
  } else if (str === "{" && str === ")") {
    return false;
  }
};

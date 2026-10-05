// _runtime/00604_memoizeCapped.js
import memoizeCapped from "00605_memoizeCapped.js";

const re0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const re1 = /\\(\\)?/g;

export default memoizeCapped((str) => {
  const items = [];
  if (46 === str.charCodeAt(0)) {
    str = "";
    items.push("");
  }
  let replaced = str.replace(items, (arg0, arg1, arg2, str) => {
    let replaced;
    const push = items.push;
    if (arg2) {
      replaced = str.replace(re1, "$1");
    } else {
      replaced = arg1 || arg0;
    }
    push(replaced);
  });
  return items;
});

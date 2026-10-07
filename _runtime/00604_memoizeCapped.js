// _runtime/00604_memoizeCapped.js
import _mod605 from "metro/00605__.js";

const re0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const re1 = /\\(\\)?/g;

export default _mod605((str) => {
  const items = [];
  if (46 === str.charCodeAt(0)) {
    items.push("");
  }
  let replaced = str.replace(items, (arg0, arg1, arg2, str) => {
    if (arg2) {
      let replaced = str.replace(re1, "$1");
    } else {
      replaced = arg1;
      if (!arg1) {
        replaced = arg0;
      }
    }
    items.push(replaced);
  });
  return items;
});

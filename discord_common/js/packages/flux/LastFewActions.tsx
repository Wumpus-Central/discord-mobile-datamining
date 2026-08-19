// === Module 594: add ===

// Module 594 (add)
import obj132 from "obj132" /* 2 */;

let closure_0 = [];
const result = obj132.fileFinishedImporting("../discord_common/js/packages/flux/LastFewActions.tsx");

export const add = function add(arg0) {
  let length;
  arr = arr.push(arg0);
  if (arr.length > 10) {
    do {
      arr = arr.shift();
      length = arr.length;
    } while (length > 10);
  }
};
export function clear() {
  closure_0 = [];
  return closure_0;
}
export const serialize = function serialize() {
  return arr.join(" -> ");
};
export const last = function last() {
  let tmp = null;
  if (arr.length > 0) {
    tmp = arr[arr.length - 1];
  }
  return tmp;
};
// discord_common/js/packages/flux/LastFewActions.tsx
let closure_0 = [];
const result = require("set").fileFinishedImporting("../discord_common/js/packages/flux/LastFewActions.tsx");

export const add = function add(arg0) {
  let length;
  arr = arr.push(arg0);
  if (arr.length > 10) {
    do {
      let tmp2 = arr;
      arr = arr.shift();
      let tmp4 = arr;
      length = arr.length;
    } while (length > 10);
  }
};
export function clear() {
  let closure_0 = [];
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
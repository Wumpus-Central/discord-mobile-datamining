// === Module 509: LastFewActions ===

// Module 509 (LastFewActions)
import size from "module_2" /* 2 */;

let closure_0 = [];
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/LastFewActions.tsx");

export const add = function add(arg0) {
  let length;
  closure_0.push(arg0);
  if (closure_0.length > 10) {
    do {
      let arr = closure_0.shift();
      length = closure_0.length;
    } while (length > 10);
  }
};
export function clear() {
  closure_0 = [];
  return closure_0;
}
export const serialize = function serialize() {
  return closure_0.join(" -> ");
};
export const last = function last() {
  let tmp = null;
  if (closure_0.length > 0) {
    tmp = closure_0[closure_0.length - 1];
  }
  return tmp;
};
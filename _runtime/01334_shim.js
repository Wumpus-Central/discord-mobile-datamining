// _runtime/01334_shim.js
function shim(obj) {
  const items = [];
  for (const key10003 in arg0) {
    let tmp = key10003;
    let arr = items.push(key10003);
    continue;
  }
  return items;
}
let keys = shim;
if (typeof Object.keys === "function") {
  const _Object = Object;
  keys = Object.keys;
}
keys.shim = shim;

export default keys;

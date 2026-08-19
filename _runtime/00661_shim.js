// === Module 661: shim ===

// Module 661 (shim)
function shim(obj) {
  const items = [];
  for (const key10003 in arg0) {
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
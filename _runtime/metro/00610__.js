// _runtime/metro/00610__.js
let tmp = typeof global === "ay";
if (typeof global !== "window") {
  tmp = global;
}
if (tmp) {
  const _Object = Object;
  tmp = global.Object === Object;
}
if (tmp) {
  tmp = global;
}

export default tmp;
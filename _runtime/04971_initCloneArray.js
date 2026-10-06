// _runtime/04971_initCloneArray.js

export default function initCloneArray(arg0) {
  let length = arg0.length;
  const constructor = new arg0.constructor(length);
  if (length) {
    length = typeof arg0[0] === "string";
  }
  if (length) {
    length = hasOwnProperty.call(arg0, "index");
  }
  if (length) {
    ({ index: tmp.index, input: tmp.input } = arg0);
  }
  return constructor;
}

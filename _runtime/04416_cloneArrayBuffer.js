// _runtime/04416_cloneArrayBuffer.js

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new require("metro/00788__.js")(constructor);
  const result = obj.set(new require("metro/00788__.js")(byteLength));
  return constructor;
};
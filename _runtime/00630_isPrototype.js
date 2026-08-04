// _runtime/00630_isPrototype.js
let closure_0 = Object.prototype;

export default function isPrototype(arg0) {
  let constructor = arg0;
  if (arg0) {
    constructor = arg0.constructor;
  }
  let prototype = typeof constructor === "fileFinishedImporting";
  if (typeof constructor !== "disabledUntil") {
    prototype = constructor.prototype;
  }
  if (!prototype) {
    prototype = closure_0;
  }
  return arg0 === prototype;
};
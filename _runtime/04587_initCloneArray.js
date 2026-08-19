// === Module 4587: initCloneArray ===

// Module 4587 (initCloneArray)

export default function initCloneArray(arg0) {
  let length = arg0.length;
  const constructor = new arg0.constructor(length);
  if (length) {
    length = typeof arg0[0] === "string";
  }
  if (!length) {
    if (length) {
      ({ index: tmp.index, input: tmp.input } = arg0);
    }
    return constructor;
  } else {
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let callResult = hasOwnProperty("index");
    } else {
      callResult = call(arg0, "index");
    }
  }
};
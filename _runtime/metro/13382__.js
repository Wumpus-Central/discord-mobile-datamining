// === Module 13382: ? ===

// Module 13382

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13381), arg0, obj);
    return arg1;
  } catch (err) {
    require(13381)[tmp2] = tmp;
  }
};
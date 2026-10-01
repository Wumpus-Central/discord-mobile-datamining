// === Module 4698: ? ===

// Module 4698
let fn = Array.isArray;
if (!fn) {
  fn = (arg0) => {
    const call = toString.call;
    return "[object Array]" == (typeof call === "unknown" ? toString() : call(arg0));
  };
}

export default fn;
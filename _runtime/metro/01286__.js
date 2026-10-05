// === Module 1286: ? ===

// Module 1286
let obj2;
const re1 = /%20/g;
const obj = { default: "RFC3986", formatters: obj2, RFC1738: "RFC1738", RFC3986: "RFC3986" };
obj2 = {
  RFC1738(arg0) {
    return replace.call(arg0, re1, "+");
  },
  RFC3986(arg0) {
    return String(arg0);
  }
};

export default obj;
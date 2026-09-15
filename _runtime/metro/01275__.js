// === Module 1275: ? ===

// Module 1275
const re1 = /%20/g;
const obj = {
  default: "RFC3986",
  formatters: {
    RFC1738(arg0) {
      const call = replace.call;
      if (typeof call === "unknown") {
        let callResult = replace(re1, "+");
      } else {
        callResult = call(arg0, re1, "+");
      }
      return callResult;
    },
    RFC3986(arg0) {
      return String(arg0);
    }
  },
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};

export default obj;
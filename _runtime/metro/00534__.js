// _runtime/metro/00534__.js
const re1 = /%20/g;

export default {
  default: "RFC3986",
  formatters: {
    RFC1738(arg0) {
      const call = replace.call;
      if (typeof call === "unknown") {
        let callResult = replace(closure_1, "+");
      } else {
        callResult = call(arg0, closure_1, "+");
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
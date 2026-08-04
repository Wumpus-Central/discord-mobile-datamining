// _runtime/metro/06765__.js
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str === "__FORMATJS_LISTFORMAT_DATA__") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};
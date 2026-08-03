const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str === "ge") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};
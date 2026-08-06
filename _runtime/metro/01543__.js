// _runtime/metro/01543__.js

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
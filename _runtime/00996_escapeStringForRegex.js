// _runtime/00996_escapeStringForRegex.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
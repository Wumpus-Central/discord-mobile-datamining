// _runtime/00861_escapeStringForRegex.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};

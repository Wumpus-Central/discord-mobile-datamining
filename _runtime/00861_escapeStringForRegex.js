// _runtime/00861_escapeStringForRegex.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};

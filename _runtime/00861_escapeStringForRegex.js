// === Module 861: escapeStringForRegex ===

// Module 861 (escapeStringForRegex)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
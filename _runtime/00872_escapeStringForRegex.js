// === Module 872: escapeStringForRegex ===

// Module 872 (escapeStringForRegex)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
// === Module 996: escapeStringForRegex ===

// Module 996 (escapeStringForRegex)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
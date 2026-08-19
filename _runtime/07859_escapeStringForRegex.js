// === Module 7859: escapeStringForRegex ===

// Module 7859 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
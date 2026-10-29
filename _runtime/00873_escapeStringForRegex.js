// _runtime/00873_escapeStringForRegex.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}

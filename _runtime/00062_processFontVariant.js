// === Module 62: processFontVariant ===

// Module 62 (processFontVariant)

export default function processFontVariant(str) {
  let found = str;
  if (!Array.isArray(str)) {
    const parts = str.split(" ");
    const _Boolean = Boolean;
    found = parts.filter(Boolean);
  }
  return found;
};
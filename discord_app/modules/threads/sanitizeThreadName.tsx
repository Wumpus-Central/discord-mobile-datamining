// === Module 7274: sanitizeThreadName ===

// Module 7274 (sanitizeThreadName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/sanitizeThreadName.tsx");

export default function sanitizeThreadName(str, arg1) {
  let trimmed = str;
  if (arg1) {
    trimmed = str.trim();
  }
  return trimmed;
};
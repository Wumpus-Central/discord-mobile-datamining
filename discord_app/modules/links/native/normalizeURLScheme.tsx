// === Module 5900: normalizeURLScheme ===

// Module 5900 (normalizeURLScheme)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/native/normalizeURLScheme.tsx");

export default function normalizeURLScheme(str) {
  let sum = str;
  if (!obj.test(str)) {
    let str2 = "https://";
    if ("//".startsWith("//")) {
      str2 = "https:";
    }
    sum = str2 + str;
  }
  return sum;
};
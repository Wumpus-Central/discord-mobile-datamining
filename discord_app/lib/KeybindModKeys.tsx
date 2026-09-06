// === Module 14068: KeybindModKeys ===

// Module 14068 (KeybindModKeys)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isMac()) {
  let str = "cmd";
} else {
  const _module1 = PlatformUtils;
  str = "ctrl";
}
if (PlatformUtils.isMac()) {
  let str2 = "opt";
} else {
  const _module3 = PlatformUtils;
  str2 = "alt";
}
if (PlatformUtils.isMac()) {
  let str3 = "return";
} else {
  const _module5 = PlatformUtils;
  str3 = "enter";
}
const result = size.fileFinishedImporting("lib/KeybindModKeys.tsx");

export const modKey = str;
export const altKey = str2;
export const returnKey = str3;
// discord_app/lib/KeybindModKeys.tsx
import obj132 from "../utils/PlatformUtils.tsx";

if (obj132.isMac()) {
  let str = "cmd";
} else {
  const _module1 = obj132;
  str = "ctrl";
}
if (obj132.isMac()) {
  let str2 = "opt";
} else {
  const _module3 = obj132;
  str2 = "alt";
}
if (obj132.isMac()) {
  let str3 = "return";
} else {
  const _module5 = obj132;
  str3 = "enter";
}
const result = obj132.fileFinishedImporting("lib/KeybindModKeys.tsx");

export const modKey = str;
export const altKey = str2;
export const returnKey = str3;
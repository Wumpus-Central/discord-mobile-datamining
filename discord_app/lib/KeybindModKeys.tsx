// discord_app/lib/KeybindModKeys.tsx
import PlatformUtils_mod from "../utils/PlatformUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isMac()) {
  let str = "cmd";
} else {
  const _module1 = PlatformUtils;
  str = "ctrl";
}
let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isMac()) {
  let str2 = "opt";
} else {
  const _module3 = PlatformUtils;
  str2 = "alt";
}
let PlatformUtils = PlatformUtils_mod;
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

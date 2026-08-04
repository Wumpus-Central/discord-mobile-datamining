// discord_app/lib/KeybindModKeys.tsx
import set from "set";
import set from "set";
import set from "set";
import set from "set";

if (set.isMac()) {
  let str = "cmd";
} else {
  const _module1 = require("set");
  str = "ctrl";
}
if (set.isMac()) {
  let str2 = "opt";
} else {
  const _module3 = require("set");
  str2 = "alt";
}
if (set.isMac()) {
  let str3 = "return";
} else {
  const _module5 = require("set");
  str3 = "enter";
}
const result = set.fileFinishedImporting("lib/KeybindModKeys.tsx");

export const modKey = str;
export const altKey = str2;
export const returnKey = str3;
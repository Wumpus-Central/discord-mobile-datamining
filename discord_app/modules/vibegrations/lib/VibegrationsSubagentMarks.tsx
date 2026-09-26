// discord_app/modules/vibegrations/lib/VibegrationsSubagentMarks.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
const dependencyMap = {
  snail() {
    return _modDef3715["2l3AEQ"];
  },
  goat() {
    return _modDef3715["+FPL+I"];
  },
  frog() {
    return _modDef3715.w4GOfR;
  },
  bunny() {
    return _modDef3715.XmZT9M;
  },
  cat() {
    return _modDef3715.NnydwQ;
  },
  caterpillar() {
    return _modDef3715["4iXcNT"];
  },
  butterfly() {
    return _modDef3715.DoTGt5;
  },
  dog() {
    return _modDef3715["9zxqmP"];
  },
  spider() {
    return _modDef3715.HF0T3L;
  },
  bee() {
    return _modDef3715.XTzDga;
  },
  bot() {
    return _modDef3715.abtC2b;
  },
};
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsSubagentMarks.tsx");

export const VIBEGRATIONS_SUBAGENT_MARK_KEYS = items;
export const isVibegrationsSubagentMarkKey = function isVibegrationsSubagentMarkKey(helperMark) {
  return items.includes(helperMark);
};
export const subagentMarkName = function subagentMarkName(helperMark) {
  const intl = util.intl;
  return intl.string(dependencyMap[helperMark]());
};
export const assignSubagentMarkKeys = function assignSubagentMarkKeys(arr) {
  let length = items;
  c1 = 0;
  let str = arr[0];
  if (str == null) {
    str = "";
  }
  let num = 0;
  let num2 = 0;
  if (0 < str.length) {
    do {
      let result = (31 * num2 + str.charCodeAt(num)) % items.length;
      c1 = result;
      num = num + 1;
      num2 = result;
      length = str.length;
    } while (num < length);
  }
  const item = arr.forEach((item, index) => {
    const result = map.set(item, length[(c1 + index) % length.length]);
  });
  return new Map();
};

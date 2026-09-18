// === Module 16954: VibegrationsSubagentMarks ===

// Module 16954 (VibegrationsSubagentMarks)
import util from "util" /* 1115 */;
import _modDef3676 from "module_3676" /* 3676 */;
import size from "module_2" /* 2 */;

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
const dependencyMap = {
  snail() {
    return _modDef3676["2l3AEQ"];
  },
  goat() {
    return _modDef3676["+FPL+I"];
  },
  frog() {
    return _modDef3676.w4GOfR;
  },
  bunny() {
    return _modDef3676.XmZT9M;
  },
  cat() {
    return _modDef3676.NnydwQ;
  },
  caterpillar() {
    return _modDef3676["4iXcNT"];
  },
  butterfly() {
    return _modDef3676.DoTGt5;
  },
  dog() {
    return _modDef3676["9zxqmP"];
  },
  spider() {
    return _modDef3676.HF0T3L;
  },
  bee() {
    return _modDef3676.XTzDga;
  },
  bot() {
    return _modDef3676.abtC2b;
  }
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
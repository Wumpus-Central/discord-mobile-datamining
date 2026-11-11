// === Module 13603: ConjureSubagentMarks ===

// Module 13603 (ConjureSubagentMarks)
import util from "util" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import size from "module_2" /* 2 */;

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
const dependencyMap = {
  snail() {
    return _modDef4079.ABeVsS;
  },
  goat() {
    return _modDef4079.dhXay8;
  },
  frog() {
    return _modDef4079.SHeweG;
  },
  bunny() {
    return _modDef4079.FytFE1;
  },
  cat() {
    return _modDef4079["5c+sHs"];
  },
  caterpillar() {
    return _modDef4079["/FYcne"];
  },
  butterfly() {
    return _modDef4079["Ib/AxK"];
  },
  dog() {
    return _modDef4079.zDjBR1;
  },
  spider() {
    return _modDef4079["6sxyrN"];
  },
  bee() {
    return _modDef4079.cVtefg;
  },
  bot() {
    return _modDef4079.MjCw0v;
  }
};
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureSubagentMarks.tsx");

export const CONJURE_SUBAGENT_MARK_KEYS = items;
export function isConjureSubagentMarkKey(helperMark) {
  return items.includes(helperMark);
}
export function subagentMarkName(helperMark) {
  const intl = util.intl;
  return intl.string(dependencyMap[helperMark]());
}
export function assignSubagentMarkKeys(arr) {
  length = items;
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
}
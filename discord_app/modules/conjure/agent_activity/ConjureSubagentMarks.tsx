// discord_app/modules/conjure/agent_activity/ConjureSubagentMarks.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3849 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
const dependencyMap = {
  snail() {
    return _modDef3849.ABeVsS;
  },
  goat() {
    return _modDef3849.dhXay8;
  },
  frog() {
    return _modDef3849.SHeweG;
  },
  bunny() {
    return _modDef3849.FytFE1;
  },
  cat() {
    return _modDef3849["5c+sHs"];
  },
  caterpillar() {
    return _modDef3849["/FYcne"];
  },
  butterfly() {
    return _modDef3849["Ib/AxK"];
  },
  dog() {
    return _modDef3849.zDjBR1;
  },
  spider() {
    return _modDef3849["6sxyrN"];
  },
  bee() {
    return _modDef3849.cVtefg;
  },
  bot() {
    return _modDef3849.MjCw0v;
  },
};
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureSubagentMarks.tsx");

export const CONJURE_SUBAGENT_MARK_KEYS = items;
export const isConjureSubagentMarkKey = function isConjureSubagentMarkKey(helperMark) {
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

// discord_app/modules/conjure/agent_activity/ConjureSubagentMarks.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

let map;

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
let closure_4 = {
  snail() {
    return _modDef3723.ABeVsS;
  },
  goat() {
    return _modDef3723.dhXay8;
  },
  frog() {
    return _modDef3723.SHeweG;
  },
  bunny() {
    return _modDef3723.FytFE1;
  },
  cat() {
    return _modDef3723["5c+sHs"];
  },
  caterpillar() {
    return _modDef3723["/FYcne"];
  },
  butterfly() {
    return _modDef3723["Ib/AxK"];
  },
  dog() {
    return _modDef3723.zDjBR1;
  },
  spider() {
    return _modDef3723["6sxyrN"];
  },
  bee() {
    return _modDef3723.cVtefg;
  },
  bot() {
    return _modDef3723.MjCw0v;
  },
};
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureSubagentMarks.tsx");

export const CONJURE_SUBAGENT_MARK_KEYS = items;
export const isConjureSubagentMarkKey = function isConjureSubagentMarkKey(helperMark) {
  return items.includes(helperMark);
};
export const subagentMarkName = function subagentMarkName(helperMark) {
  const intl = intl2.intl;
  return intl.string(closure_4[helperMark]());
};
export const assignSubagentMarkKeys = function assignSubagentMarkKeys(arr) {
  let length;
  let closure_0 = items;
  let c1 = 0;
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
  map = new Map();
  const item = arr.forEach((item, index) => {
    const result = map.set(item, length[(c1 + index) % length.length]);
  });
  return map;
};

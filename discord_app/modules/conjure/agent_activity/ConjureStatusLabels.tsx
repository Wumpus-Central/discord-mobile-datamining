// === Module 17264: ConjureStatusLabels ===

// Module 17264 (ConjureStatusLabels)
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;

require = fn;
function thinkingLabel(saving) {
  ({ activity, compacting } = saving);
  if (compacting === undefined) {
    compacting = false;
  }
  let flag = saving.saving;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = saving.restoring;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = saving.recalling;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = saving.controlling;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let tmp = null != activity;
  if (tmp) {
    tmp = "end" !== activity.phase;
  }
  if (flag4) {
    let xnCAaP = _modDef3849["1jqaAc"];
  } else if (flag2) {
    xnCAaP = _modDef3849.M4KI5F;
  } else if (flag3) {
    xnCAaP = items[0];
  } else {
    const tmp4 = _modDef3849;
    if (flag) {
      xnCAaP = tmp4.mKK6wB;
    } else if (compacting) {
      xnCAaP = tmp4.xnCAaP;
    } else {
      xnCAaP = tmp ? tmp4.izrt52 : tmp4.L9EDub;
    }
  }
  return xnCAaP;
}
const items = [_modDef3849["AX+5lk"], _modDef3849.VAU6A7, _modDef3849["1emysd"], _modDef3849.EXHX3L, _modDef3849.ChslmX];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureStatusLabels.tsx");

export const INDICATOR_PASS_MS = 1000;
export const INDICATOR_PASS_STAGGER_MS = 1800;
export const RECALLING_LINES = items;
export const recallingLine = function recallingLine(current) {
  const intl = util.intl;
  return intl.string(items[current % items.length]);
};
export const isRecallingLine = function isRecallingLine(current) {
  closure_0 = current;
  return items.some((item) => {
    const intl = util.intl;
    return intl.string(item) === closure_0;
  });
};
export const connectionLabel = function connectionLabel(stateFromStores8) {
  if ("connecting" === stateFromStores8) {
    const intl3 = util.intl;
    return intl3.string(_modDef3849["ECl+Dx"]);
  } else if ("closed" === stateFromStores8) {
    const intl2 = util.intl;
    return intl2.string(_modDef3849.mQZSp1);
  } else if ("failed" === stateFromStores8) {
    const intl = util.intl;
    return intl.string(_modDef3849.xzJSZ6);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(saving) {
  const intl = util.intl;
  return intl.string(thinkingLabel(saving));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  const runesFromUsdResult = ConjureTypes.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: null, aria: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(_modDef3849.gMuw5d, { runes: runesFromUsdResult.toLocaleString() });
  const intl2 = util.intl;
  obj2.aria = intl2.formatToPlainString(_modDef3849.Z4LvGa, { runes: runesFromUsdResult, turns: projectUsage.turns });
  return obj2;
};
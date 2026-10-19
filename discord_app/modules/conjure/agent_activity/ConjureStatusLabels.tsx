// === Module 12143: ConjureStatusLabels ===

// Module 12143 (ConjureStatusLabels)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10985 */;

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
  let flag3 = saving.remixing;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = saving.recalling;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = saving.controlling;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = saving.publishPending;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = saving.publishing;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let tmp = null != activity;
  if (tmp) {
    tmp = "end" !== activity.phase;
  }
  if (flag5) {
    let xnCAaP = _modDef3883["1jqaAc"];
  } else if (flag6) {
    xnCAaP = _modDef3883.xCdlEF;
  } else if (flag7) {
    xnCAaP = _modDef3883.Rhx0rn;
  } else if (flag2) {
    xnCAaP = _modDef3883.M4KI5F;
  } else if (flag3) {
    xnCAaP = _modDef3883.j8tmjK;
  } else if (flag4) {
    xnCAaP = items[0];
  } else {
    const tmp4 = _modDef3883;
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
const items = [_modDef3883["AX+5lk"], _modDef3883.VAU6A7, _modDef3883["1emysd"], _modDef3883.EXHX3L, _modDef3883.ChslmX];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureStatusLabels.tsx");

export const INDICATOR_PASS_MS = 1000;
export const INDICATOR_PASS_STAGGER_MS = 1800;
export const RECALLING_LINES = items;
export const isPublishLineSwitch = function isPublishLineSwitch(line, text) {
  const intl = util.intl;
  let tmp4 = line === intl.string(_modDef3883.xCdlEF);
  if (!tmp4) {
    const intl2 = util.intl;
    tmp4 = line === intl2.string(_modDef3883.Rhx0rn);
  }
  const intl3 = util.intl;
  let tmp5 = text === intl3.string(_modDef3883.xCdlEF);
  if (!tmp5) {
    const intl4 = util.intl;
    tmp5 = text === intl4.string(_modDef3883.Rhx0rn);
  }
  return tmp4 !== tmp5;
};
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
    return intl3.string(_modDef3883["ECl+Dx"]);
  } else if ("closed" === stateFromStores8) {
    const intl2 = util.intl;
    return intl2.string(_modDef3883.mQZSp1);
  } else if ("failed" === stateFromStores8) {
    const intl = util.intl;
    return intl.string(_modDef3883.xzJSZ6);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(saving) {
  const intl = util.intl;
  return intl.string(thinkingLabel(saving));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  const runesFromUsdResult = ConjureUsageTypes.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: null, aria: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(_modDef3883.gMuw5d, { runes: runesFromUsdResult.toLocaleString() });
  const intl2 = util.intl;
  obj2.aria = intl2.formatToPlainString(_modDef3883.Z4LvGa, { runes: runesFromUsdResult, turns: projectUsage.turns });
  return obj2;
};
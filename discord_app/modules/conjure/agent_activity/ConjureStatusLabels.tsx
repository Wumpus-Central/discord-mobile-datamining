// === Module 16740: ConjureStatusLabels ===

// Module 16740 (ConjureStatusLabels)
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ConjureTypes from "ConjureTypes" /* 6747 */;
import size from "module_2" /* 2 */;

function thinkingLabel(restoring) {
  let activity;
  let compacting;
  let xnCAaP;
  ({ activity, compacting } = restoring);
  if (compacting === undefined) {
    compacting = false;
  }
  let flag = restoring.restoring;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = restoring.recalling;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = restoring.controlling;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const tmp = null != activity && "end" !== activity.phase;
  if (flag3) {
    xnCAaP = _modDef3723["1jqaAc"];
  } else if (flag) {
    xnCAaP = _modDef3723.M4KI5F;
  } else if (flag2) {
    xnCAaP = items[0];
  } else {
    const tmp4 = _modDef3723;
    if (compacting) {
      xnCAaP = tmp4.xnCAaP;
    } else {
      xnCAaP = tmp ? tmp4.izrt52 : tmp4.L9EDub;
    }
  }
  return xnCAaP;
}
const items = [_modDef3723["AX+5lk"], _modDef3723.VAU6A7, _modDef3723["1emysd"], _modDef3723.EXHX3L, _modDef3723.ChslmX];
const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureStatusLabels.tsx");

export const INDICATOR_PASS_MS = 1000;
export const INDICATOR_PASS_STAGGER_MS = 1800;
export const RECALLING_LINES = items;
export const recallingLine = function recallingLine(current) {
  const intl = intl4.intl;
  return intl.string(items[current % items.length]);
};
export const isRecallingLine = function isRecallingLine(current) {
  let closure_0 = current;
  return items.some((item) => {
    const intl = intl4.intl;
    return intl.string(item) === current;
  });
};
export const connectionLabel = function connectionLabel(stateFromStores7) {
  if ("connecting" === stateFromStores7) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3723["ECl+Dx"]);
  } else if ("closed" === stateFromStores7) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3723.mQZSp1);
  } else if ("failed" === stateFromStores7) {
    const intl = intl4.intl;
    return intl.string(_modDef3723.xzJSZ6);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(restoring) {
  const intl = intl4.intl;
  return intl.string(thinkingLabel(restoring));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  let formatToPlainString;
  let gMuw5d;
  let intl2;
  let obj3;
  const obj = ConjureTypes;
  const runesFromUsdResult = obj.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: formatToPlainString(gMuw5d, obj3), aria: intl2.formatToPlainString(_modDef3723.Z4LvGa, obj4) };
  const intl = intl4.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { runes: runesFromUsdResult.toLocaleString() };
  gMuw5d = _modDef3723.gMuw5d;
  intl2 = intl4.intl;
  return obj2;
};
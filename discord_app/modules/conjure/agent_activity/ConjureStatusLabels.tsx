// discord_app/modules/conjure/agent_activity/ConjureStatusLabels.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import ConjureTypes from "../ConjureTypes.tsx";

require = fn;
function thinkingLabel(restoring) {
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
  let tmp = null != activity;
  if (tmp) {
    tmp = "end" !== activity.phase;
  }
  if (flag3) {
    let xnCAaP = _modDef3753["1jqaAc"];
  } else if (flag) {
    xnCAaP = _modDef3753.M4KI5F;
  } else if (flag2) {
    xnCAaP = items[0];
  } else {
    const tmp4 = _modDef3753;
    if (compacting) {
      xnCAaP = tmp4.xnCAaP;
    } else {
      xnCAaP = tmp ? tmp4.izrt52 : tmp4.L9EDub;
    }
  }
  return xnCAaP;
}
const items = [
  _modDef3753["AX+5lk"],
  _modDef3753.VAU6A7,
  _modDef3753["1emysd"],
  _modDef3753.EXHX3L,
  _modDef3753.ChslmX,
];
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
export const connectionLabel = function connectionLabel(stateFromStores7) {
  if ("connecting" === stateFromStores7) {
    const intl3 = util.intl;
    return intl3.string(_modDef3753["ECl+Dx"]);
  } else if ("closed" === stateFromStores7) {
    const intl2 = util.intl;
    return intl2.string(_modDef3753.mQZSp1);
  } else if ("failed" === stateFromStores7) {
    const intl = util.intl;
    return intl.string(_modDef3753.xzJSZ6);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(restoring) {
  const intl = util.intl;
  return intl.string(thinkingLabel(restoring));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  const runesFromUsdResult = ConjureTypes.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: null, aria: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(_modDef3753.gMuw5d, { runes: runesFromUsdResult.toLocaleString() });
  const intl2 = util.intl;
  obj2.aria = intl2.formatToPlainString(_modDef3753.Z4LvGa, { runes: runesFromUsdResult, turns: projectUsage.turns });
  return obj2;
};

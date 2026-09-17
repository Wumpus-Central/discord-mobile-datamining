// === Module 16818: VibegrationsStatusLabels ===

// Module 16818 (VibegrationsStatusLabels)
import util from "util" /* 1115 */;
import _modDef3593 from "module_3593" /* 3593 */;
import VibegrationsTypes from "VibegrationsTypes" /* 7359 */;
import size from "module_2" /* 2 */;

function thinkingLabel(restoring) {
  ({ activity, compacting } = restoring);
  if (compacting === undefined) {
    compacting = false;
  }
  let flag = restoring.restoring;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = restoring.controlling;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp = null != activity;
  if (tmp) {
    tmp = "end" !== activity.phase;
  }
  const tmp2 = _modDef3593;
  if (flag2) {
    let ivvYHP = tmp2.ivvYHP;
  } else if (flag) {
    ivvYHP = tmp2.aFffp2;
  } else if (compacting) {
    ivvYHP = tmp2["0vH/5G"];
  } else {
    ivvYHP = tmp ? tmp2.Ly7F7x : tmp2.QDGuNS;
  }
  return ivvYHP;
}
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsStatusLabels.tsx");

export const connectionLabel = function connectionLabel(stateFromStores6) {
  if ("connecting" === stateFromStores6) {
    const intl3 = util.intl;
    return intl3.string(_modDef3593.W7oyuf);
  } else if ("closed" === stateFromStores6) {
    const intl2 = util.intl;
    return intl2.string(_modDef3593["yBmS+I"]);
  } else if ("failed" === stateFromStores6) {
    const intl = util.intl;
    return intl.string(_modDef3593.eE60xI);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(restoring) {
  const intl = util.intl;
  const intl2 = util.intl;
  return "" + intl.string(_modDef3593.Xmvb23) + " " + intl2.string(thinkingLabel(restoring));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  const runesFromUsdResult = VibegrationsTypes.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: null, aria: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(_modDef3593["4PFO2p"], { runes: runesFromUsdResult.toLocaleString() });
  const intl2 = util.intl;
  obj2.aria = intl2.formatToPlainString(_modDef3593["7SZZvj"], { runes: runesFromUsdResult, turns: projectUsage.turns });
  return obj2;
};
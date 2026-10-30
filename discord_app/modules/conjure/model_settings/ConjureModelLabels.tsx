// === Module 12474: ConjureModelLabels ===

// Module 12474 (ConjureModelLabels)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3865["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef3865.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef3865.FxoUwB;
  } else {
    return null;
  }
}
export function tierTooltip(title, arg1) {
  if ("simple" === arg1) {
    let prop = _modDef3865["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef3865.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef3865.FxoUwB;
    }
  }
  if (null != prop) {
    const obj2 = { title, body: null };
    const intl = util.intl;
    obj2.body = intl.string(prop);
    let obj = obj2;
  } else {
    obj = { body: title };
  }
  return obj;
}
export const THINKING_LABELS = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
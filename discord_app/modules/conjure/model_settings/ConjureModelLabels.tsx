// === Module 18381: ConjureModelLabels ===

// Module 18381 (ConjureModelLabels)
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef4121["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef4121.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef4121.FxoUwB;
  } else {
    return null;
  }
}
export function tierTooltip(title, arg1) {
  if ("simple" === arg1) {
    let prop = _modDef4121["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef4121.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef4121.FxoUwB;
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
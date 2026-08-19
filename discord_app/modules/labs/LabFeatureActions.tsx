// === Module 14843: toggleLabFeature ===

// Module 14843 (toggleLabFeature)
import dispatcherDefault from "dispatcher" /* 709 */;
import getUserAgnosticState from "getUserAgnosticState" /* 9059 */;

let closure_3 = {};
const result = require("obj132").fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export const toggleLabFeature = function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !closure_2.get(ICYMI_LAB_FEATURE);
  }
  const obj = { type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled };
  obj.dispatch(obj);
};
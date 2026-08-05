// discord_app/modules/labs/LabFeatureActions.tsx
import getUserAgnosticState from "getUserAgnosticState";
import { dispatcher } from "../../Dispatcher.tsx";

let closure_3 = {};
const result = require("set").fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export const toggleLabFeature = function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !getUserAgnosticState.get(ICYMI_LAB_FEATURE);
  }
  let obj = dispatcher;
  obj = { type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled };
  obj.dispatch(obj);
};
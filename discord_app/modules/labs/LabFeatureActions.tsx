// discord_app/modules/labs/LabFeatureActions.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import LabFeatureStore from "LabFeatureStore.tsx";

let closure_3 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export function toggleLabFeature(NATIVE_MARKDOWN_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !LabFeatureStore.get(NATIVE_MARKDOWN_LAB_FEATURE);
  }
  DispatcherDefault.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: NATIVE_MARKDOWN_LAB_FEATURE, enabled });
  const obj2 = { type: "LAB_FEATURE_TOGGLE", labFeature: NATIVE_MARKDOWN_LAB_FEATURE, enabled };
}

// === Module 13256: ConjureModelSettingsSheet ===

// Module 13256 (ConjureModelSettingsSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 7392 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7913 */;
import ActionSheet from "ActionSheet" /* 7951 */;
import useConjureModelSettingsDraftDefault from "useConjureModelSettingsDraft" /* 13257 */;
import ConjureEffortPickerDefault from "ConjureEffortPicker" /* 13258 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7365 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 7375 */;

require = fn;
class ConjureModelSettingsContent {
  constructor(arg0) {
    projectId = global.projectId;
    obj = projectId(closure_2[6]);
    items = [];
    items[0] = closure_7;
    items1 = [];
    items1[0] = projectId;
    stateFromStores = obj.useStateFromStores(items, () => ConjureModelSettingsStore.getModelSettings(projectId), items1);
    tierSettings = undefined;
    if (stateFromStores != null) {
      tierSettings = stateFromStores.tierSettings;
    }
    tmp3 = null;
    if (null != tierSettings) {
      tmp4 = jsx;
      tmp5 = ModelSettingsPicker;
      obj1 = { projectId: null, modelSettings: null, tierSettings: null };
      obj1.projectId = projectId;
      obj1.modelSettings = stateFromStores;
      obj1.tierSettings = stateFromStores.tierSettings;
      tmp3 = jsx(ModelSettingsPicker, obj1);
    }
    return tmp3;
  }
}
function ModelSettingsPicker(projectId) {
  projectId = projectId.projectId;
  const modelSettings = projectId.modelSettings;
  items = [ConjureConnectionStore];
  const items1 = [projectId];
  const tmp = "open" !== projectId(504).useStateFromStores(items, () => ConjureConnectionStore.getConnState(projectId), items1);
  const items2 = [projectId];
  const callback = noop.useCallback((arg0) => conjureModelSettingsConnection.sendModelSettings(projectId, arg0), items2);
  const obj = projectId(504);
  [tmp4, tmp5] = useConjureModelSettingsDraftDefault(projectId.tierSettings, callback);
  const obj2 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
  const items3 = [closure_8(ConjureEffortPickerDefault, { settings: tmp4, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: tmp, onChange: tmp5 }), ];
  const intl = projectId(1113).intl;
  const string = intl.string;
  const tmp8 = _modDef4131;
  if (tmp) {
    let stringResult = string(tmp8.GxpdUR);
  } else {
    stringResult = string(tmp8["/rJzr6"]);
  }
  items3[1] = closure_8(projectId(5929).Text, { variant: "body-xs/normal", color: "text-muted", children: stringResult });
  obj2.children = items3;
  return closure_9(projectId(6337).Stack, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default function ConjureModelSettingsSheet(projectId) {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef4131["3E7Yc0"]);
  obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = React5(View, { children: React5(ConjureModelSettingsContent, { projectId: projectId.projectId }) });
  return React5(ActionSheet.ActionSheet, obj);
};
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export { ConjureModelSettingsContent };
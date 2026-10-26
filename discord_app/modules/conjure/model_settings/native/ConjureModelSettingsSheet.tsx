// === Module 12198: ConjureModelSettingsSheet ===

// Module 12198 (ConjureModelSettingsSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheet from "ActionSheet" /* 7298 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 10738 */;
import useConjureModelSettingsDraftDefault from "useConjureModelSettingsDraft" /* 12199 */;
import ConjureEffortPickerDefault from "ConjureEffortPicker" /* 12200 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10712 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModelSettingsContent(projectId) {
  const cResult = projectId(576).c(7);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureModelSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function o() {
      return ConjureModelSettingsStore.getModelSettings(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = projectId(576);
  const stateFromStores = projectId(504).useStateFromStores(first, tmp6, tmp7);
  let tierSettings;
  if (stateFromStores != null) {
    tierSettings = stateFromStores.tierSettings;
  }
  if (null == tierSettings) {
    return null;
  } else {
    if (cResult[4] === stateFromStores) {
    }
    const obj2 = { projectId, modelSettings: stateFromStores, tierSettings: stateFromStores.tierSettings };
    const tmp13 = closure_8(closure_11, obj2);
    cResult[4] = stateFromStores;
    cResult[5] = projectId;
    cResult[6] = tmp13;
  }
  const tmpResult = projectId(504);
}) : (function ConjureModelSettingsContent(projectId) {
  projectId = projectId.projectId;
  const items = [ConjureModelSettingsStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureModelSettingsStore.getModelSettings(projectId), items1);
  let tierSettings;
  if (stateFromStores != null) {
    tierSettings = stateFromStores.tierSettings;
  }
  let tmp3 = null;
  if (null != tierSettings) {
    const obj2 = { projectId, modelSettings: stateFromStores, tierSettings: stateFromStores.tierSettings };
    tmp3 = closure_8(closure_11, obj2);
  }
  return tmp3;
});
let closure_10 = tmp3;
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ModelSettingsPicker(projectId) {
  const cResult = projectId(576).c(19);
  projectId = projectId.projectId;
  const modelSettings = projectId.modelSettings;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function c() {
      return ConjureConnectionStore.getConnState(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = projectId(576);
  const stateFromStores = projectId(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== projectId) {
    const fn2 = function _(arg0) {
      return conjureModelSettingsConnection.sendModelSettings(projectId, arg0);
    };
    cResult[4] = projectId;
    cResult[5] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  const tmpResult = projectId(504);
  [tmp13, tmp14] = useConjureModelSettingsDraftDefault(projectId.tierSettings, tmp9);
  if (cResult[6] === tmp13) {
    if (cResult[7] === tmp10) {
      if (cResult[8] === modelSettings.choices) {
        if (cResult[9] === modelSettings.tiers) {
          if (cResult[10] === tmp14) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] !== tmp10) {
            const intl = tmp(1128).intl;
            const string = intl.string;
            let GxpdUR = _modDef3830;
            if (tmp10) {
              GxpdUR = GxpdUR.GxpdUR;
              let stringResult = string(GxpdUR);
            } else {
              stringResult = string(GxpdUR["/rJzr6"]);
            }
            cResult[12] = tmp10;
            cResult[13] = stringResult;
          } else {
            if (cResult[14] !== cResult[13]) {
              const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp17 };
              const tmp22 = closure_8(tmp(5234).Text, obj2);
              cResult[14] = tmp17;
              cResult[15] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[15];
            }
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp20) {
                let tmp23 = cResult[18];
              }
              return tmp23;
            }
            const obj3 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
            const items2 = [tmp15, tmp20];
            obj3.children = items2;
            const tmp25 = closure_9(tmp(5977).Stack, obj3);
            cResult[16] = tmp15;
            cResult[17] = tmp20;
            cResult[18] = tmp25;
            tmp23 = tmp25;
          }
        }
      }
    }
  }
  const tmp16 = closure_8(ConjureEffortPickerDefault, { settings: tmp13, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: "open" !== stateFromStores, onChange: tmp14 });
  cResult[6] = tmp13;
  cResult[7] = "open" !== stateFromStores;
  cResult[8] = modelSettings.choices;
  cResult[9] = modelSettings.tiers;
  cResult[10] = tmp14;
  cResult[11] = tmp16;
  tmp15 = tmp16;
  const obj4 = { settings: tmp13, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: "open" !== stateFromStores, onChange: tmp14 };
  const tmp12 = _slicedToArray(useConjureModelSettingsDraftDefault(projectId.tierSettings, tmp9), 2);
}) : (function ModelSettingsPicker(projectId) {
  projectId = projectId.projectId;
  const modelSettings = projectId.modelSettings;
  const items = [ConjureConnectionStore];
  const items1 = [projectId];
  const tmp = "open" !== projectId(504).useStateFromStores(items, () => ConjureConnectionStore.getConnState(projectId), items1);
  const items2 = [projectId];
  const callback = noop.useCallback((arg0) => conjureModelSettingsConnection.sendModelSettings(projectId, arg0), items2);
  const obj = projectId(504);
  [tmp4, tmp5] = useConjureModelSettingsDraftDefault(projectId.tierSettings, callback);
  const obj2 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
  const items3 = [closure_8(ConjureEffortPickerDefault, { settings: tmp4, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: tmp, onChange: tmp5 }), ];
  const intl = projectId(1128).intl;
  const string = intl.string;
  const tmp8 = _modDef3830;
  if (tmp) {
    let stringResult = string(tmp8.GxpdUR);
  } else {
    stringResult = string(tmp8["/rJzr6"]);
  }
  items3[1] = closure_8(projectId(5234).Text, { variant: "text-xs/normal", color: "text-muted", children: stringResult });
  obj2.children = items3;
  return closure_9(projectId(5977).Stack, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModelSettingsSheet(projectId) {
  const cResult = c.c(3);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3830["3E7Yc0"]);
    const tmp7 = closure_1_8(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const obj3 = { header: first, children: null };
    const obj4 = { children: null };
    const obj5 = { projectId };
    obj4.children = closure_1_8(closure_10, obj5);
    obj3.children = closure_1_8(View, obj4);
    const tmp12 = closure_1_8(ActionSheet.ActionSheet, obj3);
    cResult[1] = projectId;
    cResult[2] = tmp12;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function ConjureModelSettingsSheet(projectId) {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3830["3E7Yc0"]);
  obj.header = closure_1_8(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = closure_1_8(View, { children: closure_1_8(closure_10, { projectId: projectId.projectId }) });
  return closure_1_8(ActionSheet.ActionSheet, obj);
});
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export const ConjureModelSettingsContent = tmp3;
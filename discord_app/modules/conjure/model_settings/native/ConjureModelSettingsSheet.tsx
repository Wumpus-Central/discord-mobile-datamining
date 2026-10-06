// === Module 16618: ConjureModelSettingsSheet ===

// Module 16618 (ConjureModelSettingsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import ConjureConnectionStore2 from "ConjureConnectionStore" /* 12923 */;
import ConjureEffortPickerDefault from "ConjureEffortPicker" /* 16596 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureConnectionStore = ConjureConnectionStore2;
let projectId;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const sendModelSettings = ConjureConnectionStore2.sendModelSettings;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let choices;
  let first;
  let tiers;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = projectId(576);
  const cResult = obj.c(27);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureConnectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function c() {
      return ConjureConnectionStore.getModelSettings(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureConnectionStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    const fn2 = function v() {
      return ConjureConnectionStore.getConnState(projectId);
    };
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult3 = projectId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [ConjureConnectionStore];
    cResult[8] = items4;
    tmp14 = items4;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    const fn3 = function x() {
      return ConjureConnectionStore.isChatStopped(projectId);
    };
    const items5 = [projectId];
    cResult[9] = projectId;
    cResult[10] = fn3;
    cResult[11] = items5;
    tmp17 = items5;
    tmp16 = fn3;
  } else {
    tmp16 = cResult[10];
    tmp17 = cResult[11];
  }
  const tmpResult4 = projectId(504);
  const tmp18 = "open" !== stateFromStores1 || tmpResult4.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[12] !== projectId) {
    class I {
      constructor(arg0) {
        try {
          sendModelSettings(projectId, arg0);
        } catch (err) {
        }
      }
    }
    cResult[12] = projectId;
    cResult[13] = I;
  } else {
    class I {
      constructor(arg0) {
        try {
          sendModelSettings(projectId, arg0);
        } catch (err) {
        }
      }
    }
  }
  if (stateFromStores != null) {
    class I {
      constructor(arg0) {
        try {
          sendModelSettings(projectId, arg0);
        } catch (err) {
        }
      }
    }
  }
  if (null == undefined) {
    class I {
      constructor(arg0) {
        try {
          sendModelSettings(projectId, arg0);
        } catch (err) {
        }
      }
    }
  } else {
    class I {
      constructor(arg0) {
        try {
          sendModelSettings(projectId, arg0);
        } catch (err) {
        }
      }
    }
    ({ tiers, choices } = stateFromStores);
    if (cResult[14] === choices) {
      class I {
        constructor(arg0) {
          try {
            sendModelSettings(projectId, arg0);
          } catch (err) {
          }
        }
      }
    }
    const obj2 = { settings: tmp24, tiers, choices, disabled: tmp18, onChange: I };
    cResult[14] = choices;
    cResult[15] = tmp18;
    cResult[16] = I;
    cResult[17] = tmp24;
    cResult[18] = tiers;
    cResult[19] = closure_7(ConjureEffortPickerDefault, obj2);
    const tmp23 = closure_7(ConjureEffortPickerDefault, obj2);
  }
}) : ((projectId) => {
  let choices;
  let items7;
  let tierSettings;
  let tiers;
  projectId = projectId.projectId;
  const items = [ConjureConnectionStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureConnectionStore.getModelSettings(projectId), items1);
  const items2 = [ConjureConnectionStore];
  const items3 = [projectId];
  const obj2 = projectId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ConjureConnectionStore.getConnState(projectId), items3);
  const items4 = [ConjureConnectionStore];
  const items5 = [projectId];
  const obj3 = projectId(504);
  const tmp5 = "open" !== stateFromStores1 || obj3.useStateFromStores(items4, () => ConjureConnectionStore.isChatStopped(projectId), items5);
  const items6 = [projectId];
  let tierSettings1;
  const callback = react.useCallback((arg0) => {
    try {
      sendModelSettings(projectId, arg0);
    } catch (err) {
    }
  }, items6);
  if (stateFromStores != null) {
    tierSettings1 = stateFromStores.tierSettings;
  }
  if (null == tierSettings1) {
    return null;
  } else {
    let stringResult;
    ({ tierSettings, tiers, choices } = stateFromStores);
    const obj4 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: items7 };
    const Stack = tmp(5600).Stack;
    const obj5 = { settings: tierSettings, tiers, choices, disabled: tmp5, onChange: callback };
    items7 = [closure_7(ConjureEffortPickerDefault, obj5), ];
    const Text = tmp(4892).Text;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const tmp12 = _modDef3753;
    if (tmp5) {
      stringResult = string(tmp12.GxpdUR);
    } else {
      stringResult = string(tmp12["/rJzr6"]);
    }
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
    items7[1] = closure_7(Text, obj6);
    return closure_8(Stack, obj4);
  }
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let first;
  let intl;
  let obj4;
  let obj5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef3753["3E7Yc0"]) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl2.intl;
    const tmp7 = metroImportDefault(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const obj3 = { header: first, children: metroImportDefault(View, obj4) };
    obj4 = { children: metroImportDefault(closure_9, obj5) };
    obj5 = { projectId };
    const ActionSheet = ActionSheet2.ActionSheet;
    const tmp12 = metroImportDefault(ActionSheet, obj3);
    cResult[1] = projectId;
    cResult[2] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let intl;
  let obj2;
  let obj3;
  projectId = projectId.projectId;
  const obj = { header: metroImportDefault(BottomSheetTitleHeader, obj2), children: metroImportDefault(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3753["3E7Yc0"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  obj3 = { children: metroImportDefault(closure_9, { projectId }) };
  return metroImportDefault(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default tmp4;
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export const ConjureModelSettingsContent = tmp3;
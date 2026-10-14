// discord_app/modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import conjureModelSettingsConnection from "../conjureModelSettingsConnection.tsx";
import ConjureEffortPickerDefault from "ConjureEffortPicker.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureModelSettingsStore from "../ConjureModelSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureModelSettingsContent(projectId) {
      const cResult = projectId(576).c(23);
      projectId = projectId.projectId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureModelSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function c() {
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
      let obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureConnectionStore];
        cResult[4] = items2;
        let tmp9 = items2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== projectId) {
        const fn2 = function j() {
          return ConjureConnectionStore.getConnState(projectId);
        };
        const items3 = [projectId];
        cResult[5] = projectId;
        cResult[6] = fn2;
        cResult[7] = items3;
        let tmp12 = items3;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const tmpResult = projectId(504);
      const stateFromStores1 = projectId(504).useStateFromStores(tmp9, tmp11, tmp12);
      if (cResult[8] !== projectId) {
        const fn3 = function f(arg0) {
          try {
            conjureModelSettingsConnection.sendModelSettings(projectId, arg0);
          } catch (err) {}
        };
        cResult[8] = projectId;
        cResult[9] = fn3;
        let tmp14 = fn3;
      } else {
        tmp14 = cResult[9];
      }
      let tierSettings1;
      if (stateFromStores != null) {
        tierSettings1 = stateFromStores.tierSettings;
      }
      if (null == tierSettings1) {
        return null;
      } else {
        ({ tierSettings, tiers, choices } = stateFromStores);
        if (cResult[10] === choices) {
          if (cResult[11] === tmp31) {
            if (cResult[12] === tmp14) {
              if (cResult[13] === tierSettings) {
                if (cResult[14] === tiers) {
                  let tmp16 = cResult[15];
                }
                if (cResult[16] !== tmp31) {
                  const intl = tmp(1126).intl;
                  const string = intl.string;
                  let GxpdUR = _modDef3849;
                  if (tmp31) {
                    GxpdUR = GxpdUR.GxpdUR;
                    let stringResult = string(GxpdUR);
                  } else {
                    stringResult = string(GxpdUR["/rJzr6"]);
                  }
                  cResult[16] = tmp31;
                  cResult[17] = stringResult;
                } else {
                  if (cResult[18] !== cResult[17]) {
                    const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp20 };
                    const tmp26 = closure_7(tmp(5092).Text, obj2);
                    cResult[18] = tmp20;
                    cResult[19] = tmp26;
                    let tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === tmp24) {
                    if (cResult[21] === tmp16) {
                      let tmp27 = cResult[22];
                    }
                    return tmp27;
                  }
                  const obj3 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
                  const items4 = [tmp16, tmp24];
                  obj3.children = items4;
                  const tmp30 = closure_8(tmp(5382).Stack, obj3);
                  cResult[20] = tmp24;
                  cResult[21] = tmp16;
                  cResult[22] = tmp30;
                  tmp27 = tmp30;
                }
              }
            }
          }
        }
        const obj4 = { settings: tierSettings, tiers, choices, disabled: "open" !== stateFromStores1, onChange: tmp14 };
        const tmp19 = closure_7(ConjureEffortPickerDefault, obj4);
        cResult[10] = choices;
        cResult[11] = "open" !== stateFromStores1;
        cResult[12] = tmp14;
        cResult[13] = tierSettings;
        cResult[14] = tiers;
        cResult[15] = tmp19;
        tmp16 = tmp19;
      }
      const tmpResult2 = projectId(504);
    }
  : function ConjureModelSettingsContent(projectId) {
      projectId = projectId.projectId;
      const items = [ConjureModelSettingsStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureModelSettingsStore.getModelSettings(projectId),
        items1,
      );
      let obj = projectId(504);
      const items2 = [ConjureConnectionStore];
      const items3 = [projectId];
      const items4 = [projectId];
      const stateFromStores1 = projectId(504).useStateFromStores(
        items2,
        () => ConjureConnectionStore.getConnState(projectId),
        items3,
      );
      let tierSettings1;
      const callback = noop.useCallback((arg0) => {
        try {
          conjureModelSettingsConnection.sendModelSettings(projectId, arg0);
        } catch (err) {}
      }, items4);
      if (stateFromStores != null) {
        tierSettings1 = stateFromStores.tierSettings;
      }
      if (null == tierSettings1) {
        return null;
      } else {
        ({ tierSettings, tiers, choices } = stateFromStores);
        const obj3 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
        const obj4 = {
          settings: tierSettings,
          tiers,
          choices,
          disabled: "open" !== stateFromStores1,
          onChange: callback,
        };
        const items5 = [closure_7(ConjureEffortPickerDefault, obj4)];
        const intl = tmp(1126).intl;
        const string = intl.string;
        const tmp12 = _modDef3849;
        if ("open" !== stateFromStores1) {
          let stringResult = string(tmp12.GxpdUR);
        } else {
          stringResult = string(tmp12["/rJzr6"]);
        }
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
        items5[1] = closure_7(tmp(5092).Text, obj5);
        obj3.children = items5;
        return closure_8(tmp(5382).Stack, obj3);
      }
      const obj2 = projectId(504);
    };
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureModelSettingsSheet(projectId) {
      const cResult = c.c(3);
      projectId = projectId.projectId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = util.intl;
        obj2.title = intl.string(_modDef3849["3E7Yc0"]);
        const tmp7 = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const obj3 = { header: first, children: null };
        const obj4 = { children: null };
        const obj5 = { projectId };
        obj4.children = React5(closure_9, obj5);
        obj3.children = React5(View, obj4);
        const tmp12 = React5(ActionSheet.ActionSheet, obj3);
        cResult[1] = projectId;
        cResult[2] = tmp12;
        let tmp8 = tmp12;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : function ConjureModelSettingsSheet(projectId) {
      const obj = { header: null, children: null };
      const obj2 = { title: null };
      const intl = util.intl;
      obj2.title = intl.string(_modDef3849["3E7Yc0"]);
      obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
      obj.children = React5(View, { children: React5(closure_9, { projectId: projectId.projectId }) });
      return React5(ActionSheet.ActionSheet, obj);
    };
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export const ConjureModelSettingsContent = tmp3;

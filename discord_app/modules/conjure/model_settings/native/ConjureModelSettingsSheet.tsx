// discord_app/modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ConjureEffortPickerDefault from "ConjureEffortPicker.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";

require = fn;
const View = fn(17).View;
const sendModelSettings = fn(13072).sendModelSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureModelSettingsContent(projectId) {
      const cResult = projectId(576).c(27);
      projectId = projectId.projectId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureConnectionStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureConnectionStore];
        cResult[4] = items2;
        let tmp9 = items2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== projectId) {
        const fn2 = function _() {
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
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [ConjureConnectionStore];
        cResult[8] = items4;
        let tmp14 = items4;
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
        let tmp17 = items5;
        let tmp16 = fn3;
      } else {
        tmp16 = cResult[10];
        tmp17 = cResult[11];
      }
      const tmpResult3 = projectId(504);
      const tmp18 = "open" !== stateFromStores1 || projectId(504).useStateFromStores(tmp14, tmp16, tmp17);
      if (cResult[12] !== projectId) {
        class E {
          constructor(arg0) {
            try {
              tmp = projectId;
              tmp2 = sendModelSettings;
              tmp3 = projectId;
              tmp4 = sendModelSettings(projectId, projectId);
              return;
            } catch (err) {}
            return;
          }
        }
        cResult[12] = projectId;
        cResult[13] = E;
      } else {
        class E {
          constructor(arg0) {
            try {
              tmp = projectId;
              tmp2 = sendModelSettings;
              tmp3 = projectId;
              tmp4 = sendModelSettings(projectId, projectId);
              return;
            } catch (err) {}
            return;
          }
        }
      }
      if (stateFromStores != null) {
        class E {
          constructor(arg0) {
            try {
              tmp = projectId;
              tmp2 = sendModelSettings;
              tmp3 = projectId;
              tmp4 = sendModelSettings(projectId, projectId);
              return;
            } catch (err) {}
            return;
          }
        }
      }
      if (null == undefined) {
        class E {
          constructor(arg0) {
            try {
              tmp = projectId;
              tmp2 = sendModelSettings;
              tmp3 = projectId;
              tmp4 = sendModelSettings(projectId, projectId);
              return;
            } catch (err) {}
            return;
          }
        }
      } else {
        class E {
          constructor(arg0) {
            try {
              tmp = projectId;
              tmp2 = sendModelSettings;
              tmp3 = projectId;
              tmp4 = sendModelSettings(projectId, projectId);
              return;
            } catch (err) {}
            return;
          }
        }
        ({ tiers, choices } = stateFromStores);
        if (cResult[14] === choices) {
          class E {
            constructor(arg0) {
              try {
                tmp = projectId;
                tmp2 = sendModelSettings;
                tmp3 = projectId;
                tmp4 = sendModelSettings(projectId, projectId);
                return;
              } catch (err) {}
              return;
            }
          }
        }
        const obj2 = { settings: tmp24, tiers, choices, disabled: tmp18, onChange: E };
        const tmp23 = closure_7(ConjureEffortPickerDefault, obj2);
        cResult[14] = choices;
        cResult[15] = tmp18;
        cResult[16] = E;
        cResult[17] = tmp24;
        cResult[18] = tiers;
        cResult[19] = tmp23;
      }
      const tmpResult4 = projectId(504);
    }
  : function ConjureModelSettingsContent(projectId) {
      projectId = projectId.projectId;
      const items = [ConjureConnectionStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureConnectionStore.getModelSettings(projectId),
        items1,
      );
      const obj = projectId(504);
      const items2 = [ConjureConnectionStore];
      const items3 = [projectId];
      const stateFromStores1 = projectId(504).useStateFromStores(
        items2,
        () => ConjureConnectionStore.getConnState(projectId),
        items3,
      );
      const obj2 = projectId(504);
      const items4 = [ConjureConnectionStore];
      const items5 = [projectId];
      const tmp5 =
        "open" !== stateFromStores1 ||
        projectId(504).useStateFromStores(items4, () => ConjureConnectionStore.isChatStopped(projectId), items5);
      const items6 = [projectId];
      let tierSettings1;
      const callback = noop.useCallback((arg0) => {
        try {
          sendModelSettings(projectId, arg0);
        } catch (err) {}
      }, items6);
      if (stateFromStores != null) {
        tierSettings1 = stateFromStores.tierSettings;
      }
      if (null == tierSettings1) {
        return null;
      } else {
        ({ tierSettings, tiers, choices } = stateFromStores);
        const obj4 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
        const obj5 = { settings: tierSettings, tiers, choices, disabled: tmp5, onChange: callback };
        const items7 = [closure_7(ConjureEffortPickerDefault, obj5)];
        const intl = tmp(1126).intl;
        const string = intl.string;
        const tmp12 = _modDef3827;
        if (tmp5) {
          let stringResult = string(tmp12.GxpdUR);
        } else {
          stringResult = string(tmp12["/rJzr6"]);
        }
        const obj6 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
        items7[1] = closure_7(tmp(5086).Text, obj6);
        obj4.children = items7;
        return closure_8(tmp(5373).Stack, obj4);
      }
      const obj3 = projectId(504);
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
        obj2.title = intl.string(_modDef3827["3E7Yc0"]);
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
      obj2.title = intl.string(_modDef3827["3E7Yc0"]);
      obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
      obj.children = React5(View, { children: React5(closure_9, { projectId: projectId.projectId }) });
      return React5(ActionSheet.ActionSheet, obj);
    };
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export const ConjureModelSettingsContent = tmp3;

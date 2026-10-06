// discord_app/modules/conjure/settings/native/ConjureSettingsRequestCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureSettingsSheet from "ConjureSettingsSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ConjureSettingsSheetDefault = ConjureSettingsSheet;
let projectId;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { card: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let intl;
      let items;
      let tmp = projectId;
      let obj = projectId(576);
      const cResult = obj.c(16);
      projectId = projectId.projectId;
      const request = projectId.request;
      const tmp4 = closure_7();
      if (cResult[0] === projectId) {
        if (cResult[1] === request.keys) {
          let tmp5;
          let tmp7;
          let tmp11;
          let tmp14;
          let tmp17;
          let tmp20;
          if (cResult[2] === request.note) {
            tmp5 = cResult[3];
          }
          const _Symbol = Symbol;
          const card = tmp4.card;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: intl.string(request(3753)["jZjP+I"]),
            };
            const Text = tmp(4892).Text;
            intl = tmp(1126).intl;
            const tmp10 = closure_5(Text, obj2);
            cResult[4] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[4];
          }
          if (cResult[5] !== request.note) {
            if (null != request.note) {
              let note;
              if ("" !== request.note) {
                note = request.note;
              }
              cResult[5] = request.note;
              cResult[6] = note;
              tmp11 = note;
            }
            const intl2 = tmp(1126).intl;
            note = intl2.string(request(3753).XuOf5s);
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== tmp11) {
            const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp11 };
            const tmp16 = closure_5(tmp(4892).Text, obj3);
            cResult[7] = tmp11;
            cResult[8] = tmp16;
            tmp14 = tmp16;
          } else {
            tmp14 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult = intl3.string(request(3753).d49riY);
            cResult[9] = stringResult;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] !== tmp5) {
            const obj4 = { variant: "secondary", size: "sm", onPress: tmp5, text: tmp17 };
            const tmp22 = closure_5(tmp(5601).Button, obj4);
            cResult[10] = tmp5;
            cResult[11] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] === tmp4.card) {
            if (cResult[13] === tmp14) {
              let tmp23;
              if (cResult[14] === tmp20) {
                tmp23 = cResult[15];
              }
              return tmp23;
            }
          }
          const obj5 = { style: card, children: items };
          items = [tmp7, tmp14, tmp20];
          const tmp26 = closure_6(View, obj5);
          cResult[12] = tmp4.card;
          cResult[13] = tmp14;
          cResult[14] = tmp20;
          cResult[15] = tmp26;
          tmp23 = tmp26;
        }
      }
      const fn = function o() {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          content: hasOwnProperty(ConjureSettingsSheetDefault, obj2),
          key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
        };
        obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true };
        showActionSheet(obj);
      };
      cResult[0] = projectId;
      cResult[1] = request.keys;
      cResult[2] = request.note;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (projectId) => {
      let intl;
      let intl3;
      projectId = projectId.projectId;
      const request = projectId.request;
      const items = [projectId, request];
      let tmp = closure_7();
      let obj = { style: tmp.card, children: null };
      const callback = react.useCallback(() => {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          content: hasOwnProperty(ConjureSettingsSheetDefault, obj2),
          key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
        };
        obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true };
        showActionSheet(obj);
      }, items);
      let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(3753)["jZjP+I"]) };
      const Text = projectId(4892).Text;
      intl = projectId(1126).intl;
      const items1 = [closure_5(Text, obj2), ,];
      if (null != request.note) {
        let note;
        if ("" !== request.note) {
          note = request.note;
        }
        const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
        items1[1] = closure_5(tmp9, obj3);
        const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: intl3.string(request(3753).d49riY) };
        const Button = tmp6(5601).Button;
        intl3 = tmp6(1126).intl;
        items1[2] = closure_5(Button, obj4);
        obj.children = items1;
        return closure_6(View, obj);
      }
      const intl2 = tmp6(1126).intl;
      note = intl2.string(tmp8(3753).XuOf5s);
    };
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default tmp3;

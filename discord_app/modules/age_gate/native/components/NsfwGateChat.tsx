// discord_app/modules/age_gate/native/components/NsfwGateChat.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../../_runtime/12330_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, Image: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, border: obj3, description: { marginTop: 16, textAlign: "center" } };
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
createStyles = createStyles.createStyles;
obj3 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      let tmp14;
      let tmp16;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(12);
      const tmp4 = closure_8();
      if (cResult[0] !== tmp4.border) {
        const obj2 = { style: tmp4.border };
        const tmp8 = hasOwnProperty(_false, obj2);
        cResult[0] = tmp4.border;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      const container = tmp4.container;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { source: AssetRegistryDefault };
        const tmp13 = hasOwnProperty(React3, obj3);
        cResult[2] = tmp13;
        tmp9 = tmp13;
      } else {
        tmp9 = cResult[2];
      }
      const description = tmp4.description;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.W4Qyxr);
        cResult[3] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== tmp4.description) {
        const obj4 = { style: description, variant: "text-md/medium", color: "text-muted", children: tmp14 };
        const tmp18 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[4] = tmp4.description;
        cResult[5] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        let tmp19;
        if (cResult[7] === tmp16) {
          tmp19 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          let tmp21;
          if (cResult[10] === tmp19) {
            tmp21 = cResult[11];
          }
          return tmp21;
        }
        const obj5 = { children: items };
        items = [tmp5, tmp19];
        const tmp24 = metroRequire(metroImportDefault, obj5);
        cResult[9] = tmp5;
        cResult[10] = tmp19;
        cResult[11] = tmp24;
        tmp21 = tmp24;
      }
      const obj6 = { style: container, children: items1 };
      items1 = [tmp9, tmp16];
      const tmp20 = metroRequire(_false, obj6);
      cResult[6] = tmp4.container;
      cResult[7] = tmp16;
      cResult[8] = tmp20;
      tmp19 = tmp20;
    }
  : () => {
      let intl;
      let items;
      let items1;
      const tmp = closure_8();
      const obj = { children: items };
      items = [,];
      const obj2 = { style: tmp.border };
      items[0] = hasOwnProperty(_false, obj2);
      const obj3 = { style: tmp.container, children: items1 };
      items1 = [,];
      const obj4 = { source: AssetRegistryDefault };
      items1[0] = hasOwnProperty(React3, obj4);
      const obj5 = {
        style: tmp.description,
        variant: "text-md/medium",
        color: "text-muted",
        children: intl.string(intl2.t.W4Qyxr),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items1[1] = hasOwnProperty(Text, obj5);
      items[1] = metroRequire(_false, obj3);
      return metroRequire(metroImportDefault, obj);
    };
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default tmp6;

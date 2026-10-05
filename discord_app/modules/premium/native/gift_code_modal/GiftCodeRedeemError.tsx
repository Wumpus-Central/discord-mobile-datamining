// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Link from "../../../../../_runtime/01491_Link.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import AssetRegistryDefault from "../../../../../_runtime/11113_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/11114_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let message;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ Image: c3, View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  container: obj2,
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 28,
    paddingBottom: 12,
    paddingHorizontal: 32,
  },
  header: { marginTop: 32, textAlign: "center" },
  message: { marginTop: 8, textAlign: "center" },
  footer: { paddingHorizontal: 24 },
};
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let body;
      let container;
      let items;
      let items1;
      let tmp11;
      let tmp13;
      let tmp5Result;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(21);
      message = message.message;
      const tmp4 = closure_8();
      ({ container, body } = tmp4);
      const obj2 = Link;
      if (obj2.useTheme().dark) {
        tmp5Result = AssetRegistryDefault;
      } else {
        tmp5Result = AssetRegistryDefault2;
      }
      if (cResult[0] !== tmp5Result) {
        const obj3 = { source: tmp5Result };
        const tmp10 = metroRequire(_false, obj3);
        cResult[0] = tmp5Result;
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      const header = tmp4.header;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const result = intl.formatToMarkdownString(intl3.t.JUvC0s, {});
        cResult[2] = result;
        tmp11 = result;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== tmp4.header) {
        const obj4 = { variant: "heading-xl/bold", style: header, children: tmp11 };
        const tmp15 = metroRequire(Text_Text.Text, obj4);
        cResult[3] = tmp4.header;
        cResult[4] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === message) {
        let tmp16;
        if (cResult[6] === tmp4.message) {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp4.body) {
          if (cResult[9] === tmp7) {
            if (cResult[10] === tmp13) {
              let tmp18;
              let tmp22;
              let tmp24;
              let tmp27;
              if (cResult[11] === tmp16) {
                tmp18 = cResult[12];
              }
              const _Symbol = Symbol;
              const footer = tmp4.footer;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = intl3.intl;
                const stringResult = intl2.string(intl3.t.cpT0Cq);
                cResult[13] = stringResult;
                tmp22 = stringResult;
              } else {
                tmp22 = cResult[13];
              }
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = {
                  text: tmp22,
                  size: "md",
                  onPress() {
                    const arr = ModalActionCreatorsDefault;
                    return arr.pop();
                  },
                };
                const tmp26 = metroRequire(components_Button_Button.Button, obj5);
                cResult[14] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[14];
              }
              if (cResult[15] !== tmp4.footer) {
                const obj6 = { style: footer, children: tmp24 };
                const tmp30 = metroRequire(React3, obj6);
                cResult[15] = tmp4.footer;
                cResult[16] = tmp30;
                tmp27 = tmp30;
              } else {
                tmp27 = cResult[16];
              }
              if (cResult[17] === tmp4.container) {
                if (cResult[18] === tmp27) {
                  let tmp31;
                  if (cResult[19] === tmp18) {
                    tmp31 = cResult[20];
                  }
                  return tmp31;
                }
              }
              const obj7 = { bottom: true, style: container, children: items };
              items = [tmp18, tmp27];
              const tmp33 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, obj7);
              cResult[17] = tmp4.container;
              cResult[18] = tmp27;
              cResult[19] = tmp18;
              cResult[20] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        const obj8 = { contentContainerStyle: body, alwaysBounceVertical: false, children: items1 };
        items1 = [tmp7, tmp13, tmp16];
        const tmp21 = metroImportDefault(hasOwnProperty, obj8);
        cResult[8] = tmp4.body;
        cResult[9] = tmp7;
        cResult[10] = tmp13;
        cResult[11] = tmp16;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      const obj9 = { variant: "text-lg/medium", style: tmp4.message, children: message };
      const tmp17 = metroRequire(Text_Text.Text, obj9);
      cResult[5] = message;
      cResult[6] = tmp4.message;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : (message) => {
      let Button;
      let intl;
      let intl2;
      let items;
      let items1;
      let obj7;
      let tmp9Result;
      message = message.message;
      const tmp = closure_8();
      const obj = Link;
      const theme = obj.useTheme();
      const obj2 = { bottom: true, style: tmp.container, children: items1 };
      const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: items };
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      if (theme.dark) {
        tmp9Result = AssetRegistryDefault;
      } else {
        tmp9Result = AssetRegistryDefault2;
      }
      items = [metroRequire(_false, { source: tmp9Result }), ,];
      const obj4 = {
        variant: "heading-xl/bold",
        style: tmp.header,
        children: intl.formatToMarkdownString(intl3.t.JUvC0s, {}),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items[1] = metroRequire(Text, obj4);
      const obj5 = { variant: "text-lg/medium", style: tmp.message, children: message };
      items[2] = metroRequire(Text_Text.Text, obj5);
      items1 = [metroImportDefault(hasOwnProperty, obj3)];
      const obj6 = { style: tmp.footer, children: metroRequire(Button, obj7) };
      obj7 = {
        text: intl2.string(intl3.t.cpT0Cq),
        size: "md",
        onPress() {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        },
      };
      Button = components_Button_Button.Button;
      intl2 = intl3.intl;
      items1[1] = metroRequire(React3, obj6);
      return metroImportDefault(SafeAreaPaddingView, obj2);
    };
let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default tmp5;

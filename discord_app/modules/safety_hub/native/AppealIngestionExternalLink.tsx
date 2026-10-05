// discord_app/modules/safety_hub/native/AppealIngestionExternalLink.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistry from "../../../../_runtime/08289_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let onPress;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { childButton: obj2, childContainer: obj3, childButtonText: { flex: 1, lineHeight: 20 }, chevron: obj4 };
obj2 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = {
  minHeight: 60,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingVertical: 16,
  paddingStart: 16,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let items;
      let text;
      let url;
      let obj = url(576);
      const cResult = obj.c(16);
      ({ text, url } = onPress);
      onPress = onPress.onPress;
      const tmp4 = closure_6();
      if (cResult[0] === onPress) {
        let tmp5;
        if (cResult[1] === url) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.childButtonText) {
          let tmp6;
          let tmp9;
          if (cResult[4] === text) {
            tmp6 = cResult[5];
          }
          if (cResult[6] !== tmp4.chevron.color) {
            const obj2 = { source: url(8289), color: tmp4.chevron.color };
            const Icon = url(1188).Icon;
            const tmp11 = closure_4(Icon, obj2);
            cResult[6] = tmp4.chevron.color;
            cResult[7] = tmp11;
            tmp9 = tmp11;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp4.childContainer) {
            if (cResult[9] === tmp6) {
              let tmp12;
              if (cResult[10] === tmp9) {
                tmp12 = cResult[11];
              }
              if (cResult[12] === tmp5) {
                if (cResult[13] === tmp4.childButton) {
                  let tmp16;
                  if (cResult[14] === tmp12) {
                    tmp16 = cResult[15];
                  }
                  return tmp16;
                }
              }
              const obj3 = { style: tmp4.childButton, accessibilityRole: "button", onPress: tmp5, children: tmp12 };
              const tmp18 = closure_4(url(5909).PressableHighlight, obj3);
              cResult[12] = tmp5;
              cResult[13] = tmp4.childButton;
              cResult[14] = tmp12;
              cResult[15] = tmp18;
              tmp16 = tmp18;
            }
          }
          const obj4 = { style: tmp4.childContainer, children: items };
          items = [tmp6, tmp9];
          const tmp15 = closure_5(View, obj4);
          cResult[8] = tmp4.childContainer;
          cResult[9] = tmp6;
          cResult[10] = tmp9;
          cResult[11] = tmp15;
          tmp12 = tmp15;
        }
        const obj5 = {
          style: tmp4.childButtonText,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: text,
        };
        const tmp8 = closure_4(url(4886).Text, obj5);
        cResult[3] = tmp4.childButtonText;
        cResult[4] = text;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      const fn = function s() {
        if (onPress != null) {
          tmp();
        }
        const obj = LinkingDefault;
        obj.openURL(url);
      };
      cResult[0] = onPress;
      cResult[1] = url;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (text) => {
      let items;
      let obj2;
      ({ url: require, onPress: importDefault } = text);
      text = text.text;
      const tmp = closure_6();
      let obj = {
        style: tmp.childButton,
        accessibilityRole: "button",
        onPress() {
          if (importDefault != null) {
            tmp();
          }
          const obj = LinkingDefault;
          obj.openURL(require);
        },
        children: closure_5(View, obj2),
      };
      obj2 = { style: tmp.childContainer, children: items };
      const PressableHighlight = Pressables.PressableHighlight;
      items = [,];
      const obj3 = {
        style: tmp.childButtonText,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: text,
      };
      items[0] = closure_4(Text_Text.Text, obj3);
      const obj4 = { source: AssetRegistry, color: tmp.chevron.color };
      const Icon = native.Icon;
      items[1] = closure_4(Icon, obj4);
      return closure_4(PressableHighlight, obj);
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default tmp5;

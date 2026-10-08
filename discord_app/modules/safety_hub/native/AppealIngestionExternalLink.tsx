// discord_app/modules/safety_hub/native/AppealIngestionExternalLink.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _mod7705 from "../../../../_runtime/metro/07705__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  childButton: { marginBottom: 8, borderRadius: nativeDefault.radii.xs },
  childContainer: null,
  childButtonText: null,
  chevron: null,
};
let obj3 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
obj2.childContainer = {
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
obj2.childButtonText = { flex: 1, lineHeight: 20 };
let obj4 = {
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
obj2.chevron = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppealIngestionExternalLink(onPress) {
      const cResult = url(576).c(16);
      ({ text, url } = onPress);
      onPress = onPress.onPress;
      const tmp4 = closure_6();
      if (cResult[0] === onPress) {
        if (cResult[1] === url) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.childButtonText) {
          if (cResult[4] === text) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] !== tmp4.chevron.color) {
            const obj2 = { source: url(7705), color: tmp4.chevron.color };
            const tmp11 = closure_4(url(1200).Icon, obj2);
            cResult[6] = tmp4.chevron.color;
            cResult[7] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp4.childContainer) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp9) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === tmp5) {
                if (cResult[13] === tmp4.childButton) {
                  if (cResult[14] === tmp12) {
                    let tmp16 = cResult[15];
                  }
                  return tmp16;
                }
              }
              const obj3 = { style: tmp4.childButton, accessibilityRole: "button", onPress: tmp5, children: tmp12 };
              const tmp18 = closure_4(url(6189).PressableHighlight, obj3);
              cResult[12] = tmp5;
              cResult[13] = tmp4.childButton;
              cResult[14] = tmp12;
              cResult[15] = tmp18;
              tmp16 = tmp18;
            }
          }
          const obj4 = { style: tmp4.childContainer, children: null };
          const items = [tmp6, tmp9];
          obj4.children = items;
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
        const tmp8 = closure_4(url(5086).Text, obj5);
        cResult[3] = tmp4.childButtonText;
        cResult[4] = text;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      function handlePress() {
        if (onPress != null) {
          tmp();
        }
        LinkingDefault.openURL(url);
      }
      cResult[0] = onPress;
      cResult[1] = url;
      cResult[2] = handlePress;
      tmp5 = handlePress;
      const obj = url(576);
    }
  : function AppealIngestionExternalLink(children) {
      ({ url: require, onPress: importDefault } = children);
      const tmp = closure_6();
      const obj = {
        style: tmp.childButton,
        accessibilityRole: "button",
        onPress: function handlePress() {
          if (closure_1_1 != null) {
            tmp();
          }
          LinkingDefault.openURL(require);
        },
        children: null,
      };
      const obj2 = { style: tmp.childContainer, children: null };
      const items = [
        closure_4(Text_Text.Text, {
          style: tmp.childButtonText,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: children.text,
        }),
        closure_4(native.Icon, { source: _mod7705, color: tmp.chevron.color }),
      ];
      obj2.children = items;
      obj.children = closure_5(View, obj2);
      return closure_4(Pressables.PressableHighlight, obj);
    };

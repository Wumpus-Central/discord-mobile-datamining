// discord_app/modules/summaries/native/SummaryActionSheetButton.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 },
  iconBox: null,
  icon: null,
  name: null,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.iconBox = {
  borderRadius: nativeDefault.radii.round,
  border: 1,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj3 = {
  borderRadius: nativeDefault.radii.round,
  border: 1,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.icon = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.name = { textAlign: "center", marginTop: 8 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function SummaryActionSheetButton(arg0) {
      const cResult = c.c(15);
      ({ label, iconSource, onPress } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === iconSource) {
        if (cResult[1] === tmp4.icon) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.iconBox) {
          if (cResult[4] === tmp5) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === label) {
            if (cResult[7] === tmp4.name) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === label) {
              if (cResult[10] === onPress) {
                if (cResult[11] === tmp4.container) {
                  if (cResult[12] === tmp7) {
                    if (cResult[13] === tmp11) {
                      let tmp14 = cResult[14];
                    }
                    return tmp14;
                  }
                }
              }
            }
            const obj2 = {
              style: tmp4.container,
              onPress,
              accessibilityRole: "button",
              accessibilityLabel: label,
              children: null,
            };
            const items = [tmp7, tmp11];
            obj2.children = items;
            const tmp16 = React4(Pressables.PressableOpacity, obj2);
            cResult[9] = label;
            cResult[10] = onPress;
            cResult[11] = tmp4.container;
            cResult[12] = tmp7;
            cResult[13] = tmp11;
            cResult[14] = tmp16;
            tmp14 = tmp16;
          }
          const obj3 = {
            style: tmp4.name,
            variant: "text-xs/medium",
            color: "interactive-text-default",
            lineClamp: 1,
            children: label,
          };
          const tmp13 = React3(Text_Text.Text, obj3);
          cResult[6] = label;
          cResult[7] = tmp4.name;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
        const obj4 = { style: tmp4.iconBox, children: tmp5 };
        const tmp10 = React3(View, obj4);
        cResult[3] = tmp4.iconBox;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = React3(native.Icon, { style: tmp4.icon, source: iconSource });
      cResult[0] = iconSource;
      cResult[1] = tmp4.icon;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj5 = { style: tmp4.icon, source: iconSource };
    }
  : function SummaryActionSheetButton(label) {
      label = label.label;
      ({ iconSource, onPress } = label);
      const tmp = closure_5();
      const obj = {
        style: tmp.container,
        onPress,
        accessibilityRole: "button",
        accessibilityLabel: label,
        children: null,
      };
      const obj2 = { style: tmp.iconBox, children: React3(native.Icon, { style: tmp.icon, source: iconSource }) };
      const items = [
        React3(View, obj2),
        React3(Text_Text.Text, {
          style: tmp.name,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          lineClamp: 1,
          children: label,
        }),
      ];
      obj.children = items;
      return React4(Pressables.PressableOpacity, obj);
    };

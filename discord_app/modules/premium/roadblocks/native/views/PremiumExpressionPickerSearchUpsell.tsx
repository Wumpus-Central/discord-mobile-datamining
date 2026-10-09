// discord_app/modules/premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const sum = 56 + nativeDefault.space.PX_8;
const createStyles = fn(5091);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_8 }, upsell: null, content: null };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.upsell = {
  height: 56,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
};
obj2.content = { flex: 0.8, flexDirection: "row" };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  height: 56,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumExpressionPickerSearchUpsell(arg0) {
      const cResult = c.c(17);
      ({ body, ctaText, icon, loading, onPress } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] !== body) {
        const obj2 = { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: body };
        const tmp7 = React3(Text_Text.Text, obj2);
        cResult[0] = body;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === icon) {
        if (cResult[3] === tmp4.content) {
          if (cResult[4] === tmp5) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] !== ctaText) {
            const obj3 = { variant: "text-sm/medium", color: "text-link", children: ctaText };
            const tmp12 = React3(Text_Text.Text, obj3);
            cResult[6] = ctaText;
            cResult[7] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === loading) {
            if (cResult[9] === onPress) {
              if (cResult[10] === tmp4.upsell) {
                if (cResult[11] === tmp8) {
                  if (cResult[12] === tmp10) {
                    let tmp13 = cResult[13];
                  }
                  if (cResult[14] === tmp4.container) {
                    if (cResult[15] === tmp13) {
                      let tmp16 = cResult[16];
                    }
                    return tmp16;
                  }
                  const obj4 = { style: tmp4.container, collapsable: false, children: tmp13 };
                  const tmp19 = React3(View, obj4);
                  cResult[14] = tmp4.container;
                  cResult[15] = tmp13;
                  cResult[16] = tmp19;
                  tmp16 = tmp19;
                }
              }
            }
          }
          const obj5 = { style: tmp4.upsell, accessibilityRole: "button", disabled: loading, onPress, children: null };
          const items = [tmp8, tmp10];
          obj5.children = items;
          const tmp15 = React4(Pressables.PressableOpacity, obj5);
          cResult[8] = loading;
          cResult[9] = onPress;
          cResult[10] = tmp4.upsell;
          cResult[11] = tmp8;
          cResult[12] = tmp10;
          cResult[13] = tmp15;
          tmp13 = tmp15;
        }
      }
      const obj6 = { style: tmp4.content, children: null };
      const items1 = [icon, tmp5];
      obj6.children = items1;
      const tmp9 = React4(View, obj6);
      cResult[2] = icon;
      cResult[3] = tmp4.content;
      cResult[4] = tmp5;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : function PremiumExpressionPickerSearchUpsell(arg0) {
      ({ body, ctaText, icon, loading, onPress } = arg0);
      const tmp = closure_5();
      const obj = { style: tmp.container, collapsable: false, children: null };
      const obj2 = { style: tmp.upsell, accessibilityRole: "button", disabled: loading, onPress, children: null };
      const obj3 = { style: tmp.content, children: null };
      const items = [
        icon,
        React3(Text_Text.Text, {
          lineClamp: 2,
          variant: "text-sm/medium",
          color: "interactive-text-active",
          children: body,
        }),
      ];
      obj3.children = items;
      const items1 = [
        React4(View, obj3),
        React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", children: ctaText }),
      ];
      obj2.children = items1;
      obj.children = React4(Pressables.PressableOpacity, obj2);
      return React3(View, obj);
    };
export const PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT = sum;

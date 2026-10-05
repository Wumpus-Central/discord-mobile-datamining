// === Module 9918: PremiumExpressionPickerSearchUpsell ===

// Module 9918 (PremiumExpressionPickerSearchUpsell)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const sum = 56 + nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { container: obj2, upsell: obj3, content: { flex: 0.8, flexDirection: "row" } };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { height: 56, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" };
let closure_5 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let ctaText;
  let icon;
  let items;
  let items1;
  let loading;
  let onPress;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(17);
  ({ body, ctaText, icon, loading, onPress } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== body) {
    const obj2 = { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: body };
    const tmp7 = _false(Text_Text.Text, obj2);
    cResult[0] = body;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === icon) {
    if (cResult[3] === tmp4.content) {
      let tmp8;
      let tmp10;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== ctaText) {
        const obj3 = { variant: "text-sm/medium", color: "text-link", children: ctaText };
        const tmp12 = _false(Text_Text.Text, obj3);
        cResult[6] = ctaText;
        cResult[7] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === loading) {
        if (cResult[9] === onPress) {
          if (cResult[10] === tmp4.upsell) {
            if (cResult[11] === tmp8) {
              let tmp13;
              if (cResult[12] === tmp10) {
                tmp13 = cResult[13];
              }
              if (cResult[14] === tmp4.container) {
                let tmp16;
                if (cResult[15] === tmp13) {
                  tmp16 = cResult[16];
                }
                return tmp16;
              }
              const obj4 = { style: tmp4.container, collapsable: false, children: tmp13 };
              const tmp19 = _false(View, obj4);
              cResult[14] = tmp4.container;
              cResult[15] = tmp13;
              cResult[16] = tmp19;
              tmp16 = tmp19;
            }
          }
        }
      }
      const obj5 = { style: tmp4.upsell, accessibilityRole: "button", disabled: loading, onPress, children: items };
      items = [tmp8, tmp10];
      const tmp15 = React3(Pressables.PressableOpacity, obj5);
      cResult[8] = loading;
      cResult[9] = onPress;
      cResult[10] = tmp4.upsell;
      cResult[11] = tmp8;
      cResult[12] = tmp10;
      cResult[13] = tmp15;
      tmp13 = tmp15;
    }
  }
  const obj6 = { style: tmp4.content, children: items1 };
  items1 = [icon, tmp5];
  const tmp9 = React3(View, obj6);
  cResult[2] = icon;
  cResult[3] = tmp4.content;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let PressableOpacity;
  let body;
  let ctaText;
  let icon;
  let items;
  let items1;
  let loading;
  let obj2;
  let onPress;
  ({ body, ctaText, icon, loading, onPress } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, collapsable: false, children: React3(PressableOpacity, obj2) };
  const obj3 = { style: tmp.content, children: items };
  items = [icon, ];
  obj2 = { style: tmp.upsell, accessibilityRole: "button", disabled: loading, onPress, children: items1 };
  PressableOpacity = Pressables.PressableOpacity;
  items[1] = _false(Text_Text.Text, { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: body });
  items1 = [React3(View, obj3), _false(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", children: ctaText })];
  return _false(View, obj);
});
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx");

export default tmp6;
export const PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT = sum;
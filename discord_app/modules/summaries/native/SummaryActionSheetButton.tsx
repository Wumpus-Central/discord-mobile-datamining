// === Module 11291: SummaryActionSheetButton ===

// Module 11291 (SummaryActionSheetButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: obj2, icon: obj3, name: { textAlign: "center", marginTop: 8 } };
obj2 = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_5 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let iconSource;
  let items1;
  let label;
  let onPress;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(17);
  ({ label, iconSource, onPress } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.iconBox) {
    const items = [tmp4.iconBox];
    cResult[0] = tmp4.iconBox;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === iconSource) {
    let tmp6;
    if (cResult[3] === tmp4.icon) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp8;
      if (cResult[6] === tmp6) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === label) {
        let tmp12;
        if (cResult[9] === tmp4.name) {
          tmp12 = cResult[10];
        }
        if (cResult[11] === label) {
          if (cResult[12] === onPress) {
            if (cResult[13] === tmp4.container) {
              if (cResult[14] === tmp8) {
                let tmp15;
                if (cResult[15] === tmp12) {
                  tmp15 = cResult[16];
                }
                return tmp15;
              }
            }
          }
        }
        const obj2 = { style: tmp4.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: items1 };
        items1 = [tmp8, tmp12];
        const tmp17 = React3(Pressables.PressableOpacity, obj2);
        cResult[11] = label;
        cResult[12] = onPress;
        cResult[13] = tmp4.container;
        cResult[14] = tmp8;
        cResult[15] = tmp12;
        cResult[16] = tmp17;
        tmp15 = tmp17;
      }
      const obj3 = { style: tmp4.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
      const tmp14 = _false(Text_Text.Text, obj3);
      cResult[8] = label;
      cResult[9] = tmp4.name;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: tmp5, children: tmp6 };
    const tmp11 = _false(View, obj4);
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const obj5 = { style: tmp4.icon, source: iconSource };
  const tmp7 = _false(native.Icon, obj5);
  cResult[2] = iconSource;
  cResult[3] = tmp4.icon;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((label) => {
  let iconSource;
  let items;
  let items1;
  let obj3;
  let onPress;
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: items1 };
  const obj2 = { style: items, children: _false(native.Icon, obj3) };
  items = [tmp.iconBox];
  const PressableOpacity = Pressables.PressableOpacity;
  obj3 = { style: tmp.icon, source: iconSource };
  items1 = [_false(View, obj2), ];
  const obj4 = { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
  items1[1] = _false(Text_Text.Text, obj4);
  return React3(PressableOpacity, obj);
});
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = tmp6;
// === Module 11291: SummaryActionSheetButton ===

// Module 11291 (SummaryActionSheetButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: null, icon: null, name: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.iconBox = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.icon = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.name = { textAlign: "center", marginTop: 8 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ label, iconSource, onPress } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.iconBox) {
    const items = [tmp4.iconBox];
    cResult[0] = tmp4.iconBox;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === iconSource) {
    if (cResult[3] === tmp4.icon) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === label) {
        if (cResult[9] === tmp4.name) {
          let tmp12 = cResult[10];
        }
        if (cResult[11] === label) {
          if (cResult[12] === onPress) {
            if (cResult[13] === tmp4.container) {
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp12) {
                  let tmp15 = cResult[16];
                }
                return tmp15;
              }
            }
          }
        }
        const obj2 = { style: tmp4.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
        const items1 = [tmp8, tmp12];
        obj2.children = items1;
        const tmp17 = React4(Pressables.PressableOpacity, obj2);
        cResult[11] = label;
        cResult[12] = onPress;
        cResult[13] = tmp4.container;
        cResult[14] = tmp8;
        cResult[15] = tmp12;
        cResult[16] = tmp17;
        tmp15 = tmp17;
      }
      const obj3 = { style: tmp4.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
      const tmp14 = React3(Text_Text.Text, obj3);
      cResult[8] = label;
      cResult[9] = tmp4.name;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: tmp5, children: tmp6 };
    const tmp11 = React3(View, obj4);
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = React3(native.Icon, { style: tmp4.icon, source: iconSource });
  cResult[2] = iconSource;
  cResult[3] = tmp4.icon;
  cResult[4] = tmp7;
  tmp6 = tmp7;
  const obj5 = { style: tmp4.icon, source: iconSource };
}) : ((label) => {
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  const obj2 = { style: null, children: React3(native.Icon, { style: tmp.icon, source: iconSource }) };
  const items = [tmp.iconBox];
  obj2.style = items;
  const items1 = [React3(View, obj2), React3(Text_Text.Text, { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label })];
  obj.children = items1;
  return React4(Pressables.PressableOpacity, obj);
});
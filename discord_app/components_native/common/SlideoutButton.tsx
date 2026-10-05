// === Module 9976: SlideoutButton ===

// Module 9976 (SlideoutButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import Pressables from "Pressables" /* 5909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: obj2 };
obj2 = { color: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.6), fontSize: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let color;
  let height;
  let items;
  let onPress;
  let title;
  const obj = react2;
  const cResult = obj.c(20);
  ({ onPress, color, IconComponent, title, height } = arg0);
  let num = 60;
  if (undefined !== height) {
    num = height;
  }
  const tmp4 = closure_6();
  if (cResult[0] === color) {
    let tmp5;
    if (cResult[1] === num) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.button) {
      let tmp6;
      let tmp7;
      let tmp11;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] !== IconComponent) {
        const obj2 = { color: nativeDefault.colors.WHITE };
        const tmp10 = React3(IconComponent, obj2);
        cResult[6] = IconComponent;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[7];
      }
      const buttonText = tmp4.buttonText;
      if (cResult[8] !== title) {
        const formatted = title.toUpperCase();
        cResult[8] = title;
        cResult[9] = formatted;
        tmp11 = formatted;
      } else {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.buttonText) {
        let tmp13;
        if (cResult[11] === tmp11) {
          tmp13 = cResult[12];
        }
        if (cResult[13] === tmp6) {
          if (cResult[14] === tmp7) {
            let tmp16;
            if (cResult[15] === tmp13) {
              tmp16 = cResult[16];
            }
            if (cResult[17] === onPress) {
              let tmp20;
              if (cResult[18] === tmp16) {
                tmp20 = cResult[19];
              }
              return tmp20;
            }
            const obj3 = { accessibilityRole: "button", onPress, children: tmp16 };
            const tmp22 = React3(Pressables.PressableOpacity, obj3);
            cResult[17] = onPress;
            cResult[18] = tmp16;
            cResult[19] = tmp22;
            tmp20 = tmp22;
          }
        }
        const obj4 = { style: tmp6, children: items };
        items = [tmp7, tmp13];
        const tmp19 = hasOwnProperty(View, obj4);
        cResult[13] = tmp6;
        cResult[14] = tmp7;
        cResult[15] = tmp13;
        cResult[16] = tmp19;
        tmp16 = tmp19;
      }
      const obj5 = { style: buttonText, children: tmp11 };
      const tmp15 = React3(native.LegacyText, obj5);
      cResult[10] = tmp4.buttonText;
      cResult[11] = tmp11;
      cResult[12] = tmp15;
      tmp13 = tmp15;
    }
    const items1 = [tmp4.button, tmp5];
    cResult[3] = tmp4.button;
    cResult[4] = tmp5;
    cResult[5] = items1;
    tmp6 = items1;
  }
  size = { backgroundColor: color, width: 72, height: num };
  cResult[0] = color;
  cResult[1] = num;
  cResult[2] = size;
  tmp5 = size;
}) : ((arg0) => {
  let IconComponent;
  let color;
  let height;
  let items;
  let items1;
  let obj2;
  let onPress;
  let title;
  ({ title, height } = arg0);
  ({ onPress, color, IconComponent } = arg0);
  if (height === undefined) {
    height = 60;
  }
  const tmp = closure_6();
  const obj = { accessibilityRole: "button", onPress, children: hasOwnProperty(View, obj2) };
  obj2 = { style: items, children: items1 };
  items = [tmp.button, { backgroundColor: color, width: 72, height }];
  const obj3 = { color: nativeDefault.colors.WHITE };
  const PressableOpacity = Pressables.PressableOpacity;
  items1 = [React3(IconComponent, obj3), ];
  const obj4 = { style: tmp.buttonText, children: title.toUpperCase() };
  const LegacyText = native.LegacyText;
  items1[1] = React3(LegacyText, obj4);
  return React3(PressableOpacity, obj);
});
tmp5.width = 72;
let size = size_mod;
const result = size.fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default tmp5;
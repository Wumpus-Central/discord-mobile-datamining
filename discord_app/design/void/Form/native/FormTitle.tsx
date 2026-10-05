// === Module 8903: FormTitle ===

// Module 8903 (FormTitle)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let Platform;
let c2;
let c3;
let closure_4;
let obj2;
let obj3;
({ View: c2, Platform } = react_native);
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let PlatformUtils = PlatformUtils_mod;
let num = 58;
if (PlatformUtils.isAndroid()) {
  num = 48;
}
PlatformUtils = PlatformUtils_mod;
let num2 = 48;
if (PlatformUtils.isAndroid()) {
  num2 = 56;
}
let createStyles = createStyles_mod;
let obj = { titleWrapper: { flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 }, horizontalPadding: { paddingHorizontal: 16 }, thinTitle: { paddingTop: 26 }, titleText: obj2, error: obj3 };
obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_5 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let error;
  let icon;
  let inset;
  let items;
  let numberOfLines;
  let textStyle;
  let thinTitle;
  let title;
  let uppercaseTitle;
  let viewStyle;
  const obj = react2;
  const cResult = obj.c(20);
  ({ title, icon, numberOfLines, uppercaseTitle, thinTitle, error, inset, viewStyle, textStyle } = arg0);
  let thinTitle2 = undefined !== thinTitle && thinTitle;
  let error2 = undefined !== error && error;
  const tmp6 = closure_5();
  if (thinTitle2) {
    thinTitle2 = tmp6.thinTitle;
  }
  if (cResult[0] === tmp6.titleWrapper) {
    if (cResult[1] === thinTitle2) {
      if (cResult[2] === (!(undefined !== inset && inset) && tmp6.horizontalPadding)) {
        let tmp8;
        if (cResult[3] === viewStyle) {
          tmp8 = cResult[4];
        }
        if (error2) {
          error2 = tmp6.error;
        }
        if (cResult[5] === tmp6.titleText) {
          if (cResult[6] === error2) {
            let tmp9;
            if (cResult[7] === textStyle) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === title) {
              let tmp10;
              if (cResult[10] === (undefined === uppercaseTitle || uppercaseTitle)) {
                tmp10 = cResult[11];
              }
              if (cResult[12] === numberOfLines) {
                if (cResult[13] === tmp10) {
                  let tmp12;
                  if (cResult[14] === tmp9) {
                    tmp12 = cResult[15];
                  }
                  if (cResult[16] === icon) {
                    if (cResult[17] === tmp12) {
                      let tmp15;
                      if (cResult[18] === tmp8) {
                        tmp15 = cResult[19];
                      }
                      return tmp15;
                    }
                  }
                  const obj2 = { style: tmp8, children: items };
                  items = [tmp12, icon];
                  const tmp18 = React3(React2, obj2);
                  cResult[16] = icon;
                  cResult[17] = tmp12;
                  cResult[18] = tmp8;
                  cResult[19] = tmp18;
                  tmp15 = tmp18;
                }
              }
              const obj3 = { style: tmp9, numberOfLines, accessibilityRole: "header", children: tmp10 };
              const tmp14 = _false(native.LegacyText, obj3);
              cResult[12] = numberOfLines;
              cResult[13] = tmp10;
              cResult[14] = tmp9;
              cResult[15] = tmp14;
              tmp12 = tmp14;
            }
            let formatted = title;
            if (undefined === uppercaseTitle || uppercaseTitle) {
              formatted = title.toUpperCase();
            }
            cResult[9] = title;
            cResult[10] = undefined === uppercaseTitle || uppercaseTitle;
            cResult[11] = formatted;
            tmp10 = formatted;
          }
        }
        const items1 = [tmp6.titleText, textStyle, error2];
        cResult[5] = tmp6.titleText;
        cResult[6] = error2;
        cResult[7] = textStyle;
        cResult[8] = items1;
        tmp9 = items1;
      }
    }
  }
  const items2 = [tmp6.titleWrapper, thinTitle2, !tmp5 && tmp6.horizontalPadding, viewStyle];
  cResult[0] = tmp6.titleWrapper;
  cResult[1] = thinTitle2;
  cResult[2] = !(undefined !== inset && inset) && tmp6.horizontalPadding;
  cResult[3] = viewStyle;
  cResult[4] = items2;
  tmp8 = items2;
}) : ((thinTitle) => {
  let formatted;
  let icon;
  let items2;
  let numberOfLines;
  let textStyle;
  let title;
  let uppercaseTitle;
  let viewStyle;
  ({ title, uppercaseTitle } = thinTitle);
  ({ icon, numberOfLines } = thinTitle);
  if (uppercaseTitle === undefined) {
    uppercaseTitle = true;
  }
  let flag = thinTitle.thinTitle;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = thinTitle.error;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = thinTitle.inset;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ viewStyle, textStyle } = thinTitle);
  const tmp = closure_5();
  const items = [tmp.titleWrapper, , , ];
  if (flag) {
    flag = tmp.thinTitle;
  }
  items[1] = flag;
  const obj = { style: items, children: items2 };
  const tmp4 = !flag3 && tmp.horizontalPadding;
  items[2] = tmp4;
  items[3] = viewStyle;
  const items1 = [tmp.titleText, textStyle, ];
  const LegacyText = native.LegacyText;
  if (flag2) {
    flag2 = tmp.error;
  }
  const obj2 = { style: items1, numberOfLines, accessibilityRole: "header", children: formatted };
  items1[2] = flag2;
  formatted = title;
  if (uppercaseTitle) {
    formatted = title.toUpperCase();
  }
  items2 = [_false(LegacyText, obj2), icon];
  return React3(React2, obj);
});
const result = size.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

export default tmp6;
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;
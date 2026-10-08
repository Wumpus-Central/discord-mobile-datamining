// discord_app/design/void/Form/native/FormTitle.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let PlatformUtils = fn(1381);
let num = 58;
if (PlatformUtils.isAndroid()) {
  num = 48;
}
PlatformUtils = fn(1381);
let num2 = 48;
if (PlatformUtils.isAndroid()) {
  num2 = 56;
}
const createStyles = fn(5090);
const obj4 = {
  titleWrapper: { flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 },
  horizontalPadding: { paddingHorizontal: 16 },
  thinTitle: { paddingTop: 26 },
  titleText: { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_SUBTLE },
  error: null,
};
const obj5 = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_SUBTLE };
obj4.error = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_5 = createStyles.createStyles(obj4);
const ReactCompilerGating = fn(558);
const obj6 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormTitle(arg0) {
      const cResult = c.c(20);
      ({ title, icon, numberOfLines, uppercaseTitle, thinTitle, error, inset, viewStyle, textStyle } = arg0);
      let thinTitle2 = undefined !== thinTitle && thinTitle;
      let error2 = undefined !== error && error;
      const tmp6 = closure_5();
      if (thinTitle2) {
        thinTitle2 = tmp6.thinTitle;
      }
      let horizontalPadding = !tmp5;
      if (!(undefined !== inset && inset)) {
        horizontalPadding = tmp6.horizontalPadding;
      }
      if (cResult[0] === tmp6.titleWrapper) {
        if (cResult[1] === thinTitle2) {
          if (cResult[2] === horizontalPadding) {
            if (cResult[3] === viewStyle) {
              let tmp7 = cResult[4];
            }
            if (error2) {
              error2 = tmp6.error;
            }
            if (cResult[5] === tmp6.titleText) {
              if (cResult[6] === error2) {
                if (cResult[7] === textStyle) {
                  let tmp8 = cResult[8];
                }
                if (cResult[9] === title) {
                  if (cResult[10] === tmp4) {
                    let tmp9 = cResult[11];
                  }
                  if (cResult[12] === numberOfLines) {
                    if (cResult[13] === tmp9) {
                      if (cResult[14] === tmp8) {
                        let tmp11 = cResult[15];
                      }
                      if (cResult[16] === icon) {
                        if (cResult[17] === tmp11) {
                          if (cResult[18] === tmp7) {
                            let tmp14 = cResult[19];
                          }
                          return tmp14;
                        }
                      }
                      const obj2 = { style: tmp7, children: null };
                      const items = [tmp11, icon];
                      obj2.children = items;
                      const tmp17 = React4(React2, obj2);
                      cResult[16] = icon;
                      cResult[17] = tmp11;
                      cResult[18] = tmp7;
                      cResult[19] = tmp17;
                      tmp14 = tmp17;
                    }
                  }
                  const obj3 = { style: tmp8, numberOfLines, accessibilityRole: "header", children: tmp9 };
                  const tmp13 = React3(native.LegacyText, obj3);
                  cResult[12] = numberOfLines;
                  cResult[13] = tmp9;
                  cResult[14] = tmp8;
                  cResult[15] = tmp13;
                  tmp11 = tmp13;
                }
                let formatted = title;
                if (tmp4) {
                  formatted = title.toUpperCase();
                }
                cResult[9] = title;
                cResult[10] = tmp4;
                cResult[11] = formatted;
                tmp9 = formatted;
              }
            }
            const items1 = [tmp6.titleText, textStyle, error2];
            cResult[5] = tmp6.titleText;
            cResult[6] = error2;
            cResult[7] = textStyle;
            cResult[8] = items1;
            tmp8 = items1;
          }
        }
      }
      const items2 = [tmp6.titleWrapper, thinTitle2, horizontalPadding, viewStyle];
      cResult[0] = tmp6.titleWrapper;
      cResult[1] = thinTitle2;
      cResult[2] = horizontalPadding;
      cResult[3] = viewStyle;
      cResult[4] = items2;
      tmp7 = items2;
    }
  : function FormTitle(thinTitle) {
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
      const items = [tmp.titleWrapper, , ,];
      if (flag) {
        flag = tmp.thinTitle;
      }
      items[1] = flag;
      let horizontalPadding = !flag3;
      if (!flag3) {
        horizontalPadding = tmp.horizontalPadding;
      }
      const obj = { style: items, children: null };
      items[2] = horizontalPadding;
      items[3] = viewStyle;
      const items1 = [tmp.titleText, textStyle];
      if (flag2) {
        flag2 = tmp.error;
      }
      const obj2 = { style: items1, numberOfLines, accessibilityRole: "header", children: null };
      items1[2] = flag2;
      let formatted = title;
      if (uppercaseTitle) {
        formatted = title.toUpperCase();
      }
      obj2.children = formatted;
      const items2 = [React3(native.LegacyText, obj2), icon];
      obj.children = items2;
      return React4(React2, obj);
    };
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;

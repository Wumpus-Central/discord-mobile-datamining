// === Module 7503: shared_components/Badge ===

// Module 7503 (shared_components/Badge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badge: obj2, badgeClassic: obj3, mask: { alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_4 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badgeStyle;
  let classic;
  let maskColor;
  let maskSize;
  let style;
  const obj = react2;
  const cResult = obj.c(18);
  ({ size, maskSize, classic, maskColor, style, badgeStyle } = arg0);
  let num = 12;
  if (undefined !== size) {
    num = size;
  }
  let num2 = 4;
  if (undefined !== maskSize) {
    num2 = maskSize;
  }
  const tmp2 = undefined !== classic && classic;
  const tmp3 = closure_4();
  const sum = num + 2 * num2;
  if (cResult[0] === null != maskColor) {
    if (cResult[1] === maskColor) {
      let tmp6;
      if (cResult[2] === sum) {
        tmp6 = cResult[3];
      }
      const result = num / 2;
      if (cResult[4] === num) {
        let tmp9;
        if (cResult[5] === result) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === style) {
            let tmp10;
            if (cResult[9] === tmp3.mask) {
              tmp10 = cResult[10];
            }
            const tmp11 = tmp2 ? tmp3.badgeClassic : tmp3.badge;
            if (cResult[11] === tmp9) {
              if (cResult[12] === badgeStyle) {
                let tmp12;
                if (cResult[13] === tmp11) {
                  tmp12 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  let tmp16;
                  if (cResult[16] === tmp12) {
                    tmp16 = cResult[17];
                  }
                  return tmp16;
                }
                const tmp19 = <View style={tmp10}>{tmp12}</View>;
                cResult[15] = tmp10;
                cResult[16] = tmp12;
                cResult[17] = tmp19;
                tmp16 = tmp19;
              }
            }
            const items = [tmp11, tmp9, badgeStyle];
            const tmp15 = <View style={items} />;
            cResult[11] = tmp9;
            cResult[12] = badgeStyle;
            cResult[13] = tmp11;
            cResult[14] = tmp15;
            tmp12 = tmp15;
          }
        }
        const items1 = [tmp3.mask, tmp6, style];
        cResult[7] = tmp6;
        cResult[8] = style;
        cResult[9] = tmp3.mask;
        cResult[10] = items1;
        tmp10 = items1;
      }
      const size1 = { height: num, width: num, borderRadius: result };
      cResult[4] = num;
      cResult[5] = result;
      cResult[6] = size1;
      tmp9 = size1;
    }
  }
  let tmp7;
  if (null != maskColor) {
    const size2 = { backgroundColor: maskColor, height: sum, width: sum, borderRadius: sum / 2 };
    tmp7 = size2;
  }
  cResult[0] = null != maskColor;
  cResult[1] = maskColor;
  cResult[2] = sum;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((size) => {
  let badgeStyle;
  let style;
  let num = size.size;
  if (num === undefined) {
    num = 12;
  }
  let num2 = size.maskSize;
  if (num2 === undefined) {
    num2 = 4;
  }
  let flag = size.classic;
  if (flag === undefined) {
    flag = false;
  }
  const maskColor = size.maskColor;
  ({ style, badgeStyle } = size);
  const tmp = closure_4();
  const sum = num + 2 * num2;
  let tmp3;
  if (null != maskColor) {
    size = { backgroundColor: maskColor, height: sum, width: sum, borderRadius: sum / 2 };
    tmp3 = size;
  }
  const items = [tmp.mask, tmp3, style];
  const items1 = [flag ? tmp.badgeClassic : tmp.badge, { height: num, width: num, borderRadius: num / 2 }, badgeStyle];
  return <View style={items}>{null}</View>;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default memoResult;
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;
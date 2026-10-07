// === Module 7514: Badge ===

// Module 7514 (Badge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, badgeClassic: null, mask: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.badgeClassic = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.mask = { alignItems: "center", justifyContent: "center" };
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ size, maskSize, classic, maskColor, style, badgeStyle } = arg0);
  let num = 12;
  if (undefined !== size) {
    num = size;
  }
  let num2 = 4;
  if (undefined !== maskSize) {
    num2 = maskSize;
  }
  const tmp3 = closure_4();
  const sum = num + 2 * num2;
  if (cResult[0] === null != maskColor) {
    if (cResult[1] === maskColor) {
      if (cResult[2] === sum) {
        let tmp6 = cResult[3];
      }
      const result = num / 2;
      if (cResult[4] === num) {
        if (cResult[5] === result) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === style) {
            if (cResult[9] === tmp3.mask) {
              let tmp10 = cResult[10];
            }
            const tmp11 = tmp2 ? tmp3.badgeClassic : tmp3.badge;
            if (cResult[11] === tmp9) {
              if (cResult[12] === badgeStyle) {
                if (cResult[13] === tmp11) {
                  let tmp12 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp12) {
                    let tmp16 = cResult[17];
                  }
                  return tmp16;
                }
                const obj2 = { style: tmp10, children: tmp12 };
                const tmp19 = <View style={tmp10}>{tmp12}</View>;
                cResult[15] = tmp10;
                cResult[16] = tmp12;
                cResult[17] = tmp19;
                tmp16 = tmp19;
              }
            }
            const obj3 = { style: null };
            const items = [tmp11, tmp9, badgeStyle];
            obj3.style = items;
            const tmp15 = <View style={null} />;
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
  tmp2 = undefined !== classic && classic;
}) : ((size) => {
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
  const obj = { style: null, children: null };
  const items = [tmp.mask, tmp3, style];
  obj.style = items;
  const obj2 = { style: null };
  const items1 = [flag ? tmp.badgeClassic : tmp.badge, { height: num, width: num, borderRadius: num / 2 }, badgeStyle];
  obj2.style = items1;
  obj.children = <View style={null} />;
  return <View style={null}>{null}</View>;
}));
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;
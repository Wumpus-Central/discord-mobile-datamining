// === Module 11618: PileOverflow ===

// Module 11618 (PileOverflow)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import NumberUtils from "NumberUtils" /* 1900 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 } };
let closure_6 = createStyles.createStyles(obj2);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = ReactCompilerGating.isReactCompilerEnabled() ? (function PileOverflow(arg0) {
  const cResult = c.c(20);
  ({ size, borderRadius, value } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function b() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_6();
  let num3 = 4;
  if (size >= 32) {
    num3 = 8;
  }
  if (cResult[2] === borderRadius) {
    if (cResult[3] === size) {
      if (cResult[4] === num3) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === tmp8.container) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] !== size) {
          let str = map.get(size);
          if (str == null) {
            str = "text-md/semibold";
          }
          cResult[9] = size;
          cResult[10] = str;
          let tmp11 = str;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] === stateFromStores) {
          if (cResult[12] === value) {
            let tmp14 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            if (cResult[15] === tmp14) {
              let tmp16 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              if (cResult[18] === tmp16) {
                let tmp19 = cResult[19];
              }
              return tmp19;
            }
            const obj2 = { style: tmp10, children: tmp16 };
            const tmp22 = hasOwnProperty(View, obj2);
            cResult[17] = tmp10;
            cResult[18] = tmp16;
            cResult[19] = tmp22;
            tmp19 = tmp22;
          }
          const obj3 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: tmp11, children: null };
          const items1 = ["+", tmp14];
          obj3.children = items1;
          const tmp18 = React4(Text_Text.Text, obj3);
          cResult[14] = tmp11;
          cResult[15] = tmp14;
          cResult[16] = tmp18;
          tmp16 = tmp18;
        }
        const humanizeValueResult = NumberUtils.humanizeValue(value, stateFromStores);
        cResult[11] = stateFromStores;
        cResult[12] = value;
        cResult[13] = humanizeValueResult;
        tmp14 = humanizeValueResult;
        const tmpResult2 = NumberUtils;
      }
      const items2 = [tmp8.container, tmp9];
      cResult[6] = tmp8.container;
      cResult[7] = tmp9;
      cResult[8] = items2;
      tmp10 = items2;
    }
  }
  const obj4 = { borderRadius, minWidth: size, height: size, paddingHorizontal: num3 };
  cResult[2] = borderRadius;
  cResult[3] = size;
  cResult[4] = num3;
  cResult[5] = obj4;
  tmp9 = obj4;
  const tmpResult = useStateFromStores;
}) : (function PileOverflow(size) {
  size = size.size;
  ({ borderRadius, value } = size);
  const items = [LocaleStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => locale.locale);
  const items1 = [closure_6().container, ];
  const obj2 = { borderRadius, minWidth: size, height: size, paddingHorizontal: null };
  let num = 4;
  if (size >= 32) {
    num = 8;
  }
  const obj3 = { style: items1, children: null };
  obj2.paddingHorizontal = num;
  items1[1] = obj2;
  let str = map.get(size);
  if (str == null) {
    str = "text-md/semibold";
  }
  const obj4 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, children: null };
  const items2 = ["+", NumberUtils.humanizeValue(value, stateFromStores)];
  obj4.children = items2;
  obj3.children = React4(Text_Text.Text, obj4);
  return hasOwnProperty(View, obj3);
});
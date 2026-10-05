// === Module 10740: PileOverflow ===

// Module 10740 (PileOverflow)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
let closure_6 = createStyles.createStyles(obj);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let borderRadius;
  let items1;
  let locale;
  let tmp4;
  let tmp5;
  let value;
  const obj = react2;
  const cResult = obj.c(20);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_6();
  let num3 = 4;
  if (size >= 32) {
    num3 = 8;
  }
  if (cResult[2] === borderRadius) {
    if (cResult[3] === size) {
      let tmp9;
      if (cResult[4] === num3) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp8.container) {
        let tmp10;
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== size) {
          let str = map.get(size);
          if (str == null) {
            str = "text-md/semibold";
          }
          cResult[9] = size;
          cResult[10] = str;
          tmp11 = str;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] === stateFromStores) {
          let tmp14;
          if (cResult[12] === value) {
            tmp14 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            let tmp16;
            if (cResult[15] === tmp14) {
              tmp16 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              let tmp19;
              if (cResult[18] === tmp16) {
                tmp19 = cResult[19];
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
          const obj3 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: tmp11, children: items1 };
          items1 = ["+", tmp14];
          const tmp18 = React3(Text_Text.Text, obj3);
          cResult[14] = tmp11;
          cResult[15] = tmp14;
          cResult[16] = tmp18;
          tmp16 = tmp18;
        }
        const tmpResult2 = NumberUtils;
        const humanizeValueResult = tmpResult2.humanizeValue(value, stateFromStores);
        cResult[11] = stateFromStores;
        cResult[12] = value;
        cResult[13] = humanizeValueResult;
        tmp14 = humanizeValueResult;
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
}) : ((size) => {
  let Text;
  let borderRadius;
  let items2;
  let locale;
  let num;
  let obj4;
  let value;
  size = size.size;
  ({ borderRadius, value } = size);
  const items = [LocaleStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [closure_6().container, ];
  const obj2 = { borderRadius, minWidth: size, height: size, paddingHorizontal: num };
  num = 4;
  if (size >= 32) {
    num = 8;
  }
  items1[1] = obj2;
  const obj3 = { style: items1, children: React3(Text, obj4) };
  Text = Text_Text.Text;
  let str = map.get(size);
  if (str == null) {
    str = "text-md/semibold";
  }
  obj4 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, children: items2 };
  items2 = ["+"];
  const tmpResult = NumberUtils;
  items2[1] = tmpResult.humanizeValue(value, stateFromStores);
  return hasOwnProperty(View, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = tmp5;
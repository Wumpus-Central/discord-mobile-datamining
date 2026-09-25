// === Module 10456: PileOverflow ===

// Module 10456 (PileOverflow)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import NumberUtils from "NumberUtils" /* 1881 */;
import Text_Text from "Text/Text" /* 4825 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2111 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 } };
let closure_6 = createStyles.createStyles(obj2);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
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
};
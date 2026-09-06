// === Module 11001: PileOverflow ===

// Module 11001 (PileOverflow)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import NumberUtils from "NumberUtils" /* 1880 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
  size = size.size;
  ({ borderRadius, value } = size);
  let obj = useStateFromStores;
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [closure_6().container, ];
  obj = { borderRadius, minWidth: size, height: size, paddingHorizontal: null };
  let num = 4;
  if (size >= 32) {
    num = 8;
  }
  obj = { style: items1, children: null, paddingHorizontal: num };
  items1[1] = obj;
  let str = map.get(size);
  if (str == null) {
    str = "text-md/semibold";
  }
  const obj1 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, children: null };
  const items2 = ["+", NumberUtils.humanizeValue(value, stateFromStores)];
  obj1.children = items2;
  obj.children = React4(Text_Text.Text, obj1);
  return hasOwnProperty(View, obj);
};
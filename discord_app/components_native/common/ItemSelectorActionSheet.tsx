// === Module 8250: ItemSelectorActionSheet ===

// Module 8250 (ItemSelectorActionSheet)
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("map").fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  let body;
  let dependencyMap;
  let hasIcons;
  let importDefault;
  let items;
  let onClose;
  let title;
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = items(3897);
  const token = obj.useToken(importDefault(712).modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === closure_1);
  obj = { title, trailing: null };
  let tmp6Result = null;
  if (null != onClose) {
    obj = { onPress: null };
    obj[0] = onClose;
    tmp6Result = tmp6(tmp(5556).ActionSheetCloseButton, obj);
  }
  const obj1 = { scrollable: true, header: closure_3(items(5246).BottomSheetTitleHeader, obj), children: null };
  obj[1] = tmp6Result;
  const obj2 = { contentContainerStyle: null, children: null };
  const obj3 = { paddingHorizontal: token, paddingBottom: null };
  obj3[1] = importDefault(1581)().bottom + importDefault(712).space.PX_16;
  obj2[0] = obj3;
  items = [body, ];
  let num = -1;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  items[1] = closure_3(items(7660).TableRadioGroup, {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(iter.value);
      }
    },
    children: items.map((label, value) => callback(items(7659).TableRadioRow, { label: label.label, value }, value))
  });
  obj2[1] = items;
  obj1[2] = closure_4(items(5249).BottomSheetScrollView, obj2);
  return closure_3(items(5247).BottomSheet, obj1);
};
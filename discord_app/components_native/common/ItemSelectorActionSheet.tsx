// === Module 9426: ItemSelectorActionSheet ===

// Module 9426 (ItemSelectorActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = items(4262);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === importDefault);
  obj = { title, trailing: null };
  let tmp6Result = null;
  if (null != onClose) {
    obj = { onPress: onClose };
    tmp6Result = closure_3(tmp(7199).ActionSheetCloseButton, obj);
  }
  const obj1 = { scrollable: true, header: closure_3(items(7149).BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp6Result;
  const obj2 = { contentContainerStyle: { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 }, children: null };
  items = [body, ];
  let num = -1;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  const obj3 = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  items[1] = closure_3(items(5685).TableRadioGroup, {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(iter.value);
      }
    },
    children: items.map((label, value) => closure_1_3(items(5688).TableRadioRow, { label: label.label, value }, value))
  });
  obj2.children = items;
  obj1.children = closure_4(items(6627).BottomSheetScrollView, obj2);
  return closure_3(items(7150).BottomSheet, obj1);
};
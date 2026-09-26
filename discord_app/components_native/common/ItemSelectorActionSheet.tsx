// === Module 8729: ItemSelectorActionSheet ===

// Module 8729 (ItemSelectorActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
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
  const token = items(4531).useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === importDefault);
  const obj2 = { title, trailing: null };
  let tmp6Result = null;
  if (null != onClose) {
    const obj3 = { onPress: onClose };
    tmp6Result = closure_3(items(6619).ActionSheetCloseButton, obj3);
  }
  const obj4 = { scrollable: true, header: closure_3(items(6570).BottomSheetTitleHeader, obj2), children: null };
  obj2.trailing = tmp6Result;
  const obj5 = { contentContainerStyle: null, children: null };
  const obj = items(4531);
  obj5.contentContainerStyle = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  const items1 = [body, ];
  let num = -1;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  const obj6 = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  items1[1] = closure_3(items(5997).TableRadioGroup, {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(iter.value);
      }
    },
    children: items.map((label, value) => closure_1_3(items(6000).TableRadioRow, { label: label.label, value }, value))
  });
  obj5.children = items1;
  obj4.children = closure_4(items(6045).BottomSheetScrollView, obj5);
  return closure_3(items(6571).BottomSheet, obj4);
};
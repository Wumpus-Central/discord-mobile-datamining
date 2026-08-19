// === Module 8821: ItemSelectorActionSheet ===

// Module 8821 (ItemSelectorActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("obj132").fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = items(4097);
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((item, index) => item.value === closure_1);
  obj = { title, trailing: null };
  let tmp6Result = null;
  if (null != onClose) {
    obj = { onPress: null };
    obj[0] = onClose;
    tmp6Result = callback(tmp(7176).ActionSheetCloseButton, obj);
  }
  obj1 = { scrollable: true, header: callback(items(6949).BottomSheetTitleHeader, obj), children: null };
  obj[1] = tmp6Result;
  const obj2 = { contentContainerStyle: { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 }, children: null };
  items = [body, ];
  let num = -1;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  const obj3 = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 };
  items[1] = callback(items(8101).TableRadioGroup, {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(iter.value);
      }
    },
    children: items.map((item, index) => callback(items(8100).TableRadioRow, { label: item.label, value: index }, index))
  });
  obj2[1] = items;
  obj1[2] = callback2(items(6952).BottomSheetScrollView, obj2);
  return callback(items(6950).BottomSheet, obj1);
};
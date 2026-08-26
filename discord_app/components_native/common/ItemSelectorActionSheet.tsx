// === Module 9183: ItemSelectorActionSheet ===

// Module 9183 (ItemSelectorActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = items(4165);
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === closure_1);
  obj = { title, trailing: null };
  let tmp6Result = null;
  if (null != onClose) {
    obj = { onPress: null };
    obj[0] = onClose;
    tmp6Result = tmp6(tmp(5937).ActionSheetCloseButton, obj);
  }
  obj1 = { scrollable: true, header: closure_3(items(5568).BottomSheetTitleHeader, obj), children: null };
  obj[1] = tmp6Result;
  const obj2 = { contentContainerStyle: { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 }, children: null };
  items = [body, ];
  let num = -1;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  const obj3 = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 };
  const tmp3 = importDefault;
  const tmp8 = closure_4;
  items[1] = closure_3(items(8203).TableRadioGroup, {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(iter.value);
      }
    },
    children: items.map((label, value) => callback(items(8202).TableRadioRow, { label: label.label, value }, value))
  });
  obj2[1] = items;
  obj1[2] = tmp8(items(5571).BottomSheetScrollView, obj2);
  return closure_3(items(5569).BottomSheet, obj1);
};
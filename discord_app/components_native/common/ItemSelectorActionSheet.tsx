// discord_app/components_native/common/ItemSelectorActionSheet.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../modules/safe_area/useSafeAreaInsets.native.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";

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
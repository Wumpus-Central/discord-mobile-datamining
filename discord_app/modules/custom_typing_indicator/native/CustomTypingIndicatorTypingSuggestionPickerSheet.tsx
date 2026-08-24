// === Module 14775: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 14775 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, buttonWrapper: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  let first;
  const tmp = callback4();
  const tmp2 = callback(React.useState(onChange.initialValue), 2);
  first = tmp2[0];
  let obj = { contentStyles: tmp.content, header: null, dismissAccessibilityLabel: null, children: null };
  obj = { title: null };
  let intl = onChange(1236).intl;
  obj[0] = intl.string(first(3406)["X+ijyw"]);
  obj[1] = callback2(onChange(6987).BottomSheetTitleHeader, obj);
  const intl2 = onChange(1236).intl;
  obj[2] = intl2.string(first(3406).hrl2cG);
  obj = { value: first, onChange: tmp2[1], hasIcons: false, children: null };
  const customTypingIndicatorSuggestionPresets = onChange(11199).getCustomTypingIndicatorSuggestionPresets();
  obj[3] = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1236).intl;
    obj[1] = intl.string(onChange(11199).getCustomTypingIndicatorSuggestionMessage(value));
    return callback(onChange(8139).TableRadioRow, obj, value);
  });
  const items = [callback2(onChange(8140).TableRadioGroup, obj), ];
  obj1 = { style: tmp.buttonWrapper, children: null };
  const obj2 = {
    onPress() {
      onChange(first);
      first(closure_1_2[14]).hideActionSheet();
    },
    text: null
  };
  const intl3 = onChange(1236).intl;
  obj2[1] = intl3.string(first(3406)["6ZxPAQ"]);
  obj1[1] = callback2(onChange(4750).Button, obj2);
  items[1] = callback2(View, obj1);
  obj[3] = items;
  return callback3(onChange(7213).ActionSheet, obj);
};
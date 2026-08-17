// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
  let obj = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  let intl = onChange(1236).intl;
  obj[1] = intl.string(first(3403).hrl2cG);
  obj = { value: first, onChange: tmp2[1], hasIcons: false, title: null, children: null };
  const intl2 = onChange(1236).intl;
  obj[3] = intl2.string(first(3403)["X+ijyw"]);
  const customTypingIndicatorSuggestionPresets = onChange(14709).getCustomTypingIndicatorSuggestionPresets();
  obj[4] = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1236).intl;
    obj[1] = intl.string(onChange(14709).getCustomTypingIndicatorSuggestionMessage(value));
    return callback(onChange(8100).TableRadioRow, obj, value);
  });
  const items = [callback2(onChange(8101).TableRadioGroup, obj), ];
  obj = { style: tmp.buttonWrapper, children: null };
  obj1 = {
    onPress() {
      onChange(first);
      first(closure_1_2[13]).hideActionSheet();
    },
    text: null
  };
  const intl3 = onChange(1236).intl;
  obj1[1] = intl3.string(first(3403)["6ZxPAQ"]);
  obj[1] = callback2(onChange(4745).Button, obj1);
  items[1] = callback2(View, obj);
  obj[2] = items;
  return callback3(onChange(7175).ActionSheet, obj);
};
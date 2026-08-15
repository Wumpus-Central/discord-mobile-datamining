// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, buttonWrapper: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  let first;
  const tmp = createCacheKey();
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
  const obj1 = {
    onPress() {
      onChange(first);
      first(outer1_2[13]).hideActionSheet();
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
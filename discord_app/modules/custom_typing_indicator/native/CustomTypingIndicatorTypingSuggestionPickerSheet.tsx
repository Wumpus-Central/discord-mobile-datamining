// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  const tmp = callback4();
  const tmp2 = callback(React.useState(onChange.initialValue), 2);
  const first = tmp2[0];
  let obj = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  let intl = onChange(1236).intl;
  obj[1] = intl.string(first(3403).hrl2cG);
  obj = { value: first, onChange: tmp2[1], hasIcons: false, title: null, children: null };
  const intl2 = onChange(1236).intl;
  obj[3] = intl2.string(first(3403)["X+ijyw"]);
  const customTypingIndicatorSuggestionPresets = onChange(14709).getCustomTypingIndicatorSuggestionPresets();
  obj[4] = customTypingIndicatorSuggestionPresets.map((item, index) => {
    const obj = { value: item, label: null };
    const intl = onChange(1236).intl;
    obj[1] = intl.string(onChange(14709).getCustomTypingIndicatorSuggestionMessage(item));
    return callback(onChange(8100).TableRadioRow, obj, item);
  });
  const items = [callback2(onChange(8101).TableRadioGroup, obj), ];
  obj = { style: tmp.buttonWrapper, children: null };
  obj1 = {
    onPress() {
      onChange(first);
      first(dependencyMap[13]).hideActionSheet();
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
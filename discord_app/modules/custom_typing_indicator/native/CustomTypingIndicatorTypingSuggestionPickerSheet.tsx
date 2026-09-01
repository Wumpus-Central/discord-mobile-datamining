// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../intl/CustomTypingIndicator.messages.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { content: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  importDefault = undefined;
  const tmp2 = callback(React.useState(onChange.initialValue), 2);
  importDefault = tmp2[1];
  let obj = { contentStyles: callback2().content, header: null, dismissAccessibilityLabel: null, children: null };
  obj = { title: null };
  let intl = onChange(1236).intl;
  obj[0] = intl.string(messagesProxyDefault["X+ijyw"]);
  obj[1] = jsx(onChange(5621).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1236).intl;
  obj[2] = intl2.string(messagesProxyDefault.hrl2cG);
  obj = {
    value: tmp2[0],
    onChange(arg0) {
      callback(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  };
  const tmp = callback2();
  const customTypingIndicatorSuggestionPresets = onChange(11543).getCustomTypingIndicatorSuggestionPresets();
  obj[3] = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1236).intl;
    obj[1] = intl.string(onChange(11543).getCustomTypingIndicatorSuggestionMessage(value));
    return callback2(onChange(7693).TableRadioRow, obj, value);
  });
  obj[3] = jsx(onChange(7692).TableRadioGroup, {
    value: tmp2[0],
    onChange(arg0) {
      callback(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
  return jsx(onChange(5989).ActionSheet, {
    value: tmp2[0],
    onChange(arg0) {
      callback(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
};
// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3680 from "../intl/CustomTypingIndicator.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx",
);

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  const tmp2 = _slicedToArray(noop.useState(onChange.initialValue), 2);
  importDefault = tmp2[1];
  let obj = { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null };
  const obj2 = { title: null };
  let intl = onChange(1115).intl;
  obj2.title = intl.string(_modDef3680["X+ijyw"]);
  obj.header = jsx(onChange(7396).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1115).intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3680.hrl2cG);
  const obj3 = {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null,
  };
  const tmp = closure_6();
  const customTypingIndicatorSuggestionPresets = onChange(12228).getCustomTypingIndicatorSuggestionPresets();
  obj3.children = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1115).intl;
    obj.label = intl.string(onChange(12228).getCustomTypingIndicatorSuggestionMessage(value));
    return jsx(onChange(5907).TableRadioRow, { value, label: null }, value);
  });
  obj.children = jsx(onChange(5904).TableRadioGroup, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null,
  });
  return jsx(onChange(7444).ActionSheet, {
    contentStyles: closure_6().content,
    header: null,
    dismissAccessibilityLabel: null,
    children: null,
  });
}

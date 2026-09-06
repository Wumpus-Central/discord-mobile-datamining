// === Module 15358: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 15358 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 576 */;
import _modDef3549 from "module_3549" /* 3549 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { content: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  const tmp2 = _slicedToArray(noop.useState(onChange.initialValue), 2);
  importDefault = tmp2[1];
  let obj = { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null };
  obj = { title: null };
  let intl = onChange(1114).intl;
  obj.title = intl.string(_modDef3549["X+ijyw"]);
  obj.header = jsx(onChange(7149).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1114).intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3549.hrl2cG);
  obj = {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  };
  const tmp = closure_6();
  const customTypingIndicatorSuggestionPresets = onChange(11971).getCustomTypingIndicatorSuggestionPresets();
  obj.children = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1114).intl;
    obj.label = intl.string(onChange(11971).getCustomTypingIndicatorSuggestionMessage(value));
    return jsx(onChange(5688).TableRadioRow, { value, label: null }, value);
  });
  obj.children = jsx(onChange(5685).TableRadioGroup, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
  return jsx(onChange(7198).ActionSheet, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
};
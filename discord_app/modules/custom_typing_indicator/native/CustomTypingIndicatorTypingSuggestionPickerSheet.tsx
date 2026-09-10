// === Module 15439: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 15439 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 576 */;
import _modDef3592 from "module_3592" /* 3592 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
fn(4605);
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
  obj.title = intl.string(_modDef3592["X+ijyw"]);
  obj.header = jsx(onChange(7201).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1114).intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3592.hrl2cG);
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
  const customTypingIndicatorSuggestionPresets = onChange(12041).getCustomTypingIndicatorSuggestionPresets();
  obj.children = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1114).intl;
    obj.label = intl.string(onChange(12041).getCustomTypingIndicatorSuggestionMessage(value));
    return jsx(onChange(5738).TableRadioRow, { value, label: null }, value);
  });
  obj.children = jsx(onChange(5735).TableRadioGroup, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
  return jsx(onChange(7249).ActionSheet, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
};
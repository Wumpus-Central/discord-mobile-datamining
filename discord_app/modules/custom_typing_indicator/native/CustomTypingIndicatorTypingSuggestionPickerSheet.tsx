// === Module 17340: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 17340 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 575 */;
import _modDef3870 from "module_3870" /* 3870 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  onChange = onChange.onChange;
  const tmp2 = _slicedToArray(noop.useState(onChange.initialValue), 2);
  importDefault = tmp2[1];
  let obj = { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null };
  const obj2 = { title: null };
  let intl = onChange(1113).intl;
  obj2.title = intl.string(_modDef3870["X+ijyw"]);
  obj.header = jsx(onChange(7321).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1113).intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3870.hrl2cG);
  const obj3 = {
    value: tmp2[0],
    onChange: function handleChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  };
  const tmp = closure_6();
  const customTypingIndicatorSuggestionPresets = onChange(13718).getCustomTypingIndicatorSuggestionPresets();
  obj3.children = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1113).intl;
    obj.label = intl.string(onChange(13718).getCustomTypingIndicatorSuggestionMessage(value));
    return jsx(onChange(7061).TableRadioRow, { value, label: null }, value);
  });
  obj.children = jsx(onChange(7058).TableRadioGroup, {
    value: tmp2[0],
    onChange: function handleChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
  return jsx(onChange(7366).ActionSheet, { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null });
};
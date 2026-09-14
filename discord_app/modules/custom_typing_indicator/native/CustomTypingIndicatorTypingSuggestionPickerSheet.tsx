// === Module 15444: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 15444 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 576 */;
import _modDef3592 from "module_3592" /* 3592 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
  let intl = onChange(1114).intl;
  obj2.title = intl.string(_modDef3592["X+ijyw"]);
  obj.header = jsx(onChange(7252).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1114).intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3592.hrl2cG);
  const obj3 = {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  };
  const tmp = closure_6();
  const customTypingIndicatorSuggestionPresets = onChange(12101).getCustomTypingIndicatorSuggestionPresets();
  obj3.children = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1114).intl;
    obj.label = intl.string(onChange(12101).getCustomTypingIndicatorSuggestionMessage(value));
    return jsx(onChange(5769).TableRadioRow, { value, label: null }, value);
  });
  obj.children = jsx(onChange(5766).TableRadioGroup, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
  return jsx(onChange(7300).ActionSheet, { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null });
};
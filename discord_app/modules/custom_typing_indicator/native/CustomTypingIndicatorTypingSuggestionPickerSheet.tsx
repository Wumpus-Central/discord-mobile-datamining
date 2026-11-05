// === Module 17625: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 17625 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3997 from "module_3997" /* 3997 */;
import TableRadioGroup from "TableRadioGroup" /* 7202 */;
import TableRadioRow from "TableRadioRow" /* 7205 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7460 */;
import ActionSheet from "ActionSheet" /* 7504 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13964 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(initialValue) {
  ({ presets, onChange: require } = initialValue);
  const tmp2 = _slicedToArray(noop.useState(initialValue.initialValue), 2);
  importDefault = tmp2[1];
  let obj = { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null };
  const obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef3997["X+ijyw"]);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const intl2 = util.intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3997.hrl2cG);
  const tmp = closure_6();
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value: tmp2[0],
    onChange: function handleChange(arg0) {
      closure_1(arg0);
      require(arg0);
    },
    hasIcons: false,
    children: presets.map((value) => {
      const obj = { value, label: null };
      const intl = util.intl;
      obj.label = intl.string(CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionMessage(value));
      return jsx(TableRadioRow.TableRadioRow, { value, label: null }, value);
    })
  });
  return jsx(ActionSheet.ActionSheet, { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null });
};
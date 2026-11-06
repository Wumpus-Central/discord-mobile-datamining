// === Module 17614: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 17614 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import TableRadioGroup from "TableRadioGroup" /* 7149 */;
import TableRadioRow from "TableRadioRow" /* 7152 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7405 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13940 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(arg0) {
  ({ presets, highlightedPresets: require, onChange: importDefault } = arg0);
  ({ initialValue, onDismiss } = arg0);
  const tmp2 = _slicedToArray(noop.useState(initialValue), 2);
  dependencyMap = tmp2[1];
  const obj = { contentStyles: closure_6().content, onDismiss, header: null, dismissAccessibilityLabel: null, children: null };
  let obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef4026["X+ijyw"]);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const intl2 = util.intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef4026.hrl2cG);
  const tmp = closure_6();
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value: tmp2[0],
    onChange: function handleChange(arg0) {
      closure_2(arg0);
      importDefault(arg0);
    },
    hasIcons: false,
    children: presets.map((value) => {
      let hasItem;
      if (closure_1_0 != null) {
        hasItem = closure_1_0.includes(value);
      }
      const obj2 = { value, label: null, badge: null };
      const intl = util.intl;
      obj2.label = intl.string(CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionMessage(value));
      let obj4;
      if (true === hasItem) {
        obj4 = { type: "new", variant: "primary" };
      }
      obj2.badge = obj4;
      return jsx(TableRadioRow.TableRadioRow, { value, label: null, badge: null }, value);
    })
  });
  return jsx(ActionSheet.ActionSheet, { contentStyles: closure_6().content, onDismiss, header: null, dismissAccessibilityLabel: null, children: null });
};
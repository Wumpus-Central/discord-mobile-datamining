// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef4026 from "../intl/CustomTypingIndicator.messages.js";
import TableRadioGroup from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import CustomTypingIndicatorUtils from "../CustomTypingIndicatorUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx",
);

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(arg0) {
  ({ presets, highlightedPresets: require, onChange: importDefault } = arg0);
  ({ initialValue, onDismiss } = arg0);
  const tmp2 = _slicedToArray(noop.useState(initialValue), 2);
  dependencyMap = tmp2[1];
  const obj = {
    contentStyles: closure_6().content,
    onDismiss,
    header: null,
    dismissAccessibilityLabel: null,
    children: null,
  };
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
    }),
  });
  return jsx(ActionSheet.ActionSheet, {
    contentStyles: closure_6().content,
    onDismiss,
    header: null,
    dismissAccessibilityLabel: null,
    children: null,
  });
}

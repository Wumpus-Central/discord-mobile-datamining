// === Module 17799: InviteSelectActionSheet ===

// Module 17799 (InviteSelectActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { content: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  let obj = { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  obj = {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  return jsx(Sheet_BottomSheet.BottomSheet, {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
};
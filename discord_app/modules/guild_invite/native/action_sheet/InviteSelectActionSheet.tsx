// discord_app/modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  let obj = {
    contentStyles: closure_4().content,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
    children: null,
  };
  obj = {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) =>
      jsx(
        TableRadioRow.TableRadioRow,
        { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel },
        "" + value.value,
      ),
    ),
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) =>
      jsx(
        TableRadioRow.TableRadioRow,
        { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel },
        "" + value.value,
      ),
    ),
  });
  return jsx(Sheet_BottomSheet.BottomSheet, {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) =>
      jsx(
        TableRadioRow.TableRadioRow,
        { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel },
        "" + value.value,
      ),
    ),
  });
}

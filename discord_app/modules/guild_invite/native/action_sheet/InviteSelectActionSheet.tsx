// discord_app/modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  const obj = {
    contentStyles: closure_4().content,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
    children: null,
  };
  const tmp = closure_4();
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
    contentStyles: closure_4().content,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
    children: null,
  });
}

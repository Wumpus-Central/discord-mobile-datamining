// === Module 19951: InviteSelectActionSheet ===

// Module 19951 (InviteSelectActionSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import TableRadioGroup from "TableRadioGroup" /* 7052 */;
import TableRadioRow from "TableRadioRow" /* 7055 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7315 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  const obj = { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const tmp = closure_4();
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value,
    onChange: function handleChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  return jsx(Sheet_BottomSheet.BottomSheet, { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null });
};
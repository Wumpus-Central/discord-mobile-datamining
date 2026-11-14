// === Module 7453: TableRowDivider ===

// Module 7453 (TableRowDivider)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5902 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const TABLE_DIVIDER_WIDTH = fn(7454).TABLE_DIVIDER_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_6 = createStyles.createStyles((arg0, arg1, arg2) => {
  const obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: null, marginTop: null };
  let num = 12;
  if (arg0) {
    num = arg2;
  }
  let num2 = 0;
  if (arg1) {
    num2 = ButtonConstants.MEDIUM_BUTTON_HEIGHT - 8;
  }
  const obj2 = { container: obj, divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  obj.paddingStart = num + num2;
  obj.marginTop = -TABLE_DIVIDER_WIDTH;
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = adjustSpacingForIcon.adjustSpacingForDragHandle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_6(flag, flag2, useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  const obj2 = { style: tmp.container, children: <View style={tmp.divider} /> };
  return <View style={tmp.container}><View style={tmp.divider} /></View>;
}
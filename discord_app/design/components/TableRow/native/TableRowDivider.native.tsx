// discord_app/design/components/TableRow/native/TableRowDivider.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const TABLE_DIVIDER_WIDTH = fn(5603).TABLE_DIVIDER_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: null, marginTop: null };
  let num = 12;
  if (arg0) {
    num = arg1;
  }
  obj = { container: obj, divider: null, paddingStart: num, marginTop: -TABLE_DIVIDER_WIDTH };
  obj = { height: tmp, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.divider = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let obj = useToken;
  const tmp = closure_6(flag, obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.divider };
  obj.children = <View style={tmp.divider} />;
  return <View style={tmp.divider} />;
};

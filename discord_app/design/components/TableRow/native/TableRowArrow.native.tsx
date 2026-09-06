// discord_app/design/components/TableRow/native/TableRowArrow.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import _modDef5613 from "../../../../../_runtime/metro/05613__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const IconDefault = Icon;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { icon: null, iconColor: null };
let size = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH,
  height: 24,
  marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START,
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END,
};
createStyles.icon = size;
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.iconColor = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5613, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, {
    style: tmp.icon,
    color: tmp.iconColor.color,
    source: _modDef5613,
    size: Icon.IconSizes.CUSTOM,
  });
};

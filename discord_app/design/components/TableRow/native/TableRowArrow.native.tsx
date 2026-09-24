// discord_app/design/components/TableRow/native/TableRowArrow.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import _modDef5918 from "../../../../../_runtime/metro/05918__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const IconDefault = Icon;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { icon: null, iconColor: null };
let size = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH,
  height: 24,
  marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START,
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END,
};
obj2.icon = size;
obj2.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5918, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, {
    style: tmp.icon,
    color: tmp.iconColor.color,
    source: _modDef5918,
    size: Icon.IconSizes.CUSTOM,
  });
};

// === Module 6120: TableRowArrow ===

// Module 6120 (TableRowArrow)
import nativeDefault from "native" /* 576 */;
import Icon from "Icon" /* 5479 */;
import _modDef6121 from "module_6121" /* 6121 */;
import noop from "module_19" /* 19 */;

const IconDefault = Icon;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
const obj2 = { icon: null, iconColor: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
obj2.icon = size;
obj2.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef6121, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, { style: tmp.icon, color: tmp.iconColor.color, source: _modDef6121, size: Icon.IconSizes.CUSTOM });
};
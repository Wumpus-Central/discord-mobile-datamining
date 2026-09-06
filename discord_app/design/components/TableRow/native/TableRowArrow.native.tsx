// === Module 5612: TableRowArrow ===

// Module 5612 (TableRowArrow)
import nativeDefault from "native" /* 576 */;
import Icon from "Icon" /* 4977 */;
import _modDef5613 from "module_5613" /* 5613 */;
import noop from "module_19" /* 19 */;

const IconDefault = Icon;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { icon: null, iconColor: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createStyles.icon = size;
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.iconColor = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5613, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5613, size: Icon.IconSizes.CUSTOM });
};
// === Module 11458: MoreYouCanDoRow ===

// Module 11458 (MoreYouCanDoRow)
import TableRow from "TableRow" /* 5655 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRow.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};
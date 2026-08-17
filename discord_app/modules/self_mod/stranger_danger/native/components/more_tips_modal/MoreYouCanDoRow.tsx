// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRowInner.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};
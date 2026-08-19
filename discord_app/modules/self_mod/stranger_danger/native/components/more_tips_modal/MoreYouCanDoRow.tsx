// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import TableRowInner from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRowInner.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};
// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx
import TableRow from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx",
);

export default function MoreYouCanDoRow(arg0) {
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRow.TableRow, { label, subLabel, onPress, icon, variant, disabled });
}

// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  let description;
  let disabled;
  let icon;
  let onClick;
  let title;
  let variant;
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(require(5224) /* TableRowInner */.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};
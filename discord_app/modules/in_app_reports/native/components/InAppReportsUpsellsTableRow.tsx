// === Module 12709: InAppReportsUpsellsTableRow ===

// Module 12709 (InAppReportsUpsellsTableRow)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 5564 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

export default function InAppReportsUpsellsTableRow(disabled) {
  ({ title, disabledTitle, variant } = disabled);
  if (variant === undefined) {
    variant = "default";
  }
  disabled = disabled.disabled;
  ({ onPress, icon } = disabled);
  let tmp2 = title;
  if (disabled) {
    tmp2 = title;
    if (null != disabledTitle) {
      tmp2 = disabledTitle;
    }
  }
  const obj = { label: tmp2, subLabel: null, onPress: null, icon: null, disabled: null, variant: null };
  let description = null;
  if (!disabled) {
    description = disabled.description;
  }
  obj[1] = description;
  obj[2] = onPress;
  obj[3] = icon;
  obj[4] = disabled;
  obj[5] = variant;
  return jsx(TableRowInner.TableRow, { label: tmp2, subLabel: null, onPress: null, icon: null, disabled: null, variant: null });
};
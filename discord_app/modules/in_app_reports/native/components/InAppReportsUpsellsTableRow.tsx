import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";
// discord_app/modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

export default function InAppReportsUpsellsTableRow(disabled) {
  let disabledTitle;
  let icon;
  let onPress;
  let title;
  let variant;
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
  return jsx(TableRowInner /* TableRowInner */.TableRow, { label: tmp2, subLabel: null, onPress: null, icon: null, disabled: null, variant: null });
};
// === Module 9051: InAppReportsUpsellsTableRow ===

// Module 9051 (InAppReportsUpsellsTableRow)
import TableRow from "TableRow" /* 5605 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

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
  obj.subLabel = description;
  obj.onPress = onPress;
  obj.icon = icon;
  obj.disabled = disabled;
  obj.variant = variant;
  return jsx(TableRow.TableRow, { label: tmp2, subLabel: null, onPress: null, icon: null, disabled: null, variant: null });
};
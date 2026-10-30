// discord_app/modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  return jsx(TableRow.TableRow, {
    label: tmp2,
    subLabel: null,
    onPress: null,
    icon: null,
    disabled: null,
    variant: null,
  });
}

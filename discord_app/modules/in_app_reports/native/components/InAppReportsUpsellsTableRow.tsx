// === Module 13492: InAppReportsUpsellsTableRow ===

// Module 13492 (InAppReportsUpsellsTableRow)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 6186 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InAppReportsUpsellsTableRow(description) {
  const cResult = c.c(7);
  ({ title, disabledTitle, variant, disabled, onPress, icon } = description);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  let tmp4 = title;
  if (disabled) {
    tmp4 = title;
    if (null != disabledTitle) {
      tmp4 = disabledTitle;
    }
  }
  description = null;
  if (!disabled) {
    description = description.description;
  }
  if (cResult[0] === disabled) {
    if (cResult[1] === icon) {
      if (cResult[2] === onPress) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === description) {
            if (cResult[5] === str) {
              let tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
      }
    }
  }
  const tmp8 = jsx(TableRow.TableRow, { label: tmp4, subLabel: description, onPress, icon, disabled, variant: str });
  cResult[0] = disabled;
  cResult[1] = icon;
  cResult[2] = onPress;
  cResult[3] = tmp4;
  cResult[4] = description;
  cResult[5] = str;
  cResult[6] = tmp8;
  tmp7 = tmp8;
}) : (function InAppReportsUpsellsTableRow(disabled) {
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
});
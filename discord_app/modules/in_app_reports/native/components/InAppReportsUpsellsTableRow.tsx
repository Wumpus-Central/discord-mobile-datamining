// discord_app/modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let description;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (description) => {
      let disabled;
      let disabledTitle;
      let icon;
      let onPress;
      let title;
      let variant;
      const obj = react2;
      const cResult = obj.c(7);
      ({ title, disabledTitle, variant, disabled, onPress, icon } = description);
      let str = "default";
      description = description.description;
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
      let tmp6 = null;
      if (!disabled) {
        tmp6 = description;
      }
      if (cResult[0] === disabled) {
        if (cResult[1] === icon) {
          if (cResult[2] === onPress) {
            if (cResult[3] === tmp4) {
              if (cResult[4] === tmp6) {
                let tmp7;
                if (cResult[5] === str) {
                  tmp7 = cResult[6];
                }
                return tmp7;
              }
            }
          }
        }
      }
      const tmp8 = jsx(TableRow2.TableRow, { label: tmp4, subLabel: tmp6, onPress, icon, disabled, variant: str });
      cResult[0] = disabled;
      cResult[1] = icon;
      cResult[2] = onPress;
      cResult[3] = tmp4;
      cResult[4] = tmp6;
      cResult[5] = str;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    }
  : (description) => {
      let disabledTitle;
      let icon;
      let onPress;
      let title;
      let variant;
      ({ title, disabledTitle, variant } = description);
      description = description.description;
      if (variant === undefined) {
        variant = "default";
      }
      const disabled = description.disabled;
      ({ onPress, icon } = description);
      let tmp2 = title;
      const TableRow = TableRow2.TableRow;
      if (disabled) {
        tmp2 = title;
        if (null != disabledTitle) {
          tmp2 = disabledTitle;
        }
      }
      let tmp4 = null;
      if (!disabled) {
        tmp4 = description;
      }
      return (
        <TableRow label={tmp2} subLabel={tmp4} onPress={onPress} icon={icon} disabled={disabled} variant={variant} />
      );
    };
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

export default tmp3;

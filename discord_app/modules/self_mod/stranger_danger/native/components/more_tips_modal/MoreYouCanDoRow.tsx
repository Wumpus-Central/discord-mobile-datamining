// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import TableRow from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ title, description, variant, onClick, icon, disabled } = arg0);
      if (cResult[0] === description) {
        if (cResult[1] === disabled) {
          if (cResult[2] === icon) {
            if (cResult[3] === onClick) {
              if (cResult[4] === title) {
                if (cResult[5] === variant) {
                  let tmp4 = cResult[6];
                }
                return tmp4;
              }
            }
          }
        }
      }
      const tmp5 = jsx(TableRow.TableRow, {
        label: title,
        subLabel: description,
        onPress: onClick,
        icon,
        variant,
        disabled,
      });
      cResult[0] = description;
      cResult[1] = disabled;
      cResult[2] = icon;
      cResult[3] = onClick;
      cResult[4] = title;
      cResult[5] = variant;
      cResult[6] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      ({ title, description, variant, onClick, icon, disabled } = arg0);
      return jsx(TableRow.TableRow, { label, subLabel, onPress, icon, variant, disabled });
    };

// === Module 9820: MoreYouCanDoRow ===

// Module 9820 (MoreYouCanDoRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TableRow from "TableRow" /* 5993 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let description;
  let disabled;
  let icon;
  let onClick;
  let title;
  let variant;
  const obj = react2;
  const cResult = obj.c(7);
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  if (cResult[0] === description) {
    if (cResult[1] === disabled) {
      if (cResult[2] === icon) {
        if (cResult[3] === onClick) {
          if (cResult[4] === title) {
            let tmp4;
            if (cResult[5] === variant) {
              tmp4 = cResult[6];
            }
            return tmp4;
          }
        }
      }
    }
  }
  const tmp5 = jsx(TableRow.TableRow, { label: title, subLabel: description, onPress: onClick, icon, variant, disabled });
  cResult[0] = description;
  cResult[1] = disabled;
  cResult[2] = icon;
  cResult[3] = onClick;
  cResult[4] = title;
  cResult[5] = variant;
  cResult[6] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let description;
  let disabled;
  let icon;
  let onClick;
  let title;
  let variant;
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRow.TableRow, { label, subLabel, onPress, icon, variant, disabled });
});
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default tmp3;
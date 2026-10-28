// === Module 15405: FormDropdown ===

// Module 15405 (FormDropdown)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5270 */;
import LockIcon from "LockIcon" /* 8603 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9074 */;
import ChevronSmallDownIcon2 from "ChevronSmallDownIcon" /* 11118 */;
import FormStylesDefault from "FormStyles" /* 15406 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5004);
const styles = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormDropdown(arg0) {
  const cResult = c.c(16);
  ({ disabled, label, leading } = arg0);
  ({ onPress, placeholder } = arg0);
  const tmp4 = styles();
  const tmp6 = FormStylesDefault();
  if (cResult[0] !== disabled) {
    if (disabled) {
      let ChevronSmallDownIcon = LockIcon.LockIcon;
    } else {
      ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
    }
    const tmp8Result = React3(ChevronSmallDownIcon, { size: "md" });
    cResult[0] = disabled;
    cResult[1] = tmp8Result;
  } else {
    if (cResult[2] === tmp6.dropdownInput) {
      if (cResult[3] === tmp4.container) {
        let tmp11 = cResult[4];
      }
      let str = "text-muted";
      if (null != label) {
        str = "text-default";
      }
      if (label == null) {
        label = placeholder;
      }
      if (cResult[5] === tmp4.content) {
        if (cResult[6] === str) {
          if (cResult[7] === label) {
            let tmp14 = cResult[8];
          }
          if (cResult[9] === disabled) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === leading) {
                if (cResult[12] === tmp11) {
                  if (cResult[13] === onPress) {
                    if (cResult[14] === tmp14) {
                      let tmp17 = cResult[15];
                    }
                    return tmp17;
                  }
                }
              }
            }
          }
          const obj2 = { style: tmp11, accessibilityRole: "spinbutton", disabled, onPress, children: null };
          const items = [leading, tmp14, tmp7];
          obj2.children = items;
          const tmp19 = React4(TouchableHitBoxDefault, obj2);
          cResult[9] = disabled;
          cResult[10] = tmp7;
          cResult[11] = leading;
          cResult[12] = tmp11;
          cResult[13] = onPress;
          cResult[14] = tmp14;
          cResult[15] = tmp19;
          tmp17 = tmp19;
        }
      }
      const obj3 = { style: tmp4.content, variant: "text-md/medium", color: str, children: label };
      const tmp16 = React3(Text_Text.Text, obj3);
      cResult[5] = tmp4.content;
      cResult[6] = str;
      cResult[7] = label;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
    const items1 = [tmp4.container, tmp6.dropdownInput];
    cResult[2] = tmp6.dropdownInput;
    cResult[3] = tmp4.container;
    cResult[4] = items1;
    tmp11 = items1;
  }
}) : (function FormDropdown(arg0) {
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = styles();
  if (disabled) {
    let ChevronSmallDownIcon = LockIcon.LockIcon;
    let tmp7 = require;
  } else {
    ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
    tmp7 = require;
  }
  const tmp4 = FormStylesDefault();
  const obj = { style: null, accessibilityRole: "spinbutton", disabled, onPress: null, children: null };
  const items = [tmp.container, tmp4.dropdownInput];
  obj.style = items;
  let tmp11;
  const tmp5Result = React3(ChevronSmallDownIcon, { size: "md" });
  if (!disabled) {
    tmp11 = onPress;
  }
  obj.onPress = tmp11;
  const items1 = [leading, , ];
  const obj2 = { style: tmp.content, variant: "text-md/medium", color: null, children: null };
  let str = "text-muted";
  if (null != label) {
    str = "text-default";
  }
  obj2.color = str;
  if (label == null) {
    label = placeholder;
  }
  obj2.children = label;
  items1[1] = React3(tmp7(5270).Text, obj2);
  items1[2] = tmp5Result;
  obj.children = items1;
  return React4(TouchableHitBoxDefault, obj);
});
export const useFormDropdownStyles = styles;
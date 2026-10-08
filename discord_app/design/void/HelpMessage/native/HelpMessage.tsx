// === Module 14228: HelpMessage ===

// Module 14228 (HelpMessage)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4992 */;
import CircleXIcon from "CircleXIcon" /* 4997 */;
import CircleErrorIcon from "CircleErrorIcon" /* 5000 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5012 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
function getIcon(arg0) {
  if (obj17.WARNING === arg0) {
    const obj2 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    return React4(CircleErrorIcon.CircleErrorIcon, obj2);
  } else if (obj17.INFO === arg0) {
    const obj3 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
    return React4(CircleInformationIcon.CircleInformationIcon, obj3);
  } else if (obj17.ERROR === arg0) {
    const obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
    return React4(CircleXIcon.CircleXIcon, obj4);
  } else if (obj17.SUCCESS === arg0) {
    const obj = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
    return React4(CircleCheckIcon.CircleCheckIcon, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 }, row: { display: "flex", flexDirection: "row", alignItems: "center" }, content: null, warningContainer: null, infoContainer: null, errorContainer: null, successContainer: null };
let obj3 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 };
obj2.content = { flex: 1, marginLeft: nativeDefault.space.PX_8 };
let obj5 = { backgroundColor: null, borderColor: null };
fn(1103);
let ColorUtils = fn(1103);
obj5.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.YELLOW_300), 0.1);
obj5.borderColor = nativeDefault.unsafe_rawColors.YELLOW_300;
obj2.warningContainer = obj5;
const obj8 = { backgroundColor: null, borderColor: null };
fn(1103);
ColorUtils = fn(1103);
obj8.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.BLUE_345), 0.1);
obj8.borderColor = nativeDefault.unsafe_rawColors.BLUE_345;
obj2.infoContainer = obj8;
const obj11 = { backgroundColor: null, borderColor: null };
fn(1103);
ColorUtils = fn(1103);
obj11.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.RED_400), 0.1);
obj11.borderColor = nativeDefault.unsafe_rawColors.RED_400;
obj2.errorContainer = obj11;
const obj14 = { backgroundColor: null, borderColor: null };
fn(1103);
ColorUtils = fn(1103);
obj14.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.GREEN_400), 0.1);
obj14.borderColor = nativeDefault.unsafe_rawColors.GREEN_400;
obj2.successContainer = obj14;
let closure_6 = createStyles.createStyles(obj2);
const obj17 = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, marginLeft: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HelpMessage(arg0) {
  const cResult = c.c(21);
  ({ children, messageType, textVariant, textColor, borderRadius, button } = arg0);
  let str = "text-sm/medium";
  if (undefined !== textVariant) {
    str = textVariant;
  }
  let str2 = "text-default";
  if (undefined !== textColor) {
    str2 = textColor;
  }
  if (undefined === borderRadius) {
    borderRadius = nativeDefault.radii.xs;
  }
  const tmp5 = closure_6();
  if (obj17.WARNING === messageType) {
    let successContainer = tmp5.warningContainer;
  } else if (obj17.INFO === messageType) {
    successContainer = tmp5.infoContainer;
  } else if (obj17.ERROR === messageType) {
    successContainer = tmp5.errorContainer;
  } else if (obj17.SUCCESS === messageType) {
    successContainer = tmp5.successContainer;
  }
  if (cResult[0] !== borderRadius) {
    const obj2 = { borderRadius };
    cResult[0] = borderRadius;
    cResult[1] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp5.container) {
    if (cResult[3] === successContainer) {
      if (cResult[4] === tmp7) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] !== messageType) {
        const tmp11 = getIcon(messageType);
        cResult[6] = messageType;
        cResult[7] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === tmp5.content) {
          if (cResult[10] === str2) {
            if (cResult[11] === str) {
              let tmp12 = cResult[12];
            }
            if (cResult[13] === tmp5.row) {
              if (cResult[14] === tmp12) {
                if (cResult[15] === tmp9) {
                  let tmp15 = cResult[16];
                }
                if (cResult[17] === button) {
                  if (cResult[18] === tmp15) {
                    if (cResult[19] === tmp8) {
                      let tmp19 = cResult[20];
                    }
                    return tmp19;
                  }
                }
                const obj3 = { style: tmp8, children: null };
                const items = [tmp15, button];
                obj3.children = items;
                const tmp22 = hasOwnProperty(View, obj3);
                cResult[17] = button;
                cResult[18] = tmp15;
                cResult[19] = tmp8;
                cResult[20] = tmp22;
                tmp19 = tmp22;
              }
            }
            const obj4 = { style: tmp5.row, children: null };
            const items1 = [tmp9, tmp12];
            obj4.children = items1;
            const tmp18 = hasOwnProperty(View, obj4);
            cResult[13] = tmp5.row;
            cResult[14] = tmp12;
            cResult[15] = tmp9;
            cResult[16] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
      const obj5 = { style: tmp5.content, color: str2, variant: str, children };
      const tmp14 = React4(Text_Text.Text, obj5);
      cResult[8] = children;
      cResult[9] = tmp5.content;
      cResult[10] = str2;
      cResult[11] = str;
      cResult[12] = tmp14;
      tmp12 = tmp14;
    }
  }
  const items2 = [tmp5.container, successContainer, tmp7];
  cResult[2] = tmp5.container;
  cResult[3] = successContainer;
  cResult[4] = tmp7;
  cResult[5] = items2;
  tmp8 = items2;
}) : (function HelpMessage(children) {
  ({ messageType, textVariant } = children);
  if (textVariant === undefined) {
    textVariant = "text-sm/medium";
  }
  let str = children.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let xs = children.borderRadius;
  if (xs === undefined) {
    xs = nativeDefault.radii.xs;
  }
  const tmp3 = closure_6();
  const items = [tmp3.container, , ];
  if (obj17.WARNING === messageType) {
    let successContainer = tmp3.warningContainer;
  } else if (obj17.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (obj17.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (obj17.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  const obj = { style: items, children: null };
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  const obj2 = { style: tmp3.row, children: null };
  const items1 = [getIcon(messageType), React4(Text_Text.Text, { style: tmp3.content, color: str, variant: textVariant, children: children.children })];
  obj2.children = items1;
  const items2 = [hasOwnProperty(View, obj2), children.button];
  obj.children = items2;
  return hasOwnProperty(View, obj);
});
export const HelpMessageTypes = obj17;
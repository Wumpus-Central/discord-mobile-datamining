// === Module 13925: HelpMessage ===

// Module 13925 (HelpMessage)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 4798 */;
import CircleXIcon2 from "CircleXIcon" /* 4803 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 4806 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4818 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "utils/ColorUtils" /* 1103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let int2rgba;
let int2rgba2;
let int2rgba3;
let int2rgba4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function getIcon(arg0) {
  if (obj8.WARNING === arg0) {
    const obj2 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    return React3(CircleErrorIcon, obj2);
  } else if (obj8.INFO === arg0) {
    const obj3 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    return React3(CircleInformationIcon, obj3);
  } else if (obj8.ERROR === arg0) {
    const obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
    const CircleXIcon = CircleXIcon2.CircleXIcon;
    return React3(CircleXIcon, obj4);
  } else if (obj8.SUCCESS === arg0) {
    const obj = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
    const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
    return React3(CircleCheckIcon, obj);
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: { display: "flex", flexDirection: "row", alignItems: "center" }, content: obj3, warningContainer: obj4, infoContainer: obj5, errorContainer: obj6, successContainer: obj7 };
obj2 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, marginLeft: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.YELLOW_300), 0.1), borderColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
ColorUtils = ColorUtils_mod;
int2rgba = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
obj5 = { backgroundColor: int2rgba2(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.BLUE_345), 0.1), borderColor: nativeDefault.unsafe_rawColors.BLUE_345 };
ColorUtils = ColorUtils_mod;
int2rgba2 = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
obj6 = { backgroundColor: int2rgba3(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.RED_400), 0.1), borderColor: nativeDefault.unsafe_rawColors.RED_400 };
ColorUtils = ColorUtils_mod;
int2rgba3 = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
obj7 = { backgroundColor: int2rgba4(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.GREEN_400), 0.1), borderColor: nativeDefault.unsafe_rawColors.GREEN_400 };
ColorUtils = ColorUtils_mod;
int2rgba4 = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
let closure_6 = createStyles(obj);
const obj8 = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let borderRadius;
  let button;
  let children;
  let items;
  let items1;
  let messageType;
  let successContainer;
  let textColor;
  let textVariant;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(21);
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
  const container = tmp5.container;
  if (obj8.WARNING === messageType) {
    successContainer = tmp5.warningContainer;
  } else if (obj8.INFO === messageType) {
    successContainer = tmp5.infoContainer;
  } else if (obj8.ERROR === messageType) {
    successContainer = tmp5.errorContainer;
  } else if (obj8.SUCCESS === messageType) {
    successContainer = tmp5.successContainer;
  }
  if (cResult[0] !== borderRadius) {
    const obj2 = { borderRadius };
    cResult[0] = borderRadius;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp5.container) {
    if (cResult[3] === successContainer) {
      let tmp8;
      let tmp9;
      if (cResult[4] === tmp7) {
        tmp8 = cResult[5];
      }
      const row = tmp5.row;
      if (cResult[6] !== messageType) {
        const tmp11 = getIcon(messageType);
        cResult[6] = messageType;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === tmp5.content) {
          if (cResult[10] === str2) {
            let tmp12;
            if (cResult[11] === str) {
              tmp12 = cResult[12];
            }
            if (cResult[13] === tmp5.row) {
              if (cResult[14] === tmp12) {
                let tmp15;
                if (cResult[15] === tmp9) {
                  tmp15 = cResult[16];
                }
                if (cResult[17] === button) {
                  if (cResult[18] === tmp15) {
                    let tmp19;
                    if (cResult[19] === tmp8) {
                      tmp19 = cResult[20];
                    }
                    return tmp19;
                  }
                }
                const obj3 = { style: tmp8, children: items };
                items = [tmp15, button];
                const tmp22 = hasOwnProperty(View, obj3);
                cResult[17] = button;
                cResult[18] = tmp15;
                cResult[19] = tmp8;
                cResult[20] = tmp22;
                tmp19 = tmp22;
              }
            }
            const obj4 = { style: row, children: items1 };
            items1 = [tmp9, tmp12];
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
      const tmp14 = React3(Text_Text.Text, obj5);
      cResult[8] = children;
      cResult[9] = tmp5.content;
      cResult[10] = str2;
      cResult[11] = str;
      cResult[12] = tmp14;
      tmp12 = tmp14;
    }
  }
  const items2 = [container, successContainer, tmp7];
  cResult[2] = tmp5.container;
  cResult[3] = successContainer;
  cResult[4] = tmp7;
  cResult[5] = items2;
  tmp8 = items2;
}) : ((children) => {
  let items1;
  let items2;
  let messageType;
  let successContainer;
  let textVariant;
  ({ messageType, textVariant } = children);
  children = children.children;
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
  const button = children.button;
  const tmp3 = closure_6();
  const items = [tmp3.container, , ];
  if (obj8.WARNING === messageType) {
    successContainer = tmp3.warningContainer;
  } else if (obj8.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (obj8.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (obj8.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  const obj = { style: items, children: items2 };
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  const obj2 = { style: tmp3.row, children: items1 };
  items1 = [getIcon(messageType), ];
  const obj3 = { style: tmp3.content, color: str, variant: textVariant, children };
  items1[1] = React3(Text_Text.Text, obj3);
  items2 = [hasOwnProperty(View, obj2), button];
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default tmp9;
export const HelpMessageTypes = obj8;
// discord_app/modules/user_profile/native/UserProfileThemePicker.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = nativeDefault.unsafe_rawColors.PRIMARY_530;
const createStyles = fn(5090);
let obj2 = {
  colorRow: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  colorContainer: null,
  colorButton: null,
  editIcon: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "flex-start" };
obj2.colorContainer = {
  position: "relative",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.colorButton = size;
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj2.editIcon = rect;
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ColorButton(arg0) {
      const cResult = c.c(23);
      ({ color, label, accessibilityLabel, onPress } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== color) {
        const int2hexResult = utils_ColorUtils.int2hex(color);
        const tmpResult = utils_ColorUtils;
        const obj2 = { backgroundColor: int2hexResult, colors: null };
        const items = [WHITE, PRIMARY_530];
        obj2.colors = items;
        const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj2);
        cResult[0] = color;
        cResult[1] = int2hexResult;
        cResult[2] = higherContrastColor;
        let tmp6 = higherContrastColor;
        let tmp5 = int2hexResult;
        const tmpResult2 = getHigherContrastColor;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.Qp04hK);
        cResult[3] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { backgroundColor: tmp5 };
        cResult[4] = tmp5;
        cResult[5] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp4.colorButton) {
        if (cResult[7] === tmp13) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp4.editIcon) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] === accessibilityLabel) {
            if (cResult[13] === onPress) {
              if (cResult[14] === tmp14) {
                if (cResult[15] === tmp15) {
                  let tmp18 = cResult[16];
                }
                if (cResult[17] !== label) {
                  const obj4 = {
                    variant: "text-sm/normal",
                    color: "text-default",
                    accessibilityElementsHidden: true,
                    importantForAccessibility: "no-hide-descendants",
                    children: label,
                  };
                  const tmp23 = React3(Text_Text.Text, obj4);
                  cResult[17] = label;
                  cResult[18] = tmp23;
                  let tmp21 = tmp23;
                } else {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === tmp4.colorContainer) {
                  if (cResult[20] === tmp18) {
                    if (cResult[21] === tmp21) {
                      let tmp24 = cResult[22];
                    }
                    return tmp24;
                  }
                }
                const obj5 = { style: tmp4.colorContainer, children: null };
                const items1 = [tmp18, tmp21];
                obj5.children = items1;
                const tmp27 = React4(View, obj5);
                cResult[19] = tmp4.colorContainer;
                cResult[20] = tmp18;
                cResult[21] = tmp21;
                cResult[22] = tmp27;
                tmp24 = tmp27;
              }
            }
          }
          const obj6 = {
            accessibilityRole: "button",
            accessibilityLabel,
            accessibilityHint: tmp11,
            style: tmp14,
            onPress,
            children: tmp15,
          };
          const tmp20 = React3(Pressables.PressableOpacity, obj6);
          cResult[12] = accessibilityLabel;
          cResult[13] = onPress;
          cResult[14] = tmp14;
          cResult[15] = tmp15;
          cResult[16] = tmp20;
          tmp18 = tmp20;
        }
        const obj7 = { size: "xs", color: tmp6, style: tmp4.editIcon };
        const tmp17 = React3(PencilIcon.PencilIcon, obj7);
        cResult[9] = tmp6;
        cResult[10] = tmp4.editIcon;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
      const items2 = [tmp4.colorButton, tmp13];
      cResult[6] = tmp4.colorButton;
      cResult[7] = tmp13;
      cResult[8] = items2;
      tmp14 = items2;
    }
  : function ColorButton(arg0) {
      ({ color, label, accessibilityLabel, onPress } = arg0);
      const tmp = closure_8();
      const int2hexResult = utils_ColorUtils.int2hex(color);
      const obj3 = { backgroundColor: int2hexResult, colors: null };
      const items = [WHITE, PRIMARY_530];
      obj3.colors = items;
      const obj4 = { style: tmp.colorContainer, children: null };
      const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj3);
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityHint: null,
        style: null,
        onPress: null,
        children: null,
      };
      const intl = util.intl;
      obj5.accessibilityHint = intl.string(util.t.Qp04hK);
      const items1 = [tmp.colorButton, { backgroundColor: int2hexResult }];
      obj5.style = items1;
      obj5.onPress = onPress;
      obj5.children = React3(PencilIcon.PencilIcon, { size: "xs", color: higherContrastColor, style: tmp.editIcon });
      const items2 = [
        React3(Pressables.PressableOpacity, obj5),
        React3(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: label,
        }),
      ];
      obj4.children = items2;
      return React4(View, obj4);
    };
ReactCompilerGating = fn(558);
let obj4 = {
  position: "relative",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileThemePicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileThemePicker(arg0) {
      const cResult = c.c(29);
      ({ primaryColor, secondaryColor, onPressPrimary, onPressSecondary } = arg0);
      let colorRow = closure_8();
      if (cResult[0] === primaryColor) {
        if (cResult[1] === secondaryColor) {
          if (cResult[2] === colorRow.colorRow) {
            if (cResult[11] === cResult[3]) {
              if (cResult[12] === onPressPrimary) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === tmp9) {
                      let tmp19 = cResult[16];
                    }
                    const _Symbol = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = util.intl;
                      const stringResult = intl3.string(util.t["8elvy6"]);
                      cResult[17] = stringResult;
                      let tmp23 = stringResult;
                    } else {
                      tmp23 = cResult[17];
                    }
                    if (cResult[18] !== tmp6) {
                      const intl4 = util.intl;
                      const obj2 = { colorHex: utils_ColorUtils.int2hex(tmp6) };
                      const formatToPlainStringResult = intl4.formatToPlainString(util.t.I0tmru, obj2);
                      cResult[18] = tmp6;
                      cResult[19] = formatToPlainStringResult;
                      let tmp25 = formatToPlainStringResult;
                      const tmpResult = utils_ColorUtils;
                    } else {
                      tmp25 = cResult[19];
                    }
                    if (cResult[20] === onPressSecondary) {
                      if (cResult[21] === tmp6) {
                        if (cResult[22] === tmp25) {
                          let tmp27 = cResult[23];
                        }
                        if (cResult[24] === tmp5) {
                          if (cResult[25] === tmp10) {
                            if (cResult[26] === tmp19) {
                              if (cResult[27] === tmp27) {
                                let tmp31 = cResult[28];
                              }
                              return tmp31;
                            }
                          }
                        }
                        const obj3 = { style: tmp10, children: null };
                        const items = [tmp19, tmp27];
                        obj3.children = items;
                        const tmp33 = React4(tmp5, obj3);
                        cResult[24] = tmp5;
                        cResult[25] = tmp10;
                        cResult[26] = tmp19;
                        cResult[27] = tmp27;
                        cResult[28] = tmp33;
                        tmp31 = tmp33;
                      }
                    }
                    const obj4 = { color: tmp6, label: tmp23, accessibilityLabel: tmp25, onPress: onPressSecondary };
                    const tmp30 = React3(closure_9, obj4);
                    cResult[20] = onPressSecondary;
                    cResult[21] = tmp6;
                    cResult[22] = tmp25;
                    cResult[23] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
            }
            const obj5 = {
              color: cResult[6],
              label: cResult[7],
              accessibilityLabel: cResult[8],
              onPress: onPressPrimary,
            };
            const tmp21 = React3(cResult[3], obj5);
            cResult[11] = cResult[3];
            cResult[12] = onPressPrimary;
            cResult[13] = cResult[6];
            cResult[14] = cResult[7];
            cResult[15] = cResult[8];
            cResult[16] = tmp21;
            tmp19 = tmp21;
          }
        }
      }
      const hex2intResult = utils_ColorUtils.hex2int(PRIMARY_530);
      let tmp12 = primaryColor;
      if (primaryColor == null) {
        tmp12 = hex2intResult;
      }
      let tmp13 = secondaryColor;
      if (secondaryColor == null) {
        tmp13 = hex2intResult;
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult1 = intl.string(util.t.C3KTQk);
        cResult[10] = stringResult1;
        let tmp16 = stringResult1;
      } else {
        tmp16 = cResult[10];
      }
      const intl2 = util.intl;
      const obj6 = { colorHex: null };
      const tmpResult3 = utils_ColorUtils;
      obj6.colorHex = utils_ColorUtils.int2hex(tmp12);
      const tmpResult4 = utils_ColorUtils;
      cResult[0] = primaryColor;
      cResult[1] = secondaryColor;
      colorRow = colorRow.colorRow;
      cResult[2] = colorRow;
      cResult[3] = closure_9;
      cResult[4] = View;
      cResult[5] = tmp13;
      cResult[6] = tmp12;
      cResult[7] = tmp16;
      cResult[8] = intl2.formatToPlainString(util.t.v4X2kc, obj6);
      cResult[9] = colorRow.colorRow;
      const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.v4X2kc, obj6);
    }
  : function UserProfileThemePicker(arg0) {
      ({ primaryColor, secondaryColor } = arg0);
      ({ onPressPrimary, onPressSecondary } = arg0);
      const tmp = closure_8();
      const hex2intResult = utils_ColorUtils.hex2int(PRIMARY_530);
      if (primaryColor == null) {
        primaryColor = hex2intResult;
      }
      if (secondaryColor == null) {
        secondaryColor = hex2intResult;
      }
      const obj2 = { style: tmp.colorRow, children: null };
      const obj3 = { color: primaryColor, label: null, accessibilityLabel: null, onPress: null };
      const intl = util.intl;
      obj3.label = intl.string(util.t.C3KTQk);
      const intl2 = util.intl;
      const obj4 = { colorHex: null };
      obj4.colorHex = utils_ColorUtils.int2hex(primaryColor);
      obj3.accessibilityLabel = intl2.formatToPlainString(util.t.v4X2kc, obj4);
      obj3.onPress = onPressPrimary;
      const items = [React3(closure_9, obj3)];
      const obj5 = { color: secondaryColor, label: null, accessibilityLabel: null, onPress: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t["8elvy6"]);
      const intl4 = util.intl;
      const obj6 = { colorHex: null };
      const tmp2Result = utils_ColorUtils;
      obj6.colorHex = utils_ColorUtils.int2hex(secondaryColor);
      obj5.accessibilityLabel = intl4.formatToPlainString(util.t.I0tmru, obj6);
      obj5.onPress = onPressSecondary;
      items[1] = React3(closure_9, obj5);
      obj2.children = items;
      return React4(View, obj2);
    };

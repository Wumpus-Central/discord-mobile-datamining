// === Module 14439: ColorBlock ===

// Module 14439 (ColorBlock)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import native from "native" /* 1188 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import Pressables from "Pressables" /* 5916 */;
import _modDef11194 from "module_11194" /* 11194 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { colorBlock: { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" } };
const styles = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(40);
  color = color.color;
  ({ style, selected, onSelect } = color);
  const tmp5 = styles();
  if (cResult[0] !== color) {
    const int2hsvResult = utils_ColorUtils.int2hsv(color);
    cResult[0] = color;
    cResult[1] = int2hsvResult;
    let tmp6 = int2hsvResult;
    const tmpResult = utils_ColorUtils;
  } else {
    tmp6 = cResult[1];
  }
  const v = tmp6.v;
  if (null != onSelect) {
    if (cResult[2] !== color) {
      const tmpResult5 = ColorUtils;
      const hexToColorNameResult = tmpResult5.hexToColorName(utils_ColorUtils.int2hex(color), true);
      cResult[2] = color;
      cResult[3] = hexToColorNameResult;
      let tmp21 = hexToColorNameResult;
      const tmpResult6 = utils_ColorUtils;
    } else {
      tmp21 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const obj2 = { selected: tmp4 };
      cResult[4] = tmp4;
      cResult[5] = obj2;
      let tmp23 = obj2;
    } else {
      tmp23 = cResult[5];
    }
    if (cResult[6] === color) {
      if (cResult[7] === onSelect) {
        let tmp24 = cResult[8];
      }
      if (cResult[9] !== color) {
        const int2hexResult = utils_ColorUtils.int2hex(color);
        cResult[9] = color;
        cResult[10] = int2hexResult;
        let tmp25 = int2hexResult;
        const tmpResult7 = utils_ColorUtils;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== tmp25) {
        const obj3 = { backgroundColor: tmp25 };
        cResult[11] = tmp25;
        cResult[12] = obj3;
        let tmp27 = obj3;
      } else {
        tmp27 = cResult[12];
      }
      if (cResult[13] === style) {
        if (cResult[14] === tmp5.colorBlock) {
          if (cResult[15] === tmp27) {
            let tmp28 = cResult[16];
          }
          if (cResult[17] === tmp4) {
            if (cResult[18] === v) {
              let tmp29 = cResult[19];
            }
            if (cResult[20] === tmp29) {
              if (cResult[21] === tmp21) {
                if (cResult[22] === tmp23) {
                  if (cResult[23] === tmp24) {
                    if (cResult[24] === tmp28) {
                      let tmp34 = cResult[25];
                    }
                    return tmp34;
                  }
                }
              }
            }
            const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp21, accessibilityState: tmp23, onPress: tmp24, style: tmp28, children: tmp29 };
            const tmp36 = jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: tmp21, accessibilityState: tmp23, onPress: tmp24, style: tmp28, children: tmp29 });
            cResult[20] = tmp29;
            cResult[21] = tmp21;
            cResult[22] = tmp23;
            cResult[23] = tmp24;
            cResult[24] = tmp28;
            cResult[25] = tmp36;
            tmp34 = tmp36;
          }
          if (!tmp4) {
            cResult[17] = tmp4;
            cResult[18] = v;
            cResult[19] = null;
            tmp29 = null;
          } else {
            const obj5 = { source: _modDef11194, color: null };
            if (v < 0.5) {
              let BLACK2 = nativeDefault.unsafe_rawColors.WHITE;
            } else {
              BLACK2 = nativeDefault.unsafe_rawColors.BLACK;
            }
            obj5.color = BLACK2;
            jsx(native.Icon, { source: _modDef11194, color: null });
          }
        }
      }
      const items = [tmp5.colorBlock, style, tmp27];
      cResult[13] = style;
      cResult[14] = tmp5.colorBlock;
      cResult[15] = tmp27;
      cResult[16] = items;
      tmp28 = items;
    }
    const fn = function _() {
      return onSelect(color);
    };
    cResult[6] = color;
    cResult[7] = onSelect;
    cResult[8] = fn;
    tmp24 = fn;
  } else {
    if (cResult[26] !== color) {
      const int2hexResult1 = utils_ColorUtils.int2hex(color);
      cResult[26] = color;
      cResult[27] = int2hexResult1;
      let tmp8 = int2hexResult1;
      const tmpResult8 = utils_ColorUtils;
    } else {
      tmp8 = cResult[27];
    }
    if (cResult[28] !== tmp8) {
      const obj6 = { backgroundColor: tmp8 };
      cResult[28] = tmp8;
      cResult[29] = obj6;
      let tmp10 = obj6;
    } else {
      tmp10 = cResult[29];
    }
    if (cResult[30] === style) {
      if (cResult[31] === tmp5.colorBlock) {
        if (cResult[32] === tmp10) {
          let tmp11 = cResult[33];
        }
        if (cResult[34] === tmp4) {
          if (cResult[35] === v) {
            let tmp12 = cResult[36];
          }
          if (cResult[37] === tmp11) {
            if (cResult[38] === tmp12) {
              let tmp17 = cResult[39];
            }
            return tmp17;
          }
          const obj7 = { style: tmp11, children: tmp12 };
          const tmp20 = <View style={tmp11}>{tmp12}</View>;
          cResult[37] = tmp11;
          cResult[38] = tmp12;
          cResult[39] = tmp20;
          tmp17 = tmp20;
        }
        if (!tmp4) {
          cResult[34] = tmp4;
          cResult[35] = v;
          cResult[36] = null;
          tmp12 = null;
        } else {
          const obj8 = { source: _modDef11194, color: null };
          if (v < 0.5) {
            let BLACK = nativeDefault.unsafe_rawColors.WHITE;
          } else {
            BLACK = nativeDefault.unsafe_rawColors.BLACK;
          }
          obj8.color = BLACK;
          jsx(native.Icon, { source: _modDef11194, color: null });
        }
      }
    }
    const items1 = [tmp5.colorBlock, style, tmp10];
    cResult[30] = style;
    cResult[31] = tmp5.colorBlock;
    cResult[32] = tmp10;
    cResult[33] = items1;
    tmp11 = items1;
  }
}) : ((color) => {
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  let unsafe_rawColors = dependencyMap;
  const v = utils_ColorUtils.int2hsv(color).v;
  if (null != onSelect) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
    const tmp2Result = ColorUtils;
    obj2.accessibilityLabel = tmp2Result.hexToColorName(utils_ColorUtils.int2hex(color), true);
    const obj3 = { selected };
    obj2.accessibilityState = obj3;
    obj2.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style, ];
    const obj4 = { backgroundColor: null };
    const tmp2Result4 = utils_ColorUtils;
    obj4.backgroundColor = utils_ColorUtils.int2hex(color);
    items[2] = obj4;
    obj2.style = items;
    if (!selected) {
      obj2.children = null;
      let tmp10Result1 = jsx(Pressables.PressableOpacity, obj2);
    } else {
      const obj5 = { source: _modDef11194, color: null };
      if (v < 0.5) {
        unsafe_rawColors = nativeDefault.unsafe_rawColors;
        let BLACK2 = unsafe_rawColors.WHITE;
      } else {
        BLACK2 = nativeDefault.unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK2;
      jsx(native.Icon, { source: _modDef11194, color: null });
    }
    const tmp2Result5 = utils_ColorUtils;
  } else {
    const obj6 = { style: null, children: null };
    const items1 = [tmp.colorBlock, style, ];
    const obj7 = { backgroundColor: utils_ColorUtils.int2hex(color) };
    items1[2] = obj7;
    obj6.style = items1;
    if (!selected) {
      obj6.children = null;
      tmp10Result1 = <View {...obj6} />;
    } else {
      const obj8 = { source: _modDef11194, color: null };
      if (v < 0.5) {
        let BLACK = nativeDefault.unsafe_rawColors.WHITE;
      } else {
        BLACK = nativeDefault.unsafe_rawColors.BLACK;
      }
      obj8.color = BLACK;
      jsx(native.Icon, { source: _modDef11194, color: null });
    }
    const tmp2Result6 = utils_ColorUtils;
  }
  return tmp10Result1;
}));
export const useStyles = styles;
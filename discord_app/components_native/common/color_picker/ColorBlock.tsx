// === Module 14439: ColorBlock ===

// Module 14439 (ColorBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import native from "native" /* 1188 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import Pressables from "Pressables" /* 5916 */;
import AssetRegistryDefault from "AssetRegistry" /* 11194 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let color;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { colorBlock: obj2 };
obj2 = { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
const styles = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  let onSelect;
  let selected;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(40);
  color = color.color;
  ({ style, selected, onSelect } = color);
  const tmp5 = styles();
  if (cResult[0] !== color) {
    const tmpResult = utils_ColorUtils;
    const int2hsvResult = tmpResult.int2hsv(color);
    cResult[0] = color;
    cResult[1] = int2hsvResult;
    tmp6 = int2hsvResult;
  } else {
    tmp6 = cResult[1];
  }
  const v = tmp6.v;
  if (null != onSelect) {
    let tmp20;
    let tmp23;
    if (cResult[2] !== color) {
      const hexToColorName = ColorUtils.hexToColorName;
      ColorUtils;
      const tmpResult6 = utils_ColorUtils;
      const hexToColorNameResult = hexToColorName(tmpResult6.int2hex(color), true);
      cResult[2] = color;
      cResult[3] = hexToColorNameResult;
      tmp20 = hexToColorNameResult;
    } else {
      tmp20 = cResult[3];
    }
    if (cResult[4] !== (undefined !== selected && selected)) {
      const obj2 = { selected: undefined !== selected && selected };
      cResult[4] = undefined !== selected && selected;
      cResult[5] = obj2;
      tmp23 = obj2;
    } else {
      tmp23 = cResult[5];
    }
    if (cResult[6] === color) {
      let tmp24;
      let tmp25;
      let tmp27;
      if (cResult[7] === onSelect) {
        tmp24 = cResult[8];
      }
      const colorBlock = tmp5.colorBlock;
      if (cResult[9] !== color) {
        const tmpResult7 = utils_ColorUtils;
        const int2hexResult = tmpResult7.int2hex(color);
        cResult[9] = color;
        cResult[10] = int2hexResult;
        tmp25 = int2hexResult;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== tmp25) {
        const obj3 = { backgroundColor: tmp25 };
        cResult[11] = tmp25;
        cResult[12] = obj3;
        tmp27 = obj3;
      } else {
        tmp27 = cResult[12];
      }
      if (cResult[13] === style) {
        if (cResult[14] === tmp5.colorBlock) {
          let tmp28;
          if (cResult[15] === tmp27) {
            tmp28 = cResult[16];
          }
          if (cResult[17] === (undefined !== selected && selected)) {
            let tmp29;
            if (cResult[18] === v) {
              tmp29 = cResult[19];
            }
            if (cResult[20] === tmp29) {
              if (cResult[21] === tmp20) {
                if (cResult[22] === tmp23) {
                  if (cResult[23] === tmp24) {
                    let tmp33;
                    if (cResult[24] === tmp28) {
                      tmp33 = cResult[25];
                    }
                    return tmp33;
                  }
                }
              }
            }
            const tmp35 = jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: tmp20, accessibilityState: tmp23, onPress: tmp24, style: tmp28, children: tmp29 });
            cResult[20] = tmp29;
            cResult[21] = tmp20;
            cResult[22] = tmp23;
            cResult[23] = tmp24;
            cResult[24] = tmp28;
            cResult[25] = tmp35;
            tmp33 = tmp35;
          }
          let tmp31Result = null;
          if (undefined !== selected && selected) {
            let BLACK2;
            const Icon2 = native.Icon;
            if (v < 0.5) {
              BLACK2 = nativeDefault.unsafe_rawColors.WHITE;
            } else {
              BLACK2 = nativeDefault.unsafe_rawColors.BLACK;
            }
            tmp31Result = <Icon2 source={AssetRegistryDefault} color={BLACK2} />;
          }
          cResult[17] = undefined !== selected && selected;
          cResult[18] = v;
          cResult[19] = tmp31Result;
          tmp29 = tmp31Result;
        }
      }
      const items = [colorBlock, style, tmp27];
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
    let tmp8;
    let tmp10;
    const colorBlock2 = tmp5.colorBlock;
    if (cResult[26] !== color) {
      const tmpResult8 = utils_ColorUtils;
      const int2hexResult1 = tmpResult8.int2hex(color);
      cResult[26] = color;
      cResult[27] = int2hexResult1;
      tmp8 = int2hexResult1;
    } else {
      tmp8 = cResult[27];
    }
    if (cResult[28] !== tmp8) {
      const obj6 = { backgroundColor: tmp8 };
      cResult[28] = tmp8;
      cResult[29] = obj6;
      tmp10 = obj6;
    } else {
      tmp10 = cResult[29];
    }
    if (cResult[30] === style) {
      if (cResult[31] === tmp5.colorBlock) {
        let tmp11;
        if (cResult[32] === tmp10) {
          tmp11 = cResult[33];
        }
        if (cResult[34] === (undefined !== selected && selected)) {
          let tmp12;
          if (cResult[35] === v) {
            tmp12 = cResult[36];
          }
          if (cResult[37] === tmp11) {
            let tmp16;
            if (cResult[38] === tmp12) {
              tmp16 = cResult[39];
            }
            return tmp16;
          }
          const tmp19 = <View style={tmp11}>{tmp12}</View>;
          cResult[37] = tmp11;
          cResult[38] = tmp12;
          cResult[39] = tmp19;
          tmp16 = tmp19;
        }
        let tmp14Result = null;
        if (undefined !== selected && selected) {
          let BLACK;
          const Icon = native.Icon;
          if (v < 0.5) {
            BLACK = nativeDefault.unsafe_rawColors.WHITE;
          } else {
            BLACK = nativeDefault.unsafe_rawColors.BLACK;
          }
          tmp14Result = <Icon source={AssetRegistryDefault} color={BLACK} />;
        }
        cResult[34] = undefined !== selected && selected;
        cResult[35] = v;
        cResult[36] = tmp14Result;
        tmp12 = tmp14Result;
      }
    }
    const items1 = [colorBlock2, style, tmp10];
    cResult[30] = style;
    cResult[31] = tmp5.colorBlock;
    cResult[32] = tmp10;
    cResult[33] = items1;
    tmp11 = items1;
  }
}) : ((color) => {
  let selected;
  let style;
  let tmp2Result5;
  let tmp2Result6;
  let tmp7Result2;
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  const obj = utils_ColorUtils;
  const v = obj.int2hsv(color).v;
  if (null != onSelect) {
    const PressableOpacity = Pressables.PressableOpacity;
    const hexToColorName = ColorUtils.hexToColorName;
    ColorUtils;
    const items = [tmp.colorBlock, style, ];
    const obj3 = { selected };
    const tmp2Result4 = utils_ColorUtils;
    const obj4 = { backgroundColor: tmp2Result5.int2hex(color) };
    items[2] = obj4;
    let tmp7Result = null;
    tmp2Result5 = utils_ColorUtils;
    if (selected) {
      let BLACK2;
      const Icon2 = native.Icon;
      if (v < 0.5) {
        BLACK2 = nativeDefault.unsafe_rawColors.WHITE;
      } else {
        BLACK2 = nativeDefault.unsafe_rawColors.BLACK;
      }
      tmp7Result = <Icon2 source={AssetRegistryDefault} color={BLACK2} />;
    }
    tmp7Result2 = <PressableOpacity accessibilityRole="button" accessibilityLabel={hexToColorName(tmp2Result4.int2hex(color), true)} accessibilityState={obj3} onPress={function onPress() {
      return onSelect(color);
    }} style={items}>{tmp7Result}</PressableOpacity>;
  } else {
    const items1 = [tmp.colorBlock, style, ];
    const obj7 = { backgroundColor: tmp2Result6.int2hex(color) };
    items1[2] = obj7;
    let tmp11Result = null;
    tmp2Result6 = utils_ColorUtils;
    if (selected) {
      let BLACK;
      const Icon = native.Icon;
      if (v < 0.5) {
        BLACK = nativeDefault.unsafe_rawColors.WHITE;
      } else {
        BLACK = nativeDefault.unsafe_rawColors.BLACK;
      }
      tmp11Result = <Icon source={AssetRegistryDefault} color={BLACK} />;
    }
    tmp7Result2 = <View style={items1}>{tmp11Result}</View>;
  }
  return tmp7Result2;
}));
const result = size.fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default memoResult;
export const useStyles = styles;
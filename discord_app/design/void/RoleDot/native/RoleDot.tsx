// discord_app/design/void/RoleDot/native/RoleDot.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import useFontScale from "../../../../modules/screen/native/useFontScale.tsx";
import useHasEnhancedRoleColorsDefault from "../../../../modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const LinearGradientDefault = tmp5(5612);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { flexShrink: 0 },
  background: { position: "relative" },
  backgroundColor: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    borderRadius: nativeDefault.radii.xs,
  },
  borderBase: null,
  borderColor: null,
  dot: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs };
obj2.borderBase = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
let obj4 = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
obj2.borderColor = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
obj2.dot = { borderRadius: 10, position: "absolute" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
const size = fn(2);
let result = size.fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let items3 = dependencyMap;
      const cResult = c.c(35);
      ({ color, colors, size, background, containerStyles } = guildId);
      let str = "normal";
      if (undefined !== size) {
        str = size;
      }
      let dot = closure_6();
      const tmp3 = undefined === background || background;
      const fontScale = useFontScale.useFontScale();
      let tmp5 = importDefault;
      const tmp6 = useHasEnhancedRoleColorsDefault(guildId.guildId, null);
      if (null == color) {
        if (null == colors) {
          return null;
        }
      }
      if (cResult[0] === fontScale) {
        if (cResult[1] === str) {
          let dot2 = cResult[2];
          if (cResult[3] === containerStyles) {
            if (cResult[4] === dot2.container) {
              if (cResult[5] === dot.container) {
                let tmp12 = cResult[6];
              }
              let backgroundColor = null;
              if (tmp3) {
                backgroundColor = dot.backgroundColor;
              }
              if (cResult[7] === dot2.background) {
                if (cResult[8] === dot.background) {
                  if (cResult[9] === backgroundColor) {
                    let tmp14 = cResult[10];
                  }
                  if (cResult[11] !== dot.borderBase) {
                    const items = [dot.borderBase];
                    cResult[11] = dot.borderBase;
                    cResult[12] = items;
                    let tmp15 = items;
                  } else {
                    tmp15 = cResult[12];
                  }
                  if (cResult[13] !== color) {
                    const obj2 = { backgroundColor: color };
                    cResult[13] = color;
                    cResult[14] = obj2;
                    let tmp17 = obj2;
                  } else {
                    tmp17 = cResult[14];
                  }
                  if (cResult[15] === dot2.border) {
                    if (cResult[16] === dot.borderColor) {
                      if (cResult[17] === tmp17) {
                        let tmp18 = cResult[18];
                      }
                      if (cResult[19] === tmp18) {
                        if (cResult[20] === tmp15) {
                          let tmp22 = cResult[21];
                        }
                        if (cResult[22] === color) {
                          if (cResult[23] === colors) {
                            if (cResult[24] === dot2.dot) {
                              if (cResult[25] === tmp6) {
                                if (cResult[26] === dot.dot) {
                                  if (cResult[28] === tmp22) {
                                    if (cResult[29] === tmp26) {
                                      if (cResult[30] === tmp14) {
                                        let tmp33 = cResult[31];
                                      }
                                      if (cResult[32] === tmp33) {
                                        if (cResult[33] === tmp12) {
                                          let tmp37 = cResult[34];
                                        }
                                        return tmp37;
                                      }
                                      const obj3 = { style: tmp12, children: tmp33 };
                                      const tmp40 = React4(View, obj3);
                                      cResult[32] = tmp33;
                                      cResult[33] = tmp12;
                                      cResult[34] = tmp40;
                                      tmp37 = tmp40;
                                    }
                                  }
                                  const obj4 = { style: tmp14, children: null };
                                  const items1 = [tmp22, cResult[27]];
                                  obj4.children = items1;
                                  const tmp36 = hasOwnProperty(View, obj4);
                                  cResult[28] = tmp22;
                                  cResult[29] = cResult[27];
                                  cResult[30] = tmp14;
                                  cResult[31] = tmp36;
                                  tmp33 = tmp36;
                                }
                              }
                            }
                          }
                        }
                        if (tmp6) {
                          if (null != colors) {
                            cResult[22] = color;
                            cResult[23] = colors;
                            dot2 = dot2.dot;
                            cResult[24] = dot2;
                            cResult[25] = tmp6;
                            dot = dot.dot;
                            cResult[26] = dot;
                            cResult[27] = tmp27Result;
                          }
                          tmp5 = LinearGradientDefault;
                          const obj5 = { colors: null, start: null, end: null, style: null };
                          const items2 = [, ,];
                          ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
                          obj5.colors = items2.filter(GlobalUtils.isNotNullish);
                          obj5.start = { x: 0, y: 0 };
                          obj5.end = { x: 1, y: 0 };
                          items3 = [dot.dot, dot2.dot];
                          obj5.style = items3;
                          tmp27Result = React4(tmp5, obj5);
                        }
                        const items4 = [dot.dot, dot2.dot];
                        const obj6 = { style: null };
                        const obj7 = { backgroundColor: color };
                        items4[2] = obj7;
                        obj6.style = items4;
                        tmp27Result = React4(View, obj6);
                      }
                      const obj8 = { style: tmp15, children: tmp18 };
                      const tmp25 = React4(View, obj8);
                      cResult[19] = tmp18;
                      cResult[20] = tmp15;
                      cResult[21] = tmp25;
                      tmp22 = tmp25;
                    }
                  }
                  const obj9 = { style: null };
                  const items5 = [dot.borderColor, dot2.border, tmp17];
                  obj9.style = items5;
                  const tmp21 = React4(View, obj9);
                  cResult[15] = dot2.border;
                  cResult[16] = dot.borderColor;
                  cResult[17] = tmp17;
                  cResult[18] = tmp21;
                  tmp18 = tmp21;
                }
              }
              const items6 = [dot.background, backgroundColor, dot2.background];
              cResult[7] = dot2.background;
              cResult[8] = dot.background;
              cResult[9] = backgroundColor;
              cResult[10] = items6;
              tmp14 = items6;
            }
          }
          const items7 = [dot.container, dot2.container, containerStyles];
          cResult[3] = containerStyles;
          cResult[4] = dot2.container;
          cResult[5] = dot.container;
          cResult[6] = items7;
          tmp12 = items7;
        }
      }
      let num = 16;
      if ("normal" === str) {
        num = 20;
      }
      let result = num * fontScale;
      let obj10 = { paddingRight: 2 * fontScale, paddingTop: null, height: null };
      const tmpResult = useFontScale;
      if (tmpResult2.isAndroid()) {
        let result1 = 3 * fontScale;
      } else {
        result1 = 2 * fontScale;
      }
      const sum = result / 2 + 2;
      const diff = sum - 2;
      const obj11 = { container: obj10, background: null, border: { height: sum, width: sum }, dot: null };
      obj10.paddingTop = result1;
      obj10.height = result;
      const size1 = { height: result, width: result, padding: null };
      result = (result - sum) / 2;
      size1.padding = result;
      obj11.background = size1;
      obj10 = { height: diff, width: diff, top: null, left: null };
      const result2 = diff / 2;
      obj10.top = result2;
      obj10.left = result2;
      obj11.dot = obj10;
      cResult[0] = fontScale;
      cResult[1] = str;
      cResult[2] = obj11;
      tmpResult2 = PlatformUtils;
    }
  : (background) => {
      ({ color, colors, size } = background);
      if (size === undefined) {
        size = "normal";
      }
      let flag = background.background;
      if (flag === undefined) {
        flag = true;
      }
      ({ containerStyles, guildId } = background);
      const tmp = closure_6();
      const fontScale = useFontScale.useFontScale();
      if (null == color) {
        if (null == colors) {
          return null;
        }
      }
      let num = 16;
      if ("normal" === size) {
        num = 20;
      }
      const result = num * fontScale;
      const obj2 = { paddingRight: 2 * fontScale, paddingTop: null, height: null };
      const tmp6 = useHasEnhancedRoleColorsDefault(guildId, null);
      if (tmp2Result.isAndroid()) {
        let result1 = 3 * fontScale;
      } else {
        result1 = 2 * fontScale;
      }
      const sum = result / 2 + 2;
      const diff = sum - 2;
      obj2.paddingTop = result1;
      obj2.height = result;
      const size1 = { height: result, width: result, padding: (result - sum) / 2 };
      const size2 = { height: diff, width: diff, top: null, left: null };
      const result2 = diff / 2;
      size2.top = result2;
      size2.left = result2;
      const obj3 = { style: null, children: null };
      const items = [tmp.container, obj2, containerStyles];
      obj3.style = items;
      const items1 = [tmp.background, ,];
      let backgroundColor = null;
      if (flag) {
        backgroundColor = tmp.backgroundColor;
      }
      const obj4 = { style: items1, children: null };
      items1[1] = backgroundColor;
      items1[2] = size1;
      const obj5 = { style: null, children: null };
      const items2 = [tmp.borderBase];
      obj5.style = items2;
      const items3 = [tmp.borderColor, { height: sum, width: sum }, { backgroundColor: color }];
      obj5.children = React4(View, { style: items3 });
      const items4 = [React4(View, obj5)];
      if (tmp6) {
        if (null != colors) {
          if (null != colors.secondaryColor) {
            const obj6 = { colors: null, start: null, end: null, style: null };
            const items5 = [, ,];
            ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
            obj6.colors = items5.filter(GlobalUtils.isNotNullish);
            obj6.start = { x: 0, y: 0 };
            obj6.end = { x: 1, y: 0 };
            const items6 = [tmp.dot, size2];
            obj6.style = items6;
            let tmp12Result = React4(LinearGradientDefault, obj6);
            const tmp5Result = LinearGradientDefault;
          }
          items4[1] = tmp12Result;
          obj4.children = items4;
          obj3.children = hasOwnProperty(View, obj4);
          return React4(View, obj3);
        }
      }
      const items7 = [tmp.dot, size2, { backgroundColor: color }];
      tmp12Result = React4(View, { style: items7 });
      tmp2Result = PlatformUtils;
    };

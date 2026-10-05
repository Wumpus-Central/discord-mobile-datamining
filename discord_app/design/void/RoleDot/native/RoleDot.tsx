// === Module 13938: RoleDot ===

// Module 13938 (RoleDot)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import useFontScale from "useFontScale" /* 5602 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5793 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexShrink: 0 }, background: { position: "relative" }, backgroundColor: obj2, borderBase: obj3, borderColor: obj4, dot: { borderRadius: 10, position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
obj4 = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let background;
  let color;
  let colors;
  let containerStyles;
  let items1;
  let items2;
  let items3;
  let items5;
  let result1;
  let result2;
  let size1;
  const obj = react2;
  const cResult = obj.c(35);
  ({ color, colors, size, background, containerStyles } = guildId);
  let str = "normal";
  guildId = guildId.guildId;
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = undefined === background || background;
  const tmp5 = closure_6();
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  const tmp8 = useHasEnhancedRoleColorsDefault(guildId, null);
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  if (cResult[0] === fontScale) {
    let tmp9;
    if (cResult[1] === str) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === containerStyles) {
      if (cResult[4] === tmp9.container) {
        let tmp15;
        if (cResult[5] === tmp5.container) {
          tmp15 = cResult[6];
        }
        let backgroundColor = null;
        if (tmp4) {
          backgroundColor = tmp5.backgroundColor;
        }
        if (cResult[7] === tmp9.background) {
          if (cResult[8] === tmp5.background) {
            let tmp17;
            let tmp18;
            let tmp20;
            if (cResult[9] === backgroundColor) {
              tmp17 = cResult[10];
            }
            if (cResult[11] !== tmp5.borderBase) {
              const items = [tmp5.borderBase];
              cResult[11] = tmp5.borderBase;
              cResult[12] = items;
              tmp18 = items;
            } else {
              tmp18 = cResult[12];
            }
            if (cResult[13] !== color) {
              const obj2 = { backgroundColor: color };
              cResult[13] = color;
              cResult[14] = obj2;
              tmp20 = obj2;
            } else {
              tmp20 = cResult[14];
            }
            if (cResult[15] === tmp9.border) {
              if (cResult[16] === tmp5.borderColor) {
                let tmp21;
                if (cResult[17] === tmp20) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === tmp21) {
                  let tmp25;
                  let tmp29;
                  if (cResult[20] === tmp18) {
                    tmp25 = cResult[21];
                  }
                  if (cResult[22] === color) {
                    if (cResult[23] === colors) {
                      if (cResult[24] === tmp9.dot) {
                        if (cResult[25] === tmp8) {
                          if (cResult[26] === tmp5.dot) {
                            tmp29 = cResult[27];
                          }
                          if (cResult[28] === tmp25) {
                            if (cResult[29] === tmp29) {
                              let tmp36;
                              if (cResult[30] === tmp17) {
                                tmp36 = cResult[31];
                              }
                              if (cResult[32] === tmp36) {
                                let tmp40;
                                if (cResult[33] === tmp15) {
                                  tmp40 = cResult[34];
                                }
                                return tmp40;
                              }
                              const obj3 = { style: tmp15, children: tmp36 };
                              const tmp43 = React3(View, obj3);
                              cResult[32] = tmp36;
                              cResult[33] = tmp15;
                              cResult[34] = tmp43;
                              tmp40 = tmp43;
                            }
                          }
                          const obj4 = { style: tmp17, children: items1 };
                          items1 = [tmp25, tmp29];
                          const tmp39 = hasOwnProperty(View, obj4);
                          cResult[28] = tmp25;
                          cResult[29] = tmp29;
                          cResult[30] = tmp17;
                          cResult[31] = tmp39;
                          tmp36 = tmp39;
                        }
                      }
                    }
                  }
                  if (tmp8) {
                    if (null != colors) {
                      let tmp30Result;
                      if (null != colors.secondaryColor) {
                        const obj5 = { colors: items2.filter(GlobalUtils.isNotNullish), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items3 };
                        items2 = [, , ];
                        ({ primaryColor: arr6[0], secondaryColor: arr6[1], tertiaryColor: arr6[2] } = colors);
                        items3 = [tmp5.dot, tmp9.dot];
                        const tmp7Result = LinearGradientDefault;
                        tmp30Result = React3(tmp7Result, obj5);
                      }
                      cResult[22] = color;
                      cResult[23] = colors;
                      cResult[24] = tmp9.dot;
                      cResult[25] = tmp8;
                      cResult[26] = tmp5.dot;
                      cResult[27] = tmp30Result;
                      tmp29 = tmp30Result;
                    }
                  }
                  const items4 = [tmp5.dot, tmp9.dot, ];
                  const obj6 = { style: items4 };
                  const obj7 = { backgroundColor: color };
                  items4[2] = obj7;
                  tmp30Result = React3(View, obj6);
                }
                const obj8 = { style: tmp18, children: tmp21 };
                const tmp28 = React3(View, obj8);
                cResult[19] = tmp21;
                cResult[20] = tmp18;
                cResult[21] = tmp28;
                tmp25 = tmp28;
              }
            }
            const obj9 = { style: items5 };
            items5 = [tmp5.borderColor, tmp9.border, tmp20];
            const tmp24 = React3(View, obj9);
            cResult[15] = tmp9.border;
            cResult[16] = tmp5.borderColor;
            cResult[17] = tmp20;
            cResult[18] = tmp24;
            tmp21 = tmp24;
          }
        }
        const items6 = [tmp5.background, backgroundColor, tmp9.background];
        cResult[7] = tmp9.background;
        cResult[8] = tmp5.background;
        cResult[9] = backgroundColor;
        cResult[10] = items6;
        tmp17 = items6;
      }
    }
    const items7 = [tmp5.container, tmp9.container, containerStyles];
    cResult[3] = containerStyles;
    cResult[4] = tmp9.container;
    cResult[5] = tmp5.container;
    cResult[6] = items7;
    tmp15 = items7;
  }
  let num = 16;
  if ("normal" === str) {
    num = 20;
  }
  const result = num * fontScale;
  const obj10 = { paddingRight: 2 * fontScale, paddingTop: result1, height: result };
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  const obj11 = { container: obj10, background: { height: result, width: result, padding: (result - sum) / 2 }, border: { height: sum, width: sum }, dot: size1 };
  size1 = { height: diff, width: diff, top: result2, left: result2 };
  result2 = diff / 2;
  cResult[0] = fontScale;
  cResult[1] = str;
  cResult[2] = obj11;
  tmp9 = obj11;
}) : ((background) => {
  let color;
  let colors;
  let containerStyles;
  let guildId;
  let items;
  let items2;
  let items3;
  let items5;
  let items6;
  let result1;
  let result2;
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
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const tmp6 = useHasEnhancedRoleColorsDefault(guildId, null);
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
  const obj2 = { paddingRight: 2 * fontScale, paddingTop: result1, height: result };
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  const size1 = { height: result, width: result, padding: (result - sum) / 2 };
  const size2 = { height: diff, width: diff, top: result2, left: result2 };
  result2 = diff / 2;
  const obj3 = { style: items, children: null };
  items = [tmp.container, obj2, containerStyles];
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = backgroundColor;
  items1[2] = size1;
  const obj5 = { style: items2, children: React3(View, { style: items3 }) };
  items2 = [tmp.borderBase];
  items3 = [tmp.borderColor, { height: sum, width: sum }, { backgroundColor: color }];
  const items4 = [React3(View, obj5), ];
  if (tmp6) {
    if (null != colors) {
      let tmp12Result;
      if (null != colors.secondaryColor) {
        const obj6 = { colors: items5.filter(GlobalUtils.isNotNullish), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items6 };
        items5 = [, , ];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        items6 = [tmp.dot, size2];
        const tmp5Result = LinearGradientDefault;
        tmp12Result = React3(tmp5Result, obj6);
      }
      items4[1] = tmp12Result;
      obj4.children = items4;
      obj3.children = hasOwnProperty(View, obj4);
      return React3(View, obj3);
    }
  }
  const items7 = [tmp.dot, size2, { backgroundColor: color }];
  tmp12Result = React3(View, { style: items7 });
});
let size = size_mod;
let result = size.fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = tmp5;
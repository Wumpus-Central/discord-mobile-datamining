// === Module 13916: Tooltip/Tooltip ===

// Module 13916 (Tooltip/Tooltip)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj4;
let obj5;
let size;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const TooltipArrowDirections = { UP: "UP", DOWN: "DOWN" };
let obj2 = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
let createStyles = createStyles_mod;
let obj3 = { container: obj4, label: obj5, title: { marginBottom: 4 }, arrow: size };
obj4 = { padding: 10, borderRadius: nativeDefault.radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj5 = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, color: nativeDefault.colors.WHITE };
size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_8 = createStyles(obj3);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let LEFT;
  let UP;
  let arrowDirection;
  let arrowHeight;
  let arrowOffset;
  let arrowPosition;
  let arrowStyle;
  let arrowWidth;
  let children;
  let containerStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let items5;
  let label;
  let labelStyle;
  let onLayout;
  let style;
  let title;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(40);
  ({ style, arrowStyle, label, title, containerStyle, labelStyle, children, arrowWidth, arrowHeight, arrowOffset, arrowPosition, arrowDirection, onLayout } = arg0);
  let num = 16;
  if (undefined !== arrowWidth) {
    num = arrowWidth;
  }
  let num2 = 8;
  if (undefined !== arrowHeight) {
    num2 = arrowHeight;
  }
  let num3 = 0;
  if (undefined !== arrowOffset) {
    num3 = arrowOffset;
  }
  if (undefined === LEFT) {
    LEFT = obj2.LEFT;
  }
  if (undefined === UP) {
    UP = obj.UP;
  }
  const tmp6 = closure_8();
  if (obj2.LEFT === LEFT) {
    let tmp13;
    if (cResult[0] !== num3) {
      obj2 = { alignSelf: "flex-start", left: num3 };
      cResult[0] = num3;
      cResult[1] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[1];
    }
    tmp9 = tmp13;
  } else if (obj2.CENTER === LEFT) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { alignSelf: "center" };
      cResult[2] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[2];
    }
    tmp9 = tmp12;
  } else if (obj2.RIGHT === LEFT) {
    let tmp10;
    if (cResult[3] !== num3) {
      const obj4 = { alignSelf: "flex-end", right: num3 };
      cResult[3] = num3;
      cResult[4] = obj4;
      tmp10 = obj4;
    } else {
      tmp10 = cResult[4];
    }
    tmp9 = tmp10;
  } else {
    const tmpResult = GlobalUtils;
    tmpResult.assertNever(LEFT);
  }
  if (cResult[5] === UP) {
    if (cResult[6] === num2) {
      if (cResult[7] === tmp9) {
        if (cResult[8] === arrowStyle) {
          if (cResult[9] === num) {
            let tmp14;
            if (cResult[10] === tmp6.arrow) {
              tmp14 = cResult[11];
            }
            if (cResult[12] === containerStyle) {
              let tmp18;
              if (cResult[13] === tmp6.container) {
                tmp18 = cResult[14];
              }
              if (cResult[15] === tmp6.title) {
                let tmp19;
                if (cResult[16] === title) {
                  tmp19 = cResult[17];
                }
                if (cResult[18] === label) {
                  if (cResult[19] === labelStyle) {
                    let tmp22;
                    if (cResult[20] === tmp6.label) {
                      tmp22 = cResult[21];
                    }
                    if (cResult[22] === children) {
                      if (cResult[23] === onLayout) {
                        if (cResult[24] === tmp22) {
                          if (cResult[25] === tmp18) {
                            let tmp25;
                            if (cResult[26] === tmp19) {
                              tmp25 = cResult[27];
                            }
                            if (cResult[28] === UP) {
                              if (cResult[29] === num2) {
                                if (cResult[30] === tmp9) {
                                  if (cResult[31] === arrowStyle) {
                                    if (cResult[32] === num) {
                                      let tmp29;
                                      if (cResult[33] === tmp6.arrow) {
                                        tmp29 = cResult[34];
                                      }
                                      if (cResult[35] === style) {
                                        if (cResult[36] === tmp25) {
                                          if (cResult[37] === tmp29) {
                                            let tmp34;
                                            if (cResult[38] === tmp14) {
                                              tmp34 = cResult[39];
                                            }
                                            return tmp34;
                                          }
                                        }
                                      }
                                      const obj5 = { style, children: items };
                                      items = [tmp14, tmp25, tmp29];
                                      const tmp37 = hasOwnProperty(View, obj5);
                                      cResult[35] = style;
                                      cResult[36] = tmp25;
                                      cResult[37] = tmp29;
                                      cResult[38] = tmp14;
                                      cResult[39] = tmp37;
                                      tmp34 = tmp37;
                                    }
                                  }
                                }
                              }
                            }
                            let tmp31 = UP === obj.DOWN;
                            if (tmp31) {
                              const obj6 = { style: items1 };
                              items1 = [tmp6.arrow, , , ];
                              const obj7 = { borderLeftWidth: num / 2, borderRightWidth: num / 2, borderTopWidth: num2 };
                              items1[1] = obj7;
                              items1[2] = tmp9;
                              items1[3] = arrowStyle;
                              tmp31 = React3(View, obj6);
                            }
                            cResult[28] = UP;
                            cResult[29] = num2;
                            cResult[30] = tmp9;
                            cResult[31] = arrowStyle;
                            cResult[32] = num;
                            cResult[33] = tmp6.arrow;
                            cResult[34] = tmp31;
                            tmp29 = tmp31;
                          }
                        }
                      }
                    }
                    const obj8 = { onLayout, style: tmp18, children: items2 };
                    items2 = [tmp19, tmp22, children];
                    const tmp28 = hasOwnProperty(View, obj8);
                    cResult[22] = children;
                    cResult[23] = onLayout;
                    cResult[24] = tmp22;
                    cResult[25] = tmp18;
                    cResult[26] = tmp19;
                    cResult[27] = tmp28;
                    tmp25 = tmp28;
                  }
                }
                let tmp23 = null;
                if (null != label) {
                  const obj9 = { style: items3, children: label };
                  items3 = [tmp6.label, labelStyle];
                  tmp23 = React3(native.LegacyText, obj9);
                }
                cResult[18] = label;
                cResult[19] = labelStyle;
                cResult[20] = tmp6.label;
                cResult[21] = tmp23;
                tmp22 = tmp23;
              }
              let tmp20 = null;
              if (null != title) {
                const obj10 = { style: tmp6.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
                tmp20 = React3(Text_Text.Heading, obj10);
              }
              cResult[15] = tmp6.title;
              cResult[16] = title;
              cResult[17] = tmp20;
              tmp19 = tmp20;
            }
            const items4 = [tmp6.container, containerStyle];
            cResult[12] = containerStyle;
            cResult[13] = tmp6.container;
            cResult[14] = items4;
            tmp18 = items4;
          }
        }
      }
    }
  }
  let tmp15 = UP === obj.UP;
  if (tmp15) {
    const obj11 = { style: items5 };
    items5 = [tmp6.arrow, , , ];
    const obj12 = { borderLeftWidth: num / 2, borderRightWidth: num / 2, borderBottomWidth: num2 };
    items5[1] = obj12;
    items5[2] = tmp9;
    items5[3] = arrowStyle;
    tmp15 = React3(View, obj11);
  }
  cResult[5] = UP;
  cResult[6] = num2;
  cResult[7] = tmp9;
  cResult[8] = arrowStyle;
  cResult[9] = num;
  cResult[10] = tmp6.arrow;
  cResult[11] = tmp15;
  tmp14 = tmp15;
}) : ((arrowHeight) => {
  let arrowStyle;
  let arrowWidth;
  let children;
  let containerStyle;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let label;
  let labelStyle;
  let obj;
  let style;
  let title;
  ({ arrowStyle, label, title, arrowWidth } = arrowHeight);
  ({ style, containerStyle, labelStyle, children } = arrowHeight);
  if (arrowWidth === undefined) {
    arrowWidth = 16;
  }
  let num = arrowHeight.arrowHeight;
  if (num === undefined) {
    num = 8;
  }
  let num2 = arrowHeight.arrowOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  let LEFT = arrowHeight.arrowPosition;
  if (LEFT === undefined) {
    LEFT = obj2.LEFT;
  }
  let UP = arrowHeight.arrowDirection;
  if (UP === undefined) {
    UP = obj.UP;
  }
  const onLayout = arrowHeight.onLayout;
  const tmp3 = closure_8();
  const items = [LEFT, num2];
  const memo = react.useMemo(() => {
    if (obj2.LEFT === LEFT) {
      obj2 = { alignSelf: "flex-start", left: num2 };
      return obj2;
    } else if (obj2.CENTER === LEFT) {
      return { alignSelf: "center" };
    } else if (obj2.RIGHT === LEFT) {
      return { alignSelf: "flex-end", right: num2 };
    } else {
      const obj = GlobalUtils;
      obj.assertNever(LEFT);
    }
  }, items);
  obj = { style, children: items2 };
  let tmp8 = UP === obj.UP;
  const tmp7 = obj;
  if (tmp8) {
    obj2 = { style: items1 };
    items1 = [tmp3.arrow, , , ];
    const obj3 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderBottomWidth: num };
    items1[1] = obj3;
    items1[2] = memo;
    items1[3] = arrowStyle;
    tmp8 = closure_4(View, obj2);
  }
  items2 = [tmp8, , ];
  const obj4 = { onLayout, style: items3, children: items4 };
  items3 = [tmp3.container, containerStyle];
  let tmp10 = null;
  if (null != title) {
    const obj5 = { style: tmp3.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
    tmp10 = closure_4(num2(LEFT[9]).Heading, obj5);
  }
  items4 = [tmp10, , ];
  let tmp14 = null;
  if (null != label) {
    const obj6 = { style: items5, children: label };
    items5 = [tmp3.label, labelStyle];
    tmp14 = closure_4(num2(LEFT[10]).LegacyText, obj6);
  }
  items4[1] = tmp14;
  items4[2] = children;
  items2[1] = closure_5(View, obj4);
  let tmp18 = UP === tmp7.DOWN;
  if (tmp18) {
    const obj7 = { style: items6 };
    items6 = [tmp3.arrow, , , ];
    const obj8 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderTopWidth: num };
    items6[1] = obj8;
    items6[2] = memo;
    items6[3] = arrowStyle;
    tmp18 = closure_4(View, obj7);
  }
  items2[2] = tmp18;
  return closure_5(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

export default tmp4;
export { TooltipArrowDirections };
export const TooltipArrowPositions = obj2;
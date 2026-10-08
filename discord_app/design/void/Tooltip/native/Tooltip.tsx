// === Module 14237: Tooltip/Tooltip ===

// Module 14237 (Tooltip/Tooltip)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const TooltipArrowDirections = { UP: "UP", DOWN: "DOWN" };
let obj2 = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
const createStyles = fn(5090);
let obj4 = { container: { padding: 10, borderRadius: nativeDefault.radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, label: null, title: null, arrow: null };
let obj5 = { padding: 10, borderRadius: nativeDefault.radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4.label = { fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM, fontSize: 12, color: nativeDefault.colors.WHITE };
obj4.title = { marginBottom: 4 };
let size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4.arrow = size;
let closure_8 = createStyles.createStyles(obj4);
const ReactCompilerGating = fn(558);
let obj6 = { fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM, fontSize: 12, color: nativeDefault.colors.WHITE };
size = fn(2);
const result = size.fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Tooltip(arg0) {
  const obj = c;
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
  let num4 = 0;
  if (undefined !== arrowOffset) {
    num4 = arrowOffset;
  }
  if (undefined === LEFT) {
    LEFT = obj2.LEFT;
  }
  if (undefined === UP) {
    UP = obj.UP;
  }
  const tmp6 = closure_8();
  if (obj2.LEFT === LEFT) {
    if (cResult[0] !== num4) {
      obj2 = { alignSelf: "flex-start", left: num4 };
      cResult[num3] = num4;
      num3 = 1;
      cResult[1] = obj2;
    }
  } else {
    if (tmp7.CENTER === LEFT) {
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { alignSelf: "center" };
        cResult[2] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[2];
      }
      let tmp9 = tmp12;
    } else if (tmp7.RIGHT === LEFT) {
      if (cResult[3] !== num4) {
        const obj4 = { alignSelf: "flex-end", right: num4 };
        cResult[3] = num4;
        cResult[4] = obj4;
        let tmp10 = obj4;
      } else {
        tmp10 = cResult[4];
      }
      tmp9 = tmp10;
    } else {
      GlobalUtils.assertNever(LEFT);
      const tmpResult = GlobalUtils;
    }
    if (cResult[5] === UP) {
      if (cResult[6] === num2) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === arrowStyle) {
            if (cResult[9] === num) {
              if (cResult[10] === tmp6.arrow) {
                let tmp15 = cResult[11];
              }
              if (cResult[12] === containerStyle) {
                if (cResult[13] === tmp6.container) {
                  let tmp20 = cResult[14];
                }
                if (cResult[15] === tmp6.title) {
                  if (cResult[16] === title) {
                    let tmp21 = cResult[17];
                  }
                  if (cResult[18] === label) {
                    if (cResult[19] === labelStyle) {
                      if (cResult[20] === tmp6.label) {
                        let tmp24 = cResult[21];
                      }
                      if (cResult[22] === children) {
                        if (cResult[23] === onLayout) {
                          if (cResult[24] === tmp24) {
                            if (cResult[25] === tmp20) {
                              if (cResult[26] === tmp21) {
                                let tmp27 = cResult[27];
                              }
                              if (cResult[28] === UP) {
                                if (cResult[29] === num2) {
                                  if (cResult[30] === tmp9) {
                                    if (cResult[31] === arrowStyle) {
                                      if (cResult[32] === num) {
                                        if (cResult[33] === tmp6.arrow) {
                                          let tmp31 = cResult[34];
                                        }
                                        if (cResult[35] === style) {
                                          if (cResult[36] === tmp27) {
                                            if (cResult[37] === tmp31) {
                                              if (cResult[38] === tmp15) {
                                                let tmp36 = cResult[39];
                                              }
                                              return tmp36;
                                            }
                                          }
                                        }
                                        const obj5 = { style, children: null };
                                        const items = [tmp15, tmp27, tmp31];
                                        obj5.children = items;
                                        const tmp39 = hasOwnProperty(View, obj5);
                                        cResult[35] = style;
                                        cResult[36] = tmp27;
                                        cResult[37] = tmp31;
                                        cResult[38] = tmp15;
                                        cResult[39] = tmp39;
                                        tmp36 = tmp39;
                                      }
                                    }
                                  }
                                }
                              }
                              let tmp33 = UP === obj.DOWN;
                              if (tmp33) {
                                const obj6 = { style: null };
                                const items1 = [tmp6.arrow, , , ];
                                const obj7 = { borderLeftWidth: num / 2, borderRightWidth: num / 2, borderTopWidth: num2 };
                                items1[1] = obj7;
                                items1[2] = tmp9;
                                items1[3] = arrowStyle;
                                obj6.style = items1;
                                tmp33 = React4(View, obj6);
                              }
                              cResult[28] = UP;
                              cResult[29] = num2;
                              cResult[30] = tmp9;
                              cResult[31] = arrowStyle;
                              cResult[32] = num;
                              cResult[33] = tmp6.arrow;
                              cResult[34] = tmp33;
                              tmp31 = tmp33;
                            }
                          }
                        }
                      }
                      const obj8 = { onLayout, style: tmp20, children: null };
                      const items2 = [tmp21, tmp24, children];
                      obj8.children = items2;
                      const tmp30 = hasOwnProperty(View, obj8);
                      cResult[22] = children;
                      cResult[23] = onLayout;
                      cResult[24] = tmp24;
                      cResult[25] = tmp20;
                      cResult[26] = tmp21;
                      cResult[27] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                  let tmp25 = null;
                  if (null != label) {
                    const obj9 = { style: null, children: null };
                    const items3 = [tmp6.label, labelStyle];
                    obj9.style = items3;
                    obj9.children = label;
                    tmp25 = React4(native.LegacyText, obj9);
                  }
                  cResult[18] = label;
                  cResult[19] = labelStyle;
                  cResult[20] = tmp6.label;
                  cResult[21] = tmp25;
                  tmp24 = tmp25;
                }
                let tmp22 = null;
                if (null != title) {
                  const obj10 = { style: tmp6.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
                  tmp22 = React4(Text_Text.Heading, obj10);
                }
                cResult[15] = tmp6.title;
                cResult[16] = title;
                cResult[17] = tmp22;
                tmp21 = tmp22;
              }
              const items4 = [tmp6.container, containerStyle];
              cResult[12] = containerStyle;
              cResult[13] = tmp6.container;
              cResult[14] = items4;
              tmp20 = items4;
            }
          }
        }
      }
    }
    let tmp17 = UP === obj.UP;
    if (tmp17) {
      const obj11 = { style: null };
      const items5 = [tmp6.arrow, , , ];
      const obj12 = { borderLeftWidth: num / 2, borderRightWidth: num / 2, borderBottomWidth: num2 };
      items5[1] = obj12;
      items5[2] = tmp9;
      items5[3] = arrowStyle;
      obj11.style = items5;
      tmp17 = React4(View, obj11);
    }
    cResult[5] = UP;
    cResult[6] = num2;
    cResult[7] = tmp9;
    cResult[8] = arrowStyle;
    cResult[9] = num;
    cResult[10] = tmp6.arrow;
    cResult[11] = tmp17;
    tmp15 = tmp17;
  }
}) : (function Tooltip(arrowHeight) {
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
  const tmp3 = closure_8();
  const items = [LEFT, num2];
  const memo = noop.useMemo(() => {
    if (obj2.LEFT === LEFT) {
      obj2 = { alignSelf: "flex-start", left: num2 };
      return obj2;
    } else if (tmp2.CENTER === LEFT) {
      return { alignSelf: "center" };
    } else if (tmp2.RIGHT === LEFT) {
      const obj3 = { alignSelf: "flex-end", right: num2 };
      return obj3;
    } else {
      GlobalUtils.assertNever(LEFT);
    }
  }, items);
  obj = { style, children: null };
  let tmp8 = UP === obj.UP;
  if (tmp8) {
    obj2 = { style: null };
    const items1 = [tmp3.arrow, , , ];
    let obj3 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderBottomWidth: num };
    items1[1] = obj3;
    items1[2] = memo;
    items1[3] = arrowStyle;
    obj2.style = items1;
    tmp8 = closure_4(View, obj2);
  }
  const items2 = [tmp8, , ];
  const obj4 = { onLayout: arrowHeight.onLayout, style: null, children: null };
  const items3 = [tmp3.container, containerStyle];
  obj4.style = items3;
  let tmp10 = null;
  if (null != title) {
    const obj5 = { style: tmp3.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
    tmp10 = closure_4(num2(LEFT[9]).Heading, obj5);
  }
  const items4 = [tmp10, , ];
  let tmp14 = null;
  if (null != label) {
    const obj6 = { style: null, children: null };
    const items5 = [tmp3.label, labelStyle];
    obj6.style = items5;
    obj6.children = label;
    tmp14 = closure_4(num2(LEFT[10]).LegacyText, obj6);
  }
  items4[1] = tmp14;
  items4[2] = children;
  obj4.children = items4;
  items2[1] = closure_5(View, obj4);
  let tmp18 = UP === obj.DOWN;
  if (tmp18) {
    const obj7 = { style: null };
    const items6 = [tmp3.arrow, , , ];
    const obj8 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderTopWidth: num };
    items6[1] = obj8;
    items6[2] = memo;
    items6[3] = arrowStyle;
    obj7.style = items6;
    tmp18 = closure_4(View, obj7);
  }
  items2[2] = tmp18;
  obj.children = items2;
  return closure_5(View, obj);
});
export { TooltipArrowDirections };
export const TooltipArrowPositions = obj2;
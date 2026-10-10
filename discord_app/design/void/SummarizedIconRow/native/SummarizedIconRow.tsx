// === Module 14383: SummarizedIconRow ===

// Module 14383 (SummarizedIconRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" }, overflowSquircleWrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, overflowSquircle: null, overflowTextOnly: null, overflowCircleWrap: null, overflowCircle: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
obj2.overflowSquircle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
obj2.overflowTextOnly = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj5 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.overflowCircleWrap = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
obj2.overflowCircle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
let closure_4 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverflowSquircle(style) {
  const cResult = c.c(11);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.overflowSquircleWrap) {
      let tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + style.overflow;
    if (cResult[3] !== combined) {
      const obj2 = { variant: "text-xs/medium", children: combined };
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.overflowSquircle) {
      if (cResult[6] === tmp8) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp11) {
          let tmp15 = cResult[10];
        }
        return tmp15;
      }
      const obj3 = { style: tmp5, children: tmp11 };
      const tmp18 = <View style={tmp5}>{tmp11}</View>;
      cResult[8] = tmp5;
      cResult[9] = tmp11;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
    const obj4 = { style: tmp4.overflowSquircle, children: tmp8 };
    const tmp14 = <View style={tmp4.overflowSquircle}>{tmp8}</View>;
    cResult[5] = tmp4.overflowSquircle;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items = [tmp4.overflowSquircleWrap, style];
  cResult[0] = style;
  cResult[1] = tmp4.overflowSquircleWrap;
  cResult[2] = items;
  tmp5 = items;
}) : (function OverflowSquircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const obj = { style: null, children: null };
  const items = [tmp.overflowSquircleWrap, style];
  obj.style = items;
  const obj2 = { style: tmp.overflowSquircle, children: jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow }) };
  obj.children = <View style={tmp.overflowSquircle}>{jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow })}</View>;
  return <View style={null}>{null}</View>;
});
fn(558);
const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverflowText(style) {
  const cResult = c.c(8);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.overflowTextOnly) {
      let tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + style.overflow;
    if (cResult[3] !== combined) {
      const obj2 = { variant: "text-xs/medium", children: combined };
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp8) {
        let tmp11 = cResult[7];
      }
      return tmp11;
    }
    const obj3 = { style: tmp5, children: tmp8 };
    const tmp14 = <View style={tmp5}>{tmp8}</View>;
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items = [tmp4.overflowTextOnly, style];
  cResult[0] = style;
  cResult[1] = tmp4.overflowTextOnly;
  cResult[2] = items;
  tmp5 = items;
}) : (function OverflowText(arg0) {
  ({ overflow, style } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_4().overflowTextOnly, style];
  obj.style = items;
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  return <View style={null}>{null}</View>;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverflowTextSmall(style) {
  const cResult = c.c(8);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.overflowTextOnly) {
      let tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + style.overflow;
    if (cResult[3] !== combined) {
      const obj2 = { variant: "text-xxs/medium", children: combined };
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xxs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp8) {
        let tmp11 = cResult[7];
      }
      return tmp11;
    }
    const obj3 = { style: tmp5, children: tmp8 };
    const tmp14 = <View style={tmp5}>{tmp8}</View>;
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items = [tmp4.overflowTextOnly, style];
  cResult[0] = style;
  cResult[1] = tmp4.overflowTextOnly;
  cResult[2] = items;
  tmp5 = items;
}) : (function OverflowTextSmall(arg0) {
  ({ overflow, style } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_4().overflowTextOnly, style];
  obj.style = items;
  obj.children = jsx(Text_Text.Text, { variant: "text-xxs/medium", children: "+" + overflow });
  return <View style={null}>{null}</View>;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverflowCircle(style) {
  const cResult = c.c(11);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.overflowCircleWrap) {
      let tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + style.overflow;
    if (cResult[3] !== combined) {
      const obj2 = { variant: "text-xs/medium", children: combined };
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.overflowCircle) {
      if (cResult[6] === tmp8) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp11) {
          let tmp15 = cResult[10];
        }
        return tmp15;
      }
      const obj3 = { style: tmp5, children: tmp11 };
      const tmp18 = <View style={tmp5}>{tmp11}</View>;
      cResult[8] = tmp5;
      cResult[9] = tmp11;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
    const obj4 = { style: tmp4.overflowCircle, children: tmp8 };
    const tmp14 = <View style={tmp4.overflowCircle}>{tmp8}</View>;
    cResult[5] = tmp4.overflowCircle;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items = [tmp4.overflowCircleWrap, style];
  cResult[0] = style;
  cResult[1] = tmp4.overflowCircleWrap;
  cResult[2] = items;
  tmp5 = items;
}) : (function OverflowCircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const obj = { style: null, children: null };
  const items = [tmp.overflowCircleWrap, style];
  obj.style = items;
  const obj2 = { style: tmp.overflowCircle, children: jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow }) };
  obj.children = <View style={tmp.overflowCircle}>{jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow })}</View>;
  return <View style={null}>{null}</View>;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SummarizedIconRow(offsetAmount) {
  const cResult = items(renderItem[6]).c(28);
  items = offsetAmount.items;
  ({ max, renderItem } = offsetAmount);
  offsetAmount = offsetAmount.offsetAmount;
  const iconWrapperStyle = offsetAmount.iconWrapperStyle;
  const overflowStyle = offsetAmount.overflowStyle;
  ({ style, overflowComponent } = offsetAmount);
  let num = 8;
  if (undefined !== max) {
    num = max;
  }
  if (undefined === overflowComponent) {
    overflowComponent = num;
  }
  const tmp2 = overflowStyle();
  const bound = Math.max(items.length - num, 0);
  if (cResult[0] === iconWrapperStyle) {
    if (cResult[1] === items.length) {
      if (cResult[2] === num) {
        if (cResult[3] === offsetAmount) {
          if (cResult[4] === renderItem) {
            if (cResult[5] === tmp2.iconWrapper) {
              let tmp4 = cResult[6];
            }
            closure_9 = tmp4;
            if (cResult[7] === style) {
              if (cResult[8] === tmp2.container) {
                let tmp5 = cResult[9];
              }
              if (cResult[10] === overflowComponent) {
                if (cResult[11] === items) {
                  if (cResult[12] === num) {
                    if (cResult[13] === offsetAmount) {
                      if (cResult[14] === bound) {
                        if (cResult[15] === overflowStyle) {
                          if (cResult[16] === tmp4) {
                            if (cResult[25] === tmp5) {
                              if (cResult[26] === tmp7) {
                                let tmp11 = cResult[27];
                              }
                              return tmp11;
                            }
                            class I {
                              constructor(arg0, arg1) {
                                if (arg1 >= max) {
                                  return;
                                } else {
                                  num = 1;
                                  if (arg1 === tmp - 1) {
                                    num2 = 0;
                                    if (closure_8 > 0) {
                                      tmp6 = jsx;
                                      tmp7 = closure_6;
                                      obj = { style: null, overflow: null };
                                      obj1 = { marginLeft: null };
                                      tmp8 = offsetAmount;
                                      obj1.marginLeft = offsetAmount;
                                      items = [, ];
                                      items[0] = obj1;
                                      tmp9 = overflowStyle;
                                      items[1] = overflowStyle;
                                      obj.style = items;
                                      obj.overflow = tmp2 + 1;
                                      tmp5 = jsx(closure_6, obj, arg1);
                                    }
                                    return tmp5;
                                  }
                                  tmp3 = offsetAmount;
                                  tmp4 = closure_9;
                                  tmp5 = closure_9(offsetAmount, arg1);
                                }
                                return;
                              }
                            }
                            let obj2 = { style: tmp5, children: cResult[17] };
                            const tmp13 = iconWrapperStyle(offsetAmount, obj2);
                            cResult[25] = tmp5;
                            cResult[26] = cResult[17];
                            cResult[27] = tmp13;
                            tmp11 = tmp13;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (cResult[18] === overflowComponent) {
                if (cResult[19] === num) {
                  if (cResult[20] === offsetAmount) {
                    if (cResult[21] === bound) {
                      if (cResult[22] === overflowStyle) {
                        if (cResult[23] === tmp4) {
                          let tmp8 = cResult[24];
                        }
                        const mapped = items.map(tmp8);
                        class I {
                          constructor(arg0, arg1) {
                            if (arg1 >= max) {
                              return;
                            } else {
                              num = 1;
                              if (arg1 === tmp - 1) {
                                num2 = 0;
                                if (closure_8 > 0) {
                                  tmp6 = jsx;
                                  tmp7 = closure_6;
                                  obj = { style: null, overflow: null };
                                  obj1 = { marginLeft: null };
                                  tmp8 = offsetAmount;
                                  obj1.marginLeft = offsetAmount;
                                  items = [, ];
                                  items[0] = obj1;
                                  tmp9 = overflowStyle;
                                  items[1] = overflowStyle;
                                  obj.style = items;
                                  obj.overflow = tmp2 + 1;
                                  tmp5 = jsx(closure_6, obj, arg1);
                                }
                                return tmp5;
                              }
                              tmp3 = offsetAmount;
                              tmp4 = closure_9;
                              tmp5 = closure_9(offsetAmount, arg1);
                            }
                            return;
                          }
                        }
                        cResult[11] = items;
                        cResult[12] = num;
                        cResult[13] = offsetAmount;
                        cResult[14] = bound;
                        cResult[15] = overflowStyle;
                        cResult[16] = tmp4;
                        cResult[17] = mapped;
                      }
                    }
                  }
                }
              }
              class I {
                constructor(arg0, arg1) {
                  if (arg1 >= max) {
                    return;
                  } else {
                    num = 1;
                    if (arg1 === tmp - 1) {
                      num2 = 0;
                      if (closure_8 > 0) {
                        tmp6 = jsx;
                        tmp7 = closure_6;
                        obj = { style: null, overflow: null };
                        obj1 = { marginLeft: null };
                        tmp8 = offsetAmount;
                        obj1.marginLeft = offsetAmount;
                        items = [, ];
                        items[0] = obj1;
                        tmp9 = overflowStyle;
                        items[1] = overflowStyle;
                        obj.style = items;
                        obj.overflow = tmp2 + 1;
                        tmp5 = jsx(closure_6, obj, arg1);
                      }
                      return tmp5;
                    }
                    tmp3 = offsetAmount;
                    tmp4 = closure_9;
                    tmp5 = closure_9(offsetAmount, arg1);
                  }
                  return;
                }
              }
              cResult[18] = overflowComponent;
              cResult[19] = num;
              cResult[20] = offsetAmount;
              cResult[21] = bound;
              cResult[22] = overflowStyle;
              cResult[23] = tmp4;
              cResult[24] = I;
              tmp8 = I;
            }
            tmp6[0] = tmp2.container;
            tmp6[1] = style;
            cResult[7] = style;
            cResult[8] = tmp2.container;
            cResult[9] = tmp6;
            tmp5 = tmp6;
          }
        }
      }
    }
  }
  function renderListItem(arg0, id) {
    if (!arg0) {
      return null;
    } else {
      items = [iconWrapper.iconWrapper, iconWrapperStyle, ];
      if (0 !== id) {
        const obj2 = { marginLeft: offsetAmount };
        let obj = obj2;
      } else {
        obj = {};
      }
      const obj3 = { style: null, children: null };
      items[2] = obj;
      obj3.style = items;
      obj3.children = renderItem(arg0, id === tmp);
      <View key={id} style={null}>{null}</View>;
    }
  }
  cResult[0] = iconWrapperStyle;
  cResult[1] = items.length;
  cResult[2] = num;
  cResult[3] = offsetAmount;
  cResult[4] = renderItem;
  cResult[5] = tmp2.iconWrapper;
  cResult[6] = renderListItem;
  tmp4 = renderListItem;
}) : (function SummarizedIconRow(max) {
  let items = max.items;
  let num = max.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: closure_4, overflowStyle: closure_5, overflowComponent, style } = max);
  if (overflowComponent === undefined) {
    overflowComponent = closure_5;
  }
  let tmp = closure_4();
  closure_8 = Math.max(items.length - num, 0);
  let obj = {
    style: null,
    children: items.map((item, index) => {
      if (index < num) {
        if (index === tmp - 1) {
          if (closure_8 > 0) {
            const obj2 = { style: null, overflow: null };
            const obj3 = { marginLeft };
            items = [obj3, closure_1_5];
            obj2.style = items;
            obj2.overflow = tmp2 + 1;
            let tmp7 = <overflowComponent key={index} style={null} overflow={null} />;
          }
          return tmp7;
        }
        const _Math = Math;
        tmp7 = null;
        if (item) {
          let items1 = [iconWrapper.iconWrapper, closure_1_4, ];
          if (0 !== index) {
            const obj4 = { marginLeft };
            let obj = obj4;
          } else {
            obj = {};
          }
          const obj5 = { style: null, children: null };
          items1[2] = obj;
          obj5.style = items1;
          items1 = View(item, index === tmp6);
          obj5.children = items1;
          <View key={index} style={null}>{null}</View>;
        }
      }
      tmp = num;
    })
  };
  let items1 = [tmp.container, style];
  obj.style = items1;
  return <View style={null}>{items.map((item, index) => {
    if (index < num) {
      if (index === tmp - 1) {
        if (closure_8 > 0) {
          const obj2 = { style: null, overflow: null };
          const obj3 = { marginLeft };
          items = [obj3, closure_1_5];
          obj2.style = items;
          obj2.overflow = tmp2 + 1;
          let tmp7 = <overflowComponent key={index} style={null} overflow={null} />;
        }
        return tmp7;
      }
      const _Math = Math;
      tmp7 = null;
      if (item) {
        let items1 = [iconWrapper.iconWrapper, closure_1_4, ];
        if (0 !== index) {
          const obj4 = { marginLeft };
          let obj = obj4;
        } else {
          obj = {};
        }
        const obj5 = { style: null, children: null };
        items1[2] = obj;
        obj5.style = items1;
        items1 = View(item, index === tmp6);
        obj5.children = items1;
        <View key={index} style={null}>{null}</View>;
      }
    }
    tmp = num;
  })}</View>;
});
export const OverflowText = tmp3;
export const OverflowTextSmall = tmp4;
export const OverflowCircle = tmp5;
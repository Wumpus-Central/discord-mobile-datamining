// === Module 13930: SummarizedIconRow ===

// Module 13930 (SummarizedIconRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let offsetAmount;

let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" }, overflowSquircleWrap: obj2, overflowSquircle: obj3, overflowTextOnly: obj4, overflowCircleWrap: obj5, overflowCircle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
obj4 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 });
let closure_4 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(11);
  style = style.style;
  const overflow = style.overflow;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    let tmp8;
    if (cResult[1] === tmp4.overflowSquircleWrap) {
      tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + overflow;
    if (cResult[3] !== combined) {
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.overflowSquircle) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        let tmp15;
        if (cResult[9] === tmp11) {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
      const tmp18 = <View style={tmp5}>{tmp11}</View>;
      cResult[8] = tmp5;
      cResult[9] = tmp11;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
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
}) : ((arg0) => {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const items = [tmp.overflowSquircleWrap, style];
  ({ variant: "text-xs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(8);
  style = style.style;
  const overflow = style.overflow;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    let tmp8;
    if (cResult[1] === tmp4.overflowTextOnly) {
      tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + overflow;
    if (cResult[3] !== combined) {
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
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
}) : ((arg0) => {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const items = [closure_4().overflowTextOnly, style];
  ({ variant: "text-xs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(8);
  style = style.style;
  const overflow = style.overflow;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    let tmp8;
    if (cResult[1] === tmp4.overflowTextOnly) {
      tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + overflow;
    if (cResult[3] !== combined) {
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xxs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
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
}) : ((arg0) => {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const items = [closure_4().overflowTextOnly, style];
  ({ variant: "text-xxs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(11);
  style = style.style;
  const overflow = style.overflow;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    let tmp8;
    if (cResult[1] === tmp4.overflowCircleWrap) {
      tmp5 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "+" + overflow;
    if (cResult[3] !== combined) {
      const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/medium", children: combined });
      cResult[3] = combined;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.overflowCircle) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        let tmp15;
        if (cResult[9] === tmp11) {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
      const tmp18 = <View style={tmp5}>{tmp11}</View>;
      cResult[8] = tmp5;
      cResult[9] = tmp11;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
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
}) : ((arg0) => {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const items = [tmp.overflowCircleWrap, style];
  ({ variant: "text-xs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((offsetAmount) => {
  let items;
  let max;
  let overflowComponent;
  let renderItem;
  let style;
  let obj = items(renderItem[6]);
  const cResult = obj.c(28);
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
  const iconWrapper = tmp2;
  const bound = Math.max(items.length - num, 0);
  if (cResult[0] === iconWrapperStyle) {
    if (cResult[1] === items.length) {
      if (cResult[2] === num) {
        if (cResult[3] === offsetAmount) {
          if (cResult[4] === renderItem) {
            let tmp4;
            if (cResult[5] === tmp2.iconWrapper) {
              tmp4 = cResult[6];
            }
            let closure_9 = tmp4;
            if (cResult[7] === style) {
              let tmp5;
              let tmp6;
              if (cResult[8] === tmp2.container) {
                tmp5 = cResult[9];
              }
              if (cResult[10] === overflowComponent) {
                if (cResult[11] === items) {
                  if (cResult[12] === num) {
                    if (cResult[13] === offsetAmount) {
                      if (cResult[14] === bound) {
                        if (cResult[15] === overflowStyle) {
                          if (cResult[16] === tmp4) {
                            tmp6 = cResult[17];
                          }
                          if (cResult[25] === tmp5) {
                            let tmp9;
                            if (cResult[26] === tmp6) {
                              tmp9 = cResult[27];
                            }
                            return tmp9;
                          }
                          let obj2 = { style: tmp5, children: tmp6 };
                          const tmp12 = iconWrapperStyle(offsetAmount, obj2);
                          cResult[25] = tmp5;
                          cResult[26] = tmp6;
                          cResult[27] = tmp12;
                          tmp9 = tmp12;
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
                        let tmp7;
                        if (cResult[23] === tmp4) {
                          tmp7 = cResult[24];
                        }
                        const mapped = items.map(tmp7);
                        cResult[10] = overflowComponent;
                        cResult[11] = items;
                        cResult[12] = num;
                        cResult[13] = offsetAmount;
                        cResult[14] = bound;
                        cResult[15] = overflowStyle;
                        cResult[16] = tmp4;
                        cResult[17] = mapped;
                        tmp6 = mapped;
                      }
                    }
                  }
                }
              }
              const fn2 = function _(arg0, key) {
                if (key < num) {
                  if (key === tmp - 1) {
                    let tmp5;
                    if (bound > 0) {
                      items = [{ marginLeft: offsetAmount }, overflowStyle];
                      tmp5 = <overflowComponent key={key} style={items} overflow={tmp2 + 1} />;
                      const obj2 = { marginLeft: offsetAmount };
                    }
                    return tmp5;
                  }
                  tmp5 = closure_9(arg0, key);
                }
              };
              cResult[18] = overflowComponent;
              cResult[19] = num;
              cResult[20] = offsetAmount;
              cResult[21] = bound;
              cResult[22] = overflowStyle;
              cResult[23] = tmp4;
              cResult[24] = fn2;
              tmp7 = fn2;
            }
            const items1 = [tmp2.container, style];
            cResult[7] = style;
            cResult[8] = tmp2.container;
            cResult[9] = items1;
            tmp5 = items1;
          }
        }
      }
    }
  }
  const fn = function f(arg0, id) {
    let tmp4Result = null;
    if (arg0) {
      let obj;
      items = [iconWrapper.iconWrapper, iconWrapperStyle, ];
      if (0 !== id) {
        obj = { marginLeft: offsetAmount };
        const obj2 = { marginLeft: offsetAmount };
      } else {
        obj = {};
      }
      items[2] = obj;
      tmp4Result = <View key={id} style={items}>{renderItem(arg0, id === tmp)}</View>;
    }
    return tmp4Result;
  };
  cResult[0] = iconWrapperStyle;
  cResult[1] = items.length;
  cResult[2] = num;
  cResult[3] = offsetAmount;
  cResult[4] = renderItem;
  cResult[5] = tmp2.iconWrapper;
  cResult[6] = fn;
  tmp4 = fn;
}) : ((max) => {
  let marginLeft;
  let overflowComponent;
  let style;
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
  const iconWrapper = tmp;
  let closure_8 = Math.max(items.length - num, 0);
  let items1 = [tmp.container, style];
  return <View style={items1}>{items.map((item, index) => {
    const tmp = num;
    if (index < num) {
      let tmp8Result;
      if (index === tmp - 1) {
        if (closure_8 > 0) {
          items = [{ marginLeft: jsx }, closure_5];
          tmp8Result = <overflowComponent key={index} style={items} overflow={tmp2 + 1} />;
          const obj3 = { marginLeft: jsx };
        }
        return tmp8Result;
      }
      const _Math = Math;
      tmp8Result = null;
      if (item) {
        let obj;
        const items1 = [iconWrapper.iconWrapper, closure_4, ];
        if (0 !== index) {
          obj = { marginLeft: jsx };
          const obj4 = { marginLeft: jsx };
        } else {
          obj = {};
        }
        items1[2] = obj;
        tmp8Result = <View key={index} style={items1}>{View(item, index === tmp6)}</View>;
      }
    }
  })}</View>;
});
const result = size.fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default tmp7;
export const OverflowText = tmp4;
export const OverflowTextSmall = tmp5;
export const OverflowCircle = tmp6;
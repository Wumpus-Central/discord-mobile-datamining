// === Module 15001: SafetyHubAccountStandingSubwayMarker ===

// Module 15001 (SafetyHubAccountStandingSubwayMarker)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { width: 56, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", rowGap: 8, flex: 1 }, marker: { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, empty: null, label: null, firstOption: null, lastOption: null };
let size = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, width: "100%", height: "100%" };
obj2.empty = size;
obj2.label = { textAlign: "center" };
obj2.firstOption = { alignItems: "flex-start", textAlign: "left" };
obj2.lastOption = { alignItems: "flex-end", textAlign: "right" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyHubAccountStandingSubwayMarker(arg0) {
  let format = style;
  let formatResult = label;
  const cResult = style(label[6]).c(33);
  ({ selectedIcon, style } = arg0);
  ({ status, isSelected } = arg0);
  ({ index, onLayout, size, numOptions } = arg0);
  label = closure_6();
  if (cResult[0] === index) {
    if (cResult[1] === label.firstOption) {
      if (cResult[3] === index) {
        if (cResult[4] === numOptions) {
          if (cResult[5] === label.lastOption) {
            if (cResult[7] === label.container) {
              if (cResult[8] === tmp3) {
                if (cResult[9] === tmp5) {
                  let tmp8 = cResult[10];
                }
                if (cResult[11] === index) {
                  if (cResult[12] === isSelected) {
                    if (cResult[13] === numOptions) {
                      if (cResult[14] === selectedIcon) {
                        if (cResult[15] === size) {
                          if (cResult[16] === label.empty) {
                            if (cResult[17] === label.marker) {
                              let tmp16 = cResult[18];
                            }
                            if (cResult[19] === isSelected) {
                              if (cResult[20] === status) {
                                if (cResult[21] === style) {
                                  if (cResult[22] === label.label) {
                                    if (cResult[28] === tmp8) {
                                      if (cResult[29] === onLayout) {
                                        if (cResult[30] === tmp16) {
                                          if (cResult[31] === tmp18) {
                                            let tmp22 = cResult[32];
                                          }
                                          return tmp22;
                                        }
                                      }
                                    }
                                    class I {
                                      constructor(arg0, arg1) {
                                        tmp = jsx;
                                        if (isSelected) {
                                          obj1 = { style: null, variant: "text-xxs/bold", children: null };
                                          obj4 = { color: null };
                                          tmp3 = style;
                                          obj4.color = style.color;
                                          obj1.style = obj4;
                                          obj1.children = arg0;
                                          obj = obj1;
                                        } else {
                                          obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: null, children: null };
                                          tmp2 = closure_2;
                                          obj.style = closure_2.label;
                                          obj.children = arg0;
                                        }
                                        return tmp(closure_0(closure_2[7]).Text, obj, arg1);
                                      }
                                    }
                                    let obj2 = { style: tmp8, onLayout, children: null };
                                    const items = [tmp16, cResult[23]];
                                    obj2.children = items;
                                    const tmp24 = closure_5(View, obj2);
                                    cResult[28] = tmp8;
                                    cResult[29] = onLayout;
                                    cResult[30] = tmp16;
                                    cResult[31] = cResult[23];
                                    cResult[32] = tmp24;
                                    tmp22 = tmp24;
                                  }
                                }
                              }
                            }
                            if (cResult[24] === isSelected) {
                              if (cResult[25] === style) {
                                if (cResult[26] === label.label) {
                                  let tmp19 = cResult[27];
                                }
                                const intl = format(formatResult[8]).intl;
                                format = intl.format;
                                class I {
                                  constructor(arg0, arg1) {
                                    tmp = jsx;
                                    if (isSelected) {
                                      obj1 = { style: null, variant: "text-xxs/bold", children: null };
                                      obj4 = { color: null };
                                      tmp3 = style;
                                      obj4.color = style.color;
                                      obj1.style = obj4;
                                      obj1.children = arg0;
                                      obj = obj1;
                                    } else {
                                      obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: null, children: null };
                                      tmp2 = closure_2;
                                      obj.style = closure_2.label;
                                      obj.children = arg0;
                                    }
                                    return tmp(closure_0(closure_2[7]).Text, obj, arg1);
                                  }
                                }
                                tmp20[0] = tmp19;
                                formatResult = format(status, tmp20);
                                cResult[19] = isSelected;
                                cResult[20] = status;
                                cResult[21] = style;
                                label = label.label;
                                cResult[22] = label;
                                cResult[23] = formatResult;
                              }
                            }
                            class I {
                              constructor(arg0, arg1) {
                                tmp = jsx;
                                if (isSelected) {
                                  obj1 = { style: null, variant: "text-xxs/bold", children: null };
                                  obj4 = { color: null };
                                  tmp3 = style;
                                  obj4.color = style.color;
                                  obj1.style = obj4;
                                  obj1.children = arg0;
                                  obj = obj1;
                                } else {
                                  obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: null, children: null };
                                  tmp2 = closure_2;
                                  obj.style = closure_2.label;
                                  obj.children = arg0;
                                }
                                return tmp(closure_0(closure_2[7]).Text, obj, arg1);
                              }
                            }
                            cResult[24] = isSelected;
                            cResult[25] = style;
                            cResult[26] = label.label;
                            cResult[27] = I;
                            tmp19 = I;
                          }
                        }
                      }
                    }
                  }
                }
                cResult[11] = index;
                cResult[12] = isSelected;
                cResult[13] = numOptions;
                cResult[14] = selectedIcon;
                cResult[15] = size;
                cResult[16] = label.empty;
                cResult[17] = label.marker;
                cResult[18] = selectedIcon;
                tmp16 = selectedIcon;
              }
            }
            let obj3 = {};
            const merged = Object.assign(label.container);
            const merged1 = Object.assign(tmp3);
            const merged2 = Object.assign(tmp5);
            cResult[7] = label.container;
            cResult[8] = tmp3;
            cResult[9] = cResult[6];
            cResult[10] = obj3;
            tmp8 = obj3;
          }
        }
      }
      cResult[3] = index;
      cResult[4] = numOptions;
      cResult[5] = label.lastOption;
      cResult[6] = tmp6;
    }
  }
  let num = 0;
  cResult[num] = index;
  cResult[1] = label.firstOption;
  num = 2;
  cResult[2] = 0 === index ? label.firstOption : {};
  let obj = style(label[6]);
  const tmp4 = 0 === index ? label.firstOption : {};
}) : (function SafetyHubAccountStandingSubwayMarker(arg0) {
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = closure_6();
  dependencyMap = tmp;
  const merged = Object.assign(tmp.container);
  const merged1 = Object.assign(0 === index ? tmp.firstOption : {});
  const merged2 = Object.assign(index === numOptions - 1 ? tmp.lastOption : {});
  let obj2 = { style: {}, onLayout, children: null };
  if (!isSelected) {
    let obj3 = {};
    const merged3 = Object.assign(tmp.marker);
    obj3.width = size;
    obj3.height = size;
    let num = 0;
    if (tmp3) {
      num = -isSelected(587).space.PX_4;
    }
    obj3.marginLeft = num;
    let num2 = 0;
    if (index === numOptions - 1) {
      num2 = -isSelected(587).space.PX_4;
    }
    const obj4 = { style: null, children: null };
    obj3.marginRight = num2;
    obj4.style = obj3;
    const obj5 = { style: tmp.empty };
    obj4.children = closure_4(View, obj5);
    selectedIcon = closure_4(View, obj4);
  }
  const items = [selectedIcon, ];
  const intl = util.intl;
  items[1] = intl.format(status, {
    hook(children, arg1) {
      if (isSelected) {
        const obj2 = { style: null, variant: "text-xxs/bold", children: null };
        const obj3 = { color: color.color };
        obj2.style = obj3;
        obj2.children = children;
        let obj = obj2;
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: label.label, children };
      }
      return React4(Text_Text.Text, obj, arg1);
    }
  });
  obj2.children = items;
  return closure_5(View, obj2);
});
export const SUBWAY_MARKER_WIDTH = 56;
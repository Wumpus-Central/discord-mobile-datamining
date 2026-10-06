// === Module 14573: SafetyHubAccountStandingSubwayMarker ===

// Module 14573 (SafetyHubAccountStandingSubwayMarker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, obj1, tmp2, tmp3;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: 56, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", rowGap: 8, flex: 1 }, marker: obj2, empty: size, label: { textAlign: "center" }, firstOption: { alignItems: "flex-start", textAlign: "left" }, lastOption: { alignItems: "flex-end", textAlign: "right" } };
obj2 = { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, width: "100%", height: "100%" };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let index;
  let isSelected;
  let items;
  let label;
  let numOptions;
  let onLayout;
  let selectedIcon;
  let status;
  let style;
  let obj = style(576);
  const cResult = obj.c(33);
  ({ selectedIcon, style } = arg0);
  ({ status, isSelected } = arg0);
  ({ index, onLayout, size, numOptions } = arg0);
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  if (cResult[0] === index) {
    let tmp5;
    if (cResult[1] === tmp4.firstOption) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === index) {
      if (cResult[4] === numOptions) {
        let tmp7;
        if (cResult[5] === tmp4.lastOption) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp5) {
            let tmp9;
            if (cResult[9] === tmp7) {
              tmp9 = cResult[10];
            }
            if (cResult[11] === index) {
              if (cResult[12] === isSelected) {
                if (cResult[13] === numOptions) {
                  if (cResult[14] === selectedIcon) {
                    if (cResult[15] === size) {
                      if (cResult[16] === tmp4.empty) {
                        let tmp17;
                        let tmp19;
                        if (cResult[17] === tmp4.marker) {
                          tmp17 = cResult[18];
                        }
                        if (cResult[19] === isSelected) {
                          if (cResult[20] === status) {
                            if (cResult[21] === style) {
                              if (cResult[22] === tmp4.label) {
                                tmp19 = cResult[23];
                              }
                              if (cResult[28] === tmp9) {
                                if (cResult[29] === onLayout) {
                                  if (cResult[30] === tmp17) {
                                    let tmp22;
                                    if (cResult[31] === tmp19) {
                                      tmp22 = cResult[32];
                                    }
                                    return tmp22;
                                  }
                                }
                              }
                              class S {
                                constructor(arg0, arg1) {
                                  tmp = jsx;
                                  Text = closure_0(closure_2[7]).Text;
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
                                  return tmp(Text, obj, arg1);
                                }
                              }
                              let obj2 = { style: tmp9, onLayout, children: items };
                              items = [tmp17, tmp19];
                              const tmp24 = closure_5(View, obj2);
                              cResult[28] = tmp9;
                              cResult[29] = onLayout;
                              cResult[30] = tmp17;
                              cResult[31] = tmp19;
                              cResult[32] = tmp24;
                              tmp22 = tmp24;
                            }
                          }
                        }
                        if (cResult[24] === isSelected) {
                          if (cResult[25] === style) {
                            const intl = style(1126).intl;
                            let obj3 = { hook: null };
                            class S {
                              constructor(arg0, arg1) {
                                tmp = jsx;
                                Text = closure_0(closure_2[7]).Text;
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
                                return tmp(Text, obj, arg1);
                              }
                            }
                            const formatResult = intl.format(status, obj3);
                            cResult[19] = isSelected;
                            cResult[20] = status;
                            cResult[21] = style;
                            cResult[22] = tmp4.label;
                            cResult[23] = formatResult;
                            tmp19 = formatResult;
                          }
                        }
                        class S {
                          constructor(arg0, arg1) {
                            tmp = jsx;
                            Text = closure_0(closure_2[7]).Text;
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
                            return tmp(Text, obj, arg1);
                          }
                        }
                        cResult[24] = isSelected;
                        cResult[25] = style;
                        cResult[26] = tmp4.label;
                        cResult[27] = S;
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
            cResult[16] = tmp4.empty;
            cResult[17] = tmp4.marker;
            cResult[18] = selectedIcon;
            tmp17 = selectedIcon;
          }
        }
        const obj4 = {};
        const merged = Object.assign(tmp4.container);
        const merged1 = Object.assign(tmp5);
        const merged2 = Object.assign(tmp7);
        cResult[7] = tmp4.container;
        cResult[8] = tmp5;
        cResult[9] = tmp7;
        cResult[10] = obj4;
        tmp9 = obj4;
      }
    }
    cResult[3] = index;
    cResult[4] = numOptions;
    cResult[5] = tmp4.lastOption;
    cResult[6] = tmp8;
    tmp7 = tmp8;
  }
  const tmp6 = 0 === index ? tmp4.firstOption : {};
  cResult[0] = index;
  cResult[1] = tmp4.firstOption;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let color;
  let index;
  let isSelected;
  let items;
  let label;
  let num;
  let num2;
  let numOptions;
  let obj5;
  let onLayout;
  let require;
  let selectedIcon;
  let status;
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = {};
  const merged = Object.assign(tmp.container);
  const tmp4 = 0 === index ? tmp.firstOption : {};
  const merged1 = Object.assign(tmp4);
  const tmp6 = index === numOptions - 1 ? tmp.lastOption : {};
  const merged2 = Object.assign(tmp6);
  let obj2 = { style: obj, onLayout, children: items };
  if (!isSelected) {
    let obj3 = { width: size, height: size, marginLeft: num, marginRight: num2 };
    const merged3 = Object.assign(tmp.marker);
    num = 0;
    if (0 === index) {
      num = -isSelected(587).space.PX_4;
    }
    num2 = 0;
    if (index === numOptions - 1) {
      num2 = -isSelected(587).space.PX_4;
    }
    const obj4 = { style: obj3, children: closure_4(View, obj5) };
    obj5 = { style: tmp.empty };
    selectedIcon = closure_4(View, obj4);
  }
  items = [selectedIcon, ];
  const intl = intl2.intl;
  const obj6 = {
    hook(children, arg1) {
      let obj;
      let obj3;
      const Text = Text_Text.Text;
      if (isSelected) {
        const obj2 = { style: obj3, variant: "text-xxs/bold", children };
        obj = obj2;
        obj3 = { color: require.color };
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: label.label, children };
      }
      return React3(Text, obj, arg1);
    }
  };
  items[1] = intl.format(status, obj6);
  return closure_5(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default tmp5;
export const SUBWAY_MARKER_WIDTH = 56;
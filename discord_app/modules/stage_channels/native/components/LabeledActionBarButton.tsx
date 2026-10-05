// === Module 9695: LabeledActionBarButton ===

// Module 9695 (LabeledActionBarButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 1188 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import Pressables from "Pressables" /* 5909 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let closure_2 = ["backgroundColor", "imageStyle", "children", "source", "disabled", "label", "iconPosition"];
({ Image: closure_4, View: hasOwnProperty } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { buttonContainer: obj2, container: { marginHorizontal: 12 }, containerWithLabel: { minWidth: "50%", maxWidth: "70%", flexShrink: 1 }, pressable: { marginHorizontal: 12, borderRadius: 28 }, buttonContent: { display: "flex", flexDirection: "row", alignItems: "center" }, buttonText: obj3, rightTextMargin: { marginStart: 0, marginEnd: 8 } };
obj2 = { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: LegacyTokens.ACTION_BAR_BUTTON_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginStart: 8, fontSize: 14, color: nativeDefault.colors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
let closure_8 = createStyles(obj);
let obj4 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let LEFT;
  let backgroundColor;
  let children;
  let disabled;
  let iconPosition;
  let imageStyle;
  let items;
  let items1;
  let label;
  let source;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(55);
  if (cResult[0] !== arg0) {
    ({ backgroundColor, imageStyle, children, source, disabled, label, iconPosition } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = backgroundColor;
    cResult[2] = children;
    cResult[3] = disabled;
    cResult[4] = imageStyle;
    cResult[5] = label;
    cResult[6] = tmp13;
    cResult[7] = source;
    cResult[8] = iconPosition;
    LEFT = iconPosition;
    tmp10 = source;
    tmp9 = tmp13;
    tmp8 = label;
    tmp7 = imageStyle;
    tmp6 = disabled;
    tmp5 = children;
    tmp4 = backgroundColor;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    LEFT = cResult[8];
  }
  if (undefined === LEFT) {
    LEFT = obj4.LEFT;
  }
  const tmp15 = closure_8();
  let containerWithLabel = null;
  if (null != tmp8) {
    containerWithLabel = tmp15.containerWithLabel;
  }
  if (cResult[9] === tmp15.container) {
    let tmp17;
    let tmp18;
    let tmp19;
    if (cResult[10] === containerWithLabel) {
      tmp17 = cResult[11];
    }
    let num10 = 1;
    if (tmp6) {
      num10 = 0.25;
    }
    if (cResult[12] !== num10) {
      const obj2 = { opacity: num10 };
      cResult[12] = num10;
      cResult[13] = obj2;
      tmp18 = obj2;
    } else {
      tmp18 = cResult[13];
    }
    if (cResult[14] !== tmp4) {
      let tmp20 = null;
      if (null != tmp4) {
        tmp20 = { backgroundColor: tmp4 };
        const obj3 = { backgroundColor: tmp4 };
      }
      cResult[14] = tmp4;
      cResult[15] = tmp20;
      tmp19 = tmp20;
    } else {
      tmp19 = cResult[15];
    }
    if (cResult[16] === tmp15.buttonContainer) {
      if (cResult[17] === tmp18) {
        let tmp21;
        let tmp22;
        if (cResult[18] === tmp19) {
          tmp21 = cResult[19];
        }
        if (cResult[20] !== tmp8) {
          obj4 = null;
          if (null != tmp8) {
            obj4 = { paddingHorizontal: 16 };
          }
          cResult[20] = tmp8;
          cResult[21] = obj4;
          tmp22 = obj4;
        } else {
          tmp22 = cResult[21];
        }
        if (cResult[22] === tmp15.buttonContent) {
          let tmp23;
          if (cResult[23] === tmp22) {
            tmp23 = cResult[24];
          }
          if (cResult[25] === LEFT) {
            if (cResult[26] === tmp7) {
              let tmp24;
              if (cResult[27] === tmp10) {
                tmp24 = cResult[28];
              }
              if (cResult[29] === LEFT) {
                if (cResult[30] === tmp8) {
                  if (cResult[31] === tmp15.buttonText) {
                    let tmp29;
                    if (cResult[32] === tmp15.rightTextMargin) {
                      tmp29 = cResult[33];
                    }
                    if (cResult[34] === LEFT) {
                      if (cResult[35] === tmp7) {
                        let tmp33;
                        if (cResult[36] === tmp10) {
                          tmp33 = cResult[37];
                        }
                        if (cResult[38] === tmp24) {
                          if (cResult[39] === tmp29) {
                            if (cResult[40] === tmp33) {
                              let tmp38;
                              if (cResult[41] === tmp23) {
                                tmp38 = cResult[42];
                              }
                              if (cResult[43] === tmp5) {
                                if (cResult[44] === tmp38) {
                                  let tmp42;
                                  if (cResult[45] === tmp21) {
                                    tmp42 = cResult[46];
                                  }
                                  if (cResult[47] === tmp6) {
                                    if (cResult[48] === tmp9) {
                                      if (cResult[49] === tmp15.pressable) {
                                        let tmp46;
                                        if (cResult[50] === tmp42) {
                                          tmp46 = cResult[51];
                                        }
                                        if (cResult[52] === tmp46) {
                                          let tmp52;
                                          if (cResult[53] === tmp17) {
                                            tmp52 = cResult[54];
                                          }
                                          return tmp52;
                                        }
                                        const obj5 = { style: tmp17, children: tmp46 };
                                        const tmp55 = metroRequire(hasOwnProperty, obj5);
                                        cResult[52] = tmp46;
                                        cResult[53] = tmp17;
                                        cResult[54] = tmp55;
                                        tmp52 = tmp55;
                                      }
                                    }
                                  }
                                  const obj6 = { accessibilityRole: "button", disabled: tmp6, style: tmp15.pressable, children: tmp42 };
                                  const PressableOpacity = Pressables.PressableOpacity;
                                  const merged = Object.assign(tmp9);
                                  const tmp51 = metroRequire(PressableOpacity, obj6);
                                  cResult[47] = tmp6;
                                  cResult[48] = tmp9;
                                  cResult[49] = tmp15.pressable;
                                  cResult[50] = tmp42;
                                  cResult[51] = tmp51;
                                  tmp46 = tmp51;
                                }
                              }
                              const obj7 = { style: tmp21, children: items };
                              items = [tmp38, tmp5];
                              const tmp45 = metroImportDefault(hasOwnProperty, obj7);
                              cResult[43] = tmp5;
                              cResult[44] = tmp38;
                              cResult[45] = tmp21;
                              cResult[46] = tmp45;
                              tmp42 = tmp45;
                            }
                          }
                        }
                        const obj8 = { style: tmp23, children: items1 };
                        items1 = [tmp24, tmp29, tmp33];
                        const tmp41 = metroImportDefault(hasOwnProperty, obj8);
                        cResult[38] = tmp24;
                        cResult[39] = tmp29;
                        cResult[40] = tmp33;
                        cResult[41] = tmp23;
                        cResult[42] = tmp41;
                        tmp38 = tmp41;
                      }
                    }
                    let tmp35 = LEFT === obj4.RIGHT;
                    if (tmp35) {
                      const obj9 = { source: tmp10, style: tmp7 };
                      tmp35 = metroRequire(React3, obj9);
                    }
                    cResult[34] = LEFT;
                    cResult[35] = tmp7;
                    cResult[36] = tmp10;
                    cResult[37] = tmp35;
                    tmp33 = tmp35;
                  }
                }
              }
              let tmp31Result = null;
              if (null != tmp8) {
                const items2 = [tmp15.buttonText, ];
                let rightTextMargin = LEFT === obj4.RIGHT;
                const LegacyText = native.LegacyText;
                if (rightTextMargin) {
                  rightTextMargin = tmp15.rightTextMargin;
                }
                const obj10 = { numberOfLines: 2, style: items2, children: tmp8 };
                items2[1] = rightTextMargin;
                tmp31Result = metroRequire(LegacyText, obj10);
              }
              cResult[29] = LEFT;
              cResult[30] = tmp8;
              cResult[31] = tmp15.buttonText;
              cResult[32] = tmp15.rightTextMargin;
              cResult[33] = tmp31Result;
              tmp29 = tmp31Result;
            }
          }
          let tmp26 = LEFT === obj4.LEFT;
          if (tmp26) {
            const obj11 = { source: tmp10, style: tmp7 };
            tmp26 = metroRequire(React3, obj11);
          }
          cResult[25] = LEFT;
          cResult[26] = tmp7;
          cResult[27] = tmp10;
          cResult[28] = tmp26;
          tmp24 = tmp26;
        }
        const items3 = [tmp15.buttonContent, tmp22];
        cResult[22] = tmp15.buttonContent;
        cResult[23] = tmp22;
        cResult[24] = items3;
        tmp23 = items3;
      }
    }
    const items4 = [tmp15.buttonContainer, tmp18, tmp19];
    cResult[16] = tmp15.buttonContainer;
    cResult[17] = tmp18;
    cResult[18] = tmp19;
    cResult[19] = items4;
    tmp21 = items4;
  }
  const items5 = [tmp15.container, containerWithLabel];
  cResult[9] = tmp15.container;
  cResult[10] = containerWithLabel;
  cResult[11] = items5;
  tmp17 = items5;
}) : ((children) => {
  let PressableOpacity;
  let backgroundColor;
  let disabled;
  let iconPosition;
  let imageStyle;
  let items3;
  let items5;
  let label;
  let obj2;
  let source;
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  children = children.children;
  if (iconPosition === undefined) {
    iconPosition = obj4.LEFT;
  }
  const merged = Object.assign(children, Object.assign({ backgroundColor: 0, imageStyle: 0, children: 0, source: 0, disabled: 0, label: 0, iconPosition: 0 }));
  const tmp3 = closure_8();
  const items = [tmp3.container, ];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp3.containerWithLabel;
  }
  items[1] = containerWithLabel;
  const obj = { style: items, children: metroRequire(PressableOpacity, obj2) };
  obj2 = { accessibilityRole: "button", disabled, style: tmp3.pressable, children: metroImportDefault(hasOwnProperty, obj4) };
  PressableOpacity = Pressables.PressableOpacity;
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.buttonContainer, , ];
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  items1[1] = { opacity: num };
  let tmp11 = null;
  if (null != backgroundColor) {
    tmp11 = { backgroundColor };
    const obj3 = { backgroundColor };
  }
  obj4 = { style: items1, children: items5 };
  items1[2] = tmp11;
  const items2 = [tmp3.buttonContent, ];
  let obj5 = null;
  if (null != label) {
    obj5 = { paddingHorizontal: 16 };
  }
  const obj6 = { style: items2, children: items3 };
  items2[1] = obj5;
  let tmp4Result = iconPosition === obj4.LEFT;
  if (tmp4Result) {
    const obj7 = { source, style: imageStyle };
    tmp4Result = metroRequire(React3, obj7);
  }
  items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != label) {
    const items4 = [tmp3.buttonText, ];
    let rightTextMargin = iconPosition === tmp12.RIGHT;
    const LegacyText = native.LegacyText;
    if (rightTextMargin) {
      rightTextMargin = tmp3.rightTextMargin;
    }
    const obj8 = { numberOfLines: 2, style: items4, children: label };
    items4[1] = rightTextMargin;
    tmp4Result3 = metroRequire(LegacyText, obj8);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = iconPosition === tmp12.RIGHT;
  if (tmp4Result4) {
    const obj9 = { source, style: imageStyle };
    tmp4Result4 = metroRequire(React3, obj9);
  }
  items3[2] = tmp4Result4;
  items5 = [metroImportDefault(hasOwnProperty, obj6), children];
  return metroRequire(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj4;
export const LabeledActionButton = tmp6;
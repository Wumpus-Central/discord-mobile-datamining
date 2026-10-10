// === Module 11128: LabeledActionBarButton ===

// Module 11128 (LabeledActionBarButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import FastImageDefault from "FastImage" /* 6156 */;
import Pressables from "Pressables" /* 6184 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["backgroundColor", "imageStyle", "children", "source", "disabled", "label", "iconPosition"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { buttonContainer: { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: fn(5969).ACTION_BAR_BUTTON_BACKGROUND }, container: { marginHorizontal: 12 }, containerWithLabel: { minWidth: "50%", maxWidth: "70%", flexShrink: 1 }, pressable: { marginHorizontal: 12, borderRadius: 28 }, buttonContent: { display: "flex", flexDirection: "row", alignItems: "center" }, buttonText: null, rightTextMargin: null };
let obj3 = { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: fn(5969).ACTION_BAR_BUTTON_BACKGROUND };
obj2.buttonText = { marginStart: 8, fontSize: 14, color: nativeDefault.colors.WHITE, fontFamily: fn(1096).Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
obj2.rightTextMargin = { marginStart: 0, marginEnd: 8 };
let closure_8 = createStyles.createStyles(obj2);
let obj5 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
const ReactCompilerGating = fn(558);
let obj4 = { marginStart: 8, fontSize: 14, color: nativeDefault.colors.WHITE, fontFamily: fn(1096).Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj5;
export const LabeledActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (function LabeledActionButton(arg0) {
  const cResult = c.c(55);
  if (cResult[0] !== arg0) {
    ({ backgroundColor, imageStyle, children, source, disabled, label, iconPosition } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = backgroundColor;
    cResult[2] = children;
    cResult[3] = disabled;
    cResult[4] = imageStyle;
    cResult[5] = label;
    cResult[6] = tmp13;
    cResult[7] = source;
    cResult[8] = iconPosition;
    let LEFT = iconPosition;
    let tmp10 = source;
    let tmp9 = tmp13;
    let tmp8 = label;
    let tmp7 = imageStyle;
    let tmp6 = disabled;
    let tmp5 = children;
    let tmp4 = backgroundColor;
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
    LEFT = obj5.LEFT;
  }
  const tmp15 = closure_8();
  let containerWithLabel = null;
  if (null != tmp8) {
    containerWithLabel = tmp15.containerWithLabel;
  }
  if (cResult[9] === tmp15.container) {
    if (cResult[10] === containerWithLabel) {
      let tmp17 = cResult[11];
    }
    let num10 = 1;
    if (tmp6) {
      num10 = 0.25;
    }
    if (cResult[12] !== num10) {
      const obj2 = { opacity: num10 };
      cResult[12] = num10;
      cResult[13] = obj2;
      let tmp18 = obj2;
    } else {
      tmp18 = cResult[13];
    }
    if (cResult[14] !== tmp4) {
      let tmp20 = null;
      if (null != tmp4) {
        const obj3 = { backgroundColor: tmp4 };
        tmp20 = obj3;
      }
      cResult[14] = tmp4;
      cResult[15] = tmp20;
      let tmp19 = tmp20;
    } else {
      tmp19 = cResult[15];
    }
    if (cResult[16] === tmp15.buttonContainer) {
      if (cResult[17] === tmp18) {
        if (cResult[18] === tmp19) {
          let tmp21 = cResult[19];
        }
        if (cResult[20] !== tmp8) {
          let obj4 = null;
          if (null != tmp8) {
            obj4 = { paddingHorizontal: 16 };
          }
          cResult[20] = tmp8;
          cResult[21] = obj4;
          let tmp22 = obj4;
        } else {
          tmp22 = cResult[21];
        }
        if (cResult[22] === tmp15.buttonContent) {
          if (cResult[23] === tmp22) {
            let tmp23 = cResult[24];
          }
          if (cResult[25] === LEFT) {
            if (cResult[26] === tmp7) {
              if (cResult[27] === tmp10) {
                let tmp24 = cResult[28];
              }
              if (cResult[29] === LEFT) {
                if (cResult[30] === tmp8) {
                  if (cResult[31] === tmp15.buttonText) {
                    if (cResult[32] === tmp15.rightTextMargin) {
                      let tmp29 = cResult[33];
                    }
                    if (cResult[34] === LEFT) {
                      if (cResult[35] === tmp7) {
                        if (cResult[36] === tmp10) {
                          let tmp33 = cResult[37];
                        }
                        if (cResult[38] === tmp24) {
                          if (cResult[39] === tmp29) {
                            if (cResult[40] === tmp33) {
                              if (cResult[41] === tmp23) {
                                let tmp38 = cResult[42];
                              }
                              if (cResult[43] === tmp5) {
                                if (cResult[44] === tmp38) {
                                  if (cResult[45] === tmp21) {
                                    let tmp42 = cResult[46];
                                  }
                                  if (cResult[47] === tmp6) {
                                    if (cResult[48] === tmp9) {
                                      if (cResult[49] === tmp15.pressable) {
                                        if (cResult[50] === tmp42) {
                                          let tmp46 = cResult[51];
                                        }
                                        if (cResult[52] === tmp46) {
                                          if (cResult[53] === tmp17) {
                                            let tmp52 = cResult[54];
                                          }
                                          return tmp52;
                                        }
                                        obj5 = { style: tmp17, children: tmp46 };
                                        const tmp55 = timestampProducer(View, obj5);
                                        cResult[52] = tmp46;
                                        cResult[53] = tmp17;
                                        cResult[54] = tmp55;
                                        tmp52 = tmp55;
                                      }
                                    }
                                  }
                                  const obj6 = { accessibilityRole: "button", disabled: tmp6, style: tmp15.pressable };
                                  const merged = Object.assign(tmp9);
                                  obj6.children = tmp42;
                                  const tmp51 = timestampProducer(Pressables.PressableOpacity, obj6);
                                  cResult[47] = tmp6;
                                  cResult[48] = tmp9;
                                  cResult[49] = tmp15.pressable;
                                  cResult[50] = tmp42;
                                  cResult[51] = tmp51;
                                  tmp46 = tmp51;
                                }
                              }
                              const obj7 = { style: tmp21, children: null };
                              const items = [tmp38, tmp5];
                              obj7.children = items;
                              const tmp45 = React5(View, obj7);
                              cResult[43] = tmp5;
                              cResult[44] = tmp38;
                              cResult[45] = tmp21;
                              cResult[46] = tmp45;
                              tmp42 = tmp45;
                            }
                          }
                        }
                        const obj8 = { style: tmp23, children: null };
                        const items1 = [tmp24, tmp29, tmp33];
                        obj8.children = items1;
                        const tmp41 = React5(View, obj8);
                        cResult[38] = tmp24;
                        cResult[39] = tmp29;
                        cResult[40] = tmp33;
                        cResult[41] = tmp23;
                        cResult[42] = tmp41;
                        tmp38 = tmp41;
                      }
                    }
                    let tmp35 = LEFT === obj5.RIGHT;
                    if (tmp35) {
                      const obj9 = { source: tmp10, style: tmp7 };
                      tmp35 = timestampProducer(FastImageDefault, obj9);
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
                let rightTextMargin = LEFT === obj5.RIGHT;
                if (rightTextMargin) {
                  rightTextMargin = tmp15.rightTextMargin;
                }
                const obj10 = { numberOfLines: 2, style: null, children: null };
                items2[1] = rightTextMargin;
                obj10.style = items2;
                obj10.children = tmp8;
                tmp31Result = timestampProducer(native.LegacyText, obj10);
              }
              cResult[29] = LEFT;
              cResult[30] = tmp8;
              cResult[31] = tmp15.buttonText;
              cResult[32] = tmp15.rightTextMargin;
              cResult[33] = tmp31Result;
              tmp29 = tmp31Result;
            }
          }
          let tmp26 = LEFT === obj5.LEFT;
          if (tmp26) {
            const obj11 = { source: tmp10, style: tmp7 };
            tmp26 = timestampProducer(FastImageDefault, obj11);
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
}) : (function LabeledActionButton(children) {
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  if (iconPosition === undefined) {
    iconPosition = obj5.LEFT;
  }
  const merged = Object.assign(children, Object.assign({ backgroundColor: 0, imageStyle: 0, children: 0, source: 0, disabled: 0, label: 0, iconPosition: 0 }));
  const tmp3 = closure_8();
  const items = [tmp3.container, ];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp3.containerWithLabel;
  }
  const obj = { style: items, children: null };
  items[1] = containerWithLabel;
  const obj2 = { accessibilityRole: "button", disabled, style: tmp3.pressable };
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.buttonContainer, , ];
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  items1[1] = { opacity: num };
  let tmp11 = null;
  if (null != backgroundColor) {
    const obj3 = { backgroundColor };
    tmp11 = obj3;
  }
  const obj4 = { style: items1, children: null };
  items1[2] = tmp11;
  const items2 = [tmp3.buttonContent, ];
  obj5 = null;
  if (null != label) {
    obj5 = { paddingHorizontal: 16 };
  }
  const obj6 = { style: items2, children: null };
  items2[1] = obj5;
  let tmp4Result = iconPosition === obj5.LEFT;
  if (tmp4Result) {
    const obj7 = { source, style: imageStyle };
    tmp4Result = timestampProducer(FastImageDefault, obj7);
  }
  const items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != label) {
    const items4 = [tmp3.buttonText, ];
    let rightTextMargin = iconPosition === tmp12.RIGHT;
    if (rightTextMargin) {
      rightTextMargin = tmp3.rightTextMargin;
    }
    const obj8 = { numberOfLines: 2, style: null, children: null };
    items4[1] = rightTextMargin;
    obj8.style = items4;
    obj8.children = label;
    tmp4Result3 = timestampProducer(native.LegacyText, obj8);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = iconPosition === tmp12.RIGHT;
  if (tmp4Result4) {
    const obj9 = { source, style: imageStyle };
    tmp4Result4 = timestampProducer(FastImageDefault, obj9);
  }
  items3[2] = tmp4Result4;
  obj6.children = items3;
  const items5 = [React5(View, obj6), children.children];
  obj4.children = items5;
  obj2.children = React5(View, obj4);
  obj.children = timestampProducer(Pressables.PressableOpacity, obj2);
  return timestampProducer(View, obj);
});
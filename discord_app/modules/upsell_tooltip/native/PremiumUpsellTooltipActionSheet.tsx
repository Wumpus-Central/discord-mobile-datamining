// === Module 9358: PremiumUpsellTooltipActionSheet ===

// Module 9358 (PremiumUpsellTooltipActionSheet)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, img: null, header: null, title: null, description: null, nitroWheel: null, buttonContainer: null };
let size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
obj2.img = size;
obj2.header = { flexDirection: "row", justifyContent: "center" };
obj2.title = { textAlign: "center", marginBottom: 8 };
let obj3 = { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
const size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
obj2.nitroWheel = size1;
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj2.buttonContainer = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellTooltipActionSheet(onPrimaryButtonPress) {
  const cResult = dismissibleContent(onPrimaryButtonPress[7]).c(52);
  ({ title, backdropProps, description, descriptionStyle, imageSource, imageStyle, dismissibleContent } = onPrimaryButtonPress);
  ({ primaryButtonText, primaryButtonIcon, secondaryButtonText, onDismiss } = onPrimaryButtonPress);
  onPrimaryButtonPress = onPrimaryButtonPress.onPrimaryButtonPress;
  const onSecondaryButtonPress = onPrimaryButtonPress.onSecondaryButtonPress;
  const tmp4 = closure_8();
  if (cResult[0] === dismissibleContent) {
    if (cResult[1] === onDismiss) {
      let tmp5 = cResult[2];
    }
    closure_4 = tmp5;
    if (cResult[3] === tmp5) {
      if (cResult[4] === onPrimaryButtonPress) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === onSecondaryButtonPress) {
          let tmp7 = cResult[8];
        }
        if (cResult[9] === null != imageSource) {
          if (cResult[10] === imageSource) {
            if (cResult[11] === imageStyle) {
              if (cResult[12] === tmp4.img) {
                let tmp10 = cResult[13];
              }
              if (cResult[14] !== tmp4.nitroWheel) {
                let obj2 = { style: tmp4.nitroWheel };
                const tmp16 = closure_6(dismissibleContent(tmp2[10]).NitroWheel, obj2);
                cResult[14] = tmp4.nitroWheel;
                cResult[15] = tmp16;
                let tmp14 = tmp16;
              } else {
                tmp14 = cResult[15];
              }
              if (cResult[16] === tmp4.title) {
                if (cResult[17] === title) {
                  let tmp17 = cResult[18];
                }
                if (cResult[19] === tmp4.header) {
                  if (cResult[20] === tmp14) {
                    if (cResult[21] === tmp17) {
                      let tmp20 = cResult[22];
                    }
                    if (cResult[23] === descriptionStyle) {
                      if (cResult[24] === tmp4.description) {
                        let tmp24 = cResult[25];
                      }
                      if (cResult[26] === description) {
                        if (cResult[27] === tmp24) {
                          let tmp25 = cResult[28];
                        }
                        if (cResult[29] !== primaryButtonIcon) {
                          let primaryButtonIconResult;
                          if (primaryButtonIcon != null) {
                            primaryButtonIconResult = primaryButtonIcon();
                          }
                          cResult[29] = primaryButtonIcon;
                          cResult[30] = primaryButtonIconResult;
                          let tmp28 = primaryButtonIconResult;
                        } else {
                          tmp28 = cResult[30];
                        }
                        if (cResult[31] === tmp6) {
                          if (cResult[32] === primaryButtonText) {
                            if (cResult[33] === tmp28) {
                              let tmp30 = cResult[34];
                            }
                            if (cResult[35] === tmp7) {
                              if (cResult[36] === secondaryButtonText) {
                                let tmp33 = cResult[37];
                              }
                              if (cResult[38] === tmp4.buttonContainer) {
                                if (cResult[39] === tmp30) {
                                  if (cResult[40] === tmp33) {
                                    let tmp36 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.container) {
                                    if (cResult[43] === tmp36) {
                                      if (cResult[44] === tmp10) {
                                        if (cResult[45] === tmp20) {
                                          if (cResult[46] === tmp25) {
                                            let tmp40 = cResult[47];
                                          }
                                          if (cResult[48] === backdropProps) {
                                            if (cResult[49] === tmp5) {
                                              if (cResult[50] === tmp40) {
                                                let tmp44 = cResult[51];
                                              }
                                              return tmp44;
                                            }
                                          }
                                          const obj3 = { startExpanded: true };
                                          const merged = Object.assign(backdropProps);
                                          obj3.onDismiss = tmp5;
                                          obj3.children = tmp40;
                                          const tmp49 = closure_6(dismissibleContent(tmp2[13]).BottomSheet, obj3);
                                          cResult[48] = backdropProps;
                                          cResult[49] = tmp5;
                                          cResult[50] = tmp40;
                                          cResult[51] = tmp49;
                                          tmp44 = tmp49;
                                        }
                                      }
                                    }
                                  }
                                  const obj4 = { style: tmp4.container, children: null };
                                  const items = [tmp10, tmp20, tmp25, tmp36];
                                  obj4.children = items;
                                  const tmp43 = closure_7(closure_4, obj4);
                                  cResult[42] = tmp4.container;
                                  cResult[43] = tmp36;
                                  cResult[44] = tmp10;
                                  cResult[45] = tmp20;
                                  cResult[46] = tmp25;
                                  cResult[47] = tmp43;
                                  tmp40 = tmp43;
                                }
                              }
                              const obj5 = { style: tmp4.buttonContainer, children: null };
                              const items1 = [tmp30, tmp33];
                              obj5.children = items1;
                              const tmp39 = closure_7(closure_4, obj5);
                              cResult[38] = tmp4.buttonContainer;
                              cResult[39] = tmp30;
                              cResult[40] = tmp33;
                              cResult[41] = tmp39;
                              tmp36 = tmp39;
                            }
                            let tmp34 = null;
                            if (null != secondaryButtonText) {
                              const obj6 = { variant: "secondary", text: secondaryButtonText, onPress: tmp7, size: "lg" };
                              tmp34 = closure_6(dismissibleContent(tmp2[12]).Button, obj6);
                            }
                            cResult[35] = tmp7;
                            cResult[36] = secondaryButtonText;
                            cResult[37] = tmp34;
                            tmp33 = tmp34;
                          }
                        }
                        const obj7 = { variant: "active", text: primaryButtonText, onPress: tmp6, icon: tmp28, size: "lg" };
                        const tmp32 = closure_6(dismissibleContent(tmp2[12]).Button, obj7);
                        cResult[31] = tmp6;
                        cResult[32] = primaryButtonText;
                        cResult[33] = tmp28;
                        cResult[34] = tmp32;
                        tmp30 = tmp32;
                      }
                      const obj8 = { style: tmp24, variant: "text-md/medium", color: "text-default", children: description };
                      const tmp27 = closure_6(dismissibleContent(tmp2[11]).Text, obj8);
                      cResult[26] = description;
                      cResult[27] = tmp24;
                      cResult[28] = tmp27;
                      tmp25 = tmp27;
                    }
                    const items2 = [tmp4.description, descriptionStyle];
                    cResult[23] = descriptionStyle;
                    cResult[24] = tmp4.description;
                    cResult[25] = items2;
                    tmp24 = items2;
                  }
                }
                const obj9 = { style: tmp4.header, children: null };
                const items3 = [tmp14, tmp17];
                obj9.children = items3;
                const tmp23 = closure_7(closure_4, obj9);
                cResult[19] = tmp4.header;
                cResult[20] = tmp14;
                cResult[21] = tmp17;
                cResult[22] = tmp23;
                tmp20 = tmp23;
              }
              const obj10 = { variant: "heading-xl/bold", style: tmp4.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
              const tmp19 = closure_6(dismissibleContent(tmp2[11]).Text, obj10);
              cResult[16] = tmp4.title;
              cResult[17] = title;
              cResult[18] = tmp19;
              tmp17 = tmp19;
            }
          }
        }
        let tmp11 = null;
        if (null != imageSource) {
          const obj11 = { style: null, source: null };
          const items4 = [tmp4.img, imageStyle];
          obj11.style = items4;
          obj11.source = imageSource;
          tmp11 = closure_6(onSecondaryButtonPress, obj11);
        }
        cResult[9] = null != imageSource;
        cResult[10] = imageSource;
        cResult[11] = imageStyle;
        cResult[12] = tmp4.img;
        cResult[13] = tmp11;
        tmp10 = tmp11;
      }
      function handleSecondaryButtonPress() {
        if (onSecondaryButtonPress != null) {
          tmp();
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
        closure_4(ContentDismissActionType.DISMISS);
      }
      cResult[6] = tmp5;
      cResult[7] = onSecondaryButtonPress;
      cResult[8] = handleSecondaryButtonPress;
      tmp7 = handleSecondaryButtonPress;
    }
    function handlePrimaryButtonPress() {
      onPrimaryButtonPress();
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_4(ContentDismissActionType.PRIMARY);
    }
    cResult[3] = tmp5;
    cResult[4] = onPrimaryButtonPress;
    cResult[5] = handlePrimaryButtonPress;
    tmp6 = handlePrimaryButtonPress;
  }
  function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== ContentDismissActionType.DISMISS;
    }
    if (!tmp) {
      if (onDismiss != null) {
        tmp3();
      }
    }
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissibleContent, { forceTrack: true, dismissAction });
    const obj2 = { forceTrack: true, dismissAction };
  }
  cResult[0] = dismissibleContent;
  cResult[1] = onDismiss;
  cResult[2] = handleDismiss;
  tmp5 = handleDismiss;
  let obj = dismissibleContent(onPrimaryButtonPress[7]);
}) : (function PremiumUpsellTooltipActionSheet(arg0) {
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = closure_8();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj.onDismiss = function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== ContentDismissActionType.DISMISS;
    }
    if (!tmp) {
      if (importDefault != null) {
        tmp3();
      }
    }
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, { forceTrack: true, dismissAction });
    const obj2 = { forceTrack: true, dismissAction };
  };
  let obj2 = { style: tmp.container, children: null };
  let tmp2Result = null;
  if (null != imageSource) {
    const obj3 = { style: null, source: null };
    const items = [tmp.img, imageStyle];
    obj3.style = items;
    obj3.source = imageSource;
    tmp2Result = closure_6(closure_3, obj3);
  }
  const items1 = [tmp2Result, , , ];
  const obj4 = { style: tmp.header, children: null };
  const items2 = [closure_6(native.NitroWheel, { style: tmp.nitroWheel }), closure_6(Text_Text.Text, { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title })];
  obj4.children = items2;
  items1[1] = closure_7(closure_4, obj4);
  const obj7 = { style: null, variant: "text-md/medium", color: "text-default", children: description };
  const items3 = [tmp.description, descriptionStyle];
  obj7.style = items3;
  items1[2] = closure_6(Text_Text.Text, obj7);
  const obj8 = { style: tmp.buttonContainer, children: null };
  const obj9 = {
    variant: "active",
    text: primaryButtonText,
    onPress: function handlePrimaryButtonPress() {
      dependencyMap();
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const PRIMARY = ContentDismissActionType.PRIMARY;
      if (!tmp4) {
        if (closure_1_1 != null) {
          closure_1_1();
        }
      }
      tmp4 = null != PRIMARY && PRIMARY !== ContentDismissActionType.DISMISS;
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: null,
    size: "lg"
  };
  let primaryButtonIconResult;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj9.icon = primaryButtonIconResult;
  const items4 = [closure_6(components_Button_Button.Button, obj9), ];
  let tmp2Result2 = null;
  if (null != secondaryButtonText) {
    const obj10 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress: function handleSecondaryButtonPress() {
          if (closure_1_3 != null) {
            tmp();
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const DISMISS = ContentDismissActionType.DISMISS;
          if (!tmp5) {
            if (closure_1_1 != null) {
              closure_1_1();
            }
          }
          tmp5 = null != DISMISS && DISMISS !== ContentDismissActionType.DISMISS;
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, { forceTrack: true, dismissAction: DISMISS });
        },
      size: "lg"
    };
    tmp2Result2 = closure_6(components_Button_Button.Button, obj10);
  }
  items4[1] = tmp2Result2;
  obj8.children = items4;
  items1[3] = closure_7(closure_4, obj8);
  obj2.children = items1;
  obj.children = closure_7(closure_4, obj2);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
});
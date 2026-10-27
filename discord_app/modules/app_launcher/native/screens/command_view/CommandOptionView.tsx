// === Module 12046: CommandOptionView ===

// Module 12046 (CommandOptionView)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5053 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 12048 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [fn(1997).ApplicationCommandOptionType.STRING, fn(1997).ApplicationCommandOptionType.INTEGER, fn(1997).ApplicationCommandOptionType.ATTACHMENT, fn(1997).ApplicationCommandOptionType.BOOLEAN, fn(1997).ApplicationCommandOptionType.MENTIONABLE, fn(1997).ApplicationCommandOptionType.USER, fn(1997).ApplicationCommandOptionType.ROLE, fn(1997).ApplicationCommandOptionType.CHANNEL, fn(1997).ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
const createStyles = fn(4972);
let obj2 = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4, marginTop: 4 }, labelText: { marginBottom: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let items1 = [fn(1997).ApplicationCommandOptionType.STRING, fn(1997).ApplicationCommandOptionType.INTEGER, fn(1997).ApplicationCommandOptionType.NUMBER];
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4, marginTop: 4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CommandOptionView(onPressAttachmentOption) {
  const cResult = option(onPressOption[8]).c(72);
  ({ style, option } = onPressAttachmentOption);
  ({ autoFocusType, onDismiss, editedOptions, onOptionViewLayout } = onPressAttachmentOption);
  ({ onStartEditing, onEndEditing, onOptionValueChange, onPressOption } = onPressAttachmentOption);
  onPressAttachmentOption = onPressAttachmentOption.onPressAttachmentOption;
  ({ channel, optionValidationResults, setFocusedOption } = onPressAttachmentOption);
  ({ command, optionValues } = onPressAttachmentOption);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setFocusedOption];
    const fn = function h() {
      return setFocusedOption.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = option(onPressOption[8]);
  const stateFromStores = option(onPressOption[9]).useStateFromStores(tmp5, tmp6);
  const ReduceMotion = option(onPressOption[10]).ReduceMotion;
  const tmp9 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmpResult = option(onPressOption[9]);
  const optionEnteringAnimation = option(onPressOption[11]).useOptionEnteringAnimation();
  ({ EnteringAnimation, registerAnimationCompleteCallback } = optionEnteringAnimation);
  if (set.has(option.type)) {
    if (cResult[2] === registerAnimationCompleteCallback) {
      if (cResult[3] === tmp12) {
        let tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp9) {
        const FadeOut = option(onPressOption[10]).FadeOut;
        const reduceMotionResult = FadeOut.reduceMotion(tmp9);
        cResult[5] = tmp9;
        cResult[6] = reduceMotionResult;
        let tmp14 = reduceMotionResult;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== tmp9) {
        const FadeInUp = option(onPressOption[10]).FadeInUp;
        const obj2 = { transform: null };
        items1 = [{ translateY: -10 }];
        obj2.transform = items1;
        const reduceMotionResult1 = FadeInUp.withInitialValues(obj2).reduceMotion(tmp9);
        cResult[7] = tmp9;
        cResult[8] = reduceMotionResult1;
        let tmp16 = reduceMotionResult1;
        const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === editedOptions) {
        if (cResult[10] === option.name) {
          if (cResult[11] === optionValidationResults) {
            let tmp18 = cResult[12];
          }
          if (cResult[13] === option.choices) {
            if (cResult[14] === option.type) {
              let tmp22 = cResult[15];
            }
            if (cResult[16] === onOptionViewLayout) {
              if (cResult[17] === option) {
                let tmp25 = cResult[18];
              }
              if (cResult[19] === option.displayName) {
                if (cResult[20] === tmp22) {
                  if (cResult[21] === tmp4.labelText) {
                    let tmp26 = cResult[22];
                  }
                  if (cResult[23] === option) {
                    if (cResult[24] === setFocusedOption) {
                      let tmp29 = cResult[25];
                    }
                    if (cResult[26] === onPressOption) {
                      if (cResult[27] === option) {
                        let tmp30 = cResult[28];
                      }
                      if (cResult[29] === onPressAttachmentOption) {
                        if (cResult[30] === option) {
                          let tmp32 = cResult[31];
                        }
                        if (cResult[32] === autoFocusType) {
                          if (cResult[33] === channel) {
                            if (cResult[34] === command) {
                              if (cResult[35] === onDismiss) {
                                if (cResult[36] === onEndEditing) {
                                  if (cResult[37] === onOptionValueChange) {
                                    if (cResult[38] === onStartEditing) {
                                      if (cResult[39] === option) {
                                        if (cResult[40] === optionValues) {
                                          if (cResult[41] === tmp18) {
                                            if (cResult[42] === tmp29) {
                                              if (cResult[43] === tmp30) {
                                                if (cResult[44] === tmp32) {
                                                  let tmp34 = cResult[45];
                                                }
                                                if (cResult[46] === option.displayDescription) {
                                                  if (cResult[47] === tmp4.optionDescription) {
                                                    let tmp37 = cResult[48];
                                                  }
                                                  if (cResult[49] === tmp16) {
                                                    if (cResult[50] === tmp14) {
                                                      if (cResult[51] === option.name) {
                                                        if (cResult[52] === optionValidationResults) {
                                                          if (cResult[53] === tmp18) {
                                                            if (cResult[54] === tmp4.optionErrorContainer) {
                                                              let tmp39 = cResult[55];
                                                            }
                                                            if (cResult[56] === style) {
                                                              if (cResult[57] === tmp34) {
                                                                if (cResult[58] === tmp37) {
                                                                  if (cResult[59] === tmp39) {
                                                                    if (cResult[60] === tmp26) {
                                                                      let tmp45 = cResult[61];
                                                                    }
                                                                    if (cResult[62] === EnteringAnimation) {
                                                                      if (cResult[63] === tmp45) {
                                                                        if (cResult[64] === tmp25) {
                                                                          let tmp48 = cResult[65];
                                                                        }
                                                                        if (cResult[66] === tmp13) {
                                                                          if (cResult[67] === tmp48) {
                                                                            let tmp51 = cResult[68];
                                                                          }
                                                                          if (cResult[69] === tmp12) {
                                                                            if (cResult[70] === tmp51) {
                                                                              let tmp53 = cResult[71];
                                                                            }
                                                                            return tmp53;
                                                                          }
                                                                          class Z {
                                                                            constructor() {
                                                                              return setFocusedOption(option);
                                                                            }
                                                                          }
                                                                          const obj3 = { skipEntering: tmp12, children: tmp51 };
                                                                          const tmp54 = closure_5(option(onPressOption[10]).LayoutAnimationConfig, obj3);
                                                                          cResult[69] = tmp12;
                                                                          cResult[70] = tmp51;
                                                                          cResult[71] = tmp54;
                                                                          tmp53 = tmp54;
                                                                        }
                                                                        class Z {
                                                                          constructor() {
                                                                            return setFocusedOption(option);
                                                                          }
                                                                        }
                                                                        const obj4 = { handleQueuedCallback: tmp13, children: tmp48 };
                                                                        const tmp52 = closure_5(option(onPressOption[15]).AwaitAnimationContext, obj4);
                                                                        cResult[66] = tmp13;
                                                                        cResult[67] = tmp48;
                                                                        cResult[68] = tmp52;
                                                                        tmp51 = tmp52;
                                                                      }
                                                                    }
                                                                    class Z {
                                                                      constructor() {
                                                                        return setFocusedOption(option);
                                                                      }
                                                                    }
                                                                    const obj5 = { collapsable: false, entering: EnteringAnimation, exiting: option(onPressOption[11]).ExitingAnimation, layout: option(onPressOption[11]).LayoutAnimation, onLayout: tmp25, children: tmp45 };
                                                                    const tmp50 = closure_5(onOptionViewLayout(onPressOption[10]).View, obj5);
                                                                    cResult[62] = EnteringAnimation;
                                                                    cResult[63] = tmp45;
                                                                    cResult[64] = tmp25;
                                                                    cResult[65] = tmp50;
                                                                    tmp48 = tmp50;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            class Z {
                                                              constructor() {
                                                                return setFocusedOption(option);
                                                              }
                                                            }
                                                            const obj6 = { collapsable: false, style, children: null };
                                                            const items2 = [tmp26, tmp34, tmp37, tmp39];
                                                            obj6.children = items2;
                                                            const tmp47 = closure_6(onPressAttachmentOption, obj6);
                                                            cResult[56] = style;
                                                            cResult[57] = tmp34;
                                                            cResult[58] = tmp37;
                                                            cResult[59] = tmp39;
                                                            cResult[60] = tmp26;
                                                            cResult[61] = tmp47;
                                                            tmp45 = tmp47;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  class Z {
                                                    constructor() {
                                                      return setFocusedOption(option);
                                                    }
                                                  }
                                                  if (tmp18) {
                                                    class Z {
                                                      constructor() {
                                                        return setFocusedOption(option);
                                                      }
                                                    }
                                                    tmp43[1] = tmp16;
                                                    tmp43[2] = tmp14;
                                                    tmp43[3] = tmp4.optionErrorContainer;
                                                    const items3 = [closure_5(option(onPressOption[14]).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
                                                    const obj7 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
                                                    items3[1] = closure_5(option(onPressOption[12]).Text, obj7);
                                                    tmp43[4] = items3;
                                                    const tmp40 = closure_6(onOptionViewLayout(onPressOption[10]).View, tmp43);
                                                  }
                                                  cResult[49] = tmp16;
                                                  cResult[50] = tmp14;
                                                  cResult[51] = option.name;
                                                  cResult[52] = optionValidationResults;
                                                  cResult[53] = tmp18;
                                                  cResult[54] = tmp4.optionErrorContainer;
                                                  cResult[55] = tmp40;
                                                  tmp39 = tmp40;
                                                }
                                                class Z {
                                                  constructor() {
                                                    return setFocusedOption(option);
                                                  }
                                                }
                                                const obj8 = { style: tmp4.optionDescription, variant: "text-xs/medium", color: "text-muted", children: option.displayDescription };
                                                const tmp38 = closure_5(option(onPressOption[12]).Text, obj8);
                                                cResult[46] = option.displayDescription;
                                                cResult[47] = tmp4.optionDescription;
                                                cResult[48] = tmp38;
                                                tmp37 = tmp38;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class Z {
                          constructor() {
                            return setFocusedOption(option);
                          }
                        }
                        const obj9 = { option, onStartEditing, onEndEditing, onDismiss, onOptionValueChange, onFocus: tmp29, onPress: tmp30, onPressAttachmentOption: tmp32, channel, autoFocusType, command, optionValues, hasError: tmp18 };
                        const tmp36 = closure_5(onOptionViewLayout(onPressOption[13]), obj9);
                        cResult[32] = autoFocusType;
                        cResult[33] = channel;
                        cResult[34] = command;
                        cResult[35] = onDismiss;
                        cResult[36] = onEndEditing;
                        cResult[37] = onOptionValueChange;
                        cResult[38] = onStartEditing;
                        cResult[39] = option;
                        cResult[40] = optionValues;
                        cResult[41] = tmp18;
                        cResult[42] = tmp29;
                        cResult[43] = tmp30;
                        cResult[44] = tmp32;
                        cResult[45] = tmp36;
                        tmp34 = tmp36;
                      }
                      class Z {
                        constructor() {
                          return setFocusedOption(option);
                        }
                      }
                      cResult[29] = onPressAttachmentOption;
                      cResult[30] = option;
                      cResult[31] = tmp33;
                      tmp32 = tmp33;
                    }
                    class Z {
                      constructor() {
                        return setFocusedOption(option);
                      }
                    }
                    cResult[26] = onPressOption;
                    cResult[27] = option;
                    cResult[28] = tmp31;
                    tmp30 = tmp31;
                  }
                  class Z {
                    constructor() {
                      return setFocusedOption(option);
                    }
                  }
                  cResult[23] = option;
                  cResult[24] = setFocusedOption;
                  cResult[25] = Z;
                  tmp29 = Z;
                }
              }
              class K {
                constructor(arg0) {
                  tmp = onOptionViewLayout(onPressAttachmentOption, option);
                  return;
                }
              }
              if (tmp22) {
                const obj10 = { style: null, variant: "text-sm/semibold", color: "text-subtle", children: null };
                class Z {
                  constructor() {
                    return setFocusedOption(option);
                  }
                }
                obj10.children = option.displayName;
                const tmp27 = closure_5(option(onPressOption[12]).Text, obj10);
              }
              cResult[19] = option.displayName;
              cResult[20] = tmp22;
              cResult[21] = tmp4.labelText;
              cResult[22] = tmp27;
              tmp26 = tmp27;
            }
            class K {
              constructor(arg0) {
                tmp = onOptionViewLayout(onPressAttachmentOption, option);
                return;
              }
            }
            cResult[16] = onOptionViewLayout;
            cResult[17] = option;
            cResult[18] = K;
            tmp25 = K;
          }
          let hasItem = items1.includes(option.type);
          if (hasItem) {
            hasItem = null == option.choices;
          }
          cResult[13] = option.choices;
          cResult[14] = option.type;
          cResult[15] = hasItem;
          tmp22 = hasItem;
        }
      }
      let hasItem1 = editedOptions.has(option.name);
      if (hasItem1) {
        class Z {
          constructor() {
            return setFocusedOption(option);
          }
        }
        if (optionValidationResults[option.name] != null) {
          const error = tmp20.error;
        }
        hasItem1 = null != error;
      }
      cResult[9] = editedOptions;
      cResult[10] = option.name;
      cResult[11] = optionValidationResults;
      cResult[12] = hasItem1;
      tmp18 = hasItem1;
    }
    if (option.required || onPressAttachmentOption.isPreSelectedOption) {
      const fn2 = (fn) => fn();
    }
    cResult[2] = registerAnimationCompleteCallback;
    cResult[3] = option.required || onPressAttachmentOption.isPreSelectedOption;
    cResult[4] = fn2;
    tmp13 = fn2;
  } else {
    return null;
  }
  const tmpResult2 = option(onPressOption[11]);
}) : (function CommandOptionView(option) {
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: AccessibilityStore } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const stateFromStores = option(504).useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(5053).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const obj = option(504);
  const optionEnteringAnimation = option(12047).useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(5053).FadeOut;
    const FadeInUp = tmp2(5053).FadeInUp;
    const obj2 = { transform: null };
    items1 = [{ translateY: -10 }];
    obj2.transform = items1;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    let hasItem1 = items1.includes(option.type);
    if (hasItem1) {
      hasItem1 = null == option.choices;
    }
    const obj3 = { skipEntering: option.required || isPreSelectedOption, children: null };
    const obj4 = { handleQueuedCallback: fn, children: null };
    const obj5 = {
      collapsable: false,
      entering: optionEnteringAnimation.EnteringAnimation,
      exiting: tmp2(12047).ExitingAnimation,
      layout: tmp2(12047).LayoutAnimation,
      onLayout(arg0) {
          importDefault(arg0, option);
        },
      children: null
    };
    const obj6 = { collapsable: false, style, children: null };
    if (hasItem1) {
      const obj7 = { style: tmp.labelText, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
      hasItem1 = closure_5(tmp2(5235).Text, obj7);
    }
    const items2 = [hasItem1, , , ];
    const obj8 = {
      option,
      onStartEditing,
      onEndEditing,
      onDismiss,
      onOptionValueChange,
      onFocus() {
          return AccessibilityStore(option);
        },
      onPress() {
          return dependencyMap(option);
        },
      onPressAttachmentOption() {
          return View(option);
        },
      channel,
      autoFocusType,
      command,
      optionValues,
      hasError: hasItem
    };
    items2[1] = closure_5(AppLauncherCommandOptionDefault, obj8);
    const obj9 = { style: tmp.optionDescription, variant: "text-xs/medium", color: "text-muted", children: option.displayDescription };
    items2[2] = closure_5(tmp2(5235).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: null };
      const items3 = [closure_5(tmp2(7014).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
      const obj11 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = closure_5(tmp2(5235).Text, obj11);
      obj10.children = items3;
      hasItem = closure_6(ReanimatedRexportDefault.View, obj10);
    }
    items2[3] = hasItem;
    obj6.children = items2;
    obj5.children = closure_6(View, obj6);
    obj4.children = closure_5(ReanimatedRexportDefault.View, obj5);
    obj3.children = closure_5(tmp2(12055).AwaitAnimationContext, obj4);
    return closure_5(tmp2(5053).LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
  const tmp2Result = option(12047);
});
// === Module 12970: CheckpointNavigationControls ===

// Module 12970 (CheckpointNavigationControls)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import CheckpointTextDefault from "CheckpointText" /* 12911 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 12960 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6001 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, editControl: null, editIcon: null, share: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" };
obj.editControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
obj.editIcon = { width: 20, height: 20 };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.share = { paddingHorizontal: nativeDefault.space.PX_64 };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_64 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNavigationControls(arg0) {
  const cResult = onNext(576).c(90);
  ({ activeRoute, onBack, onNext } = arg0);
  ({ onShare, color, shadowColor, backDisabled, nextDisabled, nextLoading, nextBlockedTrait } = arg0);
  if (undefined === color) {
    color = closure_5;
  }
  let tmp5 = undefined !== nextDisabled && nextDisabled;
  dependencyMap = tmp5;
  closure_3 = tmp6;
  const tmp7 = closure_9();
  const link = tmp7;
  if (cResult[0] !== nextBlockedTrait) {
    let nitroLockedMessage;
    if (null != nextBlockedTrait) {
      nitroLockedMessage = onNext(12960).getNitroLockedMessage(nextBlockedTrait);
      const tmpResult = onNext(12960);
    }
    cResult[0] = nextBlockedTrait;
    cResult[1] = nitroLockedMessage;
    let tmp8 = nitroLockedMessage;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === nextBlockedTrait) {
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === onNext) {
          let tmp11 = cResult[6];
        }
        const rect = nextBlockedTrait(1633)();
        if (cResult[7] === rect.bottom) {
          if (cResult[8] === rect.left) {
            if (cResult[9] === rect.right) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] === tmp7.container) {
              if (cResult[12] === tmp13) {
                let tmp14 = cResult[13];
              }
              onNext(5238);
              if (cResult[14] !== activeRoute) {
                const intl = onNext(1128).intl;
                if (activeRoute === onNext(6348).CheckpointRoute.PROFILE_WIDGET) {
                  let PDTjLN = onNext(1128).t.i4jeWR;
                } else {
                  PDTjLN = onNext(1128).t.PDTjLN;
                }
                const stringResult = intl.string(PDTjLN);
                cResult[14] = activeRoute;
                cResult[15] = stringResult;
              } else if (cResult[16] !== activeRoute) {
                if (activeRoute === onNext(6348).CheckpointRoute.FINALIZE_CHARACTER) {
                  const intl3 = onNext(1128).intl;
                  let stringResult1 = intl3.string(onNext(1128).t["R3BPH+"]);
                } else {
                  if (tmpResult4.isCheckpointCustomizationRoute(activeRoute)) {
                    const intl2 = onNext(1128).intl;
                    stringResult1 = intl2.string(onNext(1128).t.PDTjLN);
                  }
                  tmpResult4 = onNext(6348);
                }
                cResult[16] = activeRoute;
                cResult[17] = stringResult1;
              } else if (activeRoute === onNext(6348).CheckpointRoute.HOME) {
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp7.homeContainer) {
                    let tmp71 = cResult[20];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl7 = onNext(1128).intl;
                    const stringResult2 = intl7.string(onNext(1128).t.I0v0Qv);
                    cResult[21] = stringResult2;
                    let tmp73 = stringResult2;
                  } else {
                    tmp73 = cResult[21];
                  }
                  if (cResult[22] !== tmp6) {
                    const obj2 = { disabled: tmp6 };
                    cResult[22] = tmp6;
                    cResult[23] = obj2;
                    let tmp75 = obj2;
                  } else {
                    tmp75 = cResult[23];
                  }
                  if (cResult[24] === tmp11) {
                    if (cResult[25] === tmp6) {
                      if (cResult[26] === tmp75) {
                        let tmp76 = cResult[27];
                      }
                      if (cResult[28] !== tmp7.link) {
                        const intl8 = onNext(1128).intl;
                        const obj4 = {
                          learnMoreHook(children, arg1) {
                                                  return React5(CheckpointTextDefault, {
                                                    variant: "text-sm/medium",
                                                    style: link.link,
                                                    onPress() {
                                                      const obj = nextBlockedTrait(5646);
                                                      return obj.openURL(nextBlockedTrait(2067).getArticleURL(constants.CHECKPOINT));
                                                    },
                                                    accessibilityRole: "link",
                                                    children
                                                  }, arg1);
                                                }
                        };
                        const formatResult = intl8.format(nextBlockedTrait(3088).hcNhyq, obj4);
                        cResult[28] = tmp7.link;
                        cResult[29] = formatResult;
                        let tmp80 = formatResult;
                      } else {
                        tmp80 = cResult[29];
                      }
                      if (cResult[30] !== tmp80) {
                        const obj5 = { variant: "text-sm/medium", children: tmp80 };
                        const tmp84 = closure_7(nextBlockedTrait(12911), obj5);
                        cResult[30] = tmp80;
                        cResult[31] = tmp84;
                        let tmp82 = tmp84;
                      } else {
                        tmp82 = cResult[31];
                      }
                      if (cResult[32] === tmp71) {
                        if (cResult[33] === tmp76) {
                          if (cResult[34] === tmp82) {
                            let tmp85 = cResult[35];
                          }
                          return tmp85;
                        }
                      }
                      const obj6 = { style: tmp71, children: null };
                      const items = [tmp76, tmp82];
                      obj6.children = items;
                      const tmp88 = closure_8(link, obj6);
                      cResult[32] = tmp71;
                      cResult[33] = tmp76;
                      cResult[34] = tmp82;
                      cResult[35] = tmp88;
                      tmp85 = tmp88;
                    }
                  }
                  const obj7 = { Icon: onNext(8745).PlayIcon, label: tmp73, onPress: tmp11, disabled: tmp6, accessibilityState: tmp75 };
                  const tmp79 = closure_7(nextBlockedTrait(12971), obj7);
                  cResult[24] = tmp11;
                  cResult[25] = tmp6;
                  cResult[26] = tmp75;
                  cResult[27] = tmp79;
                  tmp76 = tmp79;
                  const tmp12Result = nextBlockedTrait(12971);
                }
                const items1 = [tmp14, tmp7.homeContainer];
                cResult[18] = tmp14;
                cResult[19] = tmp7.homeContainer;
                cResult[20] = items1;
                tmp71 = items1;
              } else if (activeRoute === onNext(6348).CheckpointRoute.SUMMARY) {
                if (cResult[36] === tmp14) {
                  if (cResult[37] === tmp7.routeControls) {
                    let tmp49 = cResult[38];
                  }
                  if (cResult[39] !== color) {
                    const obj8 = { borderColor: color };
                    cResult[39] = color;
                    cResult[40] = obj8;
                    let tmp50 = obj8;
                  } else {
                    tmp50 = cResult[40];
                  }
                  if (cResult[41] === tmp7.control) {
                    if (cResult[42] === tmp7.editControl) {
                      if (cResult[43] === tmp50) {
                        let tmp51 = cResult[44];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = onNext(1128).intl;
                        const stringResult3 = intl5.string(onNext(1128).t.bt75uw);
                        cResult[45] = stringResult3;
                        let tmp53 = stringResult3;
                      } else {
                        tmp53 = cResult[45];
                      }
                      if (cResult[46] === color) {
                        if (cResult[47] === tmp7.editIcon) {
                          let tmp55 = cResult[48];
                        }
                        if (cResult[49] === onBack) {
                          if (cResult[50] === tmp51) {
                            if (cResult[51] === tmp55) {
                              let tmp58 = cResult[52];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl6 = onNext(1128).intl;
                              const stringResult4 = intl6.string(onNext(1128).t.RDE0Sc);
                              cResult[53] = stringResult4;
                              let tmp62 = stringResult4;
                            } else {
                              tmp62 = cResult[53];
                            }
                            if (cResult[54] === color) {
                              if (cResult[55] === onShare) {
                                if (cResult[56] === shadowColor) {
                                  if (cResult[57] === tmp7.share) {
                                    let tmp64 = cResult[58];
                                  }
                                  if (cResult[59] === tmp49) {
                                    if (cResult[60] === tmp58) {
                                      if (cResult[61] === tmp64) {
                                        let tmp67 = cResult[62];
                                      }
                                      return tmp67;
                                    }
                                  }
                                  const obj9 = { style: tmp49, children: null };
                                  const items2 = [tmp58, tmp64];
                                  obj9.children = items2;
                                  const tmp70 = closure_8(link, obj9);
                                  cResult[59] = tmp49;
                                  cResult[60] = tmp58;
                                  cResult[61] = tmp64;
                                  cResult[62] = tmp70;
                                  tmp67 = tmp70;
                                }
                              }
                            }
                            const obj10 = { label: tmp62, onPress: onShare, color, borderColor: color, shadowColor, style: tmp7.share };
                            const tmp66 = closure_7(nextBlockedTrait(12971), obj10);
                            cResult[54] = color;
                            cResult[55] = onShare;
                            cResult[56] = shadowColor;
                            cResult[57] = tmp7.share;
                            cResult[58] = tmp66;
                            tmp64 = tmp66;
                          }
                        }
                        const obj11 = { style: tmp51, onPress: onBack, accessibilityRole: "button", accessibilityLabel: tmp53, children: tmp55 };
                        const tmp61 = closure_7(closure_3, obj11);
                        cResult[49] = onBack;
                        cResult[50] = tmp51;
                        cResult[51] = tmp55;
                        cResult[52] = tmp61;
                        tmp58 = tmp61;
                      }
                      const obj12 = { size: "custom", color, style: tmp7.editIcon };
                      const tmp57 = closure_7(onNext(10097).PencilIcon, obj12);
                      cResult[46] = color;
                      cResult[47] = tmp7.editIcon;
                      cResult[48] = tmp57;
                      tmp55 = tmp57;
                    }
                  }
                  const items3 = [, , ];
                  ({ control: arr5[0], editControl: arr5[1] } = tmp7);
                  items3[2] = tmp50;
                  cResult[41] = tmp7.control;
                  cResult[42] = tmp7.editControl;
                  cResult[43] = tmp50;
                  cResult[44] = items3;
                  tmp51 = items3;
                }
                const items4 = [tmp14, tmp7.routeControls];
                cResult[36] = tmp14;
                cResult[37] = tmp7.routeControls;
                cResult[38] = items4;
                tmp49 = items4;
              } else {
                if (cResult[63] === tmp14) {
                  if (cResult[64] === tmp7.routeControls) {
                    let tmp23 = cResult[65];
                  }
                  const _Symbol = Symbol;
                  if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = onNext(1128).intl;
                    const stringResult5 = intl4.string(onNext(1128).t["13/7kX"]);
                    cResult[66] = stringResult5;
                    let tmp25 = stringResult5;
                  } else {
                    tmp25 = cResult[66];
                  }
                  if (cResult[67] !== tmp4) {
                    const obj13 = { disabled: tmp4 };
                    cResult[67] = tmp4;
                    cResult[68] = obj13;
                    let tmp27 = obj13;
                  } else {
                    tmp27 = cResult[68];
                  }
                  let tmp28 = tmp16;
                  if (!tmp4) {
                    tmp28 = closure_5;
                  }
                  if (cResult[69] !== tmp28) {
                    const obj14 = { color: tmp28 };
                    const tmp31 = closure_7(onNext(10727).ArrowSmallLeftIcon, obj14);
                    cResult[69] = tmp28;
                    cResult[70] = tmp31;
                    let tmp29 = tmp31;
                  } else {
                    tmp29 = cResult[70];
                  }
                  if (cResult[71] === tmp4) {
                    if (cResult[72] === onBack) {
                      if (cResult[73] === tmp7.control) {
                        if (cResult[74] === tmp27) {
                          if (cResult[75] === tmp29) {
                            let tmp32 = cResult[76];
                          }
                          let tmp36 = tmp5;
                          if (!tmp5) {
                            tmp36 = tmp6;
                          }
                          let tmp37;
                          if (tmp5) {
                            if (!tmp6) {
                              tmp37 = tmp8;
                            }
                          }
                          let tmp39 = tmp20;
                          if (tmp20 == null) {
                            tmp39 = tmp17;
                          }
                          if (!tmp5) {
                            tmp5 = tmp6;
                          }
                          if (cResult[77] !== tmp5) {
                            const obj15 = { disabled: tmp5 };
                            cResult[77] = tmp5;
                            cResult[78] = obj15;
                            let tmp40 = obj15;
                          } else {
                            tmp40 = cResult[78];
                          }
                          if (cResult[79] === tmp11) {
                            if (cResult[80] === tmp20) {
                              if (cResult[81] === tmp36) {
                                if (cResult[82] === tmp37) {
                                  if (cResult[83] === tmp39) {
                                    if (cResult[84] === tmp40) {
                                      let tmp41 = cResult[85];
                                    }
                                    if (cResult[86] === tmp23) {
                                      if (cResult[87] === tmp32) {
                                        if (cResult[88] === tmp41) {
                                          let tmp45 = cResult[89];
                                        }
                                        return tmp45;
                                      }
                                    }
                                    const obj16 = { style: tmp23, children: null };
                                    const items5 = [tmp32, tmp41];
                                    obj16.children = items5;
                                    const tmp48 = closure_8(link, obj16);
                                    cResult[86] = tmp23;
                                    cResult[87] = tmp32;
                                    cResult[88] = tmp41;
                                    cResult[89] = tmp48;
                                    tmp45 = tmp48;
                                  }
                                }
                              }
                            }
                          }
                          const obj17 = { Icon: onNext(10797).ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: tmp20, onPress: tmp11, disabled: tmp36, accessibilityHint: tmp37, accessibilityLabel: tmp39, accessibilityState: tmp40 };
                          const tmp44 = closure_7(nextBlockedTrait(12971), obj17);
                          cResult[79] = tmp11;
                          cResult[80] = tmp20;
                          cResult[81] = tmp36;
                          cResult[82] = tmp37;
                          cResult[83] = tmp39;
                          cResult[84] = tmp40;
                          cResult[85] = tmp44;
                          tmp41 = tmp44;
                          const tmp12Result2 = nextBlockedTrait(12971);
                        }
                      }
                    }
                  }
                  const obj18 = { style: tmp7.control, onPress: onBack, disabled: tmp4, accessibilityRole: "button", accessibilityLabel: tmp25, accessibilityState: tmp27, children: tmp29 };
                  const tmp35 = closure_7(closure_3, obj18);
                  cResult[71] = tmp4;
                  cResult[72] = onBack;
                  cResult[73] = tmp7.control;
                  cResult[74] = tmp27;
                  cResult[75] = tmp29;
                  cResult[76] = tmp35;
                  tmp32 = tmp35;
                }
                const items6 = [tmp14, tmp7.routeControls];
                cResult[63] = tmp14;
                cResult[64] = tmp7.routeControls;
                cResult[65] = items6;
                tmp23 = items6;
              }
            }
            const items7 = [tmp7.container, tmp13];
            cResult[11] = tmp7.container;
            cResult[12] = tmp13;
            cResult[13] = items7;
            tmp14 = items7;
          }
        }
        const obj19 = { marginLeft: null, marginRight: null, marginBottom: null };
        ({ left: obj3.marginLeft, right: obj3.marginRight, bottom: obj3.marginBottom } = rect);
        cResult[7] = rect.bottom;
        cResult[8] = rect.left;
        cResult[9] = rect.right;
        cResult[10] = obj19;
        tmp13 = obj19;
      }
    }
  }
  function handleNextPress() {
    if (!closure_3) {
      if (closure_2) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp4);
        }
      } else {
        onNext();
      }
    }
  }
  cResult[2] = nextBlockedTrait;
  cResult[3] = tmp5;
  cResult[4] = undefined !== nextLoading && nextLoading;
  cResult[5] = onNext;
  cResult[6] = handleNextPress;
  tmp11 = handleNextPress;
  let obj = onNext(576);
}) : (function CheckpointNavigationControls(nextDisabled) {
  ({ activeRoute, onBack, onNext: require, color } = nextDisabled);
  if (color === undefined) {
    color = closure_5;
  }
  ({ backDisabled, shadowColor } = nextDisabled);
  if (backDisabled === undefined) {
    backDisabled = false;
  }
  let flag = nextDisabled.nextDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = nextDisabled.nextLoading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const nextBlockedTrait = nextDisabled.nextBlockedTrait;
  const tmp = closure_9();
  const link = tmp;
  if (null != nextBlockedTrait) {
    const nitroLockedMessage = require("showNitroLockedToast").getNitroLockedMessage(nextBlockedTrait);
    let obj = require("showNitroLockedToast");
  }
  const rect = flag(flag2[9])();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let token = require("useToken").useToken("text-subtle");
  const intl = require("util").intl;
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.PROFILE_WIDGET) {
    let PDTjLN = require("util").t.i4jeWR;
  } else {
    PDTjLN = require("util").t.PDTjLN;
  }
  const obj2 = require("useToken");
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    const intl3 = require("util").intl;
    let stringResult1 = intl3.string(require("util").t["R3BPH+"]);
  } else {
    if (tmp7Result.isCheckpointCustomizationRoute(activeRoute)) {
      const intl2 = require("util").intl;
      stringResult1 = intl2.string(require("util").t.PDTjLN);
    }
    tmp7Result = require("CheckpointNavigation");
  }
  function handleNextPress() {
    if (!flag2) {
      if (flag) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp4);
        }
      } else {
        require();
      }
    }
  }
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
    const obj3 = { style: null, children: null };
    const items1 = [items, tmp.homeContainer];
    obj3.style = items1;
    const obj4 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null, disabled: null, accessibilityState: null };
    const intl6 = require("util").intl;
    obj4.label = intl6.string(require("util").t.I0v0Qv);
    obj4.onPress = handleNextPress;
    obj4.disabled = flag2;
    const obj5 = { disabled: flag2 };
    obj4.accessibilityState = obj5;
    const items2 = [closure_7(tmp5(tmp6[13]), obj4), ];
    const obj6 = { variant: "text-sm/medium", children: null };
    const tmp5Result = tmp5(tmp6[13]);
    const intl7 = require("util").intl;
    const obj7 = {
      learnMoreHook(children, arg1) {
          return React5(CheckpointTextDefault, {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const obj = flag(5646);
              return obj.openURL(flag(2067).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    obj6.children = intl7.format(tmp5(tmp6[15]).hcNhyq, obj7);
    items2[1] = closure_7(tmp5(tmp6[16]), obj6);
    obj3.children = items2;
    let tmp25Result = closure_8(link, obj3);
    const tmp5Result4 = tmp5(tmp6[16]);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj8 = { style: null, children: null };
    const items3 = [items, tmp.routeControls];
    obj8.style = items3;
    const obj9 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items4 = [, , ];
    ({ control: arr4[0], editControl: arr4[1] } = tmp);
    const obj10 = { borderColor: color };
    items4[2] = obj10;
    obj9.style = items4;
    obj9.onPress = onBack;
    const intl4 = require("util").intl;
    obj9.accessibilityLabel = intl4.string(require("util").t.bt75uw);
    const obj11 = { size: "custom", color, style: tmp.editIcon };
    obj9.children = closure_7(require("PencilIcon").PencilIcon, obj11);
    const items5 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = { label: null, onPress: null, color: null, borderColor: null, shadowColor: null, style: null };
    const intl5 = require("util").intl;
    obj12.label = intl5.string(require("util").t.RDE0Sc);
    obj12.onPress = nextDisabled.onShare;
    obj12.color = color;
    obj12.borderColor = color;
    obj12.shadowColor = shadowColor;
    obj12.style = tmp.share;
    items5[1] = closure_7(tmp5(tmp6[13]), obj12);
    obj8.children = items5;
    tmp25Result = closure_8(link, obj8);
    const tmp5Result5 = tmp5(tmp6[13]);
  } else {
    const obj13 = { style: null, children: null };
    const items6 = [items, tmp.routeControls];
    obj13.style = items6;
    const obj14 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
    const intl8 = require("util").intl;
    obj14.accessibilityLabel = intl8.string(require("util").t["13/7kX"]);
    const obj15 = { disabled: backDisabled };
    obj14.accessibilityState = obj15;
    if (!backDisabled) {
      token = closure_5;
    }
    const obj16 = { color: token };
    obj14.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj16);
    const items7 = [closure_7(nextBlockedTrait, obj14), ];
    const obj17 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: null, accessibilityHint: null, accessibilityLabel: null, accessibilityState: null };
    let tmp12 = flag;
    if (!flag) {
      tmp12 = flag2;
    }
    obj17.disabled = tmp12;
    let tmp13;
    if (flag) {
      if (!flag2) {
        tmp13 = nitroLockedMessage;
      }
    }
    obj17.accessibilityHint = tmp13;
    if (stringResult1 == null) {
      stringResult1 = stringResult;
    }
    obj17.accessibilityLabel = stringResult1;
    if (!flag) {
      flag = flag2;
    }
    const obj18 = { disabled: flag };
    obj17.accessibilityState = obj18;
    items7[1] = closure_7(tmp5(tmp6[13]), obj17);
    obj13.children = items7;
    tmp25Result = closure_8(link, obj13);
    const tmp5Result6 = tmp5(tmp6[13]);
  }
  return tmp25Result;
});
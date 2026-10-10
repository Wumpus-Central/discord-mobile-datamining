// === Module 16025: CheckpointNavigationControls ===

// Module 16025 (CheckpointNavigationControls)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CheckpointTextDefault from "CheckpointText" /* 15996 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 16018 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5437 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj);
let obj2 = { gap: nativeDefault.space.PX_24 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNavigationControls(arg0) {
  const cResult = onNext(576).c(63);
  ({ activeRoute, onBack, onNext } = arg0);
  ({ backDisabled, nextDisabled, nextLoading, nextBlockedTrait } = arg0);
  let tmp5 = undefined !== nextDisabled && nextDisabled;
  dependencyMap = tmp5;
  closure_3 = tmp6;
  const tmp7 = closure_9();
  const link = tmp7;
  if (cResult[0] !== nextBlockedTrait) {
    let nitroLockedMessage;
    if (null != nextBlockedTrait) {
      nitroLockedMessage = onNext(16018).getNitroLockedMessage(nextBlockedTrait);
      const tmpResult = onNext(16018);
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
        const rect = nextBlockedTrait(1631)();
        if (cResult[7] === rect.bottom) {
          if (cResult[8] === rect.left) {
            if (cResult[9] === rect.right) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] === tmp7.container) {
              if (cResult[12] === tmp13) {
                let tmp14 = cResult[13];
              }
              onNext(4818);
              if (cResult[14] !== activeRoute) {
                const intl = onNext(1126).intl;
                if (activeRoute === onNext(15979).CheckpointRoute.PROFILE_WIDGET) {
                  let PDTjLN = onNext(1126).t.i4jeWR;
                } else {
                  PDTjLN = onNext(1126).t.PDTjLN;
                }
                const stringResult = intl.string(PDTjLN);
                cResult[14] = activeRoute;
                cResult[15] = stringResult;
              } else if (cResult[16] !== activeRoute) {
                if (activeRoute === onNext(15979).CheckpointRoute.FINALIZE_CHARACTER) {
                  const intl3 = onNext(1126).intl;
                  let stringResult1 = intl3.string(onNext(1126).t["R3BPH+"]);
                } else {
                  if (tmpResult4.isCheckpointCustomizationRoute(activeRoute)) {
                    const intl2 = onNext(1126).intl;
                    stringResult1 = intl2.string(onNext(1126).t.PDTjLN);
                  }
                  tmpResult4 = onNext(15979);
                }
                cResult[16] = activeRoute;
                cResult[17] = stringResult1;
              } else if (activeRoute === onNext(15979).CheckpointRoute.HOME) {
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp7.homeContainer) {
                    let tmp49 = cResult[20];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = onNext(1126).intl;
                    const stringResult2 = intl5.string(onNext(1126).t.I0v0Qv);
                    cResult[21] = stringResult2;
                    let tmp51 = stringResult2;
                  } else {
                    tmp51 = cResult[21];
                  }
                  if (cResult[22] !== tmp6) {
                    const obj2 = { disabled: tmp6 };
                    cResult[22] = tmp6;
                    cResult[23] = obj2;
                    let tmp53 = obj2;
                  } else {
                    tmp53 = cResult[23];
                  }
                  if (cResult[24] === tmp11) {
                    if (cResult[25] === tmp6) {
                      if (cResult[26] === tmp53) {
                        let tmp54 = cResult[27];
                      }
                      if (cResult[28] !== tmp7.link) {
                        const intl6 = onNext(1126).intl;
                        const obj4 = {
                          learnMoreHook(children, arg1) {
                                                  return React5(CheckpointTextDefault, {
                                                    variant: "text-sm/medium",
                                                    style: link.link,
                                                    onPress() {
                                                      const obj = nextBlockedTrait(4806);
                                                      return obj.openURL(nextBlockedTrait(2128).getArticleURL(constants.CHECKPOINT));
                                                    },
                                                    accessibilityRole: "link",
                                                    children
                                                  }, arg1);
                                                }
                        };
                        const formatResult = intl6.format(nextBlockedTrait(3118).hcNhyq, obj4);
                        cResult[28] = tmp7.link;
                        cResult[29] = formatResult;
                        let tmp58 = formatResult;
                      } else {
                        tmp58 = cResult[29];
                      }
                      if (cResult[30] !== tmp58) {
                        const obj5 = { variant: "text-sm/medium", children: tmp58 };
                        const tmp62 = closure_7(nextBlockedTrait(15996), obj5);
                        cResult[30] = tmp58;
                        cResult[31] = tmp62;
                        let tmp60 = tmp62;
                      } else {
                        tmp60 = cResult[31];
                      }
                      if (cResult[32] === tmp49) {
                        if (cResult[33] === tmp54) {
                          if (cResult[34] === tmp60) {
                            let tmp63 = cResult[35];
                          }
                          return tmp63;
                        }
                      }
                      const obj6 = { style: tmp49, children: null };
                      const items = [tmp54, tmp60];
                      obj6.children = items;
                      const tmp66 = closure_8(link, obj6);
                      cResult[32] = tmp49;
                      cResult[33] = tmp54;
                      cResult[34] = tmp60;
                      cResult[35] = tmp66;
                      tmp63 = tmp66;
                    }
                  }
                  const obj7 = { Icon: onNext(8400).PlayIcon, label: tmp51, onPress: tmp11, disabled: tmp6, accessibilityState: tmp53 };
                  const tmp57 = closure_7(nextBlockedTrait(16026), obj7);
                  cResult[24] = tmp11;
                  cResult[25] = tmp6;
                  cResult[26] = tmp53;
                  cResult[27] = tmp57;
                  tmp54 = tmp57;
                  const tmp12Result = nextBlockedTrait(16026);
                }
                const items1 = [tmp14, tmp7.homeContainer];
                cResult[18] = tmp14;
                cResult[19] = tmp7.homeContainer;
                cResult[20] = items1;
                tmp49 = items1;
              } else {
                if (cResult[36] === tmp14) {
                  if (cResult[37] === tmp7.routeControls) {
                    let tmp23 = cResult[38];
                  }
                  const _Symbol = Symbol;
                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = onNext(1126).intl;
                    const stringResult3 = intl4.string(onNext(1126).t["13/7kX"]);
                    cResult[39] = stringResult3;
                    let tmp25 = stringResult3;
                  } else {
                    tmp25 = cResult[39];
                  }
                  if (cResult[40] !== tmp4) {
                    const obj8 = { disabled: tmp4 };
                    cResult[40] = tmp4;
                    cResult[41] = obj8;
                    let tmp27 = obj8;
                  } else {
                    tmp27 = cResult[41];
                  }
                  let tmp28 = tmp16;
                  if (!tmp4) {
                    tmp28 = closure_5;
                  }
                  if (cResult[42] !== tmp28) {
                    const obj9 = { color: tmp28 };
                    const tmp31 = closure_7(onNext(10725).ArrowSmallLeftIcon, obj9);
                    cResult[42] = tmp28;
                    cResult[43] = tmp31;
                    let tmp29 = tmp31;
                  } else {
                    tmp29 = cResult[43];
                  }
                  if (cResult[44] === tmp4) {
                    if (cResult[45] === onBack) {
                      if (cResult[46] === tmp7.control) {
                        if (cResult[47] === tmp27) {
                          if (cResult[48] === tmp29) {
                            let tmp32 = cResult[49];
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
                          if (cResult[50] !== tmp5) {
                            const obj10 = { disabled: tmp5 };
                            cResult[50] = tmp5;
                            cResult[51] = obj10;
                            let tmp40 = obj10;
                          } else {
                            tmp40 = cResult[51];
                          }
                          if (cResult[52] === tmp11) {
                            if (cResult[53] === tmp20) {
                              if (cResult[54] === tmp36) {
                                if (cResult[55] === tmp37) {
                                  if (cResult[56] === tmp39) {
                                    if (cResult[57] === tmp40) {
                                      let tmp41 = cResult[58];
                                    }
                                    if (cResult[59] === tmp23) {
                                      if (cResult[60] === tmp32) {
                                        if (cResult[61] === tmp41) {
                                          let tmp45 = cResult[62];
                                        }
                                        return tmp45;
                                      }
                                    }
                                    const obj11 = { style: tmp23, children: null };
                                    const items2 = [tmp32, tmp41];
                                    obj11.children = items2;
                                    const tmp48 = closure_8(link, obj11);
                                    cResult[59] = tmp23;
                                    cResult[60] = tmp32;
                                    cResult[61] = tmp41;
                                    cResult[62] = tmp48;
                                    tmp45 = tmp48;
                                  }
                                }
                              }
                            }
                          }
                          const obj12 = { Icon: onNext(10291).ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: tmp20, onPress: tmp11, disabled: tmp36, accessibilityHint: tmp37, accessibilityLabel: tmp39, accessibilityState: tmp40 };
                          const tmp44 = closure_7(nextBlockedTrait(16026), obj12);
                          cResult[52] = tmp11;
                          cResult[53] = tmp20;
                          cResult[54] = tmp36;
                          cResult[55] = tmp37;
                          cResult[56] = tmp39;
                          cResult[57] = tmp40;
                          cResult[58] = tmp44;
                          tmp41 = tmp44;
                          const tmp12Result2 = nextBlockedTrait(16026);
                        }
                      }
                    }
                  }
                  const obj13 = { style: tmp7.control, onPress: onBack, disabled: tmp4, accessibilityRole: "button", accessibilityLabel: tmp25, accessibilityState: tmp27, children: tmp29 };
                  const tmp35 = closure_7(closure_3, obj13);
                  cResult[44] = tmp4;
                  cResult[45] = onBack;
                  cResult[46] = tmp7.control;
                  cResult[47] = tmp27;
                  cResult[48] = tmp29;
                  cResult[49] = tmp35;
                  tmp32 = tmp35;
                }
                const items3 = [tmp14, tmp7.routeControls];
                cResult[36] = tmp14;
                cResult[37] = tmp7.routeControls;
                cResult[38] = items3;
                tmp23 = items3;
              }
            }
            const items4 = [tmp7.container, tmp13];
            cResult[11] = tmp7.container;
            cResult[12] = tmp13;
            cResult[13] = items4;
            tmp14 = items4;
          }
        }
        const obj14 = { marginLeft: null, marginRight: null, marginBottom: null };
        ({ left: obj3.marginLeft, right: obj3.marginRight, bottom: obj3.marginBottom } = rect);
        cResult[7] = rect.bottom;
        cResult[8] = rect.left;
        cResult[9] = rect.right;
        cResult[10] = obj14;
        tmp13 = obj14;
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
  ({ activeRoute, onNext: require, backDisabled } = nextDisabled);
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
    const intl4 = require("util").intl;
    obj4.label = intl4.string(require("util").t.I0v0Qv);
    obj4.onPress = handleNextPress;
    obj4.disabled = flag2;
    const obj5 = { disabled: flag2 };
    obj4.accessibilityState = obj5;
    const items2 = [closure_7(tmp5(tmp6[13]), obj4), ];
    const obj6 = { variant: "text-sm/medium", children: null };
    const tmp5Result = tmp5(tmp6[13]);
    const intl5 = require("util").intl;
    const obj7 = {
      learnMoreHook(children, arg1) {
          return React5(CheckpointTextDefault, {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const obj = flag(4806);
              return obj.openURL(flag(2128).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    obj6.children = intl5.format(tmp5(tmp6[15]).hcNhyq, obj7);
    items2[1] = closure_7(tmp5(tmp6[16]), obj6);
    obj3.children = items2;
    let tmp20Result = closure_8(link, obj3);
    const tmp5Result3 = tmp5(tmp6[16]);
  } else {
    const obj8 = { style: null, children: null };
    const items3 = [items, tmp.routeControls];
    obj8.style = items3;
    const obj9 = { style: tmp.control, onPress: nextDisabled.onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
    const intl6 = require("util").intl;
    obj9.accessibilityLabel = intl6.string(require("util").t["13/7kX"]);
    const obj10 = { disabled: backDisabled };
    obj9.accessibilityState = obj10;
    if (!backDisabled) {
      token = closure_5;
    }
    const obj11 = { color: token };
    obj9.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj11);
    const items4 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: null, accessibilityHint: null, accessibilityLabel: null, accessibilityState: null };
    let tmp12 = flag;
    if (!flag) {
      tmp12 = flag2;
    }
    obj12.disabled = tmp12;
    let tmp13;
    if (flag) {
      if (!flag2) {
        tmp13 = nitroLockedMessage;
      }
    }
    obj12.accessibilityHint = tmp13;
    if (stringResult1 == null) {
      stringResult1 = stringResult;
    }
    obj12.accessibilityLabel = stringResult1;
    if (!flag) {
      flag = flag2;
    }
    const obj13 = { disabled: flag };
    obj12.accessibilityState = obj13;
    items4[1] = closure_7(tmp5(tmp6[13]), obj12);
    obj8.children = items4;
    tmp20Result = closure_8(link, obj8);
    const tmp5Result4 = tmp5(tmp6[13]);
  }
  return tmp20Result;
});
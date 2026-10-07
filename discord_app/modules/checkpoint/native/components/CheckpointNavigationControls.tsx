// discord_app/modules/checkpoint/native/components/CheckpointNavigationControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null };
let rect = {
  position: "absolute",
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  bottom: nativeDefault.space.PX_16,
};
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = {
  width: CHECKPOINT_CONTROL_SIZE,
  height: CHECKPOINT_CONTROL_SIZE,
  alignItems: "center",
  justifyContent: "center",
};
let closure_9 = createStyles.createStyles(obj);
let obj2 = { gap: nativeDefault.space.PX_24 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onNextDisabledPress) => {
      const cResult = onNext(nextLoading[7]).c(58);
      ({ onBack, onNext } = onNextDisabledPress);
      onNextDisabledPress = onNextDisabledPress.onNextDisabledPress;
      ({ nextLoading, backDisabled, nextDisabled, activeRoute } = onNextDisabledPress);
      let tmp4 = undefined !== nextLoading;
      if (tmp4) {
        tmp4 = nextLoading;
      }
      nextLoading = tmp4;
      let tmp6 = undefined !== nextDisabled && nextDisabled;
      closure_3 = tmp6;
      const tmp7 = closure_9();
      const link = tmp7;
      const rect = onNextDisabledPress(tmp2[8])();
      if (cResult[0] === rect.bottom) {
        if (cResult[1] === rect.left) {
          if (cResult[2] === rect.right) {
            let tmp9 = cResult[3];
          }
          if (cResult[4] === tmp7.container) {
            if (cResult[5] === tmp9) {
              let tmp10 = cResult[6];
            }
            onNext(tmp2[9]);
            if (cResult[7] !== activeRoute) {
              const intl = onNext(tmp2[10]).intl;
              if (activeRoute === onNext(tmp2[11]).CheckpointRoute.PROFILE_WIDGET) {
                let PDTjLN = onNext(tmp2[10]).t.i4jeWR;
              } else {
                PDTjLN = onNext(tmp2[10]).t.PDTjLN;
              }
              const stringResult = intl.string(PDTjLN);
              cResult[7] = activeRoute;
              cResult[8] = stringResult;
            } else if (cResult[9] !== activeRoute) {
              if (activeRoute === onNext(tmp2[11]).CheckpointRoute.FINALIZE_CHARACTER) {
                const intl3 = onNext(tmp2[10]).intl;
                let stringResult1 = intl3.string(onNext(tmp2[10]).t["R3BPH+"]);
              } else {
                if (tmpResult2.isCheckpointCustomizationRoute(activeRoute)) {
                  const intl2 = onNext(tmp2[10]).intl;
                  stringResult1 = intl2.string(onNext(tmp2[10]).t.PDTjLN);
                }
                tmpResult2 = onNext(tmp2[11]);
              }
              cResult[9] = activeRoute;
              cResult[10] = stringResult1;
            } else {
              if (cResult[11] === tmp6) {
                if (cResult[12] === tmp4) {
                  if (cResult[13] === onNext) {
                    if (cResult[14] === onNextDisabledPress) {
                      let tmp20 = cResult[15];
                    }
                    if (activeRoute === onNext(tmp2[11]).CheckpointRoute.HOME) {
                      if (cResult[16] === tmp10) {
                        if (cResult[17] === tmp7.homeContainer) {
                          let tmp44 = cResult[18];
                        }
                        class O {
                          constructor() {
                            if (!nextLoading) {
                              tmp = nextDisabled;
                              if (nextDisabled) {
                                tmp5 = null;
                                if (onNextDisabledPress != null) {
                                  tmp4Result = tmp4();
                                }
                              } else {
                                tmp2 = onNext;
                                tmp3 = onNext();
                              }
                            }
                            return;
                          }
                        }
                        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                          const string2 = onNext(tmp2[10]).intl.string;
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          cResult[19] = tmp47;
                          let tmp46 = tmp47;
                        } else {
                          tmp46 = cResult[19];
                        }
                        if (cResult[20] !== tmp20) {
                          const obj2 = { Icon: null, label: null, onPress: null };
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          obj2.Icon = onNext(tmp2[13]).PlayIcon;
                          obj2.label = tmp46;
                          obj2.onPress = tmp20;
                          const tmp51 = closure_7(tmp50, obj2);
                          cResult[20] = tmp20;
                          cResult[21] = tmp51;
                          let tmp48 = tmp51;
                        } else {
                          tmp48 = cResult[21];
                        }
                        if (cResult[22] !== tmp7.link) {
                          const intl4 = onNext(tmp2[10]).intl;
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          tmp53[0] = function learnMoreHook(children, arg1) {
                            return React5(
                              CheckpointTextDefault,
                              {
                                variant: "text-sm/medium",
                                style: link.link,
                                onPress() {
                                  const obj = onNextDisabledPress(4571);
                                  return obj.openURL(onNextDisabledPress(2115).getArticleURL(constants.CHECKPOINT));
                                },
                                accessibilityRole: "link",
                                children,
                              },
                              arg1,
                            );
                          };
                          const formatResult = intl4.format(tmp8(tmp2[14]).hcNhyq, tmp53);
                          cResult[22] = tmp7.link;
                          cResult[23] = formatResult;
                          let tmp52 = formatResult;
                        } else {
                          tmp52 = cResult[23];
                        }
                        if (cResult[24] !== tmp52) {
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          const tmp57 = closure_7(tmp8(tmp2[15]), { variant: "text-sm/medium", children: null });
                          cResult[24] = tmp52;
                          cResult[25] = tmp57;
                          let tmp55 = tmp57;
                          const obj3 = { variant: "text-sm/medium", children: null };
                        } else {
                          tmp55 = cResult[25];
                        }
                        if (cResult[26] === tmp48) {
                          if (cResult[27] === tmp55) {
                            if (cResult[28] === tmp44) {
                              let tmp58 = cResult[29];
                            }
                            return tmp58;
                          }
                        }
                        const obj4 = { style: tmp44, children: null };
                        const items = [tmp48, tmp55];
                        obj4.children = items;
                        const tmp61 = closure_8(link, obj4);
                        cResult[26] = tmp48;
                        cResult[27] = tmp55;
                        cResult[28] = tmp44;
                        cResult[29] = tmp61;
                        tmp58 = tmp61;
                      }
                      const items1 = [,];
                      class O {
                        constructor() {
                          if (!nextLoading) {
                            tmp = nextDisabled;
                            if (nextDisabled) {
                              tmp5 = null;
                              if (onNextDisabledPress != null) {
                                tmp4Result = tmp4();
                              }
                            } else {
                              tmp2 = onNext;
                              tmp3 = onNext();
                            }
                          }
                          return;
                        }
                      }
                      items1[1] = tmp7.homeContainer;
                      cResult[16] = tmp10;
                      cResult[17] = tmp7.homeContainer;
                      cResult[18] = items1;
                      tmp44 = items1;
                    } else {
                      if (cResult[30] === tmp10) {
                        if (cResult[31] === tmp7.routeControls) {
                          let tmp21 = cResult[32];
                        }
                        class O {
                          constructor() {
                            if (!nextLoading) {
                              tmp = nextDisabled;
                              if (nextDisabled) {
                                tmp5 = null;
                                if (onNextDisabledPress != null) {
                                  tmp4Result = tmp4();
                                }
                              } else {
                                tmp2 = onNext;
                                tmp3 = onNext();
                              }
                            }
                            return;
                          }
                        }
                        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                          const string = onNext(tmp2[10]).intl.string;
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          cResult[33] = tmp24;
                          let tmp23 = tmp24;
                        } else {
                          tmp23 = cResult[33];
                        }
                        if (cResult[34] !== tmp5) {
                          const obj5 = { disabled: tmp5 };
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          cResult[34] = tmp5;
                          cResult[35] = obj5;
                          let tmp25 = obj5;
                        } else {
                          tmp25 = cResult[35];
                        }
                        let tmp26 = tmp13;
                        if (!tmp5) {
                          tmp26 = closure_5;
                        }
                        if (cResult[36] !== tmp26) {
                          class O {
                            constructor() {
                              if (!nextLoading) {
                                tmp = nextDisabled;
                                if (nextDisabled) {
                                  tmp5 = null;
                                  if (onNextDisabledPress != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  tmp2 = onNext;
                                  tmp3 = onNext();
                                }
                              }
                              return;
                            }
                          }
                          const tmp29 = closure_7(onNext(tmp2[18]).ArrowSmallLeftIcon, { color: null });
                          cResult[36] = tmp26;
                          cResult[37] = tmp29;
                          let tmp27 = tmp29;
                          const obj6 = { color: null };
                        } else {
                          tmp27 = cResult[37];
                        }
                        if (cResult[38] === tmp5) {
                          if (cResult[39] === onBack) {
                            if (cResult[40] === tmp7.control) {
                              if (cResult[41] === tmp25) {
                                if (cResult[42] === tmp27) {
                                  let tmp30 = cResult[43];
                                }
                                class O {
                                  constructor() {
                                    if (!nextLoading) {
                                      tmp = nextDisabled;
                                      if (nextDisabled) {
                                        tmp5 = null;
                                        if (onNextDisabledPress != null) {
                                          tmp4Result = tmp4();
                                        }
                                      } else {
                                        tmp2 = onNext;
                                        tmp3 = onNext();
                                      }
                                    }
                                    return;
                                  }
                                }
                                if (tmp6) {
                                  if (!tmp4) {
                                    const nextDisabledHint = onNextDisabledPress.nextDisabledHint;
                                  }
                                }
                                let tmp36 = tmp17;
                                if (tmp17 == null) {
                                  tmp36 = tmp14;
                                }
                                if (!tmp6) {
                                  tmp6 = tmp4;
                                }
                                if (cResult[44] === tmp4) {
                                  if (cResult[45] === tmp6) {
                                    let tmp37 = cResult[46];
                                  }
                                  if (cResult[47] === tmp20) {
                                    if (cResult[48] === tmp17) {
                                      if (cResult[49] === tmp34) {
                                        if (cResult[50] === nextDisabledHint) {
                                          if (cResult[51] === tmp36) {
                                            if (cResult[52] === tmp37) {
                                              let tmp38 = cResult[53];
                                            }
                                            if (cResult[54] === tmp30) {
                                              if (cResult[55] === tmp38) {
                                                if (cResult[56] === tmp21) {
                                                  let tmp41 = cResult[57];
                                                }
                                                return tmp41;
                                              }
                                            }
                                            class O {
                                              constructor() {
                                                if (!nextLoading) {
                                                  tmp = nextDisabled;
                                                  if (nextDisabled) {
                                                    tmp5 = null;
                                                    if (onNextDisabledPress != null) {
                                                      tmp4Result = tmp4();
                                                    }
                                                  } else {
                                                    tmp2 = onNext;
                                                    tmp3 = onNext();
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            const obj7 = { style: tmp21, children: null };
                                            const items2 = [tmp30, tmp38];
                                            obj7.children = items2;
                                            const tmp43 = closure_8(link, obj7);
                                            cResult[54] = tmp30;
                                            cResult[55] = tmp38;
                                            cResult[56] = tmp21;
                                            cResult[57] = tmp43;
                                            tmp41 = tmp43;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class O {
                                    constructor() {
                                      if (!nextLoading) {
                                        tmp = nextDisabled;
                                        if (nextDisabled) {
                                          tmp5 = null;
                                          if (onNextDisabledPress != null) {
                                            tmp4Result = tmp4();
                                          }
                                        } else {
                                          tmp2 = onNext;
                                          tmp3 = onNext();
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  const obj8 = {
                                    Icon: onNext(tmp2[19]).ArrowSmallRightIcon,
                                    iconPosition: "end",
                                    iconSize: "md",
                                    label: tmp17,
                                    onPress: tmp20,
                                    disabled: tmp34,
                                    accessibilityHint: nextDisabledHint,
                                    accessibilityLabel: tmp36,
                                    accessibilityState: tmp37,
                                  };
                                  const tmp40 = closure_7(tmp8(tmp2[12]), obj8);
                                  cResult[47] = tmp20;
                                  cResult[48] = tmp17;
                                  cResult[49] = tmp34;
                                  cResult[50] = nextDisabledHint;
                                  cResult[51] = tmp36;
                                  cResult[52] = tmp37;
                                  cResult[53] = tmp40;
                                  tmp38 = tmp40;
                                  const tmp8Result = tmp8(tmp2[12]);
                                }
                                const obj9 = { busy: tmp4, disabled: tmp6 };
                                cResult[44] = tmp4;
                                cResult[45] = tmp6;
                                cResult[46] = obj9;
                                tmp37 = obj9;
                              }
                            }
                          }
                        }
                        const obj10 = {
                          style: tmp7.control,
                          onPress: onBack,
                          disabled: tmp5,
                          accessibilityRole: "button",
                          accessibilityLabel: tmp23,
                          accessibilityState: tmp25,
                          children: tmp27,
                        };
                        const tmp33 = closure_7(closure_3, obj10);
                        cResult[38] = tmp5;
                        cResult[39] = onBack;
                        cResult[40] = tmp7.control;
                        cResult[41] = tmp25;
                        cResult[42] = tmp27;
                        cResult[43] = tmp33;
                        tmp30 = tmp33;
                      }
                      const items3 = [,];
                      class O {
                        constructor() {
                          if (!nextLoading) {
                            tmp = nextDisabled;
                            if (nextDisabled) {
                              tmp5 = null;
                              if (onNextDisabledPress != null) {
                                tmp4Result = tmp4();
                              }
                            } else {
                              tmp2 = onNext;
                              tmp3 = onNext();
                            }
                          }
                          return;
                        }
                      }
                      items3[1] = tmp7.routeControls;
                      cResult[30] = tmp10;
                      cResult[31] = tmp7.routeControls;
                      cResult[32] = items3;
                      tmp21 = items3;
                    }
                  }
                }
              }
              class O {
                constructor() {
                  if (!nextLoading) {
                    tmp = nextDisabled;
                    if (nextDisabled) {
                      tmp5 = null;
                      if (onNextDisabledPress != null) {
                        tmp4Result = tmp4();
                      }
                    } else {
                      tmp2 = onNext;
                      tmp3 = onNext();
                    }
                  }
                  return;
                }
              }
              cResult[11] = tmp6;
              cResult[12] = tmp4;
              cResult[13] = onNext;
              cResult[14] = onNextDisabledPress;
              cResult[15] = O;
              tmp20 = O;
            }
          }
          tmp11[0] = tmp7.container;
          tmp11[1] = tmp9;
          cResult[4] = tmp7.container;
          cResult[5] = tmp9;
          cResult[6] = tmp11;
          tmp10 = tmp11;
        }
      }
      const obj11 = { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom };
      cResult[0] = rect.bottom;
      cResult[1] = rect.left;
      cResult[2] = rect.right;
      cResult[3] = obj11;
      tmp9 = obj11;
      let obj = onNext(nextLoading[7]);
    }
  : (backDisabled) => {
      ({ onNext: require, onNextDisabledPress: importDefault, nextLoading } = backDisabled);
      ({ onBack, nextDisabledHint } = backDisabled);
      if (nextLoading === undefined) {
        nextLoading = false;
      }
      let flag = backDisabled.backDisabled;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = backDisabled.nextDisabled;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const activeRoute = backDisabled.activeRoute;
      const tmp = closure_9();
      const link = tmp;
      const rect = require("useSafeAreaInsets")();
      const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
      let token = require("useToken").useToken("text-subtle");
      const intl = require("util").intl;
      if (activeRoute === require("CheckpointNavigation").CheckpointRoute.PROFILE_WIDGET) {
        let PDTjLN = require("util").t.i4jeWR;
      } else {
        PDTjLN = require("util").t.PDTjLN;
      }
      let obj = require("useToken");
      if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
        const intl3 = require("util").intl;
        let stringResult1 = intl3.string(require("util").t["R3BPH+"]);
      } else {
        if (tmp4Result.isCheckpointCustomizationRoute(activeRoute)) {
          const intl2 = require("util").intl;
          stringResult1 = intl2.string(require("util").t.PDTjLN);
        }
        tmp4Result = require("CheckpointNavigation");
      }
      function handleNextPress() {
        if (!nextLoading) {
          if (flag2) {
            if (importDefault != null) {
              tmp4();
            }
          } else {
            require();
          }
        }
      }
      if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
        const obj2 = { style: null, children: null };
        const items1 = [items, tmp.homeContainer];
        obj2.style = items1;
        const obj3 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null };
        const intl4 = require("util").intl;
        obj3.label = intl4.string(require("util").t.I0v0Qv);
        obj3.onPress = handleNextPress;
        const items2 = [closure_7(require("CheckpointButton"), obj3)];
        const obj4 = { variant: "text-sm/medium", children: null };
        const tmp2Result = require("CheckpointButton");
        const intl5 = require("util").intl;
        const obj5 = {
          learnMoreHook(children, arg1) {
            return React5(
              CheckpointTextDefault,
              {
                variant: "text-sm/medium",
                style: link.link,
                onPress() {
                  const obj = closure_1_1(4571);
                  return obj.openURL(closure_1_1(2115).getArticleURL(constants.CHECKPOINT));
                },
                accessibilityRole: "link",
                children,
              },
              arg1,
            );
          },
        };
        obj4.children = intl5.format(require("../../Checkpoint2026.messages.js").hcNhyq, obj5);
        items2[1] = closure_7(require("CheckpointText"), obj4);
        obj2.children = items2;
        let tmp18Result = closure_8(link, obj2);
        const tmp2Result3 = require("CheckpointText");
      } else {
        const obj6 = { style: null, children: null };
        const items3 = [items, tmp.routeControls];
        obj6.style = items3;
        const obj7 = {
          style: tmp.control,
          onPress: onBack,
          disabled: flag,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityState: null,
          children: null,
        };
        const intl6 = require("util").intl;
        obj7.accessibilityLabel = intl6.string(require("util").t["13/7kX"]);
        const obj8 = { disabled: flag };
        obj7.accessibilityState = obj8;
        if (!flag) {
          token = closure_5;
        }
        const obj9 = { color: token };
        obj7.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj9);
        const items4 = [closure_7(flag2, obj7)];
        const obj10 = {
          Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon,
          iconPosition: "end",
          iconSize: "md",
          label: stringResult1,
          onPress: handleNextPress,
          disabled: null,
          accessibilityHint: null,
          accessibilityLabel: null,
          accessibilityState: null,
        };
        let tmp9 = flag2;
        if (!flag2) {
          tmp9 = nextLoading;
        }
        obj10.disabled = tmp9;
        let tmp10;
        if (flag2) {
          if (!nextLoading) {
            tmp10 = nextDisabledHint;
          }
        }
        obj10.accessibilityHint = tmp10;
        if (stringResult1 == null) {
          stringResult1 = stringResult;
        }
        obj10.accessibilityLabel = stringResult1;
        const obj11 = { busy: nextLoading, disabled: null };
        if (!flag2) {
          flag2 = nextLoading;
        }
        obj11.disabled = flag2;
        obj10.accessibilityState = obj11;
        items4[1] = closure_7(require("CheckpointButton"), obj10);
        obj6.children = items4;
        tmp18Result = closure_8(link, obj6);
        const tmp2Result4 = require("CheckpointButton");
      }
      return tmp18Result;
    };

// discord_app/modules/checkpoint/native/components/CheckpointNavigationControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import react_native from "../../../../../_runtime/00017_react-native.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let onNextDisabledPress, tmp2, tmp3, tmp5Result;

let CHECKPOINT_CONTROL_SIZE;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: rect,
  homeContainer: obj2,
  link: { textDecorationLine: "underline" },
  routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  control: {
    width: CHECKPOINT_CONTROL_SIZE,
    height: CHECKPOINT_CONTROL_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
};
rect = {
  position: "absolute",
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  bottom: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onNextDisabledPress) => {
      let activeRoute;
      let backDisabled;
      let items;
      let items2;
      let nextDisabled;
      let nextLoading;
      let onBack;
      let onNext;
      let obj = onNext(nextLoading[7]);
      const cResult = obj.c(58);
      ({ onBack, onNext } = onNextDisabledPress);
      onNextDisabledPress = onNextDisabledPress.onNextDisabledPress;
      ({ nextLoading, backDisabled, nextDisabled, activeRoute } = onNextDisabledPress);
      let tmp4 = undefined !== nextLoading;
      const nextDisabledHint = onNextDisabledPress.nextDisabledHint;
      if (tmp4) {
        tmp4 = nextLoading;
      }
      nextLoading = tmp4;
      const tmp5 = undefined !== backDisabled && backDisabled;
      let closure_3 = tmp6;
      const tmp7 = closure_9();
      const link = tmp7;
      const rect = onNextDisabledPress(tmp2[8])();
      if (cResult[0] === rect.bottom) {
        if (cResult[1] === rect.left) {
          let tmp9;
          if (cResult[2] === rect.right) {
            tmp9 = cResult[3];
          }
          if (cResult[4] === tmp7.container) {
            let tmp10;
            let tmp12;
            let tmp14;
            if (cResult[5] === tmp9) {
              tmp10 = cResult[6];
            }
            const tmpResult = onNext(nextLoading[9]);
            const token = tmpResult.useToken("text-subtle");
            if (cResult[7] !== activeRoute) {
              let PDTjLN;
              const intl = onNext(tmp2[10]).intl;
              const string = intl.string;
              if (activeRoute === onNext(nextLoading[11]).CheckpointRoute.PROFILE_WIDGET) {
                PDTjLN = onNext(tmp2[10]).t.i4jeWR;
              } else {
                PDTjLN = onNext(tmp2[10]).t.PDTjLN;
              }
              cResult[7] = activeRoute;
              const stringResult = string(PDTjLN);
              class O {
                constructor() {
                  tmp = nextLoading;
                  if (!tmp) {
                    tmp2 = nextDisabled;
                    if (tmp2) {
                      tmp6 = null;
                      if (onNextDisabledPress != null) {
                        tmp5Result = tmp5();
                      }
                    } else {
                      tmp3 = onNext;
                      tmp4 = onNext();
                    }
                  }
                  return;
                }
              }
              tmp12 = stringResult;
            } else {
              tmp12 = cResult[8];
            }
            if (cResult[9] !== activeRoute) {
              let stringResult1;
              if (activeRoute === onNext(nextLoading[11]).CheckpointRoute.FINALIZE_CHARACTER) {
                const intl3 = onNext(tmp2[10]).intl;
                stringResult1 = intl3.string(onNext(tmp2[10]).t["R3BPH+"]);
              } else {
                const tmpResult2 = onNext(nextLoading[11]);
                if (tmpResult2.isCheckpointCustomizationRoute(activeRoute)) {
                  const intl2 = onNext(tmp2[10]).intl;
                  stringResult1 = intl2.string(onNext(tmp2[10]).t.PDTjLN);
                }
              }
              cResult[9] = activeRoute;
              cResult[10] = stringResult1;
              tmp14 = stringResult1;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === (undefined !== nextDisabled && nextDisabled)) {
              if (cResult[12] === tmp4) {
                if (cResult[13] === onNext) {
                  let tmp16;
                  if (cResult[14] === onNextDisabledPress) {
                    tmp16 = cResult[15];
                  }
                  if (activeRoute === onNext(nextLoading[11]).CheckpointRoute.HOME) {
                    if (cResult[16] === tmp10) {
                      let tmp43;
                      let tmp45;
                      let tmp47;
                      let tmp52;
                      if (cResult[17] === tmp7.homeContainer) {
                        tmp43 = cResult[18];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = onNext(tmp2[10]).intl;
                        const stringResult2 = intl5.string(onNext(nextLoading[10]).t.I0v0Qv);
                        cResult[19] = stringResult2;
                        tmp45 = stringResult2;
                      } else {
                        tmp45 = cResult[19];
                      }
                      if (cResult[20] !== tmp16) {
                        const obj2 = { Icon: onNext(nextLoading[13]).PlayIcon, label: tmp45, onPress: tmp16 };
                        const tmp8Result = onNextDisabledPress(nextLoading[12]);
                        const tmp50 = closure_7(tmp8Result, obj2);
                        class O {
                          constructor() {
                            tmp = nextLoading;
                            if (!tmp) {
                              tmp2 = nextDisabled;
                              if (tmp2) {
                                tmp6 = null;
                                if (onNextDisabledPress != null) {
                                  tmp5Result = tmp5();
                                }
                              } else {
                                tmp3 = onNext;
                                tmp4 = onNext();
                              }
                            }
                            return;
                          }
                        }
                        cResult[20] = tmp16;
                        cResult[21] = tmp50;
                        tmp47 = tmp50;
                      } else {
                        tmp47 = cResult[21];
                      }
                      class O {
                        constructor() {
                          tmp = nextLoading;
                          if (!tmp) {
                            tmp2 = nextDisabled;
                            if (tmp2) {
                              tmp6 = null;
                              if (onNextDisabledPress != null) {
                                tmp5Result = tmp5();
                              }
                            } else {
                              tmp3 = onNext;
                              tmp4 = onNext();
                            }
                          }
                          return;
                        }
                      }
                      if (cResult[24] !== tmp51) {
                        const obj3 = { variant: "text-sm/medium", children: tmp51 };
                        cResult[24] = tmp51;
                        const tmp54 = closure_7(onNextDisabledPress(nextLoading[15]), obj3);
                        class O {
                          constructor() {
                            tmp = nextLoading;
                            if (!tmp) {
                              tmp2 = nextDisabled;
                              if (tmp2) {
                                tmp6 = null;
                                if (onNextDisabledPress != null) {
                                  tmp5Result = tmp5();
                                }
                              } else {
                                tmp3 = onNext;
                                tmp4 = onNext();
                              }
                            }
                            return;
                          }
                        }
                        tmp52 = tmp54;
                      } else {
                        tmp52 = cResult[25];
                      }
                      if (cResult[26] === tmp47) {
                        if (cResult[27] === tmp52) {
                          let tmp55;
                          if (cResult[28] === tmp43) {
                            tmp55 = cResult[29];
                          }
                          return tmp55;
                        }
                      }
                      const obj4 = { style: tmp43, children: items };
                      items = [tmp47, tmp52];
                      const tmp58 = closure_8(link, obj4);
                      cResult[26] = tmp47;
                      cResult[27] = tmp52;
                      cResult[28] = tmp43;
                      cResult[29] = tmp58;
                      tmp55 = tmp58;
                    }
                    const items1 = [tmp10, tmp7.homeContainer];
                    cResult[16] = tmp10;
                    class O {
                      constructor() {
                        tmp = nextLoading;
                        if (!tmp) {
                          tmp2 = nextDisabled;
                          if (tmp2) {
                            tmp6 = null;
                            if (onNextDisabledPress != null) {
                              tmp5Result = tmp5();
                            }
                          } else {
                            tmp3 = onNext;
                            tmp4 = onNext();
                          }
                        }
                        return;
                      }
                    }
                    cResult[18] = items1;
                    tmp43 = items1;
                  } else {
                    if (cResult[30] === tmp10) {
                      let tmp17;
                      let tmp19;
                      let tmp23;
                      if (cResult[31] === tmp7.routeControls) {
                        tmp17 = cResult[32];
                      }
                      const _Symbol = Symbol;
                      const control = tmp7.control;
                      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = onNext(tmp2[10]).intl;
                        const stringResult3 = intl4.string(onNext(nextLoading[10]).t["13/7kX"]);
                        cResult[33] = stringResult3;
                        tmp19 = stringResult3;
                      } else {
                        tmp19 = cResult[33];
                      }
                      class O {
                        constructor() {
                          tmp = nextLoading;
                          if (!tmp) {
                            tmp2 = nextDisabled;
                            if (tmp2) {
                              tmp6 = null;
                              if (onNextDisabledPress != null) {
                                tmp5Result = tmp5();
                              }
                            } else {
                              tmp3 = onNext;
                              tmp4 = onNext();
                            }
                          }
                          return;
                        }
                      }
                      let tmp22 = token;
                      if (!tmp5) {
                        tmp22 = closure_5;
                      }
                      if (cResult[36] !== tmp22) {
                        const obj5 = { color: tmp22 };
                        cResult[36] = tmp22;
                        const tmp25 = closure_7(onNext(nextLoading[18]).ArrowSmallLeftIcon, obj5);
                        class O {
                          constructor() {
                            tmp = nextLoading;
                            if (!tmp) {
                              tmp2 = nextDisabled;
                              if (tmp2) {
                                tmp6 = null;
                                if (onNextDisabledPress != null) {
                                  tmp5Result = tmp5();
                                }
                              } else {
                                tmp3 = onNext;
                                tmp4 = onNext();
                              }
                            }
                            return;
                          }
                        }
                        tmp23 = tmp25;
                      } else {
                        tmp23 = cResult[37];
                      }
                      if (cResult[38] === tmp5) {
                        if (cResult[39] === onBack) {
                          if (cResult[40] === tmp7.control) {
                            if (cResult[41] === tmp21) {
                              let tmp26;
                              if (cResult[42] === tmp23) {
                                tmp26 = cResult[43];
                              }
                              let tmp33 = tmp14;
                              if (tmp14 == null) {
                                tmp33 = tmp12;
                              }
                              class O {
                                constructor() {
                                  tmp = nextLoading;
                                  if (!tmp) {
                                    tmp2 = nextDisabled;
                                    if (tmp2) {
                                      tmp6 = null;
                                      if (onNextDisabledPress != null) {
                                        tmp5Result = tmp5();
                                      }
                                    } else {
                                      tmp3 = onNext;
                                      tmp4 = onNext();
                                    }
                                  }
                                  return;
                                }
                              }
                              if (cResult[44] === tmp4) {
                                let tmp34;
                                if (cResult[45] === (undefined !== nextDisabled && nextDisabled)) {
                                  tmp34 = cResult[46];
                                }
                                if (cResult[47] === tmp16) {
                                  if (cResult[48] === tmp14) {
                                    if (cResult[49] === ((undefined !== nextDisabled && nextDisabled) || tmp4)) {
                                      if (cResult[50] === tmp31) {
                                        if (cResult[51] === tmp33) {
                                          let tmp35;
                                          if (cResult[52] === tmp34) {
                                            tmp35 = cResult[53];
                                          }
                                          if (cResult[54] === tmp26) {
                                            if (cResult[55] === tmp35) {
                                              let tmp39;
                                              if (cResult[56] === tmp17) {
                                                tmp39 = cResult[57];
                                              }
                                              return tmp39;
                                            }
                                          }
                                          const obj6 = { style: tmp17, children: items2 };
                                          items2 = [,];
                                          class O {
                                            constructor() {
                                              tmp = nextLoading;
                                              if (!tmp) {
                                                tmp2 = nextDisabled;
                                                if (tmp2) {
                                                  tmp6 = null;
                                                  if (onNextDisabledPress != null) {
                                                    tmp5Result = tmp5();
                                                  }
                                                } else {
                                                  tmp3 = onNext;
                                                  tmp4 = onNext();
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          items2[1] = tmp35;
                                          const tmp42 = closure_8(link, obj6);
                                          cResult[54] = tmp26;
                                          cResult[55] = tmp35;
                                          cResult[56] = tmp17;
                                          cResult[57] = tmp42;
                                          tmp39 = tmp42;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj7 = {
                                  Icon: onNext(nextLoading[19]).ArrowSmallRightIcon,
                                  iconPosition: "end",
                                  iconSize: "md",
                                  label: tmp14,
                                  onPress: null,
                                  disabled: (undefined !== nextDisabled && nextDisabled) || tmp4,
                                  accessibilityHint: tmp31,
                                  accessibilityLabel: tmp33,
                                  accessibilityState: tmp34,
                                };
                                const tmp8Result2 = onNextDisabledPress(nextLoading[12]);
                                class O {
                                  constructor() {
                                    tmp = nextLoading;
                                    if (!tmp) {
                                      tmp2 = nextDisabled;
                                      if (tmp2) {
                                        tmp6 = null;
                                        if (onNextDisabledPress != null) {
                                          tmp5Result = tmp5();
                                        }
                                      } else {
                                        tmp3 = onNext;
                                        tmp4 = onNext();
                                      }
                                    }
                                    return;
                                  }
                                }
                                const tmp38 = closure_7(tmp8Result2, obj7);
                                cResult[47] = tmp16;
                                cResult[48] = tmp14;
                                cResult[49] = (undefined !== nextDisabled && nextDisabled) || tmp4;
                                cResult[50] = tmp31;
                                cResult[51] = tmp33;
                                cResult[52] = tmp34;
                                cResult[53] = tmp38;
                                tmp35 = tmp38;
                              }
                              const obj8 = { busy: tmp4, disabled: undefined !== nextDisabled && nextDisabled };
                              cResult[44] = tmp4;
                              cResult[45] = undefined !== nextDisabled && nextDisabled;
                              cResult[46] = obj8;
                              tmp34 = obj8;
                            }
                          }
                        }
                      }
                      const obj9 = {
                        style: control,
                        onPress: onBack,
                        disabled: tmp5,
                        accessibilityRole: "button",
                        accessibilityLabel: tmp19,
                        accessibilityState: tmp21,
                        children: tmp23,
                      };
                      const tmp29 = closure_7(closure_3, obj9);
                      cResult[38] = tmp5;
                      cResult[39] = onBack;
                      cResult[40] = tmp7.control;
                      cResult[41] = tmp21;
                      cResult[42] = tmp23;
                      cResult[43] = tmp29;
                      tmp26 = tmp29;
                    }
                    const items3 = [tmp10, tmp7.routeControls];
                    cResult[30] = tmp10;
                    class O {
                      constructor() {
                        tmp = nextLoading;
                        if (!tmp) {
                          tmp2 = nextDisabled;
                          if (tmp2) {
                            tmp6 = null;
                            if (onNextDisabledPress != null) {
                              tmp5Result = tmp5();
                            }
                          } else {
                            tmp3 = onNext;
                            tmp4 = onNext();
                          }
                        }
                        return;
                      }
                    }
                    cResult[32] = items3;
                    tmp17 = items3;
                  }
                }
              }
            }
            class O {
              constructor() {
                tmp = nextLoading;
                if (!tmp) {
                  tmp2 = nextDisabled;
                  if (tmp2) {
                    tmp6 = null;
                    if (onNextDisabledPress != null) {
                      tmp5Result = tmp5();
                    }
                  } else {
                    tmp3 = onNext;
                    tmp4 = onNext();
                  }
                }
                return;
              }
            }
            cResult[11] = undefined !== nextDisabled && nextDisabled;
            cResult[12] = tmp4;
            cResult[13] = onNext;
            cResult[14] = onNextDisabledPress;
            cResult[15] = O;
            tmp16 = O;
          }
          const items4 = [tmp7.container, tmp9];
          cResult[4] = tmp7.container;
          cResult[5] = tmp9;
          cResult[6] = items4;
          tmp10 = items4;
        }
      }
      const obj10 = { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom };
      cResult[0] = rect.bottom;
      cResult[1] = rect.left;
      cResult[2] = rect.right;
      cResult[3] = obj10;
      tmp9 = obj10;
    }
  : (backDisabled) => {
      let ArrowSmallLeftIcon;
      let PDTjLN;
      let intl4;
      let intl5;
      let intl6;
      let items1;
      let items2;
      let items3;
      let items4;
      let nextDisabledHint;
      let nextLoading;
      let obj11;
      let obj5;
      let obj8;
      let obj9;
      let onBack;
      let stringResult1;
      let tmp17Result;
      let tmp9;
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
      let obj = require("useToken");
      let token = obj.useToken("text-subtle");
      const intl = require("intl").intl;
      const string = intl.string;
      if (activeRoute === require("CheckpointNavigation").CheckpointRoute.PROFILE_WIDGET) {
        PDTjLN = require("intl").t.i4jeWR;
      } else {
        PDTjLN = require("intl").t.PDTjLN;
      }
      const stringResult = string(PDTjLN);
      if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
        const intl3 = require("intl").intl;
        stringResult1 = intl3.string(require("intl").t["R3BPH+"]);
      } else {
        const tmp4Result = require("CheckpointNavigation");
        if (tmp4Result.isCheckpointCustomizationRoute(activeRoute)) {
          const intl2 = require("intl").intl;
          stringResult1 = intl2.string(require("intl").t.PDTjLN);
        }
      }
      function handleNextPress() {
        if (!nextLoading) {
          if (flag2) {
            if (importDefault != null) {
              tmp5();
            }
          } else {
            require();
          }
        }
      }
      if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
        const obj2 = { style: items1, children: items2 };
        items1 = [items, tmp.homeContainer];
        const obj3 = {
          Icon: require("PlayIcon").PlayIcon,
          label: intl4.string(require("intl").t.I0v0Qv),
          onPress: handleNextPress,
        };
        const tmp2Result = require("CheckpointButton");
        intl4 = require("intl").intl;
        items2 = [closure_7(tmp2Result, obj3)];
        const obj4 = {
          variant: "text-sm/medium",
          children: intl5.format(require("../../Checkpoint2026.messages.js").hcNhyq, obj5),
        };
        const tmp2Result3 = require("CheckpointText");
        intl5 = require("intl").intl;
        obj5 = {
          learnMoreHook(children, id) {
            let obj = {
              variant: "text-sm/medium",
              style: link.link,
              onPress() {
                const openURL = closure_1_1(nextLoading[16]).openURL;
                closure_1_1(nextLoading[16]);
                const obj = closure_1_1(nextLoading[17]);
                return openURL(obj.getArticleURL(constants.CHECKPOINT));
              },
              accessibilityRole: "link",
              children,
            };
            return metroImportDefault(CheckpointTextDefault, obj, id);
          },
        };
        items2[1] = closure_7(tmp2Result3, obj4);
        tmp17Result = closure_8(link, obj2);
      } else {
        const obj6 = { style: items3, children: items4 };
        items3 = [items, tmp.routeControls];
        const obj7 = {
          style: tmp.control,
          onPress: onBack,
          disabled: flag,
          accessibilityRole: "button",
          accessibilityLabel: intl6.string(require("intl").t["13/7kX"]),
          accessibilityState: obj8,
          children: closure_7(ArrowSmallLeftIcon, obj9),
        };
        intl6 = require("intl").intl;
        obj8 = { disabled: flag };
        ArrowSmallLeftIcon = require("ArrowSmallLeftIcon").ArrowSmallLeftIcon;
        const tmp18 = link;
        const tmp20 = flag2;
        if (!flag) {
          token = closure_5;
        }
        obj9 = { color: token };
        items4 = [closure_7(tmp20, obj7)];
        const obj10 = {
          Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon,
          iconPosition: "end",
          iconSize: "md",
          label: stringResult1,
          onPress: handleNextPress,
          disabled: flag2 || nextLoading,
          accessibilityHint: tmp9,
          accessibilityLabel: stringResult1,
          accessibilityState: obj11,
        };
        tmp9 = undefined;
        const tmp2Result4 = require("CheckpointButton");
        if (flag2) {
          if (!nextLoading) {
            tmp9 = nextDisabledHint;
          }
        }
        if (stringResult1 == null) {
          stringResult1 = stringResult;
        }
        obj11 = { busy: nextLoading, disabled: flag2 };
        if (!flag2) {
          flag2 = nextLoading;
        }
        items4[1] = closure_7(tmp2Result4, obj10);
        tmp17Result = closure_8(tmp18, obj6);
      }
      return tmp17Result;
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default tmp6;

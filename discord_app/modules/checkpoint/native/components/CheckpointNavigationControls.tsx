// discord_app/modules/checkpoint/native/components/CheckpointNavigationControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import showNitroLockedToastDefault from "../showNitroLockedToast.tsx";
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
let obj = {
  container: null,
  homeContainer: null,
  link: null,
  routeControls: null,
  control: null,
  editControl: null,
  editIcon: null,
  share: null,
};
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
obj.editControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
obj.editIcon = { width: 20, height: 20 };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.share = { paddingHorizontal: nativeDefault.space.PX_64 };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_64 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointNavigationControls(arg0) {
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
          nitroLockedMessage = onNext(13020).getNitroLockedMessage(nextBlockedTrait);
          const tmpResult = onNext(13020);
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
                  const _Symbol = Symbol;
                  const token = onNext(5252).useToken("text-subtle");
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = onNext(1128).intl;
                    const stringResult = intl.string(onNext(1128).t.PDTjLN);
                    cResult[14] = stringResult;
                    let tmp17 = stringResult;
                  } else {
                    tmp17 = cResult[14];
                  }
                  if (cResult[15] !== activeRoute) {
                    if (activeRoute === onNext(6363).CheckpointRoute.FINALIZE_CHARACTER) {
                      const intl3 = onNext(1128).intl;
                      let stringResult1 = intl3.string(onNext(1128).t["R3BPH+"]);
                    } else {
                      if (tmpResult4.isCheckpointCustomizationRoute(activeRoute)) {
                        const intl2 = onNext(1128).intl;
                        stringResult1 = intl2.string(onNext(1128).t.PDTjLN);
                      }
                      tmpResult4 = onNext(6363);
                    }
                    cResult[15] = activeRoute;
                    cResult[16] = stringResult1;
                  } else if (activeRoute === onNext(6363).CheckpointRoute.HOME) {
                    if (cResult[17] === tmp14) {
                      if (cResult[18] === tmp7.homeContainer) {
                        let tmp68 = cResult[19];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl7 = onNext(1128).intl;
                        const stringResult2 = intl7.string(onNext(1128).t.I0v0Qv);
                        cResult[20] = stringResult2;
                        let tmp69 = stringResult2;
                      } else {
                        tmp69 = cResult[20];
                      }
                      if (cResult[21] !== tmp6) {
                        const obj2 = { disabled: tmp6 };
                        cResult[21] = tmp6;
                        cResult[22] = obj2;
                        let tmp71 = obj2;
                      } else {
                        tmp71 = cResult[22];
                      }
                      if (cResult[23] === tmp11) {
                        if (cResult[24] === tmp6) {
                          if (cResult[25] === tmp71) {
                            let tmp72 = cResult[26];
                          }
                          if (cResult[27] !== tmp7.link) {
                            const intl8 = onNext(1128).intl;
                            const obj4 = {
                              learnMoreHook(children, arg1) {
                                return React5(
                                  CheckpointTextDefault,
                                  {
                                    variant: "text-sm/medium",
                                    style: link.link,
                                    onPress() {
                                      const obj = nextBlockedTrait(5660);
                                      return obj.openURL(nextBlockedTrait(2067).getArticleURL(constants.CHECKPOINT));
                                    },
                                    accessibilityRole: "link",
                                    children,
                                  },
                                  arg1,
                                );
                              },
                            };
                            const formatResult = intl8.format(nextBlockedTrait(3088).hcNhyq, obj4);
                            cResult[27] = tmp7.link;
                            cResult[28] = formatResult;
                            let tmp76 = formatResult;
                          } else {
                            tmp76 = cResult[28];
                          }
                          if (cResult[29] !== tmp76) {
                            const obj5 = { variant: "text-sm/medium", children: tmp76 };
                            const tmp80 = closure_7(nextBlockedTrait(12967), obj5);
                            cResult[29] = tmp76;
                            cResult[30] = tmp80;
                            let tmp78 = tmp80;
                          } else {
                            tmp78 = cResult[30];
                          }
                          if (cResult[31] === tmp68) {
                            if (cResult[32] === tmp72) {
                              if (cResult[33] === tmp78) {
                                let tmp81 = cResult[34];
                              }
                              return tmp81;
                            }
                          }
                          const obj6 = { style: tmp68, children: null };
                          const items = [tmp72, tmp78];
                          obj6.children = items;
                          const tmp84 = closure_8(link, obj6);
                          cResult[31] = tmp68;
                          cResult[32] = tmp72;
                          cResult[33] = tmp78;
                          cResult[34] = tmp84;
                          tmp81 = tmp84;
                        }
                      }
                      const obj7 = {
                        Icon: onNext(8765).PlayIcon,
                        label: tmp69,
                        onPress: tmp11,
                        disabled: tmp6,
                        accessibilityState: tmp71,
                      };
                      const tmp75 = closure_7(nextBlockedTrait(13031), obj7);
                      cResult[23] = tmp11;
                      cResult[24] = tmp6;
                      cResult[25] = tmp71;
                      cResult[26] = tmp75;
                      tmp72 = tmp75;
                      const tmp12Result = nextBlockedTrait(13031);
                    }
                    const items1 = [tmp14, tmp7.homeContainer];
                    cResult[17] = tmp14;
                    cResult[18] = tmp7.homeContainer;
                    cResult[19] = items1;
                    tmp68 = items1;
                  } else if (activeRoute === onNext(6363).CheckpointRoute.SUMMARY) {
                    if (cResult[35] === tmp14) {
                      if (cResult[36] === tmp7.routeControls) {
                        let tmp47 = cResult[37];
                      }
                      if (cResult[38] !== color) {
                        const obj8 = { borderColor: color };
                        cResult[38] = color;
                        cResult[39] = obj8;
                        let tmp48 = obj8;
                      } else {
                        tmp48 = cResult[39];
                      }
                      if (cResult[40] === tmp7.control) {
                        if (cResult[41] === tmp7.editControl) {
                          if (cResult[42] === tmp48) {
                            let tmp49 = cResult[43];
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl5 = onNext(1128).intl;
                            const stringResult3 = intl5.string(onNext(1128).t.bt75uw);
                            cResult[44] = stringResult3;
                            let tmp50 = stringResult3;
                          } else {
                            tmp50 = cResult[44];
                          }
                          if (cResult[45] === color) {
                            if (cResult[46] === tmp7.editIcon) {
                              let tmp52 = cResult[47];
                            }
                            if (cResult[48] === onBack) {
                              if (cResult[49] === tmp49) {
                                if (cResult[50] === tmp52) {
                                  let tmp55 = cResult[51];
                                }
                                const _Symbol4 = Symbol;
                                if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl6 = onNext(1128).intl;
                                  const stringResult4 = intl6.string(onNext(1128).t.RDE0Sc);
                                  cResult[52] = stringResult4;
                                  let tmp59 = stringResult4;
                                } else {
                                  tmp59 = cResult[52];
                                }
                                if (cResult[53] === color) {
                                  if (cResult[54] === onShare) {
                                    if (cResult[55] === shadowColor) {
                                      if (cResult[56] === tmp7.share) {
                                        let tmp61 = cResult[57];
                                      }
                                      if (cResult[58] === tmp47) {
                                        if (cResult[59] === tmp55) {
                                          if (cResult[60] === tmp61) {
                                            let tmp64 = cResult[61];
                                          }
                                          return tmp64;
                                        }
                                      }
                                      const obj9 = { style: tmp47, children: null };
                                      const items2 = [tmp55, tmp61];
                                      obj9.children = items2;
                                      const tmp67 = closure_8(link, obj9);
                                      cResult[58] = tmp47;
                                      cResult[59] = tmp55;
                                      cResult[60] = tmp61;
                                      cResult[61] = tmp67;
                                      tmp64 = tmp67;
                                    }
                                  }
                                }
                                const obj10 = {
                                  label: tmp59,
                                  onPress: onShare,
                                  color,
                                  borderColor: color,
                                  shadowColor,
                                  style: tmp7.share,
                                };
                                const tmp63 = closure_7(nextBlockedTrait(13031), obj10);
                                cResult[53] = color;
                                cResult[54] = onShare;
                                cResult[55] = shadowColor;
                                cResult[56] = tmp7.share;
                                cResult[57] = tmp63;
                                tmp61 = tmp63;
                              }
                            }
                            const obj11 = {
                              style: tmp49,
                              onPress: onBack,
                              accessibilityRole: "button",
                              accessibilityLabel: tmp50,
                              children: tmp52,
                            };
                            const tmp58 = closure_7(closure_3, obj11);
                            cResult[48] = onBack;
                            cResult[49] = tmp49;
                            cResult[50] = tmp52;
                            cResult[51] = tmp58;
                            tmp55 = tmp58;
                          }
                          const obj12 = { size: "custom", color, style: tmp7.editIcon };
                          const tmp54 = closure_7(onNext(10120).PencilIcon, obj12);
                          cResult[45] = color;
                          cResult[46] = tmp7.editIcon;
                          cResult[47] = tmp54;
                          tmp52 = tmp54;
                        }
                      }
                      const items3 = [, ,];
                      ({ control: arr5[0], editControl: arr5[1] } = tmp7);
                      items3[2] = tmp48;
                      cResult[40] = tmp7.control;
                      cResult[41] = tmp7.editControl;
                      cResult[42] = tmp48;
                      cResult[43] = items3;
                      tmp49 = items3;
                    }
                    const items4 = [tmp14, tmp7.routeControls];
                    cResult[35] = tmp14;
                    cResult[36] = tmp7.routeControls;
                    cResult[37] = items4;
                    tmp47 = items4;
                  } else {
                    if (cResult[62] === tmp14) {
                      if (cResult[63] === tmp7.routeControls) {
                        let tmp22 = cResult[64];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[65] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = onNext(1128).intl;
                        const stringResult5 = intl4.string(onNext(1128).t["13/7kX"]);
                        cResult[65] = stringResult5;
                        let tmp23 = stringResult5;
                      } else {
                        tmp23 = cResult[65];
                      }
                      if (cResult[66] !== tmp4) {
                        const obj13 = { disabled: tmp4 };
                        cResult[66] = tmp4;
                        cResult[67] = obj13;
                        let tmp25 = obj13;
                      } else {
                        tmp25 = cResult[67];
                      }
                      let tmp26 = token;
                      if (!tmp4) {
                        tmp26 = closure_5;
                      }
                      if (cResult[68] !== tmp26) {
                        const obj14 = { color: tmp26 };
                        const tmp29 = closure_7(onNext(10750).ArrowSmallLeftIcon, obj14);
                        cResult[68] = tmp26;
                        cResult[69] = tmp29;
                        let tmp27 = tmp29;
                      } else {
                        tmp27 = cResult[69];
                      }
                      if (cResult[70] === tmp4) {
                        if (cResult[71] === onBack) {
                          if (cResult[72] === tmp7.control) {
                            if (cResult[73] === tmp25) {
                              if (cResult[74] === tmp27) {
                                let tmp30 = cResult[75];
                              }
                              let tmp34 = tmp5;
                              if (!tmp5) {
                                tmp34 = tmp6;
                              }
                              let tmp35;
                              if (tmp5) {
                                if (!tmp6) {
                                  tmp35 = tmp8;
                                }
                              }
                              let tmp37 = tmp19;
                              if (tmp19 == null) {
                                tmp37 = tmp17;
                              }
                              if (!tmp5) {
                                tmp5 = tmp6;
                              }
                              if (cResult[76] !== tmp5) {
                                const obj15 = { disabled: tmp5 };
                                cResult[76] = tmp5;
                                cResult[77] = obj15;
                                let tmp38 = obj15;
                              } else {
                                tmp38 = cResult[77];
                              }
                              if (cResult[78] === tmp11) {
                                if (cResult[79] === tmp19) {
                                  if (cResult[80] === tmp6) {
                                    if (cResult[81] === tmp34) {
                                      if (cResult[82] === tmp35) {
                                        if (cResult[83] === tmp37) {
                                          if (cResult[84] === tmp38) {
                                            let tmp39 = cResult[85];
                                          }
                                          if (cResult[86] === tmp22) {
                                            if (cResult[87] === tmp30) {
                                              if (cResult[88] === tmp39) {
                                                let tmp43 = cResult[89];
                                              }
                                              return tmp43;
                                            }
                                          }
                                          const obj16 = { style: tmp22, children: null };
                                          const items5 = [tmp30, tmp39];
                                          obj16.children = items5;
                                          const tmp46 = closure_8(link, obj16);
                                          cResult[86] = tmp22;
                                          cResult[87] = tmp30;
                                          cResult[88] = tmp39;
                                          cResult[89] = tmp46;
                                          tmp43 = tmp46;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj17 = {
                                Icon: onNext(10821).ArrowSmallRightIcon,
                                iconPosition: "end",
                                iconSize: "md",
                                label: tmp19,
                                onPress: tmp11,
                                disabled: tmp34,
                                loading: tmp6,
                                accessibilityHint: tmp35,
                                accessibilityLabel: tmp37,
                                accessibilityState: tmp38,
                              };
                              const tmp42 = closure_7(nextBlockedTrait(13031), obj17);
                              cResult[78] = tmp11;
                              cResult[79] = tmp19;
                              cResult[80] = tmp6;
                              cResult[81] = tmp34;
                              cResult[82] = tmp35;
                              cResult[83] = tmp37;
                              cResult[84] = tmp38;
                              cResult[85] = tmp42;
                              tmp39 = tmp42;
                              const tmp12Result2 = nextBlockedTrait(13031);
                            }
                          }
                        }
                      }
                      const obj18 = {
                        style: tmp7.control,
                        onPress: onBack,
                        disabled: tmp4,
                        accessibilityRole: "button",
                        accessibilityLabel: tmp23,
                        accessibilityState: tmp25,
                        children: tmp27,
                      };
                      const tmp33 = closure_7(closure_3, obj18);
                      cResult[70] = tmp4;
                      cResult[71] = onBack;
                      cResult[72] = tmp7.control;
                      cResult[73] = tmp25;
                      cResult[74] = tmp27;
                      cResult[75] = tmp33;
                      tmp30 = tmp33;
                    }
                    const items6 = [tmp14, tmp7.routeControls];
                    cResult[62] = tmp14;
                    cResult[63] = tmp7.routeControls;
                    cResult[64] = items6;
                    tmp22 = items6;
                  }
                  const tmpResult3 = onNext(5252);
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
    }
  : function CheckpointNavigationControls(nextDisabled) {
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
        const obj4 = {
          Icon: require("PlayIcon").PlayIcon,
          label: null,
          onPress: null,
          disabled: null,
          accessibilityState: null,
        };
        const intl6 = require("util").intl;
        obj4.label = intl6.string(require("util").t.I0v0Qv);
        obj4.onPress = handleNextPress;
        obj4.disabled = flag2;
        const obj5 = { disabled: flag2 };
        obj4.accessibilityState = obj5;
        const items2 = [closure_7(tmp5(tmp6[13]), obj4)];
        const obj6 = { variant: "text-sm/medium", children: null };
        const tmp5Result = tmp5(tmp6[13]);
        const intl7 = require("util").intl;
        const obj7 = {
          learnMoreHook(children, arg1) {
            return React5(
              CheckpointTextDefault,
              {
                variant: "text-sm/medium",
                style: link.link,
                onPress() {
                  const obj = flag(5660);
                  return obj.openURL(flag(2067).getArticleURL(constants.CHECKPOINT));
                },
                accessibilityRole: "link",
                children,
              },
              arg1,
            );
          },
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
        const obj9 = {
          style: null,
          onPress: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const items4 = [, ,];
        ({ control: arr4[0], editControl: arr4[1] } = tmp);
        const obj10 = { borderColor: color };
        items4[2] = obj10;
        obj9.style = items4;
        obj9.onPress = onBack;
        const intl4 = require("util").intl;
        obj9.accessibilityLabel = intl4.string(require("util").t.bt75uw);
        const obj11 = { size: "custom", color, style: tmp.editIcon };
        obj9.children = closure_7(require("PencilIcon").PencilIcon, obj11);
        const items5 = [closure_7(nextBlockedTrait, obj9)];
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
        const obj14 = {
          style: tmp.control,
          onPress: onBack,
          disabled: backDisabled,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityState: null,
          children: null,
        };
        const intl8 = require("util").intl;
        obj14.accessibilityLabel = intl8.string(require("util").t["13/7kX"]);
        const obj15 = { disabled: backDisabled };
        obj14.accessibilityState = obj15;
        if (!backDisabled) {
          token = closure_5;
        }
        const obj16 = { color: token };
        obj14.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj16);
        const items7 = [closure_7(nextBlockedTrait, obj14)];
        const obj17 = {
          Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon,
          iconPosition: "end",
          iconSize: "md",
          label: stringResult1,
          onPress: handleNextPress,
          disabled: null,
          loading: null,
          accessibilityHint: null,
          accessibilityLabel: null,
          accessibilityState: null,
        };
        let tmp12 = flag;
        if (!flag) {
          tmp12 = flag2;
        }
        obj17.disabled = tmp12;
        obj17.loading = flag2;
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
    };

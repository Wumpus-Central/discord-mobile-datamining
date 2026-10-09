// discord_app/modules/quests/native/QuestOrbMultiplierPerkPill.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import QuestOrbMultiplierUtils from "../utils/QuestOrbMultiplierUtils.tsx";
import hooks_QuestHooks from "../hooks/QuestHooks.tsx";
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
const createStyles = fn(5091);
let obj2 = {
  fullGradientContainer: {
    borderRadius: nativeDefault.radii.round,
    overflow: "hidden",
    minHeight: 19,
    backgroundColor: "transparent",
  },
  fullGradient: null,
  fullGradientContent: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderRadius = nativeDefault.radii.round;
obj2.fullGradient = obj4;
let obj3 = {
  borderRadius: nativeDefault.radii.round,
  overflow: "hidden",
  minHeight: 19,
  backgroundColor: "transparent",
};
obj2.fullGradientContent = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  gap: 4,
  minHeight: 19,
};
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  gap: 4,
  minHeight: 19,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestOrbMultiplierPerkPill(onPress) {
      const cResult = onPress(questOrbRewardMultiplier[7]).c(43);
      onPress = onPress.onPress;
      const orbMultiplierEligibility = onPress.orbMultiplierEligibility;
      const tmp4 = closure_11();
      const obj = onPress(questOrbRewardMultiplier[7]);
      const theme = onPress(questOrbRewardMultiplier[8]).useTheme();
      const obj2 = onPress(questOrbRewardMultiplier[8]);
      const obj3 = onPress(questOrbRewardMultiplier[9]);
      const isThemeDarkResult = onPress(questOrbRewardMultiplier[9]).isThemeDark(theme);
      const token = onPress(questOrbRewardMultiplier[10]).useToken(
        orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_PINK_START,
        ThemeTypes.DARK,
      );
      const obj4 = onPress(questOrbRewardMultiplier[10]);
      const token1 = onPress(questOrbRewardMultiplier[10]).useToken(
        orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
        ThemeTypes.DARK,
      );
      const obj5 = onPress(questOrbRewardMultiplier[10]);
      const token2 = onPress(questOrbRewardMultiplier[10]).useToken(
        orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.BACKGROUND_BASE_LOWEST,
        ThemeTypes.DARK,
      );
      if (cResult[0] !== token) {
        const hexOpacityToRgbaResult = tmp(tmp2[11]).hexOpacityToRgba(token, 1);
        cResult[0] = token;
        cResult[1] = hexOpacityToRgbaResult;
        let tmp11 = hexOpacityToRgbaResult;
        const tmpResult = tmp(tmp2[11]);
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] !== token1) {
        const hexOpacityToRgbaResult1 = tmp(tmp2[11]).hexOpacityToRgba(token1, 0.5);
        cResult[2] = token1;
        cResult[3] = hexOpacityToRgbaResult1;
        let tmp13 = hexOpacityToRgbaResult1;
        const tmpResult5 = tmp(tmp2[11]);
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === tmp11) {
        if (cResult[5] === tmp13) {
          let tmp15 = cResult[6];
        }
        const token3 = tmp(tmp2[10]).useToken(tmp7(tmp2[5]).colors.BACKGROUND_BRAND);
        const tmpResult6 = tmp(tmp2[10]);
        questOrbRewardMultiplier = tmp(tmp2[12]).useQuestOrbRewardMultiplier(onPress.questId);
        if (cResult[7] !== orbMultiplierEligibility) {
          const result = tmp(tmp2[13]).shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
          cResult[7] = orbMultiplierEligibility;
          cResult[8] = result;
          let tmp18 = result;
          const tmpResult8 = tmp(tmp2[13]);
        } else {
          tmp18 = cResult[8];
        }
        const tmp20 = orbMultiplierEligibility === tmp(tmp2[13]).QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
        let tmp21 = token3;
        if (!tmp20) {
          let str = "transparent";
          if (!isThemeDarkResult) {
            str = token2;
          }
          tmp21 = str;
        }
        if (null == questOrbRewardMultiplier) {
          return null;
        } else {
          if (cResult[9] === questOrbRewardMultiplier) {
            if (cResult[10] === onPress) {
              if (cResult[11] === orbMultiplierEligibility) {
                let tmp23 = cResult[12];
              }
              if (cResult[13] === questOrbRewardMultiplier) {
                if (cResult[14] === tmp18) {
                  if (cResult[16] !== tmp20) {
                    let tmp28 = !tmp20;
                    if (!tmp20) {
                      tmp28 = closure_6(tmp(tmp2[16]).NitroWheelIcon, { size: "xs", color: "white" });
                    }
                    cResult[16] = tmp20;
                    cResult[17] = tmp28;
                    let tmp27 = tmp28;
                  } else {
                    tmp27 = cResult[17];
                  }
                  if (cResult[18] !== cResult[15]) {
                    const obj7 = { variant: "text-xs/semibold", color: "text-overlay-light", children: tmp24 };
                    const tmp32 = closure_6(tmp(tmp2[17]).Text, obj7);
                    cResult[18] = tmp24;
                    cResult[19] = tmp32;
                    let tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[19];
                  }
                  if (cResult[20] === tmp27) {
                    if (cResult[21] === tmp30) {
                      let tmp33 = cResult[22];
                    }
                    if (cResult[23] !== tmp21) {
                      const obj8 = { backgroundColor: tmp21 };
                      cResult[23] = tmp21;
                      cResult[24] = obj8;
                      let tmp37 = obj8;
                    } else {
                      tmp37 = cResult[24];
                    }
                    if (cResult[25] === tmp4.fullGradientContainer) {
                      if (cResult[26] === tmp37) {
                        let tmp38 = cResult[27];
                      }
                      if (cResult[28] === tmp15) {
                        if (cResult[29] === tmp20) {
                          if (cResult[30] === tmp4.fullGradient) {
                            let tmp39 = cResult[31];
                          }
                          if (cResult[32] === tmp33) {
                            if (cResult[33] === tmp4.fullGradientContent) {
                              let tmp44 = cResult[34];
                            }
                            if (cResult[35] === tmp38) {
                              if (cResult[36] === tmp39) {
                                if (cResult[37] === tmp44) {
                                  let tmp48 = cResult[38];
                                }
                                if (cResult[39] === tmp23) {
                                  if (cResult[40] === tmp48) {
                                    if (cResult[41] === tmp24) {
                                      let tmp52 = cResult[42];
                                    }
                                    return tmp52;
                                  }
                                }
                                const obj9 = {
                                  onPress: tmp23,
                                  activeOpacity: 0.8,
                                  accessibilityRole: "button",
                                  accessibilityLabel: tmp24,
                                  children: tmp48,
                                };
                                const tmp54 = closure_6(tmp(tmp2[19]).PressableOpacity, obj9);
                                cResult[39] = tmp23;
                                cResult[40] = tmp48;
                                cResult[41] = tmp24;
                                cResult[42] = tmp54;
                                tmp52 = tmp54;
                              }
                            }
                            const obj10 = { style: tmp38, children: null };
                            const items = [tmp39, tmp44];
                            obj10.children = items;
                            const tmp51 = closure_8(closure_4, obj10);
                            cResult[35] = tmp38;
                            cResult[36] = tmp39;
                            cResult[37] = tmp44;
                            cResult[38] = tmp51;
                            tmp48 = tmp51;
                          }
                          const obj11 = { style: tmp4.fullGradientContent, children: tmp33 };
                          const tmp47 = closure_6(closure_4, obj11);
                          cResult[32] = tmp33;
                          cResult[33] = tmp4.fullGradientContent;
                          cResult[34] = tmp47;
                          tmp44 = tmp47;
                        }
                      }
                      let tmp40 = !tmp20;
                      if (!tmp20) {
                        const obj12 = { style: tmp4.fullGradient, colors: tmp15, start, end };
                        tmp40 = closure_6(tmp7(tmp2[18]), obj12);
                      }
                      cResult[28] = tmp15;
                      cResult[29] = tmp20;
                      cResult[30] = tmp4.fullGradient;
                      cResult[31] = tmp40;
                      tmp39 = tmp40;
                    }
                    const items1 = [tmp4.fullGradientContainer, tmp37];
                    cResult[25] = tmp4.fullGradientContainer;
                    cResult[26] = tmp37;
                    cResult[27] = items1;
                    tmp38 = items1;
                  }
                  const obj13 = { children: null };
                  const items2 = [tmp27, tmp30];
                  obj13.children = items2;
                  const tmp36 = closure_8(closure_7, obj13);
                  cResult[20] = tmp27;
                  cResult[21] = tmp30;
                  cResult[22] = tmp36;
                  tmp33 = tmp36;
                }
              }
              const intl = tmp(tmp2[15]).intl;
              const formatToPlainString = intl.formatToPlainString;
              let t = tmp(tmp2[15]).t;
              if (tmp18) {
                t = { bonusOrbMultiplier: questOrbRewardMultiplier };
                let formatToPlainStringResult = formatToPlainString(t.l2UfLG, t);
              } else {
                const obj14 = { bonusOrbMultiplier: questOrbRewardMultiplier };
                formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj14);
              }
              cResult[13] = questOrbRewardMultiplier;
              cResult[14] = tmp18;
              cResult[15] = formatToPlainStringResult;
            }
          }
          function handlePress() {
            if (null != questOrbRewardMultiplier) {
              openQuestOrbMultiplierPerkInfoActionSheetDefault(tmp, orbMultiplierEligibility);
              if (onPress != null) {
                onPress();
              }
            }
          }
          cResult[9] = questOrbRewardMultiplier;
          cResult[10] = onPress;
          cResult[11] = orbMultiplierEligibility;
          cResult[12] = handlePress;
          tmp23 = handlePress;
        }
        const tmpResult7 = tmp(tmp2[12]);
      }
      const items3 = [tmp11, tmp13];
      cResult[4] = tmp11;
      cResult[5] = tmp13;
      cResult[6] = items3;
      tmp15 = items3;
      const obj6 = onPress(questOrbRewardMultiplier[10]);
    }
  : function QuestOrbMultiplierPerkPill(questId) {
      ({ onPress: require, orbMultiplierEligibility } = questId);
      let questOrbRewardMultiplier;
      const tmp = closure_11();
      const theme = useTheme.useTheme();
      const isThemeDarkResult = themes.isThemeDark(theme);
      dependencyMap = isThemeDarkResult;
      const token = useToken.useToken(
        orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_PINK_START,
        questOrbRewardMultiplier.DARK,
      );
      const token1 = useToken.useToken(
        orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
        questOrbRewardMultiplier.DARK,
      );
      const token2 = useToken.useToken(
        orbMultiplierEligibility(587).colors.BACKGROUND_BASE_LOWEST,
        questOrbRewardMultiplier.DARK,
      );
      const items = [ColorUtils.hexOpacityToRgba(token, 1)];
      items[1] = ColorUtils.hexOpacityToRgba(token1, 0.5);
      const token3 = useToken.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BRAND);
      questOrbRewardMultiplier = hooks_QuestHooks.useQuestOrbRewardMultiplier(questId.questId);
      const result = QuestOrbMultiplierUtils.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
      const tmp13 =
        orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
      closure_6 = tmp13;
      const items1 = [tmp13, token2, token3, isThemeDarkResult];
      if (null == questOrbRewardMultiplier) {
        return null;
      } else {
        const intl = util.intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = util.t;
        if (result) {
          const obj11 = { bonusOrbMultiplier: questOrbRewardMultiplier };
          let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj11);
        } else {
          const obj12 = { bonusOrbMultiplier: questOrbRewardMultiplier };
          formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj12);
        }
        let tmp21Result = !tmp13;
        let tmp19 = tmp21Result;
        if (!tmp13) {
          tmp19 = closure_6(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: "white" });
        }
        const obj13 = { children: null };
        const items2 = [tmp19];
        const obj14 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
        items2[1] = closure_6(Text_Text.Text, obj14);
        obj13.children = items2;
        const obj15 = {
          onPress: function handlePress() {
            if (null != questOrbRewardMultiplier) {
              openQuestOrbMultiplierPerkInfoActionSheetDefault(tmp, orbMultiplierEligibility);
              if (require != null) {
                require();
              }
            }
          },
          activeOpacity: 0.8,
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainStringResult,
          children: null,
        };
        const obj16 = { style: null, children: null };
        const items3 = [tmp.fullGradientContainer];
        const obj17 = { backgroundColor: tmp14 };
        items3[1] = obj17;
        obj16.style = items3;
        if (!tmp13) {
          const obj18 = { style: tmp.fullGradient, colors: items, start, end };
          tmp21Result = tmp21(orbMultiplierEligibility(5388), obj18);
        }
        const items4 = [tmp21Result];
        const obj19 = { style: tmp.fullGradientContent, children: closure_8(closure_7, obj13) };
        items4[1] = closure_6(token3, obj19);
        obj16.children = items4;
        obj15.children = closure_8(token3, obj16);
        return closure_6(Pressables.PressableOpacity, obj15);
      }
    };

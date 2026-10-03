// === Module 14963: QuestOrbMultiplierPerkPill ===

// Module 14963 (QuestOrbMultiplierPerkPill)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import themes from "themes" /* 4587 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import useTheme from "useTheme" /* 4791 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8313 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 10008 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10911 */;
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet" /* 14964 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
const createStyles = fn(4890);
let obj2 = { fullGradientContainer: { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" }, fullGradient: null, fullGradientContent: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderRadius = nativeDefault.radii.round;
obj2.fullGradient = obj4;
let obj3 = { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" };
obj2.fullGradientContent = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: 4, minHeight: 19 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: 4, minHeight: 19 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = onPress(questOrbRewardMultiplier[7]).c(43);
  onPress = onPress.onPress;
  const orbMultiplierEligibility = onPress.orbMultiplierEligibility;
  closure_11();
  const obj = onPress(questOrbRewardMultiplier[7]);
  const theme = onPress(questOrbRewardMultiplier[8]).useTheme();
  const obj2 = onPress(questOrbRewardMultiplier[8]);
  const obj3 = onPress(questOrbRewardMultiplier[9]);
  const isThemeDarkResult = onPress(questOrbRewardMultiplier[9]).isThemeDark(theme);
  const token = onPress(questOrbRewardMultiplier[10]).useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_PINK_START, ThemeTypes.DARK);
  const obj4 = onPress(questOrbRewardMultiplier[10]);
  const tmp7 = orbMultiplierEligibility;
  const token1 = onPress(questOrbRewardMultiplier[10]).useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, ThemeTypes.DARK);
  const obj5 = onPress(questOrbRewardMultiplier[10]);
  const token2 = onPress(questOrbRewardMultiplier[10]).useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.BACKGROUND_BASE_LOWEST, ThemeTypes.DARK);
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
    const tmpResult7 = tmp(tmp2[12]);
    if (!tmp20) {
      const str = "transparent";
    }
    if (null == questOrbRewardMultiplier) {
      return null;
    } else {
      if (cResult[9] === questOrbRewardMultiplier) {
        if (cResult[10] === onPress) {
          class C {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                tmp4 = orbMultiplierEligibility;
                tmp5 = closure_1(closure_2[14])(tmp, orbMultiplierEligibility);
                if (onPress != null) {
                  tmp6 = onPress();
                }
              }
              return;
            }
          }
          const intl = tmp(tmp2[15]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = tmp(tmp2[15]).t;
          if (tmp18) {
            class C {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  tmp4 = orbMultiplierEligibility;
                  tmp5 = closure_1(closure_2[14])(tmp, orbMultiplierEligibility);
                  if (onPress != null) {
                    tmp6 = onPress();
                  }
                }
                return;
              }
            }
            t[0] = questOrbRewardMultiplier;
            let formatToPlainStringResult = formatToPlainString(t.l2UfLG, t);
          } else {
            class C {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  tmp4 = orbMultiplierEligibility;
                  tmp5 = closure_1(closure_2[14])(tmp, orbMultiplierEligibility);
                  if (onPress != null) {
                    tmp6 = onPress();
                  }
                }
                return;
              }
            }
            formatToPlainStringResult = formatToPlainString(t["G+mKoo"], { bonusOrbMultiplier: null });
            const obj7 = { bonusOrbMultiplier: null };
          }
          cResult[13] = questOrbRewardMultiplier;
          cResult[14] = tmp18;
          cResult[15] = formatToPlainStringResult;
        }
      }
      class C {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp4 = orbMultiplierEligibility;
            tmp5 = closure_1(closure_2[14])(tmp, orbMultiplierEligibility);
            if (onPress != null) {
              tmp6 = onPress();
            }
          }
          return;
        }
      }
      cResult[9] = questOrbRewardMultiplier;
      cResult[10] = onPress;
      cResult[11] = orbMultiplierEligibility;
      cResult[12] = C;
    }
    tmp20 = orbMultiplierEligibility === tmp(tmp2[13]).QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
  }
  const items = [tmp11, tmp13];
  cResult[4] = tmp11;
  cResult[5] = tmp13;
  cResult[6] = items;
}) : ((questId) => {
  ({ onPress: require, orbMultiplierEligibility } = questId);
  let questOrbRewardMultiplier;
  const tmp = closure_11();
  const theme = useTheme.useTheme();
  const isThemeDarkResult = themes.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  const token = useToken.useToken(orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_PINK_START, questOrbRewardMultiplier.DARK);
  const token1 = useToken.useToken(orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, questOrbRewardMultiplier.DARK);
  const token2 = useToken.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BASE_LOWEST, questOrbRewardMultiplier.DARK);
  const items = [ColorUtils.hexOpacityToRgba(token, 1), ];
  items[1] = ColorUtils.hexOpacityToRgba(token1, 0.5);
  const token3 = useToken.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BRAND);
  questOrbRewardMultiplier = hooks_QuestHooks.useQuestOrbRewardMultiplier(questId.questId);
  const result = QuestOrbMultiplierUtils.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
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
    const items2 = [tmp19, ];
    const obj14 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = closure_6(Text_Text.Text, obj14);
    obj13.children = items2;
    const obj15 = {
      onPress() {
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
      children: null
    };
    const obj16 = { style: null, children: null };
    const items3 = [tmp.fullGradientContainer, ];
    const obj17 = { backgroundColor: tmp14 };
    items3[1] = obj17;
    obj16.style = items3;
    if (!tmp13) {
      const obj18 = { style: tmp.fullGradient, colors: items, start, end };
      tmp21Result = tmp21(orbMultiplierEligibility(5605), obj18);
    }
    const items4 = [tmp21Result, ];
    const obj19 = { style: tmp.fullGradientContent, children: closure_8(closure_7, obj13) };
    items4[1] = closure_6(token3, obj19);
    obj16.children = items4;
    obj15.children = closure_8(token3, obj16);
    return closure_6(Pressables.PressableOpacity, obj15);
  }
});
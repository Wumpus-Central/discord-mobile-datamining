// === Module 14967: QuestOrbMultiplierPerkPill ===

// Module 14967 (QuestOrbMultiplierPerkPill)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import themes from "themes" /* 4587 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import useTheme from "useTheme" /* 4791 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8313 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 10008 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10911 */;
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet" /* 14968 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, onPress, tmp2, tmp3, tmp4, tmp5;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
let createStyles = createStyles_mod;
let obj = { fullGradientContainer: obj2, fullGradient: obj3, fullGradientContent: obj4 };
obj2 = { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.round };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: 4, minHeight: 19 };
let closure_11 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let questOrbRewardMultiplier;
  let tmp11;
  let tmp13;
  const tmp = onPress;
  const obj = onPress(questOrbRewardMultiplier[7]);
  const cResult = obj.c(43);
  onPress = onPress.onPress;
  const orbMultiplierEligibility = onPress.orbMultiplierEligibility;
  const questId = onPress.questId;
  closure_11();
  const obj2 = onPress(questOrbRewardMultiplier[8]);
  const theme = obj2.useTheme();
  const obj3 = onPress(questOrbRewardMultiplier[9]);
  const isThemeDarkResult = obj3.isThemeDark(theme);
  const obj4 = onPress(questOrbRewardMultiplier[10]);
  const token = obj4.useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_PINK_START, ThemeTypes.DARK);
  const obj5 = onPress(questOrbRewardMultiplier[10]);
  const token1 = obj5.useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, ThemeTypes.DARK);
  const obj6 = onPress(questOrbRewardMultiplier[10]);
  const token2 = obj6.useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.BACKGROUND_BASE_LOWEST, ThemeTypes.DARK);
  const tmp7 = orbMultiplierEligibility;
  if (cResult[0] !== token) {
    const tmpResult = tmp(questOrbRewardMultiplier[11]);
    const hexOpacityToRgbaResult = tmpResult.hexOpacityToRgba(token, 1);
    cResult[0] = token;
    cResult[1] = hexOpacityToRgbaResult;
    tmp11 = hexOpacityToRgbaResult;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== token1) {
    const tmpResult5 = tmp(questOrbRewardMultiplier[11]);
    const hexOpacityToRgbaResult1 = tmpResult5.hexOpacityToRgba(token1, 0.5);
    cResult[2] = token1;
    cResult[3] = hexOpacityToRgbaResult1;
    tmp13 = hexOpacityToRgbaResult1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === tmp11) {
    let tmp18;
    const tmpResult6 = tmp(questOrbRewardMultiplier[10]);
    const token3 = tmpResult6.useToken(tmp7(tmp2[5]).colors.BACKGROUND_BRAND);
    const tmpResult7 = tmp(questOrbRewardMultiplier[12]);
    questOrbRewardMultiplier = tmpResult7.useQuestOrbRewardMultiplier(questId);
    if (cResult[7] !== orbMultiplierEligibility) {
      const tmpResult8 = tmp(questOrbRewardMultiplier[13]);
      const result = tmpResult8.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
      cResult[7] = orbMultiplierEligibility;
      cResult[8] = result;
      tmp18 = result;
    } else {
      tmp18 = cResult[8];
    }
    const tmp20 = orbMultiplierEligibility === tmp(questOrbRewardMultiplier[13]).QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
    if (null == questOrbRewardMultiplier) {
      return null;
    } else {
      if (cResult[9] === questOrbRewardMultiplier) {
        if (cResult[10] === onPress) {
          let formatToPlainStringResult;
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
            const obj7 = { bonusOrbMultiplier: null };
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
            formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj7);
          } else {
            const obj8 = { bonusOrbMultiplier: null };
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
            formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj8);
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
  }
  const items = [tmp11, tmp13];
  cResult[4] = tmp11;
  cResult[5] = tmp13;
  cResult[6] = items;
}) : ((questId) => {
  let c2;
  let items2;
  let items3;
  let items4;
  let obj16;
  let orbMultiplierEligibility;
  ({ onPress: require, orbMultiplierEligibility } = questId);
  let questOrbRewardMultiplier;
  questId = questId.questId;
  const tmp = closure_11();
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = themes;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  const obj3 = useToken;
  const token = obj3.useToken(orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_PINK_START, questOrbRewardMultiplier.DARK);
  const obj4 = useToken;
  const token1 = obj4.useToken(orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, questOrbRewardMultiplier.DARK);
  const obj5 = useToken;
  const token2 = obj5.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BASE_LOWEST, questOrbRewardMultiplier.DARK);
  const items = [, ];
  const obj6 = ColorUtils;
  items[0] = obj6.hexOpacityToRgba(token, 1);
  const obj7 = ColorUtils;
  items[1] = obj7.hexOpacityToRgba(token1, 0.5);
  const obj8 = useToken;
  const token3 = obj8.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BRAND);
  const obj9 = hooks_QuestHooks;
  questOrbRewardMultiplier = obj9.useQuestOrbRewardMultiplier(questId);
  const obj10 = QuestOrbMultiplierUtils;
  const result = obj10.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
  let closure_6 = tmp13;
  const items1 = [tmp13, token2, token3, isThemeDarkResult];
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    let formatToPlainStringResult;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl2.t;
    if (result) {
      const obj11 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj11);
    } else {
      const obj12 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj12);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    if (!tmp13) {
      tmp19 = closure_6(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: "white" });
    }
    const obj13 = { children: items2 };
    items2 = [tmp19, ];
    const obj14 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = closure_6(Text_Text.Text, obj14);
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
      children: closure_8(token3, obj16)
    };
    obj16 = { style: items3, children: items4 };
    items3 = [tmp.fullGradientContainer, ];
    const obj17 = { backgroundColor: tmp14 };
    items3[1] = obj17;
    const tmp16Result = closure_8(closure_7, obj13);
    const PressableOpacity = Pressables.PressableOpacity;
    if (!tmp13) {
      const obj18 = { style: tmp.fullGradient, colors: items, start, end };
      tmp21Result = tmp21(orbMultiplierEligibility(5605), obj18);
    }
    items4 = [tmp21Result, ];
    const obj19 = { style: tmp.fullGradientContent, children: tmp16Result };
    items4[1] = closure_6(token3, obj19);
    return closure_6(PressableOpacity, obj15);
  }
});
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = tmp6;
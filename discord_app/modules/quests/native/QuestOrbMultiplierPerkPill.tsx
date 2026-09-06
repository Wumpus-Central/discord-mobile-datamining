// discord_app/modules/quests/native/QuestOrbMultiplierPerkPill.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import QuestOrbMultiplierUtils from "../utils/QuestOrbMultiplierUtils.tsx";
import hooks_QuestHooks from "../hooks/QuestHooks.tsx";
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
fn(4560);
let createStyles = { fullGradientContainer: null, fullGradient: null, fullGradientContent: null };
createStyles = {
  borderRadius: nativeDefault.radii.round,
  overflow: "hidden",
  minHeight: 19,
  backgroundColor: "transparent",
};
createStyles.fullGradientContainer = createStyles;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.borderRadius = nativeDefault.radii.round;
createStyles.fullGradient = obj1;
createStyles.fullGradientContent = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  gap: 4,
  minHeight: 19,
};
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = function QuestOrbMultiplierPerkPill(questId) {
  ({ onPress: require, orbMultiplierEligibility } = questId);
  const tmp = closure_10();
  let obj = useTheme;
  const theme = obj.useTheme();
  let obj1 = themes;
  const isThemeDarkResult = obj1.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  let obj2 = useToken;
  const token = obj2.useToken(orbMultiplierEligibility(576).colors.EXPRESSIVE_GRADIENT_PINK_START, "dark");
  let obj3 = useToken;
  const token1 = obj3.useToken(
    orbMultiplierEligibility(576).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    "dark",
  );
  let obj4 = useToken;
  const token2 = obj4.useToken(orbMultiplierEligibility(576).colors.BACKGROUND_BASE_LOWEST, "dark");
  let obj5 = ColorUtils;
  const items = [obj5.hexOpacityToRgba(token, 1)];
  let obj6 = ColorUtils;
  items[1] = obj6.hexOpacityToRgba(token1, 0.5);
  let obj7 = useToken;
  const token3 = obj7.useToken(orbMultiplierEligibility(576).colors.BACKGROUND_BRAND);
  const questOrbRewardMultiplier = hooks_QuestHooks.useQuestOrbRewardMultiplier(questId.questId);
  const tmp6 = orbMultiplierEligibility;
  const result = QuestOrbMultiplierUtils.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.CREPE;
  closure_6 = tmp13;
  const items1 = [tmp13, token2, token3, isThemeDarkResult];
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    const intl = tmp2(1114).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp2(1114).t;
    if (result) {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj);
    } else {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    if (!tmp13) {
      tmp19 = questOrbRewardMultiplier(tmp2(8662).NitroWheelIcon, { size: "xs", color: "white" });
    }
    obj1 = { children: null };
    const items2 = [tmp19];
    obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = questOrbRewardMultiplier(tmp2(4556).Text, obj2);
    obj1.children = items2;
    obj3 = {
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
      children: null,
    };
    obj4 = { style: null, children: null };
    const items3 = [tmp.fullGradientContainer];
    obj5 = { backgroundColor: tmp14 };
    items3[1] = obj5;
    obj4.style = items3;
    if (!tmp13) {
      obj6 = { style: tmp.fullGradient, colors: items, start, end };
      tmp21Result = tmp21(tmp6(4987), obj6);
    }
    const items4 = [tmp21Result];
    obj7 = { style: tmp.fullGradientContent, children: closure_7(closure_6, obj1) };
    items4[1] = questOrbRewardMultiplier(token3, obj7);
    obj4.children = items4;
    obj3.children = closure_7(token3, obj4);
    return questOrbRewardMultiplier(tmp2(5123).PressableOpacity, obj3);
  }
};

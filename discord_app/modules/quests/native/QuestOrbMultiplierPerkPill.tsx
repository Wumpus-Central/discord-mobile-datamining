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

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
fn(4606);
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
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = function QuestOrbMultiplierPerkPill(questId) {
  ({ onPress: require, orbMultiplierEligibility } = questId);
  let questOrbRewardMultiplier;
  const tmp = closure_11();
  let obj = useTheme;
  const theme = obj.useTheme();
  let obj1 = themes;
  const isThemeDarkResult = obj1.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  let obj2 = useToken;
  const token = obj2.useToken(
    orbMultiplierEligibility(576).colors.EXPRESSIVE_GRADIENT_PINK_START,
    questOrbRewardMultiplier.DARK,
  );
  let obj3 = useToken;
  const token1 = obj3.useToken(
    orbMultiplierEligibility(576).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    questOrbRewardMultiplier.DARK,
  );
  let obj4 = useToken;
  const token2 = obj4.useToken(
    orbMultiplierEligibility(576).colors.BACKGROUND_BASE_LOWEST,
    questOrbRewardMultiplier.DARK,
  );
  let obj5 = ColorUtils;
  const items = [obj5.hexOpacityToRgba(token, 1)];
  let obj6 = ColorUtils;
  items[1] = obj6.hexOpacityToRgba(token1, 0.5);
  let obj7 = useToken;
  const token3 = obj7.useToken(orbMultiplierEligibility(576).colors.BACKGROUND_BRAND);
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
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj);
    } else {
      obj = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    if (!tmp13) {
      tmp19 = closure_6(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: "white" });
    }
    obj1 = { children: null };
    const items2 = [tmp19];
    obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = closure_6(Text_Text.Text, obj2);
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
      tmp21Result = tmp21(orbMultiplierEligibility(5038), obj6);
    }
    const items4 = [tmp21Result];
    obj7 = { style: tmp.fullGradientContent, children: closure_8(closure_7, obj1) };
    items4[1] = closure_6(token3, obj7);
    obj4.children = items4;
    obj3.children = closure_8(token3, obj4);
    return closure_6(Pressables.PressableOpacity, obj3);
  }
};

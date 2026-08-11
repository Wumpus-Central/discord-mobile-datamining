// discord_app/modules/quests/native/QuestOrbMultiplierPerkPill.tsx
import noop from "noop";
import get_ActivityIndicator from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { isThemeLight } from "../../../design/utils/shared/themes.tsx";
import { useTheme } from "../../../hooks/useTheme.tsx";
import { hexToRgba } from "../../../utils/ColorUtils.tsx";
import { useQuests } from "../hooks/QuestHooks.tsx";
import { items } from "../utils/QuestOrbMultiplierUtils.tsx";

let StyleSheet;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = { x: 0, y: 0 };
let closure_9 = { x: 1, y: 0 };
createCacheKey = { fullGradientContainer: null, fullGradient: null, fullGradientContent: null };
createCacheKey = { borderRadius: require("Themes").radii.round, overflow: "hidden", height: 19, backgroundColor: "transparent" };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.borderRadius = require("Themes").radii.round;
createCacheKey[1] = obj1;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_8, gap: 4, height: 19 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_8, gap: 4, height: 19 };
let result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = function QuestOrbMultiplierPerkPill(questId) {
  let orbMultiplierEligibility;
  let require;
  ({ onPress: require, orbMultiplierEligibility } = questId);
  let dependencyMap;
  let token2;
  let token3;
  let questOrbRewardMultiplier;
  let c6;
  const tmp = createCacheKey();
  let obj = useTheme;
  const theme = obj.useTheme();
  let obj1 = isThemeLight;
  const isThemeDarkResult = obj1.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  let obj2 = map;
  const token = obj2.useToken(orbMultiplierEligibility(712).colors.EXPRESSIVE_GRADIENT_PINK_START, "dark");
  let obj3 = map;
  const token1 = obj3.useToken(orbMultiplierEligibility(712).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, "dark");
  let obj4 = map;
  token2 = obj4.useToken(orbMultiplierEligibility(712).colors.BACKGROUND_BASE_LOWEST, "dark");
  let obj5 = hexToRgba;
  const items = [obj5.hexOpacityToRgba(token, 1), ];
  let obj6 = hexToRgba;
  items[1] = obj6.hexOpacityToRgba(token1, 0.5);
  let obj7 = map;
  token3 = obj7.useToken(orbMultiplierEligibility(712).colors.BACKGROUND_BRAND);
  questOrbRewardMultiplier = useQuests.useQuestOrbRewardMultiplier(questId.questId);
  const obj9 = useQuests;
  const tmp6 = orbMultiplierEligibility;
  const result = items.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === items.QuestOrbMultiplierEligibilityType.CREPE;
  c6 = tmp13;
  const items1 = [tmp13, token2, token3, isThemeDarkResult];
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    const intl = tmp2(1236).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp2(1236).t;
    if (result) {
      obj = { bonusOrbMultiplier: null };
      obj[0] = questOrbRewardMultiplier;
      let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj);
    } else {
      obj = { bonusOrbMultiplier: null };
      obj[0] = questOrbRewardMultiplier;
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    if (!tmp13) {
      tmp19 = questOrbRewardMultiplier(tmp2(7706).NitroWheelIcon, { size: "xs", color: "white" });
    }
    obj1 = { children: null };
    const items2 = [tmp19, ];
    obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
    obj2[2] = formatToPlainStringResult;
    items2[1] = questOrbRewardMultiplier(tmp2(4299).Text, obj2);
    obj1[0] = items2;
    obj3 = { onPress: null, activeOpacity: 0.8, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj3[0] = function onPress() {
      if (null != questOrbRewardMultiplier) {
        orbMultiplierEligibility(_undefined[15])(tmp, orbMultiplierEligibility);
        if (callback != null) {
          callback();
        }
      }
    };
    obj3[3] = formatToPlainStringResult;
    obj4 = { style: null, children: null };
    const items3 = [tmp.fullGradientContainer, ];
    obj5 = { backgroundColor: null };
    obj5[0] = tmp14;
    items3[1] = obj5;
    obj4[0] = items3;
    if (!tmp13) {
      obj6 = { style: null, colors: null, start: null, end: null };
      obj6[0] = tmp.fullGradient;
      obj6[1] = items;
      obj6[2] = closure_8;
      obj6[3] = closure_9;
      tmp21Result = tmp21(tmp6(4725), obj6);
    }
    const items4 = [tmp21Result, ];
    obj7 = { style: null, children: null };
    obj7[0] = tmp.fullGradientContent;
    obj7[1] = closure_7(c6, obj1);
    items4[1] = questOrbRewardMultiplier(token3, obj7);
    obj4[1] = items4;
    obj3[4] = closure_7(token3, obj4);
    return questOrbRewardMultiplier(tmp2(4846).PressableOpacity, obj3);
  }
  const obj10 = items;
};
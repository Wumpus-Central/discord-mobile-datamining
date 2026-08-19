// === Module 14518: Footer ===

// Module 14518 (Footer)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ManaContext from "ManaContext" /* 4104 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7124 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9395 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function Footer(eligibleToReceivePremiumRewards) {
  const callback = React.useCallback(() => {
    let obj = callback2(4342);
    obj.hideActionSheet();
    obj = { screen: constants2.PREMIUM };
    callback(7360).openUserSettings(obj);
  }, []);
  const tmp = callback3();
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  const callback1 = React.useCallback(() => {
    callback2(4342).hideActionSheet();
    const obj = callback2(4342);
    const obj2 = callback2(4090);
    obj2.openURL(callback2(1993).getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer, children: null };
  const callback2 = React.useCallback(() => {
    callback2(4342).hideActionSheet();
  }, []);
  const Button = Button2.Button;
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    obj = { size: "lg", text: null, variant: "primary", onPress: null };
    const intl3 = getSystemLocale.intl;
    obj[1] = intl3.string(getSystemLocale.t.hvVgAZ);
    obj[3] = callback1;
    const items = [callback(Button, obj), ];
    obj = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl4 = getSystemLocale.intl;
    obj[2] = intl4.string(getSystemLocale.t.cpT0Cq);
    obj[3] = callback2;
    items[1] = callback(Button2.Button, obj);
    obj[1] = items;
    let tmp11 = obj;
  } else {
    obj1 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = getSystemLocale.intl;
    obj1[2] = intl.string(getSystemLocale.t.pj0XBN);
    obj1[3] = onPress;
    obj1[4] = loading;
    const items1 = [callback(Button, obj1), ];
    let obj2 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl2 = getSystemLocale.intl;
    obj2[2] = intl2.string(getSystemLocale.t.PcTCB7);
    obj2[3] = callback;
    items1[1] = callback(Button2.Button, obj2);
    obj[1] = items1;
    tmp11 = obj;
  }
  return callback2(View, tmp11);
}
function SheetContent(arg0) {
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = callback3();
  const items = [callback(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  const items1 = [tmp.container, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  const obj = { style: tmp.contentContainer, children: null };
  const items2 = [callback(View, { style: tmp.riveContainer, children: callback(ManaContext.NitroQuestOrbsMultiplierRive, {}) }), , , ];
  const items3 = [, ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  items2[1] = callback(Text.Text, { style: items3, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title });
  items2[2] = callback(Text.Text, { style: tmp.text, variant: "text-sm/normal", children: body });
  items2[3] = callback(Footer, { eligibleToReceivePremiumRewards });
  obj[1] = items2;
  obj[1] = callback2(View, obj);
  items[1] = callback(View, obj);
  obj[0] = items;
  return callback2(closure_10, obj);
}
({ AnalyticsPages: c5, HelpdeskArticles: closure_6, UserSettingsSections: error } = ME);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let closure_11 = { marginBottom: 0 };
const createCacheKey = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", width: "100%", marginTop: ThemesDefault.space.PX_48 };
createCacheKey[2] = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = { width: "100%", gap: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_16 };
createCacheKey[4] = { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 };
createCacheKey[5] = { width: "100%", height: 160 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  let obj = multiplier(10494);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const memo = React.useMemo(() => {
    if (orbMultiplierEligibility === multiplier(_undefined[17]).QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = multiplier(_undefined[12]).intl;
      let stringResult = intl2.string(orbMultiplierEligibility(_undefined[18]).c5usUr);
    } else {
      const intl = multiplier(_undefined[12]).intl;
      stringResult = intl.string(multiplier(_undefined[12]).t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = React.useMemo(() => {
    if (orbMultiplierEligibility === multiplier(_undefined[17]).QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = multiplier(_undefined[12]).intl;
      let obj = { bonusOrbMultiplier: null };
      obj[0] = multiplier;
      let formatResult = intl2.format(orbMultiplierEligibility(_undefined[18]).UkrcSH, obj);
    } else {
      const intl = multiplier(_undefined[12]).intl;
      const format = intl.format;
      const t = multiplier(_undefined[12]).t;
      if (_undefined) {
        obj = { bonusOrbMultiplier: null };
        obj[0] = multiplier;
        formatResult = format(t.NpUfej, obj);
      } else {
        obj = { bonusOrbMultiplier: null };
        obj[0] = multiplier;
        formatResult = format(t["G5k+lZ"], obj);
      }
    }
    return formatResult;
  }, items1);
  obj = { visible: orbMultiplierEligibility === multiplier(10494).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(10494).QuestOrbMultiplierEligibilityType.UPSELL, children: null };
  const tmp4 = orbMultiplierEligibility === multiplier(10494).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(10494).QuestOrbMultiplierEligibilityType.UPSELL;
  obj[1] = callback(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result });
  obj[4] = callback(orbMultiplierEligibility(14515), obj);
  return callback(multiplier(6950).BottomSheet, obj);
};
// discord_app/modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx
import Background from "Background";
import { View } from "items";
import ME from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { ManaContext } from "../../../../discord_common/js/packages/design/native.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { ActionSheetHeaderBar } from "../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { usePremiumFeatureUpsellGetNitro } from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function Footer(eligibleToReceivePremiumRewards) {
  let loading;
  let onPress;
  const callback = React.useCallback(() => {
    let obj = callback2(4312);
    obj.hideActionSheet();
    obj = { screen: constants2.PREMIUM };
    callback(6057).openUserSettings(obj);
  }, []);
  const tmp = createCacheKey();
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitro(false, callback, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  const callback1 = React.useCallback(() => {
    callback2(4312).hideActionSheet();
    const obj = callback2(4312);
    const obj2 = callback2(4058);
    obj2.openURL(callback2(1993).getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer, children: null };
  const callback2 = React.useCallback(() => {
    callback2(4312).hideActionSheet();
  }, []);
  const Button = Button.Button;
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    obj = { size: "lg", text: null, variant: "primary", onPress: null };
    const intl3 = tmp10(1236).intl;
    obj[1] = intl3.string(tmp10(1236).t.hvVgAZ);
    obj[3] = callback1;
    const items = [tmp9(Button, obj), ];
    obj = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl4 = tmp10(1236).intl;
    obj[2] = intl4.string(tmp10(1236).t.cpT0Cq);
    obj[3] = callback2;
    items[1] = tmp9(tmp10(4754).Button, obj);
    obj[1] = items;
    let tmp11 = obj;
  } else {
    const obj1 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = tmp10(1236).intl;
    obj1[2] = intl.string(tmp10(1236).t.pj0XBN);
    obj1[3] = onPress;
    obj1[4] = loading;
    const items1 = [tmp9(Button, obj1), ];
    let obj2 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl2 = tmp10(1236).intl;
    obj2[2] = intl2.string(tmp10(1236).t.PcTCB7);
    obj2[3] = callback;
    items1[1] = tmp9(tmp10(4754).Button, obj2);
    obj[1] = items1;
    tmp11 = obj;
  }
  return closure_9(View, tmp11);
}
function SheetContent(arg0) {
  let body;
  let eligibleToReceivePremiumRewards;
  let title;
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = createCacheKey();
  let obj = { children: null };
  const items = [callback(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  obj = { style: items1, children: null };
  items1 = [tmp.container, { marginBottom: useSafeAreaInsets().bottom }];
  obj = { style: tmp.contentContainer, children: null };
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
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = jsxProd);
let closure_11 = { marginBottom: 0 };
createCacheKey = { container: null, contentContainer: null, text: null, buttonContainer: null, title: null, riveContainer: null };
createCacheKey = { alignItems: "center", paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", width: "100%", marginTop: require("Themes").space.PX_48 };
let obj1 = { alignItems: "center", width: "100%", marginTop: require("Themes").space.PX_48 };
createCacheKey[2] = { textAlign: "center", paddingHorizontal: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_16 };
let obj2 = { textAlign: "center", paddingHorizontal: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_16 };
createCacheKey[3] = { width: "100%", gap: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_16 };
createCacheKey[4] = { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 };
createCacheKey[5] = { width: "100%", height: 160 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { width: "100%", gap: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_16 };
let result = require("ME").fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  let dependencyMap;
  let obj = multiplier(10526);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const memo = React.useMemo(() => {
    if (orbMultiplierEligibility === multiplier(_undefined[17]).QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = tmp(tmp2[12]).intl;
      let stringResult = intl2.string(orbMultiplierEligibility(tmp2[18]).c5usUr);
    } else {
      const intl = tmp(tmp2[12]).intl;
      stringResult = intl.string(tmp(tmp2[12]).t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = React.useMemo(() => {
    if (orbMultiplierEligibility === multiplier(_undefined[17]).QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = tmp(tmp2[12]).intl;
      let obj = { bonusOrbMultiplier: null };
      obj[0] = multiplier;
      let formatResult = intl2.format(orbMultiplierEligibility(tmp2[18]).UkrcSH, obj);
    } else {
      const intl = tmp(tmp2[12]).intl;
      const format = intl.format;
      const t = tmp(tmp2[12]).t;
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
  obj = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles: closure_11, children: null };
  obj = { visible: orbMultiplierEligibility === multiplier(10526).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(10526).QuestOrbMultiplierEligibilityType.UPSELL, children: null };
  const tmp4 = orbMultiplierEligibility === multiplier(10526).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(10526).QuestOrbMultiplierEligibilityType.UPSELL;
  obj[1] = callback(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result });
  obj[4] = callback(orbMultiplierEligibility(14470), obj);
  return callback(multiplier(5436).BottomSheet, obj);
};
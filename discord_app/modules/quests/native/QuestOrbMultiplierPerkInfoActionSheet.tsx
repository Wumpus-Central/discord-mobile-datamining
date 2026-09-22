// === Module 15442: QuestOrbMultiplierPerkInfoActionSheet ===

// Module 15442 (QuestOrbMultiplierPerkInfoActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import _modDef3484 from "module_3484" /* 3484 */;
import LinkingDefault from "Linking" /* 4452 */;
import native from "native" /* 4467 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import Text_Text from "Text/Text" /* 4753 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7226 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7401 */;
import openUserSettings from "openUserSettings" /* 7627 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10230 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 11560 */;
import noop from "module_19" /* 19 */;

require = fn;
function Footer(eligibleToReceivePremiumRewards) {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
  }, []);
  const tmp = closure_12();
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer, children: null };
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  const Button = components_Button_Button.Button;
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    let obj2 = { size: "lg", text: null, variant: "primary", onPress: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.hvVgAZ);
    obj2.onPress = callback1;
    const items = [React6(Button, obj2), ];
    const obj3 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl4 = util.intl;
    obj3.text = intl4.string(util.t.cpT0Cq);
    obj3.onPress = callback2;
    items[1] = React6(components_Button_Button.Button, obj3);
    obj.children = items;
    let tmp11 = obj;
  } else {
    const obj4 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = util.intl;
    obj4.text = intl.string(util.t.pj0XBN);
    obj4.onPress = onPress;
    obj4.loading = loading;
    const items1 = [React6(Button, obj4), ];
    const obj5 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.PcTCB7);
    obj5.onPress = callback;
    items1[1] = React6(components_Button_Button.Button, obj5);
    obj.children = items1;
    tmp11 = obj;
  }
  return React7(View, tmp11);
}
function SheetContent(arg0) {
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = closure_12();
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("QuestOrbMultiplierPerkInfo");
  const obj2 = { children: null };
  const items = [React6(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.container, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj3.style = items1;
  const obj4 = { style: tmp.contentContainer, children: null };
  const items2 = [React6(View, { style: tmp.riveContainer, children: React6(native.NitroQuestOrbsMultiplierRive, {}) }), , , ];
  const obj6 = { style: null, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  const items3 = [, , ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  items3[2] = typeConsolidationTextTransform;
  obj6.style = items3;
  items2[1] = React6(Text_Text.Text, obj6);
  items2[2] = React6(Text_Text.Text, { style: tmp.text, variant: "text-sm/normal", children: body });
  items2[3] = React6(Footer, { eligibleToReceivePremiumRewards });
  obj4.children = items2;
  obj3.children = React7(View, obj4);
  items[1] = React6(View, obj3);
  obj2.children = items;
  return React7(closure_1_10, obj2);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: hasOwnProperty, HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const contentStyles = { marginBottom: 0 };
const createStyles = fn(4757);
let obj2 = { container: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, contentContainer: null, text: null, buttonContainer: null, title: null, riveContainer: null };
let obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.contentContainer = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
let obj4 = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
obj2.text = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj2.buttonContainer = { width: "100%", gap: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_16 };
obj2.title = { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 };
obj2.riveContainer = { width: "100%", height: 160 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  const result = multiplier(11560).shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  let obj = multiplier(11560);
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const memo = noop.useMemo(() => {
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = util.intl;
      let stringResult = intl2.string(_modDef3484.c5usUr);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = noop.useMemo(() => {
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = util.intl;
      const obj2 = { bonusOrbMultiplier: multiplier };
      let formatResult = intl2.format(_modDef3484.UkrcSH, obj2);
    } else {
      const intl = util.intl;
      const format = intl.format;
      const t = util.t;
      if (c2) {
        const obj3 = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.NpUfej, obj3);
      } else {
        const obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t["G5k+lZ"], obj);
      }
    }
    return formatResult;
  }, items1);
  let obj2 = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: null };
  let obj3 = { visible: orbMultiplierEligibility === multiplier(11560).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(11560).QuestOrbMultiplierEligibilityType.UPSELL, children: null };
  const tmp4 = orbMultiplierEligibility === multiplier(11560).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(11560).QuestOrbMultiplierEligibilityType.UPSELL;
  obj3.children = closure_8(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result });
  obj2.children = closure_8(orbMultiplierEligibility(15439), obj3);
  return closure_8(multiplier(7397).BottomSheet, obj2);
};
// === Module 15167: QuestOrbMultiplierPerkInfoActionSheet ===

// Module 15167 (QuestOrbMultiplierPerkInfoActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef3353 from "module_3353" /* 3353 */;
import LinkingDefault from "Linking" /* 4255 */;
import native from "native" /* 4271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7154 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9967 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 11293 */;
import noop from "module_19" /* 19 */;

require = fn;
function Footer(eligibleToReceivePremiumRewards) {
  const callback = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { screen: constants2.PREMIUM };
    openUserSettings.openUserSettings(obj);
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
    obj = { size: "lg", text: null, variant: "primary", onPress: null };
    const intl3 = util.intl;
    obj.text = intl3.string(util.t.hvVgAZ);
    obj.onPress = callback1;
    const items = [React6(Button, obj), ];
    obj = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl4 = util.intl;
    obj.text = intl4.string(util.t.cpT0Cq);
    obj.onPress = callback2;
    items[1] = React6(components_Button_Button.Button, obj);
    obj.children = items;
    let tmp11 = obj;
  } else {
    const obj1 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = util.intl;
    obj1.text = intl.string(util.t.pj0XBN);
    obj1.onPress = onPress;
    obj1.loading = loading;
    const items1 = [React6(Button, obj1), ];
    let obj2 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t.PcTCB7);
    obj2.onPress = callback;
    items1[1] = React6(components_Button_Button.Button, obj2);
    obj.children = items1;
    tmp11 = obj;
  }
  return React7(View, tmp11);
}
function SheetContent(arg0) {
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = closure_12();
  let obj = { children: null };
  const items = [React6(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  obj = { style: null, children: null };
  const items1 = [tmp.container, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items1;
  obj = { style: tmp.contentContainer, children: null };
  const items2 = [React6(View, { style: tmp.riveContainer, children: React6(native.NitroQuestOrbsMultiplierRive, {}) }), , , ];
  const obj2 = { style: null, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  const items3 = [, ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  obj2.style = items3;
  items2[1] = React6(Text_Text.Text, obj2);
  items2[2] = React6(Text_Text.Text, { style: tmp.text, variant: "text-sm/normal", children: body });
  items2[3] = React6(Footer, { eligibleToReceivePremiumRewards });
  obj.children = items2;
  obj.children = React7(View, obj);
  items[1] = React6(View, obj);
  obj.children = items;
  return React7(closure_1_10, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: hasOwnProperty, HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const contentStyles = { marginBottom: 0 };
fn(4560);
let createStyles = { container: null, contentContainer: null, text: null, buttonContainer: null, title: null, riveContainer: null };
createStyles = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.contentContainer = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
let obj1 = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
createStyles.text = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let obj2 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
createStyles.buttonContainer = { width: "100%", gap: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_16 };
createStyles.title = { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 };
createStyles.riveContainer = { width: "100%", height: 160 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  let obj = multiplier(11293);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const memo = noop.useMemo(() => {
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = util.intl;
      let stringResult = intl2.string(_modDef3353.c5usUr);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = noop.useMemo(() => {
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = util.intl;
      let obj = { bonusOrbMultiplier: multiplier };
      let formatResult = intl2.format(_modDef3353.UkrcSH, obj);
    } else {
      const intl = util.intl;
      const format = intl.format;
      const t = util.t;
      if (c2) {
        obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.NpUfej, obj);
      } else {
        obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t["G5k+lZ"], obj);
      }
    }
    return formatResult;
  }, items1);
  obj = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: null };
  obj = { visible: orbMultiplierEligibility === multiplier(11293).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(11293).QuestOrbMultiplierEligibilityType.UPSELL, children: null };
  const tmp4 = orbMultiplierEligibility === multiplier(11293).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(11293).QuestOrbMultiplierEligibilityType.UPSELL;
  obj.children = closure_8(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result });
  obj.children = closure_8(orbMultiplierEligibility(15164), obj);
  return closure_8(multiplier(7150).BottomSheet, obj);
};
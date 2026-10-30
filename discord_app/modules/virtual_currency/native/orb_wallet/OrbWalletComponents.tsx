// discord_app/modules/virtual_currency/native/orb_wallet/OrbWalletComponents.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import _modDef2173 from "../../messages/OrbWallet.messages.js";
import _mod4435 from "../../../../../_runtime/metro/04435__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import openURLDefault from "../../../../lib/openURL.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import QuestTypes from "../../../quests/QuestTypes.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import TrophyIcon from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import _mod9531 from "../../hooks/index.tsx";
import QuestUtils from "../../../quests/native/QuestUtils.native.tsx";
import useIsPremiumSubscriber from "../../../premium/useIsPremiumSubscriber.tsx";
import _modDef12291 from "../../../../../_runtime/metro/12291__.js";
import _modDef14677 from "../../../../../_runtime/metro/14677__.js";
import OrbWalletUtils from "OrbWalletUtils.native.tsx";
import useNitroProgramReward from "../../../rewards/hooks/useNitroProgramReward.tsx";
import ProgramRewardsActionCreatorsDefault from "../../../rewards/ProgramRewardsActionCreators.tsx";
import _modDef17646 from "../../../../../discord_assets/assets/orbs/balance_widget_card_asset.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function OrbWalletPremiumHeaderInlineText(children) {
  const onPress = children.onPress;
  const tmp = closure_14();
  const obj = { style: tmp.headerInlineText, children: null };
  const items = [
    closure_1_11(NitroWheelIcon.NitroWheelIcon, {
      size: "xs",
      color: nativeDefault.colors.ICON_SUBTLE,
      accessible: false,
    }),
  ];
  let headerInlineLinkText = null;
  if (null != onPress) {
    headerInlineLinkText = tmp.headerInlineLinkText;
  }
  items[1] = closure_1_11(Text_Text.Text, {
    variant: "text-xs/medium",
    color: "text-subtle",
    style: headerInlineLinkText,
    children: children.text,
  });
  obj.children = items;
  const tmp2Result = closure_1_12(hasOwnProperty, obj);
  let tmp4Result = tmp2Result;
  if (null != onPress) {
    const obj3 = { onPress, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: tmp2Result };
    tmp4Result = closure_1_11(React4, obj3);
  }
  return tmp4Result;
}
function OrbWalletNitroRewardTag() {
  const nitroProgramReward = useNitroProgramReward.useNitroProgramReward();
  const programReward = nitroProgramReward.programReward;
  const effect = noop.useEffect(() => {
    ProgramRewardsActionCreatorsDefault();
  }, []);
  if (nitroProgramReward.passesGeneralUIInvariant) {
    if (null != programReward) {
      const _Math = Math;
      const _Date = Date;
      const date = new Date(programReward.next_reward_date);
      const _Date2 = Date;
      const date1 = new Date();
      const obj2 = { text: null };
      const bound = Math.max(1, _mod4435.differenceInCalendarDays(date, date1));
      const intl = util.intl;
      const obj3 = { orbAmount: programReward.reward_amount, days: bound };
      obj2.text = intl.format(_modDef2173.SM0hiz, obj3);
      return closure_1_11(OrbWalletPremiumHeaderInlineText, obj2);
    }
  }
  return null;
}
function OrbWalletNitroUpsellTag() {
  const obj2 = { text: null, onPress: null };
  const openNitroCheckoutFromOrbWallet = OrbWalletUtils.useOpenNitroCheckoutFromOrbWallet(
    AnalyticsLocationDefault.ORB_WALLET_HEADER_NITRO_UPSELL_CTA,
  );
  const intl = util.intl;
  obj2.text = intl.string(_modDef2173.JZycSO);
  obj2.onPress = openNitroCheckoutFromOrbWallet;
  return closure_1_11(OrbWalletPremiumHeaderInlineText, obj2);
}
function OrbWalletHeaderTags() {
  return closure_1_11(
    useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2)
      ? OrbWalletNitroRewardTag
      : OrbWalletNitroUpsellTag,
    {},
  );
}
function openOrbsShopFromWallet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
  const items = [AnalyticsLocationDefault.ORB_WALLET];
  obj3.analyticsLocations = items;
  obj3.analyticsSource = AnalyticsLocationDefault.ORB_WALLET;
  obj3.screen = constants2.ORBS;
  const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
}
function openQuestHomeFromWallet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj2 = QuestUtils;
  obj2.openQuestHome({
    mergeExistingRoutes: true,
    filter: RewardFilterTypes.VIRTUAL_CURRENCY,
    fromContent: QuestTypes.QuestContent.ORBS_BALANCE_MENU,
  });
}
function openOrbWalletHelp() {
  const tmp = openURLDefault;
  tmp(HelpdeskUtilsDefault.getArticleURL(constants.ORBS_WALLET));
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ HelpdeskArticles: metroRequire, NOOP: closure_7 } = Constants);
const constants2 = fn(1074).CollectiblesMobileShopScreen;
const PremiumTypes = fn(1386).PremiumTypes;
const RewardFilterTypes = fn(6775).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 },
  headerAssetSlot: { width: 48, height: 48, alignItems: "center", justifyContent: "center", overflow: "visible" },
  headerAsset: { width: 68, height: 68 },
  headerContent: null,
  headerInlineText: null,
  headerInlineLinkText: null,
  footerButtons: null,
  footerButton: null,
  footerMeta: null,
};
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.headerContent = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_4 };
obj2.headerInlineText = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.headerInlineLinkText = { textDecorationLine: "underline" };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.footerButtons = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footerButton = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footerMeta = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_4,
};
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletComponents.tsx");

export function OrbBalanceHeader(orbBalance) {
  orbBalance = orbBalance.orbBalance;
  const tmp = closure_14();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.headerAssetSlot, importantForAccessibility: "no-hide-descendants", children: null };
  const obj3 = { source: null, style: null, resizeMode: "contain" };
  const obj4 = { uri: _modDef17646 };
  obj3.source = obj4;
  obj3.style = tmp.headerAsset;
  obj2.children = closure_1_11(FastImageDefault, obj3);
  const items = [closure_1_11(hasOwnProperty, obj2)];
  const obj5 = { style: tmp.headerContent, children: null };
  const intl = util.intl;
  if (null == orbBalance) {
    let stringResult = intl.string(util.t.cKwv4k);
    let tmp10 = require;
  } else {
    const obj6 = { balance: orbBalance };
    stringResult = intl.formatToPlainString(util.t.zPaLL9, obj6);
    tmp10 = require;
  }
  const obj7 = {
    accessible: true,
    accessibilityLabel: stringResult,
    accessibilityState: { busy: null == orbBalance },
    children: closure_1_11(tmp10(14457).BalanceCounter, {
      value: orbBalance,
      onValueChange: onValueReached,
      onValueReached,
      targetTotalCounterTime: 1500,
      textVariant: "display-md",
      textColor: "text-strong",
    }),
  };
  const items1 = [closure_1_11(hasOwnProperty, obj7), closure_1_11(OrbWalletHeaderTags, {})];
  obj5.children = items1;
  items[1] = closure_1_12(hasOwnProperty, obj5);
  obj.children = items;
  return closure_1_12(hasOwnProperty, obj);
}
export function OrbWalletFooter() {
  const tmp = closure_14();
  const totalRedeemed = _mod9531.useFetchVirtualCurrencyTotalRedeemed().totalRedeemed;
  const obj2 = { style: tmp.footerButtons, children: null };
  const obj3 = { style: tmp.footerButton, children: null };
  const obj4 = { text: null, variant: "secondary", size: "md", icon: null, onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.JALI2K);
  obj4.icon = _modDef14677;
  obj4.onPress = openQuestHomeFromWallet;
  obj3.children = closure_1_11(components_Button_Button.Button, obj4);
  const items = [closure_1_11(hasOwnProperty, obj3)];
  const obj5 = { style: tmp.footerButton, children: null };
  const obj6 = { text: null, variant: "secondary", size: "md", icon: null, onPress: null };
  const intl2 = util.intl;
  obj6.text = intl2.string(util.t.pWG4ze);
  obj6.icon = _modDef12291;
  obj6.onPress = openOrbsShopFromWallet;
  obj5.children = closure_1_11(components_Button_Button.Button, obj6);
  items[1] = closure_1_11(hasOwnProperty, obj5);
  obj2.children = items;
  const items1 = [closure_1_12(hasOwnProperty, obj2)];
  const obj7 = { style: tmp.footerMeta, children: null };
  let tmp4Result = null != totalRedeemed;
  if (tmp4Result) {
    const obj8 = { children: null };
    const obj9 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const items2 = [closure_1_11(TrophyIcon.TrophyIcon, obj9), ,];
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl3 = util.intl;
    const obj11 = { orbAmount: totalRedeemed };
    obj10.children = intl3.format(_modDef2173.B5tZXw, obj11);
    items2[1] = closure_1_11(Text_Text.Text, obj10);
    items2[2] = closure_1_11(Text_Text.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      accessible: false,
      children: "\u2022",
    });
    obj8.children = items2;
    tmp4Result = closure_1_12(map1, obj8);
  }
  const obj12 = { children: null };
  const items3 = [tmp4Result];
  const obj13 = {
    onPress: openOrbWalletHelp,
    accessibilityRole: "link",
    hitSlop: nativeDefault.space.PX_8,
    children: null,
  };
  const obj14 = { variant: "text-sm/normal", color: "text-link", children: null };
  const intl4 = util.intl;
  obj14.children = intl4.string(util.t["5qZv9E"]);
  obj13.children = closure_1_11(Text_Text.Text, obj14);
  items3[1] = closure_1_11(React4, obj13);
  obj7.children = items3;
  items1[1] = closure_1_12(hasOwnProperty, obj7);
  obj12.children = items1;
  return closure_1_12(map1, obj12);
}

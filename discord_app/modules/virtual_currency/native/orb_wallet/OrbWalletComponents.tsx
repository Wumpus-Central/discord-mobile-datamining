// === Module 16893: OrbWalletComponents ===

// Module 16893 (OrbWalletComponents)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef2172 from "module_2172" /* 2172 */;
import _mod4440 from "module_4440" /* 4440 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import openURLDefault from "openURL" /* 5705 */;
import FastImageDefault from "FastImage" /* 5717 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import TrophyIcon from "TrophyIcon" /* 9378 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9528 */;
import _mod9553 from "module_9553" /* 9553 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11416 */;
import _modDef12329 from "module_12329" /* 12329 */;
import _modDef14715 from "module_14715" /* 14715 */;
import OrbWalletUtils from "OrbWalletUtils" /* 16890 */;
import useNitroProgramReward from "useNitroProgramReward" /* 16894 */;
import ProgramRewardsActionCreatorsDefault from "ProgramRewardsActionCreators" /* 16898 */;
import _modDef16899 from "module_16899" /* 16899 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbWalletPremiumHeaderInlineText(children) {
  const onPress = children.onPress;
  const tmp = closure_13();
  const obj = { style: tmp.headerInlineText, children: null };
  const items = [closure_1_10(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false }), ];
  let headerInlineLinkText = null;
  if (null != onPress) {
    headerInlineLinkText = tmp.headerInlineLinkText;
  }
  items[1] = closure_1_10(Text_Text.Text, { variant: "text-xs/medium", color: "text-subtle", style: headerInlineLinkText, children: children.text });
  obj.children = items;
  const tmp2Result = closure_1_11(hasOwnProperty, obj);
  let tmp4Result = tmp2Result;
  if (null != onPress) {
    const obj3 = { onPress, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: tmp2Result };
    tmp4Result = closure_1_10(React4, obj3);
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
      const bound = Math.max(1, _mod4440.differenceInCalendarDays(date, date1));
      const intl = util.intl;
      const obj3 = { orbAmount: programReward.reward_amount, days: bound };
      obj2.text = intl.format(_modDef2172.SM0hiz, obj3);
      return closure_1_10(OrbWalletPremiumHeaderInlineText, obj2);
    }
  }
  return null;
}
function OrbWalletNitroUpsellTag() {
  const obj2 = { text: null, onPress: null };
  const openNitroCheckoutFromOrbWallet = OrbWalletUtils.useOpenNitroCheckoutFromOrbWallet(AnalyticsLocationDefault.ORB_WALLET_HEADER_NITRO_UPSELL_CTA);
  const intl = util.intl;
  obj2.text = intl.string(_modDef2172.JZycSO);
  obj2.onPress = openNitroCheckoutFromOrbWallet;
  return closure_1_10(OrbWalletPremiumHeaderInlineText, obj2);
}
function OrbWalletHeaderTags() {
  return closure_1_10(useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2) ? OrbWalletNitroRewardTag : OrbWalletNitroUpsellTag, {});
}
function openOrbsShopFromWallet() {
  const obj2 = { analyticsLocations: null };
  const items = [AnalyticsLocationDefault.ORB_WALLET];
  obj2.analyticsLocations = items;
  const result = OrbWalletUtils.navigateToShopFromOrbWallet(obj2);
}
function openQuestHomeFromWallet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj2 = QuestUtils;
  obj2.openQuestHome({ mergeExistingRoutes: true, filter: RewardFilterTypes.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.ORBS_BALANCE_MENU });
}
function openOrbWalletHelp() {
  const tmp = openURLDefault;
  tmp(HelpdeskUtilsDefault.getArticleURL(constants.ORBS_WALLET));
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ HelpdeskArticles: metroRequire, NOOP: closure_7 } = Constants);
const PremiumTypes = fn(1385).PremiumTypes;
const RewardFilterTypes = fn(6781).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, headerAssetSlot: { width: 48, height: 48, alignItems: "center", justifyContent: "center", overflow: "visible" }, headerAsset: { width: 68, height: 68 }, headerContent: null, headerInlineText: null, headerInlineLinkText: null, challengesCard: null, challengesLoading: null, challengesDivider: null, challengesEmpty: null, footerButtons: null, footerButton: null, footerMeta: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.headerContent = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_4 };
obj2.headerInlineText = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.headerInlineLinkText = { textDecorationLine: "underline" };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.challengesCard = { gap: nativeDefault.space.PX_16 };
let obj6 = { gap: nativeDefault.space.PX_16 };
obj2.challengesLoading = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
let obj7 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj2.challengesDivider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.challengesEmpty = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj2.footerButtons = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footerButton = { flex: 1 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footerMeta = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletComponents.tsx");

export function OrbBalanceHeader(orbBalance) {
  orbBalance = orbBalance.orbBalance;
  const tmp = closure_13();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.headerAssetSlot, importantForAccessibility: "no-hide-descendants", children: null };
  const obj3 = { source: null, style: null, resizeMode: "contain" };
  const obj4 = { uri: _modDef16899 };
  obj3.source = obj4;
  obj3.style = tmp.headerAsset;
  obj2.children = closure_1_10(FastImageDefault, obj3);
  const items = [closure_1_10(hasOwnProperty, obj2), ];
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
  const obj7 = { accessible: true, accessibilityLabel: stringResult, accessibilityState: { busy: null == orbBalance }, children: closure_1_10(tmp10(14495).BalanceCounter, { value: orbBalance, onValueChange: onValueReached, onValueReached, targetTotalCounterTime: 1500, textVariant: "display-md", textColor: "text-strong" }) };
  const items1 = [closure_1_10(hasOwnProperty, obj7), closure_1_10(OrbWalletHeaderTags, {})];
  obj5.children = items1;
  items[1] = closure_1_11(hasOwnProperty, obj5);
  obj.children = items;
  return closure_1_11(hasOwnProperty, obj);
}
export function OrbChallengesCard(title) {
  title = title.title;
  const challenges = title.challenges;
  const isLoading = title.isLoading;
  const onClaim = title.onClaim;
  const inlineNoticeProps = title.inlineNoticeProps;
  const tmp = closure_13();
  closure_5 = tmp;
  closure_6 = tmp2;
  let items = [, , , , , , , , ];
  ({ challengesLoading: arr2[0], challengesDivider: arr2[1], challengesEmpty: arr2[2] } = tmp);
  items[3] = title;
  items[4] = challenges;
  items[5] = onClaim;
  items[6] = inlineNoticeProps;
  items[7] = challenges.length > 0;
  items[8] = isLoading;
  let obj = { style: tmp.challengesCard, children: null };
  let tmp6 = null != inlineNoticeProps;
  const memo = onClaim.useMemo(() => {
    if (true === isLoading) {
      if (null == inlineNoticeProps) {
        let obj2 = { style: challengesDivider.challengesLoading, accessibilityState: { busy: true }, children: closure_2_10(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
        let tmp4 = closure_2_10(hasOwnProperty, obj2);
      }
      return tmp4;
    }
    if (closure_6) {
      let obj3 = { children: null };
      const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: title };
      let items = [
        closure_2_10(Text_Text.Text, obj4),
        challenges.map((achievementIdentifier, index) => {
            let tmp2 = index > 0;
            if (tmp2) {
              const obj = { style: challengesDivider.challengesDivider };
              tmp2 = closure_2_10(closure_5, obj);
            }
            const obj2 = { children: null };
            const items = [tmp2, ];
            const obj3 = {};
            const merged = Object.assign(achievementIdentifier);
            obj3.onClaim = onClaim;
            items[1] = closure_2_10(title(isLoading[22]).OrbChallengeListItem, obj3);
            obj2.children = items;
            return closure_2_11(onClaim.Fragment, obj2, achievementIdentifier.achievementIdentifier);
          })
      ];
      obj3.children = items;
      tmp4 = closure_2_11(closure_2_12, obj3);
    } else {
      tmp4 = null;
      if (null == inlineNoticeProps) {
        let obj = { style: challengesDivider.challengesEmpty, children: null };
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = util.intl;
        obj5.children = intl.string(_modDef2172.xOP5OP);
        const items1 = [closure_2_10(Text_Text.Text, obj5), ];
        const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: null };
        const intl2 = util.intl;
        obj6.children = intl2.string(_modDef2172.XW2CuY);
        items1[1] = closure_2_10(Text_Text.Text, obj6);
        obj.children = items1;
        tmp4 = closure_2_11(hasOwnProperty, obj);
      }
    }
  }, items);
  if (tmp6) {
    let obj2 = {};
    let merged = Object.assign(inlineNoticeProps);
    tmp6 = closure_10(title(isLoading[23]).InlineNotice, obj2);
  }
  let items1 = [tmp6, memo];
  obj.children = items1;
  return closure_11(closure_5, obj);
}
export function OrbWalletFooter() {
  const tmp = closure_13();
  const totalRedeemed = _mod9553.useFetchVirtualCurrencyTotalRedeemed().totalRedeemed;
  const obj2 = { style: tmp.footerButtons, children: null };
  const obj3 = { style: tmp.footerButton, children: null };
  const obj4 = { text: null, variant: "secondary", size: "md", icon: null, onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.JALI2K);
  obj4.icon = _modDef14715;
  obj4.onPress = openQuestHomeFromWallet;
  obj3.children = closure_1_10(components_Button_Button.Button, obj4);
  const items = [closure_1_10(hasOwnProperty, obj3), ];
  const obj5 = { style: tmp.footerButton, children: null };
  const obj6 = { text: null, variant: "secondary", size: "md", icon: null, onPress: null };
  const intl2 = util.intl;
  obj6.text = intl2.string(util.t.pWG4ze);
  obj6.icon = _modDef12329;
  obj6.onPress = openOrbsShopFromWallet;
  obj5.children = closure_1_10(components_Button_Button.Button, obj6);
  items[1] = closure_1_10(hasOwnProperty, obj5);
  obj2.children = items;
  const items1 = [closure_1_11(hasOwnProperty, obj2), ];
  const obj7 = { style: tmp.footerMeta, children: null };
  let tmp4Result = null != totalRedeemed;
  if (tmp4Result) {
    const obj8 = { children: null };
    const obj9 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const items2 = [closure_1_10(TrophyIcon.TrophyIcon, obj9), , ];
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl3 = util.intl;
    const obj11 = { orbAmount: totalRedeemed };
    obj10.children = intl3.format(_modDef2172.B5tZXw, obj11);
    items2[1] = closure_1_10(Text_Text.Text, obj10);
    items2[2] = closure_1_10(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", accessible: false, children: "\u2022" });
    obj8.children = items2;
    tmp4Result = closure_1_11(closure_1_12, obj8);
  }
  const obj12 = { children: null };
  const items3 = [tmp4Result, ];
  const obj13 = { onPress: openOrbWalletHelp, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: null };
  const obj14 = { variant: "text-sm/normal", color: "text-link", children: null };
  const intl4 = util.intl;
  obj14.children = intl4.string(util.t["5qZv9E"]);
  obj13.children = closure_1_10(Text_Text.Text, obj14);
  items3[1] = closure_1_10(React4, obj13);
  obj7.children = items3;
  items1[1] = closure_1_11(hasOwnProperty, obj7);
  obj12.children = items1;
  return closure_1_11(closure_1_12, obj12);
}
// === Module 16304: OrbWalletComponents ===

// Module 16304 (OrbWalletComponents)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import _modDef2375 from "module_2375" /* 2375 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import Text_Text from "Text/Text" /* 5504 */;
import openURLDefault from "openURL" /* 5588 */;
import FastImageDefault from "FastImage" /* 5600 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7020 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8952 */;
import QuestUtils from "QuestUtils" /* 9955 */;
import _modDef13008 from "module_13008" /* 13008 */;
import _modDef13797 from "module_13797" /* 13797 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 16300 */;
import OrbWalletUtils from "OrbWalletUtils" /* 16302 */;
import _modDef16305 from "module_16305" /* 16305 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbWalletPremiumHeaderInlineText(arg0) {
  ({ text, onPress } = arg0);
  const tmp = closure_13();
  const obj = { onPress, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: null };
  const obj2 = { style: tmp.headerInlineText, children: null };
  items = [refs(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false }), refs(Text_Text.Text, { variant: "body-xs/medium", color: "text-subtle", style: tmp.headerInlineLinkText, children: text })];
  obj2.children = items;
  obj.children = closure_1_11(hasOwnProperty, obj2);
  return refs(React4, obj);
}
function OrbWalletNitroUpsellTag() {
  orbWalletAnalyticsPage = orbWalletAnalyticsPage(16302).useOrbWalletAnalyticsPage();
  let obj = orbWalletAnalyticsPage(16302);
  openNitroCheckoutFromOrbWallet = orbWalletAnalyticsPage(16302).useOpenNitroCheckoutFromOrbWallet(openNitroCheckoutFromOrbWallet(7539).ORB_WALLET_HEADER_NITRO_UPSELL_CTA);
  items = [orbWalletAnalyticsPage, openNitroCheckoutFromOrbWallet];
  const obj3 = { text: null, onPress: null };
  const callback = noop.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj.trackOrbsClick({ pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET, ctaObject: AnalyticsLocationDefault.ORB_WALLET_HEADER_NITRO_UPSELL_CTA });
    openNitroCheckoutFromOrbWallet();
  }, items);
  const intl = orbWalletAnalyticsPage(1112).intl;
  obj3.text = intl.string(openNitroCheckoutFromOrbWallet(2375).JZycSO);
  obj3.onPress = callback;
  return closure_10(OrbWalletPremiumHeaderInlineText, obj3);
}
function OrbWalletHeaderTags(hideNitroUpsell) {
  let tmp = null;
  if (!obj.useIsPremiumSubscriber(PremiumTypes.TIER_2)) {
    tmp = null;
    if (!hideNitroUpsell.hideNitroUpsell) {
      tmp = refs(OrbWalletNitroUpsellTag, {});
    }
  }
  return tmp;
}
function openOrbWalletHelp() {
  const tmp = openURLDefault;
  tmp(HelpdeskUtilsDefault.getArticleURL(constants.ORBS_WALLET));
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1071);
({ HelpdeskArticles: closure_6, NOOP: metroImportDefault } = Constants);
const PremiumTypes = fn(1388).PremiumTypes;
const RewardFilterTypes = fn(6558).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, headerAssetSlot: { width: 48, height: 48, alignItems: "center", justifyContent: "center", overflow: "visible" }, headerAsset: { width: 68, height: 68 }, headerContent: null, headerInlineText: null, headerInlineLinkText: null, challengesCard: null, challengesLoading: null, challengesDivider: null, challengesEmpty: null, challengesEmptyText: null, challengesEmptyDescription: null, footerButtons: null, footerButton: null, footerMeta: null };
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
obj2.challengesEmpty = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.challengesEmptyText = { textAlign: "center" };
obj2.challengesEmptyDescription = { textAlign: "center", maxWidth: 242 };
let obj9 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.footerButtons = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footerButton = { flex: 1 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footerMeta = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletComponents.tsx");

export function OrbBalanceHeader(arg0) {
  ({ orbBalance, hideNitroUpsell } = arg0);
  if (hideNitroUpsell === undefined) {
    hideNitroUpsell = false;
  }
  const tmp = closure_13();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.headerAssetSlot, importantForAccessibility: "no-hide-descendants", children: null };
  const obj3 = { source: null, style: null, resizeMode: "contain" };
  const obj4 = { uri: _modDef16305 };
  obj3.source = obj4;
  obj3.style = tmp.headerAsset;
  obj2.children = refs(FastImageDefault, obj3);
  items = [refs(hasOwnProperty, obj2), ];
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
  const obj7 = { accessible: true, accessibilityLabel: stringResult, accessibilityState: { busy: null == orbBalance }, children: refs(tmp10(9442).BalanceCounter, { value: orbBalance, onValueChange: onValueReached, onValueReached, targetTotalCounterTime: 1500, trimBottomFontSpace: true, textVariant: "display-md", textColor: "text-strong" }) };
  const items1 = [refs(hasOwnProperty, obj7), refs(OrbWalletHeaderTags, { hideNitroUpsell })];
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
  items = [, , , , , , , , , , ];
  ({ challengesLoading: arr2[0], challengesDivider: arr2[1], challengesEmpty: arr2[2], challengesEmptyText: arr2[3], challengesEmptyDescription: arr2[4] } = tmp);
  items[5] = title;
  items[6] = challenges;
  items[7] = onClaim;
  items[8] = inlineNoticeProps;
  items[9] = challenges.length > 0;
  items[10] = isLoading;
  let obj = { style: tmp.challengesCard, children: null };
  let tmp6 = null != inlineNoticeProps;
  const memo = onClaim.useMemo(() => {
    if (true === isLoading) {
      if (null == inlineNoticeProps) {
        let obj2 = { style: challengesDivider.challengesLoading, accessibilityState: { busy: true }, children: refs(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
        let tmp4 = refs(hasOwnProperty, obj2);
      }
      return tmp4;
    }
    if (closure_6) {
      let obj3 = { children: null };
      const obj4 = { variant: "body-sm/normal", color: "text-subtle", children: title };
      items = [
        refs(Text_Text.Text, obj4),
        challenges.map((achievementIdentifier, index) => {
            let tmp2 = index > 0;
            if (tmp2) {
              const obj = { style: challengesDivider.challengesDivider };
              tmp2 = closure_2_10(closure_5, obj);
            }
            const obj2 = { children: null };
            items = [tmp2, ];
            const obj3 = {};
            const merged = Object.assign(achievementIdentifier);
            obj3.onClaim = onClaim;
            items[1] = closure_2_10(title(isLoading[20]).OrbChallengeListItem, obj3);
            obj2.children = items;
            return closure_2_11(onClaim.Fragment, obj2, achievementIdentifier.achievementIdentifier);
          })
      ];
      obj3.children = items;
      tmp4 = closure_2_11(application_id, obj3);
    } else {
      tmp4 = null;
      if (null == inlineNoticeProps) {
        let obj = { style: challengesDivider.challengesEmpty, children: null };
        const obj5 = { variant: "body-sm/medium", color: "text-default", style: challengesDivider.challengesEmptyText, children: null };
        const intl = util.intl;
        obj5.children = intl.string(_modDef2375.THPdcL);
        const items1 = [refs(Text_Text.Text, obj5), ];
        const obj6 = { variant: "body-xs/normal", color: "text-subtle", style: challengesDivider.challengesEmptyDescription, children: null };
        const intl2 = util.intl;
        obj6.children = intl2.string(_modDef2375.lRO18o);
        items1[1] = refs(Text_Text.Text, obj6);
        obj.children = items1;
        tmp4 = closure_2_11(hasOwnProperty, obj);
      }
    }
  }, items);
  if (tmp6) {
    let obj2 = {};
    let merged = Object.assign(inlineNoticeProps);
    tmp6 = closure_10(title(isLoading[21]).InlineNotice, obj2);
  }
  let items1 = [tmp6, memo];
  obj.children = items1;
  return closure_11(closure_5, obj);
}
export function OrbWalletFooter() {
  const tmp = closure_13();
  orbWalletAnalyticsPage = orbWalletAnalyticsPage(16302).useOrbWalletAnalyticsPage();
  let obj = orbWalletAnalyticsPage(16302);
  const totalRedeemed = orbWalletAnalyticsPage(9566).useFetchVirtualCurrencyTotalRedeemed().totalRedeemed;
  items = [orbWalletAnalyticsPage];
  const items1 = [orbWalletAnalyticsPage];
  const callback = noop.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj.trackOrbsClick({ pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_FOOTER, ctaObject: AnalyticsLocationDefault.ORB_WALLET_QUEST_HOME_CTA });
    const obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_FOOTER, ctaObject: AnalyticsLocationDefault.ORB_WALLET_QUEST_HOME_CTA };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj4 = QuestUtils;
    obj4.openQuestHome({ mergeExistingRoutes: true, filter: RewardFilterTypes.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.ORBS_BALANCE_MENU });
  }, items);
  let obj3 = { style: tmp.footerButtons, children: null };
  let obj4 = { style: tmp.footerButton, children: null };
  const callback1 = noop.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj.trackOrbsClick({ pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_FOOTER, ctaObject: AnalyticsLocationDefault.ORB_WALLET_SHOP_CTA });
    const obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_FOOTER, ctaObject: AnalyticsLocationDefault.ORB_WALLET_SHOP_CTA };
    const obj4 = { analyticsLocations: null };
    items = [AnalyticsLocationDefault.ORB_WALLET];
    obj4.analyticsLocations = items;
    const result = OrbWalletUtils.navigateToShopFromOrbWallet(obj4);
  }, items1);
  const obj5 = { text: null, variant: "secondary", size: "md", icon: null, onPress: null };
  const intl = orbWalletAnalyticsPage(1112).intl;
  obj5.text = intl.string(orbWalletAnalyticsPage(1112).t.JALI2K);
  obj5.icon = _modDef13797;
  obj5.onPress = callback;
  obj4.children = closure_10(orbWalletAnalyticsPage(5511).Button, obj5);
  const items2 = [closure_10(closure_5, obj4), ];
  const obj6 = { style: tmp.footerButton, children: null };
  const obj7 = { text: null, variant: "secondary", size: "md", icon: null, onPress: null };
  const intl2 = orbWalletAnalyticsPage(1112).intl;
  obj7.text = intl2.string(orbWalletAnalyticsPage(1112).t.pWG4ze);
  obj7.icon = _modDef13008;
  obj7.onPress = callback1;
  obj6.children = closure_10(orbWalletAnalyticsPage(5511).Button, obj7);
  items2[1] = closure_10(closure_5, obj6);
  obj3.children = items2;
  const items3 = [closure_11(closure_5, obj3), ];
  const obj8 = { style: tmp.footerMeta, children: null };
  let tmp7Result = null != totalRedeemed;
  if (tmp7Result) {
    const obj9 = { children: null };
    const obj10 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const items4 = [closure_10(tmp2(9814).TrophyIcon, obj10), , ];
    const obj11 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl3 = tmp2(1112).intl;
    const obj12 = { orbAmount: totalRedeemed };
    obj11.children = intl3.format(_modDef2375.B5tZXw, obj12);
    items4[1] = closure_10(tmp2(5504).Text, obj11);
    items4[2] = closure_10(tmp2(5504).Text, { variant: "body-xs/normal", color: "text-subtle", accessible: false, children: "\u2022" });
    obj9.children = items4;
    tmp7Result = closure_11(closure_12, obj9);
  }
  const obj13 = { children: null };
  const items5 = [tmp7Result, ];
  const obj14 = { onPress: openOrbWalletHelp, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: null };
  const obj15 = { variant: "body-sm/normal", color: "text-link", children: null };
  const intl4 = tmp2(1112).intl;
  obj15.children = intl4.string(orbWalletAnalyticsPage(1112).t["5qZv9E"]);
  obj14.children = closure_10(orbWalletAnalyticsPage(5504).Text, obj15);
  items5[1] = closure_10(closure_4, obj14);
  obj8.children = items5;
  items3[1] = closure_11(closure_5, obj8);
  obj13.children = items3;
  return closure_11(closure_12, obj13);
}
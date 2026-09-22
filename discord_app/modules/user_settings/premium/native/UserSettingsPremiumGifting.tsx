// === Module 13826: UserSettingsPremiumGifting ===

// Module 13826 (UserSettingsPremiumGifting)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4995 */;
import TableRowGroup from "TableRowGroup" /* 5906 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7237 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7242 */;
import BadgeId from "BadgeId" /* 8457 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8470 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9482 */;
import OutboundPromotionCardDefault from "OutboundPromotionCard" /* 13829 */;
import EntitlementGiftGroupCardDefault from "EntitlementGiftGroupCard" /* 13835 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8465 */;
import EntitlementStore from "EntitlementStore" /* 7639 */;

const require = globalThis.__r;

require = fn;
function GiftingSectionTitle(title) {
  return closure_1_14(TableRowGroup.TableRowGroupTitle, { title: title.title });
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: c10, AnalyticsPages: closure_11 } = Constants);
const PremiumConstants = fn(1374);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4757);
let obj = { scrollView: { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL }, giftingSettingsContainer: { flex: 1 }, inventorySectionWrapper: { flex: 1 }, giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 }, emptyGiftLinks: null, emptyImage: null, emptyGiftHeader: null, emptyGiftDescription: null, emptyGiftInformation: null, titleWrapper: null, cardText: null, tierCard: null, giftPurchaseButton: null, buttonWrapper: null, loading: null, warningMargins: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj.emptyGiftLinks = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.emptyImage = { marginRight: 18 };
obj.emptyGiftHeader = { lineHeight: 20 };
obj.emptyGiftDescription = { flex: 1 };
obj.emptyGiftInformation = { marginTop: 8 };
obj.titleWrapper = { paddingTop: 28, paddingBottom: 8 };
obj.cardText = { lineHeight: 18 };
obj.tierCard = { marginTop: 16 };
obj.giftPurchaseButton = { marginTop: 8, height: 40 };
obj.buttonWrapper = { marginTop: 16 };
obj.loading = { marginTop: 32 };
obj.warningMargins = { marginHorizontal: 16 };
let closure_17 = createStyles.createStyles(obj);
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default noop.forwardRef(function UserSettingsPremiumGifting(arg0, ref) {
  ({ recipientUserId, analyticsLocation } = arg0);
  if (analyticsLocation === undefined) {
    let obj = { page: constants2.GIFTING_SETTINGS };
    analyticsLocation = obj;
  }
  _require = undefined;
  let stateFromStoresArray;
  let memo;
  _slicedToArray = undefined;
  let enabled;
  c5 = undefined;
  const tmp2 = closure_17();
  stateFromStoresArray(memo[11])();
  _require = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const items = [EntitlementStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = enabled.useMemo(() => _modDef12.groupBy(stateFromStoresArray, (skuId) => closure_1_0(memo[16]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = require("initialize");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const obj4 = require("BlockedPaymentsCountryExperiment");
  const outboundPromotions = require("PromotionsHooks").useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c3, promotionsLoaded } = outboundPromotions);
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  const obj5 = require("PromotionsHooks");
  const items2 = [BadgeDirectoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => badgeById.getBadgeById(closure_0(memo[20]).BadgeId.GIFTING));
  const obj6 = require("initialize");
  [tmp13, c5] = enabled.useState(false);
  const tmp12 = _slicedToArray(enabled.useState(false), 2);
  const subscriptionPlansLoaded = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
  const effect = enabled.useEffect(() => {
    DispatcherDefault.wait(() => {
      const giftableEntitlements = closure_0(memo[23]).fetchGiftableEntitlements();
      giftableEntitlements.then(() => closure_1_5(true));
      const obj = closure_0(memo[23]);
      stateFromStoresArray(memo[24]).init();
    });
  }, []);
  const items3 = [enabled];
  const effect1 = enabled.useEffect(() => {
    if (enabled) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items3);
  const obj8 = { paddingBottom: stateFromStoresArray(memo[13])().bottom + stateFromStoresArray(memo[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    const obj9 = { style: tmp2.giftingSettingsContainer, children: null };
    const obj10 = { ref, contentInset: { top: 40 }, contentContainerStyle: obj8, style: tmp2.scrollView, children: closure_14(tmp3(tmp4[37]), {}) };
    obj9.children = closure_14(closure_7, obj10);
    let tmp17Result8 = closure_14(closure_6, obj9);
  } else {
    const obj11 = { style: tmp2.giftingSettingsContainer, children: null };
    const items4 = [closure_14(tmp3(tmp4[38]), {}), ];
    const obj12 = { ref, style: tmp2.scrollView, contentContainerStyle: obj8, children: null };
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      const obj13 = { children: null };
      const obj14 = { style: tmp2.titleWrapper, children: null };
      const obj15 = { title: null };
      const intl = tmp6(tmp4[31]).intl;
      obj15.title = intl.string(tmp3(tmp4[39]).sFokBp);
      obj14.children = closure_14(GiftingSectionTitle, obj15);
      const items5 = [closure_14(closure_6, obj14), ];
      const obj16 = { analyticsLocation };
      items5[1] = closure_14(tmp3(tmp4[40]), obj16);
      obj13.children = items5;
      enabled = closure_15(closure_16, obj13);
    }
    const items6 = [enabled, , ];
    if (tmp13) {
      if (promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            const obj17 = { style: tmp2.emptyGiftLinks, children: null };
            const obj18 = { style: tmp2.emptyImage, source: tmp3(tmp4[29]) };
            const items7 = [closure_14(c5, obj18), ];
            const obj19 = { style: tmp2.emptyGiftDescription, accessible: true, children: null };
            const obj20 = { style: tmp2.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp6(tmp4[31]).intl;
            obj20.children = intl3.string(tmp6(tmp4[31]).t.B1qgZn);
            const items8 = [closure_14(tmp6(tmp4[30]).Text, obj20), ];
            const obj21 = { style: tmp2.emptyGiftInformation, variant: "text-sm/medium", color: "text-default", children: null };
            const intl4 = tmp6(tmp4[31]).intl;
            obj21.children = intl4.string(tmp6(tmp4[31]).t["OV/u0n"]);
            items8[1] = closure_14(tmp6(tmp4[30]).Text, obj21);
            obj19.children = items8;
            items7[1] = closure_15(closure_6, obj19);
            obj17.children = items7;
            let tmp17Result = closure_15(closure_6, obj17);
          }
          const obj22 = { style: tmp2.inventorySectionWrapper, children: null };
          let tmp17Result5 = null;
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj23 = { children: null };
            const obj24 = { style: tmp2.titleWrapper, children: null };
            const obj25 = { title: null };
            const intl8 = tmp6(tmp4[31]).intl;
            obj25.title = intl8.string(tmp6(tmp4[31]).t.wFsj3B);
            obj24.children = closure_14(GiftingSectionTitle, obj25);
            const items9 = [
              closure_14(closure_6, obj24),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return closure_1_14(stateFromStoresArray(memo[32]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((outboundPromotion) => closure_2_14(OutboundPromotionCardDefault, { outboundPromotion, code: _undefined[outboundPromotion.id] }, outboundPromotion.id))
            ];
            obj23.children = items9;
            tmp17Result5 = closure_15(closure_16, obj23);
          }
          const items10 = [tmp17Result5, ];
          let tmp17Result6 = null;
          if (keys.length > 0) {
            const obj26 = { children: null };
            const obj27 = { style: tmp2.titleWrapper, children: null };
            const obj28 = { title: null };
            const intl2 = tmp6(tmp4[31]).intl;
            obj28.title = intl2.string(tmp6(tmp4[31]).t["9KeUbY"]);
            obj27.children = closure_14(GiftingSectionTitle, obj28);
            const items11 = [
              closure_14(closure_6, obj27),
              keys.map((item) => {
                          ({ skuId, subscriptionPlanId, giftStyle } = GiftCodeUtils.parseComboId(item));
                          return closure_2_14(EntitlementGiftGroupCardDefault, { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle }, item);
                        })
            ];
            obj26.children = items11;
            tmp17Result6 = closure_15(closure_16, obj26);
          }
          items10[1] = tmp17Result6;
          obj22.children = items10;
          tmp17Result = closure_15(closure_6, obj22);
        }
      }
    }
    const obj29 = { style: tmp2.loading };
    const obj30 = { children: closure_14(tmp6(tmp4[41]).ActivityIndicator, obj29) };
    items6[1] = closure_14(closure_6, obj30);
    let tmp17Result7 = null;
    if (subscriptionPlansLoaded) {
      const obj31 = { style: tmp2.giftPurchaseSectionWrapper, children: null };
      const obj32 = { title: null };
      function handleLearnMorePremiumClick() {
        UserSettingsModalActionCreatorsDefault.setSection(constants.PREMIUM_GIFTING);
        const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants.PREMIUM_GIFTING });
        closure_0.push(constants.PREMIUM);
      }
      function handleLearnMoreNitroBasicClick() {
        UserSettingsModalActionCreatorsDefault.setSection(constants.PREMIUM_GIFTING);
        const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants.PREMIUM_GIFTING });
        const obj3 = { destinationPane: constants.PREMIUM_GIFTING };
        closure_0.push(constants.PREMIUM, { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING });
      }
      const intl5 = tmp6(tmp4[31]).intl;
      obj32.title = intl5.string(tmp6(tmp4[31]).t["55Ccy0"]);
      const items12 = [closure_14(GiftingSectionTitle, obj32), , , ];
      const obj33 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard, children: null };
      const obj34 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl6 = tmp6(tmp4[31]).intl;
      const obj35 = { onClick: handleLearnMorePremiumClick };
      obj34.children = intl6.format(tmp6(tmp4[31]).t.thORji, obj35);
      const items13 = [closure_14(tmp6(tmp4[30]).Text, obj34), ];
      const obj36 = { style: tmp2.buttonWrapper, children: null };
      const obj37 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_2, analyticsLocation };
      const items14 = [closure_14(tmp3(tmp4[35]), obj37), ];
      const obj38 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_2, analyticsLocation };
      items14[1] = closure_14(tmp3(tmp4[35]), obj38);
      obj36.children = items14;
      items13[1] = closure_15(closure_6, obj36);
      obj33.children = items13;
      items12[1] = closure_15(tmp3(tmp4[34]), obj33);
      const obj39 = { style: tmp2.warningMargins };
      items12[2] = closure_14(tmp3(tmp4[36]), obj39);
      const obj40 = { children: null };
      const obj41 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard, children: null };
      const tmp3Result = tmp3(tmp4[34]);
      const obj42 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl7 = tmp6(tmp4[31]).intl;
      const obj43 = { onClick: handleLearnMoreNitroBasicClick };
      obj42.children = intl7.format(tmp6(tmp4[31]).t.NmpnsP, obj43);
      const items15 = [closure_14(tmp6(tmp4[30]).Text, obj42), ];
      const obj44 = { style: tmp2.buttonWrapper, children: null };
      const obj45 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_0, analyticsLocation };
      const items16 = [closure_14(tmp3(tmp4[35]), obj45), ];
      const obj46 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_0, analyticsLocation };
      items16[1] = closure_14(tmp3(tmp4[35]), obj46);
      obj44.children = items16;
      items15[1] = closure_15(closure_6, obj44);
      obj41.children = items15;
      const items17 = [closure_15(tmp3(tmp4[34]), obj41), ];
      const obj47 = { style: tmp2.warningMargins };
      items17[1] = closure_14(tmp3(tmp4[36]), obj47);
      obj40.children = items17;
      items12[3] = closure_15(closure_16, obj40);
      obj31.children = items12;
      tmp17Result7 = closure_15(closure_6, obj31);
      const tmp3Result2 = tmp3(tmp4[34]);
    }
    items6[2] = tmp17Result7;
    obj12.children = items6;
    items4[1] = closure_15(closure_7, obj12);
    obj11.children = items4;
    tmp17Result8 = closure_15(closure_6, obj11);
  }
  return tmp17Result8;
});
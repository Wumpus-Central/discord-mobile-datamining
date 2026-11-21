// === Module 14166: UserSettingsPremiumGifting ===

// Module 14166 (UserSettingsPremiumGifting)
import applyDefault from "apply" /* 12 */;
import nativeDefault from "native" /* 575 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6347 */;
import TableRowGroup from "TableRowGroup" /* 7348 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7411 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7415 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 8123 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 9107 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10505 */;
import OutboundPromotionCardDefault from "OutboundPromotionCard" /* 14168 */;
import EntitlementGiftGroupCardDefault from "EntitlementGiftGroupCard" /* 14174 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8137 */;
import EntitlementStore from "EntitlementStore" /* 8120 */;

const require = globalThis.__r;

require = fn;
function GiftingSectionTitle(title) {
  return state(TableRowGroup.TableRowGroupTitle, { title: title.title });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1071);
({ UserSettingsSections: closure_9, AnalyticsPages: closure_10 } = Constants);
const PremiumConstants = fn(1388);
({ PremiumTypes: closure_11, SubscriptionPlans: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { scrollView: { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL }, giftingSettingsContainer: { flex: 1 }, inventorySectionWrapper: { flex: 1 }, giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 }, emptyGiftLinks: null, emptyImage: null, emptyGiftHeader: null, emptyGiftDescription: null, emptyGiftInformation: null, titleWrapper: null, cardText: null, tierCard: null, giftPurchaseButton: null, buttonWrapper: null, loading: null, warningMargins: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj2.emptyGiftLinks = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.emptyImage = { marginRight: 18 };
obj2.emptyGiftHeader = { lineHeight: 20 };
obj2.emptyGiftDescription = { flex: 1 };
obj2.emptyGiftInformation = { marginTop: 8 };
obj2.titleWrapper = { paddingTop: 28, paddingBottom: 8 };
obj2.cardText = { lineHeight: 18 };
obj2.tierCard = { marginTop: 16 };
obj2.giftPurchaseButton = { marginTop: 8, height: 40 };
obj2.buttonWrapper = { marginTop: 16 };
obj2.loading = { marginTop: 32 };
obj2.warningMargins = { marginHorizontal: 16 };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default function UserSettingsPremiumGifting(ref) {
  ({ recipientUserId, analyticsLocation } = ref);
  if (analyticsLocation === undefined) {
    let obj = { page: constants2.GIFTING_SETTINGS };
    analyticsLocation = obj;
  }
  _require = undefined;
  let stateFromStoresArray;
  let memo;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp2 = closure_16();
  stateFromStoresArray(memo[11])();
  _require = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  items = [EntitlementStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = noop.useMemo(() => applyDefault.groupBy(stateFromStoresArray, (skuId) => closure_1_0(memo[16]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = require("initialize");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const obj4 = require("BlockedPaymentsCountryExperiment");
  const outboundPromotions = require("PromotionsHooks").useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c3, promotionsLoaded } = outboundPromotions);
  const obj5 = require("PromotionsHooks");
  const items2 = [BadgeDirectoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => badgeById.getBadgeById(closure_0(memo[19]).BadgeId.GIFTING));
  const obj6 = require("initialize");
  [tmp13, c4] = noop.useState(false);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  const subscriptionPlansLoaded = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
  const effect = noop.useEffect(() => {
    const giftableEntitlements = EntitlementActionCreators.fetchGiftableEntitlements();
    giftableEntitlements.then(() => closure_1_4(true));
    BillingActionCreatorsDefault.init();
  }, []);
  const effect1 = noop.useEffect(() => {
    const badge = closure_0(memo[23]).fetchBadge(closure_0(memo[19]).BadgeId.GIFTING);
  }, []);
  const obj8 = { paddingBottom: stateFromStoresArray(memo[13])().bottom + stateFromStoresArray(memo[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    const obj9 = { style: tmp2.giftingSettingsContainer, children: null };
    const obj10 = { ref, contentInset: { top: 40 }, contentContainerStyle: obj8, style: tmp2.scrollView, children: closure_13(tmp3(tmp4[36]), {}) };
    obj9.children = closure_13(closure_6, obj10);
    let tmp17Result10 = closure_13(closure_5, obj9);
  } else {
    const obj11 = { style: tmp2.giftingSettingsContainer, children: null };
    const items3 = [closure_13(tmp3(tmp4[37]), {}), ];
    const obj12 = { ref, style: tmp2.scrollView, contentContainerStyle: obj8, children: null };
    let tmp17Result = null != stateFromStores;
    if (tmp17Result) {
      const obj13 = { children: null };
      const obj14 = { style: tmp2.titleWrapper, children: null };
      const obj15 = { title: null };
      const intl = tmp6(tmp4[30]).intl;
      obj15.title = intl.string(tmp3(tmp4[38]).sFokBp);
      obj14.children = closure_13(GiftingSectionTitle, obj15);
      const items4 = [closure_13(closure_5, obj14), ];
      const obj16 = { analyticsLocation };
      items4[1] = closure_13(tmp3(tmp4[39]), obj16);
      obj13.children = items4;
      tmp17Result = closure_14(closure_15, obj13);
    }
    const items5 = [tmp17Result, , ];
    if (tmp13) {
      if (promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            const obj17 = { style: tmp2.emptyGiftLinks, children: null };
            const obj18 = { style: tmp2.emptyImage, source: tmp3(tmp4[28]) };
            const items6 = [closure_13(tmp3(tmp4[27]), obj18), ];
            const obj19 = { style: tmp2.emptyGiftDescription, accessible: true, children: null };
            const obj20 = { style: tmp2.emptyGiftHeader, variant: "body-md/semibold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp6(tmp4[30]).intl;
            obj20.children = intl3.string(tmp6(tmp4[30]).t.B1qgZn);
            const items7 = [closure_13(tmp6(tmp4[29]).Text, obj20), ];
            const obj21 = { style: tmp2.emptyGiftInformation, variant: "body-sm/medium", color: "text-default", children: null };
            const intl4 = tmp6(tmp4[30]).intl;
            obj21.children = intl4.string(tmp6(tmp4[30]).t["OV/u0n"]);
            items7[1] = closure_13(tmp6(tmp4[29]).Text, obj21);
            obj19.children = items7;
            items6[1] = closure_14(closure_5, obj19);
            obj17.children = items6;
            let tmp17Result6 = closure_14(closure_5, obj17);
            const tmp3Result = tmp3(tmp4[27]);
          }
          const obj22 = { style: tmp2.inventorySectionWrapper, children: null };
          let tmp17Result7 = null;
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj23 = { children: null };
            const obj24 = { style: tmp2.titleWrapper, children: null };
            const obj25 = { title: null };
            const intl8 = tmp6(tmp4[30]).intl;
            obj25.title = intl8.string(tmp6(tmp4[30]).t.wFsj3B);
            obj24.children = closure_13(GiftingSectionTitle, obj25);
            const items8 = [
              closure_13(closure_5, obj24),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return closure_1_13(stateFromStoresArray(memo[31]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((outboundPromotion) => state(OutboundPromotionCardDefault, { outboundPromotion, code: _undefined[outboundPromotion.id] }, outboundPromotion.id))
            ];
            obj23.children = items8;
            tmp17Result7 = closure_14(closure_15, obj23);
          }
          const items9 = [tmp17Result7, ];
          let tmp17Result8 = null;
          if (keys.length > 0) {
            const obj26 = { children: null };
            const obj27 = { style: tmp2.titleWrapper, children: null };
            const obj28 = { title: null };
            const intl2 = tmp6(tmp4[30]).intl;
            obj28.title = intl2.string(tmp6(tmp4[30]).t["9KeUbY"]);
            obj27.children = closure_13(GiftingSectionTitle, obj28);
            const items10 = [
              closure_13(closure_5, obj27),
              keys.map((item) => {
                          ({ skuId, subscriptionPlanId, giftStyle } = GiftCodeUtils.parseComboId(item));
                          return state(EntitlementGiftGroupCardDefault, { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle }, item);
                        })
            ];
            obj26.children = items10;
            tmp17Result8 = closure_14(closure_15, obj26);
          }
          items9[1] = tmp17Result8;
          obj22.children = items9;
          tmp17Result6 = closure_14(closure_5, obj22);
        }
      }
    }
    const obj29 = { style: tmp2.loading };
    const obj30 = { children: closure_13(tmp6(tmp4[40]).ActivityIndicator, obj29) };
    items5[1] = closure_13(closure_5, obj30);
    let tmp17Result9 = null;
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
      const intl5 = tmp6(tmp4[30]).intl;
      obj32.title = intl5.string(tmp6(tmp4[30]).t["55Ccy0"]);
      const items11 = [closure_13(GiftingSectionTitle, obj32), , , ];
      const obj33 = { premiumType: closure_11.TIER_2, style: tmp2.tierCard, children: null };
      const obj34 = { style: tmp2.cardText, variant: "body-sm/medium", color: "text-default", children: null };
      const intl6 = tmp6(tmp4[30]).intl;
      const obj35 = { onClick: handleLearnMorePremiumClick };
      obj34.children = intl6.format(tmp6(tmp4[30]).t.thORji, obj35);
      const items12 = [closure_13(tmp6(tmp4[29]).Text, obj34), ];
      const obj36 = { style: tmp2.buttonWrapper, children: null };
      const obj37 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_12.PREMIUM_YEAR_TIER_2, analyticsLocation };
      const items13 = [closure_13(tmp3(tmp4[34]), obj37), ];
      const obj38 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_12.PREMIUM_MONTH_TIER_2, analyticsLocation };
      items13[1] = closure_13(tmp3(tmp4[34]), obj38);
      obj36.children = items13;
      items12[1] = closure_14(closure_5, obj36);
      obj33.children = items12;
      items11[1] = closure_14(tmp3(tmp4[33]), obj33);
      const obj39 = { style: tmp2.warningMargins };
      items11[2] = closure_13(tmp3(tmp4[35]), obj39);
      const obj40 = { children: null };
      const obj41 = { premiumType: closure_11.TIER_0, style: tmp2.tierCard, children: null };
      const tmp3Result3 = tmp3(tmp4[33]);
      const obj42 = { style: tmp2.cardText, variant: "body-sm/medium", color: "text-default", children: null };
      const intl7 = tmp6(tmp4[30]).intl;
      const obj43 = { onClick: handleLearnMoreNitroBasicClick };
      obj42.children = intl7.format(tmp6(tmp4[30]).t.NmpnsP, obj43);
      const items14 = [closure_13(tmp6(tmp4[29]).Text, obj42), ];
      const obj44 = { style: tmp2.buttonWrapper, children: null };
      const obj45 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_12.PREMIUM_YEAR_TIER_0, analyticsLocation };
      const items15 = [closure_13(tmp3(tmp4[34]), obj45), ];
      const obj46 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_12.PREMIUM_MONTH_TIER_0, analyticsLocation };
      items15[1] = closure_13(tmp3(tmp4[34]), obj46);
      obj44.children = items15;
      items14[1] = closure_14(closure_5, obj44);
      obj41.children = items14;
      const items16 = [closure_14(tmp3(tmp4[33]), obj41), ];
      const obj47 = { style: tmp2.warningMargins };
      items16[1] = closure_13(tmp3(tmp4[35]), obj47);
      obj40.children = items16;
      items11[3] = closure_14(closure_15, obj40);
      obj31.children = items11;
      tmp17Result9 = closure_14(closure_5, obj31);
      const tmp3Result4 = tmp3(tmp4[33]);
    }
    items5[2] = tmp17Result9;
    obj12.children = items5;
    items3[1] = closure_14(closure_6, obj12);
    obj11.children = items3;
    tmp17Result10 = closure_14(closure_5, obj11);
  }
  return tmp17Result10;
};
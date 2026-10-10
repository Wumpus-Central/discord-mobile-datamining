// === Module 13825: UserSettingsPremiumGifting ===

// Module 13825 (UserSettingsPremiumGifting)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Text_Text from "Text/Text" /* 5088 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5633 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6153 */;
import FastImageDefault from "FastImage" /* 6156 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6679 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6683 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 7115 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7133 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 7138 */;
import BadgeId from "BadgeId" /* 8308 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8321 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9394 */;
import _modDef13826 from "module_13826" /* 13826 */;
import OutboundPromotionCardDefault from "OutboundPromotionCard" /* 13827 */;
import EntitlementGiftGroupCardDefault from "EntitlementGiftGroupCard" /* 13833 */;
import PremiumTierCardDefault from "PremiumTierCard" /* 13835 */;
import GiftPurchaseButtonDefault from "GiftPurchaseButton" /* 13838 */;
import PremiumUnverifiedWarningDefault from "PremiumUnverifiedWarning" /* 13840 */;
import UserSettingsGiftingBadgeProgressDefault from "UserSettingsGiftingBadgeProgress" /* 13841 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8316 */;
import EntitlementStore from "EntitlementStore" /* 7109 */;

const require = globalThis.__r;

const _modDef12 = tmp8(12);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ UserSettingsSections: closure_9, AnalyticsPages: c10 } = Constants);
const PremiumConstants = fn(1392);
({ PremiumTypes: closure_11, SubscriptionPlans: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5092);
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
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSectionTitle(title) {
  const cResult = c.c(2);
  title = title.title;
  if (cResult[0] !== title) {
    const obj2 = { title };
    const tmp6 = map1(TableRowGroup.TableRowGroupTitle, obj2);
    cResult[0] = title;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function GiftingSectionTitle(title) {
  return map1(TableRowGroup.TableRowGroupTitle, { title: title.title });
});
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsPremiumGifting(recipientUserId) {
  const cResult = recipientUserId(576).c(93);
  recipientUserId = recipientUserId.recipientUserId;
  ({ analyticsLocation, ref } = recipientUserId);
  if (cResult[0] !== analyticsLocation) {
    let tmp5 = analyticsLocation;
    if (undefined === analyticsLocation) {
      let obj2 = { page: constants2.GIFTING_SETTINGS };
      tmp5 = obj2;
    }
    cResult[0] = analyticsLocation;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  const tmp7 = closure_16();
  dependencyMap = tmp7;
  useStoreConnectionErrorAlertDefault();
  let obj = recipientUserId(576);
  const navigation = recipientUserId(1503).useNavigation();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [giftable];
    const fn = function x() {
      return giftable.getGiftable();
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp12 = fn;
    let tmp11 = items;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  let tmpResult = recipientUserId(1503);
  const stateFromStoresArray = recipientUserId(504).useStateFromStoresArray(tmp11, tmp12);
  if (cResult[4] !== stateFromStoresArray) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
      cResult[6] = L;
    } else {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
    }
    const groupByResult = _modDef12.groupBy(stateFromStoresArray, L);
    cResult[4] = stateFromStoresArray;
    cResult[5] = groupByResult;
    const tmp8Result = _modDef12;
  } else {
    class L {
      constructor(arg0) {
        obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
      }
    }
    noop = tmp15;
    const isPaymentsBlocked = tmp(7136).useIsPaymentsBlocked();
    const tmpResult7 = tmp(7136);
    const outboundPromotions = tmp(9120).useOutboundPromotions();
    const promotionsLoaded = outboundPromotions.promotionsLoaded;
    const activeOutboundPromotions = outboundPromotions.activeOutboundPromotions;
    BadgeDirectoryStore = outboundPromotions.claimedEndedOutboundPromotions;
    giftable = outboundPromotions.claimedOutboundPromotionCodeMap;
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
      cResult[7] = tmp22;
    } else {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
    }
    const GiftingBadgeExperiment = tmp(10095).GiftingBadgeExperiment;
    const enabled = GiftingBadgeExperiment.useConfig(tmp22).enabled;
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
      let items1 = [BadgeDirectoryStore];
      class K {
        constructor() {
          return closure_7.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
        }
      }
      cResult[8] = items1;
      cResult[9] = K;
      let tmp24 = K;
      const tmp23 = items1;
    } else {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
      tmp24 = cResult[9];
    }
    const tmpResult8 = tmp(9120);
    const stateFromStores = tmp(504).useStateFromStores(tmp23, tmp24);
    const tmp27 = navigation(noop.useState(false), 2);
    constants2 = tmp27[0];
    closure_11 = tmp27[1];
    const tmpResult9 = tmp(504);
    const subscriptionPlansLoaded = tmp(13668).useSubscriptionPlansLoaded();
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
      let items2 = [];
      class K {
        constructor() {
          return closure_7.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
        }
      }
      cResult[11] = tmp31;
      let tmp30 = tmp31;
      const tmp29 = items2;
    } else {
      class L {
        constructor(arg0) {
          obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(recipientUserId.skuId, recipientUserId.subscriptionPlanId, recipientUserId.giftStyle);
        }
      }
      tmp30 = cResult[11];
    }
    const effect = obj9.useEffect(tmp30, tmp29);
    if (cResult[12] !== enabled) {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
      const items3 = [enabled];
      class K {
        constructor() {
          return closure_7.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
        }
      }
      cResult[12] = enabled;
      cResult[13] = X;
      cResult[14] = items3;
      let tmp34 = items3;
    } else {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
      tmp34 = cResult[14];
    }
    const effect1 = obj9.useEffect(X, tmp34);
    if (cResult[15] !== navigation) {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
      cResult[15] = navigation;
      class K {
        constructor() {
          return closure_7.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
        }
      }
      cResult[16] = tmp37;
    } else {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
    }
    const onClick = tmp37;
    if (cResult[17] !== navigation) {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
      cResult[17] = navigation;
      class K {
        constructor() {
          return closure_7.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
        }
      }
      cResult[18] = tmp39;
    } else {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
    }
    const onClick2 = tmp39;
    if (cResult[19] === tmp7.emptyGiftDescription) {
      class X {
        constructor() {
          if (enabled) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            badge = obj.fetchBadge(closure_0(closure_2[22]).BadgeId.GIFTING);
          }
          return;
        }
      }
    }
    function renderEmptyState() {
      const obj = { style: closure_2.emptyGiftLinks, children: null };
      const obj2 = { style: closure_2.emptyImage, source: _modDef13826 };
      const items = [map1(FastImageDefault, obj2), ];
      const obj3 = { style: closure_2.emptyGiftDescription, accessible: true, children: null };
      const obj4 = { style: closure_2.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.B1qgZn);
      const items1 = [map1(Text_Text.Text, obj4), ];
      const obj5 = { style: closure_2.emptyGiftInformation, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t["OV/u0n"]);
      items1[1] = map1(Text_Text.Text, obj5);
      obj3.children = items1;
      items[1] = closure_2_14(hasOwnProperty, obj3);
      obj.children = items;
      return closure_2_14(hasOwnProperty, obj);
    }
    cResult[19] = tmp7.emptyGiftDescription;
    cResult[20] = tmp7.emptyGiftHeader;
    cResult[21] = tmp7.emptyGiftInformation;
    cResult[22] = tmp7.emptyGiftLinks;
    cResult[23] = tmp7.emptyImage;
    cResult[24] = renderEmptyState;
    const tmpResult10 = tmp(13668);
  }
  const tmpResult6 = recipientUserId(504);
}) : (function UserSettingsPremiumGifting(ref) {
  ({ recipientUserId, analyticsLocation } = ref);
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
  const tmp2 = closure_16();
  stateFromStoresArray(memo[13])();
  _require = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const items = [EntitlementStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = enabled.useMemo(() => _modDef12.groupBy(stateFromStoresArray, (skuId) => closure_1_0(memo[17]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = require("initialize");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const obj4 = require("BlockedPaymentsCountryExperiment");
  const outboundPromotions = require("PromotionsHooks").useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c3, promotionsLoaded } = outboundPromotions);
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  const obj5 = require("PromotionsHooks");
  const items2 = [BadgeDirectoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => badgeById.getBadgeById(closure_0(memo[22]).BadgeId.GIFTING));
  const obj6 = require("initialize");
  [tmp13, c5] = enabled.useState(false);
  const tmp12 = _slicedToArray(enabled.useState(false), 2);
  const subscriptionPlansLoaded = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
  const effect = enabled.useEffect(() => {
    const giftableEntitlements = EntitlementActionCreators.fetchGiftableEntitlements();
    giftableEntitlements.then(() => closure_1_5(true));
    BillingActionCreatorsDefault.init();
  }, []);
  const items3 = [enabled];
  const effect1 = enabled.useEffect(() => {
    if (enabled) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items3);
  const obj8 = { paddingBottom: stateFromStoresArray(memo[15])().bottom + stateFromStoresArray(memo[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    const obj9 = { style: tmp2.giftingSettingsContainer, children: null };
    const obj10 = { ref, contentInset: { top: 40 }, contentContainerStyle: obj8, style: tmp2.scrollView, children: closure_13(tmp3(tmp4[42]), {}) };
    obj9.children = closure_13(closure_6, obj10);
    let tmp17Result8 = closure_13(c5, obj9);
  } else {
    const obj11 = { style: tmp2.giftingSettingsContainer, children: null };
    const items4 = [closure_13(tmp3(tmp4[43]), {}), ];
    const obj12 = { ref, style: tmp2.scrollView, contentContainerStyle: obj8, children: null };
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      const obj13 = { children: null };
      const obj14 = { style: tmp2.titleWrapper, children: null };
      const obj15 = { title: null };
      const intl = tmp6(tmp4[33]).intl;
      obj15.title = intl.string(tmp3(tmp4[39]).sFokBp);
      obj14.children = closure_13(closure_17, obj15);
      const items5 = [closure_13(tmp18, obj14), ];
      const obj16 = { analyticsLocation };
      items5[1] = closure_13(tmp3(tmp4[40]), obj16);
      obj13.children = items5;
      enabled = closure_14(closure_15, obj13);
    }
    const items6 = [enabled, , ];
    if (tmp13) {
      if (promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            const obj17 = { style: tmp2.emptyGiftLinks, children: null };
            const obj18 = { style: tmp2.emptyImage, source: tmp3(tmp4[31]) };
            const items7 = [closure_13(tmp3(tmp4[30]), obj18), ];
            const obj19 = { style: tmp2.emptyGiftDescription, accessible: true, children: null };
            const obj20 = { style: tmp2.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp6(tmp4[33]).intl;
            obj20.children = intl3.string(tmp6(tmp4[33]).t.B1qgZn);
            const items8 = [closure_13(tmp6(tmp4[32]).Text, obj20), ];
            const obj21 = { style: tmp2.emptyGiftInformation, variant: "text-sm/medium", color: "text-default", children: null };
            const intl4 = tmp6(tmp4[33]).intl;
            obj21.children = intl4.string(tmp6(tmp4[33]).t["OV/u0n"]);
            items8[1] = closure_13(tmp6(tmp4[32]).Text, obj21);
            obj19.children = items8;
            items7[1] = closure_14(tmp18, obj19);
            obj17.children = items7;
            let tmp17Result = closure_14(tmp18, obj17);
            const tmp3Result = tmp3(tmp4[30]);
          }
          const obj22 = { style: tmp2.inventorySectionWrapper, children: null };
          let tmp17Result5 = null;
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj23 = { children: null };
            const obj24 = { style: tmp2.titleWrapper, children: null };
            const obj25 = { title: null };
            const intl8 = tmp6(tmp4[33]).intl;
            obj25.title = intl8.string(tmp6(tmp4[33]).t.wFsj3B);
            obj24.children = closure_13(closure_17, obj25);
            const items9 = [
              closure_13(tmp18, obj24),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return closure_1_13(stateFromStoresArray(memo[34]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((outboundPromotion) => map1(OutboundPromotionCardDefault, { outboundPromotion, code: _undefined[outboundPromotion.id] }, outboundPromotion.id))
            ];
            obj23.children = items9;
            tmp17Result5 = closure_14(closure_15, obj23);
          }
          const items10 = [tmp17Result5, ];
          let tmp17Result6 = null;
          if (keys.length > 0) {
            const obj26 = { children: null };
            const obj27 = { style: tmp2.titleWrapper, children: null };
            const obj28 = { title: null };
            const intl2 = tmp6(tmp4[33]).intl;
            obj28.title = intl2.string(tmp6(tmp4[33]).t["9KeUbY"]);
            obj27.children = closure_13(closure_17, obj28);
            const items11 = [
              closure_13(tmp18, obj27),
              keys.map((item) => {
                          ({ skuId, subscriptionPlanId, giftStyle } = GiftCodeUtils.parseComboId(item));
                          return map1(EntitlementGiftGroupCardDefault, { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle }, item);
                        })
            ];
            obj26.children = items11;
            tmp17Result6 = closure_14(closure_15, obj26);
          }
          items10[1] = tmp17Result6;
          obj22.children = items10;
          tmp17Result = closure_14(tmp18, obj22);
        }
      }
    }
    const obj29 = { style: tmp2.loading };
    const obj30 = { children: closure_13(tmp6(tmp4[41]).ActivityIndicator, obj29) };
    items6[1] = closure_13(c5, obj30);
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
      const intl5 = tmp6(tmp4[33]).intl;
      obj32.title = intl5.string(tmp6(tmp4[33]).t["55Ccy0"]);
      const items12 = [closure_13(closure_17, obj32), , , ];
      const obj33 = { premiumType: closure_11.TIER_2, style: tmp2.tierCard, children: null };
      const obj34 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl6 = tmp6(tmp4[33]).intl;
      const obj35 = { onClick: handleLearnMorePremiumClick };
      obj34.children = intl6.format(tmp6(tmp4[33]).t.thORji, obj35);
      const items13 = [closure_13(tmp6(tmp4[32]).Text, obj34), ];
      const obj36 = { style: tmp2.buttonWrapper, children: null };
      const obj37 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_12.PREMIUM_YEAR_TIER_2, analyticsLocation };
      const items14 = [closure_13(tmp3(tmp4[37]), obj37), ];
      const obj38 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_12.PREMIUM_MONTH_TIER_2, analyticsLocation };
      items14[1] = closure_13(tmp3(tmp4[37]), obj38);
      obj36.children = items14;
      items13[1] = closure_14(tmp18, obj36);
      obj33.children = items13;
      items12[1] = closure_14(tmp3(tmp4[36]), obj33);
      const obj39 = { style: tmp2.warningMargins };
      items12[2] = closure_13(tmp3(tmp4[38]), obj39);
      const obj40 = { children: null };
      const obj41 = { premiumType: closure_11.TIER_0, style: tmp2.tierCard, children: null };
      const tmp3Result3 = tmp3(tmp4[36]);
      const obj42 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl7 = tmp6(tmp4[33]).intl;
      const obj43 = { onClick: handleLearnMoreNitroBasicClick };
      obj42.children = intl7.format(tmp6(tmp4[33]).t.NmpnsP, obj43);
      const items15 = [closure_13(tmp6(tmp4[32]).Text, obj42), ];
      const obj44 = { style: tmp2.buttonWrapper, children: null };
      const obj45 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_12.PREMIUM_YEAR_TIER_0, analyticsLocation };
      const items16 = [closure_13(tmp3(tmp4[37]), obj45), ];
      const obj46 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_12.PREMIUM_MONTH_TIER_0, analyticsLocation };
      items16[1] = closure_13(tmp3(tmp4[37]), obj46);
      obj44.children = items16;
      items15[1] = closure_14(tmp18, obj44);
      obj41.children = items15;
      const items17 = [closure_14(tmp3(tmp4[36]), obj41), ];
      const obj47 = { style: tmp2.warningMargins };
      items17[1] = closure_13(tmp3(tmp4[38]), obj47);
      obj40.children = items17;
      items12[3] = closure_14(closure_15, obj40);
      obj31.children = items12;
      tmp17Result7 = closure_14(tmp18, obj31);
      const tmp3Result4 = tmp3(tmp4[36]);
    }
    items6[2] = tmp17Result7;
    obj12.children = items6;
    items4[1] = closure_14(closure_6, obj12);
    obj11.children = items4;
    tmp17Result8 = closure_14(tmp18, obj11);
  }
  return tmp17Result8;
});
// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import BadgeId from "../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../../badges/BadgeDirectoryActionCreators.tsx";
import PremiumFeaturesCards from "PremiumFeaturesCards.tsx";
import OutboundPromotionCardDefault from "../../../../components_native/premium/OutboundPromotionCard.tsx";
import EntitlementGiftGroupCardDefault from "../../../../components_native/premium/EntitlementGiftGroupCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";

require = fn;
function GiftingSectionTitle(title) {
  return closure_1_14(TableRowGroup.TableRowGroupTitle, { title: title.title });
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: c10, AnalyticsPages: closure_11 } = Constants);
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let obj = {
  scrollView: null,
  giftingSettingsContainer: null,
  inventorySectionWrapper: null,
  giftPurchaseSectionWrapper: null,
  emptyGiftLinks: null,
  emptyImage: null,
  emptyGiftHeader: null,
  emptyGiftDescription: null,
  emptyGiftInformation: null,
  titleWrapper: null,
  cardText: null,
  tierCard: null,
  giftPurchaseButton: null,
  buttonWrapper: null,
  loading: null,
  warningMargins: null,
};
obj = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj.scrollView = obj;
obj.giftingSettingsContainer = { flex: 1 };
obj.inventorySectionWrapper = { flex: 1 };
obj.giftPurchaseSectionWrapper = { flex: 1, paddingTop: 36, paddingBottom: 16 };
const createStyles = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 16,
  borderWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj.emptyGiftLinks = createStyles;
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
  let obj1 = require("useNavigation");
  _require = obj1.useNavigation();
  let obj2 = require("initialize");
  const items = [EntitlementStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = enabled.useMemo(
    () =>
      _modDef12.groupBy(stateFromStoresArray, (skuId) =>
        closure_1_0(memo[16]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle),
      ),
    items1,
  );
  let obj3 = require("BlockedPaymentsCountryExperiment");
  const isPaymentsBlocked = obj3.useIsPaymentsBlocked();
  let obj4 = require("PromotionsHooks");
  const outboundPromotions = obj4.useOutboundPromotions();
  ({
    activeOutboundPromotions,
    claimedEndedOutboundPromotions,
    claimedOutboundPromotionCodeMap: c3,
    promotionsLoaded,
  } = outboundPromotions);
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  let obj5 = require("initialize");
  const items2 = [BadgeDirectoryStore];
  const stateFromStores = obj5.useStateFromStores(items2, () =>
    badgeById.getBadgeById(closure_0(memo[20]).BadgeId.GIFTING),
  );
  [tmp13, c5] = _slicedToArray(enabled.useState(false), 2);
  let obj6 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj6.useSubscriptionPlansLoaded();
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
  obj = { paddingBottom: stateFromStoresArray(memo[13])().bottom + stateFromStoresArray(memo[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    obj = { style: tmp2.giftingSettingsContainer, children: null };
    obj1 = {
      ref,
      contentInset: { top: 40 },
      contentContainerStyle: obj,
      style: tmp2.scrollView,
      children: closure_14(tmp3(tmp4[37]), {}),
    };
    obj.children = closure_14(closure_7, obj1);
    let tmp17Result3 = closure_14(closure_6, obj);
  } else {
    obj2 = { style: tmp2.giftingSettingsContainer, children: null };
    const items4 = [closure_14(tmp3(tmp4[38]), {})];
    obj3 = { ref, style: tmp2.scrollView, contentContainerStyle: obj, children: null };
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      obj4 = { children: null };
      obj5 = { style: tmp2.titleWrapper, children: null };
      obj6 = { title: null };
      const intl = tmp6(tmp4[31]).intl;
      obj6.title = intl.string(tmp3(tmp4[39]).sFokBp);
      obj5.children = closure_14(GiftingSectionTitle, obj6);
      const items5 = [closure_14(closure_6, obj5)];
      const obj7 = { analyticsLocation };
      items5[1] = closure_14(tmp3(tmp4[40]), obj7);
      obj4.children = items5;
      enabled = closure_15(closure_16, obj4);
    }
    const items6 = [enabled, ,];
    if (tmp13) {
      if (promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            const obj8 = { style: tmp2.emptyGiftLinks, children: null };
            const obj9 = { style: tmp2.emptyImage, source: tmp3(tmp4[29]) };
            const items7 = [closure_14(c5, obj9)];
            const obj10 = { style: tmp2.emptyGiftDescription, accessible: true, children: null };
            const obj11 = {
              style: tmp2.emptyGiftHeader,
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: null,
            };
            const intl3 = tmp6(tmp4[31]).intl;
            obj11.children = intl3.string(tmp6(tmp4[31]).t.B1qgZn);
            const items8 = [closure_14(tmp6(tmp4[30]).Text, obj11)];
            const obj12 = {
              style: tmp2.emptyGiftInformation,
              variant: "text-sm/medium",
              color: "text-default",
              children: null,
            };
            const intl4 = tmp6(tmp4[31]).intl;
            obj12.children = intl4.string(tmp6(tmp4[31]).t["OV/u0n"]);
            items8[1] = closure_14(tmp6(tmp4[30]).Text, obj12);
            obj10.children = items8;
            items7[1] = closure_15(closure_6, obj10);
            obj8.children = items7;
            let tmp17Result = closure_15(closure_6, obj8);
          }
          const obj13 = { style: tmp2.inventorySectionWrapper, children: null };
          tmp17Result = null;
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj14 = { children: null };
            const obj15 = { style: tmp2.titleWrapper, children: null };
            const obj16 = { title: null };
            const intl8 = tmp6(tmp4[31]).intl;
            obj16.title = intl8.string(tmp6(tmp4[31]).t.wFsj3B);
            obj15.children = closure_14(GiftingSectionTitle, obj16);
            const items9 = [
              closure_14(closure_6, obj15),
              claimedEndedOutboundPromotions.map((code) => {
                const outboundPromotion = code.promotion;
                return closure_1_14(
                  stateFromStoresArray(memo[32]),
                  { outboundPromotion, code: code.code },
                  outboundPromotion.id,
                );
              }),
              activeOutboundPromotions.map((outboundPromotion) =>
                closure_2_14(
                  OutboundPromotionCardDefault,
                  { outboundPromotion, code: _undefined[outboundPromotion.id] },
                  outboundPromotion.id,
                ),
              ),
            ];
            obj14.children = items9;
            tmp17Result = closure_15(closure_16, obj14);
          }
          const items10 = [tmp17Result];
          let tmp17Result1 = null;
          if (keys.length > 0) {
            const obj17 = { children: null };
            const obj18 = { style: tmp2.titleWrapper, children: null };
            const obj19 = { title: null };
            const intl2 = tmp6(tmp4[31]).intl;
            obj19.title = intl2.string(tmp6(tmp4[31]).t["9KeUbY"]);
            obj18.children = closure_14(GiftingSectionTitle, obj19);
            const items11 = [
              closure_14(closure_6, obj18),
              keys.map((item) => {
                let obj = GiftCodeUtils;
                ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(item));
                obj = { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle };
                return closure_2_14(EntitlementGiftGroupCardDefault, obj, item);
              }),
            ];
            obj17.children = items11;
            tmp17Result1 = closure_15(closure_16, obj17);
          }
          items10[1] = tmp17Result1;
          obj13.children = items10;
          tmp17Result = closure_15(closure_6, obj13);
        }
      }
    }
    const obj20 = { style: tmp2.loading };
    const obj21 = { children: closure_14(tmp6(tmp4[41]).ActivityIndicator, obj20) };
    items6[1] = closure_14(closure_6, obj21);
    let tmp17Result2 = null;
    if (subscriptionPlansLoaded) {
      const obj22 = { style: tmp2.giftPurchaseSectionWrapper, children: null };
      const obj23 = { title: null };
      function handleLearnMorePremiumClick() {
        let obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(constants.PREMIUM_GIFTING);
        obj = { destinationPane: constants.PREMIUM_GIFTING };
        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj);
        closure_0.push(constants.PREMIUM);
      }
      function handleLearnMoreNitroBasicClick() {
        let obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(constants.PREMIUM_GIFTING);
        obj = { destinationPane: constants.PREMIUM_GIFTING };
        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj);
        obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
        closure_0.push(constants.PREMIUM, obj);
      }
      const intl5 = tmp6(tmp4[31]).intl;
      obj23.title = intl5.string(tmp6(tmp4[31]).t["55Ccy0"]);
      const items12 = [closure_14(GiftingSectionTitle, obj23), , ,];
      const obj24 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard, children: null };
      let tmp3Result = tmp3(tmp4[34]);
      const obj25 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl6 = tmp6(tmp4[31]).intl;
      const obj26 = { onClick: handleLearnMorePremiumClick };
      obj25.children = intl6.format(tmp6(tmp4[31]).t.thORji, obj26);
      const items13 = [closure_14(tmp6(tmp4[30]).Text, obj25)];
      const obj27 = { style: tmp2.buttonWrapper, children: null };
      const obj28 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "active",
        planId: closure_13.PREMIUM_YEAR_TIER_2,
        analyticsLocation,
      };
      const items14 = [closure_14(tmp3(tmp4[35]), obj28)];
      const obj29 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "secondary",
        planId: closure_13.PREMIUM_MONTH_TIER_2,
        analyticsLocation,
      };
      items14[1] = closure_14(tmp3(tmp4[35]), obj29);
      obj27.children = items14;
      items13[1] = closure_15(closure_6, obj27);
      obj24.children = items13;
      items12[1] = closure_15(tmp3Result, obj24);
      const obj30 = { style: tmp2.warningMargins };
      items12[2] = closure_14(tmp3(tmp4[36]), obj30);
      const obj31 = { children: null };
      const obj32 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard, children: null };
      tmp3Result = tmp3(tmp4[34]);
      const obj33 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl7 = tmp6(tmp4[31]).intl;
      const obj34 = { onClick: handleLearnMoreNitroBasicClick };
      obj33.children = intl7.format(tmp6(tmp4[31]).t.NmpnsP, obj34);
      const items15 = [closure_14(tmp6(tmp4[30]).Text, obj33)];
      const obj35 = { style: tmp2.buttonWrapper, children: null };
      const obj36 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "active",
        planId: closure_13.PREMIUM_YEAR_TIER_0,
        analyticsLocation,
      };
      const items16 = [closure_14(tmp3(tmp4[35]), obj36)];
      const obj37 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "secondary",
        planId: closure_13.PREMIUM_MONTH_TIER_0,
        analyticsLocation,
      };
      items16[1] = closure_14(tmp3(tmp4[35]), obj37);
      obj35.children = items16;
      items15[1] = closure_15(closure_6, obj35);
      obj32.children = items15;
      const items17 = [closure_15(tmp3Result, obj32)];
      const obj38 = { style: tmp2.warningMargins };
      items17[1] = closure_14(tmp3(tmp4[36]), obj38);
      obj31.children = items17;
      items12[3] = closure_15(closure_16, obj31);
      obj22.children = items12;
      tmp17Result2 = closure_15(closure_6, obj22);
    }
    items6[2] = tmp17Result2;
    obj3.children = items6;
    items4[1] = closure_15(closure_7, obj3);
    obj2.children = items4;
    tmp17Result3 = closure_15(closure_6, obj2);
  }
  return tmp17Result3;
});

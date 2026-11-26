// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import EntitlementActionCreators from "../../../../actions/EntitlementActionCreators.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import BillingActionCreatorsDefault from "../../../../actions/native/BillingActionCreators.tsx";
import PremiumFeaturesCards from "PremiumFeaturesCards.tsx";
import GiftedSubscriptionUtils from "../../../premium/gifting/GiftedSubscriptionUtils.tsx";
import OutboundPromotionCardDefault from "../../../premium/promotions/native/OutboundPromotionCard.tsx";
import EntitlementGiftGroupCardDefault from "../../gifting/native/EntitlementGiftGroupCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";

const require = globalThis.__r;

require = fn;
function GiftingSectionTitle(title) {
  return gesture(TableRowGroup.TableRowGroupTitle, { title: title.title });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1071);
({ UserSettingsSections: closure_10, AnalyticsPages: closure_11 } = Constants);
const PremiumConstants = fn(1389);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  scrollView: { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL },
  giftingSettingsContainer: { flex: 1 },
  inventorySectionWrapper: { flex: 1 },
  giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 },
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
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj2.emptyGiftLinks = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 16,
  borderWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
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
let closure_17 = createStyles.createStyles(obj2);
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
  let stateFromStoresArray1;
  let memo2;
  c5 = undefined;
  c7 = undefined;
  const tmp2 = closure_17();
  stateFromStoresArray(stateFromStoresArray1[12])();
  _require = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  items = [EntitlementStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => giftable.getGiftable());
  let obj3 = require("initialize");
  const items1 = [SubscriptionStore];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items1, () => {
    subscriptions = subscriptions.getSubscriptions();
    if (subscriptions == null) {
      subscriptions = {};
    }
    return closure_0(stateFromStoresArray1[16]).getGiftedSubscriptions(Object.values(subscriptions));
  });
  const items2 = [stateFromStoresArray1];
  const memo = memo2.useMemo(
    () => GiftedSubscriptionUtils.getPendingGiftSubscriptionGrants(stateFromStoresArray1),
    items2,
  );
  const items3 = [stateFromStoresArray1];
  const memo1 = memo2.useMemo(
    () =>
      applyDefault.sortBy(stateFromStoresArray1, (subscription) => {
        let num = 1;
        if ("pending" === obj.getGiftedSubscriptionRowState(subscription).kind) {
          num = 0;
        }
        return num;
      }),
    items3,
  );
  const items4 = [stateFromStoresArray, memo];
  memo2 = memo2.useMemo(
    () =>
      applyDefault.groupBy(
        stateFromStoresArray.filter((id) => {
          entitlementIds = entitlementIds.entitlementIds;
          return !entitlementIds.has(id.id);
        }),
        (skuId) =>
          closure_1_0(stateFromStoresArray1[18]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle),
      ),
    items4,
  );
  const obj4 = require("initialize");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const obj5 = require("BlockedPaymentsCountryExperiment");
  const outboundPromotions = require("PromotionsHooks").useOutboundPromotions();
  ({
    activeOutboundPromotions,
    claimedEndedOutboundPromotions,
    claimedOutboundPromotionCodeMap: c5,
    promotionsLoaded,
  } = outboundPromotions);
  const obj6 = require("PromotionsHooks");
  const items5 = [c7];
  const stateFromStores = require("initialize").useStateFromStores(items5, () =>
    _undefined2.getBadgeById(closure_0(stateFromStoresArray1[21]).BadgeId.GIFTING),
  );
  stateFromStoresArray(stateFromStoresArray1[22])(stateFromStoresArray1);
  const tmp14 = stateFromStoresArray(stateFromStoresArray1[23])();
  const succeeded = tmp14.succeeded;
  const obj7 = require("initialize");
  [tmp16, c7] = memo(memo2.useState(false), 2);
  const tmp15 = memo(memo2.useState(false), 2);
  const subscriptionPlansLoaded = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
  const effect = memo2.useEffect(() => {
    const giftableEntitlements = EntitlementActionCreators.fetchGiftableEntitlements();
    giftableEntitlements.then(() => _undefined2(true));
    BillingActionCreatorsDefault.init({ shouldFetchSubscriptions: false });
  }, []);
  const effect1 = memo2.useEffect(() => {
    const badge = closure_0(stateFromStoresArray1[27]).fetchBadge(closure_0(stateFromStoresArray1[21]).BadgeId.GIFTING);
  }, []);
  const obj9 = {
    paddingBottom:
      stateFromStoresArray(stateFromStoresArray1[14])().bottom +
      stateFromStoresArray(stateFromStoresArray1[10]).space.PX_16,
  };
  if (isPaymentsBlocked) {
    const obj10 = { style: tmp2.giftingSettingsContainer, children: null };
    const obj11 = {
      ref,
      contentInset: { top: 40 },
      contentContainerStyle: obj9,
      style: tmp2.scrollView,
      children: closure_14(tmp3(tmp4[42]), {}),
    };
    obj10.children = closure_14(succeeded, obj11);
    let tmp20Result12 = closure_14(c5, obj10);
  } else {
    const obj12 = { style: tmp2.giftingSettingsContainer, children: null };
    const items6 = [closure_14(tmp3(tmp4[43]), {})];
    const obj13 = { ref, style: tmp2.scrollView, contentContainerStyle: obj9, children: null };
    let tmp20Result = null != stateFromStores;
    if (tmp20Result) {
      const obj14 = { children: null };
      const obj15 = { style: tmp2.titleWrapper, children: null };
      const obj16 = { title: null };
      const intl = tmp6(tmp4[34]).intl;
      obj16.title = intl.string(tmp3(tmp4[44]).sFokBp);
      obj15.children = closure_14(GiftingSectionTitle, obj16);
      const items7 = [closure_14(tmp21, obj15)];
      const obj17 = { analyticsLocation };
      items7[1] = closure_14(tmp3(tmp4[45]), obj17);
      obj14.children = items7;
      tmp20Result = closure_15(closure_16, obj14);
    }
    const items8 = [tmp20Result, ,];
    if (tmp16) {
      if (tmp14.loaded) {
        if (promotionsLoaded) {
          if (subscriptionPlansLoaded) {
            const _Object = Object;
            const keys = Object.keys(memo2);
            if (0 === keys.length) {
              if (0 === stateFromStoresArray1.length) {
                const obj18 = { style: tmp2.emptyGiftLinks, children: null };
                const obj19 = { style: tmp2.emptyImage, source: tmp3(tmp4[32]) };
                const items9 = [closure_14(tmp3(tmp4[31]), obj19)];
                const obj20 = { style: tmp2.emptyGiftDescription, accessible: true, children: null };
                const obj21 = {
                  style: tmp2.emptyGiftHeader,
                  variant: "body-md/semibold",
                  color: "mobile-text-heading-primary",
                  children: null,
                };
                const intl4 = tmp6(tmp4[34]).intl;
                obj21.children = intl4.string(tmp6(tmp4[34]).t.B1qgZn);
                const items10 = [closure_14(tmp6(tmp4[33]).Text, obj21)];
                const obj22 = {
                  style: tmp2.emptyGiftInformation,
                  variant: "body-sm/medium",
                  color: "text-default",
                  children: null,
                };
                const intl5 = tmp6(tmp4[34]).intl;
                obj22.children = intl5.string(tmp6(tmp4[34]).t["OV/u0n"]);
                items10[1] = closure_14(tmp6(tmp4[33]).Text, obj22);
                obj20.children = items10;
                items9[1] = closure_15(tmp21, obj20);
                obj18.children = items9;
                let tmp20Result7 = closure_15(tmp21, obj18);
                const tmp3Result = tmp3(tmp4[31]);
              }
            }
            const obj23 = { style: tmp2.inventorySectionWrapper, children: null };
            let tmp20Result8 = null;
            if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
              const obj24 = { children: null };
              const obj25 = { style: tmp2.titleWrapper, children: null };
              const obj26 = { title: null };
              const intl9 = tmp6(tmp4[34]).intl;
              obj26.title = intl9.string(tmp6(tmp4[34]).t.wFsj3B);
              obj25.children = closure_14(GiftingSectionTitle, obj26);
              const items11 = [
                closure_14(tmp21, obj25),
                claimedEndedOutboundPromotions.map((code) => {
                  const outboundPromotion = code.promotion;
                  return closure_1_14(
                    stateFromStoresArray(stateFromStoresArray1[35]),
                    { outboundPromotion, code: code.code },
                    outboundPromotion.id,
                  );
                }),
                activeOutboundPromotions.map((outboundPromotion) =>
                  gesture(
                    OutboundPromotionCardDefault,
                    { outboundPromotion, code: _undefined[outboundPromotion.id] },
                    outboundPromotion.id,
                  ),
                ),
              ];
              obj24.children = items11;
              tmp20Result8 = closure_15(closure_16, obj24);
            }
            const items12 = [tmp20Result8, ,];
            let tmp20Result9 = null;
            if (memo1.length > 0) {
              const obj27 = { children: null };
              const obj28 = { style: tmp2.titleWrapper, children: null };
              const obj29 = { title: null };
              const intl2 = tmp6(tmp4[34]).intl;
              obj29.title = intl2.string(tmp6(tmp4[34]).t.trSpHX);
              obj28.children = closure_14(GiftingSectionTitle, obj29);
              const items13 = [
                closure_14(tmp21, obj28),
                memo1.map((subscription) =>
                  closure_1_14(stateFromStoresArray(stateFromStoresArray1[36]), { subscription }, subscription.id),
                ),
              ];
              obj27.children = items13;
              tmp20Result9 = closure_15(closure_16, obj27);
            }
            items12[1] = tmp20Result9;
            if (keys.length <= 0) {
              items12[2] = null;
              obj23.children = items12;
              tmp20Result7 = closure_15(tmp21, obj23);
            } else {
              let obj30 = { style: tmp2.titleWrapper, children: null };
              let map = GiftingSectionTitle;
              const intl3 = tmp6(tmp4[34]).intl;
              if (stateFromStoresArray1.length > 0) {
                let LO0a0F = tmp3(tmp4[37]).LO0a0F;
              } else {
                LO0a0F = tmp6(tmp4[34]).t["9KeUbY"];
              }
              const obj31 = { children: null };
              const obj32 = { title: intl3.string(LO0a0F) };
              obj30.children = closure_14(map, obj32);
              obj30 = [,];
              obj30[0] = closure_14(tmp21, obj30);
              map = keys.map;
              obj30[1] = map((arg0) => {
                ({ skuId, subscriptionPlanId, giftStyle } = GiftCodeUtils.parseComboId(arg0));
                return gesture(
                  EntitlementGiftGroupCardDefault,
                  {
                    skuId,
                    subscriptionPlanId,
                    entitlements: memo2[arg0],
                    giftStyle,
                    pendingGiftSubscriptionCodes: memo.giftCodes,
                    canRevokeGiftCodes: succeeded,
                  },
                  arg0,
                );
              });
              obj31.children = obj30;
              closure_15(closure_16, obj31);
              const tmp22Result = closure_14(tmp21, obj30);
            }
          }
        }
      }
    }
    const obj33 = { style: tmp2.loading };
    const obj34 = { children: closure_14(tmp6(tmp4[46]).ActivityIndicator, obj33) };
    items8[1] = closure_14(c5, obj34);
    let tmp20Result11 = null;
    if (subscriptionPlansLoaded) {
      const obj35 = { style: tmp2.giftPurchaseSectionWrapper, children: null };
      const obj36 = { title: null };
      function handleLearnMorePremiumClick() {
        UserSettingsModalActionCreatorsDefault.setSection(constants.PREMIUM_GIFTING);
        const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants.PREMIUM_GIFTING });
        closure_0.push(constants.PREMIUM);
      }
      function handleLearnMoreNitroBasicClick() {
        UserSettingsModalActionCreatorsDefault.setSection(constants.PREMIUM_GIFTING);
        const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants.PREMIUM_GIFTING });
        const obj3 = { destinationPane: constants.PREMIUM_GIFTING };
        closure_0.push(constants.PREMIUM, {
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING,
        });
      }
      const intl6 = tmp6(tmp4[34]).intl;
      obj36.title = intl6.string(tmp6(tmp4[34]).t["55Ccy0"]);
      const items14 = [closure_14(GiftingSectionTitle, obj36), , ,];
      const obj37 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard, children: null };
      const obj38 = { style: tmp2.cardText, variant: "body-sm/medium", color: "text-default", children: null };
      const intl7 = tmp6(tmp4[34]).intl;
      const obj39 = { onClick: handleLearnMorePremiumClick };
      obj38.children = intl7.format(tmp6(tmp4[34]).t.thORji, obj39);
      const items15 = [closure_14(tmp6(tmp4[33]).Text, obj38)];
      const obj40 = { style: tmp2.buttonWrapper, children: null };
      const obj41 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "active",
        planId: closure_13.PREMIUM_YEAR_TIER_2,
        analyticsLocation,
      };
      const items16 = [closure_14(tmp3(tmp4[40]), obj41)];
      const obj42 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "secondary",
        planId: closure_13.PREMIUM_MONTH_TIER_2,
        analyticsLocation,
      };
      items16[1] = closure_14(tmp3(tmp4[40]), obj42);
      obj40.children = items16;
      items15[1] = closure_15(tmp21, obj40);
      obj37.children = items15;
      items14[1] = closure_15(tmp3(tmp4[39]), obj37);
      const obj43 = { style: tmp2.warningMargins };
      items14[2] = closure_14(tmp3(tmp4[41]), obj43);
      const obj44 = { children: null };
      const obj45 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard, children: null };
      const tmp3Result3 = tmp3(tmp4[39]);
      const obj46 = { style: tmp2.cardText, variant: "body-sm/medium", color: "text-default", children: null };
      const intl8 = tmp6(tmp4[34]).intl;
      const obj47 = { onClick: handleLearnMoreNitroBasicClick };
      obj46.children = intl8.format(tmp6(tmp4[34]).t.NmpnsP, obj47);
      const items17 = [closure_14(tmp6(tmp4[33]).Text, obj46)];
      const obj48 = { style: tmp2.buttonWrapper, children: null };
      const obj49 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "active",
        planId: closure_13.PREMIUM_YEAR_TIER_0,
        analyticsLocation,
      };
      const items18 = [closure_14(tmp3(tmp4[40]), obj49)];
      const obj50 = {
        recipientUserId,
        style: tmp2.giftPurchaseButton,
        variant: "secondary",
        planId: closure_13.PREMIUM_MONTH_TIER_0,
        analyticsLocation,
      };
      items18[1] = closure_14(tmp3(tmp4[40]), obj50);
      obj48.children = items18;
      items17[1] = closure_15(tmp21, obj48);
      obj45.children = items17;
      const items19 = [closure_15(tmp3(tmp4[39]), obj45)];
      const obj93 = { style: tmp2.warningMargins };
      items19[1] = closure_14(tmp3(tmp4[41]), obj93);
      obj44.children = items19;
      items14[3] = closure_15(closure_16, obj44);
      obj35.children = items14;
      tmp20Result11 = closure_15(tmp21, obj35);
      const tmp3Result4 = tmp3(tmp4[39]);
    }
    items8[2] = tmp20Result11;
    obj13.children = items8;
    items6[1] = closure_15(succeeded, obj13);
    obj12.children = items6;
    tmp20Result12 = closure_15(tmp21, obj12);
  }
  return tmp20Result12;
}

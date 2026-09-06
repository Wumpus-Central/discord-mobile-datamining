// === Module 13554: GiftingSectionTitle ===

// Module 13554 (GiftingSectionTitle)
import ThemesDefault from "Themes" /* 576 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5687 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "initialize" /* 8192 */;
import closure_9 from "addEntitlement" /* 7394 */;
import ME from "ME" /* 1074 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function GiftingSectionTitle(title) {
  return callback2(TableRowGroupTitle.TableRowGroupTitle, { title: title.title });
}
let c4 = importAllResult;
({ Image: c5, View: closure_6, ScrollView: error, StyleSheet } = get_ActivityIndicator);
({ UserSettingsSections: c10, AnalyticsPages: unpackModuleId } = ME);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = { scrollView: null, giftingSettingsContainer: null, inventorySectionWrapper: null, giftPurchaseSectionWrapper: null, emptyGiftLinks: null, emptyImage: null, emptyGiftHeader: null, emptyGiftDescription: null, emptyGiftInformation: null, titleWrapper: null, cardText: null, tierCard: null, giftPurchaseButton: null, buttonWrapper: null, loading: null, warningMargins: null };
obj = { paddingHorizontal: ThemesDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { flex: 1 };
obj[3] = { flex: 1, paddingTop: 36, paddingBottom: 16 };
createCacheKey = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
obj[4] = createCacheKey;
obj[5] = { marginRight: 18 };
obj[6] = { lineHeight: 20 };
obj[7] = { flex: 1 };
obj[8] = { marginTop: 8 };
obj[9] = { paddingTop: 28, paddingBottom: 8 };
obj[10] = { lineHeight: 18 };
obj[11] = { marginTop: 16 };
obj[12] = { marginTop: 8, height: 40 };
obj[13] = { marginTop: 16 };
obj[14] = { marginTop: 32 };
obj[15] = { marginHorizontal: 16 };
let closure_17 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef(function UserSettingsPremiumGifting(arg0, arg1) {
  ({ recipientUserId, analyticsLocation } = arg0);
  if (analyticsLocation === undefined) {
    let obj = { page: null };
    obj[0] = constants.GIFTING_SETTINGS;
    analyticsLocation = obj;
  }
  let _require;
  let stateFromStoresArray;
  let memo;
  let callback;
  let enabled;
  c5 = undefined;
  const tmp2 = callback3();
  stateFromStoresArray(memo[11])();
  obj1 = _require(memo[12]);
  _require = obj1.useNavigation();
  let obj2 = _require(memo[14]);
  const items = [closure_9];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = enabled.useMemo(() => stateFromStoresArray(memo[15]).groupBy(stateFromStoresArray, (skuId) => callback(table[16]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = _require(memo[17]);
  const isPaymentsBlocked = obj3.useIsPaymentsBlocked();
  let obj4 = _require(memo[18]);
  const outboundPromotions = obj4.useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c3, promotionsLoaded } = outboundPromotions);
  const GiftingBadgeExperiment = _require(memo[19]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  let obj5 = _require(memo[14]);
  const items2 = [closure_8];
  const stateFromStores = obj5.useStateFromStores(items2, () => badgeById.getBadgeById(arr(memo[20]).BadgeId.GIFTING));
  [tmp13, c5] = callback(enabled.useState(false), 2);
  let obj6 = _require(memo[21]);
  const subscriptionPlansLoaded = obj6.useSubscriptionPlansLoaded();
  const effect = enabled.useEffect(() => {
    stateFromStoresArray(memo[22]).wait(() => {
      const giftableEntitlements = closure_1_0(closure_1_2[23]).fetchGiftableEntitlements();
      giftableEntitlements.then(() => callback(true));
      const obj = closure_1_0(closure_1_2[23]);
      closure_1_1(closure_1_2[24]).init();
    });
  }, []);
  const items3 = [enabled];
  const effect1 = enabled.useEffect(() => {
    if (enabled) {
      const badge = arr(memo[25]).fetchBadge(arr(memo[20]).BadgeId.GIFTING);
      const obj = arr(memo[25]);
    }
  }, items3);
  obj = { paddingBottom: stateFromStoresArray(memo[13])().bottom + stateFromStoresArray(memo[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    obj = { style: null, children: null };
    obj[0] = tmp2.giftingSettingsContainer;
    obj1 = { ref: null, contentInset: null, contentContainerStyle: null, style: null, children: null };
    obj1[0] = arg1;
    obj1[1] = { top: 40 };
    obj1[2] = obj;
    obj1[3] = tmp2.scrollView;
    obj1[4] = callback2(tmp3(tmp4[37]), {});
    obj[1] = callback2(closure_7, obj1);
    let tmp17Result3 = callback2(closure_6, obj);
  } else {
    obj2 = { style: null, children: null };
    obj2[0] = tmp2.giftingSettingsContainer;
    const items4 = [callback2(tmp3(tmp4[38]), {}), ];
    obj3 = { ref: null, style: null, contentContainerStyle: null, children: null };
    obj3[0] = arg1;
    obj3[1] = tmp2.scrollView;
    obj3[2] = obj;
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      obj4 = { children: null };
      obj5 = { style: null, children: null };
      obj5[0] = tmp2.titleWrapper;
      obj6 = { title: null };
      const intl = tmp6(tmp4[31]).intl;
      obj6[0] = intl.string(tmp3(tmp4[39]).sFokBp);
      obj5[1] = tmp19(GiftingSectionTitle, obj6);
      const items5 = [tmp19(tmp18, obj5), ];
      const obj7 = { analyticsLocation: null };
      obj7[0] = analyticsLocation;
      items5[1] = tmp19(tmp3(tmp4[40]), obj7);
      obj4[0] = items5;
      enabled = tmp17(closure_16, obj4);
    }
    const items6 = [enabled, , ];
    if (tmp13) {
      if (promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            const obj8 = { style: null, children: null };
            obj8[0] = tmp2.emptyGiftLinks;
            const obj9 = { style: null, source: null };
            obj9[0] = tmp2.emptyImage;
            obj9[1] = tmp3(tmp4[29]);
            const items7 = [tmp19(c5, obj9), ];
            const obj10 = { style: null, accessible: true, children: null };
            obj10[0] = tmp2.emptyGiftDescription;
            const obj11 = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            obj11[0] = tmp2.emptyGiftHeader;
            const intl3 = tmp6(tmp4[31]).intl;
            obj11[3] = intl3.string(tmp6(tmp4[31]).t.B1qgZn);
            const items8 = [tmp19(tmp6(tmp4[30]).Text, obj11), ];
            const obj12 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
            obj12[0] = tmp2.emptyGiftInformation;
            const intl4 = tmp6(tmp4[31]).intl;
            obj12[3] = intl4.string(tmp6(tmp4[31]).t["OV/u0n"]);
            items8[1] = tmp19(tmp6(tmp4[30]).Text, obj12);
            obj10[2] = items8;
            items7[1] = tmp17(tmp18, obj10);
            obj8[1] = items7;
            let tmp17Result = tmp17(tmp18, obj8);
          }
          const obj13 = { style: null, children: null };
          obj13[0] = tmp2.inventorySectionWrapper;
          tmp17Result = null;
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj14 = { children: null };
            const obj15 = { style: null, children: null };
            obj15[0] = tmp2.titleWrapper;
            const obj16 = { title: null };
            const intl8 = tmp6(tmp4[31]).intl;
            obj16[0] = intl8.string(tmp6(tmp4[31]).t.wFsj3B);
            obj15[1] = tmp19(GiftingSectionTitle, obj16);
            const items9 = [
              tmp19(tmp18, obj15),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return callback(stateFromStoresArray(memo[32]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((id) => closure_1_14(stateFromStoresArray(memo[32]), { outboundPromotion: id, code: _undefined[id.id] }, id.id))
            ];
            obj14[0] = items9;
            tmp17Result = tmp17(closure_16, obj14);
          }
          const items10 = [tmp17Result, ];
          let tmp17Result1 = null;
          if (keys.length > 0) {
            const obj17 = { children: null };
            const obj18 = { style: null, children: null };
            obj18[0] = tmp2.titleWrapper;
            const obj19 = { title: null };
            const intl2 = tmp6(tmp4[31]).intl;
            obj19[0] = intl2.string(tmp6(tmp4[31]).t["9KeUbY"]);
            obj18[1] = tmp19(GiftingSectionTitle, obj19);
            const items11 = [
              tmp19(tmp18, obj18),
              keys.map((arg0) => {
                          let obj = arr(memo[16]);
                          ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(arg0));
                          obj = { skuId, subscriptionPlanId, entitlements: memo[arg0], giftStyle };
                          return closure_1_14(stateFromStoresArray(memo[33]), obj, arg0);
                        })
            ];
            obj17[0] = items11;
            tmp17Result1 = tmp17(closure_16, obj17);
          }
          items10[1] = tmp17Result1;
          obj13[1] = items10;
          tmp17Result = tmp17(tmp18, obj13);
        }
      }
    }
    const obj20 = { style: null };
    obj20[0] = tmp2.loading;
    const obj21 = { children: null };
    obj21[0] = callback2(tmp6(tmp4[41]).ActivityIndicator, obj20);
    items6[1] = callback2(closure_6, obj21);
    let tmp17Result2 = null;
    if (subscriptionPlansLoaded) {
      const obj22 = { style: null, children: null };
      obj22[0] = tmp2.giftPurchaseSectionWrapper;
      const obj23 = { title: null };
      function handleLearnMorePremiumClick() {
        let obj = stateFromStoresArray(memo[26]);
        obj.setSection(closure_1_10.PREMIUM_GIFTING);
        obj = { destinationPane: closure_1_10.PREMIUM_GIFTING };
        const result = arr(memo[27]).trackUserSettingsPaneViewed(obj);
        arr = arr.push(closure_1_10.PREMIUM);
      }
      function handleLearnMoreNitroBasicClick() {
        let obj = stateFromStoresArray(memo[26]);
        obj.setSection(closure_1_10.PREMIUM_GIFTING);
        obj = { destinationPane: closure_1_10.PREMIUM_GIFTING };
        const result = arr(memo[27]).trackUserSettingsPaneViewed(obj);
        obj = { premiumFeatureCardOrder: arr(memo[28]).PremiumFeatureCardOrder.TIER_0_LEADING };
        arr = arr.push(closure_1_10.PREMIUM, obj);
      }
      const intl5 = tmp6(tmp4[31]).intl;
      obj23[0] = intl5.string(tmp6(tmp4[31]).t["55Ccy0"]);
      const items12 = [tmp19(GiftingSectionTitle, obj23), , , ];
      const obj24 = { premiumType: null, style: null, children: null };
      obj24[0] = closure_12.TIER_2;
      obj24[1] = tmp2.tierCard;
      let tmp3Result = tmp3(tmp4[34]);
      const obj25 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj25[0] = tmp2.cardText;
      const intl6 = tmp6(tmp4[31]).intl;
      const obj26 = { onClick: null };
      obj26[0] = handleLearnMorePremiumClick;
      obj25[3] = intl6.format(tmp6(tmp4[31]).t.thORji, obj26);
      const items13 = [tmp19(tmp6(tmp4[30]).Text, obj25), ];
      const obj27 = { style: null, children: null };
      obj27[0] = tmp2.buttonWrapper;
      const obj28 = { recipientUserId: null, style: null, variant: "active", planId: null, analyticsLocation: null };
      obj28[0] = recipientUserId;
      obj28[1] = tmp2.giftPurchaseButton;
      obj28[3] = closure_13.PREMIUM_YEAR_TIER_2;
      obj28[4] = analyticsLocation;
      const items14 = [tmp19(tmp3(tmp4[35]), obj28), ];
      const obj29 = { recipientUserId: null, style: null, variant: "secondary", planId: null, analyticsLocation: null };
      obj29[0] = recipientUserId;
      obj29[1] = tmp2.giftPurchaseButton;
      obj29[3] = closure_13.PREMIUM_MONTH_TIER_2;
      obj29[4] = analyticsLocation;
      items14[1] = tmp19(tmp3(tmp4[35]), obj29);
      obj27[1] = items14;
      items13[1] = tmp17(tmp18, obj27);
      obj24[2] = items13;
      items12[1] = tmp17(tmp3Result, obj24);
      const obj30 = { style: null };
      obj30[0] = tmp2.warningMargins;
      items12[2] = tmp19(tmp3(tmp4[36]), obj30);
      const obj31 = { children: null };
      const obj32 = { premiumType: null, style: null, children: null };
      obj32[0] = closure_12.TIER_0;
      obj32[1] = tmp2.tierCard;
      tmp3Result = tmp3(tmp4[34]);
      const obj33 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj33[0] = tmp2.cardText;
      const intl7 = tmp6(tmp4[31]).intl;
      const obj34 = { onClick: null };
      obj34[0] = handleLearnMoreNitroBasicClick;
      obj33[3] = intl7.format(tmp6(tmp4[31]).t.NmpnsP, obj34);
      const items15 = [tmp19(tmp6(tmp4[30]).Text, obj33), ];
      const obj35 = { style: null, children: null };
      obj35[0] = tmp2.buttonWrapper;
      const obj36 = { recipientUserId: null, style: null, variant: "active", planId: null, analyticsLocation: null };
      obj36[0] = recipientUserId;
      obj36[1] = tmp2.giftPurchaseButton;
      obj36[3] = closure_13.PREMIUM_YEAR_TIER_0;
      obj36[4] = analyticsLocation;
      const items16 = [tmp19(tmp3(tmp4[35]), obj36), ];
      const obj37 = { recipientUserId: null, style: null, variant: "secondary", planId: null, analyticsLocation: null };
      obj37[0] = recipientUserId;
      obj37[1] = tmp2.giftPurchaseButton;
      obj37[3] = closure_13.PREMIUM_MONTH_TIER_0;
      obj37[4] = analyticsLocation;
      items16[1] = tmp19(tmp3(tmp4[35]), obj37);
      obj35[1] = items16;
      items15[1] = tmp17(tmp18, obj35);
      obj32[2] = items15;
      const items17 = [tmp17(tmp3Result, obj32), ];
      const obj38 = { style: null };
      obj38[0] = tmp2.warningMargins;
      items17[1] = tmp19(tmp3(tmp4[36]), obj38);
      obj31[0] = items17;
      items12[3] = tmp17(closure_16, obj31);
      obj22[1] = items12;
      tmp17Result2 = tmp17(tmp18, obj22);
    }
    items6[2] = tmp17Result2;
    obj3[3] = items6;
    items4[1] = closure_15(closure_7, obj3);
    obj2[1] = items4;
    tmp17Result3 = tmp17(tmp18, obj2);
    const tmp20 = closure_7;
  }
  return tmp17Result3;
});
let result = require("set").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default forwardRefResult;
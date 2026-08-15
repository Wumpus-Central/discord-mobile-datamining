// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx
import getSystemLocale from "getSystemLocale";
import importAllResult from "useBlockedPaymentsConfig";
import get_ActivityIndicator from "apply";
import initialize from "initialize";
import addEntitlement from "addEntitlement";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "apexExperiment";
import createCacheKey from "createCacheKey";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

let StyleSheet;
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let c10;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function GiftingSectionTitle(title) {
  title = title.title;
  if (useIsMobileVisualRefreshExperimentEnabled("UserSettingsPremiumGifting")) {
    let obj = { title: null };
    obj[0] = title;
    let tmp3Result = tmp3(tmp4(6286).TableRowGroupTitle, obj);
  } else {
    obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: null };
    obj[0] = tmp.title;
    obj[4] = title;
    tmp3Result = tmp3(tmp4(4734).Text, obj);
  }
  return tmp3Result;
}
let c4 = importAllResult;
({ Image: c5, View: closure_6, ScrollView: error, StyleSheet } = get_ActivityIndicator);
({ UserSettingsSections: c10, AnalyticsPages: unpackModuleId, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = { scrollView: null, giftingSettingsContainer: null, inventorySectionWrapper: null, inventorySectionWrapperLegacy: null, giftPurchaseSectionWrapper: null, giftPurchaseSectionWrapperLegacy: null, emptyGiftLinks: null, emptyImage: null, emptyGiftHeader: null, emptyGiftDescription: null, emptyGiftInformation: null, title: null, titleWrapper: null, titleWrapperLegacy: null, cardText: null, tierCard: null, giftPurchaseButton: null, buttonWrapper: null, loading: null, warningMargins: null };
obj = { paddingHorizontal: require("Themes").modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { flex: 1 };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[3] = createCacheKey;
obj[4] = { flex: 1, paddingTop: 36, paddingBottom: 16 };
obj[5] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[6] = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
obj[7] = { marginRight: 18 };
obj[8] = { lineHeight: 20 };
obj[9] = { flex: 1 };
obj[10] = { marginTop: 8 };
obj[11] = { lineHeight: 16, textTransform: "uppercase", marginHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj[12] = { paddingTop: 28, paddingBottom: 8 };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
obj[13] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[14] = { lineHeight: 18 };
obj[15] = { marginTop: 16 };
obj[16] = { marginTop: 8, height: 40 };
obj[17] = { marginTop: 16 };
obj[18] = { marginTop: 32 };
obj[19] = { marginHorizontal: 16 };
let closure_17 = createCacheKey.createStyles(obj);
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
const forwardRefResult = importAllResult.forwardRef(function UserSettingsPremiumGifting(arg0, arg1) {
  let activeOutboundPromotions;
  let analyticsLocation;
  let c4;
  let c6;
  let claimedEndedOutboundPromotions;
  let promotionsLoaded;
  let recipientUserId;
  let tmp14;
  ({ recipientUserId, analyticsLocation } = arg0);
  if (analyticsLocation === undefined) {
    let obj = { page: null };
    obj[0] = constants.GIFTING_SETTINGS;
    analyticsLocation = obj;
  }
  let _require;
  let importDefault;
  let stateFromStoresArray;
  let memo;
  let enabled;
  c6 = undefined;
  const tmp2 = callback2();
  const tmp5 = importDefault(stateFromStoresArray[10])("UserSettingsPremiumGifting");
  _require = tmp5;
  importDefault(stateFromStoresArray[13])();
  let obj1 = _require(stateFromStoresArray[14]);
  importDefault = obj1.useNavigation();
  let obj2 = _require(stateFromStoresArray[16]);
  const items = [addEntitlement];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = importAllResult.useMemo(() => arr(stateFromStoresArray[17]).groupBy(stateFromStoresArray, (skuId) => callback(table[18]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = _require(stateFromStoresArray[19]);
  const isPaymentsBlocked = obj3.useIsPaymentsBlocked();
  let obj4 = _require(stateFromStoresArray[20]);
  const outboundPromotions = obj4.useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c4, promotionsLoaded } = outboundPromotions);
  const GiftingBadgeExperiment = _require(stateFromStoresArray[21]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  let obj5 = _require(stateFromStoresArray[16]);
  const items2 = [initialize];
  const stateFromStores = obj5.useStateFromStores(items2, () => badgeById.getBadgeById(_undefined(stateFromStoresArray[22]).BadgeId.GIFTING));
  [tmp14, c6] = memo(undefined.useState(false), 2);
  let obj6 = _require(stateFromStoresArray[23]);
  const subscriptionPlansLoaded = obj6.useSubscriptionPlansLoaded();
  const effect = importAllResult.useEffect(() => {
    arr(stateFromStoresArray[24]).wait(() => {
      const giftableEntitlements = outer1_0(outer1_2[25]).fetchGiftableEntitlements();
      giftableEntitlements.then(() => callback(true));
      const obj = outer1_0(outer1_2[25]);
      outer1_1(outer1_2[26]).init();
    });
  }, []);
  const items3 = [enabled];
  const effect1 = importAllResult.useEffect(() => {
    if (enabled) {
      const badge = _undefined(stateFromStoresArray[27]).fetchBadge(_undefined(stateFromStoresArray[22]).BadgeId.GIFTING);
      const obj = _undefined(stateFromStoresArray[27]);
    }
  }, items3);
  obj = { paddingBottom: importDefault(stateFromStoresArray[15])().bottom + importDefault(stateFromStoresArray[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    obj = { style: null, children: null };
    obj[0] = tmp2.giftingSettingsContainer;
    obj1 = { ref: null, contentInset: null, contentContainerStyle: null, style: null, children: null };
    obj1[0] = arg1;
    obj1[1] = { top: 40 };
    obj1[2] = obj;
    obj1[3] = tmp2.scrollView;
    obj1[4] = callback(tmp3(tmp4[38]), {});
    obj[1] = callback(closure_7, obj1);
    let tmp18Result3 = callback(c6, obj);
  } else {
    obj2 = { style: null, children: null };
    obj2[0] = tmp2.giftingSettingsContainer;
    const items4 = [callback(tmp3(tmp4[39]), {}), ];
    obj3 = { ref: null, style: null, contentContainerStyle: null, children: null };
    obj3[0] = arg1;
    obj3[1] = tmp2.scrollView;
    obj3[2] = obj;
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      const items5 = [tmp2.titleWrapper, ];
      let titleWrapperLegacy = null;
      if (!tmp5) {
        titleWrapperLegacy = tmp2.titleWrapperLegacy;
      }
      obj4 = { children: null };
      obj5 = { style: null, children: null };
      items5[1] = titleWrapperLegacy;
      obj5[0] = items5;
      obj6 = { title: null };
      const intl = tmp7(tmp4[32]).intl;
      obj6[0] = intl.string(tmp3(tmp4[40]).sFokBp);
      obj5[1] = tmp20(GiftingSectionTitle, obj6);
      const items6 = [tmp20(tmp19, obj5), ];
      const obj7 = { analyticsLocation: null };
      obj7[0] = analyticsLocation;
      items6[1] = tmp20(tmp3(tmp4[41]), obj7);
      obj4[0] = items6;
      enabled = tmp18(closure_16, obj4);
      const tmp23 = closure_16;
    }
    const items7 = [enabled, , ];
    if (tmp14) {
      if (promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            const obj8 = { style: null, children: null };
            obj8[0] = tmp2.emptyGiftLinks;
            const obj9 = { style: null, source: null };
            obj9[0] = tmp2.emptyImage;
            obj9[1] = tmp3(tmp4[31]);
            const items8 = [tmp20(enabled, obj9), ];
            const obj10 = { style: null, accessible: true, children: null };
            obj10[0] = tmp2.emptyGiftDescription;
            const obj11 = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            obj11[0] = tmp2.emptyGiftHeader;
            const intl4 = tmp7(tmp4[32]).intl;
            obj11[3] = intl4.string(tmp7(tmp4[32]).t.B1qgZn);
            const items9 = [tmp20(tmp7(tmp4[12]).Text, obj11), ];
            const obj12 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
            obj12[0] = tmp2.emptyGiftInformation;
            const intl5 = tmp7(tmp4[32]).intl;
            obj12[3] = intl5.string(tmp7(tmp4[32]).t["OV/u0n"]);
            items9[1] = tmp20(tmp7(tmp4[12]).Text, obj12);
            obj10[2] = items9;
            items8[1] = tmp18(tmp19, obj10);
            obj8[1] = items8;
            let tmp18Result = tmp18(tmp19, obj8);
          }
          const items10 = [tmp2.inventorySectionWrapper, ];
          let prop = null;
          if (!tmp5) {
            prop = tmp2.inventorySectionWrapperLegacy;
          }
          const obj13 = { style: null, children: null };
          items10[1] = prop;
          obj13[0] = items10;
          tmp18Result = null;
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const items11 = [tmp2.titleWrapper, ];
            let titleWrapperLegacy1 = null;
            if (!tmp5) {
              titleWrapperLegacy1 = tmp2.titleWrapperLegacy;
            }
            const obj14 = { children: null };
            const obj15 = { style: null, children: null };
            items11[1] = titleWrapperLegacy1;
            obj15[0] = items11;
            const obj16 = { title: null };
            const intl2 = tmp7(tmp4[32]).intl;
            obj16[0] = intl2.string(tmp7(tmp4[32]).t.wFsj3B);
            obj15[1] = tmp20(GiftingSectionTitle, obj16);
            const items12 = [
              tmp20(tmp19, obj15),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return callback(arr(stateFromStoresArray[33]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((id) => outer1_14(arr(stateFromStoresArray[33]), { outboundPromotion: id, code: _undefined2[id.id] }, id.id))
            ];
            obj14[0] = items12;
            tmp18Result = tmp18(closure_16, obj14);
            const tmp50 = closure_16;
          }
          const items13 = [tmp18Result, ];
          let tmp18Result1 = null;
          if (keys.length > 0) {
            const items14 = [tmp2.titleWrapper, ];
            let titleWrapperLegacy2 = null;
            if (!tmp5) {
              titleWrapperLegacy2 = tmp2.titleWrapperLegacy;
            }
            const obj17 = { children: null };
            const obj18 = { style: null, children: null };
            items14[1] = titleWrapperLegacy2;
            obj18[0] = items14;
            const obj19 = { title: null };
            const intl3 = tmp7(tmp4[32]).intl;
            obj19[0] = intl3.string(tmp7(tmp4[32]).t["9KeUbY"]);
            obj18[1] = tmp20(GiftingSectionTitle, obj19);
            const items15 = [
              tmp20(tmp19, obj18),
              keys.map((arg0) => {
                          let giftStyle;
                          let skuId;
                          let subscriptionPlanId;
                          let obj = _undefined(stateFromStoresArray[18]);
                          ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(arg0));
                          obj = { skuId, subscriptionPlanId, entitlements: memo[arg0], giftStyle, isRefreshEnabled: _undefined };
                          return outer1_14(arr(stateFromStoresArray[34]), obj, arg0);
                        })
            ];
            obj17[0] = items15;
            tmp18Result1 = tmp18(closure_16, obj17);
            const tmp32 = closure_16;
          }
          items13[1] = tmp18Result1;
          obj13[1] = items13;
          tmp18Result = tmp18(tmp19, obj13);
        }
      }
    }
    const obj20 = { style: null };
    obj20[0] = tmp2.loading;
    const obj21 = { children: null };
    obj21[0] = callback(tmp7(tmp4[42]).ActivityIndicator, obj20);
    items7[1] = callback(c6, obj21);
    let tmp18Result2 = null;
    if (subscriptionPlansLoaded) {
      const items16 = [tmp2.giftPurchaseSectionWrapper, ];
      let prop1 = null;
      if (!tmp5) {
        prop1 = tmp2.giftPurchaseSectionWrapperLegacy;
      }
      const obj22 = { style: null, children: null };
      items16[1] = prop1;
      obj22[0] = items16;
      const obj23 = { title: null };
      function handleLearnMorePremiumClick() {
        let obj = arr(stateFromStoresArray[28]);
        obj.setSection(outer1_10.PREMIUM_GIFTING);
        obj = { destinationPane: outer1_10.PREMIUM_GIFTING };
        const result = _undefined(stateFromStoresArray[29]).trackUserSettingsPaneViewed(obj);
        arr = arr.push(outer1_10.PREMIUM);
      }
      function handleLearnMoreNitroBasicClick() {
        let obj = arr(stateFromStoresArray[28]);
        obj.setSection(outer1_10.PREMIUM_GIFTING);
        obj = { destinationPane: outer1_10.PREMIUM_GIFTING };
        const result = _undefined(stateFromStoresArray[29]).trackUserSettingsPaneViewed(obj);
        obj = { premiumFeatureCardOrder: _undefined(stateFromStoresArray[30]).PremiumFeatureCardOrder.TIER_0_LEADING };
        arr = arr.push(outer1_10.PREMIUM, obj);
      }
      const intl6 = tmp7(tmp4[32]).intl;
      obj23[0] = intl6.string(tmp7(tmp4[32]).t["55Ccy0"]);
      const items17 = [tmp20(GiftingSectionTitle, obj23), , , ];
      const obj24 = { premiumType: null, style: null, children: null };
      obj24[0] = closure_12.TIER_2;
      obj24[1] = tmp2.tierCard;
      let tmp3Result = tmp3(tmp4[35]);
      const obj25 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj25[0] = tmp2.cardText;
      const intl7 = tmp7(tmp4[32]).intl;
      const obj26 = { onClick: null };
      obj26[0] = handleLearnMorePremiumClick;
      obj25[3] = intl7.format(tmp7(tmp4[32]).t.thORji, obj26);
      const items18 = [tmp20(tmp7(tmp4[12]).Text, obj25), ];
      const obj27 = { style: null, children: null };
      obj27[0] = tmp2.buttonWrapper;
      const obj28 = { recipientUserId: null, style: null, variant: "active", planId: null, analyticsLocation: null };
      obj28[0] = recipientUserId;
      obj28[1] = tmp2.giftPurchaseButton;
      obj28[3] = closure_13.PREMIUM_YEAR_TIER_2;
      obj28[4] = analyticsLocation;
      const items19 = [tmp20(tmp3(tmp4[36]), obj28), ];
      const obj29 = { recipientUserId: null, style: null, variant: "secondary", planId: null, analyticsLocation: null };
      obj29[0] = recipientUserId;
      obj29[1] = tmp2.giftPurchaseButton;
      obj29[3] = closure_13.PREMIUM_MONTH_TIER_2;
      obj29[4] = analyticsLocation;
      items19[1] = tmp20(tmp3(tmp4[36]), obj29);
      obj27[1] = items19;
      items18[1] = tmp18(tmp19, obj27);
      obj24[2] = items18;
      items17[1] = tmp18(tmp3Result, obj24);
      const obj30 = { style: null };
      obj30[0] = tmp2.warningMargins;
      items17[2] = tmp20(tmp3(tmp4[37]), obj30);
      const obj31 = { children: null };
      const obj32 = { premiumType: null, style: null, children: null };
      obj32[0] = closure_12.TIER_0;
      obj32[1] = tmp2.tierCard;
      tmp3Result = tmp3(tmp4[35]);
      const obj33 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj33[0] = tmp2.cardText;
      const intl8 = tmp7(tmp4[32]).intl;
      const obj34 = { onClick: null };
      obj34[0] = handleLearnMoreNitroBasicClick;
      obj33[3] = intl8.format(tmp7(tmp4[32]).t.NmpnsP, obj34);
      const items20 = [tmp20(tmp7(tmp4[12]).Text, obj33), ];
      const obj35 = { style: null, children: null };
      obj35[0] = tmp2.buttonWrapper;
      const obj36 = { recipientUserId: null, style: null, variant: "active", planId: null, analyticsLocation: null };
      obj36[0] = recipientUserId;
      obj36[1] = tmp2.giftPurchaseButton;
      obj36[3] = closure_13.PREMIUM_YEAR_TIER_0;
      obj36[4] = analyticsLocation;
      const items21 = [tmp20(tmp3(tmp4[36]), obj36), ];
      const obj37 = { recipientUserId: null, style: null, variant: "secondary", planId: null, analyticsLocation: null };
      obj37[0] = recipientUserId;
      obj37[1] = tmp2.giftPurchaseButton;
      obj37[3] = closure_13.PREMIUM_MONTH_TIER_0;
      obj37[4] = analyticsLocation;
      items21[1] = tmp20(tmp3(tmp4[36]), obj37);
      obj35[1] = items21;
      items20[1] = tmp18(tmp19, obj35);
      obj32[2] = items20;
      const items22 = [tmp18(tmp3Result, obj32), ];
      const obj38 = { style: null };
      obj38[0] = tmp2.warningMargins;
      items22[1] = tmp20(tmp3(tmp4[37]), obj38);
      obj31[0] = items22;
      items17[3] = tmp18(closure_16, obj31);
      obj22[1] = items17;
      tmp18Result2 = tmp18(tmp19, obj22);
    }
    items7[2] = tmp18Result2;
    obj3[3] = items7;
    items4[1] = closure_15(closure_7, obj3);
    obj2[1] = items4;
    tmp18Result3 = tmp18(tmp19, obj2);
    const tmp21 = closure_7;
  }
  return tmp18Result3;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default forwardRefResult;
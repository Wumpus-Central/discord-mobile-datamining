// === Module 10754: RewardPreview ===

// Module 10754 (RewardPreview)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import getNameplateData from "getNameplateData" /* 1947 */;
import Text from "Text" /* 4444 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5562 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10488 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "initialize" /* 8528 */;
import { isAvatarDecorationRecord, isNameplateRecord } from "fromServer" /* 7260 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import closure_10 from "createEmptyPromotionsByType" /* 10436 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function RewardPreview(arg0) {
  ({ collectiblesItem, gradientAngle } = arg0);
  ({ currentUser, gradientColors } = arg0);
  const tmp3 = callback3(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  if (isNameplateRecord(collectiblesItem)) {
    let obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp3.nameplateWrapper;
    obj1 = { nameplate: null, fullOpacity: true, animate: true };
    let tmpResult = tmp(8490);
    let obj8 = getNameplateData;
    obj1[0] = obj8.getNameplateData(collectiblesItem);
    obj[1] = callback(tmpResult, obj1);
    const items = [callback(closure_5, obj), , ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.singleAvatarContainer;
    const obj3 = { user: null, guildId: "Array", size: true, "aria-hidden": null };
    obj3[0] = currentUser;
    obj3[2] = Button.AvatarSizes.SMALL;
    obj2[1] = callback(Button.Avatar, obj3);
    items[1] = callback(closure_5, obj2);
    const obj4 = { style: null, variant: "text-xs/medium", children: null };
    obj4[0] = tmp3.selectedRewardText;
    const intl2 = getSystemLocale.intl;
    obj4[2] = intl2.string(getSystemLocale.t.Rh4oem);
    items[2] = callback(Text.Text, obj4);
    obj[0] = items;
    let tmp7Result = callback2(closure_13, obj);
  } else {
    tmp7Result = null;
    if (isAvatarDecorationRecord(collectiblesItem)) {
      obj = { style: null, useAngle: true, angle: null, angleCenter: null, colors: null };
      obj[0] = tmp3.selectedRewardBannerGradient;
      tmpResult = tmp(4908);
      if (gradientAngle == null) {
        gradientAngle = 90;
      }
      const obj5 = { children: null };
      obj[2] = gradientAngle;
      obj[3] = { x: 0.5, y: 0.5 };
      obj[4] = gradientColors;
      const items1 = [callback(tmpResult, obj), , ];
      const obj6 = { style: null, children: null };
      obj6[0] = tmp3.singleAvatarContainer;
      const obj7 = { size: null, asset: null };
      obj7[0] = Button.AvatarSizes.NORMAL;
      obj7[1] = collectiblesItem.asset;
      obj6[1] = callback(tmp(10755), obj7);
      items1[1] = callback(closure_5, obj6);
      obj8 = { style: null, variant: "text-xs/medium", color: "text-overlay-light", children: null };
      obj8[0] = tmp3.selectedRewardText;
      const intl = getSystemLocale.intl;
      obj8[3] = intl.string(getSystemLocale.t.Rh4oem);
      items1[2] = callback(Text.Text, obj8);
      obj5[0] = items1;
      tmp7Result = callback2(closure_13, obj5);
      const tmp7 = callback2;
      const tmp8 = closure_13;
      const tmpResult1 = tmp(10755);
    }
  }
  return tmp7Result;
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, chooseRewardContainer: null, gradientBackdrop: null, chooseRewardText: null, backgroundImage: null, inAppFlowImage: null, inAppFlowImageLargeTilted: null, singleAvatarContainer: null, selectedRewardRow: null, selectedRewardBannerContainer: null, selectedRewardBannerGradient: null, selectedRewardText: null, nameplateWrapper: null, promoDetails: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_12 + arg0, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj[1] = { flexDirection: "row", alignItems: "center", height: 52 };
  obj = {};
  const merged1 = Object.assign(closure_4.absoluteFillObject);
  obj.borderRadius = ThemesDefault.radii.sm;
  obj.overflow = "hidden";
  obj[2] = obj;
  obj[3] = { flex: 1, marginStart: ThemesDefault.space.PX_8 };
  obj[4] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 1 };
  obj1 = { flex: 1, marginStart: ThemesDefault.space.PX_8 };
  obj[5] = { width: 58, height: 58, marginStart: ThemesDefault.space.PX_8 };
  const items = [{ rotate: "-4deg" }, { translateY: -11 }];
  obj[6] = { width: 86, height: 86, transform: items };
  obj[7] = { flexDirection: "row", paddingRight: 15, justifyContent: "center", alignItems: "center", marginLeft: 5 };
  const obj2 = { width: 58, height: 58, marginStart: ThemesDefault.space.PX_8 };
  obj[8] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
  obj[9] = { flex: 1, flexDirection: "row", alignItems: "center", height: 52 };
  const obj4 = {};
  const merged2 = Object.assign(closure_4.absoluteFillObject);
  obj4.borderRadius = ThemesDefault.radii.sm;
  obj4.top = ThemesDefault.space.PX_4;
  obj4.bottom = ThemesDefault.space.PX_4;
  obj4.start = ThemesDefault.space.PX_4;
  obj4.end = ThemesDefault.space.PX_4;
  obj4.marginStart = ThemesDefault.space.PX_12;
  obj[10] = obj4;
  obj[11] = { flex: 1 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
  obj[12] = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
  const obj5 = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
  obj[13] = { paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  defaultSelection = defaultSelection.defaultSelection;
  importDefault = undefined;
  dependencyMap = undefined;
  let React;
  claimableRewards = undefined;
  let selectedGiftingPromotionReward;
  let setSelectedGiftingPromotionReward;
  c7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  let tmp3 = callback3(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  let obj = defaultSelection(1499);
  importDefault = obj.useNavigation();
  obj1 = defaultSelection(10438);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(589);
  let items = [closure_9];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = defaultSelection(10756);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(productId);
  let obj4 = defaultSelection(589);
  let items1 = [closure_10];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(defaultSelection(_undefined[23]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
      }
    }
    return prop;
  });
  if (stateFromStores1 != null) {
    const assetVariant = stateFromStores1.assetVariant;
  }
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = claimableRewards.length > 0;
  }
  closure_8 = tmp9;
  let tmp10 = null != claimableRewards;
  if (tmp10) {
    tmp10 = 1 === claimableRewards.length;
  }
  closure_9 = tmp10;
  const tmp11 = useShouldShowGiftingPromotionDecoDefault();
  let tmp12 = tmp11;
  if (tmp11) {
    tmp12 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp12;
  let tmpResult = tmp(10475);
  const config = tmpResult.useConfig({ location: "PremiumGiftPurchaseButton" });
  const GiftingBadgeExperiment = tmp4(10478).GiftingBadgeExperiment;
  let tmp4Result = tmp4(589);
  const items2 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items2, () => {
    ({ getNextTier, getRemainingToNextTier } = setSelectedGiftingPromotionReward);
    return { nextTier: getNextTier(defaultSelection(_undefined[29]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(defaultSelection(_undefined[29]).BadgeId.GIFTING) };
  });
  const nextTier = stateFromStoresObject.nextTier;
  const items3 = [tmp10, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = React.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items3);
  let colors;
  if (stateFromStores1 != null) {
    const gradient = stateFromStores1.gradient;
    if (gradient != null) {
      colors = gradient.colors;
    }
  }
  if (colors == null) {
    colors = [];
  }
  let tmp16 = colors;
  if (colors.length <= 0) {
    const _String = String;
    const items4 = [String(tmp(712).colors.BACKGROUND_BRAND), ];
    const _String2 = String;
    items4[1] = String(tmp(712).colors.BACKGROUND_BRAND);
    tmp16 = items4;
  }
  tmp4Result = tmp4(8460);
  const product = tmp4Result.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const intl = tmp4(1236).intl;
  const string = intl.string;
  const t = tmp4(1236).t;
  if (tmp12) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp12) {
    str = "primary";
  }
  let prop;
  if (stateFromStores1 != null) {
    prop = stateFromStores1.mobileBackgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = defaultSelection(10486).useThemeAndReducedMotionAwareAssetUrl(prop);
  const tmp4Result1 = defaultSelection(10486);
  let asset;
  if (stateFromStores1 != null) {
    asset = stateFromStores1.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = defaultSelection(10486).useThemeAndReducedMotionAwareAssetUrl(asset);
  let first;
  if (product != null) {
    first = product.items[0];
  }
  obj = { style: tmp3.container, children: null };
  if (tmp11) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === tmp4(10473).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        obj = { style: null, imageUrl: null, title: null, subtitle: null };
        obj[0] = tmp3.promoDetails;
        obj[1] = themeAndReducedMotionAwareAssetUrl1;
        tmpResult = tmp(10492);
        const intl4 = tmp4(1236).intl;
        obj[2] = intl4.string(tmp(2433)["P+DDLh"]);
        const intl5 = tmp4(1236).intl;
        obj[3] = intl5.string(tmp(2433).dOZh6X);
        let tmp27Result = callback(tmpResult, obj);
      }
      const items5 = [tmp27Result, , ];
      let tmp41 = !tmp12;
      if (!tmp12) {
        obj1 = { variant: "text-sm/normal", children: null };
        const intl6 = tmp4(1236).intl;
        obj2 = { paidURL: null };
        obj2[0] = tmp(1995).getArticleURL(HelpdeskArticles.PAID_TERMS);
        obj1[1] = intl6.format(tmp4(1236).t.hYoGUM, obj2);
        tmp41 = callback(tmp4(4444).Text, obj1);
        const tmpResult1 = tmp(1995);
      }
      items5[1] = tmp41;
      obj3 = { loading: null, variant: null, text: null, disabled: null, onPress: null };
      obj3[0] = isPurchasing;
      obj3[1] = str;
      obj3[2] = stringResult;
      let tmp45 = !canPurchaseIAP;
      if (canPurchaseIAP) {
        tmp45 = isPurchasing;
      }
      obj3[3] = tmp45;
      let fn;
      if (!isPurchasing) {
        fn = () => {
          let obj = defaultSelection(_undefined[43]);
          obj.dismissKeyboard();
          if (closure_10) {
            if (closure_8) {
              if (closure_8) {
                _undefined2(tmp(tmp2[30]).PaymentFlowStep.REWARD_SKU_SELECT);
                obj = { defaultHighlightedReward: null, allRewards: null, claimableRewards: null, onSelect: null };
                obj[0] = defaultSelection;
                let items = c3;
                if (c3 == null) {
                  items = [];
                }
                obj[1] = items;
                let items1 = claimableRewards;
                if (claimableRewards == null) {
                  items1 = [];
                }
                obj[2] = items1;
                obj[3] = function onSelect(arg0) {
                  callback(arg0);
                  navigation.navigate(closure_1_0(closure_1_2[31]).PremiumGiftScreens.CUSTOMIZATION);
                };
                navigation.navigate(tmp(tmp2[31]).PremiumGiftScreens.REWARD_SELECT, obj);
              }
            }
          }
          _undefined(() => {
            navigation.navigate(closure_1_0(closure_1_2[31]).PremiumGiftScreens.SUCCESS);
          });
        };
      }
      obj3[4] = fn;
      items5[2] = callback(tmp4(4896).Button, obj3);
      obj[1] = items5;
      return tmp24(tmp25, obj);
    }
  }
  if (tmp12) {
    if (tmp9) {
      obj4 = { style: null, children: null };
      obj4[0] = tmp3.chooseRewardContainer;
      const obj5 = { style: null, pointerEvents: "none", children: null };
      obj5[0] = tmp3.gradientBackdrop;
      const obj6 = { style: null, useAngle: true, angle: null, angleCenter: null, colors: null };
      obj6[0] = claimableRewards.absoluteFillObject;
      let num3;
      if (stateFromStores1 != null) {
        const gradient3 = stateFromStores1.gradient;
        if (gradient3 != null) {
          num3 = gradient3.angle;
        }
      }
      if (num3 == null) {
        num3 = 90;
      }
      obj6[2] = num3;
      obj6[3] = { x: 0.5, y: 0.5 };
      obj6[4] = colors;
      const items6 = [callback(tmp(4908), obj6), ];
      let tmp33Result = null != themeAndReducedMotionAwareAssetUrl;
      if (tmp33Result) {
        const obj7 = { style: null, resizeMode: "cover", source: null };
        obj7[0] = tmp3.backgroundImage;
        const obj8 = { uri: null };
        obj8[0] = themeAndReducedMotionAwareAssetUrl;
        obj7[2] = obj8;
        tmp33Result = tmp33(tmp(5461), obj7);
      }
      items6[1] = tmp33Result;
      obj5[2] = items6;
      const items7 = [tmp24(tmp25, obj5), , ];
      tmp33Result = null != themeAndReducedMotionAwareAssetUrl1;
      if (tmp33Result) {
        let inAppFlowImageLargeTilted = assetVariant === tmp4(8433).GiftCustomizationBanner_AssetVariant.LARGE_TILTED;
        const items8 = [tmp3.inAppFlowImage, ];
        if (inAppFlowImageLargeTilted) {
          inAppFlowImageLargeTilted = tmp3.inAppFlowImageLargeTilted;
        }
        const obj9 = { style: null, resizeMode: "contain", source: null };
        items8[1] = inAppFlowImageLargeTilted;
        obj9[0] = items8;
        const obj10 = { uri: null };
        obj10[0] = themeAndReducedMotionAwareAssetUrl1;
        obj9[2] = obj10;
        tmp33Result = tmp33(tmp(5461), obj9);
        const tmpResult3 = tmp(5461);
      }
      items7[1] = tmp33Result;
      const obj11 = { style: null, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
      obj11[0] = tmp3.chooseRewardText;
      const intl3 = tmp4(1236).intl;
      obj11[3] = intl3.string(tmp4(1236).t.cMiNit);
      items7[2] = callback(tmp4(4444).Text, obj11);
      obj4[1] = items7;
      tmp27Result = tmp24(tmp25, obj4);
      const tmpResult2 = tmp(4908);
    }
  }
  if (null != first) {
    if (tmp11) {
      if (null != selectedGiftingPromotionReward) {
        const obj12 = { style: null, children: null };
        obj12[0] = tmp3.selectedRewardRow;
        const obj13 = { style: null, children: null };
        obj13[0] = tmp3.selectedRewardBannerContainer;
        const obj14 = { collectiblesItem: null, currentUser: null, gradientColors: null, gradientAngle: null };
        obj14[0] = first;
        obj14[1] = stateFromStores;
        obj14[2] = tmp16;
        let angle;
        if (stateFromStores1 != null) {
          const gradient2 = stateFromStores1.gradient;
          if (gradient2 != null) {
            angle = gradient2.angle;
          }
        }
        obj14[3] = angle;
        obj13[1] = callback(RewardPreview, obj14);
        const items9 = [callback(tmp25, obj13), ];
        let tmp29Result = !tmp10;
        if (!tmp10) {
          const obj15 = { variant: "tertiary", size: "sm", icon: null, accessibilityLabel: null, onPress: null };
          obj15[2] = tmp29(tmp4(10288).PencilIcon, { size: "sm" });
          const intl2 = tmp4(1236).intl;
          obj15[3] = intl2.string(tmp4(1236).t.bt75uw);
          obj15[4] = function onPress() {
            let tmp = selectedGiftingPromotionReward;
            if (closure_8) {
              _undefined2(defaultSelection(_undefined[30]).PaymentFlowStep.REWARD_SKU_SELECT);
              if (null == tmp) {
                tmp = defaultSelection;
              }
              const obj = { defaultHighlightedReward: null, allRewards: null, claimableRewards: null, onSelect: null };
              obj[0] = tmp;
              let items = c3;
              if (c3 == null) {
                items = [];
              }
              obj[1] = items;
              let items1 = claimableRewards;
              if (claimableRewards == null) {
                items1 = [];
              }
              obj[2] = items1;
              obj[3] = function onSelect(arg0) {
                callback(arg0);
                navigation.navigate(closure_1_0(closure_1_2[31]).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(defaultSelection(_undefined[31]).PremiumGiftScreens.REWARD_SELECT, obj);
              const tmp3 = defaultSelection;
              const tmp4 = _undefined;
            }
          };
          tmp29Result = tmp29(tmp4(7974).IconButton, obj15);
        }
        items9[1] = tmp29Result;
        obj12[1] = items9;
        tmp27Result = tmp24(tmp25, obj12);
        const tmp30 = RewardPreview;
      }
    }
  }
  tmp27Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp27Result = null;
    if (null != nextTier) {
      const obj16 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      obj16[0] = stateFromStoresObject.giftsToNextTier;
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj16[1] = str2;
      obj16[2] = nextTier.simple_icon_url;
      obj16[3] = tmp(5941).PREMIUM_GIFT_CUSTOMIZATION;
      tmp27Result = callback(tmp(10493), obj16);
      const tmp27 = callback;
      const tmpResult4 = tmp(10493);
    }
  }
};
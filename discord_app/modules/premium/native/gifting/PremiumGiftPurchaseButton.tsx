// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
import useNavigation from "useNavigation";
import get_ActivityIndicator from "LinearGradient";
import map from "map";
import { isAvatarDecorationRecord } from "fromServer";
import { isNameplateRecord } from "fromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { HelpdeskArticles } from "ME";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getNameplateData } from "../../../collectibles/nameplates/utils.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import { useShouldShowGiftingPromotionDeco } from "../../gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx";

let c4;
let c5;
let closure_12;
let closure_14;
let map1;
const require = arg1;
function RewardPreview(arg0) {
  let collectiblesItem;
  let currentUser;
  let gradientAngle;
  let gradientColors;
  ({ collectiblesItem, gradientAngle } = arg0);
  ({ currentUser, gradientColors } = arg0);
  const tmp3 = callback3(useSafeAreaInsetsKeyboardAware().insets.bottom);
  if (isNameplateRecord(collectiblesItem)) {
    let obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp3.nameplateWrapper;
    const obj1 = { nameplate: null, fullOpacity: true, animate: true };
    let tmpResult = tmp(9436);
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
      tmpResult = tmp(4765);
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
      obj6[1] = callback(tmp(10165), obj7);
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
      const tmpResult1 = tmp(10165);
    }
  }
  return tmp7Result;
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, chooseRewardContainer: null, gradientBackdrop: null, chooseRewardText: null, backgroundImage: null, inAppFlowImage: null, inAppFlowImageLargeTilted: null, singleAvatarContainer: null, selectedRewardRow: null, selectedRewardBannerContainer: null, selectedRewardBannerGradient: null, selectedRewardText: null, nameplateWrapper: null };
  obj = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, paddingTop: Themes.space.PX_12, paddingBottom: Themes.space.PX_12 + arg0, paddingHorizontal: Themes.space.PX_16, gap: Themes.space.PX_8 };
  const merged = Object.assign(Themes.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj[1] = { flexDirection: "row", alignItems: "center", height: 52 };
  obj = {};
  const merged1 = Object.assign(closure_4.absoluteFillObject);
  obj.borderRadius = Themes.radii.sm;
  obj.overflow = "hidden";
  obj[2] = obj;
  obj[3] = { flex: 1, marginStart: Themes.space.PX_8 };
  obj[4] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 1 };
  const obj1 = { flex: 1, marginStart: Themes.space.PX_8 };
  obj[5] = { width: 58, height: 58, marginStart: Themes.space.PX_8 };
  const items = [{ rotate: "-4deg" }, { translateY: -11 }];
  obj[6] = { width: 86, height: 86, transform: items };
  obj[7] = { flexDirection: "row", paddingRight: 15, justifyContent: "center", alignItems: "center", marginLeft: 5 };
  const obj2 = { width: 58, height: 58, marginStart: Themes.space.PX_8 };
  obj[8] = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_16 };
  obj[9] = { flex: 1, flexDirection: "row", alignItems: "center", height: 52 };
  const obj4 = {};
  const merged2 = Object.assign(closure_4.absoluteFillObject);
  obj4.borderRadius = Themes.radii.sm;
  obj4.top = Themes.space.PX_4;
  obj4.bottom = Themes.space.PX_4;
  obj4.start = Themes.space.PX_4;
  obj4.end = Themes.space.PX_4;
  obj4.marginStart = Themes.space.PX_12;
  obj[10] = obj4;
  obj[11] = { flex: 1 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_16 };
  obj[12] = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: Themes.radii.sm, overflow: "hidden" };
  return obj;
});
const result = require("map").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  let c2;
  let c3;
  let c7;
  let claimableRewards;
  let isPurchasing;
  let productId;
  defaultSelection = defaultSelection.defaultSelection;
  let importDefault;
  let dependencyMap;
  let React;
  claimableRewards = undefined;
  let selectedGiftingPromotionReward;
  let setSelectedGiftingPromotionReward;
  c7 = undefined;
  let c8;
  let c9;
  let c10;
  let tmp3 = callback3(useSafeAreaInsetsKeyboardAware().insets.bottom);
  let obj = defaultSelection(1499);
  importDefault = obj.useNavigation();
  let obj1 = defaultSelection(9656);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(589);
  let items = [c9];
  const stateFromStores = obj2.useStateFromStores(items, () => _undefined3.getCurrentUser());
  let obj3 = defaultSelection(7462);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(productId);
  let obj4 = defaultSelection(589);
  let items1 = [c10];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const marketingComponentByType = _undefined4.getMarketingComponentByType(defaultSelection(_undefined[23]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
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
  c8 = tmp9;
  let tmp10 = null != claimableRewards;
  if (tmp10) {
    tmp10 = 1 === claimableRewards.length;
  }
  c9 = tmp10;
  const tmp11 = useShouldShowGiftingPromotionDeco();
  let tmp12 = tmp11;
  if (tmp11) {
    tmp12 = null == selectedGiftingPromotionReward;
  }
  c10 = tmp12;
  const GiftingBadgeExperiment = tmp4(9623).GiftingBadgeExperiment;
  let tmp4Result = tmp4(589);
  const items2 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items2, () => {
    let getNextTier;
    let getRemainingToNextTier;
    ({ getNextTier, getRemainingToNextTier } = setSelectedGiftingPromotionReward);
    return { nextTier: getNextTier(defaultSelection(_undefined[27]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(defaultSelection(_undefined[27]).BadgeId.GIFTING) };
  });
  const nextTier = stateFromStoresObject.nextTier;
  const items3 = [tmp10, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = React.useEffect(() => {
    if (c9) {
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
  let tmp15 = colors;
  if (colors.length <= 0) {
    const _String = String;
    const items4 = [String(tmp(712).colors.BACKGROUND_BRAND), ];
    const _String2 = String;
    items4[1] = String(tmp(712).colors.BACKGROUND_BRAND);
    tmp15 = items4;
  }
  tmp4Result = tmp4(10160);
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
  const themeAndReducedMotionAwareAssetUrl = defaultSelection(10089).useThemeAndReducedMotionAwareAssetUrl(prop);
  const tmp4Result1 = defaultSelection(10089);
  let asset;
  if (stateFromStores1 != null) {
    asset = stateFromStores1.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = defaultSelection(10089).useThemeAndReducedMotionAwareAssetUrl(asset);
  let first;
  if (product != null) {
    first = product.items[0];
  }
  obj = { style: tmp3.container, children: null };
  if (tmp12) {
    if (tmp9) {
      obj = { style: null, children: null };
      obj[0] = tmp3.chooseRewardContainer;
      obj1 = { style: null, pointerEvents: "none", children: null };
      obj1[0] = tmp3.gradientBackdrop;
      obj2 = { style: null, useAngle: true, angle: null, angleCenter: null, colors: null };
      obj2[0] = claimableRewards.absoluteFillObject;
      let num3;
      let tmpResult = tmp(4765);
      if (stateFromStores1 != null) {
        const gradient3 = stateFromStores1.gradient;
        if (gradient3 != null) {
          num3 = gradient3.angle;
        }
      }
      if (num3 == null) {
        num3 = 90;
      }
      obj2[2] = num3;
      obj2[3] = { x: 0.5, y: 0.5 };
      obj2[4] = colors;
      const items5 = [callback(tmpResult, obj2), ];
      let tmp32Result = null != themeAndReducedMotionAwareAssetUrl;
      if (tmp32Result) {
        obj3 = { style: null, resizeMode: "cover", source: null };
        obj3[0] = tmp3.backgroundImage;
        obj4 = { uri: null };
        obj4[0] = themeAndReducedMotionAwareAssetUrl;
        obj3[2] = obj4;
        tmp32Result = tmp32(tmp(5307), obj3);
      }
      items5[1] = tmp32Result;
      obj1[2] = items5;
      const items6 = [tmp23(tmp24, obj1), , ];
      tmp32Result = null != themeAndReducedMotionAwareAssetUrl1;
      if (tmp32Result) {
        let inAppFlowImageLargeTilted = assetVariant === tmp4(7402).GiftCustomizationBanner_AssetVariant.LARGE_TILTED;
        const items7 = [tmp3.inAppFlowImage, ];
        tmpResult = tmp(5307);
        if (inAppFlowImageLargeTilted) {
          inAppFlowImageLargeTilted = tmp3.inAppFlowImageLargeTilted;
        }
        const obj5 = { style: null, resizeMode: "contain", source: null };
        items7[1] = inAppFlowImageLargeTilted;
        obj5[0] = items7;
        const obj6 = { uri: null };
        obj6[0] = themeAndReducedMotionAwareAssetUrl1;
        obj5[2] = obj6;
        tmp32Result = tmp32(tmpResult, obj5);
      }
      items6[1] = tmp32Result;
      const obj7 = { style: null, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
      obj7[0] = tmp3.chooseRewardText;
      const intl3 = tmp4(1236).intl;
      obj7[3] = intl3.string(tmp4(1236).t.cMiNit);
      items6[2] = callback(tmp4(4340).Text, obj7);
      obj[1] = items6;
      let tmp26Result = tmp23(tmp24, obj);
    }
    const items8 = [tmp26Result, , ];
    let tmp38 = !tmp12;
    if (!tmp12) {
      const obj8 = { variant: "text-sm/normal", children: null };
      const intl4 = tmp4(1236).intl;
      const obj9 = { paidURL: null };
      obj9[0] = tmp(1993).getArticleURL(HelpdeskArticles.PAID_TERMS);
      obj8[1] = intl4.format(tmp4(1236).t.hYoGUM, obj9);
      tmp38 = callback(tmp4(4340).Text, obj8);
      const tmpResult1 = tmp(1993);
    }
    items8[1] = tmp38;
    const obj10 = { loading: null, variant: null, text: null, disabled: null, onPress: null };
    obj10[0] = isPurchasing;
    obj10[1] = str;
    obj10[2] = stringResult;
    let tmp42 = !canPurchaseIAP;
    if (canPurchaseIAP) {
      tmp42 = isPurchasing;
    }
    obj10[3] = tmp42;
    let fn;
    if (!isPurchasing) {
      fn = () => {
        let obj = defaultSelection(_undefined[39]);
        obj.dismissKeyboard();
        if (c10) {
          if (c8) {
            if (c8) {
              _undefined2(tmp(tmp2[28]).PaymentFlowStep.REWARD_SKU_SELECT);
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
                navigation.navigate(outer1_0(outer1_2[29]).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(tmp(tmp2[29]).PremiumGiftScreens.REWARD_SELECT, obj);
            }
          }
        }
        _undefined(() => {
          navigation.navigate(outer1_0(outer1_2[29]).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj10[4] = fn;
    items8[2] = callback(tmp4(4754).Button, obj10);
    obj[1] = items8;
    return tmp23(tmp24, obj);
  }
  if (null != first) {
    if (tmp11) {
      if (null != selectedGiftingPromotionReward) {
        const obj11 = { style: null, children: null };
        obj11[0] = tmp3.selectedRewardRow;
        const obj12 = { style: null, children: null };
        obj12[0] = tmp3.selectedRewardBannerContainer;
        const obj13 = { collectiblesItem: null, currentUser: null, gradientColors: null, gradientAngle: null };
        obj13[0] = first;
        obj13[1] = stateFromStores;
        obj13[2] = tmp15;
        let angle;
        if (stateFromStores1 != null) {
          const gradient2 = stateFromStores1.gradient;
          if (gradient2 != null) {
            angle = gradient2.angle;
          }
        }
        obj13[3] = angle;
        obj12[1] = callback(RewardPreview, obj13);
        const items9 = [callback(tmp24, obj12), ];
        let tmp28Result = !tmp10;
        if (!tmp10) {
          const obj14 = { variant: "tertiary", size: "sm", icon: null, accessibilityLabel: null, onPress: null };
          obj14[2] = tmp28(tmp4(9717).PencilIcon, { size: "sm" });
          const intl2 = tmp4(1236).intl;
          obj14[3] = intl2.string(tmp4(1236).t.bt75uw);
          obj14[4] = function onPress() {
            let tmp = selectedGiftingPromotionReward;
            if (c8) {
              _undefined2(defaultSelection(_undefined[28]).PaymentFlowStep.REWARD_SKU_SELECT);
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
                navigation.navigate(outer1_0(outer1_2[29]).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(defaultSelection(_undefined[29]).PremiumGiftScreens.REWARD_SELECT, obj);
              const tmp3 = defaultSelection;
              const tmp4 = _undefined;
            }
          };
          tmp28Result = tmp28(tmp4(7792).IconButton, obj14);
        }
        items9[1] = tmp28Result;
        obj11[1] = items9;
        tmp26Result = tmp23(tmp24, obj11);
        const tmp29 = RewardPreview;
      }
    }
  }
  tmp26Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp26Result = null;
    if (null != nextTier) {
      const obj15 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      obj15[0] = stateFromStoresObject.giftsToNextTier;
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj15[1] = str2;
      obj15[2] = nextTier.simple_icon_url;
      obj15[3] = tmp(5787).PREMIUM_GIFT_CUSTOMIZATION;
      tmp26Result = callback(tmp(10094), obj15);
      const tmp26 = callback;
      const tmpResult2 = tmp(10094);
    }
  }
};
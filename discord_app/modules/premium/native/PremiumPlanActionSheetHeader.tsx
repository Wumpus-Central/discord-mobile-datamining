// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import keys from "../../../ConstantsIOS.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../_runtime/07404_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/07405_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/07406_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/07407_registerAsset.js";
import registerAssetDefault5 from "../../../../_runtime/07408_registerAsset.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import registerAssetDefault6 from "../../../../_runtime/07613_registerAsset.js";
import registerAssetDefault7 from "../../../../_runtime/07614_registerAsset.js";
import registerAssetDefault8 from "../../../../_runtime/07615_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import GuildFeatures from "../PremiumConstants.tsx";
import { getPremiumGradientColor } from "../../colors/native/ColorConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ PremiumTypes: c4, SubscriptionIntervalTypes: c5 } = GuildFeatures);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let items = [{ scaleX: -1 }];
let closure_9 = createCacheKey.createStyles({ header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: { transform: items }, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } });
const result = require("obj132").fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(arg0) {
  ({ premiumType, trialOffer, discountOffer } = arg0);
  const tmp = callback();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    let obj = getPremiumPlanItemDefault;
    tmp2 = skuId === obj.getSkuIdForPremiumType(premiumType);
  }
  getPremiumPlanItem;
  let tmp10 = null != discountOffer;
  if (tmp10) {
    const discount = discountOffer.discount;
    let hasItem;
    if (discount != null) {
      const planIds = discount.planIds;
      hasItem = planIds.includes(tmp9);
    }
    tmp10 = hasItem;
  }
  obj = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: keys.HorizontalGradient.START, end: keys.HorizontalGradient.END, accessible: true, accessibilityRole: "header", accessibilityLabel: null, children: null };
  const tmp14 = LinearGradientDefault;
  obj[6] = getPremiumPlanItem.getPremiumTypeDisplayName(premiumType);
  if (TIER_0.TIER_0 === premiumType) {
    let tmp13Result = registerAssetDefault;
  } else {
    tmp13Result = null;
    if (TIER_0.TIER_1 !== premiumType) {
      if (TIER_0.TIER_2 === premiumType) {
        tmp13Result = registerAssetDefault2;
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, , ];
    obj = { style: null, children: null };
    obj[0] = tmp.logoContainer;
    tmp13Result = preloadDefault;
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result1 = registerAssetDefault3;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result1 = registerAssetDefault4;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result1 = registerAssetDefault5;
    }
    obj1 = { source: null, resizeMode: "contain" };
    obj1[0] = tmp13Result1;
    const items1 = [callback(tmp13Result, obj1), , ];
    let tmp22Result = null;
    if (tmp2) {
      const obj2 = { style: null, trialOffer: null, premiumType: null, useWhiteBackground: true, hideTrialCountdown: true };
      obj2[0] = tmp.discountPill;
      obj2[1] = trialOffer;
      obj2[2] = premiumType;
      tmp22Result = callback(PremiumPill.PremiumPill, obj2);
    }
    items1[1] = tmp22Result;
    tmp22Result = null;
    if (tmp10) {
      const obj3 = { style: null, discountOffer: null, premiumType: null, shouldShowDiscountUpsell: true, useWhiteBackground: true };
      obj3[0] = tmp.discountPill;
      obj3[1] = discountOffer;
      obj3[2] = premiumType;
      tmp22Result = callback(PremiumPill.PremiumPill, obj3);
    }
    items1[2] = tmp22Result;
    obj[1] = items1;
    items[1] = callback2(View, obj);
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result3 = registerAssetDefault6;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result3 = registerAssetDefault7;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result3 = registerAssetDefault8;
    }
    const obj4 = { source: null, style: null, resizeMode: "contain" };
    obj4[0] = tmp13Result3;
    const items2 = [tmp.imgWumpus, ];
    if (TIER_0.TIER_0 !== premiumType) {
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          let imgWumpusBottom = tmp.imgWumpusRight;
        }
      }
      items2[1] = imgWumpusBottom;
      obj4[1] = items2;
      items[2] = callback(tmp13Result2, obj4);
      obj[7] = items;
      return callback2(tmp14, obj);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result2 = preloadDefault;
  } else {
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result5 = registerAssetDefault;
    } else {
      tmp13Result5 = null;
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          tmp13Result5 = registerAssetDefault2;
        }
      }
    }
    const obj5 = { source: null };
    obj5[0] = tmp13Result5;
    callback(preloadDefault, obj5);
    const tmp13Result4 = preloadDefault;
  }
  const tmp6Result = getPremiumPlanItem;
};
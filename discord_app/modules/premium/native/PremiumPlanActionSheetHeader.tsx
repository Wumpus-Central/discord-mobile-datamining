// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import "set";
import { View } from "registerAsset";
import GuildFeatures from "GuildFeatures";
import { getPremiumGradientColor } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../_runtime/04765_LinearGradient.js";
import { keys } from "../../../ConstantsIOS.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ PremiumTypes: c4, SubscriptionIntervalTypes: c5 } = GuildFeatures);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let items = [{ scaleX: -1 }];
let closure_9 = createCacheKey.createStyles({ header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: { transform: items }, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } });
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(arg0) {
  let discountOffer;
  let premiumType;
  let trialOffer;
  ({ premiumType, trialOffer, discountOffer } = arg0);
  const tmp = callback();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscription_trial = trialOffer.subscription_trial;
    let sku_id;
    if (subscription_trial != null) {
      sku_id = subscription_trial.sku_id;
    }
    let obj = getPremiumPlanItem;
    tmp2 = sku_id === obj.getSkuIdForPremiumType(premiumType);
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
  obj = { style: tmp.header, colors: null, start: null, end: null, accessible: true, accessibilityRole: "header", accessibilityLabel: null, children: null };
  obj[1] = getPremiumGradientColor(premiumType);
  obj[2] = keys.HorizontalGradient.START;
  obj[3] = keys.HorizontalGradient.END;
  const tmp14 = LinearGradient;
  obj[6] = getPremiumPlanItem.getPremiumTypeDisplayName(premiumType);
  if (TIER_0.TIER_0 === premiumType) {
    let tmp13Result = tmp13(6938);
  } else {
    tmp13Result = null;
    if (tmp15.TIER_1 !== premiumType) {
      if (tmp15.TIER_2 === premiumType) {
        tmp13Result = tmp13(6939);
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, , ];
    obj = { style: null, children: null };
    obj[0] = tmp.logoContainer;
    tmp13Result = tmp13(5307);
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result1 = tmp13(6940);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result1 = tmp13(6941);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result1 = tmp13(6942);
    }
    const obj1 = { source: null, resizeMode: "contain" };
    obj1[0] = tmp13Result1;
    const items1 = [closure_7(tmp13Result, obj1), , ];
    let tmp22Result = null;
    if (tmp2) {
      const obj2 = { style: null, trialOffer: null, premiumType: null, useWhiteBackground: true, hideTrialCountdown: true };
      obj2[0] = tmp.discountPill;
      obj2[1] = trialOffer;
      obj2[2] = premiumType;
      tmp22Result = tmp22(tmp6(6943).PremiumPill, obj2);
    }
    items1[1] = tmp22Result;
    tmp22Result = null;
    if (tmp10) {
      const obj3 = { style: null, discountOffer: null, premiumType: null, shouldShowDiscountUpsell: true, useWhiteBackground: true };
      obj3[0] = tmp.discountPill;
      obj3[1] = discountOffer;
      obj3[2] = premiumType;
      tmp22Result = tmp22(tmp6(6943).PremiumPill, obj3);
    }
    items1[2] = tmp22Result;
    obj[1] = items1;
    items[1] = tmp12(View, obj);
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result3 = tmp13(7369);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result3 = tmp13(7370);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result3 = tmp13(7371);
    }
    const obj4 = { source: null, style: null, resizeMode: "contain" };
    obj4[0] = tmp13Result3;
    const items2 = [tmp.imgWumpus, ];
    if (tmp15.TIER_0 !== premiumType) {
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          let imgWumpusBottom = tmp.imgWumpusRight;
        }
      }
      items2[1] = imgWumpusBottom;
      obj4[1] = items2;
      items[2] = tmp22(tmp13Result2, obj4);
      obj[7] = items;
      return tmp12(tmp14, obj);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result2 = tmp13(5307);
    const tmp21 = View;
  } else {
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result5 = tmp13(6938);
    } else {
      tmp13Result5 = null;
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          tmp13Result5 = tmp13(6939);
        }
      }
    }
    const obj5 = { source: null };
    obj5[0] = tmp13Result5;
    closure_7(tmp13(5307), obj5);
    const tmp13Result4 = tmp13(5307);
    const tmp17 = closure_7;
  }
};
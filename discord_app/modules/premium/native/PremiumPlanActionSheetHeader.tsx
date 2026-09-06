// === Module 7431: PremiumPlanActionSheetHeader ===

// Module 7431 (PremiumPlanActionSheetHeader)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7432).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: null, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } };
createStyles = { transform: null };
let items = [{ scaleX: -1 }];
createStyles.transform = items;
createStyles.imgWumpusRight = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(arg0) {
  ({ premiumType, trialOffer, discountOffer } = arg0);
  const tmp = closure_9();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    let obj = PremiumUtilsDefault;
    tmp2 = skuId === obj.getSkuIdForPremiumType(premiumType);
  }
  PremiumUtils;
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
  obj = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, accessible: true, accessibilityRole: "header", accessibilityLabel: null, children: null };
  const tmp14 = LinearGradientDefault;
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  if (TIER_0.TIER_0 === premiumType) {
    let tmp13Result = tmp13(7433);
  } else {
    tmp13Result = null;
    if (tmp15.TIER_1 !== premiumType) {
      if (tmp15.TIER_2 === premiumType) {
        tmp13Result = tmp13(7434);
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, , ];
    obj = { style: tmp.logoContainer, children: null };
    tmp13Result = tmp13(5587);
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result1 = tmp13(7435);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result1 = tmp13(7436);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result1 = tmp13(7437);
    }
    const obj1 = { source: tmp13Result1, resizeMode: "contain" };
    const items1 = [React5(tmp13Result, obj1), , ];
    let tmp22Result = null;
    if (tmp2) {
      const obj2 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
      tmp22Result = tmp22(tmp6(7438).PremiumPill, obj2);
    }
    items1[1] = tmp22Result;
    tmp22Result = null;
    if (tmp10) {
      const obj3 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
      tmp22Result = tmp22(tmp6(7438).PremiumPill, obj3);
    }
    items1[2] = tmp22Result;
    obj.children = items1;
    items[1] = tmp12(View, obj);
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result3 = tmp13(9385);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result3 = tmp13(10715);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result3 = tmp13(9390);
    }
    const obj4 = { source: tmp13Result3, style: null, resizeMode: "contain" };
    const items2 = [tmp.imgWumpus, ];
    if (tmp15.TIER_0 !== premiumType) {
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          let imgWumpusBottom = tmp.imgWumpusRight;
        }
      }
      items2[1] = imgWumpusBottom;
      obj4.style = items2;
      items[2] = tmp22(tmp13Result2, obj4);
      obj.children = items;
      return tmp12(tmp14, obj);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result2 = tmp13(5587);
  } else {
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result5 = tmp13(7433);
    } else {
      tmp13Result5 = null;
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          tmp13Result5 = tmp13(7434);
        }
      }
    }
    const obj5 = { source: tmp13Result5 };
    React5(tmp13(5587), obj5);
    const tmp13Result4 = tmp13(5587);
  }
};
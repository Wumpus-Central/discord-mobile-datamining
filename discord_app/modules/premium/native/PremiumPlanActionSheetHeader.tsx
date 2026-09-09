// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05001_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7447 from "../../../../_runtime/metro/07447__.js";
import _modDef7448 from "../../../../_runtime/metro/07448__.js";
import _modDef7449 from "../../../../_runtime/metro/07449__.js";
import _modDef7450 from "../../../../_runtime/metro/07450__.js";
import _modDef7451 from "../../../../_runtime/metro/07451__.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import _modDef9417 from "../../../../_runtime/metro/09417__.js";
import _modDef9422 from "../../../../_runtime/metro/09422__.js";
import _modDef10747 from "../../../../_runtime/metro/10747__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7446).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4574);
let createStyles = {
  header: { height: 112, justifyContent: "center", alignItems: "center" },
  logoContainer: { position: "absolute", top: 16, left: 16 },
  imgWumpus: { position: "absolute", height: 90 },
  imgWumpusRight: null,
  imgWumpusBottom: { bottom: 0 },
  discountPill: { marginTop: 10 },
};
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
  obj = {
    style: tmp.header,
    colors: getPremiumGradientColor(premiumType),
    start: ConstantsIOS.HorizontalGradient.START,
    end: ConstantsIOS.HorizontalGradient.END,
    accessible: true,
    accessibilityRole: "header",
    accessibilityLabel: null,
    children: null,
  };
  const tmp14 = LinearGradientDefault;
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  if (TIER_0.TIER_0 === premiumType) {
    let tmp13Result = _modDef7447;
  } else {
    tmp13Result = null;
    if (TIER_0.TIER_1 !== premiumType) {
      if (TIER_0.TIER_2 === premiumType) {
        tmp13Result = _modDef7448;
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, ,];
    obj = { style: tmp.logoContainer, children: null };
    tmp13Result = FastImageDefault;
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result1 = _modDef7449;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result1 = _modDef7450;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result1 = _modDef7451;
    }
    const obj1 = { source: tmp13Result1, resizeMode: "contain" };
    const items1 = [React5(tmp13Result, obj1), ,];
    let tmp22Result = null;
    if (tmp2) {
      const obj2 = {
        style: tmp.discountPill,
        trialOffer,
        premiumType,
        useWhiteBackground: true,
        hideTrialCountdown: true,
      };
      tmp22Result = React5(PremiumPill.PremiumPill, obj2);
    }
    items1[1] = tmp22Result;
    tmp22Result = null;
    if (tmp10) {
      const obj3 = {
        style: tmp.discountPill,
        discountOffer,
        premiumType,
        shouldShowDiscountUpsell: true,
        useWhiteBackground: true,
      };
      tmp22Result = React5(PremiumPill.PremiumPill, obj3);
    }
    items1[2] = tmp22Result;
    obj.children = items1;
    items[1] = React6(View, obj);
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result3 = _modDef9417;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result3 = _modDef10747;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result3 = _modDef9422;
    }
    const obj4 = { source: tmp13Result3, style: null, resizeMode: "contain" };
    const items2 = [tmp.imgWumpus];
    if (TIER_0.TIER_0 !== premiumType) {
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          let imgWumpusBottom = tmp.imgWumpusRight;
        }
      }
      items2[1] = imgWumpusBottom;
      obj4.style = items2;
      items[2] = React5(tmp13Result2, obj4);
      obj.children = items;
      return React6(tmp14, obj);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result2 = FastImageDefault;
  } else {
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result5 = _modDef7447;
    } else {
      tmp13Result5 = null;
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          tmp13Result5 = _modDef7448;
        }
      }
    }
    const obj5 = { source: tmp13Result5 };
    React5(FastImageDefault, obj5);
    const tmp13Result4 = FastImageDefault;
  }
  const tmp6Result = PremiumUtils;
}

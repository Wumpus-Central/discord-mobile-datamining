// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05198_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7675 from "../../../../_runtime/metro/07675__.js";
import _modDef7676 from "../../../../_runtime/metro/07676__.js";
import _modDef7677 from "../../../../_runtime/metro/07677__.js";
import _modDef7678 from "../../../../_runtime/metro/07678__.js";
import _modDef7679 from "../../../../_runtime/metro/07679__.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import _modDef9499 from "../../../../_runtime/metro/09499__.js";
import _modDef9504 from "../../../../_runtime/metro/09504__.js";
import _modDef10975 from "../../../../_runtime/metro/10975__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1374);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7674).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  header: { height: 112, justifyContent: "center", alignItems: "center" },
  logoContainer: { position: "absolute", top: 16, left: 16 },
  imgWumpus: { position: "absolute", height: 90 },
  imgWumpusRight: null,
  imgWumpusBottom: { bottom: 0 },
  discountPill: { marginTop: 10 },
};
let obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.imgWumpusRight = obj3;
let closure_9 = createStyles.createStyles(obj2);
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
    tmp2 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
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
  const obj2 = {
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
  obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  if (TIER_0.TIER_0 === premiumType) {
    let tmp13Result = _modDef7675;
  } else {
    tmp13Result = null;
    if (TIER_0.TIER_1 !== premiumType) {
      if (TIER_0.TIER_2 === premiumType) {
        tmp13Result = _modDef7676;
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, ,];
    const obj3 = { style: tmp.logoContainer, children: null };
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result8 = _modDef7677;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result8 = _modDef7678;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result8 = _modDef7679;
    }
    const obj4 = { source: tmp13Result8, resizeMode: "contain" };
    const items1 = [React5(FastImageDefault, obj4), ,];
    let tmp22Result = null;
    if (tmp2) {
      const obj5 = {
        style: tmp.discountPill,
        trialOffer,
        premiumType,
        useWhiteBackground: true,
        hideTrialCountdown: true,
      };
      tmp22Result = React5(PremiumPill.PremiumPill, obj5);
    }
    items1[1] = tmp22Result;
    let tmp22Result2 = null;
    if (tmp10) {
      const obj6 = {
        style: tmp.discountPill,
        discountOffer,
        premiumType,
        shouldShowDiscountUpsell: true,
        useWhiteBackground: true,
      };
      tmp22Result2 = React5(PremiumPill.PremiumPill, obj6);
    }
    items1[2] = tmp22Result2;
    obj3.children = items1;
    items[1] = React6(View, obj3);
    const tmp13Result7 = FastImageDefault;
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result10 = _modDef9499;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result10 = _modDef10975;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result10 = _modDef9504;
    }
    const obj7 = { source: tmp13Result10, style: null, resizeMode: "contain" };
    const items2 = [tmp.imgWumpus];
    if (TIER_0.TIER_0 !== premiumType) {
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          let imgWumpusBottom = tmp.imgWumpusRight;
        }
      }
      items2[1] = imgWumpusBottom;
      obj7.style = items2;
      items[2] = React5(tmp13Result9, obj7);
      obj2.children = items;
      return React6(tmp14, obj2);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result9 = FastImageDefault;
  } else {
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result12 = _modDef7675;
    } else {
      tmp13Result12 = null;
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          tmp13Result12 = _modDef7676;
        }
      }
    }
    const obj8 = { source: tmp13Result12 };
    React5(FastImageDefault, obj8);
    const tmp13Result11 = FastImageDefault;
  }
  const tmp6Result = PremiumUtils;
}

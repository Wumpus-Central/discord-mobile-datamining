// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05723_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7758 from "../../../../_runtime/metro/07758__.js";
import _modDef7759 from "../../../../_runtime/metro/07759__.js";
import _modDef7760 from "../../../../_runtime/metro/07760__.js";
import _modDef7761 from "../../../../_runtime/metro/07761__.js";
import _modDef7762 from "../../../../_runtime/metro/07762__.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import _modDef10109 from "../../../../_runtime/metro/10109__.js";
import _modDef10114 from "../../../../_runtime/metro/10114__.js";
import _modDef10763 from "../../../../_runtime/metro/10763__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1387);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7757).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5141);
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
    let tmp13Result = _modDef7758;
  } else {
    tmp13Result = null;
    if (TIER_0.TIER_1 !== premiumType) {
      if (TIER_0.TIER_2 === premiumType) {
        tmp13Result = _modDef7759;
      }
    }
  }
  if (!tmp13Result) {
    items = [tmp13Result, ,];
    const obj3 = { style: tmp.logoContainer, children: null };
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result8 = _modDef7760;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result8 = _modDef7761;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result8 = _modDef7762;
    }
    const obj4 = { source: tmp13Result8, resizeMode: "contain" };
    const items1 = [metroImportDefault(FastImageDefault, obj4), ,];
    let tmp22Result = null;
    if (tmp2) {
      const obj5 = {
        style: tmp.discountPill,
        trialOffer,
        premiumType,
        useWhiteBackground: true,
        hideTrialCountdown: true,
      };
      tmp22Result = metroImportDefault(PremiumPill.PremiumPill, obj5);
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
      tmp22Result2 = metroImportDefault(PremiumPill.PremiumPill, obj6);
    }
    items1[2] = tmp22Result2;
    obj3.children = items1;
    items[1] = React5(View, obj3);
    const tmp13Result7 = FastImageDefault;
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result10 = _modDef10109;
    } else if (TIER_0.TIER_1 === premiumType) {
      tmp13Result10 = _modDef10763;
    } else if (TIER_0.TIER_2 === premiumType) {
      tmp13Result10 = _modDef10114;
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
      items[2] = metroImportDefault(tmp13Result9, obj7);
      obj2.children = items;
      return React5(tmp14, obj2);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result9 = FastImageDefault;
  } else {
    if (TIER_0.TIER_0 === premiumType) {
      let tmp13Result12 = _modDef7758;
    } else {
      tmp13Result12 = null;
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          tmp13Result12 = _modDef7759;
        }
      }
    }
    const obj8 = { source: tmp13Result12 };
    metroImportDefault(FastImageDefault, obj8);
    const tmp13Result11 = FastImageDefault;
  }
  const tmp6Result = PremiumUtils;
}

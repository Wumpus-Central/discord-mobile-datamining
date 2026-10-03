// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef6939 from "../../../../_runtime/metro/06939__.js";
import _modDef6940 from "../../../../_runtime/metro/06940__.js";
import _modDef6941 from "../../../../_runtime/metro/06941__.js";
import _modDef6942 from "../../../../_runtime/metro/06942__.js";
import _modDef6943 from "../../../../_runtime/metro/06943__.js";
import _modDef6944 from "../../../../_runtime/metro/06944__.js";
import _modDef6945 from "../../../../_runtime/metro/06945__.js";
import _modDef6946 from "../../../../_runtime/metro/06946__.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1379);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(6938).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumType) => {
      const cResult = premiumType(576).c(58);
      premiumType = premiumType.premiumType;
      ({ trialOffer, discountOffer } = premiumType);
      const tmp2 = closure_9();
      importDefault = tmp2;
      if (cResult[0] !== premiumType) {
        const fn = function o() {
          if (React4.TIER_0 === premiumType) {
            return _modDef6939;
          } else if (React4.TIER_1 === premiumType) {
            return _modDef6940;
          } else if (React4.TIER_2 === premiumType) {
            return _modDef6941;
          }
        };
        cResult[0] = premiumType;
        cResult[1] = fn;
      }
      if (cResult[2] !== premiumType) {
        class P {
          constructor() {
            tmp = premiumType;
            tmp2 = PremiumTypes;
            if (PremiumTypes.TIER_0 === premiumType) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              return closure_1(closure_2[11]);
            } else if (tmp2.TIER_1 === tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              return closure_1(closure_2[12]);
            } else if (tmp2.TIER_2 === tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              return closure_1(closure_2[13]);
            } else {
              return;
            }
          }
        }
        cResult[2] = premiumType;
        cResult[3] = P;
      } else {
        class P {
          constructor() {
            tmp = premiumType;
            tmp2 = PremiumTypes;
            if (PremiumTypes.TIER_0 === premiumType) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              return closure_1(closure_2[11]);
            } else if (tmp2.TIER_1 === tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              return closure_1(closure_2[12]);
            } else if (tmp2.TIER_2 === tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              return closure_1(closure_2[13]);
            } else {
              return;
            }
          }
        }
      }
      if (cResult[4] === premiumType) {
        class P {
          constructor() {
            tmp = premiumType;
            tmp2 = PremiumTypes;
            if (PremiumTypes.TIER_0 === premiumType) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              return closure_1(closure_2[11]);
            } else if (tmp2.TIER_1 === tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              return closure_1(closure_2[12]);
            } else if (tmp2.TIER_2 === tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              return closure_1(closure_2[13]);
            } else {
              return;
            }
          }
        }
      }
      class E {
        constructor() {
          tmp = premiumType;
          tmp2 = PremiumTypes;
          if (PremiumTypes.TIER_0 !== premiumType) {
            if (tmp2.TIER_1 !== tmp) {
              if (tmp2.TIER_2 === tmp) {
                tmp3 = closure_1;
                return closure_1.imgWumpusRight;
              } else {
                return;
              }
            }
          }
          return closure_1.imgWumpusBottom;
        }
      }
      cResult[4] = premiumType;
      cResult[5] = tmp2.imgWumpusBottom;
      cResult[6] = tmp2.imgWumpusRight;
      cResult[7] = E;
      const obj = premiumType(576);
    }
  : (arg0) => {
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
      if (React4.TIER_0 === premiumType) {
        let tmp13Result = _modDef6945;
      } else {
        tmp13Result = null;
        if (React4.TIER_1 !== premiumType) {
          if (React4.TIER_2 === premiumType) {
            tmp13Result = _modDef6946;
          }
        }
      }
      if (!tmp13Result) {
        const items = [tmp13Result, ,];
        const obj3 = { style: tmp.logoContainer, children: null };
        if (React4.TIER_0 === premiumType) {
          let tmp13Result8 = _modDef6939;
        } else if (React4.TIER_1 === premiumType) {
          tmp13Result8 = _modDef6940;
        } else if (React4.TIER_2 === premiumType) {
          tmp13Result8 = _modDef6941;
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
        items[1] = closure_1_8(View, obj3);
        const tmp13Result7 = FastImageDefault;
        if (React4.TIER_0 === premiumType) {
          let tmp13Result10 = _modDef6942;
        } else if (React4.TIER_1 === premiumType) {
          tmp13Result10 = _modDef6943;
        } else if (React4.TIER_2 === premiumType) {
          tmp13Result10 = _modDef6944;
        }
        const obj7 = { source: tmp13Result10, style: null, resizeMode: "contain" };
        const items2 = [tmp.imgWumpus];
        if (React4.TIER_0 !== premiumType) {
          if (React4.TIER_1 !== premiumType) {
            if (React4.TIER_2 === premiumType) {
              let imgWumpusBottom = tmp.imgWumpusRight;
            }
          }
          items2[1] = imgWumpusBottom;
          obj7.style = items2;
          items[2] = React5(tmp13Result9, obj7);
          obj2.children = items;
          return closure_1_8(tmp14, obj2);
        }
        imgWumpusBottom = tmp.imgWumpusBottom;
        tmp13Result9 = FastImageDefault;
      } else {
        if (React4.TIER_0 === premiumType) {
          let tmp13Result12 = _modDef6945;
        } else {
          tmp13Result12 = null;
          if (React4.TIER_1 !== premiumType) {
            if (React4.TIER_2 === premiumType) {
              tmp13Result12 = _modDef6946;
            }
          }
        }
        const obj8 = { source: tmp13Result12 };
        React5(FastImageDefault, obj8);
        const tmp13Result11 = FastImageDefault;
      }
      const tmp6Result = PremiumUtils;
    };

// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ColorConstants from "../../colors/native/ColorConstants.tsx";
import AssetRegistryDefault from "../../../../_runtime/06939_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/06940_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/06941_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../_runtime/06942_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../_runtime/06943_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../_runtime/06944_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../_runtime/06945_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../../_runtime/06946_AssetRegistry.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import react from "../../../../_runtime/00019_react.js";
import PremiumConstants from "../PremiumConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;
let importDefault;

let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = ColorConstants.getPremiumGradientColor;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = {
  header: { height: 112, justifyContent: "center", alignItems: "center" },
  logoContainer: { position: "absolute", top: 16, left: 16 },
  imgWumpus: { position: "absolute", height: 90 },
  imgWumpusRight: obj2,
  imgWumpusBottom: { bottom: 0 },
  discountPill: { marginTop: 10 },
};
obj2 = { transform: items };
items = [{ scaleX: -1 }];
let closure_9 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumType) => {
      let closure_1;
      let discountOffer;
      let trialOffer;
      const obj = premiumType(576);
      const cResult = obj.c(58);
      premiumType = premiumType.premiumType;
      ({ trialOffer, discountOffer } = premiumType);
      const tmp2 = closure_9();
      importDefault = tmp2;
      if (cResult[0] !== premiumType) {
        const fn = function o() {
          if (React3.TIER_0 === premiumType) {
            return AssetRegistryDefault;
          } else if (React3.TIER_1 === premiumType) {
            return AssetRegistryDefault2;
          } else if (React3.TIER_2 === premiumType) {
            return AssetRegistryDefault3;
          }
        };
        cResult[0] = premiumType;
        cResult[1] = fn;
      }
      if (cResult[2] !== premiumType) {
        class P {
          constructor() {
            if (React3.TIER_0 === premiumType) {
              return AssetRegistryDefault4;
            } else if (React3.TIER_1 === premiumType) {
              return AssetRegistryDefault5;
            } else if (React3.TIER_2 === premiumType) {
              return AssetRegistryDefault6;
            }
          }
        }
        cResult[2] = premiumType;
        cResult[3] = P;
      } else {
        class P {
          constructor() {
            if (React3.TIER_0 === premiumType) {
              return AssetRegistryDefault4;
            } else if (React3.TIER_1 === premiumType) {
              return AssetRegistryDefault5;
            } else if (React3.TIER_2 === premiumType) {
              return AssetRegistryDefault6;
            }
          }
        }
      }
      if (cResult[4] === premiumType) {
        class P {
          constructor() {
            if (React3.TIER_0 === premiumType) {
              return AssetRegistryDefault4;
            } else if (React3.TIER_1 === premiumType) {
              return AssetRegistryDefault5;
            } else if (React3.TIER_2 === premiumType) {
              return AssetRegistryDefault6;
            }
          }
        }
      }
      class E {
        constructor() {
          if (React3.TIER_0 !== premiumType) {
            if (React3.TIER_1 !== premiumType) {
              if (React3.TIER_2 === premiumType) {
                return closure_1.imgWumpusRight;
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
    }
  : (arg0) => {
      let discountOffer;
      let items1;
      let premiumType;
      let tmp13Result10;
      let tmp13Result12;
      let tmp17Result;
      let tmp6Result;
      let trialOffer;
      ({ premiumType, trialOffer, discountOffer } = arg0);
      const tmp = closure_9();
      let tmp2 = null != trialOffer;
      if (tmp2) {
        const subscriptionTrial = trialOffer.subscriptionTrial;
        let skuId;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
        const obj = PremiumUtilsDefault;
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
      const obj2 = {
        style: tmp.header,
        colors: getPremiumGradientColor(premiumType),
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        accessible: true,
        accessibilityRole: "header",
        accessibilityLabel: tmp6Result.getPremiumTypeDisplayName(premiumType),
        children: null,
      };
      const tmp14 = LinearGradientDefault;
      tmp6Result = PremiumUtils;
      if (React3.TIER_0 === premiumType) {
        tmp17Result = AssetRegistryDefault7;
      } else {
        tmp17Result = null;
        if (React3.TIER_1 !== premiumType) {
          if (React3.TIER_2 === premiumType) {
            tmp17Result = AssetRegistryDefault8;
          }
        }
      }
      if (tmp17Result) {
        let tmp13Result8;
        const tmp13Result7 = FastImageDefault;
        if (React3.TIER_0 === premiumType) {
          tmp13Result8 = AssetRegistryDefault7;
        } else {
          tmp13Result8 = null;
          if (React3.TIER_1 !== premiumType) {
            if (React3.TIER_2 === premiumType) {
              tmp13Result8 = AssetRegistryDefault8;
            }
          }
        }
        const obj3 = { source: tmp13Result8 };
        tmp17Result = metroImportDefault(tmp13Result7, obj3);
      }
      const items = [tmp17Result, ,];
      const obj4 = { style: tmp.logoContainer, children: items1 };
      const tmp13Result9 = FastImageDefault;
      if (React3.TIER_0 === premiumType) {
        tmp13Result10 = AssetRegistryDefault;
      } else if (React3.TIER_1 === premiumType) {
        tmp13Result10 = AssetRegistryDefault2;
      } else if (React3.TIER_2 === premiumType) {
        tmp13Result10 = AssetRegistryDefault3;
      }
      items1 = [metroImportDefault(tmp13Result9, { source: tmp13Result10, resizeMode: "contain" }), ,];
      let tmp21Result = null;
      if (tmp2) {
        const obj5 = {
          style: tmp.discountPill,
          trialOffer,
          premiumType,
          useWhiteBackground: true,
          hideTrialCountdown: true,
        };
        tmp21Result = metroImportDefault(PremiumPill.PremiumPill, obj5);
      }
      items1[1] = tmp21Result;
      let tmp21Result2 = null;
      if (tmp10) {
        const obj6 = {
          style: tmp.discountPill,
          discountOffer,
          premiumType,
          shouldShowDiscountUpsell: true,
          useWhiteBackground: true,
        };
        tmp21Result2 = metroImportDefault(PremiumPill.PremiumPill, obj6);
      }
      items1[2] = tmp21Result2;
      items[1] = metroImportAll(View, obj4);
      const tmp13Result11 = FastImageDefault;
      if (React3.TIER_0 === premiumType) {
        tmp13Result12 = AssetRegistryDefault4;
      } else if (React3.TIER_1 === premiumType) {
        tmp13Result12 = AssetRegistryDefault5;
      } else if (React3.TIER_2 === premiumType) {
        tmp13Result12 = AssetRegistryDefault6;
      }
      const obj7 = { source: tmp13Result12, style: null, resizeMode: "contain" };
      const items2 = [tmp.imgWumpus];
      if (React3.TIER_0 !== premiumType) {
        let imgWumpusBottom;
        if (React3.TIER_1 !== premiumType) {
          if (React3.TIER_2 === premiumType) {
            imgWumpusBottom = tmp.imgWumpusRight;
          }
        }
        items2[1] = imgWumpusBottom;
        obj7.style = items2;
        items[2] = metroImportDefault(tmp13Result11, obj7);
        obj2.children = items;
        return metroImportAll(tmp14, obj2);
      }
      imgWumpusBottom = tmp.imgWumpusBottom;
    };
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default tmp5;

// discord_app/components_native/premium/PremiumActivatedAlert.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import getSystemLocale from "../../intl/index.native.tsx";
import Button from "../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../design/shared.tsx";
import getPremiumPlanItem from "../../utils/PremiumUtils.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import componentDidMountDefault from "../common/Alert.tsx";
import registerAssetDefault from "../../../_runtime/07613_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/07614_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/07664_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/07665_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/07666_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/07667_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/07668_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/07669_registerAsset.js";
import registerAssetDefault9 from "../../../_runtime/07670_registerAsset.js";
import registerAssetDefault10 from "../../../_runtime/07671_registerAsset.js";
import registerAssetDefault11 from "../../../_runtime/07672_registerAsset.js";
import registerAssetDefault12 from "../../../_runtime/07673_registerAsset.js";
import registerAssetDefault13 from "../../../_runtime/07674_registerAsset.js";
import registerAssetDefault14 from "../../../_runtime/07675_registerAsset.js";
import registerAssetDefault15 from "../../../_runtime/07676_registerAsset.js";
import registerAssetDefault16 from "../../../_runtime/07677_registerAsset.js";
import registerAssetDefault17 from "../../../_runtime/07678_registerAsset.js";
import registerAssetDefault18 from "../../../_runtime/07679_registerAsset.js";
import registerAssetDefault19 from "../../../_runtime/07680_registerAsset.js";
import registerAssetDefault20 from "../../../_runtime/07681_registerAsset.js";
import registerAssetDefault21 from "../../../_runtime/07682_registerAsset.js";
import registerAssetDefault22 from "../../../_runtime/07683_registerAsset.js";
import registerAssetDefault23 from "../../../_runtime/07684_registerAsset.js";
import registerAssetDefault24 from "../../../_runtime/07685_registerAsset.js";
import _modDef7686 from "ShineAnimation.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { SubscriptionStatusTypes } from "../../Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ Image: c3, ImageBackground: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let createCacheKey = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createCacheKey[5] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = createCacheKey.createStyles((arg0) => {
  if (getPremiumPlanItem.Branding.TIER_0 === arg0) {
    let obj = { headerImage: null };
    obj[0] = { marginLeft: -27, width: 88, top: 18 };
    return obj;
  } else if (getPremiumPlanItem.Branding.TIER_1 === arg0) {
    obj = { headerImage: null };
    obj[0] = { marginLeft: -27, width: 87, top: 18 };
    return obj;
  } else if (getPremiumPlanItem.Branding.BUNDLE === arg0) {
    obj1 = { headerImage: null };
    obj1[0] = { marginLeft: -29.5, width: 91, top: 18 };
    return obj1;
  } else if (getPremiumPlanItem.Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: null };
    obj2[0] = { marginLeft: -58, width: 122, height: 90, top: 18 };
    return obj2;
  } else if (getPremiumPlanItem.Branding.PREMIUM_GUILD === arg0) {
    obj = { headerImage: null };
    obj[0] = { marginLeft: -54, width: 140, top: 18 };
    return obj;
  }
});
let closure_11 = createCacheKey.createStyles((arg0) => {
  if (getPremiumPlanItem.Branding.BUNDLE === arg0) {
    let obj = { animation: null };
    obj[0] = { borderRadius: 6 };
    return obj;
  } else {
    if (getPremiumPlanItem.Branding.TIER_0 !== arg0) {
      if (getPremiumPlanItem.Branding.TIER_1 !== arg0) {
        if (getPremiumPlanItem.Branding.TIER_2 !== arg0) {
          if (getPremiumPlanItem.Branding.PREMIUM_GUILD === arg0) {
            obj = { animation: null };
            obj[0] = { borderRadius: 9 };
            return obj;
          }
        }
      }
    }
    obj = { animation: null };
    obj[0] = { borderRadius: 5 };
    return obj;
  }
});
const result = require("obj132").fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
  const tmp = callback();
  let renewalMutations = subscription;
  if (null != subscription.renewalMutations) {
    const _Object = Object;
    renewalMutations = subscription;
    if (0 !== Object.keys(subscription.renewalMutations).length) {
      renewalMutations = subscription;
      if (subscription.renewalMutations.paymentGatewayPlanId !== subscription.paymentGatewayPlanId) {
        renewalMutations = subscription;
        if (subscription.status !== SubscriptionStatusTypes.CANCELED) {
          renewalMutations = subscription.renewalMutations;
        }
      }
    }
  }
  const tmp6 = useThemeDefault();
  let obj = getPremiumPlanItem;
  const premiumBranding = obj.getPremiumBranding(renewalMutations);
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    obj = { logo: null };
    obj[0] = { width: 82, height: 44 };
    let tmp9 = obj;
  } else if (getPremiumPlanItem.Branding.TIER_1 === premiumBranding) {
    obj = { logo: null };
    obj[0] = { width: 82, height: 32 };
    tmp9 = obj;
  } else {
    if (getPremiumPlanItem.Branding.BUNDLE !== premiumBranding) {
      if (getPremiumPlanItem.Branding.TIER_2 !== premiumBranding) {
        if (getPremiumPlanItem.Branding.PREMIUM_GUILD === premiumBranding) {
          obj1 = { logo: null };
          obj1[0] = { width: 82, height: 18 };
          tmp9 = obj1;
        }
      }
    }
    const obj2 = { logo: null };
    obj2[0] = { width: 79, height: 32 };
    tmp9 = obj2;
  }
  const tmp10 = callback2(premiumBranding);
  const obj3 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  let tmp4Result = componentDidMountDefault;
  const intl = getSystemLocale.intl;
  obj3[1] = intl.string(getSystemLocale.t.TkTvBz);
  obj3[2] = tmp.alert;
  const obj4 = { style: tmp.header, source: null, children: null };
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    tmp4Result = registerAssetDefault3;
  } else if (getPremiumPlanItem.Branding.TIER_1 === premiumBranding) {
    tmp4Result = registerAssetDefault4;
  } else if (getPremiumPlanItem.Branding.TIER_2 === premiumBranding) {
    tmp4Result = registerAssetDefault5;
  } else if (getPremiumPlanItem.Branding.BUNDLE === premiumBranding) {
    tmp4Result = registerAssetDefault6;
  } else if (getPremiumPlanItem.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = registerAssetDefault7;
  }
  obj4[1] = tmp4Result;
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = registerAssetDefault11;
  } else if (getPremiumPlanItem.Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = registerAssetDefault12;
  } else {
    if (getPremiumPlanItem.Branding.BUNDLE !== premiumBranding) {
      if (getPremiumPlanItem.Branding.TIER_2 !== premiumBranding) {
        if (getPremiumPlanItem.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = registerAssetDefault14;
        }
      }
    }
    tmp4Result1 = registerAssetDefault13;
  }
  const items = [callback(closure_3, { source: tmp4Result1, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === getPremiumPlanItem.Branding.BUNDLE) {
    const obj6 = { source: null, style: null };
    obj6[0] = registerAssetDefault24;
    obj6[1] = tmp.logoPlusPremiumGuild;
    tmp16Result = callback(closure_3, obj6);
  }
  items[1] = tmp16Result;
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = registerAssetDefault;
  } else if (getPremiumPlanItem.Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = registerAssetDefault2;
  } else if (getPremiumPlanItem.Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = registerAssetDefault8;
  } else if (getPremiumPlanItem.Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = registerAssetDefault9;
  } else if (getPremiumPlanItem.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = registerAssetDefault10;
  }
  const items1 = [tmp10.headerImage, tmp.headerImage];
  items[2] = callback(closure_3, { source: tmp4Result2, style: items1 });
  obj4[2] = items;
  const items2 = [callback2(closure_4, obj4), ];
  const obj7 = { style: tmp.body, children: null };
  const tmp11 = callback3(premiumBranding);
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    let tmp7Result = AccessibilityAnnouncer;
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result4 = registerAssetDefault15;
    } else {
      tmp4Result4 = registerAssetDefault16;
    }
  } else {
    if (getPremiumPlanItem.Branding.TIER_1 === premiumBranding) {
      tmp7Result = AccessibilityAnnouncer;
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = registerAssetDefault17;
      } else {
        tmp4Result5 = registerAssetDefault18;
      }
      let tmp4Result8 = tmp4Result5;
    } else if (getPremiumPlanItem.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = registerAssetDefault19;
      } else {
        tmp4Result6 = registerAssetDefault20;
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = AccessibilityAnnouncer;
    } else if (getPremiumPlanItem.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = registerAssetDefault21;
      } else {
        tmp4Result7 = registerAssetDefault22;
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = AccessibilityAnnouncer;
    } else if (getPremiumPlanItem.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = registerAssetDefault23;
    }
    const obj8 = { source: null, style: null };
    obj8[0] = tmp4Result8;
    obj8[1] = tmp11.animation;
    const items3 = [callback(tmp4Result3, obj8), ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.description;
    if (getPremiumPlanItem.Branding.TIER_0 !== premiumBranding) {
      if (getPremiumPlanItem.Branding.TIER_1 !== premiumBranding) {
        if (getPremiumPlanItem.Branding.TIER_2 === premiumBranding) {
          const intl3 = getSystemLocale.intl;
          let stringResult = intl3.string(getSystemLocale.t.aTUr3Z);
        } else if (getPremiumPlanItem.Branding.BUNDLE === premiumBranding) {
          const intl2 = getSystemLocale.intl;
          const obj10 = { planName: null };
          ({ planId: obj19[0], additionalPlans: obj19[1] } = renewalMutations);
          obj10[0] = getPremiumPlanItem.getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(getSystemLocale.t.YJUUH3, obj10);
          const tmp7Result3 = getPremiumPlanItem;
        }
      }
      obj9[1] = stringResult;
      items3[1] = callback(Button.LegacyText, obj9);
      obj7[1] = items3;
      items2[1] = callback2(closure_5, obj7);
      obj3[3] = items2;
      return callback2(tmp4Result, obj3);
    }
    const intl4 = getSystemLocale.intl;
    stringResult = intl4.string(getSystemLocale.t.knvOVz);
  }
  tmp4Result3 = _modDef7686;
};
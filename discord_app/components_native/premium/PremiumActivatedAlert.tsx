// === Module 7663: PremiumActivatedAlert ===

// Module 7663 (PremiumActivatedAlert)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import useThemeDefault from "useTheme" /* 4310 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import registerAssetDefault from "registerAsset" /* 7613 */;
import registerAssetDefault2 from "registerAsset" /* 7614 */;
import registerAssetDefault3 from "registerAsset" /* 7664 */;
import registerAssetDefault4 from "registerAsset" /* 7665 */;
import registerAssetDefault5 from "registerAsset" /* 7666 */;
import registerAssetDefault6 from "registerAsset" /* 7667 */;
import registerAssetDefault7 from "registerAsset" /* 7668 */;
import registerAssetDefault8 from "registerAsset" /* 7669 */;
import registerAssetDefault9 from "registerAsset" /* 7670 */;
import registerAssetDefault10 from "registerAsset" /* 7671 */;
import registerAssetDefault11 from "registerAsset" /* 7672 */;
import registerAssetDefault12 from "registerAsset" /* 7673 */;
import registerAssetDefault13 from "registerAsset" /* 7674 */;
import registerAssetDefault14 from "registerAsset" /* 7675 */;
import registerAssetDefault15 from "registerAsset" /* 7676 */;
import registerAssetDefault16 from "registerAsset" /* 7677 */;
import registerAssetDefault17 from "registerAsset" /* 7678 */;
import registerAssetDefault18 from "registerAsset" /* 7679 */;
import registerAssetDefault19 from "registerAsset" /* 7680 */;
import registerAssetDefault20 from "registerAsset" /* 7681 */;
import registerAssetDefault21 from "registerAsset" /* 7682 */;
import registerAssetDefault22 from "registerAsset" /* 7683 */;
import registerAssetDefault23 from "registerAsset" /* 7684 */;
import registerAssetDefault24 from "registerAsset" /* 7685 */;
import _modDef7686 from "module_7686" /* 7686 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { SubscriptionStatusTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

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
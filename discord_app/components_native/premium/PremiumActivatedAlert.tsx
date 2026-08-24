// === Module 7663: PremiumActivatedAlert ===

// Module 7663 (PremiumActivatedAlert)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import useThemeDefault from "useTheme" /* 4310 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { SubscriptionStatusTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ Image: c3, ImageBackground: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: null };
createCacheKey = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createCacheKey[5] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = createCacheKey.createStyles((arg0) => {
  if (getPremiumPlanItem.Branding.TIER_0 === arg0) {
    let obj = { headerImage: null };
    obj[0] = { marginLeft: -27, width: 88, top: 18 };
    return obj;
  } else if (tmp(4039).Branding.TIER_1 === arg0) {
    obj = { headerImage: null };
    obj[0] = { marginLeft: -27, width: 87, top: 18 };
    return obj;
  } else if (tmp(4039).Branding.BUNDLE === arg0) {
    obj1 = { headerImage: null };
    obj1[0] = { marginLeft: -29.5, width: 91, top: 18 };
    return obj1;
  } else if (tmp(4039).Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: null };
    obj2[0] = { marginLeft: -58, width: 122, height: 90, top: 18 };
    return obj2;
  } else if (tmp(4039).Branding.PREMIUM_GUILD === arg0) {
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
    if (tmp(4039).Branding.TIER_0 !== arg0) {
      if (tmp(4039).Branding.TIER_1 !== arg0) {
        if (tmp(4039).Branding.TIER_2 !== arg0) {
          if (tmp(4039).Branding.PREMIUM_GUILD === arg0) {
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
const result = require("set").fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

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
  } else if (tmp7(4039).Branding.TIER_1 === premiumBranding) {
    obj = { logo: null };
    obj[0] = { width: 82, height: 32 };
    tmp9 = obj;
  } else {
    if (tmp7(4039).Branding.BUNDLE !== premiumBranding) {
      if (tmp7(4039).Branding.TIER_2 !== premiumBranding) {
        if (tmp7(4039).Branding.PREMIUM_GUILD === premiumBranding) {
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
  let tmp4Result = tmp4(4763);
  const intl = tmp7(1236).intl;
  obj3[1] = intl.string(getSystemLocale.t.TkTvBz);
  obj3[2] = tmp.alert;
  const obj4 = { style: tmp.header, source: null, children: null };
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    tmp4Result = tmp4(7664);
  } else if (tmp7(4039).Branding.TIER_1 === premiumBranding) {
    tmp4Result = tmp4(7665);
  } else if (tmp7(4039).Branding.TIER_2 === premiumBranding) {
    tmp4Result = tmp4(7666);
  } else if (tmp7(4039).Branding.BUNDLE === premiumBranding) {
    tmp4Result = tmp4(7667);
  } else if (tmp7(4039).Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = tmp4(7668);
  }
  obj4[1] = tmp4Result;
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = tmp4(7672);
  } else if (tmp7(4039).Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = tmp4(7673);
  } else {
    if (tmp7(4039).Branding.BUNDLE !== premiumBranding) {
      if (tmp7(4039).Branding.TIER_2 !== premiumBranding) {
        if (tmp7(4039).Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = tmp4(7675);
        }
      }
    }
    tmp4Result1 = tmp4(7674);
  }
  const items = [closure_7(closure_3, { source: tmp4Result1, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === getPremiumPlanItem.Branding.BUNDLE) {
    const obj6 = { source: null, style: null };
    obj6[0] = tmp4(7685);
    obj6[1] = tmp.logoPlusPremiumGuild;
    tmp16Result = tmp16(tmp17, obj6);
  }
  items[1] = tmp16Result;
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = tmp4(7613);
  } else if (tmp7(4039).Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = tmp4(7614);
  } else if (tmp7(4039).Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = tmp4(7669);
  } else if (tmp7(4039).Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = tmp4(7670);
  } else if (tmp7(4039).Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = tmp4(7671);
  }
  const items1 = [tmp10.headerImage, tmp.headerImage];
  items[2] = closure_7(closure_3, { source: tmp4Result2, style: items1 });
  obj4[2] = items;
  const items2 = [closure_8(closure_4, obj4), ];
  const obj7 = { style: tmp.body, children: null };
  const obj5 = { source: tmp4Result1, style: tmp9.logo };
  const tmp11 = callback3(premiumBranding);
  const tmp14 = closure_4;
  const tmp21 = closure_5;
  if (getPremiumPlanItem.Branding.TIER_0 === premiumBranding) {
    let tmp7Result = tmp7(1363);
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result4 = tmp4(7676);
    } else {
      tmp4Result4 = tmp4(7677);
    }
  } else {
    if (tmp7(4039).Branding.TIER_1 === premiumBranding) {
      tmp7Result = tmp7(1363);
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = tmp4(7678);
      } else {
        tmp4Result5 = tmp4(7679);
      }
      let tmp4Result8 = tmp4Result5;
    } else if (tmp7(4039).Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = tmp4(7680);
      } else {
        tmp4Result6 = tmp4(7681);
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = tmp7(1363);
    } else if (tmp7(4039).Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = tmp4(7682);
      } else {
        tmp4Result7 = tmp4(7683);
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = tmp7(1363);
    } else if (tmp7(4039).Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = tmp4(7684);
    }
    const obj8 = { source: null, style: null };
    obj8[0] = tmp4Result8;
    obj8[1] = tmp11.animation;
    const items3 = [tmp16(tmp4Result3, obj8), ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.description;
    if (tmp7(4039).Branding.TIER_0 !== premiumBranding) {
      if (tmp7(4039).Branding.TIER_1 !== premiumBranding) {
        if (tmp7(4039).Branding.TIER_2 === premiumBranding) {
          const intl3 = tmp7(1236).intl;
          let stringResult = intl3.string(tmp7(1236).t.aTUr3Z);
        } else if (tmp7(4039).Branding.BUNDLE === premiumBranding) {
          const intl2 = tmp7(1236).intl;
          const obj10 = { planName: null };
          ({ planId: obj19[0], additionalPlans: obj19[1] } = renewalMutations);
          obj10[0] = tmp7(4039).getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(tmp7(1236).t.YJUUH3, obj10);
          const obj11 = { planId: null, additionalPlans: null };
          const tmp7Result3 = tmp7(4039);
        }
      }
      obj9[1] = stringResult;
      items3[1] = tmp16(tmp7(1297).LegacyText, obj9);
      obj7[1] = items3;
      items2[1] = tmp12(tmp21, obj7);
      obj3[3] = items2;
      return tmp12(tmp4Result, obj3);
    }
    const intl4 = tmp7(1236).intl;
    stringResult = intl4.string(tmp7(1236).t.knvOVz);
  }
};
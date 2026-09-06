// discord_app/components_native/premium/PremiumActivatedAlert.tsx
import util from "../../intl/index.native.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  alert: { overflow: "hidden", paddingBottom: 24 },
  header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" },
  headerImage: { position: "absolute", left: "50%" },
  body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" },
  logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 },
  description: null,
};
createStyles = {
  fontSize: 14,
  lineHeight: 16,
  textAlign: "center",
  marginTop: 20,
  color: fn(5441).DARK_PRIMARY_300_LIGHT_PRIMARY_400,
};
createStyles.description = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.TIER_0 === arg0) {
    let obj = { headerImage: { marginLeft: -27, width: 88, top: 18 } };
    return obj;
  } else if (tmp(4218).Branding.TIER_1 === arg0) {
    obj = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj;
  } else if (tmp(4218).Branding.BUNDLE === arg0) {
    const obj1 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj1;
  } else if (tmp(4218).Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj2;
  } else if (tmp(4218).Branding.PREMIUM_GUILD === arg0) {
    obj = { headerImage: { marginLeft: -54, width: 140, top: 18 } };
    return obj;
  }
});
createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.BUNDLE === arg0) {
    let obj = { animation: { borderRadius: 6 } };
    return obj;
  } else {
    if (tmp(4218).Branding.TIER_0 !== arg0) {
      if (tmp(4218).Branding.TIER_1 !== arg0) {
        if (tmp(4218).Branding.TIER_2 !== arg0) {
          if (tmp(4218).Branding.PREMIUM_GUILD === arg0) {
            obj = { animation: { borderRadius: 9 } };
            return obj;
          }
        }
      }
    }
    obj = { animation: { borderRadius: 5 } };
    return obj;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
  const tmp = closure_9();
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
  let obj = PremiumUtils;
  const premiumBranding = obj.getPremiumBranding(renewalMutations);
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    obj = { logo: { width: 82, height: 44 } };
    let tmp9 = obj;
  } else if (tmp7(4218).Branding.TIER_1 === premiumBranding) {
    obj = { logo: { width: 82, height: 32 } };
    tmp9 = obj;
  } else {
    if (tmp7(4218).Branding.BUNDLE !== premiumBranding) {
      if (tmp7(4218).Branding.TIER_2 !== premiumBranding) {
        if (tmp7(4218).Branding.PREMIUM_GUILD === premiumBranding) {
          const obj1 = { logo: { width: 82, height: 18 } };
          tmp9 = obj1;
        }
      }
    }
    const obj2 = { logo: { width: 79, height: 32 } };
    tmp9 = obj2;
  }
  const tmp10 = closure_10(premiumBranding);
  const obj3 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  let tmp4Result = tmp4(4994);
  const intl = tmp7(1114).intl;
  obj3.confirmText = intl.string(util.t.TkTvBz);
  obj3.style = tmp.alert;
  const obj4 = { style: tmp.header, source: null, children: null };
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result = tmp4(10710);
  } else if (tmp7(4218).Branding.TIER_1 === premiumBranding) {
    tmp4Result = tmp4(10711);
  } else if (tmp7(4218).Branding.TIER_2 === premiumBranding) {
    tmp4Result = tmp4(10712);
  } else if (tmp7(4218).Branding.BUNDLE === premiumBranding) {
    tmp4Result = tmp4(10713);
  } else if (tmp7(4218).Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = tmp4(10714);
  }
  obj4.source = tmp4Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = tmp4(10719);
  } else if (tmp7(4218).Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = tmp4(10720);
  } else {
    if (tmp7(4218).Branding.BUNDLE !== premiumBranding) {
      if (tmp7(4218).Branding.TIER_2 !== premiumBranding) {
        if (tmp7(4218).Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = tmp4(10721);
        }
      }
    }
    tmp4Result1 = tmp4(8068);
  }
  const items = [React5(React3, { source: tmp4Result1, style: tmp9.logo }), ,];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj6 = { source: tmp4(10731), style: tmp.logoPlusPremiumGuild };
    tmp16Result = tmp16(tmp17, obj6);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = tmp4(9385);
  } else if (tmp7(4218).Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = tmp4(10715);
  } else if (tmp7(4218).Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = tmp4(10716);
  } else if (tmp7(4218).Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = tmp4(10717);
  } else if (tmp7(4218).Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = tmp4(10718);
  }
  const obj7 = { source: tmp4Result2, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj7.style = items1;
  items[2] = React5(React3, obj7);
  obj4.children = items;
  const items2 = [React6(React4, obj4)];
  const obj8 = { style: tmp.body, children: null };
  const obj5 = { source: tmp4Result1, style: tmp9.logo };
  const tmp11 = closure_11(premiumBranding);
  const tmp21 = hasOwnProperty;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp7Result = tmp7(4411);
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result4 = tmp4(10722);
    } else {
      tmp4Result4 = tmp4(10723);
    }
  } else {
    if (tmp7(4218).Branding.TIER_1 === premiumBranding) {
      tmp7Result = tmp7(4411);
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = tmp4(10724);
      } else {
        tmp4Result5 = tmp4(10725);
      }
      let tmp4Result8 = tmp4Result5;
    } else if (tmp7(4218).Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = tmp4(10726);
      } else {
        tmp4Result6 = tmp4(10727);
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = tmp7(4411);
    } else if (tmp7(4218).Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = tmp4(10728);
      } else {
        tmp4Result7 = tmp4(10729);
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = tmp7(4411);
    } else if (tmp7(4218).Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = tmp4(10730);
    }
    const obj9 = { source: tmp4Result8, style: tmp11.animation };
    const items3 = [tmp16(tmp4Result3, obj9)];
    const obj10 = { style: tmp.description, children: null };
    if (tmp7(4218).Branding.TIER_0 !== premiumBranding) {
      if (tmp7(4218).Branding.TIER_1 !== premiumBranding) {
        if (tmp7(4218).Branding.TIER_2 === premiumBranding) {
          const intl3 = tmp7(1114).intl;
          let stringResult = intl3.string(tmp7(1114).t.aTUr3Z);
        } else if (tmp7(4218).Branding.BUNDLE === premiumBranding) {
          const intl2 = tmp7(1114).intl;
          const obj11 = { planName: null };
          ({ planId: obj20.planId, additionalPlans: obj20.additionalPlans } = renewalMutations);
          obj11.planName = tmp7(4218).getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(tmp7(1114).t.YJUUH3, obj11);
          const obj12 = { planId: null, additionalPlans: null };
          const tmp7Result3 = tmp7(4218);
        }
      }
      obj10.children = stringResult;
      items3[1] = tmp16(tmp7(1178).LegacyText, obj10);
      obj8.children = items3;
      items2[1] = tmp12(tmp21, obj8);
      obj3.children = items2;
      return tmp12(tmp4Result, obj3);
    }
    const intl4 = tmp7(1114).intl;
    stringResult = intl4.string(tmp7(1114).t.knvOVz);
  }
}

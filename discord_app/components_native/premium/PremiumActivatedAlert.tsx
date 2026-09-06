// discord_app/components_native/premium/PremiumActivatedAlert.tsx
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import shared from "../../design/shared.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import common_AlertDefault from "../common/Alert.tsx";
import _modDef8068 from "../../../_runtime/metro/08068__.js";
import _modDef9385 from "../../../_runtime/metro/09385__.js";
import _modDef10710 from "../../../_runtime/metro/10710__.js";
import _modDef10711 from "../../../_runtime/metro/10711__.js";
import _modDef10712 from "../../../_runtime/metro/10712__.js";
import _modDef10713 from "../../../_runtime/metro/10713__.js";
import _modDef10714 from "../../../_runtime/metro/10714__.js";
import _modDef10715 from "../../../_runtime/metro/10715__.js";
import _modDef10716 from "../../../_runtime/metro/10716__.js";
import _modDef10717 from "../../../_runtime/metro/10717__.js";
import _modDef10718 from "../../../_runtime/metro/10718__.js";
import _modDef10719 from "../../../_runtime/metro/10719__.js";
import _modDef10720 from "../../../_runtime/metro/10720__.js";
import _modDef10721 from "../../../_runtime/metro/10721__.js";
import _modDef10722 from "../../../_runtime/metro/10722__.js";
import _modDef10723 from "../../../_runtime/metro/10723__.js";
import _modDef10724 from "../../../_runtime/metro/10724__.js";
import _modDef10725 from "../../../_runtime/metro/10725__.js";
import _modDef10726 from "../../../_runtime/metro/10726__.js";
import _modDef10727 from "../../../_runtime/metro/10727__.js";
import _modDef10728 from "../../../_runtime/metro/10728__.js";
import _modDef10729 from "../../../_runtime/metro/10729__.js";
import _modDef10730 from "../../../_runtime/metro/10730__.js";
import _modDef10731 from "../../../_runtime/metro/10731__.js";
import ShineAnimationDefault from "ShineAnimation.tsx";
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
  } else if (PremiumUtils.Branding.TIER_1 === arg0) {
    obj = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj;
  } else if (PremiumUtils.Branding.BUNDLE === arg0) {
    const obj1 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj1;
  } else if (PremiumUtils.Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj2;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
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
    if (PremiumUtils.Branding.TIER_0 !== arg0) {
      if (PremiumUtils.Branding.TIER_1 !== arg0) {
        if (PremiumUtils.Branding.TIER_2 !== arg0) {
          if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
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
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    obj = { logo: { width: 82, height: 32 } };
    tmp9 = obj;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
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
  let tmp4Result = common_AlertDefault;
  const intl = util.intl;
  obj3.confirmText = intl.string(util.t.TkTvBz);
  obj3.style = tmp.alert;
  const obj4 = { style: tmp.header, source: null, children: null };
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result = _modDef10710;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result = _modDef10711;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result = _modDef10712;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result = _modDef10713;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = _modDef10714;
  }
  obj4.source = tmp4Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = _modDef10719;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = _modDef10720;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = _modDef10721;
        }
      }
    }
    tmp4Result1 = _modDef8068;
  }
  const items = [React5(React3, { source: tmp4Result1, style: tmp9.logo }), ,];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj6 = { source: _modDef10731, style: tmp.logoPlusPremiumGuild };
    tmp16Result = React5(React3, obj6);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = _modDef9385;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = _modDef10715;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = _modDef10716;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = _modDef10717;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = _modDef10718;
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
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp7Result = shared;
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result4 = _modDef10722;
    } else {
      tmp4Result4 = _modDef10723;
    }
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      tmp7Result = shared;
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = _modDef10724;
      } else {
        tmp4Result5 = _modDef10725;
      }
      let tmp4Result8 = tmp4Result5;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = _modDef10726;
      } else {
        tmp4Result6 = _modDef10727;
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = _modDef10728;
      } else {
        tmp4Result7 = _modDef10729;
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = _modDef10730;
    }
    const obj9 = { source: tmp4Result8, style: tmp11.animation };
    const items3 = [React5(tmp4Result3, obj9)];
    const obj10 = { style: tmp.description, children: null };
    if (PremiumUtils.Branding.TIER_0 !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_1 !== premiumBranding) {
        if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
          const intl3 = util.intl;
          let stringResult = intl3.string(util.t.aTUr3Z);
        } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
          const intl2 = util.intl;
          const obj11 = { planName: null };
          ({ planId: obj20.planId, additionalPlans: obj20.additionalPlans } = renewalMutations);
          obj11.planName = PremiumUtils.getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(util.t.YJUUH3, obj11);
          const obj12 = { planId: null, additionalPlans: null };
          const tmp7Result3 = PremiumUtils;
        }
      }
      obj10.children = stringResult;
      items3[1] = React5(native.LegacyText, obj10);
      obj8.children = items3;
      items2[1] = React6(hasOwnProperty, obj8);
      obj3.children = items2;
      return React6(tmp4Result, obj3);
    }
    const intl4 = util.intl;
    stringResult = intl4.string(util.t.knvOVz);
  }
  tmp4Result3 = ShineAnimationDefault;
}

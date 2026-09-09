// === Module 10741: PremiumActivatedAlert ===

// Module 10741 (PremiumActivatedAlert)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import PremiumUtils from "PremiumUtils" /* 4231 */;
import shared from "shared" /* 4425 */;
import useThemeDefault from "useTheme" /* 4509 */;
import common_AlertDefault from "common/Alert" /* 5008 */;
import _modDef8083 from "module_8083" /* 8083 */;
import _modDef9417 from "module_9417" /* 9417 */;
import _modDef10742 from "module_10742" /* 10742 */;
import _modDef10743 from "module_10743" /* 10743 */;
import _modDef10744 from "module_10744" /* 10744 */;
import _modDef10745 from "module_10745" /* 10745 */;
import _modDef10746 from "module_10746" /* 10746 */;
import _modDef10747 from "module_10747" /* 10747 */;
import _modDef10748 from "module_10748" /* 10748 */;
import _modDef10749 from "module_10749" /* 10749 */;
import _modDef10750 from "module_10750" /* 10750 */;
import _modDef10751 from "module_10751" /* 10751 */;
import _modDef10752 from "module_10752" /* 10752 */;
import _modDef10753 from "module_10753" /* 10753 */;
import _modDef10754 from "module_10754" /* 10754 */;
import _modDef10755 from "module_10755" /* 10755 */;
import _modDef10756 from "module_10756" /* 10756 */;
import _modDef10757 from "module_10757" /* 10757 */;
import _modDef10758 from "module_10758" /* 10758 */;
import _modDef10759 from "module_10759" /* 10759 */;
import _modDef10760 from "module_10760" /* 10760 */;
import _modDef10761 from "module_10761" /* 10761 */;
import _modDef10762 from "module_10762" /* 10762 */;
import _modDef10763 from "module_10763" /* 10763 */;
import ShineAnimationDefault from "ShineAnimation" /* 10764 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4574);
let createStyles = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: null };
createStyles = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5455).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createStyles.description = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
createStyles = fn(4574);
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
createStyles = fn(4574);
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
    tmp4Result = _modDef10742;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result = _modDef10743;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result = _modDef10744;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result = _modDef10745;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = _modDef10746;
  }
  obj4.source = tmp4Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = _modDef10751;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = _modDef10752;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = _modDef10753;
        }
      }
    }
    tmp4Result1 = _modDef8083;
  }
  const items = [React5(React3, { source: tmp4Result1, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj6 = { source: _modDef10763, style: tmp.logoPlusPremiumGuild };
    tmp16Result = React5(React3, obj6);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = _modDef9417;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = _modDef10747;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = _modDef10748;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = _modDef10749;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = _modDef10750;
  }
  const obj7 = { source: tmp4Result2, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj7.style = items1;
  items[2] = React5(React3, obj7);
  obj4.children = items;
  const items2 = [React6(React4, obj4), ];
  const obj8 = { style: tmp.body, children: null };
  const obj5 = { source: tmp4Result1, style: tmp9.logo };
  const tmp11 = closure_11(premiumBranding);
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp7Result = shared;
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result4 = _modDef10754;
    } else {
      tmp4Result4 = _modDef10755;
    }
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      tmp7Result = shared;
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = _modDef10756;
      } else {
        tmp4Result5 = _modDef10757;
      }
      let tmp4Result8 = tmp4Result5;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = _modDef10758;
      } else {
        tmp4Result6 = _modDef10759;
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = _modDef10760;
      } else {
        tmp4Result7 = _modDef10761;
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = _modDef10762;
    }
    const obj9 = { source: tmp4Result8, style: tmp11.animation };
    const items3 = [React5(tmp4Result3, obj9), ];
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
};
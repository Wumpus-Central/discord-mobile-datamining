// === Module 10779: PremiumActivatedAlert ===

// Module 10779 (PremiumActivatedAlert)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import PremiumUtils from "PremiumUtils" /* 4262 */;
import shared from "shared" /* 4456 */;
import useThemeDefault from "useTheme" /* 4540 */;
import common_AlertDefault from "common/Alert" /* 5044 */;
import _modDef8121 from "module_8121" /* 8121 */;
import _modDef9455 from "module_9455" /* 9455 */;
import _modDef10780 from "module_10780" /* 10780 */;
import _modDef10781 from "module_10781" /* 10781 */;
import _modDef10782 from "module_10782" /* 10782 */;
import _modDef10783 from "module_10783" /* 10783 */;
import _modDef10784 from "module_10784" /* 10784 */;
import _modDef10785 from "module_10785" /* 10785 */;
import _modDef10786 from "module_10786" /* 10786 */;
import _modDef10787 from "module_10787" /* 10787 */;
import _modDef10788 from "module_10788" /* 10788 */;
import _modDef10789 from "module_10789" /* 10789 */;
import _modDef10790 from "module_10790" /* 10790 */;
import _modDef10791 from "module_10791" /* 10791 */;
import _modDef10792 from "module_10792" /* 10792 */;
import _modDef10793 from "module_10793" /* 10793 */;
import _modDef10794 from "module_10794" /* 10794 */;
import _modDef10795 from "module_10795" /* 10795 */;
import _modDef10796 from "module_10796" /* 10796 */;
import _modDef10797 from "module_10797" /* 10797 */;
import _modDef10798 from "module_10798" /* 10798 */;
import _modDef10799 from "module_10799" /* 10799 */;
import _modDef10800 from "module_10800" /* 10800 */;
import _modDef10801 from "module_10801" /* 10801 */;
import ShineAnimationDefault from "ShineAnimation" /* 10802 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4605);
let createStyles = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: null };
createStyles = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5491).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createStyles.description = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
createStyles = fn(4605);
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
createStyles = fn(4605);
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
    tmp4Result = _modDef10780;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result = _modDef10781;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result = _modDef10782;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result = _modDef10783;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = _modDef10784;
  }
  obj4.source = tmp4Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = _modDef10789;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = _modDef10790;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = _modDef10791;
        }
      }
    }
    tmp4Result1 = _modDef8121;
  }
  const items = [React5(React3, { source: tmp4Result1, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj6 = { source: _modDef10801, style: tmp.logoPlusPremiumGuild };
    tmp16Result = React5(React3, obj6);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = _modDef9455;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = _modDef10785;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = _modDef10786;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = _modDef10787;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = _modDef10788;
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
      let tmp4Result4 = _modDef10792;
    } else {
      tmp4Result4 = _modDef10793;
    }
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      tmp7Result = shared;
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = _modDef10794;
      } else {
        tmp4Result5 = _modDef10795;
      }
      let tmp4Result8 = tmp4Result5;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = _modDef10796;
      } else {
        tmp4Result6 = _modDef10797;
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = _modDef10798;
      } else {
        tmp4Result7 = _modDef10799;
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = _modDef10800;
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
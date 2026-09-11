// === Module 10798: PremiumActivatedAlert ===

// Module 10798 (PremiumActivatedAlert)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import PremiumUtils from "PremiumUtils" /* 4264 */;
import shared from "shared" /* 4458 */;
import useThemeDefault from "useTheme" /* 4541 */;
import common_AlertDefault from "common/Alert" /* 5045 */;
import _modDef8143 from "module_8143" /* 8143 */;
import _modDef9476 from "module_9476" /* 9476 */;
import _modDef10799 from "module_10799" /* 10799 */;
import _modDef10800 from "module_10800" /* 10800 */;
import _modDef10801 from "module_10801" /* 10801 */;
import _modDef10802 from "module_10802" /* 10802 */;
import _modDef10803 from "module_10803" /* 10803 */;
import _modDef10804 from "module_10804" /* 10804 */;
import _modDef10805 from "module_10805" /* 10805 */;
import _modDef10806 from "module_10806" /* 10806 */;
import _modDef10807 from "module_10807" /* 10807 */;
import _modDef10808 from "module_10808" /* 10808 */;
import _modDef10809 from "module_10809" /* 10809 */;
import _modDef10810 from "module_10810" /* 10810 */;
import _modDef10811 from "module_10811" /* 10811 */;
import _modDef10812 from "module_10812" /* 10812 */;
import _modDef10813 from "module_10813" /* 10813 */;
import _modDef10814 from "module_10814" /* 10814 */;
import _modDef10815 from "module_10815" /* 10815 */;
import _modDef10816 from "module_10816" /* 10816 */;
import _modDef10817 from "module_10817" /* 10817 */;
import _modDef10818 from "module_10818" /* 10818 */;
import _modDef10819 from "module_10819" /* 10819 */;
import _modDef10820 from "module_10820" /* 10820 */;
import ShineAnimationDefault from "ShineAnimation" /* 10821 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4606);
let createStyles = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: null };
createStyles = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5492).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createStyles.description = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
createStyles = fn(4606);
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
createStyles = fn(4606);
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
    tmp4Result = _modDef10799;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result = _modDef10800;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result = _modDef10801;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result = _modDef10802;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result = _modDef10803;
  }
  obj4.source = tmp4Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result1 = _modDef10808;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result1 = _modDef10809;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result1 = _modDef10810;
        }
      }
    }
    tmp4Result1 = _modDef8143;
  }
  const items = [React5(React3, { source: tmp4Result1, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj6 = { source: _modDef10820, style: tmp.logoPlusPremiumGuild };
    tmp16Result = React5(React3, obj6);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result2 = _modDef9476;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result2 = _modDef10804;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result2 = _modDef10805;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result2 = _modDef10806;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result2 = _modDef10807;
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
      let tmp4Result4 = _modDef10811;
    } else {
      tmp4Result4 = _modDef10812;
    }
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      tmp7Result = shared;
      if (tmp7Result.isThemeDark(tmp6)) {
        let tmp4Result5 = _modDef10813;
      } else {
        tmp4Result5 = _modDef10814;
      }
      let tmp4Result8 = tmp4Result5;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result1.isThemeDark(tmp6)) {
        let tmp4Result6 = _modDef10815;
      } else {
        tmp4Result6 = _modDef10816;
      }
      tmp4Result8 = tmp4Result6;
      tmp7Result1 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result2.isThemeDark(tmp6)) {
        let tmp4Result7 = _modDef10817;
      } else {
        tmp4Result7 = _modDef10818;
      }
      tmp4Result8 = tmp4Result7;
      tmp7Result2 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result8 = _modDef10819;
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
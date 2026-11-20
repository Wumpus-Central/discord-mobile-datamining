// === Module 9092: PremiumActivatedAlert ===

// Module 9092 (PremiumActivatedAlert)
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import PremiumUtils from "PremiumUtils" /* 2172 */;
import shared from "shared" /* 4801 */;
import useThemeDefault from "useTheme" /* 5003 */;
import FastImageDefault from "FastImage" /* 5481 */;
import common_AlertDefault from "common/Alert" /* 5813 */;
import _modDef8748 from "module_8748" /* 8748 */;
import _modDef9007 from "module_9007" /* 9007 */;
import _modDef9008 from "module_9008" /* 9008 */;
import _modDef9093 from "module_9093" /* 9093 */;
import _modDef9094 from "module_9094" /* 9094 */;
import _modDef9095 from "module_9095" /* 9095 */;
import _modDef9096 from "module_9096" /* 9096 */;
import _modDef9097 from "module_9097" /* 9097 */;
import _modDef9098 from "module_9098" /* 9098 */;
import _modDef9099 from "module_9099" /* 9099 */;
import _modDef9100 from "module_9100" /* 9100 */;
import _modDef9101 from "module_9101" /* 9101 */;
import _modDef9102 from "module_9102" /* 9102 */;
import _modDef9103 from "module_9103" /* 9103 */;
import _modDef9104 from "module_9104" /* 9104 */;
import _modDef9105 from "module_9105" /* 9105 */;
import _modDef9106 from "module_9106" /* 9106 */;
import _modDef9107 from "module_9107" /* 9107 */;
import _modDef9108 from "module_9108" /* 9108 */;
import _modDef9109 from "module_9109" /* 9109 */;
import _modDef9110 from "module_9110" /* 9110 */;
import _modDef9111 from "module_9111" /* 9111 */;
import _modDef9112 from "module_9112" /* 9112 */;
import _modDef9113 from "module_9113" /* 9113 */;
import ShineAnimationDefault from "ShineAnimation" /* 9114 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1071).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let createStyles = fn(4794);
let obj2 = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerBackground: null, headerImage: null, body: null, logoPlusPremiumGuild: null, description: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 100;
obj2.headerBackground = obj3;
obj2.headerImage = { position: "absolute", left: "50%" };
obj2.body = { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" };
obj2.logoPlusPremiumGuild = { marginTop: 3, width: 101, height: 19 };
obj2.description = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(6436).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(4794);
let closure_8 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.TIER_0 === arg0) {
    const obj2 = { headerImage: { marginLeft: -27, width: 88, top: 18 } };
    return obj2;
  } else if (PremiumUtils.Branding.TIER_1 === arg0) {
    const obj3 = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj3;
  } else if (PremiumUtils.Branding.BUNDLE === arg0) {
    const obj4 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj4;
  } else if (PremiumUtils.Branding.TIER_2 === arg0) {
    const obj5 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj5;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
    const obj = { headerImage: { marginLeft: -54, width: 140, top: 18 } };
    return obj;
  }
});
createStyles = fn(4794);
let closure_9 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.BUNDLE === arg0) {
    const obj2 = { animation: { borderRadius: 6 } };
    return obj2;
  } else {
    if (PremiumUtils.Branding.TIER_0 !== arg0) {
      if (PremiumUtils.Branding.TIER_1 !== arg0) {
        if (PremiumUtils.Branding.TIER_2 !== arg0) {
          if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
            const obj = { animation: { borderRadius: 9 } };
            return obj;
          }
        }
      }
    }
    const obj3 = { animation: { borderRadius: 5 } };
    return obj3;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
  const tmp = closure_7();
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
  const premiumBranding = PremiumUtils.getPremiumBranding(renewalMutations);
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    const obj2 = { logo: { width: 82, height: 44 } };
    let tmp9 = obj2;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    const obj3 = { logo: { width: 82, height: 32 } };
    tmp9 = obj3;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          const obj4 = { logo: { width: 82, height: 18 } };
          tmp9 = obj4;
        }
      }
    }
    const obj5 = { logo: { width: 79, height: 32 } };
    tmp9 = obj5;
  }
  const tmp10 = closure_8(premiumBranding);
  const obj6 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  const tmp11 = closure_9(premiumBranding);
  const intl = util.intl;
  obj6.confirmText = intl.string(util.t.TkTvBz);
  obj6.style = tmp.alert;
  const obj7 = { style: tmp.header, children: null };
  const tmp4Result = common_AlertDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result15 = _modDef9093;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = _modDef9094;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = _modDef9095;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = _modDef9096;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = _modDef9097;
  }
  items = [hasOwnProperty(FastImageDefault, { source: tmp4Result15, style: tmp.headerBackground }), , , ];
  const obj8 = { source: tmp4Result15, style: tmp.headerBackground };
  const tmp4Result14 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result17 = _modDef9101;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result17 = _modDef9102;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result17 = _modDef9103;
        }
      }
    }
    tmp4Result17 = _modDef8748;
  }
  items[1] = hasOwnProperty(FastImageDefault, { source: tmp4Result17, style: tmp9.logo });
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: _modDef9113, style: tmp.logoPlusPremiumGuild };
    tmp15Result = hasOwnProperty(FastImageDefault, obj10);
    const tmp4Result18 = FastImageDefault;
  }
  items[2] = tmp15Result;
  const obj9 = { source: tmp4Result17, style: tmp9.logo };
  const tmp4Result16 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result20 = _modDef9007;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result20 = _modDef9008;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result20 = _modDef9098;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result20 = _modDef9099;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result20 = _modDef9100;
  }
  const obj11 = { source: tmp4Result20, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj11.style = items1;
  items[3] = hasOwnProperty(FastImageDefault, obj11);
  obj7.children = items;
  const items2 = [timestampProducer(React3, obj7), ];
  const obj12 = { style: tmp.body, children: null };
  const tmp4Result19 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result22 = _modDef9104;
    } else {
      tmp4Result22 = _modDef9105;
    }
    tmp7Result = shared;
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      if (tmp7Result5.isThemeDark(tmp6)) {
        let tmp4Result23 = _modDef9106;
      } else {
        tmp4Result23 = _modDef9107;
      }
      let tmp4Result26 = tmp4Result23;
      tmp7Result5 = shared;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result6.isThemeDark(tmp6)) {
        let tmp4Result24 = _modDef9108;
      } else {
        tmp4Result24 = _modDef9109;
      }
      tmp4Result26 = tmp4Result24;
      tmp7Result6 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result7.isThemeDark(tmp6)) {
        let tmp4Result25 = _modDef9110;
      } else {
        tmp4Result25 = _modDef9111;
      }
      tmp4Result26 = tmp4Result25;
      tmp7Result7 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result26 = _modDef9112;
    }
    const obj13 = { source: tmp4Result26, style: tmp11.animation };
    const items3 = [hasOwnProperty(tmp4Result21, obj13), ];
    const obj14 = { style: tmp.description, children: null };
    if (PremiumUtils.Branding.TIER_0 !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_1 !== premiumBranding) {
        if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
          const intl3 = util.intl;
          let stringResult = intl3.string(util.t.aTUr3Z);
        } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
          const intl2 = util.intl;
          const obj15 = { planName: null };
          ({ planId: obj21.planId, additionalPlans: obj21.additionalPlans } = renewalMutations);
          obj15.planName = PremiumUtils.getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(util.t.YJUUH3, obj15);
          const obj16 = { planId: null, additionalPlans: null };
          const tmp7Result8 = PremiumUtils;
        }
      }
      obj14.children = stringResult;
      items3[1] = hasOwnProperty(native.LegacyText, obj14);
      obj12.children = items3;
      items2[1] = timestampProducer(React3, obj12);
      obj6.children = items2;
      return timestampProducer(tmp4Result, obj6);
    }
    const intl4 = util.intl;
    stringResult = intl4.string(util.t.knvOVz);
  }
  tmp4Result21 = ShineAnimationDefault;
};
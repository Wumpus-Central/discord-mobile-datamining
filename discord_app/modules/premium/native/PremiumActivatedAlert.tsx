// === Module 9233: PremiumActivatedAlert ===

// Module 9233 (PremiumActivatedAlert)
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import shared from "shared" /* 5050 */;
import useThemeDefault from "useTheme" /* 5252 */;
import FastImageDefault from "FastImage" /* 5730 */;
import common_AlertDefault from "common/Alert" /* 6118 */;
import _modDef9147 from "module_9147" /* 9147 */;
import _modDef9148 from "module_9148" /* 9148 */;
import _modDef9234 from "module_9234" /* 9234 */;
import _modDef9235 from "module_9235" /* 9235 */;
import _modDef9236 from "module_9236" /* 9236 */;
import _modDef9237 from "module_9237" /* 9237 */;
import _modDef9238 from "module_9238" /* 9238 */;
import _modDef9239 from "module_9239" /* 9239 */;
import _modDef9240 from "module_9240" /* 9240 */;
import _modDef9241 from "module_9241" /* 9241 */;
import _modDef9242 from "module_9242" /* 9242 */;
import _modDef9243 from "module_9243" /* 9243 */;
import _modDef9244 from "module_9244" /* 9244 */;
import _modDef9245 from "module_9245" /* 9245 */;
import _modDef9246 from "module_9246" /* 9246 */;
import _modDef9247 from "module_9247" /* 9247 */;
import _modDef9248 from "module_9248" /* 9248 */;
import _modDef9249 from "module_9249" /* 9249 */;
import _modDef9250 from "module_9250" /* 9250 */;
import _modDef9251 from "module_9251" /* 9251 */;
import _modDef9252 from "module_9252" /* 9252 */;
import _modDef9253 from "module_9253" /* 9253 */;
import _modDef9254 from "module_9254" /* 9254 */;
import _modDef9255 from "module_9255" /* 9255 */;
import ShineAnimationDefault from "ShineAnimation" /* 9256 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1071).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let createStyles = fn(5043);
let obj2 = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerBackground: null, headerImage: null, body: null, logoPlusPremiumGuild: null, description: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 100;
obj2.headerBackground = obj3;
obj2.headerImage = { position: "absolute", left: "50%" };
obj2.body = { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" };
obj2.logoPlusPremiumGuild = { marginTop: 3, width: 101, height: 19 };
obj2.description = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(6868).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(5043);
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
createStyles = fn(5043);
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
    let tmp4Result15 = _modDef9234;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = _modDef9235;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = _modDef9236;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = _modDef9237;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = _modDef9238;
  }
  items = [hasOwnProperty(FastImageDefault, { source: tmp4Result15, style: tmp.headerBackground }), , , ];
  const obj8 = { source: tmp4Result15, style: tmp.headerBackground };
  const tmp4Result14 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result17 = _modDef9242;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result17 = _modDef9243;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result17 = _modDef9245;
        }
      }
    }
    tmp4Result17 = _modDef9244;
  }
  items[1] = hasOwnProperty(FastImageDefault, { source: tmp4Result17, style: tmp9.logo });
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: _modDef9255, style: tmp.logoPlusPremiumGuild };
    tmp15Result = hasOwnProperty(FastImageDefault, obj10);
    const tmp4Result18 = FastImageDefault;
  }
  items[2] = tmp15Result;
  const obj9 = { source: tmp4Result17, style: tmp9.logo };
  const tmp4Result16 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result20 = _modDef9147;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result20 = _modDef9148;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result20 = _modDef9239;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result20 = _modDef9240;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result20 = _modDef9241;
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
      let tmp4Result22 = _modDef9246;
    } else {
      tmp4Result22 = _modDef9247;
    }
    tmp7Result = shared;
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      if (tmp7Result5.isThemeDark(tmp6)) {
        let tmp4Result23 = _modDef9248;
      } else {
        tmp4Result23 = _modDef9249;
      }
      let tmp4Result26 = tmp4Result23;
      tmp7Result5 = shared;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result6.isThemeDark(tmp6)) {
        let tmp4Result24 = _modDef9250;
      } else {
        tmp4Result24 = _modDef9251;
      }
      tmp4Result26 = tmp4Result24;
      tmp7Result6 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result7.isThemeDark(tmp6)) {
        let tmp4Result25 = _modDef9252;
      } else {
        tmp4Result25 = _modDef9253;
      }
      tmp4Result26 = tmp4Result25;
      tmp7Result7 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result26 = _modDef9254;
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
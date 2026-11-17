// === Module 9701: PremiumActivatedAlert ===

// Module 9701 (PremiumActivatedAlert)
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import shared from "shared" /* 5317 */;
import useThemeDefault from "useTheme" /* 5541 */;
import FastImageDefault from "FastImage" /* 6014 */;
import common_AlertDefault from "common/Alert" /* 6338 */;
import _modDef9328 from "module_9328" /* 9328 */;
import _modDef9619 from "module_9619" /* 9619 */;
import _modDef9620 from "module_9620" /* 9620 */;
import _modDef9702 from "module_9702" /* 9702 */;
import _modDef9703 from "module_9703" /* 9703 */;
import _modDef9704 from "module_9704" /* 9704 */;
import _modDef9705 from "module_9705" /* 9705 */;
import _modDef9706 from "module_9706" /* 9706 */;
import _modDef9707 from "module_9707" /* 9707 */;
import _modDef9708 from "module_9708" /* 9708 */;
import _modDef9709 from "module_9709" /* 9709 */;
import _modDef9710 from "module_9710" /* 9710 */;
import _modDef9711 from "module_9711" /* 9711 */;
import _modDef9712 from "module_9712" /* 9712 */;
import _modDef9713 from "module_9713" /* 9713 */;
import _modDef9714 from "module_9714" /* 9714 */;
import _modDef9715 from "module_9715" /* 9715 */;
import _modDef9716 from "module_9716" /* 9716 */;
import _modDef9717 from "module_9717" /* 9717 */;
import _modDef9718 from "module_9718" /* 9718 */;
import _modDef9719 from "module_9719" /* 9719 */;
import _modDef9720 from "module_9720" /* 9720 */;
import _modDef9721 from "module_9721" /* 9721 */;
import _modDef9722 from "module_9722" /* 9722 */;
import ShineAnimationDefault from "ShineAnimation" /* 9723 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1072).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let createStyles = fn(5310);
let obj2 = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerBackground: null, headerImage: null, body: null, logoPlusPremiumGuild: null, description: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 100;
obj2.headerBackground = obj3;
obj2.headerImage = { position: "absolute", left: "50%" };
obj2.body = { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" };
obj2.logoPlusPremiumGuild = { marginTop: 3, width: 101, height: 19 };
obj2.description = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(6959).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(5310);
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
createStyles = fn(5310);
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
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

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
    let tmp4Result15 = _modDef9702;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = _modDef9703;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = _modDef9704;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = _modDef9705;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = _modDef9706;
  }
  items = [hasOwnProperty(FastImageDefault, { source: tmp4Result15, style: tmp.headerBackground }), , , ];
  const obj8 = { source: tmp4Result15, style: tmp.headerBackground };
  const tmp4Result14 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result17 = _modDef9710;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result17 = _modDef9711;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result17 = _modDef9712;
        }
      }
    }
    tmp4Result17 = _modDef9328;
  }
  items[1] = hasOwnProperty(FastImageDefault, { source: tmp4Result17, style: tmp9.logo });
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: _modDef9722, style: tmp.logoPlusPremiumGuild };
    tmp15Result = hasOwnProperty(FastImageDefault, obj10);
    const tmp4Result18 = FastImageDefault;
  }
  items[2] = tmp15Result;
  const obj9 = { source: tmp4Result17, style: tmp9.logo };
  const tmp4Result16 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result20 = _modDef9619;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result20 = _modDef9620;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result20 = _modDef9707;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result20 = _modDef9708;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result20 = _modDef9709;
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
      let tmp4Result22 = _modDef9713;
    } else {
      tmp4Result22 = _modDef9714;
    }
    tmp7Result = shared;
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      if (tmp7Result5.isThemeDark(tmp6)) {
        let tmp4Result23 = _modDef9715;
      } else {
        tmp4Result23 = _modDef9716;
      }
      let tmp4Result26 = tmp4Result23;
      tmp7Result5 = shared;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result6.isThemeDark(tmp6)) {
        let tmp4Result24 = _modDef9717;
      } else {
        tmp4Result24 = _modDef9718;
      }
      tmp4Result26 = tmp4Result24;
      tmp7Result6 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result7.isThemeDark(tmp6)) {
        let tmp4Result25 = _modDef9719;
      } else {
        tmp4Result25 = _modDef9720;
      }
      tmp4Result26 = tmp4Result25;
      tmp7Result7 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result26 = _modDef9721;
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
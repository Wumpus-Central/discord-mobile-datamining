// discord_app/modules/premium/native/PremiumActivatedAlert.tsx
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import _modDef9105 from "../../../../_runtime/metro/09105__.js";
import _modDef9106 from "../../../../_runtime/metro/09106__.js";
import _modDef9192 from "../../../../_runtime/metro/09192__.js";
import _modDef9193 from "../../../../_runtime/metro/09193__.js";
import _modDef9194 from "../../../../_runtime/metro/09194__.js";
import _modDef9195 from "../../../../_runtime/metro/09195__.js";
import _modDef9196 from "../../../../_runtime/metro/09196__.js";
import _modDef9197 from "../../../../_runtime/metro/09197__.js";
import _modDef9198 from "../../../../_runtime/metro/09198__.js";
import _modDef9199 from "../../../../_runtime/metro/09199__.js";
import _modDef9200 from "../../../../_runtime/metro/09200__.js";
import _modDef9201 from "../../../../_runtime/metro/09201__.js";
import _modDef9202 from "../../../../_runtime/metro/09202__.js";
import _modDef9203 from "../../../../_runtime/metro/09203__.js";
import _modDef9204 from "../../../../_runtime/metro/09204__.js";
import _modDef9205 from "../../../../_runtime/metro/09205__.js";
import _modDef9206 from "../../../../_runtime/metro/09206__.js";
import _modDef9207 from "../../../../_runtime/metro/09207__.js";
import _modDef9208 from "../../../../_runtime/metro/09208__.js";
import _modDef9209 from "../../../../_runtime/metro/09209__.js";
import _modDef9210 from "../../../../_runtime/metro/09210__.js";
import _modDef9211 from "../../../../_runtime/metro/09211__.js";
import _modDef9212 from "../../../../_runtime/metro/09212__.js";
import _modDef9213 from "../../../../_runtime/metro/09213__.js";
import ShineAnimationDefault from "ShineAnimation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1071).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let createStyles = fn(5012);
let obj2 = {
  alert: { overflow: "hidden", paddingBottom: 24 },
  header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" },
  headerBackground: null,
  headerImage: null,
  body: null,
  logoPlusPremiumGuild: null,
  description: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 100;
obj2.headerBackground = obj3;
obj2.headerImage = { position: "absolute", left: "50%" };
obj2.body = { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" };
obj2.logoPlusPremiumGuild = { marginTop: 3, width: 101, height: 19 };
obj2.description = {
  fontSize: 14,
  lineHeight: 16,
  textAlign: "center",
  marginTop: 20,
  color: fn(6837).DARK_PRIMARY_300_LIGHT_PRIMARY_400,
};
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(5012);
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
createStyles = fn(5012);
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
    let tmp4Result15 = _modDef9192;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = _modDef9193;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = _modDef9194;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = _modDef9195;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = _modDef9196;
  }
  items = [hasOwnProperty(FastImageDefault, { source: tmp4Result15, style: tmp.headerBackground }), , ,];
  const obj8 = { source: tmp4Result15, style: tmp.headerBackground };
  const tmp4Result14 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result17 = _modDef9200;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result17 = _modDef9201;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result17 = _modDef9203;
        }
      }
    }
    tmp4Result17 = _modDef9202;
  }
  items[1] = hasOwnProperty(FastImageDefault, { source: tmp4Result17, style: tmp9.logo });
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: _modDef9213, style: tmp.logoPlusPremiumGuild };
    tmp15Result = hasOwnProperty(FastImageDefault, obj10);
    const tmp4Result18 = FastImageDefault;
  }
  items[2] = tmp15Result;
  const obj9 = { source: tmp4Result17, style: tmp9.logo };
  const tmp4Result16 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result20 = _modDef9105;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result20 = _modDef9106;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result20 = _modDef9197;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result20 = _modDef9198;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result20 = _modDef9199;
  }
  const obj11 = { source: tmp4Result20, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj11.style = items1;
  items[3] = hasOwnProperty(FastImageDefault, obj11);
  obj7.children = items;
  const items2 = [timestampProducer(React3, obj7)];
  const obj12 = { style: tmp.body, children: null };
  const tmp4Result19 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result22 = _modDef9204;
    } else {
      tmp4Result22 = _modDef9205;
    }
    tmp7Result = shared;
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      if (tmp7Result5.isThemeDark(tmp6)) {
        let tmp4Result23 = _modDef9206;
      } else {
        tmp4Result23 = _modDef9207;
      }
      let tmp4Result26 = tmp4Result23;
      tmp7Result5 = shared;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result6.isThemeDark(tmp6)) {
        let tmp4Result24 = _modDef9208;
      } else {
        tmp4Result24 = _modDef9209;
      }
      tmp4Result26 = tmp4Result24;
      tmp7Result6 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result7.isThemeDark(tmp6)) {
        let tmp4Result25 = _modDef9210;
      } else {
        tmp4Result25 = _modDef9211;
      }
      tmp4Result26 = tmp4Result25;
      tmp7Result7 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result26 = _modDef9212;
    }
    const obj13 = { source: tmp4Result26, style: tmp11.animation };
    const items3 = [hasOwnProperty(tmp4Result21, obj13)];
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
}

// discord_app/components_native/premium/PremiumActivatedAlert.tsx
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import shared from "../../design/shared.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import common_AlertDefault from "../common/Alert.tsx";
import _modDef8176 from "../../../_runtime/metro/08176__.js";
import _modDef9517 from "../../../_runtime/metro/09517__.js";
import _modDef10843 from "../../../_runtime/metro/10843__.js";
import _modDef10844 from "../../../_runtime/metro/10844__.js";
import _modDef10845 from "../../../_runtime/metro/10845__.js";
import _modDef10846 from "../../../_runtime/metro/10846__.js";
import _modDef10847 from "../../../_runtime/metro/10847__.js";
import _modDef10848 from "../../../_runtime/metro/10848__.js";
import _modDef10849 from "../../../_runtime/metro/10849__.js";
import _modDef10850 from "../../../_runtime/metro/10850__.js";
import _modDef10851 from "../../../_runtime/metro/10851__.js";
import _modDef10852 from "../../../_runtime/metro/10852__.js";
import _modDef10853 from "../../../_runtime/metro/10853__.js";
import _modDef10854 from "../../../_runtime/metro/10854__.js";
import _modDef10855 from "../../../_runtime/metro/10855__.js";
import _modDef10856 from "../../../_runtime/metro/10856__.js";
import _modDef10857 from "../../../_runtime/metro/10857__.js";
import _modDef10858 from "../../../_runtime/metro/10858__.js";
import _modDef10859 from "../../../_runtime/metro/10859__.js";
import _modDef10860 from "../../../_runtime/metro/10860__.js";
import _modDef10861 from "../../../_runtime/metro/10861__.js";
import _modDef10862 from "../../../_runtime/metro/10862__.js";
import _modDef10863 from "../../../_runtime/metro/10863__.js";
import _modDef10864 from "../../../_runtime/metro/10864__.js";
import ShineAnimationDefault from "ShineAnimation.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4639);
let obj2 = {
  alert: { overflow: "hidden", paddingBottom: 24 },
  header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" },
  headerImage: { position: "absolute", left: "50%" },
  body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" },
  logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 },
  description: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 20,
    color: fn(5526).DARK_PRIMARY_300_LIGHT_PRIMARY_400,
  },
};
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4639);
let closure_10 = createStyles.createStyles((arg0) => {
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
createStyles = fn(4639);
let closure_11 = createStyles.createStyles((arg0) => {
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
  const tmp10 = closure_10(premiumBranding);
  const obj6 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  const tmp11 = closure_11(premiumBranding);
  const intl = util.intl;
  obj6.confirmText = intl.string(util.t.TkTvBz);
  obj6.style = tmp.alert;
  const obj7 = { style: tmp.header, source: null, children: null };
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result10 = _modDef10843;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result10 = _modDef10844;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result10 = _modDef10845;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result10 = _modDef10846;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result10 = _modDef10847;
  }
  obj7.source = tmp4Result10;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result11 = _modDef10852;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result11 = _modDef10853;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result11 = _modDef10854;
        }
      }
    }
    tmp4Result11 = _modDef8176;
  }
  const items = [React5(React3, { source: tmp4Result11, style: tmp9.logo }), ,];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj9 = { source: _modDef10864, style: tmp.logoPlusPremiumGuild };
    tmp16Result = React5(React3, obj9);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result12 = _modDef9517;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result12 = _modDef10848;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result12 = _modDef10849;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result12 = _modDef10850;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result12 = _modDef10851;
  }
  const obj10 = { source: tmp4Result12, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj10.style = items1;
  items[2] = React5(React3, obj10);
  obj7.children = items;
  const items2 = [React6(React4, obj7)];
  const obj11 = { style: tmp.body, children: null };
  const obj8 = { source: tmp4Result11, style: tmp9.logo };
  const tmp4Result = common_AlertDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result14 = _modDef10855;
    } else {
      tmp4Result14 = _modDef10856;
    }
    tmp7Result = shared;
  } else {
    if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
      if (tmp7Result5.isThemeDark(tmp6)) {
        let tmp4Result15 = _modDef10857;
      } else {
        tmp4Result15 = _modDef10858;
      }
      let tmp4Result18 = tmp4Result15;
      tmp7Result5 = shared;
    } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
      if (tmp7Result6.isThemeDark(tmp6)) {
        let tmp4Result16 = _modDef10859;
      } else {
        tmp4Result16 = _modDef10860;
      }
      tmp4Result18 = tmp4Result16;
      tmp7Result6 = shared;
    } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
      if (tmp7Result7.isThemeDark(tmp6)) {
        let tmp4Result17 = _modDef10861;
      } else {
        tmp4Result17 = _modDef10862;
      }
      tmp4Result18 = tmp4Result17;
      tmp7Result7 = shared;
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result18 = _modDef10863;
    }
    const obj12 = { source: tmp4Result18, style: tmp11.animation };
    const items3 = [React5(tmp4Result13, obj12)];
    const obj13 = { style: tmp.description, children: null };
    if (PremiumUtils.Branding.TIER_0 !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_1 !== premiumBranding) {
        if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
          const intl3 = util.intl;
          let stringResult = intl3.string(util.t.aTUr3Z);
        } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
          const intl2 = util.intl;
          const obj14 = { planName: null };
          ({ planId: obj20.planId, additionalPlans: obj20.additionalPlans } = renewalMutations);
          obj14.planName = PremiumUtils.getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(util.t.YJUUH3, obj14);
          const obj15 = { planId: null, additionalPlans: null };
          const tmp7Result8 = PremiumUtils;
        }
      }
      obj13.children = stringResult;
      items3[1] = React5(native.LegacyText, obj13);
      obj11.children = items3;
      items2[1] = React6(hasOwnProperty, obj11);
      obj6.children = items2;
      return React6(tmp4Result, obj6);
    }
    const intl4 = util.intl;
    stringResult = intl4.string(util.t.knvOVz);
  }
  tmp4Result13 = ShineAnimationDefault;
}

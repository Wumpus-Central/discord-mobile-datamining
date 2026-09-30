// discord_app/modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import UserProfileUpsellCardV2Default from "UserProfileUpsellCardV2.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4866);
let obj2 = {
  container: { marginTop: nativeDefault.space.PX_16 },
  divider: null,
  dividerLine: null,
  lockCircle: null,
  lockIcon: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.divider = {
  height: 28,
  marginVertical: nativeDefault.space.PX_24,
  marginHorizontal: -nativeDefault.space.PX_16,
  justifyContent: "center",
  alignItems: "center",
};
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 13.5,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_NORMAL,
};
obj2.dividerLine = rect;
let size = {
  width: 28,
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.lockCircle = size;
obj2.lockIcon = { marginTop: -2 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx");

export default function UserProfilePremiumTryItOutSection(arg0) {
  ({ onLayout, onPreviewPremium } = arg0);
  const tmp = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM,
  ).analyticsLocations;
  const items = [analyticsLocations];
  const callback = noop.useCallback(() => {
    const obj = {
      analyticsLocations,
      premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
    };
    openPremiumModalDefault(obj);
  }, items);
  let obj = {
    style: tmp.container,
    text: null,
    textAlign: "center",
    buttonText: null,
    onButtonPress: null,
    onLayout: null,
    children: null,
  };
  const intl = analyticsLocations(1115).intl;
  obj.text = intl.format(analyticsLocations(1115).t.TmfgI2, { onClick: callback });
  const intl2 = analyticsLocations(1115).intl;
  obj.buttonText = intl2.string(analyticsLocations(1115).t.PxUx8e);
  obj.onButtonPress = onPreviewPremium;
  obj.onLayout = onLayout;
  const obj2 = { style: tmp.divider, children: null };
  const items1 = [closure_5(View, { style: tmp.dividerLine })];
  const obj4 = { style: tmp.lockCircle, children: null };
  const obj3 = { style: tmp.dividerLine };
  const tmp4 = UserProfileUpsellCardV2Default;
  obj4.children = closure_5(analyticsLocations(5605).LockIcon, {
    size: "xs",
    color: nativeDefault.colors.ICON_MUTED,
    style: tmp.lockIcon,
  });
  items1[1] = closure_5(View, obj4);
  obj2.children = items1;
  obj.children = closure_6(View, obj2);
  return closure_5(tmp4, obj);
}

// discord_app/modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _mod7795 from "../../../../../_runtime/metro/07795__.js";
import PremiumFeaturesCards from "../../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import SuperReactionLocalImageAnimationDefault from "SuperReactionLocalImageAnimation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const AnalyticsPages = fn(1074).AnalyticsPages;
const jsx = fn(21).jsx;
const dismissibleContent = fn(1943).DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [fn(11137), fn(11138), fn(11139), fn(11140), fn(11138), fn(11141), fn(11142), fn(11143)];
fn(4560);
let createStyles = { fill: null, nitroIcon: null, description: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flex = 1;
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
createStyles.top = -150;
createStyles.fill = createStyles;
let size = { tintColor: nativeDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
createStyles.nitroIcon = size;
createStyles.description = { paddingHorizontal: 16 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default function SuperReactionCoachmarkActionSheet(onDismiss) {
  let analyticsLocations;
  let backdropProps;
  const tmp = closure_10();
  _require = tmp;
  analyticsLocations = analyticsLocations(backdropProps[15])().analyticsLocations;
  backdropProps = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("initialize");
  const tmp2 = analyticsLocations;
  [][0] = tmp;
  const obj3 = require("PremiumUtils");
  let tmp8 = null;
  if (!isPremiumResult) {
    backdropProps = {
      title: null,
      backdropProps: null,
      description: null,
      descriptionStyle: null,
      dismissibleContent: null,
      primaryButtonText: null,
      primaryButtonIcon: null,
      onPrimaryButtonPress: null,
      secondaryButtonText: null,
      onDismiss: null,
    };
    const intl = tmp4(tmp3[24]).intl;
    backdropProps.title = intl.string(tmp4(tmp3[24]).t.Wfl5zp);
    backdropProps = { backdropOpacity: tmp4(tmp3[25]).BACKDROP_OPACITY, backdropChildren: tmp7 };
    backdropProps.backdropProps = backdropProps;
    const intl2 = tmp4(tmp3[24]).intl;
    backdropProps.description = intl2.string(tmp4(tmp3[24]).t.eikz43);
    backdropProps.descriptionStyle = tmp.description;
    backdropProps.dismissibleContent = dismissibleContent;
    const intl3 = tmp4(tmp3[24]).intl;
    backdropProps.primaryButtonText = intl3.string(tmp4(tmp3[24]).t.sEAnVH);
    backdropProps.primaryButtonIcon = function primaryButtonIcon() {
      return jsx(native.NitroWheel, { style: closure_0.nitroIcon });
    };
    backdropProps.onPrimaryButtonPress = function onPrimaryButtonPress() {
      let analyticsLocation = ActionSheetActionCreatorsDefault;
      analyticsLocation.hideActionSheet();
      analyticsLocation = {
        analyticsLocation,
        analyticsLocations,
        premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
      };
      openPremiumModalDefault(analyticsLocation);
    };
    const intl4 = tmp4(tmp3[24]).intl;
    backdropProps.secondaryButtonText = intl4.string(tmp4(tmp3[24]).t.TulDPl);
    backdropProps.onDismiss = onDismiss.onDismiss;
    tmp8 = jsx(tmp2(tmp3[23]), { backdropOpacity: tmp4(tmp3[25]).BACKDROP_OPACITY, backdropChildren: tmp7 });
    const tmp2Result = tmp2(tmp3[23]);
  }
  return tmp8;
}

// === Module 10598: SuperReactionUpsellActionSheet ===

// Module 10598 (SuperReactionUpsellActionSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import _mod7214 from "module_7214" /* 7214 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import SuperReactionLocalImageAnimationDefault from "SuperReactionLocalImageAnimation" /* 10606 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const AnalyticsPages = fn(1074).AnalyticsPages;
const jsx = fn(21).jsx;
const dismissibleContent = fn(2029).DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [fn(10599), fn(10600), fn(10601), fn(10602), fn(10600), fn(10603), fn(10604), fn(10605)];
const createStyles = fn(4836);
let obj2 = { fill: null, nitroIcon: null, description: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flex = 1;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.top = -150;
obj2.fill = obj3;
let size = { tintColor: nativeDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
obj2.nitroIcon = size;
obj2.description = { paddingHorizontal: 16 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default function SuperReactionCoachmarkActionSheet(onDismiss) {
  let analyticsLocations;
  let analyticsLocation;
  const tmp = closure_10();
  _require = tmp;
  analyticsLocations = analyticsLocations(analyticsLocation[15])().analyticsLocations;
  analyticsLocation = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = require("initialize");
  const tmp2 = analyticsLocations;
  [][0] = tmp;
  let obj3 = require("PremiumUtils");
  let tmp8 = null;
  if (!isPremiumResult) {
    const obj4 = { title: null, backdropProps: null, description: null, descriptionStyle: null, dismissibleContent: null, primaryButtonText: null, primaryButtonIcon: null, onPrimaryButtonPress: null, secondaryButtonText: null, onDismiss: null };
    const intl = tmp4(tmp3[24]).intl;
    obj4.title = intl.string(tmp4(tmp3[24]).t.Wfl5zp);
    const obj5 = { backdropOpacity: tmp4(tmp3[25]).BACKDROP_OPACITY, backdropChildren: tmp7 };
    obj4.backdropProps = obj5;
    const intl2 = tmp4(tmp3[24]).intl;
    obj4.description = intl2.string(tmp4(tmp3[24]).t.eikz43);
    obj4.descriptionStyle = tmp.description;
    obj4.dismissibleContent = dismissibleContent;
    const intl3 = tmp4(tmp3[24]).intl;
    obj4.primaryButtonText = intl3.string(tmp4(tmp3[24]).t.sEAnVH);
    obj4.primaryButtonIcon = function primaryButtonIcon() {
      return jsx(native.NitroWheel, { style: closure_0.nitroIcon });
    };
    obj4.onPrimaryButtonPress = function onPrimaryButtonPress() {
      analyticsLocation = ActionSheetActionCreatorsDefault;
      analyticsLocation.hideActionSheet();
      const obj2 = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      openPremiumModalDefault(obj2);
    };
    const intl4 = tmp4(tmp3[24]).intl;
    obj4.secondaryButtonText = intl4.string(tmp4(tmp3[24]).t.TulDPl);
    obj4.onDismiss = onDismiss.onDismiss;
    tmp8 = jsx(tmp2(tmp3[23]), { title: null, backdropProps: null, description: null, descriptionStyle: null, dismissibleContent: null, primaryButtonText: null, primaryButtonIcon: null, onPrimaryButtonPress: null, secondaryButtonText: null, onDismiss: null });
    const tmp2Result = tmp2(tmp3[23]);
  }
  return tmp8;
};
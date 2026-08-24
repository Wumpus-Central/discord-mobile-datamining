// discord_app/modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/UserStore.tsx";
import { AnalyticsPages } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
let closure_8 = require("DismissibleContent").DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
createCacheKey = { fill: null, nitroIcon: null, description: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flex = 1;
createCacheKey.alignItems = "center";
createCacheKey.justifyContent = "center";
createCacheKey.top = -150;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
createCacheKey[2] = { paddingHorizontal: 16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj1 = { tintColor: ThemesDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
const result = require("set").fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default function SuperReactionCoachmarkActionSheet(onDismiss) {
  let _require;
  let analyticsLocations;
  let obj;
  const tmp = callback();
  _require = tmp;
  analyticsLocations = analyticsLocations(obj[15])().analyticsLocations;
  obj = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  items = [closure_5];
  const stateFromStores = _require(obj[16]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = _require(obj[16]);
  const tmp2 = analyticsLocations;
  [][0] = tmp;
  const obj3 = _require(obj[17]);
  let tmp8 = null;
  if (!isPremiumResult) {
    obj = { title: null, backdropProps: null, description: null, descriptionStyle: null, dismissibleContent: null, primaryButtonText: null, primaryButtonIcon: null, onPrimaryButtonPress: null, secondaryButtonText: null, onDismiss: null };
    const intl = tmp4(tmp3[24]).intl;
    obj[0] = intl.string(tmp4(tmp3[24]).t.Wfl5zp);
    obj = { backdropOpacity: null, backdropChildren: null };
    obj[0] = tmp4(tmp3[25]).BACKDROP_OPACITY;
    obj[1] = tmp7;
    obj[1] = obj;
    const intl2 = tmp4(tmp3[24]).intl;
    obj[2] = intl2.string(tmp4(tmp3[24]).t.eikz43);
    obj[3] = tmp.description;
    obj[4] = closure_8;
    const intl3 = tmp4(tmp3[24]).intl;
    obj[5] = intl3.string(tmp4(tmp3[24]).t.sEAnVH);
    obj[6] = function primaryButtonIcon() {
      obj = { style: lib.nitroIcon };
      return closure_1_7(lib(obj[26]).NitroWheel, obj);
    };
    obj[7] = function onPrimaryButtonPress() {
      obj = analyticsLocations(obj[27]);
      obj.hideActionSheet();
      obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: lib(obj[19]).PremiumFeatureCardOrder.TIER_2_LEADING };
      analyticsLocations(obj[18])(obj);
    };
    const intl4 = tmp4(tmp3[24]).intl;
    obj[8] = intl4.string(tmp4(tmp3[24]).t.TulDPl);
    obj[9] = onDismiss.onDismiss;
    tmp8 = jsx(tmp2(tmp3[23]), { backdropOpacity: null, backdropChildren: null });
    const tmp2Result = tmp2(tmp3[23]);
  }
  return tmp8;
};
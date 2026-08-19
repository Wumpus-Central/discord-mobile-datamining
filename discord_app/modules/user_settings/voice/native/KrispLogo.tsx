// discord_app/modules/user_settings/voice/native/KrispLogo.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../../design/shared.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import _modDef4090 from "../../../../lib/native/Linking.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../_runtime/12562_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/12563_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import handleThemeChange from "../../ThemeStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function handleKrispLinkPressed() {
  let obj = combinedDefault;
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  obj = { text: null, href: null, location: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.hvVgAZ);
  obj[1] = articleURL;
  obj = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  obj[2] = obj;
  expandEventPropertiesDefault.track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj);
  _modDef4090.openURL(articleURL);
}
noopAll;
({ Image: c3, View: c4, Pressable: c5 } = get_ActivityIndicator);
({ AnalyticEvents: error, AnalyticsPages: closure_8, AnalyticsSections: c9, HelpdeskArticles: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const result = require("obj132").fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj1 = AccessibilityAnnouncer;
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp4Result = registerAssetDefault;
  } else {
    tmp4Result = registerAssetDefault2;
  }
  obj = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.vFiCSx);
  const items1 = [callback(closure_3, obj), ];
  obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.hvVgAZ);
  obj1[2] = handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = getSystemLocale.intl;
  obj2[2] = intl3.string(getSystemLocale.t.hvVgAZ);
  obj1[3] = callback(Text.Text, obj2);
  items1[1] = callback(closure_5, obj1);
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export { handleKrispLinkPressed };
// === Module 9997: handleKrispLinkPressed ===

// Module 9997 (handleKrispLinkPressed)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import combinedDefault from "combined" /* 2024 */;
import _modDef4255 from "module_4255" /* 4255 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import Text from "Text" /* 4556 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleThemeChange" /* 1183 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
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
  const obj2 = expandEventPropertiesDefault;
  _modDef4255.openURL(articleURL);
}
noopAll;
({ Image: c3, View: c4, Pressable: c5 } = get_ActivityIndicator);
({ AnalyticEvents: error, AnalyticsPages: closure_8, AnalyticsSections: c9, HelpdeskArticles: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj1 = AccessibilityAnnouncer;
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp4Result = tmp4(9998);
  } else {
    tmp4Result = tmp4(9999);
  }
  obj = { style: closure_13.detailsView, children: null };
  obj = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
  const intl = tmp(1114).intl;
  obj[2] = intl.string(getSystemLocale.t.vFiCSx);
  const items1 = [callback(closure_3, obj), ];
  obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = tmp(1114).intl;
  obj1[1] = intl2.string(getSystemLocale.t.hvVgAZ);
  obj1[2] = handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = tmp(1114).intl;
  obj2[2] = intl3.string(getSystemLocale.t.hvVgAZ);
  obj1[3] = callback(Text.Text, obj2);
  items1[1] = callback(closure_5, obj1);
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export { handleKrispLinkPressed };
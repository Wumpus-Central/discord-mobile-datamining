// === Module 10147: KrispLogo ===

// Module 10147 (KrispLogo)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import LinkingDefault from "Linking" /* 4334 */;
import Text_Text from "Text/Text" /* 4636 */;
import _modDef10148 from "module_10148" /* 10148 */;
import _modDef10149 from "module_10149" /* 10149 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
function handleKrispLinkPressed() {
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants4.NOISE_SUPPRESSION);
  const obj3 = { text: null, href: null, location: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t.hvVgAZ);
  obj3.href = articleURL;
  obj3.location = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  AnalyticsUtilsDefault.track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj3);
  const obj4 = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  LinkingDefault.openURL(articleURL);
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9, HelpdeskArticles: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  if (obj2.isThemeLight(stateFromStores)) {
    let tmp4Result = _modDef10148;
  } else {
    tmp4Result = _modDef10149;
  }
  const obj3 = { style: closure_13.detailsView, children: null };
  const obj4 = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(util.t.vFiCSx);
  const items1 = [closure_1_11(React3, obj4), ];
  const obj5 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = util.intl;
  obj5.accessibilityLabel = intl2.string(util.t.hvVgAZ);
  obj5.onPress = handleKrispLinkPressed;
  const obj6 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(util.t.hvVgAZ);
  obj5.children = closure_1_11(Text_Text.Text, obj6);
  items1[1] = closure_1_11(hasOwnProperty, obj5);
  obj3.children = items1;
  return closure_1_12(React4, obj3);
};
export { handleKrispLinkPressed };
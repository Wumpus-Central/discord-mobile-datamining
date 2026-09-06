// === Module 9997: KrispLogo ===

// Module 9997 (KrispLogo)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4255 */;
import shared from "shared" /* 4411 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef9998 from "module_9998" /* 9998 */;
import _modDef9999 from "module_9999" /* 9999 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
function handleKrispLinkPressed() {
  let obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  obj = { text: null, href: null, location: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.hvVgAZ);
  obj.href = articleURL;
  obj = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  obj.location = obj;
  AnalyticsUtilsDefault.track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj);
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
  let obj = initialize;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  let obj1 = shared;
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp4Result = _modDef9998;
  } else {
    tmp4Result = _modDef9999;
  }
  obj = { style: closure_13.detailsView, children: null };
  obj = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.vFiCSx);
  const items1 = [closure_1_11(React3, obj), ];
  obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = util.intl;
  obj1.accessibilityLabel = intl2.string(util.t.hvVgAZ);
  obj1.onPress = handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = util.intl;
  obj2.children = intl3.string(util.t.hvVgAZ);
  obj1.children = closure_1_11(Text_Text.Text, obj2);
  items1[1] = closure_1_11(hasOwnProperty, obj1);
  obj.children = items1;
  return closure_1_12(React4, obj);
};
export { handleKrispLinkPressed };
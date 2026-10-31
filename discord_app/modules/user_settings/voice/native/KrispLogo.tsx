// === Module 11959: KrispLogo ===

// Module 11959 (KrispLogo)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import shared from "shared" /* 5021 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import _modDef11960 from "module_11960" /* 11960 */;
import _modDef11961 from "module_11961" /* 11961 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;

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
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: metroRequire, AnalyticsPages: closure_7, AnalyticsSections: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  if (obj2.isThemeLight(stateFromStores)) {
    let tmp4Result = _modDef11960;
    let tmp6 = importDefault;
  } else {
    tmp4Result = _modDef11961;
    tmp6 = importDefault;
  }
  const obj3 = { style: closure_12.detailsView, children: null };
  const obj4 = { style: closure_12.logo, source: tmp4Result, accessibilityLabel: null };
  obj2 = shared;
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(util.t.vFiCSx);
  const items1 = [closure_1_10(tmp6(5717), obj4), ];
  const obj5 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = util.intl;
  obj5.accessibilityLabel = intl2.string(util.t.hvVgAZ);
  obj5.onPress = handleKrispLinkPressed;
  const obj6 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(util.t.hvVgAZ);
  obj5.children = closure_1_10(Text_Text.Text, obj6);
  items1[1] = closure_1_10(React4, obj5);
  obj3.children = items1;
  return closure_1_11(React3, obj3);
};
export { handleKrispLinkPressed };
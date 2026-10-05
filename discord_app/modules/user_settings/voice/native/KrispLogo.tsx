// === Module 9677: KrispLogo ===

// Module 9677 (KrispLogo)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import LinkingDefault from "Linking" /* 4565 */;
import shared from "shared" /* 4729 */;
import Text_Text from "Text/Text" /* 4886 */;
import AssetRegistryDefault from "AssetRegistry" /* 9678 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9679 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function handleKrispLinkPressed() {
  let intl;
  let obj3;
  const obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  const obj2 = { text: intl.string(intl4.t.hvVgAZ), href: articleURL, location: obj3 };
  const track = AnalyticsUtilsDefault.track;
  const NOISE_CANCELLATION_LINK_CLICKED = metroImportDefault.NOISE_CANCELLATION_LINK_CLICKED;
  AnalyticsUtilsDefault;
  intl = intl4.intl;
  obj3 = { page: metroImportAll.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  track(NOISE_CANCELLATION_LINK_CLICKED, obj2);
  const obj4 = LinkingDefault;
  obj4.openURL(articleURL);
}
({ Image: c3, View: closure_4, Pressable: hasOwnProperty } = react_native);
({ AnalyticEvents: metroImportDefault, AnalyticsPages: metroImportAll, AnalyticsSections: c9, HelpdeskArticles: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Text;
  let intl3;
  let items1;
  let obj4;
  let theme;
  let tmp10;
  let tmp12;
  let tmp17;
  let tmp19;
  let tmp24;
  let tmp4;
  let tmp5;
  let tmp8Result;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function o() {
      return theme.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult2 = shared;
  if (tmpResult2.isThemeLight(stateFromStores)) {
    tmp8Result = AssetRegistryDefault;
  } else {
    tmp8Result = AssetRegistryDefault2;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.vFiCSx);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp8Result) {
    const obj2 = { style: closure_13.logo, source: tmp8Result, accessibilityLabel: tmp10 };
    const tmp16 = unpackModuleId(_false, obj2);
    cResult[3] = tmp8Result;
    cResult[4] = tmp16;
    tmp12 = tmp16;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.hvVgAZ);
    cResult[5] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { accessibilityRole: "link", accessibilityLabel: tmp17, onPress: handleKrispLinkPressed, children: unpackModuleId(Text, obj4) };
    obj4 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl4.t.hvVgAZ) };
    Text = Text_Text.Text;
    intl3 = intl4.intl;
    const tmp23 = unpackModuleId(hasOwnProperty, obj3);
    cResult[6] = tmp23;
    tmp19 = tmp23;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== tmp12) {
    const obj5 = { style: closure_13.detailsView, children: items1 };
    items1 = [tmp12, tmp19];
    const tmp28 = closure_12(React3, obj5);
    cResult[7] = tmp12;
    cResult[8] = tmp28;
    tmp24 = tmp28;
  } else {
    tmp24 = cResult[8];
  }
  return tmp24;
}) : (() => {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj6;
  let theme;
  let tmp4Result;
  const items = [ThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj2 = shared;
  if (obj2.isThemeLight(stateFromStores)) {
    tmp4Result = AssetRegistryDefault;
  } else {
    tmp4Result = AssetRegistryDefault2;
  }
  const obj3 = { style: closure_13.detailsView, children: items1 };
  const obj4 = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: intl.string(intl4.t.vFiCSx) };
  intl = intl4.intl;
  items1 = [unpackModuleId(_false, obj4), ];
  const obj5 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl4.t.hvVgAZ), onPress: handleKrispLinkPressed, children: unpackModuleId(Text, obj6) };
  intl2 = intl4.intl;
  obj6 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl4.t.hvVgAZ) };
  Text = Text_Text.Text;
  intl3 = intl4.intl;
  items1[1] = unpackModuleId(hasOwnProperty, obj5);
  return closure_12(React3, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default tmp6;
export { handleKrispLinkPressed };
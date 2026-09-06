// discord_app/modules/user_settings/voice/native/KrispLogo.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import shared from "../../../../design/shared.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../ThemeStore.tsx";

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
({
  AnalyticEvents: closure_7,
  AnalyticsPages: closure_8,
  AnalyticsSections: closure_9,
  HelpdeskArticles: c10,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = {
  logo: { marginLeft: 20, height: 30, width: 67 },
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    gap: 12,
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let obj = initialize;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  let obj1 = shared;
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp4Result = tmp4(9998);
  } else {
    tmp4Result = tmp4(9999);
  }
  obj = { style: closure_13.detailsView, children: null };
  obj = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
  const intl = tmp(1114).intl;
  obj.accessibilityLabel = intl.string(util.t.vFiCSx);
  const items1 = [closure_1_11(React3, obj)];
  obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = tmp(1114).intl;
  obj1.accessibilityLabel = intl2.string(util.t.hvVgAZ);
  obj1.onPress = handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = tmp(1114).intl;
  obj2.children = intl3.string(util.t.hvVgAZ);
  obj1.children = closure_1_11(Text_Text.Text, obj2);
  items1[1] = closure_1_11(hasOwnProperty, obj1);
  obj.children = items1;
  return closure_1_12(React4, obj);
}
export { handleKrispLinkPressed };

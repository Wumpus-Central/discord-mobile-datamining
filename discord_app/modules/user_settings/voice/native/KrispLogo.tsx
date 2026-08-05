// discord_app/modules/user_settings/voice/native/KrispLogo.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import handleThemeChange from "handleThemeChange";
import ME from "ME";
import jsxProd from "jsxProd";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { AccessibilityAnnouncer } from "../../../../design/shared.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { Linking } from "../../../../lib/native/Linking.tsx";
import { expandEventProperties } from "../../../../utils/AnalyticsUtils.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";

let c10;
let c3;
let c4;
let c5;
let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function handleKrispLinkPressed() {
  let obj = combined;
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  obj = { text: null, href: null, location: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.hvVgAZ);
  obj[1] = articleURL;
  obj = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  obj[2] = obj;
  expandEventProperties.track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj);
  const obj2 = expandEventProperties;
  Linking.openURL(articleURL);
}
({ Image: c3, View: c4, Pressable: c5 } = get_ActivityIndicator);
({ AnalyticEvents: error, AnalyticsPages: metroImportAll, AnalyticsSections: c9, HelpdeskArticles: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const result = require("handleThemeChange").fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let obj = initialize /* initialize */;
  const items = [handleThemeChange];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  let obj1 = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp4Result = tmp4(10759);
  } else {
    tmp4Result = tmp4(10760);
  }
  obj = { style: closure_13.detailsView, children: null };
  obj = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
  const intl = tmp(1236).intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t.vFiCSx);
  const items1 = [callback(closure_3, obj), ];
  obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = tmp(1236).intl;
  obj1[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.hvVgAZ);
  obj1[2] = handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = tmp(1236).intl;
  obj2[2] = intl3.string(getSystemLocale /* getSystemLocale */.t.hvVgAZ);
  obj1[3] = callback(Text /* Text */.Text, obj2);
  items1[1] = callback(closure_5, obj1);
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export { handleKrispLinkPressed };
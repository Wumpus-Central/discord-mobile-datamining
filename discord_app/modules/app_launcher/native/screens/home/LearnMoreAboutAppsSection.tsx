// === Module 11890: LearnMoreAboutAppsSection ===

// Module 11890 (LearnMoreAboutAppsSection)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5076 */;
import AppLauncherEntrypoint from "AppLauncherEntrypoint" /* 8444 */;
import TrackSectionHeaderDefault from "TrackSectionHeader" /* 11891 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, body: null, divider: null, linkButton: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_32, borderRadius: ThemesDefault.radii.lg, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, paddingHorizontal: ThemesDefault.space.PX_64 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { height: ThemesDefault.space.PX_16 };
const obj1 = { height: ThemesDefault.space.PX_16 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[3] = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, paddingVertical: 12, paddingHorizontal: 16, minHeight: 48, justifyContent: "center", alignItems: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, paddingVertical: 12, paddingHorizontal: 16, minHeight: 48, justifyContent: "center", alignItems: "center" };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default function LearnMoreAboutAppsSection(visible) {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    const obj = callback(4190);
    obj.openURL(callback(1994).getAppsSupportURL(constants.APPS_LEARN_MORE));
  }, []);
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t["kw8/Ec"]);
  const intl2 = getSystemLocale.intl;
  const stringResult1 = intl2.string(getSystemLocale.t.GZoV1O);
  const intl3 = getSystemLocale.intl;
  let obj = { sectionName: null, numItems: 1, numVisibleItems: 1, viewed: null, children: null };
  const formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.xx5Sug, { sectionTitle: stringResult, sectionBody: stringResult1 });
  obj[0] = AppLauncherEntrypoint.AppLauncherSectionName.NEW_TO_APPS;
  obj[3] = visible.visible;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.divider };
  const items = [callback(View, obj), callback(Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: stringResult }), callback(Text.Text, { variant: "text-xs/normal", color: "text-default", style: tmp.body, children: stringResult1 }), callback(View, { style: tmp.divider }), , ];
  const obj3 = { style: tmp.linkButton, onPress: callback, accessibilityRole: "link", accessibilityLabel: formatToPlainStringResult, children: null };
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = getSystemLocale.intl;
  obj4[2] = intl4.string(getSystemLocale.t.Ye51oT);
  obj3[4] = callback(Text.Text, obj4);
  items[4] = callback(PressableBase.PressableHighlight, obj3);
  items[5] = callback(View, { style: tmp.divider });
  obj[1] = items;
  obj[4] = callback2(View, obj);
  return callback(TrackSectionHeaderDefault, obj);
};
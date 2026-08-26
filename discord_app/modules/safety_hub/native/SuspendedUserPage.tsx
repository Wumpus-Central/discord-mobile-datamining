// === Module 16334: SuspendedUserSafetyHubPage ===

// Module 16334 (SuspendedUserSafetyHubPage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5500 */;
import IconButton from "IconButton" /* 7963 */;
import registerAssetDefault from "registerAsset" /* 8245 */;
import AutomatedUnderageAppealStatusDefault from "AutomatedUnderageAppealStatus" /* 14277 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { SafetyHubLinks } from "SafetyHubView" /* 8017 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, header: null, text: null, link: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8, alignItems: "center" };
let obj1 = { backgroundColor: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[2] = { marginRight: ThemesDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
createCacheKey[3] = { textDecorationLine: "underline" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginRight: ThemesDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = callback3();
  let obj = { top: true, right: true, left: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
  const intl = getSystemLocale.intl;
  obj1[1] = intl.string(getSystemLocale.t.cpT0Cq);
  obj1[2] = function onPress() {
    callback(5999).closeSuspendedUser();
  };
  obj1[3] = registerAssetDefault;
  const items = [callback(IconButton.IconButton, obj1), ];
  const obj2 = {
    style: tmp.text,
    onPress() {
      callback(4158).openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
    },
    variant: "text-xs/medium",
    color: "control-critical-primary-text-default",
    children: null
  };
  const intl2 = getSystemLocale.intl;
  const items1 = [intl2.string(getSystemLocale.t["MG+Bzb"]), " ", ];
  const obj3 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
  const intl3 = getSystemLocale.intl;
  obj3[3] = intl3.string(getSystemLocale.t["9JceHN"]);
  items1[2] = callback(Text.Text, obj3);
  obj2[4] = items1;
  items[1] = callback2(Text.Text, obj2);
  obj[1] = items;
  const items2 = [callback2(View, obj), callback(AutomatedUnderageAppealStatusDefault, { visible: true })];
  obj[1] = items2;
  obj[3] = callback2(View, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};
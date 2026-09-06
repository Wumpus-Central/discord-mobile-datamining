// === Module 16907: SuspendedUserSafetyHubPage ===

// Module 16907 (SuspendedUserSafetyHubPage)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import ThemesDefault from "Themes" /* 576 */;
import registerAssetDefault from "registerAsset" /* 6992 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7123 */;
import handleLogInClickDefault from "handleLogInClick" /* 14768 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;
import SafetyHubView from "SafetyHubView" /* 8419 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ AgeCheckStatus: c5, SafetyHubLinks: closure_6 } = SafetyHubView);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, header: null, text: null, link: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8, alignItems: "center" };
let obj1 = { backgroundColor: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[2] = { marginRight: ThemesDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
createCacheKey[3] = { textDecorationLine: "underline" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginRight: ThemesDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = callback();
  let obj = initialize;
  const items = [closure_4];
  let tmp6Result = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
  obj = { style: tmp.container, children: null };
  if (tmp6Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = tmp2(1114).intl;
    obj1[1] = intl.string(tmp2(1114).t.cpT0Cq);
    obj1[2] = function onPress() {
      callback(6593).closeSuspendedUser();
    };
    obj1[3] = registerAssetDefault;
    const items1 = [tmp5(tmp2(8097).IconButton, obj1), ];
    const obj2 = { style: null, onPress: null, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    obj2[0] = tmp.text;
    obj2[1] = function onPress() {
      callback(4255).openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
    };
    const intl2 = tmp2(1114).intl;
    const items2 = [intl2.string(tmp2(1114).t["MG+Bzb"]), " ", ];
    const obj3 = { style: null, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    obj3[0] = tmp.link;
    const intl3 = tmp2(1114).intl;
    obj3[3] = intl3.string(tmp2(1114).t["9JceHN"]);
    items2[2] = tmp5(tmp2(4556).Text, obj3);
    obj2[4] = items2;
    items1[1] = tmp6(tmp2(4556).Text, obj2);
    obj[1] = items1;
    tmp6Result = tmp6(tmp7, obj);
  }
  const obj4 = { top: true, right: true, left: true, children: null };
  const items3 = [tmp6Result, closure_7(handleLogInClickDefault, { visible: true })];
  obj[1] = items3;
  obj4[3] = closure_8(View, obj);
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj4);
};
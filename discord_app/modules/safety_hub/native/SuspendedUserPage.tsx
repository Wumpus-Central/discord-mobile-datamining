// discord_app/modules/safety_hub/native/SuspendedUserPage.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { SafetyHubLinks } from "SafetyHubView";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/08027_registerAsset.js";
import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { IconButton } from "../../../design/components/Button/native/IconButton.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { AutomatedUnderageAppealStatus } from "SafetyHubPage.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, header: null, text: null, link: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: require("Themes").space.PX_8, alignItems: "center" };
let obj1 = { backgroundColor: require("Themes").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: require("Themes").space.PX_8, alignItems: "center" };
createCacheKey[2] = { marginRight: require("Themes").space.PX_8, textAlign: "left", flexShrink: 1 };
createCacheKey[3] = { textDecorationLine: "underline" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginRight: require("Themes").space.PX_8, textAlign: "left", flexShrink: 1 };
const result = require("SafetyHubView").fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = createCacheKey();
  let obj = { top: true, right: true, left: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
  const intl = getSystemLocale.intl;
  obj1[1] = intl.string(getSystemLocale.t.cpT0Cq);
  obj1[2] = function onPress() {
    callback(5827).closeSuspendedUser();
  };
  obj1[3] = registerAsset;
  const items = [callback(IconButton.IconButton, obj1), ];
  const obj2 = {
    style: tmp.text,
    onPress() {
      callback(3998).openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
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
  const items2 = [callback2(View, obj), callback(AutomatedUnderageAppealStatus, { visible: true })];
  obj[1] = items2;
  obj[3] = callback2(View, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};
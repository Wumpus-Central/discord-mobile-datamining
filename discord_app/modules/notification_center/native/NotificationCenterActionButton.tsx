// discord_app/modules/notification_center/native/NotificationCenterActionButton.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../_runtime/08605_registerAsset.js";
import { IconButton } from "../../../design/components/Button/native/IconButton.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[2] = registerAsset;
  obj[3] = function onPress() {
    return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
  };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["UKOtz+"]);
  return jsx(IconButton.IconButton, { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 });
};
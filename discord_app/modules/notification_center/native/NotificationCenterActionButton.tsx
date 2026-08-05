// discord_app/modules/notification_center/native/NotificationCenterActionButton.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[2] = require("../../../../_runtime/08415_registerAsset.js");
  obj[3] = function onPress() {
    return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
  };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["UKOtz+"]);
  return jsx(require("../../../design/components/Button/native/IconButton.native.tsx") /* IconButton */.IconButton, { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 });
};
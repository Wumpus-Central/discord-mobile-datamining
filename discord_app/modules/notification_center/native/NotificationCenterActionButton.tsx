// === Module 15298: NotificationCenterActionButton ===

// Module 15298 (NotificationCenterActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[2] = importDefault(8973);
  obj[3] = function onPress() {
    return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t["UKOtz+"]);
  return jsx(require(6685) /* IconButton */.IconButton, { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 });
};
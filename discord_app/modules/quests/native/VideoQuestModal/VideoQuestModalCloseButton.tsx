// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx
import { jsx } from "jsxProd";

const result = require("PressableBase").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj[3] = iconColor.onClose;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
  obj[4] = items;
  obj[5] = jsx(require(5179) /* XSmallIcon */.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
  return jsx(require(4721) /* PressableBase */.PressableOpacity, { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null });
};
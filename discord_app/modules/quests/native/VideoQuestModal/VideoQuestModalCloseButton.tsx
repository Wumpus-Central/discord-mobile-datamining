// === Module 14501: VideoQuestModalCloseButton ===

// Module 14501 (VideoQuestModalCloseButton)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PressableBase from "PressableBase" /* 5433 */;
import XSmallIcon from "XSmallIcon" /* 6368 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[3] = iconColor.onClose;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
  obj[4] = items;
  obj[5] = jsx(XSmallIcon.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
  return jsx(PressableBase.PressableOpacity, { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null });
};
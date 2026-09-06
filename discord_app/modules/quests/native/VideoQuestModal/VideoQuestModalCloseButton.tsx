// === Module 15148: VideoQuestModalCloseButton ===

// Module 15148 (VideoQuestModalCloseButton)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5123 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = iconColor.onClose;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
  obj.style = items;
  obj.children = jsx(XSmallIcon.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null });
};
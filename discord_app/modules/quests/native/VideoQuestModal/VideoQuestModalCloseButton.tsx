// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx
import { jsx } from "jsxProd";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { XSmallIcon } from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const result = require("PressableBase").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = Themes.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.cpT0Cq);
  obj[3] = iconColor.onClose;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
  obj[4] = items;
  obj[5] = jsx(XSmallIcon /* XSmallIcon */.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
  return jsx(PressableBase /* PressableBase */.PressableOpacity, { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null });
};
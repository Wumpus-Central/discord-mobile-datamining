// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const obj = {
    accessibilityLabel: null,
    accessibilityRole: "button",
    hitSlop: 12,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = iconColor.onClose;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
  obj.style = items;
  obj.children = jsx(XSmallIcon.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
  return jsx(Pressables.PressableOpacity, {
    accessibilityLabel: null,
    accessibilityRole: "button",
    hitSlop: 12,
    onPress: null,
    style: null,
    children: null,
  });
}

// discord_app/modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx
import "noop";
import { View } from "get ActivityIndicator";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { apply } from "../../../../../_runtime/00012_apply.js";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { ChannelCallNavigatorIcon } from "../../../video_calls/native/components/ChannelCallNavigatorIcon.tsx";

let closure_6;
let error;
const require = arg1;
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let accessibilityLabel;
  let children;
  let source;
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = createCacheKey();
  let obj = { style: tmp.chatIconContainer, children: null };
  obj = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: null, children: null };
  if (noop == null) {
    noop = apply.noop;
  }
  obj[3] = noop;
  obj[4] = children;
  obj[1] = closure_6(ChannelCallNavigatorIcon, obj);
  return closure_6(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { headerButton: null, disabledOpacity: null, chatIconContainer: null, chatIcon: null, badge: null };
createCacheKey = { width: 32, height: 32, borderRadius: require("Themes").radii.lg, alignSelf: "center", padding: 6, backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { opacity: 0.6 };
createCacheKey[2] = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { marginHorizontal: 0, width: 32, height: 32 };
const obj1 = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { backgroundColor: require("Themes").colors.ICON_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { backgroundColor: require("Themes").colors.ICON_STRONG };
const result = require("generateOldThreadCutoff").fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let accessibilityLabel;
  let children;
  let onPress;
  let source;
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = createCacheKey();
  let obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: null, children: null };
  const items = [tmp.headerButton, ];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj[5] = items;
  obj = { source, color: tmp.badge.backgroundColor, size: null };
  obj[2] = Button.Icon.Sizes.SMALL_20;
  const items1 = [callback(Button.Icon, obj), children];
  obj[6] = items1;
  return closure_7(PressableBase.PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  const _require = arg0;
  const items = [generateOldThreadCutoff];
  const items1 = [arg0];
  return _initialize.useStateFromStoresObject(items, () => ({ unreadCount: outer1_4.getUnreadCount(closure_0), mentionCount: outer1_4.getMentionCount(closure_0) }), items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  let obj = { theme: ThemeTypes.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[1] = callback(VoiceChatCallScreenHeaderIconInner, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
};
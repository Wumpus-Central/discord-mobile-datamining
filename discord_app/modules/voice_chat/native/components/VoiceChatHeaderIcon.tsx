// discord_app/modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChannelCallNavigatorIconDefault from "../../../video_calls/native/components/ChannelCallNavigatorIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import generateOldThreadCutoff from "../../../../stores/ReadStateStore.tsx";
import { ThemeTypes } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = callback2();
  const obj = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: null, children: null };
  if (noop == null) {
    noop = applyDefault.noop;
  }
  obj[3] = noop;
  obj[4] = children;
  obj[1] = callback(ChannelCallNavigatorIconDefault, obj);
  return callback(View, obj);
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, alignSelf: "center", padding: 6, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { opacity: 0.6 };
createCacheKey[2] = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { marginHorizontal: 0, width: 32, height: 32 };
const obj1 = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.ICON_STRONG };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = callback2();
  let obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: null, children: null };
  const items = [tmp.headerButton, ];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj[5] = items;
  obj = { source, color: tmp.badge.backgroundColor, size: Button.Icon.Sizes.SMALL_20 };
  const items1 = [callback(Button.Icon, obj), children];
  obj[6] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => ({ unreadCount: closure_1_4.getUnreadCount(closure_0), mentionCount: closure_1_4.getMentionCount(closure_0) }), items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj[1] = callback(VoiceChatCallScreenHeaderIconInner, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
};
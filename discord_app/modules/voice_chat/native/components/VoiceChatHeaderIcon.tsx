// discord_app/modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChannelCallNavigatorIconDefault from "../../../video_calls/native/components/ChannelCallNavigatorIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/ReadStateStore.tsx";
import { ThemeTypes } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = callback2();
  let obj = { style: tmp.chatIconContainer, children: null };
  obj = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: null, children: null };
  if (noop == null) {
    noop = applyDefault.noop;
  }
  obj[3] = noop;
  obj[4] = children;
  obj[1] = closure_6(ChannelCallNavigatorIconDefault, obj);
  return closure_6(View, obj);
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { headerButton: null, disabledOpacity: null, chatIconContainer: null, chatIcon: null, badge: null };
createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, alignSelf: "center", padding: 6, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { opacity: 0.6 };
createCacheKey[2] = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { marginHorizontal: 0, width: 32, height: 32 };
const obj1 = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.ICON_STRONG };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj2 = { backgroundColor: ThemesDefault.colors.ICON_STRONG };
const result = require("set").fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

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
  obj = { source, color: tmp.badge.backgroundColor, size: tmp3(1297).Icon.Sizes.SMALL_20 };
  const items1 = [callback(Button.Icon, obj), children];
  obj[6] = items1;
  return closure_7(PressableBase.PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => ({ unreadCount: closure_1_4.getUnreadCount(closure_0), mentionCount: closure_1_4.getMentionCount(closure_0) }), items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  let obj = { theme: ThemeTypes.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[1] = callback(VoiceChatCallScreenHeaderIconInner, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
};
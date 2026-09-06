// discord_app/modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChannelCallNavigatorIconDefault from "../../../video_calls/native/components/ChannelCallNavigatorIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";

require = fn;
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = closure_8();
  let obj = { style: tmp.chatIconContainer, children: null };
  obj = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: null, children: null };
  if (noop == null) {
    noop = _modDef12.noop;
  }
  obj.onPress = noop;
  obj.children = children;
  obj.children = timestampProducer(ChannelCallNavigatorIconDefault, obj);
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { headerButton: null, disabledOpacity: null, chatIconContainer: null, chatIcon: null, badge: null };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "center",
  padding: 6,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
createStyles.headerButton = size;
createStyles.disabledOpacity = { opacity: 0.6 };
createStyles = { marginRight: 12, height: fn(5682).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
createStyles.chatIconContainer = createStyles;
createStyles.chatIcon = { marginHorizontal: 0, width: 32, height: 32 };
createStyles.badge = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = closure_8();
  let obj = {
    disabled: disabledOpacity,
    activeOpacity: 0.5,
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    style: null,
    children: null,
  };
  const items = [tmp.headerButton];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj.style = items;
  obj = { source, color: tmp.badge.backgroundColor, size: tmp3(1178).Icon.Sizes.SMALL_20 };
  const items1 = [timestampProducer(native.Icon, obj), children];
  obj.children = items1;
  return React5(Pressables.PressableOpacity, obj);
}
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(
    items,
    () => ({
      unreadCount: ReadStateStore.getUnreadCount(closure_0),
      mentionCount: ReadStateStore.getMentionCount(closure_0),
    }),
    items1,
  );
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  let obj = { theme: ThemeTypes.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = timestampProducer(VoiceChatCallScreenHeaderIconInner, obj);
  return timestampProducer(native2.ThemeContextProvider, obj);
};

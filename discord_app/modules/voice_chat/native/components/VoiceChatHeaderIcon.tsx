// === Module 9449: VoiceChatHeaderIcon ===

// Module 9449 (VoiceChatHeaderIcon)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4537 */;
import Pressables from "Pressables" /* 5428 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9370 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4844 */;

const require = globalThis.__r;

require = fn;
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = closure_8();
  const obj = { style: tmp.chatIconContainer, children: null };
  const obj2 = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: null, children: null };
  if (noop == null) {
    noop = _modDef12.noop;
  }
  obj2.onPress = noop;
  obj2.children = children;
  obj.children = timestampProducer(ChannelCallNavigatorIconDefault, obj2);
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { headerButton: null, disabledOpacity: null, chatIconContainer: null, chatIcon: null, badge: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, alignSelf: "center", padding: 6, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj2.headerButton = size;
obj2.disabledOpacity = { opacity: 0.6 };
obj2.chatIconContainer = { marginRight: 12, height: fn(5989).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
obj2.chatIcon = { marginHorizontal: 0, width: 32, height: 32 };
const obj3 = { marginRight: 12, height: fn(5989).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
obj2.badge = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = closure_8();
  const obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: null, children: null };
  const items = [tmp.headerButton, ];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj.style = items;
  const items1 = [timestampProducer(native.Icon, { source, color: tmp.badge.backgroundColor, size: native.Icon.Sizes.SMALL_20 }), children];
  obj.children = items1;
  return React5(Pressables.PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => ({ unreadCount: ReadStateStore.getUnreadCount(closure_0), mentionCount: ReadStateStore.getMentionCount(closure_0) }), items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const merged = Object.assign(arg0);
  obj.children = timestampProducer(VoiceChatCallScreenHeaderIconInner, {});
  return timestampProducer(native2.ThemeContextProvider, obj);
};
// === Module 16120: VoiceChannelUserLimit ===

// Module 16120 (VoiceChannelUserLimit)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef13791 from "module_13791" /* 13791 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let rect = { videoIcon: null, wrapper: null, left: null, mid: null, right: null };
let size = { height: 16, width: 16, marginRight: 4, tintColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ICON };
rect.videoIcon = size;
let obj = { backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND, alignItems: "center", flexDirection: "row", borderRadius: 10, borderWidth: nativeDefault.modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
rect.wrapper = obj;
obj = { height: 20, flexDirection: "row", paddingLeft: 6, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
rect.left = obj;
const createStyles = { borderTopWidth: 20, borderBottomWidth: 0, borderTopColor: "transparent", borderBottomColor: "transparent", borderRightWidth: 6, borderRightColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND, paddingRight: 2 };
rect.mid = createStyles;
rect.right = { height: 20, flexDirection: "row", paddingRight: 6, paddingLeft: 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
let closure_6 = createStyles.createStyles(rect);
let obj2 = { height: 20, flexDirection: "row", paddingRight: 6, paddingLeft: 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default noop.memo(function VoiceChannelUserLimit(videoLimit) {
  ({ users, total } = videoLimit);
  const rect = closure_6();
  let obj = { style: rect.wrapper, children: null };
  obj = { style: rect.left, children: null };
  let tmp3 = null;
  if (videoLimit.videoLimit) {
    obj = { source: _modDef13791, size: native.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
    tmp3 = React4(native.Icon, obj);
  }
  const items = [tmp3, ];
  const obj1 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: users.toString().padStart(2, "0") };
  items[1] = React4(Text_Text.Text, obj1);
  obj.children = items;
  const items1 = [hasOwnProperty(View, obj), React4(View, { style: rect.mid }), ];
  const obj3 = { style: rect.right, children: null };
  const obj4 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: null };
  const obj2 = { style: rect.mid };
  const str = users.toString();
  obj4.children = total.toString().padStart(2, "0");
  obj3.children = React4(Text_Text.Text, obj4);
  items1[2] = React4(View, obj3);
  obj.children = items1;
  return hasOwnProperty(View, obj);
});
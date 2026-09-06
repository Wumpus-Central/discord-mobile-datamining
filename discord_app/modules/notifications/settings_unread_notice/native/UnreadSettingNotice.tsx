// === Module 11417: UnreadSettingNotice ===

// Module 11417 (UnreadSettingNotice)
import nativeDefault from "native" /* 576 */;
import UnreadSettingNoticeImpressionTrackingDefault from "UnreadSettingNoticeImpressionTracking" /* 11418 */;
import updateChannelUnreadSettingsDefault from "updateChannelUnreadSettings" /* 11419 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let closure_4 = fn(1084).ChannelNotificationSettingsFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { content: null, informations: null, actions: null, inlineTextWithIcon: null };
createStyles = { display: "flex", flexDirection: "row", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.content = createStyles;
createStyles.informations = { flex: 1 };
createStyles.actions = { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 };
createStyles.inlineTextWithIcon = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  _require = channel;
  const tmp = closure_7();
  let obj = { style: tmp.content, children: null };
  obj = { id: channel.channel.id };
  const items = [closure_5(UnreadSettingNoticeImpressionTrackingDefault, obj), , ];
  obj = { style: tmp.informations, children: null };
  const obj1 = { variant: "text-md/semibold", children: null };
  const intl = require("util").intl;
  obj1.children = intl.string(require("util").t.i4xQ5o);
  obj.children = closure_5(require("Text/Text").Text, obj1);
  items[1] = closure_5(View, obj);
  const obj2 = { style: tmp.actions, children: null };
  const obj3 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      updateChannelUnreadSettingsDefault(channel.channel.guild_id, channel.channel.id, constants.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: null
  };
  const obj4 = { variant: "text-xs/medium", color: "text-link", children: null };
  const intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t.KyUKhT);
  obj3.children = closure_5(require("Text/Text").Text, obj4);
  obj2.children = closure_5(require("Pressables").PressableOpacity, obj3);
  items[2] = closure_5(View, obj2);
  obj.children = items;
  return closure_6(View, obj);
};
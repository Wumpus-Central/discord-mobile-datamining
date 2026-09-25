// === Module 10948: UnreadSettingNotice ===

// Module 10948 (UnreadSettingNotice)
import nativeDefault from "native" /* 576 */;
import UnreadSettingNoticeImpressionTrackingDefault from "UnreadSettingNoticeImpressionTracking" /* 10949 */;
import updateChannelUnreadSettingsDefault from "updateChannelUnreadSettings" /* 10950 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
let closure_4 = fn(1084).ChannelNotificationSettingsFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
const obj2 = { content: null, informations: null, actions: null, inlineTextWithIcon: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.content = { display: "flex", flexDirection: "row", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.informations = { flex: 1 };
obj2.actions = { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 };
obj2.inlineTextWithIcon = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  _require = channel;
  const tmp = closure_7();
  const obj = { style: tmp.content, children: null };
  const items = [closure_5(UnreadSettingNoticeImpressionTrackingDefault, { id: channel.channel.id }), , ];
  const obj3 = { style: tmp.informations, children: null };
  const obj4 = { variant: "text-md/semibold", children: null };
  const intl = require("util").intl;
  obj4.children = intl.string(require("util").t.i4xQ5o);
  obj3.children = closure_5(require("Text/Text").Text, obj4);
  items[1] = closure_5(View, obj3);
  const obj5 = { style: tmp.actions, children: null };
  const obj6 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      updateChannelUnreadSettingsDefault(channel.channel.guild_id, channel.channel.id, constants.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: null
  };
  const obj7 = { variant: "text-xs/medium", color: "text-link", children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(require("util").t.KyUKhT);
  obj6.children = closure_5(require("Text/Text").Text, obj7);
  obj5.children = closure_5(require("Pressables").PressableOpacity, obj6);
  items[2] = closure_5(View, obj5);
  obj.children = items;
  return closure_6(View, obj);
};
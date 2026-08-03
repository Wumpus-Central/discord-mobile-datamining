// === Module 10472: UnreadSettingNoticeConnected ===

// Module 10472 (UnreadSettingNoticeConnected)
import "noop";
import { View } from "get ActivityIndicator";
import { ChannelNotificationSettingsFlags as closure_4 } from "MAX_FAVORITES";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null, informations: null, actions: null, inlineTextWithIcon: null };
createCacheKey = { display: "flex", flexDirection: "row", paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 };
createCacheKey[3] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  const _require = channel;
  const tmp = createCacheKey();
  let obj = { style: tmp.content, children: null };
  obj = { id: channel.channel.id };
  const items = [callback(importDefault(10473), obj), , ];
  obj = { style: tmp.informations, children: null };
  const obj1 = { variant: "text-md/semibold", children: null };
  const intl = _require(1236).intl;
  obj1[1] = intl.string(_require(1236).t.i4xQ5o);
  obj[1] = callback(_require(4189).Text, obj1);
  items[1] = callback(View, obj);
  const obj2 = { style: tmp.actions, children: null };
  const obj3 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      outer1_1(outer1_2[10])(channel.channel.guild_id, channel.channel.id, outer1_4.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: null
  };
  const obj4 = { variant: "text-xs/medium", color: "text-link", children: null };
  const intl2 = _require(1236).intl;
  obj4[2] = intl2.string(_require(1236).t.KyUKhT);
  obj3[3] = callback(_require(4189).Text, obj4);
  obj2[1] = callback(_require(4721).PressableOpacity, obj3);
  items[2] = callback(View, obj2);
  obj[1] = items;
  return callback2(View, obj);
};
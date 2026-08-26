// === Module 10536: UnreadSettingNoticeConnected ===

// Module 10536 (UnreadSettingNoticeConnected)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import UnreadSettingNoticeImpressionTrackingDefault from "UnreadSettingNoticeImpressionTracking" /* 10537 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ChannelNotificationSettingsFlags as closure_4 } from "MAX_FAVORITES" /* 685 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null, informations: null, actions: null, inlineTextWithIcon: null };
createCacheKey = { display: "flex", flexDirection: "row", paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 };
createCacheKey[3] = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  const _require = channel;
  const tmp = callback3();
  let obj = { style: tmp.content, children: null };
  obj = { id: channel.channel.id };
  const items = [callback(UnreadSettingNoticeImpressionTrackingDefault, obj), , ];
  obj = { style: tmp.informations, children: null };
  obj1 = { variant: "text-md/semibold", children: null };
  const intl = _require(1236).intl;
  obj1[1] = intl.string(_require(1236).t.i4xQ5o);
  obj[1] = callback(_require(4440).Text, obj1);
  items[1] = callback(View, obj);
  const obj2 = { style: tmp.actions, children: null };
  const obj3 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      closure_1_1(closure_1_2[10])(channel.channel.guild_id, channel.channel.id, closure_1_4.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: null
  };
  const obj4 = { variant: "text-xs/medium", color: "text-link", children: null };
  const intl2 = _require(1236).intl;
  obj4[2] = intl2.string(_require(1236).t.KyUKhT);
  obj3[3] = callback(_require(4440).Text, obj4);
  obj2[1] = callback(_require(5015).PressableOpacity, obj3);
  items[2] = callback(View, obj2);
  obj[1] = items;
  return callback2(View, obj);
};
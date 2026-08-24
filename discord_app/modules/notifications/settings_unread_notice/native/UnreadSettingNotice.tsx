// discord_app/modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnreadSettingNoticeImpressionTrackingDefault from "../UnreadSettingNoticeImpressionTracking.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ChannelNotificationSettingsFlags as closure_4 } from "../../../user_settings/UserSettingsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj1[1] = intl.string(require("../../../../intl/index.native.tsx").t.i4xQ5o);
  obj[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj1);
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
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj4[2] = intl2.string(require("../../../../intl/index.native.tsx").t.KyUKhT);
  obj3[3] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj4);
  obj2[1] = callback(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj3);
  items[2] = callback(View, obj2);
  obj[1] = items;
  return callback2(View, obj);
};
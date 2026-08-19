// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { getPushNotificationSelectOptions } from "../utils/notificationSettingsPresetOptionUtils.tsx";

const require = fn;
function NotificationSettingsMessageUnread(onPress) {
  const _require = onPress;
  const tmp = callback3();
  let obj = getPushNotificationSelectOptions;
  const unreadSelectOptions = obj.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((item, index) => item.value === onPress.setting);
  obj = { style: tmp.header, children: null };
  obj1 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj1[3] = intl.string(require("../../../../intl/index.native.tsx").t.Tqd1Af);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj1), ];
  const obj2 = { variant: "text-xs/semibold", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj2[2] = intl2.string(require("../../../../intl/index.native.tsx").t.RpQgm5);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj2);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: null };
  const obj4 = { style: tmp.card, children: null };
  const items2 = [callback(NotificationSettingsMockChannelsDefault, { unreadSetting: onPress.setting }), , ];
  const obj6 = { variant: "text-sm/medium", style: tmp.label, children: null };
  let str;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  obj6[2] = str;
  items2[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj6);
  const obj7 = { onPress: onPress.onCustomize, children: null };
  const obj8 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
  const intl3 = tmp2(1236).intl;
  const items3 = [intl3.string(require("../../../../intl/index.native.tsx").t.yxiV9W), " "];
  obj8[3] = items3;
  obj7[1] = callback2(require("../../../../design/components/Text/native/Text.tsx").Text, obj8);
  items2[2] = callback(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj7);
  obj4[1] = items2;
  obj3[2] = callback2(View, obj4);
  items1[1] = callback(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj3);
  obj[1] = items1;
  return callback2(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 4, textAlign: "center" };
createCacheKey[2] = { marginTop: 8, textAlign: "center" };
createCacheKey[3] = { marginBottom: 8 };
createCacheKey[4] = { marginBottom: 4 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx");

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  const _require = style;
  let obj = {
    style: style.style,
    setting: require("../utils/notificationSettingsGuildFlagUtils.tsx").useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      const obj = { guildId: style.guildId };
      obj.openLazy(style(dependencyMap[13])(dependencyMap[12], dependencyMap.paths), "MessageUnreadActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  const _require = style;
  let obj = {
    style: style.style,
    setting: require("../utils/notficationSettingsChannelFlagUtils.tsx").useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      const obj = { channel: style.channel };
      obj.openLazy(style(dependencyMap[13])(dependencyMap[15], dependencyMap.paths), "MessageUnreadActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
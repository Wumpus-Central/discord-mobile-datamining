// === Module 10156: NotificationSettingsMessageNotification ===

// Module 10156 (NotificationSettingsMessageNotification)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage" /* 10158 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
class NotificationSettingsMessageNotification {
  constructor(arg0) {
    closure_0 = global;
    tmp = closure_6();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = require("getPushNotificationSelectOptions");
    pushNotificationSelectOptions = obj.getPushNotificationSelectOptions();
    found = pushNotificationSelectOptions.find((value) => value.value === onPress.setting);
    tmp5 = jsxs;
    tmp6 = View;
    obj = { style: global.style, children: null };
    obj1 = { style: tmp.header, children: null };
    tmp7 = jsx;
    obj2 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
    intl = require("getSystemLocale").intl;
    obj2[3] = intl.string(require("getSystemLocale").t["1m22ZB"]);
    items = [, ];
    items[0] = jsx(require("Text").Text, obj2);
    if ("guild" === global.context) {
      intl3 = require("getSystemLocale").intl;
      stringResult = intl3.string(require("getSystemLocale").t["4bP2ZZ"]);
    } else {
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t["R1j5+4"]);
    }
    items[1] = tmp7(require("Text").Text, { variant: "text-xs/semibold", color: "text-default", children: stringResult });
    obj1[1] = items;
    items1 = [, ];
    items1[0] = tmp5(tmp6, obj1);
    obj3 = { onPress: global.onCustomize, activeOpacity: 0.6, children: null };
    obj4 = { style: tmp.card, children: null };
    obj5 = { notificationSetting: global.setting };
    items2 = [, , ];
    items2[0] = tmp7(require("NotificationSettingsMockMessage"), obj5);
    obj6 = { variant: "text-sm/medium", style: tmp.label, children: null };
    str = undefined;
    if (found != null) {
      str = found.label;
    }
    if (str == null) {
      str = "unset";
    }
    obj6[2] = str;
    items2[1] = tmp7(require("Text").Text, obj6);
    obj7 = { onPress: global.onCustomize, children: null };
    obj8 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
    intl4 = require("getSystemLocale").intl;
    obj8[3] = intl4.string(require("getSystemLocale").t.yxiV9W);
    obj7[1] = tmp7(require("Text").Text, obj8);
    items2[2] = tmp7(require("PressableBase").PressableOpacity, obj7);
    obj4[1] = items2;
    obj3[2] = tmp5(tmp6, obj4);
    items1[1] = tmp7(require("PressableBase").PressableOpacity, obj3);
    obj[1] = items1;
    return tmp5(tmp6, obj);
  }
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { card: null, cta: null, label: null, header: null, headerTitle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: 4 };
createCacheKey[2] = { textAlign: "center", marginTop: 8 };
createCacheKey[3] = { marginBottom: 8 };
createCacheKey[4] = { marginBottom: 4 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx");

export default NotificationSettingsMessageNotification;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(style) {
  const _require = style;
  let obj = {
    context: "guild",
    style: style.style,
    setting: _require(10155).useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      let obj = closure_1_1(closure_1_2[11]);
      obj = { guildId: style.guildId };
      obj.openLazy(style(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), "MessageNotificationGuildActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageNotification, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(style) {
  const _require = style;
  let obj = {
    context: "channel",
    style: style.style,
    setting: _require(10149).useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      let obj = closure_1_1(closure_1_2[11]);
      obj = { channel: style.channel };
      obj.openLazy(style(closure_1_2[13])(closure_1_2[15], closure_1_2.paths), "MessageNotificationChannelActionSheet", obj);
    }
  };
  return callback(NotificationSettingsMessageNotification, obj);
};
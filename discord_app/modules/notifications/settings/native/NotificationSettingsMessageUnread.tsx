// === Module 10340: NotificationSettingsMessageUnread ===

// Module 10340 (NotificationSettingsMessageUnread)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function NotificationSettingsMessageUnread(onPress) {
  const _require = onPress;
  const tmp = createCacheKey();
  let obj = _require(10334);
  const unreadSelectOptions = obj.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === onPress.setting);
  obj = { style: onPress.style, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
  const intl = _require(1236).intl;
  obj1[3] = intl.string(_require(1236).t.Tqd1Af);
  const items = [callback(_require(4189).Text, obj1), ];
  const obj2 = { variant: "text-xs/semibold", color: "text-default", children: null };
  const intl2 = _require(1236).intl;
  obj2[2] = intl2.string(_require(1236).t.RpQgm5);
  items[1] = callback(_require(4189).Text, obj2);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: null };
  const obj4 = { style: tmp.card, children: null };
  const items2 = [callback(importDefault(10341), { unreadSetting: onPress.setting }), , ];
  const obj6 = { variant: "text-sm/medium", style: tmp.label, children: null };
  let str;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  obj6[2] = str;
  items2[1] = callback(_require(4189).Text, obj6);
  const obj7 = { onPress: onPress.onCustomize, children: null };
  const obj8 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
  const intl3 = tmp2(1236).intl;
  const items3 = [intl3.string(_require(1236).t.yxiV9W), " "];
  obj8[3] = items3;
  obj7[1] = callback2(_require(4189).Text, obj8);
  items2[2] = callback(_require(4721).PressableOpacity, obj7);
  obj4[1] = items2;
  obj3[2] = callback2(View, obj4);
  items1[1] = callback(_require(4721).PressableOpacity, obj3);
  obj[1] = items1;
  return callback2(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { card: null, cta: null, label: null, header: null, headerTitle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 4, textAlign: "center" };
createCacheKey[2] = { marginTop: 8, textAlign: "center" };
createCacheKey[3] = { marginBottom: 8 };
createCacheKey[4] = { marginBottom: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx");

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  const _require = style;
  let obj = { style: style.style, setting: null, onCustomize: null };
  obj[1] = _require(10332).useGuildPresetSettings(style.guildId).unread;
  obj[2] = function onCustomize() {
    let obj = outer1_1(outer1_2[11]);
    obj = { guildId: style.guildId };
    obj.openLazy(style(outer1_2[13])(outer1_2[12], outer1_2.paths), "MessageUnreadActionSheet", obj);
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  const _require = style;
  let obj = { style: style.style, setting: null, onCustomize: null };
  obj[1] = _require(10326).useChannelPresetSettings(style.channel).unread;
  obj[2] = function onCustomize() {
    let obj = outer1_1(outer1_2[11]);
    obj = { channel: style.channel };
    obj.openLazy(style(outer1_2[13])(outer1_2[15], outer1_2.paths), "MessageUnreadActionSheet", obj);
  };
  return callback(NotificationSettingsMessageUnread, obj);
};
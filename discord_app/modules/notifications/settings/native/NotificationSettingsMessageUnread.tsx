// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import notificationSettingsPresetOptionUtils from "../utils/notificationSettingsPresetOptionUtils.tsx";
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function NotificationSettingsMessageUnread(onPress) {
  const tmp = closure_6();
  let obj = notificationSettingsPresetOptionUtils;
  const unreadSelectOptions = obj.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === onPress.setting);
  obj = { style: onPress.style, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.Tqd1Af);
  const items = [React4(Text_Text.Text, obj1)];
  const obj2 = { variant: "text-xs/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.RpQgm5);
  items[1] = React4(Text_Text.Text, obj2);
  obj.children = items;
  const items1 = [hasOwnProperty(View, obj)];
  const obj3 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: null };
  const obj4 = { style: tmp.card, children: null };
  const items2 = [React4(NotificationSettingsMockChannelsDefault, { unreadSetting: onPress.setting }), ,];
  const obj6 = { variant: "text-sm/medium", style: tmp.label, children: null };
  let str;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  obj6.children = str;
  items2[1] = React4(Text_Text.Text, obj6);
  const obj7 = { onPress: onPress.onCustomize, children: null };
  const obj8 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
  const intl3 = tmp2(1114).intl;
  const items3 = [intl3.string(util.t.yxiV9W), " "];
  obj8.children = items3;
  obj7.children = hasOwnProperty(Text_Text.Text, obj8);
  items2[2] = React4(Pressables.PressableOpacity, obj7);
  obj4.children = items2;
  obj3.children = hasOwnProperty(View, obj4);
  items1[1] = React4(Pressables.PressableOpacity, obj3);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { card: null, cta: null, label: null, header: null, headerTitle: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: 20,
  borderWidth: 1,
  padding: 14,
};
createStyles.card = createStyles;
createStyles.cta = { marginTop: 4, textAlign: "center" };
createStyles.label = { marginTop: 8, textAlign: "center" };
createStyles.header = { marginBottom: 8 };
createStyles.headerTitle = { marginBottom: 4 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx",
);

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  _require = style;
  let obj = {
    style: style.style,
    setting: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      const obj = { guildId: style.guildId };
      obj.openLazy(asyncRequireImpl(10166, dependencyMap.paths), "MessageUnreadActionSheet", obj);
    },
  };
  return closure_4(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  _require = style;
  let obj = {
    style: style.style,
    setting: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      const obj = { channel: style.channel };
      obj.openLazy(asyncRequireImpl(10168, dependencyMap.paths), "MessageUnreadActionSheet", obj);
    },
  };
  return closure_4(NotificationSettingsMessageUnread, obj);
};

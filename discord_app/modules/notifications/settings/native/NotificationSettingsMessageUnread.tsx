// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import notificationSettingsPresetOptionUtils from "../utils/notificationSettingsPresetOptionUtils.tsx";
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function NotificationSettingsMessageUnread(onPress) {
  const tmp = closure_6();
  const unreadSelectOptions = notificationSettingsPresetOptionUtils.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === onPress.setting);
  const obj2 = { style: onPress.style, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.Tqd1Af);
  const items = [React4(Text_Text.Text, obj4)];
  const obj5 = { variant: "text-xs/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.RpQgm5);
  items[1] = React4(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3)];
  const obj6 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: null };
  const obj7 = { style: tmp.card, children: null };
  const items2 = [React4(NotificationSettingsMockChannelsDefault, { unreadSetting: onPress.setting }), ,];
  const obj9 = { variant: "text-sm/medium", style: tmp.label, children: null };
  let str;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  obj9.children = str;
  items2[1] = React4(Text_Text.Text, obj9);
  const obj10 = { onPress: onPress.onCustomize, children: null };
  const obj11 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
  const intl3 = util.intl;
  const items3 = [intl3.string(util.t.yxiV9W), " "];
  obj11.children = items3;
  obj10.children = hasOwnProperty(Text_Text.Text, obj11);
  items2[2] = React4(Pressables.PressableOpacity, obj10);
  obj7.children = items2;
  obj6.children = hasOwnProperty(View, obj7);
  items1[1] = React4(Pressables.PressableOpacity, obj6);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  card: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
  },
  cta: { marginTop: 4, textAlign: "center" },
  label: { marginTop: 8, textAlign: "center" },
  header: { marginBottom: 8 },
  headerTitle: { marginBottom: 4 },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx",
);

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  _require = style;
  const obj = {
    style: style.style,
    setting: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(10508, dependencyMap.paths),
        "MessageUnreadActionSheet",
        { guildId: style.guildId },
      );
    },
  };
  return closure_4(NotificationSettingsMessageUnread, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  _require = style;
  const obj = {
    style: style.style,
    setting: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(10510, dependencyMap.paths),
        "MessageUnreadActionSheet",
        { channel: style.channel },
      );
    },
  };
  return closure_4(NotificationSettingsMessageUnread, obj);
};

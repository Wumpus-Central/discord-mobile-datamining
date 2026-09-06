// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import notificationSettingsPresetOptionUtils from "../utils/notificationSettingsPresetOptionUtils.tsx";
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class NotificationSettingsMessageNotification {
  constructor(arg0) {
    closure_0 = global;
    tmp = closure_6();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[5]);
    pushNotificationSelectOptions = obj.getPushNotificationSelectOptions();
    found = pushNotificationSelectOptions.find((value) => value.value === onPress.setting);
    tmp5 = jsxs;
    tmp6 = View;
    obj = { style: global.style, children: null };
    obj1 = { style: tmp.header, children: null };
    tmp7 = jsx;
    obj2 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
    intl = closure_0(closure_2[7]).intl;
    obj2.children = intl.string(closure_0(closure_2[7]).t["1m22ZB"]);
    items = [,];
    items[0] = jsx(closure_0(closure_2[6]).Text, obj2);
    if ("guild" === global.context) {
      intl3 = tmp2(tmp3[7]).intl;
      stringResult = intl3.string(tmp2(tmp3[7]).t["4bP2ZZ"]);
    } else {
      intl2 = tmp2(tmp3[7]).intl;
      stringResult = intl2.string(tmp2(tmp3[7]).t["R1j5+4"]);
    }
    items[1] = tmp7(closure_0(closure_2[6]).Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      children: stringResult,
    });
    obj1.children = items;
    items1 = [,];
    items1[0] = tmp5(tmp6, obj1);
    obj3 = { onPress: global.onCustomize, activeOpacity: 0.6, children: null };
    obj4 = { style: tmp.card, children: null };
    obj5 = { notificationSetting: global.setting };
    items2 = [, ,];
    items2[0] = tmp7(closure_1(tmp3[9]), obj5);
    obj6 = { variant: "text-sm/medium", style: tmp.label, children: null };
    str = undefined;
    if (found != null) {
      str = found.label;
    }
    if (str == null) {
      str = "unset";
    }
    obj6.children = str;
    items2[1] = tmp7(tmp2(tmp3[6]).Text, obj6);
    obj7 = { onPress: global.onCustomize, children: null };
    obj8 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
    intl4 = tmp2(tmp3[7]).intl;
    obj8.children = intl4.string(tmp2(tmp3[7]).t.yxiV9W);
    obj7.children = tmp7(tmp2(tmp3[6]).Text, obj8);
    items2[2] = tmp7(tmp2(tmp3[8]).PressableOpacity, obj7);
    obj4.children = items2;
    obj3.children = tmp5(tmp6, obj4);
    items1[1] = tmp7(tmp2(tmp3[8]).PressableOpacity, obj3);
    obj.children = items1;
    return tmp5(tmp6, obj);
  }
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
createStyles.cta = { textAlign: "center", marginTop: 4 };
createStyles.label = { textAlign: "center", marginTop: 8 };
createStyles.header = { marginBottom: 8 };
createStyles.headerTitle = { marginBottom: 4 };
const timestampProducer = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx",
);

export default NotificationSettingsMessageNotification;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(
  style,
) {
  _require = style;
  let obj = {
    context: "guild",
    style: style.style,
    setting: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      const obj = { guildId: style.guildId };
      obj.openLazy(asyncRequireImpl(10160, dependencyMap.paths), "MessageNotificationGuildActionSheet", obj);
    },
  };
  return closure_4(NotificationSettingsMessageNotification, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(
  style,
) {
  _require = style;
  let obj = {
    context: "channel",
    style: style.style,
    setting: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      const obj = { channel: style.channel };
      obj.openLazy(asyncRequireImpl(10162, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj);
    },
  };
  return closure_4(NotificationSettingsMessageNotification, obj);
};

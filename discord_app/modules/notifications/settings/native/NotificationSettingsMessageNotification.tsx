// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import notificationSettingsPresetOptionUtils from "../utils/notificationSettingsPresetOptionUtils.tsx";
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

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
    obj1 = { style: global.style, children: null };
    obj11 = { style: tmp.header, children: null };
    tmp7 = jsx;
    obj12 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
    intl = closure_0(closure_2[7]).intl;
    obj12.children = intl.string(closure_0(closure_2[7]).t["1m22ZB"]);
    items = [,];
    items[0] = jsx(closure_0(closure_2[6]).Text, obj12);
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
    obj11.children = items;
    items1 = [,];
    items1[0] = tmp5(tmp6, obj11);
    obj13 = { onPress: global.onCustomize, activeOpacity: 0.6, children: null };
    obj14 = { style: tmp.card, children: null };
    obj15 = { notificationSetting: global.setting };
    items2 = [, ,];
    items2[0] = tmp7(closure_1(tmp3[9]), obj15);
    obj16 = { variant: "text-sm/medium", style: tmp.label, children: null };
    str = undefined;
    if (found != null) {
      str = found.label;
    }
    if (str == null) {
      str = "unset";
    }
    obj16.children = str;
    items2[1] = tmp7(tmp2(tmp3[6]).Text, obj16);
    obj17 = { onPress: global.onCustomize, children: null };
    obj18 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
    intl4 = tmp2(tmp3[7]).intl;
    obj18.children = intl4.string(tmp2(tmp3[7]).t.yxiV9W);
    obj17.children = tmp7(tmp2(tmp3[6]).Text, obj18);
    items2[2] = tmp7(tmp2(tmp3[8]).PressableOpacity, obj17);
    obj14.children = items2;
    obj13.children = tmp5(tmp6, obj14);
    items1[1] = tmp7(tmp2(tmp3[8]).PressableOpacity, obj13);
    obj1.children = items1;
    return tmp5(tmp6, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  card: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
  },
  cta: { textAlign: "center", marginTop: 4 },
  label: { textAlign: "center", marginTop: 8 },
  header: { marginBottom: 8 },
  headerTitle: { marginBottom: 4 },
};
const timestampProducer = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx",
);

export default NotificationSettingsMessageNotification;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(
  style,
) {
  _require = style;
  const obj = {
    context: "guild",
    style: style.style,
    setting: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(9609, dependencyMap.paths),
        "MessageNotificationGuildActionSheet",
        { guildId: style.guildId },
      );
    },
  };
  return closure_4(NotificationSettingsMessageNotification, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(
  style,
) {
  _require = style;
  const obj = {
    context: "channel",
    style: style.style,
    setting: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(9611, dependencyMap.paths),
        "MessageNotificationChannelActionSheet",
        { channel: style.channel },
      );
    },
  };
  return closure_4(NotificationSettingsMessageNotification, obj);
};

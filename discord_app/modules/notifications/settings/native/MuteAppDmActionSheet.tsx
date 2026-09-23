// === Module 12938: MuteAppDmActionSheet ===

// Module 12938 (MuteAppDmActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4521 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7445 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7450 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: null, content: null, headerText: null, infoText: null, dismissButtonContainer: null, mutedNotificationContainer: null, mutedNotification: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj2.iconBackground = size;
obj2.content = { padding: 16 };
obj2.headerText = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
obj2.infoText = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
obj2.dismissButtonContainer = { marginTop: 8 };
const size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
obj2.mutedNotificationContainer = size1;
obj2.mutedNotification = { width: 16, height: 16 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = closure_6();
  _require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.content, children: null };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(require("BellIcon").BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [closure_4(View, obj3), , , , ];
  let obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = require("util").intl;
  obj5.children = intl.string(require("util").t.uAmAiL);
  items[1] = closure_4(require("Text/Text").Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t.mscFJU);
  items[2] = closure_4(require("Text/Text").Text, obj6);
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj7.text = intl3.string(require("util").t.uAmAiL);
  obj7.onPress = function onPress() {
    let obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateChannelOverrideSettings({ guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted });
    const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj5 = { key: "NOTIFICATIONS_MUTED", content: null, icon: null };
    const intl = util.intl;
    obj5.content = intl.string(util.t.EgGpkx);
    obj5.icon = function icon() {
      const obj = { style: closure_1_0.mutedNotificationContainer, children: closure_2_4(closure_0(1177).Icon, { source: channel(8293), color: channel(576).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification }) };
      return closure_2_4(View, obj);
    };
    ToastActionCreatorsDefault.open(obj5);
  };
  items[3] = closure_4(require("components/Button/Button").Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: null };
  const obj9 = { variant: "secondary", text: null, onPress: null };
  const intl4 = require("util").intl;
  obj9.text = intl4.string(require("util").t.WAI6xu);
  obj9.onPress = function onPress() {
    channel(4794).hideActionSheet();
  };
  obj8.children = closure_4(require("components/Button/Button").Button, obj9);
  items[4] = closure_4(View, obj8);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj);
};
// === Module 14161: MuteAppDmActionSheet ===

// Module 14161 (MuteAppDmActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7283 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7288 */;
import BellSlashIcon from "BellSlashIcon" /* 10992 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let obj2 = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: null, content: null, headerText: null, infoText: null, dismissButtonContainer: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj2.iconBackground = size;
obj2.content = { padding: 16 };
obj2.headerText = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
obj2.infoText = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
obj2.dismissButtonContainer = { marginTop: 8 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = closure_6();
  channel = channel.channel;
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.content, children: null };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(channel(9208).BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [closure_4(View, obj3), , , , ];
  let obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = channel(1113).intl;
  obj5.children = intl.string(channel(1113).t.uAmAiL);
  items[1] = closure_4(channel(5624).Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  const intl2 = channel(1113).intl;
  obj6.children = intl2.string(channel(1113).t.mscFJU);
  items[2] = closure_4(channel(5624).Text, obj6);
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl3 = channel(1113).intl;
  obj7.text = intl3.string(channel(1113).t.uAmAiL);
  obj7.onPress = function onPress() {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateChannelOverrideSettings({ guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted });
    const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj5 = { text: null, icon: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t.EgGpkx);
    obj5.icon = BellSlashIcon.BellSlashIcon;
    ToastActionCreatorsDefault.open("NOTIFICATIONS_MUTED", obj5);
  };
  items[3] = closure_4(channel(5634).Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: null };
  const obj9 = { variant: "secondary", text: null, onPress: null };
  const intl4 = channel(1113).intl;
  obj9.text = intl4.string(channel(1113).t.WAI6xu);
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj8.children = closure_4(channel(5634).Button, obj9);
  items[4] = closure_4(View, obj8);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(channel(5272).BottomSheet, obj);
};
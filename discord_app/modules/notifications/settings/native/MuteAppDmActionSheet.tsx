// === Module 12599: MuteAppDmActionSheet ===

// Module 12599 (MuteAppDmActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: null, content: null, headerText: null, infoText: null, dismissButtonContainer: null, mutedNotificationContainer: null, mutedNotification: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
createStyles.iconBackground = size;
createStyles.content = { padding: 16 };
createStyles.headerText = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
createStyles.infoText = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
createStyles.dismissButtonContainer = { marginTop: 8 };
const size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
createStyles.mutedNotificationContainer = size1;
createStyles.mutedNotification = { width: 16, height: 16 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = closure_6();
  _require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.iconContainer, children: closure_4(View, { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(require("BellIcon").BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [closure_4(View, obj), , , , ];
  let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = require("util").intl;
  obj2.children = intl.string(require("util").t.uAmAiL);
  items[1] = closure_4(require("Text/Text").Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.string(require("util").t.mscFJU);
  items[2] = closure_4(require("Text/Text").Text, obj3);
  const obj4 = { variant: "destructive", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj4.text = intl3.string(require("util").t.uAmAiL);
  obj4.onPress = function onPress() {
    let obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateChannelOverrideSettings(null, channel.id, { muted: true }, NotificationSettingsUtils.NotificationLabels.Muted);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    obj = { key: "NOTIFICATIONS_MUTED", content: null, icon: null };
    const intl = util.intl;
    obj.content = intl.string(util.t.EgGpkx);
    obj.icon = function icon() {
      let obj = { style: closure_1_0.mutedNotificationContainer, children: null };
      obj = { source: channel(7949), color: channel(576).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification };
      obj.children = closure_2_4(closure_0(1178).Icon, obj);
      return closure_2_4(View, obj);
    };
    ToastActionCreatorsDefault.open(obj);
  };
  items[3] = closure_4(require("components/Button/Button").Button, obj4);
  const obj5 = { style: tmp.dismissButtonContainer, children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl4 = require("util").intl;
  obj6.text = intl4.string(require("util").t.WAI6xu);
  obj6.onPress = function onPress() {
    channel(4527).hideActionSheet();
  };
  obj5.children = closure_4(require("components/Button/Button").Button, obj6);
  items[4] = closure_4(View, obj5);
  obj.children = items;
  obj.children = closure_5(View, obj);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj);
};
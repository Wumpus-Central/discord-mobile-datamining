// === Module 12975: MediaMessagePreviewActionSheet ===

// Module 12975 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1100 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ReportModals from "ReportModals" /* 8629 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default noop.memo(function MediaMessagePreviewActionSheet(channel) {
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[2]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    let tmpResult = tmp(tmp2[3]);
    canReportUserResult = tmpResult.canReportUser(user);
  }
  if (canReportUserResult) {
    tmpResult = tmp(tmp2[3]);
    canReportUserResult = tmpResult.canReportMessage(message);
  }
  callback = callback.useCallback(() => {
    message(closeMediaModal[4]).hideActionSheet();
  }, []);
  const items = [callback, closeMediaModal, , , ];
  ({ guild_id: arr[2], id: arr[3] } = channel);
  items[4] = message.id;
  const items1 = [message.id, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closeMediaModal();
    router_utils.transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    ClipboardUtils.copy(message.id);
    ToastUtils.presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const result = ReportModals.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: tmp(tmp2[11]).ChatArrowRightIcon };
  obj.icon = closure_4(channel(closeMediaModal[10]).ActionSheetRow.Icon, obj);
  const intl = tmp(tmp2[12]).intl;
  obj.label = intl.string(channel(closeMediaModal[12]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[10]).ActionSheetRow, obj), , ];
  if (setting) {
    const obj1 = { icon: null, label: null, onPress: null };
    const obj2 = { IconComponent: tmp(tmp2[13]).IdIcon };
    obj1.icon = tmp10(tmp(tmp2[10]).ActionSheetRow.Icon, obj2);
    const intl2 = tmp(tmp2[12]).intl;
    obj1.label = intl2.string(tmp(tmp2[12]).t.zBoHlf);
    obj1.onPress = callback2;
    setting = tmp10(tmp(tmp2[10]).ActionSheetRow, obj1);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj3 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj4 = { IconComponent: tmp(tmp2[14]).FlagIcon };
    obj3.icon = tmp10(tmp(tmp2[10]).ActionSheetRow.Icon, obj4);
    const intl3 = tmp(tmp2[12]).intl;
    obj3.label = intl3.string(tmp(tmp2[12]).t["+78Pfm"]);
    obj3.onPress = callback3;
    canReportUserResult = tmp10(tmp(tmp2[10]).ActionSheetRow, obj3);
  }
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[9]).ActionSheet, { children: closure_5(channel(closeMediaModal[10]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
});
// === Module 12531: MediaMessagePreviewActionSheet ===

// Module 12531 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1101 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ReportModals from "ReportModals" /* 8089 */;
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
    canReportUserResult = tmp(closeMediaModal[3]).canReportUser(user);
    const tmpResult = tmp(closeMediaModal[3]);
  }
  if (canReportUserResult) {
    canReportUserResult = tmp(closeMediaModal[3]).canReportMessage(message);
    const tmpResult2 = tmp(closeMediaModal[3]);
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
  let obj = { icon: closure_4(channel(closeMediaModal[10]).ActionSheetRow.Icon, { IconComponent: channel(closeMediaModal[11]).ChatArrowRightIcon }), label: null, onPress: null };
  const intl = tmp(closeMediaModal[12]).intl;
  obj.label = intl.string(channel(closeMediaModal[12]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[10]).ActionSheetRow, obj), , ];
  if (setting) {
    const obj3 = { icon: null, label: null, onPress: null };
    const obj4 = { IconComponent: tmp(closeMediaModal[13]).IdIcon };
    obj3.icon = closure_4(tmp(closeMediaModal[10]).ActionSheetRow.Icon, obj4);
    const intl2 = tmp(closeMediaModal[12]).intl;
    obj3.label = intl2.string(tmp(closeMediaModal[12]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = closure_4(tmp(closeMediaModal[10]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj6 = { IconComponent: tmp(closeMediaModal[14]).FlagIcon };
    obj5.icon = closure_4(tmp(closeMediaModal[10]).ActionSheetRow.Icon, obj6);
    const intl3 = tmp(closeMediaModal[12]).intl;
    obj5.label = intl3.string(tmp(closeMediaModal[12]).t["+78Pfm"]);
    obj5.onPress = callback3;
    canReportUserResult = closure_4(tmp(closeMediaModal[10]).ActionSheetRow, obj5);
  }
  const obj2 = { IconComponent: channel(closeMediaModal[11]).ChatArrowRightIcon };
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[9]).ActionSheet, { children: closure_5(channel(closeMediaModal[10]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
});
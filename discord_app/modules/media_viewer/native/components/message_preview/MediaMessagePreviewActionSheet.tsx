// discord_app/modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx
import router_utils from "../../../../routing/router_utils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import ReportModals from "../../../../in_app_reports/ReportModals.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx",
);

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
    let tmpResult = tmp(closeMediaModal[3]);
    canReportUserResult = tmpResult.canReportUser(user);
  }
  if (canReportUserResult) {
    tmpResult = tmp(closeMediaModal[3]);
    canReportUserResult = tmpResult.canReportMessage(message);
  }
  callback = callback.useCallback(() => {
    message(closeMediaModal[4]).hideActionSheet();
  }, []);
  const items = [callback, closeMediaModal, , ,];
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
  obj = { IconComponent: tmp(closeMediaModal[11]).ChatArrowRightIcon };
  obj.icon = closure_4(channel(closeMediaModal[10]).ActionSheetRow.Icon, obj);
  const intl = tmp(closeMediaModal[12]).intl;
  obj.label = intl.string(channel(closeMediaModal[12]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[10]).ActionSheetRow, obj), ,];
  if (setting) {
    const obj1 = { icon: null, label: null, onPress: null };
    const obj2 = { IconComponent: tmp(closeMediaModal[13]).IdIcon };
    obj1.icon = closure_4(tmp(closeMediaModal[10]).ActionSheetRow.Icon, obj2);
    const intl2 = tmp(closeMediaModal[12]).intl;
    obj1.label = intl2.string(tmp(closeMediaModal[12]).t.zBoHlf);
    obj1.onPress = callback2;
    setting = closure_4(tmp(closeMediaModal[10]).ActionSheetRow, obj1);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj3 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj4 = { IconComponent: tmp(closeMediaModal[14]).FlagIcon };
    obj3.icon = closure_4(tmp(closeMediaModal[10]).ActionSheetRow.Icon, obj4);
    const intl3 = tmp(closeMediaModal[12]).intl;
    obj3.label = intl3.string(tmp(closeMediaModal[12]).t["+78Pfm"]);
    obj3.onPress = callback3;
    canReportUserResult = closure_4(tmp(closeMediaModal[10]).ActionSheetRow, obj3);
  }
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[9]).ActionSheet, {
    children: closure_5(channel(closeMediaModal[10]).ActionSheetRow.Group, { hasIcons: true, children: items3 }),
  });
});

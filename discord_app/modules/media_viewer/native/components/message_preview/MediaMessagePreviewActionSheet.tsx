// === Module 12458: ? ===

// Module 12458
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = importAllResult.memo(function MediaMessagePreviewActionSheet(channel) {
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
    channel(closeMediaModal[5]).transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    channel(closeMediaModal[6]).copy(message.id);
    const obj = channel(closeMediaModal[6]);
    channel(closeMediaModal[7]).presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const result = channel(closeMediaModal[8]).showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: tmp(tmp2[11]).ChatArrowRightIcon };
  obj[0] = callback(channel(closeMediaModal[10]).ActionSheetRow.Icon, obj);
  const intl = tmp(tmp2[12]).intl;
  obj[1] = intl.string(channel(closeMediaModal[12]).t["+TSRGD"]);
  obj[2] = callback1;
  const items3 = [callback(channel(closeMediaModal[10]).ActionSheetRow, obj), , ];
  if (setting) {
    obj1 = { icon: null, label: null, onPress: null };
    const obj2 = { IconComponent: null };
    obj2[0] = tmp(tmp2[13]).IdIcon;
    obj1[0] = tmp10(tmp(tmp2[10]).ActionSheetRow.Icon, obj2);
    const intl2 = tmp(tmp2[12]).intl;
    obj1[1] = intl2.string(tmp(tmp2[12]).t.zBoHlf);
    obj1[2] = callback2;
    setting = tmp10(tmp(tmp2[10]).ActionSheetRow, obj1);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj3 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj4 = { IconComponent: null };
    obj4[0] = tmp(tmp2[14]).FlagIcon;
    obj3[0] = tmp10(tmp(tmp2[10]).ActionSheetRow.Icon, obj4);
    const intl3 = tmp(tmp2[12]).intl;
    obj3[1] = intl3.string(tmp(tmp2[12]).t["+78Pfm"]);
    obj3[2] = callback3;
    canReportUserResult = tmp10(tmp(tmp2[10]).ActionSheetRow, obj3);
  }
  items3[2] = canReportUserResult;
  return callback(channel(closeMediaModal[9]).ActionSheet, { children: closure_5(channel(closeMediaModal[10]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
});
let result = require("set").fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default memoResult;
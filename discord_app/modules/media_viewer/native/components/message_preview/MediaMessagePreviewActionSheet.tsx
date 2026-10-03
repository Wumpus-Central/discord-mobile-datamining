// === Module 12776: MediaMessagePreviewActionSheet ===

// Module 12776 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1112 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ReportModals from "ReportModals" /* 8279 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(closeMediaModal[3]).c(27);
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === message) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = message(closeMediaModal[6]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      cResult[3] = R;
      const tmp7 = R;
    } else {
      class R {
        constructor() {
          obj = message(closeMediaModal[6]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    R = tmp7;
    if (cResult[4] === channel.guild_id) {
      class R {
        constructor() {
          obj = message(closeMediaModal[6]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const fn = function _() {
      R();
      closeMediaModal();
      router_utils.transitionToGuild(channel.guild_id, channel.id, message.id);
    };
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = closeMediaModal;
    cResult[7] = message.id;
    cResult[8] = fn;
  }
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    class R {
      constructor() {
        obj = message(closeMediaModal[6]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    canReportUserResult = obj2.canReportUser(user);
  }
  if (canReportUserResult) {
    class R {
      constructor() {
        obj = message(closeMediaModal[6]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    canReportUserResult = obj3.canReportMessage(message);
  }
  cResult[0] = message;
  cResult[1] = user;
  cResult[2] = canReportUserResult;
}) : ((channel) => {
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    canReportUserResult = tmp(closeMediaModal[5]).canReportUser(user);
    const tmpResult = tmp(closeMediaModal[5]);
  }
  if (canReportUserResult) {
    canReportUserResult = tmp(closeMediaModal[5]).canReportMessage(message);
    const tmpResult2 = tmp(closeMediaModal[5]);
  }
  callback = callback.useCallback(() => {
    message(closeMediaModal[6]).hideActionSheet();
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
  let obj = { icon: closure_4(channel(closeMediaModal[11]).ActionSheetRow.Icon, { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon }), label: null, onPress: null };
  const intl = tmp(closeMediaModal[13]).intl;
  obj.label = intl.string(channel(closeMediaModal[13]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[11]).ActionSheetRow, obj), , ];
  if (setting) {
    const obj3 = { icon: null, label: null, onPress: null };
    const obj4 = { IconComponent: tmp(closeMediaModal[14]).IdIcon };
    obj3.icon = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj4);
    const intl2 = tmp(closeMediaModal[13]).intl;
    obj3.label = intl2.string(tmp(closeMediaModal[13]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj6 = { IconComponent: tmp(closeMediaModal[15]).FlagIcon };
    obj5.icon = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj6);
    const intl3 = tmp(closeMediaModal[13]).intl;
    obj5.label = intl3.string(tmp(closeMediaModal[13]).t["+78Pfm"]);
    obj5.onPress = callback3;
    canReportUserResult = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj5);
  }
  const obj2 = { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon };
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[16]).ActionSheet, { children: closure_5(channel(closeMediaModal[11]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
}));
// === Module 12776: MediaMessagePreviewActionSheet ===

// Module 12776 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1112 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ReportModals from "ReportModals" /* 8279 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closeMediaModal;
  let obj2;
  let user;
  let obj = channel(closeMediaModal[3]);
  const cResult = obj.c(27);
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === message) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          const obj = message(closeMediaModal[6]);
          obj.hideActionSheet();
        }
      }
      cResult[3] = R;
      tmp7 = R;
    } else {
      class R {
        constructor() {
          const obj = message(closeMediaModal[6]);
          obj.hideActionSheet();
        }
      }
    }
    R = tmp7;
    if (cResult[4] === channel.guild_id) {
      class R {
        constructor() {
          const obj = message(closeMediaModal[6]);
          obj.hideActionSheet();
        }
      }
    }
    const fn = function _() {
      R();
      closeMediaModal();
      const obj = router_utils;
      obj.transitionToGuild(channel.guild_id, channel.id, message.id);
    };
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = closeMediaModal;
    cResult[7] = message.id;
    cResult[8] = fn;
  }
  let canReportUserResult = !user.isNonUserBot();
  user.isNonUserBot();
  if (canReportUserResult) {
    class R {
      constructor() {
        const obj = message(closeMediaModal[6]);
        obj.hideActionSheet();
      }
    }
    canReportUserResult = obj2.canReportUser(user);
  }
  if (canReportUserResult) {
    class R {
      constructor() {
        const obj = message(closeMediaModal[6]);
        obj.hideActionSheet();
      }
    }
    canReportUserResult = obj3.canReportMessage(message);
  }
  cResult[0] = message;
  cResult[1] = user;
  cResult[2] = canReportUserResult;
}) : ((channel) => {
  let Icon;
  let Icon2;
  let Icon3;
  let closeMediaModal;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let obj4;
  let obj6;
  let user;
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let canReportUserResult = !user.isNonUserBot();
  user.isNonUserBot();
  if (canReportUserResult) {
    const tmpResult = channel(closeMediaModal[5]);
    canReportUserResult = tmpResult.canReportUser(user);
  }
  if (canReportUserResult) {
    const tmpResult2 = channel(closeMediaModal[5]);
    canReportUserResult = tmpResult2.canReportMessage(message);
  }
  callback = callback.useCallback(() => {
    const obj = message(closeMediaModal[6]);
    obj.hideActionSheet();
  }, []);
  const items = [callback, closeMediaModal, , , ];
  ({ guild_id: arr[2], id: arr[3] } = channel);
  items[4] = message.id;
  const items1 = [message.id, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closeMediaModal();
    const obj = router_utils;
    obj.transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    const obj = ClipboardUtils;
    obj.copy(message.id);
    const obj2 = ToastUtils;
    obj2.presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const obj = ReportModals;
    const result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  const ActionSheet = tmp(closeMediaModal[16]).ActionSheet;
  const Group = tmp(closeMediaModal[11]).ActionSheetRow.Group;
  let obj = { icon: closure_4(Icon, obj2), label: intl.string(tmp(closeMediaModal[13]).t["+TSRGD"]), onPress: callback1 };
  const ActionSheetRow = tmp(closeMediaModal[11]).ActionSheetRow;
  obj2 = { IconComponent: tmp(closeMediaModal[12]).ChatArrowRightIcon };
  Icon = tmp(closeMediaModal[11]).ActionSheetRow.Icon;
  intl = tmp(closeMediaModal[13]).intl;
  const items3 = [closure_4(ActionSheetRow, obj), , ];
  if (setting) {
    const obj3 = { icon: closure_4(Icon2, obj4), label: intl2.string(channel(closeMediaModal[13]).t.zBoHlf), onPress: callback2 };
    const ActionSheetRow2 = tmp(closeMediaModal[11]).ActionSheetRow;
    obj4 = { IconComponent: channel(closeMediaModal[14]).IdIcon };
    Icon2 = tmp(closeMediaModal[11]).ActionSheetRow.Icon;
    intl2 = tmp(closeMediaModal[13]).intl;
    setting = closure_4(ActionSheetRow2, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: closure_4(Icon3, obj6), label: intl3.string(channel(closeMediaModal[13]).t["+78Pfm"]), onPress: callback3, variant: "danger" };
    const ActionSheetRow3 = tmp(closeMediaModal[11]).ActionSheetRow;
    obj6 = { IconComponent: channel(closeMediaModal[15]).FlagIcon };
    Icon3 = tmp(closeMediaModal[11]).ActionSheetRow.Icon;
    intl3 = tmp(closeMediaModal[13]).intl;
    canReportUserResult = closure_4(ActionSheetRow3, obj5);
  }
  items3[2] = canReportUserResult;
  const obj7 = { children: closure_5(Group, { hasIcons: true, children: items3 }) };
  return closure_4(ActionSheet, obj7);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default memoResult;
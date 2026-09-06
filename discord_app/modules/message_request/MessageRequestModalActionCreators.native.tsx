// === Module 12446: MessageRequestModalActionCreators ===

// Module 12446 (MessageRequestModalActionCreators)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import MessageRequestConstants from "MessageRequestConstants" /* 12443 */;
import size from "module_2" /* 2 */;

const type = MessageRequestConstants.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = { type, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["66tnno"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["c/k4SW"]);
  const intl3 = util.intl;
  obj.cancelText = intl3.string(util.t["ETE/oC"]);
  const intl4 = util.intl;
  obj.confirmText = intl4.string(util.t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  obj.confirmColor = common_AlertDefault.Colors.BRAND;
  actions_AlertActionCreatorsDefault.show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  ({ onConfirm, onCancel, channel } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12447, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
// === Module 11939: MessageRequestModalActionCreators ===

// Module 11939 (MessageRequestModalActionCreators)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import common_AlertDefault from "common/Alert" /* 5300 */;
import MessageRequestConstants from "MessageRequestConstants" /* 11936 */;
import size from "module_2" /* 2 */;

const type = MessageRequestConstants.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  ({ channelId, onConfirm, onCancel } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, channel_id: channelId });
  const obj2 = { type, channel_id: channelId };
  const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null, isDismissable: false };
  const intl = util.intl;
  obj4.title = intl.string(util.t["66tnno"]);
  const intl2 = util.intl;
  obj4.body = intl2.string(util.t["c/k4SW"]);
  const intl3 = util.intl;
  obj4.cancelText = intl3.string(util.t["ETE/oC"]);
  const intl4 = util.intl;
  obj4.confirmText = intl4.string(util.t["cY+Oob"]);
  obj4.onConfirm = onConfirm;
  obj4.onCancel = onCancel;
  obj4.confirmColor = common_AlertDefault.Colors.BRAND;
  actions_AlertActionCreatorsDefault.show(obj4);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  ({ onConfirm, onCancel, channel } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11940, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
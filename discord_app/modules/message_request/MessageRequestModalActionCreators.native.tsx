// === Module 14004: MessageRequestModalActionCreators ===

// Module 14004 (MessageRequestModalActionCreators)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import common_AlertDefault from "common/Alert" /* 6030 */;
import MessageRequestConstants from "MessageRequestConstants" /* 14001 */;
import size from "module_2" /* 2 */;

const type = MessageRequestConstants.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export function openAcceptMessageRequestConfirmModal(arg0) {
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
}
export function onMarkAsNotSpamConfirmationModal(arg0) {
  ({ onConfirm, onCancel, channel } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14005, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
}
// === Module 11551: openAcceptMessageRequestConfirmModal ===

// Module 11551 (openAcceptMessageRequestConfirmModal)
import { MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL as closure_3 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = importDefault(698);
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["66tnno"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["c/k4SW"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl4.string(require(1236) /* getSystemLocale */.t["cY+Oob"]);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  obj[6] = importDefault(4622).Colors.BRAND;
  importDefault(4533).show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(11552, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
// === Module 12006: openAcceptMessageRequestConfirmModal ===

// Module 12006 (openAcceptMessageRequestConfirmModal)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import _modDef4745 from "module_4745" /* 4745 */;
import componentDidMountDefault from "componentDidMount" /* 4833 */;
import MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL" /* 12003 */;

let closure_3 = MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["66tnno"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["c/k4SW"]);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t["ETE/oC"]);
  const intl4 = getSystemLocale.intl;
  obj[3] = intl4.string(getSystemLocale.t["cY+Oob"]);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  obj[6] = componentDidMountDefault.Colors.BRAND;
  _modDef4745.show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  ({ onConfirm, onCancel, channel } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12007, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
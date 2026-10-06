// discord_app/modules/message_request/MessageRequestModalActionCreators.native.tsx
import Constants from "../../Constants.tsx";
import intl5 from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import AlertDefault from "../../components_native/common/Alert.tsx";
import MessageRequestConstants from "MessageRequestConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const type = MessageRequestConstants.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  const obj3 = {
    title: intl.string(intl5.t["66tnno"]),
    body: intl2.string(intl5.t["c/k4SW"]),
    cancelText: intl3.string(intl5.t["ETE/oC"]),
    confirmText: intl4.string(intl5.t["cY+Oob"]),
    onConfirm,
    onCancel,
    confirmColor: AlertDefault.Colors.BRAND,
    isDismissable: false,
  };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  show(obj3);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12104, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};

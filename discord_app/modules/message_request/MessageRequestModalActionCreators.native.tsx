// discord_app/modules/message_request/MessageRequestModalActionCreators.native.tsx
import { MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL as closure_3 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";
import { AlertActionCreators } from "../../actions/native/AlertActionCreators.tsx";
import { componentDidMount } from "../../components_native/common/Alert.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = require("expandEventProperties").fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = expandEventProperties;
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
  obj[6] = componentDidMount.Colors.BRAND;
  AlertActionCreators.show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(11868, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
// discord_app/modules/message_request/MessageRequestModalActionCreators.native.tsx
import { MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL as closure_3 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = require("../../utils/AnalyticsUtils.tsx");
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["66tnno"]);
  const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["c/k4SW"]);
  const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["ETE/oC"]);
  const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl4.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["cY+Oob"]);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  obj[6] = require("../../components_native/common/Alert.tsx").Colors.BRAND;
  require("../../actions/native/AlertActionCreators.tsx").show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  require("../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11720, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
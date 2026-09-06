// === Module 11680: ForwardModalUtils ===

// Module 11680 (ForwardModalUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10977 */;
import ForwardingAnalyticsUtils from "ForwardingAnalyticsUtils" /* 11681 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c5 = "forward-modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export const openForwardModal = function openForwardModal(arg0) {
  ({ message, source, initialSelectedDestinations } = arg0);
  if (initialSelectedDestinations === undefined) {
    initialSelectedDestinations = [];
  }
  ({ forwardOptions, customSendHandler } = arg0);
  ForwardingAnalyticsUtils.trackForwardStart(message.channel_id, message.id, source);
  showSearchableDestinationListModalDefault(asyncRequireImpl(11682, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
};
export const closeForwardModal = function closeForwardModal() {
  ModalActionCreatorsDefault.popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[7], paths.paths));
  useAlertStore.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
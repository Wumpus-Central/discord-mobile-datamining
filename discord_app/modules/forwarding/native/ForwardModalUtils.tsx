// === Module 13515: ForwardModalUtils ===

// Module 13515 (ForwardModalUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import useAlertStore from "useAlertStore" /* 6080 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import ForwardingAnalyticsUtils from "ForwardingAnalyticsUtils" /* 13516 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13517 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
let c5 = "forward-modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export function openForwardModal(arg0) {
  ({ message, source, initialSelectedDestinations } = arg0);
  if (initialSelectedDestinations === undefined) {
    initialSelectedDestinations = [];
  }
  ({ forwardOptions, customSendHandler } = arg0);
  ForwardingAnalyticsUtils.trackForwardStart(message.channel_id, message.id, source);
  showSearchableDestinationListModalDefault(asyncRequireImpl(13518, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
}
export function closeForwardModal() {
  ModalActionCreatorsDefault.popWithKey(c5);
}
export function showForwardFailedAlertModal(arg0) {
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[7], paths.paths));
  useAlertStore.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
}
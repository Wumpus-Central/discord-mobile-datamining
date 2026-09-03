// === Module 11491: FORWARD_MODAL_KEY ===

// Module 11491 (FORWARD_MODAL_KEY)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;
import useAlertStore from "useAlertStore" /* 4860 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10939 */;
import trackForwardStart from "trackForwardStart" /* 11492 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c5 = "forward-modal";
const result = require("set").fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export const openForwardModal = function openForwardModal(arg0) {
  ({ message, source, initialSelectedDestinations } = arg0);
  if (initialSelectedDestinations === undefined) {
    initialSelectedDestinations = [];
  }
  ({ forwardOptions, customSendHandler } = arg0);
  trackForwardStart.trackForwardStart(message.channel_id, message.id, source);
  const obj = trackForwardStart;
  showSearchableDestinationListModalDefault(asyncRequireImpl(11493, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
};
export const closeForwardModal = function closeForwardModal() {
  _modDef4724.popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[5])(paths[7], paths.paths));
  useAlertStore.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
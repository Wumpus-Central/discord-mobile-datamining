// discord_app/modules/forwarding/native/ForwardModalUtils.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c5 = "forward-modal";
const result = require("trackForwardStart").fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export const openForwardModal = function openForwardModal(arg0) {
  let customSendHandler;
  let forwardOptions;
  let initialSelectedDestinations;
  let message;
  let source;
  ({ message, source, initialSelectedDestinations } = arg0);
  if (initialSelectedDestinations === undefined) {
    initialSelectedDestinations = [];
  }
  ({ forwardOptions, customSendHandler } = arg0);
  require("../ForwardingAnalyticsUtils.tsx") /* trackForwardStart */.trackForwardStart(message.channel_id, message.id, source);
  const obj = require("../ForwardingAnalyticsUtils.tsx") /* trackForwardStart */;
  require("../../share/native/showSearchableDestinationListModal.tsx")(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10153, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
};
export const closeForwardModal = function closeForwardModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[5])(paths[7], paths.paths));
  require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
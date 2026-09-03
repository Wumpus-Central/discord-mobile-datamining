// discord_app/modules/forwarding/native/ForwardModalUtils.tsx
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../actions/ModalActionCreators.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import showSearchableDestinationListModalDefault from "../../share/native/showSearchableDestinationListModal.tsx";
import trackForwardStart from "../ForwardingAnalyticsUtils.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
  showSearchableDestinationListModalDefault(
    asyncRequireImpl(11493, dependencyMap.paths),
    { message, initialSelectedDestinations, forwardOptions, source, customSendHandler },
    c5,
  );
};
export const closeForwardModal = function closeForwardModal() {
  _modDef4724.popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[5])(paths[7], paths.paths));
  useAlertStore.openAlert(
    "forward-failed-alert-modal",
    <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />,
  );
};

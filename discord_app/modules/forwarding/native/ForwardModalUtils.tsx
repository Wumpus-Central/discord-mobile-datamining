// discord_app/modules/forwarding/native/ForwardModalUtils.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import showSearchableDestinationListModalDefault from "../../share/native/showSearchableDestinationListModal.tsx";
import ForwardingAnalyticsUtils from "../ForwardingAnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  showSearchableDestinationListModalDefault(
    asyncRequireImpl(11682, dependencyMap.paths),
    { message, initialSelectedDestinations, forwardOptions, source, customSendHandler },
    c5,
  );
};
export const closeForwardModal = function closeForwardModal() {
  ModalActionCreatorsDefault.popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[7], paths.paths));
  useAlertStore.openAlert(
    "forward-failed-alert-modal",
    <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />,
  );
};

// discord_app/modules/forwarding/native/ForwardModalUtils.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import showSearchableDestinationListModalDefault from "../../share/native/showSearchableDestinationListModal.tsx";
import ForwardingAnalyticsUtils from "../ForwardingAnalyticsUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const jsx = Fragment.jsx;
let c5 = "forward-modal";
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

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
  const obj = ForwardingAnalyticsUtils;
  obj.trackForwardStart(message.channel_id, message.id, source);
  const tmp2 = showSearchableDestinationListModalDefault;
  tmp2(
    asyncRequire(11321, dependencyMap.paths),
    { message, initialSelectedDestinations, forwardOptions, source, customSendHandler },
    c5,
  );
};
export const closeForwardModal = function closeForwardModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  let paths;
  ({ message, failedDestinations, forwardOptions } = arg0);
  react.lazy(() => require("asyncRequire")(paths[7], paths.paths));
  const obj = useAlertStore;
  obj.openAlert(
    "forward-failed-alert-modal",
    <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />,
  );
};

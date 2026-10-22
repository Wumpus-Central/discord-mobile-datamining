// === Module 11413: EmbeddedAppShimActionCreators ===

// Module 11413 (EmbeddedAppShimActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimActionCreators.tsx");

export const shimPipeOpened = function shimPipeOpened(pipeId, pipe) {
  DispatcherDefault.dispatch({ type: "EMBEDDED_APP_SHIM_PIPE_OPEN", iframeId: pipeId, pipe });
};
export const updateShimState = function updateShimState(iframeId, state) {
  DispatcherDefault.dispatch({ type: "EMBEDDED_APP_SHIM_STATE_UPDATE", iframeId, state });
};
export const disconnectShim = function disconnectShim(iframeId) {
  DispatcherDefault.dispatch({ type: "EMBEDDED_APP_SHIM_DISCONNECT", iframeId });
};
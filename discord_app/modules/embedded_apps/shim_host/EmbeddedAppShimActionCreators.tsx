// discord_app/modules/embedded_apps/shim_host/EmbeddedAppShimActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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

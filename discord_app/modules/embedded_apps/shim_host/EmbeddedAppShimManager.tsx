// discord_app/modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function getParentState(iframeId) {
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null != frameByIframeId) {
    const obj = { muted: frameByIframeId.data.muted };
    let tmp2 = obj;
  } else {
    tmp2 = closure_5;
  }
  return tmp2;
}
function handleShimPipeOpen(iframeId) {
  iframeId = iframeId.iframeId;
  value = map.get(iframeId);
  if (null != value) {
    value.offer(iframeId.pipe);
  } else {
    let onChildState = FramesStore.getFrameByIframeId(iframeId);
    if (null != onChildState) {
      const obj2 = { muted: onChildState.data.muted };
      let tmp = obj2;
    } else {
      tmp = closure_5;
    }
    const obj3 = { onChildState: null, onDisconnect: null };
    onChildState = function onChildState(state) {
      return EmbeddedAppShimActionCreators.updateShimState(iframeId, state);
    };
    obj3.onChildState = onChildState;
    obj3.onDisconnect = function onDisconnect() {
      return EmbeddedAppShimActionCreators.disconnectShim(iframeId);
    };
    const embeddedAppShimHost = iframeId(18747).createEmbeddedAppShimHost(tmp, obj3);
    const result = map.set(iframeId, embeddedAppShimHost);
    const obj5 = iframeId(18747);
  }
}
function handleIFrameUnmount(id) {
  id = id.id;
  value = map.get(id);
  if (null != value) {
    map.delete(id);
    value.close();
  }
}
function updateParentStates() {
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, obj] = tmp5;
    if (null != FramesStore.getFrameByIframeId(tmp6)) {
      let setParentStateResult = obj.setParentState(getParentState(tmp6));
    }
    continue;
  }
  tmp2 = map[Symbol.iterator]();
}
const ComponentActions = fn(1087).ComponentActions;
let closure_5 = { muted: false };
const map = new Map();
class EmbeddedAppShimManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { EMBEDDED_APP_SHIM_PIPE_OPEN: handleShimPipeOpen };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, updateParentStates);
    return applyArgumentsResult;
  }
}
const prototype = EmbeddedAppShimManager.prototype;
prototype["_initialize"] = function _initialize() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  const subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
};
prototype["_terminate"] = function _terminate() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.unsubscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
  const values = map.values();
  for (const item10017 of values) {
    let closeResult = item10017.close();
    continue;
  }
  map.clear();
};
const embeddedAppShimManager = new EmbeddedAppShimManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx");

export default embeddedAppShimManager;

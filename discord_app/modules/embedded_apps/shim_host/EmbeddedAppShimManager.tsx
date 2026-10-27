// === Module 18828: EmbeddedAppShimManager ===

// Module 18828 (EmbeddedAppShimManager)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators" /* 11471 */;
import protocol from "protocol" /* 18829 */;
import _slicedToArray from "module_32" /* 32 */;
import FramesStore from "FramesStore" /* 6776 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;

require = fn;
function createParentStateMessage(iframeId) {
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null == frameByIframeId) {
    value = map1.get(iframeId);
    if (value == null) {
      value = closure_5;
    }
    let obj = value;
  } else {
    obj = { muted: frameByIframeId.data.muted };
  }
  const result = map1.set(iframeId, obj);
  return { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
}
function handleShimPipeOpen(iframeId) {
  iframeId = iframeId.iframeId;
  value = map.get(iframeId);
  if (null != value) {
    value.offer(iframeId.pipe);
  } else {
    let obj2 = {
      onConnect(dispatch) {
          const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
          if (null == frameByIframeId) {
            value = map1.get(iframeId);
            if (value == null) {
              value = closure_5;
            }
            let obj = value;
          } else {
            obj = { muted: frameByIframeId.data.muted };
          }
          const result = map1.set(iframeId, obj);
          dispatch.dispatch({ type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj });
          const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
        },
      onMessage(type) {
          if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
            EmbeddedAppShimActionCreators.updateShimState(iframeId, type.state);
            const tmp2Result = EmbeddedAppShimActionCreators;
          } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
            EmbeddedAppShimActionCreators.disconnectShim(iframeId);
            const tmp2Result2 = EmbeddedAppShimActionCreators;
          }
        }
    };
    const embeddedAppShimHost = iframeId(18832).createEmbeddedAppShimHost(obj2);
    let result = map.set(iframeId, embeddedAppShimHost);
    let frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
    if (null == frameByIframeId) {
      value2 = map1.get(iframeId);
      if (value2 == null) {
        value2 = closure_5;
      }
      let obj3 = value2;
    } else {
      obj3 = { muted: frameByIframeId.data.muted };
    }
    const result1 = map1.set(iframeId, obj3);
    const obj4 = iframeId(18832);
  }
}
function handleIFrameUnmount(id) {
  id = id.id;
  value = map.get(id);
  if (null != value) {
    map.delete(id);
    map1.delete(id);
    value.close();
  }
}
function updateParentStates() {
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let obj = tmp5[1];
    let dispatchResult = obj.dispatch(createParentStateMessage(tmp5[0]));
    continue;
  }
  tmp2 = map[Symbol.iterator]();
}
const ComponentActions = fn(1084).ComponentActions;
let closure_5 = { muted: false };
const map = new Map();
const map1 = new Map();
class EmbeddedAppShimManager extends tmp4 {
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
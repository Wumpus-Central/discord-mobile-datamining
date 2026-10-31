// discord_app/modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators.tsx";
import protocol from "../../../../discord_common/js/packages/embedded-app-shims/src/shared/protocol.tsx";
import embeddedAppShimKeybindsDefault from "embeddedAppShimKeybinds.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function createParentStateMessage(iframeId) {
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null == frameByIframeId) {
    value = map1.get(iframeId);
    if (value == null) {
      value = closure_6;
    }
    let obj = value;
  } else {
    obj = { muted: frameByIframeId.data.muted };
  }
  const result = map1.set(iframeId, obj);
  return { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
}
function createKeybindsMessage() {
  const obj = {
    type: protocol.ParentToChildEvent.KEYBINDS_UPDATED,
    keybinds: embeddedAppShimKeybindsDefault.getKeybinds(),
  };
  return obj;
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
            value = closure_6;
          }
          let obj = value;
        } else {
          obj = { muted: frameByIframeId.data.muted };
        }
        const result = map1.set(iframeId, obj);
        dispatch.dispatch({ type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj });
        const obj3 = { type: protocol.ParentToChildEvent.KEYBINDS_UPDATED, keybinds: null };
        const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
        obj3.keybinds = embeddedAppShimKeybindsDefault.getKeybinds();
        dispatch.dispatch(obj3);
      },
      onMessage(type) {
        if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
          EmbeddedAppShimActionCreators.updateShimState(iframeId, type.state);
          const tmp2Result = EmbeddedAppShimActionCreators;
        } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
          embeddedAppShimKeybindsDefault.releaseHeldKeys(iframeId);
          EmbeddedAppShimActionCreators.disconnectShim(iframeId);
          const tmp2Result2 = EmbeddedAppShimActionCreators;
        } else if (type.type === protocol.ChildToParentEvent.KEYBIND_CAPTURED) {
          const result = embeddedAppShimKeybindsDefault.replayCapturedKeybind(iframeId, type.keybind);
        }
      },
    };
    const embeddedAppShimHost = iframeId(19440).createEmbeddedAppShimHost(obj2);
    let result = map.set(iframeId, embeddedAppShimHost);
    let frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
    if (null == frameByIframeId) {
      value2 = map1.get(iframeId);
      if (value2 == null) {
        value2 = closure_6;
      }
      let obj3 = value2;
    } else {
      obj3 = { muted: frameByIframeId.data.muted };
    }
    const result1 = map1.set(iframeId, obj3);
    let obj4 = iframeId(19440);
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
function updateKeybinds() {
  const values = map.values();
  for (const item10010 of values) {
    let dispatchResult = item10010.dispatch(tmp);
    continue;
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
const ComponentActions = fn(1072).ComponentActions;
let closure_6 = { muted: false };
const map = new Map();
const map1 = new Map();
class EmbeddedAppShimManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { EMBEDDED_APP_SHIM_PIPE_OPEN: handleShimPipeOpen };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_4, updateParentStates);
    applyArgumentsResult._unsubscribeKeybinds = null;
    return applyArgumentsResult;
  }
}
const prototype = EmbeddedAppShimManager.prototype;
prototype["_initialize"] = function _initialize() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  const subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
  this._unsubscribeKeybinds = embeddedAppShimKeybindsDefault.subscribe(updateKeybinds);
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.unsubscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
  const _unsubscribeKeybinds = this._unsubscribeKeybinds;
  if (_unsubscribeKeybinds != null) {
    _unsubscribeKeybinds();
  }
  self._unsubscribeKeybinds = null;
  const values = map.values();
  for (const item10021 of values) {
    let closeResult = item10021.close();
    continue;
  }
  map.clear();
};
const embeddedAppShimManager = new EmbeddedAppShimManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx");

export default embeddedAppShimManager;

// discord_app/modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators.tsx";
import protocol from "../../../../discord_common/js/packages/embedded-app-shims/src/shared/protocol.tsx";
import embeddedAppShimKeybindsDefault from "embeddedAppShimKeybinds.native.tsx";
import parseLaunchTimingsDefault from "parseLaunchTimings.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function sendParentState(iframeId) {
  iframeId = iframeId.iframeId;
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null != frameByIframeId) {
    const obj = { muted: frameByIframeId.data.muted };
    let tmp4 = obj;
  } else {
    value = map.get(iframeId);
    tmp4 = null != value ? value.parentState : closure_5;
  }
  iframeId.parentState = tmp4;
  const host = iframeId.host;
  host.dispatch({ type: protocol.ParentToChildEvent.STATE_UPDATED, state: iframeId.parentState });
  const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: iframeId.parentState };
}
function createKeybindsMessage() {
  const obj = {
    type: protocol.ParentToChildEvent.KEYBINDS_UPDATED,
    keybinds: embeddedAppShimKeybindsDefault.getKeybinds(),
  };
  return obj;
}
function cancelUnansweredLaunchTimingsRequests(launchTimingsRequests) {
  launchTimingsRequests = launchTimingsRequests.launchTimingsRequests;
  items = [...launchTimingsRequests.values()];
  const launchTimingsRequests2 = launchTimingsRequests.launchTimingsRequests;
  launchTimingsRequests2.clear();
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp2 = iter.next()(null);
    continue;
  }
}
function handleShimPipeOpen(iframeId) {
  iframeId = iframeId.iframeId;
  value = map.get(iframeId);
  if (null != value) {
    let host = value.host;
    host.offer(iframeId.pipe);
  } else {
    let obj2 = { iframeId, host: null, parentState: null, connected: false, launchTimingsRequests: null };
    let obj3 = {
      onConnect() {
        obj2.connected = true;
        cancelUnansweredLaunchTimingsRequests(obj2);
        const iframeId = obj2.iframeId;
        const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
        if (null != frameByIframeId) {
          const obj = { muted: frameByIframeId.data.muted };
          let tmp6 = obj;
        } else {
          value = map.get(iframeId);
          tmp6 = null != value ? value.parentState : closure_5;
        }
        obj2.parentState = tmp6;
        const host = tmp.host;
        obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj2.parentState };
        host.dispatch(obj2);
        const host2 = tmp.host;
        const obj3 = {
          type: protocol.ParentToChildEvent.KEYBINDS_UPDATED,
          keybinds: embeddedAppShimKeybindsDefault.getKeybinds(),
        };
        host2.dispatch(obj3);
        EmbeddedAppShimActionCreators.shimConnected(obj2.iframeId);
      },
      onMessage(type) {
        if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
          EmbeddedAppShimActionCreators.updateShimState(tmp.iframeId, type.state);
          const tmp2Result = EmbeddedAppShimActionCreators;
        } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
          tmp.connected = false;
          cancelUnansweredLaunchTimingsRequests(tmp);
          obj2 = embeddedAppShimKeybindsDefault;
          obj2.releaseHeldKeys(tmp.iframeId);
          EmbeddedAppShimActionCreators.disconnectShim(tmp.iframeId);
          const tmp2Result2 = EmbeddedAppShimActionCreators;
        } else if (type.type === protocol.ChildToParentEvent.KEYBIND_CAPTURED) {
          const result = embeddedAppShimKeybindsDefault.replayCapturedKeybind(tmp.iframeId, type.keybind);
        } else if (type.type === protocol.ChildToParentEvent.LAUNCH_TIMINGS_RESPONSE) {
          const launchTimingsRequests = tmp.launchTimingsRequests;
          value = launchTimingsRequests.get(type.nonce);
          const launchTimingsRequests2 = tmp.launchTimingsRequests;
          launchTimingsRequests2.delete(type.nonce);
          if (null != value) {
            value(parseLaunchTimingsDefault(type.timingsJson));
          }
        }
      },
    };
    obj2.host = obj2(19721).createEmbeddedAppShimHost(obj3);
    let muted = FramesStore.getFrameByIframeId(iframeId);
    if (null != muted) {
      let obj5 = { muted: null };
      muted = muted.data.muted;
      obj5.muted = muted;
      let tmp3 = obj5;
    } else {
      const value2 = obj.get(iframeId);
      tmp3 = null != value2 ? value2.parentState : closure_5;
    }
    obj2.parentState = tmp3;
    const _Map = Map;
    map = new Map();
    obj2.launchTimingsRequests = map;
    let result = obj.set(iframeId, obj2);
    let obj4 = obj2(19721);
  }
}
function handleIFrameUnmount(id) {
  id = id.id;
  value = map.get(id);
  if (null != value) {
    map.delete(id);
    const host = value.host;
    host.close();
  }
}
function updateKeybinds() {
  const values = map.values();
  for (const item10010 of values) {
    let host = item10010.host;
    let dispatchResult = host.dispatch(tmp);
    continue;
  }
}
function updateParentStates() {
  const values = map.values();
  while (tmp2 !== undefined) {
    let tmp5 = sendParentState(tmp3);
    continue;
  }
  tmp2 = values[Symbol.iterator]();
}
const ComponentActions = fn(1071).ComponentActions;
let closure_5 = { muted: false };
let map = new Map();
let c7 = 0;
class EmbeddedAppShimManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { EMBEDDED_APP_SHIM_PIPE_OPEN: handleShimPipeOpen };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, updateParentStates);
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
    let host = item10021.host;
    let closeResult = host.close();
    continue;
  }
  map.clear();
};
const embeddedAppShimManager = new EmbeddedAppShimManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx");

export default embeddedAppShimManager;
export function requestShimLaunchTimings(arg0, markPrefixes) {
  value = map.get(arg0);
  importDefault = value;
  if (null != value) {
    if (value.connected) {
      const _String = String;
      const nonce = String(closure_7);
      closure_7 = closure_7 + 1;
      const promise = new Promise((arg0) => {
        const launchTimingsRequests = value.launchTimingsRequests;
        const result = launchTimingsRequests.set(nonce, arg0);
        const host = value.host;
        host.dispatch({ type: protocol.ParentToChildEvent.LAUNCH_TIMINGS_REQUEST, nonce, markPrefixes });
      });
      return promise;
    }
  }
  return Promise.resolve(null);
}

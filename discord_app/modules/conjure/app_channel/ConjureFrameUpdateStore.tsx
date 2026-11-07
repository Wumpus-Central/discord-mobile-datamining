// === Module 19015: ConjureFrameUpdateStore ===

// Module 19015 (ConjureFrameUpdateStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import FramesStore from "FramesStore" /* 6901 */;

const require = globalThis.__r;

const require = fn;
const map = new Map();
const set = new Set();
const Store = initializeDefault.Store;
class ConjureFrameUpdateStore extends Store {
}
const prototype = ConjureFrameUpdateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FramesStore);
};
prototype["isUpdateAvailable"] = function isUpdateAvailable(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
const conjureFrameUpdateStore = new ConjureFrameUpdateStore(DispatcherDefault, {
  APPLICATION_FRAME_UPDATE: function handleFrameUpdate(updatedAt) {
    updatedAt = updatedAt.updatedAt;
    let num = NaN;
    if (null != updatedAt) {
      const _Date = Date;
      num = Date.parse(updatedAt);
    }
    let flag = false;
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let id = nextResult.id;
      if (nextResult.applicationId === tmp) {
        if (!set.has(id)) {
          value = map.get(id);
          let tmp10 = null != value;
          let tmp9 = value;
          if (tmp10) {
            let _Number = Number;
            tmp10 = !Number.isNaN(num);
          }
          if (tmp10) {
            tmp10 = tmp9 >= num;
          }
          if (!tmp10) {
            let addResult = set.add(id);
            flag = true;
          }
        }
      }
      continue;
    }
    return flag;
  },
  FRAME_LAUNCH: function handleFrameLaunch(frameId) {
    frameId = frameId.frameId;
    const result = map.set(frameId, Date.now());
    return set.delete(frameId);
  },
  FRAME_STOP: function handleFrameStop(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    return set.delete(frameId);
  },
  FRAME_UPDATE_PROXY_TICKET: function handleProxyTicketUpdate(frameId) {
    frameId = frameId.frameId;
    const result = map.set(frameId, Date.now());
    return set.delete(frameId);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/ConjureFrameUpdateStore.tsx");

export default conjureFrameUpdateStore;
export function useConjureFrameUpdateAvailable(arg0) {
  _require = arg0;
  items = [conjureFrameUpdateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => conjureFrameUpdateStore.isUpdateAvailable(closure_0), items1);
}
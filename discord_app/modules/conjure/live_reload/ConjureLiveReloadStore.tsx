// discord_app/modules/conjure/live_reload/ConjureLiveReloadStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureLiveReloadStore extends Store {
  getLiveReload(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureLiveReloadStore.prototype;
let obj = {
  CONJURE_LIVE_RELOAD_SET: function handleLiveReloadSet(enabled) {
    const obj = { enabled: enabled.enabled, error: enabled.error, phase: enabled.phase, step: enabled.step };
    const result = map.set(enabled.projectId, obj);
  },
};
const conjureLiveReloadStore = new ConjureLiveReloadStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/live_reload/ConjureLiveReloadStore.tsx");

export default conjureLiveReloadStore;

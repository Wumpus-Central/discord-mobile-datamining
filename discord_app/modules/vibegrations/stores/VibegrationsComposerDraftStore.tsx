// === Module 16755: VibegrationsComposerDraftStore ===

// Module 16755 (VibegrationsComposerDraftStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;
import apply from "module_12" /* 12 */;

require = fn;
function readStoredDrafts() {
  const Storage = Storage2.Storage;
  let obj = Storage.get(VibegrationsComposerDrafts);
  if (obj == null) {
    obj = {};
  }
  return obj;
}
const VibegrationsComposerDrafts = "VibegrationsComposerDrafts";
const map = new Map();
let closure_6 = apply.throttle(() => {
  if (0 !== map.size) {
    const tmp22 = readStoredDrafts();
    const tmp24 = map[Symbol.iterator]();
    while (tmp24 !== undefined) {
      let tmp8 = _slicedToArray(tmp5, 2);
      [tmp9, tmp10] = tmp8;
      if ("" === tmp10) {
        delete tmp[tmp2];
      } else {
        tmp22[tmp9] = tmp11;
      }
      continue;
    }
    map.clear();
    const Storage = Storage2.Storage;
    const result = Storage.set(VibegrationsComposerDrafts, tmp22);
  }
}, 1000);
const Store = initializeDefault.Store;
class VibegrationsComposerDraftStore extends Store {
}
VibegrationsComposerDraftStore.prototype["getDraft"] = function getDraft(arg0) {
  value = map.get(arg0);
  if (null == value) {
    const Storage = Storage2.Storage;
    value2 = Storage.get(VibegrationsComposerDrafts);
    if (value2 == null) {
      value2 = {};
    }
    let str = value2[arg0];
    if (str == null) {
      str = "";
    }
    value = str;
  }
  return value;
};
const vibegrationsComposerDraftStore = new VibegrationsComposerDraftStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    map.clear();
    closure_6.cancel();
    const Storage = Storage2.Storage;
    Storage.remove(VibegrationsComposerDrafts);
    return false;
  },
  VIBEGRATIONS_COMPOSER_DRAFT_SET: function handleDraftSet(draft) {
    draft = draft.draft;
    const result = map.set(draft.projectId, draft);
    closure_6();
    if ("" === draft) {
      closure_6.flush();
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsComposerDraftStore.tsx");

export default vibegrationsComposerDraftStore;
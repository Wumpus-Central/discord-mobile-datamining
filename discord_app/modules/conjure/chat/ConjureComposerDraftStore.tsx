// discord_app/modules/conjure/chat/ConjureComposerDraftStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

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
let closure_6 = module_12.throttle(() => {
  let tmp7;
  let tmp8;
  if (0 !== map.size) {
    const tmp19 = readStoredDrafts();
    const tmp21 = map[Symbol.iterator]();
    while (tmp21 !== undefined) {
      let tmp6 = _slicedToArray(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      if ("" === tmp8) {
        delete tmp19[tmp7];
      } else {
        tmp19[tmp7] = tmp9;
      }
      continue;
    }
    map.clear();
    const Storage = Storage2.Storage;
    const result = Storage.set(VibegrationsComposerDrafts, tmp19);
  }
}, 1000);
const Store = get_initializedDefault.Store;
class ConjureComposerDraftStore extends Store {
  getDraft(arg0) {
    let value = map.get(arg0);
    if (null == value) {
      const Storage = Storage2.Storage;
      let value2 = Storage.get(VibegrationsComposerDrafts);
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
  }
}
const prototype = ConjureComposerDraftStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    map.clear();
    closure_6.cancel();
    const Storage = Storage2.Storage;
    Storage.remove(VibegrationsComposerDrafts);
    return false;
  },
  CONJURE_COMPOSER_DRAFT_SET: function handleDraftSet(draft) {
    draft = draft.draft;
    const result = map.set(draft.projectId, draft);
    closure_6();
    if ("" === draft) {
      closure_6.flush();
    }
    return false;
  }
};
const conjureComposerDraftStore = new ConjureComposerDraftStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureComposerDraftStore.tsx");

export default conjureComposerDraftStore;
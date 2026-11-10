// === Module 11062: ConjureGameCapturesStore ===

// Module 11062 (ConjureGameCapturesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

let closure_0 = [];
const map = new Map();
const Store = initializeDefault.Store;
class ConjureGameCapturesStore extends Store {
}
const prototype = ConjureGameCapturesStore.prototype;
prototype["getCaptures"] = function getCaptures(arg0) {
  value = map.get(arg0);
  let captures;
  if (value != null) {
    captures = value.captures;
  }
  if (captures == null) {
    captures = closure_0;
  }
  return captures;
};
prototype["getSelectedCapture"] = function getSelectedCapture(id) {
  value = map.get(id);
  let tmp2 = null;
  if (null != value) {
    tmp2 = null;
    if (0 !== value.captures.length) {
      tmp2 = null;
      if (null !== value.selectedId) {
        const captures = value.captures;
        let found = captures.find((id) => id.id === value.selectedId);
        if (found == null) {
          found = value.captures[0];
        }
        tmp2 = found;
      }
    }
  }
  return tmp2;
};
const conjureGameCapturesStore = new ConjureGameCapturesStore(DispatcherDefault, {
  CONJURE_GAME_CAPTURES_SET: function handleCapturesSet(captures) {
    ({ projectId, selectedId } = captures);
    const obj2 = { captures: captures.captures, selectedId: null };
    if (selectedId == null) {
      value = map.get(projectId);
      let selectedId1;
      if (value != null) {
        selectedId1 = value.selectedId;
      }
      selectedId = selectedId1;
    }
    obj2.selectedId = selectedId;
    const result = map.set(projectId, obj2);
  },
  CONJURE_GAME_CAPTURE_SELECT: function handleCaptureSelect(projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const obj2 = {};
      const merged = Object.assign(value);
      obj2.selectedId = projectId.captureId;
      const result = map.set(projectId, obj2);
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/ConjureGameCapturesStore.tsx");

export default conjureGameCapturesStore;
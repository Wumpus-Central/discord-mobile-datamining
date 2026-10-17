// === Module 12157: ConjureStoredAttachmentStore ===

// Module 12157 (ConjureStoredAttachmentStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

let closure_0 = new Map();
let map1 = new Map();
const set = new Set();
const Store = initializeDefault.Store;
class ConjureStoredAttachmentStore extends Store {
}
const prototype = ConjureStoredAttachmentStore.prototype;
prototype["getAttachments"] = function getAttachments(arg0) {
  return closure_0.get(arg0);
};
prototype["getAttachment"] = function getAttachment(arg0) {
  return map1.get(arg0);
};
prototype["wasLookedUp"] = function wasLookedUp(attachmentId) {
  return set.has(attachmentId);
};
const conjureStoredAttachmentStore = new ConjureStoredAttachmentStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    closure_0 = new Map();
    map1 = new Map();
    set.clear();
  },
  CONJURE_STORED_ATTACHMENTS_FETCHED: function handleFetched(attachments) {
    attachments = attachments.attachments;
    closure_0 = new Map(closure_0).set(attachments.projectId, attachments);
    map1 = new Map(map1);
    for (const item10022 of attachments) {
      let result = map1.set(item10022.id, item10022);
      continue;
    }
  },
  CONJURE_STORED_ATTACHMENT_LOOKUP: function handleLookup(attachmentId) {
    set.add(attachmentId.attachmentId);
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureStoredAttachmentStore.tsx");

export default conjureStoredAttachmentStore;
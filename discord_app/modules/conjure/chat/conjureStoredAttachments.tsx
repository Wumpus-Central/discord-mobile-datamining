// === Module 12486: conjureStoredAttachments ===

// Module 12486 (conjureStoredAttachments)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12488 */;
import noop from "module_19" /* 19 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12487 */;

const require = globalThis.__r;

require = fn;
let closure_5 = [];
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureStoredAttachments.tsx");

export function fetchConjureStoredAttachments(projectId) {
  _require = projectId;
  if (!set.has(projectId)) {
    set.add(projectId);
    const result = require("conjureAttachmentRequests").listStoredAttachments(projectId);
    const obj2 = require("conjureAttachmentRequests");
    const nextPromise = result.then((result) => {
      const obj2 = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: null };
      const items = [...result];
      obj2.attachments = items.reverse();
      closure_1(closure_2[3]).dispatch(obj2);
    });
    result.then((result) => {
      const obj2 = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: null };
      const items = [...result];
      obj2.attachments = items.reverse();
      closure_1(closure_2[3]).dispatch(obj2);
    }).catch(() => {

    }).finally(() => set.delete(closure_0));
    const catchPromise = result.then((result) => {
      const obj2 = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: null };
      const items = [...result];
      obj2.attachments = items.reverse();
      closure_1(closure_2[3]).dispatch(obj2);
    }).catch(() => {

    });
  }
}
export function useConjureStoredAttachments(projectId) {
  _require = projectId;
  const items = [ConjureStoredAttachmentStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => {
    let attachments = ConjureStoredAttachmentStore.getAttachments(closure_0);
    if (attachments == null) {
      attachments = closure_5;
    }
    return attachments;
  }, items1);
}
export function useConjureStoredAttachment(context, attachmentId) {
  _require = context;
  let items = [ConjureStoredAttachmentStore];
  const items1 = [attachmentId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureStoredAttachmentStore.getAttachment(closure_1), items1);
  dependencyMap = tmp2;
  const items2 = [null == stateFromStores, context, attachmentId];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = null != projectId;
    }
    if (tmp) {
      tmp = !ConjureStoredAttachmentStore.wasLookedUp(attachmentId);
    }
    if (tmp) {
      let obj2 = { type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId };
      DispatcherDefault.dispatch(obj2);
      if (!set.has(projectId)) {
        set.add(projectId);
        const result = conjureAttachmentRequests.listStoredAttachments(projectId);
        const nextPromise = result.then((result) => {
          const obj2 = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: null };
          const items = [...result];
          obj2.attachments = items.reverse();
          closure_1(closure_2[3]).dispatch(obj2);
        });
        result.then((result) => {
          const obj2 = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: null };
          const items = [...result];
          obj2.attachments = items.reverse();
          closure_1(closure_2[3]).dispatch(obj2);
        }).catch(() => {

        }).finally(() => set.delete(closure_0));
        const catchPromise = result.then((result) => {
          const obj2 = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: null };
          const items = [...result];
          obj2.attachments = items.reverse();
          closure_1(closure_2[3]).dispatch(obj2);
        }).catch(() => {

        });
      }
    }
  }, items2);
  return stateFromStores;
}
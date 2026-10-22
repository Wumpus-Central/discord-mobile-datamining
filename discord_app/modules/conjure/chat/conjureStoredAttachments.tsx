// === Module 11767: conjureStoredAttachments ===

// Module 11767 (conjureStoredAttachments)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 11713 */;
import noop from "module_19" /* 19 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 11768 */;

const require = globalThis.__r;

require = fn;
let closure_5 = [];
const set = new Set();
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStoredAttachments(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureStoredAttachmentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let attachments = ConjureStoredAttachmentStore.getAttachments(closure_0);
      if (attachments == null) {
        attachments = closure_5;
      }
      return attachments;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureStoredAttachments(arg0) {
  _require = arg0;
  const items = [ConjureStoredAttachmentStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let attachments = ConjureStoredAttachmentStore.getAttachments(closure_0);
    if (attachments == null) {
      attachments = closure_5;
    }
    return attachments;
  }, items1);
});
function fetchConjureStoredAttachments(projectId) {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureStoredAttachments.tsx");

export { fetchConjureStoredAttachments };
export const useConjureStoredAttachments = tmp3;
export const useConjureStoredAttachment = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStoredAttachment(arg0, attachmentId) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureStoredAttachmentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== attachmentId) {
    const fn = function u() {
      return ConjureStoredAttachmentStore.getAttachment(closure_1);
    };
    const items1 = [attachmentId];
    cResult[1] = attachmentId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  dependencyMap = tmp9;
  if (cResult[4] === attachmentId) {
    if (cResult[5] === tmp9) {
      if (cResult[6] === arg0) {
        let tmp10 = cResult[7];
        let tmp11 = cResult[8];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      return stateFromStores;
    }
  }
  const fn2 = function l() {
    let tmp = closure_2;
    if (closure_2) {
      tmp = null != closure_0;
    }
    if (tmp) {
      tmp = !ConjureStoredAttachmentStore.wasLookedUp(attachmentId);
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId };
      DispatcherDefault.dispatch(obj2);
      if (!set.has(closure_0)) {
        set.add(closure_0);
        const result = conjureAttachmentRequests.listStoredAttachments(closure_0);
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
  };
  const items2 = [null == stateFromStores, arg0, attachmentId];
  cResult[4] = attachmentId;
  cResult[5] = null == stateFromStores;
  cResult[6] = arg0;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp11 = items2;
  tmp10 = fn2;
  const tmpResult = require("initialize");
}) : (function useConjureStoredAttachment(arg0, attachmentId) {
  _require = arg0;
  let items = [ConjureStoredAttachmentStore];
  const items1 = [attachmentId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureStoredAttachmentStore.getAttachment(closure_1), items1);
  dependencyMap = tmp2;
  const items2 = [null == stateFromStores, arg0, attachmentId];
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
});
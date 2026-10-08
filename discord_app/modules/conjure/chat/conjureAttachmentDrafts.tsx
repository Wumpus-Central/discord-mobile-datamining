// === Module 17019: conjureAttachmentDrafts ===

// Module 17019 (conjureAttachmentDrafts)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureTypes from "ConjureTypes" /* 6933 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import Dispatcher_mod from "Dispatcher" /* 584 */;

const require = globalThis.__r;

require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
function getConjureAttachmentDrafts(projectId, chat) {
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_9;
  }
  return tmp2;
}
function setDrafts(projectId, chat, items) {
  const draftsByProject = zustandStore.getState().draftsByProject;
  const obj = { draftsByProject: null };
  const obj2 = {};
  const merged = Object.assign(draftsByProject);
  const obj3 = {};
  const merged1 = Object.assign(draftsByProject[projectId]);
  obj3[chat] = items;
  obj2[projectId] = obj3;
  obj.draftsByProject = obj2;
  zustandStore.setState(obj);
}
function discardDraft(projectId, item10010) {
  if (null != item10010.previewUrl) {
    const _URL = URL;
    URL.revokeObjectURL(item10010.previewUrl);
  }
  if (null != item10010.ref) {
    hasOwnProperty(projectId, item10010.ref.id).catch(() => {

    });
    const promise = hasOwnProperty(projectId, item10010.ref.id);
  }
}
function discardProject(projectId, arg1) {
  const draftsByProject = zustandStore.getState().draftsByProject;
  if (null != draftsByProject[projectId]) {
    const _Object = Object;
    const values = Object.values(tmp2);
    const iter = values[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult == null) {
        nextResult = closure_9;
      }
      for (const item10017 of nextResult) {
        if (tmp) {
          let tmp14 = discardDraft(arg0, item10017);
        } else if (null != item10017.previewUrl) {
          let _URL = URL;
          let revokeObjectURLResult = URL.revokeObjectURL(item10017.previewUrl);
        }
        continue;
      }
      continue;
    }
    const items = [projectId];
    const obj = { draftsByProject: _objectWithoutProperties(draftsByProject, items.map(_toPropertyKey)) };
    zustandStore.setState(obj);
  }
}
function takeConjureAttachmentRefs(projectId, chat) {
  const arr = getConjureAttachmentDrafts(projectId, chat);
  if (0 === arr.length) {
    return [];
  } else {
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.previewUrl) {
        let _URL = URL;
        let revokeObjectURLResult = URL.revokeObjectURL(tmp7.previewUrl);
      }
      continue;
    }
    setDrafts(projectId, chat, closure_9);
    return arr.flatMap((ref) => {
      if (null != ref.ref) {
        const items = [ref.ref];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    });
  }
}
let closure_3 = ["converted"];
const ConjureConnectionStore = fn(13072);
({ deleteStagedAttachment: hasOwnProperty, sendUserMessage: metroRequire, uploadAttachmentBytes: closure_7 } = ConjureConnectionStore);
let closure_9 = [];
let c10 = 1;
const zustandStore = fn(4949).createZustandStore(() => ({ draftsByProject: {} }));
const ReactCompilerGating = fn(558);
function conjureAttachmentTooLargeText(contentType) {
  const intl = util.intl;
  const obj = { size: null };
  const obj2 = ConjureTypes;
  obj.size = obj2.formatConjureAttachmentLimit(ConjureTypes.conjureAttachmentLimit(contentType));
  return intl.formatToPlainString(_modDef3827.JZ59Bo, obj);
}
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  const keys = Object.keys(zustandStore.getState().draftsByProject);
  while (tmp2 !== undefined) {
    let tmp5 = discardProject(tmp3, { deleteFromWorker: true });
    continue;
  }
  tmp2 = keys[Symbol.iterator]();
});
let Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (projectId) => {
  discardProject(projectId.projectId, { deleteFromWorker: false });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureAttachmentDrafts.tsx");

export const ConjureAttachmentDraftStore = zustandStore;
export { getConjureAttachmentDrafts };
export { conjureAttachmentTooLargeText };
export const uploadConjureAttachment = function uploadConjureAttachment(arg0, size, name, contentType) {
  if (obj.isConjureAttachmentWithinLimit(size.size, contentType)) {
    let resolved = React5(arg0, size, name, contentType);
  } else {
    const obj2 = { errorText: null };
    const intl = util.intl;
    const obj3 = { size: null };
    const tmpResult = ConjureTypes;
    obj3.size = tmpResult.formatConjureAttachmentLimit(ConjureTypes.conjureAttachmentLimit(contentType));
    obj2.errorText = intl.formatToPlainString(_modDef3827.JZ59Bo, obj3);
    resolved = Promise.resolve(obj2);
    const tmpResult2 = ConjureTypes;
  }
  return resolved;
};
export const useConjureAttachmentDraftList = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAttachmentDraftList(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    return zustandStore.useState(tmp2);
  }
  const fn = function r(arg0) {
    let tmp2;
    if (arg0.draftsByProject[closure_0] != null) {
      tmp2 = tmp[closure_1];
    }
    if (tmp2 == null) {
      tmp2 = closure_9;
    }
    return tmp2;
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
  const obj = require("c");
}) : (function useConjureAttachmentDraftList(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return zustandStore.useState((arg0) => {
    let tmp2;
    if (arg0.draftsByProject[closure_0] != null) {
      tmp2 = tmp[closure_1];
    }
    if (tmp2 == null) {
      tmp2 = closure_9;
    }
    return tmp2;
  });
});
export const addConjureAttachmentDrafts = function addConjureAttachmentDrafts(projectId, chat, mapped) {
  closure_0 = projectId;
  closure_1 = chat;
  if (0 !== mapped.length) {
    mapped = mapped.map((draft) => {
      const obj = { draft: null, upload: null };
      const obj2 = {};
      const merged = Object.assign(draft.draft);
      closure_10 = tmp2 + 1;
      obj2.localId = +closure_10;
      obj.draft = obj2;
      obj.upload = draft.upload;
      return obj;
    });
    const items = [];
    HermesBuiltin.arraySpread(mapped.map((draft) => draft.draft), HermesBuiltin.arraySpread(getConjureAttachmentDrafts(projectId, chat), 0));
    setDrafts(projectId, chat, items);
    for (const item10006 of mapped) {
      let upload = item10006.upload;
      let tmp10Result = tmp10(item10006.draft);
      continue;
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(getConjureAttachmentDrafts(projectId, chat), 0);
  }
};
export const removeConjureAttachmentDraft = function removeConjureAttachmentDraft(View, chat, arg2) {
  closure_0 = arg2;
  const tmp = zustandStore.getState().draftsByProject[View];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_9;
  }
  const found = tmp2.find((localId) => localId.localId === closure_0);
  if (null != found) {
    if (null != found.previewUrl) {
      const _URL = URL;
      URL.revokeObjectURL(found.previewUrl);
    }
    if (null != found.ref) {
      hasOwnProperty(View, found.ref.id).catch(() => {

      });
      const promise = hasOwnProperty(View, found.ref.id);
    }
    const found1 = tmp2.filter((localId) => localId.localId !== closure_0);
    const draftsByProject = zustandStore.getState().draftsByProject;
    const obj2 = { draftsByProject: null };
    const obj3 = {};
    const merged = Object.assign(draftsByProject);
    const obj4 = {};
    const merged1 = Object.assign(draftsByProject[View]);
    obj4[chat] = found1;
    obj3[View] = obj4;
    obj2.draftsByProject = obj3;
    zustandStore.setState(obj2);
  }
};
export const clearConjureAttachmentDrafts = function clearConjureAttachmentDrafts(projectId, chat) {
  const arr = getConjureAttachmentDrafts(projectId, chat);
  if (0 !== arr.length) {
    for (const item10010 of arr) {
      let tmp4 = discardDraft(arg0, item10010);
      continue;
    }
    setDrafts(projectId, chat, closure_9);
  }
};
export { takeConjureAttachmentRefs };
export const sendConjureCardReply = function sendConjureCardReply(projectId, implementation_prompt, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ attachments, clarificationAnswers } = obj);
  if (attachments === undefined) {
    attachments = [];
  }
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let chat;
  if (tmp != null) {
    chat = tmp.chat;
  }
  if (chat == null) {
    chat = closure_9;
  }
  if (chat.length > 0) {
    if (chat.every((status) => "ready" === status.status)) {
      let items1 = takeConjureAttachmentRefs(projectId, "chat");
    }
    const items = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(attachments, 0));
    const obj2 = { clarificationAnswers };
    timestampProducer(projectId, implementation_prompt, items, obj2);
  }
  items1 = [];
};
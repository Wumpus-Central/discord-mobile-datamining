// discord_app/modules/conjure/chat/conjureAttachmentDrafts.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import ZustandStore from "../../../lib/ZustandStore.tsx";
import ConjureTypes from "../ConjureTypes.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import Dispatcher_mod from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_9;

let closure_4;
let hasOwnProperty;
let metroRequire;
const f126323 = () => {};
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
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
    tmp2 = closure_8;
  }
  return tmp2;
}
function setDrafts(projectId, chat, items) {
  let obj2;
  const draftsByProject = zustandStore.getState().draftsByProject;
  const obj = { draftsByProject: obj2 };
  obj2 = {};
  const setState = zustandStore.setState;
  const merged = Object.assign(draftsByProject);
  const obj3 = {};
  const merged1 = Object.assign(draftsByProject[projectId]);
  obj3[chat] = items;
  obj2[projectId] = obj3;
  setState(obj);
}
function discardDraft(projectId, item10010) {
  if (null != item10010.previewUrl) {
    const _URL = URL;
    URL.revokeObjectURL(item10010.previewUrl);
  }
  if (null != item10010.ref) {
    const promise = React3(projectId, item10010.ref.id);
    promise.catch(f126323);
  }
}
function discardProject(projectId, deleteFromWorker) {
  deleteFromWorker = deleteFromWorker.deleteFromWorker;
  const draftsByProject = zustandStore.getState().draftsByProject;
  if (null != draftsByProject[projectId]) {
    const _Object = Object;
    const values = Object.values(tmp);
    const iter = values[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult == null) {
        nextResult = closure_8;
      }
      for (const item10017 of nextResult) {
        if (deleteFromWorker) {
          let tmp13 = discardDraft(projectId, item10017);
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
    setDrafts(projectId, chat, closure_8);
    return arr.flatMap((ref) => {
      let items1;
      if (null != ref.ref) {
        const items = [ref.ref];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    });
  }
}
const createZustandStore = ZustandStore.createZustandStore;
({
  deleteStagedAttachment: closure_4,
  sendUserMessage: hasOwnProperty,
  uploadAttachmentBytes: metroRequire,
} = ConjureConnectionStore);
let closure_8 = [];
let c9 = 1;
const zustandStore = createZustandStore(() => ({ draftsByProject: {} }));
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === arg0) {
        let tmp2;
        if (cResult[1] === arg1) {
          tmp2 = cResult[2];
        }
        return zustandStore.useState(tmp2);
      }
      const fn = function r(arg0) {
        let tmp2;
        if (arg0.draftsByProject[closure_0] != null) {
          tmp2 = tmp[closure_1];
        }
        if (tmp2 == null) {
          tmp2 = closure_8;
        }
        return tmp2;
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return zustandStore.useState((arg0) => {
        let tmp2;
        if (arg0.draftsByProject[closure_0] != null) {
          tmp2 = tmp[closure_1];
        }
        if (tmp2 == null) {
          tmp2 = closure_8;
        }
        return tmp2;
      });
    };
function conjureAttachmentTooLargeText(contentType) {
  let formatConjureAttachmentLimit;
  let obj2;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { size: formatConjureAttachmentLimit(obj2.conjureAttachmentLimit(contentType)) };
  const JZ59Bo = _modDef3753.JZ59Bo;
  formatConjureAttachmentLimit = ConjureTypes.formatConjureAttachmentLimit;
  ConjureTypes;
  obj2 = ConjureTypes;
  return formatToPlainString(JZ59Bo, obj);
}
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  const keys = Object.keys(zustandStore.getState().draftsByProject);
  const tmp2 = keys[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = discardProject(tmp3, { deleteFromWorker: true });
    continue;
  }
});
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (projectId) => {
  discardProject(projectId.projectId, { deleteFromWorker: false });
});
const result = size.fileFinishedImporting("modules/conjure/chat/conjureAttachmentDrafts.tsx");

export const ConjureAttachmentDraftStore = zustandStore;
export { getConjureAttachmentDrafts };
export { conjureAttachmentTooLargeText };
export const uploadConjureAttachment = function uploadConjureAttachment(overrideFilename, size, name, contentType) {
  let JZ59Bo;
  let formatConjureAttachmentLimit;
  let formatToPlainString;
  let obj3;
  let resolveResult;
  let tmpResult2;
  const obj = ConjureTypes;
  if (obj.isConjureAttachmentWithinLimit(size.size, contentType)) {
    resolveResult = metroRequire(overrideFilename, size, name, contentType);
  } else {
    const obj2 = { errorText: formatToPlainString(JZ59Bo, obj3) };
    const intl = intl2.intl;
    formatToPlainString = intl.formatToPlainString;
    obj3 = { size: formatConjureAttachmentLimit(tmpResult2.conjureAttachmentLimit(contentType)) };
    JZ59Bo = _modDef3753.JZ59Bo;
    formatConjureAttachmentLimit = ConjureTypes.formatConjureAttachmentLimit;
    ConjureTypes;
    tmpResult2 = ConjureTypes;
    resolveResult = resolve(obj2);
  }
  return resolveResult;
};
export const useConjureAttachmentDraftList = tmp4;
export const addConjureAttachmentDrafts = function addConjureAttachmentDrafts(projectId, chat, mapped) {
  let state;
  let closure_0 = projectId;
  let closure_1 = chat;
  if (0 !== mapped.length) {
    mapped = mapped.map((upload) => {
      let obj2;
      const obj = { draft: obj2, upload };
      upload = upload.upload;
      obj2 = { localId: +closure_9 };
      const merged = Object.assign(upload.draft);
      closure_9 = tmp2 + 1;
      return obj;
    });
    const items = [];
    let tmp6 = items;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, getConjureAttachmentDrafts(projectId, chat), 0);
    HermesBuiltin.arraySpread(
      items,
      mapped.map((draft) => draft.draft),
      arraySpreadResult,
    );
    setDrafts(projectId, chat, items);
    const tmp2 = mapped;
    for (const item10006 of mapped) {
      let upload = item10006.upload;
      let tmp11Result = tmp11(item10006.draft);
      continue;
    }
  }
};
export const removeConjureAttachmentDraft = function removeConjureAttachmentDraft(projectId, chat, arg2) {
  let obj3;
  let closure_0 = arg2;
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_8;
  }
  const found = tmp2.find((localId) => localId.localId === closure_0);
  if (null != found) {
    if (null != found.previewUrl) {
      const _URL = URL;
      URL.revokeObjectURL(found.previewUrl);
    }
    if (null != found.ref) {
      const promise = React3(projectId, found.ref.id);
      promise.catch(f126323);
    }
    const found1 = tmp2.filter((localId) => localId.localId !== closure_0);
    const draftsByProject = zustandStore.getState().draftsByProject;
    const obj2 = { draftsByProject: obj3 };
    obj3 = {};
    const setState = zustandStore.setState;
    const merged = Object.assign(draftsByProject);
    const obj4 = {};
    const merged1 = Object.assign(draftsByProject[projectId]);
    obj4[chat] = found1;
    obj3[projectId] = obj4;
    setState(obj2);
  }
};
export const clearConjureAttachmentDrafts = function clearConjureAttachmentDrafts(projectId, chat) {
  const arr = getConjureAttachmentDrafts(projectId, chat);
  if (0 !== arr.length) {
    for (const item10010 of arr) {
      let tmp4 = discardDraft(projectId, item10010);
      continue;
    }
    setDrafts(projectId, chat, closure_8);
  }
};
export { takeConjureAttachmentRefs };
export const sendConjureCardReply = function sendConjureCardReply(projectId, implementation_prompt, arg2) {
  let attachments;
  let clarificationAnswers;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ attachments, clarificationAnswers } = obj);
  if (attachments === undefined) {
    attachments = [];
  }
  const tmp2 = zustandStore.getState().draftsByProject[projectId];
  let chat;
  if (tmp2 != null) {
    chat = tmp2.chat;
  }
  if (chat == null) {
    chat = closure_8;
  }
  if (chat.length > 0) {
    let items1;
    if (chat.every((status) => "ready" === status.status)) {
      items1 = takeConjureAttachmentRefs(projectId, "chat");
    }
    const items = [];
    HermesBuiltin.arraySpread(items, items1, HermesBuiltin.arraySpread(items, attachments, 0));
    const obj2 = { clarificationAnswers };
    hasOwnProperty(projectId, implementation_prompt, items, obj2);
  }
  items1 = [];
};

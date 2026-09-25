// === Module 16371: vibegrationsAttachmentDrafts ===

// Module 16371 (vibegrationsAttachmentDrafts)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5364 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import Dispatcher_mod from "Dispatcher" /* 573 */;

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
function getVibegrationsAttachmentDrafts(projectId, chat) {
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_6;
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
    deleteStagedAttachment(projectId, item10010.ref.id).catch(() => {

    });
    const promise = deleteStagedAttachment(projectId, item10010.ref.id);
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
        nextResult = closure_6;
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
const deleteStagedAttachment = fn(12607).deleteStagedAttachment;
let closure_6 = [];
let c7 = 1;
const zustandStore = fn(4701).createZustandStore(() => ({ draftsByProject: {} }));
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
const subscription1 = Dispatcher.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (projectId) => {
  discardProject(projectId.projectId, { deleteFromWorker: false });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAttachmentDrafts.tsx");

export const VibegrationsAttachmentDraftStore = zustandStore;
export { getVibegrationsAttachmentDrafts };
export const useVibegrationsAttachmentDraftList = function useVibegrationsAttachmentDraftList(projectId, chat) {
  closure_0 = projectId;
  closure_1 = chat;
  return zustandStore.useState((arg0) => {
    let tmp2;
    if (arg0.draftsByProject[closure_0] != null) {
      tmp2 = tmp[closure_1];
    }
    if (tmp2 == null) {
      tmp2 = closure_6;
    }
    return tmp2;
  });
};
export const addVibegrationsAttachmentDrafts = function addVibegrationsAttachmentDrafts(projectId, chat, mapped) {
  closure_0 = projectId;
  closure_1 = chat;
  if (0 !== mapped.length) {
    mapped = mapped.map((draft) => {
      const obj = { draft: null, upload: null };
      const obj2 = {};
      const merged = Object.assign(draft.draft);
      closure_7 = tmp2 + 1;
      obj2.localId = +closure_7;
      obj.draft = obj2;
      obj.upload = draft.upload;
      return obj;
    });
    const items = [];
    HermesBuiltin.arraySpread(mapped.map((draft) => draft.draft), HermesBuiltin.arraySpread(getVibegrationsAttachmentDrafts(projectId, chat), 0));
    setDrafts(projectId, chat, items);
    for (const item10006 of mapped) {
      let upload = item10006.upload;
      let tmp10Result = tmp10(item10006.draft);
      continue;
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(getVibegrationsAttachmentDrafts(projectId, chat), 0);
  }
};
export const removeVibegrationsAttachmentDraft = function removeVibegrationsAttachmentDraft(projectId, chat, arg2) {
  closure_0 = arg2;
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_6;
  }
  const found = tmp2.find((localId) => localId.localId === closure_0);
  if (null != found) {
    if (null != found.previewUrl) {
      const _URL = URL;
      URL.revokeObjectURL(found.previewUrl);
    }
    if (null != found.ref) {
      deleteStagedAttachment(projectId, found.ref.id).catch(() => {

      });
      const promise = deleteStagedAttachment(projectId, found.ref.id);
    }
    const found1 = tmp2.filter((localId) => localId.localId !== closure_0);
    const draftsByProject = zustandStore.getState().draftsByProject;
    const obj2 = { draftsByProject: null };
    const obj3 = {};
    const merged = Object.assign(draftsByProject);
    const obj4 = {};
    const merged1 = Object.assign(draftsByProject[projectId]);
    obj4[chat] = found1;
    obj3[projectId] = obj4;
    obj2.draftsByProject = obj3;
    zustandStore.setState(obj2);
  }
};
export const clearVibegrationsAttachmentDrafts = function clearVibegrationsAttachmentDrafts(projectId, chat) {
  const arr = getVibegrationsAttachmentDrafts(projectId, chat);
  if (0 !== arr.length) {
    for (const item10010 of arr) {
      let tmp4 = discardDraft(arg0, item10010);
      continue;
    }
    setDrafts(projectId, chat, closure_6);
  }
};
export const takeVibegrationsAttachmentRefs = function takeVibegrationsAttachmentRefs(projectId, chat) {
  const arr = getVibegrationsAttachmentDrafts(projectId, chat);
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
    setDrafts(projectId, chat, closure_6);
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
};
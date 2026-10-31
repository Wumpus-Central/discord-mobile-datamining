// === Module 12580: conjureScopeSetup ===

// Module 12580 (conjureScopeSetup)
import Storage6 from "Storage" /* 510 */;
import util from "util" /* 1113 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef3868 from "module_3868" /* 3868 */;
import createNonce from "createNonce" /* 10315 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10874 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 12582 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12583 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 12581 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10850 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

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
function restoreToComposer(projectId, nonce, fn) {
  const Storage = Storage6.Storage;
  let obj = Storage.get(ConjureHeldPrompts);
  if (obj == null) {
    obj = {};
  }
  const items = [projectId];
  const Storage2 = Storage6.Storage;
  const result = Storage2.set(ConjureHeldPrompts, _objectWithoutProperties(obj, items.map(_toPropertyKey)));
  closure_1_10(projectId, nonce.nonce);
  if ("" === ConjureComposerDraftStore.getDraft(projectId)) {
    ConjureChatActionCreators.setComposerDraft(projectId, nonce.message);
    const tmpResult = ConjureChatActionCreators;
  }
  const tmp4 = _objectWithoutProperties(obj, items.map(_toPropertyKey));
  if (0 === tmpResult3.getConjureAttachmentDrafts(projectId, "chat").length) {
    const attachments = nonce.attachments;
    const result1 = conjureAttachmentDrafts.addConjureAttachmentDrafts(projectId, "chat", attachments.map((name) => ({ draft: { name: name.name, contentType: name.content_type, status: "ready", ref: name } })));
    const tmpResult4 = conjureAttachmentDrafts;
  }
  fn();
  tmpResult3 = conjureAttachmentDrafts;
}
function putInstallScope() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _putInstallScope(arg0) {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp2;
            closure_3 = tmp5;
            closure_131_0 = undefined;
            const HTTP = HTTPUtils.HTTP;
            let request = { url: null, body: null, rejectWithError: true };
            const _HermesInternal = HermesInternal;
            request.url = "" + Endpoints.CONJURE_PROJECT(closure_0) + "/install-scope";
            const obj4 = { install_scope };
            if (null != guild_id) {
              const obj5 = { guild_id };
              let obj6 = obj5;
            } else {
              obj6 = {};
            }
            const merged = Object.assign(obj6);
            request.body = obj4;
            request = HTTP.put(request);
            c5 = 1;
            c6 = 1;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_131_0 = value;
          const obj8 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: closure_131_0.body };
          closure_132_1(closure_132_2[14]).dispatch(obj8);
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp15) {
        c6 = tmp;
        throw tmp15;
      }
    }
  })();
};
let ConjureConnectionStore = fn(10850);
({ optimisticMessageId: closure_7, sendUserMessage: closure_8, showUserMessage: closure_9, withdrawUserMessage: c10 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const Endpoints = fn(1072).Endpoints;
const ConjureHeldPrompts = "ConjureHeldPrompts";
const map = new Map();
const map1 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/scope_setup/conjureScopeSetup.tsx");

export function getHeldConjurePromptGuildId(arg0) {
  const Storage = Storage6.Storage;
  let obj = Storage.get(ConjureHeldPrompts);
  if (obj == null) {
    obj = {};
  }
  let guildId;
  if (obj[arg0] != null) {
    guildId = tmp.guildId;
  }
  return guildId;
}
export function startConjurePrompt(arg0, trimmed, arg2) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  const project = ConjureProjectStore.getProject(arg0);
  let install_scope_setup;
  if (project != null) {
    install_scope_setup = project.install_scope_setup;
  }
  if (null != install_scope_setup) {
    const Storage = Storage6.Storage;
    const Storage2 = Storage6.Storage;
    let obj = Storage2.get(ConjureHeldPrompts);
    if (obj == null) {
      obj = {};
    }
    const obj2 = {};
    const merged = Object.assign(obj);
    const obj3 = { message: trimmed, attachments: items, nonce: createNonce.createNonce(), guildId };
    obj2[arg0] = obj3;
    const result = Storage.set(ConjureHeldPrompts, obj2);
    const tmp5Result = createNonce;
  } else {
    React6(arg0, trimmed, items);
  }
}
export function reconcileHeldConjurePrompt(projectId, fn) {
  const Storage = Storage6.Storage;
  let obj = Storage.get(ConjureHeldPrompts);
  if (obj == null) {
    obj = {};
  }
  const message = tmp4;
  const project = ConjureProjectStore.getProject(projectId);
  if (null != obj[projectId]) {
    if (null != project) {
      if (ConjureChatStore.hasLoadedHistory(projectId)) {
        const messages = ConjureChatStore.getMessages(projectId);
        closure_1 = React5(tmp4.nonce);
        if (true !== tmp4.sent) {
          if (null == project.install_scope_setup) {
            if ("open" === ConjureConnectionStore.getConnState(projectId)) {
              const Storage4 = Storage6.Storage;
              const Storage5 = Storage6.Storage;
              let value3 = Storage5.get(ConjureHeldPrompts);
              if (value3 == null) {
                value3 = {};
              }
              const obj2 = {};
              const merged = Object.assign(value3);
              const obj3 = {};
              const merged1 = Object.assign(tmp4);
              obj3.sent = true;
              obj2[projectId] = obj3;
              const result = Storage4.set(ConjureHeldPrompts, obj2);
              const result1 = map1.set(projectId, ConjureChatStore.getHistoryLoads(projectId));
              const obj4 = { nonce: tmp4.nonce };
              if (!React6(projectId, tmp4.message, tmp4.attachments, obj4)) {
                restoreToComposer(projectId, tmp4, fn);
              }
            }
          } else if (!messages.some((id) => id.id === closure_1)) {
            const obj5 = { held: true, nonce: tmp4.nonce };
            React7(projectId, tmp4.message, tmp4.attachments, obj5);
          }
        } else {
          const historyLoads = ConjureChatStore.getHistoryLoads(projectId);
          let num = map1.get(projectId);
          if (num == null) {
            num = 0;
          }
          if (someResult) {
            const Storage2 = Storage6.Storage;
            let value4 = Storage2.get(ConjureHeldPrompts);
            if (value4 == null) {
              value4 = {};
            }
            const items = [projectId];
            const Storage3 = Storage6.Storage;
            const result2 = Storage3.set(ConjureHeldPrompts, _objectWithoutProperties(value4, items.map(_toPropertyKey)));
            const tmp15 = _objectWithoutProperties(value4, items.map(_toPropertyKey));
          } else {
            let isHistoryUnavailableResult = !tmp8;
            if (tmp8) {
              isHistoryUnavailableResult = null != project.install_scope_setup;
            }
            if (!isHistoryUnavailableResult) {
              isHistoryUnavailableResult = ConjureChatStore.isHistoryUnavailable(projectId);
            }
            if (!isHistoryUnavailableResult) {
              isHistoryUnavailableResult = ConjureChatStore.isThinking(projectId);
            }
            if (!isHistoryUnavailableResult) {
              restoreToComposer(projectId, tmp4, fn);
            }
          }
          someResult = messages.some((role) => {
            let tmp = "user" === role.role;
            if (tmp) {
              tmp = true !== role.held;
            }
            if (tmp) {
              tmp = role.id !== closure_1;
            }
            if (tmp) {
              tmp = role.content === message.message;
            }
            return tmp;
          });
        }
      }
    }
  }
}
export function serverQuestionFields(arr3, guild_id) {
  closure_0 = guild_id;
  if (0 === arr3.length) {
    return {};
  } else {
    const found = arr3.find((id) => id.id === closure_0);
    const obj2 = { input: "server", note: null };
    const intl = util.intl;
    obj2.note = intl.string(_modDef3868.SU9K9U);
    if (null != found) {
      const obj4 = { default_entities: null };
      ({ id: obj3.id, name: obj3.name } = found);
      const items = [{ id: null, name: null, kind: "server" }];
      obj4.default_entities = items;
      let obj = obj4;
      const obj7 = { id: null, name: null, kind: "server" };
    } else {
      obj = {};
    }
    const merged = Object.assign(obj);
    return obj2;
  }
}
export function ownerOnlyClarification(memo) {
  let obj = { id: memo.id, questions: null };
  const questions = memo.questions;
  obj.questions = questions.map((id) => {
    const obj = { id: id.id, question: id.question, recommendation_reason: "", options: [], allow_custom: false, note: null };
    const intl = util.intl;
    obj.note = intl.string(_modDef3868.ZKPaWY);
    return obj;
  });
  return obj;
}
export function settleConjureInstallScope(projectId, arg1, arg2) {
  closure_1 = arg1;
  closure_2 = arg2;
  const combined = "settle:" + projectId;
  closure_129_0 = combined;
  closure_129_1 = asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            projectId = tmp7;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: putInstallScope(projectId, closure_1, tmp22), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_0 = tmp22;
          if (409 !== closure_128_0.status) {
            throw closure_128_0;
          } else {
            c4 = 3;
            c5 = 1;
            const obj6 = { value: projectId(tmp22[15]).getProject(closure_129_0), done: false };
            return obj6;
          }
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c3 = 0;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp22) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp22;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  value = map.get(combined);
  if (value == null) {
    value = (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp7;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: tmp3(), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = closure_2;
            set.delete(closure_129_0);
            throw closure_128_0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp17;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
  const result = map.set(combined, value);
  return value;
}
export function switchConjureInstallScope(projectId, id, scope, arg3) {
  closure_0 = projectId;
  closure_1 = scope;
  closure_2 = arg3;
  const combined = "switch:" + projectId + ":" + id;
  closure_129_0 = combined;
  closure_129_1 = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: putInstallScope(tmp2, tmp5, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if ("guild" === closure_129_1) {
            let prop = tmp5(3868)["8+EcCu"];
          } else {
            prop = tmp5(3868)["U7+Yeh"];
          }
          closure_128_0 = prop;
          const intl = tmp2(1113).intl;
          if (closure_1_8(closure_129_0, intl.string(closure_128_0))) {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            const _Error = Error;
            const error = new Error("Not connected");
            throw error;
          }
        }
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  });
  value = map.get(combined);
  if (value == null) {
    value = (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp7;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: tmp3(), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = closure_2;
            set.delete(closure_129_0);
            throw closure_128_0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp17;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
  const result = map.set(combined, value);
  return value;
}
export function keepConjureInstallScope(projectId) {
  return conjureProjectSockets.sendOnConjureSocket(projectId, "keep install scope", (sendKeepInstallScope) => sendKeepInstallScope.sendKeepInstallScope());
}
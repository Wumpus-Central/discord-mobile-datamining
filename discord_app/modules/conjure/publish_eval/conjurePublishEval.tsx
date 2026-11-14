// === Module 13164: conjurePublishEval ===

// Module 13164 (conjurePublishEval)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjurePublishEvalTypes from "ConjurePublishEvalTypes" /* 13166 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureChatStore from "ConjureChatStore" /* 7321 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjurePublishEvalStore from "ConjurePublishEvalStore" /* 13165 */;

const require = globalThis.__r;

require = fn;
let closure_13 = async function _submitConjurePublishEval(arg0, arg1, arg2) {
  let projectId = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp2;
            closure_132_0 = projectId;
            closure_132_1 = undefined;
            publishStatus = publishStatus.getPublishStatus(projectId.projectId);
            let publishedRevision;
            if (publishStatus != null) {
              publishedRevision = publishStatus.publishedRevision;
            }
            const obj6 = { publish_turn_id: projectId.publishTurnId, published_revision: null, quality: null, met_expectations: null, speed: null, feedback: null };
            published_revision = publishedRevision;
            if (publishedRevision == null) {
              published_revision = null;
            }
            obj6.published_revision = published_revision;
            ({ quality: obj5.quality, metExpectations: obj5.met_expectations, speed: obj5.speed } = closure_1);
            const trimmed = closure_2.trim();
            obj6.feedback = trimmed.slice(0, require("ConjurePublishEvalTypes").CONJURE_PUBLISH_EVAL_FEEDBACK_MAX_LENGTH);
            c6 = 1;
            c7 = 1;
            const obj7 = { value: require("conjurePublishEvalConnection").sendConjurePublishEval(projectId.projectId, obj6), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_132_1 = value;
          if (!closure_132_1.ok) {
            if ("gone" !== closure_132_1.error) {
              if ("forbidden" !== closure_132_1.error) {
                const _Error = Error;
                const error = new Error(closure_132_1.error);
                throw error;
              }
            }
          }
          const obj14 = { type: "CONJURE_PUBLISH_EVAL_SUBMITTED", projectId: closure_132_0.projectId, publishTurnId: closure_132_0.publishTurnId };
          closure_133_1(closure_133_2[10]).dispatch(obj14);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        c7 = tmp;
        throw tmp30;
      }
    }
  })();
};
let closure_11 = { quality: null, metExpectations: null, speed: null };
let obj = { quality: _modDef4131["N94/JU"], metExpectations: _modDef4131["7mnit0"], speed: _modDef4131["J/xftE"] };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/conjurePublishEval.tsx");

export function isConjurePublishEvalUser() {
  closure_0 = GuildStore;
  const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
  return CONJURE_PUBLISH_EVAL_GUILD_IDS.some((item) => null != guild.getGuild(item));
}
export function useIsConjurePublishEvalUser() {
  items = [GuildStore];
  return initialize.useStateFromStores(items, () => {
    closure_0 = GuildStore;
    const CONJURE_PUBLISH_EVAL_GUILD_IDS = require("ConjurePublishEvalTypes").CONJURE_PUBLISH_EVAL_GUILD_IDS;
    return CONJURE_PUBLISH_EVAL_GUILD_IDS.some((item) => null != guild.getGuild(item));
  });
}
export function getPendingConjurePublishEval() {
  const pending = ConjurePublishEvalStore.getPending();
  let tmp2 = null;
  if (null != pending) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp2 = null;
    if (pending.userId === id) {
      closure_0 = GuildStore;
      const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
      tmp2 = null;
      if (CONJURE_PUBLISH_EVAL_GUILD_IDS.some((item) => null != guild.getGuild(item))) {
        tmp2 = pending;
      }
    }
  }
  return tmp2;
}
export function usePendingConjurePublishEval(projectId) {
  _require = projectId;
  items = [ConjurePublishEvalStore, UserStore, GuildStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => {
    const pending = ConjurePublishEvalStore.getPending();
    projectId = undefined;
    if (pending != null) {
      projectId = pending.projectId;
    }
    let tmp3 = null;
    if (projectId === guild) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp3 = null;
      if (pending.userId === id) {
        guild = GuildStore;
        const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
        tmp3 = null;
        if (CONJURE_PUBLISH_EVAL_GUILD_IDS.some((item) => null != guild.getGuild(item))) {
          tmp3 = pending;
        }
      }
    }
    return tmp3;
  }, items1);
}
export function requestConjurePublishEval(projectId) {
  const currentUser = UserStore.getCurrentUser();
  let id1;
  if (currentUser != null) {
    id1 = currentUser.id;
  }
  let someResult = null != id1;
  if (someResult) {
    closure_0 = GuildStore;
    const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
    someResult = CONJURE_PUBLISH_EVAL_GUILD_IDS.some((item) => null != guild.getGuild(item));
  }
  if (someResult) {
    const obj2 = { userId: id1, projectId, publishTurnId: null, createdAt: null };
    const messages = ConjureChatStore.getMessages(projectId);
    let diff = messages.length - 1;
    if (0 > diff) {
      let id2;
      if (messages[messages.length - 1] != null) {
        id2 = tmp13.id;
      }
      if (id2 == null) {
        id2 = projectId;
      }
      const obj3 = { type: "CONJURE_PUBLISH_EVAL_PENDING", pending: null };
      obj2.publishTurnId = id2;
      const _Date = Date;
      obj2.createdAt = Date.now();
      obj3.pending = obj2;
      obj.dispatch(obj3);
    } else {
      while ("assistant" !== _Date.role) {
        diff = diff - 1;
      }
    }
    let id = _Date.turn_id;
    if (id == null) {
      id = _Date.id;
    }
    id2 = id;
    obj = DispatcherDefault;
  }
}
export function conjurePublishEvalDimensionLabel(dimension) {
  const intl = util.intl;
  return intl.string(obj[dimension]);
}
export function conjurePublishEvalScoreLabel(dimension, score) {
  const intl = util.intl;
  obj = { score, dimension: null };
  const intl2 = util.intl;
  obj.dimension = intl2.string(obj[dimension]);
  return intl.formatToPlainString(_modDef4131.fML8aJ, obj);
}
export function useConjurePublishEvalForm(pending) {
  _require = pending;
  [tmp2, importDefault] = first1(noop.useState(closure_11), 2);
  const tmp3 = first1(noop.useState(""), 2);
  const feedback = tmp3[0];
  const tmp5 = first1(noop.useState(false), 2);
  first1 = tmp5[0];
  asyncGeneratorStep = tmp5[1];
  const tmp7 = first1(noop.useState(false), 2);
  noop = tmp7[1];
  ({ quality, metExpectations, speed } = tmp2);
  let tmp8 = null;
  if (null != quality) {
    tmp8 = null;
    if (null != metExpectations) {
      tmp8 = null;
      if (null != speed) {
        let obj2 = { quality, metExpectations, speed };
        tmp8 = obj2;
      }
    }
  }
  obj2 = tmp8;
  const callback = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    importDefault((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  items = [tmp8, feedback, pending, first1];
  let obj3 = { dimensions: null, scores: null, setScore: null, feedback: null, setFeedback: null, canSubmit: null, submitting: null, error: null, submit: null };
  const callback1 = obj.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            if (null != obj2) {
              if (!first1) {
                closure_4(true);
                closure_5(false);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = {
                  value: (function submitConjurePublishEval() {
                                const self = this;
                                const apply = closure_1_13.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(closure_0, tmp13, first),
                  done: false
                };
                return obj4;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c2 = 0;
            closure_128_5(true);
            closure_128_4(false);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c2 = 0;
          }
          c2 = 0;
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
      } catch (tmp21) {
        if (tmp4 === c2) {
          c3 = tmp2;
          throw tmp21;
        } else {
          c1 = tmp;
        }
      }
    }
  }), items);
  obj3.dimensions = require("ConjurePublishEvalTypes").CONJURE_PUBLISH_EVAL_DIMENSIONS;
  obj3.scores = tmp2;
  obj3.setScore = callback;
  obj3.feedback = feedback;
  obj3.setFeedback = tmp3[1];
  obj3.canSubmit = null != tmp8 && !first1;
  obj3.submitting = first1;
  let stringResult = null;
  if (tmp7[0]) {
    const intl = require("util").intl;
    stringResult = intl.string(require("module_4131").Nu6mEB);
  }
  obj3.error = stringResult;
  obj3.submit = callback1;
  return obj3;
}
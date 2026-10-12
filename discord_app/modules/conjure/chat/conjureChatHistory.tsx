// === Module 13001: conjureChatHistory ===

// Module 13001 (conjureChatHistory)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import conjureStepTimeline from "conjureStepTimeline" /* 13000 */;
import size from "module_2" /* 2 */;

function newMessage(assistant, content, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  if (id == null) {
    const sum = c5 + 1;
    c5 = sum;
    id = `m${tmp2}`;
  }
  const obj2 = { id, render_id: id, role: assistant, content };
  if (null != userId) {
    const obj3 = { user_id: userId };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  if (null != turnId) {
    const obj5 = { turn_id: turnId };
    let obj6 = obj5;
  } else {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  obj2.steps = [];
  if (null != ts) {
    const _Date2 = Date;
    let parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  obj2.created_at = parsed;
  obj2.attachments = obj.attachments;
  return obj2;
}
let c4 = "turn:";
let c5 = 0;
let result = size.fileFinishedImporting("modules/conjure/chat/conjureChatHistory.tsx");

export { newMessage };
export const newMessageFromHistory = function newMessageFromHistory(ts) {
  const tmp = newMessage(ts.role, ts.content, { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments });
  const tmp2 = (function snowflakeTimeOf(id) {
    let startsWithResult;
    if (id != null) {
      startsWithResult = id.startsWith(length);
    }
    let substr = id;
    if (true === startsWithResult) {
      substr = id.slice(length.length);
    }
    if (null != substr) {
      if (obj.test(substr)) {
        const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(substr);
        const _Number = Number;
        let tmp9 = null;
        if (Number.isFinite(extractTimestampResult)) {
          tmp9 = null;
          if (extractTimestampResult > 0) {
            tmp9 = extractTimestampResult;
          }
        }
        return tmp9;
      }
      obj = /^\d+$/;
    }
    return null;
  })(ts.id);
  let tmp3 = null == tmp2;
  if (!tmp3) {
    tmp3 = "assistant" !== ts.role && null != ts.ts;
    const tmp4 = "assistant" !== ts.role && null != ts.ts;
  }
  if (!tmp3) {
    tmp.created_at = tmp2;
  }
  if ("assistant" === ts.role) {
    if (null != ts.ts) {
      const _Date = Date;
      const parsed = Date.parse(ts.ts);
      let _Number = Number;
      if (Number.isFinite(parsed)) {
        tmp.settled_at = parsed;
      }
    }
  }
  if (null != ts.kind) {
    tmp.kind = ts.kind;
  }
  if ("interrupted" === ts.kind) {
    tmp.interrupted = true;
    tmp.content = "";
    tmp.finished = true;
  }
  if (null != ts.proposal) {
    tmp.proposal = ts.proposal;
  }
  if (tmp7) {
    tmp.ideas = ts.ideas;
  }
  if (null != ts.publish_cta) {
    tmp.publishCta = ts.publish_cta;
  }
  if (null != ts.publish_notice) {
    tmp.publishNotice = ts.publish_notice;
  }
  if (null != ts.project_event) {
    tmp.projectEvent = ts.project_event;
  }
  if ("context_boundary" === ts.kind) {
    tmp.finished = true;
  }
  if (null != ts.context_switch) {
    tmp.contextSwitch = ts.context_switch;
  }
  if (tmp8) {
    tmp.clarification = ts.clarification;
  }
  if (null != ts.restore_proposal) {
    tmp.restoreProposal = ts.restore_proposal;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  if (tmp9) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    tmp.steps = conjureStepTimeline.replayTimeline(ts.steps);
  } else if (null != ts.events) {
    const events = ts.events;
    tmp.steps = events.flatMap((type) => {
      if ("todos" === type.type) {
        const obj = { type: "step", kind: "todos", items: type.items };
        const items = [obj];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    });
  }
  if (tmp12) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  if (tmp13) {
    tmp.intake = ts.intake;
  }
  let steps = ts.steps;
  if (steps == null) {
    steps = [];
  }
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp15 = nextResult;
    let tmp16 = "awaiting_user" === nextResult.kind;
    if (tmp16) {
      tmp16 = "secrets" === tmp15.action;
    }
    if (tmp16) {
      let obj3 = { action: null };
      obj3.action = tmp15.action;
      tmp.awaitingUser = obj3;
    }
    continue;
  }
  return tmp;
};
export const foldDividers = function foldDividers(items) {
  const map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.contextSwitch) {
      let result = map.set(tmp2.contextSwitch.id, tmp2.contextSwitch);
    }
    continue;
  }
  if (0 === map.size) {
    return items;
  } else {
    const _Set = Set;
    const set = new Set();
    return items.flatMap((contextSwitch) => {
      contextSwitch = contextSwitch.contextSwitch;
      let id;
      if (contextSwitch != null) {
        id = contextSwitch.id;
      }
      if (null == id) {
        const items = [contextSwitch];
        return items;
      } else if (set.has(id)) {
        return [];
      } else {
        set.add(id);
        value = map.get(id);
        let status;
        if (value != null) {
          status = value.status;
        }
        if ("undone" === status) {
          let items1 = [];
        } else {
          let tmp6 = contextSwitch;
          if (value !== contextSwitch.contextSwitch) {
            const obj = {};
            const merged = Object.assign(contextSwitch);
            obj.contextSwitch = value;
            tmp6 = obj;
          }
          items1 = [tmp6];
        }
        return items1;
      }
    });
  }
};
export const TURN_ENTRY_PREFIX = "turn:";
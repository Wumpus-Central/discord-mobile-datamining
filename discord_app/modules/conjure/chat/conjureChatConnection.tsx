// === Module 10687: conjureChatConnection ===

// Module 10687 (conjureChatConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjureAgentReaction from "conjureAgentReaction" /* 10673 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10688 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10689 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10690 */;
import size from "module_2" /* 2 */;

function appendFailureStep(turnId, projectId) {
  projectId = projectId.projectId;
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turnId.turn_id, step: turnId });
  const obj2 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turnId.turn_id, step: turnId };
  obj4 = {};
  const merged = Object.assign(obj5[turnId.kind]);
  obj4.message = turnId.message;
  let stderr_tail;
  if ("build_error" === turnId.kind) {
    stderr_tail = turnId.stderr_tail;
  }
  obj4.details = stderr_tail;
  obj4.turnId = turnId.turn_id;
  ConjureAnalytics.trackConjureErrored(projectId, obj4);
}
function handleProjectEvent(event, projectId) {
  projectId = projectId.projectId;
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_PROJECT_EVENT", projectId, event });
  let tmp3 = "app_channel_deleted" !== event.type;
  if (tmp3) {
    tmp3 = "remixed" !== event.type;
  }
  if (tmp3) {
    const result = ConjureActionCreators.refreshConjureInstallState(projectId);
  }
  const obj2 = { type: "CONJURE_CHAT_PROJECT_EVENT", projectId, event };
}
let obj3 = { location: "connection", code: ConjureAnalytics.ConjureErrorCodes.SEND_FAILED };
let obj4 = { location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR };
let obj5 = { build_error: { location: "build", code: ConjureAnalytics.ConjureErrorCodes.BUILD_FAILED }, healthcheck_failed: null, error: null };
let obj = {
  message_disposition(disposition, projectId) {
    disposition = disposition.disposition;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(disposition) : call(closure_6, disposition)) {
      obj3 = { type: "CONJURE_CHAT_MESSAGE_DISPOSITION", projectId: projectId.projectId, id: null, activeTurnId: null, disposition: null };
      ({ id: obj2.id, active_turn_id: obj2.activeTurnId, disposition: obj2.disposition } = disposition);
      DispatcherDefault.dispatch(obj3);
    }
  },
  message_cancelled(id, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: projectId.projectId, id: id.id });
  },
  app_removed: handleProjectEvent,
  bot_removed: handleProjectEvent,
  preview_bot_removed: handleProjectEvent,
  app_channel_deleted: handleProjectEvent,
  remixed: handleProjectEvent,
  side_reply(id, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_SIDE_REPLY", projectId: projectId.projectId, id: id.id, inReplyTo: id.in_reply_to, content: id.content, timestamp: id.ts });
  },
  source_checkpoint(turnId, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_SOURCE_CHECKPOINT", projectId: projectId.projectId, turnId: turnId.turn_id, sourceSha: turnId.source_sha });
  },
  turn_notification(body, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_TURN_NOTIFICATION", projectId: projectId.projectId, body: body.summary, nonce: body.nonce });
  },
  provisional_todo(turnId, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId: projectId.projectId, turnId: turnId.turn_id, text: turnId.text });
  }
};
let obj2 = {
  reaction(setting, arg1) {
    const result = conjureAgentReaction.agentReactionFromStep(setting);
    if (tmp3) {
      obj3 = { type: "CONJURE_CHAT_MESSAGE_REACTION", projectId: arg1.projectId, id: setting.message_id, reaction: result };
      DispatcherDefault.dispatch(obj3);
    }
    tmp3 = null != setting.message_id && null != result;
  },
  reply(message, projectId) {
    projectId = projectId.projectId;
    let str = message.message;
    if (str == null) {
      str = "";
    }
    if ("" !== str) {
      const obj = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: message.turn_id, patch: null };
      const obj2 = { content: str, kind: "message" };
      obj.patch = obj2;
      DispatcherDefault.dispatch(obj);
    } else {
      const intl = util.intl;
      const stringResult = intl.string(_modDef3830["913RMa"]);
      let tmp = obj4;
      if (obj4 === undefined) {
        tmp = obj3;
      }
      obj3 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: null };
      obj4 = { type: "step", kind: "terminal_error", message: stringResult };
      obj3.step = obj4;
      DispatcherDefault.dispatch(obj3);
      const tmp12Result = DispatcherDefault;
      obj5 = {};
      const merged = Object.assign(tmp);
      obj5.message = stringResult;
      ConjureAnalytics.trackConjureErrored(projectId, obj5);
      const tmp10Result = ConjureAnalytics;
    }
  },
  thinking_lifecycle(arg0, projectId) {
    ({ phase, session, seq, ticks, elapsed_ms, text } = arg0);
    let tmp = null != phase;
    if (tmp) {
      tmp = null != seq;
    }
    if (tmp) {
      tmp = null != session;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_THINKING_SET", projectId: projectId.projectId, activity: null };
      obj3 = { phase, session, seq, ticks: null, elapsedMs: null, text: null };
      if (ticks == null) {
        ticks = 0;
      }
      obj3.ticks = ticks;
      if (elapsed_ms == null) {
        elapsed_ms = 0;
      }
      obj3.elapsedMs = elapsed_ms;
      if (text == null) {
        text = "";
      }
      obj3.text = text;
      obj2.activity = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  compaction(phase, projectId) {
    let tmp = "start" !== phase.phase;
    if (tmp) {
      tmp = "end" !== phase.phase;
    }
    if (!tmp) {
      const obj2 = { type: "CONJURE_CHAT_COMPACTING_SET", projectId: projectId.projectId, compacting: "start" === phase.phase };
      DispatcherDefault.dispatch(obj2);
    }
  },
  saving(phase, projectId) {
    let tmp = "start" !== phase.phase;
    if (tmp) {
      tmp = "end" !== phase.phase;
    }
    if (!tmp) {
      const obj2 = { type: "CONJURE_CHAT_SAVING_SET", projectId: projectId.projectId, saving: "start" === phase.phase };
      DispatcherDefault.dispatch(obj2);
    }
  },
  todos(turn_id, projectId) {
    projectId = projectId.projectId;
    let items = turn_id.items;
    if (items == null) {
      items = [];
    }
    if (items.length > 0) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: turn_id.turn_id, patch: null };
      obj3 = { todos: items };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
      obj5 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turn_id.turn_id, step: turn_id };
      DispatcherDefault.dispatch(obj5);
    }
  },
  plan_proposed(proposal, projectId) {
    projectId = projectId.projectId;
    if (null != proposal.proposal) {
      const obj = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: proposal.turn_id, patch: null };
      const obj2 = { proposal: proposal.proposal, kind: "proposal" };
      obj.patch = obj2;
      DispatcherDefault.dispatch(obj);
    } else {
      const intl = util.intl;
      const stringResult = intl.string(_modDef3830["0+RUWx"]);
      let tmp = obj4;
      if (obj4 === undefined) {
        tmp = obj3;
      }
      obj3 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: null };
      obj4 = { type: "step", kind: "terminal_error", message: stringResult };
      obj3.step = obj4;
      DispatcherDefault.dispatch(obj3);
      const tmp12Result = DispatcherDefault;
      obj5 = {};
      const merged = Object.assign(tmp);
      obj5.message = stringResult;
      ConjureAnalytics.trackConjureErrored(projectId, obj5);
      const tmp10Result = ConjureAnalytics;
    }
  },
  ideas(ideas, projectId) {
    let tmp = null != ideas.ideas;
    if (tmp) {
      tmp = ideas.ideas.length > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: projectId.projectId, turnId: ideas.turn_id, patch: null };
      obj3 = { ideas: ideas.ideas };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  restore_proposal(restore_proposal, arg1) {
    if (null != restore_proposal.restore_proposal) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: restore_proposal.turn_id, patch: null };
      obj3 = { restoreProposal: restore_proposal.restore_proposal };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  publish_schedule_proposal(publish_schedule_proposal, arg1) {
    if (null != publish_schedule_proposal.publish_schedule_proposal) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: publish_schedule_proposal.turn_id, patch: null };
      obj3 = { publishScheduleProposal: publish_schedule_proposal.publish_schedule_proposal };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  clarification(onSubmit, arg1) {
    let tmp = null != onSubmit.clarification;
    if (tmp) {
      const questions = onSubmit.clarification.questions;
      let num;
      if (questions != null) {
        num = questions.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp = num > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: arg1.projectId, turnId: onSubmit.turn_id, patch: null };
      obj3 = { clarification: onSubmit.clarification };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  attachment(bottomSheetClose, arg1) {
    let tmp = null != bottomSheetClose.attachments;
    if (tmp) {
      tmp = bottomSheetClose.attachments.length > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: arg1.projectId, turnId: bottomSheetClose.turn_id, patch: null };
      obj3 = { attachments: bottomSheetClose.attachments };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  collect_secrets(fields, projectId) {
    fields = fields.fields;
    if (fields == null) {
      fields = [];
    }
    if (fields.length > 0) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: projectId.projectId, turnId: fields.turn_id, patch: null };
      obj3 = { secretRequest: null };
      const obj7 = { request_id: null, over_mcp: null, fields: null, note: null, copy_values: null };
      ({ request_id: obj4.request_id, over_mcp: obj4.over_mcp } = fields);
      obj7.fields = fields;
      ({ note: obj4.note, copy_values: obj4.copy_values } = fields);
      obj3.secretRequest = obj7;
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  collect_settings(keys, projectId) {
    const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: projectId.projectId, turnId: keys.turn_id, patch: { settingsRequest: { keys: keys.keys, note: keys.note } } };
    DispatcherDefault.dispatch(obj2);
  },
  awaiting_user(action, arg1) {
    if ("secrets" === action.action) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: action.turn_id, patch: null };
      obj3 = { awaitingUser: null };
      obj4 = { action: action.action };
      obj3.awaitingUser = obj4;
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  intake(intake, projectId) {
    let tmp = null != intake.intake;
    if (tmp) {
      const questions = intake.intake.questions;
      let num;
      if (questions != null) {
        num = questions.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp = num > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: projectId.projectId, turnId: intake.turn_id, patch: null };
      obj3 = { intake: intake.intake };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  },
  usage(turn, projectId) {
    let tmp = null != turn.turn;
    if (tmp) {
      tmp = null != turn.project;
    }
    if (tmp) {
      obj3 = { type: "CONJURE_CHAT_USAGE_SET", projectId: projectId.projectId, turn: null, project: null };
      ({ turn: obj2.turn, project: obj2.project } = turn);
      DispatcherDefault.dispatch(obj3);
    }
  },
  build_error: appendFailureStep,
  healthcheck_failed: appendFailureStep,
  error: appendFailureStep
};
let obj6 = { location: "build", code: ConjureAnalytics.ConjureErrorCodes.BUILD_FAILED };
obj5.healthcheck_failed = { location: "healthcheck", code: ConjureAnalytics.ConjureErrorCodes.HEALTHCHECK_FAILED };
let obj7 = { location: "healthcheck", code: ConjureAnalytics.ConjureErrorCodes.HEALTHCHECK_FAILED };
obj5.error = { location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR };
let closure_6 = { steered: true, queued: true, restarting: true, answered: true };
let result = size.fileFinishedImporting("modules/conjure/chat/conjureChatConnection.tsx");

export const chatFrameHandlers = obj;
export const chatStepHandlers = obj2;
export const sendFailedStep = function sendFailedStep(projectId, message) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj3;
  }
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } });
  obj3 = ConjureAnalytics;
  obj4 = {};
  const merged = Object.assign(tmp);
  obj4.message = message;
  obj3.trackConjureErrored(projectId, obj4);
};
export const appendTurnStep = function appendTurnStep(projectId, turnId) {
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turnId.turn_id, step: turnId });
};
export const sendQueuedMessageAction = function sendQueuedMessageAction(projectId, id, arg2) {
  try {
    const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = obj2.sendQueuedMessageAction(arg2, id);
    }
    obj2 = conjureSocket;
  } catch (err) {
  }
};
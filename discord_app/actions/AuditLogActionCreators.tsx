// === Module 17386: makeRequest ===

// Module 17386 (makeRequest)
import sendRequest from "sendRequest" /* 527 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_3 from "AuditLogActions" /* 17376 */;
import ME from "ME" /* 673 */;

require = arg1;
function makeRequest(arg0, arg1) {
  ({ before, userId, targetId, action } = arg1);
  if (userId == null) {
    userId = closure_3.userIdFilter;
  }
  if (action == null) {
    action = closure_3.actionFilter;
  }
  if (targetId == null) {
    targetId = closure_3.targetIdFilter;
  }
  let obj = { limit: closure_5 };
  if (null != before) {
    obj.before = before;
  }
  if (null != userId) {
    obj.user_id = userId;
  }
  if (null != action) {
    obj.action_type = action;
  }
  if (null != targetId) {
    obj.target_id = targetId;
  }
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_4.GUILD_AUDIT_LOG(arg0), query: obj, oldFormErrors: true, rejectWithError: true };
  return HTTP.get(obj);
}
({ Endpoints: c4, AUDIT_LOG_PAGE_LIMIT: c5 } = ME);
const result = require("set").fileFinishedImporting("actions/AuditLogActionCreators.tsx");

export const fetchLogs = function fetchLogs(guildId) {
  if (!tmp) {
    if (null != guildId) {
      let obj = dispatcherDefault;
      obj.dispatch({ type: "AUDIT_LOG_FETCH_START" });
      obj = { userId: null, action: null, targetId: null };
      obj[0] = arg1;
      obj[1] = arg3;
      obj[2] = arg2;
      return makeRequest(guildId, obj).then((body) => {
        ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
        callback(706).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
      }, () => callback(706).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
    }
  }
};
export const fetchNextLogPage = function fetchNextLogPage(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (closure_3.hasOlderLogs) {
    if (!tmp2) {
      if (null != guildId) {
        const logs = tmp.logs;
        let id = null;
        if (null != logs[logs.length - 1]) {
          id = tmp10.id;
        }
        let obj = dispatcherDefault;
        obj = { type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: null, isGroupedFetch: null };
        obj[1] = id;
        obj[2] = flag;
        obj.dispatch(obj);
        obj = { before: null };
        obj[0] = id;
        return makeRequest(guildId, obj).then((body) => {
          ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
          callback(706).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
        }, () => callback(706).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }));
      }
    }
    tmp2 = tmp.isLoading || tmp.isLoadingNextPage;
  }
};
export const filterByAction = function filterByAction(arg0, guildId) {
  if (!tmp2) {
    if (null != guildId) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_ACTION", action: null };
      obj[1] = arg0;
      dispatcherDefault.dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != guildId) {
          dispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: null, targetId: null };
          obj[1] = arg0;
          const tmp10Result = dispatcherDefault;
          nextPromise = makeRequest(guildId, obj).then((body) => {
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            callback(706).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => callback(706).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(guildId, obj);
        }
      }
      return nextPromise;
    }
  }
};
export const filterByUserId = function filterByUserId(id, guildId) {
  if (!tmp2) {
    if (null != guildId) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_USER", userId: null };
      obj[1] = id;
      dispatcherDefault.dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != guildId) {
          dispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: "Array", targetId: "isArray" };
          obj[0] = id;
          const tmp10Result = dispatcherDefault;
          nextPromise = makeRequest(guildId, obj).then((body) => {
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            callback(706).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => callback(706).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(guildId, obj);
        }
      }
      return nextPromise;
    }
  }
};
export const filterByTargetId = function filterByTargetId(arg0, arg1) {
  if (!tmp2) {
    if (null != arg1) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_TARGET", targetId: null };
      obj[1] = arg0;
      dispatcherDefault.dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != arg1) {
          dispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: "Array", targetId: 102039555 };
          obj[2] = arg0;
          const tmp10Result = dispatcherDefault;
          nextPromise = makeRequest(arg1, obj).then((body) => {
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            callback(706).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => callback(706).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(arg1, obj);
        }
      }
      return nextPromise;
    }
  }
};
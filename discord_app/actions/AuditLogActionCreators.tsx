// discord_app/actions/AuditLogActionCreators.tsx
import AuditLogActions from "AuditLogActions";
import ME from "ME";

let c4;
let c5;
const require = arg1;
function makeRequest(arg0, arg1) {
  let action;
  let before;
  let targetId;
  let userId;
  ({ before, userId, targetId, action } = arg1);
  if (userId == null) {
    userId = AuditLogActions.userIdFilter;
  }
  if (action == null) {
    action = AuditLogActions.actionFilter;
  }
  if (targetId == null) {
    targetId = AuditLogActions.targetIdFilter;
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
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  obj = { url: closure_4.GUILD_AUDIT_LOG(arg0), query: obj, oldFormErrors: true, rejectWithError: true };
  return HTTP.get(obj);
}
({ Endpoints: c4, AUDIT_LOG_PAGE_LIMIT: c5 } = ME);
const result = require("sendRequest").fileFinishedImporting("actions/AuditLogActionCreators.tsx");

export const fetchLogs = function fetchLogs(guildId) {
  if (!tmp) {
    if (null != guildId) {
      let obj = require("../Dispatcher.tsx");
      obj.dispatch({ type: "AUDIT_LOG_FETCH_START" });
      obj = { userId: null, action: null, targetId: null };
      obj[0] = arg1;
      obj[1] = arg3;
      obj[2] = arg2;
      return makeRequest(guildId, obj).then((body) => {
        let application_commands;
        let audit_log_entries;
        let auto_moderation_rules;
        let guild_scheduled_events;
        let integrations;
        let threads;
        let users;
        let webhooks;
        ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
        callback(709).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
      }, () => callback(709).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
    }
  }
};
export const fetchNextLogPage = function fetchNextLogPage(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (AuditLogActions.hasOlderLogs) {
    if (!tmp2) {
      if (null != guildId) {
        const logs = tmp.logs;
        let id = null;
        if (null != logs[logs.length - 1]) {
          id = tmp10.id;
        }
        let obj = require("../Dispatcher.tsx");
        obj = { type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: null, isGroupedFetch: null };
        obj[1] = id;
        obj[2] = flag;
        obj.dispatch(obj);
        obj = { before: null };
        obj[0] = id;
        return makeRequest(guildId, obj).then((body) => {
          let application_commands;
          let audit_log_entries;
          let auto_moderation_rules;
          let guild_scheduled_events;
          let integrations;
          let threads;
          let users;
          let webhooks;
          ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
          callback(709).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
        }, () => callback(709).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }));
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
      require("../Dispatcher.tsx").dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != guildId) {
          require("../Dispatcher.tsx").dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: null, targetId: null };
          obj[1] = arg0;
          const tmp10Result = require("../Dispatcher.tsx");
          nextPromise = makeRequest(guildId, obj).then((body) => {
            let application_commands;
            let audit_log_entries;
            let auto_moderation_rules;
            let guild_scheduled_events;
            let integrations;
            let threads;
            let users;
            let webhooks;
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            callback(709).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => callback(709).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
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
      require("../Dispatcher.tsx").dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != guildId) {
          require("../Dispatcher.tsx").dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: "Array", targetId: "isArray" };
          obj[0] = id;
          const tmp10Result = require("../Dispatcher.tsx");
          nextPromise = makeRequest(guildId, obj).then((body) => {
            let application_commands;
            let audit_log_entries;
            let auto_moderation_rules;
            let guild_scheduled_events;
            let integrations;
            let threads;
            let users;
            let webhooks;
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            callback(709).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => callback(709).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
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
      require("../Dispatcher.tsx").dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != arg1) {
          require("../Dispatcher.tsx").dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: "Array", targetId: 8 };
          obj[2] = arg0;
          const tmp10Result = require("../Dispatcher.tsx");
          nextPromise = makeRequest(arg1, obj).then((body) => {
            let application_commands;
            let audit_log_entries;
            let auto_moderation_rules;
            let guild_scheduled_events;
            let integrations;
            let threads;
            let users;
            let webhooks;
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            callback(709).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => callback(709).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(arg1, obj);
        }
      }
      return nextPromise;
    }
  }
};
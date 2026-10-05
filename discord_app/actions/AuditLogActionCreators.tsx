// === Module 17718: AuditLogActionCreators ===

// Module 17718 (AuditLogActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17713 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const f131767 = (body) => {
  let application_commands;
  let audit_log_entries;
  let auto_moderation_rules;
  let guild_scheduled_events;
  let threads;
  let users;
  let webhooks;
  ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
};
const f131768 = () => {
  const obj = DispatcherDefault;
  return obj.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" });
};
function makeRequest(arg0, arg1) {
  let action;
  let before;
  let targetId;
  let userId;
  ({ before, userId, targetId, action } = arg1);
  if (userId == null) {
    userId = GuildSettingsAuditLogStore.userIdFilter;
  }
  if (action == null) {
    action = GuildSettingsAuditLogStore.actionFilter;
  }
  if (targetId == null) {
    targetId = GuildSettingsAuditLogStore.targetIdFilter;
  }
  const obj = { limit: hasOwnProperty };
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
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React3.GUILD_AUDIT_LOG(arg0), query: obj, oldFormErrors: true, rejectWithError: true };
  return HTTP.get(request);
}
({ Endpoints: closure_4, AUDIT_LOG_PAGE_LIMIT: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("actions/AuditLogActionCreators.tsx");

export const fetchLogs = function fetchLogs(guildId, userId, targetId, action) {
  const tmp = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
  if (!tmp) {
    if (null != guildId) {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "AUDIT_LOG_FETCH_START" });
      const obj2 = { userId, action, targetId };
      const promise = makeRequest(guildId, obj2);
      return promise.then(f131767, f131768);
    }
  }
};
export const fetchNextLogPage = function fetchNextLogPage(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (GuildSettingsAuditLogStore.hasOlderLogs) {
    const tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
    if (!tmp2) {
      if (null != guildId) {
        const logs = GuildSettingsAuditLogStore.logs;
        let id = null;
        if (null != logs[logs.length - 1]) {
          id = tmp10.id;
        }
        let obj = DispatcherDefault;
        const obj2 = { type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: id, isGroupedFetch: flag };
        obj.dispatch(obj2);
        const obj3 = { before: id };
        const promise = makeRequest(guildId, obj3);
        return promise.then((body) => {
          let application_commands;
          let audit_log_entries;
          let auto_moderation_rules;
          let guild_scheduled_events;
          let threads;
          let users;
          let webhooks;
          ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
          const obj = DispatcherDefault;
          obj.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
        }, () => {
          const obj = DispatcherDefault;
          return obj.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" });
        });
      }
    }
  }
};
export const filterByAction = function filterByAction(action, guildId) {
  const tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
  if (!tmp2) {
    if (null != guildId) {
      const obj = { type: "AUDIT_LOG_FILTER_BY_ACTION", action };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj);
      let nextPromise;
      const tmp5 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
      if (!tmp5) {
        if (null != guildId) {
          const tmp10Result = DispatcherDefault;
          tmp10Result.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          const obj2 = { userId: null, action, targetId: null };
          const promise = makeRequest(guildId, obj2);
          nextPromise = promise.then(f131767, f131768);
        }
      }
      return nextPromise;
    }
  }
};
export const filterByUserId = function filterByUserId(id, guildId) {
  const tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
  if (!tmp2) {
    if (null != guildId) {
      const obj = { type: "AUDIT_LOG_FILTER_BY_USER", userId: id };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj);
      let nextPromise;
      const tmp5 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
      if (!tmp5) {
        if (null != guildId) {
          const tmp10Result = DispatcherDefault;
          tmp10Result.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          const obj2 = { userId: id, action: "Array", targetId: "toCharArray$esjava$1" };
          const promise = makeRequest(guildId, obj2);
          nextPromise = promise.then(f131767, f131768);
        }
      }
      return nextPromise;
    }
  }
};
export const filterByTargetId = function filterByTargetId(targetId, arg1) {
  const tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
  if (!tmp2) {
    if (null != arg1) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_TARGET", targetId };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj);
      let nextPromise;
      const tmp5 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
      if (!tmp5) {
        if (null != arg1) {
          const tmp10Result = DispatcherDefault;
          tmp10Result.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          const obj2 = { userId: null, action: "Array", targetId };
          const promise = makeRequest(arg1, obj2);
          nextPromise = promise.then(f131767, f131768);
        }
      }
      return nextPromise;
    }
  }
};
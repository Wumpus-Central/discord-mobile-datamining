// === Module 17546: AuditLogActionCreators ===

// Module 17546 (AuditLogActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17536 */;

require = fn;
function makeRequest(arg0, arg1) {
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
  const obj = { limit };
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
  const request = { url: React4.GUILD_AUDIT_LOG(arg0), query: obj, oldFormErrors: true, rejectWithError: true };
  return HTTP.get(request);
}
const Constants = fn(1074);
({ Endpoints: closure_4, AUDIT_LOG_PAGE_LIMIT: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("actions/AuditLogActionCreators.tsx");

export const fetchLogs = function fetchLogs(guildId, userId, targetId, action) {
  if (!tmp) {
    if (null != guildId) {
      let obj = DispatcherDefault;
      obj.dispatch({ type: "AUDIT_LOG_FETCH_START" });
      obj = { userId, action, targetId };
      return makeRequest(guildId, obj).then((body) => {
        ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
        DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
      }, () => DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
    }
  }
  tmp = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
};
export const fetchNextLogPage = function fetchNextLogPage(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (GuildSettingsAuditLogStore.hasOlderLogs) {
    if (!tmp2) {
      if (null != guildId) {
        const logs = GuildSettingsAuditLogStore.logs;
        let id = null;
        if (null != logs[logs.length - 1]) {
          id = tmp10.id;
        }
        let obj = { type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: id, isGroupedFetch: flag };
        obj.dispatch(obj);
        obj = { before: id };
        return makeRequest(guildId, obj).then((body) => {
          ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
          DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
        }, () => DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }));
      }
    }
    tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
  }
};
export const filterByAction = function filterByAction(navigation, guildId) {
  if (!tmp2) {
    if (null != guildId) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_ACTION", action: navigation };
      DispatcherDefault.dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != guildId) {
          DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: navigation, targetId: null };
          const tmp10Result = DispatcherDefault;
          nextPromise = makeRequest(guildId, obj).then((body) => {
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(guildId, obj);
        }
      }
      return nextPromise;
    }
  }
  tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
};
export const filterByUserId = function filterByUserId(id, guildId) {
  if (!tmp2) {
    if (null != guildId) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_USER", userId: id };
      DispatcherDefault.dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != guildId) {
          DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: id, action: "Array", targetId: "isArray" };
          const tmp10Result = DispatcherDefault;
          nextPromise = makeRequest(guildId, obj).then((body) => {
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(guildId, obj);
        }
      }
      return nextPromise;
    }
  }
  tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
};
export const filterByTargetId = function filterByTargetId(targetId, arg1) {
  if (!tmp2) {
    if (null != arg1) {
      let obj = { type: "AUDIT_LOG_FILTER_BY_TARGET", targetId };
      DispatcherDefault.dispatch(obj);
      let nextPromise;
      if (!tmp5) {
        if (null != arg1) {
          DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_START" });
          obj = { userId: null, action: "Array", targetId };
          const tmp10Result = DispatcherDefault;
          nextPromise = makeRequest(arg1, obj).then((body) => {
            ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
            DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
          }, () => DispatcherDefault.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
          const promise = makeRequest(arg1, obj);
        }
      }
      return nextPromise;
    }
  }
  tmp2 = GuildSettingsAuditLogStore.isLoading || GuildSettingsAuditLogStore.isLoadingNextPage;
};
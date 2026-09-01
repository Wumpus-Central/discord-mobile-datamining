// discord_app/modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import closure_2 from "../../../records/AuditLogRecord.tsx";
import { AuditLogChange } from "../../../records/AuditLogRecord.tsx";
import { isGuildSelectableChannelType as closure_4 } from "../../../records/ChannelRecord.tsx";
import { hasAnyPermission } from "../../../records/GuildRoleRecord.tsx";
import closure_6 from "../../../stores/GuildMemberStore.tsx";
import closure_7 from "../../../stores/GuildRoleStore.tsx";
import closure_8 from "../../../stores/GuildStore.tsx";
import ME from "../../../Constants.tsx";
import importAllResult from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const AuditLogActions = ME.AuditLogActions;
({
  AuditLogActionTypes: c10,
  AuditLogTargetTypes: unpackModuleId,
  AuditLogChangeKeys: closure_12,
  AUDIT_LOG_PAGE_LIMIT: map1,
  GuildSettingsSections: closure_14,
  Permissions,
} = ME);
let closure_15 = importAllResult.combine(
  Permissions.KICK_MEMBERS,
  Permissions.BAN_MEMBERS,
  Permissions.ADMINISTRATOR,
  Permissions.MANAGE_CHANNELS,
  Permissions.MANAGE_GUILD,
  Permissions.MANAGE_MESSAGES,
  Permissions.MANAGE_NICKNAMES,
  Permissions.MANAGE_ROLES,
  Permissions.MANAGE_WEBHOOKS,
  Permissions.MANAGE_GUILD_EXPRESSIONS,
  Permissions.MOVE_MEMBERS,
  Permissions.MUTE_MEMBERS,
  Permissions.DEAFEN_MEMBERS,
);
let c16 = null;
let closure_17 = [];
let closure_18 = [];
let closure_19 = [];
let closure_20 = [];
let closure_21 = [];
let closure_22 = [];
let closure_23 = [];
let closure_24 = [];
let c25 = true;
let c26 = false;
let c27 = false;
let c28 = true;
let c29 = false;
let c30 = null;
let ALL = AuditLogActions.ALL;
let c32 = null;
let closure_33 = {};
let c34 = 0;
const Store = initializeDefault.Store;
class GuildSettingsAuditLogStore extends Store {}
const prototype = GuildSettingsAuditLogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, closure_7, closure_6);
};
Object.defineProperty(prototype, "logs", {
  get: function logs() {
    return closure_17;
  },
  set: undefined,
});
Object.defineProperty(prototype, "integrations", {
  get: function integrations(arr) {
    return closure_18;
  },
  set: undefined,
});
Object.defineProperty(prototype, "webhooks", {
  get: function webhooks() {
    return closure_20;
  },
  set: undefined,
});
Object.defineProperty(prototype, "guildScheduledEvents", {
  get: function guildScheduledEvents() {
    return closure_21;
  },
  set: undefined,
});
Object.defineProperty(prototype, "automodRules", {
  get: function automodRules() {
    return closure_22;
  },
  set: undefined,
});
Object.defineProperty(prototype, "threads", {
  get: function threads() {
    return closure_23;
  },
  set: undefined,
});
Object.defineProperty(prototype, "applicationCommands", {
  get: function applicationCommands() {
    return closure_24;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isInitialLoading", {
  get: function isInitialLoading() {
    return c25;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLoading", {
  get: function isLoading() {
    return c26;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLoadingNextPage", {
  get: function isLoadingNextPage() {
    return c27;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasOlderLogs", {
  get: function hasOlderLogs() {
    return c28;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasError", {
  get: function hasError() {
    return c29;
  },
  set: undefined,
});
Object.defineProperty(prototype, "userIds", {
  get: function userIds(arg0) {
    return closure_19;
  },
  set: undefined,
});
Object.defineProperty(prototype, "userIdFilter", {
  get: function userIdFilter() {
    return c30;
  },
  set: undefined,
});
Object.defineProperty(prototype, "targetIdFilter", {
  get: function targetIdFilter() {
    return c32;
  },
  set: undefined,
});
Object.defineProperty(prototype, "actionFilter", {
  get: function actionFilter(userIdFilter, arg1) {
    return ALL;
  },
  set: undefined,
});
Object.defineProperty(prototype, "deletedTargets", {
  get: function deletedTargets() {
    return closure_33;
  },
  set: undefined,
});
Object.defineProperty(prototype, "groupedFetchCount", {
  get: function groupedFetchCount() {
    return c34;
  },
  set: undefined,
});
GuildSettingsAuditLogStore.displayName = "GuildSettingsAuditLogStore";
const guildSettingsAuditLogStore = new GuildSettingsAuditLogStore(dispatcherDefault, {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    c26 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    c34 = 0;
    c25 = false;
    c26 = false;
    c28 = true;
    c29 = false;
    logs = logs.logs;
    const items = [];
    c1 = 0;
    const reversed = logs.reverse();
    const item = reversed.forEach((id) => {
      items = [];
      let tmp = null;
      let tmp2 = null;
      let tmp3 = null;
      if (null != id.reason) {
        const tmp9 = new closure_1_3(closure_1_12.REASON, null, id.reason);
        items.push(tmp9);
      }
      if (null != id.changes) {
        const changes = id.changes;
        for (const item10022 of changes) {
          let tmp13 = closure_1_3;
          let tmp14 = new.target;
          let tmp15 = new.target;
          let tmp16 = new closure_1_3(item10022.key, item10022.old_value, item10022.new_value);
          let tmp17 = tmp16;
          let tmp18 = tmp16;
          let arr = items.push(tmp16);
          let tmp20 = closure_1_12;
          if (tmp16.key === closure_1_12.NAME) {
            tmp = tmp17;
          } else {
            let tmp21 = tmp17;
            let tmp22 = closure_1_12;
            if (tmp18.key === closure_1_12.TYPE) {
              tmp3 = tmp17;
            } else {
              let tmp23 = tmp17;
              let tmp24 = closure_1_12;
              if (tmp18.key === closure_1_12.TITLE) {
                tmp2 = tmp17;
              }
            }
          }
          continue;
        }
      }
      if (id.action_type === closure_1_9.MEMBER_PRUNE) {
        let num2 = 1;
        if (null != id) {
          num2 = 1;
          if (null != id.options) {
            num2 = 1;
            if (null != id.options.delete_member_days) {
              num2 = id.options.delete_member_days;
            }
          }
        }
        const tmp32 = new closure_1_3(closure_1_12.PRUNE_DELETE_DAYS, null, num2);
        let arr1 = items.push(tmp32);
      }
      let tmp35 = id.action_type === tmp25.AUTO_MODERATION_BLOCK_MESSAGE;
      if (tmp35) {
        const options = id.options;
        let prop;
        if (options != null) {
          prop = options.auto_moderation_rule_name;
        }
        tmp35 = null != prop;
      }
      if (tmp35) {
        const tmp42 = new closure_1_3(
          closure_1_12.AUTO_MODERATION_TRIGGERED_RULE_NAME,
          null,
          id.options.auto_moderation_rule_name,
        );
        items.push(tmp42);
      }
      let tmp45 = id.action_type === tmp25.VOICE_CHANNEL_STATUS_CREATE;
      if (tmp45) {
        const options2 = id.options;
        let status;
        if (options2 != null) {
          status = options2.status;
        }
        tmp45 = null != status;
      }
      if (tmp45) {
        const tmp52 = new closure_1_3(closure_1_12.STATUS, null, id.options.status);
        items.push(tmp52);
      }
      let obj = {
        id: id.id,
        action: id.action_type,
        targetId: id.target_id,
        userId: id.user_id,
        changes: items,
        options: id.options,
      };
      const tmp55 = new closure_1_2(obj);
      arr1 = items;
      const first = items[0];
      if (
        (function shouldMergeEntries(first, action2, c1) {
          let isEqualResult =
            null != first &&
            first.action === action2.action &&
            first.targetId === action2.targetId &&
            first.userId === action2.userId;
          if (isEqualResult) {
            isEqualResult = callback(table[8]).isEqual(first.options, action2.options);
            const obj = callback(table[8]);
          }
          if (isEqualResult) {
            const timestampStart = action2.timestampStart;
            isEqualResult = timestampStart.diff(first.timestampStart, "minutes") < num;
          }
          if (isEqualResult) {
            isEqualResult = c1 < num2;
          }
          if (isEqualResult) {
            isEqualResult = action2.targetType !== constants2.INVITE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_DELETE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_BULK_DELETE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_PIN;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_UNPIN;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MEMBER_MOVE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MEMBER_DISCONNECT;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.BOT_ADD;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.APPLICATION_COMMAND_PERMISSION_UPDATE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MEMBER_PRUNE;
          }
          return isEqualResult;
        })(first, tmp55, c1)
      ) {
        obj = { changes: null, timestampEnd: null };
        items1 = [];
        HermesBuiltin.arraySpread(tmp55.changes, HermesBuiltin.arraySpread(first.changes, 0));
        obj[0] = items1;
        obj[1] = tmp55.timestampStart;
        arr1[0] = first.merge(obj);
        c1 = c1 + 1;
      } else {
        if (tmp55.actionType === closure_1_10.DELETE) {
          if (null != tmp) {
            let oldValue;
            if (tmp != null) {
              oldValue = tmp.oldValue;
            }
            if (oldValue == null) {
              let oldValue1;
              if (tmp2 != null) {
                oldValue1 = tmp2.oldValue;
              }
              oldValue = oldValue1;
            }
            let tmp62 = tmp55.targetType !== closure_1_11.CHANNEL && tmp55.targetType !== tmp61.CHANNEL_OVERWRITE;
            if (!tmp62) {
              tmp62 = null === tmp3;
            }
            if (!tmp62) {
              tmp62 = !closure_1_4(tmp3.oldValue);
            }
            let combined = oldValue;
            if (!tmp62) {
              const _HermesInternal = HermesInternal;
              combined = "#" + oldValue;
            }
            if (null == closure_1_33[tmp55.targetType]) {
              obj = {};
              obj[tmp55.targetId] = combined;
              closure_1_33[tmp55.targetType] = obj;
            } else {
              closure_1_33[tmp55.targetType][tmp55.targetId] = combined;
            }
          }
        }
        c1 = 0;
        arr1.unshift(tmp55);
      }
    });
    ({ integrations: closure_18, webhooks: closure_20, guildScheduledEvents: closure_21, automodRules } = logs);
    if (automodRules == null) {
      automodRules = [];
    }
    ({ threads: closure_23, applicationCommands: closure_24 } = logs);
    if (logs.logs.length < closure_13) {
      c28 = false;
    }
  },
  AUDIT_LOG_FETCH_FAIL: function handleFetchedLogsFail() {
    c26 = false;
    c29 = true;
    closure_17 = [];
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function handleStartFetchNextPage(isGroupedFetch) {
    c27 = true;
    if (isGroupedFetch.isGroupedFetch) {
      closure_34 = closure_34 + 1;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function handleFetchedNextPage(logs) {
    logs = logs.logs;
    c27 = false;
    ({
      integrations: closure_18,
      webhooks: closure_20,
      guildScheduledEvents: closure_21,
      automodRules: closure_22,
      threads: closure_23,
      applicationCommands: closure_24,
    } = logs);
    let tmp = 0 === logs.length;
    if (!tmp) {
      tmp = logs.length < closure_13;
    }
    if (tmp) {
      c28 = false;
    }
    if (logs.length > 0) {
      let items = [];
      c1 = 0;
      const reversed = logs.reverse();
      const item = reversed.forEach((id) => {
        items = [];
        let tmp = null;
        let tmp2 = null;
        let tmp3 = null;
        if (null != id.reason) {
          const tmp9 = new closure_1_3(closure_1_12.REASON, null, id.reason);
          items.push(tmp9);
        }
        if (null != id.changes) {
          const changes = id.changes;
          for (const item10022 of changes) {
            let tmp13 = closure_1_3;
            let tmp14 = new.target;
            let tmp15 = new.target;
            let tmp16 = new closure_1_3(item10022.key, item10022.old_value, item10022.new_value);
            let tmp17 = tmp16;
            let tmp18 = tmp16;
            let arr = items.push(tmp16);
            let tmp20 = closure_1_12;
            if (tmp16.key === closure_1_12.NAME) {
              tmp = tmp17;
            } else {
              let tmp21 = tmp17;
              let tmp22 = closure_1_12;
              if (tmp18.key === closure_1_12.TYPE) {
                tmp3 = tmp17;
              } else {
                let tmp23 = tmp17;
                let tmp24 = closure_1_12;
                if (tmp18.key === closure_1_12.TITLE) {
                  tmp2 = tmp17;
                }
              }
            }
            continue;
          }
        }
        if (id.action_type === closure_1_9.MEMBER_PRUNE) {
          let num2 = 1;
          if (null != id) {
            num2 = 1;
            if (null != id.options) {
              num2 = 1;
              if (null != id.options.delete_member_days) {
                num2 = id.options.delete_member_days;
              }
            }
          }
          const tmp32 = new closure_1_3(closure_1_12.PRUNE_DELETE_DAYS, null, num2);
          let arr1 = items.push(tmp32);
        }
        let tmp35 = id.action_type === tmp25.AUTO_MODERATION_BLOCK_MESSAGE;
        if (tmp35) {
          const options = id.options;
          let prop;
          if (options != null) {
            prop = options.auto_moderation_rule_name;
          }
          tmp35 = null != prop;
        }
        if (tmp35) {
          const tmp42 = new closure_1_3(
            closure_1_12.AUTO_MODERATION_TRIGGERED_RULE_NAME,
            null,
            id.options.auto_moderation_rule_name,
          );
          items.push(tmp42);
        }
        let tmp45 = id.action_type === tmp25.VOICE_CHANNEL_STATUS_CREATE;
        if (tmp45) {
          const options2 = id.options;
          let status;
          if (options2 != null) {
            status = options2.status;
          }
          tmp45 = null != status;
        }
        if (tmp45) {
          const tmp52 = new closure_1_3(closure_1_12.STATUS, null, id.options.status);
          items.push(tmp52);
        }
        let obj = {
          id: id.id,
          action: id.action_type,
          targetId: id.target_id,
          userId: id.user_id,
          changes: items,
          options: id.options,
        };
        const tmp55 = new closure_1_2(obj);
        arr1 = items;
        const first = items[0];
        if (
          (function shouldMergeEntries(first, action2, c1) {
            let isEqualResult =
              null != first &&
              first.action === action2.action &&
              first.targetId === action2.targetId &&
              first.userId === action2.userId;
            if (isEqualResult) {
              isEqualResult = callback(table[8]).isEqual(first.options, action2.options);
              const obj = callback(table[8]);
            }
            if (isEqualResult) {
              const timestampStart = action2.timestampStart;
              isEqualResult = timestampStart.diff(first.timestampStart, "minutes") < num;
            }
            if (isEqualResult) {
              isEqualResult = c1 < num2;
            }
            if (isEqualResult) {
              isEqualResult = action2.targetType !== constants2.INVITE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_DELETE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_BULK_DELETE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_PIN;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_UNPIN;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MEMBER_MOVE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MEMBER_DISCONNECT;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.BOT_ADD;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.APPLICATION_COMMAND_PERMISSION_UPDATE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MEMBER_PRUNE;
            }
            return isEqualResult;
          })(first, tmp55, c1)
        ) {
          obj = { changes: null, timestampEnd: null };
          items1 = [];
          HermesBuiltin.arraySpread(tmp55.changes, HermesBuiltin.arraySpread(first.changes, 0));
          obj[0] = items1;
          obj[1] = tmp55.timestampStart;
          arr1[0] = first.merge(obj);
          c1 = c1 + 1;
        } else {
          if (tmp55.actionType === closure_1_10.DELETE) {
            if (null != tmp) {
              let oldValue;
              if (tmp != null) {
                oldValue = tmp.oldValue;
              }
              if (oldValue == null) {
                let oldValue1;
                if (tmp2 != null) {
                  oldValue1 = tmp2.oldValue;
                }
                oldValue = oldValue1;
              }
              let tmp62 = tmp55.targetType !== closure_1_11.CHANNEL && tmp55.targetType !== tmp61.CHANNEL_OVERWRITE;
              if (!tmp62) {
                tmp62 = null === tmp3;
              }
              if (!tmp62) {
                tmp62 = !closure_1_4(tmp3.oldValue);
              }
              let combined = oldValue;
              if (!tmp62) {
                const _HermesInternal = HermesInternal;
                combined = "#" + oldValue;
              }
              if (null == closure_1_33[tmp55.targetType]) {
                obj = {};
                obj[tmp55.targetId] = combined;
                closure_1_33[tmp55.targetType] = obj;
              } else {
                closure_1_33[tmp55.targetType][tmp55.targetId] = combined;
              }
            }
          }
          c1 = 0;
          arr1.unshift(tmp55);
        }
      });
      let items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items1, 0));
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    c27 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    action = action.action;
  },
  AUDIT_LOG_FILTER_BY_USER: function handleFilterByUser(userId) {
    userId = userId.userId;
  },
  AUDIT_LOG_FILTER_BY_TARGET: function handleFilterByTarget(targetId) {
    targetId = targetId.targetId;
  },
  GUILD_SETTINGS_SET_SECTION: function handleSettingsSetSection(section) {
    importDefault = undefined;
    let unsafeMutableRoles;
    if (section.section !== constants.AUDIT_LOG) {
      return false;
    } else {
      const members = store.getMembers(c16);
      importDefault = store3.getGuild(c16);
      unsafeMutableRoles = undefined;
      if (null != c16) {
        unsafeMutableRoles = store2.getUnsafeMutableRoles(c16);
      }
      const found = importDefault(unsafeMutableRoles[8])(members).filter((roles) => {
        closure_0 = roles;
        roles = roles.roles;
        return roles.some((arg0) => {
          if (null != userId) {
            if (userId.userId === tmp.ownerId) {
              return true;
            } else {
              let tmp4;
              if (closure_1_1 != null) {
                tmp4 = tmp3[arg0];
              }
              let tmp6 = null != tmp4;
              if (tmp6) {
                tmp6 = closure_2_5(tmp4, closure_2_15);
              }
              return tmp6;
            }
          }
        });
      });
      const arr = importDefault(unsafeMutableRoles[8])(members);
      closure_19 = found.map((userId) => userId.userId).value();
    }
  },
  GUILD_SETTINGS_INIT: function handleSettingsInit(guildId) {
    guildId = guildId.guildId;
    c32 = null;
    importDefault = undefined;
    let unsafeMutableRoles;
    if (guildId.section === constants.AUDIT_LOG) {
      const members = store.getMembers(guildId);
      importDefault = store3.getGuild(guildId);
      unsafeMutableRoles = undefined;
      if (null != guildId) {
        unsafeMutableRoles = store2.getUnsafeMutableRoles(guildId);
      }
      const found = importDefault(unsafeMutableRoles[8])(members).filter((roles) => {
        closure_0 = roles;
        roles = roles.roles;
        return roles.some((arg0) => {
          if (null != userId) {
            if (userId.userId === tmp.ownerId) {
              return true;
            } else {
              let tmp4;
              if (closure_1_1 != null) {
                tmp4 = tmp3[arg0];
              }
              let tmp6 = null != tmp4;
              if (tmp6) {
                tmp6 = closure_2_5(tmp4, closure_2_15);
              }
              return tmp6;
            }
          }
        });
      });
      const arr = importDefault(unsafeMutableRoles[8])(members);
      closure_19 = found.map((userId) => userId.userId).value();
      const iter = found.map((userId) => userId.userId);
    }
    return false;
  },
  GUILD_SETTINGS_CLOSE: function handleSettingsClose() {
    closure_17 = [];
    closure_19 = [];
    ALL = AuditLogActions.ALL;
    c30 = null;
    c32 = null;
    closure_33 = {};
    c34 = 0;
    c25 = true;
    closure_18 = [];
    closure_20 = [];
    closure_21 = [];
    closure_22 = [];
    closure_23 = [];
  },
});
let obj = {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    c26 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    c34 = 0;
    c25 = false;
    c26 = false;
    c28 = true;
    c29 = false;
    logs = logs.logs;
    const items = [];
    c1 = 0;
    const reversed = logs.reverse();
    const item = reversed.forEach((id) => {
      items = [];
      let tmp = null;
      let tmp2 = null;
      let tmp3 = null;
      if (null != id.reason) {
        const tmp9 = new closure_1_3(closure_1_12.REASON, null, id.reason);
        items.push(tmp9);
      }
      if (null != id.changes) {
        const changes = id.changes;
        for (const item10022 of changes) {
          let tmp13 = closure_1_3;
          let tmp14 = new.target;
          let tmp15 = new.target;
          let tmp16 = new closure_1_3(item10022.key, item10022.old_value, item10022.new_value);
          let tmp17 = tmp16;
          let tmp18 = tmp16;
          let arr = items.push(tmp16);
          let tmp20 = closure_1_12;
          if (tmp16.key === closure_1_12.NAME) {
            tmp = tmp17;
          } else {
            let tmp21 = tmp17;
            let tmp22 = closure_1_12;
            if (tmp18.key === closure_1_12.TYPE) {
              tmp3 = tmp17;
            } else {
              let tmp23 = tmp17;
              let tmp24 = closure_1_12;
              if (tmp18.key === closure_1_12.TITLE) {
                tmp2 = tmp17;
              }
            }
          }
          continue;
        }
      }
      if (id.action_type === closure_1_9.MEMBER_PRUNE) {
        let num2 = 1;
        if (null != id) {
          num2 = 1;
          if (null != id.options) {
            num2 = 1;
            if (null != id.options.delete_member_days) {
              num2 = id.options.delete_member_days;
            }
          }
        }
        const tmp32 = new closure_1_3(closure_1_12.PRUNE_DELETE_DAYS, null, num2);
        let arr1 = items.push(tmp32);
      }
      let tmp35 = id.action_type === tmp25.AUTO_MODERATION_BLOCK_MESSAGE;
      if (tmp35) {
        const options = id.options;
        let prop;
        if (options != null) {
          prop = options.auto_moderation_rule_name;
        }
        tmp35 = null != prop;
      }
      if (tmp35) {
        const tmp42 = new closure_1_3(
          closure_1_12.AUTO_MODERATION_TRIGGERED_RULE_NAME,
          null,
          id.options.auto_moderation_rule_name,
        );
        items.push(tmp42);
      }
      let tmp45 = id.action_type === tmp25.VOICE_CHANNEL_STATUS_CREATE;
      if (tmp45) {
        const options2 = id.options;
        let status;
        if (options2 != null) {
          status = options2.status;
        }
        tmp45 = null != status;
      }
      if (tmp45) {
        const tmp52 = new closure_1_3(closure_1_12.STATUS, null, id.options.status);
        items.push(tmp52);
      }
      let obj = {
        id: id.id,
        action: id.action_type,
        targetId: id.target_id,
        userId: id.user_id,
        changes: items,
        options: id.options,
      };
      const tmp55 = new closure_1_2(obj);
      arr1 = items;
      const first = items[0];
      if (
        (function shouldMergeEntries(first, action2, c1) {
          let isEqualResult =
            null != first &&
            first.action === action2.action &&
            first.targetId === action2.targetId &&
            first.userId === action2.userId;
          if (isEqualResult) {
            isEqualResult = callback(table[8]).isEqual(first.options, action2.options);
            const obj = callback(table[8]);
          }
          if (isEqualResult) {
            const timestampStart = action2.timestampStart;
            isEqualResult = timestampStart.diff(first.timestampStart, "minutes") < num;
          }
          if (isEqualResult) {
            isEqualResult = c1 < num2;
          }
          if (isEqualResult) {
            isEqualResult = action2.targetType !== constants2.INVITE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_DELETE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_BULK_DELETE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_PIN;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MESSAGE_UNPIN;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MEMBER_MOVE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MEMBER_DISCONNECT;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.BOT_ADD;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.APPLICATION_COMMAND_PERMISSION_UPDATE;
          }
          if (isEqualResult) {
            isEqualResult = action2.action !== constants.MEMBER_PRUNE;
          }
          return isEqualResult;
        })(first, tmp55, c1)
      ) {
        obj = { changes: null, timestampEnd: null };
        items1 = [];
        HermesBuiltin.arraySpread(tmp55.changes, HermesBuiltin.arraySpread(first.changes, 0));
        obj[0] = items1;
        obj[1] = tmp55.timestampStart;
        arr1[0] = first.merge(obj);
        c1 = c1 + 1;
      } else {
        if (tmp55.actionType === closure_1_10.DELETE) {
          if (null != tmp) {
            let oldValue;
            if (tmp != null) {
              oldValue = tmp.oldValue;
            }
            if (oldValue == null) {
              let oldValue1;
              if (tmp2 != null) {
                oldValue1 = tmp2.oldValue;
              }
              oldValue = oldValue1;
            }
            let tmp62 = tmp55.targetType !== closure_1_11.CHANNEL && tmp55.targetType !== tmp61.CHANNEL_OVERWRITE;
            if (!tmp62) {
              tmp62 = null === tmp3;
            }
            if (!tmp62) {
              tmp62 = !closure_1_4(tmp3.oldValue);
            }
            let combined = oldValue;
            if (!tmp62) {
              const _HermesInternal = HermesInternal;
              combined = "#" + oldValue;
            }
            if (null == closure_1_33[tmp55.targetType]) {
              obj = {};
              obj[tmp55.targetId] = combined;
              closure_1_33[tmp55.targetType] = obj;
            } else {
              closure_1_33[tmp55.targetType][tmp55.targetId] = combined;
            }
          }
        }
        c1 = 0;
        arr1.unshift(tmp55);
      }
    });
    ({ integrations: closure_18, webhooks: closure_20, guildScheduledEvents: closure_21, automodRules } = logs);
    if (automodRules == null) {
      automodRules = [];
    }
    ({ threads: closure_23, applicationCommands: closure_24 } = logs);
    if (logs.logs.length < closure_13) {
      c28 = false;
    }
  },
  AUDIT_LOG_FETCH_FAIL: function handleFetchedLogsFail() {
    c26 = false;
    c29 = true;
    closure_17 = [];
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function handleStartFetchNextPage(isGroupedFetch) {
    c27 = true;
    if (isGroupedFetch.isGroupedFetch) {
      closure_34 = closure_34 + 1;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function handleFetchedNextPage(logs) {
    logs = logs.logs;
    c27 = false;
    ({
      integrations: closure_18,
      webhooks: closure_20,
      guildScheduledEvents: closure_21,
      automodRules: closure_22,
      threads: closure_23,
      applicationCommands: closure_24,
    } = logs);
    let tmp = 0 === logs.length;
    if (!tmp) {
      tmp = logs.length < closure_13;
    }
    if (tmp) {
      c28 = false;
    }
    if (logs.length > 0) {
      let items = [];
      c1 = 0;
      const reversed = logs.reverse();
      const item = reversed.forEach((id) => {
        items = [];
        let tmp = null;
        let tmp2 = null;
        let tmp3 = null;
        if (null != id.reason) {
          const tmp9 = new closure_1_3(closure_1_12.REASON, null, id.reason);
          items.push(tmp9);
        }
        if (null != id.changes) {
          const changes = id.changes;
          for (const item10022 of changes) {
            let tmp13 = closure_1_3;
            let tmp14 = new.target;
            let tmp15 = new.target;
            let tmp16 = new closure_1_3(item10022.key, item10022.old_value, item10022.new_value);
            let tmp17 = tmp16;
            let tmp18 = tmp16;
            let arr = items.push(tmp16);
            let tmp20 = closure_1_12;
            if (tmp16.key === closure_1_12.NAME) {
              tmp = tmp17;
            } else {
              let tmp21 = tmp17;
              let tmp22 = closure_1_12;
              if (tmp18.key === closure_1_12.TYPE) {
                tmp3 = tmp17;
              } else {
                let tmp23 = tmp17;
                let tmp24 = closure_1_12;
                if (tmp18.key === closure_1_12.TITLE) {
                  tmp2 = tmp17;
                }
              }
            }
            continue;
          }
        }
        if (id.action_type === closure_1_9.MEMBER_PRUNE) {
          let num2 = 1;
          if (null != id) {
            num2 = 1;
            if (null != id.options) {
              num2 = 1;
              if (null != id.options.delete_member_days) {
                num2 = id.options.delete_member_days;
              }
            }
          }
          const tmp32 = new closure_1_3(closure_1_12.PRUNE_DELETE_DAYS, null, num2);
          let arr1 = items.push(tmp32);
        }
        let tmp35 = id.action_type === tmp25.AUTO_MODERATION_BLOCK_MESSAGE;
        if (tmp35) {
          const options = id.options;
          let prop;
          if (options != null) {
            prop = options.auto_moderation_rule_name;
          }
          tmp35 = null != prop;
        }
        if (tmp35) {
          const tmp42 = new closure_1_3(
            closure_1_12.AUTO_MODERATION_TRIGGERED_RULE_NAME,
            null,
            id.options.auto_moderation_rule_name,
          );
          items.push(tmp42);
        }
        let tmp45 = id.action_type === tmp25.VOICE_CHANNEL_STATUS_CREATE;
        if (tmp45) {
          const options2 = id.options;
          let status;
          if (options2 != null) {
            status = options2.status;
          }
          tmp45 = null != status;
        }
        if (tmp45) {
          const tmp52 = new closure_1_3(closure_1_12.STATUS, null, id.options.status);
          items.push(tmp52);
        }
        let obj = {
          id: id.id,
          action: id.action_type,
          targetId: id.target_id,
          userId: id.user_id,
          changes: items,
          options: id.options,
        };
        const tmp55 = new closure_1_2(obj);
        arr1 = items;
        const first = items[0];
        if (
          (function shouldMergeEntries(first, action2, c1) {
            let isEqualResult =
              null != first &&
              first.action === action2.action &&
              first.targetId === action2.targetId &&
              first.userId === action2.userId;
            if (isEqualResult) {
              isEqualResult = callback(table[8]).isEqual(first.options, action2.options);
              const obj = callback(table[8]);
            }
            if (isEqualResult) {
              const timestampStart = action2.timestampStart;
              isEqualResult = timestampStart.diff(first.timestampStart, "minutes") < num;
            }
            if (isEqualResult) {
              isEqualResult = c1 < num2;
            }
            if (isEqualResult) {
              isEqualResult = action2.targetType !== constants2.INVITE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_DELETE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_BULK_DELETE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_PIN;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MESSAGE_UNPIN;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MEMBER_MOVE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MEMBER_DISCONNECT;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.BOT_ADD;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.APPLICATION_COMMAND_PERMISSION_UPDATE;
            }
            if (isEqualResult) {
              isEqualResult = action2.action !== constants.MEMBER_PRUNE;
            }
            return isEqualResult;
          })(first, tmp55, c1)
        ) {
          obj = { changes: null, timestampEnd: null };
          items1 = [];
          HermesBuiltin.arraySpread(tmp55.changes, HermesBuiltin.arraySpread(first.changes, 0));
          obj[0] = items1;
          obj[1] = tmp55.timestampStart;
          arr1[0] = first.merge(obj);
          c1 = c1 + 1;
        } else {
          if (tmp55.actionType === closure_1_10.DELETE) {
            if (null != tmp) {
              let oldValue;
              if (tmp != null) {
                oldValue = tmp.oldValue;
              }
              if (oldValue == null) {
                let oldValue1;
                if (tmp2 != null) {
                  oldValue1 = tmp2.oldValue;
                }
                oldValue = oldValue1;
              }
              let tmp62 = tmp55.targetType !== closure_1_11.CHANNEL && tmp55.targetType !== tmp61.CHANNEL_OVERWRITE;
              if (!tmp62) {
                tmp62 = null === tmp3;
              }
              if (!tmp62) {
                tmp62 = !closure_1_4(tmp3.oldValue);
              }
              let combined = oldValue;
              if (!tmp62) {
                const _HermesInternal = HermesInternal;
                combined = "#" + oldValue;
              }
              if (null == closure_1_33[tmp55.targetType]) {
                obj = {};
                obj[tmp55.targetId] = combined;
                closure_1_33[tmp55.targetType] = obj;
              } else {
                closure_1_33[tmp55.targetType][tmp55.targetId] = combined;
              }
            }
          }
          c1 = 0;
          arr1.unshift(tmp55);
        }
      });
      let items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items1, 0));
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    c27 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    action = action.action;
  },
  AUDIT_LOG_FILTER_BY_USER: function handleFilterByUser(userId) {
    userId = userId.userId;
  },
  AUDIT_LOG_FILTER_BY_TARGET: function handleFilterByTarget(targetId) {
    targetId = targetId.targetId;
  },
  GUILD_SETTINGS_SET_SECTION: function handleSettingsSetSection(section) {
    importDefault = undefined;
    let unsafeMutableRoles;
    if (section.section !== constants.AUDIT_LOG) {
      return false;
    } else {
      const members = store.getMembers(c16);
      importDefault = store3.getGuild(c16);
      unsafeMutableRoles = undefined;
      if (null != c16) {
        unsafeMutableRoles = store2.getUnsafeMutableRoles(c16);
      }
      const found = importDefault(unsafeMutableRoles[8])(members).filter((roles) => {
        closure_0 = roles;
        roles = roles.roles;
        return roles.some((arg0) => {
          if (null != userId) {
            if (userId.userId === tmp.ownerId) {
              return true;
            } else {
              let tmp4;
              if (closure_1_1 != null) {
                tmp4 = tmp3[arg0];
              }
              let tmp6 = null != tmp4;
              if (tmp6) {
                tmp6 = closure_2_5(tmp4, closure_2_15);
              }
              return tmp6;
            }
          }
        });
      });
      const arr = importDefault(unsafeMutableRoles[8])(members);
      closure_19 = found.map((userId) => userId.userId).value();
    }
  },
  GUILD_SETTINGS_INIT: function handleSettingsInit(guildId) {
    guildId = guildId.guildId;
    c32 = null;
    importDefault = undefined;
    let unsafeMutableRoles;
    if (guildId.section === constants.AUDIT_LOG) {
      const members = store.getMembers(guildId);
      importDefault = store3.getGuild(guildId);
      unsafeMutableRoles = undefined;
      if (null != guildId) {
        unsafeMutableRoles = store2.getUnsafeMutableRoles(guildId);
      }
      const found = importDefault(unsafeMutableRoles[8])(members).filter((roles) => {
        closure_0 = roles;
        roles = roles.roles;
        return roles.some((arg0) => {
          if (null != userId) {
            if (userId.userId === tmp.ownerId) {
              return true;
            } else {
              let tmp4;
              if (closure_1_1 != null) {
                tmp4 = tmp3[arg0];
              }
              let tmp6 = null != tmp4;
              if (tmp6) {
                tmp6 = closure_2_5(tmp4, closure_2_15);
              }
              return tmp6;
            }
          }
        });
      });
      const arr = importDefault(unsafeMutableRoles[8])(members);
      closure_19 = found.map((userId) => userId.userId).value();
      const iter = found.map((userId) => userId.userId);
    }
    return false;
  },
  GUILD_SETTINGS_CLOSE: function handleSettingsClose() {
    closure_17 = [];
    closure_19 = [];
    ALL = AuditLogActions.ALL;
    c30 = null;
    c32 = null;
    closure_33 = {};
    c34 = 0;
    c25 = true;
    closure_18 = [];
    closure_20 = [];
    closure_21 = [];
    closure_22 = [];
    closure_23 = [];
  },
};
const result = require("set").fileFinishedImporting("modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx");

export default guildSettingsAuditLogStore;

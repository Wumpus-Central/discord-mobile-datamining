// discord_app/modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import GuildRoleRecord from "../../../records/GuildRoleRecord.tsx";
import AuditLogRecord2 from "../../../records/AuditLogRecord.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import Constants from "../../../Constants.tsx";
import BigFlagUtils from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const AuditLogRecord = AuditLogRecord2;
let importDefault, roles;

let Permissions;
let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const f131946 = function (id) {
  function shouldMergeEntries(items, action2, c1) {
    let isEqualResult =
      null != items &&
      items.action === action2.action &&
      items.targetId === action2.targetId &&
      items.userId === action2.userId;
    if (isEqualResult) {
      const obj = items(closure_1_1[8]);
      isEqualResult = obj.isEqual(items.options, action2.options);
    }
    if (isEqualResult) {
      const timestampStart = action2.timestampStart;
      isEqualResult = timestampStart.diff(items.timestampStart, "minutes") < num;
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
      isEqualResult = action2.action !== constants.CHANNEL_POSITION_UPDATE;
    }
    if (isEqualResult) {
      isEqualResult = action2.action !== constants.ROLE_POSITION_UPDATE;
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
  }
  items = [];
  let tmp = null;
  let tmp2 = null;
  let tmp3 = null;
  if (null != id.reason) {
    const self = this;
    const self2 = this;
    const push = items.push;
    const tmp7 = new AuditLogChange(constants2.REASON, null, id.reason);
    push(tmp7);
  }
  if (null != id.changes) {
    const changes = id.changes;
    for (const item10022 of changes) {
      let self3 = this;
      let self4 = this;
      let tmp12 = new AuditLogChange(item10022.key, item10022.old_value, item10022.new_value);
      let tmp13 = tmp12;
      let tmp14 = tmp12;
      let arr3 = items.push(tmp12);
      if (tmp12.key === constants2.NAME) {
        tmp = tmp13;
      } else if (tmp14.key === constants2.TYPE) {
        tmp3 = tmp13;
      } else if (tmp14.key === constants2.TITLE) {
        tmp2 = tmp13;
      }
      continue;
    }
  }
  if (id.action_type === AuditLogActions.MEMBER_PRUNE) {
    const num = 1;
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
    const self5 = this;
    const self6 = this;
    const tmp26 = new AuditLogChange(constants2.PRUNE_DELETE_DAYS, null, num2);
    items.push(tmp26);
  }
  let tmp29 = id.action_type === AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE;
  if (tmp29) {
    const options = id.options;
    let prop;
    if (options != null) {
      prop = options.auto_moderation_rule_name;
    }
    tmp29 = null != prop;
  }
  if (tmp29) {
    const self7 = this;
    const self8 = this;
    const push2 = items.push;
    const tmp34 = new AuditLogChange(
      constants2.AUTO_MODERATION_TRIGGERED_RULE_NAME,
      null,
      id.options.auto_moderation_rule_name,
    );
    push2(tmp34);
  }
  let tmp37 = id.action_type === AuditLogActions.VOICE_CHANNEL_STATUS_CREATE;
  if (tmp37) {
    const options2 = id.options;
    let status;
    if (options2 != null) {
      status = options2.status;
    }
    tmp37 = null != status;
  }
  if (tmp37) {
    const self9 = this;
    const self10 = this;
    const push3 = items.push;
    const tmp42 = new AuditLogChange(constants2.STATUS, null, id.options.status);
    push3(tmp42);
  }
  let obj = {
    id: id.id,
    action: id.action_type,
    targetId: id.target_id,
    userId: id.user_id,
    changes: items,
    options: id.options,
  };
  const self11 = this;
  const tmp45 = new AuditLogRecord(obj);
  const first = items[0];
  if (shouldMergeEntries(first, tmp45, c1)) {
    const obj2 = { changes: items1, timestampEnd: tmp45.timestampStart };
    items1 = [];
    const merge = first.merge;
    HermesBuiltin.arraySpread(items1, tmp45.changes, HermesBuiltin.arraySpread(items1, first.changes, 0));
    items[0] = merge(obj2);
    c1 = c1 + 1;
  } else {
    if (tmp45.actionType === constants.DELETE) {
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
        let combined = oldValue;
        const tmp53 =
          (tmp45.targetType !== unpackModuleId.CHANNEL && tmp45.targetType !== tmp52.CHANNEL_OVERWRITE) ||
          null === tmp3 ||
          !closure_4(tmp3.oldValue);
        if (!tmp53) {
          const _HermesInternal = HermesInternal;
          combined = "#" + oldValue;
        }
        if (null == closure_33[tmp45.targetType]) {
          const obj3 = {};
          obj3[tmp45.targetId] = combined;
          closure_33[tmp45.targetType] = obj3;
        } else {
          closure_33[tmp45.targetType][tmp45.targetId] = combined;
        }
      }
    }
    c1 = 0;
    items.unshift(tmp45);
  }
};
const f131948 = (userId) => userId.userId;
const AuditLogChange = AuditLogRecord2.AuditLogChange;
let closure_4 = ChannelRecord.isGuildSelectableChannelType;
const hasAnyPermission = GuildRoleRecord.hasAnyPermission;
const AuditLogActions = Constants.AuditLogActions;
({
  AuditLogActionTypes: c10,
  AuditLogTargetTypes: unpackModuleId,
  AuditLogChangeKeys: closure_12,
  AUDIT_LOG_PAGE_LIMIT: map1,
  GuildSettingsSections: closure_14,
  Permissions,
} = Constants);
let closure_15 = BigFlagUtils.combine(
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
const Store = get_initializedDefault.Store;
class GuildSettingsAuditLogStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildRoleStore, GuildMemberStore);
  }
}
const prototype = GuildSettingsAuditLogStore.prototype;
Object.defineProperty(prototype, "logs", {
  get: function logs() {
    return closure_17;
  },
  set: undefined,
});
Object.defineProperty(prototype, "integrations", {
  get: function integrations() {
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
  get: function userIds() {
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
  get: function actionFilter() {
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
let obj = {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    c26 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    let automodRules;
    c34 = 0;
    c25 = false;
    c26 = false;
    c28 = true;
    c29 = false;
    logs = logs.logs;
    const items = [];
    let c1 = 0;
    const reversed = logs.reverse();
    const item = reversed.forEach(f131946);
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
      c34 = c34 + 1;
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
    let tmp2 = 0 === logs.length || logs.length < closure_13;
    if (tmp2) {
      c28 = false;
    }
    if (logs.length > 0) {
      let items = [];
      let c1 = 0;
      const reversed = logs.reverse();
      const item = reversed.forEach(f131946);
      let items1 = [];
      let num = 0;
      let tmp7 = items1;
      HermesBuiltin.arraySpread(items1, items, HermesBuiltin.arraySpread(items1, items1, 0));
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    c27 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    ALL = action.action;
  },
  AUDIT_LOG_FILTER_BY_USER: function handleFilterByUser(userId) {
    userId = userId.userId;
  },
  AUDIT_LOG_FILTER_BY_TARGET: function handleFilterByTarget(targetId) {
    targetId = targetId.targetId;
  },
  GUILD_SETTINGS_SET_SECTION: function handleSettingsSetSection(section) {
    let closure_0;
    importDefault = undefined;
    let unsafeMutableRoles;
    if (section.section !== constants4.AUDIT_LOG) {
      return false;
    } else {
      const members = GuildMemberStore.getMembers(c16);
      importDefault = GuildStore.getGuild(c16);
      unsafeMutableRoles = undefined;
      if (null != c16) {
        unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(c16);
      }
      const arr = require("../../../../_runtime/metro/00012__.js")(members);
      const found = arr.filter((roles) => {
        roles = roles.roles;
        return roles.some((item) => {
          if (null != roles) {
            if (roles.userId === tmp.ownerId) {
              return true;
            } else {
              let tmp4;
              if (unsafeMutableRoles != null) {
                tmp4 = tmp3[item];
              }
              const tmp6 = null != tmp4 && hasAnyPermission(tmp4, closure_15);
              return tmp6;
            }
          }
        });
      });
      const iter = found.map(f131948);
      closure_19 = iter.value();
    }
  },
  GUILD_SETTINGS_INIT: function handleSettingsInit(guildId) {
    let closure_0;
    guildId = guildId.guildId;
    c32 = null;
    importDefault = undefined;
    let unsafeMutableRoles;
    if (guildId.section === constants4.AUDIT_LOG) {
      const members = GuildMemberStore.getMembers(guildId);
      importDefault = GuildStore.getGuild(guildId);
      unsafeMutableRoles = undefined;
      if (null != guildId) {
        unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(guildId);
      }
      let tmp4 = importDefault;
      const arr = require("../../../../_runtime/metro/00012__.js")(members);
      const found = arr.filter((roles) => {
        roles = roles.roles;
        return roles.some((item) => {
          if (null != roles) {
            if (roles.userId === tmp.ownerId) {
              return true;
            } else {
              let tmp4;
              if (unsafeMutableRoles != null) {
                tmp4 = tmp3[item];
              }
              const tmp6 = null != tmp4 && hasAnyPermission(tmp4, closure_15);
              return tmp6;
            }
          }
        });
      });
      const iter = found.map(f131948);
      closure_19 = iter.value();
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
const guildSettingsAuditLogStore = new GuildSettingsAuditLogStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx");

export default guildSettingsAuditLogStore;

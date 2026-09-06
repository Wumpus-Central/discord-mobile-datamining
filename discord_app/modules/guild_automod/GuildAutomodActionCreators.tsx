// === Module 11867: GuildAutomodActionCreators ===

// Module 11867 (GuildAutomodActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import AutomodFeedback from "AutomodFeedback" /* 7518 */;
import DataUtils from "DataUtils" /* 11868 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function _transformClientActionToApiAction(type) {
  const obj = { type: type.type, metadata: DataUtils._transformMetadataToSnakeCase(type.metadata) };
  return obj;
}
function _transformClientRuleToApiRule(id) {
  _require = id;
  let obj = require("DataUtils");
  const result = obj._transformMetadataToSnakeCase(id.triggerMetadata);
  if (null != result) {
    delete tmp2[tmp];
  }
  obj = { id: id.id, name: id.name, guild_id: id.guildId, event_type: id.eventType, trigger_type: id.triggerType, trigger_metadata: result, actions: null, enabled: null, creator_id: null, position: null, exempt_channels: null, exempt_roles: null };
  const actions = id.actions;
  const found = actions.filter(require("GlobalUtils").isNotNullish);
  obj.actions = found.map(_transformClientActionToApiAction);
  ({ enabled: obj2.enabled, creatorId: obj2.creator_id, position: obj2.position } = id);
  let exemptChannels = id.exemptChannels;
  if (exemptChannels == null) {
    exemptChannels = [];
  }
  obj.exempt_channels = Array.from(exemptChannels);
  let exemptRoles = id.exemptRoles;
  if (exemptRoles == null) {
    exemptRoles = [];
  }
  obj.exempt_roles = Array.from(exemptRoles).filter((item) => null != GuildRoleStore.getRole(guildId.guildId, item));
  return obj;
}
function _transformApiActionToClientAction(type) {
  const obj = { type: type.type, metadata: DataUtils._transformMetadataToCamelCase(type.metadata) };
  return obj;
}
function _transformApiRuletoClientRule(id) {
  id = id.id;
  if (id == null) {
    let obj = SnowflakeUtilsDefault;
    const _Date = Date;
    id = obj.fromTimestamp(Date.now());
  }
  obj = { id, name: id.name, guildId: id.guild_id, eventType: id.event_type, triggerType: id.trigger_type, triggerMetadata: DataUtils._transformMetadataToCamelCase(id.trigger_metadata), actions: null, enabled: null, creatorId: null, position: null, exemptChannels: null, exemptRoles: null };
  const actions = id.actions;
  const found = actions.filter(GlobalUtils.isNotNullish);
  obj.actions = found.map(_transformApiActionToClientAction);
  ({ enabled: obj2.enabled, creator_id: obj2.creatorId, position: obj2.position } = id);
  let exempt_channels = id.exempt_channels;
  if (exempt_channels == null) {
    exempt_channels = [];
  }
  obj.exemptChannels = new Set(exempt_channels);
  let exempt_roles = id.exempt_roles;
  if (exempt_roles == null) {
    exempt_roles = [];
  }
  const set = new Set(exempt_channels);
  obj.exemptRoles = new Set(exempt_roles);
  if (null != obj.triggerMetadata) {
    const triggerMetadata = obj.triggerMetadata;
    delete tmp2[tmp];
  }
  return obj;
}
let closure_14 = async function _validateAutomodRule(arg0) {
  let guildId = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_1 = tmp2;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_2_8.GUILD_AUTOMOD_VALIDATE_RULE(guildId.guildId), body: _transformClientRuleToApiRule(guildId), rejectWithError: null };
    _transformClientRuleToApiRule(guildId);
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    closure_129_0 = await HTTP.post(request);
    return closure_130_0(closure_130_2[5])._transformMetadataToCamelCase(closure_129_0.body);
  })();
};
let closure_15 = async function _createAutomodRule(arg0) {
  let guildId = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
    delete tmp3[tmp2];
    closure_1 = _transformApiRuletoClientRule;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_2_8.GUILD_AUTOMOD_RULES(guildId.guildId), body: _transformClientRuleToApiRule(guildId), rejectWithError: null };
    _transformClientRuleToApiRule(guildId);
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    await HTTP.post(request);
    return closure_1(value.body);
  })();
};
let closure_16 = async function _updateAutomodRule() {
  importDefault = _transformApiRuletoClientRule;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: React6.GUILD_AUTOMOD_RULE(_require.guildId, _require.id), body: _transformClientRuleToApiRule(_require), rejectWithError: null };
  _transformClientRuleToApiRule(_require);
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  await HTTP.patch(request);
  return importDefault(arg1.body);
};
let closure_17 = async function _deleteAutomodRule() {
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.del({ url: closure_2_8.GUILD_AUTOMOD_RULE(closure_1, closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
  return true;
};
let closure_18 = async function _fetchAutomodRules(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          const HTTP = require("HTTPUtils").HTTP;
          const obj1 = { url: React6.GUILD_AUTOMOD_RULES(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
          c3 = 1;
          c4 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_0 = value;
        const _Array = Array;
        if (Array.isArray(closure_129_0.body)) {
          const body = closure_129_0.body;
          const mapped = body.map(closure_130_13);
        } else {
          const items = [];
        }
        c4 = 3;
      }
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
};
let closure_19 = async function _executeAlertAction(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (PermissionStore.can(constants.MANAGE_MESSAGES, closure_1)) {
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: React6.GUILD_AUTOMOD_ALERT_ACTION(tmp14.guild_id), body: null, rejectWithError: null };
            const obj1 = { message_id: tmp13, channel_id: tmp14.id, alert_action_type: tmp15 };
            request.body = obj1;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            c4 = 1;
            c3 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
          tmp13 = closure_0;
          tmp15 = closure_2;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      }
      c3 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c3 = tmp;
      throw tmp8;
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: closure_7, Endpoints: closure_8, Permissions: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionCreators.tsx");

export const validateAutomodRule = function validateAutomodRule() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createAutomodRule = function createAutomodRule() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateAutomodRule = function updateAutomodRule() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteAutomodRule = function deleteAutomodRule() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAutomodRules = function fetchAutomodRules() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const executeAlertAction = function executeAlertAction() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeMentionRaidRestrictionWithFeedback = function removeMentionRaidRestrictionWithFeedback(arg0, decision_id, arg2) {
  _require = arg0;
  dependencyMap = arg2;
  const guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  }
  if (canResult) {
    const result = require("GuildAutomodActionActionCreators").openConfirmRemoveMentionRaid(() => {
      let obj = { feedback_type: AutomodFeedback.Feedback.MENTION_RAID_REMOVE_RESTRICTION, decision_id };
      obj.trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, obj);
      const HTTP = HTTPUtils.HTTP;
      obj = { url: React6.GUILD_AUTOMOD_CLEAR_MENTION_RAID(closure_0), rejectWithError: true };
      HTTP.post(obj);
      closure_2();
    });
    let obj = require("GuildAutomodActionActionCreators");
  }
};
export const clearMentionRaidDetected = function clearMentionRaidDetected(guildId) {
  const obj = { type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId };
  obj.dispatch(obj);
};
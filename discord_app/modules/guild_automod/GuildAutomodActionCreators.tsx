// === Module 11663: _transformClientActionToApiAction ===

// Module 11663 (_transformClientActionToApiAction)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1470 */;
import _transformMetadataToCamelCase from "_transformMetadataToCamelCase" /* 11664 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createGuildRoleRecordFromRust" /* 1984 */;
import closure_5 from "createGuildRecordFromRust" /* 1908 */;
import closure_6 from "getUncachedChannelPermissions" /* 4120 */;
import ME from "ME" /* 673 */;

require = arg1;
function _transformClientActionToApiAction(type) {
  const obj = { type: type.type, metadata: _transformMetadataToCamelCase._transformMetadataToSnakeCase(type.metadata) };
  return obj;
}
function _transformClientRuleToApiRule(id) {
  const _require = id;
  let obj = _require(11664);
  const result = obj._transformMetadataToSnakeCase(id.triggerMetadata);
  if (null != result) {
    delete tmp2[tmp];
  }
  obj = { id: id.id, name: id.name, guild_id: id.guildId, event_type: id.eventType, trigger_type: id.triggerType, trigger_metadata: result, actions: null, enabled: null, creator_id: null, position: null, exempt_channels: null, exempt_roles: null };
  const actions = id.actions;
  const found = actions.filter(_require(1470).isNotNullish);
  obj[6] = found.map(_transformClientActionToApiAction);
  ({ enabled: obj2[7], creatorId: obj2[8], position: obj2[9] } = id);
  let exemptChannels = id.exemptChannels;
  if (exemptChannels == null) {
    exemptChannels = [];
  }
  obj[10] = Array.from(exemptChannels);
  let exemptRoles = id.exemptRoles;
  if (exemptRoles == null) {
    exemptRoles = [];
  }
  obj[11] = Array.from(exemptRoles).filter((arg0) => null != closure_1_4.getRole(guildId.guildId, arg0));
  return obj;
}
function _transformApiActionToClientAction(type) {
  const obj = { type: type.type, metadata: _transformMetadataToCamelCase._transformMetadataToCamelCase(type.metadata) };
  return obj;
}
function _transformApiRuletoClientRule(id) {
  id = id.id;
  if (id == null) {
    let obj = DISCORD_EPOCHDefault;
    const _Date = Date;
    id = obj.fromTimestamp(Date.now());
  }
  obj = { id, name: id.name, guildId: id.guild_id, eventType: id.event_type, triggerType: id.trigger_type, triggerMetadata: _transformMetadataToCamelCase._transformMetadataToCamelCase(id.trigger_metadata), actions: null, enabled: null, creatorId: null, position: null, exemptChannels: null, exemptRoles: null };
  const actions = id.actions;
  const found = actions.filter(isDiscordFrontendDevelopment.isNotNullish);
  obj[6] = found.map(_transformApiActionToClientAction);
  ({ enabled: obj2[7], creator_id: obj2[8], position: obj2[9] } = id);
  let exempt_channels = id.exempt_channels;
  if (exempt_channels == null) {
    exempt_channels = [];
  }
  const obj3 = _transformMetadataToCamelCase;
  obj[10] = new Set(exempt_channels);
  let exempt_roles = id.exempt_roles;
  if (exempt_roles == null) {
    exempt_roles = [];
  }
  const set = new Set(exempt_channels);
  obj[11] = new Set(exempt_roles);
  if (null != obj.triggerMetadata) {
    const triggerMetadata = obj.triggerMetadata;
    delete tmp2[tmp];
  }
  return obj;
}
function _validateAutomodRule() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      closure_1 = tmp2;
      const HTTP = lib(closure_1_2[8]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_8.GUILD_AUTOMOD_VALIDATE_RULE(lib.guildId);
      obj1[1] = closure_1_11(lib);
      const tmp20 = closure_1_11(lib);
      obj1[2] = lib(closure_1_2[8]).rejectWithMigratedError();
      lib = yield HTTP.post(obj1);
      const obj = lib(table[5]);
      return obj._transformMetadataToCamelCase(lib.body);
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createAutomodRule() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0, body) {
      delete tmp3[tmp2];
      const callback = closure_1_13;
      const HTTP = lib(527).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_8.GUILD_AUTOMOD_RULES(lib.guildId);
      obj1[1] = closure_1_11(lib);
      const tmp16 = closure_1_11(lib);
      obj1[2] = lib(527).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return callback(body.body);
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateAutomodRule() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0, body) {
      const callback = closure_1_13;
      const HTTP = lib(527).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_8.GUILD_AUTOMOD_RULE(lib.guildId, lib.id);
      obj1[1] = closure_1_11(lib);
      const tmp14 = closure_1_11(lib);
      obj1[2] = lib(527).rejectWithMigratedError();
      yield HTTP.patch(obj1);
      return callback(body.body);
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteAutomodRule() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      const HTTP = callback(527).HTTP;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_8.GUILD_AUTOMOD_RULE(closure_1, callback);
      obj1[1] = callback(527).rejectWithMigratedError();
      yield HTTP.del(obj1);
      return true;
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAutomodRules() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp5;
              let lib;
              const HTTP = lib(closure_1_2[8]).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = closure_1_8.GUILD_AUTOMOD_RULES(lib);
              obj1[1] = lib(closure_1_2[8]).rejectWithMigratedError();
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            const _Array = Array;
            if (Array.isArray(lib.body)) {
              const body = lib.body;
              const mapped = body.map(closure_13);
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
    })();
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _executeAlertAction() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_6.can(closure_1_9.MANAGE_MESSAGES, closure_1)) {
                const HTTP = callback(527).HTTP;
                obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = closure_1_8.GUILD_AUTOMOD_ALERT_ACTION(tmp15.guild_id);
                const obj2 = { message_id: null, channel_id: null, alert_action_type: null };
                obj2[0] = tmp14;
                obj2[1] = tmp15.id;
                obj2[2] = tmp16;
                obj1[1] = obj2;
                let obj3 = callback(527);
                obj1[2] = obj3.rejectWithMigratedError();
                c4 = 1;
                c3 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              }
              tmp14 = callback;
              tmp16 = dependencyMap;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c3 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: error, Endpoints: closure_8, Permissions: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodActionCreators.tsx");

export const validateAutomodRule = function validateAutomodRule() {
  const self = this;
  const apply = _validateAutomodRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createAutomodRule = function createAutomodRule() {
  const self = this;
  const apply = _createAutomodRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateAutomodRule = function updateAutomodRule() {
  const self = this;
  const apply = _updateAutomodRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteAutomodRule = function deleteAutomodRule() {
  const self = this;
  const apply = _deleteAutomodRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAutomodRules = function fetchAutomodRules(arg0) {
  const self = this;
  const apply = _fetchAutomodRules.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const executeAlertAction = function executeAlertAction(messageId, channel, SUBMIT_FEEDBACK) {
  const self = this;
  const apply = _executeAlertAction.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeMentionRaidRestrictionWithFeedback = function removeMentionRaidRestrictionWithFeedback(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  guild = guild.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = closure_6.can(constants.MANAGE_GUILD, guild);
  }
  if (canResult) {
    const result = _require(11657).openConfirmRemoveMentionRaid(() => {
      let obj = callback(4700);
      obj = { feedback_type: callback(7272).Feedback.MENTION_RAID_REMOVE_RESTRICTION, decision_id: closure_1 };
      obj.trackWithMetadata(closure_1_7.GUILD_AUTOMOD_FEEDBACK, obj);
      const HTTP = callback(527).HTTP;
      obj = { url: closure_1_8.GUILD_AUTOMOD_CLEAR_MENTION_RAID(callback), rejectWithError: true };
      HTTP.post(obj);
      dependencyMap();
    });
    let obj = _require(11657);
  }
};
export const clearMentionRaidDetected = function clearMentionRaidDetected(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId };
  obj.dispatch(obj);
};
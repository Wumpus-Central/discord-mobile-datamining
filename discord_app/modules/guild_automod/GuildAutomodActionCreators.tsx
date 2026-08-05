// discord_app/modules/guild_automod/GuildAutomodActionCreators.tsx
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function _transformClientActionToApiAction(type) {
  const obj = { type: type.type, metadata: null };
  obj[1] = require("DataUtils.tsx") /* _transformMetadataToCamelCase */._transformMetadataToSnakeCase(type.metadata);
  return obj;
}
function _transformClientRuleToApiRule(id) {
  let obj = require("DataUtils.tsx") /* _transformMetadataToCamelCase */;
  const result = obj._transformMetadataToSnakeCase(id.triggerMetadata);
  if (null != result) {
    delete tmp2[tmp];
  }
  obj = { id: id.id, name: id.name, guild_id: id.guildId, event_type: id.eventType, trigger_type: id.triggerType, trigger_metadata: result, actions: null, enabled: null, creator_id: null, position: null, exempt_channels: null, exempt_roles: null };
  const actions = id.actions;
  const found = actions.filter(require("../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */.isNotNullish);
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
  obj[11] = Array.from(exemptRoles);
  return obj;
}
function _transformApiActionToClientAction(type) {
  const obj = { type: type.type, metadata: null };
  obj[1] = require("DataUtils.tsx") /* _transformMetadataToCamelCase */._transformMetadataToCamelCase(type.metadata);
  return obj;
}
function _transformApiRuletoClientRule(id) {
  id = id.id;
  if (id == null) {
    let obj = require("../../utils/SnowflakeUtils.tsx");
    const _Date = Date;
    id = obj.fromTimestamp(Date.now());
  }
  obj = { id, name: id.name, guildId: id.guild_id, eventType: id.event_type, triggerType: id.trigger_type, triggerMetadata: null, actions: null, enabled: null, creatorId: null, position: null, exemptChannels: null, exemptRoles: null };
  obj[5] = require("DataUtils.tsx") /* _transformMetadataToCamelCase */._transformMetadataToCamelCase(id.trigger_metadata);
  const actions = id.actions;
  const found = actions.filter(require("../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */.isNotNullish);
  obj[6] = found.map(_transformApiActionToClientAction);
  ({ enabled: obj2[7], creator_id: obj2[8], position: obj2[9] } = id);
  let exempt_channels = id.exempt_channels;
  if (exempt_channels == null) {
    exempt_channels = [];
  }
  const obj3 = require("DataUtils.tsx") /* _transformMetadataToCamelCase */;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      let closure_1 = tmp2;
      const HTTP = lib(outer1_2[7]).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.GUILD_AUTOMOD_VALIDATE_RULE(lib.guildId);
      obj1[1] = outer1_10(lib);
      const tmp20 = outer1_10(lib);
      obj1[2] = lib(outer1_2[7]).rejectWithMigratedError();
      lib = yield HTTP.post(obj1);
      const obj = lib(table[4]);
      return obj._transformMetadataToCamelCase(lib.body);
    })();
  });
  const _validateAutomodRule = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      delete tmp3[tmp2];
      const callback = outer1_12;
      const HTTP = lib(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.GUILD_AUTOMOD_RULES(lib.guildId);
      obj1[1] = outer1_10(lib);
      const tmp16 = outer1_10(lib);
      obj1[2] = lib(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return callback(body.body);
    })();
  });
  const _createAutomodRule = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      const callback = outer1_12;
      const HTTP = lib(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.GUILD_AUTOMOD_RULE(lib.guildId, lib.id);
      obj1[1] = outer1_10(lib);
      const tmp14 = outer1_10(lib);
      obj1[2] = lib(530).rejectWithMigratedError();
      yield HTTP.patch(obj1);
      return callback(body.body);
    })();
  });
  const _updateAutomodRule = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_7.GUILD_AUTOMOD_RULE(closure_1, callback);
      obj1[1] = callback(530).rejectWithMigratedError();
      yield HTTP.del(obj1);
      return true;
    })();
  });
  const _deleteAutomodRule = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
              let closure_2 = tmp2;
              let closure_1 = tmp5;
              let lib;
              const HTTP = lib(outer1_2[7]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_7.GUILD_AUTOMOD_RULES(lib);
              obj1[1] = lib(outer1_2[7]).rejectWithMigratedError();
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
              const mapped = body.map(closure_12);
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
  const _fetchAutomodRules = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
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
              if (outer1_5.can(outer1_8.MANAGE_MESSAGES, closure_1)) {
                const HTTP = callback(530).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = outer1_7.GUILD_AUTOMOD_ALERT_ACTION(tmp15.guild_id);
                const obj2 = { message_id: null, channel_id: null, alert_action_type: null };
                obj2[0] = tmp14;
                obj2[1] = tmp15.id;
                obj2[2] = tmp16;
                obj1[1] = obj2;
                let obj3 = callback(530);
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
  const _executeAlertAction = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, Endpoints: error, Permissions: metroImportAll } = ME);
let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_automod/GuildAutomodActionCreators.tsx");

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
  let closure_1 = arg1;
  const dependencyMap = arg2;
  guild = guild.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = getUncachedChannelPermissions.can(constants.MANAGE_GUILD, guild);
  }
  if (canResult) {
    const result = _require("GuildAutomodActionActionCreators.native.tsx").openConfirmRemoveMentionRaid(() => {
      let obj = callback(4479);
      obj = { feedback_type: callback(6886).Feedback.MENTION_RAID_REMOVE_RESTRICTION, decision_id: closure_1 };
      obj.trackWithMetadata(outer1_6.GUILD_AUTOMOD_FEEDBACK, obj);
      const HTTP = callback(530).HTTP;
      obj = { url: outer1_7.GUILD_AUTOMOD_CLEAR_MENTION_RAID(callback), rejectWithError: true };
      HTTP.post(obj);
      dependencyMap();
    });
    let obj = _require("GuildAutomodActionActionCreators.native.tsx");
  }
};
export const clearMentionRaidDetected = function clearMentionRaidDetected(guildId) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId };
  obj.dispatch(obj);
};
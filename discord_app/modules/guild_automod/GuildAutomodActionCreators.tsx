// === Module 11479: GuildAutomodActionCreators ===

// Module 11479 (GuildAutomodActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import AutomodFeedback from "AutomodFeedback" /* 7027 */;
import DataUtils from "DataUtils" /* 11480 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
function _transformClientActionToApiAction(type) {
  let obj2;
  obj = { type: type.type, metadata: obj2._transformMetadataToSnakeCase(type.metadata) };
  obj2 = DataUtils;
  return obj;
}
function _transformClientRuleToApiRule(id) {
  let exemptChannels;
  let found;
  let from;
  let from2Result;
  let guildId;
  _require = id;
  obj = require("DataUtils");
  const result = obj._transformMetadataToSnakeCase(id.triggerMetadata);
  const tmp = _require;
  if (null != result) {
    delete tmp3["keywordLists"];
  }
  const actions = id.actions;
  const obj3 = { id: id.id, name: id.name, guild_id: id.guildId, event_type: id.eventType, trigger_type: id.triggerType, trigger_metadata: result, actions: found.map(_transformClientActionToApiAction), enabled: null, creator_id: null, position: null, exempt_channels: from(exemptChannels), exempt_roles: from2Result.filter((item) => null != GuildRoleStore.getRole(guildId.guildId, item)) };
  found = actions.filter(tmp(1375).isNotNullish);
  ({ enabled: obj2.enabled, creatorId: obj2.creator_id, position: obj2.position } = id);
  exemptChannels = id.exemptChannels;
  const _Array = Array;
  from = Array.from;
  if (exemptChannels == null) {
    exemptChannels = [];
  }
  let exemptRoles = id.exemptRoles;
  const _Array2 = Array;
  const from2 = Array.from;
  if (exemptRoles == null) {
    exemptRoles = [];
  }
  from2Result = from2(exemptRoles);
  return obj3;
}
function _transformApiActionToClientAction(type) {
  let obj2;
  obj = { type: type.type, metadata: obj2._transformMetadataToCamelCase(type.metadata) };
  obj2 = DataUtils;
  return obj;
}
function _transformApiRuletoClientRule(id) {
  let _Set1;
  let _Set21;
  let found;
  let obj3;
  id = id.id;
  if (id == null) {
    const _Date = Date;
    obj = SnowflakeUtilsDefault;
    id = obj.fromTimestamp(Date.now());
  }
  const obj4 = { id, name: id.name, guildId: id.guild_id, eventType: id.event_type, triggerType: id.trigger_type, triggerMetadata: obj3._transformMetadataToCamelCase(id.trigger_metadata), actions: found.map(_transformApiActionToClientAction), enabled: null, creatorId: null, position: null, exemptChannels: _Set1, exemptRoles: _Set21 };
  const actions = id.actions;
  obj3 = DataUtils;
  found = actions.filter(GlobalUtils.isNotNullish);
  ({ enabled: obj2.enabled, creator_id: obj2.creatorId, position: obj2.position } = id);
  let exempt_channels = id.exempt_channels;
  const _Set = Set;
  if (exempt_channels == null) {
    exempt_channels = [];
  }
  _Set1 = new _Set(exempt_channels);
  let exempt_roles = id.exempt_roles;
  const _Set2 = Set;
  if (exempt_roles == null) {
    exempt_roles = [];
  }
  _Set21 = new _Set2(exempt_roles);
  if (null != obj4.triggerMetadata) {
    delete obj2.triggerMetadata["keywordLists"];
  }
  return obj4;
}
let obj = function _validateAutomodRule() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj8;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp2;
            let closure_1 = tmp;
            closure_0 = undefined;
            const tmp17 = _transformClientRuleToApiRule(closure_0);
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: metroImportAll.GUILD_AUTOMOD_VALIDATE_RULE(closure_0.guildId), body: tmp17, rejectWithError: obj8.rejectWithMigratedError() };
            const post = HTTP.post;
            obj8 = require("HTTPUtils");
            c3 = 1;
            c4 = 1;
            const obj4 = { value: post(request), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          c4 = 3;
          const obj6 = { value: obj._transformMetadataToCamelCase(closure_0.body), done: true };
          obj = closure_130_0(closure_130_2[5]);
          return obj6;
        }
      } catch (tmp11) {
        c4 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _createAutomodRule() {
  obj = _asyncToGenerator(async (arg0) => {
    const guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj7;
      const tmp11 = _transformClientRuleToApiRule(guildId);
      delete tmp11["id"];
      closure_1 = _transformApiRuletoClientRule;
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: closure_2_8.GUILD_AUTOMOD_RULES(guildId.guildId), body: tmp11, rejectWithError: obj7.rejectWithMigratedError() };
      const post = HTTP.post;
      obj7 = require("HTTPUtils");
      await post(request);
      return closure_1(value.body);
    })();
  });
  return obj(...arguments);
};
obj = function _updateAutomodRule() {
  obj = _asyncToGenerator(async (arg0) => {
    let c2;
    let c3;
    let obj7;
    let closure_0 = arg0;
    let closure_1 = _transformApiRuletoClientRule;
    const tmp11 = _transformClientRuleToApiRule(closure_0);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: metroImportAll.GUILD_AUTOMOD_RULE(closure_0.guildId, closure_0.id), body: tmp11, rejectWithError: obj7.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj7 = require("HTTPUtils");
    await patch(request);
    return closure_1(value.body);
  });
  return obj(...arguments);
};
obj = function _deleteAutomodRule() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c2;
    let c3;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: metroImportAll.GUILD_AUTOMOD_RULE(closure_1, closure_0), rejectWithError: obj6.rejectWithMigratedError() };
    const del = HTTP.del;
    obj6 = require("HTTPUtils");
    await del(obj4);
    return true;
  });
  return obj(...arguments);
};
obj = function _fetchAutomodRules() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let mapped;
    let obj7;
    let closure_0 = arg0;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: metroImportAll.GUILD_AUTOMOD_RULES(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
    const get = HTTP.get;
    obj7 = require("HTTPUtils");
    await get(obj4);
    closure_0 = value;
    const _Array = Array;
    if (Array.isArray(closure_0.body)) {
      const body = closure_0.body;
      mapped = body.map(closure_130_13);
    } else {
      mapped = [];
    }
    return mapped;
  });
  return obj(...arguments);
};
obj = function _executeAlertAction() {
  obj = _asyncToGenerator(async (message_id, arg1, alert_action_type) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      let obj5;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else if (PermissionStore.can(constants.MANAGE_MESSAGES, closure_1)) {
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: closure_2_8.GUILD_AUTOMOD_ALERT_ACTION(closure_1.guild_id), body: obj5, rejectWithError: obj4.rejectWithMigratedError() };
              const post = HTTP.post;
              obj5 = { message_id, channel_id: closure_1.id, alert_action_type };
              c4 = 1;
              c3 = 1;
              obj4 = require("HTTPUtils");
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp7) {
          c3 = 3;
          throw tmp7;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportDefault, Endpoints: metroImportAll, Permissions: c9 } = Constants);
let result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionCreators.tsx");

export const validateAutomodRule = function validateAutomodRule() {
  return obj(...arguments);
};
export const createAutomodRule = function createAutomodRule() {
  return obj(...arguments);
};
export const updateAutomodRule = function updateAutomodRule() {
  return obj(...arguments);
};
export const deleteAutomodRule = function deleteAutomodRule() {
  return obj(...arguments);
};
export const fetchAutomodRules = function fetchAutomodRules() {
  return obj(...arguments);
};
export const executeAlertAction = function executeAlertAction() {
  return obj(...arguments);
};
export const removeMentionRaidRestrictionWithFeedback = function removeMentionRaidRestrictionWithFeedback(arg0, decision_id, arg2) {
  let closure_0;
  let closure_2;
  _require = arg0;
  dependencyMap = arg2;
  const guild = GuildStore.getGuild(arg0);
  const canResult = null != guild && PermissionStore.can(constants2.MANAGE_GUILD, guild);
  if (canResult) {
    obj = require("GuildAutomodActionActionCreators");
    const result = obj.openConfirmRemoveMentionRaid(() => {
      obj = AppAnalyticsUtils;
      const obj2 = { feedback_type: AutomodFeedback.Feedback.MENTION_RAID_REMOVE_RESTRICTION, decision_id };
      obj.trackWithMetadata(metroImportDefault.GUILD_AUTOMOD_FEEDBACK, obj2);
      const HTTP = HTTPUtils.HTTP;
      const obj3 = { url: metroImportAll.GUILD_AUTOMOD_CLEAR_MENTION_RAID(closure_0), rejectWithError: true };
      HTTP.post(obj3);
      closure_2();
    });
  }
};
export const clearMentionRaidDetected = function clearMentionRaidDetected(guildId) {
  obj = DispatcherDefault;
  const obj2 = { type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId };
  obj.dispatch(obj2);
};
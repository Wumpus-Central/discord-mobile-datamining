// === Module 1233: user_settings/UserSettingsUtils ===

// Module 1233 (user_settings/UserSettingsUtils)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import user_settings_shared from "user_settings_shared" /* 1226 */;
import frecency_user_settings from "frecency_user_settings" /* 1232 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let FRECENCY_AND_FAVORITES_SETTINGS;
let PRELOADED_USER_SETTINGS;
function b64ToProto(DerivedQosData, derivedQosData) {
  if (null == derivedQosData) {
    return null;
  } else {
    try {
      obj = ProtoUtils;
      return obj.b64ToProto(DerivedQosData, derivedQosData);
    } catch (tmp4) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Settings proto failed to deserialize (potentially corrupt): " + tmp4);
      throw error;
    }
  }
}
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const ZERO_STRING_GUILD_ID = Constants.ZERO_STRING_GUILD_ID;
let obj = { [PRELOADED_USER_SETTINGS]: preloaded_user_settings.PreloadedUserSettings, [FRECENCY_AND_FAVORITES_SETTINGS]: frecency_user_settings.FrecencyUserSettings };
({ PRELOADED_USER_SETTINGS, FRECENCY_AND_FAVORITES_SETTINGS } = UserSettingsTypes);
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsUtils.tsx");

export const b64ToProtoWithType = function b64ToProtoWithType(type, proto) {
  let tmp = null;
  if (null != proto) {
    let tmp4 = null;
    if (type in obj) {
      tmp4 = b64ToProto(tmp3[type], proto);
    }
    tmp = tmp4;
  }
  return tmp;
};
export { b64ToProto };
export const b64ToPreloadedUserSettingsProto = function b64ToPreloadedUserSettingsProto(settings) {
  return b64ToProto(preloaded_user_settings.PreloadedUserSettings, settings);
};
export const protoToB64WithType = function protoToB64WithType(arg0, declarativeSettings) {
  const tmp = obj[arg0];
  obj = ProtoUtils;
  return obj.protoToB64(tmp, declarativeSettings);
};
export const protoToB64 = function protoToB64(DeclarativeSettings, declarativeSettings) {
  obj = ProtoUtils;
  return obj.protoToB64(DeclarativeSettings, declarativeSettings);
};
export const mergeTopLevelFields = function mergeTopLevelFields(ProtoClass, proto, proto2) {
  obj = {};
  const merged = Object.assign(proto);
  for (const key10007 in proto2) {
    delete obj[key10007];
    continue;
  }
  ProtoClass.mergePartial(obj, proto2);
  return obj;
};
export const mutateUserGuildSettings = function mutateUserGuildSettings(guilds, arg1, fn) {
  if (null == guilds.guilds) {
    const AllGuildSettings = preloaded_user_settings.AllGuildSettings;
    guilds.guilds = AllGuildSettings.create();
  }
  let tmp3 = arg1;
  guilds = guilds.guilds;
  const tmp4 = null != arg1 && "null" !== tmp3;
  if (!tmp4) {
    tmp3 = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp3 in guilds.guilds)) {
    const guilds2 = guilds.guilds;
    const GuildSettings = preloaded_user_settings.GuildSettings;
    guilds2[tmp3] = GuildSettings.create();
  }
  return fn(guilds.guilds[tmp3]);
};
export const mutateUserGuildSettingsInternal = function mutateUserGuildSettingsInternal(guilds, arg1, f85661) {
  let tmp = arg1;
  const tmp2 = null != arg1 && "null" !== tmp;
  if (!tmp2) {
    tmp = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp in guilds.guilds)) {
    guilds = guilds.guilds;
    const GuildSettings = preloaded_user_settings.GuildSettings;
    guilds[tmp] = GuildSettings.create();
  }
  return f85661(guilds.guilds[tmp]);
};
export const mutateUserChannelSettings = function mutateUserChannelSettings(guilds, arg1, id, fn) {
  if (null == guilds.guilds) {
    const AllGuildSettings = preloaded_user_settings.AllGuildSettings;
    guilds.guilds = AllGuildSettings.create();
  }
  let tmp3 = arg1;
  guilds = guilds.guilds;
  const tmp4 = null != arg1 && "null" !== tmp3;
  if (!tmp4) {
    tmp3 = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp3 in guilds.guilds)) {
    const guilds2 = guilds.guilds;
    const GuildSettings = preloaded_user_settings.GuildSettings;
    guilds2[tmp3] = GuildSettings.create();
  }
  if (!(id in guilds.guilds[tmp3].channels)) {
    const channels = tmp7.channels;
    const ChannelSettings = preloaded_user_settings.ChannelSettings;
    channels[id] = ChannelSettings.create();
  }
  return fn(guilds.guilds[tmp3].channels[id]);
};
export const mutateUserChannelSettingsInternal = function mutateUserChannelSettingsInternal(channels, arg1, f85661) {
  if (!(arg1 in channels.channels)) {
    channels = channels.channels;
    const ChannelSettings = preloaded_user_settings.ChannelSettings;
    channels[arg1] = ChannelSettings.create();
  }
  return f85661(channels.channels[arg1]);
};
export const runMigrations = function runMigrations(proto, arg1) {
  if (null == proto.versions) {
    const Versions = user_settings_shared.Versions;
    proto.versions = Versions.create();
  }
  let num = 0;
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult.version <= num) {
      let tmp7 = globalThis;
      let _Error = Error;
      let str = "Migrations are out of order or there is a duplicate version";
      throw Error("Migrations are out of order or there is a duplicate version");
    } else {
      num = tmp4.version;
      continue;
    }
  }
  let flag = false;
  const items = [];
  const tmp8 = Math.random() < 0.1;
  const iter2 = arg1[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    obj = nextResult1;
    if (nextResult1.version <= proto.versions.clientVersion) {
      if (tmp8) {
        let cleanup2 = obj.cleanup;
        if (cleanup2 != null) {
          let cleanup2Result = cleanup2();
        }
      }
    } else {
      proto.versions.clientVersion = obj.version;
      if (false !== obj.run(proto)) {
        flag = true;
        if (null != obj.cleanup) {
          let arr = items.push(obj.cleanup);
        }
      } else {
        let cleanup = obj.cleanup;
        if (cleanup != null) {
          let cleanupResult = cleanup();
        }
      }
    }
    continue;
  }
  return { proto, isDirty: flag, cleanupFuncs: items };
};
export const serializeUsageHistory = function serializeUsageHistory(usageHistory, FREQUENCY_ITEM_LIMIT) {
  let first;
  let length;
  let recentUses;
  let tmp10;
  const entries = Object.entries(usageHistory);
  let tmp = entries;
  if (entries.length > FREQUENCY_ITEM_LIMIT) {
    obj = _modDef12;
    const sortByResult = obj.sortBy(entries, (arg0) => {
      let tmp;
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    });
    const reversed = sortByResult.reverse();
    tmp = reversed;
    if (reversed.length > FREQUENCY_ITEM_LIMIT) {
      do {
        let arr = reversed.pop();
        tmp = reversed;
        length = reversed.length;
      } while (length > FREQUENCY_ITEM_LIMIT);
    }
  }
  const obj2 = {};
  const tmp5 = tmp[Symbol.iterator]();
  while (tmp5 !== undefined) {
    [first, tmp10] = tmp6;
    let FrecencyItem = frecency_user_settings.FrecencyItem;
    let obj3 = FrecencyItem.create();
    ({ frecency: tmp13.frecency, recentUses } = tmp10);
    let found = recentUses.filter((item) => null != item && item > 0);
    let _String = String;
    obj3.recentUses = found.map(String);
    let _Math = Math;
    obj3.score = Math.round(tmp10.score);
    obj3.totalUses = tmp10.totalUses;
    obj2[first] = obj3;
    continue;
  }
  return obj2;
};
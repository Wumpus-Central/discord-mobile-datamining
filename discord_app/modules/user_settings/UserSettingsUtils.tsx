// discord_app/modules/user_settings/UserSettingsUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import user_settings_shared from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx";
import frecency_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import ProtoUtils from "../../utils/ProtoUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
function b64ToProto(arg0, arg1) {
  if (null == arg1) {
    return null;
  } else {
    try {
      return ProtoUtils.b64ToProto(arg0, arg1);
    } catch (tmp4) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Settings proto failed to deserialize (potentially corrupt): " + tmp4);
      throw error;
    }
  }
}
const ZERO_STRING_GUILD_ID = fn(1074).ZERO_STRING_GUILD_ID;
let obj = {
  [PRELOADED_USER_SETTINGS]: fn(1187).PreloadedUserSettings,
  [FRECENCY_AND_FAVORITES_SETTINGS]: fn(1222).FrecencyUserSettings,
};
({ PRELOADED_USER_SETTINGS, FRECENCY_AND_FAVORITES_SETTINGS } = fn(1084).UserSettingsTypes);
const size = fn(2);
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
export const protoToB64WithType = function protoToB64WithType(arg0, arg1) {
  obj = ProtoUtils;
  return obj.protoToB64(obj[arg0], arg1);
};
export const protoToB64 = function protoToB64(arg0, arg1) {
  return ProtoUtils.protoToB64(arg0, arg1);
};
export const mergeTopLevelFields = function mergeTopLevelFields(ProtoClass, proto, proto2) {
  obj = {};
  const merged = Object.assign(proto);
  for (const key10007 in arg2) {
    delete tmp[tmp2];
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
  let tmp4 = null != arg1;
  if (tmp4) {
    tmp4 = "null" !== tmp3;
  }
  if (!tmp4) {
    tmp3 = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp3 in guilds.guilds)) {
    const GuildSettings = preloaded_user_settings.GuildSettings;
    guilds.guilds[tmp3] = GuildSettings.create();
  }
  return fn(guilds.guilds[tmp3]);
};
export const mutateUserGuildSettingsInternal = function mutateUserGuildSettingsInternal(guilds, arg1, fn) {
  let tmp = arg1;
  let tmp2 = null != arg1;
  if (tmp2) {
    tmp2 = "null" !== tmp;
  }
  if (!tmp2) {
    tmp = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp in guilds.guilds)) {
    const GuildSettings = preloaded_user_settings.GuildSettings;
    guilds.guilds[tmp] = GuildSettings.create();
  }
  return fn(guilds.guilds[tmp]);
};
export const mutateUserChannelSettings = function mutateUserChannelSettings(guilds, arg1, id, fn) {
  if (null == guilds.guilds) {
    const AllGuildSettings = preloaded_user_settings.AllGuildSettings;
    guilds.guilds = AllGuildSettings.create();
  }
  let tmp3 = arg1;
  guilds = guilds.guilds;
  let tmp4 = null != arg1;
  if (tmp4) {
    tmp4 = "null" !== tmp3;
  }
  if (!tmp4) {
    tmp3 = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp3 in guilds.guilds)) {
    const GuildSettings = preloaded_user_settings.GuildSettings;
    guilds.guilds[tmp3] = GuildSettings.create();
  }
  if (!(id in guilds.guilds[tmp3].channels)) {
    const ChannelSettings = preloaded_user_settings.ChannelSettings;
    tmp7.channels[id] = ChannelSettings.create();
  }
  return fn(guilds.guilds[tmp3].channels[id]);
};
export const mutateUserChannelSettingsInternal = function mutateUserChannelSettingsInternal(channels, arg1, fn) {
  if (!(arg1 in channels.channels)) {
    const ChannelSettings = preloaded_user_settings.ChannelSettings;
    channels.channels[arg1] = ChannelSettings.create();
  }
  return fn(channels.channels[arg1]);
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
  obj = { proto, isDirty: flag, cleanupFuncs: items };
  return obj;
};
export const serializeUsageHistory = function serializeUsageHistory(usageHistory, arg1) {
  let length;
  const entries = Object.entries(usageHistory);
  if (entries.length > arg1) {
    obj = _modDef12;
    const reversed = obj
      .sortBy(entries, (arg0) => {
        [, tmp] = arg0;
        return tmp.recentUses[tmp.recentUses.length - 1];
      })
      .reverse();
    if (reversed.length > arg1) {
      do {
        let arr = reversed.pop();
        length = reversed.length;
      } while (length > arg1);
    }
    const sortByResult = obj.sortBy(entries, (arg0) => {
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    });
  }
  obj = {};
  while (tmp5 !== undefined) {
    let tmp8 = _slicedToArray(tmp6, 2);
    let tmp9 = tmp8[1];
    let FrecencyItem = frecency_user_settings.FrecencyItem;
    obj = FrecencyItem.create();
    ({ frecency: tmp12.frecency, recentUses } = tmp9);
    let found = recentUses.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        tmp = item > 0;
      }
      return tmp;
    });
    let _String = String;
    obj.recentUses = found.map(String);
    let _Math = Math;
    obj.score = Math.round(tmp9.score);
    obj.totalUses = tmp9.totalUses;
    obj[tmp8[0]] = obj;
    continue;
  }
  return obj;
};

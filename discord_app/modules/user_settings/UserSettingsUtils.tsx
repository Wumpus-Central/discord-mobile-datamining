// discord_app/modules/user_settings/UserSettingsUtils.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import _mod1307 from "../../../_runtime/metro/01307__.js";
import create2 from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx";
import create3 from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import { ZERO_STRING_GUILD_ID } from "../../Constants.tsx";

require = fn;
function b64ToProto(ProtoClass, settings) {
  if (null == settings) {
    return null;
  } else {
    _mod1307;
    try {
      return ProtoClass.fromBinary(tmp4, obj);
    } catch (tmp7) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Settings proto failed to deserialize (potentially corrupt): " + tmp7);
      throw error;
    }
  }
}
let obj = { [PRELOADED_USER_SETTINGS]: require("create").PreloadedUserSettings, [FRECENCY_AND_FAVORITES_SETTINGS]: require("create").FrecencyUserSettings };
({ PRELOADED_USER_SETTINGS, FRECENCY_AND_FAVORITES_SETTINGS } = require("MAX_FAVORITES").UserSettingsTypes);
const result = require("obj132").fileFinishedImporting("modules/user_settings/UserSettingsUtils.tsx");

export const BINARY_READ_OPTIONS = obj;
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
  return b64ToProto(create.PreloadedUserSettings, settings);
};
export const protoToB64WithType = function protoToB64WithType(arg0, favoriteGifs) {
  return _mod1307.base64encode(obj[arg0].toBinary(favoriteGifs));
};
export const protoToB64 = function protoToB64(ProtoClass, protoToSave) {
  return _mod1307.base64encode(ProtoClass.toBinary(protoToSave));
};
export const mergeTopLevelFields = function mergeTopLevelFields(ProtoClass, closure_3, proto) {
  obj = {};
  const merged = Object.assign(closure_3);
  for (const key10007 in arg2) {
    delete tmp[tmp2];
    continue;
  }
  ProtoClass.mergePartial(obj, proto);
  return obj;
};
export const mutateUserGuildSettings = function mutateUserGuildSettings(guilds, arg1, fn) {
  if (null == guilds.guilds) {
    const AllGuildSettings = create.AllGuildSettings;
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
    const GuildSettings = create.GuildSettings;
    guilds.guilds[tmp3] = GuildSettings.create();
  }
  return fn(guilds.guilds[tmp3]);
};
export const mutateUserGuildSettingsInternal = function mutateUserGuildSettingsInternal(guilds, closure_0, f70184) {
  let tmp = closure_0;
  let tmp2 = null != closure_0;
  if (tmp2) {
    tmp2 = "null" !== tmp;
  }
  if (!tmp2) {
    tmp = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp in guilds.guilds)) {
    const GuildSettings = create.GuildSettings;
    guilds.guilds[tmp] = GuildSettings.create();
  }
  return f70184(guilds.guilds[tmp]);
};
export const mutateUserChannelSettings = function mutateUserChannelSettings(guilds, arg1, id, fn) {
  if (null == guilds.guilds) {
    const AllGuildSettings = create.AllGuildSettings;
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
    const GuildSettings = create.GuildSettings;
    guilds.guilds[tmp3] = GuildSettings.create();
  }
  if (!(id in guilds.guilds[tmp3].channels)) {
    const ChannelSettings = create.ChannelSettings;
    tmp7.channels[id] = ChannelSettings.create();
  }
  return fn(guilds.guilds[tmp3].channels[id]);
};
export const mutateUserChannelSettingsInternal = function mutateUserChannelSettingsInternal(channels, closure_0, f70184) {
  if (!(closure_0 in channels.channels)) {
    const ChannelSettings = create.ChannelSettings;
    channels.channels[closure_0] = ChannelSettings.create();
  }
  return f70184(channels.channels[closure_0]);
};
export const runMigrations = function runMigrations(closure_1, closure_2) {
  if (null == importDefault.versions) {
    const Versions = create2.Versions;
    importDefault.versions = Versions.create();
  }
  let num = 0;
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult.version <= num) {
      let _Error = Error;
      throw Error("Migrations are out of order or there is a duplicate version");
    } else {
      num = tmp4.version;
      continue;
    }
  }
  let flag = false;
  const items = [];
  const iter2 = dependencyMap[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    obj = nextResult1;
    if (nextResult1.version <= importDefault.versions.clientVersion) {
      if (tmp8) {
        let cleanup2 = obj.cleanup;
        if (cleanup2 != null) {
          let cleanup2Result = cleanup2();
        }
      }
    } else {
      importDefault.versions.clientVersion = obj.version;
      if (false !== obj.run(importDefault)) {
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
  obj = { proto: importDefault, isDirty: flag, cleanupFuncs: items };
  return obj;
};
export const serializeUsageHistory = function serializeUsageHistory(usageHistory, closure_13) {
  let length;
  const entries = Object.entries(usageHistory);
  if (entries.length > closure_13) {
    obj = applyDefault;
    const reversed = obj.sortBy(entries, (arg0) => {
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    }).reverse();
    if (reversed.length > closure_13) {
      do {
        let arr = reversed.pop();
        length = reversed.length;
      } while (length > closure_13);
    }
    const sortByResult = obj.sortBy(entries, (arg0) => {
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    });
  }
  obj = {};
  while (tmp5 !== undefined) {
    let tmp8 = callback(tmp6, 2);
    let tmp9 = tmp8[1];
    let FrecencyItem = create3.FrecencyItem;
    obj = FrecencyItem.create();
    ({ frecency: tmp12.frecency, recentUses } = tmp9);
    let found = recentUses.filter((item, index) => {
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
// === Module 1342: b64ToProto ===

// Module 1342 (b64ToProto)
import applyDefault from "apply" /* 12 */;
import create from "create" /* 1306 */;
import _mod1307 from "module_1307" /* 1307 */;
import create2 from "create" /* 1335 */;
import create3 from "create" /* 1341 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { ZERO_STRING_GUILD_ID } from "ME" /* 676 */;

require = arg1;
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
let obj = {
  readerFactory(buf) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1307.BinaryReader(buf, textDecoder);
    return binaryReader;
  }
};
obj = { [PRELOADED_USER_SETTINGS]: require("create").PreloadedUserSettings, [FRECENCY_AND_FAVORITES_SETTINGS]: require("create").FrecencyUserSettings };
({ PRELOADED_USER_SETTINGS, FRECENCY_AND_FAVORITES_SETTINGS } = require("MAX_FAVORITES").UserSettingsTypes);
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsUtils.tsx");

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
export const mergeTopLevelFields = function mergeTopLevelFields(ProtoClass, proto, proto2) {
  obj = {};
  const merged = Object.assign(proto);
  for (const key10007 in arg2) {
    let tmp5 = key10007;
    delete tmp[tmp2];
    continue;
  }
  ProtoClass.mergePartial(obj, proto2);
  return obj;
};
export const mutateUserGuildSettings = function mutateUserGuildSettings(guilds) {
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
  return arg2(guilds.guilds[tmp3]);
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
export const mutateUserChannelSettings = function mutateUserChannelSettings(guilds, arg1, id, arg3) {
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
  return arg3(guilds.guilds[tmp3].channels[id]);
};
export const mutateUserChannelSettingsInternal = function mutateUserChannelSettingsInternal(channels, closure_0, f70184) {
  if (!(closure_0 in channels.channels)) {
    const ChannelSettings = create.ChannelSettings;
    channels.channels[closure_0] = ChannelSettings.create();
  }
  return f70184(channels.channels[closure_0]);
};
export const runMigrations = function runMigrations(closure_1, closure_2) {
  if (null == closure_1.versions) {
    const Versions = create2.Versions;
    closure_1.versions = Versions.create();
  }
  let num = 0;
  const iter = closure_2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = num;
    if (nextResult.version <= num) {
      let tmp7 = globalThis;
      let _Error = Error;
      let str = "Migrations are out of order or there is a duplicate version";
      throw Error("Migrations are out of order or there is a duplicate version");
    } else {
      let tmp6 = nextResult;
      num = tmp4.version;
      continue;
    }
  }
  let flag = false;
  const items = [];
  const iter2 = closure_2[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    obj = nextResult1;
    if (nextResult1.version <= closure_1.versions.clientVersion) {
      if (tmp8) {
        let tmp16 = nextResult1;
        let cleanup2 = obj.cleanup;
        if (cleanup2 != null) {
          let cleanup2Result = cleanup2();
        }
      }
    } else {
      let tmp10 = nextResult1;
      closure_1.versions.clientVersion = obj.version;
      if (false !== obj.run(closure_1)) {
        flag = true;
        let tmp13 = nextResult1;
        if (null != obj.cleanup) {
          let tmp14 = nextResult1;
          let arr = items.push(obj.cleanup);
        }
      } else {
        let tmp11 = nextResult1;
        let cleanup = obj.cleanup;
        if (cleanup != null) {
          let cleanupResult = cleanup();
        }
      }
    }
    continue;
  }
  obj = { proto: closure_1, isDirty: flag, cleanupFuncs: items };
  return obj;
};
export const serializeUsageHistory = function serializeUsageHistory(usageHistory, closure_13) {
  let length;
  const entries = Object.entries(usageHistory);
  let tmp = entries;
  if (entries.length > closure_13) {
    obj = applyDefault;
    const reversed = obj.sortBy(entries, (arg0) => {
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    }).reverse();
    tmp = reversed;
    if (reversed.length > closure_13) {
      do {
        let arr = reversed.pop();
        tmp = reversed;
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
    let tmp7 = callback;
    let tmp8 = callback(tmp6, 2);
    let tmp9 = tmp8[1];
    let tmp10 = require;
    let tmp11 = dependencyMap;
    let FrecencyItem = create3.FrecencyItem;
    obj = FrecencyItem.create();
    ({ frecency: tmp12.frecency, recentUses } = tmp9);
    let found = recentUses.filter((arg0) => {
      let tmp = null != arg0;
      if (tmp) {
        tmp = arg0 > 0;
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
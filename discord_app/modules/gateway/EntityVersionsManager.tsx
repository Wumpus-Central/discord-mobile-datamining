// === Module 16771: handleDeletedEntityIds ===

// Module 16771 (handleDeletedEntityIds)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault2 from "initialize" /* 5433 */;
import getAllDefault from "getAll" /* 7323 */;
import closure_2 from "getEmojiToGroupId" /* 5348 */;
import closure_3 from "loadSavedGuildStickers" /* 5391 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "_handleConnectionOpen" /* 5168 */;

function handleDeletedEntityIds(guild_id) {
  importDefault = guild_id;
  guild = guild.getGuild(guild_id.guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  closure_8.fileOnly("received deleted guild entities (id: " + guild_id.guild_id + ", name: " + name + ")");
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    if (null != set3.channels) {
      const guild_id2 = tmp.guild_id;
      const _Set2 = Set;
      const set = new Set(tmp.channels);
      set3 = guild_id2;
      let set1 = set;
      const keys = guild_id(closure_1_1[12]).keys(closure_1_4.getMutableBasicGuildChannelsForGuild(guild_id2));
      let obj = { channelIdsInMemory: null, channelIdsFromServer: null };
      obj[0] = keys;
      obj[1] = set;
      closure_1_8.fileOnly("syncChannels", obj);
      const item = keys.forEach((arg0) => {
        if (!set1.has(arg0)) {
          let obj = set3(set1[8]);
          obj = { type: "CHANNEL_DELETE", channel: null };
          obj = { guild_id: null, id: null, parent_id: "Array" };
          obj[0] = set3;
          obj[1] = arg0;
          obj[1] = obj;
          obj.dispatch(obj);
        }
      });
      const obj6 = guild_id(closure_1_1[12]);
    }
    if (null != set3.roles) {
      guild_id = tmp.guild_id;
      const _Set = Set;
      set1 = new Set(tmp.roles);
      set3 = guild_id;
      obj = guild_id(closure_1_1[12]);
      const keys1 = obj.keys(closure_1_5.getUnsafeMutableRoles(guild_id));
      const item1 = keys1.forEach((arg0) => {
        if (!set1.has(arg0)) {
          let obj = set3(set1[8]);
          obj = { type: "GUILD_ROLE_DELETE", guildId: null, roleId: null };
          obj[1] = set3;
          obj[2] = arg0;
          obj.dispatch(obj);
        }
      });
    }
    if (null != set3.emojis) {
      const guild_id3 = tmp.guild_id;
      const _Set3 = Set;
      const set2 = new Set(tmp.emojis);
      set3 = set2;
      const guildEmoji = closure_1_2.getGuildEmoji(guild_id3);
      const found = guildEmoji.filter((id) => set3.has(id.id));
      if (guildEmoji.length !== found.length) {
        obj1 = guild_id(closure_1_1[8]);
        obj = { type: "GUILD_EMOJIS_UPDATE", guildId: null, emojis: null };
        obj[1] = guild_id3;
        obj[2] = found;
        obj1.dispatch(obj);
      }
    }
    if (null != set3.stickers) {
      const guild_id4 = tmp.guild_id;
      const _Set4 = Set;
      set3 = new Set(tmp.stickers);
      let stickersByGuildId = closure_1_3.getStickersByGuildId(guild_id4);
      if (stickersByGuildId == null) {
        stickersByGuildId = [];
      }
      const found1 = stickersByGuildId.filter((id) => set3.has(id.id));
      if (stickersByGuildId.length !== found1.length) {
        obj1 = { type: "GUILD_STICKERS_UPDATE", guildId: null, stickers: null };
        obj1[1] = guild_id4;
        obj1[2] = found1;
        guild_id(closure_1_1[8]).dispatch(obj1);
        const obj4 = guild_id(closure_1_1[8]);
      }
    }
  });
}
function handleConnectionOpen() {
  const all = getAllDefault.getAll();
  all.then((arr) => {
    const item = arr.forEach((arg0) => {
      closure_0 = arg0;
      const timerId = setTimeout(() => {
        const guild = closure_1_6.getGuild(callback);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        closure_1_8.fileOnly("requesting deleted guild entities (id: " + callback + ", name: " + name + ")");
        const keys = Object.keys(closure_1_4.getMutableBasicGuildChannelsForGuild(tmp));
        const sorted = keys.sort();
        let str = callback(closure_1_1[11]).v3(sorted.join(","));
        str = str.toString();
        const sortedRoles = closure_1_5.getSortedRoles(tmp);
        const mapped = sortedRoles.map((id) => id.id);
        const obj2 = callback(closure_1_1[11]);
        const tmp5 = callback;
        const tmp6 = closure_1_1;
        const sorted1 = mapped.sort();
        let str2 = callback(closure_1_1[11]).v3(sorted1.join(","));
        const obj5 = callback(closure_1_1[11]);
        const guildEmoji = closure_1_2.getGuildEmoji(tmp);
        const mapped1 = guildEmoji.map((id) => id.id);
        const str1 = str2.toString();
        const sorted2 = mapped1.sort();
        let str3 = callback(closure_1_1[11]).v3(sorted2.join(","));
        str2 = str3.toString();
        const stickersByGuildId = closure_1_3.getStickersByGuildId(tmp);
        let mapped2;
        if (stickersByGuildId != null) {
          mapped2 = stickersByGuildId.map((id) => id.id);
        }
        if (mapped2 == null) {
          mapped2 = [];
        }
        const obj8 = callback(closure_1_1[11]);
        const sorted3 = mapped2.sort();
        const tmp5Result = tmp5(tmp6[11]);
        str3 = tmp5(tmp6[11]).v3(sorted3.join(",")).toString();
        const socket = closure_1_7.getSocket();
        const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(tmp, str, str1, str2, str3);
      }, Math.ceil(2000 * Math.random()));
    });
  });
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  if (guild.unableToSyncDeletes) {
    const id = guild.id;
    const _Math = Math;
    const _Math2 = Math;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const guild = closure_1_6.getGuild(callback);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      closure_1_8.fileOnly("requesting deleted guild entities (id: " + callback + ", name: " + name + ")");
      const keys = Object.keys(closure_1_4.getMutableBasicGuildChannelsForGuild(tmp));
      const sorted = keys.sort();
      let str = callback(closure_1_1[11]).v3(sorted.join(","));
      str = str.toString();
      const sortedRoles = closure_1_5.getSortedRoles(tmp);
      const mapped = sortedRoles.map((id) => id.id);
      const obj2 = callback(closure_1_1[11]);
      const tmp5 = callback;
      const tmp6 = closure_1_1;
      const sorted1 = mapped.sort();
      let str2 = callback(closure_1_1[11]).v3(sorted1.join(","));
      const obj5 = callback(closure_1_1[11]);
      const guildEmoji = closure_1_2.getGuildEmoji(tmp);
      const mapped1 = guildEmoji.map((id) => id.id);
      const str1 = str2.toString();
      const sorted2 = mapped1.sort();
      let str3 = callback(closure_1_1[11]).v3(sorted2.join(","));
      str2 = str3.toString();
      const stickersByGuildId = closure_1_3.getStickersByGuildId(tmp);
      let mapped2;
      if (stickersByGuildId != null) {
        mapped2 = stickersByGuildId.map((id) => id.id);
      }
      if (mapped2 == null) {
        mapped2 = [];
      }
      const obj8 = callback(closure_1_1[11]);
      const sorted3 = mapped2.sort();
      const tmp5Result = tmp5(tmp6[11]);
      str3 = tmp5(tmp6[11]).v3(sorted3.join(",")).toString();
      const socket = closure_1_7.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(tmp, str, str1, str2, str3);
    }, Math.ceil(2000 * Math.random()));
  }
}
let closure_8 = new timestampDefault("EntityVersionsManager");
initializeDefault2;
class EntityVersionsManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { GUILD_CREATE: handleGuildCreate, DELETED_ENTITY_IDS: handleDeletedEntityIds };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = EntityVersionsManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
};
const entityVersionsManager = new EntityVersionsManager();
const tmp2 = new timestampDefault("EntityVersionsManager");
const result = require("set").fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default entityVersionsManager;
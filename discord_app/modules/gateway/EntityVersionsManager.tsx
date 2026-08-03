// === Module 16251: handleDeletedEntityIds ===

// Module 16251 (handleDeletedEntityIds)
import getEmojiToGroupId from "getEmojiToGroupId";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _handleConnectionOpen from "_handleConnectionOpen";
import "initialize";

function handleDeletedEntityIds(guild_id) {
  const importDefault = guild_id;
  guild = guild.getGuild(guild_id.guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  tmp2.fileOnly("received deleted guild entities (id: " + guild_id.guild_id + ", name: " + name + ")");
  const Emitter = importDefault(589).Emitter;
  Emitter.batched(() => {
    if (null != set3.channels) {
      const guild_id2 = tmp.guild_id;
      const _Set2 = Set;
      const set = new Set(tmp.channels);
      set3 = guild_id2;
      let set1 = set;
      const keys = guild_id(outer1_1[12]).keys(outer1_4.getMutableBasicGuildChannelsForGuild(guild_id2));
      let obj = { channelIdsInMemory: null, channelIdsFromServer: null };
      obj[0] = keys;
      obj[1] = set;
      outer1_8.fileOnly("syncChannels", obj);
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
      const obj6 = guild_id(outer1_1[12]);
    }
    if (null != set3.roles) {
      guild_id = tmp.guild_id;
      const _Set = Set;
      set1 = new Set(tmp.roles);
      set3 = guild_id;
      obj = guild_id(outer1_1[12]);
      const keys1 = obj.keys(outer1_5.getUnsafeMutableRoles(guild_id));
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
      const guildEmoji = outer1_2.getGuildEmoji(guild_id3);
      const found = guildEmoji.filter((id) => set3.has(id.id));
      if (guildEmoji.length !== found.length) {
        let obj1 = guild_id(outer1_1[8]);
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
      let stickersByGuildId = outer1_3.getStickersByGuildId(guild_id4);
      if (stickersByGuildId == null) {
        stickersByGuildId = [];
      }
      const found1 = stickersByGuildId.filter((id) => set3.has(id.id));
      if (stickersByGuildId.length !== found1.length) {
        obj1 = { type: "GUILD_STICKERS_UPDATE", guildId: null, stickers: null };
        obj1[1] = guild_id4;
        obj1[2] = found1;
        guild_id(outer1_1[8]).dispatch(obj1);
        const obj4 = guild_id(outer1_1[8]);
      }
    }
  });
}
function handleConnectionOpen() {
  const all = importDefault(7020).getAll();
  all.then((arr) => {
    const item = arr.forEach((arg0) => {
      let closure_0 = arg0;
      const timerId = setTimeout(() => {
        const guild = outer1_6.getGuild(callback);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        outer1_8.fileOnly("requesting deleted guild entities (id: " + callback + ", name: " + name + ")");
        const keys = Object.keys(outer1_4.getMutableBasicGuildChannelsForGuild(tmp));
        const sorted = keys.sort();
        let str = callback(outer1_1[11]).v3(sorted.join(","));
        str = str.toString();
        const sortedRoles = outer1_5.getSortedRoles(tmp);
        const mapped = sortedRoles.map((id) => id.id);
        const obj2 = callback(outer1_1[11]);
        const tmp5 = callback;
        const tmp6 = outer1_1;
        const sorted1 = mapped.sort();
        let str2 = callback(outer1_1[11]).v3(sorted1.join(","));
        const obj5 = callback(outer1_1[11]);
        const guildEmoji = outer1_2.getGuildEmoji(tmp);
        const mapped1 = guildEmoji.map((id) => id.id);
        const str1 = str2.toString();
        const sorted2 = mapped1.sort();
        let str3 = callback(outer1_1[11]).v3(sorted2.join(","));
        str2 = str3.toString();
        const stickersByGuildId = outer1_3.getStickersByGuildId(tmp);
        let mapped2;
        if (stickersByGuildId != null) {
          mapped2 = stickersByGuildId.map((id) => id.id);
        }
        if (mapped2 == null) {
          mapped2 = [];
        }
        const obj8 = callback(outer1_1[11]);
        const sorted3 = mapped2.sort();
        const tmp5Result = tmp5(tmp6[11]);
        str3 = tmp5(tmp6[11]).v3(sorted3.join(",")).toString();
        const socket = outer1_7.getSocket();
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
      const guild = outer1_6.getGuild(callback);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      outer1_8.fileOnly("requesting deleted guild entities (id: " + callback + ", name: " + name + ")");
      const keys = Object.keys(outer1_4.getMutableBasicGuildChannelsForGuild(tmp));
      const sorted = keys.sort();
      let str = callback(outer1_1[11]).v3(sorted.join(","));
      str = str.toString();
      const sortedRoles = outer1_5.getSortedRoles(tmp);
      const mapped = sortedRoles.map((id) => id.id);
      const obj2 = callback(outer1_1[11]);
      const tmp5 = callback;
      const tmp6 = outer1_1;
      const sorted1 = mapped.sort();
      let str2 = callback(outer1_1[11]).v3(sorted1.join(","));
      const obj5 = callback(outer1_1[11]);
      const guildEmoji = outer1_2.getGuildEmoji(tmp);
      const mapped1 = guildEmoji.map((id) => id.id);
      const str1 = str2.toString();
      const sorted2 = mapped1.sort();
      let str3 = callback(outer1_1[11]).v3(sorted2.join(","));
      str2 = str3.toString();
      const stickersByGuildId = outer1_3.getStickersByGuildId(tmp);
      let mapped2;
      if (stickersByGuildId != null) {
        mapped2 = stickersByGuildId.map((id) => id.id);
      }
      if (mapped2 == null) {
        mapped2 = [];
      }
      const obj8 = callback(outer1_1[11]);
      const sorted3 = mapped2.sort();
      const tmp5Result = tmp5(tmp6[11]);
      str3 = tmp5(tmp6[11]).v3(sorted3.join(",")).toString();
      const socket = outer1_7.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(tmp, str, str1, str2, str3);
    }, Math.ceil(2000 * Math.random()));
  }
}
const metroImportAll = new require("createGuildRoleRecordFromRust")("EntityVersionsManager");
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
  const subscription = importDefault(709).subscribe("CONNECTION_OPEN", handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  importDefault(709).unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
};
const entityVersionsManager = new EntityVersionsManager();
const tmp2 = new require("createGuildRoleRecordFromRust")("EntityVersionsManager");
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default entityVersionsManager;
// discord_app/modules/gateway/EntityVersionsManager.tsx
import timestampDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault2 from "../../lib/AutomaticLifecycleManager.tsx";
import getAllDefault from "../app_database/modules/GuildsRequiringDeletedIdsSync.tsx";
import getEmojiToGroupId from "../emojis/EmojiStore.tsx";
import loadSavedGuildStickers from "../stickers/StickersStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import _handleConnectionOpen from "GatewayConnectionStore.tsx";

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
      const keys = guild_id(dependencyMap[12]).keys(closure_1_4.getMutableBasicGuildChannelsForGuild(guild_id2));
      let obj = { channelIdsInMemory: null, channelIdsFromServer: null };
      obj[0] = keys;
      obj[1] = set;
      closure_1_8.fileOnly("syncChannels", obj);
      const item = keys.forEach((item, index) => {
        if (!set1.has(item)) {
          set3(set1[8]);
          const obj = { guild_id: null, id: null, parent_id: "Array" };
          obj[0] = set3;
          obj[1] = item;
          obj[1] = obj;
          obj.dispatch(obj);
        }
      });
      const obj6 = guild_id(dependencyMap[12]);
    }
    if (null != set3.roles) {
      guild_id = tmp.guild_id;
      const _Set = Set;
      set1 = new Set(tmp.roles);
      set3 = guild_id;
      obj = guild_id(dependencyMap[12]);
      const keys1 = obj.keys(closure_1_5.getUnsafeMutableRoles(guild_id));
      const item1 = keys1.forEach((item, index) => {
        if (!set1.has(item)) {
          set3(set1[8]);
          const obj = { type: "GUILD_ROLE_DELETE", guildId: null, roleId: null };
          obj[1] = set3;
          obj[2] = item;
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
      const found = guildEmoji.filter((item, index) => set3.has(item.id));
      if (guildEmoji.length !== found.length) {
        obj1 = guild_id(dependencyMap[8]);
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
      const found1 = stickersByGuildId.filter((item, index) => set3.has(item.id));
      if (stickersByGuildId.length !== found1.length) {
        obj1 = { type: "GUILD_STICKERS_UPDATE", guildId: null, stickers: null };
        obj1[1] = guild_id4;
        obj1[2] = found1;
        guild_id(dependencyMap[8]).dispatch(obj1);
        const obj4 = guild_id(dependencyMap[8]);
      }
    }
  });
}
function handleConnectionOpen() {
  const all = getAllDefault.getAll();
  all.then((result) => {
    const item = result.forEach((item, index) => {
      closure_0 = item;
      const timerId = setTimeout(() => {
        const guild = closure_1_6.getGuild(item);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        closure_1_8.fileOnly("requesting deleted guild entities (id: " + item + ", name: " + name + ")");
        const keys = Object.keys(closure_1_4.getMutableBasicGuildChannelsForGuild(item));
        const sorted = keys.sort();
        let str = item(closure_1_1[11]).v3(sorted.join(","));
        str = str.toString();
        const sortedRoles = closure_1_5.getSortedRoles(item);
        const mapped = sortedRoles.map((item, index) => item.id);
        const obj2 = item(closure_1_1[11]);
        const sorted1 = mapped.sort();
        let str2 = item(closure_1_1[11]).v3(sorted1.join(","));
        const obj5 = item(closure_1_1[11]);
        const guildEmoji = closure_1_2.getGuildEmoji(item);
        const mapped1 = guildEmoji.map((item, index) => item.id);
        const str1 = str2.toString();
        const sorted2 = mapped1.sort();
        let str3 = item(closure_1_1[11]).v3(sorted2.join(","));
        str2 = str3.toString();
        const stickersByGuildId = closure_1_3.getStickersByGuildId(item);
        let mapped2;
        if (stickersByGuildId != null) {
          mapped2 = stickersByGuildId.map((item, index) => item.id);
        }
        if (mapped2 == null) {
          mapped2 = [];
        }
        const obj8 = item(closure_1_1[11]);
        const sorted3 = mapped2.sort();
        const tmp5Result = item(closure_1_1[11]);
        str3 = item(closure_1_1[11]).v3(sorted3.join(",")).toString();
        const socket = closure_1_7.getSocket();
        const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(item, str, str1, str2, str3);
        const str4 = item(closure_1_1[11]).v3(sorted3.join(","));
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
      const guild = closure_1_6.getGuild(item);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      closure_1_8.fileOnly("requesting deleted guild entities (id: " + item + ", name: " + name + ")");
      const keys = Object.keys(closure_1_4.getMutableBasicGuildChannelsForGuild(item));
      const sorted = keys.sort();
      let str = item(closure_1_1[11]).v3(sorted.join(","));
      str = str.toString();
      const sortedRoles = closure_1_5.getSortedRoles(item);
      const mapped = sortedRoles.map((item, index) => item.id);
      const obj2 = item(closure_1_1[11]);
      const sorted1 = mapped.sort();
      let str2 = item(closure_1_1[11]).v3(sorted1.join(","));
      const obj5 = item(closure_1_1[11]);
      const guildEmoji = closure_1_2.getGuildEmoji(item);
      const mapped1 = guildEmoji.map((item, index) => item.id);
      const str1 = str2.toString();
      const sorted2 = mapped1.sort();
      let str3 = item(closure_1_1[11]).v3(sorted2.join(","));
      str2 = str3.toString();
      const stickersByGuildId = closure_1_3.getStickersByGuildId(item);
      let mapped2;
      if (stickersByGuildId != null) {
        mapped2 = stickersByGuildId.map((item, index) => item.id);
      }
      if (mapped2 == null) {
        mapped2 = [];
      }
      const obj8 = item(closure_1_1[11]);
      const sorted3 = mapped2.sort();
      const tmp5Result = item(closure_1_1[11]);
      str3 = item(closure_1_1[11]).v3(sorted3.join(",")).toString();
      const socket = closure_1_7.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(item, str, str1, str2, str3);
      const str4 = item(closure_1_1[11]).v3(sorted3.join(","));
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
const result = require("obj132").fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default entityVersionsManager;
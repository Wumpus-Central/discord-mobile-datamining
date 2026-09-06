// === Module 17346: EntityVersionsManager ===

// Module 17346 (EntityVersionsManager)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildsRequiringDeletedIdsSyncDefault from "GuildsRequiringDeletedIdsSync" /* 7651 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import StickersStore from "StickersStore" /* 5502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

function handleDeletedEntityIds(guild_id) {
  importDefault = guild_id;
  const guild = GuildStore.getGuild(guild_id.guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  closure_8.fileOnly("received deleted guild entities (id: " + guild_id.guild_id + ", name: " + name + ")");
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    if (null != guild_id.channels) {
      const guild_id2 = tmp.guild_id;
      const _Set2 = Set;
      const set = new Set(tmp.channels);
      let set3 = guild_id2;
      let set1 = set;
      const keys = SnowflakeUtilsDefault.keys(ChannelStore.getMutableBasicGuildChannelsForGuild(guild_id2));
      let obj = { channelIdsInMemory: keys, channelIdsFromServer: set };
      closure_8.fileOnly("syncChannels", obj);
      const item = keys.forEach((id) => {
        if (!set1.has(id)) {
          set3(573);
          let obj = { type: "CHANNEL_DELETE", channel: null };
          obj = { guild_id: set3, id, parent_id: "Array" };
          obj.channel = obj;
          obj.dispatch(obj);
        }
      });
    }
    if (null != guild_id.roles) {
      guild_id = tmp.guild_id;
      const _Set = Set;
      set1 = new Set(tmp.roles);
      set3 = guild_id;
      obj = SnowflakeUtilsDefault;
      const keys1 = obj.keys(GuildRoleStore.getUnsafeMutableRoles(guild_id));
      const item1 = keys1.forEach((roleId) => {
        if (!set1.has(roleId)) {
          set3(573);
          const obj = { type: "GUILD_ROLE_DELETE", guildId: set3, roleId };
          obj.dispatch(obj);
        }
      });
    }
    if (null != guild_id.emojis) {
      const guild_id3 = tmp.guild_id;
      const _Set3 = Set;
      const set2 = new Set(tmp.emojis);
      set3 = set2;
      const guildEmoji = EmojiStore.getGuildEmoji(guild_id3);
      const found = guildEmoji.filter((id) => set3.has(id.id));
      if (guildEmoji.length !== found.length) {
        let obj1 = DispatcherDefault;
        obj = { type: "GUILD_EMOJIS_UPDATE", guildId: guild_id3, emojis: found };
        obj1.dispatch(obj);
      }
    }
    if (null != guild_id.stickers) {
      const guild_id4 = tmp.guild_id;
      const _Set4 = Set;
      set3 = new Set(tmp.stickers);
      let stickersByGuildId = StickersStore.getStickersByGuildId(guild_id4);
      if (stickersByGuildId == null) {
        stickersByGuildId = [];
      }
      const found1 = stickersByGuildId.filter((id) => set3.has(id.id));
      if (stickersByGuildId.length !== found1.length) {
        obj1 = { type: "GUILD_STICKERS_UPDATE", guildId: guild_id4, stickers: found1 };
        DispatcherDefault.dispatch(obj1);
      }
    }
  });
}
function handleConnectionOpen() {
  const all = GuildsRequiringDeletedIdsSyncDefault.getAll();
  all.then((arr) => {
    const item = arr.forEach((item) => {
      closure_0 = item;
      const timerId = setTimeout(() => {
        guild = guild.getGuild(closure_0);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        closure_2_8.fileOnly("requesting deleted guild entities (id: " + closure_0 + ", name: " + name + ")");
        const keys = Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(tmp));
        const sorted = keys.sort();
        let str = closure_2_0(1241).v3(sorted.join(","));
        str = str.toString();
        sortedRoles = sortedRoles.getSortedRoles(tmp);
        const mapped = sortedRoles.map((id) => id.id);
        const obj2 = closure_2_0(1241);
        const tmp5 = closure_2_0;
        const sorted1 = mapped.sort();
        let str2 = closure_2_0(1241).v3(sorted1.join(","));
        const obj5 = closure_2_0(1241);
        guildEmoji = guildEmoji.getGuildEmoji(tmp);
        const mapped1 = guildEmoji.map((id) => id.id);
        const str1 = str2.toString();
        const sorted2 = mapped1.sort();
        let str3 = closure_2_0(1241).v3(sorted2.join(","));
        str2 = str3.toString();
        stickersByGuildId = stickersByGuildId.getStickersByGuildId(tmp);
        let mapped2;
        if (stickersByGuildId != null) {
          mapped2 = stickersByGuildId.map((id) => id.id);
        }
        if (mapped2 == null) {
          mapped2 = [];
        }
        const obj8 = closure_2_0(1241);
        const sorted3 = mapped2.sort();
        const tmp5Result = tmp5(1241);
        str3 = tmp5(1241).v3(sorted3.join(",")).toString();
        socket = socket.getSocket();
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
      guild = guild.getGuild(closure_0);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      closure_2_8.fileOnly("requesting deleted guild entities (id: " + closure_0 + ", name: " + name + ")");
      const keys = Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(tmp));
      const sorted = keys.sort();
      let str = closure_2_0(1241).v3(sorted.join(","));
      str = str.toString();
      sortedRoles = sortedRoles.getSortedRoles(tmp);
      const mapped = sortedRoles.map((id) => id.id);
      const obj2 = closure_2_0(1241);
      const tmp5 = closure_2_0;
      const sorted1 = mapped.sort();
      let str2 = closure_2_0(1241).v3(sorted1.join(","));
      const obj5 = closure_2_0(1241);
      guildEmoji = guildEmoji.getGuildEmoji(tmp);
      const mapped1 = guildEmoji.map((id) => id.id);
      const str1 = str2.toString();
      const sorted2 = mapped1.sort();
      let str3 = closure_2_0(1241).v3(sorted2.join(","));
      str2 = str3.toString();
      stickersByGuildId = stickersByGuildId.getStickersByGuildId(tmp);
      let mapped2;
      if (stickersByGuildId != null) {
        mapped2 = stickersByGuildId.map((id) => id.id);
      }
      if (mapped2 == null) {
        mapped2 = [];
      }
      const obj8 = closure_2_0(1241);
      const sorted3 = mapped2.sort();
      const tmp5Result = tmp5(1241);
      str3 = tmp5(1241).v3(sorted3.join(",")).toString();
      socket = socket.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(tmp, str, str1, str2, str3);
    }, Math.ceil(2000 * Math.random()));
  }
}
let closure_8 = new LoggerDefault("EntityVersionsManager");
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
  const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
};
const entityVersionsManager = new EntityVersionsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default entityVersionsManager;
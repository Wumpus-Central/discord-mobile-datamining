// === Module 17849: EntityVersionsManager ===

// Module 17849 (EntityVersionsManager)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildsRequiringDeletedIdsSyncDefault from "GuildsRequiringDeletedIdsSync" /* 7972 */;
import EmojiStore from "EmojiStore" /* 5762 */;
import StickersStore from "StickersStore" /* 5805 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2064 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5580 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7449 */;

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
      let obj3 = { channelIdsInMemory: keys, channelIdsFromServer: set };
      closure_8.fileOnly("syncChannels", obj3);
      const item = keys.forEach((id) => {
        if (!set1.has(id)) {
          const obj2 = { type: "CHANNEL_DELETE", channel: null };
          const obj3 = { guild_id: set3, id, parent_id: "Array" };
          obj2.channel = obj3;
          set3(573).dispatch(obj2);
          const obj = set3(573);
        }
      });
    }
    if (null != guild_id.roles) {
      guild_id = tmp.guild_id;
      const _Set = Set;
      set1 = new Set(tmp.roles);
      set3 = guild_id;
      const keys1 = SnowflakeUtilsDefault.keys(GuildRoleStore.getUnsafeMutableRoles(guild_id));
      const item1 = keys1.forEach((roleId) => {
        if (!set1.has(roleId)) {
          const obj2 = { type: "GUILD_ROLE_DELETE", guildId: set3, roleId };
          set3(573).dispatch(obj2);
          const obj = set3(573);
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
        const obj5 = { type: "GUILD_EMOJIS_UPDATE", guildId: guild_id3, emojis: found };
        DispatcherDefault.dispatch(obj5);
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
        const obj7 = { type: "GUILD_STICKERS_UPDATE", guildId: guild_id4, stickers: found1 };
        DispatcherDefault.dispatch(obj7);
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
        const keys = Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(closure_0));
        const sorted = keys.sort();
        const obj2 = closure_2_0(1240);
        const str = closure_2_0(1240).v3(sorted.join(","));
        sortedRoles = sortedRoles.getSortedRoles(closure_0);
        const mapped = sortedRoles.map((id) => id.id);
        const str1 = closure_2_0(1240).v3(sorted.join(",")).toString();
        const sorted1 = mapped.sort();
        const obj5 = closure_2_0(1240);
        const str2 = closure_2_0(1240).v3(sorted1.join(","));
        guildEmoji = guildEmoji.getGuildEmoji(closure_0);
        const mapped1 = guildEmoji.map((id) => id.id);
        const str5 = closure_2_0(1240).v3(sorted1.join(",")).toString();
        const sorted2 = mapped1.sort();
        const obj8 = closure_2_0(1240);
        const str3 = closure_2_0(1240).v3(sorted2.join(","));
        stickersByGuildId = stickersByGuildId.getStickersByGuildId(closure_0);
        let mapped2;
        if (stickersByGuildId != null) {
          mapped2 = stickersByGuildId.map((id) => id.id);
        }
        if (mapped2 == null) {
          mapped2 = [];
        }
        const str6 = closure_2_0(1240).v3(sorted2.join(",")).toString();
        const sorted3 = mapped2.sort();
        const tmp5Result = closure_2_0(1240);
        const str4 = closure_2_0(1240).v3(sorted3.join(","));
        socket = socket.getSocket();
        const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(closure_0, str1, str5, str6, closure_2_0(1240).v3(sorted3.join(",")).toString());
        const str7 = closure_2_0(1240).v3(sorted3.join(",")).toString();
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
      const keys = Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(closure_0));
      const sorted = keys.sort();
      const obj2 = closure_2_0(1240);
      const str = closure_2_0(1240).v3(sorted.join(","));
      sortedRoles = sortedRoles.getSortedRoles(closure_0);
      const mapped = sortedRoles.map((id) => id.id);
      const str1 = closure_2_0(1240).v3(sorted.join(",")).toString();
      const sorted1 = mapped.sort();
      const obj5 = closure_2_0(1240);
      const str2 = closure_2_0(1240).v3(sorted1.join(","));
      guildEmoji = guildEmoji.getGuildEmoji(closure_0);
      const mapped1 = guildEmoji.map((id) => id.id);
      const str5 = closure_2_0(1240).v3(sorted1.join(",")).toString();
      const sorted2 = mapped1.sort();
      const obj8 = closure_2_0(1240);
      const str3 = closure_2_0(1240).v3(sorted2.join(","));
      stickersByGuildId = stickersByGuildId.getStickersByGuildId(closure_0);
      let mapped2;
      if (stickersByGuildId != null) {
        mapped2 = stickersByGuildId.map((id) => id.id);
      }
      if (mapped2 == null) {
        mapped2 = [];
      }
      const str6 = closure_2_0(1240).v3(sorted2.join(",")).toString();
      const sorted3 = mapped2.sort();
      const tmp5Result = closure_2_0(1240);
      const str4 = closure_2_0(1240).v3(sorted3.join(","));
      socket = socket.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(closure_0, str1, str5, str6, closure_2_0(1240).v3(sorted3.join(",")).toString());
      const str7 = closure_2_0(1240).v3(sorted3.join(",")).toString();
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
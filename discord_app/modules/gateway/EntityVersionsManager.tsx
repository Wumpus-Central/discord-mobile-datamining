// discord_app/modules/gateway/EntityVersionsManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildsRequiringDeletedIdsSyncDefault from "../app_database/modules/GuildsRequiringDeletedIdsSync.tsx";
import EmojiStore from "../emojis/EmojiStore.tsx";
import StickersStore from "../stickers/StickersStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import GatewayConnectionStore from "GatewayConnectionStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault, set, set2, set3, socket, sortedRoles;

function handleDeletedEntityIds(guild_id) {
  importDefault = guild_id;
  const guild = GuildStore.getGuild(guild_id.guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  closure_8.fileOnly("received deleted guild entities (id: " + guild_id.guild_id + ", name: " + name + ")");
  const Emitter = get_initializedDefault.Emitter;
  Emitter.batched(function () {
    if (null != guild_id.channels) {
      const guild_id2 = tmp.guild_id;
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set(tmp.channels);
      const obj6 = SnowflakeUtilsDefault;
      const keys = obj6.keys(ChannelStore.getMutableBasicGuildChannelsForGuild(guild_id2));
      let obj3 = { channelIdsInMemory: keys, channelIdsFromServer: set };
      closure_8.fileOnly("syncChannels", obj3);
      const item = keys.forEach((id) => {
        let obj3;
        if (!set.has(id)) {
          const obj2 = { type: "CHANNEL_DELETE", channel: obj3 };
          obj3 = { guild_id: guild_id2, id, parent_id: "Array" };
          const obj = guild_id(closure_2_1[8]);
          obj.dispatch(obj2);
        }
      });
    }
    if (null != guild_id.roles) {
      guild_id = tmp.guild_id;
      const _Set = Set;
      const self = this;
      const self2 = this;
      const set1 = new Set(tmp.roles);
      let obj = SnowflakeUtilsDefault;
      const keys1 = obj.keys(GuildRoleStore.getUnsafeMutableRoles(guild_id));
      const item1 = keys1.forEach((roleId) => {
        if (!set1.has(roleId)) {
          const obj2 = { type: "GUILD_ROLE_DELETE", guildId: guild_id, roleId };
          const obj = closure_2_0(closure_2_1[8]);
          obj.dispatch(obj2);
        }
      });
    }
    if (null != guild_id.emojis) {
      const guild_id3 = tmp.guild_id;
      const _Set3 = Set;
      const self5 = this;
      const self6 = this;
      set2 = new Set(tmp.emojis);
      const guildEmoji = EmojiStore.getGuildEmoji(guild_id3);
      const found = guildEmoji.filter((id) => set2.has(id.id));
      if (guildEmoji.length !== found.length) {
        let obj2 = DispatcherDefault;
        const obj5 = { type: "GUILD_EMOJIS_UPDATE", guildId: guild_id3, emojis: found };
        obj2.dispatch(obj5);
      }
    }
    if (null != guild_id.stickers) {
      const guild_id4 = tmp.guild_id;
      const _Set4 = Set;
      const self7 = this;
      const self8 = this;
      set3 = new Set(tmp.stickers);
      let stickersByGuildId = StickersStore.getStickersByGuildId(guild_id4);
      if (stickersByGuildId == null) {
        stickersByGuildId = [];
      }
      const found1 = stickersByGuildId.filter((id) => set3.has(id.id));
      if (stickersByGuildId.length !== found1.length) {
        const obj7 = { type: "GUILD_STICKERS_UPDATE", guildId: guild_id4, stickers: found1 };
        const obj4 = DispatcherDefault;
        obj4.dispatch(obj7);
      }
    }
  });
}
function handleConnectionOpen() {
  const obj = GuildsRequiringDeletedIdsSyncDefault;
  const all = obj.getAll();
  all.then((arr) => {
    let mutableBasicGuildChannelsForGuild;
    const item = arr.forEach((item) => {
      let closure_0 = item;
      const timerId = setTimeout(
        () => {
          guild = guild.getGuild(item);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          closure_2_8.fileOnly("requesting deleted guild entities (id: " + item + ", name: " + name + ")");
          const keys = Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(item));
          const v3 = closure_2_0(closure_2_1[11]).v3;
          closure_2_0(closure_2_1[11]);
          const sorted = keys.sort();
          const str = v3(sorted.join(","));
          const str1 = str.toString();
          sortedRoles = sortedRoles.getSortedRoles(item);
          const mapped = sortedRoles.map((id) => id.id);
          const v32 = closure_2_0(closure_2_1[11]).v3;
          closure_2_0(closure_2_1[11]);
          const sorted1 = mapped.sort();
          const str2 = v32(sorted1.join(","));
          const str5 = str2.toString();
          guildEmoji = guildEmoji.getGuildEmoji(item);
          const mapped1 = guildEmoji.map((id) => id.id);
          const v33 = closure_2_0(closure_2_1[11]).v3;
          closure_2_0(closure_2_1[11]);
          const sorted2 = mapped1.sort();
          const str3 = v33(sorted2.join(","));
          const str6 = str3.toString();
          stickersByGuildId = stickersByGuildId.getStickersByGuildId(item);
          let mapped2;
          if (stickersByGuildId != null) {
            mapped2 = stickersByGuildId.map((id) => id.id);
          }
          if (mapped2 == null) {
            mapped2 = [];
          }
          const v34 = closure_2_0(closure_2_1[11]).v3;
          closure_2_0(closure_2_1[11]);
          const sorted3 = mapped2.sort();
          const str4 = v34(sorted3.join(","));
          const str7 = str4.toString();
          socket = socket.getSocket();
          const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(
            item,
            str1,
            str5,
            str6,
            str7,
          );
        },
        Math.ceil(2000 * Math.random()),
      );
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
    const timerId = setTimeout(
      () => {
        guild = guild.getGuild(item);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        closure_2_8.fileOnly("requesting deleted guild entities (id: " + item + ", name: " + name + ")");
        const keys = Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(item));
        const v3 = closure_2_0(closure_2_1[11]).v3;
        closure_2_0(closure_2_1[11]);
        const sorted = keys.sort();
        const str = v3(sorted.join(","));
        const str1 = str.toString();
        sortedRoles = sortedRoles.getSortedRoles(item);
        const mapped = sortedRoles.map((id) => id.id);
        const v32 = closure_2_0(closure_2_1[11]).v3;
        closure_2_0(closure_2_1[11]);
        const sorted1 = mapped.sort();
        const str2 = v32(sorted1.join(","));
        const str5 = str2.toString();
        guildEmoji = guildEmoji.getGuildEmoji(item);
        const mapped1 = guildEmoji.map((id) => id.id);
        const v33 = closure_2_0(closure_2_1[11]).v3;
        closure_2_0(closure_2_1[11]);
        const sorted2 = mapped1.sort();
        const str3 = v33(sorted2.join(","));
        const str6 = str3.toString();
        stickersByGuildId = stickersByGuildId.getStickersByGuildId(item);
        let mapped2;
        if (stickersByGuildId != null) {
          mapped2 = stickersByGuildId.map((id) => id.id);
        }
        if (mapped2 == null) {
          mapped2 = [];
        }
        const v34 = closure_2_0(closure_2_1[11]).v3;
        closure_2_0(closure_2_1[11]);
        const sorted3 = mapped2.sort();
        const str4 = v34(sorted3.join(","));
        const str7 = str4.toString();
        socket = socket.getSocket();
        const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(item, str1, str5, str6, str7);
      },
      Math.ceil(2000 * Math.random()),
    );
  }
}
let closure_8 = new LoggerDefault("EntityVersionsManager");
const tmp2 = new LoggerDefault("EntityVersionsManager");
class EntityVersionsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { GUILD_CREATE: handleGuildCreate, DELETED_ENTITY_IDS: handleDeletedEntityIds };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
}
const prototype = EntityVersionsManager.prototype;
const entityVersionsManager = new EntityVersionsManager();
const result = size.fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default entityVersionsManager;

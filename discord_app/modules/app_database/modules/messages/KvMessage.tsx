// discord_app/modules/app_database/modules/messages/KvMessage.tsx
import Constants from "../../../../Constants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let author;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
class KvMessage {
  static fromMessage(guild_id, channelId, item10024, connectionId) {
    const tmp = _slicedToArray(KvMessage.deriveMemberUsers(guild_id, item10024), 2);
    return { id: item10024.id, channelId, message: item10024, members: tmp[0], users: tmp[1], connectionId };
  }
  static deriveMemberUsers(guild_id, author) {
    author = author.author;
    let id;
    const _Set = Set;
    if (author != null) {
      id = author.id;
    }
    const items = [id];
    const interaction = author.interaction;
    let id1;
    if (interaction != null) {
      id1 = interaction.user.id;
    }
    items[1] = id1;
    const mentions = author.mentions;
    let mapped;
    if (mentions != null) {
      mapped = mentions.map((id) => id.id);
    }
    if (mapped == null) {
      mapped = [];
    }
    HermesBuiltin.arraySpread(items, mapped, 2);
    const _Set1 = new _Set(items);
    const items1 = [];
    const items2 = [];
    for (const item10035 of _Set1) {
      if (null != item10035) {
        let user = UserStore.getUser(item10035);
        let tmp11 = guild_id;
        let getTrueMember = GuildMemberStore.getTrueMember;
        if (guild_id == null) {
          tmp11 = EMPTY_STRING_SNOWFLAKE_ID;
        }
        let trueMember = getTrueMember(tmp11, item10035);
        if (null != user) {
          let arr = items2.push(user);
        }
        if (null != trueMember) {
          let arr2 = items1.push(trueMember);
        }
      }
      continue;
    }
    const items3 = [items1, items2];
    return items3;
  }
}
const result = size.fileFinishedImporting("modules/app_database/modules/messages/KvMessage.tsx");

export { KvMessage };

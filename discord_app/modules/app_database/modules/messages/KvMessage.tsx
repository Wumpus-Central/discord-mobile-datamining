// discord_app/modules/app_database/modules/messages/KvMessage.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const prototype = function KvMessage() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromMessage"] = function fromMessage(guild_id, channelId, nextResult, connectionId) {
  const tmp = _slicedToArray(prototype.deriveMemberUsers(guild_id, nextResult), 2);
  return { id: nextResult.id, channelId, message: nextResult, members: tmp[0], users: tmp[1], connectionId };
};
prototype["deriveMemberUsers"] = function deriveMemberUsers(guild_id, author) {
  author = author.author;
  let id;
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
  HermesBuiltin.arraySpread(mapped, 2);
  const items1 = [];
  const items2 = [];
  for (const item10035 of set) {
    let tmp5 = item10035;
    if (null != item10035) {
      let user = UserStore.getUser(tmp5);
      let tmp10 = arg0;
      if (arg0 == null) {
        tmp10 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      let trueMember = GuildMemberStore.getTrueMember(tmp10, tmp5);
      if (null != user) {
        let arr = items2.push(user);
      }
      if (null != trueMember) {
        arr = items1.push(trueMember);
      }
    }
    continue;
  }
  const items3 = [items1, items2];
  return items3;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/modules/messages/KvMessage.tsx");

export const KvMessage = prototype;

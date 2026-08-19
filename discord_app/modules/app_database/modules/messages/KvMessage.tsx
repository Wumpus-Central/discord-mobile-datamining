// discord_app/modules/app_database/modules/messages/KvMessage.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { EMPTY_STRING_SNOWFLAKE_ID } from "../../../../Constants.tsx";

const prototype = function KvMessage() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromMessage"] = function fromMessage(c0, closure_1, nextResult, result) {
  const tmp = callback(prototype.deriveMemberUsers(c0, nextResult), 2);
  return { id: nextResult.id, channelId: closure_1, message: nextResult, members: tmp[0], users: tmp[1], connectionId: result };
};
prototype["deriveMemberUsers"] = function deriveMemberUsers(c0, author) {
  author = author.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  const items = [id, ];
  const interaction = author.interaction;
  let id1;
  if (interaction != null) {
    id1 = interaction.user.id;
  }
  items[1] = id1;
  const mentions = author.mentions;
  let mapped;
  if (mentions != null) {
    mapped = mentions.map((item, index) => item.id);
  }
  if (mapped == null) {
    mapped = [];
  }
  HermesBuiltin.arraySpread(mapped, 2);
  const items1 = [];
  const items2 = [];
  for (const item10035 of set) {
    if (null != item10035) {
      let user = user.getUser(item10035);
      let tmp10 = arg0;
      if (arg0 == null) {
        tmp10 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      let trueMember = trueMember.getTrueMember(tmp10, item10035);
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
const result = require("obj132").fileFinishedImporting("modules/app_database/modules/messages/KvMessage.tsx");

export const KvMessage = prototype;
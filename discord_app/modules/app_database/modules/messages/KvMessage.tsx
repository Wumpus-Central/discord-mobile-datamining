// === Module 5081: fromMessage ===

// Module 5081 (fromMessage)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "trackCommunicationDisabled" /* 1990 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;

let prototype;
prototype = function KvMessage() {
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
      let tmp6 = user;
      let tmp7 = item10035;
      let user = user.getUser(tmp5);
      let tmp10 = arg0;
      let tmp9 = trueMember;
      if (arg0 == null) {
        tmp10 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      let tmp11 = item10035;
      let trueMember = trueMember.getTrueMember(tmp10, tmp5);
      let tmp13 = user;
      if (null != user) {
        let tmp14 = user;
        let arr = items2.push(user);
      }
      let tmp16 = trueMember;
      if (null != trueMember) {
        let tmp17 = trueMember;
        arr = items1.push(trueMember);
      }
    }
    continue;
  }
  const items3 = [items1, items2];
  return items3;
};
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/KvMessage.tsx");

export const KvMessage = prototype;
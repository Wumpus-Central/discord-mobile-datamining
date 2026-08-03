// === Module 6077: reactionKey ===

// Module 6077 (reactionKey)
import initialize from "initialize";
import createdAt from "createdAt";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";

function reactionKey(arg0, arg1, item10022) {
  let id;
  let name;
  ({ name, id } = arg1);
  if (id == null) {
    id = "";
  }
  return "" + arg0 + ":" + name + ":" + id + ":" + item10022;
}
function handleReaction(userId) {
  userId = userId.userId;
  const ensureResult = prototype.ensure(userId.messageId, userId.emoji, userId.reactionType);
  if ("MESSAGE_REACTION_ADD" === userId.type) {
    user = user.getUser(userId);
    if (null != user) {
      const users2 = ensureResult.users;
      const result = users2.set(userId, user);
    }
  } else {
    const users = ensureResult.users;
    users.delete(userId);
  }
}
let closure_6 = {};
const items = [require("ReactionTypes").ReactionTypes.NORMAL, require("ReactionTypes").ReactionTypes.BURST];
let prototype;
prototype = function Reaction() {
  const obj = Object.create(new.target.prototype);
  obj.fetched = false;
  obj.users = new Map();
  return obj;
}.prototype;
prototype["ensure"] = function ensure(messageId, emoji, reactionType) {
  let id;
  let name;
  ({ name, id } = emoji);
  if (id == null) {
    id = "";
  }
  const combined = "" + messageId + ":" + name + ":" + id + ":" + reactionType;
  let tmp3 = dependencyMap[combined];
  if (tmp3 == null) {
    if (typeof prototype !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(prototype.prototype);
    obj.fetched = false;
    const _Map = Map;
    const map = new Map();
    obj.users = map;
    tmp3 = obj;
    const tmp4 = prototype;
  }
  dependencyMap[combined] = tmp3;
  return tmp3;
};
class MessageReactionsStore extends Store {
}
const prototype2 = MessageReactionsStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, initialize, mergeGuildAvatar);
};
prototype2["getKnownReactorIds"] = function getKnownReactorIds(arg0, arg1) {
  const set = new Set();
  const iter = arg1[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp3 = items;
    let tmp4 = items;
    for (const item10022 of items) {
      let tmp5 = dependencyMap;
      let tmp6 = reactionKey;
      let tmp7 = nextResult;
      let tmp8 = dependencyMap[reactionKey(0, arg0, tmp2, item10022)];
      if (null != tmp8) {
        let tmp10 = tmp8;
        let users = tmp9.users;
        let keys = users.keys();
        let tmp12 = keys;
        let tmp13 = keys;
        for (const item10037 of keys) {
          let addResult = set.add(item10037);
          continue;
        }
      }
      continue;
    }
    continue;
  }
  return set;
};
prototype2["getReactions"] = function getReactions(channelId, messageId, emoji, closure_9, VOTE) {
  const ensureResult = prototype.ensure(messageId, emoji, VOTE);
  if (!ensureResult.fetched) {
    channel = channel.getChannel(channelId);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const obj = { channelId: null, messageId: null, emoji: null, limit: null, type: null };
    obj[0] = channelId;
    obj[1] = messageId;
    obj[2] = emoji;
    obj[3] = closure_9;
    obj[4] = VOTE;
    const reactors = importAll(6079).getReactors(obj);
    ensureResult.fetched = true;
    const obj2 = importAll(6079);
  }
  return ensureResult.users;
};
MessageReactionsStore.displayName = "MessageReactionsStore";
const messageReactionsStore = new MessageReactionsStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_6 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = users.users;
    let closure_0;
    closure_0 = prototype.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      users = users.users;
      return users.set(id.id, new outer1_3(id));
    });
  }
});
let result = require("ensureGuildLoaded").fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default messageReactionsStore;
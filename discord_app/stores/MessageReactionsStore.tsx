// discord_app/stores/MessageReactionsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import checkReactionResponseAll from "../modules/reactions/ReactionActionCreators.tsx";
import closure_2 from "../modules/lurker_mode/LurkingStore.tsx";
import closure_3 from "../records/UserRecord.tsx";
import closure_4 from "ChannelStore.tsx";
import closure_5 from "UserStore.tsx";

function reactionKey(arg0, arg1, item10022) {
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
prototype["ensure"] = function ensure(arg0, arg1, arg2) {
  ({ name, id } = arg1);
  if (id == null) {
    id = "";
  }
  const combined = "" + arg0 + ":" + name + ":" + id + ":" + arg2;
  let tmp3 = dependencyMap[combined];
  if (tmp3 == null) {
    if (typeof prototype !== "function") {
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
const Store = initializeDefault.Store;
class MessageReactionsStore extends Store {
}
const prototype2 = MessageReactionsStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_2, closure_5);
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
prototype2["getReactions"] = function getReactions(channelId, messageId, emoji, closure_1_15, VOTE) {
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
    obj[3] = closure_1_15;
    obj[4] = VOTE;
    const reactors = checkReactionResponseAll.getReactors(obj);
    ensureResult.fetched = true;
    const obj2 = checkReactionResponseAll;
  }
  return ensureResult.users;
};
MessageReactionsStore.displayName = "MessageReactionsStore";
const messageReactionsStore = new MessageReactionsStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_6 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = users.users;
    closure_0 = undefined;
    closure_0 = prototype.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      users = users.users;
      return users.set(id.id, new closure_1_3(id));
    });
  }
});
let result = require("set").fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default messageReactionsStore;
// discord_app/stores/MessageReactionsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import ReactionActionCreatorsAll from "../modules/reactions/ReactionActionCreators.tsx";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import UserRecord from "../records/UserRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import UserStore from "UserStore.tsx";

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
    const user = UserStore.getUser(userId);
    if (null != user) {
      const users2 = ensureResult.users;
      const result = users2.set(userId, user);
    }
  } else {
    const users = ensureResult.users;
    users.delete(userId);
  }
}
const dependencyMap = {};
const items = [fn(7763).ReactionTypes.NORMAL, fn(7763).ReactionTypes.BURST];
const prototype = function Reaction() {
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
    if (typeof prototype === "function") {
      const obj = Object.create(prototype.prototype);
      obj.fetched = false;
      const _Map = Map;
      const map = new Map();
      obj.users = map;
      tmp3 = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  dependencyMap[combined] = tmp3;
  return tmp3;
};
const Store = initializeDefault.Store;
class MessageReactionsStore extends Store {}
const prototype2 = MessageReactionsStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ChannelStore, LurkingStore, UserStore);
};
prototype2["getKnownReactorIds"] = function getKnownReactorIds(arg0, arg1) {
  const set = new Set();
  const iter = arg1[Symbol.iterator]();
  while (iter !== undefined) {
    for (const item10022 of items) {
      let tmp8 = dependencyMap[reactionKey(0, arg0, tmp2, item10022)];
      if (null != tmp8) {
        let users = tmp9.users;
        let keys = users.keys();
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
prototype2["getReactions"] = function getReactions(channelId, messageId, emoji, limit, VOTE) {
  const ensureResult = prototype.ensure(messageId, emoji, VOTE);
  if (!ensureResult.fetched) {
    const channel = ChannelStore.getChannel(channelId);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const obj = { channelId, messageId, emoji, limit, type: VOTE };
    const reactors = ReactionActionCreatorsAll.getReactors(obj);
    ensureResult.fetched = true;
  }
  return ensureResult.users;
};
MessageReactionsStore.displayName = "MessageReactionsStore";
const messageReactionsStore = new MessageReactionsStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_6 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = undefined;
    users = prototype.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      users = users.users;
      return users.set(id.id, new UserRecord(id));
    });
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default messageReactionsStore;

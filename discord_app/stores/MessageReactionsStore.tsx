// discord_app/stores/MessageReactionsStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import MessageReactionsTypes from "../modules/messages/MessageReactionsTypes.tsx";
import ReactionActionCreatorsAll from "../modules/reactions/ReactionActionCreators.tsx";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import UserRecord from "../records/UserRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import UserStore from "UserStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_6, map, set;

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
  const type = userId.type;
  const ensureResult = Reaction.ensure(userId.messageId, userId.emoji, userId.reactionType);
  if ("MESSAGE_REACTION_ADD" === type) {
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
const metroRequire = {};
const items = [MessageReactionsTypes.ReactionTypes.NORMAL, MessageReactionsTypes.ReactionTypes.BURST];
class Reaction {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.fetched = false;
    obj.users = new Map();
    new Map();
    return obj;
  }
  static ensure(arg0, arg1, arg2) {
    let id;
    let name;
    ({ name, id } = arg1);
    if (id == null) {
      id = "";
    }
    const combined = "" + arg0 + ":" + name + ":" + id + ":" + arg2;
    let tmp3 = closure_6[combined];
    if (tmp3 == null) {
      const self = this;
      if (typeof Reaction === "function") {
        const obj = Object.create(Reaction.prototype);
        obj.fetched = false;
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        obj.users = new Map();
        tmp3 = obj;
        map = new Map();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    closure_6[combined] = tmp3;
    return tmp3;
  }
}
const Store = get_initializedDefault.Store;
class MessageReactionsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, LurkingStore, UserStore);
  }
  getKnownReactorIds(arg0, arg1) {
    set = new Set();
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      for (const item10022 of items) {
        let tmp8 = closure_6[reactionKey(0, arg0, tmp2, item10022)];
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
  }
  getReactions(channelId, messageId, emoji, limit, VOTE) {
    const ensureResult = Reaction.ensure(messageId, emoji, VOTE);
    if (!ensureResult.fetched) {
      const channel = ChannelStore.getChannel(channelId);
      let guildId = null;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      const obj = { channelId, messageId, emoji, limit, type: VOTE };
      const obj2 = ReactionActionCreatorsAll;
      const reactors = obj2.getReactors(obj);
      ensureResult.fetched = true;
    }
    return ensureResult.users;
  }
}
const prototype = MessageReactionsStore.prototype;
MessageReactionsStore.displayName = "MessageReactionsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_6 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = undefined;
    users = Reaction.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      users = users.users;
      id = id.id;
      set = users.set;
      const tmp = new UserRecord(id);
      return set(id, tmp);
    });
  },
};
const messageReactionsStore = new MessageReactionsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default messageReactionsStore;

// === Module 13550: GuildFriendshipStore ===

// Module 13550 (GuildFriendshipStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import size from "module_2" /* 2 */;

let closure_3;

function resetStates() {
  closure_3 = {};
}
const React2 = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const _false = {};
const length = 0;
const Store = get_initializedDefault.Store;
class GuildFriendshipStore extends Store {
  isFetchingFriendsForGuild(arg0) {
    let fetchState;
    if (closure_3[arg0] != null) {
      fetchState = tmp.fetchState;
    }
    if (fetchState == null) {
      fetchState = constants.NOT_FETCHED;
    }
    return fetchState === constants.FETCHING;
  }
  fetchFriendMembersIfNotFetched(id1, items) {
    let fetchState;
    if (closure_3[id1] != null) {
      fetchState = tmp.fetchState;
    }
    if (fetchState == null) {
      fetchState = constants.NOT_FETCHED;
    }
    if (fetchState === constants.NOT_FETCHED) {
      const obj = { fetchState: tmp4.FETCHING, foundMembers: 0, notFoundMembers: 0 };
      closure_3[id1] = obj;
      const obj2 = GuildActionCreatorsDefault;
      const membersById = obj2.requestMembersById(id1, items, false);
    }
  }
}
const prototype = GuildFriendshipStore.prototype;
let obj = {
  CONNECTION_OPEN: resetStates,
  LOGOUT: resetStates,
  RELATIONSHIP_ADD: resetStates,
  RELATIONSHIP_REMOVE: resetStates,
  GUILD_MEMBERS_CHUNK_BATCH: function onMemberChunk(arg0) {
    const first = arg0.chunks[0];
    const guildId = first.guildId;
    let fetchState;
    if (closure_3[guildId] != null) {
      fetchState = tmp2.fetchState;
    }
    if (fetchState == null) {
      fetchState = constants.NOT_FETCHED;
    }
    if (fetchState === constants.FETCHING) {
      closure_3[guildId].foundMembers = closure_3[guildId].foundMembers + first.members.length;
      const notFound = first.notFound;
      let num;
      const notFoundMembers = tmp13.notFoundMembers;
      if (notFound != null) {
        num = notFound.length;
      }
      if (num == null) {
        num = 0;
      }
      closure_3[guildId].notFoundMembers = notFoundMembers + num;
      if (closure_3[guildId].foundMembers + closure_3[guildId].notFoundMembers >= length) {
        closure_3[guildId].fetchState = tmp5.FETCHED;
      }
    }
  }
};
const guildFriendshipStore = new GuildFriendshipStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/relationships/GuildFriendshipStore.tsx");

export default guildFriendshipStore;
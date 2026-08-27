// === Module 13291: resetStates ===

// Module 13291 (resetStates)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5409 */;

function resetStates() {
  closure_3 = {};
}
let closure_2 = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_3 = {};
let c4 = 0;
const Store = initializeDefault.Store;
class GuildFriendshipStore extends Store {
}
const prototype = GuildFriendshipStore.prototype;
prototype["isFetchingFriendsForGuild"] = function isFetchingFriendsForGuild(arg0) {
  let fetchState;
  if (dependencyMap[arg0] != null) {
    fetchState = tmp.fetchState;
  }
  if (fetchState == null) {
    fetchState = constants.NOT_FETCHED;
  }
  return fetchState === constants.FETCHING;
};
prototype["fetchFriendMembersIfNotFetched"] = function fetchFriendMembersIfNotFetched(id1, items) {
  let fetchState;
  if (dependencyMap[id1] != null) {
    fetchState = tmp.fetchState;
  }
  if (fetchState == null) {
    fetchState = constants.NOT_FETCHED;
  }
  if (fetchState === constants.NOT_FETCHED) {
    const obj = { fetchState: null, foundMembers: 0, notFoundMembers: 0 };
    obj[0] = tmp4.FETCHING;
    dependencyMap[id1] = obj;
    const membersById = showTooManyUserGuildsAlertDefault.requestMembersById(id1, items, false);
    const obj2 = showTooManyUserGuildsAlertDefault;
  }
};
const guildFriendshipStore = new GuildFriendshipStore(dispatcherDefault, {
  CONNECTION_OPEN: resetStates,
  LOGOUT: resetStates,
  RELATIONSHIP_ADD: resetStates,
  RELATIONSHIP_REMOVE: resetStates,
  GUILD_MEMBERS_CHUNK_BATCH: function onMemberChunk(arg0) {
    const first = arg0.chunks[0];
    const guildId = first.guildId;
    let fetchState;
    if (dependencyMap[guildId] != null) {
      fetchState = tmp2.fetchState;
    }
    if (fetchState == null) {
      fetchState = constants.NOT_FETCHED;
    }
    if (fetchState === constants.FETCHING) {
      dependencyMap[guildId].foundMembers = dependencyMap[guildId].foundMembers + first.members.length;
      const notFound = first.notFound;
      let num;
      if (notFound != null) {
        num = notFound.length;
      }
      if (num == null) {
        num = 0;
      }
      dependencyMap[guildId].notFoundMembers = dependencyMap[guildId].notFoundMembers + num;
      if (dependencyMap[guildId].foundMembers + dependencyMap[guildId].notFoundMembers >= c4) {
        dependencyMap[guildId].fetchState = tmp5.FETCHED;
      }
    }
  }
});
const result = require("set").fileFinishedImporting("modules/relationships/GuildFriendshipStore.tsx");

export default guildFriendshipStore;
// discord_app/modules/relationships/GuildFriendshipStore.tsx
import { Store } from "initialize";

function resetStates() {
  let closure_3 = {};
}
let closure_2 = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_3 = {};
let c4 = 0;
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
    const membersById = importDefault(5200).requestMembersById(id1, items, false);
    const obj2 = importDefault(5200);
  }
};
const guildFriendshipStore = new GuildFriendshipStore(require("dispatcher"), {
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
const result = require("dispatcher").fileFinishedImporting("modules/relationships/GuildFriendshipStore.tsx");

export default guildFriendshipStore;
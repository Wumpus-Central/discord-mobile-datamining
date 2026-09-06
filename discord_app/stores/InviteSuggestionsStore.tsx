// discord_app/stores/InviteSuggestionsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import autocompleter_sortByMatchScoreDefault from "../modules/autocompleter/sortByMatchScore.tsx";
import InstantInviteUtils from "../utils/InstantInviteUtils.tsx";
import QuickSwitcherStore from "../modules/quickswitcher/QuickSwitcherStore.tsx";
import UserAffinitiesV2Store from "../modules/user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "ChannelStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";

require = fn;
function compareRowsByMatchScore(score, score2) {
  let num = 0;
  if (null != score.score) {
    num = 0;
    if (null != score2.score) {
      let obj = { score: score.score };
      obj = { score: score2.score };
      num = autocompleter_sortByMatchScoreDefault(obj, obj);
    }
  }
  return num;
}
function _computeRows(query) {
  set = new Set();
  if (channel != null) {
    const type = channel.type;
  }
  let tmp = null == guild;
  if (!tmp) {
    tmp = inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  if (!tmp) {
    tmp = type === constants.GUILD_VOICE;
  }
  let id = null;
  if (!tmp) {
    id = guild.id;
  }
  const mostRecentDMedUser = set1(9822).getMostRecentDMedUser(set, id);
  let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
  if (!isBlockedOrIgnoredResult) {
    isBlockedOrIgnoredResult = RelationshipStore.isBlockedOrIgnored(mostRecentDMedUser.id);
  }
  if (!isBlockedOrIgnoredResult) {
    set.add(mostRecentDMedUser.id);
  }
  const userAffinities = UserAffinitiesV2Store.getUserAffinities();
  for (const item10040 of userAffinities) {
    let addResult1 = set.add(item10040.otherUserId);
    continue;
  }
  set1 = new Set();
  if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
    const channelHistory = QuickSwitcherStore.getChannelHistory();
    const mapped = channelHistory.map((item) => channel.getChannel(item));
    const found = mapped.filter(set1(1369).isNotNullish);
    const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
    const found2 = found1.filter((item) => PermissionStore.can(constants2.SEND_MESSAGES, item));
    const substr = found2.slice(0, 3);
    const item = substr.forEach((id) => set1.add(id.id));
  }
  const obj2 = set1(9822);
  return set1(9822).generateRowsForQuery({
    query,
    omitUserIds: set,
    suggestedUserIds: set,
    maxRowsWithoutQuery: 100,
    omitGuildId: id,
    suggestedChannelIds: set1,
    inviteTargetType,
  });
}
const Constants = fn(1074);
({ ChannelTypes: closure_14, Permissions: closure_15 } = Constants);
const InviteTargetTypes = fn(7736).InviteTargetTypes;
let set = new Set();
let rows = [];
let map = new Map();
let counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
const Store = initializeDefault.Store;
class InviteSuggestionsStore extends Store {}
const prototype = InviteSuggestionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, PermissionStore, QuickSwitcherStore, RelationshipStore, UserAffinitiesV2Store);
};
prototype["getInviteSuggestionRows"] = function getInviteSuggestionRows() {
  return rows;
};
prototype["getTotalSuggestionsCount"] = function getTotalSuggestionsCount() {
  return length;
};
prototype["getInitialCounts"] = function getInitialCounts() {
  return counts;
};
prototype["getSelectedInviteMetadata"] = function getSelectedInviteMetadata(row) {
  value = map.get(row);
  const userAffinities = UserAffinitiesV2Store.getUserAffinities();
  if (null != value) {
    const obj = {
      rowNum: value.index,
      isAffinitySuggestion: row.isSuggested,
      numTotal: rows.length,
      numAffinityConnections: arr.length,
      isFiltered,
    };
    return obj;
  }
};
InviteSuggestionsStore.displayName = "InviteSuggestionsStore";
const inviteSuggestionsStore = new InviteSuggestionsStore(DispatcherDefault, {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(guild) {
    ({ omitUserIds, channel, inviteTargetType } = guild);
    guild = null;
    if (null != channel) {
      guild = guild.guild;
    }
    applicationId = guild.applicationId;
    const blockedOrIgnoredIDs = RelationshipStore.getBlockedOrIgnoredIDs();
    const obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    set = new Set(items);
    closure_4 = false;
    const tmp5 = _computeRows("");
    rows = tmp5.rows;
    map = new Map();
    const item = rows.forEach((item, index) => {
      const result = map.set(item, { index });
    });
    counts = tmp5.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    closure_4 = "" !== query;
    rows = _computeRows(query).rows;
    const sorted = rows.sort(compareRowsByMatchScore);
    map = new Map();
    const item = rows.forEach((item, index) => {
      const result = map.set(item, { index });
    });
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default inviteSuggestionsStore;

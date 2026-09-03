// discord_app/stores/InviteSuggestionsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import sortByMatchScoreDefault from "../modules/autocompleter/sortByMatchScore.tsx";
import isGuildMember from "../utils/InstantInviteUtils.tsx";
import closure_9 from "../modules/quickswitcher/QuickSwitcherStore.tsx";
import closure_10 from "../modules/user_affinities/UserAffinitiesV2Store.tsx";
import closure_11 from "ChannelStore.tsx";
import closure_12 from "PermissionStore.tsx";
import closure_13 from "RelationshipStore.tsx";
import ME from "../Constants.tsx";
import { InviteTargetTypes } from "../modules/instant_invite/Constants.tsx";
import set from "../../_runtime/00002_set.js";

require = arg1;
function compareRowsByMatchScore(score, score2) {
  let num = 0;
  if (null != score.score) {
    num = 0;
    if (null != score2.score) {
      let obj = { score: null };
      obj[0] = score.score;
      obj = { score: null };
      obj[0] = score2.score;
      num = sortByMatchScoreDefault(obj, obj);
    }
  }
  return num;
}
function _computeRows(query) {
  set = new Set();
  if (type != null) {
    type = type.type;
  }
  let tmp = null == id;
  if (!tmp) {
    tmp = closure_8 === InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  if (!tmp) {
    tmp = type === constants.GUILD_VOICE;
  }
  id = null;
  if (!tmp) {
    id = id.id;
  }
  const mostRecentDMedUser = set1(9937).getMostRecentDMedUser(set, id);
  let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
  if (!isBlockedOrIgnoredResult) {
    isBlockedOrIgnoredResult = closure_13.isBlockedOrIgnored(mostRecentDMedUser.id);
  }
  if (!isBlockedOrIgnoredResult) {
    set.add(mostRecentDMedUser.id);
  }
  const userAffinities = authStore.getUserAffinities();
  for (const item10040 of userAffinities) {
    let addResult1 = set.add(item10040.otherUserId);
    continue;
  }
  set1 = new Set();
  if (closure_8 === InviteTargetTypes.EMBEDDED_APPLICATION) {
    channelHistory = channelHistory.getChannelHistory();
    const mapped = channelHistory.map((arg0) => channel.getChannel(arg0));
    const found = mapped.filter(set1(1470).isNotNullish);
    const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
    const found2 = found1.filter((arg0) => closure_12.can(constants2.SEND_MESSAGES, arg0));
    const substr = found2.slice(0, 3);
    const item = substr.forEach((id) => set1.add(id.id));
  }
  const obj2 = set1(9937);
  return set1(9937).generateRowsForQuery({
    query,
    omitUserIds: set,
    suggestedUserIds: set,
    maxRowsWithoutQuery: 100,
    omitGuildId: id,
    suggestedChannelIds: set1,
    inviteTargetType: closure_8,
  });
}
({ ChannelTypes: closure_14, Permissions: closure_15 } = ME);
let set = new Set();
let closure_18 = [];
let map = new Map();
let closure_20 = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
const Store = initializeDefault.Store;
class InviteSuggestionsStore extends Store {}
const prototype = InviteSuggestionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_11, closure_12, closure_9, closure_13, closure_10);
};
prototype["getInviteSuggestionRows"] = function getInviteSuggestionRows() {
  return closure_18;
};
prototype["getTotalSuggestionsCount"] = function getTotalSuggestionsCount() {
  return closure_3;
};
prototype["getInitialCounts"] = function getInitialCounts() {
  return closure_20;
};
prototype["getSelectedInviteMetadata"] = function getSelectedInviteMetadata(isSuggested) {
  const value = map.get(isSuggested);
  const userAffinities = authStore.getUserAffinities();
  if (null != value) {
    const obj = {
      rowNum: null,
      isAffinitySuggestion: null,
      numTotal: null,
      numAffinityConnections: null,
      isFiltered: null,
    };
    obj[0] = value.index;
    obj[1] = isSuggested.isSuggested;
    obj[2] = length.length;
    obj[3] = arr.length;
    obj[4] = closure_4;
    return obj;
  }
};
InviteSuggestionsStore.displayName = "InviteSuggestionsStore";
const inviteSuggestionsStore = new InviteSuggestionsStore(dispatcherDefault, {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(guild) {
    ({ omitUserIds, channel, inviteTargetType } = guild);
    guild = null;
    if (null != channel) {
      guild = guild.guild;
    }
    const applicationId = guild.applicationId;
    const blockedOrIgnoredIDs = closure_13.getBlockedOrIgnoredIDs();
    let obj = isGuildMember;
    obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    set = new Set(items);
    c4 = false;
    const tmp5 = _computeRows("");
    const rows = tmp5.rows;
    map = new Map();
    const item = rows.forEach((arg0, index) => {
      const result = map.set(arg0, { index });
    });
    const counts = tmp5.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    closure_4 = "" !== query;
    const rows = _computeRows(query).rows;
    const sorted = rows.sort(compareRowsByMatchScore);
    map = new Map();
    const item = rows.forEach((arg0, index) => {
      const result = map.set(arg0, { index });
    });
  },
});
let result = set.fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default inviteSuggestionsStore;

// === Module 11502: _computeRows ===

// Module 11502 (_computeRows)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isGuildMember from "isGuildMember" /* 8920 */;
import handleConnectionOpen from "handleConnectionOpen" /* 7592 */;
import recomputeAffinities from "recomputeAffinities" /* 5407 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import ME from "ME" /* 676 */;
import { InviteTargetTypes } from "InviteSendStates" /* 4371 */;

require = fn;
function _computeRows(query) {
  set = new Set();
  if (type != null) {
    type = type.type;
  }
  let tmp = null == id;
  if (!tmp) {
    tmp = closure_7 === InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  if (!tmp) {
    tmp = type === constants.GUILD_VOICE;
  }
  id = null;
  if (!tmp) {
    id = id.id;
  }
  const mostRecentDMedUser = set1(8920).getMostRecentDMedUser(set, id);
  let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
  if (!isBlockedOrIgnoredResult) {
    isBlockedOrIgnoredResult = closure_12.isBlockedOrIgnored(mostRecentDMedUser.id);
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
  if (closure_7 === InviteTargetTypes.EMBEDDED_APPLICATION) {
    channelHistory = channelHistory.getChannelHistory();
    const mapped = channelHistory.map((item, index) => channel.getChannel(item));
    const found = mapped.filter(set1(1370).isNotNullish);
    const found1 = found.filter((item, index) => item.type === constants.GUILD_TEXT);
    const found2 = found1.filter((item, index) => closure_11.can(constants2.SEND_MESSAGES, item));
    const substr = found2.slice(0, 3);
    const item = substr.forEach((item, index) => set1.add(item.id));
  }
  const obj2 = set1(8920);
  return set1(8920).generateRowsForQuery({ query, omitUserIds: set, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: id, suggestedChannelIds: set1, inviteTargetType: closure_7 });
}
({ ChannelTypes: map1, Permissions: closure_14 } = ME);
let set = new Set();
let closure_17 = [];
let map = new Map();
let closure_19 = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
const Store = initializeDefault.Store;
class InviteSuggestionsStore extends Store {
}
const prototype = InviteSuggestionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_10, closure_11, closure_8, closure_12, closure_9);
};
prototype["getInviteSuggestionRows"] = function getInviteSuggestionRows() {
  return closure_17;
};
prototype["getTotalSuggestionsCount"] = function getTotalSuggestionsCount() {
  return closure_2;
};
prototype["getInitialCounts"] = function getInitialCounts() {
  return closure_19;
};
prototype["getSelectedInviteMetadata"] = function getSelectedInviteMetadata(row) {
  const value = map.get(row);
  const userAffinities = authStore.getUserAffinities();
  if (null != value) {
    const obj = { rowNum: null, isAffinitySuggestion: null, numTotal: null, numAffinityConnections: null, isFiltered: null };
    obj[0] = value.index;
    obj[1] = row.isSuggested;
    obj[2] = length.length;
    obj[3] = arr.length;
    obj[4] = closure_3;
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
    const blockedOrIgnoredIDs = closure_12.getBlockedOrIgnoredIDs();
    const obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    set = new Set(items);
    c3 = false;
    const tmp5 = _computeRows("");
    const rows = tmp5.rows;
    map = new Map();
    const item = rows.forEach((item, index) => {
      const result = map.set(item, { index });
    });
    const counts = tmp5.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    closure_3 = "" !== query;
    const rows = _computeRows(query).rows;
    const sorted = rows.sort((score, score2) => {
      let num = 0;
      if (null != score.score) {
        num = 0;
        if (null != score2.score) {
          num = score.score - score2.score;
        }
      }
      return num;
    });
    map = new Map();
    const item = rows.forEach((item, index) => {
      const result = map.set(item, { index });
    });
  }
});
let result = require("obj132").fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default inviteSuggestionsStore;
// discord_app/stores/InviteSuggestionsStore.tsx
import handleConnectionOpen from "handleConnectionOpen";
import recomputeAffinities from "recomputeAffinities";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import ME from "ME";
import { InviteTargetTypes } from "InviteSendStates";
import { Store } from "initialize";
import set from "ensureGuildLoaded";

let closure_14;
let map1;
const require = arg1;
function _computeRows(query) {
  const set = new Set();
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
  const mostRecentDMedUser = set1(8989).getMostRecentDMedUser(set, id);
  let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
  if (!isBlockedOrIgnoredResult) {
    isBlockedOrIgnoredResult = upsertRelationship.isBlockedOrIgnored(mostRecentDMedUser.id);
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
    const mapped = channelHistory.map((arg0) => channel.getChannel(arg0));
    const found = mapped.filter(set1(1351).isNotNullish);
    const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
    const found2 = found1.filter((arg0) => getUncachedChannelPermissions.can(constants2.SEND_MESSAGES, arg0));
    const substr = found2.slice(0, 3);
    const item = substr.forEach((id) => set1.add(id.id));
  }
  const obj2 = set1(8989);
  return set1(8989).generateRowsForQuery({ query, omitUserIds: set, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: id, suggestedChannelIds: set1, inviteTargetType: closure_7 });
}
({ ChannelTypes: map1, Permissions: closure_14 } = ME);
let set = new Set();
let closure_17 = [];
let map = new Map();
let closure_19 = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
class InviteSuggestionsStore extends Store {
}
const prototype = InviteSuggestionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, getUncachedChannelPermissions, handleConnectionOpen, upsertRelationship, recomputeAffinities);
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
prototype["getSelectedInviteMetadata"] = function getSelectedInviteMetadata(isSuggested) {
  const value = map.get(isSuggested);
  const userAffinities = authStore.getUserAffinities();
  if (null != value) {
    const obj = { rowNum: null, isAffinitySuggestion: null, numTotal: null, numAffinityConnections: null, isFiltered: null };
    obj[0] = value.index;
    obj[1] = isSuggested.isSuggested;
    obj[2] = length.length;
    obj[3] = arr.length;
    obj[4] = closure_3;
    return obj;
  }
};
InviteSuggestionsStore.displayName = "InviteSuggestionsStore";
const inviteSuggestionsStore = new InviteSuggestionsStore(require("dispatcher"), {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(guild) {
    let channel;
    let inviteTargetType;
    let omitUserIds;
    ({ omitUserIds, channel, inviteTargetType } = guild);
    guild = null;
    if (null != channel) {
      guild = guild.guild;
    }
    const applicationId = guild.applicationId;
    const blockedOrIgnoredIDs = upsertRelationship.getBlockedOrIgnoredIDs();
    let obj = require("../utils/InstantInviteUtils.tsx") /* isGuildMember */;
    obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    const set = new Set(items);
    let c3 = false;
    const tmp5 = _computeRows("");
    const rows = tmp5.rows;
    const map = new Map();
    const item = rows.forEach((arg0, index) => {
      const result = map.set(arg0, { index });
    });
    const counts = tmp5.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    let closure_3 = "" !== query;
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
    const map = new Map();
    const item = rows.forEach((arg0, index) => {
      const result = map.set(arg0, { index });
    });
  }
});
let result = set.fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default inviteSuggestionsStore;
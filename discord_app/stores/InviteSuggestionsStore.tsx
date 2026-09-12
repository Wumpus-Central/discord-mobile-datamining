// === Module 9963: InviteSuggestionsStore ===

// Module 9963 (InviteSuggestionsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5599 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9952 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9964 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7761 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5507 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;

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
function getOmitGuildId() {
  let id = null;
  if (null != user) {
    id = null;
    if (inviteTargetType !== InviteTargetTypes.EMBEDDED_APPLICATION) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      id = null;
      if (type !== constants.GUILD_VOICE) {
        id = user.id;
      }
    }
  }
  return id;
}
const Constants = fn(1074);
({ ChannelTypes: closure_16, Permissions: closure_17 } = Constants);
const InviteTargetTypes = fn(7838).InviteTargetTypes;
let set = new Set();
let rows = [];
let map = new Map();
let counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
let query = "";
const Store = initializeDefault.Store;
class InviteSuggestionsStore extends Store {
}
const prototype = InviteSuggestionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberRequesterStore, GuildMemberStore, PermissionStore, QuickSwitcherStore, RelationshipStore, UserAffinitiesV2Store);
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
    const obj = { rowNum: value.index, isAffinitySuggestion: row.isSuggested, numTotal: rows.length, numAffinityConnections: arr.length, isFiltered };
    return obj;
  }
};
InviteSuggestionsStore.displayName = "InviteSuggestionsStore";
const inviteSuggestionsStore = new InviteSuggestionsStore(DispatcherDefault, {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(arg0) {
    ({ inviteTargetType, guild: closure_1_5, channel: closure_1_6, applicationId: closure_1_7 } = arg0);
    query = "";
    const blockedOrIgnoredIDs = RelationshipStore.getBlockedOrIgnoredIDs();
    const obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    new Set(items);
    closure_4 = "" !== query;
    const tmp4 = (function _computeRows(query) {
      set = new Set();
      const tmp = closure_25();
      const mostRecentDMedUser = set1(9952).getMostRecentDMedUser(omitUserIds, tmp);
      let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
      if (!isBlockedOrIgnoredResult) {
        isBlockedOrIgnoredResult = blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
      }
      if (!isBlockedOrIgnoredResult) {
        set.add(mostRecentDMedUser.id);
      }
      userAffinities = userAffinities.getUserAffinities();
      for (const item10031 of userAffinities) {
        let addResult1 = set.add(item10031.otherUserId);
        continue;
      }
      set1 = new Set();
      if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
        channelHistory = channelHistory.getChannelHistory();
        const mapped = channelHistory.map((item) => channel.getChannel(item));
        const found = mapped.filter(set1(1369).isNotNullish);
        const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
        const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
        const substr = found2.slice(0, 3);
        const item = substr.forEach((id) => set1.add(id.id));
      }
      const obj2 = set1(9952);
      return set1(9952).generateRowsForQuery({ query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType });
    })(query);
    rows = tmp4.rows;
    if (closure_4) {
      const sorted = rows.sort(compareRowsByMatchScore);
    }
    new Map();
    const item = rows.forEach((item, index) => {
      const result = map.set(item, { index });
    });
    (function requestMembership(rows) {
      const tmp = getOmitGuildId();
      if (null != tmp) {
        const iter = rows[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          let tmp8 = nextResult.type !== id(9952).RowTypes.DM;
          if (tmp8) {
            tmp8 = tmp5.type !== id(9952).RowTypes.FRIEND;
          }
          if (!tmp8) {
            let member = GuildMemberRequesterStore.requestMember(tmp, tmp5.item.id);
          }
          continue;
        }
      }
    })(rows);
    counts = tmp4.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    closure_4 = "" !== query;
    ({ rows, counts } = (function _computeRows(query) {
      set = new Set();
      const tmp = closure_25();
      const mostRecentDMedUser = set1(9952).getMostRecentDMedUser(omitUserIds, tmp);
      let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
      if (!isBlockedOrIgnoredResult) {
        isBlockedOrIgnoredResult = blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
      }
      if (!isBlockedOrIgnoredResult) {
        set.add(mostRecentDMedUser.id);
      }
      userAffinities = userAffinities.getUserAffinities();
      for (const item10031 of userAffinities) {
        let addResult1 = set.add(item10031.otherUserId);
        continue;
      }
      set1 = new Set();
      if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
        channelHistory = channelHistory.getChannelHistory();
        const mapped = channelHistory.map((item) => channel.getChannel(item));
        const found = mapped.filter(set1(1369).isNotNullish);
        const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
        const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
        const substr = found2.slice(0, 3);
        const item = substr.forEach((id) => set1.add(id.id));
      }
      const obj2 = set1(9952);
      return set1(9952).generateRowsForQuery({ query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType });
    })(query));
    if (closure_4) {
      const sorted = rows.sort(compareRowsByMatchScore);
    }
    new Map();
    const item = rows.forEach((item, index) => {
      const result = map.set(item, { index });
    });
    (function requestMembership(rows) {
      const tmp = getOmitGuildId();
      if (null != tmp) {
        const iter = rows[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          let tmp8 = nextResult.type !== id(9952).RowTypes.DM;
          if (tmp8) {
            tmp8 = tmp5.type !== id(9952).RowTypes.FRIEND;
          }
          if (!tmp8) {
            let member = GuildMemberRequesterStore.requestMember(tmp, tmp5.item.id);
          }
          continue;
        }
      }
    })(rows);
    const tmp = (function _computeRows(query) {
      set = new Set();
      const tmp = closure_25();
      const mostRecentDMedUser = set1(9952).getMostRecentDMedUser(omitUserIds, tmp);
      let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
      if (!isBlockedOrIgnoredResult) {
        isBlockedOrIgnoredResult = blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
      }
      if (!isBlockedOrIgnoredResult) {
        set.add(mostRecentDMedUser.id);
      }
      userAffinities = userAffinities.getUserAffinities();
      for (const item10031 of userAffinities) {
        let addResult1 = set.add(item10031.otherUserId);
        continue;
      }
      set1 = new Set();
      if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
        channelHistory = channelHistory.getChannelHistory();
        const mapped = channelHistory.map((item) => channel.getChannel(item));
        const found = mapped.filter(set1(1369).isNotNullish);
        const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
        const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
        const substr = found2.slice(0, 3);
        const item = substr.forEach((id) => set1.add(id.id));
      }
      const obj2 = set1(9952);
      return set1(9952).generateRowsForQuery({ query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType });
    })(query);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    chunks = chunks.chunks;
    set = undefined;
    let id = null;
    if (null != user) {
      id = null;
      if (inviteTargetType !== InviteTargetTypes.EMBEDDED_APPLICATION) {
        let type;
        if (channel != null) {
          type = channel.type;
        }
        id = null;
        if (type !== constants.GUILD_VOICE) {
          id = user.id;
        }
      }
    }
    if (null == id) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(rows.map((item) => item.item.id));
      if (chunks.some((guildId) => {
        let someResult = guildId.guildId === id;
        if (someResult) {
          const members = guildId.members;
          someResult = members.some((user) => set.has(user.user.id));
        }
        return someResult;
      })) {
        closure_4 = "" !== query;
        ({ rows, counts } = (function _computeRows(query) {
          set = new Set();
          const tmp = closure_25();
          const mostRecentDMedUser = set1(9952).getMostRecentDMedUser(omitUserIds, tmp);
          let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
          if (!isBlockedOrIgnoredResult) {
            isBlockedOrIgnoredResult = blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
          }
          if (!isBlockedOrIgnoredResult) {
            set.add(mostRecentDMedUser.id);
          }
          userAffinities = userAffinities.getUserAffinities();
          for (const item10031 of userAffinities) {
            let addResult1 = set.add(item10031.otherUserId);
            continue;
          }
          set1 = new Set();
          if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
            channelHistory = channelHistory.getChannelHistory();
            const mapped = channelHistory.map((item) => channel.getChannel(item));
            const found = mapped.filter(set1(1369).isNotNullish);
            const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
            const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
            const substr = found2.slice(0, 3);
            const item = substr.forEach((id) => set1.add(id.id));
          }
          const obj2 = set1(9952);
          return set1(9952).generateRowsForQuery({ query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType });
        })(query));
        if (closure_4) {
          const sorted = rows.sort(compareRowsByMatchScore);
        }
        const _Map = Map;
        let tmp8 = (function _computeRows(query) {
          set = new Set();
          const tmp = closure_25();
          const mostRecentDMedUser = set1(9952).getMostRecentDMedUser(omitUserIds, tmp);
          let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
          if (!isBlockedOrIgnoredResult) {
            isBlockedOrIgnoredResult = blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
          }
          if (!isBlockedOrIgnoredResult) {
            set.add(mostRecentDMedUser.id);
          }
          userAffinities = userAffinities.getUserAffinities();
          for (const item10031 of userAffinities) {
            let addResult1 = set.add(item10031.otherUserId);
            continue;
          }
          set1 = new Set();
          if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
            channelHistory = channelHistory.getChannelHistory();
            const mapped = channelHistory.map((item) => channel.getChannel(item));
            const found = mapped.filter(set1(1369).isNotNullish);
            const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
            const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
            const substr = found2.slice(0, 3);
            const item = substr.forEach((id) => set1.add(id.id));
          }
          const obj2 = set1(9952);
          return set1(9952).generateRowsForQuery({ query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType });
        })(query);
        let item = rows.forEach((item, index) => {
          const result = map.set(item, { index });
        });
        (function requestMembership(rows) {
          const tmp = getOmitGuildId();
          if (null != tmp) {
            const iter = rows[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp5 = nextResult;
              let tmp8 = nextResult.type !== id(9952).RowTypes.DM;
              if (tmp8) {
                tmp8 = tmp5.type !== id(9952).RowTypes.FRIEND;
              }
              if (!tmp8) {
                let member = GuildMemberRequesterStore.requestMember(tmp, tmp5.item.id);
              }
              continue;
            }
          }
        })(rows);
        map = new Map();
      } else {
        return false;
      }
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default inviteSuggestionsStore;
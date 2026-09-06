// === Module 10862: useUserListData ===

// Module 10862 (useUserListData)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import GuildUtilsDefault from "GuildUtils" /* 5519 */;
import UserSearchItemsDefault from "UserSearchItems" /* 7657 */;
import UserSearchUtils from "UserSearchUtils" /* 7661 */;
import UserSearchManagerDefault from "UserSearchManager" /* 9839 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7662 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import UserRecord from "UserRecord" /* 1385 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
function isMatch(arg0, arg1, arg2) {
  closure_0 = arg1;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  const exact = obj.exact;
  closure_1 = undefined !== exact && exact;
  const contains = obj.contains;
  closure_2 = undefined !== contains && contains;
  function _loop(arr) {
    closure_0 = arr;
    if (arr.some((item) => {
      if (closure_1) {
        return item === closure_0;
      } else if (item.startsWith(closure_0)) {
        return true;
      } else {
        const joined = closure_0.join(" ");
        let startsWithResult = joined.startsWith(tmp);
        if (!startsWithResult) {
          let hasItem = closure_2;
          if (closure_2) {
            hasItem = joined.includes(tmp);
          }
          startsWithResult = hasItem;
        }
        return startsWithResult;
      }
    })) {
      const obj = { v };
      return obj;
    }
  }
  const entries = Object.entries(arg0);
  const obj2 = entries[Symbol.iterator]();
  while (obj2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let v = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    if (_loopResult) {
      obj2.return();
      return _loopResult.v;
    }
  }
  return null;
}
function parseUserSearchResults(affinitySuggestionsLimit) {
  ({ data, withFriends, excludeCurrentUser } = affinitySuggestionsLimit);
  ({ withGuildMembers, withAffinitySuggestions, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam } = affinitySuggestionsLimit);
  if (excludeCurrentUser === undefined) {
    excludeCurrentUser = false;
  }
  let num = affinitySuggestionsLimit.affinitySuggestionsLimit;
  if (num === undefined) {
    num = 5;
  }
  let flag = affinitySuggestionsLimit.withAlphabeticalSections;
  if (flag === undefined) {
    flag = true;
  }
  let id;
  ({ AffinitySuggestions, FriendRequests, FriendRequestsIncoming, FriendRequestsOutgoing, FriendRequestsSpam, FriendSuggestions, Friends, GuildMembers } = closure_16);
  let items = data[AffinitySuggestions];
  if (undefined === items) {
    items = [];
  }
  let items1 = data[FriendRequests];
  if (undefined === items1) {
    items1 = [];
  }
  let items2 = data[FriendRequestsIncoming];
  if (undefined === items2) {
    items2 = [];
  }
  let items3 = data[FriendRequestsOutgoing];
  if (undefined === items3) {
    items3 = [];
  }
  let items4 = data[FriendRequestsSpam];
  if (undefined === items4) {
    items4 = [];
  }
  let items5 = data[FriendSuggestions];
  if (undefined === items5) {
    items5 = [];
  }
  let items6 = data[Friends];
  if (undefined === items6) {
    items6 = [];
  }
  let items7 = data[GuildMembers];
  if (undefined === items7) {
    items7 = [];
  }
  const items8 = [AffinitySuggestions, FriendRequests, FriendRequestsIncoming, FriendRequestsOutgoing, FriendRequestsSpam, FriendSuggestions, Friends, GuildMembers];
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let found = items7;
  if (excludeCurrentUser) {
    found = items7.filter((user) => user.user.id !== id);
  }
  if (withFriends) {
    const mapped = _modDef12(tmp).map((items, title) => ({ title, items }));
    const arr12 = _modDef12(tmp);
    items = mapped.sortBy((title) => title.title).value();
    const iter = mapped.sortBy((title) => title.title);
  } else {
    items = [];
  }
  let obj = { title: null, items: items.flatMap((items) => items.items) };
  let items9 = [obj];
  obj = { title: null, items: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HbJ7eD);
  if (withAffinitySuggestions) {
    let obj3 = _modDef12(items);
    const sortByResult = obj3.sortBy((affinity) => -affinity.affinity);
    let valueResult = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num).value();
    const iter2 = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num);
  } else {
    valueResult = [];
  }
  obj.items = valueResult;
  const items10 = [obj, , , , , , , ];
  const obj1 = { title: null, items: null };
  const intl2 = tmp6(1114).intl;
  obj1.title = intl2.formatToPlainString(util.t.zsVtft, { pendingRequestNumber: items1.length });
  if (!withFriendRequests) {
    items1 = [];
  }
  obj1.items = items1;
  items10[1] = obj1;
  if (!withFriendRequestsIncoming) {
    items2 = [];
  }
  items10[2] = { title: null, items: items2 };
  if (!withFriendRequestsOutgoing) {
    items3 = [];
  }
  items10[3] = { title: null, items: items3 };
  if (!withFriendRequestsSpam) {
    items4 = [];
  }
  items10[4] = { title: null, items: items4 };
  obj3 = { title: null, items: null };
  const intl3 = tmp6(1114).intl;
  obj3.title = intl3.formatToPlainString(util.t["DYMZ/p"], { count: items5.length });
  if (!withFriendSuggestions) {
    items5 = [];
  }
  obj3.items = items5;
  items10[5] = obj3;
  const obj5 = { title: null, items: null };
  const intl4 = tmp6(1114).intl;
  obj5.title = intl4.string(util.t.TdEu5X);
  if (!withFriends) {
    items6 = [];
  }
  obj5.items = items6;
  items10[6] = obj5;
  const obj6 = { title: null, items: null };
  const intl5 = tmp6(1114).intl;
  obj6.title = intl5.string(util.t.y29JXs);
  if (!withGuildMembers) {
    found = [];
  }
  obj6.items = found;
  items10[7] = obj6;
  if (flag) {
    items9 = items;
  }
  HermesBuiltin.arraySpread(items9, 8);
  return items10;
}
const RelationshipTypes = fn(1074).RelationshipTypes;
let items = [, , , ];
({ FRIEND: arr[0], SUGGESTION: arr[1], PENDING_INCOMING: arr[2], PENDING_OUTGOING: arr[3] } = RelationshipTypes);
const set = new Set(items);
let closure_16 = { AffinitySuggestions: "AFFINITY_SUGGESTIONS", Friends: "FRIENDS", FriendRequests: "FRIEND_REQUESTS", FriendRequestsIncoming: "FRIEND_REQUESTS_INCOMING", FriendRequestsOutgoing: "FRIEND_REQUESTS_OUTGOING", FriendRequestsSpam: "FRIEND_REQUESTS_SPAM", FriendSuggestions: "FRIEND_SUGGESTIONS", GuildMembers: "GUILD_MEMBERS" };
class UserSearch {
  constructor(arg0) {
    closure_0 = global;
    flag = fn;
    if (fn === undefined) {
      flag = false;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.currentQuery = "";
    obj.affinities = {};
    obj.userSearchContext = null;
    secondaryIndexMap = new closure_0(closure_2[10]).SecondaryIndexMap((arg0) => {
      ({ names, type } = arg0);
      const items = [];
      if (constants.PENDING_INCOMING === type) {
        items.push(closure_1_16.FriendRequests);
        const push = items.push;
        if (spam.isSpam(tmp3.id)) {
          push(tmp16.FriendRequestsSpam);
        } else {
          push(tmp16.FriendRequestsIncoming);
        }
      } else if (tmp4.PENDING_OUTGOING === type) {
        items.push(closure_1_16.FriendRequests);
        items.push(closure_1_16.FriendRequestsOutgoing);
      } else if (tmp4.SUGGESTION === type) {
        items.push(closure_1_16.FriendSuggestions);
      } else if (tmp4.FRIEND === type) {
        if (tmp2 > 0) {
          items.push(closure_1_16.AffinitySuggestions);
        }
        items.push(closure_1_16.Friends);
        const keys = Object.keys();
        if (keys !== undefined) {
          if (keys[tmp] !== undefined) {
            items.push(names[tmp21][0].charAt(0).toLocaleUpperCase());
            const charAtResult = names[tmp21][0].charAt(0);
          }
        }
      }
      return items;
    }, (names) => {
      names = names.names;
      const keys = Object.keys();
      if (keys !== undefined) {
        if (keys[tmp] !== undefined) {
          return names[tmp3][0];
        }
      }
      return "";
    });
    obj.indexMap = secondaryIndexMap;
    obj.filteredFriends = null;
    obj.filteredGuildMembers = null;
    obj.withGameFriends = false;
    obj.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const result = obj.initializeUsersFromStores();
    };
    obj.handleRelationship = function handleRelationship(relationship) {
      if (obj.updateUser(relationship.relationship.id)) {
        const onUpdate = obj.onUpdate;
        if (onUpdate != null) {
          onUpdate();
        }
      }
    };
    obj.handleFriendSuggestionCreate = function handleFriendSuggestionCreate(suggestion) {
      if (obj.updateUser(suggestion.suggestion.suggested_user.id)) {
        const onUpdate = obj.onUpdate;
        if (onUpdate != null) {
          onUpdate();
        }
      }
    };
    obj.handleFriendSuggestionDelete = function handleFriendSuggestionDelete(suggestedUserId) {
      if (obj.updateUser(suggestedUserId.suggestedUserId)) {
        const onUpdate = obj.onUpdate;
        if (onUpdate != null) {
          onUpdate();
        }
      }
    };
    obj.handleGameRelationshipAdd = function handleGameRelationshipAdd(arg0) {
      if (obj.withGameFriends) {
        if (obj.updateUser(tmp.id)) {
          const onUpdate = obj.onUpdate;
          if (onUpdate != null) {
            onUpdate();
          }
        }
      } else {
        return false;
      }
    };
    obj.handleGameRelationshipRemove = function handleGameRelationshipRemove(arg0) {
      if (obj.withGameFriends) {
        if (obj.updateUser(tmp)) {
          const onUpdate = obj.onUpdate;
          if (onUpdate != null) {
            onUpdate();
          }
        }
      } else {
        return false;
      }
    };
    obj.handleGuildMember = function handleGuildMember(user) {
      if (obj.updateUser(user.user.id)) {
        const onUpdate = obj.onUpdate;
        if (onUpdate != null) {
          onUpdate();
        }
      }
    };
    obj.handleGuildMembersChunkBatch = function handleGuildMembersChunkBatch(arg0) {
      let flag = false;
      for (const item10007 of tmp) {
        let members = item10007.members;
        for (const item10013 of members) {
          let updateUserResult = obj.updateUser(item10013.user.id);
          if (!updateUserResult) {
            updateUserResult = flag;
          }
          flag = updateUserResult;
          continue;
        }
        continue;
      }
      if (flag) {
        const onUpdate = obj.onUpdate;
        if (onUpdate != null) {
          onUpdate();
        }
      }
    };
    obj.handleUserAffinitiesUpdate = function handleUserAffinitiesUpdate(arg0) {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (!UserSearchItemsDefault.shouldUseCache) {
        const userAffinities = UserAffinitiesV2Store.getUserAffinities();
        const item = userAffinities.forEach((otherUserId) => {
          otherUserId = otherUserId.otherUserId;
          affinities.affinities[otherUserId] = otherUserId.communicationProbability;
          if (otherUserId.communicationRank <= 5) {
            affinities.updateUser(otherUserId);
          }
        });
        if (!flag) {
          const onUpdate = obj.onUpdate;
          if (onUpdate != null) {
            onUpdate();
          }
        }
      }
    };
    obj.withGameFriends = flag;
    if (closure_1(closure_2[11]).shouldUseCache) {
      result = obj.initializeUsersFromCache();
      nextPromise = result.then(() => {
        let tmp;
        if (obj != null) {
          tmp = obj();
        }
        return tmp;
      });
    } else {
      result1 = obj.initializeUsersFromStores();
    }
    return obj;
  }
}
const prototype = UserSearch.prototype;
prototype["subscribe"] = function subscribe(onUpdate) {
  const self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  self.onUpdate = onUpdate;
  let userSearchContext = null;
  if (flag) {
    userSearchContext = UserSearchManagerDefault.getUserSearchContext((results) => {
      results = results.results;
      let items;
      if (items.currentQuery === results.query) {
        items = [];
        if (results.reduce((acc, id) => {
          if (UserSearchItemsDefault.shouldUseCache) {
            return false;
          } else if (set.has(RelationshipStore.getRelationshipType(id.id))) {
            return acc;
          } else {
            if (self.withGameFriends) {
              if (GameRelationshipStore.getGameFriendsForUser(id.id).length > 0) {
                return acc;
              }
            }
            value = self.getItem(id.id);
            let flag = acc;
            if (null != value) {
              items.push(value);
              flag = true;
            }
            return flag;
          }
        }, false)) {
          tmp.filteredGuildMembers = items;
          const onUpdate = tmp.onUpdate;
          if (onUpdate != null) {
            onUpdate();
          }
        }
      }
    }, 20);
  }
  self.userSearchContext = userSearchContext;
  const subscription = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
  const subscription1 = DispatcherDefault.subscribe("RELATIONSHIP_ADD", self.handleRelationship);
  const subscription2 = DispatcherDefault.subscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
  const subscription3 = DispatcherDefault.subscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
  const subscription4 = DispatcherDefault.subscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
  const subscription5 = DispatcherDefault.subscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
  const subscription6 = DispatcherDefault.subscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
  const subscription7 = DispatcherDefault.subscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
  const subscription8 = DispatcherDefault.subscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
  const subscription9 = DispatcherDefault.subscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
  const subscription10 = DispatcherDefault.subscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
  const subscription11 = DispatcherDefault.subscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
  UserAffinitiesV2Store.addChangeListener(self.handleUserAffinitiesUpdate);
};
prototype["unsubscribe"] = function unsubscribe() {
  const self = this;
  this.onUpdate = undefined;
  const userSearchContext = this.userSearchContext;
  if (userSearchContext != null) {
    userSearchContext.destroy();
  }
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
  DispatcherDefault.unsubscribe("RELATIONSHIP_ADD", self.handleRelationship);
  DispatcherDefault.unsubscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
  DispatcherDefault.unsubscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
  DispatcherDefault.unsubscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
  DispatcherDefault.unsubscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
  DispatcherDefault.unsubscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
  DispatcherDefault.unsubscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
  DispatcherDefault.unsubscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
  DispatcherDefault.unsubscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
  DispatcherDefault.unsubscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
  DispatcherDefault.unsubscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
  UserAffinitiesV2Store.removeChangeListener(self.handleUserAffinitiesUpdate);
};
prototype["fetch"] = function fetch(toLocaleLowerCase, arg1) {
  const self = this;
  let obj = UserSearchUtils;
  const cleanStringResult = obj.cleanString(toLocaleLowerCase);
  if ("" === cleanStringResult) {
    const userSearchContext2 = self.userSearchContext;
    if (userSearchContext2 != null) {
      userSearchContext2.clearQuery();
    }
  } else {
    if (arg1) {
      const members = GuildUtilsDefault.requestMembers(null, cleanStringResult);
    }
    const userSearchContext = self.userSearchContext;
    if (userSearchContext != null) {
      obj = { query: cleanStringResult, boosters: self.affinities, boosterFallback: 0.002592 };
      userSearchContext.setQuery(obj);
    }
  }
};
prototype["filter"] = function filter(toLocaleLowerCase) {
  const self = this;
  _require = toLocaleLowerCase;
  let obj = require("UserSearchUtils");
  const cleanStringResult = obj.cleanString(toLocaleLowerCase);
  _require = cleanStringResult;
  if (this.currentQuery === cleanStringResult) {
    if ("" === self.currentQuery) {
      obj = {};
      const indexMap2 = self.indexMap;
      let merged = Object.assign(indexMap2.indexes());
      const Friends = closure_16.Friends;
      delete tmp[tmp2];
      return obj;
    } else {
      obj = {};
      const obj4 = self(12);
      obj[closure_16.Friends] = obj4.sortBy(self(12).uniqBy(self.filteredFriends, (user) => user.user.id), (names) => {
        let num = 0;
        if (null != isMatch(names.names, closure_0, { exact: true })) {
          num = -1000;
        }
        return num;
      }, (affinity) => -affinity.affinity);
      const obj5 = self(12);
      const obj6 = self(12);
      obj[closure_16.GuildMembers] = obj6.sortBy(self(12).uniqBy(self.filteredGuildMembers, (user) => user.user.id), (names) => {
        let num = 0;
        if (null != isMatch(names.names, closure_0, { exact: true })) {
          num = -1000;
        }
        return num;
      }, (affinity) => -affinity.affinity);
      return obj;
    }
  } else {
    if ("" === cleanStringResult) {
      self.filteredFriends = null;
      self.filteredGuildMembers = null;
    } else {
      self.filteredFriends = [];
      const indexMap = self.indexMap;
      const values = indexMap.values(closure_16.Friends);
      const item = values.forEach((names) => {
        const tmp = isMatch(names.names, closure_0, { contains: true });
        if (null != tmp) {
          const filteredFriends = self.filteredFriends;
          if (filteredFriends != null) {
            const obj = {};
            const merged = Object.assign(names);
            obj.firstMatch = tmp;
            filteredFriends.push(obj);
          }
        }
      });
    }
    self.currentQuery = cleanStringResult;
  }
};
prototype["initializeUsersFromStores"] = function initializeUsersFromStores() {
  const self = this;
  const mutableRelationships = RelationshipStore.getMutableRelationships();
  const keys = mutableRelationships.keys();
  for (const item10010 of keys) {
    let updateUserResult = self.updateUser(item10010);
    continue;
  }
  if (self.withGameFriends) {
    const gameRelationships = GameRelationshipStore.getGameRelationships();
    const values = gameRelationships.values();
    const item = values.forEach((id) => {
      self.updateUser(id.id);
    });
  }
  const suggestions = FriendSuggestionStore.getSuggestions();
  for (const item10030 of suggestions) {
    let updateUserResult1 = self.updateUser(item10030.user.id);
    continue;
  }
  const result = self.handleUserAffinitiesUpdate(true);
};
prototype["initializeUsersFromCache"] = function initializeUsersFromCache() {
  const self = this;
  const all = UserSearchItemsDefault.getAll();
  return all.then((result) => {
    while (tmp !== undefined) {
      let updateUserCachedResult = self.updateUserCached(tmp2);
      continue;
    }
  });
};
prototype["updateUser"] = function updateUser(id) {
  if (UserSearchItemsDefault.shouldUseCache) {
    return false;
  } else {
    const self = this;
    if (!this.withGameFriends) {
      if (!set.has(obj.getRelationshipType(id))) {
        const indexMap = self.indexMap;
        return indexMap.delete(id);
      }
      obj = UserSearchUtils;
    }
    value = self.getItem(id);
    if (null == value) {
      const indexMap3 = self.indexMap;
      let deleteResult = indexMap3.delete(id);
    } else {
      const indexMap2 = self.indexMap;
      deleteResult = indexMap2.set(id, value);
    }
    return deleteResult;
  }
};
prototype["getItem"] = function getItem(id) {
  const user = UserStore.getUser(id);
  if (null == user) {
    return null;
  } else {
    const self = this;
    names = UserSearchUtils.getNames(user);
    ({ nick, names } = names);
    let obj = { user, names, affinity: null, firstMatch: null };
    let num = this.affinities[user.id];
    if (num == null) {
      num = 0;
    }
    obj.affinity = num;
    if ("" !== self.currentQuery) {
      nick = isMatch(names, self.currentQuery, { contains: true });
    }
    obj.firstMatch = nick;
    const relationshipType = UserSearchUtils.getRelationshipType(user.id);
    if (relationshipType !== RelationshipTypes.FRIEND) {
      const gameFriendsForUser = GameRelationshipStore.getGameFriendsForUser(id);
      if (gameFriendsForUser.length > 0) {
        obj = {};
        const merged = Object.assign(obj);
        obj.type = gameFriendsForUser[0].type;
        return obj;
      }
    }
    const obj1 = {};
    const merged1 = Object.assign(obj);
    obj1.type = relationshipType;
    return obj1;
  }
};
prototype["updateUserCached"] = function updateUserCached(type) {
  const self = this;
  if (set.has(type.type)) {
    const itemCached = self.getItemCached(type);
    if (null == itemCached) {
      const indexMap3 = self.indexMap;
      let deleteResult = indexMap3.delete(type.id);
    } else {
      const indexMap2 = self.indexMap;
      deleteResult = indexMap2.set(type.id, itemCached);
    }
    return deleteResult;
  } else {
    const indexMap = self.indexMap;
    return indexMap.delete(type.id);
  }
};
prototype["getItemCached"] = function getItemCached(type) {
  let names = type;
  if (null == type) {
    return null;
  } else {
    let self = this;
    const obj = { type: names.type, user: null, names: null, affinity: null, firstMatch: null };
    const tmp4 = new UserRecord(names.user);
    obj.user = tmp4;
    ({ names: obj.names, affinity: obj.affinity } = names);
    if ("" !== this.currentQuery) {
      names = names.names;
      self = self.currentQuery;
      let nick = isMatch(names, self);
    } else {
      nick = names.nick;
    }
    obj.firstMatch = nick;
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx");

export default function useUserListData(query) {
  query = query.query;
  const withGuildMembers = query.withGuildMembers;
  const withAffinitySuggestions = query.withAffinitySuggestions;
  const withFriends = query.withFriends;
  const withGameFriends = query.withGameFriends;
  const withFriendSuggestions = query.withFriendSuggestions;
  const withFriendRequests = query.withFriendRequests;
  const withFriendRequestsIncoming = query.withFriendRequestsIncoming;
  const withFriendRequestsOutgoing = query.withFriendRequestsOutgoing;
  const withFriendRequestsSpam = query.withFriendRequestsSpam;
  let flag = query.excludeCurrentUser;
  if (flag === undefined) {
    flag = false;
  }
  let num = query.affinitySuggestionsLimit;
  if (num === undefined) {
    num = 5;
  }
  let flag2 = query.withAlphabeticalSections;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const tmp = withGameFriends(withFriendSuggestions.useState(0), 2);
  const first = tmp[0];
  closure_14 = tmp3;
  let items = [tmp[1], withGameFriends];
  const memo = withFriendSuggestions.useMemo(() => new UserSearch(() => closure_1_14(Date.now()), withGameFriends), items);
  const items1 = [first, memo, query];
  const first1 = withGameFriends(withFriendSuggestions.useMemo(() => {
    const items = [memo.filter(query), first];
    return items;
  }, items1), 1)[0];
  const items2 = [memo, withGuildMembers];
  const effect = withFriendSuggestions.useEffect(() => {
    closure_0 = withGuildMembers(withAffinitySuggestions[16]).debounce(() => closure_1_14(Date.now()), 0);
    const subscription = memo.subscribe(() => {
      closure_0();
    }, withGuildMembers);
    return () => memo.unsubscribe();
  }, items2);
  const items3 = [memo, query, withGuildMembers];
  const effect1 = withFriendSuggestions.useEffect(() => {
    const response = memo.fetch(query, withGuildMembers);
  }, items3);
  const effect2 = withFriendSuggestions.useEffect(() => {
    const userAffinitiesV2 = query(withAffinitySuggestions[18]).fetchUserAffinitiesV2();
  }, []);
  const items4 = [first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, flag, num, flag2];
  return withFriendSuggestions.useMemo(() => parseUserSearchResults({ data: first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser: flag, affinitySuggestionsLimit: num, withAlphabeticalSections: flag2 }), items4);
};
export { UserSearch };
export { parseUserSearchResults };
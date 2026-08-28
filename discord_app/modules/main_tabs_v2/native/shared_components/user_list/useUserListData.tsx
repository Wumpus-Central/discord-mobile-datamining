// === Module 10572: _toPropertyKey ===

// Module 10572 (_toPropertyKey)
import applyDefault from "apply" /* 12 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getGuildNameSuggestionDefault from "getGuildNameSuggestion" /* 5421 */;
import getAllDefault from "getAll" /* 7349 */;
import cleanString from "cleanString" /* 7353 */;
import getTransformedUserDefault from "getTransformedUser" /* 9866 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "initialize" /* 7354 */;
import closure_7 from "recountRelationshipTypes" /* 7350 */;
import closure_8 from "recomputeAffinities" /* 7351 */;
import closure_9 from "createdAt" /* 1931 */;
import closure_10 from "markAllUserIdListsStale" /* 4099 */;
import closure_11 from "mergeGuildAvatar" /* 1923 */;
import { RelationshipTypes } from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
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
    if (arr.some((str) => {
      if (closure_1_1) {
        return str === arr;
      } else if (str.startsWith(arr)) {
        return true;
      } else {
        const joined = arr.join(" ");
        let startsWithResult = joined.startsWith(tmp);
        if (!startsWithResult) {
          let hasItem = closure_1_2;
          if (closure_1_2) {
            hasItem = joined.includes(tmp);
          }
          startsWithResult = hasItem;
        }
        return startsWithResult;
      }
    })) {
      const obj = { v: null };
      obj[0] = closure_3;
      return obj;
    }
  }
  const entries = Object.entries(arg0);
  const obj2 = entries[Symbol.iterator]();
  while (obj2 !== undefined) {
    let tmp4 = callback2;
    let tmp5 = callback2(tmp3, 2);
    closure_3 = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    let tmp7 = _loopResult;
    if (_loopResult) {
      let tmp8 = obj2;
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
  const currentUser = authStore2.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let found = items7;
  if (excludeCurrentUser) {
    found = items7.filter((user) => user.user.id !== id);
  }
  if (withFriends) {
    const mapped = applyDefault(tmp).map((items, title) => ({ title, items }));
    const arr12 = applyDefault(tmp);
    items = mapped.sortBy((title) => title.title).value();
    const iter = mapped.sortBy((title) => title.title);
  } else {
    items = [];
  }
  let obj = { title: null, items: items.flatMap((items) => items.items) };
  let items9 = [obj];
  obj = { title: null, items: null };
  const intl = id(1236).intl;
  obj[0] = intl.string(id(1236).t.HbJ7eD);
  if (withAffinitySuggestions) {
    let obj3 = applyDefault(items);
    const sortByResult = obj3.sortBy((affinity) => -affinity.affinity);
    let valueResult = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num).value();
    const iter2 = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num);
  } else {
    valueResult = [];
  }
  obj[1] = valueResult;
  const items10 = [obj, , , , , , , ];
  obj1 = { title: null, items: null };
  const intl2 = tmp6(1236).intl;
  obj1[0] = intl2.formatToPlainString(id(1236).t.zsVtft, { pendingRequestNumber: items1.length });
  if (!withFriendRequests) {
    items1 = [];
  }
  obj1[1] = items1;
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
  const intl3 = tmp6(1236).intl;
  obj3[0] = intl3.formatToPlainString(id(1236).t["DYMZ/p"], { count: items5.length });
  if (!withFriendSuggestions) {
    items5 = [];
  }
  obj3[1] = items5;
  items10[5] = obj3;
  const obj5 = { title: null, items: null };
  const intl4 = tmp6(1236).intl;
  obj5[0] = intl4.string(id(1236).t.TdEu5X);
  if (!withFriends) {
    items6 = [];
  }
  obj5[1] = items6;
  items10[6] = obj5;
  const obj6 = { title: null, items: null };
  const intl5 = tmp6(1236).intl;
  obj6[0] = intl5.string(id(1236).t.y29JXs);
  if (!withGuildMembers) {
    found = [];
  }
  obj6[1] = found;
  items10[7] = obj6;
  if (flag) {
    items9 = items;
  }
  HermesBuiltin.arraySpread(items9, 8);
  return items10;
}
let items = [, , , ];
({ FRIEND: arr[0], SUGGESTION: arr[1], PENDING_INCOMING: arr[2], PENDING_OUTGOING: arr[3] } = RelationshipTypes);
let set = new Set(items);
let closure_16 = { AffinitySuggestions: "AFFINITY_SUGGESTIONS", Friends: "FRIENDS", FriendRequests: "FRIEND_REQUESTS", FriendRequestsIncoming: "FRIEND_REQUESTS_INCOMING", FriendRequestsOutgoing: "FRIEND_REQUESTS_OUTGOING", FriendRequestsSpam: "FRIEND_REQUESTS_SPAM", FriendSuggestions: "FRIEND_SUGGESTIONS", GuildMembers: "GUILD_MEMBERS" };
class UserSearch {
  constructor(arg0) {
    closure_0 = global;
    flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.currentQuery = "";
    obj.affinities = {};
    obj.userSearchContext = null;
    secondaryIndexMap = new require("version").SecondaryIndexMap((arg0) => {
      ({ names, type } = arg0);
      const items = [];
      if (constants.PENDING_INCOMING === type) {
        items.push(closure_16.FriendRequests);
        const push = items.push;
        if (spam.isSpam(tmp3.id)) {
          push(tmp16.FriendRequestsSpam);
        } else {
          push(tmp16.FriendRequestsIncoming);
        }
      } else if (tmp4.PENDING_OUTGOING === type) {
        items.push(closure_16.FriendRequests);
        items.push(closure_16.FriendRequestsOutgoing);
      } else if (tmp4.SUGGESTION === type) {
        items.push(closure_16.FriendSuggestions);
      } else if (tmp4.FRIEND === type) {
        if (tmp2 > 0) {
          items.push(closure_16.AffinitySuggestions);
        }
        items.push(closure_16.Friends);
        const keys = Object.keys();
        if (keys !== undefined) {
          if (keys[tmp] !== undefined) {
            items.push(names[tmp21][0].charAt(0).toLocaleUpperCase());
            const charAtResult = names[tmp21][0].charAt(0);
            const str = names[tmp21][0];
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
        let tmp2 = members;
        let tmp3 = members;
        for (const item10013 of members) {
          let tmp4 = obj;
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
      if (!closure_1_1(closure_1_2[11]).shouldUseCache) {
        const userAffinities = closure_1_8.getUserAffinities();
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
    if (require("getAll").shouldUseCache) {
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
  let self = this;
  self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  self.onUpdate = onUpdate;
  let userSearchContext = null;
  if (flag) {
    userSearchContext = getTransformedUserDefault.getUserSearchContext((results) => {
      results = results.results;
      let items;
      if (items.currentQuery === results.query) {
        items = [];
        if (results.reduce((arg0, id) => {
          if (closure_2_1(closure_2_2[11]).shouldUseCache) {
            return false;
          } else if (closure_2_15.has(closure_2_10.getRelationshipType(id.id))) {
            return arg0;
          } else {
            if (items.withGameFriends) {
              if (closure_2_7.getGameFriendsForUser(id.id).length > 0) {
                return arg0;
              }
            }
            const value = items.getItem(id.id);
            let flag = arg0;
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
    const obj = getTransformedUserDefault;
  }
  self.userSearchContext = userSearchContext;
  const subscription = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
  const obj2 = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("RELATIONSHIP_ADD", self.handleRelationship);
  const obj3 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
  const obj4 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
  const obj5 = dispatcherDefault;
  const subscription4 = dispatcherDefault.subscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
  const obj6 = dispatcherDefault;
  const subscription5 = dispatcherDefault.subscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
  const obj7 = dispatcherDefault;
  const subscription6 = dispatcherDefault.subscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
  const obj8 = dispatcherDefault;
  const subscription7 = dispatcherDefault.subscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
  const obj9 = dispatcherDefault;
  const subscription8 = dispatcherDefault.subscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
  const obj10 = dispatcherDefault;
  const subscription9 = dispatcherDefault.subscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
  const obj11 = dispatcherDefault;
  const subscription10 = dispatcherDefault.subscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
  const obj12 = dispatcherDefault;
  const subscription11 = dispatcherDefault.subscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
  closure_8.addChangeListener(self.handleUserAffinitiesUpdate);
};
prototype["unsubscribe"] = function unsubscribe() {
  const self = this;
  this.onUpdate = undefined;
  const userSearchContext = this.userSearchContext;
  if (userSearchContext != null) {
    userSearchContext.destroy();
  }
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("RELATIONSHIP_ADD", self.handleRelationship);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
  const obj4 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
  const obj5 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
  const obj6 = dispatcherDefault;
  dispatcherDefault.unsubscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
  const obj7 = dispatcherDefault;
  dispatcherDefault.unsubscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
  const obj8 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
  const obj9 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
  const obj10 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
  const obj11 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
  closure_8.removeChangeListener(self.handleUserAffinitiesUpdate);
};
prototype["fetch"] = function fetch(toLocaleLowerCase) {
  const self = this;
  let obj = cleanString;
  const cleanStringResult = obj.cleanString(toLocaleLowerCase);
  if ("" === cleanStringResult) {
    const userSearchContext2 = self.userSearchContext;
    if (userSearchContext2 != null) {
      userSearchContext2.clearQuery();
    }
  } else {
    if (arg1) {
      const members = getGuildNameSuggestionDefault.requestMembers(null, cleanStringResult);
      const obj2 = getGuildNameSuggestionDefault;
    }
    const userSearchContext = self.userSearchContext;
    if (userSearchContext != null) {
      obj = { query: null, boosters: null, boosterFallback: 0.002592 };
      obj[0] = cleanStringResult;
      obj[1] = self.affinities;
      userSearchContext.setQuery(obj);
    }
  }
};
prototype["filter"] = function filter(toLocaleLowerCase) {
  let self = this;
  self = this;
  let _require = toLocaleLowerCase;
  let obj = _require(7353);
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
        if (null != closure_1_14(names.names, closure_0, { exact: true })) {
          num = -1000;
        }
        return num;
      }, (affinity) => -affinity.affinity);
      const obj5 = self(12);
      const obj6 = self(12);
      obj[closure_16.GuildMembers] = obj6.sortBy(self(12).uniqBy(self.filteredGuildMembers, (user) => user.user.id), (names) => {
        let num = 0;
        if (null != closure_1_14(names.names, closure_0, { exact: true })) {
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
        const tmp = closure_1_14(names.names, closure_0, { contains: true });
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
  let self = this;
  self = this;
  mutableRelationships = mutableRelationships.getMutableRelationships();
  const keys = mutableRelationships.keys();
  for (const item10010 of keys) {
    let updateUserResult = self.updateUser(item10010);
    continue;
  }
  if (self.withGameFriends) {
    const gameRelationships = authStore.getGameRelationships();
    const values = gameRelationships.values();
    const item = values.forEach((id) => {
      self.updateUser(id.id);
    });
  }
  suggestions = suggestions.getSuggestions();
  for (const item10030 of suggestions) {
    let updateUserResult1 = self.updateUser(item10030.user.id);
    continue;
  }
  const result = self.handleUserAffinitiesUpdate(true);
};
prototype["initializeUsersFromCache"] = function initializeUsersFromCache() {
  const self = this;
  const all = getAllDefault.getAll();
  return all.then((arg0) => {
    while (tmp !== undefined) {
      let tmp3 = self;
      let updateUserCachedResult = self.updateUserCached(tmp2);
      continue;
    }
  });
};
prototype["updateUser"] = function updateUser(id) {
  if (getAllDefault.shouldUseCache) {
    return false;
  } else {
    const self = this;
    if (!this.withGameFriends) {
      if (!set.has(obj.getRelationshipType(id))) {
        const indexMap = self.indexMap;
        return indexMap.delete(id);
      }
      obj = cleanString;
    }
    const value = self.getItem(id);
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
prototype["getItem"] = function getItem(closure_0) {
  const user = authStore2.getUser(closure_0);
  if (null == user) {
    return null;
  } else {
    const self = this;
    names = cleanString.getNames(user);
    ({ nick, names } = names);
    let obj = { user: null, names: null, affinity: null, firstMatch: null };
    obj[0] = user;
    obj[1] = names;
    let num = this.affinities[user.id];
    if (num == null) {
      num = 0;
    }
    obj[2] = num;
    if ("" !== self.currentQuery) {
      nick = isMatch(names, self.currentQuery, { contains: true });
    }
    obj[3] = nick;
    const obj4 = cleanString;
    const tmp12 = require;
    const relationshipType = cleanString.getRelationshipType(user.id);
    if (relationshipType !== RelationshipTypes.FRIEND) {
      const gameFriendsForUser = authStore.getGameFriendsForUser(closure_0);
      if (gameFriendsForUser.length > 0) {
        obj = {};
        const merged = Object.assign(obj);
        obj.type = gameFriendsForUser[0].type;
        return obj;
      }
    }
    obj1 = {};
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
    const obj = { type: null, user: null, names: null, affinity: null, firstMatch: null };
    obj[0] = names.type;
    const tmp4 = new closure_9(names.user);
    obj[1] = tmp4;
    ({ names: obj[2], affinity: obj[3] } = names);
    if ("" !== this.currentQuery) {
      names = names.names;
      self = self.currentQuery;
      let nick = isMatch(names, self);
    } else {
      nick = names.nick;
    }
    obj[4] = nick;
  }
};
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx");

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
  let first;
  closure_14 = undefined;
  let memo;
  let first1;
  const tmp = withGameFriends(withFriendSuggestions.useState(0), 2);
  first = tmp[0];
  closure_14 = tmp3;
  let items = [tmp[1], withGameFriends];
  memo = withFriendSuggestions.useMemo(() => new closure_1_17(() => callback(Date.now()), withGameFriends), items);
  const items1 = [first, memo, query];
  first1 = withGameFriends(withFriendSuggestions.useMemo(() => {
    const items = [memo.filter(query), first];
    return items;
  }, items1), 1)[0];
  const items2 = [memo, withGuildMembers];
  const effect = withFriendSuggestions.useEffect(() => {
    closure_0 = withGuildMembers(withAffinitySuggestions[16]).debounce(() => callback2(Date.now()), 0);
    const subscription = memo.subscribe(() => {
      callback();
    }, withGuildMembers);
    return () => closure_15.unsubscribe();
  }, items2);
  const items3 = [memo, query, withGuildMembers];
  const effect1 = withFriendSuggestions.useEffect(() => {
    const response = memo.fetch(query, withGuildMembers);
  }, items3);
  const effect2 = withFriendSuggestions.useEffect(() => {
    const userAffinitiesV2 = query(withAffinitySuggestions[18]).fetchUserAffinitiesV2();
  }, []);
  const items4 = [first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, flag, num, flag2];
  return withFriendSuggestions.useMemo(() => closure_1_18({ data: first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser: flag, affinitySuggestionsLimit: num, withAlphabeticalSections: flag2 }), items4);
};
export { UserSearch };
export { parseUserSearchResults };
// === Module 10607: useUserListData ===

// Module 10607 (useUserListData)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import GuildUtilsDefault from "GuildUtils" /* 5711 */;
import UserSearchItemsDefault from "UserSearchItems" /* 7154 */;
import UserSearchUtils from "UserSearchUtils" /* 7158 */;
import UserSearchManagerDefault from "UserSearchManager" /* 9513 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7159 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7155 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7156 */;
import UserRecord from "UserRecord" /* 1391 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, otherUserId, results;

function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
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
  let closure_0 = arg1;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  const exact = obj.exact;
  let closure_1 = undefined !== exact && exact;
  const contains = obj.contains;
  let closure_2 = undefined !== contains && contains;
  function _loop(arr) {
    closure_0 = arr;
    if (arr.some((item) => {
      if (closure_1) {
        return item === closure_0;
      } else if (item.startsWith(closure_0)) {
        return true;
      } else {
        const joined = closure_0.join(" ");
        let startsWithResult = joined.startsWith(closure_0);
        if (!startsWithResult) {
          startsWithResult = closure_2 && joined.includes(closure_0);
          closure_2 && joined.includes(closure_0);
        }
        return startsWithResult;
      }
    })) {
      return { v };
    }
  }
  const entries = Object.entries(arg0);
  const obj2 = entries[Symbol.iterator]();
  while (obj2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let closure_3 = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    let tmp7 = _loopResult;
    if (tmp7) {
      let v = _loopResult.v;
      obj2.return();
      return v;
    }
  }
  return null;
}
function parseUserSearchResults(affinitySuggestionsLimit) {
  let AffinitySuggestions;
  let FriendRequests;
  let FriendRequestsIncoming;
  let FriendRequestsOutgoing;
  let FriendRequestsSpam;
  let FriendSuggestions;
  let Friends;
  let GuildMembers;
  let data;
  let excludeCurrentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items11;
  let obj5;
  let obj7;
  let valueResult2;
  let withAffinitySuggestions;
  let withFriendRequests;
  let withFriendRequestsIncoming;
  let withFriendRequestsOutgoing;
  let withFriendRequestsSpam;
  let withFriendSuggestions;
  let withFriends;
  let withGuildMembers;
  const f104788 = (items) => items.items;
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
  const tmp2 = _objectWithoutProperties(data, items8.map(_toPropertyKey));
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
    const arr12 = _modDef12(tmp2);
    const mapped = arr12.map((items, title) => ({ title, items }));
    const iter = mapped.sortBy((title) => title.title);
    items11 = iter.value();
  } else {
    items11 = [];
  }
  let items9 = [{ title: null, items: items11.flatMap(f104788) }];
  const obj = { title: null, items: items11.flatMap(f104788) };
  const obj2 = { title: intl.string(intl6.t.HbJ7eD), items: valueResult2 };
  intl = intl6.intl;
  if (withAffinitySuggestions) {
    const obj4 = _modDef12(items);
    const sortByResult = obj4.sortBy((affinity) => -affinity.affinity);
    const iter2 = sortByResult.slice(0, num);
    valueResult2 = iter2.value();
  } else {
    valueResult2 = [];
  }
  const items10 = [obj2, , , , , , , ];
  const obj3 = { title: intl2.formatToPlainString(intl6.t.zsVtft, obj5), items: items1 };
  intl2 = intl6.intl;
  obj5 = { pendingRequestNumber: items1.length };
  if (!withFriendRequests) {
    items1 = [];
  }
  items10[1] = obj3;
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
  const obj6 = { title: intl3.formatToPlainString(intl6.t["DYMZ/p"], obj7), items: items5 };
  intl3 = intl6.intl;
  obj7 = { count: items5.length };
  if (!withFriendSuggestions) {
    items5 = [];
  }
  items10[5] = obj6;
  const obj8 = { title: intl4.string(intl6.t.TdEu5X), items: items6 };
  intl4 = intl6.intl;
  if (!withFriends) {
    items6 = [];
  }
  items10[6] = obj8;
  const obj9 = { title: intl5.string(intl6.t.y29JXs), items: found };
  intl5 = intl6.intl;
  if (!withGuildMembers) {
    found = [];
  }
  items10[7] = obj9;
  if (flag) {
    items9 = items11;
  }
  HermesBuiltin.arraySpread(items10, items9, 8);
  return items10;
}
const RelationshipTypes = Constants.RelationshipTypes;
let items = [, , , ];
({ FRIEND: arr[0], SUGGESTION: arr[1], PENDING_INCOMING: arr[2], PENDING_OUTGOING: arr[3] } = RelationshipTypes);
const set = new Set(items);
const authStore3 = { AffinitySuggestions: "AFFINITY_SUGGESTIONS", Friends: "FRIENDS", FriendRequests: "FRIEND_REQUESTS", FriendRequestsIncoming: "FRIEND_REQUESTS_INCOMING", FriendRequestsOutgoing: "FRIEND_REQUESTS_OUTGOING", FriendRequestsSpam: "FRIEND_REQUESTS_SPAM", FriendSuggestions: "FRIEND_SUGGESTIONS", GuildMembers: "GUILD_MEMBERS" };
class UserSearch {
  constructor(arg0) {
    let spam;
    let closure_0 = arg0;
    let flag = withGameFriends;
    if (withGameFriends === undefined) {
      flag = false;
    }
    let obj = Object.create(new.target.prototype);
    obj.currentQuery = "";
    obj.affinities = {};
    obj.userSearchContext = null;
    const secondaryIndexMap = new obj(4510).SecondaryIndexMap((arg0) => {
      let names;
      let type;
      ({ names, type } = arg0);
      const items = [];
      if (constants.PENDING_INCOMING === type) {
        items.push(closure_1_16.FriendRequests);
        const push = items.push;
        if (spam.isSpam(tmp3.id)) {
          push(closure_1_16.FriendRequestsSpam);
        } else {
          push(closure_1_16.FriendRequestsIncoming);
        }
      } else if (constants.PENDING_OUTGOING === type) {
        items.push(closure_1_16.FriendRequests);
        items.push(closure_1_16.FriendRequestsOutgoing);
      } else if (constants.SUGGESTION === type) {
        items.push(closure_1_16.FriendSuggestions);
      } else if (constants.FRIEND === type) {
        if (tmp2 > 0) {
          items.push(closure_1_16.AffinitySuggestions);
        }
        items.push(closure_1_16.Friends);
        const keys = Object.keys();
        if (keys !== undefined) {
          if (keys[tmp] !== undefined) {
            const push2 = items.push;
            const str = names[keys[tmp]][0];
            const charAtResult = str.charAt(0);
            push2(charAtResult.toLocaleUpperCase());
          }
        }
      }
      return items;
    }, (names) => {
      names = names.names;
      const keys = Object.keys();
      if (keys !== undefined) {
        if (keys[tmp] !== undefined) {
          return names[keys[tmp]][0];
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
    obj.handleGuildMembersChunkBatch = function handleGuildMembersChunkBatch(chunks) {
      chunks = chunks.chunks;
      let flag = false;
      for (const item10007 of chunks) {
        let members = item10007.members;
        for (const item10013 of members) {
          let updateUserResult = obj.updateUser(item10013.user.id) || flag;
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
      let affinities;
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
    if (UserSearchItemsDefault.shouldUseCache) {
      let result = obj.initializeUsersFromCache();
      result.then(() => {
        let tmp;
        if (closure_0 != null) {
          tmp = closure_0();
        }
        return tmp;
      });
    } else {
      const result1 = obj.initializeUsersFromStores();
    }
    return obj;
  }
  subscribe(onUpdate) {
    const self = this;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    self.onUpdate = onUpdate;
    let userSearchContext = null;
    if (flag) {
      const obj = UserSearchManagerDefault;
      userSearchContext = obj.getUserSearchContext((results) => {
        results = results.results;
        let items;
        if (items.currentQuery === results.query) {
          items = [];
          let flag = false;
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
              const value = self.getItem(id.id);
              let flag = acc;
              if (null != value) {
                items.push(value);
                flag = true;
              }
              return flag;
            }
          }, false)) {
            items.filteredGuildMembers = items;
            const onUpdate = tmp.onUpdate;
            if (onUpdate != null) {
              onUpdate();
            }
          }
        }
      }, 20);
    }
    self.userSearchContext = userSearchContext;
    const obj2 = DispatcherDefault;
    const subscription = obj2.subscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
    const obj3 = DispatcherDefault;
    const subscription1 = obj3.subscribe("RELATIONSHIP_ADD", self.handleRelationship);
    const obj4 = DispatcherDefault;
    const subscription2 = obj4.subscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
    const obj5 = DispatcherDefault;
    const subscription3 = obj5.subscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
    const obj6 = DispatcherDefault;
    const subscription4 = obj6.subscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
    const obj7 = DispatcherDefault;
    const subscription5 = obj7.subscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
    const obj8 = DispatcherDefault;
    const subscription6 = obj8.subscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
    const obj9 = DispatcherDefault;
    const subscription7 = obj9.subscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
    const obj10 = DispatcherDefault;
    const subscription8 = obj10.subscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
    const obj11 = DispatcherDefault;
    const subscription9 = obj11.subscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
    const obj12 = DispatcherDefault;
    const subscription10 = obj12.subscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
    const obj13 = DispatcherDefault;
    const subscription11 = obj13.subscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
    UserAffinitiesV2Store.addChangeListener(self.handleUserAffinitiesUpdate);
  }
  unsubscribe() {
    const self = this;
    this.onUpdate = undefined;
    const userSearchContext = this.userSearchContext;
    if (userSearchContext != null) {
      userSearchContext.destroy();
    }
    const obj = DispatcherDefault;
    obj.unsubscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("RELATIONSHIP_ADD", self.handleRelationship);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
    const obj7 = DispatcherDefault;
    obj7.unsubscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
    const obj8 = DispatcherDefault;
    obj8.unsubscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
    const obj9 = DispatcherDefault;
    obj9.unsubscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
    const obj10 = DispatcherDefault;
    obj10.unsubscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
    const obj11 = DispatcherDefault;
    obj11.unsubscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
    const obj12 = DispatcherDefault;
    obj12.unsubscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
    UserAffinitiesV2Store.removeChangeListener(self.handleUserAffinitiesUpdate);
  }
  fetch(toLocaleLowerCase, arg1) {
    const self = this;
    const obj = UserSearchUtils;
    const cleanStringResult = obj.cleanString(toLocaleLowerCase);
    if ("" === cleanStringResult) {
      const userSearchContext2 = self.userSearchContext;
      if (userSearchContext2 != null) {
        userSearchContext2.clearQuery();
      }
    } else {
      const tmp3 = arg1;
      if (tmp3) {
        const obj2 = GuildUtilsDefault;
        const members = obj2.requestMembers(null, cleanStringResult);
      }
      const userSearchContext = self.userSearchContext;
      if (userSearchContext != null) {
        const obj3 = { query: cleanStringResult, boosters: self.affinities, boosterFallback: 0.002592 };
        userSearchContext.setQuery(obj3);
      }
    }
  }
  filter(toLocaleLowerCase) {
    const self = this;
    _require = toLocaleLowerCase;
    let obj = require("UserSearchUtils");
    const cleanStringResult = obj.cleanString(toLocaleLowerCase);
    _require = cleanStringResult;
    if (this.currentQuery !== cleanStringResult) {
      if ("" === cleanStringResult) {
        self.filteredFriends = null;
        self.filteredGuildMembers = null;
      } else {
        self.filteredFriends = [];
        const indexMap = self.indexMap;
        const values = indexMap.values(closure_16.Friends);
        const item = values.forEach((names) => {
          const tmp = isMatch(names.names, toLocaleLowerCase, { contains: true });
          if (null != tmp) {
            const filteredFriends = self.filteredFriends;
            if (filteredFriends != null) {
              const push = filteredFriends.push;
              const obj = { firstMatch: tmp };
              const merged = Object.assign(names);
              push(obj);
            }
          }
        });
      }
      self.currentQuery = cleanStringResult;
    }
    if ("" === self.currentQuery) {
      const indexMap2 = self.indexMap;
      const obj3 = {};
      let merged = Object.assign(indexMap2.indexes());
      delete obj2[closure_16.Friends];
      return obj3;
    } else {
      const obj7 = {};
      const Friends = closure_16.Friends;
      const sortBy = self(12).sortBy;
      self(12);
      const obj4 = self(12);
      obj7[Friends] = sortBy(obj4.uniqBy(self.filteredFriends, (user) => user.user.id), (names) => {
        let num = 0;
        if (null != isMatch(names.names, toLocaleLowerCase, { exact: true })) {
          num = -1000;
        }
        return num;
      }, (affinity) => -affinity.affinity);
      const GuildMembers = closure_16.GuildMembers;
      const sortBy2 = self(12).sortBy;
      self(12);
      const obj5 = self(12);
      obj7[GuildMembers] = sortBy2(obj5.uniqBy(self.filteredGuildMembers, (user) => user.user.id), (names) => {
        let num = 0;
        if (null != isMatch(names.names, toLocaleLowerCase, { exact: true })) {
          num = -1000;
        }
        return num;
      }, (affinity) => -affinity.affinity);
      return obj7;
    }
  }
  initializeUsersFromStores() {
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
  }
  initializeUsersFromCache() {
    const self = this;
    const obj = UserSearchItemsDefault;
    const all = obj.getAll();
    return all.then((result) => {
      const tmp = result[Symbol.iterator]();
      while (tmp !== undefined) {
        let updateUserCachedResult = self.updateUserCached(tmp2);
        continue;
      }
    });
  }
  updateUser(id) {
    if (UserSearchItemsDefault.shouldUseCache) {
      return false;
    } else {
      let deleteResult;
      const self = this;
      if (!this.withGameFriends) {
        const has = set.has;
        const obj = UserSearchUtils;
        if (!has(obj.getRelationshipType(id))) {
          const indexMap = self.indexMap;
          return indexMap.delete(id);
        }
      }
      const value = self.getItem(id);
      if (null == value) {
        const indexMap3 = self.indexMap;
        deleteResult = indexMap3.delete(id);
      } else {
        const indexMap2 = self.indexMap;
        deleteResult = indexMap2.set(id, value);
      }
      return deleteResult;
    }
  }
  getItem(id) {
    let names;
    let nick;
    let num;
    const user = UserStore.getUser(id);
    if (null == user) {
      return null;
    } else {
      const self = this;
      const obj4 = UserSearchUtils;
      const names1 = obj4.getNames(user);
      ({ nick, names } = names1);
      const obj = { user, names, affinity: num, firstMatch: nick };
      num = this.affinities[user.id];
      if (num == null) {
        num = 0;
      }
      if ("" !== self.currentQuery) {
        nick = isMatch(names, self.currentQuery, { contains: true });
      }
      const tmp12Result = UserSearchUtils;
      const relationshipType = tmp12Result.getRelationshipType(user.id);
      if (relationshipType !== RelationshipTypes.FRIEND) {
        const gameFriendsForUser = GameRelationshipStore.getGameFriendsForUser(id);
        if (gameFriendsForUser.length > 0) {
          const obj2 = { type: gameFriendsForUser[0].type };
          const merged = Object.assign(obj);
          return obj2;
        }
      }
      const obj3 = { type: relationshipType };
      const merged1 = Object.assign(obj);
      return obj3;
    }
  }
  updateUserCached(type) {
    const self = this;
    if (set.has(type.type)) {
      let deleteResult;
      const itemCached = self.getItemCached(type);
      if (null == itemCached) {
        const indexMap3 = self.indexMap;
        deleteResult = indexMap3.delete(type.id);
      } else {
        const indexMap2 = self.indexMap;
        deleteResult = indexMap2.set(type.id, itemCached);
      }
      return deleteResult;
    } else {
      const indexMap = self.indexMap;
      return indexMap.delete(type.id);
    }
  }
  getItemCached(type) {
    let nick;
    let tmp3;
    let tmp = null;
    if (null != type) {
      const obj = { type: type.type, user: tmp3, names: null, affinity: null, firstMatch: nick };
      const self2 = this;
      const self3 = this;
      const self = this;
      ({ names: obj.names, affinity: obj.affinity } = type);
      tmp3 = new UserRecord(type.user);
      if ("" !== this.currentQuery) {
        nick = isMatch(type.names, self.currentQuery);
      } else {
        nick = type.nick;
      }
      tmp = obj;
    }
    return tmp;
  }
}
const prototype = UserSearch.prototype;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserListData(query) {
  let affinitySuggestionsLimit;
  let arr;
  let excludeCurrentUser;
  let first;
  let tmp6;
  let withAffinitySuggestions;
  let withAlphabeticalSections;
  let withFriendRequests;
  let withFriendRequestsIncoming;
  let withFriendRequestsOutgoing;
  let withFriendRequestsSpam;
  let withFriendSuggestions;
  let withFriends;
  let withGameFriends;
  let obj = query(576);
  const cResult = obj.c(34);
  query = query.query;
  const withGuildMembers = query.withGuildMembers;
  ({ withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser, affinitySuggestionsLimit, withAlphabeticalSections } = query);
  let num = 5;
  if (undefined !== affinitySuggestionsLimit) {
    num = affinitySuggestionsLimit;
  }
  [tmp6, dependencyMap] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return dependencyMap(Date.now());
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== withGameFriends) {
    const self = this;
    const tmp11 = new UserSearch(first, withGameFriends);
    cResult[1] = withGameFriends;
    cResult[2] = tmp11;
    arr = tmp11;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] === query) {
    let tmp12;
    if (cResult[4] === arr) {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp12) {
      let tmp14;
      if (cResult[7] === tmp6) {
        tmp14 = cResult[8];
      }
      const first1 = _slicedToArray(tmp14, 1)[0];
      if (cResult[9] === arr) {
        let tmp16;
        let tmp17;
        if (cResult[10] === withGuildMembers) {
          tmp16 = cResult[11];
          tmp17 = cResult[12];
        }
        const effect = react.useEffect(tmp16, tmp17);
        if (cResult[13] === query) {
          if (cResult[14] === arr) {
            let tmp19;
            let tmp20;
            if (cResult[15] === withGuildMembers) {
              tmp19 = cResult[16];
              tmp20 = cResult[17];
            }
            const effect1 = react.useEffect(tmp19, tmp20);
            const _Symbol = Symbol;
            class T {
              constructor() {
                const response = arr.fetch(query, withGuildMembers);
              }
            }
            class O {
              constructor() {
                obj = withGuildMembers(closure_2[16]);
                closure_0 = obj.debounce(() => closure_1_2(Date.now()), 0);
                subscription = closure_3.subscribe(() => {
                  closure_0();
                }, withGuildMembers);
                return () => arr.unsubscribe();
              }
            }
            const effect2 = react.useEffect(tmp23, tmp24);
            if (cResult[20] === num) {
              if (cResult[21] === first1) {
                if (cResult[22] === (undefined !== excludeCurrentUser && excludeCurrentUser)) {
                  if (cResult[23] === withAffinitySuggestions) {
                    if (cResult[24] === (undefined === withAlphabeticalSections || withAlphabeticalSections)) {
                      if (cResult[25] === withFriendRequests) {
                        if (cResult[26] === withFriendRequestsIncoming) {
                          if (cResult[27] === withFriendRequestsOutgoing) {
                            if (cResult[28] === withFriendRequestsSpam) {
                              if (cResult[29] === withFriendSuggestions) {
                                if (cResult[30] === withFriends) {
                                  if (cResult[31] === withGameFriends) {
                                    let tmp26;
                                    if (cResult[32] === withGuildMembers) {
                                      tmp26 = cResult[33];
                                    }
                                    return tmp26;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { data: first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser: undefined !== excludeCurrentUser && excludeCurrentUser, affinitySuggestionsLimit: num, withAlphabeticalSections: undefined === withAlphabeticalSections || withAlphabeticalSections };
            const tmp28 = parseUserSearchResults(obj3);
            cResult[20] = num;
            cResult[21] = first1;
            cResult[22] = undefined !== excludeCurrentUser && excludeCurrentUser;
            cResult[23] = withAffinitySuggestions;
            cResult[24] = undefined === withAlphabeticalSections || withAlphabeticalSections;
            cResult[25] = withFriendRequests;
            cResult[26] = withFriendRequestsIncoming;
            cResult[27] = withFriendRequestsOutgoing;
            cResult[28] = withFriendRequestsSpam;
            cResult[29] = withFriendSuggestions;
            cResult[30] = withFriends;
            cResult[31] = withGameFriends;
            cResult[32] = withGuildMembers;
            cResult[33] = tmp28;
            tmp26 = tmp28;
          }
        }
        class T {
          constructor() {
            const response = arr.fetch(query, withGuildMembers);
          }
        }
        class O {
          constructor() {
            obj = withGuildMembers(closure_2[16]);
            closure_0 = obj.debounce(() => closure_1_2(Date.now()), 0);
            subscription = closure_3.subscribe(() => {
              closure_0();
            }, withGuildMembers);
            return () => arr.unsubscribe();
          }
        }
        tmp21[0] = arr;
        tmp21[1] = query;
        tmp21[2] = withGuildMembers;
        cResult[13] = query;
        cResult[14] = arr;
        cResult[15] = withGuildMembers;
        cResult[16] = T;
        cResult[17] = tmp21;
        tmp20 = tmp21;
        tmp19 = T;
      }
      class O {
        constructor() {
          obj = withGuildMembers(closure_2[16]);
          closure_0 = obj.debounce(() => closure_1_2(Date.now()), 0);
          subscription = closure_3.subscribe(() => {
            closure_0();
          }, withGuildMembers);
          return () => arr.unsubscribe();
        }
      }
      const items = [arr, withGuildMembers];
      cResult[9] = arr;
      cResult[10] = withGuildMembers;
      cResult[11] = O;
      cResult[12] = items;
      tmp17 = items;
      tmp16 = O;
    }
    const items1 = [, ];
    cResult[6] = tmp12;
    cResult[7] = tmp6;
    cResult[8] = items1;
    tmp14 = items1;
  }
  const found = arr.filter(query);
  cResult[3] = query;
  cResult[4] = arr;
  cResult[5] = found;
  tmp12 = found;
}) : (function useUserListData(query) {
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
  let closure_14 = tmp3;
  let items = [tmp[1], withGameFriends];
  const memo = withFriendSuggestions.useMemo(() => new UserSearch(() => closure_1_14(Date.now()), withGameFriends), items);
  const items1 = [first, memo, query];
  const first1 = withGameFriends(withFriendSuggestions.useMemo(() => {
    const items = [memo.filter(query), first];
    return items;
  }, items1), 1)[0];
  const items2 = [memo, withGuildMembers];
  const effect = withFriendSuggestions.useEffect(() => {
    const obj = withGuildMembers(withAffinitySuggestions[16]);
    let closure_0 = obj.debounce(() => closure_1_14(Date.now()), 0);
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
    const obj = query(withAffinitySuggestions[20]);
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
  }, []);
  const items4 = [first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, flag, num, flag2];
  return withFriendSuggestions.useMemo(() => {
    const obj = { data: first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser: flag, affinitySuggestionsLimit: num, withAlphabeticalSections: flag2 };
    return parseUserSearchResults(obj);
  }, items4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx");

export default tmp3;
export { UserSearch };
export { parseUserSearchResults };
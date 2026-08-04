import _slicedToArray from "_slicedToArray";
import set from "isEqual";

const require = arg1;
function hasStringMatch(str, str2) {
  let hasItem = null != str;
  if (hasItem) {
    const formatted = str.toLowerCase();
    hasItem = formatted.includes(str2.toLowerCase());
  }
  return hasItem;
}
let obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: null, selectedJoinDateOption: null, selectedAccountAgeOption: null, selectedJoinSourceType: "call", selectedSourceInviteCode: "httpServerLocation", selectedSort: "op" };
let set = new Set();
obj[5] = set;
obj[6] = { optionId: 0, afterDate: null, beforeDate: null };
obj[7] = { optionId: 0, afterDate: null, beforeDate: null };
let closure_4 = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx");
class GuildMemberSafetySearch {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.guildId = global;
    obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: null, selectedJoinDateOption: null, selectedAccountAgeOption: null, selectedJoinSourceType: "call", selectedSourceInviteCode: "httpServerLocation", selectedSort: "op" };
    set = new Set();
    obj[5] = set;
    obj[6] = { optionId: 0, afterDate: null, beforeDate: null };
    obj[7] = { optionId: 0, afterDate: null, beforeDate: null };
    obj._searchState = obj;
    obj.hasDefaultQuery = true;
    return obj;
  }
}
const prototype = GuildMemberSafetySearch.prototype;
Object.defineProperty(prototype, "requiresUsernameMatch", {
  get: function requiresUsernameMatch() {
    return this._searchState.query.trim().length > 0;
  },
  set: undefined
});
prototype["reset"] = function reset() {
  const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: null, selectedJoinDateOption: null, selectedAccountAgeOption: null, selectedJoinSourceType: "call", selectedSourceInviteCode: "httpServerLocation", selectedSort: "op" };
  obj[5] = new Set();
  obj[6] = { optionId: 0, afterDate: null, beforeDate: null };
  obj[7] = { optionId: 0, afterDate: null, beforeDate: null };
  this._searchState = obj;
  this.hasDefaultQuery = true;
};
prototype["updateSearchState"] = function updateSearchState(arg0) {
  const merged = Object.assign(this._searchState);
  const merged1 = Object.assign(arg0);
  this._searchState = {};
  this.hasDefaultQuery = importDefault(4444)(this._searchState, closure_4);
  return true;
};
prototype["resetSearchState"] = function resetSearchState() {
  const self = this;
  const hasDefaultQuery = this.hasDefaultQuery;
  let flag = !hasDefaultQuery;
  if (!hasDefaultQuery) {
    const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: null, selectedJoinDateOption: null, selectedAccountAgeOption: null, selectedJoinSourceType: "call", selectedSourceInviteCode: "httpServerLocation", selectedSort: "op" };
    const _Set = Set;
    const set = new Set();
    obj[5] = set;
    obj[6] = { optionId: 0, afterDate: null, beforeDate: null };
    obj[7] = { optionId: 0, afterDate: null, beforeDate: null };
    self._searchState = obj;
    self.hasDefaultQuery = true;
    flag = true;
  }
  return flag;
};
prototype["getSearchState"] = function getSearchState() {
  return this._searchState;
};
prototype["isMemberIncludedInSearchResults"] = function isMemberIncludedInSearchResults(joinedAtTimestamp) {
  let query;
  let requireCommunicationDisabled;
  let requireUnusualAccountActivity;
  let requireUnusualDmActivity;
  let requireUsernameQuarantined;
  let selectedAccountAgeOption;
  let selectedJoinDateOption;
  let selectedJoinSourceType;
  let selectedRoleIds;
  let selectedSourceInviteCode;
  ({ query, requireUnusualDmActivity, requireCommunicationDisabled, requireUnusualAccountActivity, requireUsernameQuarantined, selectedRoleIds, selectedJoinDateOption, selectedAccountAgeOption, selectedSourceInviteCode, selectedJoinSourceType } = this._searchState);
  const tmp = query.length > 0 && !(function hasMatchingNickname(userId, query) {
    let tmp21;
    let tmp22;
    if ("" === query.trim()) {
      return false;
    } else {
      const obj3 = joinedAtTimestamp(table[1]);
      [tmp21, tmp22] = callback(joinedAtTimestamp(table[1]).splitQuery(query), 2);
      for (const item10006 of tmp22) {
        if (arg0.userId === item10006) {
          let tmp2 = obj4;
          obj4.return();
          let flag = true;
          return true;
        }
      }
      const obj = tmp21[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp7 = callback2;
        if (callback2(userId.nick, tmp5)) {
          let tmp8 = obj;
          obj.return();
          let flag2 = true;
          return true;
        }
      }
      if (null == userId.user) {
        return false;
      } else {
        for (const item10027 of tmp21) {
          let tmp11 = callback2;
          if (callback2(tmp25, item10027)) {
            let tmp12 = obj5;
            obj5.return();
            let flag3 = true;
            return true;
          }
        }
        for (const item10037 of tmp21) {
          let tmp15 = callback2;
          if (callback2(tmp24, item10037)) {
            let tmp16 = obj2;
            obj2.return();
            let flag4 = true;
            return true;
          }
        }
        return false;
      }
      const tmp20 = callback(joinedAtTimestamp(table[1]).splitQuery(query), 2);
    }
  })(joinedAtTimestamp, query);
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp3 = selectedRoleIds.size > 0;
    if (tmp3) {
      const _require = joinedAtTimestamp;
      let everyResult = 0 !== selectedRoleIds.size;
      if (everyResult) {
        const _Array = Array;
        everyResult = Array.from(selectedRoleIds).every((arg0) => {
          const roles = joinedAtTimestamp.roles;
          return roles.includes(arg0);
        });
        const arr = Array.from(selectedRoleIds);
      }
      tmp3 = !everyResult;
    }
    let tmp6 = !tmp3;
    if (!tmp3) {
      let tmp9 = !tmp8;
      if (!(null != selectedJoinDateOption.afterDate && joinedAtTimestamp.joinedAtTimestamp < selectedJoinDateOption.afterDate)) {
        let tmp11 = !tmp10;
        if (!(null != selectedJoinDateOption.beforeDate && joinedAtTimestamp.joinedAtTimestamp > selectedJoinDateOption.beforeDate)) {
          let tmp12 = null != selectedAccountAgeOption.afterDate;
          if (tmp12) {
            tmp12 = importDefault(11).extractTimestamp(joinedAtTimestamp.userId) < selectedAccountAgeOption.afterDate;
            const obj2 = importDefault(11);
          }
          let tmp15 = !tmp12;
          if (!tmp12) {
            let tmp16 = null != selectedAccountAgeOption.beforeDate;
            if (tmp16) {
              tmp16 = importDefault(11).extractTimestamp(joinedAtTimestamp.userId) > selectedAccountAgeOption.beforeDate;
              let obj3 = importDefault(11);
            }
            let tmp19 = !tmp16;
            if (!tmp16) {
              let tmp20 = null == selectedSourceInviteCode || joinedAtTimestamp.sourceInviteCode === selectedSourceInviteCode;
              if (tmp20) {
                let tmp21 = null == selectedJoinSourceType || joinedAtTimestamp.joinSourceType === selectedJoinSourceType;
                if (tmp21) {
                  let tmp22 = requireUnusualDmActivity;
                  if (!requireUnusualDmActivity) {
                    tmp22 = requireCommunicationDisabled;
                  }
                  if (!tmp22) {
                    tmp22 = requireUnusualAccountActivity;
                  }
                  if (!tmp22) {
                    tmp22 = requireUsernameQuarantined;
                  }
                  let tmp23 = !tmp22;
                  if (tmp22) {
                    let tmp24 = !requireUnusualDmActivity;
                    if (requireUnusualDmActivity) {
                      tmp24 = !joinedAtTimestamp.hasUnusualDmActivity;
                    }
                    let tmp25 = !tmp24;
                    if (tmp24) {
                      let tmp26 = !requireCommunicationDisabled;
                      if (requireCommunicationDisabled) {
                        tmp26 = !_require(3902).isMemberCommunicationDisabled(joinedAtTimestamp);
                        const obj4 = _require(3902);
                      }
                      let tmp29 = !tmp26;
                      if (tmp26) {
                        let tmp30 = !requireUnusualAccountActivity;
                        if (requireUnusualAccountActivity) {
                          tmp30 = !joinedAtTimestamp.hasUnusualAccountActivity;
                        }
                        let tmp31 = !tmp30;
                        if (tmp30) {
                          let tmp32 = !requireUsernameQuarantined;
                          if (requireUsernameQuarantined) {
                            tmp32 = !_require(3919).hasAutomodQuarantinedProfile(joinedAtTimestamp);
                            const obj5 = _require(3919);
                          }
                          tmp31 = !tmp32;
                        }
                        tmp29 = tmp31;
                      }
                      tmp25 = tmp29;
                    }
                    tmp23 = tmp25;
                  }
                  tmp21 = tmp23;
                }
                tmp20 = tmp21;
              }
              tmp19 = tmp20;
            }
            tmp15 = tmp19;
          }
          tmp11 = tmp15;
        }
        tmp9 = tmp11;
      }
      tmp6 = tmp9;
    }
    tmp2 = tmp6;
  }
  return tmp2;
};

export const getDefaultSearchState = function getDefaultSearchState() {
  const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: null, selectedJoinDateOption: null, selectedAccountAgeOption: null, selectedJoinSourceType: "call", selectedSourceInviteCode: "httpServerLocation", selectedSort: "op" };
  obj[5] = new Set();
  obj[6] = { optionId: 0, afterDate: null, beforeDate: null };
  obj[7] = { optionId: 0, afterDate: null, beforeDate: null };
  return obj;
};
export { GuildMemberSafetySearch };
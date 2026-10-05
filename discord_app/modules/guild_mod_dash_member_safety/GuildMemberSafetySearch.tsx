// === Module 7028: GuildMemberSafetySearch ===

// Module 7028 (GuildMemberSafetySearch)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4496 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4515 */;
import isEqualDefault from "isEqual" /* 5010 */;
import GuildMemberSafetySearchUtils from "GuildMemberSafetySearchUtils" /* 7029 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let roles;

let set;
function hasStringMatch(globalName, item10027) {
  let hasItem = null != globalName;
  if (hasItem) {
    const formatted = globalName.toLowerCase();
    hasItem = formatted.includes(item10027.toLowerCase());
  }
  return hasItem;
}
let obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: set, selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
set = new Set();
let closure_4 = freeze(obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx");
class GuildMemberSafetySearch {
  constructor(guildId) {
    const obj2 = Object.create(new.target.prototype);
    obj2.guildId = guildId;
    obj2._searchState = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: new Set(), selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
    obj2.hasDefaultQuery = true;
    const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: new Set(), selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
    new Set();
    return obj2;
  }
  reset() {
    this._searchState = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: new Set(), selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
    this.hasDefaultQuery = true;
    const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: new Set(), selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
    new Set();
  }
  updateSearchState(arg0) {
    const obj = {};
    const merged = Object.assign(this._searchState);
    const merged1 = Object.assign(arg0);
    this._searchState = obj;
    this.hasDefaultQuery = isEqualDefault(this._searchState, closure_4);
    return true;
  }
  resetSearchState() {
    const self = this;
    let flag = !this.hasDefaultQuery;
    if (flag) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: set, selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
      self._searchState = obj;
      self.hasDefaultQuery = true;
      flag = true;
      set = new Set();
    }
    return flag;
  }
  getSearchState() {
    return this._searchState;
  }
  isMemberIncludedInSearchResults(joinedAtTimestamp) {
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
    function hasMatchingNickname(userId, query) {
      let tmp21;
      let tmp22;
      if ("" === query.trim()) {
        return false;
      } else {
        const obj3 = GuildMemberSafetySearchUtils;
        [tmp21, tmp22] = obj3.splitQuery(query);
        _slicedToArray(obj3.splitQuery(query), 2);
        for (const item10006 of tmp22) {
          if (userId.userId === item10006) {
            obj4.return();
            let flag = true;
            return true;
          }
        }
        const obj = tmp21[Symbol.iterator]();
        while (obj !== undefined) {
          if (hasStringMatch(userId.nick, tmp5)) {
            obj.return();
            let flag2 = true;
            return true;
          }
        }
        if (null == userId.user) {
          return false;
        } else {
          const globalName = userId.user.globalName;
          for (const item10027 of tmp21) {
            if (hasStringMatch(tmp24, item10027)) {
              obj5.return();
              let flag3 = true;
              return true;
            }
          }
          for (const item10037 of tmp21) {
            if (hasStringMatch(globalName, item10037)) {
              obj2.return();
              let flag4 = true;
              return true;
            }
          }
          return false;
        }
      }
    }
    ({ query, requireUnusualDmActivity, requireCommunicationDisabled, requireUnusualAccountActivity, requireUsernameQuarantined, selectedRoleIds, selectedJoinDateOption, selectedAccountAgeOption, selectedSourceInviteCode, selectedJoinSourceType } = this._searchState);
    let tmp2 = !(query.length > 0 && !hasMatchingNickname(joinedAtTimestamp, query));
    query.length > 0 && !hasMatchingNickname(joinedAtTimestamp, query);
    if (tmp2) {
      let tmp3 = selectedRoleIds.size > 0;
      if (tmp3) {
        let closure_0 = joinedAtTimestamp;
        let everyResult = 0 !== selectedRoleIds.size;
        if (everyResult) {
          const tmp5 = globalThis;
          const _Array = Array;
          const arr = Array.from(selectedRoleIds);
          everyResult = arr.every((item) => {
            roles = roles.roles;
            return roles.includes(item);
          });
        }
        tmp3 = !everyResult;
      }
      let tmp6 = !tmp3;
      if (tmp6) {
        let tmp8 = null != selectedJoinDateOption.afterDate && joinedAtTimestamp.joinedAtTimestamp < selectedJoinDateOption.afterDate;
        let tmp9 = !tmp8;
        if (tmp9) {
          let tmp11 = !(null != selectedJoinDateOption.beforeDate && joinedAtTimestamp.joinedAtTimestamp > selectedJoinDateOption.beforeDate);
          if (tmp11) {
            let tmp12 = null != selectedAccountAgeOption.afterDate;
            if (tmp12) {
              const obj2 = SnowflakeUtilsDefault;
              tmp12 = obj2.extractTimestamp(joinedAtTimestamp.userId) < selectedAccountAgeOption.afterDate;
            }
            let tmp15 = !tmp12;
            if (tmp15) {
              let tmp16 = null != selectedAccountAgeOption.beforeDate;
              if (tmp16) {
                let obj3 = SnowflakeUtilsDefault;
                tmp16 = obj3.extractTimestamp(joinedAtTimestamp.userId) > selectedAccountAgeOption.beforeDate;
              }
              let tmp19 = !tmp16;
              if (tmp19) {
                let tmp20 = null == selectedSourceInviteCode || joinedAtTimestamp.sourceInviteCode === selectedSourceInviteCode;
                if (tmp20) {
                  let tmp21 = null == selectedJoinSourceType || joinedAtTimestamp.joinSourceType === selectedJoinSourceType;
                  if (tmp21) {
                    const tmp22 = requireUnusualDmActivity || requireCommunicationDisabled || requireUnusualAccountActivity || requireUsernameQuarantined;
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
                          const obj4 = CommunicationDisabledUtils;
                          tmp26 = !obj4.isMemberCommunicationDisabled(joinedAtTimestamp);
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
                              const obj5 = AutomodPermissionUtils;
                              tmp32 = !obj5.hasAutomodQuarantinedProfile(joinedAtTimestamp);
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
  }
}
Object.defineProperty(GuildMemberSafetySearch.prototype, "requiresUsernameMatch", {
  get: function requiresUsernameMatch() {
    const str = this._searchState.query;
    return str.trim().length > 0;
  },
  set: undefined
});

export const getDefaultSearchState = function getDefaultSearchState() {
  const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: new Set(), selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: "applicationId", selectedSourceInviteCode: "round", selectedSort: "width" };
  new Set();
  return obj;
};
export { GuildMemberSafetySearch };
// === Module 13314: PremiumGroupActionCreators ===

// Module 13314 (PremiumGroupActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRecord from "UserRecord" /* 1391 */;
import SubscriptionGroupMemberRecord from "SubscriptionGroupMemberRecord" /* 13315 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, closure_6, limit, status, status2, user, value2;

let obj = function _fetchPremiumGroupMembership() {
  obj = _asyncToGenerator(async function() {
    let date;
    let obj9;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            body = undefined;
            const obj10 = DispatcherDefault;
            obj10.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj6 = closure_129_1(closure_129_2[4]);
          obj6.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" });
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value.body;
          if (null != body) {
            const obj8 = { type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS", membership: obj9 };
            obj9 = { subscriptionId: body.subscription_id, memberType: body.member_type, subscriptionStatus: body.subscription_status, currentPeriodEnd: date };
            const _Date = Date;
            const self = this;
            const self2 = this;
            const dispatch = closure_129_1(closure_129_2[4]).dispatch;
            const tmp13 = closure_129_1(closure_129_2[4]);
            date = new Date(body.current_period_end);
            dispatch(obj8);
          } else {
            obj = closure_129_1(closure_129_2[4]);
            obj.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" });
          }
          c3 = 0;
          c5 = 3;
          const obj11 = { value: body, done: true };
          return obj11;
        }
      } catch (tmp27) {
        let closure_2 = tmp27;
        if (0 === c3) {
          c5 = 3;
          throw tmp27;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchEligibleUsers() {
  obj = _asyncToGenerator(async (arg0, index, search_query, arg3) => {
    let c7;
    let closure_0 = arg0;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(closure_0), query: obj4, rejectWithError: true };
      const get = HTTP.get;
      obj4 = { index, limit, search_query, include_ineligible: true };
      limit = closure_3;
      if (closure_3 == null) {
        limit = 10;
      }
      await get(request);
      const body = value.body;
      const users = body.users;
      const next_index = body.next_index;
      const ineligible_users = body.ineligible_users;
      closure_5 = 0;
      const items = [];
      closure_5 = HermesBuiltin.arraySpread(items, users.map((item) => {
        const tmp = new limit(item);
        return assign(tmp, { eligible: true });
      }), closure_5);
      closure_6 = ineligible_users;
      if (ineligible_users == null) {
        closure_6 = [];
      }
      obj = { users: items, nextIndex: next_index };
      closure_5 = HermesBuiltin.arraySpread(items, closure_6.map((item) => {
        const tmp = new limit(item);
        return assign(tmp, { eligible: false });
      }), closure_5);
      return obj;
    })();
  });
  return obj(...arguments);
};
obj = function _inviteUsersToSubscriptionGroup() {
  obj = _asyncToGenerator(async (subscriptionId, user_ids) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj5;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              user_ids = undefined;
              const obj10 = DispatcherDefault;
              obj10.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.BILLING_SUBSCRIPTION_INVITES(subscriptionId), body: obj5, rejectWithError: true };
              const post = HTTP.post;
              c6 = 2;
              c7 = 1;
              obj5 = { user_ids };
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            const obj3 = closure_131_1(closure_131_2[4]);
            obj3.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" });
            c7 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            user_ids = value;
            const obj9 = { type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId };
            const obj7 = closure_131_1(closure_131_2[4]);
            obj7.dispatch(obj9);
            c5 = 0;
            c7 = 3;
            return { value: { invitedUsers: user_ids.body.invited_users, ineligibleUsers: user_ids.body.ineligible_users }, done: true };
          }
        } catch (tmp10) {
          closure_4 = tmp10;
          if (0 === c5) {
            c7 = 3;
            throw tmp10;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _removeUserFromSubscriptionGroup() {
  obj = _asyncToGenerator(async (subscriptionId, value) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              value2 = tmp4;
              value = undefined;
              const obj10 = DispatcherDefault;
              obj10.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c6 = 2;
              c7 = 1;
              const obj4 = { url: Endpoints.BILLING_SUBSCRIPTION_REMOVE_USER(subscriptionId, value), rejectWithError: true };
              const obj6 = { value: del(obj4), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            value2 = closure_4;
            const obj5 = closure_131_1(closure_131_2[4]);
            obj5.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" });
            c7 = 3;
            return { value: value2, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const obj9 = { type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId };
            obj = closure_131_1(closure_131_2[4]);
            obj.dispatch(obj9);
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSubscriptionGroupMembers() {
  obj = _asyncToGenerator(async (value) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let found;
      let found1;
      let obj11;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              value = undefined;
              user = undefined;
              const obj10 = DispatcherDefault;
              obj10.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj5 = { url: Endpoints.BILLING_SUBSCRIPTION_MEMBERS(value), rejectWithError: true };
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj3 = closure_130_1(closure_130_2[4]);
            obj3.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" });
            c6 = 3;
            return { value: [], done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const body = value.body;
            value = body.map(closure_130_5.createFromServer);
            user = value.find((isPrimary) => isPrimary.isPrimary());
            closure_130_1(closure_130_2[6])(null != user, "Primary member not found in premium group");
            const obj9 = { type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS", members: obj11 };
            obj11 = { primary: user.user, members: found.map((user) => user.user), invitedUsers: found1.map((user) => user.user) };
            const dispatch = closure_130_1(closure_130_2[4]).dispatch;
            closure_130_1(closure_130_2[4]);
            found = value.filter((isMember) => isMember.isMember());
            found1 = value.filter((isInvited) => isInvited.isInvited());
            dispatch(obj9);
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp10) {
          closure_3 = tmp10;
          if (0 === c4) {
            c6 = 3;
            throw tmp10;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _acceptSubscriptionGroupInvite() {
  obj = _asyncToGenerator(async (subscriptionGroupMemberId, value, arg2) => {
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              subscriptionGroupMemberId = value;
              value = undefined;
              const obj4 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: value };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj4);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const patch = HTTP.patch;
              c7 = 2;
              c8 = 1;
              const obj6 = { url: Endpoints.BILLING_SUBSCRIPTION_INVITE(subscriptionGroupMemberId, value), rejectWithError: true };
              const obj7 = { value: patch(obj6), done: false };
              return obj7;
            }
          } else if (1 === c7) {
            c6 = 0;
            value = closure_5;
            const obj8 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId };
            const obj5 = closure_132_1(closure_132_2[4]);
            obj5.dispatch(obj8);
            c8 = 3;
            return { value, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const obj12 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId };
            obj = closure_132_1(closure_132_2[4]);
            obj.dispatch(obj12);
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (0 === c6) {
            c8 = 3;
            throw tmp19;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _removeSubscriptionGroupInvite() {
  obj = _asyncToGenerator(async (subscriptionId, subscriptionGroupMemberId, arg2) => {
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let code;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              value = tmp4;
              subscriptionGroupMemberId = value;
              value = undefined;
              const obj4 = { type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: value };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj4);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c7 = 2;
              c8 = 1;
              const obj5 = { url: Endpoints.BILLING_SUBSCRIPTION_INVITE(subscriptionId, subscriptionGroupMemberId), rejectWithError: true };
              const obj6 = { value: del(obj5), done: false };
              return obj6;
            }
          } else if (1 === c7) {
            c6 = 0;
            value = closure_5;
            const body = value.body;
            const obj7 = { type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE", subscriptionGroupMemberId, errorCode: code, subscriptionId };
            code = undefined;
            const dispatch = closure_132_1(closure_132_2[4]).dispatch;
            closure_132_1(closure_132_2[4]);
            if (body != null) {
              code = body.code;
            }
            dispatch(obj7);
            c8 = 3;
            return { value, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const obj11 = { type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS", subscriptionId, subscriptionGroupMemberId };
            obj = closure_132_1(closure_132_2[4]);
            obj.dispatch(obj11);
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
        } catch (tmp25) {
          closure_5 = tmp25;
          if (0 === c6) {
            c8 = 3;
            throw tmp25;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchPremiumGroupInvites() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            body = undefined;
            const obj8 = DispatcherDefault;
            obj8.dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.PREMIUM_GROUP_INVITES, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj4 = closure_129_1(closure_129_2[4]);
            obj4.dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value.body;
            const obj9 = { type: "PREMIUM_GROUP_INVITES_FETCH_SUCCESS", invites: body };
            obj = closure_129_1(closure_129_2[4]);
            obj.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        let closure_2 = tmp16;
        if (0 === c3) {
          c5 = 3;
          throw tmp16;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchPremiumGroupInvite() {
  obj = _asyncToGenerator(async (subscriptionGroupMemberId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              status2 = tmp4;
              body = undefined;
              const obj4 = { type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId };
              const obj8 = DispatcherDefault;
              obj8.dispatch(obj4);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c6 = 2;
              c7 = 1;
              const obj5 = { url: Endpoints.PREMIUM_GROUP_INVITE(subscriptionGroupMemberId), rejectWithError: true };
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              status2 = closure_4;
              const obj7 = { type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId, status };
              status = undefined;
              const dispatch = closure_131_1(closure_131_2[4]).dispatch;
              closure_131_1(closure_131_2[4]);
              if (status2 != null) {
                status = status2.status;
              }
              if (status == null) {
                status = 0;
              }
              dispatch(obj7);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const obj10 = { type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId, invite: body };
              obj = closure_131_1(closure_131_2[4]);
              obj.dispatch(obj10);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp23) {
          closure_4 = tmp23;
          if (0 === c5) {
            c7 = 3;
            throw tmp23;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupActionCreators.tsx");

export const fetchPremiumGroupMembership = function fetchPremiumGroupMembership() {
  return obj(...arguments);
};
export const fetchEligibleUsers = function fetchEligibleUsers() {
  return obj(...arguments);
};
export const inviteUsersToSubscriptionGroup = function inviteUsersToSubscriptionGroup() {
  return obj(...arguments);
};
export const removeUserFromSubscriptionGroup = function removeUserFromSubscriptionGroup() {
  return obj(...arguments);
};
export const fetchSubscriptionGroupMembers = function fetchSubscriptionGroupMembers() {
  return obj(...arguments);
};
export const acceptSubscriptionGroupInvite = function acceptSubscriptionGroupInvite() {
  return obj(...arguments);
};
export const removeSubscriptionGroupInvite = function removeSubscriptionGroupInvite() {
  return obj(...arguments);
};
export const fetchPremiumGroupInvites = function fetchPremiumGroupInvites() {
  return obj(...arguments);
};
export const fetchPremiumGroupInvite = function fetchPremiumGroupInvite() {
  return obj(...arguments);
};
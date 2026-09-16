// === Module 13594: PremiumGroupActionCreators ===

// Module 13594 (PremiumGroupActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserRecord from "UserRecord" /* 1386 */;
import SubscriptionGroupMemberRecord from "SubscriptionGroupMemberRecord" /* 13595 */;

require = fn;
let closure_7 = async function _fetchPremiumGroupMembership() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          let body;
          DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: constants.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          const obj7 = { value: HTTP.get(obj5), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_129_1(closure_129_2[4]).dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" });
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        body = value.body;
        if (null != body) {
          const obj9 = { type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS", membership: null };
          const obj11 = { subscriptionId: body.subscription_id, memberType: body.member_type, subscriptionStatus: body.subscription_status, currentPeriodEnd: null };
          const _Date = Date;
          const date = new Date(body.current_period_end);
          obj11.currentPeriodEnd = date;
          obj9.membership = obj11;
          closure_129_1(closure_129_2[4]).dispatch(obj9);
          const obj2 = closure_129_1(closure_129_2[4]);
        } else {
          closure_129_1(closure_129_2[4]).dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" });
          const obj = closure_129_1(closure_129_2[4]);
        }
        c3 = 0;
        c5 = 3;
      }
    } catch (tmp32) {
      closure_2 = tmp32;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp32;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_8 = async function _fetchEligibleUsers(arg0) {
  closure_0 = arg0;
  closure_3 = arg3;
  c8 = 0;
  c9 = 0;
  return (async (arg0, value, arg2, arg3) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(closure_0), query: null, rejectWithError: true };
    const obj4 = { index, limit: null, search_query: null, include_ineligible: true };
    limit = closure_3;
    if (closure_3 == null) {
      limit = 10;
    }
    obj4.limit = limit;
    obj4.search_query = search_query;
    request.query = obj4;
    await HTTP.get(request);
    const body = value.body;
    const users = body.users;
    const next_index = body.next_index;
    const ineligible_users = body.ineligible_users;
    closure_5 = 0;
    const items = [];
    closure_5 = HermesBuiltin.arraySpread(users.map((item) => Object.assign(new limit(item), { eligible: true })), closure_5);
    closure_6 = ineligible_users;
    if (ineligible_users == null) {
      closure_6 = [];
    }
    const obj = { users: null, nextIndex: null };
    closure_5 = HermesBuiltin.arraySpread(closure_6.map((item) => Object.assign(new limit(item), { eligible: false })), closure_5);
    obj.users = items;
    obj.nextIndex = next_index;
    return obj;
  })();
};
let closure_9 = async function _inviteUsersToSubscriptionGroup(arg0) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = closure_0;
            closure_130_1 = undefined;
            DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.BILLING_SUBSCRIPTION_INVITES(closure_0), body: null, rejectWithError: true };
            const obj5 = { user_ids };
            request.body = obj5;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_131_1(closure_131_2[4]).dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" });
          c7 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_1 = value;
          const obj9 = { type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: closure_130_0 };
          closure_131_1(closure_131_2[4]).dispatch(obj9);
          const obj11 = { invitedUsers: closure_130_1.body.invited_users, ineligibleUsers: closure_130_1.body.ineligible_users };
          c5 = 0;
          c7 = 3;
          const obj = { value: obj11, done: true };
          return obj;
        }
      } catch (tmp13) {
        closure_4 = tmp13;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp13;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_10 = async function _removeUserFromSubscriptionGroup(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
          c5 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.BILLING_SUBSCRIPTION_REMOVE_USER(closure_0, closure_1), rejectWithError: true };
          c6 = 2;
          c7 = 1;
          const obj6 = { value: HTTP.del(obj4), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_2 = closure_4;
        closure_131_1(closure_131_2[4]).dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" });
        c7 = 3;
        const obj7 = { value: closure_130_2, done: true };
        return obj7;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_130_1 = value;
        const obj9 = { type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: closure_130_0 };
        closure_131_1(closure_131_2[4]).dispatch(obj9);
        c5 = 0;
        c7 = 3;
        const obj11 = { value: closure_130_1, done: true };
        return obj11;
      }
    } catch (tmp21) {
      closure_4 = tmp21;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp21;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_11 = async function _fetchSubscriptionGroupMembers(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: Endpoints.BILLING_SUBSCRIPTION_MEMBERS(closure_0), rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj6 = { value: HTTP.get(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_130_1(closure_130_2[4]).dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" });
        c6 = 3;
        const obj7 = { value: [], done: true };
        return obj7;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        const body = value.body;
        closure_129_0 = body.map(closure_130_5.createFromServer);
        closure_129_1 = closure_129_0.find((isPrimary) => isPrimary.isPrimary());
        closure_130_1(closure_130_2[6])(null != closure_129_1, "Primary member not found in premium group");
        const obj10 = { type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS", members: null };
        const obj12 = { primary: closure_129_1.user, members: null, invitedUsers: null };
        const found = closure_129_0.filter((isMember) => isMember.isMember());
        obj12.members = found.map((user) => user.user);
        const found1 = closure_129_0.filter((isInvited) => isInvited.isInvited());
        obj12.invitedUsers = found1.map((user) => user.user);
        obj10.members = obj12;
        closure_130_1(closure_130_2[4]).dispatch(obj10);
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_0, done: true };
        return obj;
      }
    } catch (tmp13) {
      closure_3 = tmp13;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp13;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_12 = async function _acceptSubscriptionGroupInvite(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = subscriptionGroupMemberId;
            closure_131_1 = undefined;
            const obj4 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId };
            DispatcherDefault.dispatch(obj4);
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: Endpoints.BILLING_SUBSCRIPTION_INVITE(closure_0, closure_1), rejectWithError: true };
            c7 = 2;
            c8 = 1;
            const obj7 = { value: HTTP.patch(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_2 = closure_5;
          const obj8 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: closure_131_0 };
          closure_132_1(closure_132_2[4]).dispatch(obj8);
          c8 = 3;
          const obj9 = { value: closure_131_2, done: true };
          return obj9;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_131_1 = value;
          const obj12 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: closure_131_0 };
          closure_132_1(closure_132_2[4]).dispatch(obj12);
          c6 = 0;
          c8 = 3;
          const obj13 = { value: closure_131_1, done: true };
          return obj13;
        }
      } catch (tmp22) {
        closure_5 = tmp22;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp22;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_13 = async function _removeSubscriptionGroupInvite(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = closure_0;
            closure_131_1 = subscriptionGroupMemberId;
            closure_131_2 = undefined;
            const obj4 = { type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId };
            DispatcherDefault.dispatch(obj4);
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: Endpoints.BILLING_SUBSCRIPTION_INVITE(closure_0, closure_1), rejectWithError: true };
            c7 = 2;
            c8 = 1;
            const obj7 = { value: HTTP.del(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_3 = closure_5;
          const obj8 = { type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE", subscriptionGroupMemberId: closure_131_1, errorCode: null, subscriptionId: null };
          const body = closure_131_3.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          obj8.errorCode = code;
          obj8.subscriptionId = closure_131_0;
          closure_132_1(closure_132_2[4]).dispatch(obj8);
          c8 = 3;
          const obj9 = { value: closure_131_3, done: true };
          return obj9;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_131_2 = value;
          const obj12 = { type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS", subscriptionId: closure_131_0, subscriptionGroupMemberId: closure_131_1 };
          closure_132_1(closure_132_2[4]).dispatch(obj12);
          c6 = 0;
          c8 = 3;
          const obj13 = { value: closure_131_2, done: true };
          return obj13;
        }
      } catch (tmp27) {
        closure_5 = tmp27;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp27;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_14 = async function _fetchPremiumGroupInvites() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.PREMIUM_GROUP_INVITES, rejectWithError: true });
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[4]).dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_FAIL" });
    c5 = 3;
    closure_129_1(closure_129_2[4]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const body = value.body;
    closure_129_1(closure_129_2[4]).dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_SUCCESS", invites: body });
    c3 = 0;
    closure_129_1(closure_129_2[4]);
  }
  return value;
};
let closure_15 = async function _fetchPremiumGroupInvite() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0) => {
    closure_3 = tmp3;
    closure_130_0 = subscriptionGroupMemberId;
    DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: Endpoints.PREMIUM_GROUP_INVITE(subscriptionGroupMemberId), rejectWithError: true });
    if (1 === tmp7) {
      c5 = 0;
      closure_130_2 = closure_4;
      const obj8 = { type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: closure_130_0, status: null };
      status = undefined;
      if (closure_130_2 != null) {
        status = closure_130_2.status;
      }
      if (status == null) {
        status = 0;
      }
      obj8.status = status;
      closure_131_1(closure_131_2[4]).dispatch(obj8);
      c7 = 3;
      closure_131_1(closure_131_2[4]);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      closure_131_1(closure_131_2[4]).dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: closure_130_0, invite: body });
      c5 = 0;
      closure_131_1(closure_131_2[4]);
    }
    return value;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupActionCreators.tsx");

export const fetchPremiumGroupMembership = function fetchPremiumGroupMembership() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchEligibleUsers = function fetchEligibleUsers() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const inviteUsersToSubscriptionGroup = function inviteUsersToSubscriptionGroup() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeUserFromSubscriptionGroup = function removeUserFromSubscriptionGroup() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSubscriptionGroupMembers = function fetchSubscriptionGroupMembers() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acceptSubscriptionGroupInvite = function acceptSubscriptionGroupInvite() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeSubscriptionGroupInvite = function removeSubscriptionGroupInvite() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPremiumGroupInvites = function fetchPremiumGroupInvites() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPremiumGroupInvite = function fetchPremiumGroupInvite() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
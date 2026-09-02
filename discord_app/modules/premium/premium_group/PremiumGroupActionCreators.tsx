// === Module 13369: _fetchPremiumGroupMembership ===

// Module 13369 (_fetchPremiumGroupMembership)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createdAt" /* 1934 */;
import closure_5 from "createFromServer" /* 13370 */;
import { Endpoints } from "ME" /* 673 */;

const require = arg1;
function _fetchPremiumGroupMembership() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let body = tmp7;
            body = undefined;
            closure_1_1(closure_1_2[4]).dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
            c3 = 1;
            const HTTP = closure_1_0(closure_1_2[5]).HTTP;
            obj1 = { url: null, rejectWithError: true };
            obj1[0] = closure_1_6.PREMIUM_GROUP_MEMBERSHIP;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          let obj5 = callback(706);
          obj5.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" });
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          body = arg1.body;
          if (null != body) {
            obj1 = callback(706);
            const obj4 = { type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS", membership: null };
            obj5 = { subscriptionId: null, memberType: null, subscriptionStatus: null, currentPeriodEnd: null };
            obj5[0] = body.subscription_id;
            obj5[1] = body.member_type;
            obj5[2] = body.subscription_status;
            const _Date = Date;
            const date = new Date(body.current_period_end);
            obj5[3] = date;
            obj4[1] = obj5;
            obj1.dispatch(obj4);
          } else {
            obj = callback(706);
            obj.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" });
          }
          c3 = 0;
          c5 = 3;
        }
      } catch (tmp32) {
        dependencyMap = tmp32;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp32;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchEligibleUsers() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c8 = 0;
    c9 = 0;
    return (function*(arg0, body) {
      c7 = 0;
      const HTTP = callback(table[5]).HTTP;
      obj1 = { url: null, query: null, rejectWithError: true };
      obj1[0] = closure_1_6.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(body);
      const obj2 = { index: null, limit: null, search_query: null, include_ineligible: true };
      obj2[0] = users;
      c4 = ineligible_users;
      if (ineligible_users == null) {
        c4 = 10;
      }
      obj2[1] = c4;
      obj2[2] = next_index;
      obj1[1] = obj2;
      yield HTTP.get(obj1);
      body = body.body;
      users = body.users;
      next_index = body.next_index;
      ineligible_users = body.ineligible_users;
      closure_5 = 0;
      const items = [];
      closure_5 = HermesBuiltin.arraySpread(users.map((arg0) => Object.assign(new c4(arg0), { eligible: true })), closure_5);
      closure_6 = ineligible_users;
      if (ineligible_users == null) {
        closure_6 = [];
      }
      const obj = { users: null, nextIndex: null };
      closure_5 = HermesBuiltin.arraySpread(closure_6.map((arg0) => Object.assign(new c4(arg0), { eligible: false })), closure_5);
      obj[0] = items;
      obj[1] = next_index;
      return obj;
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _inviteUsersToSubscriptionGroup() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let lib;
              lib(closure_1_2[4]).dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
              c5 = 1;
              const HTTP = callback(closure_1_2[5]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = c6.BILLING_SUBSCRIPTION_INVITES(callback);
              let obj2 = { user_ids: null };
              obj2[0] = lib;
              obj1[1] = obj2;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            obj2 = lib(706);
            obj2.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" });
            c7 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            let obj6 = lib(706);
            const obj5 = { type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: null };
            obj5[1] = callback;
            obj6.dispatch(obj5);
            obj6 = { invitedUsers: null, ineligibleUsers: null };
            obj6[0] = lib.body.invited_users;
            obj6[1] = lib.body.ineligible_users;
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = obj6;
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
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeUserFromSubscriptionGroup() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let callback2;
              callback2(closure_1_2[4]).dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
              c5 = 1;
              const HTTP = callback(closure_1_2[5]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = c6.BILLING_SUBSCRIPTION_REMOVE_USER(callback, callback2);
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            dependencyMap = closure_4;
            let obj4 = callback2(706);
            obj4.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" });
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = dependencyMap;
            return obj3;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            callback2 = arg1;
            obj = callback2(706);
            const obj5 = { type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: null };
            obj5[1] = callback;
            obj.dispatch(obj5);
            c5 = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = callback2;
            return obj6;
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
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSubscriptionGroupMembers() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === createFromServer) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              let lib2 = tmp7;
              let lib;
              lib2 = undefined;
              closure_1_1(closure_1_2[4]).dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
              c4 = 1;
              const HTTP = lib(closure_1_2[5]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = c6.BILLING_SUBSCRIPTION_MEMBERS(lib);
              createFromServer = 2;
              c6 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            obj2 = lib2(706);
            obj2.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" });
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = [];
            return obj3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            body = body.body;
            lib = body.map(createFromServer.createFromServer);
            lib2 = lib.find((isPrimary) => isPrimary.isPrimary());
            lib2(38)(null != lib2, "Primary member not found in premium group");
            const obj5 = { type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS", members: null };
            const obj6 = { primary: null, members: null, invitedUsers: null };
            obj6[0] = lib2.user;
            const found = lib.filter((isMember) => isMember.isMember());
            obj6[1] = found.map((user) => user.user);
            const found1 = lib.filter((isInvited) => isInvited.isInvited());
            obj6[2] = found1.map((user) => user.user);
            obj5[1] = obj6;
            lib2(706).dispatch(obj5);
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = lib;
            return obj;
          }
        } catch (tmp13) {
          closure_3 = tmp13;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp13;
          } else {
            createFromServer = tmp;
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _acceptSubscriptionGroupInvite() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              const callback = dependencyMap;
              let callback2;
              obj1 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: null };
              obj1[1] = dependencyMap;
              callback2(706).dispatch(obj1);
              c6 = 1;
              const HTTP = callback(527).HTTP;
              const obj2 = { url: null, rejectWithError: true };
              obj2[0] = c6.BILLING_SUBSCRIPTION_INVITE(callback, callback2);
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            dependencyMap = closure_5;
            let obj4 = callback2(706);
            obj4 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: null };
            obj4[1] = callback;
            obj4.dispatch(obj4);
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = dependencyMap;
            return obj5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            callback2 = arg1;
            obj = callback2(706);
            const obj7 = { type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: null };
            obj7[1] = callback;
            obj.dispatch(obj7);
            c6 = 0;
            c8 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = callback2;
            return obj8;
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
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeSubscriptionGroupInvite() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let body = tmp7;
              const callback2 = dependencyMap;
              dependencyMap = undefined;
              obj1 = { type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: null };
              obj1[1] = dependencyMap;
              callback2(706).dispatch(obj1);
              c6 = 1;
              const HTTP = callback(527).HTTP;
              const obj2 = { url: null, rejectWithError: true };
              obj2[0] = c6.BILLING_SUBSCRIPTION_INVITE(callback, callback2);
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            body = closure_5;
            let obj4 = callback2(706);
            obj4 = { type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE", subscriptionGroupMemberId: null, errorCode: null, subscriptionId: null };
            obj4[1] = callback2;
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            obj4[2] = code;
            obj4[3] = callback;
            obj4.dispatch(obj4);
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            dependencyMap = arg1;
            obj = callback2(706);
            const obj7 = { type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS", subscriptionId: null, subscriptionGroupMemberId: null };
            obj7[1] = callback;
            obj7[2] = callback2;
            obj.dispatch(obj7);
            c6 = 0;
            c8 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = dependencyMap;
            return obj8;
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
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPremiumGroupInvites() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp3;
    closure_1_1(closure_1_2[4]).dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_START" });
    c3 = 1;
    const HTTP = closure_1_0(closure_1_2[5]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_6.PREMIUM_GROUP_INVITES;
    yield HTTP.get(obj1);
    if (1 === tmp7) {
      c3 = 0;
      let obj3 = callback(706);
      obj3.dispatch({ type: "PREMIUM_GROUP_INVITES_FETCH_FAIL" });
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const body = arg1.body;
      const obj = callback(706);
      obj3 = { type: "PREMIUM_GROUP_INVITES_FETCH_SUCCESS", invites: null };
      obj3[1] = body;
      obj.dispatch(obj3);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPremiumGroupInvite() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp3;
      obj1 = { type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: null };
      obj1[1] = callback;
      closure_1_1(closure_1_2[4]).dispatch(obj1);
      c5 = 1;
      const HTTP = callback(closure_1_2[5]).HTTP;
      const obj2 = { url: null, rejectWithError: true };
      obj2[0] = c6.PREMIUM_GROUP_INVITE(callback);
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c5 = 0;
        let status = closure_4;
        const obj3 = body(status[4]);
        const obj4 = { type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: null, status: null };
        obj4[1] = callback;
        status = undefined;
        if (status != null) {
          status = status.status;
        }
        body = status;
        if (status == null) {
          body = 0;
        }
        obj4[2] = body;
        obj3.dispatch(obj4);
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        const obj = body(status[4]);
        const obj5 = { type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: null, invite: null };
        obj5[1] = callback;
        obj5[2] = body;
        obj.dispatch(obj5);
        c5 = 0;
      }
      c5 = 0;
      return body;
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/premium/premium_group/PremiumGroupActionCreators.tsx");

export const fetchPremiumGroupMembership = function fetchPremiumGroupMembership() {
  const self = this;
  const apply = _fetchPremiumGroupMembership.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchEligibleUsers = function fetchEligibleUsers() {
  const self = this;
  const apply = _fetchEligibleUsers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const inviteUsersToSubscriptionGroup = function inviteUsersToSubscriptionGroup() {
  const self = this;
  const apply = _inviteUsersToSubscriptionGroup.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeUserFromSubscriptionGroup = function removeUserFromSubscriptionGroup() {
  const self = this;
  const apply = _removeUserFromSubscriptionGroup.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSubscriptionGroupMembers = function fetchSubscriptionGroupMembers(subscriptionId) {
  const self = this;
  const apply = _fetchSubscriptionGroupMembers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acceptSubscriptionGroupInvite = function acceptSubscriptionGroupInvite() {
  const self = this;
  const apply = _acceptSubscriptionGroupInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeSubscriptionGroupInvite = function removeSubscriptionGroupInvite() {
  const self = this;
  const apply = _removeSubscriptionGroupInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPremiumGroupInvites = function fetchPremiumGroupInvites() {
  const self = this;
  const apply = _fetchPremiumGroupInvites.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPremiumGroupInvite = function fetchPremiumGroupInvite() {
  const self = this;
  const apply = _fetchPremiumGroupInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
// === Module 5626: GuildJoinRequestActionCreators ===

// Module 5626 (GuildJoinRequestActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4464 */;
import GuildJoinRequestAnalyticUtils from "GuildJoinRequestAnalyticUtils" /* 5628 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5627 */;

require = fn;
let closure_9 = async function _fetchGuildJoinRequests(arg0) {
  let force = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  let iter = (async (arg0) => {
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
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            ({ guildId: closure_130_0, status } = force);
            if (status === undefined) {
              status = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
            }
            closure_130_1 = status;
            ({ before: closure_130_2, after: closure_130_3, limit } = force);
            if (limit === undefined) {
              limit = MemberVerificationTypes.MAX_RESULTS_PER_PAGE;
            }
            closure_130_4 = limit;
            let flag = force.force;
            if (flag === undefined) {
              flag = false;
            }
            closure_130_5 = flag;
            closure_130_6 = undefined;
            closure_130_7 = undefined;
            let total;
            closure_130_9 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp31 = closure_130_5;
            if (!closure_130_5) {
              tmp31 = !closure_131_5.hasFetched(closure_130_0);
            }
            closure_130_6 = tmp31;
            if (!closure_131_5.isFetching()) {
              if (closure_130_6) {
                closure_131_1(closure_131_2[6]).dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
                c5 = 1;
                const HTTP = closure_131_0(closure_131_2[7]).HTTP;
                const request = { url: closure_131_8.GUILD_JOIN_REQUESTS(closure_130_0), query: null, rejectWithError: null };
                const obj7 = { status: closure_130_1, limit: closure_130_4, before: closure_130_2, after: closure_130_3 };
                request.query = obj7;
                const obj6 = closure_131_1(closure_131_2[6]);
                request.rejectWithError = closure_131_0(closure_131_2[7]).rejectWithMigratedError();
                c6 = 3;
                c7 = 1;
                const obj8 = { value: HTTP.get(request), done: false };
                return obj8;
              }
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (2 === tmp7) {
          c5 = 0;
          closure_130_10 = closure_4;
          closure_131_1(closure_131_2[6]).dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" });
          throw closure_130_10;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_7 = value;
          total = closure_130_7.body.total;
          const guild_join_requests = closure_130_7.body.guild_join_requests;
          closure_1 = guild_join_requests;
          if (guild_join_requests == null) {
            closure_1 = [];
          }
          closure_130_9 = closure_1.map(closure_131_6);
          const obj11 = { type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS", status: closure_130_1, requests: closure_130_9, total, limit: closure_130_4, guildId: closure_130_0 };
          closure_131_1(closure_131_2[6]).dispatch(obj11);
          c5 = 0;
          c7 = 3;
          const obj12 = { value: closure_130_7, done: true };
          return obj12;
        }
      } catch (tmp57) {
        closure_4 = tmp57;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp57;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_10 = async function _fetchGuildJoinRequestsForUser() {
  closure_4 = tmp2;
  closure_3 = tmp5;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_8.GUILD_JOIN_REQUESTS_FOR_USER(closure_0, closure_1), rejectWithError: HTTPUtils.rejectWithMigratedError() });
  closure_131_2 = value;
  const body = closure_131_2.body;
  dependencyMap = body;
  if (body == null) {
    dependencyMap = [];
  }
  closure_131_3 = dependencyMap.map(closure_132_6);
  closure_132_1(closure_132_2[6]).dispatch({ type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId: closure_131_0, userId: closure_131_1, requests: closure_131_3 });
  return closure_131_2;
};
let closure_11 = async function _removeGuildJoinRequest(arg0) {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: React6.GUILD_MEMBER_REQUEST_TO_JOIN(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.del(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        throw closure_3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_1 = value;
        const obj7 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_129_0, request: null };
        closure_130_1(closure_130_2[6]).dispatch(obj7);
        c4 = 0;
        c6 = 3;
        const obj8 = { value: closure_129_1, done: true };
        return obj8;
      }
    } catch (tmp16) {
      closure_3 = tmp16;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp16;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_12 = async function _ackUserGuildJoinRequest(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          closure_3 = tmp4;
          closure_2 = tmp8;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          c5 = 2;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: React6.GUILD_JOIN_REQUEST_ACK(closure_0, closure_1), rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c6 = 3;
          c7 = 1;
          const obj6 = { value: HTTP.post(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        c5 = 0;
        const obj8 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: closure_130_1, guildId: closure_130_0 };
        closure_131_1(closure_131_2[6]).dispatch(obj8);
        throw closure_4;
      } else if (2 === tmp8) {
        c5 = 0;
        const obj10 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: closure_130_1, guildId: closure_130_0 };
        closure_131_1(closure_131_2[6]).dispatch(obj10);
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        const obj11 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: closure_130_1, guildId: closure_130_0 };
        closure_131_1(closure_131_2[6]).dispatch(obj11);
        c7 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        c5 = 0;
        const obj13 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: closure_130_1, guildId: closure_130_0 };
        closure_131_1(closure_131_2[6]).dispatch(obj13);
        c7 = 3;
        const obj14 = { value, done: true };
        return obj14;
      }
    } catch (tmp40) {
      closure_4 = tmp40;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp40;
      } else if (tmp2 === tmp42) {
        c6 = tmp2;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_13 = async function _updateGuildJoinRequest() {
  const result = closure_134_0(closure_134_2[8]).trackMemberApplicationAction({ guildId: closure_133_0, actionType: closure_133_3, applicationUserId: closure_133_1 });
  const HTTP = closure_134_0(closure_134_2[7]).HTTP;
  const request = { url: closure_134_8.GUILD_JOIN_REQUEST(closure_133_0, closure_133_2), body: { action: closure_133_3, rejection_reason: closure_133_4 }, rejectWithError: null };
  closure_134_0(closure_134_2[8]);
  request.rejectWithError = closure_134_0(closure_134_2[7]).rejectWithMigratedError();
  closure_134_0(closure_134_2[7]);
  await HTTP.patch(request).catch((error) => {
    let body = error;
    if (error) {
      body = error.body;
    }
    if (body) {
      body = error.body.code === constants.REQUEST_TO_JOIN_USER_INELIGIBLE;
    }
    if (body) {
      const obj2 = { title: null, body: null };
      const intl = closure_1_0(1115).intl;
      obj2.title = intl.string(closure_1_0(1115).t.DxJj4e);
      const intl2 = closure_1_0(1115).intl;
      obj2.body = intl2.string(closure_1_0(1115).t.rSAOk9);
      closure_1_1(4983).show(obj2);
      const obj = closure_1_1(4983);
    }
    return Promise.reject(error);
  });
  closure_133_5 = value;
  closure_134_1(closure_134_2[6]).dispatch({ type: "GUILD_JOIN_REQUEST_UPDATE", guildId: closure_133_0, status: closure_133_5.body.application_status, request: closure_133_5.body });
  await "HermesInternal";
  closure_6 = tmp3;
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  closure_133_2 = dependencyMap;
  let APPROVED = closure_3;
  if (closure_3 === undefined) {
    APPROVED = require("MemberVerificationTypes").GuildJoinRequestApplicationStatuses.APPROVED;
  }
  closure_133_3 = APPROVED;
  closure_133_4 = closure_4;
  return "PX_16";
};
let closure_14 = async function _resetGuildJoinRequest(arg0) {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          let body;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: React6.GUILD_MEMBER_REQUEST_TO_JOIN(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.post(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        throw closure_3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        body = value.body;
        const obj7 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_129_0, request: body };
        closure_130_1(closure_130_2[6]).dispatch(obj7);
        c4 = 0;
        c6 = 3;
        const obj8 = { value: body, done: true };
        return obj8;
      }
    } catch (tmp17) {
      closure_3 = tmp17;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp17;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_15 = async function _fetchRequestToJoinGuilds() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: constants.USER_JOIN_REQUEST_GUILDS, rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c2 = 1;
          c3 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_128_0 = value;
        const obj7 = { type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: closure_128_0.body };
        closure_129_1(closure_129_2[6]).dispatch(obj7);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
let closure_16 = async function _fetchJoinRequestForInterview() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_8.JOIN_REQUEST(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() });
  closure_129_0 = value;
  closure_129_1 = closure_130_6(closure_129_0.body);
  closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: closure_129_1 });
  return closure_129_0;
};
let closure_17 = async function _createOrEnterJoinRequestInterview(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_130_1 = flag;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const HTTP = closure_131_0(closure_131_2[7]).HTTP;
          const obj5 = { url: closure_131_8.JOIN_REQUEST_INTERVIEW(closure_130_0), rejectWithError: closure_131_0(closure_131_2[7]).rejectWithMigratedError() };
          c4 = 2;
          c5 = 1;
          const obj6 = { value: HTTP.post(obj5), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_130_2 = value;
        closure_130_3 = closure_131_4(closure_130_2.body);
        const obj9 = { type: "CHANNEL_CREATE", channel: closure_130_3 };
        closure_131_1(closure_131_2[6]).dispatch(obj9);
        if (closure_130_1) {
          const privateChannel = closure_131_1(closure_131_2[11]).selectPrivateChannel(closure_130_3.id);
          const obj = closure_131_1(closure_131_2[11]);
        }
        c5 = 3;
        const obj10 = { value: closure_130_3.id, done: true };
        return obj10;
      }
    } catch (tmp15) {
      c5 = tmp;
      throw tmp15;
    }
  }
};
let closure_4 = fn(1962).createChannelRecordFromServer;
const joinRequestFromServer = fn(4462).joinRequestFromServer;
const Constants = fn(1074);
({ AbortCodes: closure_7, Endpoints: closure_8 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestActionCreators.tsx");

export default {
  fetchGuildJoinRequests() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchGuildJoinRequestsForUser() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  ackUserGuildJoinRequest() {
    const self = this;
    const apply = closure_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  removeGuildJoinRequest() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateGuildJoinRequest() {
    const self = this;
    const apply = closure_13.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  resetGuildJoinRequest() {
    const self = this;
    const apply = closure_14.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchRequestToJoinGuilds() {
    const self = this;
    const apply = closure_15.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  setSelectedApplicationTab(guildId, applicationTab) {
    DispatcherDefault.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId, applicationTab });
  },
  setSelectedSortOrder(guildId, sortOrder, applicationStatus) {
    DispatcherDefault.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId, sortOrder, applicationStatus });
  },
  setSelectedGuildJoinRequest(guildId, request) {
    if (null != request) {
      const obj4 = { guildId, applicationStatus: null, applicationUserId: null };
      ({ applicationStatus: obj2.applicationStatus, userId: obj2.applicationUserId } = request);
      const result = GuildJoinRequestAnalyticUtils.trackMemberApplicationViewed(obj4);
    }
    DispatcherDefault.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId, request });
    const obj6 = { type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId, request };
  },
  fetchJoinRequestForInterview() {
    const self = this;
    const apply = closure_16.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  createOrEnterJoinRequestInterview() {
    const self = this;
    const apply = closure_17.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
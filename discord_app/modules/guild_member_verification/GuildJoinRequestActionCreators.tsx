// discord_app/modules/guild_member_verification/GuildJoinRequestActionCreators.tsx
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE";
import { createChannelRecordFromServer as closure_4 } from "createChannelRecord";
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";
import { joinRequestFromServer } from "handleGatewayJoinRequestUpdate";
import ME from "ME";
import { dispatcher } from "../../Dispatcher.tsx";
import { trackMemberApplicationViewed } from "GuildJoinRequestAnalyticUtils.tsx";

let error;
let metroImportAll;
const require = arg1;
function _fetchGuildJoinRequests() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c2;
      let c3;
      let limit;
      let status;
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
              c3 = tmp3;
              let dependencyMap = tmp7;
              let callback;
              let lib;
              dependencyMap = undefined;
              c3 = undefined;
              limit = undefined;
              let c5;
              ({ guildId: c0, status } = callback);
              if (status === undefined) {
                status = callback(outer1_2[5]).GuildJoinRequestApplicationStatuses.SUBMITTED;
              }
              lib = status;
              ({ before: c2, after: c3, limit } = callback);
              if (limit === undefined) {
                limit = callback(outer1_2[5]).MAX_RESULTS_PER_PAGE;
              }
              let flag = tmp70.force;
              if (flag === undefined) {
                flag = false;
              }
              c5 = flag;
              c6 = undefined;
              c7 = undefined;
              let total;
              let closure_9;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let tmp31 = c5;
              if (!c5) {
                tmp31 = !c5.hasFetched(callback);
              }
              c6 = tmp31;
              if (!c5.isFetching()) {
                if (c6) {
                  let obj5 = lib(709);
                  obj5.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
                  c5 = 1;
                  const HTTP = callback(530).HTTP;
                  const obj2 = { url: null, query: null, rejectWithError: null };
                  obj2[0] = total.GUILD_JOIN_REQUESTS(callback);
                  const obj3 = { status: null, limit: null, before: null, after: null };
                  obj3[0] = lib;
                  obj3[1] = limit;
                  obj3[2] = dependencyMap;
                  obj3[3] = c3;
                  obj2[1] = obj3;
                  obj2[2] = callback(530).rejectWithMigratedError();
                  c6 = 3;
                  c7 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = HTTP.get(obj2);
                  return obj4;
                }
              }
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (2 === tmp7) {
            c5 = 0;
            let closure_10 = limit;
            obj4 = lib(709);
            obj4.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" });
            throw closure_10;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c7 = arg1;
            total = c7.body.total;
            const guild_join_requests = c7.body.guild_join_requests;
            lib = guild_join_requests;
            if (guild_join_requests == null) {
              lib = [];
            }
            closure_9 = lib.map(c6);
            obj = lib(709);
            const obj6 = { type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS", status: null, requests: null, total: null, limit: null, guildId: null };
            obj6[1] = lib;
            obj6[2] = closure_9;
            obj6[3] = total;
            obj6[4] = limit;
            obj6[5] = callback;
            obj.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = c7;
            return obj7;
          }
        } catch (tmp57) {
          limit = tmp57;
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
  });
  const _fetchGuildJoinRequests = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGuildJoinRequestsForUser() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1) {
      let closure_4 = tmp2;
      let MAX_RESULTS_PER_PAGE = tmp5;
      const HTTP = callback(outer1_2[7]).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_8.GUILD_JOIN_REQUESTS_FOR_USER(callback, callback2);
      obj1[1] = callback(outer1_2[7]).rejectWithMigratedError();
      let closure_2 = yield HTTP.get(obj1);
      const body = closure_2.body;
      closure_2 = body;
      if (body == null) {
        closure_2 = [];
      }
      MAX_RESULTS_PER_PAGE = closure_2.map(c6);
      const obj = callback2(closure_2[6]);
      const obj4 = { type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId: null, userId: null, requests: null };
      obj4[1] = callback;
      obj4[2] = callback2;
      obj4[3] = MAX_RESULTS_PER_PAGE;
      obj.dispatch(obj4);
      return closure_2;
    })();
  });
  const _fetchGuildJoinRequestsForUser = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeGuildJoinRequest() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              let callback2 = tmp7;
              callback2 = undefined;
              let c4 = 1;
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_8.GUILD_MEMBER_REQUEST_TO_JOIN(callback);
              obj1[1] = callback(outer1_2[7]).rejectWithMigratedError();
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            throw MAX_RESULTS_PER_PAGE;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback2 = arg1;
            obj = callback2(table[6]);
            const obj4 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: null, request: null };
            obj4[1] = callback;
            obj.dispatch(obj4);
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = callback2;
            return obj5;
          }
        } catch (tmp16) {
          MAX_RESULTS_PER_PAGE = tmp16;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp16;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _removeGuildJoinRequest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _ackUserGuildJoinRequest() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
              let MAX_RESULTS_PER_PAGE = tmp4;
              const dependencyMap = tmp8;
              let c5 = 2;
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_8.GUILD_JOIN_REQUEST_ACK(callback, callback2);
              obj1[1] = callback(outer1_2[7]).rejectWithMigratedError();
              c6 = 3;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            let obj8 = callback2(709);
            let obj3 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: null, guildId: null };
            obj3[1] = callback2;
            obj3[2] = callback;
            obj8.dispatch(obj3);
            throw closure_4;
          } else if (2 === tmp8) {
            c5 = 0;
            let obj6 = callback2(709);
            const obj4 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: null, guildId: null };
            obj4[1] = callback2;
            obj4[2] = callback;
            obj6.dispatch(obj4);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            obj3 = callback2(709);
            const obj5 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: null, guildId: null };
            obj5[1] = callback2;
            obj5[2] = callback;
            obj3.dispatch(obj5);
            c7 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c5 = 0;
            obj = callback2(709);
            const obj7 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: null, guildId: null };
            obj7[1] = callback2;
            obj7[2] = callback;
            obj.dispatch(obj7);
            c7 = 3;
            obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
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
    })();
  });
  const _ackUserGuildJoinRequest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildJoinRequest() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let MAX_RESULTS_PER_PAGE = arg3;
    let closure_4 = arg4;
    let c7 = 0;
    let c8 = 0;
    const iter = (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
              let closure_6 = tmp3;
              let updateSubmittedGuildJoinRequestTotal = tmp2;
              let APPROVED;
              let closure_4;
              if (APPROVED === undefined) {
                APPROVED = callback(4105).GuildJoinRequestApplicationStatuses.APPROVED;
              }
              updateSubmittedGuildJoinRequestTotal = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj7 = callback(7244);
              const obj2 = { guildId: null, actionType: null, applicationUserId: null };
              obj2[0] = callback;
              obj2[1] = APPROVED;
              obj2[2] = callback2;
              const result = obj7.trackMemberApplicationAction(obj2);
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: null };
              obj3[0] = c8.GUILD_JOIN_REQUEST(callback, dependencyMap);
              const obj4 = { action: null, rejection_reason: null };
              obj4[0] = APPROVED;
              obj4[1] = closure_4;
              obj3[1] = obj4;
              obj3[2] = callback(530).rejectWithMigratedError();
              const obj12 = callback(530);
              c7 = 2;
              c8 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.patch(obj3).catch((body) => {
                if (body) {
                  body = body.body;
                }
                if (body) {
                  body = body.body.code === constants.REQUEST_TO_JOIN_USER_INELIGIBLE;
                }
                if (body) {
                  let obj = callback2(4623);
                  obj = { title: null, body: null };
                  const intl = callback(1236).intl;
                  obj[0] = intl.string(callback(1236).t.DxJj4e);
                  const intl2 = callback(1236).intl;
                  obj[1] = intl2.string(callback(1236).t.rSAOk9);
                  obj.show(obj);
                }
                return Promise.reject(body);
              });
              return obj5;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            updateSubmittedGuildJoinRequestTotal = arg1;
            obj = callback2(709);
            obj7 = { type: "GUILD_JOIN_REQUEST_UPDATE", guildId: null, status: null, request: null };
            obj7[1] = callback;
            obj7[2] = updateSubmittedGuildJoinRequestTotal.body.application_status;
            obj7[3] = updateSubmittedGuildJoinRequestTotal.body;
            obj.dispatch(obj7);
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c8 = tmp;
          throw tmp18;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _updateGuildJoinRequest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resetGuildJoinRequest() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp3;
              body = tmp7;
              body = undefined;
              let c4 = 1;
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_8.GUILD_MEMBER_REQUEST_TO_JOIN(callback);
              obj1[1] = callback(outer1_2[7]).rejectWithMigratedError();
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            throw MAX_RESULTS_PER_PAGE;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = body(table[6]);
            const obj4 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: null, request: null };
            obj4[1] = callback;
            obj4[2] = body;
            obj.dispatch(obj4);
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          }
        } catch (tmp17) {
          MAX_RESULTS_PER_PAGE = tmp17;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp17;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _resetGuildJoinRequest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchRequestToJoinGuilds() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            let body = tmp5;
            body = undefined;
            const HTTP = outer1_0(530).HTTP;
            const obj1 = { url: null, rejectWithError: null };
            obj1[0] = outer1_8.USER_JOIN_REQUEST_GUILDS;
            obj1[1] = outer1_0(530).rejectWithMigratedError();
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          body = arg1;
          obj = callback(709);
          const obj4 = { type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: null };
          obj4[1] = body.body;
          obj.dispatch(obj4);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  });
  const _fetchRequestToJoinGuilds = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchJoinRequestForInterview() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp2;
      let callback = tmp5;
      const HTTP = lib(outer1_2[7]).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_8.JOIN_REQUEST(lib);
      obj1[1] = lib(outer1_2[7]).rejectWithMigratedError();
      lib = yield HTTP.get(obj1);
      callback = callback2(lib.body);
      const obj = callback(table[6]);
      const obj4 = { type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: null };
      obj4[1] = callback;
      obj.dispatch(obj4);
      return lib;
    })();
  });
  const _fetchJoinRequestForInterview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createOrEnterJoinRequestInterview() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let body = tmp2;
      if (flag === undefined) {
        flag = true;
      }
      yield "ct";
      const HTTP = callback(body[7]).HTTP;
      const obj2 = { url: null, rejectWithError: null };
      obj2[0] = closure_8.JOIN_REQUEST_INTERVIEW(callback);
      obj2[1] = callback(body[7]).rejectWithMigratedError();
      body = yield HTTP.post(obj2);
      const user = v0(body.body);
      const obj5 = { type: "CHANNEL_CREATE", channel: null };
      obj5[1] = user;
      flag(body[6]).dispatch(obj5);
      if (flag) {
        const obj = flag(body[11]);
        const privateChannel = obj.selectPrivateChannel(user.id);
      }
      return user.id;
    })();
    iter.next();
    return iter;
  });
  const _createOrEnterJoinRequestInterview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: error, Endpoints: metroImportAll } = ME);
let result = require("updateSubmittedGuildJoinRequestTotal").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestActionCreators.tsx");

export default {
  fetchGuildJoinRequests(arg0) {
    const self = this;
    const apply = _fetchGuildJoinRequests.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchGuildJoinRequestsForUser(guildId, userId) {
    const self = this;
    const apply = _fetchGuildJoinRequestsForUser.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  ackUserGuildJoinRequest(guildId, joinRequestId) {
    const self = this;
    const apply = _ackUserGuildJoinRequest.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  removeGuildJoinRequest(guildId) {
    const self = this;
    const apply = _removeGuildJoinRequest.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateGuildJoinRequest(outer1_2, outer1_1, c3, APPROVED, c4) {
    const self = this;
    const apply = _updateGuildJoinRequest.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  resetGuildJoinRequest(outer1_0) {
    const self = this;
    const apply = _resetGuildJoinRequest.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchRequestToJoinGuilds() {
    const self = this;
    const apply = _fetchRequestToJoinGuilds.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  setSelectedApplicationTab(guildId, applicationTab) {
    let obj = dispatcher;
    obj = { type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId, applicationTab };
    obj.dispatch(obj);
  },
  setSelectedSortOrder(guildId, sortOrder, applicationStatus) {
    let obj = dispatcher;
    obj = { type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId, sortOrder, applicationStatus };
    obj.dispatch(obj);
  },
  setSelectedGuildJoinRequest(guildId, request) {
    if (null != request) {
      let obj = trackMemberApplicationViewed /* trackMemberApplicationViewed */;
      obj = { guildId: null, applicationStatus: null, applicationUserId: null };
      obj[0] = guildId;
      ({ applicationStatus: obj2[1], userId: obj2[2] } = request);
      const result = obj.trackMemberApplicationViewed(obj);
    }
    obj = { type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId, request };
    dispatcher.dispatch(obj);
  },
  fetchJoinRequestForInterview(MAX_RESULTS_PER_PAGE) {
    const self = this;
    const apply = _fetchJoinRequestForInterview.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  createOrEnterJoinRequestInterview(arg0, arg1) {
    const self = this;
    const apply = _createOrEnterJoinRequestInterview.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
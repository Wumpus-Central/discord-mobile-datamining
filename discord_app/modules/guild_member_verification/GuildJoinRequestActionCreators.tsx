// === Module 5938: GuildJoinRequestActionCreators ===

// Module 5938 (GuildJoinRequestActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4706 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import GuildJoinRequestAnalyticUtils from "GuildJoinRequestAnalyticUtils" /* 5940 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5939 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c8, joinRequest;

let metroImportAll;
let metroImportDefault;
let obj = function _fetchGuildJoinRequests() {
  obj = _asyncToGenerator(async (guildId) => {
    let c0;
    let c2;
    let c3;
    let limit;
    let obj7;
    let obj9;
    let status;
    let value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let before;
        let after;
        let flag;
        let closure_6;
        let total;
        let requests;
        c7 = 2;
        if (0 === c6) {
          if (guildId === 1) {
            c7 = 3;
            throw value;
          } else if (guildId === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            guildId = undefined;
            status = undefined;
            before = undefined;
            after = undefined;
            limit = undefined;
            flag = undefined;
            ({ guildId: c0, status } = guildId);
            if (status === undefined) {
              status = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
            }
            ({ before: c2, after: c3, limit } = guildId);
            if (limit === undefined) {
              limit = MemberVerificationTypes.MAX_RESULTS_PER_PAGE;
            }
            flag = guildId.force ?? false;
            closure_6 = undefined;
            value = undefined;
            total = undefined;
            requests = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c6) {
          if (guildId === 1) {
            c7 = 3;
            throw value;
          } else if (guildId === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp28 = flag || !closure_131_5.hasFetched(guildId);
            closure_6 = tmp28;
            if (!closure_131_5.isFetching()) {
              const tmp33 = closure_6;
              if (tmp33) {
                const obj6 = closure_131_1(closure_131_2[6]);
                obj6.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
                c5 = 1;
                const HTTP = closure_131_0(closure_131_2[7]).HTTP;
                const request = { url: closure_131_8.GUILD_JOIN_REQUESTS(guildId), query: obj7, rejectWithError: obj9.rejectWithMigratedError() };
                const get = HTTP.get;
                obj7 = { status, limit, before, after };
                obj9 = closure_131_0(closure_131_2[7]);
                c6 = 3;
                c7 = 1;
                const obj8 = { value: get(request), done: false };
                return obj8;
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (2 === c6) {
          c5 = 0;
          let closure_10 = closure_4;
          const obj5 = closure_131_1(closure_131_2[6]);
          obj5.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" });
          throw closure_10;
        } else if (guildId === 1) {
          c7 = 3;
          throw value;
        } else if (guildId === 2) {
          c5 = 0;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          total = value.body.total;
          const guild_join_requests = value.body.guild_join_requests;
          let closure_1 = guild_join_requests;
          if (guild_join_requests == null) {
            closure_1 = [];
          }
          requests = closure_1.map(closure_131_6);
          const obj11 = { type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS", status, requests, total, limit, guildId };
          obj = closure_131_1(closure_131_2[6]);
          obj.dispatch(obj11);
          c5 = 0;
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
        }
      } catch (tmp54) {
        closure_4 = tmp54;
        if (0 === c5) {
          c7 = 3;
          throw tmp54;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchGuildJoinRequestsForUser() {
  obj = _asyncToGenerator(async (guildId, userId) => {
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj9;
      requests = tmp4;
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: closure_2_8.GUILD_JOIN_REQUESTS_FOR_USER(guildId, userId), rejectWithError: obj9.rejectWithMigratedError() };
      obj9 = HTTPUtils;
      await get(obj4);
      const body = value.body;
      value = body;
      if (body == null) {
        value = [];
      }
      requests = value.map(closure_132_6);
      const obj7 = { type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId, userId, requests };
      obj = closure_132_1(closure_132_2[6]);
      obj.dispatch(obj7);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _removeGuildJoinRequest() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj9;
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
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              const obj4 = { url: closure_2_8.GUILD_MEMBER_REQUEST_TO_JOIN(guildId), rejectWithError: obj9.rejectWithMigratedError() };
              c5 = 2;
              c6 = 1;
              obj9 = HTTPUtils;
              const obj5 = { value: del(obj4), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: null };
            obj = closure_130_1(closure_130_2[6]);
            obj.dispatch(obj7);
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp13) {
          closure_3 = tmp13;
          if (0 === c4) {
            c6 = 3;
            throw tmp13;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _ackUserGuildJoinRequest() {
  obj = _asyncToGenerator(async (guildId, id) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj15;
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
              c5 = 2;
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              const obj5 = { url: closure_2_8.GUILD_JOIN_REQUEST_ACK(guildId, id), rejectWithError: obj15.rejectWithMigratedError() };
              c6 = 3;
              c7 = 1;
              obj15 = HTTPUtils;
              const obj6 = { value: post(obj5), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            const obj8 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id, guildId };
            const obj9 = closure_131_1(closure_131_2[6]);
            obj9.dispatch(obj8);
            throw closure_4;
          } else if (2 === c6) {
            c5 = 0;
            const obj10 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id, guildId };
            const obj7 = closure_131_1(closure_131_2[6]);
            obj7.dispatch(obj10);
            c7 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj11 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id, guildId };
            const obj4 = closure_131_1(closure_131_2[6]);
            obj4.dispatch(obj11);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            const obj13 = { type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id, guildId };
            obj = closure_131_1(closure_131_2[6]);
            obj.dispatch(obj13);
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp36) {
          closure_4 = tmp36;
          if (0 === c5) {
            c7 = 3;
            throw tmp36;
          } else if (1 === tmp38) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updateGuildJoinRequest() {
  obj = _asyncToGenerator(async (guildId, applicationUserId, arg2, arg3) => {
    let closure_5;
    let obj12;
    let obj6;
    let patchResult;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let rejection_reason;
        let APPROVED;
        let tmp;
        c8 = 2;
        if (0 === c7) {
          if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp2;
            rejection_reason = undefined;
            APPROVED = closure_3;
            if (closure_3 === undefined) {
              APPROVED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
            }
            tmp = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp5) {
          if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj5 = { guildId, actionType: APPROVED, applicationUserId };
            const obj8 = closure_134_0(closure_134_2[8]);
            const result = obj8.trackMemberApplicationAction(obj5);
            const HTTP = closure_134_0(closure_134_2[7]).HTTP;
            const request = { url: closure_134_8.GUILD_JOIN_REQUEST(guildId, closure_2), body: obj6, rejectWithError: obj12.rejectWithMigratedError() };
            const patch = HTTP.patch;
            obj6 = { action: APPROVED, rejection_reason };
            obj12 = closure_134_0(closure_134_2[7]);
            c7 = 2;
            c8 = 1;
            const obj7 = {
              value: patchResult.catch((error) => {
                        let intl;
                        let intl2;
                        const tmp = error && error.body && error.body.code === constants.REQUEST_TO_JOIN_USER_INELIGIBLE;
                        if (tmp) {
                          obj = { title: intl.string(guildId(closure_1_2[10]).t.DxJj4e), body: intl2.string(guildId(closure_1_2[10]).t.rSAOk9) };
                          const show = applicationUserId(closure_1_2[9]).show;
                          applicationUserId(closure_1_2[9]);
                          intl = guildId(closure_1_2[10]).intl;
                          intl2 = guildId(closure_1_2[10]).intl;
                          show(obj);
                        }
                        return Promise.reject(error);
                      }),
              done: false
            };
            patchResult = patch(request);
            return obj7;
          }
        } else if (guildId === 1) {
          c8 = 3;
          throw value;
        } else if (guildId === 2) {
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          tmp = value;
          obj = closure_134_1(closure_134_2[6]);
          const obj10 = { type: "GUILD_JOIN_REQUEST_UPDATE", guildId, status: tmp.body.application_status, request: tmp.body };
          obj.dispatch(obj10);
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        c8 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _resetGuildJoinRequest() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj9;
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
          let body;
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
              closure_1 = tmp4;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              const obj4 = { url: closure_2_8.GUILD_MEMBER_REQUEST_TO_JOIN(guildId), rejectWithError: obj9.rejectWithMigratedError() };
              c5 = 2;
              c6 = 1;
              obj9 = HTTPUtils;
              const obj5 = { value: post(obj4), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj7 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: body };
            obj = closure_130_1(closure_130_2[6]);
            obj.dispatch(obj7);
            c4 = 0;
            c6 = 3;
            return { value: body, done: true };
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (0 === c4) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchRequestToJoinGuilds() {
  obj = _asyncToGenerator(async () => {
    let obj8;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let body;
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
            let closure_1 = tmp;
            body = undefined;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.USER_JOIN_REQUEST_GUILDS, rejectWithError: obj8.rejectWithMigratedError() };
            const get = HTTP.get;
            obj8 = HTTPUtils;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: get(obj4), done: false };
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
          body = value;
          const obj7 = { type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: body.body };
          obj = closure_129_1(closure_129_2[6]);
          obj.dispatch(obj7);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchJoinRequestForInterview() {
  obj = _asyncToGenerator(async (value) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj9;
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: closure_2_8.JOIN_REQUEST(value), rejectWithError: obj9.rejectWithMigratedError() };
      obj9 = HTTPUtils;
      await get(obj4);
      joinRequest = closure_130_6(value.body);
      const obj7 = { type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest };
      obj = closure_130_1(closure_130_2[6]);
      obj.dispatch(obj7);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _createOrEnterJoinRequestInterview() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj11;
    let closure_0 = arg0;
    let closure_1 = arg1;
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
      try {
        let channel;
        let body;
        let flag;
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
            channel = tmp4;
            body = tmp;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = true;
            }
            body = undefined;
            channel = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const HTTP = closure_131_0(closure_131_2[7]).HTTP;
            const obj5 = { url: closure_131_8.JOIN_REQUEST_INTERVIEW(closure_0), rejectWithError: obj11.rejectWithMigratedError() };
            const post = HTTP.post;
            obj11 = closure_131_0(closure_131_2[7]);
            c4 = 2;
            c5 = 1;
            const obj6 = { value: post(obj5), done: false };
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
          body = value;
          channel = closure_131_4(body.body);
          const obj9 = { type: "CHANNEL_CREATE", channel };
          const obj8 = closure_131_1(closure_131_2[6]);
          obj8.dispatch(obj9);
          const tmp26 = flag;
          if (tmp26) {
            obj = closure_131_1(closure_131_2[11]);
            const privateChannel = obj.selectPrivateChannel(channel.id);
          }
          c5 = 3;
          const obj10 = { value: channel.id, done: true };
          return obj10;
        }
      } catch (tmp14) {
        c5 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = ChannelRecord.createChannelRecordFromServer;
const joinRequestFromServer = UserGuildJoinRequestStore.joinRequestFromServer;
({ AbortCodes: metroImportDefault, Endpoints: metroImportAll } = Constants);
obj = {
  fetchGuildJoinRequests() {
    return obj(...arguments);
  },
  fetchGuildJoinRequestsForUser() {
    return obj(...arguments);
  },
  ackUserGuildJoinRequest() {
    return obj(...arguments);
  },
  removeGuildJoinRequest() {
    return obj(...arguments);
  },
  updateGuildJoinRequest() {
    return obj(...arguments);
  },
  resetGuildJoinRequest() {
    return obj(...arguments);
  },
  fetchRequestToJoinGuilds() {
    return obj(...arguments);
  },
  setSelectedApplicationTab(guildId, applicationTab) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId, applicationTab };
    obj.dispatch(obj2);
  },
  setSelectedSortOrder(guildId, sortOrder, applicationStatus) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId, sortOrder, applicationStatus };
    obj.dispatch(obj2);
  },
  setSelectedGuildJoinRequest(guildId, request) {
    if (null != request) {
      const obj4 = { guildId, applicationStatus: null, applicationUserId: null };
      ({ applicationStatus: obj2.applicationStatus, userId: obj2.applicationUserId } = request);
      obj = GuildJoinRequestAnalyticUtils;
      const result = obj.trackMemberApplicationViewed(obj4);
    }
    const obj3 = DispatcherDefault;
    const obj6 = { type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId, request };
    obj3.dispatch(obj6);
  },
  fetchJoinRequestForInterview() {
    return obj(...arguments);
  },
  createOrEnterJoinRequestInterview() {
    return obj(...arguments);
  }
};
let result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestActionCreators.tsx");

export default obj;
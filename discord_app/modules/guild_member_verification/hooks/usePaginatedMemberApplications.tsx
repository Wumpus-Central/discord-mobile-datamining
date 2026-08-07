// discord_app/modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx
import _fetchGuildJoinRequests from "_fetchGuildJoinRequests";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("MAX_RESULTS_PER_PAGE").MAX_RESULTS_PER_PAGE * require("MAX_RESULTS_PER_PAGE").MAX_VISIBLE_PAGES;
const result1 = require("noop").fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  let closure_0 = guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  let closure_2;
  let first;
  let callback;
  let React;
  let closure_6;
  closure_2 = React.useRef(false);
  let tmp = callback(React.useState(null), 2);
  first = tmp[0];
  callback = tmp[1];
  React = React.useRef(null);
  closure_6 = React.useRef(false);
  closure_0 = undefined;
  closure_0 = first((arg0, arg1) => {
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
          return { value: "T", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === ref2) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _fetchGuildJoinRequests = tmp4;
              const dependencyMap = tmp8;
              let lib;
              let c1;
              if (!outer1_2.current) {
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp68 + "-" + tmp69;
                let flag = false;
                if (combined !== ref.current) {
                  ref.current = combined;
                  ref2.current = false;
                  flag = true;
                }
                if (!ref2.current) {
                  if (null != outer1_3) {
                    outer1_4(null);
                  }
                  ref = 2;
                  outer1_2.current = true;
                  let obj1 = guildJoinRequests(8367);
                  obj1 = { guildId: null, status: null, limit: null, force: true };
                  obj1[0] = lib;
                  obj1[1] = tmp69;
                  obj1[2] = closure_6;
                  const merged = Object.assign((function getRequestPaginationParams(closure_0, closure_1, arg2, arg3, flag) {
                    const tmp2 = arg3 === callback(tmp8[3]).GuildJoinRequestApplicationStatuses.SUBMITTED;
                    if (arg2 === callback(tmp8[3]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                      if (!flag) {
                        if (0 !== closure_1.length) {
                          let obj = { before: null };
                          obj[0] = tmp2 ? closure_1[closure_1.length - 1].joinRequestId : closure_1[closure_1.length - 1].actionedAt;
                          return obj;
                        }
                      }
                      obj = { before: null };
                      const _Date = Date;
                      const date = new Date();
                      obj[0] = _undefined(tmp[4]).fromTimestamp(date.getTime());
                      return obj;
                    } else {
                      if (!flag) {
                        if (0 !== closure_1.length) {
                          obj = { after: null };
                          obj[0] = tmp2 ? closure_1[closure_1.length - 1].joinRequestId : closure_1[closure_1.length - 1].actionedAt;
                          return obj;
                        }
                      }
                      const obj1 = { after: null };
                      obj1[0] = closure_0;
                      return obj1;
                    }
                    tmp = tmp8;
                  })(lib, anyErrorMessage, tmp68, tmp69, flag));
                  ref2 = 3;
                  c7 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj1.fetchGuildJoinRequests(obj1);
                  return obj2;
                }
              }
              c7 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              ref = 1;
              outer1_2 = _slicedToArray;
              const aPIError = new lib(4201).APIError(outer1_2);
              anyErrorMessage = aPIError;
              outer1_4(anyErrorMessage.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              ref = 0;
              outer1_2.current = false;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              lib = arg1;
              if (null != lib) {
                if (lib.body.guild_join_requests.length < closure_6) {
                  ref2.current = true;
                }
              }
              ref = 1;
            }
            ref = 0;
            outer1_2.current = false;
          }
          ref = 0;
          outer1_2.current = false;
          throw _slicedToArray;
        } catch (tmp58) {
          _slicedToArray = tmp58;
          if (tmp5 === ref) {
            c7 = tmp3;
            throw tmp58;
          } else if (tmp2 === tmp60) {
            ref2 = tmp2;
          } else {
            ref2 = tmp;
          }
        }
      }
    })();
  });
  const items = [first, guildId, guildJoinRequests];
  return {
    fetchNextPage: React.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items),
    error: first
  };
};
// discord_app/modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;

const require = arg1;
const result = require("MAX_RESULTS_PER_PAGE").MAX_RESULTS_PER_PAGE * require("MAX_RESULTS_PER_PAGE").MAX_VISIBLE_PAGES;
const result1 = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  closure_0 = guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  closure_2 = undefined;
  let first;
  let callback;
  let React;
  closure_6 = undefined;
  closure_2 = React.useRef(false);
  const tmp = callback(React.useState(null), 2);
  first = tmp[0];
  callback = tmp[1];
  React = React.useRef(null);
  closure_6 = React.useRef(false);
  closure_0 = undefined;
  closure_0 = first((arg0, arg1) => {
    closure_0 = arg0;
    let aPIError = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === ref3) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp4;
              let ref = tmp8;
              let lib;
              c1 = undefined;
              if (!ref.current) {
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp68 + "-" + tmp69;
                let flag = false;
                if (combined !== ref2.current) {
                  ref2.current = combined;
                  ref3.current = false;
                  flag = true;
                }
                if (!ref3.current) {
                  if (null != closure_1_3) {
                    closure_1_4(null);
                  }
                  ref2 = 2;
                  ref.current = true;
                  obj1 = guildJoinRequests(ref[5]);
                  obj1 = { guildId: null, status: null, limit: null, force: true };
                  obj1[0] = lib;
                  obj1[1] = tmp69;
                  obj1[2] = closure_6;
                  const merged = Object.assign((function getRequestPaginationParams(closure_0, aPIError, arg2, arg3, flag) {
                    const tmp2 = arg3 === callback(4200).GuildJoinRequestApplicationStatuses.SUBMITTED;
                    if (arg2 === callback(4200).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                      if (!flag) {
                        if (0 !== aPIError.length) {
                          let obj = { before: null };
                          obj[0] = tmp2 ? aPIError[aPIError.length - 1].joinRequestId : aPIError[aPIError.length - 1].actionedAt;
                          return obj;
                        }
                      }
                      obj = { before: null };
                      const _Date = Date;
                      const date = new Date();
                      obj[0] = _undefined(11).fromTimestamp(date.getTime());
                      return obj;
                    } else {
                      if (!flag) {
                        if (0 !== aPIError.length) {
                          obj = { after: null };
                          obj[0] = tmp2 ? aPIError[aPIError.length - 1].joinRequestId : aPIError[aPIError.length - 1].actionedAt;
                          return obj;
                        }
                      }
                      obj1 = { after: null };
                      obj1[0] = closure_0;
                      return obj1;
                    }
                  })(lib, aPIError, tmp68, tmp69, flag));
                  ref3 = 3;
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
              ref2 = 1;
              ref = closure_4;
              aPIError = new lib(ref[6]).APIError(ref);
              closure_1_4(aPIError.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              ref2 = 0;
              ref.current = false;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              lib = arg1;
              if (null != lib) {
                if (lib.body.guild_join_requests.length < closure_6) {
                  ref3.current = true;
                }
              }
              ref2 = 1;
            }
            ref2 = 0;
            ref.current = false;
          }
          ref2 = 0;
          ref.current = false;
          throw closure_4;
        } catch (tmp58) {
          closure_4 = tmp58;
          if (tmp5 === ref2) {
            c7 = tmp3;
            throw tmp58;
          } else if (tmp2 === tmp60) {
            ref3 = tmp2;
          } else {
            ref3 = tmp;
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
// === Module 16584: usePaginatedMemberApplications ===

// Module 16584 (usePaginatedMemberApplications)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const result = fn(4384).MAX_RESULTS_PER_PAGE * fn(4384).MAX_VISIBLE_PAGES;
const metroRequire = result;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  _slicedToArray = undefined;
  noop = undefined;
  closure_2 = noop.useRef(false);
  const tmp = _slicedToArray(noop.useState(null), 2);
  const error = tmp[0];
  _slicedToArray = tmp[1];
  noop = noop.useRef(null);
  closure_6 = noop.useRef(false);
  closure_0 = error((guildId, arg1) => {
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === limit) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp4;
              closure_130_0 = undefined;
              closure_130_1 = undefined;
              if (!tmp8.current) {
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp67 + "-" + tmp68;
                let flag = false;
                if (combined !== ref2.current) {
                  ref2.current = combined;
                  limit.current = false;
                  flag = true;
                }
                if (!limit.current) {
                  if (null != closure_3) {
                    tmp58(null);
                  }
                  ref2 = 2;
                  ref.current = true;
                  let obj1 = guildJoinRequests(ref[5]);
                  obj1 = { guildId, status: tmp68, limit, force: true };
                  const merged = Object.assign((function getRequestPaginationParams(after, arg1, arg2, arg3, flag) {
                    const tmp2 = arg3 === guildId(4384).GuildJoinRequestApplicationStatuses.SUBMITTED;
                    if (arg2 === guildId(4384).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                      if (!flag) {
                        if (0 !== arg1.length) {
                          let obj = { before: tmp2 ? arg1[arg1.length - 1].joinRequestId : arg1[arg1.length - 1].actionedAt };
                          return obj;
                        }
                      }
                      obj = { before: null };
                      const _Date = Date;
                      const date = new Date();
                      obj.before = closure_1_1(11).fromTimestamp(date.getTime());
                      return obj;
                    } else {
                      if (!flag) {
                        if (0 !== arg1.length) {
                          obj = { after: tmp2 ? arg1[arg1.length - 1].joinRequestId : arg1[arg1.length - 1].actionedAt };
                          return obj;
                        }
                      }
                      const obj1 = { after };
                      return obj1;
                    }
                  })(guildId, closure_1, tmp67, tmp68, flag));
                  limit = 3;
                  c7 = 1;
                  const obj2 = { value: obj1.fetchGuildJoinRequests(obj1), done: false };
                  return obj2;
                }
              }
              c7 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              ref2 = 1;
              closure_130_2 = tmp58;
              const aPIError = new guildId(ref[6]).APIError(closure_130_2);
              closure_130_1 = aPIError;
              tmp58(closure_130_1.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref2 = 0;
              ref.current = false;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_130_0 = value;
              if (null != closure_130_0) {
                if (closure_130_0.body.guild_join_requests.length < limit) {
                  limit.current = true;
                }
              }
              ref2 = 1;
            }
            ref2 = 0;
            ref.current = false;
          }
          ref2 = 0;
          ref.current = false;
          throw tmp58;
        } catch (tmp58) {
          if (tmp5 === ref2) {
            c7 = tmp3;
            throw tmp58;
          } else if (tmp2 === tmp60) {
            limit = tmp2;
          } else {
            limit = tmp;
          }
        }
      }
    })();
  });
  const items = [error, guildId, guildJoinRequests];
  return {
    fetchNextPage: noop.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items),
    error
  };
};
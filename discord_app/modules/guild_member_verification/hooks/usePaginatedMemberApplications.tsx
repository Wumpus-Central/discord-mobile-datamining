// === Module 18272: usePaginatedMemberApplications ===

// Module 18272 (usePaginatedMemberApplications)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const result = fn(4953).MAX_RESULTS_PER_PAGE * fn(4953).MAX_VISIBLE_PAGES;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  error = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_2 = noop.useRef(new Set());
  [error, _slicedToArray] = noop.useState(null);
  noop = noop.useRef(null);
  closure_6 = noop.useRef(false);
  closure_0 = error((guildId, status) => {
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
          let obj3 = { value, done: true };
          return obj3;
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
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp4;
              dependencyMap = tmp8;
              closure_130_0 = status;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              const current5 = dependencyMap.current;
              if (!current5.has(status)) {
                const _HermesInternal = HermesInternal;
                const combined = "" + guildId + "-" + status;
                closure_130_1 = combined;
                let flag = false;
                if (combined !== ref.current) {
                  ref.current = combined;
                  limit.current = false;
                  flag = true;
                }
                if (!limit.current) {
                  if (null != closure_3) {
                    tmp74(null);
                  }
                  ref = 2;
                  const current4 = dependencyMap.current;
                  current4.add(status);
                  const tmp66 = (function getRequestPaginationParams(after, status, guildId2, status2, flag) {
                    const tmp2 = status2 === guildId(4953).GuildJoinRequestApplicationStatuses.SUBMITTED;
                    if (guildId2 === guildId(4953).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                      if (!flag) {
                        if (0 !== status.length) {
                          const obj2 = { before: tmp2 ? status[status.length - 1].joinRequestId : status[status.length - 1].actionedAt };
                          return obj2;
                        }
                      }
                      const obj3 = { before: null };
                      const _Date = Date;
                      const date = new Date();
                      obj3.before = status(11).fromTimestamp(date.getTime());
                      return obj3;
                    } else {
                      if (!flag) {
                        if (0 !== status.length) {
                          const obj = { after: tmp2 ? status[status.length - 1].joinRequestId : status[status.length - 1].actionedAt };
                          return obj;
                        }
                      }
                      const obj4 = { after };
                      return obj4;
                    }
                  })(guildId, status, guildId, status, flag);
                  const obj5 = { guildId, status, limit, force: true };
                  const merged = Object.assign(tmp66);
                  limit = 3;
                  c7 = 1;
                  const obj6 = { value: guildJoinRequests(6879).fetchGuildJoinRequests(obj5), done: false };
                  return obj6;
                }
              }
              c7 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              ref = 1;
              closure_130_4 = tmp74;
              const aPIError = new guildId(5666).APIError(closure_130_4);
              closure_130_3 = aPIError;
              tmp74(closure_130_3.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 0;
              const current = dependencyMap.current;
              current.delete(closure_130_0);
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              closure_130_2 = value;
              if (null != closure_130_2) {
                if (closure_130_1 === ref.current) {
                  if (closure_130_2.body.guild_join_requests.length < limit) {
                    limit.current = true;
                  }
                }
              }
              ref = 1;
            }
            ref = 0;
            const current2 = dependencyMap.current;
            current2.delete(closure_130_0);
          }
          ref = 0;
          const current3 = dependencyMap.current;
          current3.delete(closure_130_0);
          throw tmp74;
        } catch (tmp74) {
          if (tmp5 === ref) {
            c7 = tmp3;
            throw tmp74;
          } else if (tmp2 === tmp76) {
            limit = tmp2;
          } else {
            limit = tmp;
          }
        }
      }
    })();
  });
  items = [error, guildId, guildJoinRequests];
  set = new Set();
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
}
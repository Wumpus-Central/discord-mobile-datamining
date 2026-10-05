// discord_app/modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx
import MemberVerificationTypes from "../MemberVerificationTypes.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3, ref, ref2, ref3;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = MemberVerificationTypes.MAX_RESULTS_PER_PAGE * MemberVerificationTypes.MAX_VISIBLE_PAGES;
const metroRequire = result;
const result1 = size.fileFinishedImporting(
  "modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx",
);

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  let closure_4;
  let closure_5;
  let error;
  guildId = guildId.guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  error = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_2 = react.useRef(false);
  [error, _slicedToArray] = react.useState(null);
  react = react.useRef(null);
  let closure_6 = react.useRef(false);
  const useCallback = react.useCallback;
  let closure_0 = error((guildId, status) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function* (arg0, value) {
      function getRequestPaginationParams(after, status, arg2, status2, flag) {
        let date;
        let fromTimestamp;
        const tmp2 = status2 === guildId(ref[3]).GuildJoinRequestApplicationStatuses.SUBMITTED;
        if (arg2 === guildId(ref[3]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
          if (!flag) {
            if (0 !== status.length) {
              return { before: tmp2 ? status[status.length - 1].joinRequestId : status[status.length - 1].actionedAt };
            }
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const obj3 = { before: fromTimestamp(date.getTime()) };
          fromTimestamp = status(ref[4]).fromTimestamp;
          status(ref[4]);
          date = new Date();
          return obj3;
        } else {
          if (!flag) {
            if (0 !== status.length) {
              return { after: tmp2 ? status[status.length - 1].joinRequestId : status[status.length - 1].actionedAt };
            }
          }
          return { after };
        }
      }
      if (c7 === 2) {
        c7 = 3;
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
          let aPIError;
          c7 = 2;
          if (0 === ref3) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp;
              ref = tmp4;
              guildId = undefined;
              aPIError = undefined;
              if (!ref.current) {
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp61 + "-" + status;
                let flag = false;
                if (combined !== ref2.current) {
                  ref2.current = combined;
                  ref3.current = false;
                  flag = true;
                }
                if (!ref3.current) {
                  if (null != closure_3) {
                    tmp53(null);
                  }
                  ref2 = 2;
                  ref.current = true;
                  const obj4 = { guildId, status, limit, force: true };
                  const tmp45 = getRequestPaginationParams(guildId, status, guildId, status, flag);
                  const fetchGuildJoinRequests = guildJoinRequests(closure_2_2[5]).fetchGuildJoinRequests;
                  guildJoinRequests(closure_2_2[5]);
                  const merged = Object.assign(tmp45);
                  ref3 = 3;
                  c7 = 1;
                  const obj5 = { value: fetchGuildJoinRequests(obj4), done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === ref3) {
            ref2 = 0;
            ref.current = false;
            throw tmp53;
          } else {
            if (2 === ref3) {
              ref2 = 1;
              ref = tmp53;
              let self = this;
              let self2 = this;
              aPIError = new guildId(closure_2_2[6]).APIError(ref);
              tmp53(aPIError.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref2 = 0;
              ref.current = false;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              guildId = value;
              if (null != guildId) {
                if (guildId.body.guild_join_requests.length < limit) {
                  ref3.current = true;
                }
              }
              ref2 = 1;
            }
            ref2 = 0;
            ref.current = false;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp53) {
          if (0 === ref2) {
            c7 = 3;
            throw tmp53;
          } else if (1 === tmp55) {
            ref3 = 1;
          } else {
            ref3 = 2;
          }
        }
      }
    })();
  });
  const items = [error, guildId, guildJoinRequests];
  let obj = {
    fetchNextPage: useCallback(function () {
      return closure_0(...arguments);
    }, items),
    error,
  };
  return obj;
};

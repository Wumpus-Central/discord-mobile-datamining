// discord_app/actions/LibraryApplicationStatisticsActionCreators.tsx
import DurationsDefault from "../utils/Durations.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import LibraryApplicationStatisticsStore from "../stores/game_library/LibraryApplicationStatisticsStore.tsx";

require = fn;
let closure_7 = async function _fetchActivityStatistics() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          lastFetched = lastFetched.lastFetched;
          if (null != lastFetched) {
            const _Date = Date;
            if (Date.now() - lastFetched < timestampProducer) {
              c5 = 3;
            }
          }
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = {
            url: constants.USER_ACTIVITY_STATISTICS,
            oldFormErrors: true,
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c4 = 2;
          c5 = 1;
          const obj6 = { value: HTTP.get(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        closure_129_1(closure_129_2[5]).dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_FAIL" });
        c5 = 3;
        const obj8 = { value: closure_128_1, done: true };
        return obj8;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        const obj9 = { type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: closure_128_0.body };
        closure_129_1(closure_129_2[5]).dispatch(obj9);
        c3 = 0;
        const obj = closure_129_1(closure_129_2[5]);
      }
      c3 = 0;
      c5 = 3;
      const obj10 = { value, done: true };
      return obj10;
    } catch (tmp26) {
      closure_2 = tmp26;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp26;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Endpoints = fn(1071).Endpoints;
let closure_6 = 6 * DurationsDefault.Millis.HOUR;
const size = fn(2);
const result = size.fileFinishedImporting("actions/LibraryApplicationStatisticsActionCreators.tsx");

export function fetchActivityStatistics() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

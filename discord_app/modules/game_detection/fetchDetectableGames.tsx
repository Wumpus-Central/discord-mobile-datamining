// === Module 11890: fetchDetectableGames ===

// Module 11890 (fetchDetectableGames)
import DispatcherDefault from "Dispatcher" /* 572 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6882 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DetectableGameStore from "DetectableGameStore" /* 2161 */;

require = fn;
let closure_6 = async function _fetchDetectableGames() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
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
          const sent_etag = tmp3;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          if (DetectableGameStore.canFetchDetectableGames()) {
            const detectableGamesEtag = DetectableGameStore.detectableGamesEtag;
            closure_128_1 = detectableGamesEtag;
            DispatcherDefault.dispatch({ type: "GAMES_DATABASE_FETCH" });
            c3 = 1;
            const obj6 = { url: hasOwnProperty(), headers: null, retries: 1, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
            const obj9 = { "If-None-Match": detectableGamesEtag };
            obj6.headers = obj9;
            const obj10 = {
              event: discord_common_AnalyticsUtils.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
              properties(headers) {
                          const obj2 = { sent_etag, received_etag: null };
                          let etag;
                          if (headers != null) {
                            headers = headers.headers;
                            if (headers != null) {
                              etag = headers.etag;
                            }
                          }
                          obj2.received_etag = etag;
                          return closure_0(closure_2[6]).exact(obj2);
                        }
            };
            obj6.trackedActionData = obj10;
            const obj8 = TrackedHTTPUtilsDefault;
            obj6.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c4 = 2;
            c5 = 1;
            const obj11 = { value: obj8.get(obj6), done: false };
            return obj11;
          } else {
            c5 = 3;
          }
        }
      } else if (1 === tmp8) {
        c3 = 0;
        if (304 === tmp37.status) {
          const obj13 = { type: "GAMES_DATABASE_UPDATE", games: [], etag: closure_129_4.detectableGamesEtag };
          closure_129_1(closure_129_2[3]).dispatch(obj13);
          const obj5 = closure_129_1(closure_129_2[3]);
        } else {
          closure_129_1(closure_129_2[3]).dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
          const obj4 = closure_129_1(closure_129_2[3]);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        c3 = 0;
        const obj14 = { type: "GAMES_DATABASE_UPDATE", games: closure_128_0.body, etag: closure_128_0.headers.etag };
        closure_129_1(closure_129_2[3]).dispatch(obj14);
        const obj = closure_129_1(closure_129_2[3]);
      }
      c3 = 0;
      c5 = 3;
      const obj15 = { value, done: true };
      return obj15;
    } catch (tmp37) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp37;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_5 = fn(11891).detectableGamesPayloadCdnUrl;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_detection/fetchDetectableGames.tsx");

export default function fetchDetectableGames() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
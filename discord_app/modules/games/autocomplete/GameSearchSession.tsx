// discord_app/modules/games/autocomplete/GameSearchSession.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtils from "../../../utils/AnalyticsUtils.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticsUtilsDefault = AnalyticsUtils;

const f97796 = (id) => id.id;
function onQuery(c2) {
  let tmpResult;
  const obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(c2);
  if (null == result) {
    obj2.selectedQuery = null;
    if (null != obj2.state) {
      obj2.state.query = null;
    }
  } else if (result !== obj2.selectedQuery) {
    obj2.selectedQuery = null;
    const _Date = Date;
    const timestamp = Date.now();
    const tmp3 = null != obj4.state && timestamp - obj4.state.lastActivityAt > 60000;
    if (tmp3) {
      obj2.endAt(obj2.state.lastActivityAt);
    }
    let state = obj4.state;
    if (state == null) {
      obj2 = {
        id: tmpResult.getNewAnalyticsLoadId(),
        startedAt: timestamp,
        lastActivityAt: timestamp,
        query: null,
        lastQuery: result,
        maxQueryLength: 0,
        displayed: null,
        sawAnyResults: false,
        numResultSets: 0,
        numSelections: 0,
        state: obj2,
      };
      state = obj2;
      tmpResult = AnalyticsUtils;
    }
    state.query = result;
    state.lastQuery = result;
    const _Math = Math;
    state.maxQueryLength = Math.max(state.maxQueryLength, result.length);
    state.lastActivityAt = timestamp;
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
class GameSearchSession {
  constructor(surface) {
    let DEFAULT;
    let obj;
    if (DEFAULT === undefined) {
      DEFAULT = obj(5900).GameAutocompleteProfile.DEFAULT;
    }
    obj = Object.create(new.target.prototype);
    obj.state = null;
    obj.selectedQuery = null;
    obj.onQuery = onQuery;
    obj.onResults = function onResults(query, results2) {
      const state = obj2.state;
      const tmp2 = null != state && null != state.query && query !== obj2.selectedQuery;
      if (tmp2) {
        let tmp4 = null != state.displayed;
        if (tmp4) {
          const displayed = state.displayed;
          let closure_0 = results2;
          let everyResult = displayed.query === query && displayed.results.length === results2.length;
          if (everyResult) {
            const results = displayed.results;
            everyResult = results.every((id, index) => id.id === closure_0[index].id);
          }
          tmp4 = everyResult;
        }
        if (!tmp4) {
          const obj = { query, results: results2 };
          state.displayed = obj;
          state.numResultSets = state.numResultSets + 1;
          if (results2.length > 0) {
            state.sawAnyResults = true;
          }
        }
      }
    };
    obj.select = function select(game_id) {
      let num2;
      let query;
      let query1;
      let substr;
      let closure_0 = game_id;
      const state = obj2.state;
      if (null != state) {
        if (null != state.query) {
          const _Date = Date;
          const timestamp = Date.now();
          state.numSelections = state.numSelections + 1;
          state.lastActivityAt = timestamp;
          const displayed = state.displayed;
          let num;
          if (displayed != null) {
            const results = displayed.results;
            num = results.findIndex((id) => id.id === closure_0);
          }
          if (num == null) {
            num = -1;
          }
          let name;
          const normalizeGameAutocompleteQuery = GameAutocompleteUtils.normalizeGameAutocompleteQuery;
          GameAutocompleteUtils;
          if (displayed != null) {
            if (displayed.results[num] != null) {
              name = tmp6.name;
            }
          }
          obj2.selectedQuery = normalizeGameAutocompleteQuery(name);
          const obj = {
            search_session_id: state.id,
            surface: null,
            profile: null,
            query: state.query,
            query_length: state.query.length,
            results_query: query,
            results_stale: query1 !== state.query,
            game_id,
            result_index: num,
            num_results: num2,
            result_game_ids: substr.map(f97796),
            num_result_sets: null,
            selection_number: null,
            ms_since_session_start: timestamp - state.startedAt,
          };
          ({ surface: obj.surface, profile: obj.profile } = obj2);
          query = undefined;
          const track = AnalyticsUtilsDefault.track;
          const GAME_SEARCH_RESULT_SELECTED = AnalyticEvents.GAME_SEARCH_RESULT_SELECTED;
          AnalyticsUtilsDefault;
          if (displayed != null) {
            query = displayed.query;
          }
          if (query == null) {
            query = null;
          }
          query1 = undefined;
          if (displayed != null) {
            query1 = displayed.query;
          }
          num2 = undefined;
          if (displayed != null) {
            num2 = displayed.results.length;
          }
          if (num2 == null) {
            num2 = 0;
          }
          let results1;
          if (displayed != null) {
            results1 = displayed.results;
          }
          if (results1 == null) {
            results1 = [];
          }
          substr = results1.slice(0, 10);
          ({ numResultSets: obj.num_result_sets, numSelections: obj.selection_number } = state);
          track(GAME_SEARCH_RESULT_SELECTED, obj);
        }
      }
    };
    obj.end = function end() {
      obj2.endAt(Date.now());
    };
    obj.surface = surface;
    obj.profile = DEFAULT;
    return obj;
  }
  endAt(lastActivityAt) {
    let displayed3;
    let num;
    let query;
    let substr;
    const state = this.state;
    this.state = null;
    this.selectedQuery = null;
    if (null != state) {
      const obj = {
        search_session_id: state.id,
        surface: null,
        profile: null,
        query: state.lastQuery,
        query_length: state.lastQuery.length,
        max_query_length: null,
        results_query: query,
        num_results: num,
        result_game_ids: substr.map(f97796),
        saw_any_results: null,
        num_result_sets: null,
        num_selections: null,
        duration_ms: lastActivityAt - state.startedAt,
      };
      ({ surface: obj.surface, profile: obj.profile } = this);
      ({ maxQueryLength: obj.max_query_length, displayed: displayed3 } = state);
      query = undefined;
      const track = AnalyticsUtilsDefault.track;
      const GAME_SEARCH_SESSION_ENDED = AnalyticEvents.GAME_SEARCH_SESSION_ENDED;
      AnalyticsUtilsDefault;
      if (displayed3 != null) {
        query = displayed3.query;
      }
      if (query == null) {
        query = null;
      }
      const displayed = state.displayed;
      num = undefined;
      if (displayed != null) {
        num = displayed.results.length;
      }
      if (num == null) {
        num = 0;
      }
      const displayed2 = state.displayed;
      let results;
      if (displayed2 != null) {
        results = displayed2.results;
      }
      if (results == null) {
        results = [];
      }
      substr = results.slice(0, 10);
      ({
        sawAnyResults: obj.saw_any_results,
        numResultSets: obj.num_result_sets,
        numSelections: obj.num_selections,
      } = state);
      track(GAME_SEARCH_SESSION_ENDED, obj);
    }
  }
}
const prototype = GameSearchSession.prototype;
const map = new Map();
let result = size.fileFinishedImporting("modules/games/autocomplete/GameSearchSession.tsx");

export const GAME_SEARCH_SESSION_IDLE_MS = 60000;
export { GameSearchSession };
export const getGameSearchSession = function getGameSearchSession(CHAT_MENTION) {
  let obj2;
  let value = map.get(CHAT_MENTION);
  if (null == value) {
    const self = this;
    if (typeof GameSearchSession === "function") {
      let tmp2 = obj2;
      const DEFAULT = obj2(5900).GameAutocompleteProfile.DEFAULT;
      obj2 = Object.create(tmp6.prototype);
      obj2.state = null;
      obj2.selectedQuery = null;
      obj2.onQuery = onQuery;
      obj2.onResults = function onResults(query, results2) {
        const state = obj2.state;
        const tmp2 = null != state && null != state.query && query !== obj2.selectedQuery;
        if (tmp2) {
          let tmp4 = null != state.displayed;
          if (tmp4) {
            const displayed = state.displayed;
            let closure_0 = results2;
            let everyResult = displayed.query === query && displayed.results.length === results2.length;
            if (everyResult) {
              const results = displayed.results;
              everyResult = results.every((id, index) => id.id === closure_0[index].id);
            }
            tmp4 = everyResult;
          }
          if (!tmp4) {
            const obj = { query, results: results2 };
            state.displayed = obj;
            state.numResultSets = state.numResultSets + 1;
            if (results2.length > 0) {
              state.sawAnyResults = true;
            }
          }
        }
      };
      obj2.select = function select(game_id) {
        let num2;
        let query;
        let query1;
        let substr;
        let closure_0 = game_id;
        const state = obj2.state;
        if (null != state) {
          if (null != state.query) {
            const _Date = Date;
            const timestamp = Date.now();
            state.numSelections = state.numSelections + 1;
            state.lastActivityAt = timestamp;
            const displayed = state.displayed;
            let num;
            if (displayed != null) {
              const results = displayed.results;
              num = results.findIndex((id) => id.id === closure_0);
            }
            if (num == null) {
              num = -1;
            }
            let name;
            const normalizeGameAutocompleteQuery = GameAutocompleteUtils.normalizeGameAutocompleteQuery;
            GameAutocompleteUtils;
            if (displayed != null) {
              if (displayed.results[num] != null) {
                name = tmp6.name;
              }
            }
            obj2.selectedQuery = normalizeGameAutocompleteQuery(name);
            const obj = {
              search_session_id: state.id,
              surface: null,
              profile: null,
              query: state.query,
              query_length: state.query.length,
              results_query: query,
              results_stale: query1 !== state.query,
              game_id,
              result_index: num,
              num_results: num2,
              result_game_ids: substr.map(f97796),
              num_result_sets: null,
              selection_number: null,
              ms_since_session_start: timestamp - state.startedAt,
            };
            ({ surface: obj.surface, profile: obj.profile } = obj2);
            query = undefined;
            const track = AnalyticsUtilsDefault.track;
            const GAME_SEARCH_RESULT_SELECTED = AnalyticEvents.GAME_SEARCH_RESULT_SELECTED;
            AnalyticsUtilsDefault;
            if (displayed != null) {
              query = displayed.query;
            }
            if (query == null) {
              query = null;
            }
            query1 = undefined;
            if (displayed != null) {
              query1 = displayed.query;
            }
            num2 = undefined;
            if (displayed != null) {
              num2 = displayed.results.length;
            }
            if (num2 == null) {
              num2 = 0;
            }
            let results1;
            if (displayed != null) {
              results1 = displayed.results;
            }
            if (results1 == null) {
              results1 = [];
            }
            substr = results1.slice(0, 10);
            ({ numResultSets: obj.num_result_sets, numSelections: obj.selection_number } = state);
            track(GAME_SEARCH_RESULT_SELECTED, obj);
          }
        }
      };
      obj2.end = function end() {
        obj2.endAt(Date.now());
      };
      obj2.surface = CHAT_MENTION;
      obj2.profile = DEFAULT;
      let result = map.set(CHAT_MENTION, obj2);
      value = obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value;
};

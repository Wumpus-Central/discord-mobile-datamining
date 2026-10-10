// discord_app/modules/games/autocomplete/GameSearchSession.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtils from "../../../utils/AnalyticsUtils.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticsUtilsDefault = AnalyticsUtils;

const AnalyticEvents = Constants.AnalyticEvents;
class GameSearchSession {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.state = null;
    obj.selectedQuery = null;
    obj.onQuery = function onQuery(c2) {
      const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(c2);
      if (null == result) {
        obj2.selectedQuery = null;
        if (null != obj2.state) {
          obj2.state.query = null;
        }
      } else if (result !== obj2.selectedQuery) {
        obj4.selectedQuery = null;
        const _Date = Date;
        const timestamp = Date.now();
        let tmp3 = null != obj4.state;
        if (tmp3) {
          tmp3 = timestamp - obj4.state.lastActivityAt > 60000;
        }
        if (tmp3) {
          obj4.endAt(obj4.state.lastActivityAt);
        }
        let state = obj4.state;
        if (state == null) {
          obj2 = {
            id: AnalyticsUtils.getNewAnalyticsLoadId(),
            startedAt: timestamp,
            lastActivityAt: timestamp,
            query: null,
            lastQuery: result,
            maxQueryLength: 0,
            displayed: null,
            sawAnyResults: false,
            numResultSets: 0,
            numSelections: 0,
          };
          obj4.state = obj2;
          state = obj2;
          const tmpResult = AnalyticsUtils;
        }
        state.query = result;
        state.lastQuery = result;
        const _Math = Math;
        state.maxQueryLength = Math.max(state.maxQueryLength, result.length);
        state.lastActivityAt = timestamp;
      }
    };
    obj.onResults = function onResults(query, results1) {
      const state = obj2.state;
      let tmp2 = null != state;
      if (tmp2) {
        tmp2 = null != state.query;
      }
      if (tmp2) {
        tmp2 = query !== obj2.selectedQuery;
      }
      if (tmp2) {
        let tmp4 = null != state.displayed;
        if (tmp4) {
          const displayed = state.displayed;
          closure_0 = results1;
          let everyResult = displayed.query === query && displayed.results.length === results1.length;
          if (everyResult) {
            const results = displayed.results;
            everyResult = results.every((id, index) => id.id === closure_0[index].id);
          }
          tmp4 = everyResult;
        }
        if (!tmp4) {
          const obj = { query, results: results1 };
          state.displayed = obj;
          state.numResultSets = state.numResultSets + 1;
          if (results1.length > 0) {
            state.sawAnyResults = true;
          }
        }
      }
    };
    obj.select = function select(game_id) {
      closure_0 = game_id;
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
          if (displayed != null) {
            if (displayed.results[num] != null) {
              name = tmp5.name;
            }
          }
          tmp.selectedQuery = GameAutocompleteUtils.normalizeGameAutocompleteQuery(name);
          obj2 = AnalyticsUtilsDefault;
          const obj4 = {
            search_session_id: state.id,
            surface: null,
            filter_group: null,
            query: null,
            query_length: null,
            results_query: null,
            results_stale: null,
            game_id: null,
            result_index: null,
            num_results: null,
            result_game_ids: null,
            num_result_sets: null,
            selection_number: null,
            ms_since_session_start: null,
          };
          ({ surface: obj3.surface, filterGroup: obj3.filter_group } = tmp);
          obj4.query = state.query;
          obj4.query_length = state.query.length;
          let query;
          if (displayed != null) {
            query = displayed.query;
          }
          if (query == null) {
            query = null;
          }
          obj4.results_query = query;
          let query1;
          if (displayed != null) {
            query1 = displayed.query;
          }
          obj4.results_stale = query1 !== state.query;
          obj4.game_id = game_id;
          obj4.result_index = num;
          let num2;
          if (displayed != null) {
            num2 = displayed.results.length;
          }
          if (num2 == null) {
            num2 = 0;
          }
          obj4.num_results = num2;
          let results1;
          if (displayed != null) {
            results1 = displayed.results;
          }
          if (results1 == null) {
            results1 = [];
          }
          const substr = results1.slice(0, 10);
          obj4.result_game_ids = substr.map((id) => id.id);
          ({ numResultSets: obj3.num_result_sets, numSelections: obj3.selection_number } = state);
          obj4.ms_since_session_start = timestamp - state.startedAt;
          obj2.track(AnalyticEvents.GAME_SEARCH_RESULT_SELECTED, obj4);
        }
      }
    };
    obj.end = function end() {
      obj2.endAt(Date.now());
    };
    obj.surface = global;
    obj.filterGroup = require;
    return obj;
  }
}
GameSearchSession.prototype["endAt"] = function endAt(lastActivityAt) {
  const state = this.state;
  this.state = null;
  this.selectedQuery = null;
  if (null != state) {
    const obj3 = {
      search_session_id: state.id,
      surface: null,
      filter_group: null,
      query: null,
      query_length: null,
      max_query_length: null,
      results_query: null,
      num_results: null,
      result_game_ids: null,
      saw_any_results: null,
      num_result_sets: null,
      num_selections: null,
      duration_ms: null,
    };
    ({ surface: obj2.surface, filterGroup: obj2.filter_group } = this);
    obj3.query = state.lastQuery;
    obj3.query_length = state.lastQuery.length;
    ({ maxQueryLength: obj2.max_query_length, displayed: displayed3 } = state);
    let query;
    if (displayed3 != null) {
      query = displayed3.query;
    }
    if (query == null) {
      query = null;
    }
    obj3.results_query = query;
    const displayed = state.displayed;
    let num;
    if (displayed != null) {
      num = displayed.results.length;
    }
    if (num == null) {
      num = 0;
    }
    obj3.num_results = num;
    const displayed2 = state.displayed;
    let results;
    if (displayed2 != null) {
      results = displayed2.results;
    }
    if (results == null) {
      results = [];
    }
    const substr = results.slice(0, 10);
    obj3.result_game_ids = substr.map((id) => id.id);
    ({
      sawAnyResults: obj2.saw_any_results,
      numResultSets: obj2.num_result_sets,
      numSelections: obj2.num_selections,
    } = state);
    obj3.duration_ms = lastActivityAt - state.startedAt;
    AnalyticsUtilsDefault.track(AnalyticEvents.GAME_SEARCH_SESSION_ENDED, obj3);
  }
};
const map = new Map();
let result = size.fileFinishedImporting("modules/games/autocomplete/GameSearchSession.tsx");

export const GAME_SEARCH_SESSION_IDLE_MS = 60000;
export { GameSearchSession };
export const getGameSearchSession = function getGameSearchSession(CHAT_MENTION, DEFAULT) {
  value = map.get(CHAT_MENTION);
  if (null == value) {
    if (typeof GameSearchSession === "function") {
      let obj2 = Object.create(tmp5.prototype);
      obj2.state = null;
      obj2.selectedQuery = null;
      obj2.onQuery = function onQuery(c2) {
        const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(c2);
        if (null == result) {
          obj2.selectedQuery = null;
          if (null != obj2.state) {
            obj2.state.query = null;
          }
        } else if (result !== obj2.selectedQuery) {
          obj4.selectedQuery = null;
          const _Date = Date;
          const timestamp = Date.now();
          let tmp3 = null != obj4.state;
          if (tmp3) {
            tmp3 = timestamp - obj4.state.lastActivityAt > 60000;
          }
          if (tmp3) {
            obj4.endAt(obj4.state.lastActivityAt);
          }
          let state = obj4.state;
          if (state == null) {
            obj2 = {
              id: AnalyticsUtils.getNewAnalyticsLoadId(),
              startedAt: timestamp,
              lastActivityAt: timestamp,
              query: null,
              lastQuery: result,
              maxQueryLength: 0,
              displayed: null,
              sawAnyResults: false,
              numResultSets: 0,
              numSelections: 0,
            };
            obj4.state = obj2;
            state = obj2;
            const tmpResult = AnalyticsUtils;
          }
          state.query = result;
          state.lastQuery = result;
          const _Math = Math;
          state.maxQueryLength = Math.max(state.maxQueryLength, result.length);
          state.lastActivityAt = timestamp;
        }
      };
      obj2.onResults = function onResults(query, results1) {
        const state = obj2.state;
        let tmp2 = null != state;
        if (tmp2) {
          tmp2 = null != state.query;
        }
        if (tmp2) {
          tmp2 = query !== obj2.selectedQuery;
        }
        if (tmp2) {
          let tmp4 = null != state.displayed;
          if (tmp4) {
            const displayed = state.displayed;
            closure_0 = results1;
            let everyResult = displayed.query === query && displayed.results.length === results1.length;
            if (everyResult) {
              const results = displayed.results;
              everyResult = results.every((id, index) => id.id === closure_0[index].id);
            }
            tmp4 = everyResult;
          }
          if (!tmp4) {
            const obj = { query, results: results1 };
            state.displayed = obj;
            state.numResultSets = state.numResultSets + 1;
            if (results1.length > 0) {
              state.sawAnyResults = true;
            }
          }
        }
      };
      obj2.select = function select(game_id) {
        closure_0 = game_id;
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
            if (displayed != null) {
              if (displayed.results[num] != null) {
                name = tmp5.name;
              }
            }
            tmp.selectedQuery = GameAutocompleteUtils.normalizeGameAutocompleteQuery(name);
            obj2 = AnalyticsUtilsDefault;
            const obj4 = {
              search_session_id: state.id,
              surface: null,
              filter_group: null,
              query: null,
              query_length: null,
              results_query: null,
              results_stale: null,
              game_id: null,
              result_index: null,
              num_results: null,
              result_game_ids: null,
              num_result_sets: null,
              selection_number: null,
              ms_since_session_start: null,
            };
            ({ surface: obj3.surface, filterGroup: obj3.filter_group } = tmp);
            obj4.query = state.query;
            obj4.query_length = state.query.length;
            let query;
            if (displayed != null) {
              query = displayed.query;
            }
            if (query == null) {
              query = null;
            }
            obj4.results_query = query;
            let query1;
            if (displayed != null) {
              query1 = displayed.query;
            }
            obj4.results_stale = query1 !== state.query;
            obj4.game_id = game_id;
            obj4.result_index = num;
            let num2;
            if (displayed != null) {
              num2 = displayed.results.length;
            }
            if (num2 == null) {
              num2 = 0;
            }
            obj4.num_results = num2;
            let results1;
            if (displayed != null) {
              results1 = displayed.results;
            }
            if (results1 == null) {
              results1 = [];
            }
            const substr = results1.slice(0, 10);
            obj4.result_game_ids = substr.map((id) => id.id);
            ({ numResultSets: obj3.num_result_sets, numSelections: obj3.selection_number } = state);
            obj4.ms_since_session_start = timestamp - state.startedAt;
            obj2.track(AnalyticEvents.GAME_SEARCH_RESULT_SELECTED, obj4);
          }
        }
      };
      obj2.end = function end() {
        obj2.endAt(Date.now());
      };
      obj2.surface = CHAT_MENTION;
      obj2.filterGroup = DEFAULT;
      let result = map.set(CHAT_MENTION, obj2);
      value = obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value;
};

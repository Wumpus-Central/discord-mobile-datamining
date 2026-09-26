// === Module 8368: GameAutocompleteActionCreators ===

// Module 8368 (GameAutocompleteActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5421 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5420 */;

require = fn;
let closure_6 = async function _fetchGameAutocomplete(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(closure_0);
          closure_130_0 = result;
          if (null != result) {
            const shouldSuppressFetchResult = GameAutocompleteStore.shouldSuppressFetch(result);
            const dispatch = DispatcherDefault.dispatch;
            if (shouldSuppressFetchResult) {
              const obj5 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, results: [] };
              dispatch(obj5);
            } else {
              const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH", query: result };
              dispatch(obj6);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.GAMES_AUTOCOMPLETE, query: null, rejectWithError: false };
              const obj7 = { q: result };
              request.query = obj7;
              c6 = 2;
              c7 = 1;
              const obj8 = { value: HTTP.get(request), done: false };
              return obj8;
            }
          }
          c7 = 3;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_2 = closure_4;
        const obj9 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: closure_130_0 };
        closure_131_1(closure_131_2[4]).dispatch(obj9);
        throw closure_130_2;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const body = value.body;
        importDefault = body;
        if (body == null) {
          importDefault = [];
        }
        closure_130_1 = importDefault.map((id) => ({ id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability }));
        const obj10 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_130_0, results: closure_130_1 };
        closure_131_1(closure_131_2[4]).dispatch(obj10);
        c5 = 0;
        const obj = closure_131_1(closure_131_2[4]);
      }
      c5 = 0;
      c7 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } catch (tmp29) {
      closure_4 = tmp29;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp29;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export const fetchGameAutocomplete = function fetchGameAutocomplete() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
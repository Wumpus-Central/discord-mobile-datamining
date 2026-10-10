// === Module 8707: GameAutocompleteActionCreators ===

// Module 8707 (GameAutocompleteActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8236 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8235 */;

require = fn;
let closure_6 = async function _fetchGameAutocomplete(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = filter_group;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(closure_0);
          closure_131_1 = result;
          if (null != result) {
            const shouldSuppressFetchResult = GameAutocompleteStore.shouldSuppressFetch(result, filter_group);
            const dispatch = DispatcherDefault.dispatch;
            if (shouldSuppressFetchResult) {
              const obj5 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, filterGroup: filter_group, results: [] };
              dispatch(obj5);
            } else {
              const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH", query: result, filterGroup: filter_group };
              dispatch(obj6);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.GAMES_AUTOCOMPLETE, query: null, rejectWithError: false };
              const obj7 = { q: result, filter_group };
              request.query = obj7;
              c7 = 2;
              c8 = 1;
              const obj8 = { value: HTTP.get(request), done: false };
              return obj8;
            }
          }
          c8 = 3;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_131_3 = closure_5;
        const obj9 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: closure_131_1, filterGroup: closure_131_0 };
        closure_132_1(closure_132_2[4]).dispatch(obj9);
        throw closure_131_3;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const body = value.body;
        dependencyMap = body;
        if (body == null) {
          dependencyMap = [];
        }
        closure_131_2 = dependencyMap.map((id) => ({ id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability }));
        const obj10 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_131_1, filterGroup: closure_131_0, results: closure_131_2 };
        closure_132_1(closure_132_2[4]).dispatch(obj10);
        c6 = 0;
        const obj = closure_132_1(closure_132_2[4]);
      }
      c6 = 0;
      c8 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } catch (tmp31) {
      closure_5 = tmp31;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp31;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Endpoints = fn(1085).Endpoints;
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
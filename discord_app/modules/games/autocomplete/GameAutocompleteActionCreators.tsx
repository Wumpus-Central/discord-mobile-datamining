// === Module 10254: GameAutocompleteActionCreators ===

// Module 10254 (GameAutocompleteActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9379 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 9378 */;

require = fn;
let closure_6 = async function _fetchGameAutocomplete(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2) => {
    if (c9 === 2) {
      c9 = 3;
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
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp7;
            closure_132_0 = filter_group;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(closure_0);
            closure_132_1 = result;
            if (null != result) {
              const shouldSuppressFetchResult = GameAutocompleteStore.shouldSuppressFetch(result, filter_group);
              const dispatch = DispatcherDefault.dispatch;
              if (shouldSuppressFetchResult) {
                const obj5 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, filterGroup: filter_group, results: [] };
                dispatch(obj5);
              } else {
                const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH", query: result, filterGroup: filter_group };
                dispatch(obj6);
                c7 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.GAMES_AUTOCOMPLETE, signal, query: null, rejectWithError: false };
                const obj7 = { q: result, filter_group };
                request.query = obj7;
                c8 = 2;
                c9 = 1;
                const obj8 = { value: HTTP.get(request), done: false };
                return obj8;
              }
            }
            c9 = 3;
          }
        } else if (1 === tmp7) {
          c7 = 0;
          closure_132_3 = closure_6;
          const obj9 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: closure_132_1, filterGroup: closure_132_0 };
          closure_133_1(closure_133_2[4]).dispatch(obj9);
          throw closure_132_3;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const body = value.body;
          closure_3 = body;
          if (body == null) {
            closure_3 = [];
          }
          closure_132_2 = closure_3.map((id) => ({ id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability }));
          const obj10 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_132_1, filterGroup: closure_132_0, results: closure_132_2 };
          closure_133_1(closure_133_2[4]).dispatch(obj10);
          c7 = 0;
          const obj = closure_133_1(closure_133_2[4]);
        }
        c7 = 0;
        c9 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } catch (tmp31) {
        closure_6 = tmp31;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp31;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export function fetchGameAutocomplete() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
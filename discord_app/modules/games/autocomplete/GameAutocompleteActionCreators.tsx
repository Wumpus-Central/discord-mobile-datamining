// discord_app/modules/games/autocomplete/GameAutocompleteActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";

require = fn;
let closure_6 = async function _fetchGameAutocomplete(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
              const obj1 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, results: [] };
              dispatch(obj1);
            } else {
              const obj2 = { type: "GAME_AUTOCOMPLETE_FETCH", query: result };
              dispatch(obj2);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.GAMES_AUTOCOMPLETE, query: null, rejectWithError: false };
              let obj3 = { q: result };
              request.query = obj3;
              c6 = 2;
              c7 = 1;
              const obj4 = { value: HTTP.get(request), done: false };
              return obj4;
            }
          }
          c7 = 3;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_2 = closure_4;
        obj3 = closure_131_1(closure_131_2[4]);
        const obj5 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: closure_130_0 };
        obj3.dispatch(obj5);
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
        closure_130_1 = importDefault.map((id) => ({ id: String(id.id), name: id.name, icon: id.icon }));
        obj = closure_131_1(closure_131_2[4]);
        const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_130_0, results: closure_130_1 };
        obj.dispatch(obj6);
        c5 = 0;
      }
      c5 = 0;
      c7 = 3;
      const obj7 = { value, done: true };
      return obj7;
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

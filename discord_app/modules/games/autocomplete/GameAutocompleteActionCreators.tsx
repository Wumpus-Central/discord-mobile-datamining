// === Module 7601: _fetchGameAutocomplete ===

// Module 7601 (_fetchGameAutocomplete)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import set from "set" /* 6899 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function _fetchGameAutocomplete() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              c0 = undefined;
              let lib;
              const result = callback(closure_1_2[3]).normalizeGameAutocompleteQuery(c0);
              c0 = result;
              if (null != result) {
                const shouldSuppressFetchResult = closure_1_4.shouldSuppressFetch(result);
                const dispatch = closure_1_1(closure_1_2[4]).dispatch;
                if (shouldSuppressFetchResult) {
                  obj1 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: null, results: null };
                  obj1[1] = result;
                  obj1[2] = [];
                  dispatch(obj1);
                } else {
                  const obj2 = { type: "GAME_AUTOCOMPLETE_FETCH", query: null };
                  obj2[1] = result;
                  dispatch(obj2);
                  let constants = 1;
                  const HTTP = callback(closure_1_2[5]).HTTP;
                  let obj3 = { url: null, query: null, rejectWithError: false };
                  obj3[0] = constants.GAMES_AUTOCOMPLETE;
                  const obj4 = { q: null };
                  obj4[0] = result;
                  obj3[1] = obj4;
                  c6 = 2;
                  c7 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = HTTP.get(obj3);
                  return obj5;
                }
                const tmp46 = closure_1_1(closure_1_2[4]);
              }
              c7 = 3;
              const obj13 = callback(closure_1_2[3]);
            }
          } else if (1 === tmp7) {
            constants = 0;
            dependencyMap = closure_4;
            obj3 = lib(709);
            const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: null };
            obj6[1] = c0;
            obj3.dispatch(obj6);
            throw dependencyMap;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 !== 2) {
            body = body.body;
            lib = body;
            if (body == null) {
              lib = [];
            }
            lib = lib.map((item, index) => ({ id: String(item.id), name: item.name, icon: item.icon }));
            obj = lib(709);
            const obj7 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: null, results: null };
            obj7[1] = c0;
            obj7[2] = lib;
            obj.dispatch(obj7);
            constants = 0;
          }
          constants = 0;
          c7 = 3;
          const obj8 = { value: null, done: true };
          obj8[0] = body;
          return obj8;
        } catch (tmp29) {
          closure_4 = tmp29;
          if (tmp4 === constants) {
            c7 = tmp2;
            throw tmp29;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("obj132").fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export const fetchGameAutocomplete = function fetchGameAutocomplete(arg0) {
  const self = this;
  const apply = _fetchGameAutocomplete.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
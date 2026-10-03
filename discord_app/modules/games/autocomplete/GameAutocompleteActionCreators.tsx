// === Module 8565: GameAutocompleteActionCreators ===

// Module 8565 (GameAutocompleteActionCreators)
import GameAutocompleteTypes from "GameAutocompleteTypes" /* 5893 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5892 */;

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
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let DEFAULT = closure_1;
          if (closure_1 === undefined) {
            DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
          }
          closure_131_1 = DEFAULT;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_131_2 = closure_132_0(closure_132_2[4]).normalizeGameAutocompleteQuery(closure_131_0);
            if (null != closure_131_2) {
              const shouldSuppressFetchResult = closure_132_4.shouldSuppressFetch(closure_131_2, closure_131_1);
              const dispatch = closure_132_1(closure_132_2[5]).dispatch;
              if (shouldSuppressFetchResult) {
                const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_131_2, profile: closure_131_1, results: [] };
                dispatch(obj6);
              } else {
                const obj7 = { type: "GAME_AUTOCOMPLETE_FETCH", query: closure_131_2, profile: closure_131_1 };
                dispatch(obj7);
                c6 = 1;
                const HTTP = closure_132_0(closure_132_2[6]).HTTP;
                const request = { url: closure_132_5.GAMES_AUTOCOMPLETE, query: null, rejectWithError: false };
                const obj8 = { q: closure_131_2 };
                request.query = obj8;
                c7 = 3;
                c8 = 1;
                const obj9 = { value: HTTP.get(request), done: false };
                return obj9;
              }
              const tmp66 = closure_132_1(closure_132_2[5]);
            }
            c8 = 3;
            const obj14 = closure_132_0(closure_132_2[4]);
          }
        } else if (2 === tmp7) {
          c6 = 0;
          closure_131_4 = closure_5;
          const obj10 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: closure_131_2, profile: closure_131_1 };
          closure_132_1(closure_132_2[5]).dispatch(obj10);
          throw closure_131_4;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const body = value.body;
          dependencyMap = body;
          if (body == null) {
            dependencyMap = [];
          }
          closure_131_3 = dependencyMap.map((id) => ({ id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability }));
          const obj11 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_131_2, profile: closure_131_1, results: closure_131_3 };
          closure_132_1(closure_132_2[5]).dispatch(obj11);
          c6 = 0;
          const obj = closure_132_1(closure_132_2[5]);
        }
        c6 = 0;
        c8 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
    } catch (tmp42) {
      closure_5 = tmp42;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp42;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

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
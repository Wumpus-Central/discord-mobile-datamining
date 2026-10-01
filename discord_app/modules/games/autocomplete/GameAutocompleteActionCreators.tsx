// === Module 8559: GameAutocompleteActionCreators ===

// Module 8559 (GameAutocompleteActionCreators)
import GameAutocompleteTypes from "GameAutocompleteTypes" /* 5605 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5604 */;

require = fn;
let closure_6 = async function _fetchGameAutocomplete(arg0) {
  closure_4 = tmp3;
  closure_131_0 = closure_0;
  let DEFAULT = closure_1;
  if (closure_1 === undefined) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  closure_131_1 = DEFAULT;
  await "flex";
  if (1 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_131_2 = closure_132_0(closure_132_2[4]).normalizeGameAutocompleteQuery(closure_131_0);
      if (null != closure_131_2) {
        const dispatch = closure_132_1(closure_132_2[5]).dispatch;
        if (shouldSuppressFetchResult) {
          dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_131_2, profile: closure_131_1, results: [] });
        } else {
          dispatch({ type: "GAME_AUTOCOMPLETE_FETCH", query: closure_131_2, profile: closure_131_1 });
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[6]).HTTP;
          const request = { url: closure_132_5.GAMES_AUTOCOMPLETE, query: null, rejectWithError: false };
          request.query = { q: closure_131_2 };
          c7 = 3;
          c8 = 1;
          return { value: HTTP.get(request), done: false };
        }
        closure_132_1(closure_132_2[5]);
        shouldSuppressFetchResult = closure_132_4.shouldSuppressFetch(closure_131_2, closure_131_1);
      }
      c8 = 3;
      closure_132_0(closure_132_2[4]);
    }
  } else if (2 === tmp7) {
    c6 = 0;
    closure_131_4 = closure_5;
    closure_132_1(closure_132_2[5]).dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: closure_131_2, profile: closure_131_1 });
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
    closure_132_1(closure_132_2[5]).dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: closure_131_2, profile: closure_131_1, results: closure_131_3 });
    c6 = 0;
    closure_132_1(closure_132_2[5]);
  }
  return value;
};
const Endpoints = fn(1074).Endpoints;
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
// === Module 8599: GameAutocompleteActionCreators ===

// Module 8599 (GameAutocompleteActionCreators)
import Constants from "Constants" /* 1085 */;
import GameAutocompleteTypes from "GameAutocompleteTypes" /* 5900 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5899 */;
import size from "module_2" /* 2 */;

let c7;

let obj = function _fetchGameAutocomplete() {
  obj = _asyncToGenerator(async (arg0) => {
    let DEFAULT;
    let closure_2;
    let obj8;
    let query;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (1 === c7) {
      if (arg0 === 1) {
        let c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj14 = closure_132_0(closure_132_2[4]);
        query = obj14.normalizeGameAutocompleteQuery(closure_0);
        if (null != query) {
          const shouldSuppressFetchResult = closure_132_4.shouldSuppressFetch(query, DEFAULT);
          const dispatch = closure_132_1(closure_132_2[5]).dispatch;
          const tmp62 = closure_132_1(closure_132_2[5]);
          if (shouldSuppressFetchResult) {
            const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query, profile: DEFAULT, results: [] };
            dispatch(obj6);
          } else {
            const obj7 = { type: "GAME_AUTOCOMPLETE_FETCH", query, profile: DEFAULT };
            dispatch(obj7);
            let c6 = 1;
            const HTTP = closure_132_0(closure_132_2[6]).HTTP;
            const request = { url: closure_132_5.GAMES_AUTOCOMPLETE, query: obj8, rejectWithError: false };
            obj8 = { q: query };
            c7 = 3;
            c8 = 1;
            const obj9 = { value: HTTP.get(request), done: false };
            return obj9;
          }
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      let closure_4 = closure_5;
      const obj10 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query, profile: DEFAULT };
      const obj4 = closure_132_1(closure_132_2[5]);
      obj4.dispatch(obj10);
      throw closure_4;
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } else {
      const body = value.body;
      query = body;
      if (body == null) {
        query = [];
      }
      let results = query.map((id) => {
        obj = { id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability };
        return obj;
      });
      obj = closure_132_1(closure_132_2[5]);
      const obj12 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query, profile: DEFAULT, results };
      obj.dispatch(obj12);
      c6 = 0;
    }
    await "IconComponent";
    closure_4 = tmp;
    results = tmp4;
    DEFAULT = closure_1;
    if (closure_1 === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    return "Reflect";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export const fetchGameAutocomplete = function fetchGameAutocomplete() {
  return obj(...arguments);
};
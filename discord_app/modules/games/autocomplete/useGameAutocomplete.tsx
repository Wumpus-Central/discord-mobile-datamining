// discord_app/modules/games/autocomplete/useGameAutocomplete.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import GameAutocompleteTypes from "GameAutocompleteTypes.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators.tsx";
import GameSearchSession from "GameSearchSession.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let _slicedToArray = _slicedToArray_mod;
const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId(name) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const GAME_AUTOCOMPLETE = QueryIds.GAME_AUTOCOMPLETE;
    const obj = GameAutocompleteUtils;
    return GAME_AUTOCOMPLETE(obj.normalizeGameAutocompleteQuery(name), DEFAULT);
  },
  get(arg0, arg1) {
    let results = GameAutocompleteStore.getResults(arg0, arg1);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0, arg1) {
    const obj = GameAutocompleteActionCreators;
    return obj.fetchGameAutocomplete(arg0, arg1);
  },
  getIsLoading(arg0, arg1) {
    return GameAutocompleteStore.isFetching(arg0, arg1);
  },
  retryConfig: {
    retryableErrors: function isRetryableError(status) {
      status = status.status;
      let tmp = null != status;
      if (tmp) {
        let tmp2 = 429 === status;
        if (!tmp2) {
          tmp2 = status >= 500 && 503 !== status;
          const tmp3 = status >= 500 && 503 !== status;
        }
        tmp = tmp2;
      }
      return tmp;
    },
  },
  staleAfter: 3600,
  failureStaleAfter: 60,
};
const fetchStore = get_initialized.createFetchStore(GameAutocompleteStore, obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_1;
      let tmp3;
      let tmp4;
      let tmp5;
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp3, closure_129_1] = react.useState(arg0);
      _slicedToArray(react.useState(arg0), 2);
      let closure_2 = react.useRef(tmp3);
      let closure_3 = react.useRef(0);
      if (cResult[0] !== arg0) {
        const fn = function n() {
          let current;
          if (current !== ref.current) {
            if (null != current) {
              if (null != ref.current) {
                const _Date2 = Date;
                function emit() {
                  ref2.current = Date.now();
                  ref.current = current;
                  closure_1_1(current);
                }
                const _Math = Math;
                const _Math2 = Math;
                const _setTimeout = setTimeout;
                current = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
                return () => {
                  clearTimeout(current);
                };
              }
            }
            const _Date = Date;
            ref2.current = Date.now();
            ref.current = current;
            closure_1(current);
          }
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(tmp4, tmp5);
      return tmp3;
    }
  : (arg0) => {
      let closure_129_1;
      let tmp2;
      let closure_0 = arg0;
      const tmp = _slicedToArray(react.useState(arg0), 2);
      [tmp2, closure_129_1] = tmp;
      let closure_2 = react.useRef(tmp2);
      let closure_3 = react.useRef(0);
      const items = [arg0];
      const effect = react.useEffect(() => {
        let current;
        if (current !== ref.current) {
          if (null != current) {
            if (null != ref.current) {
              const _Date2 = Date;
              function emit() {
                ref2.current = Date.now();
                ref.current = current;
                closure_1_1(current);
              }
              const _Math = Math;
              const _Math2 = Math;
              const _setTimeout = setTimeout;
              current = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
              return () => {
                clearTimeout(current);
              };
            }
          }
          const _Date = Date;
          ref2.current = Date.now();
          ref.current = current;
          closure_1(current);
        }
      }, items);
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (name, surface) => {
      let DEFAULT;
      let closure_2;
      let data;
      let isLoading;
      let query;
      let tmp10;
      let tmp11;
      let tmp4;
      let tmp2 = DEFAULT;
      const obj = surface(DEFAULT[9]);
      const cResult = obj.c(27);
      surface = surface.surface;
      DEFAULT = surface.profile;
      if (undefined === DEFAULT) {
        DEFAULT = tmp(tmp2[5]).GameAutocompleteProfile.DEFAULT;
      }
      if (cResult[0] !== name) {
        const tmpResult = surface(tmp2[6]);
        const result = tmpResult.normalizeGameAutocompleteQuery(name);
        cResult[0] = name;
        cResult[1] = result;
        tmp4 = result;
      } else {
        tmp4 = cResult[1];
      }
      _slicedToArray = tmp4;
      const tmp6 = closure_7(tmp4);
      const tmp7 = fetchStore(tmp6, DEFAULT);
      ({ data, isLoading } = tmp7);
      const error = tmp7.error;
      [tmp10, tmp11] = query.useState(null);
      _slicedToArray(query.useState(null), 2);
      const tmp8 = _slicedToArray;
      if (cResult[2] === data) {
        let tmp12;
        if (cResult[3] === tmp6) {
          tmp12 = cResult[4];
        }
        if (null == tmp4) {
          if (null != tmp10) {
            tmp11(null);
          }
        } else {
          let tmp14 = null != tmp12;
          if (tmp14) {
            let results1;
            const results = tmp12.results;
            if (tmp10 != null) {
              results1 = tmp10.results;
            }
            tmp14 = results !== results1;
          }
          if (tmp14) {
            tmp11(tmp12);
          }
        }
        let tmp18 = null;
        if (null != tmp4) {
          if (tmp12 == null) {
            tmp12 = tmp10;
          }
          tmp18 = tmp12;
        }
        query = undefined;
        if (tmp18 != null) {
          query = tmp18.query;
        }
        if (query == null) {
          query = null;
        }
        let results2;
        if (tmp18 != null) {
          results2 = tmp18.results;
        }
        if (results2 == null) {
          results2 = null;
        }
        if (cResult[5] === DEFAULT) {
          let tmp21;
          if (cResult[6] === surface) {
            tmp21 = cResult[7];
          }
          const first = tmp8(obj3.useState(tmp21), 1)[0];
          if (cResult[8] === tmp4) {
            let tmp23;
            let tmp24;
            if (cResult[9] === first) {
              tmp23 = cResult[10];
              tmp24 = cResult[11];
            }
            const effect = obj3.useEffect(tmp23, tmp24);
            if (cResult[12] === query) {
              if (cResult[13] === results2) {
                let tmp26;
                let tmp27;
                let tmp29;
                if (cResult[14] === first) {
                  tmp26 = cResult[15];
                  tmp27 = cResult[16];
                }
                const effect1 = obj3.useEffect(tmp26, tmp27);
                if (cResult[17] !== first.end) {
                  const fn2 = function q() {
                    return first.end;
                  };
                  cResult[17] = first.end;
                  class F {
                    constructor() {
                      const tmp2 = null != query && null != results2;
                      if (tmp2) {
                        first.onResults(query, results2);
                      }
                    }
                  }
                  cResult[18] = fn2;
                  tmp29 = fn2;
                } else {
                  tmp29 = cResult[18];
                }
                class F {
                  constructor() {
                    const tmp2 = null != query && null != results2;
                    if (tmp2) {
                      first.onResults(query, results2);
                    }
                  }
                }
                const effect2 = obj3.useEffect(tmp29, tmp30);
                if (!isLoading) {
                  isLoading = tmp6 !== tmp4;
                }
                let tmp32 = null;
                if (tmp6 === tmp4) {
                  tmp32 = error;
                }
                if (cResult[21] === results2) {
                  if (cResult[22] === first.end) {
                    if (cResult[23] === first.select) {
                      if (cResult[24] === isLoading) {
                        let tmp33;
                        if (cResult[25] === tmp32) {
                          tmp33 = cResult[26];
                        }
                        return tmp33;
                      }
                    }
                  }
                }
                const obj2 = { results: results2, isLoading, error: tmp32, onSelect: null, endSession: first.end };
                class C {
                  constructor() {
                    const gameSearchSession = new GameSearchSession.GameSearchSession(surface, DEFAULT);
                    return gameSearchSession;
                  }
                }
                cResult[21] = results2;
                cResult[22] = first.end;
                cResult[23] = first.select;
                cResult[24] = isLoading;
                cResult[25] = tmp32;
                cResult[26] = obj2;
                tmp33 = obj2;
              }
            }
            class F {
              constructor() {
                const tmp2 = null != query && null != results2;
                if (tmp2) {
                  first.onResults(query, results2);
                }
              }
            }
            const items = [first, query, results2];
            cResult[12] = query;
            cResult[13] = results2;
            class C {
              constructor() {
                const gameSearchSession = new GameSearchSession.GameSearchSession(surface, DEFAULT);
                return gameSearchSession;
              }
            }
            cResult[15] = F;
            cResult[16] = items;
            tmp27 = items;
            tmp26 = F;
          }
          const fn = function b() {
            first.onQuery(closure_2);
          };
          const items1 = [first, tmp4];
          cResult[8] = tmp4;
          cResult[9] = first;
          class C {
            constructor() {
              const gameSearchSession = new GameSearchSession.GameSearchSession(surface, DEFAULT);
              return gameSearchSession;
            }
          }
          cResult[10] = fn;
          cResult[11] = items1;
          tmp24 = items1;
          tmp23 = fn;
        }
        class C {
          constructor() {
            const gameSearchSession = new GameSearchSession.GameSearchSession(surface, DEFAULT);
            return gameSearchSession;
          }
        }
        cResult[5] = DEFAULT;
        cResult[6] = surface;
        cResult[7] = C;
        tmp21 = C;
      }
      let tmp13 = null;
      if (null != data) {
        tmp13 = null;
        if (null != tmp6) {
          class F {
            constructor() {
              const tmp2 = null != query && null != results2;
              if (tmp2) {
                first.onResults(query, results2);
              }
            }
          }
        }
      }
      cResult[2] = data;
      cResult[3] = tmp6;
      cResult[4] = tmp13;
      tmp12 = tmp13;
    }
  : (name, arg1) => {
      let c2;
      let data;
      let isLoading;
      let profile;
      let require;
      let tmp22;
      let tmp8;
      let tmp9;
      ({ surface: require, profile } = arg1);
      if (profile === undefined) {
        let tmp2 = profile;
        profile = require("GameAutocompleteTypes").GameAutocompleteProfile.DEFAULT;
      }
      let query;
      let results2;
      let first;
      const obj = require("GameAutocompleteUtils");
      const result = obj.normalizeGameAutocompleteQuery(name);
      _slicedToArray = result;
      const tmp4 = closure_7(result);
      const tmp5 = fetchStore(tmp4, profile);
      ({ data, isLoading } = tmp5);
      const error = tmp5.error;
      [tmp8, tmp9] = query.useState(null);
      let tmp10 = null;
      _slicedToArray(query.useState(null), 2);
      const tmp6 = _slicedToArray;
      if (null != data) {
        tmp10 = null;
        if (null != tmp4) {
          tmp10 = { query: tmp4, results: data };
          const obj3 = { query: tmp4, results: data };
        }
      }
      if (null == result) {
        if (null != tmp8) {
          tmp9(null);
        }
      } else {
        let tmp11 = null != tmp10;
        if (tmp11) {
          let results1;
          const results = tmp10.results;
          if (tmp8 != null) {
            results1 = tmp8.results;
          }
          tmp11 = results !== results1;
        }
        if (tmp11) {
          tmp9(tmp10);
        }
      }
      let tmp15 = null;
      if (null != result) {
        if (tmp10 == null) {
          tmp10 = tmp8;
        }
        tmp15 = tmp10;
      }
      query = undefined;
      if (tmp15 != null) {
        query = tmp15.query;
      }
      if (query == null) {
        query = null;
      }
      results2 = undefined;
      if (tmp15 != null) {
        results2 = tmp15.results;
      }
      if (results2 == null) {
        results2 = null;
      }
      first = tmp6(
        obj2.useState(() => {
          const gameSearchSession = new GameSearchSession.GameSearchSession(_require, profile);
          return gameSearchSession;
        }),
        1,
      )[0];
      const items = [first, result];
      const effect = obj2.useEffect(() => {
        first.onQuery(c2);
      }, items);
      const items1 = [first, query, results2];
      const effect1 = obj2.useEffect(() => {
        const tmp2 = null != query && null != results2;
        if (tmp2) {
          first.onResults(query, results2);
        }
      }, items1);
      const items2 = [first];
      const effect2 = obj2.useEffect(() => first.end, items2);
      const obj6 = { results: results2, isLoading, error: tmp22, onSelect: null, endSession: null };
      if (!isLoading) {
        isLoading = tmp4 !== result;
      }
      tmp22 = null;
      if (tmp4 === result) {
        tmp22 = error;
      }
      ({ select: obj4.onSelect, end: obj4.endSession } = first);
      return obj6;
    };
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = tmp4;

// discord_app/modules/games/autocomplete/useGameAutocomplete.tsx
import c from "../../../../_runtime/00576_c.js";
import GameAutocompleteTypes from "GameAutocompleteTypes.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators.tsx";
import GameSearchSession from "GameSearchSession.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";

const require = globalThis.__r;

require = fn;
const QueryIds = fn(1085).QueryIds;
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(GameAutocompleteStore, {
  getQueryId(name) {
    if (DEFAULT === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    return QueryIds.GAME_AUTOCOMPLETE(GameAutocompleteUtils.normalizeGameAutocompleteQuery(name), DEFAULT);
  },
  get(arg0, arg1) {
    let results = GameAutocompleteStore.getResults(arg0, arg1);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0, arg1) {
    return GameAutocompleteActionCreators.fetchGameAutocomplete(arg0, arg1);
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
          let tmp3 = status >= 500;
          if (tmp3) {
            tmp3 = 503 !== status;
          }
          tmp2 = tmp3;
        }
        tmp = tmp2;
      }
      return tmp;
    },
  },
  staleAfter: 3600,
  failureStaleAfter: 60,
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      closure_0 = arg0;
      const cResult = c.c(3);
      [tmp3, dependencyMap] = noop.useState(arg0);
      noop.useRef(tmp3);
      noop.useRef(0);
      if (cResult[0] !== arg0) {
        const fn = function n() {
          if (current !== ref.current) {
            if (null != tmp) {
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
                  clearTimeout(closure_0);
                };
              }
            }
            const _Date = Date;
            ref2.current = Date.now();
            ref.current = tmp;
            closure_1(tmp);
          }
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      return tmp3;
    }
  : (arg0) => {
      closure_0 = arg0;
      [tmp2, dependencyMap] = noop.useState(arg0);
      noop.useRef(tmp2);
      noop.useRef(0);
      const items = [arg0];
      const effect = noop.useEffect(() => {
        if (current !== ref.current) {
          if (null != tmp) {
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
                clearTimeout(closure_0);
              };
            }
          }
          const _Date = Date;
          ref2.current = Date.now();
          ref.current = tmp;
          closure_1(tmp);
        }
      }, items);
      return tmp2;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = ReactCompilerGating.isReactCompilerEnabled()
  ? (name, surface) => {
      const cResult = surface(DEFAULT[9]).c(27);
      surface = surface.surface;
      DEFAULT = surface.profile;
      if (undefined === DEFAULT) {
        DEFAULT = tmp(tmp2[5]).GameAutocompleteProfile.DEFAULT;
      }
      if (cResult[0] !== name) {
        const result = tmp(tmp2[6]).normalizeGameAutocompleteQuery(name);
        cResult[0] = name;
        cResult[1] = result;
        let tmp4 = result;
        const tmpResult = tmp(tmp2[6]);
      } else {
        tmp4 = cResult[1];
      }
      _slicedToArray = tmp4;
      const tmp6 = closure_7(tmp4);
      const tmp7 = fetchStore(tmp6, DEFAULT);
      ({ data, isLoading } = tmp7);
      const obj = surface(DEFAULT[9]);
      const tmp8 = _slicedToArray;
      [tmp10, tmp11] = query.useState(null);
      if (cResult[2] === data) {
        if (cResult[3] === tmp6) {
          let tmp12 = cResult[4];
        }
        if (null == tmp4) {
          if (null != tmp10) {
            tmp11(null);
          }
        } else {
          let tmp14 = null != tmp12;
          if (tmp14) {
            let results;
            if (tmp10 != null) {
              results = tmp10.results;
            }
            tmp14 = tmp12.results !== results;
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
        let results1;
        if (tmp18 != null) {
          results1 = tmp18.results;
        }
        if (results1 == null) {
          results1 = null;
        }
        if (cResult[5] === DEFAULT) {
          if (cResult[6] === surface) {
            let tmp21 = cResult[7];
          }
          const first = tmp8(obj3.useState(tmp21), 1)[0];
          if (cResult[8] === tmp4) {
            if (cResult[9] === first) {
              let tmp23 = cResult[10];
              let tmp24 = cResult[11];
            }
            const effect = obj3.useEffect(tmp23, tmp24);
            if (cResult[12] === query) {
              if (cResult[13] === results1) {
                if (cResult[14] === first) {
                  let tmp26 = cResult[15];
                  let tmp27 = cResult[16];
                }
                const effect1 = obj3.useEffect(tmp26, tmp27);
                if (cResult[17] !== first.end) {
                  const fn2 = function q() {
                    return first.end;
                  };
                  cResult[17] = first.end;
                  class F {
                    constructor() {
                      tmp2 = null != c3;
                      tmp = c3;
                      if (tmp2) {
                        tmp3 = c4;
                        tmp2 = null != c4;
                      }
                      if (tmp2) {
                        tmp4 = closure_5;
                        tmp5 = c4;
                        onResultsResult = closure_5.onResults(tmp, c4);
                      }
                      return;
                    }
                  }
                  cResult[18] = fn2;
                  let tmp29 = fn2;
                } else {
                  tmp29 = cResult[18];
                }
                class F {
                  constructor() {
                    tmp2 = null != c3;
                    tmp = c3;
                    if (tmp2) {
                      tmp3 = c4;
                      tmp2 = null != c4;
                    }
                    if (tmp2) {
                      tmp4 = closure_5;
                      tmp5 = c4;
                      onResultsResult = closure_5.onResults(tmp, c4);
                    }
                    return;
                  }
                }
                const effect2 = obj3.useEffect(tmp29, tmp30);
                if (!isLoading) {
                  isLoading = tmp6 !== tmp4;
                }
                let error = null;
                if (tmp6 === tmp4) {
                  error = tmp7.error;
                }
                if (cResult[21] === results1) {
                  if (cResult[22] === first.end) {
                    if (cResult[23] === first.select) {
                      if (cResult[24] === isLoading) {
                        if (cResult[25] === error) {
                          let tmp33 = cResult[26];
                        }
                        return tmp33;
                      }
                    }
                  }
                }
                const obj2 = { results: results1, isLoading, error, onSelect: null, endSession: null };
                class C {
                  constructor() {
                    gameSearchSession = new closure_0(closure_1[10]).GameSearchSession(surface, DEFAULT);
                    return gameSearchSession;
                  }
                }
                obj2.endSession = first.end;
                cResult[21] = results1;
                cResult[22] = first.end;
                cResult[23] = first.select;
                cResult[24] = isLoading;
                cResult[25] = error;
                cResult[26] = obj2;
                tmp33 = obj2;
              }
            }
            class F {
              constructor() {
                tmp2 = null != c3;
                tmp = c3;
                if (tmp2) {
                  tmp3 = c4;
                  tmp2 = null != c4;
                }
                if (tmp2) {
                  tmp4 = closure_5;
                  tmp5 = c4;
                  onResultsResult = closure_5.onResults(tmp, c4);
                }
                return;
              }
            }
            const items = [first, query, results1];
            cResult[12] = query;
            cResult[13] = results1;
            class C {
              constructor() {
                gameSearchSession = new closure_0(closure_1[10]).GameSearchSession(surface, DEFAULT);
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
              gameSearchSession = new closure_0(closure_1[10]).GameSearchSession(surface, DEFAULT);
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
            gameSearchSession = new closure_0(closure_1[10]).GameSearchSession(surface, DEFAULT);
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
          const obj4 = { query: tmp6, results: data };
          class F {
            constructor() {
              tmp2 = null != c3;
              tmp = c3;
              if (tmp2) {
                tmp3 = c4;
                tmp2 = null != c4;
              }
              if (tmp2) {
                tmp4 = closure_5;
                tmp5 = c4;
                onResultsResult = closure_5.onResults(tmp, c4);
              }
              return;
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
      ({ surface: require, profile } = arg1);
      if (profile === undefined) {
        profile = require("GameAutocompleteTypes").GameAutocompleteProfile.DEFAULT;
      }
      let query;
      let results1;
      let first;
      const result = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(name);
      _slicedToArray = result;
      const tmp4 = closure_7(result);
      const tmp5 = fetchStore(tmp4, profile);
      ({ data, isLoading } = tmp5);
      const obj = require("GameAutocompleteUtils");
      const tmp6 = _slicedToArray;
      [tmp8, tmp9] = query.useState(null);
      let tmp10 = null;
      if (null != data) {
        tmp10 = null;
        if (null != tmp4) {
          const obj3 = { query: tmp4, results: data };
          tmp10 = obj3;
        }
      }
      if (null == result) {
        if (null != tmp8) {
          tmp9(null);
        }
      } else {
        let tmp11 = null != tmp10;
        if (tmp11) {
          let results;
          if (tmp8 != null) {
            results = tmp8.results;
          }
          tmp11 = tmp10.results !== results;
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
      results1 = undefined;
      if (tmp15 != null) {
        results1 = tmp15.results;
      }
      if (results1 == null) {
        results1 = null;
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
      const items1 = [first, query, results1];
      const effect1 = obj2.useEffect(() => {
        let tmp2 = null != query;
        if (tmp2) {
          tmp2 = null != results1;
        }
        if (tmp2) {
          first.onResults(query, results1);
        }
      }, items1);
      const items2 = [first];
      const effect2 = obj2.useEffect(() => first.end, items2);
      const obj6 = { results: results1, isLoading: null, error: null, onSelect: null, endSession: null };
      if (!isLoading) {
        isLoading = tmp4 !== result;
      }
      obj6.isLoading = isLoading;
      let error = null;
      if (tmp4 === result) {
        error = tmp5.error;
      }
      obj6.error = error;
      ({ select: obj4.onSelect, end: obj4.endSession } = first);
      return obj6;
    };

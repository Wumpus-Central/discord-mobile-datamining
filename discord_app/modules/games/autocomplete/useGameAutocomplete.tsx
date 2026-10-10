// === Module 8706: useGameAutocomplete ===

// Module 8706 (useGameAutocomplete)
import c from "c" /* 576 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8236 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 8707 */;
import GameSearchSession from "GameSearchSession" /* 8708 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8235 */;

const require = globalThis.__r;

require = fn;
const QueryIds = fn(1085).QueryIds;
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(GameAutocompleteStore, {
  getQueryId(name, arg1) {
    return QueryIds.GAME_AUTOCOMPLETE(GameAutocompleteUtils.normalizeGameAutocompleteQuery(name), arg1);
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
    }
  },
  staleAfter: 3600,
  failureStaleAfter: 60
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDebouncedQueryValue(arg0) {
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
}) : (function useDebouncedQueryValue(arg0) {
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
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = ReactCompilerGating.isReactCompilerEnabled() ? (function useDebouncedGameAutocomplete(name, surface) {
  const cResult = surface(filterGroup[8]).c(27);
  surface = surface.surface;
  filterGroup = surface.filterGroup;
  if (cResult[0] !== name) {
    const result = tmp(tmp2[5]).normalizeGameAutocompleteQuery(name);
    cResult[0] = name;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = tmp(tmp2[5]);
  } else {
    tmp4 = cResult[1];
  }
  _slicedToArray = tmp4;
  const tmp6 = closure_7(tmp4);
  const obj = surface(filterGroup[8]);
  tmp = surface;
  tmp2 = filterGroup;
  ({ data, isLoading } = fetchStore(tmp6, filterGroup));
  const tmp7 = fetchStore(tmp6, filterGroup);
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
      let tmp15 = null != tmp12;
      if (tmp15) {
        let results;
        if (tmp10 != null) {
          results = tmp10.results;
        }
        tmp15 = tmp12.results !== results;
      }
      if (tmp15) {
        tmp11(tmp12);
      }
    }
    let tmp19 = null;
    if (null != tmp4) {
      if (tmp12 == null) {
        tmp12 = tmp10;
      }
      tmp19 = tmp12;
    }
    query = undefined;
    if (tmp19 != null) {
      query = tmp19.query;
    }
    if (query == null) {
      query = null;
    }
    let results1;
    if (tmp19 != null) {
      results1 = tmp19.results;
    }
    if (results1 == null) {
      results1 = null;
    }
    if (cResult[5] === filterGroup) {
      if (cResult[6] === surface) {
        let tmp22 = cResult[7];
      }
      const first = tmp8(obj3.useState(tmp22), 1)[0];
      if (cResult[8] === tmp4) {
        if (cResult[9] === first) {
          let tmp24 = cResult[10];
          let tmp25 = cResult[11];
        }
        const effect = obj3.useEffect(tmp24, tmp25);
        if (cResult[12] === query) {
          if (cResult[13] === results1) {
            if (cResult[14] === first) {
              let tmp27 = cResult[15];
              let tmp28 = cResult[16];
            }
            const effect1 = obj3.useEffect(tmp27, tmp28);
            if (cResult[17] !== first.end) {
              class P {
                constructor() {
                  return closure_5.end;
                }
              }
              cResult[17] = first.end;
              class U {
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
              cResult[18] = P;
            } else {
              class P {
                constructor() {
                  return closure_5.end;
                }
              }
            }
            class U {
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
            const effect2 = obj3.useEffect(P, tmp31);
            if (!isLoading) {
              class P {
                constructor() {
                  return closure_5.end;
                }
              }
            }
            if (tmp6 === tmp4) {
              class P {
                constructor() {
                  return closure_5.end;
                }
              }
            }
            if (cResult[21] === results1) {
              class P {
                constructor() {
                  return closure_5.end;
                }
              }
            }
            const obj2 = { results: results1, isLoading, error: null, onSelect: null, endSession: null };
            class O {
              constructor() {
                gameSearchSession = new closure_0(closure_1[9]).GameSearchSession(surface, filterGroup);
                return gameSearchSession;
              }
            }
            obj2.endSession = first.end;
            cResult[21] = results1;
            cResult[22] = first.end;
            cResult[23] = first.select;
            cResult[24] = isLoading;
            cResult[25] = null;
            cResult[26] = obj2;
          }
        }
        class U {
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
        class O {
          constructor() {
            gameSearchSession = new closure_0(closure_1[9]).GameSearchSession(surface, filterGroup);
            return gameSearchSession;
          }
        }
        cResult[15] = U;
        cResult[16] = items;
        tmp28 = items;
        tmp27 = U;
      }
      const fn = function w() {
        first.onQuery(closure_2);
      };
      const items1 = [first, tmp4];
      cResult[8] = tmp4;
      cResult[9] = first;
      class O {
        constructor() {
          gameSearchSession = new closure_0(closure_1[9]).GameSearchSession(surface, filterGroup);
          return gameSearchSession;
        }
      }
      cResult[10] = fn;
      cResult[11] = items1;
      tmp25 = items1;
      tmp24 = fn;
    }
    class O {
      constructor() {
        gameSearchSession = new closure_0(closure_1[9]).GameSearchSession(surface, filterGroup);
        return gameSearchSession;
      }
    }
    cResult[5] = filterGroup;
    cResult[6] = surface;
    cResult[7] = O;
    tmp22 = O;
  }
  if (null != data) {
    class P {
      constructor() {
        return closure_5.end;
      }
    }
    if (null != tmp6) {
      class P {
        constructor() {
          return closure_5.end;
        }
      }
      tmp14[0] = tmp6;
      tmp14[1] = data;
      class U {
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
  cResult[4] = null;
  tmp12 = tmp13;
  const tmp9 = _slicedToArray(query.useState(null), 2);
}) : (function useDebouncedGameAutocomplete(name, arg1) {
  ({ surface: require, filterGroup } = arg1);
  let query;
  let results1;
  let first;
  const result = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(name);
  _slicedToArray = result;
  let tmp2 = closure_7(result);
  const tmp3 = fetchStore(tmp2, filterGroup);
  ({ data, isLoading } = tmp3);
  const obj = require("GameAutocompleteUtils");
  const tmp4 = _slicedToArray;
  [tmp6, tmp7] = query.useState(null);
  let tmp8 = null;
  if (null != data) {
    tmp8 = null;
    if (null != tmp2) {
      const obj3 = { query: tmp2, results: data };
      tmp8 = obj3;
    }
  }
  if (null == result) {
    if (null != tmp6) {
      tmp7(null);
    }
  } else {
    let tmp9 = null != tmp8;
    if (tmp9) {
      let results;
      if (tmp6 != null) {
        results = tmp6.results;
      }
      tmp9 = tmp8.results !== results;
    }
    if (tmp9) {
      tmp7(tmp8);
    }
  }
  let tmp13 = null;
  if (null != result) {
    if (tmp8 == null) {
      tmp8 = tmp6;
    }
    tmp13 = tmp8;
  }
  query = undefined;
  if (tmp13 != null) {
    query = tmp13.query;
  }
  if (query == null) {
    query = null;
  }
  results1 = undefined;
  if (tmp13 != null) {
    results1 = tmp13.results;
  }
  if (results1 == null) {
    results1 = null;
  }
  first = tmp4(obj2.useState(() => {
    const gameSearchSession = new GameSearchSession.GameSearchSession(_require, filterGroup);
    return gameSearchSession;
  }), 1)[0];
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
    isLoading = tmp2 !== result;
  }
  obj6.isLoading = isLoading;
  let error = null;
  if (tmp2 === result) {
    error = tmp3.error;
  }
  obj6.error = error;
  ({ select: obj4.onSelect, end: obj4.endSession } = first);
  return obj6;
});
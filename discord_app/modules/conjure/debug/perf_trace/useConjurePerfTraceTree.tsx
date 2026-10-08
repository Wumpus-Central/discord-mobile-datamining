// === Module 17069: useConjurePerfTraceTree ===

// Module 17069 (useConjurePerfTraceTree)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 17068 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let obj = { collapsed: new Set(), revealed: null };
let set = new Set();
obj.revealed = new Set();
const ReactCompilerGating = fn(558);
const set1 = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjurePerfTraceTree.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePerfTraceTree(spans) {
  const cResult = require("c").c(31);
  if (cResult[0] !== spans) {
    let perfTraceTreeResult = null;
    if (null != spans) {
      perfTraceTreeResult = tmp(17068).perfTraceTree(spans);
      const tmpResult = tmp(17068);
    }
    cResult[0] = spans;
    cResult[1] = perfTraceTreeResult;
    let tmp4 = perfTraceTreeResult;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    const fn = function t() {
      if (null == closure_0) {
        let overviewViewResult = obj;
      } else {
        obj = ConjurePerfTraceLayout;
        overviewViewResult = obj.overviewView(tmp);
      }
      return overviewViewResult;
    };
    cResult[2] = tmp4;
    cResult[3] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  obj = require("c");
  tmp = _require;
  [tmp8, dependencyMap] = first(noop.useState(tmp6), 2);
  const tmp7 = first(noop.useState(tmp6), 2);
  first = first(noop.useState(null), 2)[0];
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp8) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(arg0) {
          closure_0 = arg0;
          dependencyMap((collapsed) => {
            const set = new Set(collapsed.collapsed);
            if (set.has(closure_0)) {
              set.delete(closure_0);
            } else {
              set.add(closure_0);
            }
            obj = {};
            const merged = Object.assign(collapsed);
            obj.collapsed = set;
            return obj;
          });
        };
        cResult[7] = fn2;
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            closure_0 = spans;
            tmp = closure_1((revealed) => {
              obj = {};
              const merged = Object.assign(revealed);
              obj.revealed = new Set(revealed.revealed).add(closure_0);
              return obj;
            });
            return;
          }
        }
        cResult[8] = V;
      } else {
        class V {
          constructor(arg0) {
            closure_0 = spans;
            tmp = closure_1((revealed) => {
              obj = {};
              const merged = Object.assign(revealed);
              obj.revealed = new Set(revealed.revealed).add(closure_0);
              return obj;
            });
            return;
          }
        }
      }
      if (cResult[9] !== tmp4) {
        class V {
          constructor(arg0) {
            closure_0 = spans;
            tmp = closure_1((revealed) => {
              obj = {};
              const merged = Object.assign(revealed);
              obj.revealed = new Set(revealed.revealed).add(closure_0);
              return obj;
            });
            return;
          }
        }
        cResult[9] = tmp4;
        cResult[10] = tmp16;
      } else {
        class V {
          constructor(arg0) {
            closure_0 = spans;
            tmp = closure_1((revealed) => {
              obj = {};
              const merged = Object.assign(revealed);
              obj.revealed = new Set(revealed.revealed).add(closure_0);
              return obj;
            });
            return;
          }
        }
      }
      if (cResult[11] !== tmp4) {
        class A {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.expandedView(tmp));
            }
            return;
          }
        }
        cResult[11] = tmp4;
        cResult[12] = A;
      } else {
        class A {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.expandedView(tmp));
            }
            return;
          }
        }
      }
      if (cResult[13] !== tmp4) {
        class R {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.collapsedView(tmp));
            }
            return;
          }
        }
        cResult[13] = tmp4;
        cResult[14] = R;
      } else {
        class R {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.collapsedView(tmp));
            }
            return;
          }
        }
      }
      if (cResult[15] !== tmp4) {
        class N {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.overviewView(tmp));
            }
            return;
          }
        }
        cResult[15] = tmp4;
        cResult[16] = N;
      } else {
        class N {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.overviewView(tmp));
            }
            return;
          }
        }
      }
      if (cResult[17] === cResult[6]) {
        class N {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_1;
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[4]);
              tmp5 = closure_1(obj.overviewView(tmp));
            }
            return;
          }
        }
      }
      if (cResult[20] !== first) {
        class I {
          constructor(arg0) {
            return spans.key === closure_2;
          }
        }
        cResult[20] = first;
        cResult[21] = I;
      } else {
        class I {
          constructor(arg0) {
            return spans.key === closure_2;
          }
        }
      }
      const found = arr.find(I);
      cResult[17] = cResult[6];
      cResult[18] = first;
      cResult[19] = found;
    }
  }
  if (null == tmp4) {
    class I {
      constructor(arg0) {
        return spans.key === closure_2;
      }
    }
  } else {
    class I {
      constructor(arg0) {
        return spans.key === closure_2;
      }
    }
    const visiblePerfTraceRowsResult = obj3.visiblePerfTraceRows(tmp4, tmp8);
  }
  cResult[4] = tmp4;
  cResult[5] = tmp8;
  cResult[6] = visiblePerfTraceRowsResult;
  const tmp9 = first(noop.useState(null), 2);
}) : (function useConjurePerfTraceTree(arg0) {
  closure_0 = arg0;
  let items = [arg0];
  const memo = noop.useMemo(() => {
    let perfTraceTreeResult = null;
    if (null != closure_0) {
      perfTraceTreeResult = ConjurePerfTraceLayout.perfTraceTree(tmp);
    }
    return perfTraceTreeResult;
  }, items);
  const tmp2 = first(noop.useState(() => {
    if (null == memo) {
      let overviewViewResult = obj;
    } else {
      obj = ConjurePerfTraceLayout;
      overviewViewResult = obj.overviewView(tmp);
    }
    return overviewViewResult;
  }), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const tmp4 = first(noop.useState(null), 2);
  const first1 = tmp4[0];
  const items1 = [memo, first];
  const memo1 = noop.useMemo(() => {
    if (null == memo) {
      let items = [];
    } else {
      items = ConjurePerfTraceLayout.visiblePerfTraceRows(tmp, first);
    }
    return items;
  }, items1);
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((collapsed) => {
      const set = new Set(collapsed.collapsed);
      if (set.has(closure_0)) {
        set.delete(closure_0);
      } else {
        set.add(closure_0);
      }
      obj = {};
      const merged = Object.assign(collapsed);
      obj.collapsed = set;
      return obj;
    });
  }, []);
  const items2 = [memo];
  const callback1 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((revealed) => {
      obj = {};
      const merged = Object.assign(revealed);
      obj.revealed = new Set(revealed.revealed).add(closure_0);
      return obj;
    });
  }, []);
  const items3 = [memo];
  const callback2 = noop.useCallback((arg0) => {
    let findPerfTraceNodeResult = null;
    if (null != memo) {
      findPerfTraceNodeResult = ConjurePerfTraceLayout.findPerfTraceNode(tmp, arg0);
    }
    closure_0 = findPerfTraceNodeResult;
    if (null != findPerfTraceNodeResult) {
      closure_3((collapsed) => closure_0(memo[4]).expandSubtree(collapsed, findPerfTraceNodeResult));
    }
  }, items2);
  const items4 = [memo];
  const callback3 = noop.useCallback(() => {
    if (null != memo) {
      closure_3(ConjurePerfTraceLayout.expandedView(tmp));
    }
  }, items3);
  const items5 = [memo];
  const callback4 = noop.useCallback(() => {
    if (null != memo) {
      closure_3(ConjurePerfTraceLayout.collapsedView(tmp));
    }
  }, items4);
  const callback5 = noop.useCallback(() => {
    if (null != memo) {
      closure_3(ConjurePerfTraceLayout.overviewView(tmp));
    }
  }, items5);
  const found = memo1.find((key) => key.key === first1);
  obj = { rows: memo1, collapsed: first.collapsed, selectedKey: first1, selected: null, toggle: null, reveal: null, expandSubtree: null, select: null, expandAll: null, collapseAll: null, reset: null };
  let kind;
  if (found != null) {
    kind = found.kind;
  }
  let node = null;
  if ("node" === kind) {
    node = found.node;
  }
  obj.selected = node;
  obj.toggle = callback;
  obj.reveal = callback1;
  obj.expandSubtree = callback2;
  obj.select = tmp4[1];
  obj.expandAll = callback3;
  obj.collapseAll = callback4;
  obj.reset = callback5;
  return obj;
});
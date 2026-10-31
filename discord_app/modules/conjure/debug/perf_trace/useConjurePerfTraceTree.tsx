// === Module 13006: useConjurePerfTraceTree ===

// Module 13006 (useConjurePerfTraceTree)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 10894 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let obj = { collapsed: new Set(), revealed: null };
let set = new Set();
obj.revealed = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjurePerfTraceTree.tsx");

export default function useConjurePerfTraceTree(arg0) {
  _require = arg0;
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
  if (null == memo) {
    const _Set = Set;
    let set = new Set();
  } else {
    set = require("ConjurePerfTraceLayout").perfTraceKeys(memo);
    const obj2 = require("ConjurePerfTraceLayout");
  }
  noop.useRef(set);
  const items1 = [memo];
  const effect = obj.useEffect(() => {
    if (null != memo) {
      const current = ref.current;
      ref.current = closure_0(memo[2]).perfTraceKeys(tmp);
      closure_3((collapsed) => ConjurePerfTraceLayout.extendView(collapsed, memo, current));
      obj = closure_0(memo[2]);
    }
  }, items1);
  const items2 = [memo, first];
  const memo1 = obj.useMemo(() => {
    if (null == memo) {
      let items = [];
    } else {
      items = ConjurePerfTraceLayout.visiblePerfTraceRows(tmp, first);
    }
    return items;
  }, items2);
  const items3 = [memo];
  const callback = obj.useCallback((arg0) => {
    let findPerfTraceNodeResult = null;
    if (null != memo) {
      findPerfTraceNodeResult = ConjurePerfTraceLayout.findPerfTraceNode(tmp, arg0);
    }
    closure_0 = findPerfTraceNodeResult;
    if (null != findPerfTraceNodeResult) {
      closure_3((collapsed) => closure_0(memo[2]).toggleNode(collapsed, findPerfTraceNodeResult));
    }
  }, items3);
  const items4 = [memo];
  const callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((revealed) => {
      obj = {};
      const merged = Object.assign(revealed);
      obj.revealed = new Set(revealed.revealed).add(closure_0);
      return obj;
    });
  }, []);
  const items5 = [memo];
  const callback2 = obj.useCallback((arg0) => {
    let findPerfTraceNodeResult = null;
    if (null != memo) {
      findPerfTraceNodeResult = ConjurePerfTraceLayout.findPerfTraceNode(tmp, arg0);
    }
    closure_0 = findPerfTraceNodeResult;
    if (null != findPerfTraceNodeResult) {
      closure_3((collapsed) => closure_0(memo[2]).expandSubtree(collapsed, findPerfTraceNodeResult));
    }
  }, items4);
  const items6 = [memo];
  const callback3 = obj.useCallback(() => {
    if (null != memo) {
      closure_3(ConjurePerfTraceLayout.expandedView(tmp));
    }
  }, items5);
  const items7 = [memo];
  const callback4 = obj.useCallback(() => {
    if (null != memo) {
      closure_3(ConjurePerfTraceLayout.collapsedView(tmp));
    }
  }, items6);
  const callback5 = obj.useCallback(() => {
    if (null != memo) {
      closure_3(ConjurePerfTraceLayout.overviewView(tmp));
    }
  }, items7);
  const found = memo1.find((key) => key.key === first1);
  const obj3 = { rows: memo1, collapsed: first.collapsed, selectedKey: first1, selected: null, toggle: null, reveal: null, expandSubtree: null, select: null, expandAll: null, collapseAll: null, reset: null };
  let kind;
  if (found != null) {
    kind = found.kind;
  }
  let node = null;
  if ("node" === kind) {
    node = found.node;
  }
  obj3.selected = node;
  obj3.toggle = callback;
  obj3.reveal = callback1;
  obj3.expandSubtree = callback2;
  obj3.select = tmp4[1];
  obj3.expandAll = callback3;
  obj3.collapseAll = callback4;
  obj3.reset = callback5;
  return obj3;
};
// === Module 8894: useGameProfileNavigation ===

// Module 8894 (useGameProfileNavigation)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let obj = {};
obj[fn(8895).GameProfileNavTab.OVERVIEW] = fn(8859).GameProfileTrackActionActions.Overview;
obj[fn(8895).GameProfileNavTab.COMMUNITIES] = fn(8859).GameProfileTrackActionActions.Communities;
obj[fn(8895).GameProfileNavTab.COMMERCE] = fn(8859).GameProfileTrackActionActions.GameShop;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileNavigation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileNavigation(arg0) {
  _require = arg0;
  const cResult = require("c").c(10);
  [selectedTab, _slicedToArray] = noop.useState(require("GameProfileNavTypes").GameProfileNavTab.OVERVIEW);
  obj = require("c");
  [tmp5, noop] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(arg0) {
      closure_2(arg0);
      noop((arg0) => arg0 + 1);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === selectedTab) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === tmp7) {
      if (cResult[5] === selectedTab) {
        let tmp8 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        if (cResult[8] === tmp5) {
          let tmp9 = cResult[9];
        }
        return tmp9;
      }
      const obj2 = { navigation: tmp8, selectionVersion: tmp5 };
      cResult[7] = tmp8;
      cResult[8] = tmp5;
      cResult[9] = obj2;
      tmp9 = obj2;
    }
    const obj3 = { selectedTab, selectTab: tmp7 };
    cResult[4] = tmp7;
    cResult[5] = selectedTab;
    cResult[6] = obj3;
    tmp8 = obj3;
  }
  class N {
    constructor(arg0) {
      if (arg0 !== closure_1) {
        tmp = closure_4;
        tmp2 = closure_4[arg0];
        tmp3 = null;
        if (null != tmp2) {
          tmp4 = closure_0;
          tmp5 = closure_0(tmp2);
        }
      }
      tmp6 = closure_4(arg0);
      return;
    }
  }
  cResult[1] = selectedTab;
  cResult[2] = arg0;
  cResult[3] = N;
  tmp7 = N;
}) : (function useGameProfileNavigation(arg0) {
  _require = arg0;
  [selectedTab, _slicedToArray] = noop.useState(require("GameProfileNavTypes").GameProfileNavTab.OVERVIEW);
  [tmp4, noop] = noop.useState(0);
  const callback = noop.useCallback((arg0) => {
    closure_2(arg0);
    noop((arg0) => arg0 + 1);
  }, []);
  const items = [selectedTab, callback, arg0];
  const callback1 = noop.useCallback((arg0) => {
    if (arg0 !== first) {
      if (null != obj[arg0]) {
        closure_0(tmp2);
      }
    }
    callback(arg0);
  }, items);
  obj = { navigation: null, selectionVersion: tmp4 };
  const items1 = [selectedTab, callback1];
  obj.navigation = noop.useMemo(() => ({ selectedTab, selectTab: callback1 }), items1);
  return obj;
});
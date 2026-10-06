// === Module 15174: useDisplayNameStylesNewItems ===

// Module 15174 (useDisplayNameStylesNewItems)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 15175 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let set;

let closure_4;
let hasOwnProperty;
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: hasOwnProperty } = DisplayNameStylesConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let seenFonts;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let obj = stateFromStores(576);
  const cResult = obj.c(10);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayNameStylesSeenStore];
    const fn = function n() {
      return seenFonts.getSeenFonts();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    let tmp8;
    let tmp11;
    let tmp12;
    if (cResult[3] === arr) {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function y(fontId) {
        const obj = stateFromStores(dependencyMap[6]);
        const result = obj.markDisplayNameStyleFontSeen(fontId);
      };
      cResult[7] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] !== tmp8) {
      const obj2 = { dotFontIds: tmp8, dismissFontDot: tmp11 };
      cResult[8] = tmp8;
      cResult[9] = obj2;
      tmp12 = obj2;
    } else {
      tmp12 = cResult[9];
    }
    return tmp12;
  }
  if (cResult[5] !== stateFromStores) {
    class S {
      constructor(arg0) {
        const hasItem = hasOwnProperty.includes(arg0) && !stateFromStores.has(arg0);
        return hasItem;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = S;
  } else {
    class S {
      constructor(arg0) {
        const hasItem = hasOwnProperty.includes(arg0) && !stateFromStores.has(arg0);
        return hasItem;
      }
    }
  }
  set = new Set(arr.filter(S));
  cResult[2] = stateFromStores;
  cResult[3] = arr;
  cResult[4] = set;
  tmp8 = set;
}) : ((arg0) => {
  let closure_0;
  let items1;
  let seenFonts;
  let stateFromStores;
  const _require = arg0;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = obj.useStateFromStores(items, () => seenFonts.getSeenFonts());
  const obj2 = {
    dotFontIds: react.useMemo(() => {
      set = new Set(closure_0.filter((item) => {
        const hasItem = closure_2_5.includes(item) && !set.has(item);
        return hasItem;
      }));
      return set;
    }, items1),
    dismissFontDot: react.useCallback((fontId) => {
      const obj = closure_0(stateFromStores[6]);
      const result = obj.markDisplayNameStyleFontSeen(fontId);
    }, [])
  };
  items1 = [arg0, stateFromStores];
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let seenEffects;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let obj = stateFromStores(576);
  const cResult = obj.c(10);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayNameStylesSeenStore];
    const fn = function l() {
      return seenEffects.getSeenEffects();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    let tmp8;
    let tmp11;
    let tmp12;
    if (cResult[3] === arr) {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function y(effectId) {
        const obj = stateFromStores(dependencyMap[6]);
        const result = obj.markDisplayNameStyleEffectSeen(effectId);
      };
      cResult[7] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] !== tmp8) {
      const obj2 = { dotEffectIds: tmp8, dismissEffectDot: tmp11 };
      cResult[8] = tmp8;
      cResult[9] = obj2;
      tmp12 = obj2;
    } else {
      tmp12 = cResult[9];
    }
    return tmp12;
  }
  if (cResult[5] !== stateFromStores) {
    class S {
      constructor(arg0) {
        const hasItem = React3.includes(arg0) && !stateFromStores.has(arg0);
        return hasItem;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = S;
  } else {
    class S {
      constructor(arg0) {
        const hasItem = React3.includes(arg0) && !stateFromStores.has(arg0);
        return hasItem;
      }
    }
  }
  set = new Set(arr.filter(S));
  cResult[2] = stateFromStores;
  cResult[3] = arr;
  cResult[4] = set;
  tmp8 = set;
}) : ((arg0) => {
  let closure_0;
  let items1;
  let seenEffects;
  let stateFromStores;
  const _require = arg0;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = obj.useStateFromStores(items, () => seenEffects.getSeenEffects());
  const obj2 = {
    dotEffectIds: react.useMemo(() => {
      set = new Set(closure_0.filter((item) => {
        const hasItem = closure_2_4.includes(item) && !set.has(item);
        return hasItem;
      }));
      return set;
    }, items1),
    dismissEffectDot: react.useCallback((effectId) => {
      const obj = closure_0(stateFromStores[6]);
      const result = obj.markDisplayNameStyleEffectSeen(effectId);
    }, [])
  };
  items1 = [arg0, stateFromStores];
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let newFontsBadgeDismissed;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayNameStylesSeenStore];
    const fn = function n() {
      return newFontsBadgeDismissed.getNewFontsBadgeDismissed();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== arr) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          return closure_1_5.includes(arg0);
        }
      }
      cResult[4] = S;
    } else {
      class S {
        constructor(arg0) {
          return closure_1_5.includes(arg0);
        }
      }
    }
    cResult[2] = arr;
    cResult[3] = arr.some(S);
    const someResult = arr.some(S);
  } else {
    class S {
      constructor(arg0) {
        return closure_1_5.includes(arg0);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return closure_1_5.includes(arg0);
      }
    }
    cResult[5] = tmp12;
  } else {
    class S {
      constructor(arg0) {
        return closure_1_5.includes(arg0);
      }
    }
  }
  if (tmp8) {
    class S {
      constructor(arg0) {
        return closure_1_5.includes(arg0);
      }
    }
  }
  if (cResult[6] !== tmp8) {
    class S {
      constructor(arg0) {
        return closure_1_5.includes(arg0);
      }
    }
    tmp14[0] = tmp8;
    tmp14[1] = tmp12;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
  } else {
    class S {
      constructor(arg0) {
        return closure_1_5.includes(arg0);
      }
    }
  }
  return tmp14;
}) : ((arg0) => {
  let closure_0;
  let newFontsBadgeDismissed;
  const _require = arg0;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  const tmp2 = react.useMemo(() => closure_0.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores;
  const obj3 = {
    showFontsBadge: tmp2,
    dismissFontsBadge: react.useCallback(() => {
      const obj = closure_0(dependencyMap[6]);
      const result = obj.markDisplayNameStyleNewFontsBadgeDismissed();
    }, [])
  };
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let newEffectsBadgeDismissed;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayNameStylesSeenStore];
    const fn = function l() {
      return newEffectsBadgeDismissed.getNewEffectsBadgeDismissed();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== arr) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          return closure_1_4.includes(arg0);
        }
      }
      cResult[4] = S;
    } else {
      class S {
        constructor(arg0) {
          return closure_1_4.includes(arg0);
        }
      }
    }
    cResult[2] = arr;
    cResult[3] = arr.some(S);
    const someResult = arr.some(S);
  } else {
    class S {
      constructor(arg0) {
        return closure_1_4.includes(arg0);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return closure_1_4.includes(arg0);
      }
    }
    cResult[5] = tmp12;
  } else {
    class S {
      constructor(arg0) {
        return closure_1_4.includes(arg0);
      }
    }
  }
  if (tmp8) {
    class S {
      constructor(arg0) {
        return closure_1_4.includes(arg0);
      }
    }
  }
  if (cResult[6] !== tmp8) {
    class S {
      constructor(arg0) {
        return closure_1_4.includes(arg0);
      }
    }
    tmp14[0] = tmp8;
    tmp14[1] = tmp12;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
  } else {
    class S {
      constructor(arg0) {
        return closure_1_4.includes(arg0);
      }
    }
  }
  return tmp14;
}) : ((arg0) => {
  let closure_0;
  let newEffectsBadgeDismissed;
  const _require = arg0;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  const tmp2 = react.useMemo(() => closure_0.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores;
  const obj3 = {
    showEffectsBadge: tmp2,
    dismissEffectsBadge: react.useCallback(() => {
      const obj = closure_0(dependencyMap[6]);
      const result = obj.markDisplayNameStyleNewEffectsBadgeDismissed();
    }, [])
  };
  return obj3;
});
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = tmp3;
export const useDisplayNameStylesNewEffects = tmp4;
export const useDisplayNameStylesNewFontsBadge = tmp5;
export const useDisplayNameStylesNewEffectsBadge = tmp6;
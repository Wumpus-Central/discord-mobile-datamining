// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DisplayNameStylesSeenStore from "../DisplayNameStylesSeenStore.tsx";

const require = globalThis.__r;

require = fn;
const DisplayNameStylesConstants = fn(1407);
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: hasOwnProperty } = DisplayNameStylesConstants);
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDisplayNameStylesNewFonts(arr) {
      const cResult = stateFromStores(576).c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DisplayNameStylesSeenStore];
        const fn = function l() {
          return seenFonts.getSeenFonts();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === arr) {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function y(fontId) {
              const result = stateFromStores(dependencyMap[6]).markDisplayNameStyleFontSeen(fontId);
            };
            cResult[7] = fn2;
            let tmp11 = fn2;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== cResult[4]) {
            const obj2 = { dotFontIds: tmp8, dismissFontDot: tmp11 };
            cResult[8] = tmp8;
            cResult[9] = obj2;
            let tmp12 = obj2;
          } else {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      if (cResult[5] !== stateFromStores) {
        class S {
          constructor(arg0) {
            hasItem = FLYWHEEL_FONTS.includes(arr);
            if (hasItem) {
              tmp2 = closure_0;
              hasItem = !closure_0.has(arr);
            }
            return hasItem;
          }
        }
        cResult[5] = stateFromStores;
        cResult[6] = S;
      } else {
        class S {
          constructor(arg0) {
            hasItem = FLYWHEEL_FONTS.includes(arr);
            if (hasItem) {
              tmp2 = closure_0;
              hasItem = !closure_0.has(arr);
            }
            return hasItem;
          }
        }
      }
      const tmpResult = stateFromStores(504);
      cResult[2] = stateFromStores;
      cResult[3] = arr;
      cResult[4] = new Set(arr.filter(S));
      set = new Set(arr.filter(S));
    }
  : function useDisplayNameStylesNewFonts(arg0) {
      const _require = arg0;
      const items = [DisplayNameStylesSeenStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => seenFonts.getSeenFonts());
      const obj2 = {
        dotFontIds: null,
        dismissFontDot: noop.useCallback((fontId) => {
          const result = closure_0(stateFromStores[6]).markDisplayNameStyleFontSeen(fontId);
        }, []),
      };
      const items1 = [arg0, stateFromStores];
      obj2.dotFontIds = noop.useMemo(
        () =>
          new Set(
            closure_0.filter((item) => {
              let hasItem = closure_2_5.includes(item);
              if (hasItem) {
                hasItem = !set.has(item);
              }
              return hasItem;
            }),
          ),
        items1,
      );
      return obj2;
    };
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDisplayNameStylesNewEffects(arr) {
      const cResult = stateFromStores(576).c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DisplayNameStylesSeenStore];
        const fn = function n() {
          return seenEffects.getSeenEffects();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === arr) {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function y(effectId) {
              const result = stateFromStores(dependencyMap[6]).markDisplayNameStyleEffectSeen(effectId);
            };
            cResult[7] = fn2;
            let tmp11 = fn2;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== cResult[4]) {
            const obj2 = { dotEffectIds: tmp8, dismissEffectDot: tmp11 };
            cResult[8] = tmp8;
            cResult[9] = obj2;
            let tmp12 = obj2;
          } else {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      if (cResult[5] !== stateFromStores) {
        class S {
          constructor(arg0) {
            hasItem = FLYWHEEL_EFFECTS.includes(arr);
            if (hasItem) {
              tmp2 = closure_0;
              hasItem = !closure_0.has(arr);
            }
            return hasItem;
          }
        }
        cResult[5] = stateFromStores;
        cResult[6] = S;
      } else {
        class S {
          constructor(arg0) {
            hasItem = FLYWHEEL_EFFECTS.includes(arr);
            if (hasItem) {
              tmp2 = closure_0;
              hasItem = !closure_0.has(arr);
            }
            return hasItem;
          }
        }
      }
      const tmpResult = stateFromStores(504);
      cResult[2] = stateFromStores;
      cResult[3] = arr;
      cResult[4] = new Set(arr.filter(S));
      set = new Set(arr.filter(S));
    }
  : function useDisplayNameStylesNewEffects(arg0) {
      const _require = arg0;
      const items = [DisplayNameStylesSeenStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => seenEffects.getSeenEffects());
      const obj2 = {
        dotEffectIds: null,
        dismissEffectDot: noop.useCallback((effectId) => {
          const result = closure_0(stateFromStores[6]).markDisplayNameStyleEffectSeen(effectId);
        }, []),
      };
      const items1 = [arg0, stateFromStores];
      obj2.dotEffectIds = noop.useMemo(
        () =>
          new Set(
            closure_0.filter((item) => {
              let hasItem = closure_2_4.includes(item);
              if (hasItem) {
                hasItem = !set.has(item);
              }
              return hasItem;
            }),
          ),
        items1,
      );
      return obj2;
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDisplayNameStylesNewFontsBadge(arr) {
      const cResult = c.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DisplayNameStylesSeenStore];
        const fn = function l() {
          return newFontsBadgeDismissed.getNewFontsBadgeDismissed();
        };
        cResult[0] = items;
        cResult[1] = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      initialize;
      if (cResult[2] !== arr) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
          cResult[4] = S;
        } else {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
        }
        const someResult = arr.some(S);
        cResult[2] = arr;
        cResult[3] = someResult;
      } else {
        class S {
          constructor(arg0) {
            return closure_1_5.includes(arr);
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
          cResult[5] = tmp13;
        } else {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
        }
        if (tmp8) {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
        }
        if (cResult[6] !== tmp8) {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
          tmp15[0] = tmp8;
          tmp15[1] = tmp13;
          cResult[6] = tmp8;
          cResult[7] = tmp15;
        } else {
          class S {
            constructor(arg0) {
              return closure_1_5.includes(arr);
            }
          }
        }
        return tmp15;
      }
    }
  : function useDisplayNameStylesNewFontsBadge(arg0) {
      const _require = arg0;
      const items = [DisplayNameStylesSeenStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        newFontsBadgeDismissed.getNewFontsBadgeDismissed(),
      );
      const obj = require("initialize");
      const tmp2 = noop.useMemo(() => closure_0.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores;
      return {
        showFontsBadge:
          noop.useMemo(() => closure_0.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores,
        dismissFontsBadge: noop.useCallback(() => {
          const result = closure_0(dependencyMap[6]).markDisplayNameStyleNewFontsBadgeDismissed();
        }, []),
      };
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = tmp3;
export const useDisplayNameStylesNewEffects = tmp4;
export const useDisplayNameStylesNewFontsBadge = tmp5;
export const useDisplayNameStylesNewEffectsBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDisplayNameStylesNewEffectsBadge(arr) {
      const cResult = c.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DisplayNameStylesSeenStore];
        const fn = function n() {
          return newEffectsBadgeDismissed.getNewEffectsBadgeDismissed();
        };
        cResult[0] = items;
        cResult[1] = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      initialize;
      if (cResult[2] !== arr) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
          cResult[4] = S;
        } else {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
        }
        const someResult = arr.some(S);
        cResult[2] = arr;
        cResult[3] = someResult;
      } else {
        class S {
          constructor(arg0) {
            return closure_1_4.includes(arr);
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
          cResult[5] = tmp13;
        } else {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
        }
        if (tmp8) {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
        }
        if (cResult[6] !== tmp8) {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
          tmp15[0] = tmp8;
          tmp15[1] = tmp13;
          cResult[6] = tmp8;
          cResult[7] = tmp15;
        } else {
          class S {
            constructor(arg0) {
              return closure_1_4.includes(arr);
            }
          }
        }
        return tmp15;
      }
    }
  : function useDisplayNameStylesNewEffectsBadge(arg0) {
      const _require = arg0;
      const items = [DisplayNameStylesSeenStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        newEffectsBadgeDismissed.getNewEffectsBadgeDismissed(),
      );
      const obj = require("initialize");
      const tmp2 = noop.useMemo(() => closure_0.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores;
      return {
        showEffectsBadge:
          noop.useMemo(() => closure_0.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores,
        dismissEffectsBadge: noop.useCallback(() => {
          const result = closure_0(dependencyMap[6]).markDisplayNameStyleNewEffectsBadgeDismissed();
        }, []),
      };
    };

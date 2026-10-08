// === Module 17547: SoundboardHooks ===

// Module 17547 (SoundboardHooks)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
const SoundboardStyleConstants = fn(17539);
({ SOUNDS_PER_ROW: closure_7, SOUND_ROW_PADDING: closure_8 } = SoundboardStyleConstants);
const ACTION_SHEET_MAX_WIDTH = fn(6830).ACTION_SHEET_MAX_WIDTH;
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundButtonStyleConfig() {
  const cResult = c.c(2);
  const result = (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - closure_1_8) / React5;
  if (cResult[0] !== result) {
    const obj2 = { buttonWidth: result };
    cResult[0] = result;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useSoundButtonStyleConfig() {
  return { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - closure_1_8) / React5 };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = tmp3;
export const useMaybeFetchSoundboardSounds = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchSoundboardSounds(shouldFetch) {
  const cResult = shouldFetch(576).c(10);
  shouldFetch = shouldFetch.shouldFetch;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class S {
      constructor() {
        return closure_1_5.saturation;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = shouldFetch(576);
  const stateFromStores = shouldFetch(504).useStateFromStores(tmp4, S);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ThemeStore];
    class S {
      constructor() {
        return closure_1_5.saturation;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = shouldFetch(504);
  const stateFromStores1 = shouldFetch(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== shouldFetch) {
    const fn = function _() {
      closure_0 = asyncGeneratorStep(async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (c0) {
                const FrecencyUserSettingsActionCreators = v3(2045).FrecencyUserSettingsActionCreators;
                const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                c1 = 1;
                c0 = 1;
                const obj5 = { value: v3(7038).maybeFetchSoundboardSounds(), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp9) {
            c0 = tmp;
            throw tmp9;
          }
        }
      });
      (function fetchAndHydrateColors() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    };
    cResult[4] = shouldFetch;
    class S {
      constructor() {
        return closure_1_5.saturation;
      }
    }
    cResult[5] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === shouldFetch) {
        let tmp14 = cResult[9];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      class S {
        constructor() {
          return closure_1_5.saturation;
        }
      }
    }
  }
  const items2 = [stateFromStores, stateFromStores1, shouldFetch];
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = shouldFetch;
  cResult[9] = items2;
  tmp14 = items2;
  const tmpResult2 = shouldFetch(504);
}) : (function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  const items = [AccessibilityStore];
  const stateFromStores = shouldFetch(504).useStateFromStores(items, () => saturation.saturation);
  let obj = shouldFetch(504);
  const items1 = [ThemeStore];
  const items2 = [stateFromStores, shouldFetch(504).useStateFromStores(items1, () => shouldFetch(dependencyMap[10]).isThemeDark(theme.theme)), shouldFetch];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchAndHydrateColors2() {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (c0) {
              const FrecencyUserSettingsActionCreators = shouldFetch(2045).FrecencyUserSettingsActionCreators;
              const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
              c1 = 1;
              c0 = 1;
              const obj5 = { value: shouldFetch(7038).maybeFetchSoundboardSounds(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp9) {
          c0 = tmp;
          throw tmp9;
        }
      }
    };
    !(function fetchAndHydrateColors() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items2);
});
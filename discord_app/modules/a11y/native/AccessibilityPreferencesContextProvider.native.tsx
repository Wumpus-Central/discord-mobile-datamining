// === Module 15849: AccessibilityPreferencesContextProvider ===

// Module 15849 (AccessibilityPreferencesContextProvider)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4596 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(25);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return { enabled: AccessibilityStore.useReducedMotion, rawValue: AccessibilityStore.rawPrefersReducedMotion };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    const fn2 = function b() {
      return AccessibilityStore.systemPrefersCrossfades;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    const fn3 = function y() {
      return { enabled: AccessibilityStore.useForcedColors, rawValue: AccessibilityStore.systemForcedColors };
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp13 = fn3;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult7 = initialize;
  const stateFromStoresObject1 = initialize.useStateFromStoresObject(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    const fn4 = function w() {
      return AccessibilityStore.alwaysShowLinkDecorations;
    };
    cResult[6] = items3;
    cResult[7] = fn4;
    let tmp17 = fn4;
    let tmp16 = items3;
  } else {
    tmp16 = cResult[6];
    tmp17 = cResult[7];
  }
  const tmpResult8 = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp16, tmp17);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [AccessibilityStore];
    const fn5 = function _() {
      return AccessibilityStore.keyboardModeEnabled;
    };
    cResult[8] = fn5;
    cResult[9] = items4;
    let tmp21 = items4;
    let tmp20 = fn5;
  } else {
    tmp20 = cResult[8];
    tmp21 = cResult[9];
  }
  const tmpResult9 = initialize;
  const stateFromStores2 = initialize.useStateFromStores(tmp21, tmp20);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [AccessibilityStore];
    const fn6 = function k() {
      return AccessibilityStore.isSwitchIconsEnabled;
    };
    cResult[10] = items5;
    cResult[11] = fn6;
    let tmp25 = fn6;
    let tmp24 = items5;
  } else {
    tmp24 = cResult[10];
    tmp25 = cResult[11];
  }
  const tmpResult10 = initialize;
  const stateFromStores3 = initialize.useStateFromStores(tmp24, tmp25);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [AccessibilityStore];
    const fn7 = function p() {
      return AccessibilityStore.minToastDurationMs;
    };
    cResult[12] = items6;
    cResult[13] = fn7;
    let tmp29 = fn7;
    let tmp28 = items6;
  } else {
    tmp28 = cResult[12];
    tmp29 = cResult[13];
  }
  const tmpResult11 = initialize;
  const stateFromStores4 = initialize.useStateFromStores(tmp28, tmp29);
  if (cResult[14] === stateFromStores1) {
    if (cResult[15] === stateFromStoresObject1) {
      if (cResult[16] === stateFromStores2) {
        if (cResult[17] === stateFromStores4) {
          if (cResult[18] === stateFromStores) {
            if (cResult[19] === stateFromStoresObject) {
              if (cResult[20] === stateFromStores3) {
                let tmp32 = cResult[21];
              }
              if (cResult[22] === tmp32) {
                if (cResult[23] === children) {
                  let tmp33 = cResult[24];
                }
                return tmp33;
              }
              const obj2 = { value: tmp32, children };
              const tmp35 = jsx(AccessibilityPreferencesContext.AccessibilityPreferencesContext.Provider, { value: tmp32, children });
              cResult[22] = tmp32;
              cResult[23] = children;
              cResult[24] = tmp35;
              tmp33 = tmp35;
            }
          }
        }
      }
    }
  }
  const obj3 = { reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3, minToastDurationMs: stateFromStores4 };
  cResult[14] = stateFromStores1;
  cResult[15] = stateFromStoresObject1;
  cResult[16] = stateFromStores2;
  cResult[17] = stateFromStores4;
  cResult[18] = stateFromStores;
  cResult[19] = stateFromStoresObject;
  cResult[20] = stateFromStores3;
  cResult[21] = obj3;
  tmp32 = obj3;
  const tmpResult12 = initialize;
}) : ((children) => {
  let stateFromStoresObject;
  let stateFromStores;
  let stateFromStores1;
  const items = [stateFromStores1];
  stateFromStoresObject = stateFromStoresObject(stateFromStores[5]).useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const obj = stateFromStoresObject(stateFromStores[5]);
  const items1 = [stateFromStores1];
  stateFromStores = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const obj2 = stateFromStoresObject(stateFromStores[5]);
  const items2 = [stateFromStores1];
  const stateFromStoresObject1 = stateFromStoresObject(stateFromStores[5]).useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const obj3 = stateFromStoresObject(stateFromStores[5]);
  const items3 = [stateFromStores1];
  stateFromStores1 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  const obj4 = stateFromStoresObject(stateFromStores[5]);
  const items4 = [stateFromStores1];
  const stateFromStores2 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const obj5 = stateFromStoresObject(stateFromStores[5]);
  const items5 = [stateFromStores1];
  const stateFromStores3 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const obj6 = stateFromStoresObject(stateFromStores[5]);
  const items6 = [stateFromStores1];
  const stateFromStores4 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items6, () => stateFromStores1.minToastDurationMs);
  const items7 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3, stateFromStores4];
  value = stateFromStoresObject1.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3, minToastDurationMs: stateFromStores4 }), items7);
  return stateFromStores2(stateFromStoresObject(stateFromStores[6]).AccessibilityPreferencesContext.Provider, { value, children: children.children });
});
// === Module 15849: AccessibilityPreferencesContextProvider ===

// Module 15849 (AccessibilityPreferencesContextProvider)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4596 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(25);
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
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    const fn2 = function b() {
      return AccessibilityStore.systemPrefersCrossfades;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult7 = get_initialized;
  const stateFromStores = tmpResult7.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    const fn3 = function y() {
      return { enabled: AccessibilityStore.useForcedColors, rawValue: AccessibilityStore.systemForcedColors };
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    tmp13 = fn3;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult8 = get_initialized;
  const stateFromStoresObject1 = tmpResult8.useStateFromStoresObject(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    const fn4 = function w() {
      return AccessibilityStore.alwaysShowLinkDecorations;
    };
    cResult[6] = items3;
    cResult[7] = fn4;
    tmp17 = fn4;
    tmp16 = items3;
  } else {
    tmp16 = cResult[6];
    tmp17 = cResult[7];
  }
  const tmpResult9 = get_initialized;
  const stateFromStores1 = tmpResult9.useStateFromStores(tmp16, tmp17);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [AccessibilityStore];
    const fn5 = function _() {
      return AccessibilityStore.keyboardModeEnabled;
    };
    cResult[8] = fn5;
    cResult[9] = items4;
    tmp21 = items4;
    tmp20 = fn5;
  } else {
    tmp20 = cResult[8];
    tmp21 = cResult[9];
  }
  const tmpResult10 = get_initialized;
  const stateFromStores2 = tmpResult10.useStateFromStores(tmp21, tmp20);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [AccessibilityStore];
    const fn6 = function k() {
      return AccessibilityStore.isSwitchIconsEnabled;
    };
    cResult[10] = items5;
    cResult[11] = fn6;
    tmp25 = fn6;
    tmp24 = items5;
  } else {
    tmp24 = cResult[10];
    tmp25 = cResult[11];
  }
  const tmpResult11 = get_initialized;
  const stateFromStores3 = tmpResult11.useStateFromStores(tmp24, tmp25);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [AccessibilityStore];
    const fn7 = function p() {
      return AccessibilityStore.minToastDurationMs;
    };
    cResult[12] = items6;
    cResult[13] = fn7;
    tmp29 = fn7;
    tmp28 = items6;
  } else {
    tmp28 = cResult[12];
    tmp29 = cResult[13];
  }
  const tmpResult12 = get_initialized;
  const stateFromStores4 = tmpResult12.useStateFromStores(tmp28, tmp29);
  if (cResult[14] === stateFromStores1) {
    if (cResult[15] === stateFromStoresObject1) {
      if (cResult[16] === stateFromStores2) {
        if (cResult[17] === stateFromStores4) {
          if (cResult[18] === stateFromStores) {
            if (cResult[19] === stateFromStoresObject) {
              let tmp32;
              if (cResult[20] === stateFromStores3) {
                tmp32 = cResult[21];
              }
              if (cResult[22] === tmp32) {
                let tmp33;
                if (cResult[23] === children) {
                  tmp33 = cResult[24];
                }
                return tmp33;
              }
              const tmp35 = jsx(react3.AccessibilityPreferencesContext.Provider, { value: tmp32, children });
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
}) : ((children) => {
  let stateFromStoresObject;
  let stateFromStores;
  let stateFromStores1;
  children = children.children;
  const items = [stateFromStores1];
  const obj = stateFromStoresObject(stateFromStores[5]);
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const items1 = [stateFromStores1];
  const obj2 = stateFromStoresObject(stateFromStores[5]);
  stateFromStores = obj2.useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const items2 = [stateFromStores1];
  const obj3 = stateFromStoresObject(stateFromStores[5]);
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const items3 = [stateFromStores1];
  const obj4 = stateFromStoresObject(stateFromStores[5]);
  stateFromStores1 = obj4.useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  const items4 = [stateFromStores1];
  const obj5 = stateFromStoresObject(stateFromStores[5]);
  const stateFromStores2 = obj5.useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const items5 = [stateFromStores1];
  const obj6 = stateFromStoresObject(stateFromStores[5]);
  const stateFromStores3 = obj6.useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const items6 = [stateFromStores1];
  const obj7 = stateFromStoresObject(stateFromStores[5]);
  const stateFromStores4 = obj7.useStateFromStores(items6, () => stateFromStores1.minToastDurationMs);
  const items7 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3, stateFromStores4];
  const value = stateFromStoresObject1.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3, minToastDurationMs: stateFromStores4 }), items7);
  return stateFromStores2(stateFromStoresObject(stateFromStores[6]).AccessibilityPreferencesContext.Provider, { value, children });
});
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default tmp2;
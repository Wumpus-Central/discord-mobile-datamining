// === Module 14112: AccessibilityPreferencesContextProvider ===

// Module 14112 (AccessibilityPreferencesContextProvider)
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default function AccessibilityPreferencesContextProvider(children) {
  let stateFromStoresObject;
  let stateFromStores;
  let stateFromStoresObject1;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  const items = [stateFromStores1];
  stateFromStoresObject = stateFromStoresObject(stateFromStores[3]).useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const obj = stateFromStoresObject(stateFromStores[3]);
  const items1 = [stateFromStores1];
  stateFromStores = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const obj2 = stateFromStoresObject(stateFromStores[3]);
  const items2 = [stateFromStores1];
  stateFromStoresObject1 = stateFromStoresObject(stateFromStores[3]).useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const obj3 = stateFromStoresObject(stateFromStores[3]);
  const items3 = [stateFromStores1];
  stateFromStores1 = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  const obj4 = stateFromStoresObject(stateFromStores[3]);
  const items4 = [stateFromStores1];
  stateFromStores2 = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const obj5 = stateFromStoresObject(stateFromStores[3]);
  const items5 = [stateFromStores1];
  stateFromStores3 = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const items6 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  const value = stateFromStoresObject1.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3 }), items6);
  return stateFromStores2(stateFromStoresObject(stateFromStores[4]).AccessibilityPreferencesContext.Provider, { value, children: children.children });
};
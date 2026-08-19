// discord_app/modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx
import noop from "../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../AccessibilityStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default function AccessibilityPreferencesContextProvider(children) {
  let stateFromStoresObject;
  let stateFromStores;
  let stateFromStores1;
  const items = [stateFromStores1];
  stateFromStoresObject = stateFromStoresObject(stateFromStores[3]).useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const obj = stateFromStoresObject(stateFromStores[3]);
  const items1 = [stateFromStores1];
  stateFromStores = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const obj2 = stateFromStoresObject(stateFromStores[3]);
  const items2 = [stateFromStores1];
  const stateFromStoresObject1 = stateFromStoresObject(stateFromStores[3]).useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const obj3 = stateFromStoresObject(stateFromStores[3]);
  const items3 = [stateFromStores1];
  stateFromStores1 = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  const obj4 = stateFromStoresObject(stateFromStores[3]);
  const items4 = [stateFromStores1];
  const stateFromStores2 = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const obj5 = stateFromStoresObject(stateFromStores[3]);
  const items5 = [stateFromStores1];
  const stateFromStores3 = stateFromStoresObject(stateFromStores[3]).useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const items6 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  const value = stateFromStoresObject1.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3 }), items6);
  return stateFromStores2(stateFromStoresObject(stateFromStores[4]).AccessibilityPreferencesContext.Provider, { value, children: children.children });
};
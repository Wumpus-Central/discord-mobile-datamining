// === Module 7001: useNavigatorShouldCrossfade ===

// Module 7001 (useNavigatorShouldCrossfade)
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4279 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
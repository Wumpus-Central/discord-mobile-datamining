// === Module 6313: useNavigatorShouldCrossfade ===

// Module 6313 (useNavigatorShouldCrossfade)
import context2 from "context" /* 1356 */;
import noop from "noop" /* 19 */;

require = fn;
const result = require("obj132").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(context2.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
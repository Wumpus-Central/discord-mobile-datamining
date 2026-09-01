// discord_app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
import context2 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";

require = arg1;
const result = require("set").fileFinishedImporting(
  "design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx",
);

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(context2.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};

// discord_app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
import noop from "noop";
import { context } from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";

const require = arg1;
const result = require("context").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(context /* context */.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
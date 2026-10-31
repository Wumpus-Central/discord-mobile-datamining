// === Module 16904: AnalyticsLocationsProvider ===

// Module 16904 (AnalyticsLocationsProvider)
import useAnalyticsLocations from "useAnalyticsLocations" /* 7326 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/AnalyticsLocationsProvider.tsx");

export function AnalyticsLocationsProvider(children) {
  return jsx(useAnalyticsLocations.LocationContext.Provider, { value: useAnalyticsLocationsDefault(...children.newLocations).analyticsLocations, children: children.children });
}
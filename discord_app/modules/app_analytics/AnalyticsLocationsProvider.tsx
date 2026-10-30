// discord_app/modules/app_analytics/AnalyticsLocationsProvider.tsx
import useAnalyticsLocations from "useAnalyticsLocations.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/AnalyticsLocationsProvider.tsx");

export function AnalyticsLocationsProvider(children) {
  return jsx(useAnalyticsLocations.LocationContext.Provider, {
    value: useAnalyticsLocationsDefault(...children.newLocations).analyticsLocations,
    children: children.children,
  });
}

// === Module 16131: ConnectionsTracking ===

// Module 16131 (ConnectionsTracking)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export function trackEmptyStateCardClicked(platform_type) {
  AnalyticsUtilsDefault.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
}
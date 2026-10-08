// === Module 15045: ConnectionsTracking ===

// Module 15045 (ConnectionsTracking)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platform_type) {
  AnalyticsUtilsDefault.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
};
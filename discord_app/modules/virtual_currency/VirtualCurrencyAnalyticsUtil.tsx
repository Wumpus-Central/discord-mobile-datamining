// === Module 16892: VirtualCurrencyAnalyticsUtil ===

// Module 16892 (VirtualCurrencyAnalyticsUtil)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyAnalyticsUtil.tsx");

export function trackOrbsClick(arg0) {
  ({ pageType, sectionType, ctaObject } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.ORBS_ENTRYPOINT_CLICKED, { location_page: pageType, location_section: sectionType, location_object: ctaObject });
}
// discord_app/modules/virtual_currency/VirtualCurrencyAnalyticsUtil.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyAnalyticsUtil.tsx");

export function trackOrbsClick(arg0) {
  ({ pageType, sectionType, ctaObject } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.ORBS_ENTRYPOINT_CLICKED, {
    location_page: pageType,
    location_section: sectionType,
    location_object: ctaObject,
  });
}

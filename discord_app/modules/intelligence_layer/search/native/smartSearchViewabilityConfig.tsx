// === Module 17453: smartSearchViewabilityConfig ===

// Module 17453 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9313 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12058 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12060 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const items = [
  {
    viewabilityConfig: { viewAreaCoveragePercentThreshold: 33, waitForInteraction: false },
    onViewableItemsChanged(changed) {
      changed = changed.changed;
      const found = changed.find((item) => item.item.type === constants.SMART_SEARCH);
      if (null != found) {
        SmartSearchAnalyticsManagerDefault.setIsRowViewable(found.isViewable, SearchSessionAnalyticsManagerDefault);
      }
    }
  }
];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;
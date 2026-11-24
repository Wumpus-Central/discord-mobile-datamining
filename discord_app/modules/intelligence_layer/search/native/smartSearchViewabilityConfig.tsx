// === Module 18868: smartSearchViewabilityConfig ===

// Module 18868 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 8878 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13113 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13139 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13141 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const items = [
  {
    viewabilityConfig: { viewAreaCoveragePercentThreshold: SmartSearchConstants.SMART_SEARCH_VIEWABILITY_THRESHOLD_PERCENT, waitForInteraction: false },
    onViewableItemsChanged(viewableItems) {
      viewableItems = viewableItems.viewableItems;
      const someResult = viewableItems.some((item) => item.item.type === constants.SMART_SEARCH);
      SmartSearchAnalyticsManagerDefault.setIsRowViewable(someResult, SearchSessionAnalyticsManagerDefault);
    }
  }
];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;
// === Module 19058: smartSearchViewabilityConfig ===

// Module 19058 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9020 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13296 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13322 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13324 */;
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
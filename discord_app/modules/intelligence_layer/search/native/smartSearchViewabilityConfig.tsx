// === Module 19058: smartSearchViewabilityConfig ===

// Module 19058 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9976 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14125 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14127 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const items = [
  {
    viewabilityConfig: { viewAreaCoveragePercentThreshold: 33, waitForInteraction: false },
    onViewableItemsChanged(viewableItems) {
      viewableItems = viewableItems.viewableItems;
      const someResult = viewableItems.some((item) => item.item.type === constants.SMART_SEARCH);
      SmartSearchAnalyticsManagerDefault.setIsRowViewable(someResult, SearchSessionAnalyticsManagerDefault);
    }
  }
];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;
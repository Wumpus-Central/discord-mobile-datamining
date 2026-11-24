// discord_app/modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx
import SearchConstants from "../../../search/SearchConstants.tsx";
import SmartSearchConstants from "../SmartSearchConstants.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../SmartSearchAnalyticsManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const items = [
  {
    viewabilityConfig: {
      viewAreaCoveragePercentThreshold: SmartSearchConstants.SMART_SEARCH_VIEWABILITY_THRESHOLD_PERCENT,
      waitForInteraction: false,
    },
    onViewableItemsChanged(viewableItems) {
      viewableItems = viewableItems.viewableItems;
      const someResult = viewableItems.some((item) => item.item.type === constants.SMART_SEARCH);
      SmartSearchAnalyticsManagerDefault.setIsRowViewable(someResult, SearchSessionAnalyticsManagerDefault);
    },
  },
];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;

// discord_app/modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx
import SearchConstants from "../../../search/SearchConstants.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../SmartSearchAnalyticsManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
let obj = {
  viewabilityConfig: { viewAreaCoveragePercentThreshold: 33, waitForInteraction: false },
  onViewableItemsChanged(changed) {
    changed = changed.changed;
    const found = changed.find((item) => item.item.type === constants.SMART_SEARCH);
    if (null != found) {
      const obj = SmartSearchAnalyticsManagerDefault;
      obj.setIsRowViewable(found.isViewable, SearchSessionAnalyticsManagerDefault);
    }
  },
};
const items = [obj];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;

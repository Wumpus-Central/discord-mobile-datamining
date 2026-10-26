// === Module 16376: openHexagonCampaignSheet ===

// Module 16376 (openHexagonCampaignSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16377, dependencyMap.paths), HexagonCampaignSheet);
};
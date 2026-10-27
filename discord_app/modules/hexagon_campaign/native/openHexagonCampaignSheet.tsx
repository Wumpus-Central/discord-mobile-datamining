// === Module 16416: openHexagonCampaignSheet ===

// Module 16416 (openHexagonCampaignSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16417, dependencyMap.paths), HexagonCampaignSheet);
};
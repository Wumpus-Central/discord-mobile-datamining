// === Module 17148: openHexagonCampaignSheet ===

// Module 17148 (openHexagonCampaignSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17149, dependencyMap.paths), HexagonCampaignSheet);
}
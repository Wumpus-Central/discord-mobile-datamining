// === Module 17276: openHexagonCampaignSheet ===

// Module 17276 (openHexagonCampaignSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17277, dependencyMap.paths), HexagonCampaignSheet);
}
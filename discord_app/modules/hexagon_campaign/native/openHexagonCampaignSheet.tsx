// === Module 16466: openHexagonCampaignSheet ===

// Module 16466 (openHexagonCampaignSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16467, dependencyMap.paths), HexagonCampaignSheet);
}
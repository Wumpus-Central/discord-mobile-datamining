// === Module 15912: openHexagonCampaignLearnMore ===

// Module 15912 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4997 */;
import LinkingDefault from "Linking" /* 5661 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export const openHexagonCampaignLearnMore = function openHexagonCampaignLearnMore() {
  LinkingDefault.openURL(closure_2);
};
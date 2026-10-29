// discord_app/modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx
import HexagonCampaignConstants from "../HexagonCampaignConstants.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  LinkingDefault.openURL(closure_2);
}

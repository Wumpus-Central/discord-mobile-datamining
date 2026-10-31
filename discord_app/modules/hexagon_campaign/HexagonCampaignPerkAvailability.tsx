// === Module 5042: HexagonCampaignPerkAvailability ===

// Module 5042 (HexagonCampaignPerkAvailability)
import initialize from "initialize" /* 504 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5041 */;
import HexagonCampaignExperiment from "HexagonCampaignExperiment" /* 5043 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPerkAvailability.tsx");

export function useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE, HexagonCampaignSheet) {
  const isHexagonCampaignEnabled = HexagonCampaignExperiment.useIsHexagonCampaignEnabled(HexagonCampaignSheet);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  return HexagonCampaignUtils.getHexagonCampaignPerkAvailability({ perk: DISPLAY_NAME_STYLE, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled });
}
export function getHexagonCampaignPerkAvailabilityForCurrentUser(CLIENT_THEME, MobileThemesUtils) {
  const obj2 = { perk: CLIENT_THEME, premiumType: null, isCampaignEnabled: null };
  const currentUser = UserStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  obj2.premiumType = premiumType;
  const obj = HexagonCampaignUtils;
  obj2.isCampaignEnabled = HexagonCampaignExperiment.getIsHexagonCampaignEnabled(MobileThemesUtils);
  return obj.getHexagonCampaignPerkAvailability(obj2);
}
export function isHexagonCampaignPerkExpiredForCurrentUser(CLIENT_THEME, arg1) {
  const currentUser = UserStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return HexagonCampaignUtils.isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg1);
}
// === Module 4997: HexagonCampaignPerkAvailability ===

// Module 4997 (HexagonCampaignPerkAvailability)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4996 */;
import HexagonCampaignExperiment from "HexagonCampaignExperiment" /* 4998 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPerkAvailability.tsx");

export const useHexagonCampaignPerkAvailability = ReactCompilerGating.isReactCompilerEnabled() ? (function useHexagonCampaignPerkAvailability(perk, arg1) {
  const cResult = c.c(6);
  const isHexagonCampaignEnabled = HexagonCampaignExperiment.useIsHexagonCampaignEnabled(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      return premiumType;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === isHexagonCampaignEnabled) {
    if (cResult[3] === perk) {
      if (cResult[4] === stateFromStores) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
  }
  const tmpResult = initialize;
  const hexagonCampaignPerkAvailability = HexagonCampaignUtils.getHexagonCampaignPerkAvailability({ perk, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled });
  cResult[2] = isHexagonCampaignEnabled;
  cResult[3] = perk;
  cResult[4] = stateFromStores;
  cResult[5] = hexagonCampaignPerkAvailability;
  tmp9 = hexagonCampaignPerkAvailability;
  const obj3 = { perk, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled };
  const tmpResult2 = HexagonCampaignUtils;
}) : (function useHexagonCampaignPerkAvailability(perk, arg1) {
  const isHexagonCampaignEnabled = HexagonCampaignExperiment.useIsHexagonCampaignEnabled(arg1);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  return HexagonCampaignUtils.getHexagonCampaignPerkAvailability({ perk, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled });
});
export const getHexagonCampaignPerkAvailabilityForCurrentUser = function getHexagonCampaignPerkAvailabilityForCurrentUser(CLIENT_THEME, MobileThemesUtils) {
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
};
export const isHexagonCampaignPerkExpiredForCurrentUser = function isHexagonCampaignPerkExpiredForCurrentUser(CLIENT_THEME, arg1) {
  const currentUser = UserStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return HexagonCampaignUtils.isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg1);
};
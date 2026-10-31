// === Module 16890: OrbWalletUtils ===

// Module 16890 (OrbWalletUtils)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7607 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(1074).CollectiblesMobileShopScreen;
const PremiumTypes = fn(1385).PremiumTypes;
const context = noop.createContext({ analyticsPage: AnalyticsLocationDefault.ORB_WALLET });
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletUtils.native.tsx");

export const OrbWalletAnalyticsContext = context;
export function useOrbWalletAnalyticsPage() {
  return noop.useContext(context).analyticsPage;
}
export function useOpenNitroCheckoutFromOrbWallet(ORB_CHALLENGE_DISCOVERY_CLICK) {
  const objectType = ORB_CHALLENGE_DISCOVERY_CLICK;
  const analyticsPage = noop.useContext(context).analyticsPage;
  analyticsLocations = analyticsPage(analyticsLocations[4])(ORB_CHALLENGE_DISCOVERY_CLICK).analyticsLocations;
  const items = [analyticsPage, analyticsLocations, ORB_CHALLENGE_DISCOVERY_CLICK];
  return noop.useCallback(() => {
    const obj = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
    const obj2 = { page: analyticsPage, section: AnalyticsLocationDefault.ORB_WALLET, objectType };
    obj.analyticsLocation = obj2;
    obj.analyticsLocations = analyticsLocations;
    obj.premiumType = PremiumTypes.TIER_2;
    openPremiumPlanSelectionActionSheetDefault(obj, "stack");
  }, items);
}
export function navigateToShopFromOrbWallet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let ORBS = analyticsLocations.screen;
  if (ORBS === undefined) {
    ORBS = constants.ORBS;
  }
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj2 = CollectiblesActionCreators;
  const result = obj2.openCollectiblesShopMobile({ analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: analyticsLocations.onNavigateAway });
  const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: analyticsLocations.onNavigateAway };
}
export const ORB_CHALLENGE_DISCOVERY_CLICKS = {
  (analyticsLocations) => {
    analyticsLocations = analyticsLocations.analyticsLocations;
    let ORBS = constants.SHOP_ALL;
    if (analyticsLocations === undefined) {
      analyticsLocations = [];
    }
    if (ORBS === undefined) {
      ORBS = constants.ORBS;
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: analyticsLocations.reopenWallet });
    const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: analyticsLocations.reopenWallet };
  },
  (analyticsLocations) => {
    analyticsLocations = analyticsLocations.analyticsLocations;
    let ORBS = constants.SHOP_ALL;
    if (analyticsLocations === undefined) {
      analyticsLocations = [];
    }
    if (ORBS === undefined) {
      ORBS = constants.ORBS;
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: analyticsLocations.reopenWallet });
    const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: analyticsLocations.reopenWallet };
  },
  (openNitroCheckout) => {
    openNitroCheckout.openNitroCheckout();
  }
};
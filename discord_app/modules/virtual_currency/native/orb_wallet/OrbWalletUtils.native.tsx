// === Module 17639: OrbWalletUtils ===

// Module 17639 (OrbWalletUtils)
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7600 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const PremiumTypes = fn(1386).PremiumTypes;
const context = noop.createContext({ analyticsPage: AnalyticsLocationDefault.ORB_WALLET });
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletUtils.native.tsx");

export const OrbWalletAnalyticsContext = context;
export function useOrbWalletAnalyticsPage() {
  return noop.useContext(context).analyticsPage;
}
export function useOpenNitroCheckoutFromOrbWallet(ORB_WALLET_HEADER_NITRO_UPSELL_CTA) {
  importDefault = ORB_WALLET_HEADER_NITRO_UPSELL_CTA;
  const analyticsPage = analyticsLocations.useContext(context).analyticsPage;
  analyticsLocations = require("useAnalyticsLocations")(ORB_WALLET_HEADER_NITRO_UPSELL_CTA).analyticsLocations;
  const items = [analyticsPage, analyticsLocations, ORB_WALLET_HEADER_NITRO_UPSELL_CTA];
  return analyticsLocations.useCallback(() => {
    const obj = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
    const obj2 = { page: analyticsPage, section: AnalyticsLocationDefault.ORB_WALLET, objectType };
    obj.analyticsLocation = obj2;
    obj.analyticsLocations = analyticsLocations;
    obj.premiumType = PremiumTypes.TIER_2;
    openPremiumPlanSelectionActionSheetDefault(obj, "stack");
  }, items);
}
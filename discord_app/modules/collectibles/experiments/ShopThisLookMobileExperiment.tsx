// discord_app/modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-07-shop-this-look-mobile",
  kind: "user",
  defaultConfig: { shopThisLookMobileEnabled: false },
  variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopThisLookMobileEnabled = function useIsShopThisLookMobileEnabled(UserProfileActionSheet) {
  return apexExperiment.useConfig({ location: UserProfileActionSheet }).shopThisLookMobileEnabled;
};

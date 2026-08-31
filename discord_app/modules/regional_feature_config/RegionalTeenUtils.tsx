// discord_app/modules/regional_feature_config/RegionalTeenUtils.tsx
import closure_2 from "../../../_runtime/00019_noop.js";
import closure_3 from "RegionalFeatureConfigStore.tsx";
import set from "../../../_runtime/00002_set.js";

const require = arg1;
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(require("set").CountryCodesSets.EU_COUNTRIES, 2);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = function useUserCountryCode() {
  const items = [closure_3];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(closure_1_1[4]);
    }
  }, items1);
  return stateFromStores;
};
export const useIsTeenInCountrySet = function useIsTeenInCountrySet(set) {
  const items = [closure_3];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(closure_1_1[4]);
    }
  }, items1);
  const obj = stateFromStores(589);
  let userIsTeen = stateFromStores(8734).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = set.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
export const useIsTeenInStrictCountry = function useIsTeenInStrictCountry() {
  const items = [closure_3];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(closure_1_1[4]);
    }
  }, items1);
  let obj = set;
  const obj2 = stateFromStores(589);
  let userIsTeen = stateFromStores(8734).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = obj.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
// discord_app/modules/regional_feature_config/RegionalTeenUtils.tsx
import noop from "noop";
import getRegionalFeatureConfig from "getRegionalFeatureConfig";
import set from "set";

const require = arg1;
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(require("set").CountryCodesSets.EU_COUNTRIES, 2);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = function useUserCountryCode() {
  const items = [getRegionalFeatureConfig];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_1[4]);
    }
  }, items1);
  return stateFromStores;
};
export const useIsTeenInCountrySet = function useIsTeenInCountrySet(set) {
  const items = [getRegionalFeatureConfig];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_1[4]);
    }
  }, items1);
  const obj = stateFromStores(589);
  let userIsTeen = stateFromStores(8152).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = set.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
export const useIsTeenInStrictCountry = function useIsTeenInStrictCountry() {
  const items = [getRegionalFeatureConfig];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_1[4]);
    }
  }, items1);
  let obj = set;
  const obj2 = stateFromStores(589);
  let userIsTeen = stateFromStores(8152).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = obj.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
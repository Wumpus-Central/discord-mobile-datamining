// === Module 11591: set ===

// Module 11591 (set)
import noop from "noop" /* 19 */;
import getRegionalFeatureConfig from "getRegionalFeatureConfig" /* 4073 */;

const require = fn;
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(require("set").CountryCodesSets.EU_COUNTRIES, 2);
const set = new Set(items);
const result = require("obj132").fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = function useUserCountryCode() {
  const items = [closure_3];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(dependencyMap[4]).fetchUserCountryCode();
      const obj = stateFromStores(dependencyMap[4]);
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
      const userCountryCode = stateFromStores(dependencyMap[4]).fetchUserCountryCode();
      const obj = stateFromStores(dependencyMap[4]);
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
  const items = [closure_3];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(dependencyMap[4]).fetchUserCountryCode();
      const obj = stateFromStores(dependencyMap[4]);
    }
  }, items1);
  const obj2 = stateFromStores(589);
  let userIsTeen = stateFromStores(8152).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = set.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
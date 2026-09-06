// === Module 12419: RegionalTeenUtils ===

// Module 12419 (RegionalTeenUtils)
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10959 */;
import noop from "module_19" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 4775 */;

require = fn;
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(fn(4778).CountryCodesSets.EU_COUNTRIES, 2);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = function useUserCountryCode() {
  const items = [RegionalFeatureConfigStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  return stateFromStores;
};
export const useIsTeenInCountrySet = function useIsTeenInCountrySet(set) {
  const items = [RegionalFeatureConfigStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  const obj = stateFromStores(504);
  let userIsTeen = stateFromStores(8644).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = set.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
export const useIsTeenInStrictCountry = function useIsTeenInStrictCountry() {
  const items = [RegionalFeatureConfigStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  const obj2 = stateFromStores(504);
  let userIsTeen = stateFromStores(8644).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = set.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
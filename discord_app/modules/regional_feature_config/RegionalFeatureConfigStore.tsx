// === Module 4076: getRegionalFeatureConfig ===

// Module 4076 (getRegionalFeatureConfig)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isFeatureTeenByDefault from "isFeatureTeenByDefault" /* 4081 */;
import DEFAULT_COUNTRY_CODE_NAME from "DEFAULT_COUNTRY_CODE_NAME" /* 4077 */;

({ getDefaultCountryCode: obj1, getCountryCodeByAlpha2: c3 } = DEFAULT_COUNTRY_CODE_NAME);
let c4 = null;
let c5 = null;
const Store = initializeDefault.Store;
class RegionalFeatureConfigStore extends Store {
}
const prototype = RegionalFeatureConfigStore.prototype;
prototype["getRegionalFeatureConfig"] = function getRegionalFeatureConfig() {
  return c4;
};
prototype["isFeatureAgeGated"] = function isFeatureAgeGated(arg0) {
  let flag;
  if (c4 != null) {
    flag = c4.isFeatureAgeGated(arg0);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isSettingTeenByDefault"] = function isSettingTeenByDefault(arg0) {
  let flag;
  if (c4 != null) {
    flag = c4.isFeatureTeenByDefault(arg0);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasAgeGatedFeatures"] = function hasAgeGatedFeatures() {
  let flag;
  if (c4 != null) {
    flag = c4.hasAgeGatedFeatures();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasTeenDefaults"] = function hasTeenDefaults() {
  let flag;
  if (c4 != null) {
    flag = c4.hasTeenDefaults();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["shouldCollectAppStoreSignal"] = function shouldCollectAppStoreSignal() {
  let flag;
  if (c4 != null) {
    flag = c4.shouldCollectAppStoreSignal();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getUserCountryCode"] = function getUserCountryCode() {
  return c5;
};
RegionalFeatureConfigStore.displayName = "RegionalFeatureConfigStore";
const regionalFeatureConfigStore = new RegionalFeatureConfigStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = callback2(countryCode);
      if (tmp2 == null) {
        tmp2 = callback();
      }
      closure_5 = tmp2;
    }
    let fromConnectionOpenResult = null;
    if (null != countryCode.regionalFeatureConfig) {
      const RegionalFeatureConfig = isFeatureTeenByDefault.RegionalFeatureConfig;
      fromConnectionOpenResult = RegionalFeatureConfig.fromConnectionOpen(countryCode.regionalFeatureConfig);
    }
    c4 = fromConnectionOpenResult;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = callback2(countryCode);
      if (tmp2 == null) {
        tmp2 = callback();
      }
      closure_5 = tmp2;
    }
    return false;
  }
});
const result = set.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default regionalFeatureConfigStore;
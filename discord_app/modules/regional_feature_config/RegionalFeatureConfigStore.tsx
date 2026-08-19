// discord_app/modules/regional_feature_config/RegionalFeatureConfigStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import isFeatureTeenByDefault from "RegionalFeatureConfigModels.tsx";
import DEFAULT_COUNTRY_CODE_NAME from "../i18n/CountryCodeUtils.tsx";

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
  if (_null != null) {
    flag = _null.isFeatureAgeGated(arg0);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isSettingTeenByDefault"] = function isSettingTeenByDefault(arg0) {
  let flag;
  if (_null != null) {
    flag = _null.isFeatureTeenByDefault(arg0);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasAgeGatedFeatures"] = function hasAgeGatedFeatures() {
  let flag;
  if (_null != null) {
    flag = _null.hasAgeGatedFeatures();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasTeenDefaults"] = function hasTeenDefaults() {
  let flag;
  if (_null != null) {
    flag = _null.hasTeenDefaults();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["shouldCollectAppStoreSignal"] = function shouldCollectAppStoreSignal() {
  let flag;
  if (_null != null) {
    flag = _null.shouldCollectAppStoreSignal();
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
const result = obj132.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default regionalFeatureConfigStore;
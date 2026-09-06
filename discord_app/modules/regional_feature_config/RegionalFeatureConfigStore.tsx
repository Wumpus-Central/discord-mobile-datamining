// discord_app/modules/regional_feature_config/RegionalFeatureConfigStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import RegionalFeatureConfigModels from "RegionalFeatureConfigModels.tsx";
import CountryCodeUtils from "../i18n/CountryCodeUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ getDefaultCountryCode: c2, getCountryCodeByAlpha2: c3 } = CountryCodeUtils);
let c4 = null;
let closure_5 = null;
const Store = initializeDefault.Store;
class RegionalFeatureConfigStore extends Store {}
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
  return closure_5;
};
RegionalFeatureConfigStore.displayName = "RegionalFeatureConfigStore";
const regionalFeatureConfigStore = new RegionalFeatureConfigStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = React3(countryCode);
      if (tmp2 == null) {
        tmp2 = React2();
      }
      closure_5 = tmp2;
    }
    let fromConnectionOpenResult = null;
    if (null != countryCode.regionalFeatureConfig) {
      const RegionalFeatureConfig = RegionalFeatureConfigModels.RegionalFeatureConfig;
      fromConnectionOpenResult = RegionalFeatureConfig.fromConnectionOpen(countryCode.regionalFeatureConfig);
    }
    c4 = fromConnectionOpenResult;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = React3(countryCode);
      if (tmp2 == null) {
        tmp2 = React2();
      }
      closure_5 = tmp2;
    }
    return false;
  },
});
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default regionalFeatureConfigStore;

// === Module 5110: RegionalFeatureConfigStore ===

// Module 5110 (RegionalFeatureConfigStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import RegionalFeatureConfigModels from "RegionalFeatureConfigModels" /* 5115 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5111 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ getDefaultCountryCode: c2, getCountryCodeByAlpha2: c3 } = CountryCodeUtils);
let c4 = null;
let closure_5 = null;
const Store = get_initializedDefault.Store;
class RegionalFeatureConfigStore extends Store {
  getRegionalFeatureConfig() {
    return c4;
  }
  isFeatureAgeGated(arg0) {
    let flag;
    if (_null != null) {
      flag = _null.isFeatureAgeGated(arg0);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isSettingTeenByDefault(arg0) {
    let flag;
    if (_null != null) {
      flag = _null.isFeatureTeenByDefault(arg0);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasAgeGatedFeatures() {
    let flag;
    if (_null != null) {
      flag = _null.hasAgeGatedFeatures();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasTeenDefaults() {
    let flag;
    if (_null != null) {
      flag = _null.hasTeenDefaults();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  shouldCollectAppStoreSignal() {
    let flag;
    if (_null != null) {
      flag = _null.shouldCollectAppStoreSignal();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getUserCountryCode() {
    return closure_5;
  }
}
const prototype = RegionalFeatureConfigStore.prototype;
RegionalFeatureConfigStore.displayName = "RegionalFeatureConfigStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = _false(countryCode);
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
    let c4 = fromConnectionOpenResult;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = _false(countryCode);
      if (tmp2 == null) {
        tmp2 = React2();
      }
      closure_5 = tmp2;
    }
    return false;
  }
};
const regionalFeatureConfigStore = new RegionalFeatureConfigStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default regionalFeatureConfigStore;
// === Module 4780: isFeatureTeenByDefault ===

// Module 4780 (isFeatureTeenByDefault)
import set from "set" /* 2 */;

class SettingsConfig {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.teenByDefault = global;
    return obj;
  }
}
const prototype = SettingsConfig.prototype;
prototype["isFeatureTeenByDefault"] = function isFeatureTeenByDefault(arg0) {
  return this.teenByDefault & arg0;
};
prototype["hasTeenDefaults"] = function hasTeenDefaults() {
  let num = this.teenByDefault;
  if (num == null) {
    num = 0;
  }
  return 0 !== num;
};
class AgeVerificationConfig {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.gatedFeatures = global;
    return obj;
  }
}
const prototype2 = AgeVerificationConfig.prototype;
prototype2["isFeatureAgeGated"] = function isFeatureAgeGated(arg0) {
  return this.gatedFeatures & arg0;
};
prototype2["hasAgeGatedFeatures"] = function hasAgeGatedFeatures() {
  let num = this.gatedFeatures;
  if (num == null) {
    num = 0;
  }
  return 0 !== num;
};
class AppStoreConfig {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.shouldCollectSignal = global;
    return obj;
  }
}
let RegionalFeatureConfig;
class RegionalFeatureConfig {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.settings = global;
    obj.ageVerification = require;
    obj.appStore = importDefault;
    return obj;
  }
}
const prototype3 = RegionalFeatureConfig.prototype;
prototype3["isFeatureAgeGated"] = function isFeatureAgeGated(arg0) {
  const ageVerification = this.ageVerification;
  return ageVerification.isFeatureAgeGated(arg0);
};
prototype3["isFeatureTeenByDefault"] = function isFeatureTeenByDefault(arg0) {
  const settings = this.settings;
  return settings.isFeatureTeenByDefault(arg0);
};
prototype3["hasAgeGatedFeatures"] = function hasAgeGatedFeatures() {
  const ageVerification = this.ageVerification;
  return ageVerification.hasAgeGatedFeatures();
};
prototype3["hasTeenDefaults"] = function hasTeenDefaults() {
  const settings = this.settings;
  return settings.hasTeenDefaults();
};
prototype3["shouldCollectAppStoreSignal"] = function shouldCollectAppStoreSignal() {
  return this.appStore.shouldCollectSignal;
};
RegionalFeatureConfig["fromConnectionOpen"] = function fromConnectionOpen(regionalFeatureConfig) {
  if (typeof SettingsConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(SettingsConfig.prototype);
  obj.teenByDefault = regionalFeatureConfig.teen_by_default_settings;
  if (typeof AgeVerificationConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(AgeVerificationConfig.prototype);
  obj.gatedFeatures = regionalFeatureConfig.age_gated_features;
  if (typeof AppStoreConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj1 = Object.create(AppStoreConfig.prototype);
  obj1.shouldCollectSignal = true === regionalFeatureConfig.should_collect_app_store_signal;
  if (typeof RegionalFeatureConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj2 = Object.create(RegionalFeatureConfig.prototype);
  obj2.settings = obj;
  obj2.ageVerification = obj;
  obj2.appStore = obj1;
  return obj2;
};
const result = set.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigModels.tsx");

export { SettingsConfig };
export { AgeVerificationConfig };
export { AppStoreConfig };
export { RegionalFeatureConfig };
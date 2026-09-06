// === Module 4780: RegionalFeatureConfigModels ===

// Module 4780 (RegionalFeatureConfigModels)
import size from "module_2" /* 2 */;

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
  if (typeof SettingsConfig === "function") {
    let obj = Object.create(SettingsConfig.prototype);
    obj.teenByDefault = tmp2;
    if (typeof AgeVerificationConfig === "function") {
      obj = Object.create(AgeVerificationConfig.prototype);
      obj.gatedFeatures = tmp4;
      if (typeof AppStoreConfig === "function") {
        const obj1 = Object.create(tmp7.prototype);
        obj1.shouldCollectSignal = true === tmp8;
        if (typeof tmp === "function") {
          const obj2 = Object.create(tmp.prototype);
          obj2.settings = obj;
          obj2.ageVerification = obj;
          obj2.appStore = obj1;
          return obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp10 = true === tmp8;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigModels.tsx");

export { SettingsConfig };
export { AgeVerificationConfig };
export { AppStoreConfig };
export { RegionalFeatureConfig };
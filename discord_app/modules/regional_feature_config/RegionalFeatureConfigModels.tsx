// === Module 5115: RegionalFeatureConfigModels ===

// Module 5115 (RegionalFeatureConfigModels)
import size from "module_2" /* 2 */;

class SettingsConfig {
  constructor(teenByDefault) {
    const obj = Object.create(new.target.prototype);
    obj.teenByDefault = teenByDefault;
    return obj;
  }
  isFeatureTeenByDefault(arg0) {
    return this.teenByDefault & arg0;
  }
  hasTeenDefaults() {
    let num = this.teenByDefault;
    if (num == null) {
      num = 0;
    }
    return 0 !== num;
  }
}
const prototype = SettingsConfig.prototype;
class AgeVerificationConfig {
  constructor(gatedFeatures) {
    const obj = Object.create(new.target.prototype);
    obj.gatedFeatures = gatedFeatures;
    return obj;
  }
  isFeatureAgeGated(arg0) {
    return this.gatedFeatures & arg0;
  }
  hasAgeGatedFeatures() {
    let num = this.gatedFeatures;
    if (num == null) {
      num = 0;
    }
    return 0 !== num;
  }
}
const prototype2 = AgeVerificationConfig.prototype;
class AppStoreConfig {
  constructor(shouldCollectSignal) {
    const obj = Object.create(new.target.prototype);
    obj.shouldCollectSignal = shouldCollectSignal;
    return obj;
  }
}
class RegionalFeatureConfig {
  constructor(settings, ageVerification, appStore) {
    const obj = Object.create(new.target.prototype);
    obj.settings = settings;
    obj.ageVerification = ageVerification;
    obj.appStore = appStore;
    return obj;
  }
  isFeatureAgeGated(arg0) {
    const ageVerification = this.ageVerification;
    return ageVerification.isFeatureAgeGated(arg0);
  }
  isFeatureTeenByDefault(arg0) {
    const settings = this.settings;
    return settings.isFeatureTeenByDefault(arg0);
  }
  hasAgeGatedFeatures() {
    const ageVerification = this.ageVerification;
    return ageVerification.hasAgeGatedFeatures();
  }
  hasTeenDefaults() {
    const settings = this.settings;
    return settings.hasTeenDefaults();
  }
  shouldCollectAppStoreSignal() {
    return this.appStore.shouldCollectSignal;
  }
  static fromConnectionOpen(regionalFeatureConfig) {
    if (typeof SettingsConfig === "function") {
      const obj = Object.create(SettingsConfig.prototype);
      obj.teenByDefault = tmp2;
      const self = this;
      if (typeof AgeVerificationConfig === "function") {
        const obj4 = Object.create(AgeVerificationConfig.prototype);
        obj4.gatedFeatures = tmp4;
        const self2 = this;
        if (typeof AppStoreConfig === "function") {
          const tmp8 = true === tmp7;
          const obj5 = Object.create(tmp6.prototype);
          obj5.shouldCollectSignal = tmp8;
          const self3 = this;
          if (typeof RegionalFeatureConfig === "function") {
            const obj6 = Object.create(RegionalFeatureConfig.prototype);
            obj6.settings = obj;
            obj6.ageVerification = obj4;
            obj6.appStore = obj5;
            return obj6;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype3 = RegionalFeatureConfig.prototype;
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigModels.tsx");

export { SettingsConfig };
export { AgeVerificationConfig };
export { AppStoreConfig };
export { RegionalFeatureConfig };
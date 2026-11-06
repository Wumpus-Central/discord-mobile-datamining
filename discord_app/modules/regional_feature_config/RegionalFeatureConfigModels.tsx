// === Module 5853: RegionalFeatureConfigModels ===

// Module 5853 (RegionalFeatureConfigModels)
import MediaTakedownRegulation from "MediaTakedownRegulation" /* 5854 */;
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
    flag = require;
    if (require === undefined) {
      flag = false;
    }
    flag2 = importDefault;
    if (importDefault === undefined) {
      flag2 = false;
    }
    obj = Object.create(new.target.prototype);
    obj.shouldCollectSignal = global;
    obj.consentRevokedIOS = flag;
    obj.consentRevokedAndroid = flag2;
    return obj;
  }
}
class MediaTakedownConfig {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.regulation = global;
    return obj;
  }
}
MediaTakedownConfig.prototype["isRegulation"] = function isRegulation(arg0) {
  return this.regulation === arg0;
};
let RegionalFeatureConfig;
class RegionalFeatureConfig {
  constructor(arg0, arg1, arg2, arg3) {
    obj = Object.create(new.target.prototype);
    obj.settings = global;
    obj.ageVerification = require;
    obj.appStore = importDefault;
    obj.mediaTakedown = importAll;
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
prototype3["isMediaTakedownRegulation"] = function isMediaTakedownRegulation(arg0) {
  const mediaTakedown = this.mediaTakedown;
  return mediaTakedown.isRegulation(arg0);
};
prototype3["isAppStoreConsentRevoked"] = function isAppStoreConsentRevoked(arg0) {
  const self = this;
  if ("ios" === arg0) {
    let consentRevokedAndroid = self.appStore.consentRevokedIOS;
  } else {
    consentRevokedAndroid = self.appStore.consentRevokedAndroid;
  }
  return consentRevokedAndroid;
};
RegionalFeatureConfig["fromConnectionOpen"] = function fromConnectionOpen(regionalFeatureConfig) {
  const media_takedown_regulation = regionalFeatureConfig.media_takedown_regulation;
  if (typeof SettingsConfig === "function") {
    const obj6 = Object.create(SettingsConfig.prototype);
    obj6.teenByDefault = tmp2;
    if (typeof AgeVerificationConfig === "function") {
      const obj7 = Object.create(AgeVerificationConfig.prototype);
      obj7.gatedFeatures = tmp4;
      if (typeof AppStoreConfig === "function") {
        const obj8 = Object.create(tmp7.prototype);
        obj8.shouldCollectSignal = true === tmp8;
        obj8.consentRevokedIOS = true === tmp9;
        obj8.consentRevokedAndroid = true === tmp10;
        let tmp19 = null;
        if (obj.isMediaTakedownRegulation(media_takedown_regulation)) {
          tmp19 = media_takedown_regulation;
        }
        if (typeof MediaTakedownConfig === "function") {
          const obj9 = Object.create(MediaTakedownConfig.prototype);
          obj9.regulation = tmp19;
          if (typeof RegionalFeatureConfig === "function") {
            const obj10 = Object.create(RegionalFeatureConfig.prototype);
            obj10.settings = obj6;
            obj10.ageVerification = obj7;
            obj10.appStore = obj8;
            obj10.mediaTakedown = obj9;
            return obj10;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        obj = MediaTakedownRegulation;
        const tmp12 = true === tmp8;
        const tmp13 = true === tmp9;
        const tmp14 = true === tmp10;
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
export { MediaTakedownConfig };
export { RegionalFeatureConfig };
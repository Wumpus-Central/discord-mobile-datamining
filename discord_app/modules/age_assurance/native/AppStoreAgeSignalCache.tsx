// === Module 8068: AppStoreAgeSignalCache ===

// Module 8068 (AppStoreAgeSignalCache)
import Storage2 from "Storage" /* 510 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import ClientInfoUtils from "ClientInfoUtils" /* 1378 */;
import AppStoreConsentReinstateEndpointExperiment from "AppStoreConsentReinstateEndpointExperiment" /* 8067 */;
import _asyncLoop from "_asyncLoop" /* 8069 */;
import _mod8072 from "module_8072" /* 8072 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
function isAgeSignalCacheEnabled() {
  return AppStoreConsentReinstateEndpointExperiment.getIsAppStoreConsentReinstateEndpointEnabled("appStoreAgeSignalCache", false);
}
function getAppVersion() {
  return ClientInfoUtils.getConstants().Version;
}
function storageKey() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AppStoreAgeSignalLastSubmitted_" + id;
  }
  return combined;
}
function hashAgeSignal(ageUpper) {
  items = [, , , , , , , ];
  ({ platform: arr[0], ageLower } = ageUpper);
  if (ageLower == null) {
    ageLower = "";
  }
  items[1] = ageLower;
  let str = ageUpper.ageUpper;
  if (str == null) {
    str = "";
  }
  items[2] = str;
  let str2 = ageUpper.appleVerifiedMethod;
  if (str2 == null) {
    str2 = "";
  }
  items[3] = str2;
  let str3 = ageUpper.googleAgeSignalsStatus;
  if (str3 == null) {
    str3 = "";
  }
  items[4] = str3;
  let str4 = ageUpper.googleAgeRangeSource;
  if (str4 == null) {
    str4 = "";
  }
  items[5] = str4;
  let str5 = ageUpper.googleSignificantChangeStatus;
  if (str5 == null) {
    str5 = "";
  }
  items[6] = str5;
  let str6 = ageUpper.googleInstallId;
  if (str6 == null) {
    str6 = "";
  }
  items[7] = str6;
  const joined = items.join("|");
  const obj = _asyncLoop;
  const obj2 = _mod8072;
  return obj.bytesToHex(obj2.sha256(_asyncLoop.utf8ToBytes(joined)));
}
const set = new Set(["no_change", "stronger_verification", "underage_banned", "no_age_signal", "auto_collected_outside_mandate"]);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalCache.tsx");

export { hashAgeSignal };
export function isAgeSignalCached(signal) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AppStoreAgeSignalLastSubmitted_" + id;
  }
  if (null != combined) {
    if (obj2.getIsAppStoreConsentReinstateEndpointEnabled("appStoreAgeSignalCache", false)) {
      const Storage = Storage2.Storage;
      value = Storage.get(combined);
      let tmp6 = null != value;
      if (tmp6) {
        tmp6 = value.appVersion === ClientInfoUtils.getConstants().Version;
        const tmp9Result = ClientInfoUtils;
      }
      if (tmp6) {
        tmp6 = value.hash === hashAgeSignal(signal);
      }
      return tmp6;
    }
    obj2 = AppStoreConsentReinstateEndpointExperiment;
  }
  return false;
}
export function recordAgeSignalSubmitted(ageUpper, reason) {
  if ((function isHandledByServer(reason) {
    reason = reason.reason;
    let tmp = "accepted" === reason.result;
    if (!tmp) {
      let hasItem = null != reason;
      if (hasItem) {
        hasItem = set.has(reason);
      }
      tmp = hasItem;
    }
    return tmp;
  })(reason)) {
    if (isAgeSignalCacheEnabled()) {
      const tmp3 = storageKey();
      if (null != tmp3) {
        try {
          const obj = { hash: hashAgeSignal(ageUpper), appVersion: getAppVersion() };
          const Storage = Storage2.Storage;
          const result = Storage.set(tmp3, obj);
        } catch (tmp11) {
          const obj3 = { tags: { source: "app_store_age_signal_cache", step: "record" } };
          SentryUtilsDefault.captureException(tmp11, obj3);
        }
      }
    }
  }
}
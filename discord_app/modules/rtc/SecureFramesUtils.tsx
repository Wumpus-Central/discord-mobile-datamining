// discord_app/modules/rtc/SecureFramesUtils.tsx
import byteLengthDefault from "../../../_runtime/00206_byteLength.js";
import setDefault from "../../utils/Durations.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import combinedDefault from "../../utils/HelpdeskUtils.tsx";
import hooksDefault from "../../../_runtime/04075_hooks.js";
import nameFromUserDefault from "../../utils/UserUtils.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import setDefault2 from "../../actions/AlertActionCreators.tsx";
import set from "../../../discord_common/js/packages/libdave/index.tsx";
import savePersistentCodesEnabledDefault from "SecureFramesActionCreators.tsx";
import _modDef9843 from "SecureFramesPlatformUtils.native.tsx";
import trackRTCPanelViewed from "SecureFramesTracking.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../stores/AuthenticationStore.tsx";
import closure_6 from "../../stores/MediaEngineStore.tsx";
import closure_7 from "../../stores/RTCConnectionStore.tsx";
import closure_8 from "../../stores/StreamRTCConnectionStore.tsx";
import closure_9 from "../../stores/UserStore.tsx";
import closure_10 from "SecureFramesPersistedStore.tsx";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SecureFramesConstants.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function getCurrentUserSigningKey() {
  const self = this;
  const apply = _getCurrentUserSigningKey.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getCurrentUserSigningKey() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      const staticAuthSessionId = closure_1_5.getStaticAuthSessionId();
      v0(table[19])(null != staticAuthSessionId, "[getCurrentUserPublicKey] session id should not be null");
      yield closure_1_6.getMLSSigningKey(staticAuthSessionId, closure_0);
      return arg1;
    })();
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function toBase64DataUri(arg0) {
  const uint8Array = new Uint8Array(arg0);
  return "data:application/octet-stream;base64," + byteLengthDefault.fromByteArray(uint8Array);
}
function isPublicKeyMatch(closure_0, closure_1, closure_1_2) {
  const self = this;
  const apply = _isPublicKeyMatch.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _isPublicKeyMatch() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function* (arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              c6 = 1;
              const HTTP = callback(530).HTTP;
              obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = closure_1_15.VOICE_MATCH_PUBLIC_KEY(callback);
              let obj2 = { public_key: null, key_version: null };
              obj2[0] = closure_1_19(callback2);
              obj2[1] = dependencyMap;
              obj1[1] = obj2;
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            obj2 = callback2(1208);
            obj2.captureException(callback);
            throw callback;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body.is_match;
            return obj;
          }
        } catch (tmp17) {
          closure_5 = tmp17;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp17;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function uploadCurrentUserPublicKey() {
  const self = this;
  const apply = _uploadCurrentUserPublicKey.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uploadCurrentUserPublicKey() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let key = tmp3;
              let lib = tmp7;
              lib = undefined;
              key = undefined;
              let signature;
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_17(callback);
              return obj1;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib = arg1;
              key = lib.key;
              signature = lib.signature;
              c4 = 1;
              const HTTP = callback(key[21]).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: false };
              obj3[0] = closure_15.VOICE_PUBLIC_KEYS();
              const obj4 = { public_key: null, signature: null, key_version: null };
              obj4[0] = callback2(key);
              obj4[1] = callback2(signature);
              obj4[2] = callback;
              obj3[1] = obj4;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.put(obj3);
              return obj5;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c4 = signature;
            obj2 = lib(key[22]);
            obj2.captureException(c4);
            throw c4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            obj = lib(key[11]);
            const result = obj.addUploadedKeyVersion(callback);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          signature = tmp25;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isKeyVersionUploaded(arg0) {
  uploadedKeyVersionsCached = uploadedKeyVersionsCached.getUploadedKeyVersionsCached();
  return uploadedKeyVersionsCached.includes(arg0);
}
function _ensureCurrentUserPublicKey() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (!closure_1_24(closure_0)) {
                c2 = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_22(tmp5);
                return obj1;
              }
              tmp5 = closure_0;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c1 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _isCurrentUserPublicKeyMatch() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0, key) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw key;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = key;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === closure_3) {
            if (arg0 === 1) {
              c4 = 3;
              throw key;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = key;
              return obj;
            } else {
              key = tmp5;
              let id = tmp2;
              id = undefined;
              key = undefined;
              closure_3 = undefined;
              if (closure_1_24(callback)) {
                id = closure_1_5.getId();
                closure_3 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_17(tmp29);
                return obj1;
              } else {
                closure_3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_22(tmp29);
                return obj2;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw key;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = key;
              return obj3;
            } else {
              c4 = 3;
              return { value: true, done: true };
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw key;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = key;
              return obj4;
            } else {
              key = key.key;
              closure_3 = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback2(id, key, callback);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw key;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = key;
            return obj6;
          } else {
            closure_3 = key;
            if (!closure_3) {
              obj = callback(key[12]);
              const result = obj.trackE2EEPublicKeyMismatch(callback);
            }
            c4 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = closure_3;
            return obj7;
          }
        } catch (tmp23) {
          c4 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getIsSecureFramesKeyInconsistent(userId, items) {
  [obj, obj2] = callback(items, 2);
  if (obj.isUserConnected(userId)) {
    const secureFramesRosterMapEntry = obj.getSecureFramesRosterMapEntry(userId);
    if (null == secureFramesRosterMapEntry) {
      return false;
    } else {
      const _Uint8Array2 = Uint8Array;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      const allActiveStreamKeys = obj2.getAllActiveStreamKeys();
      const iter = allActiveStreamKeys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if (obj2.isUserConnected(nextResult, userId)) {
          let tmp8 = secureFramesRosterMapEntry;
          let tmp9 = nextResult;
          let secureFramesRosterMapEntry1 = secureFramesRosterMapEntry.getSecureFramesRosterMapEntry(tmp7, userId);
          if (null == secureFramesRosterMapEntry1) {
            let tmp22 = iter;
            iter.return();
            let flag3 = true;
            return true;
          } else {
            let _Uint8Array = Uint8Array;
            let tmp12 = secureFramesRosterMapEntry1;
            let tmp13 = new.target;
            let tmp14 = new.target;
            let uint8Array1 = new Uint8Array(tmp11);
            let num = 0;
            if (0 < uint8Array.length) {
              let tmp17 = num;
              let tmp18 = uint8Array1;
              while (uint8Array[num] === tmp16[num]) {
                let tmp19 = num;
                let sum = num + 1;
                num = sum;
                continue;
              }
              let tmp21 = iter;
              iter.return();
              let flag2 = true;
              return true;
            }
          }
        }
        continue;
      }
      return false;
    }
  } else {
    return false;
  }
  const tmp = callback(items, 2);
}
({ AnalyticsSecureFramesUserVerification: unpackModuleId, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_12 } =
  SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ LinkingTypes: map1, Routes: closure_14, Endpoints: closure_15, HelpdeskArticles: closure_16 } = ME);
let result = require("set").fileFinishedImporting("modules/rtc/SecureFramesUtils.tsx");

export const getSecureFramesHelpdeskArticle = function getSecureFramesHelpdeskArticle() {
  return combinedDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesPersistentCodesHelpdeskArticle = function getSecureFramesPersistentCodesHelpdeskArticle() {
  return combinedDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesVerifiedDevicesHelpdeskArticle = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
  return combinedDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const addVerification = function addVerification(
  userId,
  fingerprintUserKey,
  isOtherUserKeyPersistent,
  channelId,
  DEEP_LINK,
) {
  let obj = savePersistentCodesEnabledDefault;
  if (isOtherUserKeyPersistent) {
    const secureFramesVerifiedKey = obj.createSecureFramesVerifiedKey(userId, fingerprintUserKey);
  } else {
    const secureFramesTransientKey = obj.createSecureFramesTransientKey(userId, fingerprintUserKey);
  }
  obj = { channelId, userId, analyticsLocation: DEEP_LINK };
  const result = trackRTCPanelViewed.trackE2EEUserVerified(obj);
};
export const deleteVerification = function deleteVerification(userId, arg1, isOtherUserKeyPersistent) {
  if (isOtherUserKeyPersistent) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arg1);
    const obj2 = set;
    const serializeKeyResult = set.serializeKey(uint8Array);
    const result = savePersistentCodesEnabledDefault.deleteSecureFramesVerifiedKey(userId, serializeKeyResult);
    const obj3 = savePersistentCodesEnabledDefault;
  } else {
    const result1 = savePersistentCodesEnabledDefault.deleteSecureFramesTransientKey(userId);
    const obj = savePersistentCodesEnabledDefault;
  }
};
export const deletePersistentVerification = function deletePersistentVerification(userId, verifiedKey) {
  const _require = userId;
  importDefault = verifiedKey;
  let obj = _modDef9843;
  obj = { title: null, subtitle: null, onConfirm: null };
  const intl = require("../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../intl/index.native.tsx").t.hdL152);
  const intl2 = require("../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(require("../../intl/index.native.tsx").t["8VGYKg"]);
  obj[2] = function onConfirm() {
    const result = verifiedKey(closure_1_2[11]).deleteSecureFramesVerifiedKey(userId, verifiedKey);
    const obj = verifiedKey(closure_1_2[11]);
    const result1 = userId(closure_1_2[12]).trackE2EESettingsDeviceDelete();
  };
  let result = obj.openSecureFramesUpdateConfirmation(obj);
};
export const deleteUserPersistentVerifications = function deleteUserPersistentVerifications(userId) {
  const _require = userId;
  const user = authStore.getUser(userId);
  let obj = nameFromUserDefault;
  const name = obj.getName(user);
  obj = { title: null, subtitle: null, onConfirm: null };
  const intl = require("../../intl/index.native.tsx").intl;
  obj[0] = intl.formatToPlainString(require("../../intl/index.native.tsx").t.K6NGBy, { username: name });
  const intl2 = require("../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(require("../../intl/index.native.tsx").t.F1BQK3);
  obj[2] = function onConfirm() {
    const result = closure_1_1(closure_1_2[11]).deleteSecureFramesUserVerifiedKeys(userId);
    const obj = closure_1_1(closure_1_2[11]);
    const result1 = userId(closure_1_2[12]).trackE2EESettingsUserDelete();
  };
  let result = _modDef9843.openSecureFramesUpdateConfirmation(obj);
};
export const getSecureFramesUserVerifiedTimestamp = function getSecureFramesUserVerifiedTimestamp(timestamp) {
  let obj = hooksDefault();
  const diffResult = obj.diff(hooksDefault(timestamp), "s");
  if (diffResult > 12 * setDefault.Seconds.DAYS_30) {
    const _Math6 = Math;
    const rounded = Math.round(diffResult / (12 * tmp(687).Seconds.DAYS_30));
    const intl7 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = rounded;
    return intl7.formatToPlainString(getSystemLocale.t.F1wqkD, obj);
  } else if (diffResult > tmp(687).Seconds.DAYS_30) {
    const _Math5 = Math;
    const rounded1 = Math.round(diffResult / tmp(687).Seconds.DAYS_30);
    const intl6 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = rounded1;
    return intl6.formatToPlainString(getSystemLocale.t["iT+b+2"], obj);
  } else if (diffResult > 7 * tmp(687).Seconds.DAY) {
    const _Math4 = Math;
    const rounded2 = Math.round(diffResult / (7 * tmp(687).Seconds.DAY));
    const intl5 = getSystemLocale.intl;
    obj1 = { count: null };
    obj1[0] = rounded2;
    return intl5.formatToPlainString(getSystemLocale.t.dLurKZ, obj1);
  } else if (diffResult > tmp(687).Seconds.DAY) {
    const _Math3 = Math;
    const rounded3 = Math.round(diffResult / tmp(687).Seconds.DAY);
    const intl4 = getSystemLocale.intl;
    const obj2 = { count: null };
    obj2[0] = rounded3;
    return intl4.formatToPlainString(getSystemLocale.t.LE8a2H, obj2);
  } else if (diffResult > tmp(687).Seconds.HOUR) {
    const _Math2 = Math;
    const rounded4 = Math.round(diffResult / tmp(687).Seconds.HOUR);
    const intl3 = getSystemLocale.intl;
    const obj3 = { count: null };
    obj3[0] = rounded4;
    return intl3.formatToPlainString(getSystemLocale.t.KULxVS, obj3);
  } else if (diffResult > tmp(687).Seconds.MINUTE) {
    const _Math = Math;
    const rounded5 = Math.round(diffResult / tmp(687).Seconds.MINUTE);
    const intl2 = getSystemLocale.intl;
    const obj4 = { count: null };
    obj4[0] = rounded5;
    return intl2.formatToPlainString(getSystemLocale.t.ws6rWq, obj4);
  } else {
    const intl = getSystemLocale.intl;
    const obj5 = { count: null };
    obj5[0] = diffResult;
    return intl.formatToPlainString(getSystemLocale.t["/w0Qpw"], obj5);
  }
  const tmp3 = hooksDefault(timestamp);
};
export const getUserVerificationDeeplink = function getUserVerificationDeeplink(arg0, arg1) {
  return (
    "" +
    location.protocol +
    "//" +
    location.host +
    closure_14.FEATURE(constants2.DAVE_PROTOCOL_VERIFICATION) +
    "?userId=" +
    arg0 +
    "&fingerprint=" +
    encodeURIComponent(arg1)
  );
};
export const getUserVerifyStateText = function getUserVerifyStateText(memo, name) {
  if (constants.OTHER_USER_DISCONNECTED === memo) {
    const intl13 = getSystemLocale.intl;
    const items = [intl13.string(getSystemLocale.t.ZBHDM9)];
    const intl14 = getSystemLocale.intl;
    let obj = { username: null };
    obj[0] = name;
    items[1] = intl14.format(getSystemLocale.t["+rIdOd"], obj);
    return items;
  } else if (tmp.CURRENT_USER_DISCONNECTED === memo) {
    const intl11 = getSystemLocale.intl;
    const items1 = [intl11.string(getSystemLocale.t["5ICxE6"])];
    const intl12 = getSystemLocale.intl;
    items1[1] = intl12.string(getSystemLocale.t["v1eXp/"]);
    return items1;
  } else if (tmp.UNABLE_TO_VERIFY === memo) {
    const intl9 = getSystemLocale.intl;
    const items2 = [intl9.string(getSystemLocale.t["+no/a7"])];
    const intl10 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    items2[1] = intl10.format(getSystemLocale.t.Mft7iJ, obj);
    return items2;
  } else if (tmp.FINGERPRINT_MISMATCH === memo) {
    const intl7 = getSystemLocale.intl;
    const items3 = [intl7.string(getSystemLocale.t.HTJ76H)];
    const intl8 = getSystemLocale.intl;
    obj1 = { username: null };
    obj1[0] = name;
    items3[1] = intl8.format(getSystemLocale.t.tc6aAc, obj1);
    return items3;
  } else if (tmp.OTHER_USER_ALREADY_VERIFIED === memo) {
    const intl5 = getSystemLocale.intl;
    const items4 = [intl5.string(getSystemLocale.t["9lw+J+"])];
    const intl6 = getSystemLocale.intl;
    const obj2 = { username: null };
    obj2[0] = name;
    items4[1] = intl6.format(getSystemLocale.t.TvBS1w, obj2);
    return items4;
  } else if (tmp.MATCH === memo) {
    const intl3 = getSystemLocale.intl;
    const items5 = [intl3.string(getSystemLocale.t["xyE+Dn"])];
    const intl4 = getSystemLocale.intl;
    const obj3 = { username: null };
    obj3[0] = name;
    items5[1] = intl4.format(getSystemLocale.t.znsPl5, obj3);
    return items5;
  } else if (tmp.OTHER_USER_INCONSISTENT_KEYS === memo) {
    const intl = getSystemLocale.intl;
    const items6 = [intl.string(getSystemLocale.t.im1uUi)];
    const intl2 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    items6[1] = intl2.format(getSystemLocale.t.WY6IKb, obj);
    return items6;
  }
};
export const getUserVerificationFooterText = function getUserVerificationFooterText(arg0) {
  ({ isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname } = arg0);
  if (isCurrentUserKeyPersistent) {
    if (isOtherUserKeyPersistent) {
      const intl2 = getSystemLocale.intl;
      let obj = { helpArticle: null };
      obj[0] = combinedDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
      let formatResult = intl2.format(getSystemLocale.t["FJN+kh"], obj);
      const obj8 = combinedDefault;
    }
    return formatResult;
  }
  const intl = getSystemLocale.intl;
  const format = intl.format;
  const t = getSystemLocale.t;
  if (isCurrentUserKeyPersistent) {
    obj = { username: null, helpArticle: null };
    obj[0] = otherUserNickname;
    obj[1] = combinedDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
    formatResult = format(t["p/9PGp"], obj);
    const obj6 = combinedDefault;
  } else if (isOtherUserKeyPersistent) {
    obj1 = { helpArticle: null };
    obj1[0] = combinedDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
    formatResult = format(t.qT5z87, obj1);
    const obj4 = combinedDefault;
  } else {
    obj = { helpArticle: null };
    obj1 = combinedDefault;
    obj[0] = obj1.getArticleURL(constants3.END_TO_END_ENCRYPTION);
    formatResult = format(t["6JLy+i"], obj);
  }
};
export { getCurrentUserSigningKey };
export { isPublicKeyMatch };
export const ensureCurrentUserPublicKey = function ensureCurrentUserPublicKey(c7) {
  const self = this;
  const apply = _ensureCurrentUserPublicKey.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isCurrentUserPublicKeyMatch = function isCurrentUserPublicKeyMatch(callback) {
  const self = this;
  const apply = _isCurrentUserPublicKeyMatch.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getIsSecureFramesKeyInconsistent };
export const showSecureFramesKeyInconsistentAlert = function showSecureFramesKeyInconsistentAlert(arg0) {
  ({ userId, channelId, nickname } = arg0);
  let obj = trackRTCPanelViewed;
  obj = { userId, channelId, keyVersion: closure_12, reason: constants.OTHER_USER_INCONSISTENT_KEYS };
  const result = obj.trackE2EEUserVerificationFailed(obj);
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.mznLyR);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.WY6IKb, { username: nickname });
  setDefault2.show(obj);
};
export const validateSecureFramesKeyConsistent = function validateSecureFramesKeyConsistent(guildId) {
  ({ userId, channelId } = guildId);
  const items = [closure_7, closure_8];
  if (getIsSecureFramesKeyInconsistent(userId, items)) {
    const user = authStore.getUser(userId);
    let obj = getNicknameDefault;
    const name = obj.getName(guildId.guildId, channelId, user);
    obj1 = trackRTCPanelViewed;
    obj = { userId: null, channelId: null, keyVersion: null, reason: null };
    obj[0] = userId;
    obj[1] = channelId;
    obj[2] = closure_12;
    obj[3] = constants.OTHER_USER_INCONSISTENT_KEYS;
    const result = obj1.trackE2EEUserVerificationFailed(obj);
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.mznLyR);
    const intl2 = getSystemLocale.intl;
    obj1 = { username: null };
    obj1[0] = name;
    obj[1] = intl2.format(getSystemLocale.t.WY6IKb, obj1);
    setDefault2.show(obj);
    return false;
  } else {
    return true;
  }
};

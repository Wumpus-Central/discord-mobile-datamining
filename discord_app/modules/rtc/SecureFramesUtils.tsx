// discord_app/modules/rtc/SecureFramesUtils.tsx
import _slicedToArray from "_slicedToArray";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import closure_8 from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import items from "items";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import ME from "ME";
import { byteLength } from "../../../_runtime/00206_byteLength.js";
import { t } from "../../../_runtime/03943_t.js";
import { set } from "../../../discord_common/js/packages/libdave/index.tsx";
import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { set } from "../../utils/Durations.tsx";
import { combined } from "../../utils/HelpdeskUtils.tsx";
import { getNickname } from "../../utils/NicknameUtils.tsx";
import { nameFromUser } from "../../utils/UserUtils.tsx";
import { savePersistentCodesEnabled } from "SecureFramesActionCreators.tsx";
import { SecureFramesPlatformUtils.native } from "SecureFramesPlatformUtils.native.tsx";
import { trackRTCPanelViewed } from "SecureFramesTracking.tsx";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
const require = arg1;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      const staticAuthSessionId = outer1_5.getStaticAuthSessionId();
      v0(table[19])(null != staticAuthSessionId, "[getCurrentUserPublicKey] session id should not be null");
      yield outer1_6.getMLSSigningKey(staticAuthSessionId, closure_0);
      return arg1;
    })();
  });
  const _getCurrentUserSigningKey = tmp;
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
  return "data:application/octet-stream;base64," + byteLength.fromByteArray(uint8Array);
}
function isPublicKeyMatch(closure_0, closure_1, outer1_2) {
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
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
              let initialize = tmp3;
              let _slicedToArray = tmp7;
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_15.VOICE_MATCH_PUBLIC_KEY(callback);
              let obj2 = { public_key: null, key_version: null };
              obj2[0] = outer1_19(callback2);
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
            callback = fetchFingerprint;
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
          fetchFingerprint = tmp17;
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
  const _isPublicKeyMatch = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
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
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_17(callback);
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
              let c4 = 1;
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
  const _uploadCurrentUserPublicKey = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
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
              if (!outer1_24(closure_0)) {
                c2 = 1;
                c1 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_22(tmp5);
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
  const _ensureCurrentUserPublicKey = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, key) {
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
          if (0 === _slicedToArray) {
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
              _slicedToArray = undefined;
              if (outer1_24(callback)) {
                id = outer1_5.getId();
                _slicedToArray = 2;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_17(tmp29);
                return obj1;
              } else {
                _slicedToArray = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_22(tmp29);
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
              _slicedToArray = 3;
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
            _slicedToArray = key;
            if (!_slicedToArray) {
              obj = callback(key[12]);
              const result = obj.trackE2EEPublicKeyMismatch(callback);
            }
            c4 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = _slicedToArray;
            return obj7;
          }
        } catch (tmp23) {
          c4 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  const _isCurrentUserPublicKeyMatch = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getIsSecureFramesKeyInconsistent(userId, items) {
  let obj;
  let obj2;
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
({ AnalyticsSecureFramesUserVerification: unpackModuleId, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_12 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ LinkingTypes: map1, Routes: closure_14, Endpoints: closure_15, HelpdeskArticles: closure_16 } = ME);
let result = require("fetchFingerprint").fileFinishedImporting("modules/rtc/SecureFramesUtils.tsx");

export const getSecureFramesHelpdeskArticle = function getSecureFramesHelpdeskArticle() {
  return combined.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesPersistentCodesHelpdeskArticle = function getSecureFramesPersistentCodesHelpdeskArticle() {
  return combined.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesVerifiedDevicesHelpdeskArticle = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
  return combined.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const addVerification = function addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, DEEP_LINK) {
  let obj = savePersistentCodesEnabled;
  if (isOtherUserKeyPersistent) {
    const secureFramesVerifiedKey = obj.createSecureFramesVerifiedKey(userId, userKey);
  } else {
    const secureFramesTransientKey = obj.createSecureFramesTransientKey(userId, userKey);
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
    const result = savePersistentCodesEnabled.deleteSecureFramesVerifiedKey(userId, serializeKeyResult);
    const obj3 = savePersistentCodesEnabled;
  } else {
    const result1 = savePersistentCodesEnabled.deleteSecureFramesTransientKey(userId);
    const obj = savePersistentCodesEnabled;
  }
};
export const deletePersistentVerification = function deletePersistentVerification(userId, verifiedKey) {
  const _require = userId;
  const importDefault = verifiedKey;
  let obj = SecureFramesPlatformUtils.native;
  obj = { title: null, subtitle: null, onConfirm: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.hdL152);
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(_getSystemLocale.t["8VGYKg"]);
  obj[2] = function onConfirm() {
    const result = verifiedKey(outer1_2[11]).deleteSecureFramesVerifiedKey(userId, verifiedKey);
    const obj = verifiedKey(outer1_2[11]);
    const result1 = userId(outer1_2[12]).trackE2EESettingsDeviceDelete();
  };
  let result = obj.openSecureFramesUpdateConfirmation(obj);
};
export const deleteUserPersistentVerifications = function deleteUserPersistentVerifications(userId) {
  const _require = userId;
  const user = authStore.getUser(userId);
  let obj = nameFromUser;
  const name = obj.getName(user);
  obj = { title: null, subtitle: null, onConfirm: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.formatToPlainString(_getSystemLocale.t.K6NGBy, { username: name });
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(_getSystemLocale.t.F1BQK3);
  obj[2] = function onConfirm() {
    const result = outer1_1(outer1_2[11]).deleteSecureFramesUserVerifiedKeys(userId);
    const obj = outer1_1(outer1_2[11]);
    const result1 = userId(outer1_2[12]).trackE2EESettingsUserDelete();
  };
  let result = SecureFramesPlatformUtils.native.openSecureFramesUpdateConfirmation(obj);
};
export const getSecureFramesUserVerifiedTimestamp = function getSecureFramesUserVerifiedTimestamp(timestamp) {
  let obj = t();
  const diffResult = obj.diff(t(timestamp), "s");
  if (diffResult > 12 * set.Seconds.DAYS_30) {
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
    const obj1 = { count: null };
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
  const tmp3 = t(timestamp);
};
export const getUserVerificationDeeplink = function getUserVerificationDeeplink(arg0, arg1) {
  return "" + location.protocol + "//" + location.host + closure_14.FEATURE(constants2.DAVE_PROTOCOL_VERIFICATION) + "?userId=" + arg0 + "&fingerprint=" + encodeURIComponent(arg1);
};
export const getUserVerifyStateText = function getUserVerifyStateText(memo, name) {
  if (constants.OTHER_USER_DISCONNECTED === memo) {
    const intl13 = getSystemLocale.intl;
    const items = [intl13.string(getSystemLocale.t.ZBHDM9), ];
    const intl14 = getSystemLocale.intl;
    let obj = { username: null };
    obj[0] = name;
    items[1] = intl14.format(getSystemLocale.t["+rIdOd"], obj);
    return items;
  } else if (tmp.CURRENT_USER_DISCONNECTED === memo) {
    const intl11 = getSystemLocale.intl;
    const items1 = [intl11.string(getSystemLocale.t["5ICxE6"]), ];
    const intl12 = getSystemLocale.intl;
    items1[1] = intl12.string(getSystemLocale.t["v1eXp/"]);
    return items1;
  } else if (tmp.UNABLE_TO_VERIFY === memo) {
    const intl9 = getSystemLocale.intl;
    const items2 = [intl9.string(getSystemLocale.t["+no/a7"]), ];
    const intl10 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    items2[1] = intl10.format(getSystemLocale.t.Mft7iJ, obj);
    return items2;
  } else if (tmp.FINGERPRINT_MISMATCH === memo) {
    const intl7 = getSystemLocale.intl;
    const items3 = [intl7.string(getSystemLocale.t.HTJ76H), ];
    const intl8 = getSystemLocale.intl;
    const obj1 = { username: null };
    obj1[0] = name;
    items3[1] = intl8.format(getSystemLocale.t.tc6aAc, obj1);
    return items3;
  } else if (tmp.OTHER_USER_ALREADY_VERIFIED === memo) {
    const intl5 = getSystemLocale.intl;
    const items4 = [intl5.string(getSystemLocale.t["9lw+J+"]), ];
    const intl6 = getSystemLocale.intl;
    const obj2 = { username: null };
    obj2[0] = name;
    items4[1] = intl6.format(getSystemLocale.t.TvBS1w, obj2);
    return items4;
  } else if (tmp.MATCH === memo) {
    const intl3 = getSystemLocale.intl;
    const items5 = [intl3.string(getSystemLocale.t["xyE+Dn"]), ];
    const intl4 = getSystemLocale.intl;
    const obj3 = { username: null };
    obj3[0] = name;
    items5[1] = intl4.format(getSystemLocale.t.znsPl5, obj3);
    return items5;
  } else if (tmp.OTHER_USER_INCONSISTENT_KEYS === memo) {
    const intl = getSystemLocale.intl;
    const items6 = [intl.string(getSystemLocale.t.im1uUi), ];
    const intl2 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    items6[1] = intl2.format(getSystemLocale.t.WY6IKb, obj);
    return items6;
  }
};
export const getUserVerificationFooterText = function getUserVerificationFooterText(arg0) {
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let otherUserNickname;
  ({ isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname } = arg0);
  if (isCurrentUserKeyPersistent) {
    if (isOtherUserKeyPersistent) {
      const intl2 = getSystemLocale.intl;
      let obj = { helpArticle: null };
      obj[0] = combined.getArticleURL(constants3.END_TO_END_ENCRYPTION);
      let formatResult = intl2.format(getSystemLocale.t["FJN+kh"], obj);
      const obj8 = combined;
    }
    return formatResult;
  }
  const intl = getSystemLocale.intl;
  const format = intl.format;
  const t = getSystemLocale.t;
  if (isCurrentUserKeyPersistent) {
    obj = { username: null, helpArticle: null };
    obj[0] = otherUserNickname;
    obj[1] = combined.getArticleURL(constants3.END_TO_END_ENCRYPTION);
    formatResult = format(t["p/9PGp"], obj);
    const obj6 = combined;
  } else if (isOtherUserKeyPersistent) {
    let obj1 = { helpArticle: null };
    obj1[0] = combined.getArticleURL(constants3.END_TO_END_ENCRYPTION);
    formatResult = format(t.qT5z87, obj1);
    const obj4 = combined;
  } else {
    obj = { helpArticle: null };
    obj1 = combined;
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
export const isCurrentUserPublicKeyMatch = function isCurrentUserPublicKeyMatch(outer2_6) {
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
  let channelId;
  let nickname;
  let userId;
  ({ userId, channelId, nickname } = arg0);
  let obj = trackRTCPanelViewed;
  obj = { userId, channelId, keyVersion: closure_12, reason: constants.OTHER_USER_INCONSISTENT_KEYS };
  const result = obj.trackE2EEUserVerificationFailed(obj);
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.mznLyR);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.WY6IKb, { username: nickname });
  set.show(obj);
};
export const validateSecureFramesKeyConsistent = function validateSecureFramesKeyConsistent(guildId) {
  let channelId;
  let userId;
  ({ userId, channelId } = guildId);
  const items = [createRTCConnection, closure_8];
  if (getIsSecureFramesKeyInconsistent(userId, items)) {
    const user = authStore.getUser(userId);
    let obj = getNickname;
    const name = obj.getName(guildId.guildId, channelId, user);
    let obj1 = trackRTCPanelViewed;
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
    set.show(obj);
    return false;
  } else {
    return true;
  }
};
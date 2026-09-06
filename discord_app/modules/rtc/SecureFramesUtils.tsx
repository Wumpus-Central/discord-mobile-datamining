// === Module 9150: SecureFramesUtils ===

// Module 9150 (SecureFramesUtils)
import _modDef38 from "module_38" /* 38 */;
import byteLengthDefault from "byteLength" /* 206 */;
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef4153 from "module_4153" /* 4153 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import _mod9135 from "module_9135" /* 9135 */;
import SecureFramesActionCreatorsDefault from "SecureFramesActionCreators" /* 9153 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9154 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9161 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;
import UserStore from "UserStore" /* 1371 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9151 */;

require = fn;
function getCurrentUserSigningKey() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _getCurrentUserSigningKey() {
  staticAuthSessionId = staticAuthSessionId.getStaticAuthSessionId();
  _modDef38(null != staticAuthSessionId, "[getCurrentUserPublicKey] session id should not be null");
  await mLSSigningKey.getMLSSigningKey(staticAuthSessionId, closure_0);
  return arg1;
};
function toBase64DataUri(arg0) {
  const uint8Array = new Uint8Array(arg0);
  return "data:application/octet-stream;base64," + byteLengthDefault.fromByteArray(uint8Array);
}
function isPublicKeyMatch() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _isPublicKeyMatch(arg0, arg1, key_version) {
  closure_0 = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            c6 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: closure_2_15.VOICE_MATCH_PUBLIC_KEY(closure_0), body: null, rejectWithError: false };
            const obj1 = { public_key: toBase64DataUri(closure_1), key_version };
            request.body = obj1;
            c7 = 2;
            c8 = 1;
            let obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_0 = closure_5;
          obj2 = closure_132_1(closure_132_2[22]);
          obj2.captureException(closure_131_0);
          throw closure_131_0;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body.is_match, done: true };
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
};
function uploadCurrentUserPublicKey() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _uploadCurrentUserPublicKey(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          let key;
          let signature;
          c5 = 1;
          c6 = 1;
          const obj1 = { value: getCurrentUserSigningKey(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_1 = value;
          key = closure_129_1.key;
          signature = closure_129_1.signature;
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[21]).HTTP;
          const request = { url: closure_130_15.VOICE_PUBLIC_KEYS(), body: null, rejectWithError: false };
          const obj3 = { public_key: closure_130_19(key), signature: closure_130_19(signature), key_version: closure_129_0 };
          request.body = obj3;
          c5 = 3;
          c6 = 1;
          const obj4 = { value: HTTP.put(request), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_4 = closure_3;
        obj2 = closure_130_1(closure_130_2[22]);
        obj2.captureException(closure_129_4);
        throw closure_129_4;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        obj = closure_130_1(closure_130_2[11]);
        const result = obj.addUploadedKeyVersion(closure_129_0);
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
function isKeyVersionUploaded(arg0) {
  const uploadedKeyVersionsCached = SecureFramesPersistedStore.getUploadedKeyVersionsCached();
  return uploadedKeyVersionsCached.includes(arg0);
}
let closure_25 = async function _ensureCurrentUserPublicKey(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (!isKeyVersionUploaded(closure_0)) {
            c2 = 1;
            c1 = 1;
            const obj1 = { value: uploadCurrentUserPublicKey(tmp5), done: false };
            return obj1;
          }
          tmp5 = closure_0;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
let closure_26 = async function _isCurrentUserPublicKeyMatch(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let id2;
          let key;
          closure_129_3 = undefined;
          if (isKeyVersionUploaded(closure_0)) {
            id2 = id.getId();
            c3 = 2;
            c4 = 1;
            const obj1 = { value: getCurrentUserSigningKey(tmp28), done: false };
            return obj1;
          } else {
            c3 = 1;
            c4 = 1;
            const obj2 = { value: uploadCurrentUserPublicKey(tmp28), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 3;
          return { value: true, done: true };
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          key = value.key;
          c3 = 3;
          c4 = 1;
          const obj5 = { value: closure_130_20(id2, key, closure_129_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_3 = value;
        if (!closure_129_3) {
          obj = closure_130_0(closure_130_2[12]);
          const result = obj.trackE2EEPublicKeyMismatch(closure_129_0);
        }
        c4 = 3;
        const obj7 = { value: closure_129_3, done: true };
        return obj7;
      }
    } catch (tmp23) {
      c4 = tmp;
      throw tmp23;
    }
  }
};
function getIsSecureFramesKeyInconsistent(userId, items) {
  [obj, obj2] = _slicedToArray(items, 2);
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
          let secureFramesRosterMapEntry1 = StreamRTCConnectionStore.getSecureFramesRosterMapEntry(tmp7, userId);
          if (null == secureFramesRosterMapEntry1) {
            iter.return();
            let flag3 = true;
            return true;
          } else {
            let _Uint8Array = Uint8Array;
            let tmp13 = new.target;
            let tmp14 = new.target;
            let uint8Array1 = new Uint8Array(tmp11);
            let num = 0;
            if (0 < uint8Array.length) {
              while (uint8Array[num] === tmp16[num]) {
                let sum = num + 1;
                num = sum;
                continue;
              }
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
  const tmp = _slicedToArray(items, 2);
}
const SecureFramesConstants = fn(9152);
({ AnalyticsSecureFramesUserVerification: closure_11, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_12 } = SecureFramesConstants);
const Constants = fn(1074);
({ LinkingTypes: map1, Routes: closure_14, Endpoints: closure_15, HelpdeskArticles: closure_16 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesUtils.tsx");

export const getSecureFramesHelpdeskArticle = function getSecureFramesHelpdeskArticle() {
  return HelpdeskUtilsDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesPersistentCodesHelpdeskArticle = function getSecureFramesPersistentCodesHelpdeskArticle() {
  return HelpdeskUtilsDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesVerifiedDevicesHelpdeskArticle = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
  return HelpdeskUtilsDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const addVerification = function addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, DEEP_LINK) {
  let obj = SecureFramesActionCreatorsDefault;
  if (isOtherUserKeyPersistent) {
    const secureFramesVerifiedKey = obj.createSecureFramesVerifiedKey(userId, fingerprintUserKey);
  } else {
    const secureFramesTransientKey = obj.createSecureFramesTransientKey(userId, fingerprintUserKey);
  }
  obj = { channelId, userId, analyticsLocation: DEEP_LINK };
  const result = SecureFramesTracking.trackE2EEUserVerified(obj);
};
export const deleteVerification = function deleteVerification(userId, arg1, isOtherUserKeyPersistent) {
  if (isOtherUserKeyPersistent) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arg1);
    const serializeKeyResult = _mod9135.serializeKey(uint8Array);
    const result = SecureFramesActionCreatorsDefault.deleteSecureFramesVerifiedKey(userId, serializeKeyResult);
  } else {
    const result1 = SecureFramesActionCreatorsDefault.deleteSecureFramesTransientKey(userId);
  }
};
export const deletePersistentVerification = function deletePersistentVerification(userId, verifiedKey) {
  _require = userId;
  importDefault = verifiedKey;
  let obj = { title: null, subtitle: null, onConfirm: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.hdL152);
  const intl2 = require("util").intl;
  obj.subtitle = intl2.string(require("util").t["8VGYKg"]);
  obj.onConfirm = function onConfirm() {
    const result = SecureFramesActionCreatorsDefault.deleteSecureFramesVerifiedKey(closure_0, closure_1);
    const result1 = SecureFramesTracking.trackE2EESettingsDeviceDelete();
  };
  let result = obj.openSecureFramesUpdateConfirmation(obj);
};
export const deleteUserPersistentVerifications = function deleteUserPersistentVerifications(userId) {
  _require = userId;
  const user = UserStore.getUser(userId);
  let obj = UserUtilsDefault;
  const name = obj.getName(user);
  obj = { title: null, subtitle: null, onConfirm: null };
  const intl = require("util").intl;
  obj.title = intl.formatToPlainString(require("util").t.K6NGBy, { username: name });
  const intl2 = require("util").intl;
  obj.subtitle = intl2.string(require("util").t.F1BQK3);
  obj.onConfirm = function onConfirm() {
    const result = SecureFramesActionCreatorsDefault.deleteSecureFramesUserVerifiedKeys(closure_0);
    const result1 = SecureFramesTracking.trackE2EESettingsUserDelete();
  };
  let result = SecureFramesPlatformUtilsDefault.openSecureFramesUpdateConfirmation(obj);
};
export const getSecureFramesUserVerifiedTimestamp = function getSecureFramesUserVerifiedTimestamp(timestamp) {
  let obj = _modDef4153();
  const diffResult = obj.diff(_modDef4153(timestamp), "s");
  if (diffResult > 12 * DurationsDefault.Seconds.DAYS_30) {
    const _Math6 = Math;
    const rounded = Math.round(diffResult / (12 * tmp(1090).Seconds.DAYS_30));
    const intl7 = util.intl;
    obj = { count: rounded };
    return intl7.formatToPlainString(util.t.F1wqkD, obj);
  } else if (diffResult > tmp(1090).Seconds.DAYS_30) {
    const _Math5 = Math;
    const rounded1 = Math.round(diffResult / tmp(1090).Seconds.DAYS_30);
    const intl6 = util.intl;
    obj = { count: rounded1 };
    return intl6.formatToPlainString(util.t["iT+b+2"], obj);
  } else if (diffResult > 7 * tmp(1090).Seconds.DAY) {
    const _Math4 = Math;
    const rounded2 = Math.round(diffResult / (7 * tmp(1090).Seconds.DAY));
    const intl5 = util.intl;
    const obj1 = { count: rounded2 };
    return intl5.formatToPlainString(util.t.dLurKZ, obj1);
  } else if (diffResult > tmp(1090).Seconds.DAY) {
    const _Math3 = Math;
    const rounded3 = Math.round(diffResult / tmp(1090).Seconds.DAY);
    const intl4 = util.intl;
    const obj2 = { count: rounded3 };
    return intl4.formatToPlainString(util.t.LE8a2H, obj2);
  } else if (diffResult > tmp(1090).Seconds.HOUR) {
    const _Math2 = Math;
    const rounded4 = Math.round(diffResult / tmp(1090).Seconds.HOUR);
    const intl3 = util.intl;
    const obj3 = { count: rounded4 };
    return intl3.formatToPlainString(util.t.KULxVS, obj3);
  } else if (diffResult > tmp(1090).Seconds.MINUTE) {
    const _Math = Math;
    const rounded5 = Math.round(diffResult / tmp(1090).Seconds.MINUTE);
    const intl2 = util.intl;
    const obj4 = { count: rounded5 };
    return intl2.formatToPlainString(util.t.ws6rWq, obj4);
  } else {
    const intl = util.intl;
    const obj5 = { count: diffResult };
    return intl.formatToPlainString(util.t["/w0Qpw"], obj5);
  }
  const tmp3 = _modDef4153(timestamp);
};
export const getUserVerificationDeeplink = function getUserVerificationDeeplink(userId, arg1) {
  return "" + location.protocol + "//" + location.host + closure_1_14.FEATURE(constants2.DAVE_PROTOCOL_VERIFICATION) + "?userId=" + userId + "&fingerprint=" + encodeURIComponent(arg1);
};
export const getUserVerifyStateText = function getUserVerifyStateText(memo, name) {
  if (constants.OTHER_USER_DISCONNECTED === memo) {
    const intl13 = util.intl;
    const items = [intl13.string(util.t.ZBHDM9), ];
    const intl14 = util.intl;
    let obj = { username: name };
    items[1] = intl14.format(util.t["+rIdOd"], obj);
    return items;
  } else if (tmp.CURRENT_USER_DISCONNECTED === memo) {
    const intl11 = util.intl;
    const items1 = [intl11.string(util.t["5ICxE6"]), ];
    const intl12 = util.intl;
    items1[1] = intl12.string(util.t["v1eXp/"]);
    return items1;
  } else if (tmp.UNABLE_TO_VERIFY === memo) {
    const intl9 = util.intl;
    const items2 = [intl9.string(util.t["+no/a7"]), ];
    const intl10 = util.intl;
    obj = { username: name };
    items2[1] = intl10.format(util.t.Mft7iJ, obj);
    return items2;
  } else if (tmp.FINGERPRINT_MISMATCH === memo) {
    const intl7 = util.intl;
    const items3 = [intl7.string(util.t.HTJ76H), ];
    const intl8 = util.intl;
    const obj1 = { username: name };
    items3[1] = intl8.format(util.t.tc6aAc, obj1);
    return items3;
  } else if (tmp.OTHER_USER_ALREADY_VERIFIED === memo) {
    const intl5 = util.intl;
    const items4 = [intl5.string(util.t["9lw+J+"]), ];
    const intl6 = util.intl;
    const obj2 = { username: name };
    items4[1] = intl6.format(util.t.TvBS1w, obj2);
    return items4;
  } else if (tmp.MATCH === memo) {
    const intl3 = util.intl;
    const items5 = [intl3.string(util.t["xyE+Dn"]), ];
    const intl4 = util.intl;
    const obj3 = { username: name };
    items5[1] = intl4.format(util.t.znsPl5, obj3);
    return items5;
  } else if (tmp.OTHER_USER_INCONSISTENT_KEYS === memo) {
    const intl = util.intl;
    const items6 = [intl.string(util.t.im1uUi), ];
    const intl2 = util.intl;
    obj = { username: name };
    items6[1] = intl2.format(util.t.WY6IKb, obj);
    return items6;
  }
};
export const getUserVerificationFooterText = function getUserVerificationFooterText(arg0) {
  ({ isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname } = arg0);
  if (isCurrentUserKeyPersistent) {
    if (isOtherUserKeyPersistent) {
      const intl2 = util.intl;
      let obj = { helpArticle: HelpdeskUtilsDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
      let formatResult = intl2.format(util.t["FJN+kh"], obj);
    }
    return formatResult;
  }
  const intl = util.intl;
  const format = intl.format;
  const t = util.t;
  if (isCurrentUserKeyPersistent) {
    obj = { username: otherUserNickname, helpArticle: HelpdeskUtilsDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
    formatResult = format(t["p/9PGp"], obj);
  } else if (isOtherUserKeyPersistent) {
    let obj1 = { helpArticle: HelpdeskUtilsDefault.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
    formatResult = format(t.qT5z87, obj1);
  } else {
    obj = { helpArticle: null };
    obj1 = HelpdeskUtilsDefault;
    obj.helpArticle = obj1.getArticleURL(constants3.END_TO_END_ENCRYPTION);
    formatResult = format(t["6JLy+i"], obj);
  }
};
export { getCurrentUserSigningKey };
export { isPublicKeyMatch };
export const ensureCurrentUserPublicKey = function ensureCurrentUserPublicKey() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isCurrentUserPublicKeyMatch = function isCurrentUserPublicKeyMatch() {
  const self = this;
  const apply = closure_26.apply;
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
  let obj = { userId, channelId, keyVersion, reason: constants.OTHER_USER_INCONSISTENT_KEYS };
  const result = obj.trackE2EEUserVerificationFailed(obj);
  obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.mznLyR);
  const intl2 = util.intl;
  obj.body = intl2.format(util.t.WY6IKb, { username: nickname });
  AlertActionCreatorsDefault.show(obj);
};
export const validateSecureFramesKeyConsistent = function validateSecureFramesKeyConsistent(guildId) {
  ({ userId, channelId } = guildId);
  const items = [RTCConnectionStore, StreamRTCConnectionStore];
  if (getIsSecureFramesKeyInconsistent(userId, items)) {
    const user = UserStore.getUser(userId);
    let obj = NicknameUtilsDefault;
    const name = obj.getName(guildId.guildId, channelId, user);
    let obj1 = SecureFramesTracking;
    obj = { userId, channelId, keyVersion, reason: constants.OTHER_USER_INCONSISTENT_KEYS };
    const result = obj1.trackE2EEUserVerificationFailed(obj);
    obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.mznLyR);
    const intl2 = util.intl;
    obj1 = { username: name };
    obj.body = intl2.format(util.t.WY6IKb, obj1);
    AlertActionCreatorsDefault.show(obj);
    return false;
  } else {
    return true;
  }
};
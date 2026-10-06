// === Module 9378: SecureFramesUtils ===

// Module 9378 (SecureFramesUtils)
import _modDef38 from "module_38" /* 38 */;
import byteLengthDefault from "byteLength" /* 206 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl15 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef4467 from "module_4467" /* 4467 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import _mod9363 from "module_9363" /* 9363 */;
import SecureFramesActionCreatorsDefault from "SecureFramesActionCreators" /* 9381 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9382 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9383 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4935 */;
import UserStore from "UserStore" /* 1377 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9379 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9380 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, closure_3, closure_5, importDefault, staticAuthSessionId;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
function getCurrentUserSigningKey() {
  return obj(...arguments);
}
let obj = function _getCurrentUserSigningKey() {
  let mLSSigningKey;
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    staticAuthSessionId = staticAuthSessionId.getStaticAuthSessionId();
    _modDef38(null != staticAuthSessionId, "[getCurrentUserPublicKey] session id should not be null");
    await mLSSigningKey.getMLSSigningKey(staticAuthSessionId, closure_0);
    return value;
  });
  return obj(...arguments);
};
function toBase64DataUri(arg0) {
  const fromByteArray = byteLengthDefault.fromByteArray;
  byteLengthDefault;
  const uint8Array = new Uint8Array(arg0);
  return "data:application/octet-stream;base64," + fromByteArray(uint8Array);
}
function isPublicKeyMatch() {
  return obj(...arguments);
}
obj = function _isPublicKeyMatch() {
  obj = _asyncToGenerator(async (arg0, arg1, key_version) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj5;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              c6 = 1;
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: closure_2_15.VOICE_MATCH_PUBLIC_KEY(closure_0), body: obj5, rejectWithError: false };
              const post = HTTP.post;
              c7 = 2;
              c8 = 1;
              obj5 = { public_key: toBase64DataUri(closure_1), key_version };
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_0 = closure_5;
            const obj3 = closure_132_1(closure_132_2[22]);
            obj3.captureException(closure_0);
            throw closure_0;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            c8 = 3;
            return { value: value.body.is_match, done: true };
          }
        } catch (tmp14) {
          closure_5 = tmp14;
          if (0 === c6) {
            c8 = 3;
            throw tmp14;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function uploadCurrentUserPublicKey() {
  return obj(...arguments);
}
obj = function _uploadCurrentUserPublicKey() {
  obj = _asyncToGenerator(async (key_version) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let key;
          let signature;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              key = undefined;
              signature = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: getCurrentUserSigningKey(key_version), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              key = closure_1.key;
              signature = closure_1.signature;
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[21]).HTTP;
              const request = { url: closure_130_15.VOICE_PUBLIC_KEYS(), body: obj7, rejectWithError: false };
              const put = HTTP.put;
              c5 = 3;
              c6 = 1;
              obj7 = { public_key: closure_130_19(key), signature: closure_130_19(signature), key_version };
              const obj8 = { value: put(request), done: false };
              return obj8;
            }
          } else if (2 === c5) {
            c4 = 0;
            let closure_4 = closure_3;
            const obj3 = closure_130_1(closure_130_2[22]);
            obj3.captureException(closure_4);
            throw closure_4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            obj = closure_130_1(closure_130_2[11]);
            const result = obj.addUploadedKeyVersion(key_version);
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          closure_3 = tmp22;
          if (0 === c4) {
            c6 = 3;
            throw tmp22;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function isKeyVersionUploaded(arg0) {
  const uploadedKeyVersionsCached = SecureFramesPersistedStore.getUploadedKeyVersionsCached();
  return uploadedKeyVersionsCached.includes(arg0);
}
obj = function _ensureCurrentUserPublicKey() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (!isKeyVersionUploaded(closure_0)) {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: uploadCurrentUserPublicKey(closure_0), done: false };
            return obj4;
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
        return { value: "IconComponent", done: null };
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
obj = function _isCurrentUserPublicKeyMatch() {
  let id;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let value;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let id2;
        let key;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            id2 = undefined;
            key = undefined;
            value = undefined;
            if (isKeyVersionUploaded(closure_0)) {
              id2 = id.getId();
              c3 = 2;
              c4 = 1;
              const obj4 = { value: getCurrentUserSigningKey(closure_0), done: false };
              return obj4;
            } else {
              c3 = 1;
              c4 = 1;
              const obj5 = { value: uploadCurrentUserPublicKey(closure_0), done: false };
              return obj5;
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 3;
            return { value: true, done: true };
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            key = value.key;
            c3 = 3;
            c4 = 1;
            const obj8 = { value: closure_130_20(id2, key, closure_0), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const tmp6 = value;
          if (!tmp6) {
            obj = closure_130_0(closure_130_2[12]);
            const result = obj.trackE2EEPublicKeyMismatch(closure_0);
          }
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
      } catch (tmp22) {
        c4 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
function getIsSecureFramesKeyInconsistent(userId, items) {
  let obj2;
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  if (obj.isUserConnected(userId)) {
    const secureFramesRosterMapEntry = obj.getSecureFramesRosterMapEntry(userId);
    if (null == secureFramesRosterMapEntry) {
      return false;
    } else {
      const _Uint8Array2 = Uint8Array;
      const self3 = this;
      const self4 = this;
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
            let self = this;
            let self2 = this;
            let uint8Array1 = new Uint8Array(tmp11);
            let num = 0;
            if (0 < uint8Array.length) {
              while (uint8Array[num] === tmp14[num]) {
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
}
({ AnalyticsSecureFramesUserVerification: unpackModuleId, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_12 } = SecureFramesConstants);
({ LinkingTypes: map1, Routes: closure_14, Endpoints: closure_15, HelpdeskArticles: closure_16 } = Constants);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesUtils.tsx");

export const getSecureFramesHelpdeskArticle = function getSecureFramesHelpdeskArticle() {
  obj = HelpdeskUtilsDefault;
  return obj.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesPersistentCodesHelpdeskArticle = function getSecureFramesPersistentCodesHelpdeskArticle() {
  obj = HelpdeskUtilsDefault;
  return obj.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesVerifiedDevicesHelpdeskArticle = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
  obj = HelpdeskUtilsDefault;
  return obj.getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const addVerification = function addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, DEEP_LINK) {
  obj = SecureFramesActionCreatorsDefault;
  const tmp2 = isOtherUserKeyPersistent;
  if (tmp2) {
    const secureFramesVerifiedKey = obj.createSecureFramesVerifiedKey(userId, fingerprintUserKey);
  } else {
    const secureFramesTransientKey = obj.createSecureFramesTransientKey(userId, fingerprintUserKey);
  }
  const obj2 = SecureFramesTracking;
  const obj3 = { channelId, userId, analyticsLocation: DEEP_LINK };
  const result = obj2.trackE2EEUserVerified(obj3);
};
export const deleteVerification = function deleteVerification(userId, arg1, isOtherUserKeyPersistent) {
  const tmp = isOtherUserKeyPersistent;
  if (tmp) {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const serializeKey = _mod9363.serializeKey;
    _mod9363;
    const uint8Array = new Uint8Array(arg1);
    const serializeKeyResult = serializeKey(uint8Array);
    const obj2 = SecureFramesActionCreatorsDefault;
    const result = obj2.deleteSecureFramesVerifiedKey(userId, serializeKeyResult);
  } else {
    obj = SecureFramesActionCreatorsDefault;
    const result1 = obj.deleteSecureFramesTransientKey(userId);
  }
};
export const deletePersistentVerification = function deletePersistentVerification(userId, verifiedKey) {
  let intl;
  let intl2;
  _require = userId;
  importDefault = verifiedKey;
  obj = {
    title: intl.string(require("intl").t.hdL152),
    subtitle: intl2.string(require("intl").t["8VGYKg"]),
    onConfirm() {
      obj = SecureFramesActionCreatorsDefault;
      const result = obj.deleteSecureFramesVerifiedKey(userId, verifiedKey);
      const obj2 = SecureFramesTracking;
      const result1 = obj2.trackE2EESettingsDeviceDelete();
    }
  };
  const openSecureFramesUpdateConfirmation = SecureFramesPlatformUtilsDefault.openSecureFramesUpdateConfirmation;
  SecureFramesPlatformUtilsDefault;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  let result = openSecureFramesUpdateConfirmation(obj);
};
export const deleteUserPersistentVerifications = function deleteUserPersistentVerifications(userId) {
  let intl;
  let intl2;
  _require = userId;
  const user = UserStore.getUser(userId);
  obj = UserUtilsDefault;
  const name = obj.getName(user);
  let obj2 = {
    title: intl.formatToPlainString(require("intl").t.K6NGBy, { username: name }),
    subtitle: intl2.string(require("intl").t.F1BQK3),
    onConfirm() {
      obj = SecureFramesActionCreatorsDefault;
      const result = obj.deleteSecureFramesUserVerifiedKeys(userId);
      const obj2 = SecureFramesTracking;
      const result1 = obj2.trackE2EESettingsUserDelete();
    }
  };
  const openSecureFramesUpdateConfirmation = SecureFramesPlatformUtilsDefault.openSecureFramesUpdateConfirmation;
  SecureFramesPlatformUtilsDefault;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  let result = openSecureFramesUpdateConfirmation(obj2);
};
export const getSecureFramesUserVerifiedTimestamp = function getSecureFramesUserVerifiedTimestamp(timestamp) {
  const tmp3 = _modDef4467(timestamp);
  obj = _modDef4467();
  const diffResult = obj.diff(tmp3, "s");
  if (diffResult > 12 * DurationsDefault.Seconds.DAYS_30) {
    const _Math6 = Math;
    const rounded = Math.round(diffResult / (12 * DurationsDefault.Seconds.DAYS_30));
    const intl7 = intl15.intl;
    const obj2 = { count: rounded };
    return intl7.formatToPlainString(intl15.t.F1wqkD, obj2);
  } else if (diffResult > DurationsDefault.Seconds.DAYS_30) {
    const _Math5 = Math;
    const rounded1 = Math.round(diffResult / DurationsDefault.Seconds.DAYS_30);
    const intl6 = intl15.intl;
    const obj3 = { count: rounded1 };
    return intl6.formatToPlainString(intl15.t["iT+b+2"], obj3);
  } else if (diffResult > 7 * DurationsDefault.Seconds.DAY) {
    const _Math4 = Math;
    const rounded2 = Math.round(diffResult / (7 * DurationsDefault.Seconds.DAY));
    const intl5 = intl15.intl;
    const obj4 = { count: rounded2 };
    return intl5.formatToPlainString(intl15.t.dLurKZ, obj4);
  } else if (diffResult > DurationsDefault.Seconds.DAY) {
    const _Math3 = Math;
    const rounded3 = Math.round(diffResult / DurationsDefault.Seconds.DAY);
    const intl4 = intl15.intl;
    const obj5 = { count: rounded3 };
    return intl4.formatToPlainString(intl15.t.LE8a2H, obj5);
  } else if (diffResult > DurationsDefault.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded4 = Math.round(diffResult / DurationsDefault.Seconds.HOUR);
    const intl3 = intl15.intl;
    const obj6 = { count: rounded4 };
    return intl3.formatToPlainString(intl15.t.KULxVS, obj6);
  } else if (diffResult > DurationsDefault.Seconds.MINUTE) {
    const _Math = Math;
    const rounded5 = Math.round(diffResult / DurationsDefault.Seconds.MINUTE);
    const intl2 = intl15.intl;
    const obj7 = { count: rounded5 };
    return intl2.formatToPlainString(intl15.t.ws6rWq, obj7);
  } else {
    const intl = intl15.intl;
    const obj8 = { count: diffResult };
    return intl.formatToPlainString(intl15.t["/w0Qpw"], obj8);
  }
};
export const getUserVerificationDeeplink = function getUserVerificationDeeplink(userId, arg1) {
  const FEATUREResult = authStore2.FEATURE(map1.DAVE_PROTOCOL_VERIFICATION);
  return "" + protocol + "//" + location.host + FEATUREResult + "?userId=" + userId + "&fingerprint=" + encodeURIComponent(arg1);
};
export const getUserVerifyStateText = function getUserVerifyStateText(CURRENT_USER_DISCONNECTED, name) {
  if (unpackModuleId.OTHER_USER_DISCONNECTED === CURRENT_USER_DISCONNECTED) {
    const intl13 = intl15.intl;
    const items = [intl13.string(intl15.t.ZBHDM9), ];
    const intl14 = intl15.intl;
    const obj2 = { username: name };
    items[1] = intl14.format(intl15.t["+rIdOd"], obj2);
    return items;
  } else if (unpackModuleId.CURRENT_USER_DISCONNECTED === CURRENT_USER_DISCONNECTED) {
    const intl11 = intl15.intl;
    const items1 = [intl11.string(intl15.t["5ICxE6"]), ];
    const intl12 = intl15.intl;
    items1[1] = intl12.string(intl15.t["v1eXp/"]);
    return items1;
  } else if (unpackModuleId.UNABLE_TO_VERIFY === CURRENT_USER_DISCONNECTED) {
    const intl9 = intl15.intl;
    const items2 = [intl9.string(intl15.t["+no/a7"]), ];
    const intl10 = intl15.intl;
    const obj3 = { username: name };
    items2[1] = intl10.format(intl15.t.Mft7iJ, obj3);
    return items2;
  } else if (unpackModuleId.FINGERPRINT_MISMATCH === CURRENT_USER_DISCONNECTED) {
    const intl7 = intl15.intl;
    const items3 = [intl7.string(intl15.t.HTJ76H), ];
    const intl8 = intl15.intl;
    const obj4 = { username: name };
    items3[1] = intl8.format(intl15.t.tc6aAc, obj4);
    return items3;
  } else if (unpackModuleId.OTHER_USER_ALREADY_VERIFIED === CURRENT_USER_DISCONNECTED) {
    const intl5 = intl15.intl;
    const items4 = [intl5.string(intl15.t["9lw+J+"]), ];
    const intl6 = intl15.intl;
    const obj5 = { username: name };
    items4[1] = intl6.format(intl15.t.TvBS1w, obj5);
    return items4;
  } else if (unpackModuleId.MATCH === CURRENT_USER_DISCONNECTED) {
    const intl3 = intl15.intl;
    const items5 = [intl3.string(intl15.t["xyE+Dn"]), ];
    const intl4 = intl15.intl;
    const obj6 = { username: name };
    items5[1] = intl4.format(intl15.t.znsPl5, obj6);
    return items5;
  } else if (unpackModuleId.OTHER_USER_INCONSISTENT_KEYS === CURRENT_USER_DISCONNECTED) {
    const intl = intl15.intl;
    const items6 = [intl.string(intl15.t.im1uUi), ];
    const intl2 = intl15.intl;
    obj = { username: name };
    items6[1] = intl2.format(intl15.t.WY6IKb, obj);
    return items6;
  }
};
export const getUserVerificationFooterText = function getUserVerificationFooterText(arg0) {
  let format2Result;
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let obj2;
  let obj4;
  let obj6;
  let obj8;
  let otherUserNickname;
  ({ isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname } = arg0);
  if (isCurrentUserKeyPersistent) {
    if (isOtherUserKeyPersistent) {
      const intl2 = intl15.intl;
      const format2 = intl2.format;
      const obj3 = { helpArticle: obj8.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
      const prop = intl15.t["FJN+kh"];
      obj8 = HelpdeskUtilsDefault;
      format2Result = format2(prop, obj3);
    }
    return format2Result;
  }
  const intl = intl15.intl;
  const format = intl.format;
  const t = intl15.t;
  if (isCurrentUserKeyPersistent) {
    const prop1 = t["p/9PGp"];
    const obj5 = { username: otherUserNickname, helpArticle: obj6.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
    obj6 = HelpdeskUtilsDefault;
    format2Result = format(prop1, obj5);
  } else if (isOtherUserKeyPersistent) {
    const qT5z87 = t.qT5z87;
    const obj7 = { helpArticle: obj4.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
    obj4 = HelpdeskUtilsDefault;
    format2Result = format(qT5z87, obj7);
  } else {
    const prop2 = t["6JLy+i"];
    obj = { helpArticle: obj2.getArticleURL(constants3.END_TO_END_ENCRYPTION) };
    obj2 = HelpdeskUtilsDefault;
    format2Result = format(prop2, obj);
  }
};
export { getCurrentUserSigningKey };
export { isPublicKeyMatch };
export const ensureCurrentUserPublicKey = function ensureCurrentUserPublicKey() {
  return obj(...arguments);
};
export const isCurrentUserPublicKeyMatch = function isCurrentUserPublicKeyMatch() {
  return obj(...arguments);
};
export { getIsSecureFramesKeyInconsistent };
export const showSecureFramesKeyInconsistentAlert = function showSecureFramesKeyInconsistentAlert(arg0) {
  let channelId;
  let intl;
  let intl2;
  let nickname;
  let userId;
  ({ userId, channelId, nickname } = arg0);
  obj = SecureFramesTracking;
  const obj2 = { userId, channelId, keyVersion, reason: unpackModuleId.OTHER_USER_INCONSISTENT_KEYS };
  const result = obj.trackE2EEUserVerificationFailed(obj2);
  const obj3 = { title: intl.string(intl15.t.mznLyR), body: intl2.format(intl15.t.WY6IKb, { username: nickname }) };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl15.intl;
  intl2 = intl15.intl;
  show(obj3);
};
export const validateSecureFramesKeyConsistent = function validateSecureFramesKeyConsistent(guildId) {
  let channelId;
  let intl;
  let intl2;
  let obj5;
  let userId;
  ({ userId, channelId } = guildId);
  const items = [RTCConnectionStore, StreamRTCConnectionStore];
  guildId = guildId.guildId;
  if (getIsSecureFramesKeyInconsistent(userId, items)) {
    const user = UserStore.getUser(userId);
    obj = NicknameUtilsDefault;
    const name = obj.getName(guildId, channelId, user);
    const obj3 = { userId, channelId, keyVersion, reason: unpackModuleId.OTHER_USER_INCONSISTENT_KEYS };
    const obj2 = SecureFramesTracking;
    const result = obj2.trackE2EEUserVerificationFailed(obj3);
    const obj4 = { title: intl.string(intl15.t.mznLyR), body: intl2.format(intl15.t.WY6IKb, obj5) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl15.intl;
    intl2 = intl15.intl;
    obj5 = { username: name };
    show(obj4);
    return false;
  } else {
    return true;
  }
};
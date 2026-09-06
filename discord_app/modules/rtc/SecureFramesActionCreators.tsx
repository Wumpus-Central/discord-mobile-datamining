// === Module 9153: SecureFramesActionCreators ===

// Module 9153 (SecureFramesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9150 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9154 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function savePersistentCodesEnabled() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _savePersistentCodesEnabled(persistentCodesEnabled, arg1) {
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            closure_3 = tmp5;
            closure_131_0 = closure_1;
            closure_131_1 = undefined;
            let obj1 = { type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled };
            DispatcherDefault.dispatch(obj1);
            if (persistentCodesEnabled) {
              c6 = 1;
              c7 = 2;
              c8 = 1;
              let obj2 = { value: SecureFramesUtils.ensureCurrentUserPublicKey(closure_2_7), done: false };
              return obj2;
            } else if (tmp53 != null) {
              tmp53();
            }
          }
        } else {
          if (1 === tmp8) {
            c6 = 0;
            closure_131_2 = closure_5;
            const aPIError = new closure_132_0(closure_132_2[8]).APIError(closure_131_2);
            closure_131_1 = aPIError;
            obj1 = closure_132_1(closure_132_2[6]);
            obj1.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: false });
            obj2 = closure_132_1(closure_132_2[9]);
            const obj3 = { title: null, body: null };
            const intl = closure_132_0(closure_132_2[10]).intl;
            obj3.title = intl.string(closure_132_0(closure_132_2[10]).t.R0RpRX);
            const anyErrorMessage = closure_131_1.getAnyErrorMessage();
            body = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl2 = closure_132_0(closure_132_2[10]).intl;
              body = intl2.string(closure_132_0(closure_132_2[10]).t.eAn6z2);
            }
            obj3.body = body;
            obj2.show(obj3);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (closure_131_0 != null) {
              closure_131_0();
            }
            c6 = 0;
          }
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        c8 = 3;
      } catch (tmp44) {
        closure_5 = tmp44;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp44;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_11 = async function _updatePersistentCodesEnabled(arg0, value) {
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
          const tmp18 = (function getCurrentUserSelectedVoiceChannelId() {
            voiceStateForUser = voiceStateForUser.getVoiceStateForUser(id.getId());
            let channelId;
            if (voiceStateForUser != null) {
              channelId = voiceStateForUser.channelId;
            }
            channel = channel.getChannel(channelId);
            let sessionId1;
            const sessionId = id.getSessionId();
            if (voiceStateForUser != null) {
              sessionId1 = voiceStateForUser.sessionId;
            }
            id = null;
            if (sessionId === sessionId1) {
              id = null;
              if (null != channel) {
                id = null;
                if (channel.type !== constants.GUILD_STAGE_VOICE) {
                  id = channel.id;
                }
              }
            }
            return id;
          })();
          closure_2 = tmp18;
          if (null != tmp18) {
            let obj2 = SecureFramesPlatformUtilsDefault;
            const intl = util.intl;
            const string = intl.string;
            const t = util.t;
            if (tmp17) {
              let stringResult = string(t.DRFN1B);
              let tmp10 = tmp8;
            } else {
              stringResult = string(t.q29xJz);
              tmp10 = tmp8;
            }
            let obj1 = { title: stringResult, subtitle: null, confirmText: null, onConfirm: null };
            const intl2 = tmp10(1114).intl;
            const string2 = intl2.string;
            let intl3 = tmp10(1114).t;
            if (tmp17) {
              let string2Result = string2(intl3.y015ZY);
            } else {
              string2Result = string2(intl3.E66FQn);
            }
            obj1.subtitle = string2Result;
            intl3 = tmp10(1114).intl;
            obj1.confirmText = intl3.string(tmp10(1114).t.aTuFYT);
            closure_1 = asyncGeneratorStep(async (arg0, value) => {
              if (c0 === 2) {
                c0 = 3;
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
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 1;
                      c0 = 1;
                      const obj1 = {
                        value: closure_1_9(closure_0, () => {
                                  c1(5411).disconnect();
                                  const obj = c1(5411);
                                  const voiceChannel = c1(5411).selectVoiceChannel(dependencyMap);
                                }),
                        done: false
                      };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    c0 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp7) {
                  c0 = tmp;
                  throw tmp7;
                }
              }
            });
            obj1.onConfirm = function() {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            obj1 = obj2.openSecureFramesUpdateConfirmation(obj1);
          } else {
            c2 = 1;
            c1 = 1;
            obj2 = { value: savePersistentCodesEnabled(tmp17), done: false };
            return obj2;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp12) {
      c1 = tmp;
      throw tmp12;
    }
  }
};
let closure_7 = fn(9152).SECURE_FRAMES_PUBLIC_KEY_VERSION;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default {
  clearUploadedKeyVersions() {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  updatePersistentCodesEnabled() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  addUploadedKeyVersion(keyVersion) {
    const obj = { type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion };
    obj.dispatch(obj);
  },
  createSecureFramesVerifiedKey(userId, key) {
    const obj = { type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesVerifiedKey(userId, serializeKeyResult) {
    const obj = { type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId, serializedKey: serializeKeyResult };
    obj.dispatch(obj);
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    const obj = { type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId };
    obj.dispatch(obj);
  },
  createSecureFramesTransientKey(userId, key) {
    const obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesTransientKey(userId) {
    const obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId };
    obj.dispatch(obj);
  }
};
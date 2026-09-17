// === Module 9307: SecureFramesActionCreators ===

// Module 9307 (SecureFramesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9304 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9308 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import VoiceStateStore from "VoiceStateStore" /* 4659 */;

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
let closure_10 = async function _savePersistentCodesEnabled() {
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
        const obj4 = { value, done: true };
        return obj4;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = closure_1;
            closure_131_1 = undefined;
            const obj7 = { type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled };
            DispatcherDefault.dispatch(obj7);
            if (persistentCodesEnabled) {
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj8 = { value: SecureFramesUtils.ensureCurrentUserPublicKey(closure_2_7), done: false };
              return obj8;
            } else if (closure_1 != null) {
              closure_1();
            }
          }
        } else {
          if (1 === tmp8) {
            c6 = 0;
            closure_131_2 = closure_5;
            const aPIError = new closure_132_0(closure_132_2[8]).APIError(closure_131_2);
            closure_131_1 = aPIError;
            closure_132_1(closure_132_2[6]).dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: false });
            const obj2 = closure_132_1(closure_132_2[6]);
            const obj10 = { title: null, body: null };
            const intl = closure_132_0(closure_132_2[10]).intl;
            obj10.title = intl.string(closure_132_0(closure_132_2[10]).t.R0RpRX);
            const anyErrorMessage = closure_131_1.getAnyErrorMessage();
            body = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl2 = closure_132_0(closure_132_2[10]).intl;
              body = intl2.string(closure_132_0(closure_132_2[10]).t.eAn6z2);
            }
            obj10.body = body;
            closure_132_1(closure_132_2[9]).show(obj10);
            const obj3 = closure_132_1(closure_132_2[9]);
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
          const obj = { value, done: true };
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
let closure_11 = async function _updatePersistentCodesEnabled(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
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
          let obj4 = { value, done: true };
          return obj4;
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
            const intl = util.intl;
            const string = intl.string;
            const t = util.t;
            if (closure_0) {
              let stringResult = string(t.DRFN1B);
              let tmp10 = require;
            } else {
              stringResult = string(t.q29xJz);
              tmp10 = require;
            }
            let obj5 = { title: stringResult, subtitle: null, confirmText: null, onConfirm: null };
            const intl2 = tmp10(1115).intl;
            const string2 = intl2.string;
            let intl3 = tmp10(1115).t;
            if (closure_0) {
              let string2Result = string2(intl3.y015ZY);
            } else {
              string2Result = string2(intl3.E66FQn);
            }
            obj5.subtitle = string2Result;
            intl3 = tmp10(1115).intl;
            obj5.confirmText = intl3.string(tmp10(1115).t.aTuFYT);
            closure_1 = asyncGeneratorStep(async () => {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
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
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      c1 = 1;
                      c0 = 1;
                      const obj4 = {
                        value: closure_1_9(closure_0, () => {
                                  c1(5499).disconnect();
                                  const obj = c1(5499);
                                  const voiceChannel = c1(5499).selectVoiceChannel(dependencyMap);
                                }),
                        done: false
                      };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    let obj = { value, done: true };
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
            obj5.onConfirm = function() {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            obj5 = SecureFramesPlatformUtilsDefault.openSecureFramesUpdateConfirmation(obj5);
          } else {
            c2 = 1;
            c1 = 1;
            const obj6 = { value: savePersistentCodesEnabled(closure_0), done: false };
            return obj6;
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
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp12) {
      c1 = tmp;
      throw tmp12;
    }
  }
};
let closure_7 = fn(9306).SECURE_FRAMES_PUBLIC_KEY_VERSION;
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
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion });
  },
  createSecureFramesVerifiedKey(userId, key) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key });
  },
  deleteSecureFramesVerifiedKey(userId, serializeKeyResult) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId, serializedKey: serializeKeyResult });
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId });
  },
  createSecureFramesTransientKey(userId, key) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key });
  },
  deleteSecureFramesTransientKey(userId) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId });
  }
};
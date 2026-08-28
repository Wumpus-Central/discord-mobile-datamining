// discord_app/modules/rtc/SecureFramesActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/VoiceStateStore.tsx";
import { SECURE_FRAMES_PUBLIC_KEY_VERSION as closure_7 } from "SecureFramesConstants.tsx";
import { ChannelTypes } from "../../Constants.tsx";

const require = arg1;
function savePersistentCodesEnabled() {
  const self = this;
  const apply = _savePersistentCodesEnabled.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _savePersistentCodesEnabled() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp5;
              const callback = aPIError;
              aPIError = undefined;
              obj1 = { type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: null };
              obj1[1] = callback;
              callback2(closure_1_2[6]).dispatch(obj1);
              if (callback) {
                c6 = 1;
                c7 = 2;
                c8 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = callback(closure_1_2[7]).ensureCurrentUserPublicKey(c7);
                return obj2;
              } else if (tmp54 != null) {
                tmp54();
              }
              const obj9 = callback2(closure_1_2[6]);
            }
          } else {
            if (1 === tmp8) {
              c6 = 0;
              dependencyMap = closure_5;
              aPIError = new callback(4344).APIError(dependencyMap);
              obj1 = aPIError(709);
              obj1.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: false });
              obj2 = aPIError(4822);
              const obj3 = { title: null, body: null };
              const intl = callback(1236).intl;
              obj3[0] = intl.string(callback(1236).t.R0RpRX);
              const anyErrorMessage = aPIError.getAnyErrorMessage();
              dependencyMap = anyErrorMessage;
              if (anyErrorMessage == null) {
                const intl2 = callback(1236).intl;
                dependencyMap = intl2.string(callback(1236).t.eAn6z2);
              }
              obj3[1] = dependencyMap;
              obj2.show(obj3);
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (callback != null) {
                callback();
              }
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updatePersistentCodesEnabled() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const tmp19 = (function getCurrentUserSelectedVoiceChannelId() {
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
              dependencyMap = tmp19;
              if (null != tmp19) {
                let obj2 = v0(9782);
                const intl = callback(1236).intl;
                const string = intl.string;
                const t = callback(1236).t;
                if (tmp18) {
                  let stringResult = string(t.DRFN1B);
                  let tmp10 = tmp8;
                } else {
                  stringResult = string(t.q29xJz);
                  tmp10 = tmp8;
                }
                obj1 = { title: null, subtitle: null, confirmText: null, onConfirm: null };
                obj1[0] = stringResult;
                const intl2 = tmp10(1236).intl;
                const string2 = intl2.string;
                let intl3 = tmp10(1236).t;
                if (tmp18) {
                  let string2Result = string2(intl3.y015ZY);
                } else {
                  string2Result = string2(intl3.E66FQn);
                }
                obj1[1] = string2Result;
                intl3 = tmp10(1236).intl;
                obj1[2] = intl3.string(tmp10(1236).t.aTuFYT);
                v0 = closure_1_3(function*() {
                  if (c0 === 2) {
                    c0 = 3;
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
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          c1 = 1;
                          c0 = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = closure_1_9(c0, () => {
                            v1(closure_1_2[12]).disconnect();
                            const obj = v1(closure_1_2[12]);
                            const voiceChannel = v1(closure_1_2[12]).selectVoiceChannel(closure_2);
                          });
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
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
                obj1[3] = function() {
                  const self = this;
                  const apply = c1.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                obj1 = obj2.openSecureFramesUpdateConfirmation(obj1);
              } else {
                dependencyMap = 1;
                v0 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = closure_1_9(tmp18);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp12) {
          v0 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_11 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default {
  clearUploadedKeyVersions() {
    dispatcherDefault.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  updatePersistentCodesEnabled(arg0) {
    const self = this;
    const apply = _updatePersistentCodesEnabled.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  addUploadedKeyVersion(closure_0) {
    let obj = dispatcherDefault;
    obj = { type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion: closure_0 };
    obj.dispatch(obj);
  },
  createSecureFramesVerifiedKey(userId, key) {
    let obj = dispatcherDefault;
    obj = { type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesVerifiedKey(closure_0, closure_1) {
    let obj = dispatcherDefault;
    obj = { type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId: closure_0, serializedKey: closure_1 };
    obj.dispatch(obj);
  },
  deleteSecureFramesUserVerifiedKeys(closure_0) {
    let obj = dispatcherDefault;
    obj = { type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId: closure_0 };
    obj.dispatch(obj);
  },
  createSecureFramesTransientKey(userId, key) {
    let obj = dispatcherDefault;
    obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesTransientKey(userId) {
    let obj = dispatcherDefault;
    obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId };
    obj.dispatch(obj);
  }
};
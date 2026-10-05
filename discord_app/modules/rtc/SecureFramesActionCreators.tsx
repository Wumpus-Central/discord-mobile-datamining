// discord_app/modules/rtc/SecureFramesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import intl4 from "../../intl/index.native.tsx";
import SecureFramesUtils from "SecureFramesUtils.tsx";
import SecureFramesConstants from "SecureFramesConstants.tsx";
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils.native.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let body, c0, c1, c2, closure_4, closure_5, dispatchResult, getChannel, id, persistentCodesEnabled, voiceStateForUser;

function savePersistentCodesEnabled() {
  return obj(...arguments);
}
let obj = function _savePersistentCodesEnabled() {
  obj = _asyncToGenerator(async (persistentCodesEnabled, arg1) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function (arg0, value) {
      let intl;
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
          let aPIError;
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
              persistentCodesEnabled = closure_1;
              aPIError = undefined;
              const obj5 = { type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled };
              const obj8 = DispatcherDefault;
              dispatchResult = obj8.dispatch(obj5);
              if (persistentCodesEnabled) {
                c6 = 1;
                dispatchResult = SecureFramesUtils;
                c7 = 2;
                c8 = 1;
                const obj6 = { value: dispatchResult.ensureCurrentUserPublicKey(closure_2_7), done: false };
                return obj6;
              } else if (closure_1 != null) {
                closure_1();
              }
            }
          } else if (1 === tmp4) {
            c6 = 0;
            body = closure_5;
            const self = this;
            const self2 = this;
            aPIError = new closure_132_0(closure_132_2[8]).APIError(body);
            const obj2 = closure_132_1(closure_132_2[6]);
            obj2.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: false });
            dispatchResult = closure_132_1(closure_132_2[9]);
            const show = dispatchResult.show;
            const obj7 = { title: intl.string(closure_132_0(closure_132_2[10]).t.R0RpRX), body };
            intl = closure_132_0(closure_132_2[10]).intl;
            const anyErrorMessage = aPIError.getAnyErrorMessage();
            body = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl2 = closure_132_0(closure_132_2[10]).intl;
              body = intl2.string(closure_132_0(closure_132_2[10]).t.eAn6z2);
            }
            show(obj7);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            if (persistentCodesEnabled != null) {
              persistentCodesEnabled();
            }
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp38) {
          closure_5 = tmp38;
          if (0 === c6) {
            c8 = 3;
            throw tmp38;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updatePersistentCodesEnabled() {
  obj = _asyncToGenerator(async (arg0) => {
    let intl3;
    let string2Result;
    function getCurrentUserSelectedVoiceChannelId() {
      voiceStateForUser = voiceStateForUser.getVoiceStateForUser(id.getId());
      let channelId;
      getChannel = getChannel.getChannel;
      obj = id;
      if (voiceStateForUser != null) {
        channelId = voiceStateForUser.channelId;
      }
      const channel = getChannel(channelId);
      let sessionId1;
      const sessionId = obj.getSessionId();
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
    }
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
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
            let obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp19 = getCurrentUserSelectedVoiceChannelId();
            let closure_2 = tmp19;
            if (null != tmp19) {
              let stringResult;
              let tmp10;
              const tmp7 = SecureFramesPlatformUtilsDefault;
              const openSecureFramesUpdateConfirmation = tmp7.openSecureFramesUpdateConfirmation;
              const intl = intl4.intl;
              const string = intl.string;
              const t = intl4.t;
              if (closure_0) {
                stringResult = string(t.DRFN1B);
                tmp10 = require;
              } else {
                stringResult = string(t.q29xJz);
                tmp10 = require;
              }
              let obj4 = {
                title: stringResult,
                subtitle: string2Result,
                confirmText: intl3.string(tmp10(dependencyMap[10]).t.aTuFYT),
                onConfirm: function () {
                  return closure_1(...arguments);
                },
              };
              const intl2 = tmp10(dependencyMap[10]).intl;
              const string2 = intl2.string;
              const t2 = tmp10(dependencyMap[10]).t;
              if (closure_0) {
                string2Result = string2(t2.y015ZY);
              } else {
                string2Result = string2(t2.E66FQn);
              }
              intl3 = tmp10(dependencyMap[10]).intl;
              let closure_1 = _asyncToGenerator(async () => {
                if (c0 === 2) {
                  c0 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
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
                            obj = c1(closure_2_2[12]);
                            obj.disconnect();
                            const obj2 = c1(closure_2_2[12]);
                            const voiceChannel = obj2.selectVoiceChannel(closure_1_2);
                          }),
                          done: false,
                        };
                        return obj4;
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
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp6) {
                    c0 = 3;
                    throw tmp6;
                  }
                }
              });
              const result = openSecureFramesUpdateConfirmation(obj4);
            } else {
              c2 = 1;
              c1 = 1;
              const obj5 = { value: savePersistentCodesEnabled(closure_0), done: false };
              return obj5;
            }
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
      } catch (tmp14) {
        c1 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
let closure_7 = SecureFramesConstants.SECURE_FRAMES_PUBLIC_KEY_VERSION;
const ChannelTypes = Constants.ChannelTypes;
obj = {
  clearUploadedKeyVersions() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  updatePersistentCodesEnabled() {
    return obj(...arguments);
  },
  addUploadedKeyVersion(keyVersion) {
    obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion };
    obj.dispatch(obj2);
  },
  createSecureFramesVerifiedKey(userId, key) {
    obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key };
    obj.dispatch(obj2);
  },
  deleteSecureFramesVerifiedKey(userId, serializeKeyResult) {
    obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId, serializedKey: serializeKeyResult };
    obj.dispatch(obj2);
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId };
    obj.dispatch(obj2);
  },
  createSecureFramesTransientKey(userId, key) {
    obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key };
    obj.dispatch(obj2);
  },
  deleteSecureFramesTransientKey(userId) {
    obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId };
    obj.dispatch(obj2);
  },
};
let result = size.fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default obj;

// === Module 13938: joinFrameActivity ===

// Module 13938 (joinFrameActivity)
import UserActivityActionCreators from "UserActivityActionCreators" /* 7246 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8069 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;

require = fn;
let closure_12 = async function _joinFrameActivity(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
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
      c10 = 2;
      switch (c9) {
        case 0:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp3;
            closure_5 = tmp7;
            closure_133_0 = undefined;
            closure_133_1 = undefined;
            closure_133_2 = undefined;
            closure_133_3 = undefined;
            closure_133_4 = undefined;
            closure_133_5 = undefined;
            closure_133_6 = undefined;
            ({ application: closure_133_0, userId: closure_133_1, activity: closure_133_2, sessionId: closure_133_3, channelId: closure_133_4, messageId: closure_133_5, intent } = closure_0);
            if (intent === undefined) {
              intent = constants.PLAY;
            }
            closure_133_6 = intent;
            let id;
            closure_133_8 = undefined;
            closure_133_9 = undefined;
            let frameSurfaces;
            closure_133_11 = undefined;
            closure_133_12 = undefined;
            closure_133_13 = undefined;
            let secret;
            closure_133_16 = undefined;
            closure_133_17 = undefined;
            let frameId;
            let launched;
            closure_133_14 = function fail() {
              obj7(closure_2[7]).dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId });
              return false;
            };
            c9 = 1;
            c10 = 1;
            return { value: "flexDirection", done: true };
          }
        break;
        case 1:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            id = closure_133_0.id;
            if (null != closure_133_3) {
              const obj5 = { type: "ACTIVITY_JOIN_LOADING", applicationId: id };
              closure_134_1(closure_134_2[7]).dispatch(obj5);
              const obj13 = closure_134_1(closure_134_2[7]);
            }
            let obj7 = closure_133_2;
            if (closure_133_2 == null) {
              let tmp68 = null;
              if (null != closure_133_3) {
                obj7 = { application_id: id, session_id: closure_133_3 };
                tmp68 = obj7;
              }
              obj7 = tmp68;
            }
            closure_133_8 = obj7;
            if (null != closure_133_8) {
              c9 = 2;
              c10 = 1;
              const obj8 = {
                value: (function getActivityChannelId() {
                              const self = this;
                              const apply = closure_1_14.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_133_8, closure_133_1),
                done: false
              };
              return obj8;
            } else {
              closure_133_9 = tmp57;
              frameSurfaces = closure_134_0(closure_134_2[8]).getFrameSurfaces(closure_134_4.getApplication(id));
              const hasItem = frameSurfaces.has(closure_134_0(closure_134_2[9]).EmbeddedSurfaceType.MAIN);
              let hasItem1 = !hasItem;
              if (!hasItem) {
                hasItem1 = frameSurfaces.has(closure_134_0(closure_134_2[9]).EmbeddedSurfaceType.APP_CHANNEL);
              }
              closure_133_11 = hasItem1;
              let tmp56 = null;
              if (null != closure_133_9) {
                const obj9 = { preferredChannelId: closure_133_9, fallback: closure_133_11 };
                c9 = 3;
                c10 = 1;
                const obj10 = { value: closure_134_1(closure_134_2[10])(id, obj9), done: false };
                return obj10;
              } else {
                closure_133_12 = tmp56;
                let tmp55 = null;
                if (null == closure_133_12) {
                  let session_id;
                  if (closure_133_8 != null) {
                    session_id = closure_133_8.session_id;
                  }
                  closure_2 = session_id;
                  if (session_id == null) {
                    closure_2 = closure_133_3;
                  }
                  c9 = 4;
                  c10 = 1;
                  const obj11 = {
                    value: (function getVoiceChannelAppChannelId() {
                                      const self = this;
                                      const apply = closure_1_13.apply;
                                      if (typeof apply === "unknown") {
                                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                      } else {
                                        applyArgumentsResult = apply(self, arguments);
                                      }
                                      return applyArgumentsResult;
                                    })(id, closure_133_1, closure_2),
                    done: false
                  };
                  return obj11;
                } else {
                  closure_133_13 = tmp55;
                  if (null == closure_133_12) {
                    if (null == closure_133_13) {
                      if (!frameSurfaces.has(closure_134_0(closure_134_2[9]).EmbeddedSurfaceType.MAIN)) {
                        if (closure_133_11) {
                          if (null == closure_133_9) {
                            c9 = 5;
                            c10 = 1;
                            const obj12 = { value: closure_134_1(closure_134_2[10])(id), done: false };
                            return obj12;
                          }
                        } else {
                          const intl2 = closure_134_0(closure_134_2[12]).intl;
                          closure_134_1(closure_134_2[11])(intl2.string(closure_134_0(closure_134_2[12]).t["7XR9+7"]));
                          closure_133_14();
                          c10 = 3;
                          return { value: false, done: true };
                        }
                      }
                    }
                  }
                  if (null != closure_133_13) {
                    const obj14 = { channelId: closure_133_13 };
                    c9 = 6;
                    c10 = 1;
                    const obj15 = { value: closure_134_1(closure_134_2[13])(obj14), done: false };
                    return obj15;
                  } else {
                    secret = null;
                    if (null != closure_133_3) {
                      c8 = 1;
                      const obj24 = closure_134_1(closure_134_2[15]);
                      if (null != closure_133_5) {
                        let tmp162 = closure_133_4;
                      } else {
                        let channelId = closure_133_13;
                        if (closure_133_13 == null) {
                          channelId = undefined;
                          if (closure_133_12 != null) {
                            channelId = closure_133_12.channelId;
                          }
                        }
                        closure_3 = channelId;
                        if (channelId == null) {
                          closure_3 = closure_133_4;
                        }
                        tmp162 = closure_3;
                      }
                      const joinSecret = obj24.getJoinSecret(tmp151, tmp152, tmp153, tmp162, closure_133_5);
                      c9 = 9;
                      c10 = 1;
                    } else {
                      if (null != closure_133_13) {
                        const obj17 = { frameId: closure_134_7(id, closure_134_0(closure_134_2[18]).voiceChannelAppSurface(closure_133_13)), launched: Promise.resolve() };
                        let tmp234Result = obj17;
                        const obj20 = closure_134_0(closure_134_2[18]);
                      } else {
                        const obj18 = { applicationId: id, channel: closure_133_12, invite: null };
                        let tmp124;
                        if (null != closure_133_4) {
                          if (null != closure_133_5) {
                            const obj19 = { channelId: closure_133_4, messageId: closure_133_5 };
                            tmp124 = obj19;
                          }
                        }
                        obj18.invite = tmp124;
                        tmp234Result = closure_134_1(closure_134_2[19])(obj18);
                        const tmp234 = closure_134_1(closure_134_2[19]);
                      }
                      closure_133_17 = tmp234Result;
                      frameId = closure_133_17.frameId;
                      launched = closure_133_17.launched;
                      if (null == secret) {
                        c10 = 3;
                        return { value: true, done: true };
                      } else {
                        const obj22 = { type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: id };
                        closure_134_1(closure_134_2[7]).dispatch(obj22);
                        c8 = 2;
                        c9 = 11;
                        c10 = 1;
                        const obj23 = { value: launched, done: false };
                        return obj23;
                      }
                    }
                  }
                }
              }
              const obj16 = closure_134_0(closure_134_2[8]);
            }
          }
        break;
        case 2:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else {
            if (arg0 === 2) {
              c10 = 3;
              const obj25 = { value, done: true };
              return obj25;
            }
            tmp57 = value;
          }
        break;
        case 3:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else {
            tmp56 = value;
            if (arg0 === 2) {
              c10 = 3;
              const obj26 = { value, done: true };
              return obj26;
            }
          }
        break;
        case 4:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else {
            tmp55 = value;
            if (arg0 === 2) {
              c10 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
          }
        break;
        case 5:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj28 = { value, done: true };
            return obj28;
          } else {
            closure_133_12 = value;
          }
        break;
        case 6:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj29 = { value, done: true };
            return obj29;
          } else if (value) {
            closure_134_1(closure_134_2[14])(closure_133_13);
          } else {
            closure_133_14();
            c10 = 3;
            return { value: false, done: true };
          }
        break;
        case 7:
          c8 = 0;
          closure_133_20 = applicationId;
          const tmp43 = new closure_134_1(closure_134_2[17])(closure_133_20);
          c9 = 8;
          c10 = 1;
          const obj30 = { value: closure_134_0(closure_134_2[16]).getActivityLaunchErrorInfo(tmp43, id), done: false };
          return obj30;
        case 8:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj31 = { value, done: true };
            return obj31;
          } else {
            closure_133_16 = value;
            if (closure_133_16.errorCode === closure_134_8.UNKNOWN_SESSION) {
              const intl = closure_134_0(closure_134_2[12]).intl;
              let message = intl.string(closure_134_0(closure_134_2[12]).t["7XR9+7"]);
            } else {
              message = closure_133_16.message;
            }
            closure_134_1(closure_134_2[11])(message);
            closure_133_14();
            c10 = 3;
            const tmp217 = closure_134_1(closure_134_2[11]);
          }
        break;
        case 9:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj32 = { value, done: true };
            return obj32;
          } else {
            secret = value.secret;
            c8 = 0;
          }
        break;
        case 10:
          c8 = 0;
          closure_133_14();
          c10 = 3;
          return { value: false, done: true };
        case 11:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj34 = { value, done: true };
            return obj34;
          } else {
            c9 = 12;
            c10 = 1;
            const obj35 = { value: closure_134_1(closure_134_2[20]).waitFrameSubscribed(frameId, closure_134_10.ACTIVITY_JOIN), done: false };
            return obj35;
          }
        break;
        default:
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj36 = { value, done: true };
            return obj36;
          } else {
            c8 = 0;
            const obj37 = { type: "ACTIVITY_JOIN", applicationId: id, parentApplicationId: null, frameId, secret, intent: closure_133_6, embedded: true };
            closure_134_1(closure_134_2[7]).dispatch(obj37);
            c10 = 3;
            return { value: true, done: true };
          }
      }
    } catch (tmp204) {
      applicationId = tmp204;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp204;
      } else if (tmp === tmp206) {
        c9 = tmp6;
      } else {
        c9 = tmp5;
      }
    }
  }
};
let closure_13 = async function _getVoiceChannelAppChannelId(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_6 = tmp5;
          closure_5 = tmp2;
          closure_133_0 = closure_0;
          closure_133_1 = undefined;
          voiceStateForSession = voiceStateForSession.getVoiceStateForSession(closure_1, closure_2);
          let channelId = voiceStateForSession;
          if (voiceStateForSession == null) {
            channelId = obj7.getVoiceStateForUser(closure_1);
          }
          channelId = undefined;
          if (channelId != null) {
            channelId = channelId.channelId;
          }
          if (null == channelId) {
            c8 = 3;
            return { value: null, done: true };
          } else {
            channel = channel.getChannel(channelId);
            closure_4 = channel;
            if (channel == null) {
              c7 = 1;
              c8 = 1;
              const obj5 = { value: ChannelActionCreatorsDefault.openChannel(channelId), done: false };
              return obj5;
            }
          }
          obj7 = voiceStateForSession;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_4 = value;
      }
      closure_133_1 = closure_4;
      let type;
      if (closure_133_1 != null) {
        type = closure_133_1.type;
      }
      let id = null;
      if (type === closure_134_9.GUILD_VOICE) {
        id = null;
        if (closure_133_1.application_id === closure_133_0) {
          id = closure_133_1.id;
        }
      }
      c8 = 3;
      const obj6 = { value: id, done: true };
      return obj6;
    } catch (tmp21) {
      c8 = tmp;
      throw tmp21;
    }
  }
};
let closure_14 = async function _getActivityChannelId() {
  await UserActivityActionCreators.getMetadata(closure_0, closure_1);
  await "HermesInternal";
  closure_130_0 = value;
  if (closure_130_0 != null) {
    const channel_id = closure_130_0.channel_id;
  }
  if (typeof channel_id === "string") {
    const channel_id1 = closure_130_0.channel_id;
  }
  return channel_id1;
};
const makeFrameId = fn(6957).makeFrameId;
const Constants = fn(1072);
({ AbortCodes: closure_8, ChannelTypes: closure_9, RPCEvents: closure_10 } = Constants);
const ActivityIntent = fn(12616).ActivityIntent;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/joinFrameActivity.tsx");

export default function joinFrameActivity() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
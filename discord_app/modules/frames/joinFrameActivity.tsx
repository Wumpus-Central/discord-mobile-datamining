// === Module 12641: joinFrameActivity ===

// Module 12641 (joinFrameActivity)
import ConjureActionCreators from "ConjureActionCreators" /* 10690 */;
import UserActivityActionCreators from "UserActivityActionCreators" /* 11292 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PermissionStore from "PermissionStore" /* 4901 */;

require = fn;
let closure_11 = async function _joinFrameActivity(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          ({ application: closure_131_0, userId: closure_131_1, activity: closure_131_2, sessionId: closure_131_3, channelId: closure_131_4, messageId: closure_131_5, intent } = closure_0);
          if (intent === undefined) {
            intent = constants.PLAY;
          }
          closure_131_6 = intent;
          let id;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          closure_131_10 = undefined;
          let secret;
          closure_131_13 = undefined;
          closure_131_14 = undefined;
          let frameId;
          let launched;
          closure_131_11 = function fail() {
            obj7(channelId[5]).dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId });
            return false;
          };
          c7 = 1;
          c8 = 1;
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp10) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            id = closure_131_0.id;
            if (null != closure_131_3) {
              const obj6 = { type: "ACTIVITY_JOIN_LOADING", applicationId: id };
              closure_132_1(closure_132_2[5]).dispatch(obj6);
              const obj13 = closure_132_1(closure_132_2[5]);
            }
            let obj7 = closure_131_2;
            if (closure_131_2 == null) {
              let tmp67 = null;
              if (null != closure_131_3) {
                obj7 = { application_id: id, session_id: closure_131_3 };
                tmp67 = obj7;
              }
              obj7 = tmp67;
            }
            closure_131_8 = obj7;
            if (null != closure_131_8) {
              if (obj16.shouldOpenAppChannel(id)) {
                c7 = 2;
                c8 = 1;
                const obj8 = {
                  value: (function getActivityChannelId() {
                                  const self = this;
                                  const apply = closure_1_12.apply;
                                  if (typeof apply === "unknown") {
                                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                  } else {
                                    applyArgumentsResult = apply(self, arguments);
                                  }
                                  return applyArgumentsResult;
                                })(closure_131_8, closure_131_1),
                  done: false
                };
                return obj8;
              }
              obj16 = closure_132_0(closure_132_2[6]);
            }
          }
        } else {
          if (2 === tmp10) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else {
              if (arg0 === 2) {
                c8 = 3;
                const obj10 = { value, done: true };
                return obj10;
              }
              const tmp56 = value;
            }
          } else {
            if (3 === tmp10) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else {
                let tmp55 = value;
                if (arg0 === 2) {
                  c8 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                }
              }
            } else if (4 === tmp10) {
              c6 = 0;
              closure_131_17 = closure_5;
              const tmp52 = new closure_132_1(closure_132_2[9])(closure_131_17);
              c7 = 5;
              c8 = 1;
              const obj12 = { value: closure_132_0(closure_132_2[8]).getActivityLaunchErrorInfo(tmp52, id), done: false };
              return obj12;
            } else if (5 === tmp10) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_131_13 = value;
                if (closure_131_13.errorCode === closure_132_6.UNKNOWN_SESSION) {
                  const intl = closure_132_0(closure_132_2[11]).intl;
                  let message = intl.string(closure_132_0(closure_132_2[11]).t["7XR9+7"]);
                } else {
                  message = closure_131_13.message;
                }
                closure_132_1(closure_132_2[10])(message);
                closure_131_11();
                c8 = 3;
                const tmp135 = closure_132_1(closure_132_2[10]);
              }
            } else if (6 === tmp10) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                secret = value.secret;
                c6 = 0;
              }
            } else if (7 === tmp10) {
              c6 = 0;
              closure_131_11();
              c8 = 3;
              return { value: false, done: true };
            } else if (8 === tmp10) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                c7 = 9;
                c8 = 1;
                const obj19 = { value: closure_132_1(closure_132_2[12]).waitFrameSubscribed(frameId, closure_132_9.ACTIVITY_JOIN), done: false };
                return obj19;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              c6 = 0;
              const obj22 = { type: "ACTIVITY_JOIN", applicationId: id, parentApplicationId: null, frameId, secret, intent: closure_131_6, embedded: true };
              closure_132_1(closure_132_2[5]).dispatch(obj22);
              c8 = 3;
              return { value: true, done: true };
            }
            const obj23 = { applicationId: id, channel: closure_131_10 };
            closure_131_14 = closure_132_1(closure_132_2[6])(obj23);
            frameId = closure_131_14.frameId;
            launched = closure_131_14.launched;
            if (null == secret) {
              c8 = 3;
              return { value: true, done: true };
            } else {
              const obj24 = { type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: id };
              closure_132_1(closure_132_2[5]).dispatch(obj24);
              c6 = 2;
              c7 = 8;
              c8 = 1;
              const obj25 = { value: launched, done: false };
              return obj25;
            }
          }
          closure_131_10 = tmp55;
          secret = null;
          if (null != closure_131_3) {
            c6 = 1;
            const obj21 = closure_132_1(closure_132_2[7]);
            let channelId = closure_131_4;
            if (closure_131_4 == null) {
              channelId = undefined;
              if (closure_131_10 != null) {
                channelId = closure_131_10.channelId;
              }
            }
            c7 = 6;
            c8 = 1;
            const obj26 = { value: obj21.getJoinSecret(closure_131_1, closure_131_3, id, channelId, closure_131_5), done: false };
            return obj26;
          }
        }
        closure_131_9 = tmp56;
        tmp55 = null;
        if (null != closure_131_9) {
          c7 = 3;
          c8 = 1;
          const obj27 = {
            value: (function getAppChannel() {
                      const self = this;
                      const apply = closure_1_13.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(id, closure_131_9),
            done: false
          };
          return obj27;
        }
      }
    } catch (tmp123) {
      closure_5 = tmp123;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp123;
      } else if (tmp === tmp125) {
        c7 = tmp6;
      } else {
        c7 = tmp5;
      }
    }
  }
};
let closure_12 = async function _getActivityChannelId() {
  closure_2 = tmp2;
  const metadata = UserActivityActionCreators.getMetadata(closure_0, closure_1);
  await metadata.catch(() => null);
  closure_130_0 = value;
  if (closure_130_0 != null) {
    const channel_id = closure_130_0.channel_id;
  }
  if (typeof channel_id === "string") {
    const channel_id1 = closure_130_0.channel_id;
  }
  return channel_id1;
};
let closure_13 = async function _getAppChannel() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  channel = channel.getChannel(closure_1);
  if (null != channel) {
    let tmp13 = null;
    if (channel.type === constants.GUILD_APP) {
      tmp13 = null;
      if (channel.application_id === closure_0) {
        tmp13 = null;
        if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
          ({ guild_id: obj4.guildId, id: obj4.channelId } = channel);
          tmp13 = { guildId: null, channelId: null };
        }
      }
    }
    return tmp13;
  }
  await ConjureActionCreators.fetchApplicationChannels(closure_0);
  closure_130_1 = value.find((channel_id) => channel_id.channel_id === closure_1_0);
  let tmp8 = null;
  if (null != closure_130_1) {
    tmp8 = { guildId: closure_130_1.guild_id, channelId: closure_130_1.channel_id };
  }
  return tmp8;
};
const Constants = fn(1087);
({ AbortCodes: metroRequire, ChannelTypes: closure_7, Permissions: closure_8, RPCEvents: closure_9 } = Constants);
const ActivityIntent = fn(2026).ActivityIntent;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/joinFrameActivity.tsx");

export default function joinFrameActivity() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
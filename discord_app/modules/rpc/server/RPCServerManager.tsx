// === Module 14045: loadServer ===

// Module 14045 (loadServer)
import set2 from "set" /* 500 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "map" /* 9403 */;
import closure_5 from "initializeState" /* 7395 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "trackCommunicationDisabled" /* 1993 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "_detectH265HardwareDecode" /* 4497 */;
import closure_10 from "sortActivity" /* 4535 */;
import closure_11 from "createRTCConnection" /* 4520 */;
import closure_12 from "markAllUserIdListsStale" /* 4099 */;
import closure_13 from "handleConnectionOpen" /* 1982 */;
import closure_14 from "mergeGuildAvatar" /* 1923 */;
import closure_15 from "updateVoiceState" /* 4465 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4348 */;
import ME from "ME" /* 676 */;
import { ActivityLayoutMode } from "items3" /* 4474 */;
import { FrameLayoutModes } from "FrameLayoutModes" /* 9404 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4510 */;

require = arg1;
({ ActivityActionTypes: closure_17, RelationshipTypes: closure_18, AnalyticEvents: closure_19, RPCEvents: closure_20, RPCCloseCodes: closure_21 } = ME);
let result = require("set").fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");
class RPCServerManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleMessage = function handleMessage(type) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        if ("MESSAGE_CREATE" === type.type) {
          const result = obj.handleActivityMessage(type);
        }
        type = type.type;
        if ("MESSAGE_CREATE" === type) {
          if ("SENDING" !== type.message.state) {
            const MESSAGE_CREATE = closure_1_20.MESSAGE_CREATE;
            ({ channelId, message } = type);
            const _HermesInternal2 = HermesInternal;
            let combined = "" + MESSAGE_CREATE + type.message.id;
            let MESSAGE_UPDATE = MESSAGE_CREATE;
          }
        } else if ("MESSAGE_UPDATE" === type) {
          MESSAGE_UPDATE = closure_1_20.MESSAGE_UPDATE;
          channelId = type.message.channel_id;
          message = type.message;
          combined = null;
        } else if ("MESSAGE_DELETE" === type) {
          const MESSAGE_DELETE = closure_1_20.MESSAGE_DELETE;
          channelId = type.channelId;
          message = { id: null };
          message[0] = type.id;
          const _HermesInternal = HermesInternal;
          combined = "" + MESSAGE_DELETE + type.id;
          MESSAGE_UPDATE = MESSAGE_DELETE;
        } else {
          return obj(closure_1_2[23]).assertNever(type);
        }
        if (null != channelId) {
          const rpcServer = obj.rpcServer;
          obj = { channel_id: null };
          obj[0] = channelId;
          obj = { channel_id: null, message: null };
          obj[0] = channelId;
          obj[1] = obj(closure_1_2[24]).transformInternalTextMessage(message);
          const result1 = rpcServer.dispatchToSubscriptions(MESSAGE_UPDATE, obj, obj, combined);
          const obj5 = obj(closure_1_2[24]);
        }
      }
    };
    obj.handleSpeaking = function handleSpeaking(speakingFlags) {
      let result1 = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        let userId = speakingFlags;
        if (0 !== speakingFlags.speakingFlags) {
          let SPEAKING_STOP = closure_1_20.SPEAKING_START;
        } else {
          SPEAKING_STOP = closure_1_20.SPEAKING_STOP;
        }
        if (userId.context === closure_1_24.DEFAULT) {
          const voiceChannelId = closure_1_13.getVoiceChannelId();
          if (null != voiceChannelId) {
            const channel = closure_1_6.getChannel(voiceChannelId);
            if (null != channel) {
              const voiceState = closure_1_15.getVoiceState(channel.getGuildId(), userId.userId);
              if (null != voiceState) {
                const rpcServer2 = result1.rpcServer;
                obj = { channel_id: null };
                obj[0] = voiceState.channelId;
                obj = { channel_id: null, user_id: null };
                obj[0] = voiceState.channelId;
                obj[1] = userId.userId;
                const result = rpcServer2.dispatchToSubscriptions(SPEAKING_STOP, obj, obj);
                let activeSessionIdForChannel = null;
                if (null != voiceState.channelId) {
                  obj = closure_1_1(closure_1_2[21]);
                  activeSessionIdForChannel = obj.getActiveSessionIdForChannel(voiceState.channelId);
                }
                if (null != activeSessionIdForChannel) {
                  if (0 !== userId.speakingFlags) {
                    let VOICE_SESSION_SPEAKING_STOP = closure_1_20.VOICE_SESSION_SPEAKING_START;
                  } else {
                    VOICE_SESSION_SPEAKING_STOP = closure_1_20.VOICE_SESSION_SPEAKING_STOP;
                  }
                  const rpcServer = result1.rpcServer;
                  obj1 = { session_id: null };
                  obj1[0] = activeSessionIdForChannel;
                  const obj2 = { session_id: null, user_id: null };
                  obj2[0] = activeSessionIdForChannel;
                  userId = userId.userId;
                  obj2[1] = userId;
                  result1 = rpcServer.dispatchToSubscriptions(VOICE_SESSION_SPEAKING_STOP, obj1, obj2);
                }
              }
            }
          }
        }
      }
    };
    obj.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
      channelId = channelId.channelId;
      obj = closure_1_1(closure_1_2[21]);
      obj.releaseUnlessChannel(channelId);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: null, guild_id: null };
        obj[0] = channelId;
        obj[1] = channelId.guildId;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.VOICE_CHANNEL_SELECT, {}, obj);
      }
    };
    obj.handleNotificationCreate = function handleNotificationCreate(icon) {
      icon = icon.icon;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: null, message: null, icon_url: null, title: null, body: null };
        obj[0] = tmp;
        obj[1] = obj(closure_1_2[24]).transformInternalTextMessage(tmp2);
        let remoteIconURL = null;
        if (null != icon) {
          remoteIconURL = tmp8(tmp9[24]).getRemoteIconURL(icon);
          const tmp8Result = tmp8(tmp9[24]);
        }
        obj[2] = remoteIconURL;
        obj[3] = tmp3;
        obj[4] = tmp4;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.NOTIFICATION_CREATE, {}, obj);
        const obj3 = obj(closure_1_2[24]);
        tmp8 = obj;
        tmp9 = closure_1_2;
      }
    };
    obj.handleActivityJoin = function handleActivityJoin(applicationId) {
      applicationId = applicationId.applicationId;
      const parentApplicationId = applicationId.parentApplicationId;
      if (0 !== applicationId.rpcServer.subscriptions.length) {
        obj = { application_id: null, secret: null };
        obj[0] = applicationId;
        obj[1] = tmp;
        if (tmp3) {
          obj.intent = tmp2;
        }
        const rpcServer = tmp4.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ACTIVITY_JOIN, (socket) => {
          let tmp = socket.socket.application.id === applicationId;
          if (!tmp) {
            tmp = null != parentApplicationId && socket.socket.application.parentId === tmp2;
            const tmp4 = null != parentApplicationId && socket.socket.application.parentId === tmp2;
          }
          return tmp;
        }, obj);
        const rpcServer2 = tmp4.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(closure_1_20.GAME_JOIN, (socket) => socket.socket.application.id === applicationId, obj);
      }
    };
    obj.handleActivityLayoutModeUpdate = function handleActivityLayoutModeUpdate(arg0) {
      ({ applicationId: obj, layoutMode } = arg0);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = tmp.rpcServer;
        obj = { is_pip_mode: null };
        obj[0] = layoutMode !== closure_1_22.FOCUSED;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
        obj = { layout_mode: null };
        obj[0] = layoutMode;
        const rpcServer2 = tmp.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(closure_1_20.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
        const rpcServer3 = tmp.rpcServer;
        const result2 = rpcServer3.dispatchToSubscriptions(closure_1_20.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
      }
    };
    obj.handleFrameUpdateLayoutMode = function handleFrameUpdateLayoutMode(frameId) {
      frameId = frameId.frameId;
      let dispatchToSubscriptions = frameId;
      if (0 !== frameId.rpcServer.subscriptions.length) {
        if (tmp === closure_1_23.PIP) {
          let FOCUSED = closure_1_22.PIP;
          let tmp2 = closure_1_22;
        } else {
          tmp2 = closure_1_22;
          FOCUSED = closure_1_22.FOCUSED;
        }
        function targetsFrame(socket) {
          let tmp = socket.socket.source.type === closure_1_16.POST_MESSAGE;
          if (tmp) {
            const frameByIframeId = closure_1_4.getFrameByIframeId(socket.socket.source.iframeId);
            let id;
            if (frameByIframeId != null) {
              id = frameByIframeId.id;
            }
            tmp = id === frameId;
          }
          return tmp;
        }
        const rpcServer = dispatchToSubscriptions.rpcServer;
        obj = { is_pip_mode: null };
        obj[0] = FOCUSED !== tmp2.FOCUSED;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ACTIVITY_PIP_MODE_UPDATE, targetsFrame, obj);
        obj = { layout_mode: null };
        obj[0] = FOCUSED;
        const rpcServer2 = dispatchToSubscriptions.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(closure_1_20.ACTIVITY_LAYOUT_MODE_UPDATE, targetsFrame, obj);
        const rpcServer3 = dispatchToSubscriptions.rpcServer;
        dispatchToSubscriptions = rpcServer3.dispatchToSubscriptions;
        const result2 = dispatchToSubscriptions(closure_1_20.FRAME_LAYOUT_MODE_UPDATE, targetsFrame, obj);
      }
    };
    obj.handleThermalStateChange = function handleThermalStateChange(applicationId) {
      applicationId = applicationId.applicationId;
      if (0 !== applicationId.rpcServer.subscriptions.length) {
        if (null != applicationId) {
          obj = { thermal_state: null };
          obj[0] = obj(closure_1_2[25]).getThermalState();
          const rpcServer = tmp.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.THERMAL_STATE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          const obj2 = obj(closure_1_2[25]);
        }
      }
    };
    obj.handleScreenOrientationUpdate = function handleScreenOrientationUpdate(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { screen_orientation: null };
        obj[0] = tmp;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ORIENTATION_UPDATE, {}, obj);
      }
    };
    obj.handleEmbeddedActivityUpdate = function handleEmbeddedActivityUpdate() {
      if (0 !== obj.rpcServer.subscriptions.length) {
        obj = obj(closure_1_2[26]);
        const rpcServer = tmp.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, obj.activityInstanceConnectedParticipants());
      }
    };
    obj.handleActivityMessage = function handleActivityMessage(type) {
      ({ channelId, message } = type);
      let application_id;
      if (0 !== application_id.rpcServer.subscriptions.length) {
        ({ application, activity } = message);
        if (null != application) {
          if (null != activity) {
            if (null != activity.party_id) {
              const author = message.author;
              let id;
              if (author != null) {
                id = author.id;
              }
              const user = closure_1_14.getUser(id);
              if (null != user) {
                const currentUser = obj2.getCurrentUser();
                if (null != currentUser) {
                  if (user.id !== currentUser.id) {
                    if (activity.type === closure_1_17.JOIN_REQUEST) {
                      let applicationActivity = closure_1_10.getApplicationActivity(currentUser.id, application.id);
                    } else {
                      applicationActivity = closure_1_10.getApplicationActivity(user.id, application.id);
                    }
                    if (null != applicationActivity) {
                      if (null != applicationActivity.party) {
                        if (applicationActivity.party.id === activity.party_id) {
                          application_id = applicationActivity.application_id;
                          type = activity.type;
                          if (tmp13.JOIN === type) {
                            const rpcServer = tmp.rpcServer;
                            obj = { user: null, activity: null, type: null, channel_id: null, message_id: null };
                            obj[0] = closure_1_1(closure_1_2[27])(user);
                            obj[1] = applicationActivity;
                            obj[2] = activity.type;
                            obj[3] = channelId;
                            obj[4] = message.id;
                            const result = rpcServer.dispatchToSubscriptions(closure_1_20.ACTIVITY_INVITE, (socket) => socket.socket.application.id === application_id, obj);
                          } else if (tmp13.JOIN_REQUEST === type) {
                            const rpcServer2 = tmp.rpcServer;
                            obj = { user: null, activity: null, type: null, channel_id: null, message_id: null };
                            obj[0] = closure_1_1(closure_1_2[27])(user);
                            obj[1] = applicationActivity;
                            obj[2] = activity.type;
                            obj[3] = channelId;
                            obj[4] = message.id;
                            const result1 = rpcServer2.dispatchToSubscriptions(closure_1_20.ACTIVITY_JOIN_REQUEST, (socket) => socket.socket.application.id === application_id, obj);
                          }
                        }
                      }
                    }
                  }
                }
              }
              obj2 = closure_1_14;
            }
          }
        }
      }
    };
    obj.handleOAuth2TokenRevoke = function handleOAuth2TokenRevoke(accessToken) {
      accessToken = accessToken.accessToken;
      const sockets = accessToken.rpcServer.sockets;
      const item = sockets.forEach((authorization) => {
        if (authorization.authorization.accessToken === accessToken) {
          authorization.close(closure_1_21.TOKEN_REVOKED, "Token revoked");
        }
      });
    };
    obj.handleGuildCreate = function handleGuildCreate(guild) {
      const id = guild.guild.id;
      guild = closure_1_8.getGuild(id);
      let tmp3 = 0 !== obj.rpcServer.subscriptions.length;
      if (tmp3) {
        tmp3 = null != guild;
      }
      if (tmp3) {
        const rpcServer = obj.rpcServer;
        obj = { id: null, name: null };
        obj[0] = id;
        obj[1] = guild.name;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.GUILD_CREATE, {}, obj);
      }
    };
    obj.handleChannelCreate = function handleChannelCreate(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { id: null, name: null, type: null };
        obj[0] = tmp;
        obj[1] = tmp2;
        obj[2] = tmp3;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.CHANNEL_CREATE, {}, obj);
      }
    };
    obj.handleLogout = function handleLogout() {
      obj = closure_1_1(closure_1_2[21]);
      obj.release();
      const sockets = obj.rpcServer.sockets;
      const item = sockets.forEach((close) => close.close(constants.CLOSE_NORMAL, "User logout"));
    };
    obj.handleRelationshipAdd = function handleRelationshipAdd(arg0) {
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = closure_1_14.getUser(tmp);
        if (null != user) {
          obj = obj(closure_1_2[24]);
          obj = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[24]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handleRelationshipUpdate = function handleRelationshipUpdate(arg0) {
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = closure_1_14.getUser(tmp);
        if (null != user) {
          obj = obj(closure_1_2[24]);
          obj = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[24]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handleRelationshipRemove = function handleRelationshipRemove(arg0) {
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = closure_1_14.getUser(tmp);
        if (null != user) {
          obj = obj(closure_1_2[24]);
          obj = obj.transformBaseRelationship(closure_1_18.NONE, user);
          const rpcServer = tmp2.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[24]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handlePresenceUpdates = function handlePresenceUpdates(updates) {
      updates = updates.updates;
      let item10023;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const _Set = Set;
        const set = new Set(updates.map((user) => user.user.id));
        function _loop() {
          const relationshipType = closure_1_12.getRelationshipType(item10023);
          if (relationshipType === closure_1_18.NONE) {
            return 0;
          } else {
            const user = closure_1_14.getUser(tmp);
            if (null == user) {
              return 0;
            } else {
              lib = lib(closure_1_2[24]).transformBaseRelationship(relationshipType, user);
              const rpcServer = lib.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[24]).transformApplicationRelationship(callback, socket.socket.application.id));
            }
          }
          tmp = item10023;
        }
        const values = set.values();
        for (const item10023 of values) {
          let _loopResult = _loop();
          continue;
        }
      }
    };
    obj.handlePresencesReplace = function handlePresencesReplace() {
      if (0 !== obj.rpcServer.subscriptions.length) {
        function _loop2() {
          if (closure_2 === closure_1_18.NONE) {
            return 0;
          } else {
            const user = closure_1_14.getUser(closure_1);
            if (null == user) {
              return 0;
            } else {
              lib = lib(closure_1_2[24]).transformBaseRelationship(tmp, user);
              const rpcServer = lib.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[24]).transformApplicationRelationship(callback, socket.socket.application.id));
            }
          }
        }
        const mutableRelationships = closure_1_12.getMutableRelationships();
        const entries = mutableRelationships.entries();
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp8 = closure_1_3;
          let tmp9 = closure_1_3(tmp6, 2);
          [closure_1, closure_2] = tmp9;
          let _loop2Result = _loop2();
          continue;
        }
      }
    };
    obj.handleUserUpdate = function handleUserUpdate(user) {
      const id = user.user.id;
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const relationshipType = closure_1_12.getRelationshipType(id);
        if (relationshipType !== closure_1_18.NONE) {
          user = closure_1_14.getUser(id);
          if (null != user) {
            obj = obj(closure_1_2[24]);
            obj = obj.transformBaseRelationship(relationshipType, user);
            const rpcServer = tmp.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[24]).transformApplicationRelationship(callback, socket.socket.application.id));
          }
        }
      }
    };
    obj.handleEntitlementCreate = function handleEntitlementCreate(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== entitlement.rpcServer.subscriptions.length) {
        const rpcServer = entitlement.rpcServer;
        obj = { entitlement: null };
        obj[0] = entitlement;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ENTITLEMENT_CREATE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
      }
    };
    obj.handleEntitlementDelete = function handleEntitlementDelete(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== entitlement.rpcServer.subscriptions.length) {
        const rpcServer = entitlement.rpcServer;
        obj = { entitlement: null };
        obj[0] = entitlement;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.ENTITLEMENT_DELETE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
      }
    };
    obj.handleQuestEnrollSuccess = function handleQuestEnrollSuccess(enrolledQuestUserStatus) {
      enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
      let questId;
      let activityApplicationId;
      if (0 !== questId.rpcServer.subscriptions.length) {
        questId = enrolledQuestUserStatus.questId;
        const quest = closure_1_5.getQuest(questId);
        if (null != quest) {
          obj = obj(closure_1_2[28]);
          activityApplicationId = obj.getActivityApplicationId(quest);
          if (null != activityApplicationId) {
            const rpcServer = tmp.rpcServer;
            obj = { quest_id: null, is_enrolled: null, enrolled_at: null };
            obj[0] = questId;
            obj[1] = null != enrolledQuestUserStatus.enrolledAt;
            obj[2] = enrolledQuestUserStatus.enrolledAt;
            const result = rpcServer.dispatchToSubscriptions(closure_1_20.QUEST_ENROLLMENT_STATUS_UPDATE, (socket) => {
              let tmp = socket.socket.application.id === activityApplicationId;
              if (tmp) {
                const args = socket.args;
                let quest_id;
                if (args != null) {
                  quest_id = args.quest_id;
                }
                tmp = quest_id === questId;
              }
              return tmp;
            }, obj);
          }
        }
      }
    };
    ({ server: tmp.rpcServer, transports: tmp.transports, commands: tmp.rpcCommandHandlers, events: tmp.rpcEventHandlers, stores: tmp.stores, registerTransportsForEmbeddedPlatform: tmp.registerTransportsForEmbeddedPlatform } = global);
    return obj;
  }
}
const prototype = RPCServerManager.prototype;
prototype["loadServer"] = function loadServer() {
  const self = this;
  if (set2.isPlatformEmbedded) {
    const result = self.registerTransportsForEmbeddedPlatform();
  }
  for (const item10013 of tmp2) {
    let rpcServer = self.rpcServer;
    let registerTransportResult = rpcServer.registerTransport(item10013);
    continue;
  }
  const entries = Object.entries(self.rpcCommandHandlers);
  while (tmp5 !== undefined) {
    let tmp7 = callback;
    let tmp8 = callback(tmp6, 2);
    let rpcServer2 = self.rpcServer;
    let setCommandHandlerResult = rpcServer2.setCommandHandler(tmp8[0], tmp8[1]);
    continue;
  }
  const entries1 = Object.entries(self.rpcEventHandlers);
  for (const item10045 of entries1) {
    let tmp11 = callback;
    let tmp12 = callback(item10045, 2);
    let rpcServer3 = self.rpcServer;
    let setEventHandlerResult = rpcServer3.setEventHandler(tmp12[0], tmp12[1]);
    continue;
  }
};
prototype["init"] = function init() {
  const self = this;
  this.rpcServer.getCurrentUser = () => currentUser.getCurrentUser();
  this.rpcServer.onConnect = (app_id) => {
    let obj = callback(709);
    obj = { type: "RPC_APP_CONNECTED", socketId: app_id.id, application: app_id.application, source: app_id.source };
    obj.dispatch(obj);
    obj = { app_id: app_id.application.id, transport: app_id.transport };
    callback(698).track(constants.AUTHORIZED_APP_CONNECTED, obj);
  };
  this.rpcServer.onDisconnect = (id, reason) => {
    let obj = callback(14046);
    obj.releaseSocket(id.id);
    obj = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, source: id.source, reason };
    callback(709).dispatch(obj);
  };
  const items = [closure_6, closure_7, closure_10, closure_15, closure_9, closure_11];
  const batchedStoreListener = new self(589).BatchedStoreListener(items.concat(this.stores), () => {
    const result = closure_1_1(closure_1_2[21]).reconcileParticipants();
    const rpcServer = self.rpcServer;
    rpcServer.updateSubscriptions();
  });
  batchedStoreListener.attach("RPCServerManager");
  const subscription = dispatcherDefault.subscribe("MESSAGE_CREATE", this.handleMessage);
  const obj2 = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("MESSAGE_UPDATE", this.handleMessage);
  const obj3 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessage);
  const obj4 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("SPEAKING", this.handleSpeaking);
  const obj5 = dispatcherDefault;
  const subscription4 = dispatcherDefault.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  const obj6 = dispatcherDefault;
  const subscription5 = dispatcherDefault.subscribe("GUILD_CREATE", this.handleGuildCreate);
  const obj7 = dispatcherDefault;
  const subscription6 = dispatcherDefault.subscribe("CHANNEL_CREATE", this.handleChannelCreate);
  const obj8 = dispatcherDefault;
  const subscription7 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const obj9 = dispatcherDefault;
  const subscription8 = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj10 = dispatcherDefault;
  const subscription9 = dispatcherDefault.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  const obj11 = dispatcherDefault;
  const subscription10 = dispatcherDefault.subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  const obj12 = dispatcherDefault;
  const subscription11 = dispatcherDefault.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  const obj13 = dispatcherDefault;
  const subscription12 = dispatcherDefault.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  const obj14 = dispatcherDefault;
  const subscription13 = dispatcherDefault.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  const obj15 = dispatcherDefault;
  const subscription14 = dispatcherDefault.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  const obj16 = dispatcherDefault;
  const subscription15 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  const obj17 = dispatcherDefault;
  const subscription16 = dispatcherDefault.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  const obj18 = dispatcherDefault;
  const subscription17 = dispatcherDefault.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  const obj19 = dispatcherDefault;
  const subscription18 = dispatcherDefault.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  const obj20 = dispatcherDefault;
  const subscription19 = dispatcherDefault.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  const obj21 = dispatcherDefault;
  const subscription20 = dispatcherDefault.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  const obj22 = dispatcherDefault;
  const subscription21 = dispatcherDefault.subscribe("USER_UPDATE", this.handleUserUpdate);
  const obj23 = dispatcherDefault;
  const subscription22 = dispatcherDefault.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  const obj24 = dispatcherDefault;
  const subscription23 = dispatcherDefault.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  const obj25 = dispatcherDefault;
  const subscription24 = dispatcherDefault.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};
prototype["terminate"] = function terminate() {
  dispatcherDefault.unsubscribe("MESSAGE_CREATE", this.handleMessage);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("MESSAGE_UPDATE", this.handleMessage);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessage);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("SPEAKING", this.handleSpeaking);
  const obj4 = dispatcherDefault;
  dispatcherDefault.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  const obj5 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
  const obj6 = dispatcherDefault;
  dispatcherDefault.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
  const obj7 = dispatcherDefault;
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  const obj8 = dispatcherDefault;
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj9 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  const obj10 = dispatcherDefault;
  dispatcherDefault.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  const obj11 = dispatcherDefault;
  dispatcherDefault.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  const obj12 = dispatcherDefault;
  dispatcherDefault.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  const obj13 = dispatcherDefault;
  dispatcherDefault.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  const obj14 = dispatcherDefault;
  dispatcherDefault.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  const obj15 = dispatcherDefault;
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  const obj16 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  const obj17 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  const obj18 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  const obj19 = dispatcherDefault;
  dispatcherDefault.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  const obj20 = dispatcherDefault;
  dispatcherDefault.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  const obj21 = dispatcherDefault;
  dispatcherDefault.unsubscribe("USER_UPDATE", this.handleUserUpdate);
  const obj22 = dispatcherDefault;
  dispatcherDefault.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  const obj23 = dispatcherDefault;
  dispatcherDefault.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  const obj24 = dispatcherDefault;
  dispatcherDefault.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};

export default RPCServerManager;
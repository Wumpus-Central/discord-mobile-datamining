// discord_app/modules/rpc/server/RPCServerManager.tsx
import obj132 from "../../../utils/PlatformUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import transformUserDefault from "../helpers/transformUser.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import map from "../../frames/FramesStore.tsx";
import initializeState from "../../quests/QuestStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import sortActivity from "../../../stores/PresenceStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";
import { TransportTypes } from "../Constants.tsx";
import ME from "../../../Constants.tsx";
import { ActivityLayoutMode } from "../../activities/Constants.tsx";
import { FrameLayoutModes } from "../../frames/FramesConstants.tsx";
import { MediaEngineContextTypes } from "../../../../discord_common/js/packages/media-engine/Constants.tsx";

require = fn;
({ ActivityActionTypes: closure_17, RelationshipTypes: closure_18, AnalyticEvents: closure_19, RPCEvents: closure_20, RPCCloseCodes: closure_21 } = ME);
let result = require("obj132").fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");
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
          return obj(dependencyMap[22]).assertNever(type);
        }
        if (null != channelId) {
          const rpcServer = obj.rpcServer;
          obj = { channel_id: null };
          obj[0] = channelId;
          obj = { channel_id: null, message: null };
          obj[0] = channelId;
          obj[1] = obj(dependencyMap[23]).transformInternalTextMessage(message);
          const result1 = rpcServer.dispatchToSubscriptions(MESSAGE_UPDATE, obj, obj, combined);
          const obj5 = obj(dependencyMap[23]);
        }
      }
    };
    obj.handleSpeaking = function handleSpeaking(speakingFlags) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        if (0 !== speakingFlags.speakingFlags) {
          let SPEAKING_STOP = closure_1_20.SPEAKING_START;
        } else {
          SPEAKING_STOP = closure_1_20.SPEAKING_STOP;
        }
        if (speakingFlags.context === MediaEngineContextTypes.DEFAULT) {
          const voiceChannelId = closure_1_13.getVoiceChannelId();
          if (null != voiceChannelId) {
            const channel = closure_1_6.getChannel(voiceChannelId);
            if (null != channel) {
              const voiceState = closure_1_15.getVoiceState(channel.getGuildId(), speakingFlags.userId);
              if (null != voiceState) {
                const rpcServer = tmp.rpcServer;
                obj = { channel_id: null };
                obj[0] = voiceState.channelId;
                obj = { channel_id: null, user_id: null };
                obj[0] = voiceState.channelId;
                obj[1] = speakingFlags.userId;
                const result = rpcServer.dispatchToSubscriptions(SPEAKING_STOP, obj, obj);
              }
            }
          }
        }
      }
    };
    obj.handleVoiceChannelSelect = function handleVoiceChannelSelect(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: null, guild_id: null };
        obj[0] = tmp2;
        obj[1] = tmp;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.VOICE_CHANNEL_SELECT, {}, obj);
      }
    };
    obj.handleNotificationCreate = function handleNotificationCreate(icon) {
      icon = icon.icon;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: null, message: null, icon_url: null, title: null, body: null };
        obj[0] = tmp;
        obj[1] = obj(dependencyMap[23]).transformInternalTextMessage(tmp2);
        let remoteIconURL = null;
        if (null != icon) {
          remoteIconURL = tmp8(dependencyMap[23]).getRemoteIconURL(icon);
          const tmp8Result = tmp8(dependencyMap[23]);
        }
        obj[2] = remoteIconURL;
        obj[3] = tmp3;
        obj[4] = tmp4;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.NOTIFICATION_CREATE, {}, obj);
        const obj3 = obj(dependencyMap[23]);
        tmp8 = obj;
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
        obj[0] = layoutMode !== ActivityLayoutMode.FOCUSED;
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
        if (tmp === FrameLayoutModes.PIP) {
          let FOCUSED = ActivityLayoutMode.PIP;
          let tmp2 = ActivityLayoutMode;
        } else {
          tmp2 = ActivityLayoutMode;
          FOCUSED = ActivityLayoutMode.FOCUSED;
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
          obj[0] = obj(dependencyMap[24]).getThermalState();
          const rpcServer = tmp.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.THERMAL_STATE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          const obj2 = obj(dependencyMap[24]);
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
        obj = obj(dependencyMap[25]);
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
                const currentUser = closure_1_14.getCurrentUser();
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
                          if (closure_1_17.JOIN === type) {
                            const rpcServer = tmp.rpcServer;
                            obj = { user: null, activity: null, type: null, channel_id: null, message_id: null };
                            obj[0] = transformUserDefault(user);
                            obj[1] = applicationActivity;
                            obj[2] = activity.type;
                            obj[3] = channelId;
                            obj[4] = message.id;
                            const result = rpcServer.dispatchToSubscriptions(closure_1_20.ACTIVITY_INVITE, (socket) => socket.socket.application.id === application_id, obj);
                          } else if (closure_1_17.JOIN_REQUEST === type) {
                            const rpcServer2 = tmp.rpcServer;
                            obj = { user: null, activity: null, type: null, channel_id: null, message_id: null };
                            obj[0] = transformUserDefault(user);
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
            }
          }
        }
      }
    };
    obj.handleOAuth2TokenRevoke = function handleOAuth2TokenRevoke(accessToken) {
      accessToken = accessToken.accessToken;
      const sockets = accessToken.rpcServer.sockets;
      const item = sockets.forEach((item, index) => {
        if (item.authorization.accessToken === accessToken) {
          item.close(closure_1_21.TOKEN_REVOKED, "Token revoked");
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
        const rpcServer = tmp2.rpcServer;
        obj = { id: null, name: null };
        obj[0] = id;
        obj[1] = guild.name;
        const result = rpcServer.dispatchToSubscriptions(closure_1_20.GUILD_CREATE, {}, obj);
      }
      tmp2 = obj;
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
      const sockets = obj.rpcServer.sockets;
      const item = sockets.forEach((item, index) => item.close(constants.CLOSE_NORMAL, "User logout"));
    };
    obj.handleRelationshipAdd = function handleRelationshipAdd(arg0) {
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = closure_1_14.getUser(tmp);
        if (null != user) {
          obj = obj(dependencyMap[23]);
          obj = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handleRelationshipUpdate = function handleRelationshipUpdate(arg0) {
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = closure_1_14.getUser(tmp);
        if (null != user) {
          obj = obj(dependencyMap[23]);
          obj = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handleRelationshipRemove = function handleRelationshipRemove(arg0) {
      obj = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = closure_1_14.getUser(tmp);
        if (null != user) {
          obj = obj(dependencyMap[23]);
          obj = obj.transformBaseRelationship(closure_1_18.NONE, user);
          const rpcServer = tmp2.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handlePresenceUpdates = function handlePresenceUpdates(updates) {
      updates = updates.updates;
      let item10023;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const _Set = Set;
        const set = new Set(updates.map((item, index) => item.user.id));
        function _loop() {
          const relationshipType = closure_1_12.getRelationshipType(item10023);
          if (relationshipType === closure_1_18.NONE) {
            return 0;
          } else {
            const user = closure_1_14.getUser(item10023);
            if (null == user) {
              return 0;
            } else {
              lib = lib(closure_1_2[23]).transformBaseRelationship(relationshipType, user);
              const rpcServer = lib.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
              obj = lib(closure_1_2[23]);
            }
          }
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
              lib = lib(closure_1_2[23]).transformBaseRelationship(tmp, user);
              const rpcServer = lib.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
              obj = lib(closure_1_2[23]);
            }
          }
        }
        const mutableRelationships = closure_1_12.getMutableRelationships();
        const entries = mutableRelationships.entries();
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
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
            obj = obj(dependencyMap[23]);
            obj = obj.transformBaseRelationship(relationshipType, user);
            const rpcServer = tmp.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(closure_1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
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
          obj = obj(dependencyMap[27]);
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
  if (obj132.isPlatformEmbedded) {
    const result = self.registerTransportsForEmbeddedPlatform();
  }
  for (const item10013 of tmp2) {
    let rpcServer = self.rpcServer;
    let registerTransportResult = rpcServer.registerTransport(item10013);
    continue;
  }
  const entries = Object.entries(self.rpcCommandHandlers);
  while (tmp5 !== undefined) {
    let tmp8 = callback(tmp6, 2);
    let rpcServer2 = self.rpcServer;
    let setCommandHandlerResult = rpcServer2.setCommandHandler(tmp8[0], tmp8[1]);
    continue;
  }
  const entries1 = Object.entries(self.rpcEventHandlers);
  for (const item10045 of entries1) {
    let tmp12 = callback(item10045, 2);
    let rpcServer3 = self.rpcServer;
    let setEventHandlerResult = rpcServer3.setEventHandler(tmp12[0], tmp12[1]);
    continue;
  }
  tmp5 = entries[Symbol.iterator]();
};
prototype["init"] = function init() {
  const self = this;
  this.rpcServer.getCurrentUser = () => currentUser.getCurrentUser();
  this.rpcServer.onConnect = (app_id) => {
    callback(709);
    let obj = { type: "RPC_APP_CONNECTED", socketId: app_id.id, application: app_id.application, source: app_id.source };
    obj.dispatch(obj);
    obj = { app_id: app_id.application.id, transport: app_id.transport };
    callback(698).track(constants.AUTHORIZED_APP_CONNECTED, obj);
  };
  this.rpcServer.onDisconnect = (id, reason) => {
    callback(709);
    const obj = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, source: id.source, reason };
    obj.dispatch(obj);
  };
  const items = [closure_6, closure_7, closure_10, closure_15, closure_9, closure_11];
  const batchedStoreListener = new self(589).BatchedStoreListener(items.concat(this.stores), () => {
    const rpcServer = self.rpcServer;
    return rpcServer.updateSubscriptions();
  });
  batchedStoreListener.attach("RPCServerManager");
  const subscription = dispatcherDefault.subscribe("MESSAGE_CREATE", this.handleMessage);
  const subscription1 = dispatcherDefault.subscribe("MESSAGE_UPDATE", this.handleMessage);
  const subscription2 = dispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessage);
  const subscription3 = dispatcherDefault.subscribe("SPEAKING", this.handleSpeaking);
  const subscription4 = dispatcherDefault.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  const subscription5 = dispatcherDefault.subscribe("GUILD_CREATE", this.handleGuildCreate);
  const subscription6 = dispatcherDefault.subscribe("CHANNEL_CREATE", this.handleChannelCreate);
  const subscription7 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const subscription8 = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const subscription9 = dispatcherDefault.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  const subscription10 = dispatcherDefault.subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  const subscription11 = dispatcherDefault.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  const subscription12 = dispatcherDefault.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  const subscription13 = dispatcherDefault.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  const subscription14 = dispatcherDefault.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  const subscription15 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  const subscription16 = dispatcherDefault.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  const subscription17 = dispatcherDefault.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  const subscription18 = dispatcherDefault.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  const subscription19 = dispatcherDefault.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  const subscription20 = dispatcherDefault.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  const subscription21 = dispatcherDefault.subscribe("USER_UPDATE", this.handleUserUpdate);
  const subscription22 = dispatcherDefault.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  const subscription23 = dispatcherDefault.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  const subscription24 = dispatcherDefault.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};
prototype["terminate"] = function terminate() {
  dispatcherDefault.unsubscribe("MESSAGE_CREATE", this.handleMessage);
  dispatcherDefault.unsubscribe("MESSAGE_UPDATE", this.handleMessage);
  dispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessage);
  dispatcherDefault.unsubscribe("SPEAKING", this.handleSpeaking);
  dispatcherDefault.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  dispatcherDefault.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
  dispatcherDefault.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  dispatcherDefault.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  dispatcherDefault.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  dispatcherDefault.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  dispatcherDefault.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  dispatcherDefault.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  dispatcherDefault.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  dispatcherDefault.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  dispatcherDefault.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  dispatcherDefault.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  dispatcherDefault.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  dispatcherDefault.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  dispatcherDefault.unsubscribe("USER_UPDATE", this.handleUserUpdate);
  dispatcherDefault.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  dispatcherDefault.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  dispatcherDefault.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};

export default RPCServerManager;
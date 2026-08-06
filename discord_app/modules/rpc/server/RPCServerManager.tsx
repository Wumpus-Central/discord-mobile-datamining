// discord_app/modules/rpc/server/RPCServerManager.tsx
import _slicedToArray from "_slicedToArray";
import map from "map";
import initializeState from "initializeState";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import sortActivity from "sortActivity";
import createRTCConnection from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { ActivityLayoutMode } from "items3";
import { FrameLayoutModes } from "FrameLayoutModes";
import { MediaEngineContextTypes } from "DesktopSources";
import { dispatcher } from "../../../Dispatcher.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
({ ActivityActionTypes: closure_17, RelationshipTypes: closure_18, AnalyticEvents: closure_19, RPCEvents: closure_20, RPCCloseCodes: closure_21 } = ME);
let result = require("initializeState").fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");
class RPCServerManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleMessage = function handleMessage(type) {
      let channelId;
      let message;
      if (0 !== obj.rpcServer.subscriptions.length) {
        if ("MESSAGE_CREATE" === type.type) {
          const result = obj.handleActivityMessage(type);
        }
        type = type.type;
        if ("MESSAGE_CREATE" === type) {
          if ("SENDING" !== type.message.state) {
            const MESSAGE_CREATE = outer1_20.MESSAGE_CREATE;
            ({ channelId, message } = type);
            const _HermesInternal2 = HermesInternal;
            let combined = "" + MESSAGE_CREATE + type.message.id;
            let MESSAGE_UPDATE = MESSAGE_CREATE;
          }
        } else if ("MESSAGE_UPDATE" === type) {
          MESSAGE_UPDATE = outer1_20.MESSAGE_UPDATE;
          channelId = type.message.channel_id;
          message = type.message;
          combined = null;
        } else if ("MESSAGE_DELETE" === type) {
          const MESSAGE_DELETE = outer1_20.MESSAGE_DELETE;
          channelId = type.channelId;
          message = { id: null };
          message[0] = type.id;
          const _HermesInternal = HermesInternal;
          combined = "" + MESSAGE_DELETE + type.id;
          MESSAGE_UPDATE = MESSAGE_DELETE;
        } else {
          return obj(outer1_2[22]).assertNever(type);
        }
        if (null != channelId) {
          const rpcServer = obj.rpcServer;
          obj = { channel_id: null };
          obj[0] = channelId;
          obj = { channel_id: null, message: null };
          obj[0] = channelId;
          obj[1] = obj(outer1_2[23]).transformInternalTextMessage(message);
          const result1 = rpcServer.dispatchToSubscriptions(MESSAGE_UPDATE, obj, obj, combined);
          const obj5 = obj(outer1_2[23]);
        }
      }
    };
    obj.handleSpeaking = function handleSpeaking(speakingFlags) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        if (0 !== speakingFlags.speakingFlags) {
          let SPEAKING_STOP = outer1_20.SPEAKING_START;
        } else {
          SPEAKING_STOP = outer1_20.SPEAKING_STOP;
        }
        if (speakingFlags.context === outer1_24.DEFAULT) {
          const voiceChannelId = outer1_13.getVoiceChannelId();
          if (null != voiceChannelId) {
            const channel = outer1_6.getChannel(voiceChannelId);
            if (null != channel) {
              const voiceState = outer1_15.getVoiceState(channel.getGuildId(), speakingFlags.userId);
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
        const result = rpcServer.dispatchToSubscriptions(outer1_20.VOICE_CHANNEL_SELECT, {}, obj);
      }
    };
    obj.handleNotificationCreate = function handleNotificationCreate(icon) {
      icon = icon.icon;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: null, message: null, icon_url: null, title: null, body: null };
        obj[0] = tmp;
        obj[1] = obj(outer1_2[23]).transformInternalTextMessage(tmp2);
        let remoteIconURL = null;
        if (null != icon) {
          remoteIconURL = tmp8(tmp9[23]).getRemoteIconURL(icon);
          const tmp8Result = tmp8(tmp9[23]);
        }
        obj[2] = remoteIconURL;
        obj[3] = tmp3;
        obj[4] = tmp4;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.NOTIFICATION_CREATE, {}, obj);
        const obj3 = obj(outer1_2[23]);
        tmp8 = obj;
        tmp9 = outer1_2;
      }
    };
    obj.handleActivityJoin = function handleActivityJoin(applicationId) {
      applicationId = applicationId.applicationId;
      const parentApplicationId = applicationId.parentApplicationId;
      if (0 !== applicationId.rpcServer.subscriptions.length) {
        const obj = { application_id: null, secret: null };
        obj[0] = applicationId;
        obj[1] = tmp;
        if (tmp3) {
          obj.intent = tmp2;
        }
        const rpcServer = tmp4.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ACTIVITY_JOIN, (socket) => {
          let tmp = socket.socket.application.id === applicationId;
          if (!tmp) {
            tmp = null != parentApplicationId && socket.socket.application.parentId === tmp2;
            const tmp4 = null != parentApplicationId && socket.socket.application.parentId === tmp2;
          }
          return tmp;
        }, obj);
        const rpcServer2 = tmp4.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(outer1_20.GAME_JOIN, (socket) => socket.socket.application.id === applicationId, obj);
      }
    };
    obj.handleActivityLayoutModeUpdate = function handleActivityLayoutModeUpdate(arg0) {
      let layoutMode;
      let obj;
      ({ applicationId: obj, layoutMode } = arg0);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = tmp.rpcServer;
        obj = { is_pip_mode: null };
        obj[0] = layoutMode !== outer1_22.FOCUSED;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
        obj = { layout_mode: null };
        obj[0] = layoutMode;
        const rpcServer2 = tmp.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(outer1_20.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
        const rpcServer3 = tmp.rpcServer;
        const result2 = rpcServer3.dispatchToSubscriptions(outer1_20.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
      }
    };
    obj.handleFrameUpdateLayoutMode = function handleFrameUpdateLayoutMode(frameId) {
      frameId = frameId.frameId;
      let dispatchToSubscriptions = frameId;
      if (0 !== frameId.rpcServer.subscriptions.length) {
        if (tmp === outer1_23.PIP) {
          let FOCUSED = outer1_22.PIP;
          let tmp2 = outer1_22;
        } else {
          tmp2 = outer1_22;
          FOCUSED = outer1_22.FOCUSED;
        }
        function targetsFrame(socket) {
          let tmp = socket.socket.source.type === outer1_16.POST_MESSAGE;
          if (tmp) {
            const frameByIframeId = outer1_4.getFrameByIframeId(socket.socket.source.iframeId);
            let id;
            if (frameByIframeId != null) {
              id = frameByIframeId.id;
            }
            tmp = id === frameId;
          }
          return tmp;
        }
        const rpcServer = dispatchToSubscriptions.rpcServer;
        let obj = { is_pip_mode: null };
        obj[0] = FOCUSED !== tmp2.FOCUSED;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ACTIVITY_PIP_MODE_UPDATE, targetsFrame, obj);
        obj = { layout_mode: null };
        obj[0] = FOCUSED;
        const rpcServer2 = dispatchToSubscriptions.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(outer1_20.ACTIVITY_LAYOUT_MODE_UPDATE, targetsFrame, obj);
        const rpcServer3 = dispatchToSubscriptions.rpcServer;
        dispatchToSubscriptions = rpcServer3.dispatchToSubscriptions;
        const result2 = dispatchToSubscriptions(outer1_20.FRAME_LAYOUT_MODE_UPDATE, targetsFrame, obj);
      }
    };
    obj.handleThermalStateChange = function handleThermalStateChange(applicationId) {
      applicationId = applicationId.applicationId;
      if (0 !== applicationId.rpcServer.subscriptions.length) {
        if (null != applicationId) {
          const obj = { thermal_state: null };
          obj[0] = obj(outer1_2[24]).getThermalState();
          const rpcServer = tmp.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(outer1_20.THERMAL_STATE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          const obj2 = obj(outer1_2[24]);
        }
      }
    };
    obj.handleScreenOrientationUpdate = function handleScreenOrientationUpdate(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { screen_orientation: null };
        obj[0] = tmp;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ORIENTATION_UPDATE, {}, obj);
      }
    };
    obj.handleEmbeddedActivityUpdate = function handleEmbeddedActivityUpdate() {
      if (0 !== obj.rpcServer.subscriptions.length) {
        obj = obj(outer1_2[25]);
        const rpcServer = tmp.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, obj.activityInstanceConnectedParticipants());
      }
    };
    obj.handleActivityMessage = function handleActivityMessage(type) {
      let activity;
      let application;
      let channelId;
      let message;
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
              const user = outer1_14.getUser(id);
              if (null != user) {
                const currentUser = obj2.getCurrentUser();
                if (null != currentUser) {
                  if (user.id !== currentUser.id) {
                    if (activity.type === outer1_17.JOIN_REQUEST) {
                      let applicationActivity = outer1_10.getApplicationActivity(currentUser.id, application.id);
                    } else {
                      applicationActivity = outer1_10.getApplicationActivity(user.id, application.id);
                    }
                    if (null != applicationActivity) {
                      if (null != applicationActivity.party) {
                        if (applicationActivity.party.id === activity.party_id) {
                          application_id = applicationActivity.application_id;
                          type = activity.type;
                          if (tmp13.JOIN === type) {
                            const rpcServer = tmp.rpcServer;
                            let obj = { user: null, activity: null, type: null, channel_id: null, message_id: null };
                            obj[0] = outer1_1(outer1_2[26])(user);
                            obj[1] = applicationActivity;
                            obj[2] = activity.type;
                            obj[3] = channelId;
                            obj[4] = message.id;
                            const result = rpcServer.dispatchToSubscriptions(outer1_20.ACTIVITY_INVITE, (socket) => socket.socket.application.id === application_id, obj);
                          } else if (tmp13.JOIN_REQUEST === type) {
                            const rpcServer2 = tmp.rpcServer;
                            obj = { user: null, activity: null, type: null, channel_id: null, message_id: null };
                            obj[0] = outer1_1(outer1_2[26])(user);
                            obj[1] = applicationActivity;
                            obj[2] = activity.type;
                            obj[3] = channelId;
                            obj[4] = message.id;
                            const result1 = rpcServer2.dispatchToSubscriptions(outer1_20.ACTIVITY_JOIN_REQUEST, (socket) => socket.socket.application.id === application_id, obj);
                          }
                        }
                      }
                    }
                  }
                }
              }
              obj2 = outer1_14;
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
          authorization.close(outer1_21.TOKEN_REVOKED, "Token revoked");
        }
      });
    };
    obj.handleGuildCreate = function handleGuildCreate(guild) {
      const id = guild.guild.id;
      guild = outer1_8.getGuild(id);
      let tmp3 = 0 !== obj.rpcServer.subscriptions.length;
      if (tmp3) {
        tmp3 = null != guild;
      }
      if (tmp3) {
        const rpcServer = obj.rpcServer;
        obj = { id: null, name: null };
        obj[0] = id;
        obj[1] = guild.name;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.GUILD_CREATE, {}, obj);
      }
    };
    obj.handleChannelCreate = function handleChannelCreate(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { id: null, name: null, type: null };
        obj[0] = tmp;
        obj[1] = tmp2;
        obj[2] = tmp3;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.CHANNEL_CREATE, {}, obj);
      }
    };
    obj.handleLogout = function handleLogout() {
      const sockets = obj.rpcServer.sockets;
      const item = sockets.forEach((close) => close.close(constants.CLOSE_NORMAL, "User logout"));
    };
    obj.handleRelationshipAdd = function handleRelationshipAdd(arg0) {
      let obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = outer1_14.getUser(tmp);
        if (null != user) {
          obj = obj(outer1_2[23]);
          obj = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(outer1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(outer1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handleRelationshipUpdate = function handleRelationshipUpdate(arg0) {
      let obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = outer1_14.getUser(tmp);
        if (null != user) {
          obj = obj(outer1_2[23]);
          obj = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(outer1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(outer1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handleRelationshipRemove = function handleRelationshipRemove(arg0) {
      let obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = outer1_14.getUser(tmp);
        if (null != user) {
          obj = obj(outer1_2[23]);
          obj = obj.transformBaseRelationship(outer1_18.NONE, user);
          const rpcServer = tmp2.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(outer1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(outer1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
        }
      }
    };
    obj.handlePresenceUpdates = function handlePresenceUpdates(updates) {
      updates = updates.updates;
      let c1;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const _Set = Set;
        const set = new Set(updates.map((user) => user.user.id));
        function _loop() {
          const relationshipType = outer1_12.getRelationshipType(c1);
          if (relationshipType === outer1_18.NONE) {
            return 0;
          } else {
            const user = outer1_14.getUser(tmp);
            if (null == user) {
              return 0;
            } else {
              lib = lib(outer1_2[23]).transformBaseRelationship(relationshipType, user);
              const rpcServer = lib.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(outer1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(outer1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
            }
          }
          tmp = c1;
        }
        const values = set.values();
        for (const item10023 of values) {
          c1 = item10023;
          let _loopResult = _loop();
          continue;
        }
      }
    };
    obj.handlePresencesReplace = function handlePresencesReplace() {
      let closure_1;
      let closure_2;
      if (0 !== obj.rpcServer.subscriptions.length) {
        function _loop2() {
          if (closure_2 === outer1_18.NONE) {
            return 0;
          } else {
            const user = outer1_14.getUser(closure_1);
            if (null == user) {
              return 0;
            } else {
              lib = lib(outer1_2[23]).transformBaseRelationship(tmp, user);
              const rpcServer = lib.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(outer1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(outer1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
            }
          }
        }
        const mutableRelationships = outer1_12.getMutableRelationships();
        const entries = mutableRelationships.entries();
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp8 = outer1_3;
          let tmp9 = outer1_3(tmp6, 2);
          [closure_1, closure_2] = tmp9;
          let _loop2Result = _loop2();
          continue;
        }
      }
    };
    obj.handleUserUpdate = function handleUserUpdate(user) {
      const id = user.user.id;
      let obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const relationshipType = outer1_12.getRelationshipType(id);
        if (relationshipType !== outer1_18.NONE) {
          user = outer1_14.getUser(id);
          if (null != user) {
            obj = obj(outer1_2[23]);
            obj = obj.transformBaseRelationship(relationshipType, user);
            const rpcServer = tmp.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(outer1_20.RELATIONSHIP_UPDATE, {}, (socket) => callback(outer1_2[23]).transformApplicationRelationship(callback, socket.socket.application.id));
          }
        }
      }
    };
    obj.handleEntitlementCreate = function handleEntitlementCreate(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== entitlement.rpcServer.subscriptions.length) {
        const rpcServer = entitlement.rpcServer;
        const obj = { entitlement: null };
        obj[0] = entitlement;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ENTITLEMENT_CREATE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
      }
    };
    obj.handleEntitlementDelete = function handleEntitlementDelete(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== entitlement.rpcServer.subscriptions.length) {
        const rpcServer = entitlement.rpcServer;
        const obj = { entitlement: null };
        obj[0] = entitlement;
        const result = rpcServer.dispatchToSubscriptions(outer1_20.ENTITLEMENT_DELETE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
      }
    };
    obj.handleQuestEnrollSuccess = function handleQuestEnrollSuccess(enrolledQuestUserStatus) {
      enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
      let questId;
      let activityApplicationId;
      if (0 !== questId.rpcServer.subscriptions.length) {
        questId = enrolledQuestUserStatus.questId;
        const quest = outer1_5.getQuest(questId);
        if (null != quest) {
          obj = obj(outer1_2[27]);
          activityApplicationId = obj.getActivityApplicationId(quest);
          if (null != activityApplicationId) {
            const rpcServer = tmp.rpcServer;
            obj = { quest_id: null, is_enrolled: null, enrolled_at: null };
            obj[0] = questId;
            obj[1] = null != enrolledQuestUserStatus.enrolledAt;
            obj[2] = enrolledQuestUserStatus.enrolledAt;
            const result = rpcServer.dispatchToSubscriptions(outer1_20.QUEST_ENROLLMENT_STATUS_UPDATE, (socket) => {
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
  if (set.isPlatformEmbedded) {
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
    let obj = callback(709);
    obj = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, source: id.source, reason };
    obj.dispatch(obj);
  };
  const items = [ensureGuildLoaded, trackCommunicationDisabled, sortActivity, updateVoiceState, _detectH265HardwareDecode, createRTCConnection];
  const batchedStoreListener = new self(589).BatchedStoreListener(items.concat(this.stores), () => {
    const rpcServer = self.rpcServer;
    return rpcServer.updateSubscriptions();
  });
  batchedStoreListener.attach("RPCServerManager");
  const subscription = dispatcher.subscribe("MESSAGE_CREATE", this.handleMessage);
  const obj2 = dispatcher;
  const subscription1 = dispatcher.subscribe("MESSAGE_UPDATE", this.handleMessage);
  const obj3 = dispatcher;
  const subscription2 = dispatcher.subscribe("MESSAGE_DELETE", this.handleMessage);
  const obj4 = dispatcher;
  const subscription3 = dispatcher.subscribe("SPEAKING", this.handleSpeaking);
  const obj5 = dispatcher;
  const subscription4 = dispatcher.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  const obj6 = dispatcher;
  const subscription5 = dispatcher.subscribe("GUILD_CREATE", this.handleGuildCreate);
  const obj7 = dispatcher;
  const subscription6 = dispatcher.subscribe("CHANNEL_CREATE", this.handleChannelCreate);
  const obj8 = dispatcher;
  const subscription7 = dispatcher.subscribe("LOGOUT", this.handleLogout);
  const obj9 = dispatcher;
  const subscription8 = dispatcher.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj10 = dispatcher;
  const subscription9 = dispatcher.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  const obj11 = dispatcher;
  const subscription10 = dispatcher.subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  const obj12 = dispatcher;
  const subscription11 = dispatcher.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  const obj13 = dispatcher;
  const subscription12 = dispatcher.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  const obj14 = dispatcher;
  const subscription13 = dispatcher.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  const obj15 = dispatcher;
  const subscription14 = dispatcher.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  const obj16 = dispatcher;
  const subscription15 = dispatcher.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  const obj17 = dispatcher;
  const subscription16 = dispatcher.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  const obj18 = dispatcher;
  const subscription17 = dispatcher.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  const obj19 = dispatcher;
  const subscription18 = dispatcher.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  const obj20 = dispatcher;
  const subscription19 = dispatcher.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  const obj21 = dispatcher;
  const subscription20 = dispatcher.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  const obj22 = dispatcher;
  const subscription21 = dispatcher.subscribe("USER_UPDATE", this.handleUserUpdate);
  const obj23 = dispatcher;
  const subscription22 = dispatcher.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  const obj24 = dispatcher;
  const subscription23 = dispatcher.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  const obj25 = dispatcher;
  const subscription24 = dispatcher.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};
prototype["terminate"] = function terminate() {
  dispatcher.unsubscribe("MESSAGE_CREATE", this.handleMessage);
  const obj = dispatcher;
  dispatcher.unsubscribe("MESSAGE_UPDATE", this.handleMessage);
  const obj2 = dispatcher;
  dispatcher.unsubscribe("MESSAGE_DELETE", this.handleMessage);
  const obj3 = dispatcher;
  dispatcher.unsubscribe("SPEAKING", this.handleSpeaking);
  const obj4 = dispatcher;
  dispatcher.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  const obj5 = dispatcher;
  dispatcher.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
  const obj6 = dispatcher;
  dispatcher.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
  const obj7 = dispatcher;
  dispatcher.unsubscribe("LOGOUT", this.handleLogout);
  const obj8 = dispatcher;
  dispatcher.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj9 = dispatcher;
  dispatcher.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  const obj10 = dispatcher;
  dispatcher.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  const obj11 = dispatcher;
  dispatcher.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  const obj12 = dispatcher;
  dispatcher.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  const obj13 = dispatcher;
  dispatcher.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  const obj14 = dispatcher;
  dispatcher.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  const obj15 = dispatcher;
  dispatcher.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  const obj16 = dispatcher;
  dispatcher.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  const obj17 = dispatcher;
  dispatcher.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  const obj18 = dispatcher;
  dispatcher.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  const obj19 = dispatcher;
  dispatcher.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  const obj20 = dispatcher;
  dispatcher.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  const obj21 = dispatcher;
  dispatcher.unsubscribe("USER_UPDATE", this.handleUserUpdate);
  const obj22 = dispatcher;
  dispatcher.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  const obj23 = dispatcher;
  dispatcher.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  const obj24 = dispatcher;
  dispatcher.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};

export default RPCServerManager;
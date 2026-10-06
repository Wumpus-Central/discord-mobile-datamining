// discord_app/modules/calls/ChannelRTCStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelRTCParticipants from "ChannelRTCParticipants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import GameConsoleStore from "../game_console/GameConsoleStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import CallStore from "../../stores/CallStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../../stores/SpeakingStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VideoStreamStore from "../../stores/VideoStreamStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import CallConstants from "CallConstants.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChannelRTCParticipantsDefault = ChannelRTCParticipants;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
function getParticipants(arg0) {
  let tmp2 = closure_27[arg0];
  if (null == tmp2) {
    const self = this;
    const self2 = this;
    const tmp6 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp6;
    tmp2 = tmp6;
  }
  return tmp2;
}
function updateParticipant(arg0) {
  let closure_0 = arg0;
  const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
  return arr.reduce(function (acc, item) {
    let tmp = item;
    let tmp3 = closure_2_27[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[16])(item);
      closure_2_27[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f89663(tmp3)) {
      obj = closure_2_27[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_9.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          const hasEmbeddedActivityResult =
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
            obj.hasEmbeddedActivity();
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_30[tmp];
            delete closure_2_31[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = closure_2_27[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp =
              type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                  .id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find(
                  (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                );
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_9.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_28[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = constants2.NONE;
              }
            }
          }
          const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_40(item, items1);
          flag = true;
        }
      }
      closure_2_40(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function getSelectedParticipantId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  if (channel != null) {
    channel.isDM();
  }
  let tmp4 = closure_28[arg0];
  if (tmp4 == null) {
    const items = [tmp3, tmp2.NONE];
    tmp4 = items;
  }
  return tmp4;
}
function setSelectedParticipantId(channelId, items) {
  const tmp = channelId;
  if (null == closure_29[channelId]) {
    closure_29[channelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
  }
  const nowResult = performance.now();
  const tmp6 = null != closure_28[channelId] && _slicedToArray(closure_28[channelId], 1)[0] !== constants2.NONE;
  if (closure_29[channelId].lastUpdate > 0) {
    let str = "gridDurationMs";
    const diff = nowResult - tmp3.lastUpdate;
    if (tmp6) {
      str = "focusDurationMs";
    }
    closure_29[channelId][str] = closure_29[channelId][str] + diff;
  }
  closure_29[channelId].lastUpdate = nowResult;
  const tmp10 = null != closure_28[channelId] && _slicedToArray(closure_28[channelId], 1)[0] !== constants2.NONE;
  if (null == items) {
    delete closure_28[tmp];
  } else {
    closure_28[channelId] = items;
  }
  const tmp13 = null != closure_28[channelId] && _slicedToArray(closure_28[channelId], 1)[0] !== constants2.NONE;
  if (tmp10 !== tmp13) {
    closure_29[channelId].toggleCount = closure_29[channelId].toggleCount + 1;
  }
}
function hasVideo(size) {
  const hasEmbeddedActivityResult =
    size.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0 ||
    size.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
    size.hasEmbeddedActivity();
  return hasEmbeddedActivityResult;
}
function clearChannel(arg0) {
  delete closure_27[arg0];
  delete closure_28[arg0];
  delete closure_30[arg0];
  delete closure_31[arg0];
  delete closure_35[arg0];
}
function handleRebuildActiveChannels() {
  const items = [];
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    items.push(channelId);
  }
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const tmp4 = null == voiceChannelId || items.includes(voiceChannelId);
  if (!tmp4) {
    items.push(voiceChannelId);
  }
  const remoteSessionId = GameConsoleStore.getRemoteSessionId();
  const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), remoteSessionId);
  let channelId1;
  if (voiceStateForSession != null) {
    channelId1 = voiceStateForSession.channelId;
  }
  if (null != channelId1) {
    let channelId2;
    const push = items.push;
    if (voiceStateForSession != null) {
      channelId2 = voiceStateForSession.channelId;
    }
    push(channelId2);
  }
  const fn = (rebuild) => rebuild.rebuild();
  const obj2 = _modDef12;
  const differenceResult = obj2.difference(items, items);
  const item = differenceResult.forEach(clearChannel);
  const obj3 = _modDef12;
  let differenceResult1 = obj3.difference(items, items);
  if (differenceResult1 === undefined) {
    differenceResult1 = items;
  }
  return differenceResult1.reduce(function (acc, item) {
    let tmp = item;
    let tmp3 = closure_2_27[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[16])(item);
      closure_2_27[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f89663(tmp3)) {
      obj = closure_2_27[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_9.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          const hasEmbeddedActivityResult =
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
            obj.hasEmbeddedActivity();
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_30[tmp];
            delete closure_2_31[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = closure_2_27[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp =
              type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                  .id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find(
                  (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                );
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_9.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_28[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = constants2.NONE;
              }
            }
          }
          const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_40(item, items1);
          flag = true;
        }
      }
      closure_2_40(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleEmbeddedActivityChange() {
  const f89665 = (updateEmbeddedActivities) => updateEmbeddedActivities.updateEmbeddedActivities();
  return closure_25.reduce(function (acc, item) {
    let tmp = item;
    let tmp3 = closure_2_27[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[16])(item);
      closure_2_27[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f89663(tmp3)) {
      obj = closure_2_27[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_9.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          const hasEmbeddedActivityResult =
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
            obj.hasEmbeddedActivity();
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_30[tmp];
            delete closure_2_31[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = closure_2_27[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp =
              type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                  .id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find(
                  (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                );
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_9.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_28[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = constants2.NONE;
              }
            }
          }
          const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_40(item, items1);
          flag = true;
        }
      }
      closure_2_40(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleSpeaking(userId) {
  userId = userId.userId;
  const f89666 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(userId);
  return closure_25.reduce(function (acc, item) {
    let tmp = item;
    let tmp3 = closure_2_27[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[16])(item);
      closure_2_27[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f89663(tmp3)) {
      obj = closure_2_27[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_9.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          const hasEmbeddedActivityResult =
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
            obj.hasEmbeddedActivity();
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_30[tmp];
            delete closure_2_31[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = closure_2_27[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp =
              type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                  .id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find(
                  (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                );
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_9.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_28[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = constants2.NONE;
              }
            }
          }
          const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_40(item, items1);
          flag = true;
        }
      }
      closure_2_40(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleUserUpdate(user) {
  const id = user.user.id;
  const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
  if (closure_25 !== undefined) {
    return closure_25.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  }
}
function handleCallUpdate(channelId) {
  const items = [channelId.channelId];
  const f89667 = (rebuild) => rebuild.rebuild();
  return items.reduce(function (acc, item) {
    let tmp = item;
    let tmp3 = closure_2_27[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[16])(item);
      closure_2_27[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f89663(tmp3)) {
      obj = closure_2_27[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_9.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          const hasEmbeddedActivityResult =
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
            obj.hasEmbeddedActivity();
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_30[tmp];
            delete closure_2_31[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = closure_2_27[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp =
              type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                  .id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find(
                  (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                );
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_9.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_28[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = constants2.NONE;
              }
            }
          }
          const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_40(item, items1);
          flag = true;
        }
      }
      closure_2_40(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleChannelDelete(channel) {
  const id = channel.channel.id;
  set.delete(id);
  delete closure_34[id];
  delete closure_27[id];
  delete closure_28[id];
  delete closure_30[id];
  delete closure_31[id];
  delete closure_35[id];
}
function handleStreamClose(streamKey) {
  let closure_129_0;
  let f89663;
  streamKey = streamKey.streamKey;
  obj = f89663(4948);
  const items = [];
  ({ channelId: arr[0], ownerId: closure_129_0 } = obj.decodeStreamKey(streamKey));
  f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
  obj.decodeStreamKey(streamKey);
  return items.reduce(function (acc, item) {
    let tmp = item;
    let tmp3 = closure_2_27[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[16])(item);
      closure_2_27[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f89663(tmp3)) {
      obj = closure_2_27[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_9.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          const hasEmbeddedActivityResult =
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
            obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
            obj.hasEmbeddedActivity();
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_30[tmp];
            delete closure_2_31[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = closure_2_27[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp =
              type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                  .id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find(
                  (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                );
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_9.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_28[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 =
                  participant.type === constants.STREAM &&
                  null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = constants2.NONE;
              }
            }
          }
          const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_40(item, items1);
          flag = true;
        }
      }
      closure_2_40(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
({
  ParticipantTypes: closure_16,
  ParticipantSelectionTypes: closure_17,
  isStreamParticipant: closure_18,
} = CallConstants);
({
  ChannelLayouts: closure_19,
  ChannelModes: closure_20,
  ChannelTypes: closure_21,
  AppContext: closure_22,
} = Constants);
let obj = new LoggerDefault("ChannelRTCStore");
obj.enableNativeLogger(true);
const frozen = Object.freeze([]);
let closure_25 = [];
new Set();
let closure_27 = {};
let closure_28 = {};
const set = {};
const __initData = {};
let closure_31 = {};
const __initData2 = {};
const voiceParticipantsHidden = {};
const __initData3 = {};
let closure_35 = {};
let closure_36 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelRTCStore extends PersistedStore {
  initialize(voiceParticipantsHidden) {
    this.waitFor(
      ApplicationStreamingStore,
      AuthenticationStore,
      CallStore,
      ChannelStore,
      EmbeddedActivitiesStore,
      GameConsoleStore,
      PresenceStore,
      SelectedChannelStore,
      SpeakingStore,
      UserStore,
      VideoStreamStore,
      VoiceStateStore,
    );
    const items = [EmbeddedActivitiesStore];
    this.syncWith(items, handleEmbeddedActivityChange);
    const items1 = [GameConsoleStore];
    this.syncWith(items1, handleRebuildActiveChannels);
    let prop;
    if (voiceParticipantsHidden != null) {
      prop = voiceParticipantsHidden.voiceParticipantsHidden;
    }
    if (undefined !== prop) {
      let prop1;
      const _Object = Object;
      if (voiceParticipantsHidden != null) {
        prop1 = voiceParticipantsHidden.voiceParticipantsHidden;
      }
      assign(voiceParticipantsHidden, prop1);
    }
  }
  getState() {
    return { voiceParticipantsHidden };
  }
  getParticipantsVersion(arg0) {
    let tmp2 = closure_27[arg0];
    if (null == tmp2) {
      const self = this;
      const self2 = this;
      const tmp6 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp6;
      tmp2 = tmp6;
    }
    return tmp2.version;
  }
  getParticipants(arg0) {
    obj = closure_27[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray();
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getSpeakingParticipants(id) {
    obj = closure_27[id];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(id);
      tmp[id] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.SPEAKING);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getFilteredParticipants(arg0) {
    obj = closure_27[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    if (voiceParticipantsHidden[arg0] != null) {
      let toArrayResult;
      if (voiceParticipantsHidden[arg0]) {
        toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.FILTERED);
      }
      return toArrayResult;
    }
    toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.NOT_POPPED_OUT);
  }
  getVideoParticipants(channelId) {
    obj = closure_27[channelId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getStreamParticipants(id) {
    obj = closure_27[id];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(id);
      tmp[id] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getActivityParticipants(channelId) {
    obj = closure_27[channelId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.ACTIVITY);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getParticipant(arg0, arg1) {
    obj = closure_27[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    return obj.getParticipant(arg1);
  }
  getUserParticipantCount(id) {
    obj = closure_27[id];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(id);
      tmp[id] = tmp5;
      obj = tmp5;
    }
    const sizeResult = obj.size();
    const diff = sizeResult - obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
    return diff - obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.ACTIVITY);
  }
  getParticipantsOpen(arg0) {
    let flag = closure_32[arg0];
    if (flag == null) {
      flag = true;
    }
    return flag;
  }
  getVoiceParticipantsHidden(channelId) {
    let flag = voiceParticipantsHidden[channelId];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getSelectedParticipantId(arg0) {
    let tmp6;
    let tmp7;
    const channel = ChannelStore.getChannel(arg0);
    if (channel != null) {
      channel.isDM();
    }
    let tmp4 = closure_28[arg0];
    if (tmp4 == null) {
      const items = [tmp3, constants2.NONE];
      tmp4 = items;
    }
    [tmp6, tmp7] = tmp4;
    let tmp8 = null;
    _slicedToArray(tmp4, 2);
    if (tmp6 !== constants2.NONE) {
      tmp8 = tmp6;
    }
    return tmp8;
  }
  getSelectedParticipant(id) {
    const selectedParticipantId = this.getSelectedParticipantId(id);
    let participant = null;
    if (null != selectedParticipantId) {
      obj = closure_27[id];
      if (null == obj) {
        const self = this;
        const self2 = this;
        const tmp7 = new ChannelRTCParticipantsDefault(id);
        tmp3[id] = tmp7;
        obj = tmp7;
      }
      participant = obj.getParticipant(selectedParticipantId);
    }
    return participant;
  }
  getSelectedParticipantStats(arg0) {
    if (null == closure_29[arg0]) {
      obj = {};
    } else {
      obj = {
        view_mode_grid_duration_ms: Math.floor(closure_29[arg0].gridDurationMs),
        view_mode_focus_duration_ms: Math.floor(closure_29[arg0].focusDurationMs),
        view_mode_toggle_count: closure_29[arg0].toggleCount,
      };
      const _Math = Math;
      const _Math2 = Math;
    }
    return obj;
  }
  getMode(arg0) {
    let tmp = closure_30[arg0];
    if (tmp == null) {
      const _Boolean = Boolean;
      const channel = ChannelStore.getChannel(arg0);
      let isGuildVocalOrThreadResult;
      if (channel != null) {
        isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
      }
      tmp = _Boolean(isGuildVocalOrThreadResult) ? constants.VIDEO : constants.VOICE;
    }
    return tmp;
  }
  getLayout(arg0) {
    if (arg1 === undefined) {
      const APP = constants5.APP;
    }
    return constants3.NORMAL;
  }
  getChatOpen(channelId) {
    return set.has(channelId);
  }
  getOpenChatChannelIds() {
    return set;
  }
  isFullscreenInContext() {
    let APP = arg0;
    if (arg0 === undefined) {
      APP = constants5.APP;
    }
    const values = Object.values(closure_31);
    return values.some((item) => item[APP] === constants.FULL_SCREEN);
  }
  getStageStreamSize(arg0) {
    return closure_34[arg0];
  }
  getStageVideoLimitBoostUpsellDismissed(arg0) {
    return closure_36[arg0];
  }
  isParticipantPoppedOut(React2, id) {
    const participant = this.getParticipant(React2, id);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = "isPoppedOut" in participant && participant.isPoppedOut;
    }
    return tmp2;
  }
}
const prototype = ChannelRTCStore.prototype;
ChannelRTCStore.displayName = "ChannelRTCStore";
ChannelRTCStore.persistKey = "ChannelRTCStore";
let obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    for (const item10005 of closure_25) {
      let tmp2 = clearChannel(item10005);
      continue;
    }
    handleRebuildActiveChannels();
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleRebuildActiveChannels,
  THREAD_LIST_SYNC: handleRebuildActiveChannels,
  OVERLAY_INITIALIZE: handleRebuildActiveChannels,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(arg0) {
    let channelId;
    let currentVoiceChannelId;
    ({ channelId, currentVoiceChannelId } = arg0);
    if (null != channelId) {
      delete closure_29[channelId];
    } else if (null != currentVoiceChannelId) {
      set.delete(currentVoiceChannelId);
      delete closure_34[currentVoiceChannelId];
      if (null == closure_29[currentVoiceChannelId]) {
        closure_29[currentVoiceChannelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
      }
      const _performance = performance;
      const nowResult = performance.now();
      const tmp5 =
        null != closure_28[currentVoiceChannelId] &&
        _slicedToArray(tmp4[currentVoiceChannelId], 1)[0] !== constants2.NONE;
      if (closure_29[currentVoiceChannelId].lastUpdate > 0) {
        let str = "gridDurationMs";
        const diff = nowResult - tmp.lastUpdate;
        if (tmp5) {
          str = "focusDurationMs";
        }
        closure_29[currentVoiceChannelId][str] = closure_29[currentVoiceChannelId][str] + diff;
      }
      closure_29[currentVoiceChannelId].lastUpdate = nowResult;
    }
    let flag = false;
    const tmp9 = channelId !== currentVoiceChannelId && null != currentVoiceChannelId;
    if (tmp9) {
      const items = [currentVoiceChannelId];
      const f89669 = (rebuild) => rebuild.rebuild();
      flag = items.reduce(function (acc, item) {
        let tmp = item;
        let tmp3 = closure_2_27[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f89663(tmp3)) {
          obj = closure_2_27[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_9.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              const hasEmbeddedActivityResult =
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
                obj.hasEmbeddedActivity();
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_30[tmp];
                delete closure_2_31[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = closure_2_27[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp =
                  type.type === constants.STREAM &&
                  null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(
                      obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO),
                      1,
                    )[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find(
                      (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                    );
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_9.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_28[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = constants2.NONE;
                  }
                }
              }
              const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_40(item, items1);
              flag = true;
            }
          }
          closure_2_40(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
    if (!flag) {
      flag = handleRebuildActiveChannels();
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    const tmp = handleRebuildActiveChannels();
    if (null == channelId) {
      return tmp;
    } else if (null == messageId) {
      return tmp;
    } else if (set.has(channelId)) {
      return tmp;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      let tmp3 = tmp;
      if (null != channel) {
        let flag = tmp;
        if (channel.isGuildVocal()) {
          set.add(channelId);
          flag = true;
        }
        tmp3 = flag;
      }
      return tmp3;
    }
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: handleRebuildActiveChannels,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let voiceStates;
    ({ voiceStates, initial: require } = arg0);
    return voiceStates.reduce((acc, channelId) => {
      let activeStreamForStreamKey;
      let voiceChannelId;
      channelId = channelId.channelId;
      const userId = channelId.userId;
      if (require) {
        let tmp3;
        let tmp = null;
        if (null != channelId) {
          tmp3 = acc;
        }
        return tmp3;
      }
      let arr = closure_25;
      const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
      if (closure_25 === undefined) {
        arr = closure_25;
      }
      tmp3 =
        arr.reduce(function (acc, item) {
          let tmp = item;
          let tmp3 = closure_2_27[item];
          if (null == tmp3) {
            const self = this;
            const self2 = this;
            const tmp7 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp7;
            tmp3 = tmp7;
          }
          let flag = acc;
          if (f89663(tmp3)) {
            obj = closure_2_27[item];
            if (null == obj) {
              const self3 = this;
              const self4 = this;
              const tmp12 = new closure_2_1(closure_2_2[16])(item);
              closure_2_27[item] = tmp12;
              obj = tmp12;
            }
            if (0 !== obj.size()) {
              const _Boolean = Boolean;
              const channel = closure_2_9.getChannel(item);
              let isGuildVocalOrThreadResult;
              if (channel != null) {
                isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
              }
              if (!_Boolean(isGuildVocalOrThreadResult)) {
                let tmp19;
                let VIDEO;
                const hasEmbeddedActivityResult =
                  obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
                  obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
                  obj.hasEmbeddedActivity();
                if (!hasEmbeddedActivityResult) {
                  tmp19 = constants3;
                  VIDEO = constants3.VOICE;
                }
                if (VIDEO === tmp19.VOICE) {
                  delete closure_2_30[tmp];
                  delete closure_2_31[tmp];
                } else {
                  closure_2_30[item] = VIDEO;
                }
              }
              VIDEO = constants3.VIDEO;
              tmp19 = constants3;
            }
            const id1 = id.getId();
            let obj2 = closure_2_27[item];
            if (null == obj2) {
              const self5 = this;
              const self6 = this;
              const tmp27 = new closure_2_1(closure_2_2[16])(item);
              closure_2_27[item] = tmp27;
              obj2 = tmp27;
            }
            if (0 !== obj2.size()) {
              if (voiceChannelId.getVoiceChannelId() === item) {
                const NONE = constants2.NONE;
                const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
                const found = toArrayResult.find((type) => {
                  const tmp =
                    type.type === constants.STREAM &&
                    null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                  return tmp;
                });
                if (null != found) {
                  closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
                  id = found.id;
                } else {
                  id = id1;
                  if (1 !== obj2.size()) {
                    if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                      id = closure_2_3(
                        obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO),
                        1,
                      )[0].id;
                    } else {
                      const toArrayResult1 = obj2.toArray();
                      const found1 = toArrayResult1.find(
                        (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                      );
                      let id3;
                      if (found1 != null) {
                        id3 = found1.id;
                      }
                      if (id3 == null) {
                        id3 = id1;
                      }
                      id = id3;
                    }
                  }
                }
                const channel1 = closure_2_9.getChannel(item);
                if (channel1 != null) {
                  channel1.isDM();
                }
                let tmp40 = closure_2_28[item];
                if (tmp40 == null) {
                  const items = [tmp38, constants2.NONE];
                  tmp40 = items;
                }
                const first = closure_2_3(tmp40, 1)[0];
                let id2 = first;
                if (first !== constants2.AUTO) {
                  id2 = first;
                  if (first !== constants2.NONE) {
                    const participant = obj2.getParticipant(first);
                    let tmp44 = null == participant;
                    if (!tmp44) {
                      tmp44 =
                        participant.type === constants.STREAM &&
                        null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                      const tmp46 =
                        participant.type === constants.STREAM &&
                        null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    id2 = first;
                    if (tmp44) {
                      id2 = constants2.NONE;
                    }
                  }
                }
                const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
                if (tmp48) {
                  id2 = found.id;
                }
                const items1 = [id2, id];
                closure_2_40(item, items1);
                flag = true;
              }
            }
            closure_2_40(item, null);
            flag = true;
          }
          return flag;
        }, false) || acc;
      arr.reduce(function (acc, item) {
        let tmp = item;
        let tmp3 = closure_2_27[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f89663(tmp3)) {
          obj = closure_2_27[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_9.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              const hasEmbeddedActivityResult =
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
                obj.hasEmbeddedActivity();
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_30[tmp];
                delete closure_2_31[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = closure_2_27[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp =
                  type.type === constants.STREAM &&
                  null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(
                      obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO),
                      1,
                    )[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find(
                      (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                    );
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_9.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_28[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = constants2.NONE;
                  }
                }
              }
              const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_40(item, items1);
              flag = true;
            }
          }
          closure_2_40(item, null);
          flag = true;
        }
        return flag;
      }, false) || acc;
    }, false);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (channel.type === constants4.GROUP_DM) {
      const originChannelId = channel.originChannelId;
      if (null != originChannelId) {
        let NORMAL;
        const id = channel.id;
        const APP = constants5.APP;
        if (closure_31[originChannelId] != null) {
          NORMAL = tmp3[constants5.APP];
        }
        if (NORMAL == null) {
          NORMAL = constants3.NORMAL;
        }
        obj = {};
        obj[APP] = NORMAL;
        closure_31[id] = obj;
        return true;
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  CALL_CREATE: handleCallUpdate,
  CALL_UPDATE: handleCallUpdate,
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    delete closure_27[channelId];
    delete closure_28[channelId];
    delete closure_30[channelId];
    delete closure_31[channelId];
    delete closure_35[channelId];
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleSelectParticipant(arg0) {
    let channelId;
    let id;
    ({ channelId, id } = arg0);
    obj = getParticipants(channelId);
    if (null == id) {
      const toArrayResult = obj.toArray(obj(9049).ChannelRTCParticipantsIndexes.STREAM);
      const item = toArrayResult.forEach((user) => {
        if (authStore4(user)) {
          obj.updateParticipant(user.user.id);
        }
      });
    }
    let NONE = id;
    const tmp4 = _slicedToArray(getSelectedParticipantId(channelId), 2)[1];
    if (id == null) {
      NONE = constants2.NONE;
    }
    const items = [NONE, tmp4];
    setSelectedParticipantId(channelId, items);
    const obj2 = obj(4948);
    const tmp8 = obj;
    if (obj2.isStreamKey(id)) {
      try {
        const tmp8Result = tmp8(4948);
        const ownerId = tmp8Result.decodeStreamKey(id).ownerId;
        const tmp10 = ownerId;
        if (ownerId === AuthenticationStore.getId()) {
          const items1 = [channelId];
          updateParticipant(tmp10, items1);
        }
      } catch (tmp15) {
        const _HermesInternal = HermesInternal;
        obj.warn("INVALID STREAM KEY FORMAT " + id, tmp15);
      }
      if (!hasVideo(obj)) {
        closure_32[channelId] = false;
      }
    }
  },
  CHANNEL_RTC_POPOUT_PARTICIPANT: function handlePopOutParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    if (channel != null) {
      channel.isDM();
    }
    let tmp4 = closure_28[channelId];
    if (tmp4 == null) {
      const items = [tmp3, tmp2.NONE];
      tmp4 = items;
    }
    if (_slicedToArray(tmp4, 1)[0] === participantId) {
      setSelectedParticipantId(channelId, null);
    }
    let obj2 = closure_27[channelId];
    if (null == obj2) {
      const self = this;
      const self2 = this;
      const tmp11 = new ChannelRTCParticipantsDefault(channelId);
      tmp7[channelId] = tmp11;
      obj2 = tmp11;
    }
    const participant = obj2.getParticipant(participantId);
    const tmp14 = null != participant && participant.type !== constants.ACTIVITY;
    if (tmp14) {
      const result = obj2.updateParticipantPoppedOut(participantId, true);
      const items1 = [channelId];
      const id = participant.user.id;
      const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
      const reduced = items1.reduce(function (acc, item) {
        let tmp = item;
        let tmp3 = closure_2_27[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f89663(tmp3)) {
          obj = closure_2_27[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_9.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              const hasEmbeddedActivityResult =
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
                obj.hasEmbeddedActivity();
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_30[tmp];
                delete closure_2_31[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = closure_2_27[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp =
                  type.type === constants.STREAM &&
                  null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(
                      obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO),
                      1,
                    )[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find(
                      (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                    );
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_9.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_28[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = constants2.NONE;
                  }
                }
              }
              const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_40(item, items1);
              flag = true;
            }
          }
          closure_2_40(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  CHANNEL_RTC_RETURN_PARTICIPANT: function handleReturnParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    obj = closure_27[channelId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp5;
      obj = tmp5;
    }
    const result = obj.updateParticipantPoppedOut(participantId, false);
    const participant = obj.getParticipant(participantId);
    const tmp9 = null != participant && participant.type !== constants.ACTIVITY;
    if (tmp9) {
      const items = [channelId];
      const id = participant.user.id;
      const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
      const reduced = items.reduce(function (acc, item) {
        let tmp = item;
        let tmp3 = closure_2_27[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f89663(tmp3)) {
          obj = closure_2_27[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_9.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              const hasEmbeddedActivityResult =
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
                obj.hasEmbeddedActivity();
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_30[tmp];
                delete closure_2_31[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = closure_2_27[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp =
                  type.type === constants.STREAM &&
                  null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(
                      obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO),
                      1,
                    )[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find(
                      (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                    );
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_9.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_28[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = constants2.NONE;
                  }
                }
              }
              const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_40(item, items1);
              flag = true;
            }
          }
          closure_2_40(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function handleCallLayout(channelId) {
    let appContext;
    let layout;
    channelId = channelId.channelId;
    obj = {};
    ({ layout, appContext } = channelId);
    const merged = Object.assign(closure_31[channelId]);
    obj[appContext] = layout;
    closure_31[channelId] = obj;
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function handleUpdateParticipantsOpen(channelId) {
    closure_32[channelId.channelId] = channelId.participantsOpen;
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function handleUpdateVoiceParticipantsHidden(channelId) {
    voiceParticipantsHidden[channelId.channelId] = channelId.voiceParticipantsHidden;
  },
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function handleUpdateStageStreamSize(channelId) {
    closure_34[channelId.channelId] = channelId.large;
  },
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function handleUpdateStageVideoLimitBoostUpsellDismissed(
    channelId,
  ) {
    closure_36[channelId.channelId] = channelId.dismissed;
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(channelId) {
    let f89663;
    channelId = channelId.channelId;
    const selfStreamHidden = channelId.selfStreamHidden;
    const id = AuthenticationStore.getId();
    if (selfStreamHidden) {
      const channel = ChannelStore.getChannel(channelId);
      if (channel != null) {
        channel.isDM();
      }
      let tmp8 = closure_28[channelId];
      if (tmp8 == null) {
        const items = [tmp6, tmp5.NONE];
        tmp8 = items;
      }
      const first = _slicedToArray(tmp8, 1)[0];
      const obj3 = f89663(4948);
      const tmp12 = obj3.isStreamKey(first) && first.includes(id);
      if (tmp12) {
        setSelectedParticipantId(channelId, null);
      }
    }
    const items1 = [channelId];
    f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
    const reduced = items1.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    channelId = channelId.channelId;
    if (channelId.chatOpen) {
      set.add(channelId);
    } else {
      set.delete(channelId);
    }
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(arg0) {
    let closure_129_0;
    const items = [];
    ({ channelId: arr[0], userId: closure_129_0 } = arg0);
    const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
    return items.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(arg0) {
    let closure_129_0;
    const items = [];
    ({ channelId: arr[0], userId: closure_129_0 } = arg0);
    const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
    return items.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleMediaEngineSetLocalVideoDisabled(userId) {
    userId = userId.userId;
    const f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
    if (closure_25 !== undefined) {
      return closure_25.reduce(function (acc, item) {
        let tmp = item;
        let tmp3 = closure_2_27[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f89663(tmp3)) {
          obj = closure_2_27[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_9.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              const hasEmbeddedActivityResult =
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
                obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
                obj.hasEmbeddedActivity();
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_30[tmp];
                delete closure_2_31[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = closure_2_27[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[16])(item);
            closure_2_27[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp =
                  type.type === constants.STREAM &&
                  null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(
                      obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO),
                      1,
                    )[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find(
                      (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                    );
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_9.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_28[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 =
                      participant.type === constants.STREAM &&
                      null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = constants2.NONE;
                  }
                }
              }
              const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_40(item, items1);
              flag = true;
            }
          }
          closure_2_40(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function handleVideoSourceQuality(channelId) {
    let closure_129_0;
    let closure_129_1;
    let closure_129_2;
    ({ senderUserId: closure_129_0, maxResolution: closure_129_1, maxFrameRate: closure_129_2 } = channelId);
    const items = [channelId.channelId];
    const f89672 = (updateParticipantQuality) =>
      updateParticipantQuality.updateParticipantQuality(closure_1_0, closure_1_1, closure_1_2);
    return items.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    let closure_129_0;
    let f89663;
    streamKey = streamKey.streamKey;
    obj = f89663(4948);
    const items = [];
    ({ channelId: arr[0], ownerId: closure_129_0 } = obj.decodeStreamKey(streamKey));
    f89663 = (dependencyMap) => dependencyMap.updateParticipant(f89663);
    obj.decodeStreamKey(streamKey);
    return items.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  SPEAKING: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: handleSpeaking,
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange() {
    let id;
    const f89673 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(id.getId());
    return closure_25.reduce(function (acc, item) {
      let tmp = item;
      let tmp3 = closure_2_27[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[16])(item);
        closure_2_27[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f89663(tmp3)) {
        obj = closure_2_27[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_9.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            const hasEmbeddedActivityResult =
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0 ||
              obj.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0 ||
              obj.hasEmbeddedActivity();
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_30[tmp];
              delete closure_2_31[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = closure_2_27[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[16])(item);
          closure_2_27[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp =
                type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[18])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(closure_2_0(closure_2_2[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find(
                    (type) => type.type === constants.USER && type.id !== id1 && !type.ringing,
                  );
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_9.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_28[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 =
                    participant.type === constants.STREAM &&
                    null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = constants2.NONE;
                }
              }
            }
            const tmp48 = id2 === constants2.NONE && null != found && true === closure_2_35[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_40(item, items1);
            flag = true;
          }
        }
        closure_2_40(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    let tmp = items;
    const arr2 = items(12);
    const item = arr2.forEach(closure_25, (arg0) => {
      const channel = ChannelStore.getChannel(arg0);
      const tmp = null != channel && channel.getGuildId() !== guild.id;
      if (!tmp) {
        items.push(arg0);
      }
    });
    if (0 === items.length) {
      return false;
    } else {
      const tmpResult = tmp(12);
      const item1 = tmpResult.forEach(items, (arg0) => {
        delete closure_1_27[arg0];
        delete closure_1_28[arg0];
        delete closure_1_30[arg0];
        delete closure_1_31[arg0];
        delete closure_1_35[arg0];
      });
    }
  },
};
const channelRTCStore = new ChannelRTCStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/calls/ChannelRTCStore.tsx");

export default channelRTCStore;
export const NO_PARTICIPANTS = frozen;

// discord_app/modules/calls/ChannelRTCStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildVoiceRingingExperimentDefault from "../voice_calls/GuildVoiceRingingExperiment.tsx";
import ChannelRTCParticipants from "ChannelRTCParticipants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
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

const ChannelRTCParticipantsDefault = ChannelRTCParticipants;

require = fn;
function getParticipants(arg0) {
  let tmp2 = dependencyMap[arg0];
  if (null == tmp2) {
    const tmp8 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp8;
    tmp2 = tmp8;
  }
  return tmp2;
}
function updateParticipant(arg0) {
  const f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
  return arr.reduce((acc, item) => {
    let tmp4 = dependencyMap2[item];
    if (null == tmp4) {
      const tmp10 = new ChannelRTCParticipantsDefault(item);
      dependencyMap2[item] = tmp10;
      tmp4 = tmp10;
    }
    let flag = acc;
    if (f78244(tmp4)) {
      obj = dependencyMap2[item];
      if (null == obj) {
        const tmp17 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = ChannelStore.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = constants3;
            let VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp24 = constants3;
      }
      id = id.getId();
      let obj2 = dependencyMap2[item];
      if (null == obj2) {
        const tmp36 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            _modDef38(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
              id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === constants.USER;
                if (tmp) {
                  tmp = type.id !== id;
                }
                if (tmp) {
                  tmp = !type.ringing;
                }
                return tmp;
              });
              let id1;
              if (found1 != null) {
                id1 = found1.id;
              }
              if (id1 == null) {
                id1 = id;
              }
              id = id1;
              const toArrayResult1 = obj2.toArray();
            }
          }
          const channel1 = ChannelStore.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_2_28[item];
          if (tmp49 == null) {
            const items = [tmp47, constants2.NONE];
            tmp49 = items;
          }
          const first = _slicedToArray(tmp49, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === constants.STREAM;
                if (tmp55) {
                  tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = constants2.NONE;
              }
            }
          }
          let tmp57 = id2 === constants2.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_2_35[item];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          setSelectedParticipantId(item, items1);
          flag = true;
          const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      setSelectedParticipantId(item, null);
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
  let tmp4 = dependencyMap2[arg0];
  if (tmp4 == null) {
    const items = [tmp3, tmp2.NONE];
    tmp4 = items;
  }
  return tmp4;
}
function setSelectedParticipantId(channelId, items) {
  if (null == dependencyMap3[channelId]) {
    dependencyMap3[channelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
  }
  const nowResult = performance.now();
  let tmp7 = null != dependencyMap2[channelId];
  if (tmp7) {
    tmp7 = _slicedToArray(dependencyMap2[channelId], 1)[0] !== constants2.NONE;
  }
  if (dependencyMap3[channelId].lastUpdate > 0) {
    let str = "gridDurationMs";
    const diff = nowResult - tmp4.lastUpdate;
    if (tmp7) {
      str = "focusDurationMs";
    }
    tmp4[str] = tmp4[str] + diff;
  }
  dependencyMap3[channelId].lastUpdate = nowResult;
  let tmp11 = null != dependencyMap2[channelId];
  if (tmp11) {
    tmp11 = _slicedToArray(dependencyMap2[channelId], 1)[0] !== constants2.NONE;
  }
  if (null == items) {
    delete tmp2[tmp];
  } else {
    dependencyMap2[channelId] = items;
  }
  let tmp14 = null != dependencyMap2[channelId];
  if (tmp14) {
    tmp14 = _slicedToArray(dependencyMap2[channelId], 1)[0] !== constants2.NONE;
  }
  if (tmp11 !== tmp14) {
    dependencyMap3[channelId].toggleCount = dependencyMap3[channelId].toggleCount + 1;
  }
}
function hasVideo(size) {
  let hasEmbeddedActivityResult = size.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = size.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
  }
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = size.hasEmbeddedActivity();
  }
  return hasEmbeddedActivityResult;
}
function clearChannel(arg0) {
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp[tmp2];
}
function handleRebuildActiveChannels() {
  const items = [];
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    items.push(channelId);
  }
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
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
    if (voiceStateForSession != null) {
      channelId2 = voiceStateForSession.channelId;
    }
    items.push(channelId2);
  }
  const fn = (rebuild) => rebuild.rebuild();
  tmp4 = null == voiceChannelId || items.includes(voiceChannelId);
  const item = _modDef12.difference(items, items).forEach(clearChannel);
  const differenceResult = _modDef12.difference(items, items);
  let differenceResult1 = _modDef12.difference(items, items);
  if (differenceResult1 === undefined) {
    differenceResult1 = items;
  }
  return differenceResult1.reduce((acc, item) => {
    let tmp4 = dependencyMap2[item];
    if (null == tmp4) {
      const tmp10 = new ChannelRTCParticipantsDefault(item);
      dependencyMap2[item] = tmp10;
      tmp4 = tmp10;
    }
    let flag = acc;
    if (f78244(tmp4)) {
      obj = dependencyMap2[item];
      if (null == obj) {
        const tmp17 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = ChannelStore.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = constants3;
            let VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp24 = constants3;
      }
      id = id.getId();
      let obj2 = dependencyMap2[item];
      if (null == obj2) {
        const tmp36 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            _modDef38(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
              id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === constants.USER;
                if (tmp) {
                  tmp = type.id !== id;
                }
                if (tmp) {
                  tmp = !type.ringing;
                }
                return tmp;
              });
              let id1;
              if (found1 != null) {
                id1 = found1.id;
              }
              if (id1 == null) {
                id1 = id;
              }
              id = id1;
              const toArrayResult1 = obj2.toArray();
            }
          }
          const channel1 = ChannelStore.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_2_28[item];
          if (tmp49 == null) {
            const items = [tmp47, constants2.NONE];
            tmp49 = items;
          }
          const first = _slicedToArray(tmp49, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === constants.STREAM;
                if (tmp55) {
                  tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = constants2.NONE;
              }
            }
          }
          let tmp57 = id2 === constants2.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_2_35[item];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          setSelectedParticipantId(item, items1);
          flag = true;
          const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      setSelectedParticipantId(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleEmbeddedActivityChange() {
  const f78246 = (updateEmbeddedActivities) => updateEmbeddedActivities.updateEmbeddedActivities();
  return closure_25.reduce((acc, item) => {
    let tmp4 = dependencyMap2[item];
    if (null == tmp4) {
      const tmp10 = new ChannelRTCParticipantsDefault(item);
      dependencyMap2[item] = tmp10;
      tmp4 = tmp10;
    }
    let flag = acc;
    if (f78244(tmp4)) {
      obj = dependencyMap2[item];
      if (null == obj) {
        const tmp17 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = ChannelStore.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = constants3;
            let VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp24 = constants3;
      }
      id = id.getId();
      let obj2 = dependencyMap2[item];
      if (null == obj2) {
        const tmp36 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            _modDef38(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
              id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === constants.USER;
                if (tmp) {
                  tmp = type.id !== id;
                }
                if (tmp) {
                  tmp = !type.ringing;
                }
                return tmp;
              });
              let id1;
              if (found1 != null) {
                id1 = found1.id;
              }
              if (id1 == null) {
                id1 = id;
              }
              id = id1;
              const toArrayResult1 = obj2.toArray();
            }
          }
          const channel1 = ChannelStore.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_2_28[item];
          if (tmp49 == null) {
            const items = [tmp47, constants2.NONE];
            tmp49 = items;
          }
          const first = _slicedToArray(tmp49, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === constants.STREAM;
                if (tmp55) {
                  tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = constants2.NONE;
              }
            }
          }
          let tmp57 = id2 === constants2.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_2_35[item];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          setSelectedParticipantId(item, items1);
          flag = true;
          const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      setSelectedParticipantId(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleSpeaking(arg0) {
  const f78247 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(f78247);
  return closure_25.reduce((acc, item) => {
    let tmp4 = dependencyMap2[item];
    if (null == tmp4) {
      const tmp10 = new ChannelRTCParticipantsDefault(item);
      dependencyMap2[item] = tmp10;
      tmp4 = tmp10;
    }
    let flag = acc;
    if (f78244(tmp4)) {
      obj = dependencyMap2[item];
      if (null == obj) {
        const tmp17 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = ChannelStore.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = constants3;
            let VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp24 = constants3;
      }
      id = id.getId();
      let obj2 = dependencyMap2[item];
      if (null == obj2) {
        const tmp36 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            _modDef38(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
              id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === constants.USER;
                if (tmp) {
                  tmp = type.id !== id;
                }
                if (tmp) {
                  tmp = !type.ringing;
                }
                return tmp;
              });
              let id1;
              if (found1 != null) {
                id1 = found1.id;
              }
              if (id1 == null) {
                id1 = id;
              }
              id = id1;
              const toArrayResult1 = obj2.toArray();
            }
          }
          const channel1 = ChannelStore.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_2_28[item];
          if (tmp49 == null) {
            const items = [tmp47, constants2.NONE];
            tmp49 = items;
          }
          const first = _slicedToArray(tmp49, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === constants.STREAM;
                if (tmp55) {
                  tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = constants2.NONE;
              }
            }
          }
          let tmp57 = id2 === constants2.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_2_35[item];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          setSelectedParticipantId(item, items1);
          flag = true;
          const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      setSelectedParticipantId(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleUserUpdate(user) {
  const f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
  if (closure_25 !== undefined) {
    return closure_25.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
        flag = true;
      }
      return flag;
    }, false);
  }
}
function handleCallUpdate(channelId) {
  const items = [channelId.channelId];
  const f78248 = (rebuild) => rebuild.rebuild();
  return items.reduce((acc, item) => {
    let tmp4 = dependencyMap2[item];
    if (null == tmp4) {
      const tmp10 = new ChannelRTCParticipantsDefault(item);
      dependencyMap2[item] = tmp10;
      tmp4 = tmp10;
    }
    let flag = acc;
    if (f78244(tmp4)) {
      obj = dependencyMap2[item];
      if (null == obj) {
        const tmp17 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = ChannelStore.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = constants3;
            let VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp24 = constants3;
      }
      id = id.getId();
      let obj2 = dependencyMap2[item];
      if (null == obj2) {
        const tmp36 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            _modDef38(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
              id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === constants.USER;
                if (tmp) {
                  tmp = type.id !== id;
                }
                if (tmp) {
                  tmp = !type.ringing;
                }
                return tmp;
              });
              let id1;
              if (found1 != null) {
                id1 = found1.id;
              }
              if (id1 == null) {
                id1 = id;
              }
              id = id1;
              const toArrayResult1 = obj2.toArray();
            }
          }
          const channel1 = ChannelStore.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_2_28[item];
          if (tmp49 == null) {
            const items = [tmp47, constants2.NONE];
            tmp49 = items;
          }
          const first = _slicedToArray(tmp49, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === constants.STREAM;
                if (tmp55) {
                  tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = constants2.NONE;
              }
            }
          }
          let tmp57 = id2 === constants2.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_2_35[item];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          setSelectedParticipantId(item, items1);
          flag = true;
          const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      setSelectedParticipantId(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleChannelDelete(channel) {
  set.delete(channel.channel.id);
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp[tmp2];
}
function handleStreamClose(streamKey) {
  obj = f78244(4612);
  const items = [];
  ({ channelId: arr[0], ownerId: f78244 } = f78244(4612).decodeStreamKey(streamKey.streamKey));
  f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
  return items.reduce((acc, item) => {
    let tmp4 = dependencyMap2[item];
    if (null == tmp4) {
      const tmp10 = new ChannelRTCParticipantsDefault(item);
      dependencyMap2[item] = tmp10;
      tmp4 = tmp10;
    }
    let flag = acc;
    if (f78244(tmp4)) {
      obj = dependencyMap2[item];
      if (null == obj) {
        const tmp17 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = ChannelStore.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = constants3;
            let VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_2_30[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp24 = constants3;
      }
      id = id.getId();
      let obj2 = dependencyMap2[item];
      if (null == obj2) {
        const tmp36 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            _modDef38(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
              id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === constants.USER;
                if (tmp) {
                  tmp = type.id !== id;
                }
                if (tmp) {
                  tmp = !type.ringing;
                }
                return tmp;
              });
              let id1;
              if (found1 != null) {
                id1 = found1.id;
              }
              if (id1 == null) {
                id1 = id;
              }
              id = id1;
              const toArrayResult1 = obj2.toArray();
            }
          }
          const channel1 = ChannelStore.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_2_28[item];
          if (tmp49 == null) {
            const items = [tmp47, constants2.NONE];
            tmp49 = items;
          }
          const first = _slicedToArray(tmp49, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === constants.STREAM;
                if (tmp55) {
                  tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = constants2.NONE;
              }
            }
          }
          let tmp57 = id2 === constants2.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_2_35[item];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          setSelectedParticipantId(item, items1);
          flag = true;
          const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      setSelectedParticipantId(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
const CallConstants = fn(4581);
({
  ParticipantTypes: closure_16,
  ParticipantSelectionTypes: closure_17,
  isStreamParticipant: closure_18,
} = CallConstants);
const Constants = fn(1074);
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
const set = new Set();
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let closure_30 = {};
const dependencyMap4 = {};
let closure_32 = {};
const voiceParticipantsHidden = {};
let closure_34 = {};
let closure_35 = {};
let closure_36 = {};
const PersistedStore = initializeDefault.PersistedStore;
class ChannelRTCStore extends PersistedStore {}
const prototype = ChannelRTCStore.prototype;
prototype["initialize"] = function initialize(voiceParticipantsHidden) {
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
    if (voiceParticipantsHidden != null) {
      prop1 = voiceParticipantsHidden.voiceParticipantsHidden;
    }
    const merged = Object.assign(closure_33, prop1);
  }
};
prototype["getState"] = function getState() {
  return { voiceParticipantsHidden };
};
prototype["getParticipantsVersion"] = function getParticipantsVersion(arg0) {
  let tmp2 = dependencyMap[arg0];
  if (null == tmp2) {
    const tmp8 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp8;
    tmp2 = tmp8;
  }
  return tmp2.version;
};
prototype["getParticipants"] = function getParticipants(arg0) {
  obj = dependencyMap[arg0];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray();
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getSpeakingParticipants"] = function getSpeakingParticipants(id) {
  obj = dependencyMap[id];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(id);
    tmp[id] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.SPEAKING);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getFilteredParticipants"] = function getFilteredParticipants(arg0) {
  obj = dependencyMap[arg0];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp7;
    obj = tmp7;
  }
  if (voiceParticipantsHidden[arg0] != null) {
    if (tmp9) {
      let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.FILTERED);
    }
    return toArrayResult;
  }
  toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.NOT_POPPED_OUT);
};
prototype["getVideoParticipants"] = function getVideoParticipants(channelId) {
  obj = dependencyMap[channelId];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(channelId);
    tmp[channelId] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getStreamParticipants"] = function getStreamParticipants(id) {
  obj = dependencyMap[id];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(id);
    tmp[id] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getActivityParticipants"] = function getActivityParticipants(channelId) {
  obj = dependencyMap[channelId];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(channelId);
    tmp[channelId] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.ACTIVITY);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getParticipant"] = function getParticipant(arg0, arg1) {
  obj = dependencyMap[arg0];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp7;
    obj = tmp7;
  }
  return obj.getParticipant(arg1);
};
prototype["getUserParticipantCount"] = function getUserParticipantCount(id) {
  obj = dependencyMap[id];
  if (null == obj) {
    const tmp7 = new ChannelRTCParticipantsDefault(id);
    tmp[id] = tmp7;
    obj = tmp7;
  }
  const diff = obj.size() - obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
  return diff - obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.ACTIVITY);
};
prototype["getParticipantsOpen"] = function getParticipantsOpen(arg0) {
  let flag = closure_32[arg0];
  if (flag == null) {
    flag = true;
  }
  return flag;
};
prototype["getVoiceParticipantsHidden"] = function getVoiceParticipantsHidden(channelId) {
  let flag = voiceParticipantsHidden[channelId];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getSelectedParticipantId"] = function getSelectedParticipantId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  if (channel != null) {
    channel.isDM();
  }
  let tmp4 = dependencyMap2[arg0];
  if (tmp4 == null) {
    const items = [tmp3, constants2.NONE];
    tmp4 = items;
  }
  [tmp6, tmp7] = _slicedToArray(tmp4, 2);
  let tmp8 = null;
  if (tmp6 !== constants2.NONE) {
    if (tmp6 === constants2.AUTO) {
      if (tmp7 !== constants2.NONE) {
      }
    }
    tmp8 = tmp6;
  }
  return tmp8;
};
prototype["getSelectedParticipant"] = function getSelectedParticipant(id) {
  const selectedParticipantId = this.getSelectedParticipantId(id);
  let participant = null;
  if (null != selectedParticipantId) {
    obj = dependencyMap[id];
    if (null == obj) {
      const tmp9 = new ChannelRTCParticipantsDefault(id);
      tmp3[id] = tmp9;
      obj = tmp9;
    }
    participant = obj.getParticipant(selectedParticipantId);
  }
  return participant;
};
prototype["getSelectedParticipantStats"] = function getSelectedParticipantStats(arg0) {
  if (null == dependencyMap3[arg0]) {
    obj = {};
  } else {
    obj = { view_mode_grid_duration_ms: null, view_mode_focus_duration_ms: null, view_mode_toggle_count: null };
    const _Math = Math;
    obj.view_mode_grid_duration_ms = Math.floor(tmp.gridDurationMs);
    const _Math2 = Math;
    obj.view_mode_focus_duration_ms = Math.floor(tmp.focusDurationMs);
    obj.view_mode_toggle_count = tmp.toggleCount;
  }
  return obj;
};
prototype["getGuildRingingUsers"] = function getGuildRingingUsers(id) {
  let tmp2 = dependencyMap[id];
  if (null == tmp2) {
    const tmp8 = new ChannelRTCParticipantsDefault(id);
    tmp[id] = tmp8;
    tmp2 = tmp8;
  }
  return tmp2.guildRingingUsers;
};
prototype["getMode"] = function getMode(arg0) {
  if (closure_30[arg0] != null) {
    return tmp;
  } else {
    const channel = ChannelStore.getChannel(arg0);
    let isGuildVocalOrThreadResult;
    if (channel != null) {
      isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
    }
    Boolean(isGuildVocalOrThreadResult) ? constants.VIDEO : constants.VOICE;
  }
};
prototype["getLayout"] = function getLayout(arg0) {
  if (arg1 === undefined) {
    const APP = constants5.APP;
  }
  return constants3.NORMAL;
};
prototype["getChatOpen"] = function getChatOpen(channelId) {
  return set.has(channelId);
};
prototype["getOpenChatChannelIds"] = function getOpenChatChannelIds() {
  return set;
};
prototype["isFullscreenInContext"] = function isFullscreenInContext() {
  let APP = arg0;
  if (arg0 === undefined) {
    APP = constants5.APP;
  }
  const values = Object.values(closure_31);
  return values.some((item) => item[APP] === constants3.FULL_SCREEN);
};
prototype["getStageStreamSize"] = function getStageStreamSize(arg0) {
  return closure_34[arg0];
};
prototype["getStageVideoLimitBoostUpsellDismissed"] = function getStageVideoLimitBoostUpsellDismissed(arg0) {
  return closure_36[arg0];
};
prototype["isParticipantPoppedOut"] = function isParticipantPoppedOut(global, id) {
  const participant = this.getParticipant(global, id);
  let tmp2 = null != participant;
  if (tmp2) {
    tmp2 = "isPoppedOut" in participant && participant.isPoppedOut;
    const tmp3 = "isPoppedOut" in participant && participant.isPoppedOut;
  }
  return tmp2;
};
ChannelRTCStore.displayName = "ChannelRTCStore";
ChannelRTCStore.persistKey = "ChannelRTCStore";
obj = {
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
    ({ channelId, currentVoiceChannelId } = arg0);
    let f78251;
    if (null != channelId) {
      delete tmp[tmp3];
    } else if (null != currentVoiceChannelId) {
      set.delete(currentVoiceChannelId);
      delete tmp[tmp2];
      if (null == dependencyMap3[currentVoiceChannelId]) {
        dependencyMap3[currentVoiceChannelId] = {
          gridDurationMs: 0,
          focusDurationMs: 0,
          toggleCount: 0,
          lastUpdate: 0,
        };
      }
      const _performance = performance;
      const nowResult = performance.now();
      let tmp8 = null != dependencyMap2[currentVoiceChannelId];
      if (tmp8) {
        tmp8 = _slicedToArray(tmp7[currentVoiceChannelId], 1)[0] !== constants2.NONE;
      }
      if (dependencyMap3[currentVoiceChannelId].lastUpdate > 0) {
        let str = "gridDurationMs";
        const diff = nowResult - tmp4.lastUpdate;
        if (tmp8) {
          str = "focusDurationMs";
        }
        tmp4[str] = tmp4[str] + diff;
      }
      dependencyMap3[currentVoiceChannelId].lastUpdate = nowResult;
    }
    let flag = false;
    if (channelId !== currentVoiceChannelId) {
      flag = false;
      if (null != currentVoiceChannelId) {
        let tmp14 = dependencyMap[currentVoiceChannelId];
        if (null == tmp14) {
          const tmp20 = new ChannelRTCParticipantsDefault(currentVoiceChannelId);
          tmp13[currentVoiceChannelId] = tmp20;
          tmp14 = tmp20;
        }
        const guildRingingUsers = tmp14.guildRingingUsers;
        const item = guildRingingUsers.forEach((item) => f78251.updateGuildRingingUsers(item, false));
        const items = [currentVoiceChannelId];
        f78251 = (rebuild) => rebuild.rebuild();
        flag = items.reduce((acc, item) => {
          let tmp4 = dependencyMap2[item];
          if (null == tmp4) {
            const tmp10 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp10;
            tmp4 = tmp10;
          }
          let flag = acc;
          if (f78244(tmp4)) {
            obj = dependencyMap2[item];
            if (null == obj) {
              const tmp17 = new ChannelRTCParticipantsDefault(item);
              dependencyMap2[item] = tmp17;
              obj = tmp17;
            }
            if (0 !== obj.size()) {
              const channel = ChannelStore.getChannel(item);
              let isGuildVocalOrThreadResult;
              if (channel != null) {
                isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
              }
              if (!Boolean(isGuildVocalOrThreadResult)) {
                let hasEmbeddedActivityResult =
                  obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
                }
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
                }
                if (!hasEmbeddedActivityResult) {
                  let tmp24 = constants3;
                  let VIDEO = constants3.VOICE;
                }
                if (VIDEO === tmp24.VOICE) {
                  delete tmp2[tmp];
                  delete tmp2[tmp];
                } else {
                  closure_2_30[item] = VIDEO;
                }
              }
              VIDEO = constants3.VIDEO;
              tmp24 = constants3;
            }
            id = id.getId();
            let obj2 = dependencyMap2[item];
            if (null == obj2) {
              const tmp36 = new ChannelRTCParticipantsDefault(item);
              dependencyMap2[item] = tmp36;
              obj2 = tmp36;
            }
            if (0 !== obj2.size()) {
              if (voiceChannelId.getVoiceChannelId() === item) {
                const NONE = constants2.NONE;
                const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                  let tmp = type.type === constants.STREAM;
                  if (tmp) {
                    tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                  }
                  return tmp;
                });
                if (null != found) {
                  _modDef38(found.type === constants.STREAM, "Impossible condition");
                  id = found.id;
                } else if (1 !== obj2.size()) {
                  if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                      .id;
                  } else {
                    const found1 = obj2.toArray().find((type) => {
                      let tmp = type.type === constants.USER;
                      if (tmp) {
                        tmp = type.id !== id;
                      }
                      if (tmp) {
                        tmp = !type.ringing;
                      }
                      return tmp;
                    });
                    let id1;
                    if (found1 != null) {
                      id1 = found1.id;
                    }
                    if (id1 == null) {
                      id1 = id;
                    }
                    id = id1;
                    const toArrayResult1 = obj2.toArray();
                  }
                }
                const channel1 = ChannelStore.getChannel(item);
                if (channel1 != null) {
                  channel1.isDM();
                }
                let tmp49 = closure_2_28[item];
                if (tmp49 == null) {
                  const items = [tmp47, constants2.NONE];
                  tmp49 = items;
                }
                const first = _slicedToArray(tmp49, 1)[0];
                let id2 = first;
                if (first !== constants2.AUTO) {
                  id2 = first;
                  if (first !== constants2.NONE) {
                    const participant = obj2.getParticipant(first);
                    let tmp53 = null == participant;
                    if (!tmp53) {
                      let tmp55 = participant.type === constants.STREAM;
                      if (tmp55) {
                        tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                      }
                      tmp53 = tmp55;
                    }
                    id2 = first;
                    if (tmp53) {
                      id2 = constants2.NONE;
                    }
                  }
                }
                let tmp57 = id2 === constants2.NONE && null != found;
                if (tmp57) {
                  tmp57 = true === closure_2_35[item];
                }
                if (tmp57) {
                  id2 = found.id;
                }
                const items1 = [id2, id];
                setSelectedParticipantId(item, items1);
                flag = true;
                const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
              }
            }
            setSelectedParticipantId(item, null);
            flag = true;
          }
          return flag;
        }, false);
      }
    }
    if (!flag) {
      flag = handleRebuildActiveChannels();
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const tmp = handleRebuildActiveChannels();
    if (null == channelId) {
      return tmp;
    } else if (null == channelId.messageId) {
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
    ({ voiceStates, initial: require } = arg0);
    return voiceStates.reduce((acc, item) => {
      ({ userId, channelId, guildId } = item);
      if (tmp) {
        obj = { guildId, location: "voice_status_update" };
        if (obj.getCurrentConfig(obj, { autoTrackExposure: false }).enabled) {
          let obj3 = dependencyMap2[channelId];
          if (null == obj3) {
            const tmp8 = new ChannelRTCParticipantsDefault(channelId);
            tmp4[channelId] = tmp8;
            obj3 = tmp8;
          }
          const result = obj3.updateGuildRingingUsers(userId, false);
        }
      }
      if (require) {
        if (null != channelId) {
          let tmp12 = acc;
        }
        return tmp12;
      }
      let arr = closure_25;
      const f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
      if (closure_25 === undefined) {
        arr = closure_25;
      }
      tmp12 =
        arr.reduce((acc, item) => {
          let tmp4 = dependencyMap2[item];
          if (null == tmp4) {
            const tmp10 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp10;
            tmp4 = tmp10;
          }
          let flag = acc;
          if (f78244(tmp4)) {
            obj = dependencyMap2[item];
            if (null == obj) {
              const tmp17 = new ChannelRTCParticipantsDefault(item);
              dependencyMap2[item] = tmp17;
              obj = tmp17;
            }
            if (0 !== obj.size()) {
              const channel = ChannelStore.getChannel(item);
              let isGuildVocalOrThreadResult;
              if (channel != null) {
                isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
              }
              if (!Boolean(isGuildVocalOrThreadResult)) {
                let hasEmbeddedActivityResult =
                  obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
                }
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
                }
                if (!hasEmbeddedActivityResult) {
                  let tmp24 = constants3;
                  let VIDEO = constants3.VOICE;
                }
                if (VIDEO === tmp24.VOICE) {
                  delete tmp2[tmp];
                  delete tmp2[tmp];
                } else {
                  closure_2_30[item] = VIDEO;
                }
              }
              VIDEO = constants3.VIDEO;
              tmp24 = constants3;
            }
            id = id.getId();
            let obj2 = dependencyMap2[item];
            if (null == obj2) {
              const tmp36 = new ChannelRTCParticipantsDefault(item);
              dependencyMap2[item] = tmp36;
              obj2 = tmp36;
            }
            if (0 !== obj2.size()) {
              if (voiceChannelId.getVoiceChannelId() === item) {
                const NONE = constants2.NONE;
                const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                  let tmp = type.type === constants.STREAM;
                  if (tmp) {
                    tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                  }
                  return tmp;
                });
                if (null != found) {
                  _modDef38(found.type === constants.STREAM, "Impossible condition");
                  id = found.id;
                } else if (1 !== obj2.size()) {
                  if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                      .id;
                  } else {
                    const found1 = obj2.toArray().find((type) => {
                      let tmp = type.type === constants.USER;
                      if (tmp) {
                        tmp = type.id !== id;
                      }
                      if (tmp) {
                        tmp = !type.ringing;
                      }
                      return tmp;
                    });
                    let id1;
                    if (found1 != null) {
                      id1 = found1.id;
                    }
                    if (id1 == null) {
                      id1 = id;
                    }
                    id = id1;
                    const toArrayResult1 = obj2.toArray();
                  }
                }
                const channel1 = ChannelStore.getChannel(item);
                if (channel1 != null) {
                  channel1.isDM();
                }
                let tmp49 = closure_2_28[item];
                if (tmp49 == null) {
                  const items = [tmp47, constants2.NONE];
                  tmp49 = items;
                }
                const first = _slicedToArray(tmp49, 1)[0];
                let id2 = first;
                if (first !== constants2.AUTO) {
                  id2 = first;
                  if (first !== constants2.NONE) {
                    const participant = obj2.getParticipant(first);
                    let tmp53 = null == participant;
                    if (!tmp53) {
                      let tmp55 = participant.type === constants.STREAM;
                      if (tmp55) {
                        tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                      }
                      tmp53 = tmp55;
                    }
                    id2 = first;
                    if (tmp53) {
                      id2 = constants2.NONE;
                    }
                  }
                }
                let tmp57 = id2 === constants2.NONE && null != found;
                if (tmp57) {
                  tmp57 = true === closure_2_35[item];
                }
                if (tmp57) {
                  id2 = found.id;
                }
                const items1 = [id2, id];
                setSelectedParticipantId(item, items1);
                flag = true;
                const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
              }
            }
            setSelectedParticipantId(item, null);
            flag = true;
          }
          return flag;
        }, false) || acc;
      tmp = null != guildId && null != channelId;
      const tmp13 =
        arr.reduce((acc, item) => {
          let tmp4 = dependencyMap2[item];
          if (null == tmp4) {
            const tmp10 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp10;
            tmp4 = tmp10;
          }
          let flag = acc;
          if (f78244(tmp4)) {
            obj = dependencyMap2[item];
            if (null == obj) {
              const tmp17 = new ChannelRTCParticipantsDefault(item);
              dependencyMap2[item] = tmp17;
              obj = tmp17;
            }
            if (0 !== obj.size()) {
              const channel = ChannelStore.getChannel(item);
              let isGuildVocalOrThreadResult;
              if (channel != null) {
                isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
              }
              if (!Boolean(isGuildVocalOrThreadResult)) {
                let hasEmbeddedActivityResult =
                  obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
                }
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
                }
                if (!hasEmbeddedActivityResult) {
                  let tmp24 = constants3;
                  let VIDEO = constants3.VOICE;
                }
                if (VIDEO === tmp24.VOICE) {
                  delete tmp2[tmp];
                  delete tmp2[tmp];
                } else {
                  closure_2_30[item] = VIDEO;
                }
              }
              VIDEO = constants3.VIDEO;
              tmp24 = constants3;
            }
            id = id.getId();
            let obj2 = dependencyMap2[item];
            if (null == obj2) {
              const tmp36 = new ChannelRTCParticipantsDefault(item);
              dependencyMap2[item] = tmp36;
              obj2 = tmp36;
            }
            if (0 !== obj2.size()) {
              if (voiceChannelId.getVoiceChannelId() === item) {
                const NONE = constants2.NONE;
                const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                  let tmp = type.type === constants.STREAM;
                  if (tmp) {
                    tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                  }
                  return tmp;
                });
                if (null != found) {
                  _modDef38(found.type === constants.STREAM, "Impossible condition");
                  id = found.id;
                } else if (1 !== obj2.size()) {
                  if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                      .id;
                  } else {
                    const found1 = obj2.toArray().find((type) => {
                      let tmp = type.type === constants.USER;
                      if (tmp) {
                        tmp = type.id !== id;
                      }
                      if (tmp) {
                        tmp = !type.ringing;
                      }
                      return tmp;
                    });
                    let id1;
                    if (found1 != null) {
                      id1 = found1.id;
                    }
                    if (id1 == null) {
                      id1 = id;
                    }
                    id = id1;
                    const toArrayResult1 = obj2.toArray();
                  }
                }
                const channel1 = ChannelStore.getChannel(item);
                if (channel1 != null) {
                  channel1.isDM();
                }
                let tmp49 = closure_2_28[item];
                if (tmp49 == null) {
                  const items = [tmp47, constants2.NONE];
                  tmp49 = items;
                }
                const first = _slicedToArray(tmp49, 1)[0];
                let id2 = first;
                if (first !== constants2.AUTO) {
                  id2 = first;
                  if (first !== constants2.NONE) {
                    const participant = obj2.getParticipant(first);
                    let tmp53 = null == participant;
                    if (!tmp53) {
                      let tmp55 = participant.type === constants.STREAM;
                      if (tmp55) {
                        tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                      }
                      tmp53 = tmp55;
                    }
                    id2 = first;
                    if (tmp53) {
                      id2 = constants2.NONE;
                    }
                  }
                }
                let tmp57 = id2 === constants2.NONE && null != found;
                if (tmp57) {
                  tmp57 = true === closure_2_35[item];
                }
                if (tmp57) {
                  id2 = found.id;
                }
                const items1 = [id2, id];
                setSelectedParticipantId(item, items1);
                flag = true;
                const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
              }
            }
            setSelectedParticipantId(item, null);
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
        if (dependencyMap4[originChannelId] != null) {
          NORMAL = tmp3[constants5.APP];
        }
        if (NORMAL == null) {
          NORMAL = constants3.NORMAL;
        }
        obj = {};
        obj[constants5.APP] = NORMAL;
        dependencyMap4[channel.id] = obj;
        return true;
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  CALL_CREATE: handleCallUpdate,
  CALL_UPDATE: handleCallUpdate,
  CALL_DELETE: function handleCallDelete(arg0) {
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp[tmp2];
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleSelectParticipant(arg0) {
    ({ channelId, id } = arg0);
    obj = getParticipants(channelId);
    if (null == id) {
      const item = obj.toArray(obj(9476).ChannelRTCParticipantsIndexes.STREAM).forEach((user) => {
        if (collapsedCategories(user)) {
          obj.updateParticipant(user.user.id);
        }
      });
      const toArrayResult = obj.toArray(obj(9476).ChannelRTCParticipantsIndexes.STREAM);
    }
    let NONE = id;
    if (id == null) {
      NONE = constants2.NONE;
    }
    const items = [NONE, _slicedToArray(getSelectedParticipantId(channelId), 2)[1]];
    setSelectedParticipantId(channelId, items);
    if (obj2.isStreamKey(id)) {
      try {
        const ownerId = tmp8(4612).decodeStreamKey(id).ownerId;
        if (ownerId === AuthenticationStore.getId()) {
          const items1 = [channelId];
          updateParticipant(tmp10, items1);
        }
        if (!hasVideo(obj)) {
          closure_32[channelId] = false;
        }
        tmp10 = ownerId;
        const tmp8Result = tmp8(4612);
      } catch (tmp15) {
        const _HermesInternal = HermesInternal;
        obj.warn("INVALID STREAM KEY FORMAT " + tmp, tmp15);
      }
    }
    obj2 = obj(4612);
    tmp8 = obj;
  },
  CHANNEL_RTC_POPOUT_PARTICIPANT: function handlePopOutParticipant(arg0) {
    ({ channelId, participantId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    if (channel != null) {
      channel.isDM();
    }
    let tmp4 = dependencyMap2[channelId];
    if (tmp4 == null) {
      const items = [tmp3, tmp2.NONE];
      tmp4 = items;
    }
    if (_slicedToArray(tmp4, 1)[0] === participantId) {
      setSelectedParticipantId(channelId, null);
    }
    let obj2 = dependencyMap[channelId];
    if (null == obj2) {
      const tmp13 = new ChannelRTCParticipantsDefault(channelId);
      tmp7[channelId] = tmp13;
      obj2 = tmp13;
    }
    const participant = obj2.getParticipant(participantId);
    let tmp16 = null != participant;
    if (tmp16) {
      tmp16 = participant.type !== constants.ACTIVITY;
    }
    if (tmp16) {
      const result = obj2.updateParticipantPoppedOut(participantId, true);
      const items1 = [channelId];
      const f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
      const reduced = items1.reduce((acc, item) => {
        let tmp4 = dependencyMap2[item];
        if (null == tmp4) {
          const tmp10 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp10;
          tmp4 = tmp10;
        }
        let flag = acc;
        if (f78244(tmp4)) {
          obj = dependencyMap2[item];
          if (null == obj) {
            const tmp17 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = ChannelStore.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = constants3;
                let VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp24 = constants3;
          }
          id = id.getId();
          let obj2 = dependencyMap2[item];
          if (null == obj2) {
            const tmp36 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                _modDef38(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === constants.USER;
                    if (tmp) {
                      tmp = type.id !== id;
                    }
                    if (tmp) {
                      tmp = !type.ringing;
                    }
                    return tmp;
                  });
                  let id1;
                  if (found1 != null) {
                    id1 = found1.id;
                  }
                  if (id1 == null) {
                    id1 = id;
                  }
                  id = id1;
                  const toArrayResult1 = obj2.toArray();
                }
              }
              const channel1 = ChannelStore.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_2_28[item];
              if (tmp49 == null) {
                const items = [tmp47, constants2.NONE];
                tmp49 = items;
              }
              const first = _slicedToArray(tmp49, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === constants.STREAM;
                    if (tmp55) {
                      tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = constants2.NONE;
                  }
                }
              }
              let tmp57 = id2 === constants2.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_2_35[item];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              setSelectedParticipantId(item, items1);
              flag = true;
              const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          setSelectedParticipantId(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  CHANNEL_RTC_RETURN_PARTICIPANT: function handleReturnParticipant(arg0) {
    ({ channelId, participantId } = arg0);
    obj = dependencyMap[channelId];
    if (null == obj) {
      const tmp7 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp7;
      obj = tmp7;
    }
    const result = obj.updateParticipantPoppedOut(participantId, false);
    const participant = obj.getParticipant(participantId);
    let tmp11 = null != participant;
    if (tmp11) {
      tmp11 = participant.type !== constants.ACTIVITY;
    }
    if (tmp11) {
      const items = [channelId];
      const f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
      const reduced = items.reduce((acc, item) => {
        let tmp4 = dependencyMap2[item];
        if (null == tmp4) {
          const tmp10 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp10;
          tmp4 = tmp10;
        }
        let flag = acc;
        if (f78244(tmp4)) {
          obj = dependencyMap2[item];
          if (null == obj) {
            const tmp17 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = ChannelStore.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = constants3;
                let VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp24 = constants3;
          }
          id = id.getId();
          let obj2 = dependencyMap2[item];
          if (null == obj2) {
            const tmp36 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                _modDef38(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === constants.USER;
                    if (tmp) {
                      tmp = type.id !== id;
                    }
                    if (tmp) {
                      tmp = !type.ringing;
                    }
                    return tmp;
                  });
                  let id1;
                  if (found1 != null) {
                    id1 = found1.id;
                  }
                  if (id1 == null) {
                    id1 = id;
                  }
                  id = id1;
                  const toArrayResult1 = obj2.toArray();
                }
              }
              const channel1 = ChannelStore.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_2_28[item];
              if (tmp49 == null) {
                const items = [tmp47, constants2.NONE];
                tmp49 = items;
              }
              const first = _slicedToArray(tmp49, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === constants.STREAM;
                    if (tmp55) {
                      tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = constants2.NONE;
                  }
                }
              }
              let tmp57 = id2 === constants2.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_2_35[item];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              setSelectedParticipantId(item, items1);
              flag = true;
              const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          setSelectedParticipantId(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function handleCallLayout(channelId) {
    channelId = channelId.channelId;
    obj = {};
    ({ layout, appContext } = channelId);
    const merged = Object.assign(dependencyMap4[channelId]);
    obj[appContext] = layout;
    dependencyMap4[channelId] = obj;
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function handleUpdateParticipantsOpen(channelId) {
    closure_32[channelId.channelId] = channelId.participantsOpen;
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function handleUpdateVoiceParticipantsHidden(channelId) {
    closure_33[channelId.channelId] = channelId.voiceParticipantsHidden;
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
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    if (channelId.selfStreamHidden) {
      const channel = ChannelStore.getChannel(channelId);
      if (channel != null) {
        channel.isDM();
      }
      let tmp8 = dependencyMap2[channelId];
      if (tmp8 == null) {
        const items = [tmp6, tmp5.NONE];
        tmp8 = items;
      }
      const first = _slicedToArray(tmp8, 1)[0];
      const obj3 = f78244(4612);
      if (tmp12) {
        setSelectedParticipantId(channelId, null);
      }
      tmp12 = f78244(4612).isStreamKey(first) && first.includes(id);
    }
    const items1 = [channelId];
    f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
    const reduced = items1.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
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
    const items = [];
    ({ channelId: arr[0], userId: f78244 } = arg0);
    f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
    return items.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(arg0) {
    const items = [];
    ({ channelId: arr[0], userId: f78244 } = arg0);
    f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
    return items.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleMediaEngineSetLocalVideoDisabled(userId) {
    const f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
    if (closure_25 !== undefined) {
      return closure_25.reduce((acc, item) => {
        let tmp4 = dependencyMap2[item];
        if (null == tmp4) {
          const tmp10 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp10;
          tmp4 = tmp10;
        }
        let flag = acc;
        if (f78244(tmp4)) {
          obj = dependencyMap2[item];
          if (null == obj) {
            const tmp17 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = ChannelStore.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = constants3;
                let VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp24 = constants3;
          }
          id = id.getId();
          let obj2 = dependencyMap2[item];
          if (null == obj2) {
            const tmp36 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                _modDef38(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === constants.USER;
                    if (tmp) {
                      tmp = type.id !== id;
                    }
                    if (tmp) {
                      tmp = !type.ringing;
                    }
                    return tmp;
                  });
                  let id1;
                  if (found1 != null) {
                    id1 = found1.id;
                  }
                  if (id1 == null) {
                    id1 = id;
                  }
                  id = id1;
                  const toArrayResult1 = obj2.toArray();
                }
              }
              const channel1 = ChannelStore.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_2_28[item];
              if (tmp49 == null) {
                const items = [tmp47, constants2.NONE];
                tmp49 = items;
              }
              const first = _slicedToArray(tmp49, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === constants.STREAM;
                    if (tmp55) {
                      tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = constants2.NONE;
                  }
                }
              }
              let tmp57 = id2 === constants2.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_2_35[item];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              setSelectedParticipantId(item, items1);
              flag = true;
              const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          setSelectedParticipantId(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function handleVideoSourceQuality(channelId) {
    ({ senderUserId: f78254, maxResolution: importDefault, maxFrameRate: dependencyMap } = channelId);
    const items = [channelId.channelId];
    f78254 = (updateParticipantQuality) =>
      updateParticipantQuality.updateParticipantQuality(f78254, importDefault, dependencyMap);
    return items.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    obj = f78244(4612);
    const items = [];
    ({ channelId: arr[0], ownerId: f78244 } = f78244(4612).decodeStreamKey(streamKey.streamKey));
    f78244 = (dependencyMap) => dependencyMap.updateParticipant(f78244);
    return items.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  SPEAKING: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: handleSpeaking,
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange() {
    const f78255 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(id.getId());
    return closure_25.reduce((acc, item) => {
      let tmp4 = dependencyMap2[item];
      if (null == tmp4) {
        const tmp10 = new ChannelRTCParticipantsDefault(item);
        dependencyMap2[item] = tmp10;
        tmp4 = tmp10;
      }
      let flag = acc;
      if (f78244(tmp4)) {
        obj = dependencyMap2[item];
        if (null == obj) {
          const tmp17 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = ChannelStore.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = constants3;
              let VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_2_30[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp24 = constants3;
        }
        id = id.getId();
        let obj2 = dependencyMap2[item];
        if (null == obj2) {
          const tmp36 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              _modDef38(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === constants.USER;
                  if (tmp) {
                    tmp = type.id !== id;
                  }
                  if (tmp) {
                    tmp = !type.ringing;
                  }
                  return tmp;
                });
                let id1;
                if (found1 != null) {
                  id1 = found1.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
                id = id1;
                const toArrayResult1 = obj2.toArray();
              }
            }
            const channel1 = ChannelStore.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_2_28[item];
            if (tmp49 == null) {
              const items = [tmp47, constants2.NONE];
              tmp49 = items;
            }
            const first = _slicedToArray(tmp49, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === constants.STREAM;
                  if (tmp55) {
                    tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = constants2.NONE;
                }
              }
            }
            let tmp57 = id2 === constants2.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_2_35[item];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            setSelectedParticipantId(item, items1);
            flag = true;
            const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        setSelectedParticipantId(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  GUILD_RING_START: function handleGuildRingStart(channelId) {
    channelId = channelId.channelId;
    let f78257;
    ({ guildId, ongoingRings } = channelId);
    if (obj.getCurrentConfig({ guildId, location: "guild_ring_start" }).enabled) {
      let tmp4 = dependencyMap[channelId];
      if (null == tmp4) {
        const tmp9 = new ChannelRTCParticipantsDefault(channelId);
        tmp3[channelId] = tmp9;
        tmp4 = tmp9;
      }
      const _Object = Object;
      const keys = Object.keys(ongoingRings);
      const item = keys.forEach((item) => f78257.updateGuildRingingUsers(item, true));
      const items = [channelId];
      f78257 = (rebuild) => rebuild.rebuild();
      return items.reduce((acc, item) => {
        let tmp4 = dependencyMap2[item];
        if (null == tmp4) {
          const tmp10 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp10;
          tmp4 = tmp10;
        }
        let flag = acc;
        if (f78244(tmp4)) {
          obj = dependencyMap2[item];
          if (null == obj) {
            const tmp17 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = ChannelStore.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = constants3;
                let VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp24 = constants3;
          }
          id = id.getId();
          let obj2 = dependencyMap2[item];
          if (null == obj2) {
            const tmp36 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                _modDef38(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === constants.USER;
                    if (tmp) {
                      tmp = type.id !== id;
                    }
                    if (tmp) {
                      tmp = !type.ringing;
                    }
                    return tmp;
                  });
                  let id1;
                  if (found1 != null) {
                    id1 = found1.id;
                  }
                  if (id1 == null) {
                    id1 = id;
                  }
                  id = id1;
                  const toArrayResult1 = obj2.toArray();
                }
              }
              const channel1 = ChannelStore.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_2_28[item];
              if (tmp49 == null) {
                const items = [tmp47, constants2.NONE];
                tmp49 = items;
              }
              const first = _slicedToArray(tmp49, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === constants.STREAM;
                    if (tmp55) {
                      tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = constants2.NONE;
                  }
                }
              }
              let tmp57 = id2 === constants2.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_2_35[item];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              setSelectedParticipantId(item, items1);
              flag = true;
              const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          setSelectedParticipantId(item, null);
          flag = true;
        }
        return flag;
      }, false);
    } else {
      return false;
    }
    obj = GuildVoiceRingingExperimentDefault;
  },
  GUILD_RING_STOP: function handleGuildRingStop(guildId) {
    ({ channelId, ringing } = guildId);
    let f78259;
    if (obj.getCurrentConfig({ guildId: guildId.guildId, location: "guild_ring_start" }).enabled) {
      let tmp4 = dependencyMap[channelId];
      if (null == tmp4) {
        const tmp9 = new ChannelRTCParticipantsDefault(channelId);
        tmp3[channelId] = tmp9;
        tmp4 = tmp9;
      }
      const item = ringing.forEach((item) => f78259.updateGuildRingingUsers(item, false));
      const items = [channelId];
      f78259 = (rebuild) => rebuild.rebuild();
      return items.reduce((acc, item) => {
        let tmp4 = dependencyMap2[item];
        if (null == tmp4) {
          const tmp10 = new ChannelRTCParticipantsDefault(item);
          dependencyMap2[item] = tmp10;
          tmp4 = tmp10;
        }
        let flag = acc;
        if (f78244(tmp4)) {
          obj = dependencyMap2[item];
          if (null == obj) {
            const tmp17 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = ChannelStore.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = constants3;
                let VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_2_30[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp24 = constants3;
          }
          id = id.getId();
          let obj2 = dependencyMap2[item];
          if (null == obj2) {
            const tmp36 = new ChannelRTCParticipantsDefault(item);
            dependencyMap2[item] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const found = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                _modDef38(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = _slicedToArray(obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO), 1)[0]
                    .id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === constants.USER;
                    if (tmp) {
                      tmp = type.id !== id;
                    }
                    if (tmp) {
                      tmp = !type.ringing;
                    }
                    return tmp;
                  });
                  let id1;
                  if (found1 != null) {
                    id1 = found1.id;
                  }
                  if (id1 == null) {
                    id1 = id;
                  }
                  id = id1;
                  const toArrayResult1 = obj2.toArray();
                }
              }
              const channel1 = ChannelStore.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_2_28[item];
              if (tmp49 == null) {
                const items = [tmp47, constants2.NONE];
                tmp49 = items;
              }
              const first = _slicedToArray(tmp49, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === constants.STREAM;
                    if (tmp55) {
                      tmp55 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = constants2.NONE;
                  }
                }
              }
              let tmp57 = id2 === constants2.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_2_35[item];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              setSelectedParticipantId(item, items1);
              flag = true;
              const toArrayResult = obj2.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          setSelectedParticipantId(item, null);
          flag = true;
        }
        return flag;
      }, false);
    } else {
      return false;
    }
    obj = GuildVoiceRingingExperimentDefault;
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    const item = items(12).forEach(closure_25, (arg0) => {
      const channel = ChannelStore.getChannel(arg0);
      let tmp = null != channel;
      if (tmp) {
        tmp = channel.getGuildId() !== guild.id;
      }
      if (!tmp) {
        items.push(arg0);
      }
    });
    if (0 === items.length) {
      return false;
    } else {
      const item1 = tmp(12).forEach(items, (arg0) => {
        delete tmp3[tmp2];
        delete tmp3[tmp2];
        delete tmp3[tmp2];
        delete tmp3[tmp2];
        delete tmp[tmp2];
      });
      const tmpResult = tmp(12);
    }
    const arr2 = items(12);
    tmp = items;
  },
};
const channelRTCStore = new ChannelRTCStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/ChannelRTCStore.tsx");

export default channelRTCStore;
export const NO_PARTICIPANTS = frozen;

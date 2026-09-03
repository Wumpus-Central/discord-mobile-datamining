// === Module 4494: getParticipants ===

// Module 4494 (getParticipants)
import timestampDefault from "timestamp" /* 3 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import sortKey from "sortKey" /* 9507 */;
import sortKeyDefault from "sortKey" /* 9507 */;
import experimentDefault from "experiment" /* 9892 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "participantFromServer" /* 1385 */;
import closure_5 from "set" /* 4495 */;
import closure_6 from "reset" /* 4500 */;
import closure_7 from "fetchFingerprint" /* 1215 */;
import closure_8 from "callConnect" /* 5231 */;
import closure_9 from "ensureGuildLoaded" /* 1386 */;
import closure_10 from "sortActivity" /* 4569 */;
import closure_11 from "handleConnectionOpen" /* 1980 */;
import closure_12 from "anyoneHasFlagInContext" /* 5372 */;
import closure_13 from "mergeGuildAvatar" /* 1921 */;
import closure_14 from "makeTimeoutKey" /* 9508 */;
import closure_15 from "updateVoiceState" /* 4497 */;
import ParticipantTypes from "ParticipantTypes" /* 4499 */;
import ME from "ME" /* 673 */;
import set from "set" /* 2 */;

require = arg1;
function getParticipants(arg0) {
  let tmp2 = dependencyMap[arg0];
  if (null == tmp2) {
    const tmp8 = new sortKeyDefault(arg0);
    tmp[arg0] = tmp8;
    tmp2 = tmp8;
  }
  return tmp2;
}
function updateParticipant(arg0, arr) {
  const f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
  return arr.reduce((arg0, arg1) => {
    let tmp4 = closure_1_27[arg1];
    if (null == tmp4) {
      const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
      tmp3[arg1] = tmp10;
      tmp4 = tmp10;
    }
    let flag = arg0;
    if (id(tmp4)) {
      obj = tmp3[arg1];
      if (null == obj) {
        const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = closure_1_9.getChannel(arg1);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = closure_1_20;
            let VIDEO = closure_1_20.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_1_30[arg1] = VIDEO;
          }
          tmp21 = f77575;
          tmp22 = closure_1_2;
        }
        VIDEO = closure_1_20.VIDEO;
        tmp24 = closure_1_20;
      }
      id = closure_1_7.getId();
      let obj2 = tmp3[arg1];
      if (null == obj2) {
        const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (closure_1_11.getVoiceChannelId() === arg1) {
          const NONE = closure_1_17.NONE;
          const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
              id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === closure_1_16.USER;
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
          const channel1 = closure_1_9.getChannel(arg1);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_1_28[arg1];
          if (tmp49 == null) {
            const items = [tmp47, tmp66.NONE];
            tmp49 = items;
          }
          const first = closure_1_3(tmp49, 1)[0];
          let id2 = first;
          if (first !== closure_1_17.AUTO) {
            id2 = first;
            if (first !== tmp66.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === closure_1_16.STREAM;
                if (tmp55) {
                  tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = tmp66.NONE;
              }
            }
          }
          let tmp57 = id2 === tmp66.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_1_35[arg1];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_1_40(arg1, items1);
          flag = true;
          const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      closure_1_40(arg1, null);
      flag = true;
    }
    return flag;
  }, false);
}
function getSelectedParticipantId(arg0) {
  const channel = store2.getChannel(arg0);
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
function setSelectedParticipantId(channelId, arg1) {
  if (null == dependencyMap3[channelId]) {
    tmp3[channelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
  }
  const nowResult = performance.now();
  let tmp7 = null != dependencyMap2[channelId];
  if (tmp7) {
    tmp7 = callback(tmp6[channelId], 1)[0] !== constants2.NONE;
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
  let tmp11 = null != tmp6[channelId];
  if (tmp11) {
    tmp11 = callback(tmp6[channelId], 1)[0] !== constants2.NONE;
  }
  if (null == arg1) {
    delete tmp2[tmp];
  } else {
    tmp6[channelId] = arg1;
  }
  let tmp14 = null != tmp6[channelId];
  if (tmp14) {
    tmp14 = callback(tmp6[channelId], 1)[0] !== constants2.NONE;
  }
  if (tmp11 !== tmp14) {
    tmp3[channelId].toggleCount = tmp3[channelId].toggleCount + 1;
  }
}
function hasVideo(size) {
  let hasEmbeddedActivityResult = size.size(sortKey.ChannelRTCParticipantsIndexes.STREAM) > 0;
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = size.size(sortKey.ChannelRTCParticipantsIndexes.VIDEO) > 0;
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
  channelId = channelId.getChannelId();
  if (null != channelId) {
    items.push(channelId);
  }
  const voiceChannelId = channelId.getVoiceChannelId();
  if (!tmp4) {
    items.push(voiceChannelId);
  }
  remoteSessionId = remoteSessionId.getRemoteSessionId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(store.getId(), remoteSessionId);
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
  obj = channelId;
  tmp4 = null == voiceChannelId || items.includes(voiceChannelId);
  const obj2 = applyDefault;
  const item = applyDefault.difference(items, items).forEach(clearChannel);
  const differenceResult = applyDefault.difference(items, items);
  let differenceResult1 = applyDefault.difference(items, items);
  if (differenceResult1 === undefined) {
    differenceResult1 = items;
  }
  return differenceResult1.reduce((arg0, arg1) => {
    let tmp4 = closure_1_27[arg1];
    if (null == tmp4) {
      const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
      tmp3[arg1] = tmp10;
      tmp4 = tmp10;
    }
    let flag = arg0;
    if (id(tmp4)) {
      obj = tmp3[arg1];
      if (null == obj) {
        const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = closure_1_9.getChannel(arg1);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = closure_1_20;
            let VIDEO = closure_1_20.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_1_30[arg1] = VIDEO;
          }
          tmp21 = f77575;
          tmp22 = closure_1_2;
        }
        VIDEO = closure_1_20.VIDEO;
        tmp24 = closure_1_20;
      }
      id = closure_1_7.getId();
      let obj2 = tmp3[arg1];
      if (null == obj2) {
        const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (closure_1_11.getVoiceChannelId() === arg1) {
          const NONE = closure_1_17.NONE;
          const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
              id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === closure_1_16.USER;
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
          const channel1 = closure_1_9.getChannel(arg1);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_1_28[arg1];
          if (tmp49 == null) {
            const items = [tmp47, tmp66.NONE];
            tmp49 = items;
          }
          const first = closure_1_3(tmp49, 1)[0];
          let id2 = first;
          if (first !== closure_1_17.AUTO) {
            id2 = first;
            if (first !== tmp66.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === closure_1_16.STREAM;
                if (tmp55) {
                  tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = tmp66.NONE;
              }
            }
          }
          let tmp57 = id2 === tmp66.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_1_35[arg1];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_1_40(arg1, items1);
          flag = true;
          const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      closure_1_40(arg1, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleEmbeddedActivityChange() {
  const f77577 = (updateEmbeddedActivities) => updateEmbeddedActivities.updateEmbeddedActivities();
  return closure_25.reduce((arg0, arg1) => {
    let tmp4 = closure_1_27[arg1];
    if (null == tmp4) {
      const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
      tmp3[arg1] = tmp10;
      tmp4 = tmp10;
    }
    let flag = arg0;
    if (id(tmp4)) {
      obj = tmp3[arg1];
      if (null == obj) {
        const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = closure_1_9.getChannel(arg1);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = closure_1_20;
            let VIDEO = closure_1_20.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_1_30[arg1] = VIDEO;
          }
          tmp21 = f77575;
          tmp22 = closure_1_2;
        }
        VIDEO = closure_1_20.VIDEO;
        tmp24 = closure_1_20;
      }
      id = closure_1_7.getId();
      let obj2 = tmp3[arg1];
      if (null == obj2) {
        const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (closure_1_11.getVoiceChannelId() === arg1) {
          const NONE = closure_1_17.NONE;
          const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
              id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === closure_1_16.USER;
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
          const channel1 = closure_1_9.getChannel(arg1);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_1_28[arg1];
          if (tmp49 == null) {
            const items = [tmp47, tmp66.NONE];
            tmp49 = items;
          }
          const first = closure_1_3(tmp49, 1)[0];
          let id2 = first;
          if (first !== closure_1_17.AUTO) {
            id2 = first;
            if (first !== tmp66.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === closure_1_16.STREAM;
                if (tmp55) {
                  tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = tmp66.NONE;
              }
            }
          }
          let tmp57 = id2 === tmp66.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_1_35[arg1];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_1_40(arg1, items1);
          flag = true;
          const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      closure_1_40(arg1, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleSpeaking(arg0) {
  const f77578 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(f77578);
  return closure_25.reduce((arg0, arg1) => {
    let tmp4 = closure_1_27[arg1];
    if (null == tmp4) {
      const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
      tmp3[arg1] = tmp10;
      tmp4 = tmp10;
    }
    let flag = arg0;
    if (id(tmp4)) {
      obj = tmp3[arg1];
      if (null == obj) {
        const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = closure_1_9.getChannel(arg1);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = closure_1_20;
            let VIDEO = closure_1_20.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_1_30[arg1] = VIDEO;
          }
          tmp21 = f77575;
          tmp22 = closure_1_2;
        }
        VIDEO = closure_1_20.VIDEO;
        tmp24 = closure_1_20;
      }
      id = closure_1_7.getId();
      let obj2 = tmp3[arg1];
      if (null == obj2) {
        const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (closure_1_11.getVoiceChannelId() === arg1) {
          const NONE = closure_1_17.NONE;
          const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
              id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === closure_1_16.USER;
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
          const channel1 = closure_1_9.getChannel(arg1);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_1_28[arg1];
          if (tmp49 == null) {
            const items = [tmp47, tmp66.NONE];
            tmp49 = items;
          }
          const first = closure_1_3(tmp49, 1)[0];
          let id2 = first;
          if (first !== closure_1_17.AUTO) {
            id2 = first;
            if (first !== tmp66.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === closure_1_16.STREAM;
                if (tmp55) {
                  tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = tmp66.NONE;
              }
            }
          }
          let tmp57 = id2 === tmp66.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_1_35[arg1];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_1_40(arg1, items1);
          flag = true;
          const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      closure_1_40(arg1, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleUserUpdate(user) {
  let f77575 = user.user.id;
  f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
  if (closure_25 !== undefined) {
    return closure_25.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  }
}
function handleCallUpdate(channelId) {
  const items = [channelId.channelId];
  const f77579 = (rebuild) => rebuild.rebuild();
  return items.reduce((arg0, arg1) => {
    let tmp4 = closure_1_27[arg1];
    if (null == tmp4) {
      const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
      tmp3[arg1] = tmp10;
      tmp4 = tmp10;
    }
    let flag = arg0;
    if (id(tmp4)) {
      obj = tmp3[arg1];
      if (null == obj) {
        const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = closure_1_9.getChannel(arg1);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = closure_1_20;
            let VIDEO = closure_1_20.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_1_30[arg1] = VIDEO;
          }
          tmp21 = f77575;
          tmp22 = closure_1_2;
        }
        VIDEO = closure_1_20.VIDEO;
        tmp24 = closure_1_20;
      }
      id = closure_1_7.getId();
      let obj2 = tmp3[arg1];
      if (null == obj2) {
        const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (closure_1_11.getVoiceChannelId() === arg1) {
          const NONE = closure_1_17.NONE;
          const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
              id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === closure_1_16.USER;
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
          const channel1 = closure_1_9.getChannel(arg1);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_1_28[arg1];
          if (tmp49 == null) {
            const items = [tmp47, tmp66.NONE];
            tmp49 = items;
          }
          const first = closure_1_3(tmp49, 1)[0];
          let id2 = first;
          if (first !== closure_1_17.AUTO) {
            id2 = first;
            if (first !== tmp66.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === closure_1_16.STREAM;
                if (tmp55) {
                  tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = tmp66.NONE;
              }
            }
          }
          let tmp57 = id2 === tmp66.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_1_35[arg1];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_1_40(arg1, items1);
          flag = true;
          const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      closure_1_40(arg1, null);
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
  obj = f77575(4544);
  const items = [];
  ({ channelId: arr[0], ownerId: f77575 } = f77575(4544).decodeStreamKey(streamKey.streamKey));
  f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
  return items.reduce((arg0, arg1) => {
    let tmp4 = closure_1_27[arg1];
    if (null == tmp4) {
      const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
      tmp3[arg1] = tmp10;
      tmp4 = tmp10;
    }
    let flag = arg0;
    if (id(tmp4)) {
      obj = tmp3[arg1];
      if (null == obj) {
        const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp17;
        obj = tmp17;
      }
      if (0 !== obj.size()) {
        const channel = closure_1_9.getChannel(arg1);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!Boolean(isGuildVocalOrThreadResult)) {
          let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            let tmp24 = closure_1_20;
            let VIDEO = closure_1_20.VOICE;
          }
          if (VIDEO === tmp24.VOICE) {
            delete tmp2[tmp];
            delete tmp2[tmp];
          } else {
            closure_1_30[arg1] = VIDEO;
          }
          tmp21 = f77575;
          tmp22 = closure_1_2;
        }
        VIDEO = closure_1_20.VIDEO;
        tmp24 = closure_1_20;
      }
      id = closure_1_7.getId();
      let obj2 = tmp3[arg1];
      if (null == obj2) {
        const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp36;
        obj2 = tmp36;
      }
      if (0 !== obj2.size()) {
        if (closure_1_11.getVoiceChannelId() === arg1) {
          const NONE = closure_1_17.NONE;
          const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
            let tmp = type.type === constants.STREAM;
            if (tmp) {
              tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            }
            return tmp;
          });
          if (null != found) {
            closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
            id = found.id;
          } else if (1 !== obj2.size()) {
            if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
              id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
            } else {
              const found1 = obj2.toArray().find((type) => {
                let tmp = type.type === closure_1_16.USER;
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
          const channel1 = closure_1_9.getChannel(arg1);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp49 = closure_1_28[arg1];
          if (tmp49 == null) {
            const items = [tmp47, tmp66.NONE];
            tmp49 = items;
          }
          const first = closure_1_3(tmp49, 1)[0];
          let id2 = first;
          if (first !== closure_1_17.AUTO) {
            id2 = first;
            if (first !== tmp66.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp53 = null == participant;
              if (!tmp53) {
                let tmp55 = participant.type === closure_1_16.STREAM;
                if (tmp55) {
                  tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                }
                tmp53 = tmp55;
              }
              id2 = first;
              if (tmp53) {
                id2 = tmp66.NONE;
              }
            }
          }
          let tmp57 = id2 === tmp66.NONE && null != found;
          if (tmp57) {
            tmp57 = true === closure_1_35[arg1];
          }
          if (tmp57) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_1_40(arg1, items1);
          flag = true;
          const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
        }
      }
      closure_1_40(arg1, null);
      flag = true;
    }
    return flag;
  }, false);
}
({ ParticipantTypes: closure_16, ParticipantSelectionTypes: closure_17, isStreamParticipant: closure_18 } = ParticipantTypes);
({ ChannelLayouts: closure_19, ChannelModes: closure_20, ChannelTypes: closure_21, AppContext: closure_22 } = ME);
let obj = new timestampDefault("ChannelRTCStore");
obj.enableNativeLogger(true);
const frozen = Object.freeze([]);
let closure_25 = [];
let set = new Set();
let closure_27 = {};
let closure_28 = {};
let closure_29 = {};
let closure_30 = {};
let closure_31 = {};
let closure_32 = {};
let closure_33 = {};
let closure_34 = {};
let closure_35 = {};
let closure_36 = {};
const PersistedStore = initializeDefault.PersistedStore;
class ChannelRTCStore extends PersistedStore {
}
const prototype = ChannelRTCStore.prototype;
prototype["initialize"] = function initialize(voiceParticipantsHidden) {
  this.waitFor(closure_6, closure_7, closure_8, closure_9, closure_4, closure_5, closure_10, closure_11, closure_12, closure_13, closure_14, closure_15);
  const items = [closure_4];
  this.syncWith(items, handleEmbeddedActivityChange);
  const items1 = [closure_5];
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
    const tmp6 = closure_33;
  }
};
prototype["getState"] = function getState() {
  return { voiceParticipantsHidden: closure_33 };
};
prototype["getParticipantsVersion"] = function getParticipantsVersion(arg0) {
  let tmp2 = dependencyMap[arg0];
  if (null == tmp2) {
    const tmp8 = new sortKeyDefault(arg0);
    tmp[arg0] = tmp8;
    tmp2 = tmp8;
  }
  return tmp2.version;
};
prototype["getParticipants"] = function getParticipants(arg0) {
  obj = dependencyMap[arg0];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(arg0);
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
    const tmp7 = new sortKeyDefault(id);
    tmp[id] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(sortKey.ChannelRTCParticipantsIndexes.SPEAKING);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getFilteredParticipants"] = function getFilteredParticipants(closure_0) {
  obj = dependencyMap[closure_0];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(closure_0);
    tmp[closure_0] = tmp7;
    obj = tmp7;
  }
  if (dependencyMap5[closure_0] != null) {
    if (tmp9) {
      let toArrayResult = obj.toArray(sortKey.ChannelRTCParticipantsIndexes.FILTERED);
    }
    return toArrayResult;
  }
  toArrayResult = obj.toArray(sortKey.ChannelRTCParticipantsIndexes.NOT_POPPED_OUT);
};
prototype["getVideoParticipants"] = function getVideoParticipants(channelId) {
  obj = dependencyMap[channelId];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(channelId);
    tmp[channelId] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(sortKey.ChannelRTCParticipantsIndexes.VIDEO);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getStreamParticipants"] = function getStreamParticipants(id) {
  obj = dependencyMap[id];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(id);
    tmp[id] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(sortKey.ChannelRTCParticipantsIndexes.STREAM);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getActivityParticipants"] = function getActivityParticipants(channelId) {
  obj = dependencyMap[channelId];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(channelId);
    tmp[channelId] = tmp7;
    obj = tmp7;
  }
  let toArrayResult = obj.toArray(sortKey.ChannelRTCParticipantsIndexes.ACTIVITY);
  if (toArrayResult == null) {
    toArrayResult = frozen;
  }
  return toArrayResult;
};
prototype["getParticipant"] = function getParticipant(arg0, arg1) {
  obj = dependencyMap[arg0];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(arg0);
    tmp[arg0] = tmp7;
    obj = tmp7;
  }
  return obj.getParticipant(arg1);
};
prototype["getUserParticipantCount"] = function getUserParticipantCount(id) {
  obj = dependencyMap[id];
  if (null == obj) {
    const tmp7 = new sortKeyDefault(id);
    tmp[id] = tmp7;
    obj = tmp7;
  }
  const diff = obj.size() - obj.size(sortKey.ChannelRTCParticipantsIndexes.STREAM);
  return diff - obj.size(sortKey.ChannelRTCParticipantsIndexes.ACTIVITY);
};
prototype["getParticipantsOpen"] = function getParticipantsOpen(arg0) {
  let flag = table2[arg0];
  if (flag == null) {
    flag = true;
  }
  return flag;
};
prototype["getVoiceParticipantsHidden"] = function getVoiceParticipantsHidden(channelId) {
  let flag = dependencyMap5[channelId];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getSelectedParticipantId"] = function getSelectedParticipantId(arg0) {
  const channel = store2.getChannel(arg0);
  if (channel != null) {
    channel.isDM();
  }
  let tmp4 = dependencyMap2[arg0];
  if (tmp4 == null) {
    const items = [tmp3, tmp2.NONE];
    tmp4 = items;
  }
  [tmp6, tmp7] = callback(tmp4, 2);
  let tmp8 = null;
  if (tmp6 !== closure_17.NONE) {
    if (tmp6 === tmp2.AUTO) {
      let tmp9 = null;
      if (tmp7 !== tmp2.NONE) {
        tmp9 = null;
        if (tmp7 !== tmp2.AUTO) {
          tmp9 = tmp7;
        }
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
      const tmp9 = new sortKeyDefault(id);
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
    obj[0] = Math.floor(tmp.gridDurationMs);
    const _Math2 = Math;
    obj[1] = Math.floor(tmp.focusDurationMs);
    obj[2] = tmp.toggleCount;
  }
  return obj;
};
prototype["getGuildRingingUsers"] = function getGuildRingingUsers(id) {
  let tmp2 = dependencyMap[id];
  if (null == tmp2) {
    const tmp8 = new sortKeyDefault(id);
    tmp[id] = tmp8;
    tmp2 = tmp8;
  }
  return tmp2.guildRingingUsers;
};
prototype["getMode"] = function getMode(arg0) {
  if (table[arg0] != null) {
    return tmp;
  } else {
    const channel = store2.getChannel(arg0);
    let isGuildVocalOrThreadResult;
    if (channel != null) {
      isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
    }
    Boolean(isGuildVocalOrThreadResult) ? closure_20.VIDEO : closure_20.VOICE;
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
  return values.some((arg0) => arg0[APP] === closure_1_19.FULL_SCREEN);
};
prototype["getStageStreamSize"] = function getStageStreamSize(arg0) {
  return table3[arg0];
};
prototype["getStageVideoLimitBoostUpsellDismissed"] = function getStageVideoLimitBoostUpsellDismissed(arg0) {
  return table4[arg0];
};
prototype["isParticipantPoppedOut"] = function isParticipantPoppedOut(closure_2, id) {
  const participant = this.getParticipant(closure_2, id);
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
      let tmp = clearChannel;
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
    let f77582;
    if (null != channelId) {
      delete tmp[tmp3];
    } else if (null != currentVoiceChannelId) {
      set.delete(currentVoiceChannelId);
      delete tmp[tmp2];
      if (null == dependencyMap3[currentVoiceChannelId]) {
        tmp26[currentVoiceChannelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
      }
      const _performance = performance;
      const nowResult = performance.now();
      let tmp8 = null != dependencyMap2[currentVoiceChannelId];
      if (tmp8) {
        tmp8 = callback(tmp7[currentVoiceChannelId], 1)[0] !== constants2.NONE;
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
          const tmp20 = new sortKeyDefault(currentVoiceChannelId);
          tmp13[currentVoiceChannelId] = tmp20;
          tmp14 = tmp20;
        }
        f77582 = tmp14;
        const guildRingingUsers = tmp14.guildRingingUsers;
        const item = guildRingingUsers.forEach((userId) => f77582.updateGuildRingingUsers(userId, false));
        const items = [currentVoiceChannelId];
        f77582 = (rebuild) => rebuild.rebuild();
        flag = items.reduce((arg0, arg1) => {
          let tmp4 = closure_1_27[arg1];
          if (null == tmp4) {
            const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp10;
            tmp4 = tmp10;
          }
          let flag = arg0;
          if (id(tmp4)) {
            obj = tmp3[arg1];
            if (null == obj) {
              const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
              tmp3[arg1] = tmp17;
              obj = tmp17;
            }
            if (0 !== obj.size()) {
              const channel = closure_1_9.getChannel(arg1);
              let isGuildVocalOrThreadResult;
              if (channel != null) {
                isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
              }
              if (!Boolean(isGuildVocalOrThreadResult)) {
                let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
                }
                if (!hasEmbeddedActivityResult) {
                  hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
                }
                if (!hasEmbeddedActivityResult) {
                  let tmp24 = closure_1_20;
                  let VIDEO = closure_1_20.VOICE;
                }
                if (VIDEO === tmp24.VOICE) {
                  delete tmp2[tmp];
                  delete tmp2[tmp];
                } else {
                  closure_1_30[arg1] = VIDEO;
                }
                tmp21 = f77575;
                tmp22 = closure_1_2;
              }
              VIDEO = closure_1_20.VIDEO;
              tmp24 = closure_1_20;
            }
            id = closure_1_7.getId();
            let obj2 = tmp3[arg1];
            if (null == obj2) {
              const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
              tmp3[arg1] = tmp36;
              obj2 = tmp36;
            }
            if (0 !== obj2.size()) {
              if (closure_1_11.getVoiceChannelId() === arg1) {
                const NONE = closure_1_17.NONE;
                const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                  let tmp = type.type === constants.STREAM;
                  if (tmp) {
                    tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                  }
                  return tmp;
                });
                if (null != found) {
                  closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                  id = found.id;
                } else if (1 !== obj2.size()) {
                  if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const found1 = obj2.toArray().find((type) => {
                      let tmp = type.type === closure_1_16.USER;
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
                const channel1 = closure_1_9.getChannel(arg1);
                if (channel1 != null) {
                  channel1.isDM();
                }
                let tmp49 = closure_1_28[arg1];
                if (tmp49 == null) {
                  const items = [tmp47, tmp66.NONE];
                  tmp49 = items;
                }
                const first = closure_1_3(tmp49, 1)[0];
                let id2 = first;
                if (first !== closure_1_17.AUTO) {
                  id2 = first;
                  if (first !== tmp66.NONE) {
                    const participant = obj2.getParticipant(first);
                    let tmp53 = null == participant;
                    if (!tmp53) {
                      let tmp55 = participant.type === closure_1_16.STREAM;
                      if (tmp55) {
                        tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                      }
                      tmp53 = tmp55;
                    }
                    id2 = first;
                    if (tmp53) {
                      id2 = tmp66.NONE;
                    }
                  }
                }
                let tmp57 = id2 === tmp66.NONE && null != found;
                if (tmp57) {
                  tmp57 = true === closure_1_35[arg1];
                }
                if (tmp57) {
                  id2 = found.id;
                }
                const items1 = [id2, id];
                closure_1_40(arg1, items1);
                flag = true;
                const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
              }
            }
            closure_1_40(arg1, null);
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
    } else {
      if (set.has(channelId)) {
        return tmp;
      } else {
        const channel = store2.getChannel(channelId);
        let tmp3 = tmp;
        if (null != channel) {
          let flag = tmp;
          if (channel.isGuildVocal()) {
            obj.add(channelId);
            flag = true;
          }
          tmp3 = flag;
        }
        return tmp3;
      }
      obj = set;
    }
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: handleRebuildActiveChannels,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    ({ voiceStates, initial: require } = arg0);
    return voiceStates.reduce((arg0, arg1) => {
      ({ userId, channelId, guildId } = arg1);
      if (tmp) {
        obj = closure_1_1(closure_1_2[19]);
        obj = { guildId: null, location: "voice_status_update" };
        obj[0] = guildId;
        if (obj.getCurrentConfig(obj, { autoTrackExposure: false }).enabled) {
          let obj3 = closure_1_27[channelId];
          if (null == obj3) {
            const tmp8 = new tmp2(tmp3[16])(channelId);
            tmp4[channelId] = tmp8;
            obj3 = tmp8;
          }
          const result = obj3.updateGuildRingingUsers(userId, false);
        }
        tmp2 = closure_1_1;
        tmp3 = closure_1_2;
      }
      if (f77575) {
        if (null != channelId) {
          let tmp12 = arg0;
        }
        return tmp12;
      }
      f77575 = userId;
      let arr = closure_1_25;
      f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
      if (closure_1_25 === undefined) {
        arr = closure_1_25;
      }
      tmp12 = arr.reduce((arg0, arg1) => {
        let tmp4 = closure_1_27[arg1];
        if (null == tmp4) {
          const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp10;
          tmp4 = tmp10;
        }
        let flag = arg0;
        if (id(tmp4)) {
          obj = tmp3[arg1];
          if (null == obj) {
            const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = closure_1_9.getChannel(arg1);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = closure_1_20;
                let VIDEO = closure_1_20.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_1_30[arg1] = VIDEO;
              }
              tmp21 = f77575;
              tmp22 = closure_1_2;
            }
            VIDEO = closure_1_20.VIDEO;
            tmp24 = closure_1_20;
          }
          id = closure_1_7.getId();
          let obj2 = tmp3[arg1];
          if (null == obj2) {
            const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (closure_1_11.getVoiceChannelId() === arg1) {
              const NONE = closure_1_17.NONE;
              const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === closure_1_16.USER;
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
              const channel1 = closure_1_9.getChannel(arg1);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_1_28[arg1];
              if (tmp49 == null) {
                const items = [tmp47, tmp66.NONE];
                tmp49 = items;
              }
              const first = closure_1_3(tmp49, 1)[0];
              let id2 = first;
              if (first !== closure_1_17.AUTO) {
                id2 = first;
                if (first !== tmp66.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === closure_1_16.STREAM;
                    if (tmp55) {
                      tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = tmp66.NONE;
                  }
                }
              }
              let tmp57 = id2 === tmp66.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_1_35[arg1];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_1_40(arg1, items1);
              flag = true;
              const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          closure_1_40(arg1, null);
          flag = true;
        }
        return flag;
      }, false) || arg0;
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
    obj = undefined;
    obj = getParticipants(channelId);
    if (null == id) {
      const item = obj.toArray(obj(9507).ChannelRTCParticipantsIndexes.STREAM).forEach((user) => {
        if (closure_1_18(user)) {
          obj.updateParticipant(user.user.id);
        }
      });
      const toArrayResult = obj.toArray(obj(9507).ChannelRTCParticipantsIndexes.STREAM);
    }
    let NONE = id;
    if (id == null) {
      NONE = constants2.NONE;
    }
    const items = [NONE, callback(getSelectedParticipantId(channelId), 2)[1]];
    setSelectedParticipantId(channelId, items);
    if (obj2.isStreamKey(id)) {
      try {
        const ownerId = obj(4544).decodeStreamKey(id).ownerId;
        if (ownerId === store.getId()) {
          const items1 = [channelId];
          updateParticipant(tmp10, items1);
        }
        if (!hasVideo(obj)) {
          closure_32[channelId] = false;
        }
        tmp10 = ownerId;
        const tmp8Result = obj(4544);
      } catch (tmp15) {
        const _HermesInternal = HermesInternal;
        obj.warn("INVALID STREAM KEY FORMAT " + tmp, tmp15);
      }
    }
  },
  CHANNEL_RTC_POPOUT_PARTICIPANT: function handlePopOutParticipant(arg0) {
    ({ channelId, participantId } = arg0);
    const channel = store2.getChannel(channelId);
    if (channel != null) {
      channel.isDM();
    }
    let tmp4 = dependencyMap2[channelId];
    if (tmp4 == null) {
      const items = [tmp3, tmp2.NONE];
      tmp4 = items;
    }
    if (callback(tmp4, 1)[0] === participantId) {
      setSelectedParticipantId(channelId, null);
    }
    let obj2 = dependencyMap[channelId];
    if (null == obj2) {
      const tmp13 = new sortKeyDefault(channelId);
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
      let f77575 = participant.user.id;
      f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
      const reduced = items1.reduce((arg0, arg1) => {
        let tmp4 = closure_1_27[arg1];
        if (null == tmp4) {
          const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp10;
          tmp4 = tmp10;
        }
        let flag = arg0;
        if (id(tmp4)) {
          obj = tmp3[arg1];
          if (null == obj) {
            const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = closure_1_9.getChannel(arg1);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = closure_1_20;
                let VIDEO = closure_1_20.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_1_30[arg1] = VIDEO;
              }
              tmp21 = f77575;
              tmp22 = closure_1_2;
            }
            VIDEO = closure_1_20.VIDEO;
            tmp24 = closure_1_20;
          }
          id = closure_1_7.getId();
          let obj2 = tmp3[arg1];
          if (null == obj2) {
            const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (closure_1_11.getVoiceChannelId() === arg1) {
              const NONE = closure_1_17.NONE;
              const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === closure_1_16.USER;
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
              const channel1 = closure_1_9.getChannel(arg1);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_1_28[arg1];
              if (tmp49 == null) {
                const items = [tmp47, tmp66.NONE];
                tmp49 = items;
              }
              const first = closure_1_3(tmp49, 1)[0];
              let id2 = first;
              if (first !== closure_1_17.AUTO) {
                id2 = first;
                if (first !== tmp66.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === closure_1_16.STREAM;
                    if (tmp55) {
                      tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = tmp66.NONE;
                  }
                }
              }
              let tmp57 = id2 === tmp66.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_1_35[arg1];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_1_40(arg1, items1);
              flag = true;
              const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          closure_1_40(arg1, null);
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
      const tmp7 = new sortKeyDefault(channelId);
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
      let f77575 = participant.user.id;
      f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
      const reduced = items.reduce((arg0, arg1) => {
        let tmp4 = closure_1_27[arg1];
        if (null == tmp4) {
          const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp10;
          tmp4 = tmp10;
        }
        let flag = arg0;
        if (id(tmp4)) {
          obj = tmp3[arg1];
          if (null == obj) {
            const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = closure_1_9.getChannel(arg1);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = closure_1_20;
                let VIDEO = closure_1_20.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_1_30[arg1] = VIDEO;
              }
              tmp21 = f77575;
              tmp22 = closure_1_2;
            }
            VIDEO = closure_1_20.VIDEO;
            tmp24 = closure_1_20;
          }
          id = closure_1_7.getId();
          let obj2 = tmp3[arg1];
          if (null == obj2) {
            const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (closure_1_11.getVoiceChannelId() === arg1) {
              const NONE = closure_1_17.NONE;
              const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === closure_1_16.USER;
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
              const channel1 = closure_1_9.getChannel(arg1);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_1_28[arg1];
              if (tmp49 == null) {
                const items = [tmp47, tmp66.NONE];
                tmp49 = items;
              }
              const first = closure_1_3(tmp49, 1)[0];
              let id2 = first;
              if (first !== closure_1_17.AUTO) {
                id2 = first;
                if (first !== tmp66.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === closure_1_16.STREAM;
                    if (tmp55) {
                      tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = tmp66.NONE;
                  }
                }
              }
              let tmp57 = id2 === tmp66.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_1_35[arg1];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_1_40(arg1, items1);
              flag = true;
              const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          closure_1_40(arg1, null);
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
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function handleUpdateStageVideoLimitBoostUpsellDismissed(channelId) {
    closure_36[channelId.channelId] = channelId.dismissed;
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(channelId) {
    channelId = channelId.channelId;
    const id = store.getId();
    if (channelId.selfStreamHidden) {
      const channel = store2.getChannel(channelId);
      if (channel != null) {
        channel.isDM();
      }
      let tmp8 = dependencyMap2[channelId];
      if (tmp8 == null) {
        const items = [tmp6, tmp5.NONE];
        tmp8 = items;
      }
      const first = callback(tmp8, 1)[0];
      const obj3 = f77575(4544);
      if (tmp12) {
        setSelectedParticipantId(channelId, null);
      }
      tmp12 = f77575(4544).isStreamKey(first) && first.includes(id);
    }
    const items1 = [channelId];
    f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
    const reduced = items1.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    channelId = channelId.channelId;
    if (channelId.chatOpen) {
      obj.add(channelId);
    } else {
      obj.delete(channelId);
    }
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(arg0) {
    const items = [];
    ({ channelId: arr[0], userId: f77575 } = arg0);
    f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
    return items.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(arg0) {
    const items = [];
    ({ channelId: arr[0], userId: f77575 } = arg0);
    f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
    return items.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleMediaEngineSetLocalVideoDisabled(userId) {
    let f77575 = userId.userId;
    f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
    if (closure_25 !== undefined) {
      return closure_25.reduce((arg0, arg1) => {
        let tmp4 = closure_1_27[arg1];
        if (null == tmp4) {
          const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp10;
          tmp4 = tmp10;
        }
        let flag = arg0;
        if (id(tmp4)) {
          obj = tmp3[arg1];
          if (null == obj) {
            const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = closure_1_9.getChannel(arg1);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = closure_1_20;
                let VIDEO = closure_1_20.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_1_30[arg1] = VIDEO;
              }
              tmp21 = f77575;
              tmp22 = closure_1_2;
            }
            VIDEO = closure_1_20.VIDEO;
            tmp24 = closure_1_20;
          }
          id = closure_1_7.getId();
          let obj2 = tmp3[arg1];
          if (null == obj2) {
            const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (closure_1_11.getVoiceChannelId() === arg1) {
              const NONE = closure_1_17.NONE;
              const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === closure_1_16.USER;
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
              const channel1 = closure_1_9.getChannel(arg1);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_1_28[arg1];
              if (tmp49 == null) {
                const items = [tmp47, tmp66.NONE];
                tmp49 = items;
              }
              const first = closure_1_3(tmp49, 1)[0];
              let id2 = first;
              if (first !== closure_1_17.AUTO) {
                id2 = first;
                if (first !== tmp66.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === closure_1_16.STREAM;
                    if (tmp55) {
                      tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = tmp66.NONE;
                  }
                }
              }
              let tmp57 = id2 === tmp66.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_1_35[arg1];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_1_40(arg1, items1);
              flag = true;
              const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          closure_1_40(arg1, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function handleVideoSourceQuality(channelId) {
    ({ senderUserId: f77585, maxResolution: importDefault, maxFrameRate: dependencyMap } = channelId);
    const items = [channelId.channelId];
    f77585 = (updateParticipantQuality) => updateParticipantQuality.updateParticipantQuality(f77585, closure_1, closure_2);
    return items.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    obj = f77575(4544);
    const items = [];
    ({ channelId: arr[0], ownerId: f77575 } = f77575(4544).decodeStreamKey(streamKey.streamKey));
    f77575 = (updateParticipant) => updateParticipant.updateParticipant(f77575);
    return items.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  SPEAKING: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: handleSpeaking,
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange() {
    const f77586 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(id.getId());
    return closure_25.reduce((arg0, arg1) => {
      let tmp4 = closure_1_27[arg1];
      if (null == tmp4) {
        const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
        tmp3[arg1] = tmp10;
        tmp4 = tmp10;
      }
      let flag = arg0;
      if (id(tmp4)) {
        obj = tmp3[arg1];
        if (null == obj) {
          const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp17;
          obj = tmp17;
        }
        if (0 !== obj.size()) {
          const channel = closure_1_9.getChannel(arg1);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!Boolean(isGuildVocalOrThreadResult)) {
            let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              let tmp24 = closure_1_20;
              let VIDEO = closure_1_20.VOICE;
            }
            if (VIDEO === tmp24.VOICE) {
              delete tmp2[tmp];
              delete tmp2[tmp];
            } else {
              closure_1_30[arg1] = VIDEO;
            }
            tmp21 = f77575;
            tmp22 = closure_1_2;
          }
          VIDEO = closure_1_20.VIDEO;
          tmp24 = closure_1_20;
        }
        id = closure_1_7.getId();
        let obj2 = tmp3[arg1];
        if (null == obj2) {
          const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp36;
          obj2 = tmp36;
        }
        if (0 !== obj2.size()) {
          if (closure_1_11.getVoiceChannelId() === arg1) {
            const NONE = closure_1_17.NONE;
            const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
              let tmp = type.type === constants.STREAM;
              if (tmp) {
                tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              }
              return tmp;
            });
            if (null != found) {
              closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
              id = found.id;
            } else if (1 !== obj2.size()) {
              if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const found1 = obj2.toArray().find((type) => {
                  let tmp = type.type === closure_1_16.USER;
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
            const channel1 = closure_1_9.getChannel(arg1);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp49 = closure_1_28[arg1];
            if (tmp49 == null) {
              const items = [tmp47, tmp66.NONE];
              tmp49 = items;
            }
            const first = closure_1_3(tmp49, 1)[0];
            let id2 = first;
            if (first !== closure_1_17.AUTO) {
              id2 = first;
              if (first !== tmp66.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp53 = null == participant;
                if (!tmp53) {
                  let tmp55 = participant.type === closure_1_16.STREAM;
                  if (tmp55) {
                    tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                  }
                  tmp53 = tmp55;
                }
                id2 = first;
                if (tmp53) {
                  id2 = tmp66.NONE;
                }
              }
            }
            let tmp57 = id2 === tmp66.NONE && null != found;
            if (tmp57) {
              tmp57 = true === closure_1_35[arg1];
            }
            if (tmp57) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_1_40(arg1, items1);
            flag = true;
            const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
          }
        }
        closure_1_40(arg1, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  GUILD_RING_START: function handleGuildRingStart(channelId) {
    channelId = channelId.channelId;
    let f77588;
    ({ guildId, ongoingRings } = channelId);
    if (obj.getCurrentConfig({ guildId, location: "guild_ring_start" }).enabled) {
      let tmp4 = dependencyMap[channelId];
      if (null == tmp4) {
        const tmp9 = new sortKeyDefault(channelId);
        tmp3[channelId] = tmp9;
        tmp4 = tmp9;
      }
      f77588 = tmp4;
      const _Object = Object;
      const keys = Object.keys(ongoingRings);
      const item = keys.forEach((userId) => f77588.updateGuildRingingUsers(userId, true));
      const items = [channelId];
      f77588 = (rebuild) => rebuild.rebuild();
      return items.reduce((arg0, arg1) => {
        let tmp4 = closure_1_27[arg1];
        if (null == tmp4) {
          const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp10;
          tmp4 = tmp10;
        }
        let flag = arg0;
        if (id(tmp4)) {
          obj = tmp3[arg1];
          if (null == obj) {
            const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = closure_1_9.getChannel(arg1);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = closure_1_20;
                let VIDEO = closure_1_20.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_1_30[arg1] = VIDEO;
              }
              tmp21 = f77575;
              tmp22 = closure_1_2;
            }
            VIDEO = closure_1_20.VIDEO;
            tmp24 = closure_1_20;
          }
          id = closure_1_7.getId();
          let obj2 = tmp3[arg1];
          if (null == obj2) {
            const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (closure_1_11.getVoiceChannelId() === arg1) {
              const NONE = closure_1_17.NONE;
              const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === closure_1_16.USER;
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
              const channel1 = closure_1_9.getChannel(arg1);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_1_28[arg1];
              if (tmp49 == null) {
                const items = [tmp47, tmp66.NONE];
                tmp49 = items;
              }
              const first = closure_1_3(tmp49, 1)[0];
              let id2 = first;
              if (first !== closure_1_17.AUTO) {
                id2 = first;
                if (first !== tmp66.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === closure_1_16.STREAM;
                    if (tmp55) {
                      tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = tmp66.NONE;
                  }
                }
              }
              let tmp57 = id2 === tmp66.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_1_35[arg1];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_1_40(arg1, items1);
              flag = true;
              const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          closure_1_40(arg1, null);
          flag = true;
        }
        return flag;
      }, false);
    } else {
      return false;
    }
    obj = experimentDefault;
    const tmp = importDefault;
  },
  GUILD_RING_STOP: function handleGuildRingStop(guildId) {
    ({ channelId, ringing } = guildId);
    let f77590;
    if (obj.getCurrentConfig({ guildId: guildId.guildId, location: "guild_ring_start" }).enabled) {
      let tmp4 = dependencyMap[channelId];
      if (null == tmp4) {
        const tmp9 = new sortKeyDefault(channelId);
        tmp3[channelId] = tmp9;
        tmp4 = tmp9;
      }
      f77590 = tmp4;
      const item = ringing.forEach((userId) => f77590.updateGuildRingingUsers(userId, false));
      const items = [channelId];
      f77590 = (rebuild) => rebuild.rebuild();
      return items.reduce((arg0, arg1) => {
        let tmp4 = closure_1_27[arg1];
        if (null == tmp4) {
          const tmp10 = new closure_1_1(closure_1_2[16])(arg1);
          tmp3[arg1] = tmp10;
          tmp4 = tmp10;
        }
        let flag = arg0;
        if (id(tmp4)) {
          obj = tmp3[arg1];
          if (null == obj) {
            const tmp17 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp17;
            obj = tmp17;
          }
          if (0 !== obj.size()) {
            const channel = closure_1_9.getChannel(arg1);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!Boolean(isGuildVocalOrThreadResult)) {
              let hasEmbeddedActivityResult = obj.size(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp21(tmp22[16]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                let tmp24 = closure_1_20;
                let VIDEO = closure_1_20.VOICE;
              }
              if (VIDEO === tmp24.VOICE) {
                delete tmp2[tmp];
                delete tmp2[tmp];
              } else {
                closure_1_30[arg1] = VIDEO;
              }
              tmp21 = f77575;
              tmp22 = closure_1_2;
            }
            VIDEO = closure_1_20.VIDEO;
            tmp24 = closure_1_20;
          }
          id = closure_1_7.getId();
          let obj2 = tmp3[arg1];
          if (null == obj2) {
            const tmp36 = new closure_1_1(closure_1_2[16])(arg1);
            tmp3[arg1] = tmp36;
            obj2 = tmp36;
          }
          if (0 !== obj2.size()) {
            if (closure_1_11.getVoiceChannelId() === arg1) {
              const NONE = closure_1_17.NONE;
              const found = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let tmp = type.type === constants.STREAM;
                if (tmp) {
                  tmp = null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return tmp;
              });
              if (null != found) {
                closure_1_1(tmp68[18])(found.type === closure_1_16.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj2.size()) {
                if (1 === obj2.size(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_1_3(obj2.toArray(tmp67(tmp68[16]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj2.toArray().find((type) => {
                    let tmp = type.type === closure_1_16.USER;
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
              const channel1 = closure_1_9.getChannel(arg1);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp49 = closure_1_28[arg1];
              if (tmp49 == null) {
                const items = [tmp47, tmp66.NONE];
                tmp49 = items;
              }
              const first = closure_1_3(tmp49, 1)[0];
              let id2 = first;
              if (first !== closure_1_17.AUTO) {
                id2 = first;
                if (first !== tmp66.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp53 = null == participant;
                  if (!tmp53) {
                    let tmp55 = participant.type === closure_1_16.STREAM;
                    if (tmp55) {
                      tmp55 = null == closure_1_6.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp53 = tmp55;
                  }
                  id2 = first;
                  if (tmp53) {
                    id2 = tmp66.NONE;
                  }
                }
              }
              let tmp57 = id2 === tmp66.NONE && null != found;
              if (tmp57) {
                tmp57 = true === closure_1_35[arg1];
              }
              if (tmp57) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_1_40(arg1, items1);
              flag = true;
              const toArrayResult = obj2.toArray(f77575(closure_1_2[16]).ChannelRTCParticipantsIndexes.STREAM);
            }
          }
          closure_1_40(arg1, null);
          flag = true;
        }
        return flag;
      }, false);
    } else {
      return false;
    }
    obj = experimentDefault;
    const tmp = importDefault;
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    const item = items(12).forEach(closure_25, (arg0) => {
      const channel = closure_1_9.getChannel(arg0);
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
    }
    const arr2 = items(12);
    tmp = items;
  }
};
const channelRTCStore = new ChannelRTCStore(dispatcherDefault, obj);
let result = set.fileFinishedImporting("modules/calls/ChannelRTCStore.tsx");

export default channelRTCStore;
export const NO_PARTICIPANTS = frozen;
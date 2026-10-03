// === Module 17134: useExternalPipParticipant ===

// Module 17134 (useExternalPipParticipant)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;

require = fn;
function hasOnlySelfParticipant(participants, meId) {
  if (3 < participants.length) {
    return false;
  } else {
    const iter = participants[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.type !== constants.ACTIVITY) {
        let user = tmp6.user;
        let id;
        if (user != null) {
          id = user.id;
        }
        if (id !== meId) {
          iter.return();
          let flag = false;
          return false;
        }
      }
      continue;
    }
    return true;
  }
}
const CallConstants = fn(4911);
({ isStreamParticipant: closure_8, ParticipantTypes: closure_9 } = CallConstants);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedParticipantStreamId) => {
  const cResult = selectedParticipantStreamId(576).c(3);
  selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
  if (cResult[0] !== selectedParticipantStreamId) {
    const fn = function c() {
      closure_0 = selectedParticipantStreamId;
      if (null != selectedParticipantStreamId) {
        mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, "useExternalPipParticipant"));
        return () => {
          mediaEngine = mediaEngine.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, "useExternalPipParticipant"));
        };
      }
    };
    const items = [selectedParticipantStreamId];
    cResult[0] = selectedParticipantStreamId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((selectedParticipantStreamId) => {
  selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
  const items = [selectedParticipantStreamId];
  const effect = noop.useEffect(() => {
    closure_0 = selectedParticipantStreamId;
    if (null != selectedParticipantStreamId) {
      const useExternalPipParticipant = "useExternalPipParticipant";
      mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant));
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant));
      };
    }
  }, items);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(focusedParticipantStreamId[8]).c(13);
  channelId = channelId.channelId;
  focusedParticipantStreamId = channelId.focusedParticipantStreamId;
  const meId = channelId.meId;
  let obj = channelId(focusedParticipantStreamId[8]);
  const tmp = channelId;
  const tmp2 = focusedParticipantStreamId;
  [tmp5, noop] = meId(noop.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStoresObject];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === focusedParticipantStreamId) {
      if (cResult[3] === meId) {
        let tmp8 = cResult[4];
      }
      if (cResult[5] === channelId) {
        if (cResult[6] === focusedParticipantStreamId) {
          if (cResult[7] === meId) {
            if (cResult[8] === tmp5) {
              let tmp9 = cResult[9];
            }
            stateFromStoresObject = tmp(tmp2[9]).useStateFromStoresObject(first, tmp8, tmp9);
            if (cResult[10] !== stateFromStoresObject.selectedParticipantSpeaking) {
              class E {
                constructor() {
                  if (closure_4.selectedParticipantSpeaking) {
                    tmp = globalThis;
                    _setTimeout = setTimeout;
                    num = 3000;
                    closure_0 = setTimeout(() => {
                      closure_1_3(() => { ... });
                    }, 3000);
                    return () => {
                      clearTimeout(closure_0);
                    };
                  } else {
                    return;
                  }
                }
              }
              const items1 = [stateFromStoresObject.selectedParticipantSpeaking];
              cResult[10] = stateFromStoresObject.selectedParticipantSpeaking;
              cResult[11] = E;
              cResult[12] = items1;
              let tmp12 = items1;
            } else {
              class E {
                constructor() {
                  if (closure_4.selectedParticipantSpeaking) {
                    tmp = globalThis;
                    _setTimeout = setTimeout;
                    num = 3000;
                    closure_0 = setTimeout(() => {
                      closure_1_3(() => { ... });
                    }, 3000);
                    return () => {
                      clearTimeout(closure_0);
                    };
                  } else {
                    return;
                  }
                }
              }
              tmp12 = cResult[12];
            }
            const effect = noop.useEffect(E, tmp12);
            return stateFromStoresObject;
          }
        }
      }
      const items2 = [channelId, focusedParticipantStreamId, meId, tmp5];
      cResult[5] = channelId;
      cResult[6] = focusedParticipantStreamId;
      cResult[7] = meId;
      cResult[8] = tmp5;
      cResult[9] = items2;
      tmp9 = items2;
    }
  }
  const fn = function o() {
    let tmp20;
    let tmp30;
    let tmp35;
    if (null != channelId) {
      if (null == focusedParticipantStreamId) {
        const _Date = Date;
        let tmp24;
        const timestamp = Date.now();
        const participants = ChannelRTCStore.getParticipants(tmp);
        const iter = participants[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (!tmp54) {
            if (tmp5.type === constants.USER) {
              let user = tmp5.user;
              let id;
              if (user != null) {
                id = user.id;
              }
            }
            continue;
          }
          let type = tmp5.type;
          if (constants.USER === type) {
            let speaking = tmp5.speaking;
            if (!speaking) {
              speaking = timestamp - tmp5.lastSpoke < 1000;
            }
            if (speaking) {
              speaking = null == tmp24;
            }
            if (speaking) {
              tmp24 = nextResult;
            }
            let voiceState = tmp5.voiceState;
            let flag;
            if (voiceState != null) {
              flag = voiceState.selfVideo;
            }
            if (flag == null) {
              flag = false;
            }
            if (flag) {
              let tmp27 = null == tmp30;
              if (!tmp27) {
                tmp27 = tmp30.lastSpoke < tmp5.lastSpoke;
              }
              flag = tmp27;
            }
            if (flag) {
              tmp30 = nextResult;
            }
            let tmp32 = null == tmp35;
            if (!tmp32) {
              tmp32 = tmp35.lastSpoke < tmp5.lastSpoke;
            }
            if (tmp32) {
              tmp35 = nextResult;
            }
          } else if (tmp12.STREAM === type) {
            let tmp14 = null != tmp20;
            if (!tmp14) {
              tmp14 = null == tmp5.streamId;
            }
            if (!tmp14) {
              let tmp17 = closure_2_8(tmp5);
              if (tmp17) {
                tmp17 = tmp5.user.id === meId;
              }
              tmp14 = tmp17;
            }
            if (!tmp14) {
              tmp20 = nextResult;
            }
          }
        }
        const obj = { selectedParticipantSpeaking: null != tmp24, selectedParticipantUserId: null, selectedStreamId: null };
        let id1;
        if (tmp24 != null) {
          const user2 = tmp24.user;
          if (user2 != null) {
            id1 = user2.id;
          }
        }
        if (id1 == null) {
          let id2;
          if (tmp30 != null) {
            const user3 = tmp30.user;
            if (user3 != null) {
              id2 = user3.id;
            }
          }
          id1 = id2;
        }
        if (id1 == null) {
          let id3;
          if (tmp35 != null) {
            const user4 = tmp35.user;
            if (user4 != null) {
              id3 = user4.id;
            }
          }
          id1 = id3;
        }
        obj.selectedParticipantUserId = id1;
        if (null != tmp24) {
          const streamId = tmp24.streamId;
          let streamId1 = streamId;
        } else {
          streamId1 = undefined;
          if (tmp20 != null) {
            streamId1 = tmp20.streamId;
          }
          if (streamId1 == null) {
            let streamId2;
            if (tmp30 != null) {
              streamId2 = tmp30.streamId;
            }
            streamId1 = streamId2;
          }
        }
        obj.selectedStreamId = streamId1;
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: "Boolean", selectedStreamId: "application" };
  };
  cResult[1] = channelId;
  cResult[2] = focusedParticipantStreamId;
  cResult[3] = meId;
  cResult[4] = fn;
  tmp8 = fn;
  const tmp4 = meId(noop.useState(0), 2);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focusedParticipantStreamId = channelId.focusedParticipantStreamId;
  const meId = channelId.meId;
  noop = undefined;
  let stateFromStoresObject;
  const tmp = meId(noop.useState(0), 2);
  noop = tmp[1];
  const items = [stateFromStoresObject];
  const items1 = [channelId, focusedParticipantStreamId, meId, tmp[0]];
  stateFromStoresObject = channelId(focusedParticipantStreamId[9]).useStateFromStoresObject(items, () => {
    let tmp20;
    let tmp30;
    let tmp35;
    if (null != channelId) {
      if (null == focusedParticipantStreamId) {
        const _Date = Date;
        let tmp24;
        const timestamp = Date.now();
        const participants = ChannelRTCStore.getParticipants(tmp);
        const iter = participants[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (!tmp54) {
            if (tmp5.type === constants.USER) {
              let user = tmp5.user;
              let id;
              if (user != null) {
                id = user.id;
              }
            }
            continue;
          }
          let type = tmp5.type;
          if (constants.USER === type) {
            let speaking = tmp5.speaking;
            if (!speaking) {
              speaking = timestamp - tmp5.lastSpoke < 1000;
            }
            if (speaking) {
              speaking = null == tmp24;
            }
            if (speaking) {
              tmp24 = nextResult;
            }
            let voiceState = tmp5.voiceState;
            let flag;
            if (voiceState != null) {
              flag = voiceState.selfVideo;
            }
            if (flag == null) {
              flag = false;
            }
            if (flag) {
              let tmp27 = null == tmp30;
              if (!tmp27) {
                tmp27 = tmp30.lastSpoke < tmp5.lastSpoke;
              }
              flag = tmp27;
            }
            if (flag) {
              tmp30 = nextResult;
            }
            let tmp32 = null == tmp35;
            if (!tmp32) {
              tmp32 = tmp35.lastSpoke < tmp5.lastSpoke;
            }
            if (tmp32) {
              tmp35 = nextResult;
            }
          } else if (tmp12.STREAM === type) {
            let tmp14 = null != tmp20;
            if (!tmp14) {
              tmp14 = null == tmp5.streamId;
            }
            if (!tmp14) {
              let tmp17 = closure_2_8(tmp5);
              if (tmp17) {
                tmp17 = tmp5.user.id === meId;
              }
              tmp14 = tmp17;
            }
            if (!tmp14) {
              tmp20 = nextResult;
            }
          }
        }
        const obj = { selectedParticipantSpeaking: null != tmp24, selectedParticipantUserId: null, selectedStreamId: null };
        let id1;
        if (tmp24 != null) {
          const user2 = tmp24.user;
          if (user2 != null) {
            id1 = user2.id;
          }
        }
        if (id1 == null) {
          let id2;
          if (tmp30 != null) {
            const user3 = tmp30.user;
            if (user3 != null) {
              id2 = user3.id;
            }
          }
          id1 = id2;
        }
        if (id1 == null) {
          let id3;
          if (tmp35 != null) {
            const user4 = tmp35.user;
            if (user4 != null) {
              id3 = user4.id;
            }
          }
          id1 = id3;
        }
        obj.selectedParticipantUserId = id1;
        if (null != tmp24) {
          const streamId = tmp24.streamId;
          let streamId1 = streamId;
        } else {
          streamId1 = undefined;
          if (tmp20 != null) {
            streamId1 = tmp20.streamId;
          }
          if (streamId1 == null) {
            let streamId2;
            if (tmp30 != null) {
              streamId2 = tmp30.streamId;
            }
            streamId1 = streamId2;
          }
        }
        obj.selectedStreamId = streamId1;
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: "Boolean", selectedStreamId: "application" };
  }, items1);
  const items2 = [stateFromStoresObject.selectedParticipantSpeaking];
  const effect = noop.useEffect(() => {
    if (stateFromStoresObject.selectedParticipantSpeaking) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_3((arg0) => arg0 + 1);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items2);
  return stateFromStoresObject;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(meId[8]).c(4);
  channelId = channelId.channelId;
  meId = channelId.meId;
  noop.useRef(undefined);
  noop = noop.useRef(undefined);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === meId) {
      let tmp6 = cResult[3];
    }
    return tmp(tmp2[9]).useStateFromStoresObject(first, tmp6);
  }
  const fn = function l() {
    let selectedParticipant = null;
    if (null != channelId) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    if (!closure_2_8(selectedParticipant)) {
      let tmp6 = selectedParticipant;
    } else {
      const user = selectedParticipant.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      tmp6 = null;
    }
    if (undefined === ref.current) {
      let id1;
      if (tmp6 != null) {
        id1 = tmp6.id;
      }
      ref.current = id1;
      let type;
      if (tmp6 != null) {
        type = tmp6.type;
      }
      ref2.current = type;
    }
    let id2;
    if (tmp6 != null) {
      id2 = tmp6.id;
    }
    if (ref.current !== id2) {
      const obj2 = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "Reflect", focusedParticipantType: ref2.current };
      let obj = obj2;
    } else {
      let type1;
      if (tmp6 != null) {
        type1 = tmp6.type;
      }
      let tmp14;
      if (type1 !== constants.ACTIVITY) {
        let streamId;
        if (tmp6 != null) {
          streamId = tmp6.streamId;
        }
        tmp14 = streamId;
      }
      obj = { focusedParticipantStreamId: tmp14, focusedParticipantUserId: null, focusedParticipantType: null };
      let type2;
      if (tmp6 != null) {
        type2 = tmp6.type;
      }
      let tmp17;
      if (type2 !== constants.ACTIVITY) {
        let id3;
        if (tmp6 != null) {
          const user2 = tmp6.user;
          if (user2 != null) {
            id3 = user2.id;
          }
        }
        tmp17 = id3;
      }
      obj.focusedParticipantUserId = tmp17;
      let type3;
      if (tmp6 != null) {
        type3 = tmp6.type;
      }
      obj.focusedParticipantType = type3;
    }
    return obj;
  };
  cResult[1] = channelId;
  cResult[2] = meId;
  cResult[3] = fn;
  tmp6 = fn;
  let obj = channelId(meId[8]);
  tmp = channelId;
  tmp2 = meId;
}) : ((arg0) => {
  ({ channelId: require, meId: dependencyMap } = arg0);
  noop = undefined;
  noop.useRef(undefined);
  noop = noop.useRef(undefined);
  const items = [ChannelRTCStore];
  return initialize.useStateFromStoresObject(items, () => {
    let selectedParticipant = null;
    if (null != require) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    if (!closure_2_8(selectedParticipant)) {
      let tmp6 = selectedParticipant;
    } else {
      const user = selectedParticipant.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      tmp6 = null;
    }
    if (undefined === ref.current) {
      let id1;
      if (tmp6 != null) {
        id1 = tmp6.id;
      }
      ref.current = id1;
      let type;
      if (tmp6 != null) {
        type = tmp6.type;
      }
      ref2.current = type;
    }
    let id2;
    if (tmp6 != null) {
      id2 = tmp6.id;
    }
    if (ref.current !== id2) {
      const obj2 = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "Reflect", focusedParticipantType: ref2.current };
      let obj = obj2;
    } else {
      let type1;
      if (tmp6 != null) {
        type1 = tmp6.type;
      }
      let tmp14;
      if (type1 !== constants.ACTIVITY) {
        let streamId;
        if (tmp6 != null) {
          streamId = tmp6.streamId;
        }
        tmp14 = streamId;
      }
      obj = { focusedParticipantStreamId: tmp14, focusedParticipantUserId: null, focusedParticipantType: null };
      let type2;
      if (tmp6 != null) {
        type2 = tmp6.type;
      }
      let tmp17;
      if (type2 !== constants.ACTIVITY) {
        let id3;
        if (tmp6 != null) {
          const user2 = tmp6.user;
          if (user2 != null) {
            id3 = user2.id;
          }
        }
        tmp17 = id3;
      }
      obj.focusedParticipantUserId = tmp17;
      let type3;
      if (tmp6 != null) {
        type3 = tmp6.type;
      }
      obj.focusedParticipantType = type3;
    }
    return obj;
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(17);
  const items = [RTCConnectionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => channelId.getChannelId());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthenticationStore];
    const fn = function n() {
      return id.getId();
    };
    cResult[0] = items1;
    cResult[1] = fn;
    tmp5 = items1;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores1 = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === stateFromStores1) {
      let tmp9 = cResult[4];
    }
    ({ focusedParticipantStreamId, focusedParticipantType } = closure_13(tmp9));
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === focusedParticipantStreamId) {
        if (cResult[7] === stateFromStores1) {
          let tmp13 = cResult[8];
        }
        const tmp15 = closure_12(tmp13);
        ({ selectedParticipantUserId, selectedParticipantSpeaking } = tmp15);
        let selectedStreamId = focusedParticipantStreamId;
        if (focusedParticipantStreamId == null) {
          selectedStreamId = tmp15.selectedStreamId;
        }
        if (null != focusedParticipantStreamId) {
          selectedParticipantUserId = tmp12;
        }
        if (cResult[9] !== selectedStreamId) {
          const obj3 = { selectedParticipantStreamId: selectedStreamId };
          cResult[9] = selectedStreamId;
          cResult[10] = obj3;
          let tmp16 = obj3;
        } else {
          tmp16 = cResult[10];
        }
        closure_11(tmp16);
        if (cResult[11] === stateFromStores) {
          if (cResult[12] === focusedParticipantType) {
            if (cResult[13] === selectedParticipantUserId) {
              if (cResult[14] === selectedParticipantSpeaking) {
                if (cResult[15] === selectedStreamId) {
                  let tmp19 = cResult[16];
                }
                return tmp19;
              }
            }
          }
        }
        const obj4 = { channelId: stateFromStores, selectedParticipantStreamId: selectedStreamId, selectedParticipantUserId, selectedParticipantSpeaking, focusedParticipantType };
        cResult[11] = stateFromStores;
        cResult[12] = focusedParticipantType;
        cResult[13] = selectedParticipantUserId;
        cResult[14] = selectedParticipantSpeaking;
        cResult[15] = selectedStreamId;
        cResult[16] = obj4;
        tmp19 = obj4;
      }
    }
    const obj5 = { channelId: stateFromStores, focusedParticipantStreamId, meId: stateFromStores1 };
    cResult[5] = stateFromStores;
    cResult[6] = focusedParticipantStreamId;
    cResult[7] = stateFromStores1;
    cResult[8] = obj5;
    tmp13 = obj5;
    const tmp11 = closure_13(tmp9);
  }
  const obj6 = { channelId: stateFromStores, meId: stateFromStores1 };
  cResult[2] = stateFromStores;
  cResult[3] = stateFromStores1;
  cResult[4] = obj6;
  tmp9 = obj6;
  const tmpResult = initialize;
}) : (() => {
  const items = [RTCConnectionStore];
  const channelId = initialize.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [AuthenticationStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  const tmp5 = closure_13({ channelId, meId: stateFromStores1 });
  const focusedParticipantStreamId = tmp5.focusedParticipantStreamId;
  ({ focusedParticipantUserId, focusedParticipantType } = tmp5);
  const selectedParticipantSpeaking = closure_12({ channelId, focusedParticipantStreamId, meId: stateFromStores1 });
  let selectedParticipantUserId = selectedParticipantSpeaking.selectedParticipantUserId;
  let selectedParticipantStreamId = focusedParticipantStreamId;
  if (focusedParticipantStreamId == null) {
    selectedParticipantStreamId = selectedParticipantSpeaking.selectedStreamId;
  }
  if (null != focusedParticipantStreamId) {
    selectedParticipantUserId = focusedParticipantUserId;
  }
  closure_11({ selectedParticipantStreamId });
  return { channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking: selectedParticipantSpeaking.selectedParticipantSpeaking, focusedParticipantType };
});
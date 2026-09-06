// === Module 17005: useExternalPipParticipant ===

// Module 17005 (useExternalPipParticipant)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

const require = fn;
const CallConstants = fn(4581);
({ isStreamParticipant: closure_8, ParticipantTypes: closure_9 } = CallConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  const items = [RTCConnectionStore];
  channelId = channelId(stateFromStores1[7]).useStateFromStores(items, () => channelId.getChannelId());
  let tmpResult = tmp(tmp2[7]);
  const items1 = [AuthenticationStore];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => id.getId());
  noop = undefined;
  _slicedToArray = noop.useRef(undefined);
  noop = noop.useRef(undefined);
  tmpResult = tmp(tmp2[7]);
  const items2 = [ChannelRTCStore];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items2, () => {
    let selectedParticipant = null;
    if (null != channelId) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    if (!React6(selectedParticipant)) {
      let tmp6 = selectedParticipant;
    } else {
      const user = selectedParticipant.user;
      id = undefined;
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
      tmp7.current = id1;
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
      let obj = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "isArray", focusedParticipantType: ref2.current };
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
      if (type2 !== tmp13.ACTIVITY) {
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
      tmp13 = constants;
    }
    return obj;
  });
  const focusedParticipantStreamId = stateFromStoresObject.focusedParticipantStreamId;
  closure_129_0 = channelId;
  closure_129_1 = focusedParticipantStreamId;
  closure_129_2 = stateFromStores1;
  closure_129_3 = undefined;
  ({ focusedParticipantUserId, focusedParticipantType } = stateFromStoresObject);
  let obj = channelId(stateFromStores1[7]);
  const obj3 = noop;
  [tmp7, closure_129_3] = _slicedToArray(noop.useState(0), 2);
  let tmp6 = _slicedToArray(noop.useState(0), 2);
  const items3 = [ChannelRTCStore];
  const items4 = [channelId, focusedParticipantStreamId, stateFromStores1, tmp7];
  const selectedParticipantSpeaking = channelId(stateFromStores1[7]).useStateFromStoresObject(items3, () => {
    let tmp20;
    let tmp30;
    let tmp35;
    if (null != channelId) {
      if (null == stateFromStores1) {
        const _Date = Date;
        let tmp24;
        const timestamp = Date.now();
        const participants = ChannelRTCStore.getParticipants(tmp);
        let iter = participants[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (!tmp53) {
            if (tmp5.type === constants.USER) {
              let user = tmp5.user;
              id = undefined;
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
              let tmp17 = React6(tmp5);
              if (tmp17) {
                tmp17 = tmp5.user.id === closure_2;
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
          let streamId = tmp24.streamId;
        } else {
          streamId = undefined;
          if (tmp20 != null) {
            streamId = tmp20.streamId;
          }
          if (streamId == null) {
            let streamId1;
            if (tmp30 != null) {
              streamId1 = tmp30.streamId;
            }
            streamId = streamId1;
          }
        }
        obj.selectedStreamId = streamId;
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: "Boolean", selectedStreamId: "call" };
  }, items4);
  closure_129_4 = selectedParticipantSpeaking;
  const items5 = [selectedParticipantSpeaking.selectedParticipantSpeaking];
  const effect = noop.useEffect(() => {
    if (closure_4.selectedParticipantSpeaking) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        ref2((arg0) => arg0 + 1);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items5);
  let selectedParticipantUserId = selectedParticipantSpeaking.selectedParticipantUserId;
  let selectedParticipantStreamId = focusedParticipantStreamId;
  if (focusedParticipantStreamId == null) {
    selectedParticipantStreamId = selectedParticipantSpeaking.selectedStreamId;
  }
  if (null != focusedParticipantStreamId) {
    selectedParticipantUserId = focusedParticipantUserId;
  }
  closure_130_0 = selectedParticipantStreamId;
  const items6 = [selectedParticipantStreamId];
  const effect1 = obj3.useEffect(() => {
    closure_0 = channelId;
    if (null != channelId) {
      const useExternalPipParticipant = "useExternalPipParticipant";
      mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant));
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant));
      };
    }
  }, items6);
  return { channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking: selectedParticipantSpeaking.selectedParticipantSpeaking, focusedParticipantType };
};
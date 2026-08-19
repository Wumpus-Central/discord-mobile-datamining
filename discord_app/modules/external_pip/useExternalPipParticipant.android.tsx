// === Module 16224: useExternalPipParticipant ===

// Module 16224 (useExternalPipParticipant)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import getParticipants from "getParticipants" /* 4773 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import ParticipantTypes from "ParticipantTypes" /* 4544 */;

const require = fn;
({ isStreamParticipant: closure_8, ParticipantTypes: c9 } = ParticipantTypes);
const result = require("obj132").fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  const items = [closure_7];
  const channelId = selectedParticipantStreamId(focusedParticipantStreamId[7]).useStateFromStores(items, () => channelId.getChannelId());
  let tmpResult = tmp(tmp2[7]);
  const items1 = [closure_5];
  let stateFromStores1 = tmpResult.useStateFromStores(items1, () => id.getId());
  let React;
  stateFromStores1 = React.useRef(undefined);
  React.useRef(undefined);
  tmpResult = tmp(tmp2[7]);
  const items2 = [selectedParticipantSpeaking];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items2, () => {
    let selectedParticipant = null;
    if (null != selectedParticipantStreamId) {
      selectedParticipant = selectedParticipantSpeaking.getSelectedParticipant(tmp);
    }
    if (!closure_1_8(selectedParticipant)) {
      let tmp6 = selectedParticipant;
    } else {
      const user = selectedParticipant.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      tmp6 = null;
    }
    if (undefined === stateFromStores1.current) {
      let id1;
      if (tmp6 != null) {
        id1 = tmp6.id;
      }
      stateFromStores1.current = id1;
      let type;
      if (tmp6 != null) {
        type = tmp6.type;
      }
      _undefined.current = type;
    }
    let id2;
    if (tmp6 != null) {
      id2 = tmp6.id;
    }
    if (stateFromStores1.current !== id2) {
      let obj = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "ct", focusedParticipantType: null };
      obj[2] = _undefined.current;
    } else {
      let type1;
      if (tmp6 != null) {
        type1 = tmp6.type;
      }
      let tmp14;
      if (type1 !== closure_1_9.ACTIVITY) {
        let streamId;
        if (tmp6 != null) {
          streamId = tmp6.streamId;
        }
        tmp14 = streamId;
      }
      obj = { focusedParticipantStreamId: null, focusedParticipantUserId: null, focusedParticipantType: null };
      obj[0] = tmp14;
      let type2;
      if (tmp6 != null) {
        type2 = tmp6.type;
      }
      let tmp17;
      if (type2 !== closure_1_9.ACTIVITY) {
        let id3;
        if (tmp6 != null) {
          const user2 = tmp6.user;
          if (user2 != null) {
            id3 = user2.id;
          }
        }
        tmp17 = id3;
      }
      obj[1] = tmp17;
      let type3;
      if (tmp6 != null) {
        type3 = tmp6.type;
      }
      obj[2] = type3;
    }
    return obj;
  });
  focusedParticipantStreamId = stateFromStoresObject.focusedParticipantStreamId;
  selectedParticipantStreamId = channelId;
  React = undefined;
  selectedParticipantSpeaking = undefined;
  ({ focusedParticipantUserId, focusedParticipantType } = stateFromStoresObject);
  let obj = selectedParticipantStreamId(focusedParticipantStreamId[7]);
  const obj3 = React;
  [tmp7, c3] = stateFromStores1(React.useState(0), 2);
  let tmp6 = stateFromStores1(React.useState(0), 2);
  const items3 = [selectedParticipantSpeaking];
  const items4 = [channelId, focusedParticipantStreamId, stateFromStores1, tmp7];
  selectedParticipantSpeaking = selectedParticipantStreamId(focusedParticipantStreamId[7]).useStateFromStoresObject(items3, () => {
    let tmp20;
    let tmp30;
    let tmp35;
    if (null != selectedParticipantStreamId) {
      if (null == focusedParticipantStreamId) {
        const _Date = Date;
        let tmp24;
        const timestamp = Date.now();
        const participants = selectedParticipantSpeaking.getParticipants(tmp);
        let iter = participants[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (!tmp53) {
            if (tmp5.type === closure_1_9.USER) {
              let user = tmp5.user;
              let id;
              if (user != null) {
                id = user.id;
              }
            }
            continue;
          }
          let type = tmp5.type;
          if (closure_1_9.USER === type) {
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
              let tmp17 = closure_1_8(tmp5);
              if (tmp17) {
                tmp17 = tmp5.user.id === stateFromStores1;
              }
              tmp14 = tmp17;
            }
            if (!tmp14) {
              tmp20 = nextResult;
            }
          }
        }
        const obj = { selectedParticipantSpeaking: null, selectedParticipantUserId: null, selectedStreamId: null };
        obj[0] = null != tmp24;
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
        obj[1] = id1;
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
        obj[2] = streamId;
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: "Boolean", selectedStreamId: "HermesInternal" };
  }, items4);
  const items5 = [selectedParticipantSpeaking.selectedParticipantSpeaking];
  const effect = React.useEffect(() => {
    if (selectedParticipantSpeaking.selectedParticipantSpeaking) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback((arg0) => arg0 + 1);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items5);
  let selectedParticipantUserId = selectedParticipantSpeaking.selectedParticipantUserId;
  selectedParticipantStreamId = focusedParticipantStreamId;
  if (focusedParticipantStreamId == null) {
    selectedParticipantStreamId = selectedParticipantSpeaking.selectedStreamId;
  }
  if (null != focusedParticipantStreamId) {
    selectedParticipantUserId = focusedParticipantUserId;
  }
  const items6 = [selectedParticipantStreamId];
  const effect1 = obj3.useEffect(() => {
    if (null != closure_0) {
      const useExternalPipParticipant = "useExternalPipParticipant";
      let mediaEngine = closure_1_6.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant));
      return () => {
        const mediaEngine = closure_1_6.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, false, closure_1));
      };
    }
  }, items6);
  return { channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking: selectedParticipantSpeaking.selectedParticipantSpeaking, focusedParticipantType };
};
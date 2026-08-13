// discord_app/modules/external_pip/useExternalPipParticipant.android.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
const result = require("getParticipants").fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  let c3;
  let focusedParticipantType;
  let focusedParticipantUserId;
  let tmp7;
  const items = [createRTCConnection];
  const channelId = selectedParticipantStreamId(focusedParticipantStreamId[7]).useStateFromStores(items, () => channelId.getChannelId());
  selectedParticipantStreamId = channelId;
  focusedParticipantStreamId = React.useRef(undefined);
  let stateFromStores1 = React.useRef(undefined);
  let tmpResult = tmp(tmp2[7]);
  const items1 = [selectedParticipantSpeaking];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let selectedParticipantId = null;
    if (null != selectedParticipantStreamId) {
      selectedParticipantId = selectedParticipantSpeaking.getSelectedParticipantId(tmp);
    }
    let tmp4 = null;
    if (null != selectedParticipantId) {
      tmp4 = null;
      if (null != tmp) {
        let participant = selectedParticipantSpeaking.getParticipant(tmp, selectedParticipantId);
        if (participant == null) {
          participant = null;
        }
        tmp4 = participant;
      }
    }
    if (undefined === focusedParticipantStreamId.current) {
      let id;
      if (tmp4 != null) {
        id = tmp4.id;
      }
      tmp7.current = id;
      let type;
      if (tmp4 != null) {
        type = tmp4.type;
      }
      stateFromStores1.current = type;
      const tmp9 = stateFromStores1;
    }
    let id1;
    if (tmp4 != null) {
      id1 = tmp4.id;
    }
    if (focusedParticipantStreamId.current !== id1) {
      let obj = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "accessibilityRole", focusedParticipantType: 1140851135 };
      obj[2] = stateFromStores1.current;
    } else {
      let type1;
      if (tmp4 != null) {
        type1 = tmp4.type;
      }
      let tmp14;
      if (type1 !== outer1_8.ACTIVITY) {
        let streamId;
        if (tmp4 != null) {
          streamId = tmp4.streamId;
        }
        tmp14 = streamId;
      }
      obj = { focusedParticipantStreamId: null, focusedParticipantUserId: null, focusedParticipantType: null };
      obj[0] = tmp14;
      let type2;
      if (tmp4 != null) {
        type2 = tmp4.type;
      }
      let tmp17;
      if (type2 !== tmp13.ACTIVITY) {
        let id2;
        if (tmp4 != null) {
          const user = tmp4.user;
          if (user != null) {
            id2 = user.id;
          }
        }
        tmp17 = id2;
      }
      obj[1] = tmp17;
      let type3;
      if (tmp4 != null) {
        type3 = tmp4.type;
      }
      obj[2] = type3;
      tmp13 = outer1_8;
    }
    return obj;
  });
  focusedParticipantStreamId = stateFromStoresObject.focusedParticipantStreamId;
  selectedParticipantStreamId = channelId;
  stateFromStores1 = undefined;
  React = undefined;
  selectedParticipantSpeaking = undefined;
  ({ focusedParticipantUserId, focusedParticipantType } = stateFromStoresObject);
  tmpResult = tmp(tmp2[7]);
  const items2 = [fetchFingerprint];
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => id.getId());
  let obj = selectedParticipantStreamId(focusedParticipantStreamId[7]);
  const obj2 = React;
  [tmp7, c3] = stateFromStores1(React.useState(0), 2);
  let tmp6 = stateFromStores1(React.useState(0), 2);
  const items3 = [selectedParticipantSpeaking];
  const items4 = [channelId, focusedParticipantStreamId, stateFromStores1, tmp7];
  selectedParticipantSpeaking = selectedParticipantStreamId(focusedParticipantStreamId[7]).useStateFromStoresObject(items3, () => {
    let tmp15;
    let tmp25;
    let tmp30;
    if (null != selectedParticipantStreamId) {
      if (null == focusedParticipantStreamId) {
        const _Date = Date;
        let tmp19;
        const timestamp = Date.now();
        const participants = selectedParticipantSpeaking.getParticipants(tmp);
        let iter = participants[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (!tmp48) {
            let tmp6 = nextResult;
            let tmp7 = outer1_8;
            if (tmp5.type === outer1_8.USER) {
              let tmp8 = nextResult;
              let user = tmp5.user;
              let id;
              if (user != null) {
                id = user.id;
              }
              let tmp10 = stateFromStores1;
            }
            continue;
          }
          let tmp11 = nextResult;
          let type = tmp5.type;
          if (outer1_8.USER === type) {
            let tmp16 = nextResult;
            let speaking = tmp5.speaking;
            if (!speaking) {
              let tmp17 = nextResult;
              speaking = timestamp - tmp5.lastSpoke < 1000;
            }
            if (speaking) {
              let tmp18 = tmp19;
              speaking = null == tmp19;
            }
            if (speaking) {
              tmp19 = nextResult;
            }
            let tmp20 = nextResult;
            let voiceState = tmp5.voiceState;
            let flag;
            if (voiceState != null) {
              flag = voiceState.selfVideo;
            }
            if (flag == null) {
              flag = false;
            }
            if (flag) {
              let tmp21 = tmp25;
              let tmp22 = null == tmp25;
              if (!tmp22) {
                let tmp23 = tmp25;
                let tmp24 = nextResult;
                tmp22 = tmp25.lastSpoke < tmp5.lastSpoke;
              }
              flag = tmp22;
            }
            if (flag) {
              tmp25 = nextResult;
            }
            let tmp26 = tmp30;
            let tmp27 = null == tmp30;
            if (!tmp27) {
              let tmp28 = tmp30;
              let tmp29 = nextResult;
              tmp27 = tmp30.lastSpoke < tmp5.lastSpoke;
            }
            if (tmp27) {
              tmp30 = nextResult;
            }
          } else if (tmp12.STREAM === type) {
            let tmp50 = tmp15;
            let tmp14 = null == tmp15;
            if (tmp14) {
              let tmp13 = nextResult;
              tmp14 = null != tmp5.streamId;
            }
            if (tmp14) {
              tmp15 = nextResult;
            }
          }
        }
        const obj = { selectedParticipantSpeaking: null, selectedParticipantUserId: null, selectedStreamId: null };
        obj[0] = null != tmp19;
        let id1;
        if (tmp19 != null) {
          const user2 = tmp19.user;
          if (user2 != null) {
            id1 = user2.id;
          }
        }
        if (id1 == null) {
          let id2;
          if (tmp25 != null) {
            const user3 = tmp25.user;
            if (user3 != null) {
              id2 = user3.id;
            }
          }
          id1 = id2;
        }
        if (id1 == null) {
          let id3;
          if (tmp30 != null) {
            const user4 = tmp30.user;
            if (user4 != null) {
              id3 = user4.id;
            }
          }
          id1 = id3;
        }
        obj[1] = id1;
        if (null != tmp19) {
          let streamId = tmp19.streamId;
        } else {
          streamId = undefined;
          if (tmp15 != null) {
            streamId = tmp15.streamId;
          }
          if (streamId == null) {
            let streamId1;
            if (tmp25 != null) {
              streamId1 = tmp25.streamId;
            }
            streamId = streamId1;
          }
        }
        obj[2] = streamId;
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: "Boolean", selectedStreamId: "call" };
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
  const effect1 = obj2.useEffect(() => {
    if (null != closure_0) {
      const useExternalPipParticipant = "useExternalPipParticipant";
      let mediaEngine = outer1_6.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant));
      return () => {
        const mediaEngine = outer1_6.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, false, closure_1));
      };
    }
  }, items6);
  return { channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking: selectedParticipantSpeaking.selectedParticipantSpeaking, focusedParticipantType };
};
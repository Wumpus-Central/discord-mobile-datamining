// discord_app/modules/external_pip/useExternalPipParticipant.android.tsx
import participantHasVideo from "../video_calls/participantHasVideo.tsx";
import VoicePanelPIPUtils from "../voice_panel/native/pip/VoicePanelPIPUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import PIPSpeakerStore from "../voice_panel/native/pip/PIPSpeakerStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

require = fn;
const ParticipantTypes = fn(5593).ParticipantTypes;
const VoicePanelModes = fn(10693).VoicePanelModes;
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
      const cResult = selectedParticipantStreamId(576).c(3);
      selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
      if (cResult[0] !== selectedParticipantStreamId) {
        const fn = function c() {
          closure_0 = selectedParticipantStreamId;
          if (null != selectedParticipantStreamId) {
            mediaEngine = MediaEngineStore.getMediaEngine();
            mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
              setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, "useExternalPipParticipant"),
            );
            return () => {
              mediaEngine = mediaEngine.getMediaEngine();
              mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
                setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(
                  closure_1_0,
                  false,
                  "useExternalPipParticipant",
                ),
              );
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
    }
  : function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
      selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
      const items = [selectedParticipantStreamId];
      const effect = noop.useEffect(() => {
        closure_0 = selectedParticipantStreamId;
        if (null != selectedParticipantStreamId) {
          const useExternalPipParticipant = "useExternalPipParticipant";
          mediaEngine = MediaEngineStore.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
            setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant),
          );
          return () => {
            mediaEngine = mediaEngine.getMediaEngine();
            mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
              setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant),
            );
          };
        }
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useExternalPipParticipant() {
      const cResult = stateFromStores(stateFromStores1[10]).c(20);
      let obj = stateFromStores(stateFromStores1[10]);
      const items = [RTCConnectionStore];
      stateFromStores = stateFromStores(stateFromStores1[11]).useStateFromStores(items, () => channelId.getChannelId());
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelRTCStore];
        cResult[0] = items1;
        let first = items1;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
        cResult[1] = stateFromStores;
        cResult[2] = I;
      } else {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
      }
      let obj2 = stateFromStores(stateFromStores1[11]);
      stateFromStores1 = stateFromStores(stateFromStores1[11]).useStateFromStores(first, I);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
        const items2 = [PIPSpeakerStore];
        cResult[3] = items2;
        const tmp9 = items2;
      } else {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
      }
      if (cResult[4] !== stateFromStores) {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = tmp11;
      } else {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
      }
      const tmpResult = stateFromStores(stateFromStores1[11]);
      const stateFromStores2 = stateFromStores(stateFromStores1[11]).useStateFromStores(tmp9, tmp11);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
        const items3 = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
        cResult[6] = items3;
      } else {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
      }
      if (cResult[7] === stateFromStores) {
        class I {
          constructor() {
            tmp2 = undefined;
            if (null != c0) {
              tmp3 = closure_3;
              selectedParticipantId = closure_3.getSelectedParticipantId(tmp);
              tmp2 = selectedParticipantId;
            }
            return tmp2;
          }
        }
      }
      class T {
        constructor() {
          tmp = c0;
          if (null != c0) {
            tmp3 = closure_0;
            tmp4 = closure_1;
            obj = closure_0(closure_1[12]);
            obj1 = {
              channelId: null,
              panelMode: null,
              focusedParticipantId: null,
              lastParticipantId: null,
              speakingUserId: null,
              blockList: null,
              showSecondaryPIP: false,
              canShowActivities: false,
            };
            obj1.channelId = tmp;
            tmp5 = VoicePanelModes;
            obj1.panelMode = VoicePanelModes.PIP;
            tmp6 = closure_1;
            obj1.focusedParticipantId = closure_1;
            obj1.lastParticipantId = closure_1;
            tmp7 = closure_2;
            obj1.speakingUserId = closure_2;
            tmp8 = closure_0;
            tmp9 = closure_1;
            obj3 = closure_0(closure_1[12]);
            obj1.blockList = obj3.createPIPBlockList(VoicePanelModes.PIP, closure_1);
            pIPParticipantToShow = obj.computePIPParticipantToShow(obj1);
          }
          participant = undefined;
          if (null != tmp) {
            if (null != pIPParticipantToShow) {
              tmp11 = closure_3;
              participant = closure_3.getParticipant(tmp, pIPParticipantToShow.id);
            }
          }
          if (null != participant) {
            if (participant.type !== ParticipantTypes.ACTIVITY) {
              obj6 = {
                participantType: null,
                selectedParticipantSpeaking: null,
                selectedParticipantStreamId: null,
                selectedParticipantUserId: null,
              };
              obj6.participantType = participant.type;
              obj6.selectedParticipantSpeaking = participant.type === tmp15.USER && participant.speaking;
              tmp12 = closure_0;
              tmp13 = closure_1;
              obj5 = closure_0(closure_1[13]);
              tmp14 = undefined;
              if (obj5.canRenderParticipantVideo(participant)) {
                streamId = participant.streamId;
                tmp14 = streamId;
              }
              obj6.selectedParticipantStreamId = tmp14;
              obj6.selectedParticipantUserId = participant.user.id;
            }
            return obj6;
          }
          obj6 = {
            participantType: "test",
            selectedParticipantSpeaking: "duration",
            selectedParticipantStreamId: "toCharArray$esjava$1",
            selectedParticipantUserId: null,
          };
          return;
        }
      }
      const items4 = [stateFromStores, stateFromStores1, stateFromStores2];
      cResult[7] = stateFromStores;
      cResult[8] = stateFromStores1;
      cResult[9] = stateFromStores2;
      cResult[10] = T;
      cResult[11] = items4;
      const tmpResult2 = stateFromStores(stateFromStores1[11]);
    }
  : function useExternalPipParticipant() {
      const items = [RTCConnectionStore];
      channelId = channelId(stateFromStores1[11]).useStateFromStores(items, () => channelId.getChannelId());
      let obj = channelId(stateFromStores1[11]);
      const items1 = [ChannelRTCStore];
      stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => {
        let tmp2;
        if (null != channelId) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      });
      const tmpResult = channelId(stateFromStores1[11]);
      const items2 = [PIPSpeakerStore];
      const stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () =>
        PIPSpeakerStore.getSpeakerId(channelId),
      );
      const tmpResult3 = channelId(stateFromStores1[11]);
      const items3 = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
      const items4 = [channelId, stateFromStores1, stateFromStores2];
      const stateFromStoresObject = channelId(stateFromStores1[11]).useStateFromStoresObject(
        items3,
        () => {
          if (null != channelId) {
            const obj2 = {
              channelId,
              panelMode: VoicePanelModes.PIP,
              focusedParticipantId: stateFromStores1,
              lastParticipantId: stateFromStores1,
              speakingUserId: stateFromStores2,
              blockList: null,
              showSecondaryPIP: false,
              canShowActivities: false,
            };
            const obj = VoicePanelPIPUtils;
            obj2.blockList = VoicePanelPIPUtils.createPIPBlockList(VoicePanelModes.PIP, stateFromStores1);
            const pIPParticipantToShow = obj.computePIPParticipantToShow(obj2);
          }
          let participant;
          if (null != channelId) {
            if (null != pIPParticipantToShow) {
              participant = ChannelRTCStore.getParticipant(channelId, pIPParticipantToShow.id);
            }
          }
          if (null != participant) {
            if (participant.type !== ParticipantTypes.ACTIVITY) {
              let obj4 = {
                participantType: participant.type,
                selectedParticipantSpeaking: participant.type === tmp15.USER && participant.speaking,
                selectedParticipantStreamId: null,
                selectedParticipantUserId: null,
              };
              let tmp14;
              if (obj5.canRenderParticipantVideo(participant)) {
                const streamId = participant.streamId;
                tmp14 = streamId;
              }
              obj4.selectedParticipantStreamId = tmp14;
              obj4.selectedParticipantUserId = participant.user.id;
              obj5 = participantHasVideo;
            }
            return obj4;
          }
          obj4 = {
            participantType: "test",
            selectedParticipantSpeaking: "duration",
            selectedParticipantStreamId: "toCharArray$esjava$1",
            selectedParticipantUserId: null,
          };
        },
        items4,
      );
      const selectedParticipantStreamId = stateFromStoresObject.selectedParticipantStreamId;
      ({ participantType, selectedParticipantSpeaking, selectedParticipantUserId } = stateFromStoresObject);
      closure_11({ selectedParticipantStreamId });
      return {
        channelId,
        participantType,
        selectedParticipantSpeaking,
        selectedParticipantStreamId,
        selectedParticipantUserId,
      };
    };

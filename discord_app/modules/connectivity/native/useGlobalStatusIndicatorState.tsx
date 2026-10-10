// discord_app/modules/connectivity/native/useGlobalStatusIndicatorState.tsx
import useIsInvitedToSpeakDefault from "../../stage_channels/useIsInvitedToSpeak.tsx";
import useVoiceStateForRemoteSessionDefault from "../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

const useMyCurrentStageChannelDefault = tmp4(11027);
const require = fn;
const RTC_PANEL_HEIGHT = fn(11024).RTC_PANEL_HEIGHT;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGlobalStatusIndicatorState(arg0) {
      const cResult = stateFromStores(576).c(23);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isActivityViewFocused: false };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const obj = stateFromStores(576);
      const hasPipParticipant = stateFromStores(10835).useHasPipParticipant(first);
      const tmp8 = useVoiceStateForRemoteSessionDefault();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        const fn = function v() {
          return channelId.getChannelId();
        };
        cResult[1] = items;
        cResult[2] = fn;
        let tmp10 = fn;
        let tmp9 = items;
      } else {
        tmp9 = cResult[1];
        tmp10 = cResult[2];
      }
      const tmpResult = stateFromStores(10835);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp9, tmp10);
      const tmp13 = useIsInvitedToSpeakDefault();
      importDefault = tmp13;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === tmp13) {
        if (cResult[5] === stateFromStores) {
          let tmp16 = cResult[6];
          let tmp17 = cResult[7];
        }
        const stateFromStores1 = tmp(504).useStateFromStores(tmp14, tmp16, tmp17);
        const tmpResult8 = tmp(504);
        let num5 = tmp(11020).useGetStageRTCPanelHeight(stateFromStores);
        const tmpResult9 = tmp(11020);
        const openModalKey = tmp(4976).useOpenModalKey();
        if (cResult[8] === openModalKey) {
          if (cResult[9] === tmp8) {
            let tmp22 = cResult[10];
          }
          const isVoicePanelShowing = tmp(11026).useIsVoicePanelShowing();
          const tmp25 = null != tmp7(11027)();
          if (cResult[11] === hasPipParticipant) {
            if (cResult[12] === tmp25) {
              if (cResult[13] === tmp13) {
                if (cResult[14] === tmp22) {
                  if (cResult[15] === tmp20) {
                    if (cResult[16] === tmp4) {
                      if (cResult[17] === isVoicePanelShowing) {
                        let tmp26 = cResult[18];
                      }
                      if (!tmp26) {
                        num5 = 0;
                        if (tmp26) {
                          num5 = RTC_PANEL_HEIGHT;
                        }
                      }
                      let tmp33 = tmp26;
                      if (tmp26) {
                        tmp33 = tmp20;
                      }
                      if (tmp33) {
                        tmp33 = !stateFromStores1;
                      }
                      if (cResult[19] === num5) {
                        if (cResult[20] === tmp26) {
                          if (cResult[21] === tmp33) {
                            let tmp34 = cResult[22];
                          }
                          return tmp34;
                        }
                      }
                      const obj3 = { height: num5, isVisible: tmp26, isCustomBackground: tmp33 };
                      cResult[19] = num5;
                      cResult[20] = tmp26;
                      cResult[21] = tmp33;
                      cResult[22] = obj3;
                      tmp34 = obj3;
                    }
                  }
                }
              }
            }
          }
          let tmp27 = !isVoicePanelShowing;
          if (!isVoicePanelShowing) {
            let tmp28 = tmp22;
            if (!tmp28) {
              let tmp29 = !tmp25;
              if (tmp25) {
                tmp29 = !tmp13;
              }
              let tmp30 = !tmp29;
              if (tmp29) {
                let tmp31 = !tmp20;
                if (tmp20) {
                  let tmp32 = hasPipParticipant;
                  if (hasPipParticipant) {
                    tmp32 = !tmp4;
                  }
                  tmp31 = tmp32;
                }
                tmp30 = !tmp31;
              }
              tmp28 = tmp30;
            }
            tmp27 = tmp28;
          }
          cResult[11] = hasPipParticipant;
          cResult[12] = tmp25;
          cResult[13] = tmp13;
          cResult[14] = tmp22;
          cResult[15] = tmp20;
          cResult[16] = tmp4;
          cResult[17] = isVoicePanelShowing;
          cResult[18] = tmp27;
          tmp26 = tmp27;
          const tmpResult11 = tmp(11026);
        }
        let tmp23 = null != tmp8;
        if (tmp23) {
          let channelId = tmp8.channelId;
          if (channelId == null) {
            channelId = EMPTY_STRING_SNOWFLAKE_ID;
          }
          tmp23 = tmp(7481).getVoiceChannelKey(channelId) !== openModalKey;
          const tmpResult12 = tmp(7481);
        }
        cResult[8] = openModalKey;
        cResult[9] = tmp8;
        cResult[10] = tmp23;
        tmp22 = tmp23;
        const tmpResult10 = tmp(4976);
      }
      const fn2 = function b() {
        const channel = ChannelStore.getChannel(stateFromStores);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          isGuildStageVoiceResult = !closure_1;
        }
        return isGuildStageVoiceResult;
      };
      const items2 = [stateFromStores, tmp13];
      cResult[4] = tmp13;
      cResult[5] = stateFromStores;
      cResult[6] = fn2;
      cResult[7] = items2;
      tmp17 = items2;
      tmp16 = fn2;
      const tmpResult7 = stateFromStores(504);
    }
  : function useGlobalStatusIndicatorState() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let stateFromStores;
      importDefault = undefined;
      let hasPipParticipant = stateFromStores(10835).useHasPipParticipant({ isActivityViewFocused: false });
      const tmp5 = useVoiceStateForRemoteSessionDefault();
      const obj = stateFromStores(10835);
      const items = [RTCConnectionStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => channelId.getChannelId());
      const tmp7 = useIsInvitedToSpeakDefault();
      importDefault = tmp7;
      const obj2 = stateFromStores(504);
      const items1 = [ChannelStore];
      const items2 = [stateFromStores, tmp7];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(
        items1,
        () => {
          const channel = ChannelStore.getChannel(stateFromStores);
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          if (isGuildStageVoiceResult) {
            isGuildStageVoiceResult = !closure_1;
          }
          return isGuildStageVoiceResult;
        },
        items2,
      );
      const obj3 = stateFromStores(504);
      let num = stateFromStores(11020).useGetStageRTCPanelHeight(stateFromStores);
      stateFromStores(4976);
      let tmp12 = null != tmp5;
      if (tmp12) {
        let channelId = tmp5.channelId;
        if (channelId == null) {
          channelId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        tmp12 = tmp(7481).getVoiceChannelKey(channelId) !== tmp11;
        const tmpResult = tmp(7481);
      }
      const obj4 = stateFromStores(11020);
      const isVoicePanelShowing = stateFromStores(11026).useIsVoicePanelShowing();
      const tmp14 = null != useMyCurrentStageChannelDefault();
      let tmp15 = !isVoicePanelShowing;
      if (!isVoicePanelShowing) {
        let tmp16 = tmp12;
        if (!tmp16) {
          let tmp17 = !tmp14;
          if (tmp14) {
            tmp17 = !tmp7;
          }
          let tmp18 = !tmp17;
          if (tmp17) {
            let tmp19 = !tmp9;
            if (tmp9) {
              if (hasPipParticipant) {
                hasPipParticipant = !flag;
              }
              tmp19 = hasPipParticipant;
            }
            tmp18 = !tmp19;
          }
          tmp16 = tmp18;
        }
        tmp15 = tmp16;
      }
      if (!tmp15) {
        num = 0;
        if (tmp15) {
          num = RTC_PANEL_HEIGHT;
        }
      }
      const obj5 = { height: num, isVisible: tmp15, isCustomBackground: null };
      if (tmp15) {
        tmp15 = tmp9;
      }
      if (tmp15) {
        tmp15 = !stateFromStores1;
      }
      obj5.isCustomBackground = tmp15;
      return obj5;
    };

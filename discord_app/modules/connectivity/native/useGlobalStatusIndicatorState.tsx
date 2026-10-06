// discord_app/modules/connectivity/native/useGlobalStatusIndicatorState.tsx
import Constants from "../../../Constants.tsx";
import useVoiceStateForRemoteSessionDefault from "../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import useIsInvitedToSpeakDefault from "../../stage_channels/useIsInvitedToSpeak.tsx";
import ConnectivityConstants from "ConnectivityConstants.tsx";
import useMyCurrentStageChannelDefault from "../../stage_channels/useMyCurrentStageChannel.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault;

const RTC_PANEL_HEIGHT = ConnectivityConstants.RTC_PANEL_HEIGHT;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_1;
      let first;
      let stateFromStores;
      let tmp10;
      let tmp14;
      let tmp9;
      const obj = stateFromStores(576);
      const cResult = obj.c(23);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isActivityViewFocused: false };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = stateFromStores(9105);
      const hasPipParticipant = tmpResult.useHasPipParticipant(first);
      const tmp8 = useVoiceStateForRemoteSessionDefault();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        const fn = function v() {
          return channelId.getChannelId();
        };
        cResult[1] = items;
        cResult[2] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        tmp9 = cResult[1];
        tmp10 = cResult[2];
      }
      const tmpResult7 = stateFromStores(504);
      stateFromStores = tmpResult7.useStateFromStores(tmp9, tmp10);
      const tmp13 = useIsInvitedToSpeakDefault();
      importDefault = tmp13;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === tmp13) {
        let tmp16;
        let tmp17;
        if (cResult[5] === stateFromStores) {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const tmpResult8 = stateFromStores(504);
        const stateFromStores1 = tmpResult8.useStateFromStores(tmp14, tmp16, tmp17);
        const tmpResult9 = stateFromStores(9617);
        let num5 = tmpResult9.useGetStageRTCPanelHeight(stateFromStores);
        const tmpResult10 = stateFromStores(4742);
        const openModalKey = tmpResult10.useOpenModalKey();
        if (cResult[8] === openModalKey) {
          let tmp22;
          if (cResult[9] === tmp8) {
            tmp22 = cResult[10];
          }
          const tmpResult11 = stateFromStores(9622);
          const isVoicePanelShowing = tmpResult11.useIsVoicePanelShowing();
          const tmp26 = null != useMyCurrentStageChannelDefault();
          if (cResult[11] === hasPipParticipant) {
            if (cResult[12] === tmp26) {
              if (cResult[13] === tmp13) {
                if (cResult[14] === tmp22) {
                  if ((cResult[15] === null) != stateFromStores) {
                    if (cResult[16] === (undefined !== arg0 && arg0)) {
                      let tmp27;
                      if (cResult[17] === isVoicePanelShowing) {
                        tmp27 = cResult[18];
                      }
                      if (!tmp27) {
                        num5 = 0;
                        if (tmp27) {
                          num5 = RTC_PANEL_HEIGHT;
                        }
                      }
                      if (cResult[19] === num5) {
                        if (cResult[20] === tmp27) {
                          let tmp35;
                          if (cResult[21] === (tmp27 && null != stateFromStores && !stateFromStores1)) {
                            tmp35 = cResult[22];
                          }
                          return tmp35;
                        }
                      }
                      const obj3 = {
                        height: num5,
                        isVisible: tmp27,
                        isCustomBackground: tmp27 && null != stateFromStores && !stateFromStores1,
                      };
                      cResult[19] = num5;
                      cResult[20] = tmp27;
                      cResult[21] = tmp27 && null != stateFromStores && !stateFromStores1;
                      cResult[22] = obj3;
                      tmp35 = obj3;
                    }
                  }
                }
              }
            }
          }
          let tmp28 = !isVoicePanelShowing;
          if (tmp28) {
            let tmp29 = tmp22;
            if (!tmp29) {
              let tmp30 = !tmp26;
              if (tmp26) {
                tmp30 = !tmp13;
              }
              let tmp31 = !tmp30;
              if (tmp30) {
                let tmp32 = !tmp20;
                if (null != stateFromStores) {
                  tmp32 = hasPipParticipant && !(undefined !== arg0 && arg0);
                }
                tmp31 = !tmp32;
              }
              tmp29 = tmp31;
            }
            tmp28 = tmp29;
          }
          cResult[11] = hasPipParticipant;
          cResult[12] = tmp26;
          cResult[13] = tmp13;
          cResult[14] = tmp22;
          cResult[15] = null != stateFromStores;
          cResult[16] = undefined !== arg0 && arg0;
          cResult[17] = isVoicePanelShowing;
          cResult[18] = tmp28;
          tmp27 = tmp28;
        }
        let tmp23 = null != tmp8;
        if (tmp23) {
          let channelId = tmp8.channelId;
          const getVoiceChannelKey = stateFromStores(5103).getVoiceChannelKey;
          stateFromStores(5103);
          if (channelId == null) {
            channelId = EMPTY_STRING_SNOWFLAKE_ID;
          }
          tmp23 = getVoiceChannelKey(channelId) !== openModalKey;
        }
        cResult[8] = openModalKey;
        cResult[9] = tmp8;
        cResult[10] = tmp23;
        tmp22 = tmp23;
      }
      class V {
        constructor() {
          const channel = ChannelStore.getChannel(stateFromStores);
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          if (isGuildStageVoiceResult) {
            isGuildStageVoiceResult = !closure_1;
          }
          return isGuildStageVoiceResult;
        }
      }
      const items2 = [stateFromStores, tmp13];
      cResult[4] = tmp13;
      cResult[5] = stateFromStores;
      cResult[6] = V;
      cResult[7] = items2;
      tmp17 = items2;
      tmp16 = V;
    }
  : () => {
      let closure_1;
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let stateFromStores;
      importDefault = undefined;
      const obj = stateFromStores(9105);
      let hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
      const tmp5 = useVoiceStateForRemoteSessionDefault();
      const items = [RTCConnectionStore];
      const obj2 = stateFromStores(504);
      stateFromStores = obj2.useStateFromStores(items, () => channelId.getChannelId());
      const tmp7 = useIsInvitedToSpeakDefault();
      importDefault = tmp7;
      const items1 = [ChannelStore];
      const items2 = [stateFromStores, tmp7];
      const obj3 = stateFromStores(504);
      const stateFromStores1 = obj3.useStateFromStores(
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
      const obj4 = stateFromStores(9617);
      let num = obj4.useGetStageRTCPanelHeight(stateFromStores);
      stateFromStores(4742);
      let tmp12 = null != tmp5;
      if (tmp12) {
        let channelId = tmp5.channelId;
        const getVoiceChannelKey = stateFromStores(5103).getVoiceChannelKey;
        stateFromStores(5103);
        if (channelId == null) {
          channelId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        tmp12 = getVoiceChannelKey(channelId) !== tmp11;
      }
      const tmpResult2 = stateFromStores(9622);
      const isVoicePanelShowing = tmpResult2.useIsVoicePanelShowing();
      const tmp15 = null != useMyCurrentStageChannelDefault();
      let tmp16 = !isVoicePanelShowing;
      if (tmp16) {
        let tmp17 = tmp12;
        if (!tmp17) {
          let tmp18 = !tmp15;
          if (tmp15) {
            tmp18 = !tmp7;
          }
          let tmp19 = !tmp18;
          if (tmp18) {
            let tmp20 = !tmp9;
            if (null != stateFromStores) {
              if (hasPipParticipant) {
                hasPipParticipant = !flag;
              }
              tmp20 = hasPipParticipant;
            }
            tmp19 = !tmp20;
          }
          tmp17 = tmp19;
        }
        tmp16 = tmp17;
      }
      if (!tmp16) {
        num = 0;
        if (tmp16) {
          num = RTC_PANEL_HEIGHT;
        }
      }
      const obj5 = { height: num, isVisible: tmp16, isCustomBackground: tmp16 };
      if (tmp16) {
        tmp16 = tmp9;
      }
      if (tmp16) {
        tmp16 = !stateFromStores1;
      }
      return obj5;
    };
const result = size.fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = tmp2;

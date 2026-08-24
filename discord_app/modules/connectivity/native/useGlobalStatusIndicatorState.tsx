// === Module 12549: useGlobalStatusIndicatorState ===

// Module 12549 (useGlobalStatusIndicatorState)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9787 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 12548 */;
import useMyCurrentStageChannelDefault from "useMyCurrentStageChannel" /* 12551 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "createRTCConnection" /* 4544 */;
import { RTC_PANEL_HEIGHT } from "RTC_PANEL_HEIGHT" /* 12550 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = function useGlobalStatusIndicatorState(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  importDefault = undefined;
  let obj = stateFromStores(8724);
  let hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
  const tmp5 = useVoiceStateForRemoteSessionDefault();
  const items = [closure_4];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => channelId.getChannelId());
  const tmp7 = useIsInvitedToSpeakDefault();
  importDefault = tmp7;
  const obj2 = stateFromStores(589);
  const tmp4 = importDefault;
  const items1 = [closure_3];
  const items2 = [stateFromStores, tmp7];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => {
    const channel = closure_1_3.getChannel(stateFromStores);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = !closure_1;
    }
    return isGuildStageVoiceResult;
  }, items2);
  const obj3 = stateFromStores(589);
  let num = stateFromStores(12546).useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(4233);
  let tmp12 = null != tmp5;
  if (tmp12) {
    let tmpResult = tmp(8700);
    let channelId = tmp5.channelId;
    if (channelId == null) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp12 = tmpResult.getVoiceChannelKey(channelId) !== tmp11;
  }
  tmpResult = tmp(8704);
  let isVoicePanelShowing = tmpResult.useIsVoicePanelShowing();
  const tmp14 = null != useMyCurrentStageChannelDefault();
  if (!isVoicePanelShowing) {
    let tmp15 = !tmp12;
    if (!tmp12) {
      let tmp16 = !tmp14;
      if (tmp14) {
        tmp16 = !tmp7;
      }
      tmp15 = tmp16;
    }
    if (tmp15) {
      let tmp17 = !tmp9;
      if (tmp9) {
        if (hasPipParticipant) {
          hasPipParticipant = !flag;
        }
        tmp17 = hasPipParticipant;
      }
      tmp15 = tmp17;
    }
    isVoicePanelShowing = tmp15;
  }
  let tmp18 = !isVoicePanelShowing;
  if (isVoicePanelShowing) {
    num = 0;
    if (!isVoicePanelShowing) {
      num = RTC_PANEL_HEIGHT;
    }
  }
  obj = { height: num, isVisible: tmp18, isCustomBackground: null };
  if (!isVoicePanelShowing) {
    tmp18 = tmp9;
  }
  if (tmp18) {
    tmp18 = !stateFromStores1;
  }
  obj[2] = tmp18;
  return obj;
};
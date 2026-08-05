// discord_app/modules/connectivity/native/useGlobalStatusIndicatorState.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { RTC_PANEL_HEIGHT } from "RTC_PANEL_HEIGHT";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";

const require = arg1;
const result = require("RTC_PANEL_HEIGHT").fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = function useGlobalStatusIndicatorState(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let importDefault;
  let obj = stateFromStores(10571);
  let hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
  const tmp5 = require("../../game_console/hooks/useVoiceStateForRemoteSession.tsx")();
  const items = [createRTCConnection];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => channelId.getChannelId());
  const tmp7 = require("../../stage_channels/useIsInvitedToSpeak.tsx")();
  importDefault = tmp7;
  const obj2 = stateFromStores(589);
  const tmp4 = importDefault;
  const items1 = [ensureGuildLoaded];
  const items2 = [stateFromStores, tmp7];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => {
    const channel = outer1_3.getChannel(stateFromStores);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = !c1;
    }
    return isGuildStageVoiceResult;
  }, items2);
  const obj3 = stateFromStores(589);
  let num = stateFromStores(10657).useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(4136);
  let tmp12 = null != tmp5;
  if (tmp12) {
    let tmpResult = tmp(4494);
    let channelId = tmp5.channelId;
    if (channelId == null) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp12 = tmpResult.getVoiceChannelKey(channelId) !== tmp11;
  }
  tmpResult = tmp(10663);
  let isVoicePanelShowing = tmpResult.useIsVoicePanelShowing();
  const tmp14 = null != tmp4(10664)();
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
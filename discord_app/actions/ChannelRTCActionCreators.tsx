// discord_app/actions/ChannelRTCActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import ComponentDispatchUtils from "../utils/ComponentDispatchUtils.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ AppContext: c3, AnalyticEvents: closure_4, ComponentActions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("actions/ChannelRTCActionCreators.tsx");

export default {
  rebuildRTCActiveChannels() {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
  },
  selectParticipant(id, id2) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: id, id: id2 });
  },
  popoutParticipant(channelId, participantId) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId, participantId });
  },
  returnParticipant(channelId, participantId) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId, participantId });
  },
  updateLayout(channelId, video_layout) {
    let APP = arg2;
    if (arg2 === undefined) {
      APP = constants.APP;
    }
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_layout };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
    obj.track(constants2.VIDEO_LAYOUT_TOGGLED, obj2);
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout: video_layout, appContext: APP });
    const obj5 = { type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout: video_layout, appContext: APP };
  },
  toggleParticipants(channelId, participantsOpen) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId, participantsOpen });
  },
  toggleVoiceParticipantsHidden(channelId, voiceParticipantsHidden) {
    DispatcherDefault.dispatch({
      type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
      channelId,
      voiceParticipantsHidden,
    });
  },
  updateStageStreamSize(channelId, large) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large });
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    DispatcherDefault.dispatch({
      type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
      channelId,
      dismissed,
    });
  },
  updateChatOpen(id, shown) {
    _require = id;
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: id, chatOpen: shown });
    if (shown) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(constants3.FOCUS_CHANNEL_TEXT_AREA, { channelId });
      }, 0);
    } else {
      let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
      ComponentDispatch.dispatch(constants3.FOCUS_CHAT_BUTTON);
    }
    const obj2 = { type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: id, chatOpen: shown };
  },
  jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType) {
    DispatcherDefault.dispatch({
      type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE",
      guildId: voiceGuildId2,
      channelId: voiceChannelId2,
      messageId: voiceMessageId2,
      jumpType,
    });
  },
};

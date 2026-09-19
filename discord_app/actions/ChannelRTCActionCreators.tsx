// === Module 4957: ChannelRTCActionCreators ===

// Module 4957 (ChannelRTCActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

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
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN", channelId, voiceParticipantsHidden });
  },
  updateStageStreamSize(channelId, large) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large });
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED", channelId, dismissed });
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
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE", guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType });
  }
};
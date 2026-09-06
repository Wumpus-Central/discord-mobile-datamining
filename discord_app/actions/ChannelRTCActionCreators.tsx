// === Module 4761: ChannelRTCActionCreators ===

// Module 4761 (ChannelRTCActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ AppContext: c3, AnalyticEvents: closure_4, ComponentActions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("actions/ChannelRTCActionCreators.tsx");

export default {
  rebuildRTCActiveChannels() {
    DispatcherDefault.dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
  },
  selectParticipant(id, id2) {
    const obj = { type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: id, id: id2 };
    obj.dispatch(obj);
  },
  popoutParticipant(channelId, participantId) {
    const obj = { type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  returnParticipant(channelId, participantId) {
    const obj = { type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  updateLayout(channelId, video_layout) {
    let APP = arg2;
    if (arg2 === undefined) {
      APP = constants.APP;
    }
    let obj = { video_layout };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
    obj.track(constants2.VIDEO_LAYOUT_TOGGLED, obj);
    obj = { type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout: video_layout, appContext: APP };
    DispatcherDefault.dispatch(obj);
  },
  toggleParticipants(channelId, participantsOpen) {
    const obj = { type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId, participantsOpen };
    obj.dispatch(obj);
  },
  toggleVoiceParticipantsHidden(channelId, voiceParticipantsHidden) {
    const obj = { type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN", channelId, voiceParticipantsHidden };
    obj.dispatch(obj);
  },
  updateStageStreamSize(channelId, large) {
    const obj = { type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large };
    obj.dispatch(obj);
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    const obj = { type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED", channelId, dismissed };
    obj.dispatch(obj);
  },
  updateChatOpen(id, shown) {
    _require = id;
    const obj = { type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: id, chatOpen: shown };
    obj.dispatch(obj);
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
  },
  jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType) {
    const obj = { type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE", guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType };
    obj.dispatch(obj);
  }
};
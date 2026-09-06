// discord_app/actions/ChannelRTCActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import ComponentDispatchUtils from "../utils/ComponentDispatchUtils.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

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
    const obj = {
      type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE",
      guildId: voiceGuildId2,
      channelId: voiceChannelId2,
      messageId: voiceMessageId2,
      jumpType,
    };
    obj.dispatch(obj);
  },
};

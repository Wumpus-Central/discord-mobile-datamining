import ME from "ME";

let c3;
let c4;
let c5;
({ AppContext: c3, AnalyticEvents: c4, ComponentActions: c5 } = ME);
const result = require("expandEventProperties").fileFinishedImporting("actions/ChannelRTCActionCreators.tsx");

export default {
  rebuildRTCActiveChannels() {
    importDefault(709).dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
  },
  selectParticipant(id, id2) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: id, id: id2 };
    obj.dispatch(obj);
  },
  popoutParticipant(channelId, participantId) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  returnParticipant(channelId, participantId) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  updateLayout(channelId, layout) {
    let APP = arg2;
    if (arg2 === undefined) {
      APP = constants.APP;
    }
    let obj = importDefault(698);
    obj = { video_layout: layout };
    const merged = Object.assign(require(4388) /* collectGuildAnalyticsMetadata */.collectVoiceAnalyticsMetadata(channelId));
    obj.track(constants2.VIDEO_LAYOUT_TOGGLED, obj);
    const obj3 = require(4388) /* collectGuildAnalyticsMetadata */;
    obj = { type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout, appContext: APP };
    importDefault(709).dispatch(obj);
  },
  toggleParticipants(channelId, participantsOpen) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId, participantsOpen };
    obj.dispatch(obj);
  },
  toggleVoiceParticipantsHidden(channelId, voiceParticipantsHidden) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN", channelId, voiceParticipantsHidden };
    obj.dispatch(obj);
  },
  updateStageStreamSize(channelId, large) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large };
    obj.dispatch(obj);
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED", channelId, dismissed };
    obj.dispatch(obj);
  },
  updateChatOpen(id, shown) {
    const _require = id;
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: id, chatOpen: shown };
    obj.dispatch(obj);
    if (shown) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const ComponentDispatch = id(outer1_2[4]).ComponentDispatch;
        ComponentDispatch.dispatch(outer1_5.FOCUS_CHANNEL_TEXT_AREA, { channelId: id });
      }, 0);
    } else {
      let ComponentDispatch = _require(1231).ComponentDispatch;
      ComponentDispatch.dispatch(constants3.FOCUS_CHAT_BUTTON);
    }
  },
  jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE", guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType };
    obj.dispatch(obj);
  }
};
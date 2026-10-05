// === Module 5091: ChannelRTCActionCreators ===

// Module 5091 (ChannelRTCActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
({ AppContext: c3, AnalyticEvents: closure_4, ComponentActions: hasOwnProperty } = Constants);
let obj = {
  rebuildRTCActiveChannels() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
  },
  selectParticipant(id, id2) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: id, id: id2 };
    obj.dispatch(obj2);
  },
  popoutParticipant(channelId, participantId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj2);
  },
  returnParticipant(channelId, participantId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj2);
  },
  updateLayout(channelId, video_layout) {
    let APP = arg2;
    if (arg2 === undefined) {
      APP = constants.APP;
    }
    const track = AnalyticsUtilsDefault.track;
    const VIDEO_LAYOUT_TOGGLED = constants2.VIDEO_LAYOUT_TOGGLED;
    const obj = { video_layout };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channelId));
    track(VIDEO_LAYOUT_TOGGLED, obj);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout: video_layout, appContext: APP };
    obj3.dispatch(obj4);
  },
  toggleParticipants(channelId, participantsOpen) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId, participantsOpen };
    obj.dispatch(obj2);
  },
  toggleVoiceParticipantsHidden(channelId, voiceParticipantsHidden) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN", channelId, voiceParticipantsHidden };
    obj.dispatch(obj2);
  },
  updateStageStreamSize(channelId, large) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large };
    obj.dispatch(obj2);
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED", channelId, dismissed };
    obj.dispatch(obj2);
  },
  updateChatOpen(id, shown) {
    let channelId;
    _require = id;
    let obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: id, chatOpen: shown };
    obj.dispatch(obj2);
    if (shown) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        const obj = { channelId };
        ComponentDispatch.dispatch(hasOwnProperty.FOCUS_CHANNEL_TEXT_AREA, obj);
      }, 0);
    } else {
      let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
      ComponentDispatch.dispatch(constants3.FOCUS_CHAT_BUTTON);
    }
  },
  jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE", guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/ChannelRTCActionCreators.tsx");

export default obj;
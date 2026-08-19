// === Module 5059: getClickstreamDrainEvent ===

// Module 5059 (getClickstreamDrainEvent)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamEvents.tsx");

export const getClickstreamDrainEvent = function getClickstreamDrainEvent(arg0, arr) {
  const date = new Date();
  if (date.GUILD_VIEWED_CLICKSTREAM === arg0) {
    let obj = { time_minus: null, rtc_states: null, guild_ids: null };
    obj[0] = arr.map((item, index) => {
      const timestamp = item.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj[1] = arr.map((item, index) => item.rtc_state);
    obj[2] = arr.map((item, index) => item.guild_id);
    return obj;
  } else if (tmp2.FRIENDS_LIST_VIEWED_CLICKSTREAM === arg0) {
    obj = { time_minus: null, rtc_states: null, tab_opened: null, num_friends: null, now_playing_visible: null, now_playing_num_cards: null };
    obj[0] = arr.map((item, index) => {
      const timestamp = item.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj[1] = arr.map((item, index) => item.rtc_state);
    obj[2] = arr.map((item, index) => item.tab_opened);
    obj[3] = arr.map((item, index) => item.num_friends);
    obj[4] = arr.map((item, index) => item.now_playing_visible);
    obj[5] = arr.map((item, index) => item.now_playing_num_cards);
    return obj;
  } else if (tmp2.CHANNEL_OPENED_CLICKSTREAM === arg0) {
    obj1 = { time_minus: null, rtc_states: null, channel_ids: null, channel_types: null };
    obj1[0] = arr.map((item, index) => {
      const timestamp = item.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj1[1] = arr.map((item, index) => item.rtc_state);
    obj1[2] = arr.map((item, index) => item.channel_id);
    obj1[3] = arr.map((item, index) => item.channel_type);
    return obj1;
  } else if (tmp2.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM === arg0) {
    obj = { time_minus: null, rtc_states: null, load_duration_ms: null, were_messages_cached: null, is_first_load: null };
    obj[0] = arr.map((item, index) => {
      const timestamp = item.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj[1] = arr.map((item, index) => item.rtc_state);
    obj[2] = arr.map((item, index) => item.load_duration_ms);
    obj[3] = arr.map((item, index) => item.were_messages_cached);
    obj[4] = arr.map((item, index) => item.is_first_load);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("getClickstreamDrainEvent: Unknown event: " + arg0);
    throw error;
  }
};
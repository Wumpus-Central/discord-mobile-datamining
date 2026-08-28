// === Module 7160: getClickstreamDrainEvent ===

// Module 7160 (getClickstreamDrainEvent)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamEvents.tsx");

export const getClickstreamDrainEvent = function getClickstreamDrainEvent(first, arr) {
  const date = new Date();
  if (date.GUILD_VIEWED_CLICKSTREAM === first) {
    let obj = { time_minus: null, rtc_states: null, guild_ids: null };
    obj[0] = arr.map((timestamp) => {
      timestamp = timestamp.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj[1] = arr.map((rtc_state) => rtc_state.rtc_state);
    obj[2] = arr.map((guild_id) => guild_id.guild_id);
    return obj;
  } else if (tmp2.FRIENDS_LIST_VIEWED_CLICKSTREAM === first) {
    obj = { time_minus: null, rtc_states: null, tab_opened: null, num_friends: null, now_playing_visible: null, now_playing_num_cards: null };
    obj[0] = arr.map((timestamp) => {
      timestamp = timestamp.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj[1] = arr.map((rtc_state) => rtc_state.rtc_state);
    obj[2] = arr.map((tab_opened) => tab_opened.tab_opened);
    obj[3] = arr.map((num_friends) => num_friends.num_friends);
    obj[4] = arr.map((now_playing_visible) => now_playing_visible.now_playing_visible);
    obj[5] = arr.map((now_playing_num_cards) => now_playing_num_cards.now_playing_num_cards);
    return obj;
  } else if (tmp2.CHANNEL_OPENED_CLICKSTREAM === first) {
    obj1 = { time_minus: null, rtc_states: null, channel_ids: null, channel_types: null };
    obj1[0] = arr.map((timestamp) => {
      timestamp = timestamp.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj1[1] = arr.map((rtc_state) => rtc_state.rtc_state);
    obj1[2] = arr.map((channel_id) => channel_id.channel_id);
    obj1[3] = arr.map((channel_type) => channel_type.channel_type);
    return obj1;
  } else if (tmp2.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM === first) {
    obj = { time_minus: null, rtc_states: null, load_duration_ms: null, were_messages_cached: null, is_first_load: null };
    obj[0] = arr.map((timestamp) => {
      timestamp = timestamp.timestamp;
      const time = date.getTime();
      return time - timestamp.getTime();
    });
    obj[1] = arr.map((rtc_state) => rtc_state.rtc_state);
    obj[2] = arr.map((load_duration_ms) => load_duration_ms.load_duration_ms);
    obj[3] = arr.map((were_messages_cached) => were_messages_cached.were_messages_cached);
    obj[4] = arr.map((is_first_load) => is_first_load.is_first_load);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("getClickstreamDrainEvent: Unknown event: " + first);
    throw error;
  }
};
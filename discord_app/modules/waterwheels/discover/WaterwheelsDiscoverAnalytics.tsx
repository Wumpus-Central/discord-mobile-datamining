// === Module 18888: WaterwheelsDiscoverAnalytics ===

// Module 18888 (WaterwheelsDiscoverAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10158 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const discover_item = "discover_item";
const gravity = "gravity";
const waterwheels_discover = "waterwheels_discover";
const result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverAnalytics.tsx");

export const DISCOVER_FEED_ITEM_TYPE = "discover_item";
export const DISCOVER_HOME_SESSION_ID = "gravity";
export const DISCOVER_UX_VARIATION = "waterwheels_discover";
export function getDiscoverActionParameters(type, arg1) {
  let str = "item_body";
  if ("identity" === arg1) {
    str = "item_header";
  }
  type = type.type;
  if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
    const obj2 = { actionType: "press_join_guild", gestureType: "press", targetElement: str, intentType: "join", destinationType: "guild", guildId: type.value.guild_id };
    return obj2;
  } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
    let str2 = "press";
    if (tmp) {
      str2 = "press_header";
    }
    const obj3 = { actionType: str2, gestureType: "press", targetElement: str, intentType: "navigate", destinationType: "guild", guildId: type.value.guild_id };
    return obj3;
  } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
    const obj4 = { actionType: "press", gestureType: "press", targetElement: str, intentType: "configure", destinationType: "none", guildId: null };
    return obj4;
  } else {
    const obj = { actionType: "press", gestureType: "press", targetElement: str, intentType: "open", destinationType: "unknown", guildId: null };
    return obj;
  }
}
export const discoverAnalyticsTracker = {
  sessionStarted(arg0) {
    ({ sessionId, loadId, startMs, previousSessionCount } = arg0);
    return AnalyticsUtilsDefault.track(AnalyticEvents.FEED_SESSION_STARTED, { load_id: loadId, session_start_time_ms: startMs, icymi_session_id: sessionId, previous_icymi_session_count: previousSessionCount, ux_variation: waterwheels_discover });
  },
  sessionCompleted(loadId) {
    const obj3 = { load_id: loadId.loadId, session_duration_ms: loadId.endMs - loadId.startMs, session_start_time_ms: loadId.startMs, session_end_time_ms: loadId.endMs, impression_count: loadId.impressionCount, icymi_session_id: loadId.sessionId, feed_visible_items_changed_count: loadId.visibleItemsChangedCount, impression_item_types: null, latest_dwell_start_time_ms: null, previous_icymi_session_count: null, ux_variation: null, interaction_count: null, dwelled_count: null };
    if (loadId.impressionCount > 0) {
      items = [discover_item];
      let items1 = items;
    } else {
      items1 = [];
    }
    obj3.impression_item_types = items1;
    ({ latestDwellStartMs: obj2.latest_dwell_start_time_ms, previousSessionCount: obj2.previous_icymi_session_count } = loadId);
    obj3.ux_variation = waterwheels_discover;
    ({ interactionCount: obj2.interaction_count, dwellCount: obj2.dwelled_count } = loadId);
    return AnalyticsUtilsDefault.track(AnalyticEvents.FEED_SESSION_COMPLETED, obj3);
  },
  seenBatch(items) {
    items = items.items;
    const first = items[0];
    let loadId;
    if (first != null) {
      loadId = first.loadId;
    }
    if (loadId == null) {
      loadId = null;
    }
    const obj = AnalyticsUtilsDefault;
    return obj.track(AnalyticEvents.FEED_ITEM_SEEN_BATCH, { load_id: loadId, home_session_id: gravity, feed_item_ids: items.map((itemId) => itemId.itemId), feed_item_types: items.map(() => discover_item), feed_item_indices: items.map((item) => item.index), num_items: items.length, version: 3 });
  },
  dwell1s(load_id) {
    return AnalyticsUtilsDefault.track(AnalyticEvents.FEED_ITEM_1S_DWELLED, { load_id: load_id.item.loadId, impression_id: load_id.impressionId, item_id: load_id.item.itemId, item_type: discover_item, dwell_start_time_ms: load_id.startMs, icymi_session_id: load_id.sessionId, trigger_type: load_id.triggerType, item_feed_index: load_id.item.brokerPosition, is_initially_visible: load_id.isInitiallyVisible, item_score: load_id.item.score, item_channel_type: null, item_card_height: null, is_dwelling: load_id.isDwelling, interaction_action_types: load_id.interactionActionTypes, interaction_count: load_id.interactionCount, ux_variation: waterwheels_discover, session_impression_index: load_id.sessionImpressionIndex });
  },
  dwelled(load_id) {
    return AnalyticsUtilsDefault.track(AnalyticEvents.FEED_ITEM_DWELLED, { load_id: load_id.item.loadId, impression_id: load_id.impressionId, dwell_time_ms: load_id.endMs - load_id.startMs, item_id: load_id.item.itemId, item_type: discover_item, dwell_start_time_ms: load_id.startMs, dwell_end_time_ms: load_id.endMs, icymi_session_id: load_id.sessionId, trigger_type: load_id.triggerType, item_feed_index: load_id.item.brokerPosition, is_initially_visible: load_id.isInitiallyVisible, item_score: load_id.item.score, item_channel_type: null, item_card_height: null, ux_variation: waterwheels_discover, interaction_action_types: load_id.interactionActionTypes, interaction_count: load_id.interactionCount, session_impression_index: load_id.sessionImpressionIndex });
  },
  interacted(arg0) {
    ({ item, parameters } = arg0);
    ({ sessionId, impressionId, sessionInteractionIndex } = arg0);
    return AnalyticsUtilsDefault.track(AnalyticEvents.FEED_ITEM_INTERACTED, { load_id: item.loadId, feed_item_type: discover_item, feed_item_id: item.itemId, home_session_id: gravity, action_type: parameters.actionType, feed_item_index: item.index, icymi_session_id: sessionId, impression_id: impressionId, ux_variation: waterwheels_discover, session_interaction_index: sessionInteractionIndex, guild_id: parameters.guildId });
  },
  actioned(arg0) {
    ({ item, parameters, outcome } = arg0);
    ({ sessionId, impressionId, sessionActionIndex } = arg0);
    const obj2 = { load_id: item.loadId, icymi_session_id: sessionId, ux_variation: waterwheels_discover, session_action_index: sessionActionIndex, item_id: item.itemId, item_type: discover_item, impression_id: impressionId, action_gesture_type: parameters.gestureType, action_target_element: parameters.targetElement, action_intent_type: parameters.intentType, action_destination_type: parameters.destinationType, guild_id: parameters.guildId, item_feed_index: item.brokerPosition, item_card_type: item.cardType, action_outcome: null, action_failure_reason: null };
    let outcome1;
    if (outcome != null) {
      outcome1 = outcome.outcome;
    }
    if ("succeeded" === outcome1) {
      const outcome2 = outcome.outcome;
    } else {
      let outcome3;
      if (outcome != null) {
        outcome3 = outcome.outcome;
      }
    }
    obj2.action_outcome = outcome2;
    let outcome4;
    if (outcome != null) {
      outcome4 = outcome.outcome;
    }
    let reason;
    if ("failed" === outcome4) {
      reason = outcome.reason;
    }
    obj2.action_failure_reason = reason;
    return AnalyticsUtilsDefault.track(AnalyticEvents.FEED_ITEM_ACTIONED, obj2);
  }
};
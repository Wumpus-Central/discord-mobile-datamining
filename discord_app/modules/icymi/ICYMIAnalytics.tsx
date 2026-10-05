// === Module 14165: ICYMIAnalytics ===

// Module 14165 (ICYMIAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 7813 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let item;

let closure_4;
let hasOwnProperty;
({ ChannelTypes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let obj = {
  trackItemInteraction(feed_item_type) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), feed_item_type: feed_item_type.type, feed_item_id: feed_item_type.id, home_session_id: "gravity", action_type: feed_item_type.actionType, feed_item_index: ICYMIStore.getIndexInHydratedFeed(feed_item_type.id), icymi_session_id: feed_item_type.icymiSessionId, impression_id: feed_item_type.impressionId, ux_variation: feed_item_type.uxVariation, session_interaction_index: feed_item_type.sessionInteractionIndex };
    obj.track(hasOwnProperty.FEED_ITEM_INTERACTED, obj2);
  },
  trackItemShortImpression(viewableItems, arr2, stateFromStores) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = {
      load_id: ICYMIStore.getLoadId(),
      home_session_id: "gravity",
      feed_item_ids: viewableItems.map((item) => item.item.id),
      feed_item_types: viewableItems.map((item) => {
        let str3;
        item = item.item;
        const kind = item.data.kind;
        if ("end" === kind) {
          str3 = "end";
        } else if ("loading" === kind) {
          str3 = "loading";
        } else {
          let str6 = "message";
          if ("message" === kind) {
            if (item.channelType === constants.GUILD_ANNOUNCEMENT) {
              str6 = "announcement";
            }
            str3 = str6;
          } else if ("guildEvent" === kind) {
            str3 = "guild_event";
          } else if ("contentInventory" === kind) {
            let str5 = "hotwheels_gaming_activity";
            if (item.data.content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS) {
              str5 = "hotwheels_custom_status";
            }
            str3 = str5;
          } else if ("recommendedGuilds" === kind) {
            str3 = "recommended_guilds";
          } else if ("forumThread" === kind) {
            str3 = "forum_thread";
          } else {
            str3 = "icymi_header";
            if ("icymiHeader" !== kind) {
              str3 = "unknown";
            }
          }
        }
        return str3;
      }),
      num_items: viewableItems.length,
      all_feed_item_ids: arr2.map((id) => id.id),
      all_feed_item_types: arr2.map((type) => type.type),
      num_all_items: arr2.length,
      all_feed_item_indices: arr2.map((item, index) => index),
      feed_version: stateFromStores,
      version: 3
    };
    obj.track(hasOwnProperty.FEED_ITEM_SEEN_BATCH, obj2);
  },
  trackItemLongImpression(viewableItems, arr2, stateFromStores) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = {
      load_id: ICYMIStore.getLoadId(),
      home_session_id: "gravity",
      feed_item_ids: viewableItems.map((item) => item.item.id),
      feed_item_types: viewableItems.map((item) => {
        let str3;
        item = item.item;
        const kind = item.data.kind;
        if ("end" === kind) {
          str3 = "end";
        } else if ("loading" === kind) {
          str3 = "loading";
        } else {
          let str6 = "message";
          if ("message" === kind) {
            if (item.channelType === constants.GUILD_ANNOUNCEMENT) {
              str6 = "announcement";
            }
            str3 = str6;
          } else if ("guildEvent" === kind) {
            str3 = "guild_event";
          } else if ("contentInventory" === kind) {
            let str5 = "hotwheels_gaming_activity";
            if (item.data.content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS) {
              str5 = "hotwheels_custom_status";
            }
            str3 = str5;
          } else if ("recommendedGuilds" === kind) {
            str3 = "recommended_guilds";
          } else if ("forumThread" === kind) {
            str3 = "forum_thread";
          } else {
            str3 = "icymi_header";
            if ("icymiHeader" !== kind) {
              str3 = "unknown";
            }
          }
        }
        return str3;
      }),
      num_items: viewableItems.length,
      all_feed_item_ids: arr2.map((id) => id.id),
      all_feed_item_types: arr2.map((type) => type.type),
      num_all_items: arr2.length,
      all_feed_item_indices: arr2.map((item, index) => index),
      feed_version: stateFromStores,
      version: 3
    };
    obj.track(hasOwnProperty.FEED_ITEM_SEEN_LONG, obj2);
  },
  trackFeedShown(homeSessionId) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), home_session_id: homeSessionId.homeSessionId, variant: homeSessionId.variant };
    obj.track(hasOwnProperty.FEED_SHOWN, obj2);
  },
  trackFeedFirstScrollStarted() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), home_session_id: "gravity" };
    obj.track(hasOwnProperty.HOME_FIRST_SCROLL_STARTED, obj2);
  },
  trackFeedFeedbackPromptViewed() {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.HOME_FEEDBACK_PROMPT_VIEWED);
  },
  trackFeedFeedbackSubmitted(arg0) {
    const track = AnalyticsUtilsDefault.track;
    const HOME_FEEDBACK_SUBMITTED = hasOwnProperty.HOME_FEEDBACK_SUBMITTED;
    const obj = { load_id: ICYMIStore.getLoadId(), home_session_id: "gravity" };
    const merged = Object.assign(arg0);
    track(HOME_FEEDBACK_SUBMITTED, obj);
  },
  trackFeedOnboardingScreenSkipped(location) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { location: location.location };
    obj.track(hasOwnProperty.ICYMI_ONBOARDING_SCREEN_SKIPPED, obj2);
  },
  trackFeedOnboardingGuildToggled(guildId) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { guild_id: guildId.guildId, toggled: guildId.toggled };
    obj.track(hasOwnProperty.ICYMI_ONBOARDING_GUILD_TOGGLED, obj2);
  },
  trackFeedOnboardingCategoryToggled(categoryId) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { category_id: categoryId.categoryId, toggled: categoryId.toggled };
    obj.track(hasOwnProperty.ICYMI_ONBOARDING_CATEGORY_TOGGLED, obj2);
  },
  trackFeedEmptyLoadingSeen() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion() };
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_SEEN, obj2);
  },
  trackFeedEmptyLoadingComplete(dwellTimeMs) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), dwell_time_ms: dwellTimeMs.dwellTimeMs, version: ICYMIStore.getVersion() };
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_COMPLETE, obj2);
  },
  trackFeedEmptyLoadingAbandoned(dwellTimeMs) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), dwell_time_ms: dwellTimeMs.dwellTimeMs, version: ICYMIStore.getVersion() };
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_ABANDONED, obj2);
  },
  trackFeedSessionStarted(sessionStartTimeMs) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), session_start_time_ms: sessionStartTimeMs.sessionStartTimeMs, icymi_session_id: sessionStartTimeMs.icymiSessionId, previous_icymi_session_count: sessionStartTimeMs.previousIcymiSessionCount, ux_variation: sessionStartTimeMs.uxVariation };
    obj.track(hasOwnProperty.FEED_SESSION_STARTED, obj2);
  },
  trackFeedSessionCompleted(sessionDurationMs) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), session_duration_ms: sessionDurationMs.sessionDurationMs, session_start_time_ms: sessionDurationMs.sessionStartTimeMs, session_end_time_ms: sessionDurationMs.sessionEndTimeMs, impression_count: sessionDurationMs.impressionCount, unique_impression_count: sessionDurationMs.uniqueImpressionCount, icymi_session_id: sessionDurationMs.icymiSessionId, feed_reload_count: sessionDurationMs.feedReloadCount, feed_visible_items_changed_count: sessionDurationMs.feedDwelledItemsChangedCount, feed_fetch_count: sessionDurationMs.feedFetchCount, impression_item_types: sessionDurationMs.impressionItemTypes, latest_dwell_start_time_ms: sessionDurationMs.latestDwellStartTimeMs, previous_icymi_session_count: sessionDurationMs.previousIcyMiSessionCount, ux_variation: sessionDurationMs.uxVariation, interaction_count: sessionDurationMs.interactionCount, dwelled_count: sessionDurationMs.dwelledCount, unique_dwelled_count: sessionDurationMs.uniqueDwelledCount };
    obj.track(hasOwnProperty.FEED_SESSION_COMPLETED, obj2);
  },
  trackFeedItemDwell1s(impressionId) {
    let itemChannelType;
    const tmp = AnalyticsUtilsDefault;
    const obj = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), impression_id: impressionId.impressionId, item_id: impressionId.itemId, item_type: impressionId.itemType, dwell_start_time_ms: impressionId.dwellStartTimeMs, icymi_session_id: impressionId.icymiSessionId, trigger_type: impressionId.triggerType, item_occurence_count_in_session: impressionId.itemOccurenceCountInSession, item_feed_index: impressionId.itemFeedIndex, is_initially_visible: impressionId.isInitiallyVisible, item_score: impressionId.itemScore, item_channel_type: itemChannelType, item_card_height: null, is_dwelling: null, interaction_action_types: null, interaction_count: null, ux_variation: null, session_impression_index: null };
    const track = tmp.track;
    const FEED_ITEM_1S_DWELLED = hasOwnProperty.FEED_ITEM_1S_DWELLED;
    itemChannelType = impressionId.itemChannelType;
    if (itemChannelType == null) {
      itemChannelType = null;
    }
    ({ itemCardHeight: obj.item_card_height, isDwelling: obj.is_dwelling, interactionActionTypes: obj.interaction_action_types, interactionCount: obj.interaction_count, uxVariation: obj.ux_variation, sessionImpressionIndex: obj.session_impression_index } = impressionId);
    track(FEED_ITEM_1S_DWELLED, obj);
  },
  trackFeedItemDwelled(impressionId) {
    let itemChannelType;
    const tmp = AnalyticsUtilsDefault;
    const obj = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), impression_id: impressionId.impressionId, dwell_time_ms: impressionId.dwellTimeMs, item_id: impressionId.itemId, item_type: impressionId.itemType, dwell_start_time_ms: impressionId.dwellStartTimeMs, dwell_end_time_ms: impressionId.dwellEndTimeMs, icymi_session_id: impressionId.icymiSessionId, trigger_type: impressionId.triggerType, item_occurence_count_in_session: impressionId.itemOccurenceCountInSession, item_feed_index: impressionId.itemFeedIndex, is_initially_visible: impressionId.isInitiallyVisible, item_score: impressionId.itemScore, item_channel_type: itemChannelType, item_card_height: null, ux_variation: null, interaction_action_types: null, interaction_count: null, session_impression_index: null };
    const track = tmp.track;
    const FEED_ITEM_DWELLED = hasOwnProperty.FEED_ITEM_DWELLED;
    itemChannelType = impressionId.itemChannelType;
    if (itemChannelType == null) {
      itemChannelType = null;
    }
    ({ itemCardHeight: obj.item_card_height, uxVariation: obj.ux_variation, interactionActionTypes: obj.interaction_action_types, interactionCount: obj.interaction_count, sessionImpressionIndex: obj.session_impression_index } = impressionId);
    track(FEED_ITEM_DWELLED, obj);
  },
  trackFeedItemActioned(icymiSessionId) {
    let impressionId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const FEED_ITEM_ACTIONED = hasOwnProperty.FEED_ITEM_ACTIONED;
    const obj = { load_id: ICYMIStore.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: ICYMIStore.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, item_id: icymiSessionId.itemId, item_type: icymiSessionId.itemType, impression_id: impressionId, action_gesture_type: icymiSessionId.actionParameters.actionGestureType, action_target_element: icymiSessionId.actionParameters.actionTargetElement, action_intent_type: icymiSessionId.actionParameters.actionIntentType, action_destination_type: icymiSessionId.actionParameters.actionDestinationType };
    impressionId = icymiSessionId.impressionId;
    if (impressionId == null) {
      impressionId = null;
    }
    track(FEED_ITEM_ACTIONED, obj);
  },
  trackFeedFilterActioned(icymiSessionId) {
    let impressionId;
    let itemId;
    let itemType;
    let newOutSetting;
    let newTuneSetting;
    let previousOutSetting;
    let previousTuneSetting;
    let targetChannelId;
    let targetGuildId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const FEED_FILTER_ACTIONED = hasOwnProperty.FEED_FILTER_ACTIONED;
    const obj = { load_id: ICYMIStore.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: ICYMIStore.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, filter_setting_context: icymiSessionId.filterParameters.filterSettingContext, filter_target_type: icymiSessionId.filterParameters.filterTargetType, target_guild_id: targetGuildId, target_channel_id: targetChannelId, previous_tune_setting: previousTuneSetting, new_tune_setting: newTuneSetting, previous_out_setting: previousOutSetting, new_out_setting: newOutSetting, item_id: itemId, item_type: itemType, impression_id: impressionId };
    targetGuildId = icymiSessionId.filterParameters.targetGuildId;
    if (targetGuildId == null) {
      targetGuildId = null;
    }
    targetChannelId = icymiSessionId.filterParameters.targetChannelId;
    if (targetChannelId == null) {
      targetChannelId = null;
    }
    previousTuneSetting = icymiSessionId.filterParameters.previousTuneSetting;
    if (previousTuneSetting == null) {
      previousTuneSetting = null;
    }
    newTuneSetting = icymiSessionId.filterParameters.newTuneSetting;
    if (newTuneSetting == null) {
      newTuneSetting = null;
    }
    previousOutSetting = icymiSessionId.filterParameters.previousOutSetting;
    if (previousOutSetting == null) {
      previousOutSetting = null;
    }
    newOutSetting = icymiSessionId.filterParameters.newOutSetting;
    if (newOutSetting == null) {
      newOutSetting = null;
    }
    itemId = icymiSessionId.itemId;
    if (itemId == null) {
      itemId = null;
    }
    itemType = icymiSessionId.itemType;
    if (itemType == null) {
      itemType = null;
    }
    impressionId = icymiSessionId.impressionId;
    if (impressionId == null) {
      impressionId = null;
    }
    track(FEED_FILTER_ACTIONED, obj);
  },
  trackFeedPageActioned(icymiSessionId) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: ICYMIStore.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: ICYMIStore.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, action_gesture_type: icymiSessionId.actionParameters.actionGestureType, action_target_element: icymiSessionId.actionParameters.actionTargetElement, action_intent_type: icymiSessionId.actionParameters.actionIntentType, action_destination_type: icymiSessionId.actionParameters.actionDestinationType };
    obj.track(hasOwnProperty.FEED_PAGE_ACTIONED, obj2);
  }
};
const result = size.fileFinishedImporting("modules/icymi/ICYMIAnalytics.tsx");

export const DEFAULT_UX_VARIATION = "default";
export const ICYMIAnalytics = obj;
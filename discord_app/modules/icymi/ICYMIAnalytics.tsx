// === Module 8634: ICYMIAnalytics ===

// Module 8634 (ICYMIAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8403 */;
import ICYMITypes from "ICYMITypes" /* 8623 */;
import ICYMIStore from "ICYMIStore" /* 8610 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIAnalytics.tsx");

export const DEFAULT_UX_VARIATION = "default";
export const ICYMIAnalytics = {
  trackItemInteraction(feed_item_type) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_ITEM_INTERACTED, { load_id: ICYMIStore.getLoadId(), feed_item_type: feed_item_type.type, feed_item_id: feed_item_type.id, home_session_id: "gravity", action_type: feed_item_type.actionType, feed_item_index: ICYMIStore.getIndexInHydratedFeed(feed_item_type.id), icymi_session_id: feed_item_type.icymiSessionId, impression_id: feed_item_type.impressionId, ux_variation: feed_item_type.uxVariation, session_interaction_index: feed_item_type.sessionInteractionIndex });
  },
  trackItemShortImpression(viewableItems, arr2, stateFromStores) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_ITEM_SEEN_BATCH, {
      load_id: ICYMIStore.getLoadId(),
      home_session_id: "gravity",
      feed_item_ids: viewableItems.map((item) => item.item.id),
      feed_item_types: viewableItems.map((item) => {
        item = item.item;
        const kind = item.data.kind;
        if ("end" === kind) {
          let str3 = "end";
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
    });
  },
  trackItemLongImpression(viewableItems, arr2, stateFromStores) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_ITEM_SEEN_LONG, {
      load_id: ICYMIStore.getLoadId(),
      home_session_id: "gravity",
      feed_item_ids: viewableItems.map((item) => item.item.id),
      feed_item_types: viewableItems.map((item) => {
        item = item.item;
        const kind = item.data.kind;
        if ("end" === kind) {
          let str3 = "end";
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
    });
  },
  trackFeedLoaded(unreadFeedItems) {
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    unreadFeedItems = unreadFeedItems.unreadFeedItems;
    const item = unreadFeedItems.forEach((id) => {
      items.push(id.id);
      const type = id.type;
      if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
        let str2 = "message";
        if (id.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
          str2 = "announcement";
        }
        let str = str2;
      } else {
        str = "hotwheels_gaming_activity";
        if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
              if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
                str = "recommended_guilds";
              }
            }
          }
        }
      }
      items2.push(str);
    });
    const readFeedItems = unreadFeedItems.readFeedItems;
    const item1 = readFeedItems.forEach((id) => {
      items1.push(id.id);
      const type = id.type;
      if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
        let str2 = "message";
        if (id.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
          str2 = "announcement";
        }
        let str = str2;
      } else {
        str = "hotwheels_gaming_activity";
        if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
              if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
                str = "recommended_guilds";
              }
            }
          }
        }
      }
      items3.push(str);
    });
    const obj3 = {};
    const merged = Object.assign(unreadFeedItems.newTrackingProps);
    ({ homeSessionId: obj2.home_session_id, hasNewContent: obj2.tab_badged } = unreadFeedItems);
    obj3.unread_feed_item_ids = items;
    obj3.read_feed_item_ids = items1;
    obj3.unread_feed_item_types = items2;
    obj3.read_feed_item_types = items3;
    items1(items2[4]).track(constants.FEED_LOADED, obj3);
  },
  trackFeedShown(homeSessionId) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_SHOWN, { load_id: ICYMIStore.getLoadId(), home_session_id: homeSessionId.homeSessionId, variant: homeSessionId.variant });
  },
  trackFeedFirstScrollStarted() {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.HOME_FIRST_SCROLL_STARTED, { load_id: ICYMIStore.getLoadId(), home_session_id: "gravity" });
  },
  trackFeedFeedbackPromptViewed() {
    AnalyticsUtilsDefault.track(hasOwnProperty.HOME_FEEDBACK_PROMPT_VIEWED);
  },
  trackFeedFeedbackSubmitted(arg0) {
    const obj = AnalyticsUtilsDefault;
    const merged = Object.assign(arg0);
    obj.track(hasOwnProperty.HOME_FEEDBACK_SUBMITTED, { load_id: ICYMIStore.getLoadId(), home_session_id: "gravity" });
  },
  trackFeedOnboardingScreenSkipped(location) {
    AnalyticsUtilsDefault.track(hasOwnProperty.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: location.location });
  },
  trackFeedOnboardingGuildToggled(guildId) {
    AnalyticsUtilsDefault.track(hasOwnProperty.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: guildId.guildId, toggled: guildId.toggled });
  },
  trackFeedOnboardingCategoryToggled(categoryId) {
    AnalyticsUtilsDefault.track(hasOwnProperty.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: categoryId.categoryId, toggled: categoryId.toggled });
  },
  trackFeedEmptyLoadingSeen() {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion() });
  },
  trackFeedEmptyLoadingComplete(dwellTimeMs) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_COMPLETE, { load_id: ICYMIStore.getLoadId(), dwell_time_ms: dwellTimeMs.dwellTimeMs, version: ICYMIStore.getVersion() });
  },
  trackFeedEmptyLoadingAbandoned(dwellTimeMs) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_ABANDONED, { load_id: ICYMIStore.getLoadId(), dwell_time_ms: dwellTimeMs.dwellTimeMs, version: ICYMIStore.getVersion() });
  },
  trackFeedSessionStarted(sessionStartTimeMs) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_SESSION_STARTED, { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), session_start_time_ms: sessionStartTimeMs.sessionStartTimeMs, icymi_session_id: sessionStartTimeMs.icymiSessionId, previous_icymi_session_count: sessionStartTimeMs.previousIcymiSessionCount, ux_variation: sessionStartTimeMs.uxVariation });
  },
  trackFeedSessionCompleted(sessionDurationMs) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_SESSION_COMPLETED, { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), session_duration_ms: sessionDurationMs.sessionDurationMs, session_start_time_ms: sessionDurationMs.sessionStartTimeMs, session_end_time_ms: sessionDurationMs.sessionEndTimeMs, impression_count: sessionDurationMs.impressionCount, unique_impression_count: sessionDurationMs.uniqueImpressionCount, icymi_session_id: sessionDurationMs.icymiSessionId, feed_reload_count: sessionDurationMs.feedReloadCount, feed_visible_items_changed_count: sessionDurationMs.feedDwelledItemsChangedCount, feed_fetch_count: sessionDurationMs.feedFetchCount, impression_item_types: sessionDurationMs.impressionItemTypes, latest_dwell_start_time_ms: sessionDurationMs.latestDwellStartTimeMs, previous_icymi_session_count: sessionDurationMs.previousIcyMiSessionCount, ux_variation: sessionDurationMs.uxVariation, interaction_count: sessionDurationMs.interactionCount, dwelled_count: sessionDurationMs.dwelledCount, unique_dwelled_count: sessionDurationMs.uniqueDwelledCount });
  },
  trackFeedItemDwell1s(impressionId) {
    const obj3 = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), impression_id: impressionId.impressionId, item_id: impressionId.itemId, item_type: impressionId.itemType, dwell_start_time_ms: impressionId.dwellStartTimeMs, icymi_session_id: impressionId.icymiSessionId, trigger_type: impressionId.triggerType, item_occurence_count_in_session: impressionId.itemOccurenceCountInSession, item_feed_index: impressionId.itemFeedIndex, is_initially_visible: impressionId.isInitiallyVisible, item_score: impressionId.itemScore, item_channel_type: null, item_card_height: null, is_dwelling: null, interaction_action_types: null, interaction_count: null, ux_variation: null, session_impression_index: null };
    let itemChannelType = impressionId.itemChannelType;
    if (itemChannelType == null) {
      itemChannelType = null;
    }
    obj3.item_channel_type = itemChannelType;
    ({ itemCardHeight: obj2.item_card_height, isDwelling: obj2.is_dwelling, interactionActionTypes: obj2.interaction_action_types, interactionCount: obj2.interaction_count, uxVariation: obj2.ux_variation, sessionImpressionIndex: obj2.session_impression_index } = impressionId);
    AnalyticsUtilsDefault.track(hasOwnProperty.FEED_ITEM_1S_DWELLED, obj3);
  },
  trackFeedItemDwelled(impressionId) {
    const obj3 = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion(), impression_id: impressionId.impressionId, dwell_time_ms: impressionId.dwellTimeMs, item_id: impressionId.itemId, item_type: impressionId.itemType, dwell_start_time_ms: impressionId.dwellStartTimeMs, dwell_end_time_ms: impressionId.dwellEndTimeMs, icymi_session_id: impressionId.icymiSessionId, trigger_type: impressionId.triggerType, item_occurence_count_in_session: impressionId.itemOccurenceCountInSession, item_feed_index: impressionId.itemFeedIndex, is_initially_visible: impressionId.isInitiallyVisible, item_score: impressionId.itemScore, item_channel_type: null, item_card_height: null, ux_variation: null, interaction_action_types: null, interaction_count: null, session_impression_index: null };
    let itemChannelType = impressionId.itemChannelType;
    if (itemChannelType == null) {
      itemChannelType = null;
    }
    obj3.item_channel_type = itemChannelType;
    ({ itemCardHeight: obj2.item_card_height, uxVariation: obj2.ux_variation, interactionActionTypes: obj2.interaction_action_types, interactionCount: obj2.interaction_count, sessionImpressionIndex: obj2.session_impression_index } = impressionId);
    AnalyticsUtilsDefault.track(hasOwnProperty.FEED_ITEM_DWELLED, obj3);
  },
  trackFeedItemActioned(icymiSessionId) {
    const obj2 = { load_id: ICYMIStore.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: ICYMIStore.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, item_id: icymiSessionId.itemId, item_type: icymiSessionId.itemType, impression_id: null, action_gesture_type: null, action_target_element: null, action_intent_type: null, action_destination_type: null };
    let impressionId = icymiSessionId.impressionId;
    if (impressionId == null) {
      impressionId = null;
    }
    obj2.impression_id = impressionId;
    obj2.action_gesture_type = icymiSessionId.actionParameters.actionGestureType;
    obj2.action_target_element = icymiSessionId.actionParameters.actionTargetElement;
    obj2.action_intent_type = icymiSessionId.actionParameters.actionIntentType;
    obj2.action_destination_type = icymiSessionId.actionParameters.actionDestinationType;
    AnalyticsUtilsDefault.track(hasOwnProperty.FEED_ITEM_ACTIONED, obj2);
  },
  trackFeedFilterActioned(icymiSessionId) {
    const obj2 = { load_id: ICYMIStore.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: ICYMIStore.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, filter_setting_context: icymiSessionId.filterParameters.filterSettingContext, filter_target_type: icymiSessionId.filterParameters.filterTargetType, target_guild_id: null, target_channel_id: null, previous_tune_setting: null, new_tune_setting: null, previous_out_setting: null, new_out_setting: null, item_id: null, item_type: null, impression_id: null };
    let targetGuildId = icymiSessionId.filterParameters.targetGuildId;
    if (targetGuildId == null) {
      targetGuildId = null;
    }
    obj2.target_guild_id = targetGuildId;
    let targetChannelId = icymiSessionId.filterParameters.targetChannelId;
    if (targetChannelId == null) {
      targetChannelId = null;
    }
    obj2.target_channel_id = targetChannelId;
    let previousTuneSetting = icymiSessionId.filterParameters.previousTuneSetting;
    if (previousTuneSetting == null) {
      previousTuneSetting = null;
    }
    obj2.previous_tune_setting = previousTuneSetting;
    let newTuneSetting = icymiSessionId.filterParameters.newTuneSetting;
    if (newTuneSetting == null) {
      newTuneSetting = null;
    }
    obj2.new_tune_setting = newTuneSetting;
    let previousOutSetting = icymiSessionId.filterParameters.previousOutSetting;
    if (previousOutSetting == null) {
      previousOutSetting = null;
    }
    obj2.previous_out_setting = previousOutSetting;
    let newOutSetting = icymiSessionId.filterParameters.newOutSetting;
    if (newOutSetting == null) {
      newOutSetting = null;
    }
    obj2.new_out_setting = newOutSetting;
    let itemId = icymiSessionId.itemId;
    if (itemId == null) {
      itemId = null;
    }
    obj2.item_id = itemId;
    let itemType = icymiSessionId.itemType;
    if (itemType == null) {
      itemType = null;
    }
    obj2.item_type = itemType;
    let impressionId = icymiSessionId.impressionId;
    if (impressionId == null) {
      impressionId = null;
    }
    obj2.impression_id = impressionId;
    AnalyticsUtilsDefault.track(hasOwnProperty.FEED_FILTER_ACTIONED, obj2);
  },
  trackFeedPageActioned(icymiSessionId) {
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.FEED_PAGE_ACTIONED, { load_id: ICYMIStore.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: ICYMIStore.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, action_gesture_type: icymiSessionId.actionParameters.actionGestureType, action_target_element: icymiSessionId.actionParameters.actionTargetElement, action_intent_type: icymiSessionId.actionParameters.actionIntentType, action_destination_type: icymiSessionId.actionParameters.actionDestinationType });
  }
};
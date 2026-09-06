// discord_app/modules/icymi/ICYMIAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ContentInventoryEntryType from "../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import ICYMITypes from "ICYMITypes.tsx";
import ICYMIStore from "ICYMIStore.tsx";

require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIAnalytics.tsx");

export const DEFAULT_UX_VARIATION = "default";
export const ICYMIAnalytics = {
  trackItemInteraction(feed_item_type) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      feed_item_type: feed_item_type.type,
      feed_item_id: feed_item_type.id,
      home_session_id: "gravity",
      action_type: feed_item_type.actionType,
      feed_item_index: ICYMIStore.getIndexInHydratedFeed(feed_item_type.id),
      icymi_session_id: feed_item_type.icymiSessionId,
      impression_id: feed_item_type.impressionId,
      ux_variation: feed_item_type.uxVariation,
      session_interaction_index: feed_item_type.sessionInteractionIndex,
    };
    obj.track(hasOwnProperty.FEED_ITEM_INTERACTED, obj);
  },
  trackItemShortImpression(viewableItems, arr2, stateFromStores) {
    const obj = {
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
      version: 3,
    };
    obj.track(hasOwnProperty.FEED_ITEM_SEEN_BATCH, obj);
  },
  trackItemLongImpression(viewableItems, arr2, stateFromStores) {
    const obj = {
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
      version: 3,
    };
    obj.track(hasOwnProperty.FEED_ITEM_SEEN_LONG, obj);
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
        if (tmp3(8348).ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (tmp3(8348).ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (tmp3(8348).ICYMIItemTypes.GUILD_EVENT !== type) {
              if (tmp3(8348).ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
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
        if (tmp3(8348).ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (tmp3(8348).ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (tmp3(8348).ICYMIItemTypes.GUILD_EVENT !== type) {
              if (tmp3(8348).ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
                str = "recommended_guilds";
              }
            }
          }
        }
      }
      items3.push(str);
    });
    items1(items2[4]);
    const obj = {};
    const merged = Object.assign(unreadFeedItems.newTrackingProps);
    ({ homeSessionId: obj2.home_session_id, hasNewContent: obj2.tab_badged } = unreadFeedItems);
    obj.unread_feed_item_ids = items;
    obj.read_feed_item_ids = items1;
    obj.unread_feed_item_types = items2;
    obj.read_feed_item_types = items3;
    obj.track(constants.FEED_LOADED, obj);
  },
  trackFeedShown(homeSessionId) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      home_session_id: homeSessionId.homeSessionId,
      variant: homeSessionId.variant,
    };
    obj.track(hasOwnProperty.FEED_SHOWN, obj);
  },
  trackFeedFirstScrollStarted() {
    const obj = { load_id: ICYMIStore.getLoadId(), home_session_id: "gravity" };
    obj.track(hasOwnProperty.HOME_FIRST_SCROLL_STARTED, obj);
  },
  trackFeedFeedbackPromptViewed() {
    AnalyticsUtilsDefault.track(hasOwnProperty.HOME_FEEDBACK_PROMPT_VIEWED);
  },
  trackFeedFeedbackSubmitted(arg0) {
    const obj = { load_id: ICYMIStore.getLoadId(), home_session_id: "gravity" };
    const merged = Object.assign(arg0);
    obj.track(hasOwnProperty.HOME_FEEDBACK_SUBMITTED, obj);
  },
  trackFeedOnboardingScreenSkipped(location) {
    const obj = { location: location.location };
    obj.track(hasOwnProperty.ICYMI_ONBOARDING_SCREEN_SKIPPED, obj);
  },
  trackFeedOnboardingGuildToggled(guildId) {
    const obj = { guild_id: guildId.guildId, toggled: guildId.toggled };
    obj.track(hasOwnProperty.ICYMI_ONBOARDING_GUILD_TOGGLED, obj);
  },
  trackFeedOnboardingCategoryToggled(categoryId) {
    const obj = { category_id: categoryId.categoryId, toggled: categoryId.toggled };
    obj.track(hasOwnProperty.ICYMI_ONBOARDING_CATEGORY_TOGGLED, obj);
  },
  trackFeedEmptyLoadingSeen() {
    const obj = { load_id: ICYMIStore.getLoadId(), version: ICYMIStore.getVersion() };
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_SEEN, obj);
  },
  trackFeedEmptyLoadingComplete(dwellTimeMs) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      dwell_time_ms: dwellTimeMs.dwellTimeMs,
      version: ICYMIStore.getVersion(),
    };
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_COMPLETE, obj);
  },
  trackFeedEmptyLoadingAbandoned(dwellTimeMs) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      dwell_time_ms: dwellTimeMs.dwellTimeMs,
      version: ICYMIStore.getVersion(),
    };
    obj.track(hasOwnProperty.ICYMI_FEED_EMPTY_LOADING_ABANDONED, obj);
  },
  trackFeedSessionStarted(sessionStartTimeMs) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      version: ICYMIStore.getVersion(),
      session_start_time_ms: sessionStartTimeMs.sessionStartTimeMs,
      icymi_session_id: sessionStartTimeMs.icymiSessionId,
      previous_icymi_session_count: sessionStartTimeMs.previousIcymiSessionCount,
      ux_variation: sessionStartTimeMs.uxVariation,
    };
    obj.track(hasOwnProperty.FEED_SESSION_STARTED, obj);
  },
  trackFeedSessionCompleted(sessionDurationMs) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      version: ICYMIStore.getVersion(),
      session_duration_ms: sessionDurationMs.sessionDurationMs,
      session_start_time_ms: sessionDurationMs.sessionStartTimeMs,
      session_end_time_ms: sessionDurationMs.sessionEndTimeMs,
      impression_count: sessionDurationMs.impressionCount,
      unique_impression_count: sessionDurationMs.uniqueImpressionCount,
      icymi_session_id: sessionDurationMs.icymiSessionId,
      feed_reload_count: sessionDurationMs.feedReloadCount,
      feed_visible_items_changed_count: sessionDurationMs.feedDwelledItemsChangedCount,
      feed_fetch_count: sessionDurationMs.feedFetchCount,
      impression_item_types: sessionDurationMs.impressionItemTypes,
      latest_dwell_start_time_ms: sessionDurationMs.latestDwellStartTimeMs,
      previous_icymi_session_count: sessionDurationMs.previousIcyMiSessionCount,
      ux_variation: sessionDurationMs.uxVariation,
      interaction_count: sessionDurationMs.interactionCount,
      dwelled_count: sessionDurationMs.dwelledCount,
      unique_dwelled_count: sessionDurationMs.uniqueDwelledCount,
    };
    obj.track(hasOwnProperty.FEED_SESSION_COMPLETED, obj);
  },
  trackFeedItemDwell1s(impressionId) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      version: ICYMIStore.getVersion(),
      impression_id: impressionId.impressionId,
      item_id: impressionId.itemId,
      item_type: impressionId.itemType,
      dwell_start_time_ms: impressionId.dwellStartTimeMs,
      icymi_session_id: impressionId.icymiSessionId,
      trigger_type: impressionId.triggerType,
      item_occurence_count_in_session: impressionId.itemOccurenceCountInSession,
      item_feed_index: impressionId.itemFeedIndex,
      is_initially_visible: impressionId.isInitiallyVisible,
      item_score: impressionId.itemScore,
      item_channel_type: null,
      item_card_height: null,
      is_dwelling: null,
      interaction_action_types: null,
      interaction_count: null,
      ux_variation: null,
      session_impression_index: null,
    };
    let itemChannelType = impressionId.itemChannelType;
    if (itemChannelType == null) {
      itemChannelType = null;
    }
    obj.item_channel_type = itemChannelType;
    ({
      itemCardHeight: obj2.item_card_height,
      isDwelling: obj2.is_dwelling,
      interactionActionTypes: obj2.interaction_action_types,
      interactionCount: obj2.interaction_count,
      uxVariation: obj2.ux_variation,
      sessionImpressionIndex: obj2.session_impression_index,
    } = impressionId);
    obj.track(hasOwnProperty.FEED_ITEM_1S_DWELLED, obj);
  },
  trackFeedItemDwelled(impressionId) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      version: ICYMIStore.getVersion(),
      impression_id: impressionId.impressionId,
      dwell_time_ms: impressionId.dwellTimeMs,
      item_id: impressionId.itemId,
      item_type: impressionId.itemType,
      dwell_start_time_ms: impressionId.dwellStartTimeMs,
      dwell_end_time_ms: impressionId.dwellEndTimeMs,
      icymi_session_id: impressionId.icymiSessionId,
      trigger_type: impressionId.triggerType,
      item_occurence_count_in_session: impressionId.itemOccurenceCountInSession,
      item_feed_index: impressionId.itemFeedIndex,
      is_initially_visible: impressionId.isInitiallyVisible,
      item_score: impressionId.itemScore,
      item_channel_type: null,
      item_card_height: null,
      ux_variation: null,
      interaction_action_types: null,
      interaction_count: null,
      session_impression_index: null,
    };
    let itemChannelType = impressionId.itemChannelType;
    if (itemChannelType == null) {
      itemChannelType = null;
    }
    obj.item_channel_type = itemChannelType;
    ({
      itemCardHeight: obj2.item_card_height,
      uxVariation: obj2.ux_variation,
      interactionActionTypes: obj2.interaction_action_types,
      interactionCount: obj2.interaction_count,
      sessionImpressionIndex: obj2.session_impression_index,
    } = impressionId);
    obj.track(hasOwnProperty.FEED_ITEM_DWELLED, obj);
  },
  trackFeedItemActioned(icymiSessionId) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      icymi_session_id: icymiSessionId.icymiSessionId,
      ux_variation: icymiSessionId.uxVariation,
      version: ICYMIStore.getVersion(),
      session_action_index: icymiSessionId.sessionActionIndex,
      item_id: icymiSessionId.itemId,
      item_type: icymiSessionId.itemType,
      impression_id: null,
      action_gesture_type: null,
      action_target_element: null,
      action_intent_type: null,
      action_destination_type: null,
    };
    let impressionId = icymiSessionId.impressionId;
    if (impressionId == null) {
      impressionId = null;
    }
    obj.impression_id = impressionId;
    obj.action_gesture_type = icymiSessionId.actionParameters.actionGestureType;
    obj.action_target_element = icymiSessionId.actionParameters.actionTargetElement;
    obj.action_intent_type = icymiSessionId.actionParameters.actionIntentType;
    obj.action_destination_type = icymiSessionId.actionParameters.actionDestinationType;
    obj.track(hasOwnProperty.FEED_ITEM_ACTIONED, obj);
  },
  trackFeedFilterActioned(icymiSessionId) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      icymi_session_id: icymiSessionId.icymiSessionId,
      ux_variation: icymiSessionId.uxVariation,
      version: ICYMIStore.getVersion(),
      session_action_index: icymiSessionId.sessionActionIndex,
      filter_setting_context: icymiSessionId.filterParameters.filterSettingContext,
      filter_target_type: icymiSessionId.filterParameters.filterTargetType,
      target_guild_id: null,
      target_channel_id: null,
      previous_tune_setting: null,
      new_tune_setting: null,
      previous_out_setting: null,
      new_out_setting: null,
      item_id: null,
      item_type: null,
      impression_id: null,
    };
    let targetGuildId = icymiSessionId.filterParameters.targetGuildId;
    if (targetGuildId == null) {
      targetGuildId = null;
    }
    obj.target_guild_id = targetGuildId;
    let targetChannelId = icymiSessionId.filterParameters.targetChannelId;
    if (targetChannelId == null) {
      targetChannelId = null;
    }
    obj.target_channel_id = targetChannelId;
    let previousTuneSetting = icymiSessionId.filterParameters.previousTuneSetting;
    if (previousTuneSetting == null) {
      previousTuneSetting = null;
    }
    obj.previous_tune_setting = previousTuneSetting;
    let newTuneSetting = icymiSessionId.filterParameters.newTuneSetting;
    if (newTuneSetting == null) {
      newTuneSetting = null;
    }
    obj.new_tune_setting = newTuneSetting;
    let previousOutSetting = icymiSessionId.filterParameters.previousOutSetting;
    if (previousOutSetting == null) {
      previousOutSetting = null;
    }
    obj.previous_out_setting = previousOutSetting;
    let newOutSetting = icymiSessionId.filterParameters.newOutSetting;
    if (newOutSetting == null) {
      newOutSetting = null;
    }
    obj.new_out_setting = newOutSetting;
    let itemId = icymiSessionId.itemId;
    if (itemId == null) {
      itemId = null;
    }
    obj.item_id = itemId;
    let itemType = icymiSessionId.itemType;
    if (itemType == null) {
      itemType = null;
    }
    obj.item_type = itemType;
    let impressionId = icymiSessionId.impressionId;
    if (impressionId == null) {
      impressionId = null;
    }
    obj.impression_id = impressionId;
    obj.track(hasOwnProperty.FEED_FILTER_ACTIONED, obj);
  },
  trackFeedPageActioned(icymiSessionId) {
    const obj = {
      load_id: ICYMIStore.getLoadId(),
      icymi_session_id: icymiSessionId.icymiSessionId,
      ux_variation: icymiSessionId.uxVariation,
      version: ICYMIStore.getVersion(),
      session_action_index: icymiSessionId.sessionActionIndex,
      action_gesture_type: icymiSessionId.actionParameters.actionGestureType,
      action_target_element: icymiSessionId.actionParameters.actionTargetElement,
      action_intent_type: icymiSessionId.actionParameters.actionIntentType,
      action_destination_type: icymiSessionId.actionParameters.actionDestinationType,
    };
    obj.track(hasOwnProperty.FEED_PAGE_ACTIONED, obj);
  },
};

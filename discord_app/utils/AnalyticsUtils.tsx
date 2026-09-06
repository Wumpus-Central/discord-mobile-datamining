// === Module 1242: AnalyticsUtils ===

// Module 1242 (AnalyticsUtils)
import LogAggregatorAll from "LogAggregator" /* 7 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import v1 from "v1" /* 1256 */;
import CommonSentryInitUtils from "CommonSentryInitUtils" /* 1358 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1359 */;
import utils_AnalyticsSchemaAll from "utils/AnalyticsSchema" /* 1361 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;

require = fn;
function expandEventProperties(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  if (null == obj.location) {
    if (null == obj.source) {
      tmp.client_performance_cpu = ProcessUtilsDefault.getCurrentCPUUsagePercent();
      tmp.client_performance_memory = ProcessUtilsDefault.getCurrentMemoryUsageKB();
      tmp.cpu_core_count = ProcessUtilsDefault.getCPUCoreCount();
      tmp.accessibility_features = global();
      tmp.rendered_locale = util.intl.currentLocale;
      const _Math = Math;
      const _performance = performance;
      tmp.uptime_app = Math.floor((performance.now() - closure_18) / c15);
      const processUptime = ProcessUtilsDefault.getProcessUptime();
      if (null != processUptime) {
        const _Math2 = Math;
        tmp.uptime_process_renderer = Math.floor(processUptime);
      }
      let utmSource = tmp.utm_source;
      ({ utmMedium, utmCampaign, utmContent } = global);
      if (utmSource == null) {
        utmSource = global.utmSource;
      }
      tmp.utm_source = utmSource;
      let utm_medium = tmp.utm_medium;
      if (utm_medium == null) {
        utm_medium = utmMedium;
      }
      tmp.utm_medium = utm_medium;
      let utm_campaign = tmp.utm_campaign;
      if (utm_campaign == null) {
        utm_campaign = utmCampaign;
      }
      tmp.utm_campaign = utm_campaign;
      let utm_content = tmp.utm_content;
      if (utm_content == null) {
        utm_content = utmContent;
      }
      tmp.utm_content = utm_content;
      tmp.launch_signature = launchSignature;
      const item = closure_20.forEach((fn) => fn(obj2));
      return tmp;
    } else {
      const source = obj.source;
      obj = {};
      const merged = Object.assign(_objectWithoutProperties(obj, closure_5));
      if (typeof source === "string") {
        obj = { source };
        let obj1 = obj;
      } else {
        obj1 = { source_page: null, source_section: null, source_object: null, source_object_type: null, source_promotion_id: null };
        ({ page: obj5.source_page, section: obj5.source_section, object: obj5.source_object, objectType: obj5.source_object_type, promotionId: obj5.source_promotion_id } = source);
      }
      const merged1 = Object.assign(obj1);
    }
  } else {
    const _location = obj.location;
    const obj2 = {};
    const merged2 = Object.assign(_objectWithoutProperties(obj, closure_4));
    if (typeof _location === "string") {
      const obj3 = { location: _location };
      let obj4 = obj3;
    } else {
      obj4 = { location: null, location_page: null, location_section: null, location_object: null, location_object_type: null };
      ({ page: obj3.location, page: obj3.location_page, section: obj3.location_section, object: obj3.location_object, objectType: obj3.location_object_type } = _location);
    }
    const merged3 = Object.assign(obj4);
  }
}
let closure_4 = ["location"];
let closure_5 = ["source"];
const ImpressionStore = fn(1243);
({ setDebugTrackedData: closure_7, getLocation: closure_8 } = ImpressionStore);
const Constants = fn(1074);
({ AnalyticEvents, AnalyticsObjectTypes: c10, AnalyticsSections: closure_11 } = Constants);
const AccessibilityFeatureFlags = fn(1349).AccessibilityFeatureFlags;
const ApplicationTypes = fn(1350).ApplicationTypes;
let global = {};
let c15 = 1000;
let c16 = 60000;
let c17 = 900000;
const context = noop.createContext({ location: {} });
let closure_18 = performance.now();
let shim = fn(1351);
let launchSignature = null;
if (shim.isLibdiscoreInitialized()) {
  let obj2 = fn(1351);
  let obj3 = fn(1357);
  launchSignature = obj2.generateLaunchSignature(obj3.getGlobalObject());
}
function addBreadcrumb(message) {
  const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = CommonSentryInitUtils.IGNORE_ANALYTICS_BREADCRUMB_EVENTS;
  if (!IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(message)) {
    const obj = { category: "analytics", message };
    obj.addBreadcrumb(obj);
  }
}
function expandLocation(location) {
  if (typeof location === "string") {
    let obj = { location };
  } else {
    obj = { location: null, location_page: null, location_section: null, location_object: null, location_object_type: null };
    ({ page: obj2.location, page: obj2.location_page, section: obj2.location_section, object: obj2.location_object, objectType: obj2.location_object_type } = location);
  }
  return obj;
}
function debugLogEvent(name, result) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const report = LogAggregatorAll.report;
  if (flag) {
    report("Analytics", name, result);
  } else {
    report("Analytics", name);
  }
}
const result = AnalyticsUtils.extendSuperProperties({ launch_signature: launchSignature });
let closure_20 = [];
obj = {
  [AnalyticEvents.APP_OPENED]: obj,
  [AnalyticEvents.APP_BACKGROUND]: shim,
  [AnalyticEvents.ACK_MESSAGES]: (location_object_type) => {
    let tmp;
    if (location_object_type.location_object_type !== constants.ACK_MANUAL) {
      const obj = {
        throttlePeriod: throttlePeriod2,
        throttleKeys(arg0) {
            const items = [, , ];
            ({ guild_id: arr[0], channel_id: arr[1], location_section: arr[2] } = arg0);
            return items;
          }
      };
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.GUILD_VIEWED]: obj2,
  [AnalyticEvents.FRIENDS_LIST_VIEWED]: obj3,
  [AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: obj4,
  [AnalyticEvents.START_SPEAKING]: obj5,
  [AnalyticEvents.START_LISTENING]: obj6,
  [AnalyticEvents.ACTIVITY_UPDATED]: obj7,
  [AnalyticEvents.CHANNEL_OPENED]: obj8,
  [AnalyticEvents.TEXT_IN_VOICE_OPENED]: obj9,
  [AnalyticEvents.NOTIFICATION_VIEWED]: obj10,
  [AnalyticEvents.MEMBER_LIST_VIEWED]: obj11,
  [AnalyticEvents.DM_LIST_VIEWED]: obj12,
  [AnalyticEvents.NAV_DRAWER_OPENED]: obj13,
  [AnalyticEvents.KEYBOARD_SHORTCUT_USED]: obj14,
  [AnalyticEvents.QUICKSWITCHER_OPENED]: obj15,
  [AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: obj16,
  [AnalyticEvents.ROLE_PAGE_VIEWED]: obj17,
  [AnalyticEvents.VIDEO_INPUT_INITIALIZED]: obj18,
  [AnalyticEvents.AUDIO_INPUT_INITIALIZED]: obj19,
  [AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: obj20,
  [AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: obj21,
  [AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: obj22,
  [AnalyticEvents.RPC_COMMAND_SENT]: obj23,
  [AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: obj24,
  [AnalyticEvents.ACTIVITY_HANDSHAKE]: obj25,
  [AnalyticEvents.CHANNEL_BANNER_VIEWED]: obj26,
  [fn(1250).ImpressionNames.GUILD_HANGOUT_WINDOW]: obj27,
  [fn(1250).ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT]: obj28,
  [AnalyticEvents.PREMIUM_UPSELL_VIEWED]: obj29,
  [AnalyticEvents.FORUM_CHANNEL_SEARCHED]: obj30,
  [AnalyticEvents.FORUM_CHANNEL_SCROLLED]: obj31,
  [AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: obj32,
  [AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: obj33,
  [AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: obj34,
  [AnalyticEvents.ACTIVITY_CARDS_VIEWED]: obj35,
  [AnalyticEvents.GUILD_TOOLTIP_SHOWN]: obj36,
  [AnalyticEvents.ACK_COMMUNITY_MESSAGES]: obj37,
  [AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: obj38,
  [AnalyticEvents.CHANNEL_LIST_END_REACHED]: obj39,
  [AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: obj40,
  [AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: obj41,
  [AnalyticEvents.MEDIA_INPUT_VOLUME_CHANGED]: obj42,
  [AnalyticEvents.MEDIA_OUTPUT_VOLUME_CHANGED]: obj43,
  [AnalyticEvents.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: obj44,
  [AnalyticEvents.USER_VOICE_ACTIVITY_VIEWED]: obj45,
  [AnalyticEvents.PARTY_VOICE_ACTIVITY_VIEWED]: obj46,
  [AnalyticEvents.MEMBER_LIST_SWIPE_PEEK]: obj47,
  [AnalyticEvents.REDACTABLE_MESSAGE_LOADED]: obj48,
  [AnalyticEvents.OPEN_MODAL]: (type) => {
    let tmp;
    if (type.type === constants2.MEDIA_VIEWER) {
      const obj = {
        throttlePeriod,
        throttleKeys(type) {
            const items = [type.type];
            return items;
          }
      };
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.MODERATOR_QUEUE_ACTION]: obj49,
  [AnalyticEvents.NOTIFICATION_PERMISSION_STATUS]: obj50,
  [AnalyticEvents.SEARCH_BAR_VIEWED]: obj51,
  [AnalyticEvents.AD_IDENTIFIER_FETCHED]: obj52,
  [AnalyticEvents.ACTIVITY_PANEL_SDK_LINK_VIEWED]: obj53,
  [AnalyticEvents.LIBDISCORE_SLOW_TIMERS]: obj54,
  [AnalyticEvents.VIDEO_STREAM_ZOOM_CHANGED]: obj55,
  [AnalyticEvents.CACHE_STATS_RECORDED]: obj56,
  [AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN]: obj57
};
obj = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
shim = {
  throttlePeriod: 120000,
  throttleKeys() {
    return [];
  }
};
obj2 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], is_pending: arr[1] } = arg0);
    return items;
  }
};
obj3 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  }
};
global = function getAccessibilityFeatures() {
  return AccessibilityFeatureFlags.NONE;
};
AnalyticsUtils = fn(1250);
let closure_22 = AnalyticsUtils.trackMaker({ addBreadcrumb, analyticEventConfigs: obj, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" });
let c24 = false;
let closure_25 = {};
AnalyticsUtils = fn(1250);
obj10 = {
  throttlePeriod: 900000,
  throttleKeys(notif_type) {
    const items = [notif_type.notif_type];
    return items;
  }
};
obj11 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj12 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj13 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj14 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ shortcut_name: arr[0], location_object: arr[1], source_class_list } = arg0);
    if (source_class_list == null) {
      source_class_list = [];
    }
    HermesBuiltin.arraySpread(source_class_list, 2);
    return items;
  }
};
obj15 = {
  throttlePeriod: 10000,
  throttleKeys() {
    return [];
  }
};
obj16 = {
  throttlePeriod: 900000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  }
};
obj17 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ role_id: arr[0], tab_opened: arr[1] } = arg0);
    return items;
  }
};
obj18 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
obj19 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
obj20 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj21 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj22 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
obj23 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ application_id: arr[0], command: arr[1] } = arg0);
    return items;
  },
  throttlePercent: 0.001
};
obj24 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ application_id: arr[0], event: arr[1] } = arg0);
    return items;
  },
  throttlePercent: 0.001
};
obj25 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
obj26 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ banner_type: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj27 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], banner_hash: arr[1] } = arg0);
    return items;
  }
};
obj28 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], media_session_id: arr[1] } = arg0);
    return items;
  }
};
obj29 = {
  throttlePeriod: 60000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  }
};
obj30 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj31 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj32 = {
  throttlePeriod: 60000,
  throttleKeys(user_id) {
    const items = [user_id.user_id];
    return items;
  }
};
obj33 = {
  throttlePeriod: 60000,
  throttleKeys() {
    return [];
  }
};
obj34 = {
  throttlePeriod: 300000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj35 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ context: arr[0], guild_id: arr[1] } = arg0);
    return items;
  }
};
obj36 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
obj37 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj38 = {
  throttlePeriod: 900000,
  throttleKeys(tab) {
    const items = [tab.tab];
    return items;
  }
};
obj39 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
obj4 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  }
};
obj40 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj41 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  }
};
obj42 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  }
};
obj43 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  }
};
obj44 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj45 = {
  throttlePeriod: 300000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ activity_user_id: arr[0], surface: arr[1] } = arg0);
    return items;
  },
  deduplicate: true
};
obj46 = {
  throttlePeriod: 300000,
  throttleKeys(voice_channel_id) {
    const items = [voice_channel_id.voice_channel_id];
    return items;
  },
  deduplicate: true
};
obj47 = {
  throttlePeriod: 1000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj48 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], message_id: arr[1] } = arg0);
    return items;
  }
};
obj49 = {
  throttlePeriod: 10000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
obj5 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  }
};
obj50 = {
  throttlePeriod: 43200000,
  throttleKeys(arg0) {
    const items = [, , , ];
    ({ os_enabled: arr[0], notification_authorization_status: arr[1], foreground_app_enabled: arr[2], background_app_enabled: arr[3] } = arg0);
    return items;
  }
};
obj51 = {
  throttlePeriod: 3600000,
  throttleKeys(search_type) {
    const items = [search_type.search_type];
    return items;
  }
};
obj52 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
obj53 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
obj54 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  }
};
obj55 = {
  throttlePeriod: 1000,
  throttleKeys() {
    return [];
  }
};
obj56 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj57 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
const obj58 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
obj6 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  }
};
obj7 = {
  throttlePeriod: 60000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  },
  deduplicate: true
};
obj8 = {
  throttlePeriod: 900000,
  throttleKeys(channel_static_route) {
    if (null != channel_static_route.channel_static_route) {
      const items = [, , ];
      ({ guild_id: arr2[0], channel_static_route: arr2[1], channel_view: arr2[2] } = channel_static_route);
      let items1 = items;
    } else {
      items1 = [, ];
      ({ channel_id: arr[0], channel_view: arr[1] } = channel_static_route);
    }
    return items1;
  }
};
obj9 = {
  throttlePeriod: 86400000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
let closure_26 = AnalyticsUtils.trackMaker({ addBreadcrumb, analyticEventConfigs: obj, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" });
const obj60 = {};
AnalyticsUtils = Object.assign(AnalyticsUtils);
obj60.getCampaignParams = fn(1250).getCampaignParams;
obj60.setSystemAccessibilityFeatures = function setSystemAccessibilityFeatures(getActiveFeatures) {
  global = getActiveFeatures;
};
obj60.expandEventProperties = expandEventProperties;
obj60.track = function track(arg0, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const StringResult = String(arg0);
  if (c24) {
    if (null != arg1) {
      const _Array = Array;
      if (Array.isArray(closure_25[arg0])) {
        tmp3[arg0].push(arg1);
      } else {
        const items = [arg1];
        tmp3[arg0] = items;
      }
    }
  }
  if (null != obj.throttlePercent) {
    const _Math = Math;
    if (Math.random() > obj.throttlePercent) {
      return Promise.resolve();
    }
  }
  const tmp5 = expandEventProperties(arg1);
  let flag = obj.logEventProperties;
  if (flag === undefined) {
    flag = false;
  }
  const report = LogAggregatorAll.report;
  if (flag) {
    report("Analytics", StringResult, tmp5);
  } else {
    report("Analytics", StringResult);
  }
  obj = { flush: obj.flush, fingerprint: obj.fingerprint };
  return closure_22(arg0, tmp5, obj);
};
const size = fn(2);
const result1 = size.fileFinishedImporting("utils/AnalyticsUtils.tsx");

export default obj60;
export const AnalyticsContext = context;
export { launchSignature };
export const addExtraAnalyticsDecorator = function addExtraAnalyticsDecorator(arg0) {
  closure_20.push(arg0);
};
export const AnalyticEventConfigs = obj;
export { expandLocation };
export function setUTMContext(arg0) {
  global = arg0;
  return arg0;
}
export { expandEventProperties };
export { debugLogEvent };
export function startRecordingAnalyticsEvents() {
  c24 = true;
}
export function stopRecordingAnalyticsEvents() {
  c24 = false;
}
export function getAnalyticsEventsRecording() {
  return closure_25;
}
export const clearAnalyticsEventsRecording = function clearAnalyticsEventsRecording() {
  const keys = Object.keys(closure_25);
  const item = keys.forEach((item) => {
    delete tmp2[tmp];
  });
};
export const isGameApplicationType = function isGameApplicationType(arg0) {
  return arg0 === ApplicationTypes.GAME || arg0 === ApplicationTypes.DEPRECATED_GAME;
};
export const trackNetworkAction = function trackNetworkAction(event, arg1) {
  let obj = { location: React6() };
  const merged = Object.assign(arg1);
  obj = { type: "action" };
  const merged1 = Object.assign(arg1);
  React5(event, obj);
  const tmp2 = expandEventProperties(obj);
  LogAggregatorAll.report("Analytics", event);
  closure_26(event, tmp2);
};
export const getNewAnalyticsLoadId = function getNewAnalyticsLoadId() {
  return v1.v4();
};
export const AnalyticsSchema = utils_AnalyticsSchemaAll;
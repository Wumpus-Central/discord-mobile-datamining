// discord_app/utils/AnalyticsUtils.tsx
import LogAggregatorAll from "../modules/debug/LogAggregator.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import intl from "../intl/index.native.tsx";
import SentryUtilsDefault from "SentryUtils.native.tsx";
import v1 from "../../_runtime/01266_v1.js";
import AccessibilityConstants from "../modules/a11y/AccessibilityConstants.tsx";
import ApplicationConstants from "../modules/applications/ApplicationConstants.tsx";
import utils_GlobalUtils from "../../discord_common/js/shared/utils/GlobalUtils.tsx";
import CommonSentryInitUtils from "../modules/errors/CommonSentryInitUtils.tsx";
import ProcessUtilsDefault from "ProcessUtils.native.tsx";
import utils_AnalyticsSchemaAll from "AnalyticsSchema.tsx";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../_runtime/00019_react.js";
import ImpressionStore from "../modules/app_analytics/ImpressionStore.tsx";
import DeveloperOptionsStore from "../stores/DeveloperOptionsStore.tsx";
import Constants from "../Constants.tsx";
import shim from "../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import AnalyticsUtils_mod from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

let AnalyticEvents;
let c10;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj21;
let obj22;
let obj23;
let obj24;
let obj25;
let obj26;
let obj27;
let obj28;
let obj29;
let obj3;
let obj30;
let obj31;
let obj32;
let obj33;
let obj34;
let obj35;
let obj36;
let obj37;
let obj38;
let obj39;
let obj4;
let obj40;
let obj41;
let obj42;
let obj43;
let obj44;
let obj45;
let obj46;
let obj47;
let obj48;
let obj49;
let obj5;
let obj50;
let obj51;
let obj52;
let obj53;
let obj54;
let obj55;
let obj56;
let obj57;
let obj58;
let obj59;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function expandEventProperties(arg0) {
  let utmCampaign;
  let utmContent;
  let utmMedium;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let obj11 = obj;
  let tmp = obj;
  if (null != obj.location) {
    let obj10;
    const _location = obj.location;
    const obj2 = {};
    const merged = Object.assign(_objectWithoutProperties(obj, closure_4));
    if (typeof _location === "string") {
      obj10 = { location: _location };
      const obj4 = { location: _location };
    } else {
      obj10 = {
        location: null,
        location_page: null,
        location_section: null,
        location_object: null,
        location_object_type: null,
      };
      ({
        page: obj3.location,
        page: obj3.location_page,
        section: obj3.location_section,
        object: obj3.location_object,
        objectType: obj3.location_object_type,
      } = _location);
    }
    const merged1 = Object.assign(obj10);
    obj11 = obj2;
    tmp = obj2;
  }
  let tmp5 = tmp;
  if (null != tmp.source) {
    let obj18;
    const source = tmp.source;
    obj11 = {};
    const merged2 = Object.assign(_objectWithoutProperties(tmp, closure_5));
    if (typeof source === "string") {
      obj18 = { source };
      const obj17 = { source };
    } else {
      obj18 = {
        source_page: null,
        source_section: null,
        source_object: null,
        source_object_type: null,
        source_promotion_id: null,
      };
      ({
        page: obj5.source_page,
        section: obj5.source_section,
        object: obj5.source_object,
        objectType: obj5.source_object_type,
        promotionId: obj5.source_promotion_id,
      } = source);
    }
    const merged3 = Object.assign(obj18);
    tmp5 = obj11;
  }
  const obj6 = ProcessUtilsDefault;
  tmp5.client_performance_cpu = obj6.getCurrentCPUUsagePercent();
  const obj7 = ProcessUtilsDefault;
  tmp5.client_performance_memory = obj7.getCurrentMemoryUsageKB();
  const obj8 = ProcessUtilsDefault;
  tmp5.cpu_core_count = obj8.getCPUCoreCount();
  tmp5.accessibility_features = getAccessibilityFeatures();
  tmp5.rendered_locale = intl.intl.currentLocale;
  tmp5.uptime_app = Math.floor((performance.now() - closure_18) / c15);
  const obj9 = ProcessUtilsDefault;
  const processUptime = obj9.getProcessUptime();
  if (null != processUptime) {
    const _Math = Math;
    tmp5.uptime_process_renderer = Math.floor(processUptime);
  }
  utmSource = tmp5.utm_source;
  ({ utmMedium, utmCampaign, utmContent } = utmSource);
  if (utmSource == null) {
    utmSource = utmSource.utmSource;
  }
  tmp5.utm_source = utmSource;
  let utm_medium = tmp5.utm_medium;
  if (utm_medium == null) {
    utm_medium = utmMedium;
  }
  tmp5.utm_medium = utm_medium;
  let utm_campaign = tmp5.utm_campaign;
  if (utm_campaign == null) {
    utm_campaign = utmCampaign;
  }
  tmp5.utm_campaign = utm_campaign;
  let utm_content = tmp5.utm_content;
  if (utm_content == null) {
    utm_content = utmContent;
  }
  tmp5.utm_content = utm_content;
  tmp5.launch_signature = launchSignature;
  const item = closure_20.forEach((fn) => fn(obj11));
  return tmp5;
}
let closure_4 = ["location"];
let closure_5 = ["source"];
({ setDebugTrackedData: metroImportDefault, getLocation: metroImportAll } = ImpressionStore);
({ AnalyticEvents, AnalyticsObjectTypes: c10, AnalyticsSections: unpackModuleId } = Constants);
const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
let utmSource = {};
let c15 = 1000;
let c16 = 60000;
let c17 = 900000;
const context = react.createContext({ location: {} });
let closure_18 = performance.now();
let launchSignature = null;
if (shim.isLibdiscoreInitialized()) {
  const _module3 = shim;
  const generateLaunchSignature = _module3.generateLaunchSignature;
  const _module4 = utils_GlobalUtils;
  launchSignature = generateLaunchSignature(_module4.getGlobalObject());
}
function addBreadcrumb(message) {
  const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = CommonSentryInitUtils.IGNORE_ANALYTICS_BREADCRUMB_EVENTS;
  if (!IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(message)) {
    const obj2 = { category: "analytics", message };
    const obj = SentryUtilsDefault;
    obj.addBreadcrumb(obj2);
  }
}
function expandLocation(location) {
  let obj3;
  if (typeof location === "string") {
    obj3 = { location };
    const obj = { location };
  } else {
    obj3 = {
      location: null,
      location_page: null,
      location_section: null,
      location_object: null,
      location_object_type: null,
    };
    ({
      page: obj2.location,
      page: obj2.location_page,
      section: obj2.location_section,
      object: obj2.location_object,
      objectType: obj2.location_object_type,
    } = location);
  }
  return obj3;
}
function debugLogEvent(name, result) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const report = LogAggregatorAll.report;
  LogAggregatorAll;
  if (flag) {
    report("Analytics", name, result);
  } else {
    report("Analytics", name);
  }
}
let AnalyticsUtils = AnalyticsUtils_mod;
const result = AnalyticsUtils.extendSuperProperties({ launch_signature: launchSignature });
let closure_20 = [];
let obj = {
  [AnalyticEvents.APP_OPENED]: obj2,
  [AnalyticEvents.APP_BACKGROUND]: obj3,
  [AnalyticEvents.ACK_MESSAGES]: (location_object_type) => {
    function throttleKeys(arg0) {
      const items = [, ,];
      ({ guild_id: arr[0], channel_id: arr[1], location_section: arr[2] } = arg0);
      return items;
    }
    let tmp;
    if (location_object_type.location_object_type !== constants.ACK_MANUAL) {
      tmp = { throttlePeriod: throttlePeriod2, throttleKeys };
      const obj = { throttlePeriod: throttlePeriod2, throttleKeys };
    }
    return tmp;
  },
  [AnalyticEvents.GUILD_VIEWED]: obj4,
  [AnalyticEvents.FRIENDS_LIST_VIEWED]: obj5,
  [AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: obj6,
  [AnalyticEvents.START_SPEAKING]: obj7,
  [AnalyticEvents.START_LISTENING]: obj8,
  [AnalyticEvents.ACTIVITY_UPDATED]: obj9,
  [AnalyticEvents.CHANNEL_OPENED]: obj10,
  [AnalyticEvents.TEXT_IN_VOICE_OPENED]: obj11,
  [AnalyticEvents.NOTIFICATION_VIEWED]: obj12,
  [AnalyticEvents.MEMBER_LIST_VIEWED]: obj13,
  [AnalyticEvents.DM_LIST_VIEWED]: obj14,
  [AnalyticEvents.NAV_DRAWER_OPENED]: obj15,
  [AnalyticEvents.KEYBOARD_SHORTCUT_USED]: obj16,
  [AnalyticEvents.QUICKSWITCHER_OPENED]: obj17,
  [AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: obj18,
  [AnalyticEvents.ROLE_PAGE_VIEWED]: obj19,
  [AnalyticEvents.VIDEO_INPUT_INITIALIZED]: obj20,
  [AnalyticEvents.AUDIO_INPUT_INITIALIZED]: obj21,
  [AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: obj22,
  [AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: obj23,
  [AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: obj24,
  [AnalyticEvents.RPC_COMMAND_SENT]: obj25,
  [AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: obj26,
  [AnalyticEvents.ACTIVITY_HANDSHAKE]: obj27,
  [AnalyticEvents.CHANNEL_BANNER_VIEWED]: obj28,
  [AnalyticsUtils.ImpressionNames.GUILD_HANGOUT_WINDOW]: obj29,
  [AnalyticsUtils.ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT]: obj30,
  [AnalyticEvents.PREMIUM_UPSELL_VIEWED]: obj31,
  [AnalyticEvents.FORUM_CHANNEL_SEARCHED]: obj32,
  [AnalyticEvents.FORUM_CHANNEL_SCROLLED]: obj33,
  [AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: obj34,
  [AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: obj35,
  [AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: obj36,
  [AnalyticEvents.ACTIVITY_CARDS_VIEWED]: obj37,
  [AnalyticEvents.GUILD_TOOLTIP_SHOWN]: obj38,
  [AnalyticEvents.ACK_COMMUNITY_MESSAGES]: obj39,
  [AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: obj40,
  [AnalyticEvents.CHANNEL_LIST_END_REACHED]: obj41,
  [AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: obj42,
  [AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: obj43,
  [AnalyticEvents.MEDIA_INPUT_VOLUME_CHANGED]: obj44,
  [AnalyticEvents.MEDIA_OUTPUT_VOLUME_CHANGED]: obj45,
  [AnalyticEvents.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: obj46,
  [AnalyticEvents.USER_VOICE_ACTIVITY_VIEWED]: obj47,
  [AnalyticEvents.PARTY_VOICE_ACTIVITY_VIEWED]: obj48,
  [AnalyticEvents.MEMBER_LIST_SWIPE_PEEK]: obj49,
  [AnalyticEvents.REDACTABLE_MESSAGE_LOADED]: obj50,
  [AnalyticEvents.OPEN_MODAL]: (type) => {
    function throttleKeys(type) {
      const items = [type.type];
      return items;
    }
    let tmp;
    if (type.type === unpackModuleId.MEDIA_VIEWER) {
      tmp = { throttlePeriod, throttleKeys };
      const obj = { throttlePeriod, throttleKeys };
    }
    return tmp;
  },
  [AnalyticEvents.MODERATOR_QUEUE_ACTION]: obj51,
  [AnalyticEvents.NOTIFICATION_PERMISSION_STATUS]: obj52,
  [AnalyticEvents.SEARCH_BAR_VIEWED]: obj53,
  [AnalyticEvents.AD_IDENTIFIER_FETCHED]: obj54,
  [AnalyticEvents.ACTIVITY_PANEL_SDK_LINK_VIEWED]: obj55,
  [AnalyticEvents.LIBDISCORE_SLOW_TIMERS]: obj56,
  [AnalyticEvents.VIDEO_STREAM_ZOOM_CHANGED]: obj57,
  [AnalyticEvents.CACHE_STATS_RECORDED]: obj58,
  [AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN]: obj59,
};
obj2 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  },
};
obj3 = {
  throttlePeriod: 120000,
  throttleKeys() {
    return [];
  },
};
obj4 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [,];
    ({ guild_id: arr[0], is_pending: arr[1] } = arg0);
    return items;
  },
};
obj5 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  },
};
obj6 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  },
};
obj7 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  },
};
obj8 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  },
};
obj9 = {
  throttlePeriod: 60000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  },
  deduplicate: true,
};
obj10 = {
  throttlePeriod: 900000,
  throttleKeys(channel_static_route) {
    let items1;
    if (null != channel_static_route.channel_static_route) {
      const items = [, ,];
      ({ guild_id: arr2[0], channel_static_route: arr2[1], channel_view: arr2[2] } = channel_static_route);
      items1 = items;
    } else {
      items1 = [,];
      ({ channel_id: arr[0], channel_view: arr[1] } = channel_static_route);
    }
    return items1;
  },
};
obj11 = {
  throttlePeriod: 86400000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj17 = {
  throttlePeriod: 10000,
  throttleKeys() {
    return [];
  },
};
obj18 = {
  throttlePeriod: 900000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  },
};
function getAccessibilityFeatures() {
  return AccessibilityFeatureFlags.NONE;
}
obj12 = {
  throttlePeriod: 900000,
  throttleKeys(notif_type) {
    const items = [notif_type.notif_type];
    return items;
  },
};
obj13 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj14 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj15 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  },
};
obj16 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    let source_class_list;
    const items = [,];
    ({ shortcut_name: arr[0], location_object: arr[1], source_class_list } = arg0);
    if (source_class_list == null) {
      source_class_list = [];
    }
    HermesBuiltin.arraySpread(items, source_class_list, 2);
    return items;
  },
};
obj19 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    const items = [,];
    ({ role_id: arr[0], tab_opened: arr[1] } = arg0);
    return items;
  },
};
obj20 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  },
};
obj21 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  },
};
obj22 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  },
};
obj23 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  },
};
obj24 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  },
};
obj25 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [,];
    ({ application_id: arr[0], command: arr[1] } = arg0);
    return items;
  },
  throttlePercent: 0.001,
};
obj26 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [,];
    ({ application_id: arr[0], event: arr[1] } = arg0);
    return items;
  },
  throttlePercent: 0.001,
};
obj27 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  },
};
obj28 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [,];
    ({ banner_type: arr[0], channel_id: arr[1] } = arg0);
    return items;
  },
};
obj29 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [,];
    ({ channel_id: arr[0], banner_hash: arr[1] } = arg0);
    return items;
  },
};
obj30 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [,];
    ({ channel_id: arr[0], media_session_id: arr[1] } = arg0);
    return items;
  },
};
obj31 = {
  throttlePeriod: 60000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  },
};
obj32 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [,];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  },
};
obj33 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [,];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  },
};
obj34 = {
  throttlePeriod: 60000,
  throttleKeys(user_id) {
    const items = [user_id.user_id];
    return items;
  },
};
obj35 = {
  throttlePeriod: 60000,
  throttleKeys() {
    return [];
  },
};
obj36 = {
  throttlePeriod: 300000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj37 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [,];
    ({ context: arr[0], guild_id: arr[1] } = arg0);
    return items;
  },
};
obj38 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  },
};
obj39 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj40 = {
  throttlePeriod: 900000,
  throttleKeys(tab) {
    const items = [tab.tab];
    return items;
  },
};
obj41 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  },
};
obj42 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [,];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  },
};
obj43 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  },
};
obj44 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  },
};
obj45 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  },
};
obj46 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj47 = {
  throttlePeriod: 300000,
  throttleKeys(arg0) {
    const items = [,];
    ({ activity_user_id: arr[0], surface: arr[1] } = arg0);
    return items;
  },
  deduplicate: true,
};
obj48 = {
  throttlePeriod: 300000,
  throttleKeys(voice_channel_id) {
    const items = [voice_channel_id.voice_channel_id];
    return items;
  },
  deduplicate: true,
};
obj49 = {
  throttlePeriod: 1000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  },
};
obj50 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [,];
    ({ channel_id: arr[0], message_id: arr[1] } = arg0);
    return items;
  },
};
obj51 = {
  throttlePeriod: 10000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  },
};
obj52 = {
  throttlePeriod: 43200000,
  throttleKeys(arg0) {
    const items = [, , ,];
    ({
      os_enabled: arr[0],
      notification_authorization_status: arr[1],
      foreground_app_enabled: arr[2],
      background_app_enabled: arr[3],
    } = arg0);
    return items;
  },
};
obj53 = {
  throttlePeriod: 3600000,
  throttleKeys(search_type) {
    const items = [search_type.search_type];
    return items;
  },
};
obj54 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  },
};
obj55 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  },
};
obj56 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  },
};
obj57 = {
  throttlePeriod: 1000,
  throttleKeys() {
    return [];
  },
};
obj58 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  },
};
obj59 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  },
};
AnalyticsUtils = AnalyticsUtils_mod;
const obj60 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_22 = AnalyticsUtils.trackMaker(obj60);
let c24 = false;
let closure_25 = {};
AnalyticsUtils = AnalyticsUtils_mod;
const obj61 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_26 = AnalyticsUtils.trackMaker(obj61);
const obj62 = {
  getCampaignParams: AnalyticsUtils.getCampaignParams,
  setSystemAccessibilityFeatures(getActiveFeatures) {
    getAccessibilityFeatures = getActiveFeatures;
  },
  expandEventProperties,
  track(arg0, arg1) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    const StringResult = String(arg0);
    if (c24) {
      if (null != arg1) {
        const _Array = Array;
        if (Array.isArray(closure_25[arg0])) {
          const arr2 = closure_25[arg0];
          arr2.push(arg1);
        } else {
          const items = [arg1];
          closure_25[arg0] = items;
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
    LogAggregatorAll;
    if (flag) {
      report("Analytics", StringResult, tmp5);
    } else {
      report("Analytics", StringResult);
    }
    const obj2 = { flush: obj.flush, fingerprint: obj.fingerprint };
    return closure_22(arg0, tmp5, obj2);
  },
};
AnalyticsUtils = Object.assign(AnalyticsUtils);
const result1 = size.fileFinishedImporting("utils/AnalyticsUtils.tsx");

export default obj62;
export const AnalyticsContext = context;
export { launchSignature };
export const addExtraAnalyticsDecorator = function addExtraAnalyticsDecorator(arg0) {
  closure_20.push(arg0);
};
export const AnalyticEventConfigs = obj;
export { expandLocation };
export function setUTMContext(arg0) {
  let closure_14 = arg0;
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
    delete closure_1_25[item];
  });
};
export const isGameApplicationType = function isGameApplicationType(arg0) {
  return arg0 === ApplicationTypes.GAME || arg0 === ApplicationTypes.DEPRECATED_GAME;
};
export const trackNetworkAction = function trackNetworkAction(event, arg1) {
  const obj = { location: metroImportAll() };
  const merged = Object.assign(arg1);
  const obj2 = { type: "action" };
  const tmp2 = expandEventProperties(obj);
  const merged1 = Object.assign(arg1);
  metroImportDefault(event, obj2);
  const obj3 = LogAggregatorAll;
  obj3.report("Analytics", event);
  closure_26(event, tmp2);
};
export const getNewAnalyticsLoadId = function getNewAnalyticsLoadId() {
  const obj = v1;
  return obj.v4();
};
export const AnalyticsSchema = utils_AnalyticsSchemaAll;

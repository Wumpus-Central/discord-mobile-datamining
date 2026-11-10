// === Module 11002: ConjureAnalytics ===

// Module 11002 (ConjureAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5891 */;
import ConjureUtils from "ConjureUtils" /* 7486 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 11003 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;

require = fn;
function projectFields(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
  const obj = { project_id: projectId, project_name: null, application_id: null, preview_application_id: null, install_scope: null };
  let name;
  if (project != null) {
    name = project.name;
  }
  let substr = null;
  if (null != name) {
    substr = null;
    if ("" !== name) {
      substr = name.slice(0, 256);
    }
  }
  obj.project_name = substr;
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj.application_id = application_id;
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  obj.preview_application_id = prop;
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  obj.install_scope = install_scope;
  return obj;
}
function conjureLocation(projectId, isPreview) {
  const project = ConjureProjectStore.getProject(projectId);
  if (isPreview) {
    let preview_guild_id;
    if (!tmp2) {
      preview_guild_id = project.preview_guild_id;
    }
    let guild_id = preview_guild_id;
  } else if (!tmp2) {
    guild_id = project.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (isPreview) {
    let prop;
    if (!tmp5) {
      prop = project.preview_application_id;
    }
    application_id = prop;
  } else if (!tmp5) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const obj = { guild_id, channel_id: null };
  let findConjureChannelIdResult = null;
  if (null != guild_id) {
    findConjureChannelIdResult = null;
    if (null != application_id) {
      findConjureChannelIdResult = ConjureUtils.findConjureChannelId(guild_id, application_id);
    }
  }
  obj.channel_id = findConjureChannelIdResult;
  return obj;
}
function ratingPromptFields(projectId) {
  projectId = projectId.projectId;
  const obj = {};
  ({ turnId, publishReason, surface } = projectId);
  const merged = Object.assign(projectFields(projectId));
  const merged1 = Object.assign(conjureLocation(projectId, true));
  obj.turn_id = turnId;
  obj.publish_reason = publishReason;
  obj.surface = surface;
  let str = "android";
  if (!obj2.isAndroid()) {
    let str2 = "ios";
    if (!tmp3Result.isIOS()) {
      let str3 = "web";
      if (tmp3Result3.isDesktop()) {
        str3 = "desktop";
      }
      str2 = str3;
      tmp3Result3 = PlatformUtils;
    }
    str = str2;
    tmp3Result = PlatformUtils;
  }
  const obj3 = {};
  obj.client_platform = str;
  const merged2 = Object.assign(obj);
  obj3.placement = projectId.placement;
  const project = ConjureProjectStore.getProject(projectId.projectId);
  let supported_surfaces;
  if (project != null) {
    supported_surfaces = project.supported_surfaces;
  }
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  items = [...supported_surfaces];
  let prop;
  if (project != null) {
    prop = project.preview_supported_surfaces;
  }
  if (prop == null) {
    prop = [];
  }
  HermesBuiltin.arraySpread(prop, tmp7);
  const mapped = items.map((item) => closure_1_8[item]);
  obj2 = PlatformUtils;
  const items1 = [...new Set(mapped.filter((item) => null != item))];
  obj3.project_kinds = items1.sort();
  const publishState = projectId.publishState;
  let tmp10 = null == publishState;
  if (!tmp10) {
    tmp10 = !ConjurePublishTypes.isConjureLive(publishState);
    const tmp3Result4 = ConjurePublishTypes;
  }
  if (tmp10) {
    const project1 = ConjureProjectStore.getProject(projectId.projectId);
    let supported_surfaces1;
    if (project1 != null) {
      supported_surfaces1 = project1.supported_surfaces;
    }
    if (supported_surfaces1 == null) {
      supported_surfaces1 = [];
    }
    tmp10 = 0 === supported_surfaces1.length;
  }
  obj3.is_new_project = tmp10;
  return obj3;
}
const isProjectOwner = fn(6902).isProjectOwner;
const AnalyticEvents = fn(1072).AnalyticEvents;
let closure_8 = { [fn(6903).ConjureSupportedSurface.APP_CHANNEL]: "app_channel", [fn(6903).ConjureSupportedSurface.VOICE_CHANNEL]: "voice_channel", [fn(6903).ConjureSupportedSurface.PROFILE_WIDGET]: "profile_widget", [fn(6903).ConjureSupportedSurface.AUTOMOD]: "automod", [fn(6903).ConjureSupportedSurface.BOT]: "bot", [fn(6903).ConjureSupportedSurface.APPLICATION_COMMANDS]: "application_commands", [fn(6903).ConjureSupportedSurface.OVERLAY]: "overlay", [fn(6903).ConjureSupportedSurface.ACTIVITY]: "activity" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureAnalytics.tsx");

export const ConjureErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export function trackConjureTurnResulted(projectId, turn_id) {
  const obj2 = {};
  const merged = Object.assign(projectFields(projectId));
  const merged1 = Object.assign(conjureLocation(projectId, true));
  turn_id = turn_id.turn_id;
  if (turn_id == null) {
    turn_id = null;
  }
  obj2.turn_id = turn_id;
  let result = turn_id.result;
  if (result == null) {
    result = null;
  }
  obj2.turn_result = result;
  let detail = turn_id.detail;
  if (detail == null) {
    detail = turn_id.summary;
  }
  let substr = null;
  if (null != detail) {
    substr = null;
    if ("" !== detail) {
      substr = detail.slice(0, 256);
    }
  }
  obj2.turn_summary = substr;
  let cost_usd = turn_id.cost_usd;
  if (cost_usd == null) {
    cost_usd = null;
  }
  obj2.turn_cost = cost_usd;
  let duration_ms = turn_id.duration_ms;
  if (duration_ms == null) {
    duration_ms = null;
  }
  obj2.turn_duration_ms = duration_ms;
  let model_tier = turn_id.model_tier;
  if (model_tier == null) {
    model_tier = null;
  }
  obj2.model_tier = model_tier;
  const tokens = turn_id.tokens;
  if (null == tokens) {
    let obj5 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
  } else {
    obj5 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
    ({ input_tokens: obj3.turn_input_tokens, output_tokens: obj3.turn_output_tokens, cache_creation_input_tokens: obj3.turn_cache_write_tokens, cache_read_input_tokens: obj3.turn_cache_read_tokens } = tokens);
    obj5.turn_total_tokens = tokens.input_tokens + tokens.output_tokens + tokens.cache_creation_input_tokens + tokens.cache_read_input_tokens;
  }
  const merged2 = Object.assign(obj5);
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.CONJURE_TURN_RESULTED, obj2);
}
export function trackConjureErrored(projectId, turnId) {
  ({ message, details, isPreview } = turnId);
  ({ location: _location, code } = turnId);
  if (isPreview === undefined) {
    isPreview = true;
  }
  turnId = turnId.turnId;
  const obj2 = {};
  const merged = Object.assign(projectFields(projectId));
  obj2.is_preview = isPreview;
  const merged1 = Object.assign(conjureLocation(projectId, isPreview));
  if (turnId == null) {
    turnId = null;
  }
  obj2.turn_id = turnId;
  obj2.error_location = _location;
  obj2.error_code = code;
  let substr = null;
  if (null != message) {
    substr = null;
    if ("" !== message) {
      substr = message.slice(0, 256);
    }
  }
  obj2.error_message = substr;
  let substr1 = null;
  if (null != details) {
    substr1 = null;
    if ("" !== details) {
      substr1 = details.slice(0, 256);
    }
  }
  obj2.error_details = substr1;
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.CONJURE_ERRORED, obj2);
}
export function trackConjurePublishActionClicked(project_id, arg1) {
  ({ publishState, installScope } = arg1);
  ({ entryPoint, surface, action } = arg1);
  const project = ConjureProjectStore.getProject(project_id);
  const obj2 = { project_id, application_id: null };
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj2.application_id = application_id;
  if ("user" === installScope) {
    let obj3 = { guild_id: null, channel_id: null };
  } else {
    obj3 = conjureLocation(project_id, false);
  }
  const merged = Object.assign(obj3);
  obj2.entry_point = entryPoint;
  let tmp5 = null;
  if (null != publishState) {
    let str3 = "unpublished";
    if ("nothing_built" !== publishState) {
      str3 = "unpublished";
      if ("not_live" !== publishState) {
        let str5 = "up_to_date";
        if ("live_outdated" === publishState) {
          str5 = "changes";
        }
        str3 = str5;
      }
    }
    tmp5 = str3;
  }
  obj2.publish_state = tmp5;
  obj2.surface = surface;
  obj2.install_scope = installScope;
  obj2.action = action;
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.CONJURE_PUBLISH_ACTION_CLICKED, obj2);
}
export function trackConjureRatingViewed(turnId) {
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.CONJURE_RATING_VIEWED, ratingPromptFields(turnId));
}
export function trackConjureRatingSubmitted(rating) {
  const obj2 = {};
  const merged = Object.assign(ratingPromptFields(rating));
  obj2.rating = rating.rating;
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.CONJURE_RATING_SUBMITTED, obj2);
}
export function trackConjureRatingFeedbackSubmitted(projectId, substr) {
  projectId = projectId.projectId;
  const obj2 = {};
  ({ turnId, publishReason, surface } = projectId);
  const merged = Object.assign(projectFields(projectId));
  const merged1 = Object.assign(conjureLocation(projectId, true));
  obj2.turn_id = turnId;
  obj2.publish_reason = publishReason;
  obj2.surface = surface;
  const obj = AppAnalyticsUtils;
  let str = "android";
  if (!obj3.isAndroid()) {
    let str2 = "ios";
    if (!tmpResult.isIOS()) {
      let str3 = "web";
      if (tmpResult2.isDesktop()) {
        str3 = "desktop";
      }
      str2 = str3;
      tmpResult2 = PlatformUtils;
    }
    str = str2;
    tmpResult = PlatformUtils;
  }
  const obj4 = {};
  obj2.client_platform = str;
  const merged2 = Object.assign(obj2);
  obj4.rating = projectId.rating;
  obj4.feedback_text = substr;
  obj.trackWithMetadata(AnalyticEvents.CONJURE_RATING_FEEDBACK_SUBMITTED, obj4);
  obj3 = PlatformUtils;
}
export function trackConjureBuilderOpened(project_id, entry_point) {
  const project = ConjureProjectStore.getProject(project_id);
  const obj2 = { project_id, entry_point, is_owner: null, install_scope: null, client_platform: null };
  let tmp3 = null;
  if (null != project) {
    tmp3 = isProjectOwner(project);
  }
  obj2.is_owner = tmp3;
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  obj2.install_scope = install_scope;
  const obj = AnalyticsUtilsDefault;
  let str = "android";
  if (!obj3.isAndroid()) {
    let str2 = "ios";
    if (!tmp6Result.isIOS()) {
      let str3 = "web";
      if (tmp6Result2.isDesktop()) {
        str3 = "desktop";
      }
      str2 = str3;
      tmp6Result2 = PlatformUtils;
    }
    str = str2;
    tmp6Result = PlatformUtils;
  }
  obj2.client_platform = str;
  obj.track(AnalyticEvents.CONJURE_BUILDER_OPENED, obj2);
  obj3 = PlatformUtils;
}
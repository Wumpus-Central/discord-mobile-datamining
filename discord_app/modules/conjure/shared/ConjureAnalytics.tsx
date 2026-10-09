// === Module 11370: ConjureAnalytics ===

// Module 11370 (ConjureAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;

require = fn;
function conjureLocation(project_id, isPreview) {
  const project = ConjureProjectStore.getProject(project_id);
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
    let application_id = prop;
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
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureAnalytics.tsx");

export const ConjureErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export const trackConjureTurnResulted = function trackConjureTurnResulted(project_id, result) {
  const project = ConjureProjectStore.getProject(project_id);
  const obj2 = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj2.project_name = substr;
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj2.application_id = application_id;
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  const obj3 = {};
  obj2.preview_application_id = prop;
  const merged = Object.assign(obj2);
  result = result.result;
  if (result == null) {
    result = null;
  }
  obj3.turn_result = result;
  let detail = result.detail;
  if (detail == null) {
    detail = result.summary;
  }
  let substr1 = null;
  if (null != detail) {
    substr1 = null;
    if ("" !== detail) {
      substr1 = detail.slice(0, 256);
    }
  }
  obj3.turn_summary = substr1;
  let cost_usd = result.cost_usd;
  if (cost_usd == null) {
    cost_usd = null;
  }
  obj3.turn_cost = cost_usd;
  const tokens = result.tokens;
  if (null == tokens) {
    let obj7 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
  } else {
    obj7 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
    ({ input_tokens: obj4.turn_input_tokens, output_tokens: obj4.turn_output_tokens, cache_creation_input_tokens: obj4.turn_cache_write_tokens, cache_read_input_tokens: obj4.turn_cache_read_tokens } = tokens);
    obj7.turn_total_tokens = tokens.input_tokens + tokens.output_tokens + tokens.cache_creation_input_tokens + tokens.cache_read_input_tokens;
  }
  const merged1 = Object.assign(obj7);
  AnalyticsUtilsDefault.track(AnalyticEvents.VIBEGRATION_TURN_RESULTED, obj3);
};
export const trackConjureDeployed = function trackConjureDeployed(project_id, isPreview) {
  isPreview = isPreview.isPreview;
  const project = ConjureProjectStore.getProject(project_id);
  const obj = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  let application_id;
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
  const tmp6 = isPreview ? obj.preview_application_id : obj.application_id;
  let application = null;
  if (null != tmp6) {
    application = ApplicationStore.getApplication(tmp6);
  }
  const obj3 = {};
  const merged = Object.assign(obj);
  let description;
  if (application != null) {
    description = application.description;
  }
  let substr1 = null;
  if (null != description) {
    substr1 = null;
    if ("" !== description) {
      substr1 = description.slice(0, 256);
    }
  }
  obj3.project_summary = substr1;
  obj3.is_preview = isPreview;
  const merged1 = Object.assign(conjureLocation(project_id, isPreview));
  AnalyticsUtilsDefault.track(AnalyticEvents.VIBEGRATION_DEPLOYED, obj3);
};
export const trackConjureErrored = function trackConjureErrored(project_id, arg1) {
  ({ message, details, isPreview } = arg1);
  ({ location: _location, code } = arg1);
  if (isPreview === undefined) {
    isPreview = true;
  }
  const project = ConjureProjectStore.getProject(project_id);
  const obj2 = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj2.project_name = substr;
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj2.application_id = application_id;
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  const obj3 = {};
  obj2.preview_application_id = prop;
  const merged = Object.assign(obj2);
  obj3.is_preview = isPreview;
  const merged1 = Object.assign(conjureLocation(project_id, isPreview));
  obj3.error_location = _location;
  obj3.error_code = code;
  let substr1 = null;
  if (null != message) {
    substr1 = null;
    if ("" !== message) {
      substr1 = message.slice(0, 256);
    }
  }
  obj3.error_message = substr1;
  let substr2 = null;
  if (null != details) {
    substr2 = null;
    if ("" !== details) {
      substr2 = details.slice(0, 256);
    }
  }
  obj3.error_details = substr2;
  AnalyticsUtilsDefault.track(AnalyticEvents.VIBEGRATION_ERRORED, obj3);
};
export const trackConjurePublishActionClicked = function trackConjurePublishActionClicked(project_id, installScope) {
  installScope = installScope.installScope;
  ({ entryPoint, publishState, surface, action } = installScope);
  const project = ConjureProjectStore.getProject(project_id);
  const obj2 = { project_id, application_id: null, guild_id: null, entry_point: null, publish_state: null, surface: null, install_scope: null, action: null };
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj2.application_id = application_id;
  let tmp3 = null;
  if ("user" !== installScope) {
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    tmp3 = guild_id;
  }
  obj2.guild_id = tmp3;
  obj2.entry_point = entryPoint;
  obj2.publish_state = publishState;
  obj2.surface = surface;
  obj2.install_scope = installScope;
  obj2.action = action;
  AnalyticsUtilsDefault.track(AnalyticEvents.VIBEGRATION_PUBLISH_ACTION_CLICKED, obj2);
};
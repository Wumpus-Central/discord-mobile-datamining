// === Module 10997: ConjureAnalytics ===

// Module 10997 (ConjureAnalytics)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5206 */;
import ConjureUtils from "ConjureUtils" /* 7222 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;

require = fn;
function projectFields(project_id) {
  const project = ConjureProjectStore.getProject(project_id);
  const obj = { project_id, project_name: null, application_id: null, preview_application_id: null, install_scope: null };
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
const AnalyticEvents = fn(1087).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureAnalytics.tsx");

export const ConjureErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export const trackConjureTurnResulted = function trackConjureTurnResulted(projectId, turn_id) {
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
};
export const trackConjureErrored = function trackConjureErrored(projectId, turnId) {
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
};
export const trackConjurePublishActionClicked = function trackConjurePublishActionClicked(project_id, installScope) {
  installScope = installScope.installScope;
  ({ entryPoint, publishState, surface, action } = installScope);
  const project = ConjureProjectStore.getProject(project_id);
  const obj2 = { project_id, application_id: null };
  let application_id;
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
  obj2.publish_state = publishState;
  obj2.surface = surface;
  obj2.install_scope = installScope;
  obj2.action = action;
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.CONJURE_PUBLISH_ACTION_CLICKED, obj2);
};
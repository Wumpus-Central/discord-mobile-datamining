// === Module 16590: VibegrationsAnalytics ===

// Module 16590 (VibegrationsAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7247 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16587 */;

require = fn;
function vibegrationLocation(project_id, isPreview) {
  const project = VibegrationsProjectStore.getProject(project_id);
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
  let result = null;
  if (null != guild_id) {
    result = null;
    if (null != application_id) {
      result = VibegrationsUtils.findVibegrationChannelId(guild_id, application_id);
    }
  }
  obj.channel_id = result;
  return obj;
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsAnalytics.tsx");

export const VibegrationErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export const trackVibegrationTurnResulted = function trackVibegrationTurnResulted(project_id, result) {
  const project = VibegrationsProjectStore.getProject(project_id);
  let obj = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj = { preview_application_id: prop };
  const merged = Object.assign(obj);
  result = result.result;
  if (result == null) {
    result = null;
  }
  obj.turn_result = result;
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
  obj.turn_summary = substr1;
  let cost_usd = result.cost_usd;
  if (cost_usd == null) {
    cost_usd = null;
  }
  obj.turn_cost = cost_usd;
  const tokens = result.tokens;
  if (null == tokens) {
    let obj1 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
  } else {
    obj1 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
    ({ input_tokens: obj4.turn_input_tokens, output_tokens: obj4.turn_output_tokens, cache_creation_input_tokens: obj4.turn_cache_write_tokens, cache_read_input_tokens: obj4.turn_cache_read_tokens } = tokens);
    obj1.turn_total_tokens = tokens.input_tokens + tokens.output_tokens + tokens.cache_creation_input_tokens + tokens.cache_read_input_tokens;
  }
  const merged1 = Object.assign(obj1);
  obj.track(AnalyticEvents.VIBEGRATION_TURN_RESULTED, obj);
};
export const trackVibegrationDeployed = function trackVibegrationDeployed(project_id, isPreview) {
  isPreview = isPreview.isPreview;
  const project = VibegrationsProjectStore.getProject(project_id);
  let obj = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj = {};
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
  obj.project_summary = substr1;
  obj.is_preview = isPreview;
  const merged1 = Object.assign(vibegrationLocation(project_id, isPreview));
  AnalyticsUtilsDefault.track(AnalyticEvents.VIBEGRATION_DEPLOYED, obj);
};
export const trackVibegrationErrored = function trackVibegrationErrored(project_id, arg1) {
  ({ message, details, isPreview } = arg1);
  ({ location: _location, code } = arg1);
  if (isPreview === undefined) {
    isPreview = true;
  }
  const project = VibegrationsProjectStore.getProject(project_id);
  let obj = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj = { preview_application_id: prop };
  const merged = Object.assign(obj);
  obj.is_preview = isPreview;
  const merged1 = Object.assign(vibegrationLocation(project_id, isPreview));
  obj.error_location = _location;
  obj.error_code = code;
  let substr1 = null;
  if (null != message) {
    substr1 = null;
    if ("" !== message) {
      substr1 = message.slice(0, 256);
    }
  }
  obj.error_message = substr1;
  let substr2 = null;
  if (null != details) {
    substr2 = null;
    if ("" !== details) {
      substr2 = details.slice(0, 256);
    }
  }
  obj.error_details = substr2;
  obj.track(AnalyticEvents.VIBEGRATION_ERRORED, obj);
};
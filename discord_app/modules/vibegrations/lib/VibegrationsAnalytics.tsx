// === Module 16428: vibegrationLocation ===

// Module 16428 (vibegrationLocation)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import vibegrationsAppIdFromTopic from "vibegrationsAppIdFromTopic" /* 6103 */;
import closure_3 from "addApplication" /* 4519 */;
import closure_4 from "isProjectOwner" /* 16425 */;
import { AnalyticEvents } from "ME" /* 673 */;

require = arg1;
function vibegrationLocation(closure_0, isPreview) {
  const project = store.getProject(closure_0);
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
      result = vibegrationsAppIdFromTopic.findVibegrationChannelId(guild_id, application_id);
      const obj2 = vibegrationsAppIdFromTopic;
    }
  }
  obj[1] = result;
  return obj;
}
let result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsAnalytics.tsx");

export const VibegrationErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export const trackVibegrationTurnResulted = function trackVibegrationTurnResulted(project_id, result) {
  let obj = expandEventPropertiesDefault;
  const project = store.getProject(project_id);
  obj = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj[1] = substr;
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj[2] = application_id;
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  obj = {};
  obj[3] = prop;
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
    obj1 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
  } else {
    obj1 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
    ({ input_tokens: obj4[0], output_tokens: obj4[1], cache_creation_input_tokens: obj4[2], cache_read_input_tokens: obj4[3] } = tokens);
    obj1[4] = tokens.input_tokens + tokens.output_tokens + tokens.cache_creation_input_tokens + tokens.cache_read_input_tokens;
  }
  const merged1 = Object.assign(obj1);
  obj.track(AnalyticEvents.VIBEGRATION_TURN_RESULTED, obj);
};
export const trackVibegrationDeployed = function trackVibegrationDeployed(closure_0, isPreview) {
  isPreview = isPreview.isPreview;
  const project = store.getProject(closure_0);
  let obj = { project_id: closure_0, project_name: null, application_id: null, preview_application_id: null };
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
  obj[1] = substr;
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj[2] = application_id;
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  obj[3] = prop;
  const tmp6 = isPreview ? obj.preview_application_id : obj.application_id;
  let application = null;
  if (null != tmp6) {
    application = application.getApplication(tmp6);
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
  const merged1 = Object.assign(vibegrationLocation(closure_0, isPreview));
  expandEventPropertiesDefault.track(AnalyticEvents.VIBEGRATION_DEPLOYED, obj);
};
export const trackVibegrationErrored = function trackVibegrationErrored(project_id, arg1) {
  ({ message, details, isPreview } = arg1);
  ({ location: _location, code } = arg1);
  if (isPreview === undefined) {
    isPreview = true;
  }
  let obj = expandEventPropertiesDefault;
  const project = store.getProject(project_id);
  obj = { project_id, project_name: null, application_id: null, preview_application_id: null };
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
  obj[1] = substr;
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  obj[2] = application_id;
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  obj = {};
  obj[3] = prop;
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
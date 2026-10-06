// === Module 8736: ConjureAnalytics ===

// Module 8736 (ConjureAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ConjureUtils from "ConjureUtils" /* 6756 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import size from "module_2" /* 2 */;

function conjureLocation(project_id, isPreview) {
  let application_id;
  let findConjureChannelIdResult;
  let guild_id;
  const project = ConjureProjectStore.getProject(project_id);
  if (isPreview) {
    let preview_guild_id;
    if (project != null) {
      preview_guild_id = project.preview_guild_id;
    }
    guild_id = preview_guild_id;
  } else if (project != null) {
    guild_id = project.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (isPreview) {
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    application_id = prop;
  } else if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const obj = { guild_id, channel_id: findConjureChannelIdResult };
  findConjureChannelIdResult = null;
  if (null != guild_id) {
    findConjureChannelIdResult = null;
    if (null != application_id) {
      const obj2 = ConjureUtils;
      findConjureChannelIdResult = obj2.findConjureChannelId(guild_id, application_id);
    }
  }
  return obj;
}
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureAnalytics.tsx");

export const ConjureErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export const trackConjureTurnResulted = function trackConjureTurnResulted(project_id, result) {
  let application_id;
  let cost_usd;
  let obj5;
  let prop;
  let substr;
  let substr1;
  const track = AnalyticsUtilsDefault.track;
  const VIBEGRATION_TURN_RESULTED = AnalyticEvents.VIBEGRATION_TURN_RESULTED;
  AnalyticsUtilsDefault;
  const project = ConjureProjectStore.getProject(project_id);
  let name;
  const obj = { project_id, project_name: substr, application_id, preview_application_id: prop };
  if (project != null) {
    name = project.name;
  }
  substr = null;
  if (null != name) {
    substr = null;
    if ("" !== name) {
      substr = name.slice(0, 256);
    }
  }
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  prop = undefined;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  const obj2 = { turn_result: result, turn_summary: substr1, turn_cost: cost_usd };
  const merged = Object.assign(obj);
  result = result.result;
  if (result == null) {
    result = null;
  }
  let detail = result.detail;
  if (detail == null) {
    detail = result.summary;
  }
  substr1 = null;
  if (null != detail) {
    substr1 = null;
    if ("" !== detail) {
      substr1 = detail.slice(0, 256);
    }
  }
  cost_usd = result.cost_usd;
  if (cost_usd == null) {
    cost_usd = null;
  }
  const tokens = result.tokens;
  if (null == tokens) {
    obj5 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
  } else {
    obj5 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: tokens.input_tokens + tokens.output_tokens + tokens.cache_creation_input_tokens + tokens.cache_read_input_tokens };
    ({ input_tokens: obj3.turn_input_tokens, output_tokens: obj3.turn_output_tokens, cache_creation_input_tokens: obj3.turn_cache_write_tokens, cache_read_input_tokens: obj3.turn_cache_read_tokens } = tokens);
  }
  const merged1 = Object.assign(obj5);
  track(VIBEGRATION_TURN_RESULTED, obj2);
};
export const trackConjureDeployed = function trackConjureDeployed(project_id, isPreview) {
  let application_id;
  let prop;
  let substr;
  let substr1;
  isPreview = isPreview.isPreview;
  const project = ConjureProjectStore.getProject(project_id);
  const obj = { project_id, project_name: substr, application_id, preview_application_id: prop };
  let name;
  if (project != null) {
    name = project.name;
  }
  substr = null;
  if (null != name) {
    substr = null;
    if ("" !== name) {
      substr = name.slice(0, 256);
    }
  }
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  prop = undefined;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  const tmp6 = isPreview ? obj.preview_application_id : obj.application_id;
  let application = null;
  if (null != tmp6) {
    application = ApplicationStore.getApplication(tmp6);
  }
  const obj2 = { project_summary: substr1, is_preview: isPreview };
  const track = AnalyticsUtilsDefault.track;
  const VIBEGRATION_DEPLOYED = AnalyticEvents.VIBEGRATION_DEPLOYED;
  AnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  let description;
  if (application != null) {
    description = application.description;
  }
  substr1 = null;
  if (null != description) {
    substr1 = null;
    if ("" !== description) {
      substr1 = description.slice(0, 256);
    }
  }
  const merged1 = Object.assign(conjureLocation(project_id, isPreview));
  track(VIBEGRATION_DEPLOYED, obj2);
};
export const trackConjureErrored = function trackConjureErrored(baseUrl, arg1) {
  let _location;
  let application_id;
  let code;
  let details;
  let isPreview;
  let message;
  let prop;
  let substr;
  let substr1;
  let substr2;
  ({ message, details, isPreview } = arg1);
  ({ location: _location, code } = arg1);
  if (isPreview === undefined) {
    isPreview = true;
  }
  const track = AnalyticsUtilsDefault.track;
  const VIBEGRATION_ERRORED = AnalyticEvents.VIBEGRATION_ERRORED;
  AnalyticsUtilsDefault;
  const project = ConjureProjectStore.getProject(baseUrl);
  let name;
  const obj = { project_id: baseUrl, project_name: substr, application_id, preview_application_id: prop };
  if (project != null) {
    name = project.name;
  }
  substr = null;
  if (null != name) {
    substr = null;
    if ("" !== name) {
      substr = name.slice(0, 256);
    }
  }
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  prop = undefined;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  const obj2 = { is_preview: isPreview, error_location: _location, error_code: code, error_message: substr1, error_details: substr2 };
  const merged = Object.assign(obj);
  const merged1 = Object.assign(conjureLocation(baseUrl, isPreview));
  substr1 = null;
  if (null != message) {
    substr1 = null;
    if ("" !== message) {
      substr1 = message.slice(0, 256);
    }
  }
  substr2 = null;
  if (null != details) {
    substr2 = null;
    if ("" !== details) {
      substr2 = details.slice(0, 256);
    }
  }
  track(VIBEGRATION_ERRORED, obj2);
};
export const trackConjurePublishActionClicked = function trackConjurePublishActionClicked(project_id, installScope) {
  let action;
  let application_id;
  let entryPoint;
  let publishState;
  let surface;
  let tmp4;
  installScope = installScope.installScope;
  ({ entryPoint, publishState, surface, action } = installScope);
  const project = ConjureProjectStore.getProject(project_id);
  const obj = { project_id, application_id, guild_id: tmp4, entry_point: entryPoint, publish_state: publishState, surface, install_scope: installScope, action };
  application_id = undefined;
  const track = AnalyticsUtilsDefault.track;
  const VIBEGRATION_PUBLISH_ACTION_CLICKED = AnalyticEvents.VIBEGRATION_PUBLISH_ACTION_CLICKED;
  AnalyticsUtilsDefault;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  tmp4 = null;
  if ("user" !== installScope) {
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    tmp4 = guild_id;
  }
  track(VIBEGRATION_PUBLISH_ACTION_CLICKED, obj);
};
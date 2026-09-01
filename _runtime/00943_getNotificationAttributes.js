// _runtime/00943_getNotificationAttributes.js
import getHttpSpanDetailsFromUrlObject from "00900_getHttpSpanDetailsFromUrlObject.js";
import _mod940 from "metro/00940__.js";
import extractTargetInfo from "00942_extractTargetInfo.js";

require = arg1;
const dependencyMap = arg6;
function getNotificationAttributes(arg0, requestId) {
  const obj = {};
  if ("notifications/cancelled" === arg0) {
    requestId = undefined;
    if (requestId != null) {
      requestId = requestId.requestId;
    }
    if (requestId) {
      const _String7 = String;
      obj["mcp.cancelled.request_id"] = String(requestId.requestId);
    }
    let reason;
    if (requestId != null) {
      reason = requestId.reason;
    }
    if (reason) {
      const _String8 = String;
      obj["mcp.cancelled.reason"] = String(requestId.reason);
    }
  } else if ("notifications/message" === arg0) {
    let level;
    if (requestId != null) {
      level = requestId.level;
    }
    if (level) {
      const _String5 = String;
      obj[_mod940.MCP_LOGGING_LEVEL_ATTRIBUTE] = String(requestId.level);
    }
    let logger;
    if (requestId != null) {
      logger = requestId.logger;
    }
    if (logger) {
      const _String6 = String;
      obj[_mod940.MCP_LOGGING_LOGGER_ATTRIBUTE] = String(requestId.logger);
    }
    let data;
    if (requestId != null) {
      data = requestId.data;
    }
    if (undefined !== data) {
      obj[_mod940.MCP_LOGGING_DATA_TYPE_ATTRIBUTE] = typeof requestId.data;
      if (arg2) {
        data = requestId.data;
        let json = data;
        if (typeof data !== "string") {
          const _JSON = JSON;
          json = JSON.stringify(data);
        }
        obj[tmp33(940).MCP_LOGGING_MESSAGE_ATTRIBUTE] = json;
      }
      tmp33 = require;
    }
  } else if ("notifications/progress" === arg0) {
    let progressToken;
    if (requestId != null) {
      progressToken = requestId.progressToken;
    }
    if (progressToken) {
      const _String3 = String;
      obj["mcp.progress.token"] = String(requestId.progressToken);
    }
    let progress;
    if (requestId != null) {
      progress = requestId.progress;
    }
    if (typeof progress === "number") {
      obj["mcp.progress.current"] = requestId.progress;
    }
    let total;
    if (requestId != null) {
      total = requestId.total;
    }
    if (typeof total === "number") {
      obj["mcp.progress.total"] = requestId.total;
      let progress1;
      if (requestId != null) {
        progress1 = requestId.progress;
      }
      if (typeof progress1 === "number") {
        obj["mcp.progress.percentage"] = (requestId.progress / requestId.total) * 100;
      }
    }
    let message;
    if (requestId != null) {
      message = requestId.message;
    }
    if (message) {
      const _String4 = String;
      obj["mcp.progress.message"] = String(requestId.message);
    }
  } else if ("notifications/resources/updated" === arg0) {
    let uri;
    if (requestId != null) {
      uri = requestId.uri;
    }
    if (uri) {
      const _String = String;
      obj[_mod940.MCP_RESOURCE_URI_ATTRIBUTE] = String(requestId.uri);
      const _String2 = String;
      const result = getHttpSpanDetailsFromUrlObject.parseStringToURLObject(String(requestId.uri));
      let tmp7 = result;
      if (result) {
        tmp7 = !tmp3(900).isURLObjectRelative(result);
        const tmp3Result = tmp3(900);
      }
      if (tmp7) {
        obj["mcp.resource.protocol"] = result.protocol.replace(":", "");
        const str2 = result.protocol;
      }
      const obj2 = getHttpSpanDetailsFromUrlObject;
      tmp3 = require;
    }
  } else if ("notifications/initialized" === arg0) {
    obj["mcp.lifecycle.phase"] = "initialization_complete";
    obj["mcp.protocol.ready"] = 1;
  }
  return obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.buildTypeSpecificAttributes = function buildTypeSpecificAttributes(request, message, params, recordInputs) {
  let obj = params;
  if ("request" === request) {
    let obj2 = extractTargetInfo;
    if (!obj) {
      obj = {};
    }
    let tmp5 = undefined !== message.id;
    if (tmp5) {
      obj = {};
      const _String = String;
      obj[tmp2(940).MCP_REQUEST_ID_ATTRIBUTE] = String(message.id);
      tmp5 = obj;
    }
    obj1 = {};
    const merged = Object.assign(tmp5);
    const merged1 = Object.assign(obj2.extractTargetInfo(message.method, obj).attributes);
    if (recordInputs) {
      if (!obj) {
        obj = {};
      }
      let requestArguments = tmp2(942).getRequestArguments(message.method, obj);
      const tmp2Result = tmp2(942);
    } else {
      requestArguments = {};
    }
    const merged2 = Object.assign(requestArguments);
    return obj1;
  } else {
    obj2 = obj;
    if (!obj) {
      obj2 = {};
    }
    return getNotificationAttributes(message.method, obj2, recordInputs);
  }
};
arg5.getNotificationAttributes = getNotificationAttributes;

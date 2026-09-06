// === Module 808: ? ===

// Module 808
import _mod765 from "module_765" /* 765 */;
import CLIENT_ADDRESS_ATTRIBUTE from "CLIENT_ADDRESS_ATTRIBUTE" /* 805 */;
import extractTargetInfo from "extractTargetInfo" /* 807 */;

require = arg1;
const dependencyMap = arg6;
function getNotificationAttributes(method, requestId, recordInputs) {
  const obj = {};
  if ("notifications/cancelled" === method) {
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
  } else if ("notifications/message" === method) {
    let level;
    if (requestId != null) {
      level = requestId.level;
    }
    if (level) {
      const _String5 = String;
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_LOGGING_LEVEL_ATTRIBUTE] = String(requestId.level);
    }
    let logger;
    if (requestId != null) {
      logger = requestId.logger;
    }
    if (logger) {
      const _String6 = String;
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_LOGGING_LOGGER_ATTRIBUTE] = String(requestId.logger);
    }
    let data;
    if (requestId != null) {
      data = requestId.data;
    }
    if (undefined !== data) {
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_LOGGING_DATA_TYPE_ATTRIBUTE] = typeof requestId.data;
      if (recordInputs) {
        data = requestId.data;
        let json = data;
        if (typeof data !== "string") {
          const _JSON = JSON;
          json = JSON.stringify(data);
        }
        obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_LOGGING_MESSAGE_ATTRIBUTE] = json;
      }
    }
  } else if ("notifications/progress" === method) {
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
        obj["mcp.progress.percentage"] = requestId.progress / requestId.total * 100;
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
  } else if ("notifications/resources/updated" === method) {
    let uri;
    if (requestId != null) {
      uri = requestId.uri;
    }
    if (uri) {
      const _String = String;
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE] = String(requestId.uri);
      const _String2 = String;
      const result = _mod765.parseStringToURLObject(String(requestId.uri));
      let tmp7 = result;
      if (result) {
        tmp7 = !_mod765.isURLObjectRelative(result);
        const tmp3Result = _mod765;
      }
      if (tmp7) {
        obj["mcp.resource.protocol"] = result.protocol.replace(":", "");
      }
    }
  } else if ("notifications/initialized" === method) {
    obj["mcp.lifecycle.phase"] = "initialization_complete";
    obj["mcp.protocol.ready"] = 1;
  }
  return obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const buildTypeSpecificAttributes = function buildTypeSpecificAttributes(request, message, params, recordInputs) {
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
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_REQUEST_ID_ATTRIBUTE] = String(message.id);
      tmp5 = obj;
    }
    const obj1 = {};
    const merged = Object.assign(tmp5);
    const merged1 = Object.assign(obj2.extractTargetInfo(message.method, obj).attributes);
    if (recordInputs) {
      if (!obj) {
        obj = {};
      }
      let requestArguments = extractTargetInfo.getRequestArguments(message.method, obj);
      const tmp2Result = extractTargetInfo;
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
export { getNotificationAttributes };
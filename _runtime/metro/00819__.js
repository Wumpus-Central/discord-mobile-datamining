// _runtime/metro/00819__.js
import _mod776 from "00776__.js";
import CLIENT_ADDRESS_ATTRIBUTE from "../00816_CLIENT_ADDRESS_ATTRIBUTE.js";
import extractTargetInfo2 from "../00818_extractTargetInfo.js";

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
    let data1;
    if (requestId != null) {
      data1 = requestId.data;
    }
    if (undefined !== data1) {
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_LOGGING_DATA_TYPE_ATTRIBUTE] = typeof requestId.data;
      if (recordInputs) {
        const data = requestId.data;
        let json = data;
        const MCP_LOGGING_MESSAGE_ATTRIBUTE = CLIENT_ADDRESS_ATTRIBUTE.MCP_LOGGING_MESSAGE_ATTRIBUTE;
        if (typeof data !== "string") {
          const _JSON = JSON;
          json = JSON.stringify(data);
        }
        obj[MCP_LOGGING_MESSAGE_ATTRIBUTE] = json;
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
  } else if ("notifications/resources/updated" === method) {
    let uri;
    if (requestId != null) {
      uri = requestId.uri;
    }
    if (uri) {
      const _String = String;
      obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE] = String(requestId.uri);
      const _String2 = String;
      const obj2 = _mod776;
      const result = obj2.parseStringToURLObject(String(requestId.uri));
      let tmp7 = result;
      if (tmp7) {
        const tmp3Result = _mod776;
        tmp7 = !tmp3Result.isURLObjectRelative(result);
      }
      if (tmp7) {
        const str2 = result.protocol;
        obj["mcp.resource.protocol"] = str2.replace(":", "");
      }
    }
  } else if ("notifications/initialized" === method) {
    obj["mcp.lifecycle.phase"] = "initialization_complete";
    obj["mcp.protocol.ready"] = 1;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildTypeSpecificAttributes = function buildTypeSpecificAttributes(
  request,
  message,
  params,
  recordInputs,
) {
  let obj = params;
  if ("request" === request) {
    let requestArguments;
    let obj2 = obj;
    const extractTargetInfo = extractTargetInfo2.extractTargetInfo;
    const method2 = message.method;
    extractTargetInfo2;
    if (!obj) {
      obj2 = {};
    }
    let tmp6 = undefined !== message.id;
    const extractTargetInfoResult = extractTargetInfo(method2, obj2);
    if (tmp6) {
      const obj3 = {};
      const _String = String;
      obj3[CLIENT_ADDRESS_ATTRIBUTE.MCP_REQUEST_ID_ATTRIBUTE] = String(message.id);
      tmp6 = obj3;
    }
    const obj4 = {};
    const merged = Object.assign(tmp6);
    const merged1 = Object.assign(extractTargetInfoResult.attributes);
    if (recordInputs) {
      const getRequestArguments = extractTargetInfo2.getRequestArguments;
      const method3 = message.method;
      extractTargetInfo2;
      if (!obj) {
        obj = {};
      }
      requestArguments = getRequestArguments(method3, obj);
    } else {
      requestArguments = {};
    }
    const merged2 = Object.assign(requestArguments);
    return obj4;
  } else {
    let obj5 = obj;
    const method = message.method;
    if (!obj) {
      obj5 = {};
    }
    return getNotificationAttributes(method, obj5, recordInputs);
  }
};
export { getNotificationAttributes };

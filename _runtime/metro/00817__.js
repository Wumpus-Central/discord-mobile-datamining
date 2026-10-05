// _runtime/metro/00817__.js
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "../00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod724 from "00724__.js";
import continueTrace from "../00742_continueTrace.js";
import _mod814 from "00814__.js";
import CLIENT_ADDRESS_ATTRIBUTE from "../00816_CLIENT_ADDRESS_ATTRIBUTE.js";
import extractTargetInfo2 from "../00818_extractTargetInfo.js";
import _mod819 from "00819__.js";
import filterMcpPiiFromSpanData from "../00820_filterMcpPiiFromSpanData.js";

function createMcpSpan(arg0) {
  let MCP_NOTIFICATION_ORIGIN_VALUE;
  let MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
  let callback;
  let extra;
  let message;
  let method;
  let options;
  let params;
  let transport;
  let type;
  ({ type, message, options } = arg0);
  ({ method, params } = message);
  let name = method;
  ({ transport, extra, callback } = arg0);
  if ("request" === type) {
    let obj = params;
    const extractTargetInfo = extractTargetInfo2.extractTargetInfo;
    extractTargetInfo2;
    if (!params) {
      obj = {};
    }
    const target = extractTargetInfo(method, obj).target;
    let combined = method;
    if (target) {
      const _HermesInternal = HermesInternal;
      combined = "" + method + " " + target;
    }
    name = combined;
  }
  const obj2 = {};
  const obj3 = _mod814;
  const merged = Object.assign(obj3.buildTransportAttributes(transport, extra));
  obj2[CLIENT_ADDRESS_ATTRIBUTE.MCP_METHOD_NAME_ATTRIBUTE] = method;
  let recordInputs;
  const buildTypeSpecificAttributes = _mod819.buildTypeSpecificAttributes;
  _mod819;
  if (options != null) {
    recordInputs = options.recordInputs;
  }
  const merged1 = Object.assign(buildTypeSpecificAttributes(type, message, params, recordInputs));
  if ("request" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_FUNCTION_ORIGIN_VALUE;
  } else if ("notification-incoming" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_ORIGIN_VALUE;
  } else if ("notification-outgoing" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_ORIGIN_VALUE;
  }
  const obj4 = {};
  obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
  obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = MCP_NOTIFICATION_ORIGIN_VALUE;
  obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = CLIENT_ADDRESS_ATTRIBUTE.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj4);
  const tmp7Result = _mod724;
  const client = tmp7Result.getClient();
  let sendDefaultPii;
  const _Boolean = Boolean;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const _BooleanResult = _Boolean(sendDefaultPii);
  const tmp7Result3 = filterMcpPiiFromSpanData;
  const attributes = tmp7Result3.filterMcpPiiFromSpanData(obj2, _BooleanResult);
  const tmp7Result4 = continueTrace;
  return tmp7Result4.startSpan({ name, forceTransaction: true, attributes }, callback);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildMcpServerSpanConfig = function buildMcpServerSpanConfig(message, self, extra, recordInputs) {
  let method;
  let params;
  let result;
  ({ method, params } = message);
  let obj = params;
  const extractTargetInfo = extractTargetInfo2.extractTargetInfo;
  extractTargetInfo2;
  if (!params) {
    obj = {};
  }
  const target = extractTargetInfo(method, obj).target;
  let combined = method;
  if (target) {
    const _HermesInternal = HermesInternal;
    combined = "" + method + " " + target;
  }
  const obj2 = {};
  const tmpResult = _mod814;
  const merged = Object.assign(tmpResult.buildTransportAttributes(self, extra));
  obj2[CLIENT_ADDRESS_ATTRIBUTE.MCP_METHOD_NAME_ATTRIBUTE] = method;
  recordInputs = undefined;
  const buildTypeSpecificAttributes = _mod819.buildTypeSpecificAttributes;
  _mod819;
  if (recordInputs != null) {
    recordInputs = recordInputs.recordInputs;
  }
  const merged1 = Object.assign(buildTypeSpecificAttributes("request", message, params, recordInputs));
  const MCP_SERVER_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
  const obj3 = {};
  obj3[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = MCP_SERVER_OP_VALUE;
  obj3[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] =
    CLIENT_ADDRESS_ATTRIBUTE.MCP_FUNCTION_ORIGIN_VALUE;
  obj3[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = CLIENT_ADDRESS_ATTRIBUTE.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj3);
  const tmpResult5 = _mod724;
  const client = tmpResult5.getClient();
  let sendDefaultPii;
  const _Boolean = Boolean;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const _BooleanResult = _Boolean(sendDefaultPii);
  const obj4 = {
    name: combined,
    op: CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE,
    forceTransaction: true,
    attributes: result,
  };
  const tmpResult6 = filterMcpPiiFromSpanData;
  result = tmpResult6.filterMcpPiiFromSpanData(obj2, _BooleanResult);
  return obj4;
};
export const createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, options, callback) {
  const obj = { type: "notification-incoming", message, transport: self, extra, callback, options };
  return createMcpSpan(obj);
};
export const createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(
  message,
  transport,
  self,
  callback,
) {
  const obj = { type: "notification-outgoing", message, transport, options: self, callback };
  return createMcpSpan(obj);
};

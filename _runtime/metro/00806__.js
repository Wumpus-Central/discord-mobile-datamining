// _runtime/metro/00806__.js
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "../00704_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod713 from "00713__.js";
import _mod731 from "00731__.js";
import extractClientInfo from "../00803_extractClientInfo.js";
import CLIENT_ADDRESS_ATTRIBUTE from "../00805_CLIENT_ADDRESS_ATTRIBUTE.js";
import extractTargetInfo from "../00807_extractTargetInfo.js";
import _mod808 from "00808__.js";
import filterMcpPiiFromSpanData from "../00809_filterMcpPiiFromSpanData.js";

require = arg1;
const dependencyMap = arg6;
function createMcpSpan(arg0) {
  ({ type, message, options } = arg0);
  ({ method, params } = message);
  let name = method;
  ({ transport, extra, callback } = arg0);
  if ("request" === type) {
    let obj2 = params;
    if (!params) {
      obj2 = {};
    }
    const target = extractTargetInfo.extractTargetInfo(method, obj2).target;
    let combined = method;
    if (target) {
      const _HermesInternal = HermesInternal;
      combined = "" + method + " " + target;
    }
    name = combined;
  }
  const obj3 = {};
  const merged = Object.assign(extractClientInfo.buildTransportAttributes(transport, extra));
  obj3[CLIENT_ADDRESS_ATTRIBUTE.MCP_METHOD_NAME_ATTRIBUTE] = method;
  let recordInputs;
  if (options != null) {
    recordInputs = options.recordInputs;
  }
  const merged1 = Object.assign(_mod808.buildTypeSpecificAttributes(type, message, params, recordInputs));
  if ("request" === type) {
    let MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
    let MCP_NOTIFICATION_ORIGIN_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_FUNCTION_ORIGIN_VALUE;
  } else if ("notification-incoming" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_ORIGIN_VALUE;
  } else if ("notification-outgoing" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = CLIENT_ADDRESS_ATTRIBUTE.MCP_NOTIFICATION_ORIGIN_VALUE;
  }
  const obj6 = {};
  obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
  obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = MCP_NOTIFICATION_ORIGIN_VALUE;
  obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = CLIENT_ADDRESS_ATTRIBUTE.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj6);
  const client = _mod713.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const tmp6Result = _mod713;
  const BooleanResult = Boolean(sendDefaultPii);
  const attributes = filterMcpPiiFromSpanData.filterMcpPiiFromSpanData(obj3, BooleanResult);
  const tmp6Result3 = filterMcpPiiFromSpanData;
  return _mod731.startSpan({ name, forceTransaction: true, attributes }, callback);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const buildMcpServerSpanConfig = function buildMcpServerSpanConfig(message, self, extra, recordInputs) {
  ({ method, params } = message);
  let obj2 = params;
  if (!params) {
    obj2 = {};
  }
  const target = extractTargetInfo.extractTargetInfo(method, obj2).target;
  let combined = method;
  if (target) {
    const _HermesInternal = HermesInternal;
    combined = "" + method + " " + target;
  }
  const obj3 = {};
  const merged = Object.assign(extractClientInfo.buildTransportAttributes(self, extra));
  obj3[CLIENT_ADDRESS_ATTRIBUTE.MCP_METHOD_NAME_ATTRIBUTE] = method;
  const tmpResult = extractClientInfo;
  recordInputs = undefined;
  if (recordInputs != null) {
    recordInputs = recordInputs.recordInputs;
  }
  const merged1 = Object.assign(_mod808.buildTypeSpecificAttributes("request", message, params, recordInputs));
  const obj4 = {};
  obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
  obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] =
    CLIENT_ADDRESS_ATTRIBUTE.MCP_FUNCTION_ORIGIN_VALUE;
  obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = CLIENT_ADDRESS_ATTRIBUTE.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj4);
  const tmpResult4 = _mod808;
  const client = _mod713.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const tmpResult5 = _mod713;
  const BooleanResult = Boolean(sendDefaultPii);
  const obj5 = { name: combined, op: null, forceTransaction: true, attributes: null };
  const result = filterMcpPiiFromSpanData.filterMcpPiiFromSpanData(obj3, BooleanResult);
  obj5.op = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
  obj5.attributes = result;
  return obj5;
};
export const createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, options, callback) {
  return createMcpSpan({ type: "notification-incoming", message, transport: self, extra, callback, options });
};
export const createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(
  message,
  transport,
  self,
  callback,
) {
  return createMcpSpan({ type: "notification-outgoing", message, transport, options: self, callback });
};

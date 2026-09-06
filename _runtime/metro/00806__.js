// === Module 806: ? ===

// Module 806
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import _mod713 from "module_713" /* 713 */;
import _mod731 from "module_731" /* 731 */;
import extractClientInfo from "extractClientInfo" /* 803 */;
import CLIENT_ADDRESS_ATTRIBUTE from "CLIENT_ADDRESS_ATTRIBUTE" /* 805 */;
import extractTargetInfo from "extractTargetInfo" /* 807 */;
import _mod808 from "module_808" /* 808 */;
import filterMcpPiiFromSpanData from "filterMcpPiiFromSpanData" /* 809 */;

require = arg1;
const dependencyMap = arg6;
function createMcpSpan(arg0) {
  ({ type, message, options } = arg0);
  ({ method, params } = message);
  let name = method;
  ({ transport, extra, callback } = arg0);
  if ("request" === type) {
    let obj = params;
    if (!params) {
      obj = {};
    }
    const target = obj.extractTargetInfo(method, obj).target;
    let combined = method;
    if (target) {
      const _HermesInternal = HermesInternal;
      combined = "" + method + " " + target;
    }
    name = combined;
  }
  obj = {};
  const merged = Object.assign(extractClientInfo.buildTransportAttributes(transport, extra));
  obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_METHOD_NAME_ATTRIBUTE] = method;
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
  const obj1 = {};
  obj1[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
  obj1[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = MCP_NOTIFICATION_ORIGIN_VALUE;
  obj1[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = CLIENT_ADDRESS_ATTRIBUTE.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj1);
  let tmp6Result = _mod713;
  const client = tmp6Result.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  tmp6Result = filterMcpPiiFromSpanData;
  const attributes = tmp6Result.filterMcpPiiFromSpanData(obj, Boolean(sendDefaultPii));
  const BooleanResult = Boolean(sendDefaultPii);
  return _mod731.startSpan({ name, forceTransaction: true, attributes }, callback);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const buildMcpServerSpanConfig = function buildMcpServerSpanConfig(message, self, extra, recordInputs) {
  ({ method, params } = message);
  let obj = params;
  if (!params) {
    obj = {};
  }
  const target = obj.extractTargetInfo(method, obj).target;
  let combined = method;
  if (target) {
    const _HermesInternal = HermesInternal;
    combined = "" + method + " " + target;
  }
  obj = {};
  let tmpResult = extractClientInfo;
  const merged = Object.assign(tmpResult.buildTransportAttributes(self, extra));
  obj[CLIENT_ADDRESS_ATTRIBUTE.MCP_METHOD_NAME_ATTRIBUTE] = method;
  tmpResult = _mod808;
  recordInputs = undefined;
  if (recordInputs != null) {
    recordInputs = recordInputs.recordInputs;
  }
  const merged1 = Object.assign(tmpResult.buildTypeSpecificAttributes("request", message, params, recordInputs));
  const obj1 = {};
  obj1[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
  obj1[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = CLIENT_ADDRESS_ATTRIBUTE.MCP_FUNCTION_ORIGIN_VALUE;
  obj1[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = CLIENT_ADDRESS_ATTRIBUTE.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj1);
  const client = _mod713.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const tmpResult1 = _mod713;
  const BooleanResult = Boolean(sendDefaultPii);
  const obj2 = { name: combined, op: null, forceTransaction: true, attributes: null };
  const result = filterMcpPiiFromSpanData.filterMcpPiiFromSpanData(obj, BooleanResult);
  obj2.op = CLIENT_ADDRESS_ATTRIBUTE.MCP_SERVER_OP_VALUE;
  obj2.attributes = result;
  return obj2;
};
export const createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, options, callback) {
  return createMcpSpan({ type: "notification-incoming", message, transport: self, extra, callback, options });
};
export const createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(message, transport, self, callback) {
  return createMcpSpan({ type: "notification-outgoing", message, transport, options: self, callback });
};
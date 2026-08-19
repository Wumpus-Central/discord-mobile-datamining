// _runtime/00941_createMcpSpan.js
import _mod839 from "metro/00839__.js";
import getClient from "00848_getClient.js";
import createChildOrRootSpan from "00866_createChildOrRootSpan.js";
import extractClientInfo from "00938_extractClientInfo.js";
import _mod940 from "metro/00940__.js";
import extractTargetInfo from "00942_extractTargetInfo.js";
import getNotificationAttributes from "00943_getNotificationAttributes.js";
import set from "00944_set.js";

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
  obj[_mod940.MCP_METHOD_NAME_ATTRIBUTE] = method;
  let recordInputs;
  if (options != null) {
    recordInputs = options.recordInputs;
  }
  const merged1 = Object.assign(getNotificationAttributes.buildTypeSpecificAttributes(type, message, params, recordInputs));
  if ("request" === type) {
    let MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = _mod940.MCP_SERVER_OP_VALUE;
    let MCP_NOTIFICATION_ORIGIN_VALUE = _mod940.MCP_FUNCTION_ORIGIN_VALUE;
  } else if ("notification-incoming" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = _mod940.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = _mod940.MCP_NOTIFICATION_ORIGIN_VALUE;
  } else if ("notification-outgoing" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = _mod940.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = _mod940.MCP_NOTIFICATION_ORIGIN_VALUE;
  }
  obj1 = {};
  obj1[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_OP] = MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
  obj1[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = MCP_NOTIFICATION_ORIGIN_VALUE;
  obj1[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = _mod940.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj1);
  let tmp6Result = getClient;
  const client = tmp6Result.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  tmp6Result = set;
  const attributes = tmp6Result.filterMcpPiiFromSpanData(obj, Boolean(sendDefaultPii));
  const BooleanResult = Boolean(sendDefaultPii);
  return createChildOrRootSpan.startSpan({ name, forceTransaction: true, attributes }, callback);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.buildMcpServerSpanConfig = function buildMcpServerSpanConfig(closure_1, self, closure_2, closure_0) {
  ({ method, params } = closure_1);
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
  const merged = Object.assign(tmpResult.buildTransportAttributes(self, closure_2));
  obj[_mod940.MCP_METHOD_NAME_ATTRIBUTE] = method;
  tmpResult = getNotificationAttributes;
  let recordInputs;
  if (_require != null) {
    recordInputs = _require.recordInputs;
  }
  const merged1 = Object.assign(tmpResult.buildTypeSpecificAttributes("request", closure_1, params, recordInputs));
  obj1 = {};
  obj1[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_OP] = _mod940.MCP_SERVER_OP_VALUE;
  obj1[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = _mod940.MCP_FUNCTION_ORIGIN_VALUE;
  obj1[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = _mod940.MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj1);
  const client = getClient.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const tmpResult1 = getClient;
  const BooleanResult = Boolean(sendDefaultPii);
  const obj2 = { name: combined, op: null, forceTransaction: true, attributes: null };
  const result = set.filterMcpPiiFromSpanData(obj, BooleanResult);
  obj2[1] = _mod940.MCP_SERVER_OP_VALUE;
  obj2[3] = result;
  return obj2;
};
arg5.createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, closure_0, callback) {
  return createMcpSpan({ type: "notification-incoming", message, transport: self, extra, callback, options: closure_0 });
};
arg5.createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(closure_2, closure_4, self, callback) {
  return createMcpSpan({ type: "notification-outgoing", message: closure_2, transport: closure_4, options: self, callback });
};
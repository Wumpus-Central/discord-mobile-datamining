// _runtime/00941_createMcpSpan.js
const require = arg1;
const dependencyMap = arg6;
function createMcpSpan(arg0) {
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
    let obj = require("00942_extractTargetInfo.js") /* extractTargetInfo */;
    obj = params;
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
  const merged = Object.assign(require("00938_extractClientInfo.js") /* extractClientInfo */.buildTransportAttributes(transport, extra));
  obj[require("metro/00940__.js").MCP_METHOD_NAME_ATTRIBUTE] = method;
  const obj4 = require("00938_extractClientInfo.js") /* extractClientInfo */;
  let recordInputs;
  if (options != null) {
    recordInputs = options.recordInputs;
  }
  const merged1 = Object.assign(require("00943_getNotificationAttributes.js") /* getNotificationAttributes */.buildTypeSpecificAttributes(type, message, params, recordInputs));
  if ("request" === type) {
    let MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = tmp6(940).MCP_SERVER_OP_VALUE;
    let MCP_NOTIFICATION_ORIGIN_VALUE = tmp6(940).MCP_FUNCTION_ORIGIN_VALUE;
  } else if ("notification-incoming" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = tmp6(940).MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = tmp6(940).MCP_NOTIFICATION_ORIGIN_VALUE;
  } else if ("notification-outgoing" === type) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = tmp6(940).MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = tmp6(940).MCP_NOTIFICATION_ORIGIN_VALUE;
  }
  const obj1 = {};
  obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_SENTRY_OP] = MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
  obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = MCP_NOTIFICATION_ORIGIN_VALUE;
  obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = require("metro/00940__.js").MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj1);
  let tmp6Result = tmp6(848);
  const client = tmp6Result.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const obj5 = require("00943_getNotificationAttributes.js") /* getNotificationAttributes */;
  tmp6Result = tmp6(944);
  const attributes = tmp6Result.filterMcpPiiFromSpanData(obj, Boolean(sendDefaultPii));
  const BooleanResult = Boolean(sendDefaultPii);
  return require("00866_createChildOrRootSpan.js") /* createChildOrRootSpan */.startSpan({ name, forceTransaction: true, attributes }, callback);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.buildMcpServerSpanConfig = function buildMcpServerSpanConfig(closure_1, self, closure_2, closure_0) {
  let method;
  let params;
  ({ method, params } = closure_1);
  let obj = require("00942_extractTargetInfo.js") /* extractTargetInfo */;
  obj = params;
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
  let tmpResult = tmp(938);
  const merged = Object.assign(tmpResult.buildTransportAttributes(self, closure_2));
  obj[require("metro/00940__.js").MCP_METHOD_NAME_ATTRIBUTE] = method;
  tmpResult = tmp(943);
  let recordInputs;
  if (closure_0 != null) {
    recordInputs = closure_0.recordInputs;
  }
  const merged1 = Object.assign(tmpResult.buildTypeSpecificAttributes("request", closure_1, params, recordInputs));
  const obj1 = {};
  obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_SENTRY_OP] = require("metro/00940__.js").MCP_SERVER_OP_VALUE;
  obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = require("metro/00940__.js").MCP_FUNCTION_ORIGIN_VALUE;
  obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = require("metro/00940__.js").MCP_ROUTE_SOURCE_VALUE;
  const merged2 = Object.assign(obj1);
  const client = require("00848_getClient.js") /* getClient */.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const tmpResult1 = require("00848_getClient.js") /* getClient */;
  const BooleanResult = Boolean(sendDefaultPii);
  const obj2 = { name: combined, op: null, forceTransaction: true, attributes: null };
  const result = require("00944_set.js") /* set */.filterMcpPiiFromSpanData(obj, BooleanResult);
  obj2[1] = require("metro/00940__.js").MCP_SERVER_OP_VALUE;
  obj2[3] = result;
  return obj2;
};
arg5.createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, closure_0, callback) {
  return createMcpSpan({ type: "notification-incoming", message, transport: self, extra, callback, options: closure_0 });
};
arg5.createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(closure_2, closure_4, self, callback) {
  return createMcpSpan({ type: "notification-outgoing", message: closure_2, transport: closure_4, options: self, callback });
};
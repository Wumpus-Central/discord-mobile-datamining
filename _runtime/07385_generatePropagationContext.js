// _runtime/07385_generatePropagationContext.js
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require("07386_addContextToFrame.js") /* addContextToFrame */.uuid4();
  const obj2 = require("07386_addContextToFrame.js") /* addContextToFrame */;
  const obj3 = require("07386_addContextToFrame.js") /* addContextToFrame */;
  obj[1] = require("07386_addContextToFrame.js") /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require("07386_addContextToFrame.js") /* addContextToFrame */;
  return require("07386_addContextToFrame.js") /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require("07386_addContextToFrame.js") /* addContextToFrame */.uuid4();
};
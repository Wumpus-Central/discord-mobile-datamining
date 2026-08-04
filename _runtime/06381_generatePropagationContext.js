// _runtime/06381_generatePropagationContext.js
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require(6382) /* addContextToFrame */.uuid4();
  const obj2 = require(6382) /* addContextToFrame */;
  const obj3 = require(6382) /* addContextToFrame */;
  obj[1] = require(6382) /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require(6382) /* addContextToFrame */;
  return require(6382) /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(6382) /* addContextToFrame */.uuid4();
};
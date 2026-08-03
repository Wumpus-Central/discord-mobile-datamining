const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = require(7374) /* addContextToFrame */.uuid4();
  const obj2 = require(7374) /* addContextToFrame */;
  const obj3 = require(7374) /* addContextToFrame */;
  obj[1] = require(7374) /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = require(7374) /* addContextToFrame */;
  return require(7374) /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return require(7374) /* addContextToFrame */.uuid4();
};
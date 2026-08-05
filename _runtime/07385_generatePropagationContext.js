// _runtime/07385_generatePropagationContext.js
import { addContextToFrame } from "07386_addContextToFrame.js";
const require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: null, spanId: null };
  obj[0] = addContextToFrame /* addContextToFrame */.uuid4();
  const obj2 = addContextToFrame /* addContextToFrame */;
  const obj3 = addContextToFrame /* addContextToFrame */;
  obj[1] = addContextToFrame /* addContextToFrame */.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = addContextToFrame /* addContextToFrame */;
  return addContextToFrame /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return addContextToFrame /* addContextToFrame */.uuid4();
};
// _runtime/00890_convertSpanJsonToTransactionEvent.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.convertSpanJsonToTransactionEvent = function convertSpanJsonToTransactionEvent(beforeSendSpanResult) {
  let obj = { type: "transaction", timestamp: beforeSendSpanResult.timestamp, start_timestamp: beforeSendSpanResult.start_timestamp, transaction: beforeSendSpanResult.description, contexts: null, measurements: null };
  obj = { trace_id: beforeSendSpanResult.trace_id, span_id: beforeSendSpanResult.span_id, parent_span_id: beforeSendSpanResult.parent_span_id, op: beforeSendSpanResult.op, status: beforeSendSpanResult.status, origin: beforeSendSpanResult.origin, data: null };
  obj = {};
  const merged = Object.assign(beforeSendSpanResult.data);
  let profile_id = beforeSendSpanResult.profile_id;
  if (profile_id) {
    const obj1 = {};
    obj1[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_PROFILE_ID] = beforeSendSpanResult.profile_id;
    profile_id = obj1;
  }
  const merged1 = Object.assign(profile_id);
  let exclusive_time = beforeSendSpanResult.exclusive_time;
  if (exclusive_time) {
    const obj2 = {};
    obj2[require("metro/00839__.js").SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME] = beforeSendSpanResult.exclusive_time;
    exclusive_time = obj2;
  }
  const obj3 = { trace: null };
  const merged2 = Object.assign(exclusive_time);
  obj[6] = obj;
  obj3[0] = obj;
  obj[4] = obj3;
  obj[5] = beforeSendSpanResult.measurements;
  return obj;
};
arg5.convertTransactionEventToSpanJson = function convertTransactionEventToSpanJson(contexts) {
  let data;
  let op;
  let origin;
  let parent_span_id;
  let span_id;
  let status;
  let trace_id;
  contexts = contexts.contexts;
  let trace;
  if (contexts != null) {
    trace = contexts.trace;
  }
  if (trace == null) {
    trace = {};
  }
  ({ trace_id, span_id, data } = trace);
  let obj = data;
  ({ parent_span_id, status, origin, op } = trace);
  if (data == null) {
    obj = {};
  }
  obj = { data: obj, description: contexts.transaction, op, parent_span_id, span_id: null, start_timestamp: null, status: null, timestamp: null, trace_id: null, origin: null, profile_id: null, exclusive_time: null, measurements: null, is_segment: true };
  if (span_id == null) {
    span_id = "";
  }
  obj[4] = span_id;
  let num = contexts.start_timestamp;
  if (num == null) {
    num = 0;
  }
  obj[5] = num;
  obj[6] = status;
  obj[7] = contexts.timestamp;
  if (trace_id == null) {
    trace_id = "";
  }
  obj[8] = trace_id;
  obj[9] = origin;
  let tmp;
  if (data != null) {
    tmp = data[require(undefined, 839).SEMANTIC_ATTRIBUTE_PROFILE_ID];
  }
  obj[10] = tmp;
  let tmp4;
  if (data != null) {
    tmp4 = data[require(undefined, 839).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
  }
  obj[11] = tmp4;
  obj[12] = contexts.measurements;
  return obj;
};
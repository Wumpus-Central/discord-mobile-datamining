// _runtime/00766_convertSpanJsonToTransactionEvent.js
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const convertSpanJsonToTransactionEvent = function convertSpanJsonToTransactionEvent(beforeSendSpanResult) {
  let obj3;
  let obj6;
  const obj2 = {
    trace_id: beforeSendSpanResult.trace_id,
    span_id: beforeSendSpanResult.span_id,
    parent_span_id: beforeSendSpanResult.parent_span_id,
    op: beforeSendSpanResult.op,
    status: beforeSendSpanResult.status,
    origin: beforeSendSpanResult.origin,
    data: obj3,
  };
  const obj = {
    type: "transaction",
    timestamp: beforeSendSpanResult.timestamp,
    start_timestamp: beforeSendSpanResult.start_timestamp,
    transaction: beforeSendSpanResult.description,
    contexts: obj6,
    measurements: beforeSendSpanResult.measurements,
  };
  obj3 = {};
  const merged = Object.assign(beforeSendSpanResult.data);
  let profile_id = beforeSendSpanResult.profile_id;
  if (profile_id) {
    const obj4 = {};
    obj4[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_PROFILE_ID] = beforeSendSpanResult.profile_id;
    profile_id = obj4;
  }
  const merged1 = Object.assign(profile_id);
  let exclusive_time = beforeSendSpanResult.exclusive_time;
  if (exclusive_time) {
    const obj5 = {};
    obj5[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME] = beforeSendSpanResult.exclusive_time;
    exclusive_time = obj5;
  }
  obj6 = { trace: obj2 };
  const merged2 = Object.assign(exclusive_time);
  return obj;
};
export const convertTransactionEventToSpanJson = function convertTransactionEventToSpanJson(contexts) {
  let data;
  let num;
  let op;
  let origin;
  let parent_span_id;
  let span_id;
  let status;
  let tmp;
  let tmp4;
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
  const obj2 = {
    data: obj,
    description: contexts.transaction,
    op,
    parent_span_id,
    span_id,
    start_timestamp: num,
    status,
    timestamp: contexts.timestamp,
    trace_id,
    origin,
    profile_id: tmp,
    exclusive_time: tmp4,
    measurements: contexts.measurements,
    is_segment: true,
  };
  if (span_id == null) {
    span_id = "";
  }
  num = contexts.start_timestamp;
  if (num == null) {
    num = 0;
  }
  if (trace_id == null) {
    trace_id = "";
  }
  tmp = undefined;
  if (data != null) {
    tmp = data[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_PROFILE_ID];
  }
  tmp4 = undefined;
  if (data != null) {
    tmp4 = data[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
  }
  return obj2;
};

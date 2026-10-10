// === Module 13215: ConjurePerfTraceBatches ===

// Module 13215 (ConjurePerfTraceBatches)
import size from "module_2" /* 2 */;

function foldRecord(map, nextResult) {
  let tmp = map;
  if (map == null) {
    const obj = { id: nextResult.id, parent: null, name: "", start: 0, end: null };
    tmp = obj;
  }
  const merged = Object.assign(tmp);
  if (undefined !== nextResult.parent) {
    const obj3 = { parent: nextResult.parent };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged1 = Object.assign(obj4);
  if (null != nextResult.name) {
    const obj5 = { name: nextResult.name };
    let obj6 = obj5;
  } else {
    obj6 = {};
  }
  const merged2 = Object.assign(obj6);
  if (null != nextResult.start) {
    const obj7 = { start: nextResult.start };
    let obj8 = obj7;
  } else {
    obj8 = {};
  }
  const merged3 = Object.assign(obj8);
  if (null != nextResult.end) {
    const obj9 = { end: nextResult.end };
    let obj10 = obj9;
  } else {
    obj10 = {};
  }
  const merged4 = Object.assign(obj10);
  if (null != nextResult.attrs) {
    const obj11 = { attrs: null };
    const obj12 = {};
    const merged5 = Object.assign(tmp.attrs);
    const merged6 = Object.assign(nextResult.attrs);
    obj11.attrs = obj12;
    let obj13 = obj11;
  } else {
    obj13 = {};
  }
  const merged7 = Object.assign(obj13);
  if (null != nextResult.details) {
    const obj14 = { details: null };
    const obj15 = {};
    const merged8 = Object.assign(tmp.details);
    const merged9 = Object.assign(nextResult.details);
    obj14.details = obj15;
    let obj16 = obj14;
  } else {
    obj16 = {};
  }
  const merged10 = Object.assign(obj16);
  if (null != nextResult.error) {
    const obj17 = { error: nextResult.error };
    let obj18 = obj17;
  } else {
    obj18 = {};
  }
  const merged11 = Object.assign(obj18);
  if (null != nextResult.waits_on) {
    const obj19 = { waits_on: nextResult.waits_on };
    let obj20 = obj19;
  } else {
    obj20 = {};
  }
  const merged12 = Object.assign(obj20);
  return {};
}
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceBatches.tsx");

export const applyTimingTraceBatch = function applyTimingTraceBatch(found, batch, live) {
  let spans;
  if (found != null) {
    spans = found.spans;
  }
  if (spans == null) {
    spans = [];
  }
  const map = new Map(spans.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  const iter = batch.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let result = map.set(nextResult.id, foldRecord(map.get(nextResult.id), nextResult));
    continue;
  }
  const tmp5 = null == found || batch.at >= found.as_of ? batch.name : found.name;
  closure_0 = tmp5;
  let obj = { id: batch.trace_id, name: tmp5, started_at: batch.started_at, as_of: null == found || batch.at >= found.as_of ? batch.at : found.as_of, started_by: batch.started_by, spans: null, dropped: null, live: null };
  let items = [...map.values()];
  const sorted = items.sort((id, id2) => id.id - id2.id);
  obj.spans = sorted.map((parent) => {
    let tmp = parent;
    if (null == parent.parent) {
      tmp = parent;
      if (parent.name !== closure_0) {
        const obj = {};
        const merged = Object.assign(parent);
        obj.name = tmp2;
        tmp = obj;
      }
    }
    return tmp;
  });
  let num;
  if (found != null) {
    num = found.dropped;
  }
  if (num == null) {
    num = 0;
  }
  obj.dropped = Math.max(num, batch.dropped);
  if (!(null == found || batch.at >= found.as_of)) {
    live = found.live;
  }
  obj.live = live;
  return obj;
};
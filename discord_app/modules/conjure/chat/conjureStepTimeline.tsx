// === Module 10810: conjureStepTimeline ===

// Module 10810 (conjureStepTimeline)
import _slicedToArray from "module_32" /* 32 */;

function pushStep(items, todosAt, turn_seq) {
  if (null == turn_seq.turn_seq) {
    if ("todos" === turn_seq.kind) {
      if (null == turn_seq.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = items.length;
          items.push(turn_seq);
          if (null != turn_seq.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(turn_seq.turn_seq);
          }
        } else {
          if (null != turn_seq.turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.add(turn_seq.turn_seq);
          }
          turn_seq = items[todosAt.todosAt].turn_seq;
          if (!tmp3) {
            items[todosAt.todosAt] = turn_seq;
          }
          tmp3 = null != turn_seq.turn_seq && null != turn_seq && turn_seq.turn_seq < turn_seq;
        }
      }
    }
    items.push(turn_seq);
    if (null != turn_seq.turn_seq) {
      const seenSeq4 = todosAt.seenSeq;
      seenSeq4.add(turn_seq.turn_seq);
    }
  } else {
    const seenSeq = todosAt.seenSeq;
  }
}
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureStepTimeline.tsx");

export const TERMINAL_STEP_KINDS = set;
export function recordStep(steps, step) {
  const tmp = (function indexTimeline(arr) {
    value = weakMap1.get(arr);
    if (null != value) {
      return value;
    } else {
      const _Set = Set;
      set = new Set();
      let num = -1;
      const entries = arr.entries();
      const tmp23 = entries[Symbol.iterator]();
      while (tmp23 !== undefined) {
        let tmp6 = _slicedToArray(tmp3, 2);
        let tmp7 = tmp6[1];
        let tmp8 = tmp7;
        if (null != tmp7.turn_seq) {
          let addResult = set.add(tmp8.turn_seq);
        }
        let tmp12 = -1 === num;
        if (tmp12) {
          tmp12 = "todos" === tmp8.kind;
        }
        if (tmp12) {
          tmp12 = null == tmp8.task_id;
        }
        if (tmp12) {
          num = tmp6[0];
        }
        continue;
      }
      const obj = { seenSeq: set, todosAt: num };
      const result = weakMap1.set(arr, obj);
      return obj;
    }
  })(steps);
  if (null != step.turn_seq) {
    const seenSeq = tmp.seenSeq;
    if (seenSeq.has(step.turn_seq)) {
      return steps;
    }
  }
  const substr = steps.slice();
  weakMap1.delete(steps);
  pushStep(substr, tmp, step);
  let result = weakMap1.set(substr, tmp);
  let hasItem = weakMap.get(steps);
  if (null == hasItem) {
    const someResult = steps.some((kind) => set.has(kind.kind));
    const result1 = weakMap.set(steps, someResult);
    hasItem = someResult;
  }
  if (!hasItem) {
    hasItem = set.has(step.kind);
  }
  const result2 = weakMap.set(substr, hasItem);
  return substr;
}
export function replayTimeline(steps) {
  const items = [];
  const obj = { seenSeq: new Set(), todosAt: -1 };
  set = new Set();
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(items, obj, tmp3);
    continue;
  }
  const result = weakMap1.set(items, obj);
  return items;
}
export function hasTerminalStep(steps) {
  value = weakMap.get(steps);
  if (null == value) {
    const someResult = steps.some((kind) => set.has(kind.kind));
    const result = weakMap.set(steps, someResult);
    value = someResult;
  }
  return value;
}
// discord_app/modules/conjure/agent_activity/ConjureTimelineTree.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function isLegacyControlLineNode(label_key) {
  label_key = undefined;
  if (label_key != null) {
    label_key = label_key.label_key;
  }
  return "testing_app" === label_key;
}
function buildTimelineTree(steps, arg1) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  let task;
  c11 = undefined;
  c12 = undefined;
  function ensure(taskId, id, arg2, segment) {
    if ("task" !== arg2) {
      if ("task" !== id) {
        let str = taskId;
        if (taskId == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + str + " " + id;
        value = map1.get(combined);
        if (null != value) {
          return value;
        } else {
          const obj3 = {
            id,
            kind: "step",
            detail: [],
            detailDrivenBy: [],
            detailError: [],
            status: "running",
            screenshots: [],
            browserSessions: [],
            attachments: [],
            touched: 0,
            segment,
          };
          const result = map1.set(combined, obj3);
          if (null != taskId) {
            value3 = map.get(taskId);
            if (null == value3) {
              const obj4 = { taskId, task: null, steps: null };
              const obj5 = {
                id: "task",
                kind: "task",
                detail: [],
                detailDrivenBy: [],
                detailError: [],
                status: "running",
                screenshots: [],
                browserSessions: [],
                attachments: [],
                touched: 0,
                segment,
              };
              obj4.task = obj5;
              obj4.steps = [];
              const result1 = map.set(taskId, obj4);
              value3 = obj4;
            }
            const steps = value3.steps;
            steps.push(obj3);
          } else {
            items.push(obj3);
          }
          return obj3;
        }
      }
    }
    if (null != taskId) {
      value4 = map.get(taskId);
      if (null == value4) {
        const obj7 = { taskId, task: null, steps: null };
        const obj8 = {
          id: "task",
          kind: "task",
          detail: [],
          detailDrivenBy: [],
          detailError: [],
          status: "running",
          screenshots: [],
          browserSessions: [],
          attachments: [],
          touched: 0,
          segment,
        };
        obj7.task = obj8;
        obj7.steps = [];
        const result2 = map.set(taskId, obj7);
        value4 = obj7;
      }
      task = value4.task;
    } else if (task == null) {
      const obj9 = {
        id: "task",
        kind: "task",
        detail: [],
        detailDrivenBy: [],
        detailError: [],
        status: "running",
        screenshots: [],
        browserSessions: [],
        attachments: [],
        touched: 0,
        segment,
      };
      task = obj9;
    }
    return task;
  }
  let items = [];
  const map = new Map();
  map1 = new Map();
  let sum1 = 0;
  const map2 = new Map();
  const map3 = new Map();
  const segmentOf = ensure(steps).segmentOf;
  closure_9 = (function cancelledLaneIds(steps) {
    const set = new Set();
    const iter = steps[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if ("node" === nextResult.kind) {
        if (null != tmp2.node) {
          let task_id = tmp2.task_id;
          let tmp5 = task_id;
          let tmp6 = null != task_id;
          if (tmp6) {
            tmp6 = "" !== tmp5;
          }
          if (tmp6) {
            let tmp9 = "task" !== tmp2.node.node_kind;
            if (tmp9) {
              tmp9 = "task" !== tmp2.node.id;
            }
            if (!tmp9) {
              if ("cancelled" === tmp2.node.status) {
                let addResult = set.add(tmp5);
              }
            }
          }
        }
      }
      continue;
    }
    return set;
  })(steps);
  closure_10 = (function legacyControlLineIds(steps) {
    const set = new Set();
    const iter = steps[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = "node" !== nextResult.kind;
      if (!tmp3) {
        tmp3 = null == tmp2.node;
      }
      if (!tmp3) {
        let tmp6 = null != tmp2.task_id;
        if (tmp6) {
          tmp6 = "" !== tmp2.task_id;
        }
        tmp3 = tmp6;
      }
      if (!tmp3) {
        if (sum1(tmp2.node)) {
          let addResult = set.add(tmp2.node.id);
        }
      }
      continue;
    }
    return set;
  })(steps);
  function _loop() {
    if (
      (function isSuppressedLaneFrame(c12, size) {
        let hasItem = 0 !== size.size;
        if (hasItem) {
          hasItem = "error" !== c12.kind;
        }
        if (hasItem) {
          hasItem = "terminal_error" !== c12.kind;
        }
        if (hasItem) {
          hasItem = null != c12.task_id;
        }
        if (hasItem) {
          hasItem = "" !== c12.task_id;
        }
        if (hasItem) {
          hasItem = size.has(c12.task_id);
        }
        return hasItem;
      })(_undefined, closure_9)
    ) {
      return 0;
    } else if (
      (function isLegacyControlLineFrame(c12, size) {
        let hasItem = 0 !== size.size;
        if (hasItem) {
          hasItem = "node" === c12.kind;
        }
        if (hasItem) {
          hasItem = null != c12.node;
        }
        if (hasItem) {
          let tmp4 = null == c12.task_id;
          if (!tmp4) {
            tmp4 = "" === c12.task_id;
          }
          hasItem = tmp4;
        }
        if (hasItem) {
          hasItem = size.has(c12.node.id);
        }
        return hasItem;
      })(_undefined, closure_10)
    ) {
      return 0;
    } else {
      let num = segmentOf[c11];
      if (num == null) {
        num = 0;
      }
      if ("node" === _undefined.kind) {
        if (null != _undefined.node) {
          ({ node, task_id } = _undefined);
          ({ id, node_kind } = node);
          if (node_kind == null) {
            node_kind = "step";
          }
          const tmp13Result = ensure(task_id, id, node_kind, num);
          const sum = sum1 + 1;
          sum1 = sum;
          tmp13Result.touched = sum;
          if (null != node.label_key) {
            tmp13Result.labelKey = node.label_key;
          }
          if (null != node.label_text) {
            tmp13Result.labelText = node.label_text;
          }
          if (null != node.group_label) {
            tmp13Result.groupLabel = node.group_label;
          }
          if (null != node.helper_name) {
            tmp13Result.helperName = node.helper_name;
          }
          if (null != node.helper_mark) {
            tmp13Result.helperMark = node.helper_mark;
          }
          if (null != node.todo_id) {
            tmp13Result.todoId = node.todo_id;
          }
          if (null != node.tier) {
            tmp13Result.tier = node.tier;
          }
          if (null != node.detail) {
            const result = map3.set(tmp13Result, unkeyed(node.detail, node.detail_error, node.detail_driven_by));
          }
          if (null != node.append_detail) {
            let driven_by = node.driven_by;
            if (driven_by == null) {
              driven_by = null;
            }
            ({ append_detail: append_detail2, append_detail, append_detail_error } = node);
            const tmp26 = unkeyed(
              append_detail,
              append_detail_error,
              append_detail2.map(() => driven_by),
            );
            let items3 = map3.get(tmp13Result);
            if (items3 == null) {
              items3 = [];
            }
            items = [];
            HermesBuiltin.arraySpread(tmp26, HermesBuiltin.arraySpread(items3, 0));
            const result1 = map3.set(tmp13Result, items);
          }
          if (null != node.lines) {
            value2 = map2.get(tmp13Result);
            if (value2 == null) {
              const _Map = Map;
              value2 = new Map();
            }
            const result2 = map2.set(tmp13Result, value2);
            const lines = node.lines;
            for (const item10117 of lines) {
              let set = item10117.set;
              if (set == null) {
                set = value2.get(item10117.key);
              }
              if (set == null) {
                set = [];
              }
              if (null != item10117.add) {
                let items1 = [];
                let arraySpreadResult2 = HermesBuiltin.arraySpread(item10117.add, HermesBuiltin.arraySpread(tmp42, 0));
                let tmp44 = items1;
              } else {
                tmp44 = set;
              }
              let result3 = value2.set(item10117.key, tmp44);
              continue;
            }
          }
          if (null != node.status) {
            tmp13Result.status = node.status;
          }
          if (null != node.duration) {
            tmp13Result.durationMs = node.duration;
          }
          if (null != node.screenshots) {
            tmp13Result.screenshots = node.screenshots;
          }
          if (null != node.browser_sessions) {
            tmp13Result.browserSessions = node.browser_sessions;
          }
          if (null != node.attachments) {
            tmp13Result.attachments = node.attachments;
          }
          return 0;
        }
      }
      if ("error" === _undefined.kind) {
        const _HermesInternal = HermesInternal;
        const tmp9 = ensure(undefined, "" + _undefined.kind + "-" + c11, "step", num);
        sum1 = sum1 + 1;
        tmp9.touched = sum1;
        tmp9.labelKey = (function errorLabelKey(c12) {
          let str = "error";
          let str2;
          if ("error" === c12.kind) {
            str2 = c12.failure_kind;
          }
          if (str2 == null) {
            str2 = "unknown";
          }
          const combined = "error_" + str2;
          if (combined in map2) {
            str = combined;
          }
          return str;
        })(_undefined);
        tmp9.status = "failed";
        if (tmp12) {
          const items2 = [_undefined.message];
          tmp9.detail = items2;
        }
        tmp12 = null != _undefined.message && "" !== _undefined.message;
      }
    }
  }
  const entries = steps.entries();
  while (tmp3 !== undefined) {
    let tmp6 = map1(tmp4, 2);
    [c11, c12] = tmp6;
    let _loopResult = _loop();
    continue;
  }
  let items1 = [...map3.keys(), ...map2.keys()];
  tmp3 = entries[Symbol.iterator]();
  let iter = new Set(items1)[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp10 = nextResult;
    let items5 = map3.get(nextResult);
    if (items5 == null) {
      items5 = [];
    }
    let items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items5, 0);
    value2 = map2.get(tmp10);
    let items6;
    if (value2 != null) {
      items6 = value2.values();
    }
    if (items6 == null) {
      items6 = [];
    }
    let items3 = [];
    let arraySpreadResult3 = HermesBuiltin.arraySpread(items6, 0);
    let arraySpreadResult4 = HermesBuiltin.arraySpread(items3.flat(), arraySpreadResult);
    tmp10.detail = items2.map((text) => text.text);
    tmp10.detailDrivenBy = items2.map((driven_by) => {
      driven_by = driven_by.driven_by;
      if (driven_by == null) {
        driven_by = null;
      }
      return driven_by;
    });
    tmp10.detailError = items2.map((error) => {
      error = error.error;
      if (error == null) {
        error = null;
      }
      return error;
    });
    continue;
  }
  const items4 = [...map.values()];
  const iter2 = items4[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp23 = nextResult1;
    let tmp24 = flag;
    if (!flag) {
      tmp24 = "running" !== tmp23.task.status;
    }
    if (!tmp24) {
      tmp23.task.status = "incomplete";
    }
    continue;
  }
  if (null != task) {
    let obj3 = { turn: task };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  return { steps: items, tasks: items4 };
}
function unkeyed(append_detail, append_detail_error, detail_driven_by) {
  return append_detail.map((text, index) => {
    let tmp;
    if (append_detail_error != null) {
      tmp = append_detail_error[index];
    }
    if (tmp == null) {
      tmp = null;
    }
    let tmp2;
    if (detail_driven_by != null) {
      tmp2 = detail_driven_by[index];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    if (null != tmp) {
      const obj2 = { error: tmp };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    if (null != tmp2) {
      const obj4 = { driven_by: tmp2 };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged1 = Object.assign(obj5);
    return { text };
  });
}
function scanTurnColumn(arr) {
  const items = [];
  const segmentOf = [];
  let tmp = null;
  let tmp2 = null;
  let num = 0;
  const entries = arr.entries();
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let segment = tmp9.segment;
    let tmp11 = segment;
    if (segment == null) {
      segment = num;
    }
    arr = segmentOf.push(segment);
    if ("thinking" !== tmp9.kind) {
      if (!isTurnWorkFrame(tmp9)) {
        if ("todos" !== tmp9.kind) {
          if ("assistant_delta" === tmp9.kind) {
            if (null == tmp9.task_id) {
              let str = tmp9.message;
              if (str == null) {
                str = "";
              }
              let tmp28 = str;
              if ("" !== str) {
                if (null == tmp) {
                  num = num + 1;
                  let tmp33 = tmp11;
                  if (tmp11 == null) {
                    tmp33 = num;
                  }
                  segmentOf[tmp8] = tmp33;
                  let obj2 = { type: "message", key: null, segment: null, content: null };
                  let _HermesInternal2 = HermesInternal;
                  obj2.key = "message-" + tmp8;
                  obj2.segment = tmp33;
                  obj2.content = tmp28;
                  tmp = obj2;
                  let arr2 = items.push(obj2);
                } else {
                  tmp.content = tmp28;
                }
              }
              if (true === tmp9.message_finished) {
                tmp = null;
              }
            }
          }
        } else {
          let items2 = tmp9.items;
          if (items2 == null) {
            items2 = [];
          }
          let tmp17 = items2;
          if (0 === items2.length) {
            continue;
          } else if (null != tmp2) {
            tmp2.todos = tmp17;
          } else {
            obj = { type: "todos", key: null, segment: null, todos: null };
            let _HermesInternal = HermesInternal;
            obj.key = "todos-" + tmp8;
            let tmp20 = tmp11;
            if (tmp11 == null) {
              tmp20 = num;
            }
            obj.segment = tmp20;
            obj.todos = tmp17;
            tmp2 = obj;
            let arr3 = items.push(obj);
          }
        }
        continue;
      }
      continue;
    }
    tmp = null;
  }
  return { items, segmentOf };
}
function segmentDurations(steps) {
  const map = new Map();
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("segment_settled" === nextResult.kind) {
      let tmp4 = null != tmp2.task_id;
      if (tmp4) {
        tmp4 = "" !== tmp2.task_id;
      }
      if (!tmp4) {
        let tmp7 = null != tmp2.segment;
        if (tmp7) {
          tmp7 = null != tmp2.duration;
        }
        if (tmp7) {
          let result = map.set(tmp2.segment, tmp2.duration);
        }
      }
    }
    continue;
  }
  return map;
}
function sharedTimelineTree(steps, flag) {
  value = weakMap1.get(steps);
  if (null == value) {
    const obj2 = {};
    const result = weakMap1.set(steps, obj2);
    value = obj2;
  }
  let str = "settled";
  if (flag) {
    str = "active";
  }
  let tmp3 = value[str];
  if (tmp3 == null) {
    const obj3 = { turnActive: flag };
    const tmp5 = buildTimelineTree(steps, obj3);
    value[str] = tmp5;
    tmp3 = tmp5;
  }
  return tmp3;
}
function isTurnWorkFrame(task_id) {
  let tmp = null == task_id.task_id;
  if (!tmp) {
    tmp = "" === task_id.task_id;
  }
  if (tmp) {
    let tmp2 = "error" === task_id.kind;
    if (!tmp2) {
      tmp2 = "terminal_error" === task_id.kind;
    }
    if (!tmp2) {
      let tmp3 = "node" === task_id.kind && null != task_id.node;
      if (tmp3) {
        let tmp4 = "node" === task_id.kind && null != task_id.node && null == task_id.task_id;
        if (tmp4) {
          tmp4 = "task" === task_id.node.node_kind || "task" === task_id.node.id;
          const tmp5 = "task" === task_id.node.node_kind || "task" === task_id.node.id;
        }
        tmp3 = !tmp4;
      }
      if (tmp3) {
        const node = task_id.node;
        let label_key;
        if (node != null) {
          label_key = node.label_key;
        }
        tmp3 = "testing_app" !== label_key;
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
}
let obj = {
  healthcheck_failed: _modDef3830.iwOTgo,
  preview_ready: _modDef3830.okkgSB,
  working: _modDef3830.t8skVB,
  error: _modDef3830.avt0ax,
  error_service_unavailable: _modDef3830.yreXyD,
  error_rate_limited: _modDef3830.d8lNBq,
  error_timeout: _modDef3830.t1R7Rt,
};
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTimelineTree.tsx");

export const describeNode = function describeNode(currentStepResult) {
  if (null != currentStepResult.labelText) {
    if ("" !== currentStepResult.labelText) {
      return currentStepResult.labelText;
    }
  }
  let t8skVB;
  if (null != currentStepResult.labelKey) {
    t8skVB = obj[currentStepResult.labelKey];
  }
  const intl = util.intl;
  if (t8skVB == null) {
    t8skVB = _modDef3830.t8skVB;
  }
  return intl.string(t8skVB);
};
export { buildTimelineTree };
export const currentStep = function currentStep(productId) {
  let tmp;
  const iter = productId[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = null == tmp;
    if (!tmp5) {
      tmp5 = tmp3.touched > tmp.touched;
    }
    if (tmp5) {
      tmp = nextResult;
    }
    continue;
  }
  return tmp;
};
export const streamedContent = function streamedContent(steps) {
  return scanTurnColumn(steps).items;
};
export { segmentDurations };
export { sharedTimelineTree };
export const turnSegments = function turnSegments(steps, arg1) {
  let hasItem;
  let tmp26;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  const items = (function sharedScan(steps) {
    value = weakMap.get(steps);
    if (null == value) {
      const tmp3 = scanTurnColumn(steps);
      const result = weakMap.set(steps, tmp3);
      value = tmp3;
    }
    return value;
  })(steps).items;
  sharedTimelineTree(steps, flag);
  const obj2 = segmentDurations(steps);
  const map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("message" === nextResult.type) {
      let result = map.set(tmp3.segment, tmp3);
    }
    continue;
  }
  const set = new Set();
  for (const item10041 of tmp7) {
    let addResult = set.add(item10041.segment);
    continue;
  }
  for (const item10051 of tmp9) {
    let addResult1 = set.add(item10051.task.segment);
    continue;
  }
  const found = items.find((type) => "todos" === type.type);
  let segment;
  if (found != null) {
    segment = found.segment;
  }
  let applyResult;
  if (null != segment) {
    const _Math = Math;
    const items1 = [segment];
    HermesBuiltin.arraySpread(tmp6, 1);
    const _Math2 = Math;
    applyResult = HermesBuiltin.apply(items1, Math);
  }
  const items2 = [0];
  if (null != applyResult) {
    const items3 = [applyResult];
    let items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(set, HermesBuiltin.arraySpread(map.keys(), 1)));
  const applyResult1 = Math.max.apply(items2);
  const items5 = [];
  let num2 = 0;
  if (0 <= applyResult1) {
    while (true) {
      value = map.get(num2);
      hasItem = set.has(num2);
      let tmp24 = null != value;
      if (!tmp24) {
        tmp24 = hasItem;
      }
      tmp26 = applyResult === num2;
      if (!tmp24) {
        tmp24 = tmp26;
      }
      if (tmp24) {
        break;
      } else {
        num2 = num2 + 1;
      }
    }
    let key;
    if (value != null) {
      key = value.key;
    }
    if (key == null) {
      const _HermesInternal = HermesInternal;
      key = "work-" + num2;
    }
    let obj3 = { key, index: num2 };
    if (null != value) {
      const obj4 = { prose: value };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    obj3.hasWork = hasItem;
    obj3.hasTodos = tmp26;
    if (obj2.has(num2)) {
      const obj6 = { durationMs: obj2.get(num2) };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    obj3 = items5.push(obj3);
  }
  return items5;
};
export const turnLifecycle = function turnLifecycle(arr, turnActive) {
  const found = arr.filter((hasWork) => hasWork.hasWork || hasWork.hasTodos);
  const atResult = found.at(-1);
  let index1;
  if (atResult != null) {
    index1 = atResult.index;
  }
  const atResult1 = arr.at(-1);
  if (atResult1 != null) {
    const index = atResult1.index;
  }
  let tmp4;
  if (turnActive.turnActive) {
    if (null != index1) {
      if (index1 === index) {
        tmp4 = index1;
      }
    }
  }
  if (null != index1) {
    obj = { lastWork: index1 };
    let obj2 = obj;
  } else {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  if (null != tmp4) {
    const obj4 = { open: tmp4 };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return {};
};
export const streamedMessages = function streamedMessages(arr) {
  let items = scanTurnColumn(arr).items;
  return items.flatMap((type) => {
    if ("message" === type.type) {
      obj = { key: null, content: null, segment: null };
      ({ key: obj.key, content: obj.content, segment: obj.segment } = type);
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
};
export const endsWithStreamedMessage = function endsWithStreamedMessage(arg0) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = arg0[diff];
      if (null != tmp2) {
        if ("assistant_delta" === tmp2.kind) {
          if (null != tmp2.message) {
            if ("" !== tmp2.message) {
              break;
            }
          }
        }
        let tmp4 = "node" === tmp2.kind && null != tmp2.node && null == tmp2.task_id;
        if (tmp4) {
          let tmp5 = "task" === tmp2.node.node_kind || "task" === tmp2.node.id;
          tmp4 = tmp5;
        }
        if (!tmp4) {
          if ("node" !== tmp2.kind) {
            let flag = false;
            return false;
          } else {
            let node = tmp2.node;
            let label_key;
            if (node != null) {
              label_key = node.label_key;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return true;
  }
  return false;
};
export const latestTodos = function latestTodos(steps) {
  let tmp2;
  let diff = steps.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = steps[diff];
      let kind;
      if (tmp2 != null) {
        kind = tmp2.kind;
      }
      if ("todos" === kind) {
        if (null == tmp2.task_id) {
          if (null != tmp2.items) {
            if (tmp2.items.length > 0) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return tmp2.items;
  }
  return null;
};

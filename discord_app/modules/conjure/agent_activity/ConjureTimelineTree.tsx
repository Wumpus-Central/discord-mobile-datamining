// === Module 17097: ConjureTimelineTree ===

// Module 17097 (ConjureTimelineTree)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import _slicedToArray from "module_32" /* 32 */;

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
  scanTurnColumn = undefined;
  c9 = undefined;
  c10 = undefined;
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
          const obj3 = { id, kind: "step", detail: [], detailDrivenBy: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
          const result = map1.set(combined, obj3);
          if (null != taskId) {
            value3 = map.get(taskId);
            if (null == value3) {
              const obj4 = { taskId, task: null, steps: null };
              const obj5 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
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
      let value4 = map.get(taskId);
      if (null == value4) {
        const obj7 = { taskId, task: null, steps: null };
        const obj8 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
        obj7.task = obj8;
        obj7.steps = [];
        const result2 = map.set(taskId, obj7);
        value4 = obj7;
      }
      task = value4.task;
    } else if (task == null) {
      const obj9 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
      task = obj9;
    }
    return task;
  }
  let items = [];
  const map = new Map();
  const map1 = new Map();
  let sum1 = 0;
  const segmentOf = scanTurnColumn(steps).segmentOf;
  scanTurnColumn = (function cancelledLaneIds(steps) {
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
  const size2 = (function legacyControlLineIds(steps) {
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
    let hasItem = 0 !== size.size;
    if (hasItem) {
      hasItem = "error" !== _undefined.kind;
    }
    if (hasItem) {
      hasItem = "terminal_error" !== _undefined.kind;
    }
    if (hasItem) {
      hasItem = null != _undefined.task_id;
    }
    if (hasItem) {
      hasItem = "" !== _undefined.task_id;
    }
    if (hasItem) {
      hasItem = size.has(_undefined.task_id);
    }
    if (hasItem) {
      return 0;
    } else {
      let hasItem1 = 0 !== size2.size;
      if (hasItem1) {
        hasItem1 = "node" === _undefined.kind;
      }
      if (hasItem1) {
        hasItem1 = null != _undefined.node;
      }
      if (hasItem1) {
        let tmp7 = null == _undefined.task_id;
        if (!tmp7) {
          tmp7 = "" === _undefined.task_id;
        }
        hasItem1 = tmp7;
      }
      if (hasItem1) {
        hasItem1 = size2.has(_undefined.node.id);
      }
      if (hasItem1) {
        return 0;
      } else {
        let num = segmentOf[c9];
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
            const tmp18Result = ensure(task_id, id, node_kind, num);
            const sum = sum1 + 1;
            sum1 = sum;
            tmp18Result.touched = sum;
            if (null != node.label_key) {
              tmp18Result.labelKey = node.label_key;
            }
            if (null != node.label_text) {
              tmp18Result.labelText = node.label_text;
            }
            if (null != node.group_label) {
              tmp18Result.groupLabel = node.group_label;
            }
            if (null != node.helper_name) {
              tmp18Result.helperName = node.helper_name;
            }
            if (null != node.helper_mark) {
              tmp18Result.helperMark = node.helper_mark;
            }
            if (null != node.todo_id) {
              tmp18Result.todoId = node.todo_id;
            }
            if (null != node.tier) {
              tmp18Result.tier = node.tier;
            }
            if (null != node.detail) {
              ({ detail: tmp23.detail, detail } = node);
              tmp18Result.detailDrivenBy = detail.map(() => null);
            }
            if (null != node.append_detail) {
              let driven_by = node.driven_by;
              if (driven_by == null) {
                driven_by = null;
              }
              items = [];
              HermesBuiltin.arraySpread(node.append_detail, HermesBuiltin.arraySpread(tmp18Result.detail, 0));
              tmp18Result.detail = items;
              const items1 = [];
              const append_detail = node.append_detail;
              HermesBuiltin.arraySpread(append_detail.map(() => driven_by), HermesBuiltin.arraySpread(tmp18Result.detailDrivenBy, 0));
              tmp18Result.detailDrivenBy = items1;
              const arraySpreadResult3 = HermesBuiltin.arraySpread(tmp18Result.detailDrivenBy, 0);
            }
            if (null != node.status) {
              tmp18Result.status = node.status;
            }
            if (null != node.duration) {
              tmp18Result.durationMs = node.duration;
            }
            if (null != node.screenshots) {
              tmp18Result.screenshots = node.screenshots;
            }
            if (null != node.browser_sessions) {
              tmp18Result.browserSessions = node.browser_sessions;
            }
            if (null != node.attachments) {
              tmp18Result.attachments = node.attachments;
            }
            return 0;
          }
        }
        if ("error" === _undefined.kind) {
          const _HermesInternal = HermesInternal;
          const tmp14 = ensure(undefined, "" + _undefined.kind + "-" + c9, "step", num);
          sum1 = sum1 + 1;
          tmp14.touched = sum1;
          tmp14.labelKey = "error";
          tmp14.status = "failed";
          if (tmp17) {
            const items2 = [_undefined.message];
            tmp14.detail = items2;
          }
          tmp17 = null != _undefined.message && "" !== _undefined.message;
        }
      }
    }
  }
  const entries = steps.entries();
  while (tmp3 !== undefined) {
    let tmp6 = map1(tmp4, 2);
    [c9, c10] = tmp6;
    let _loopResult = _loop();
    continue;
  }
  let items1 = [...map.values()];
  let iter = items1[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp10 = flag;
    if (!flag) {
      tmp10 = "running" !== tmp9.task.status;
    }
    if (!tmp10) {
      tmp9.task.status = "incomplete";
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
  return { steps: items, tasks: items1 };
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
let obj = { healthcheck_failed: _modDef3827.iwOTgo, preview_ready: _modDef3827.okkgSB, working: _modDef3827.t8skVB, error: _modDef3827.avt0ax };
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
    t8skVB = _modDef3827.t8skVB;
  }
  return intl.string(t8skVB);
};
export const describeTaskStatus = function describeTaskStatus(arg0) {
  if ("running" === arg0) {
    const intl5 = util.intl;
    return intl5.string(_modDef3827.jTwZFY);
  } else if ("done" === arg0) {
    const intl4 = util.intl;
    return intl4.string(_modDef3827.keYz9o);
  } else if ("failed" === arg0) {
    const intl3 = util.intl;
    return intl3.string(_modDef3827["RoY/lg"]);
  } else if ("cancelled" === arg0) {
    const intl2 = util.intl;
    return intl2.string(_modDef3827["HZw/I/"]);
  } else if ("incomplete" === arg0) {
    const intl = util.intl;
    return intl.string(_modDef3827.sf2UHL);
  }
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
  let tmp19;
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
  for (const item10041 of tmp6) {
    let addResult = set.add(item10041.segment);
    continue;
  }
  for (const item10051 of tmp8) {
    let addResult1 = set.add(item10051.task.segment);
    continue;
  }
  const found = items.find((type) => "todos" === type.type);
  let segment;
  if (found != null) {
    segment = found.segment;
  }
  const items1 = [0];
  if (null != segment) {
    const items2 = [segment];
    let items3 = items2;
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(set, HermesBuiltin.arraySpread(map.keys(), 1)));
  const applyResult = Math.max.apply(items1);
  const items4 = [];
  let num = 0;
  if (0 <= applyResult) {
    while (true) {
      value = map.get(num);
      hasItem = set.has(num);
      let tmp17 = null != value;
      if (!tmp17) {
        tmp17 = hasItem;
      }
      tmp19 = segment === num;
      if (!tmp17) {
        tmp17 = tmp19;
      }
      if (tmp17) {
        break;
      } else {
        num = num + 1;
      }
    }
    let key;
    if (value != null) {
      key = value.key;
    }
    if (key == null) {
      const _HermesInternal = HermesInternal;
      key = "work-" + num;
    }
    let obj3 = { key, index: num };
    if (null != value) {
      const obj4 = { prose: value };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    obj3.hasWork = hasItem;
    obj3.hasTodos = tmp19;
    if (obj2.has(num)) {
      const obj6 = { durationMs: obj2.get(num) };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    obj3 = items4.push(obj3);
  }
  return items4;
};
export const turnLifecycle = function turnLifecycle(memo1, turnActive) {
  const found = memo1.filter((hasWork) => hasWork.hasWork || hasWork.hasTodos);
  const atResult = found.at(-1);
  let index1;
  if (atResult != null) {
    index1 = atResult.index;
  }
  const atResult1 = memo1.at(-1);
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
// === Module 16692: ConjureTimelineTree ===

// Module 16692 (ConjureTimelineTree)
import intl6 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, map1, set;

function isLegacyControlLineNode(label_key) {
  label_key = undefined;
  if (label_key != null) {
    label_key = label_key.label_key;
  }
  return "testing_app" === label_key;
}
function buildTimelineTree(steps, arg1) {
  let _undefined;
  let c10;
  let c9;
  let obj4;
  let tmp4;
  function cancelledLaneIds(steps) {
    set = new Set();
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
  }
  function legacyControlLineIds(steps) {
    set = new Set();
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
  }
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
    let obj5;
    let obj8;
    if ("task" !== arg2) {
      if ("task" !== id) {
        let str = taskId;
        if (taskId == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + str + " " + id;
        const value = map1.get(combined);
        if (null != value) {
          return value;
        } else {
          const obj3 = { id, kind: "step", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
          const result = map1.set(combined, obj3);
          if (null != taskId) {
            let value3 = map.get(taskId);
            if (null == value3) {
              const obj4 = { taskId, task: obj5, steps: [] };
              obj5 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
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
        const obj7 = { taskId, task: obj8, steps: [] };
        obj8 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
        const result2 = map.set(taskId, obj7);
        value4 = obj7;
      }
      task = value4.task;
    } else if (task == null) {
      task = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
      const obj9 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
    }
    return task;
  }
  let items = [];
  map = new Map();
  map1 = new Map();
  let sum1 = 0;
  const segmentOf = scanTurnColumn(steps).segmentOf;
  scanTurnColumn = cancelledLaneIds(steps);
  const size2 = legacyControlLineIds(steps);
  function _loop() {
    let detail;
    let id;
    let node;
    let node_kind;
    let task_id;
    const hasItem = 0 !== size.size && "error" !== _undefined.kind && "terminal_error" !== _undefined.kind && null != _undefined.task_id && "" !== _undefined.task_id && size.has(_undefined.task_id);
    if (hasItem) {
      return 0;
    } else {
      let hasItem1 = 0 !== size2.size && "node" === _undefined.kind && null != _undefined.node;
      if (hasItem1) {
        hasItem1 = null == _undefined.task_id || "" === _undefined.task_id;
        const tmp7 = null == _undefined.task_id || "" === _undefined.task_id;
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
              HermesBuiltin.arraySpread(items, node.append_detail, HermesBuiltin.arraySpread(items, tmp18Result.detail, 0));
              tmp18Result.detail = items;
              const items1 = [];
              const append_detail = node.append_detail;
              const arraySpreadResult3 = HermesBuiltin.arraySpread(items1, tmp18Result.detailDrivenBy, 0);
              HermesBuiltin.arraySpread(items1, append_detail.map(() => driven_by), arraySpreadResult3);
              tmp18Result.detailDrivenBy = items1;
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
          const tmp17 = null != _undefined.message && "" !== _undefined.message;
          if (tmp17) {
            const items2 = [_undefined.message];
            tmp14.detail = items2;
          }
        }
      }
    }
  }
  const entries = steps.entries();
  let tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp5 = map1;
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
    if (!tmp10) {
      let tmp11 = nextResult;
      tmp10 = "running" !== tmp9.task.status;
    }
    if (!tmp10) {
      let tmp12 = nextResult;
      tmp9.task.status = "incomplete";
    }
    continue;
  }
  const obj2 = { steps: items, tasks: items1 };
  if (null != task) {
    let obj3 = { turn: task };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  return obj2;
}
function scanTurnColumn(arr) {
  let tmp20;
  let tmp8;
  let tmp9;
  const items = [];
  const segmentOf = [];
  let tmp = null;
  let tmp2 = null;
  let num = 0;
  const entries = arr.entries();
  const tmp4 = entries[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let segment = tmp9.segment;
    let tmp11 = segment;
    let push = segmentOf.push;
    if (segment == null) {
      segment = num;
    }
    arr = push(segment);
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
                  let obj2 = { type: "message", key: "message-" + tmp8, segment: tmp33, content: tmp28 };
                  let _HermesInternal2 = HermesInternal;
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
            obj = { type: "todos", key: "todos-" + tmp8, segment: tmp20, todos: tmp17 };
            let _HermesInternal = HermesInternal;
            tmp20 = tmp11;
            if (tmp11 == null) {
              tmp20 = num;
            }
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
  map = new Map();
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
function isTurnWorkFrame(task_id) {
  let tmp = null == task_id.task_id || "" === task_id.task_id;
  if (tmp) {
    let tmp2 = "error" === task_id.kind || "terminal_error" === task_id.kind;
    if (!tmp2) {
      let tmp3 = "node" === task_id.kind && null != task_id.node;
      if (tmp3) {
        let tmp4 = "node" === task_id.kind && null != task_id.node && null == task_id.task_id;
        if (tmp4) {
          tmp4 = "task" === task_id.node.node_kind || "task" === task_id.node.id;
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
let obj = { healthcheck_failed: _modDef3753.iwOTgo, preview_ready: _modDef3753.okkgSB, working: _modDef3753.t8skVB, error: _modDef3753.avt0ax };
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
  const intl = intl6.intl;
  const string = intl.string;
  if (t8skVB == null) {
    t8skVB = _modDef3753.t8skVB;
  }
  return string(t8skVB);
};
export const describeTaskStatus = function describeTaskStatus(arg0) {
  if ("running" === arg0) {
    const intl5 = intl6.intl;
    return intl5.string(_modDef3753.jTwZFY);
  } else if ("done" === arg0) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3753.keYz9o);
  } else if ("failed" === arg0) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3753["RoY/lg"]);
  } else if ("cancelled" === arg0) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3753["HZw/I/"]);
  } else if ("incomplete" === arg0) {
    const intl = intl6.intl;
    return intl.string(_modDef3753.sf2UHL);
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
export const turnSegments = function turnSegments(steps, arg1) {
  let items3;
  let num;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  const items = scanTurnColumn(steps).items;
  const tmp = buildTimelineTree(steps, { turnActive: flag });
  const obj2 = segmentDurations(steps);
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("message" === nextResult.type) {
      let result = map.set(tmp3.segment, tmp3);
    }
    continue;
  }
  set = new Set();
  steps = tmp.steps;
  for (const item10042 of steps) {
    let addResult = set.add(item10042.segment);
    continue;
  }
  const tasks = tmp.tasks;
  for (const item10052 of tasks) {
    let addResult1 = set.add(item10052.task.segment);
    continue;
  }
  const found = items.find((type) => "todos" === type.type);
  let segment;
  if (found != null) {
    segment = found.segment;
  }
  const _Math = Math;
  const items1 = [0, ...set];
  if (null != segment) {
    const items2 = [segment];
    items3 = items2;
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items1, items3, tmp10);
  const items4 = [];
  const applyResult = max.apply(items1);
  for (let num = 0; num <= applyResult; num = num + 1) {
    let value = map.get(num);
    let hasItem = set.has(num);
    let tmp15 = null != value;
    if (!tmp15) {
      tmp15 = hasItem;
    }
    let tmp17 = segment === num;
    if (!tmp15) {
      tmp15 = tmp17;
    }
    if (tmp15) {
      let obj5;
      let obj7;
      let key;
      let push = items4.push;
      if (value != null) {
        key = value.key;
      }
      if (key == null) {
        let _HermesInternal = HermesInternal;
        key = "work-" + num;
      }
      let obj3 = { key, index: num, hasWork: hasItem, hasTodos: tmp17 };
      if (null != value) {
        let obj4 = { prose: value };
        obj5 = obj4;
      } else {
        obj5 = {};
      }
      let merged = Object.assign(obj5);
      if (obj2.has(num)) {
        let obj6 = { durationMs: obj2.get(num) };
        obj7 = obj6;
      } else {
        obj7 = {};
      }
      let merged1 = Object.assign(obj7);
      let arr = push(obj3);
    }
  }
  return items4;
};
export const turnLifecycle = function turnLifecycle(memo1, turnActive) {
  let index;
  let obj2;
  let obj5;
  turnActive = turnActive.turnActive;
  const found = memo1.filter((hasWork) => hasWork.hasWork || hasWork.hasTodos);
  const atResult = found.at(-1);
  let index1;
  if (atResult != null) {
    index1 = atResult.index;
  }
  const atResult1 = memo1.at(-1);
  if (atResult1 != null) {
    index = atResult1.index;
  }
  let tmp4;
  if (turnActive) {
    if (null != index1) {
      if (index1 === index) {
        tmp4 = index1;
      }
    }
  }
  if (null != index1) {
    obj2 = { lastWork: index1 };
    obj = { lastWork: index1 };
  } else {
    obj2 = {};
  }
  const obj3 = {};
  const merged = Object.assign(obj2);
  if (null != tmp4) {
    obj5 = { open: tmp4 };
    const obj4 = { open: tmp4 };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return obj3;
};
export const streamedMessages = function streamedMessages(arr) {
  let items = scanTurnColumn(arr).items;
  return items.flatMap((type) => {
    let items1;
    if ("message" === type.type) {
      obj = { key: null, content: null, segment: null };
      ({ key: obj.key, content: obj.content, segment: obj.segment } = type);
      const items = [obj];
      items1 = items;
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
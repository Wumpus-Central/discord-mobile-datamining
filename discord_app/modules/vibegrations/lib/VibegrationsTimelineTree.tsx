// === Module 16603: VibegrationsTimelineTree ===

// Module 16603 (VibegrationsTimelineTree)
import util from "util" /* 1114 */;
import _modDef3547 from "module_3547" /* 3547 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
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
  c8 = undefined;
  c9 = undefined;
  function ensure(taskId, id, arg2, segment) {
    if ("task" !== arg2) {
      if ("task" !== id) {
        let str = taskId;
        if (taskId == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + str + " " + id;
        obj = map1;
        value = map1.get(combined);
        if (null != value) {
          return value;
        } else {
          obj = { id, kind: "step", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
          const result = obj.set(combined, obj);
          if (null != taskId) {
            let obj1 = map;
            value = map.get(taskId);
            if (null == value) {
              obj = { taskId, task: null, steps: null };
              obj1 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
              obj.task = obj1;
              obj.steps = [];
              const result1 = obj1.set(taskId, obj);
              value = obj;
            }
            const steps = value.steps;
            steps.push(obj);
          } else {
            items.push(obj);
          }
          return obj;
        }
      }
    }
    if (null != taskId) {
      let value1 = map.get(taskId);
      if (null == value1) {
        const obj2 = { taskId, task: null, steps: null };
        const obj3 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
        obj2.task = obj3;
        obj2.steps = [];
        const result2 = map.set(taskId, obj2);
        value1 = obj2;
      }
      task = value1.task;
    } else if (task == null) {
      const obj4 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], status: "running", screenshots: [], attachments: [], touched: 0, segment };
      task = obj4;
    }
    return task;
  }
  let items = [];
  const map = new Map();
  new Map();
  let sum1 = 0;
  const segmentOf = scanTurnColumn(steps).segmentOf;
  const size = (function cancelledLaneIds(steps) {
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
      let num = segmentOf[c8];
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
          const tmp14Result = ensure(task_id, id, node_kind, num);
          const sum = sum1 + 1;
          sum1 = sum;
          tmp14Result.touched = sum;
          if (null != node.label_key) {
            tmp14Result.labelKey = node.label_key;
          }
          if (null != node.label_text) {
            tmp14Result.labelText = node.label_text;
          }
          if (null != node.group_label) {
            tmp14Result.groupLabel = node.group_label;
          }
          if (null != node.helper_name) {
            tmp14Result.helperName = node.helper_name;
          }
          if (null != node.helper_mark) {
            tmp14Result.helperMark = node.helper_mark;
          }
          if (null != node.todo_id) {
            tmp14Result.todoId = node.todo_id;
          }
          if (null != node.detail) {
            ({ detail: tmp19.detail, detail } = node);
            tmp14Result.detailDrivenBy = detail.map(() => null);
          }
          if (null != node.append_detail) {
            let driven_by = node.driven_by;
            if (driven_by == null) {
              driven_by = null;
            }
            items = [];
            HermesBuiltin.arraySpread(node.append_detail, HermesBuiltin.arraySpread(tmp14Result.detail, 0));
            tmp14Result.detail = items;
            const items1 = [];
            const append_detail = node.append_detail;
            const arraySpreadResult = HermesBuiltin.arraySpread(tmp14Result.detailDrivenBy, 0);
            HermesBuiltin.arraySpread(append_detail.map(() => driven_by), arraySpreadResult);
            tmp14Result.detailDrivenBy = items1;
          }
          if (null != node.status) {
            tmp14Result.status = node.status;
          }
          if (null != node.duration) {
            tmp14Result.durationMs = node.duration;
          }
          if (null != node.screenshots) {
            tmp14Result.screenshots = node.screenshots;
          }
          if (null != node.attachments) {
            tmp14Result.attachments = node.attachments;
          }
          return 0;
        }
      }
      if ("error" === _undefined.kind) {
        const _HermesInternal = HermesInternal;
        const tmp10 = ensure(undefined, "" + _undefined.kind + "-" + c8, "step", num);
        sum1 = sum1 + 1;
        tmp10.touched = sum1;
        tmp10.labelKey = "error";
        tmp10.status = "failed";
        if (tmp13) {
          const items2 = [_undefined.message];
          tmp10.detail = items2;
        }
        tmp13 = null != _undefined.message && "" !== _undefined.message;
      }
    }
  }
  const entries = steps.entries();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [c8, c9] = tmp6;
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
  obj = { steps: items, tasks: items1 };
  if (null != task) {
    obj = { turn: task };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  return obj;
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
                  obj = { type: "message", key: null, segment: null, content: null };
                  let _HermesInternal2 = HermesInternal;
                  obj.key = "message-" + tmp8;
                  obj.segment = tmp33;
                  obj.content = tmp28;
                  tmp = obj;
                  arr = items.push(obj);
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
            let arr1 = items.push(obj);
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
function segmentDurations(arr) {
  const map = new Map();
  const iter = arr[Symbol.iterator]();
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
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
}
let obj = { assembling: _modDef3547["9G3ZmA"], installing_deps: _modDef3547.VZuRug, building: _modDef3547["s+ylXP"], bundling: _modDef3547.rEQlMx, committing: _modDef3547.Yvyw1H, built: _modDef3547.hOcVAj, build_error: _modDef3547["6L9Vwt"], healthchecking: _modDef3547.sz8yAj, awaiting_auth: _modDef3547["orD+xo"], healthcheck_passed: _modDef3547["x+sqTG"], healthcheck_failed: _modDef3547.FUWbq1, deploying: _modDef3547.wcXX8Z, preview_ready: _modDef3547["78YNh7"], working: _modDef3547.nv6pUM, error: _modDef3547.j3hBoA };
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTimelineTree.tsx");

export const describeNode = function describeNode(labelText) {
  if (null != labelText.labelText) {
    if ("" !== labelText.labelText) {
      return labelText.labelText;
    }
  }
  let nv6pUM;
  if (null != labelText.labelKey) {
    nv6pUM = obj[labelText.labelKey];
  }
  const intl = util.intl;
  if (nv6pUM == null) {
    nv6pUM = _modDef3547.nv6pUM;
  }
  return intl.string(nv6pUM);
};
export const describeTaskStatus = function describeTaskStatus(status) {
  if ("running" === status) {
    const intl5 = util.intl;
    return intl5.string(_modDef3547["fW7T+d"]);
  } else if ("done" === status) {
    const intl4 = util.intl;
    return intl4.string(_modDef3547.X3c4hc);
  } else if ("failed" === status) {
    const intl3 = util.intl;
    return intl3.string(_modDef3547.LK4Wsd);
  } else if ("cancelled" === status) {
    const intl2 = util.intl;
    return intl2.string(_modDef3547.msWvKA);
  } else if ("incomplete" === status) {
    const intl = util.intl;
    return intl.string(_modDef3547.esfcU6);
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
export const streamedContent = function streamedContent(arr) {
  return scanTurnColumn(arr).items;
};
export { segmentDurations };
export const turnSegments = function turnSegments(arr) {
  let hasItem;
  let tmp19;
  if (arr === undefined) {
    arr = {};
  }
  let flag = arr.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  const items = scanTurnColumn(arr).items;
  buildTimelineTree(arr, { turnActive: flag });
  let obj1 = segmentDurations(arr);
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
  for (const item10042 of tmp6) {
    let addResult = set.add(item10042.segment);
    continue;
  }
  for (const item10052 of tmp8) {
    let addResult1 = set.add(item10052.task.segment);
    continue;
  }
  const found = items.find((type) => "todos" === type.type);
  let segment;
  if (found != null) {
    segment = found.segment;
  }
  const items1 = [0];
  let arraySpreadResult = HermesBuiltin.arraySpread(set, HermesBuiltin.arraySpread(map.keys(), 1));
  if (null != segment) {
    const items2 = [segment];
    let items3 = items2;
  } else {
    items3 = [];
  }
  arraySpreadResult = HermesBuiltin.arraySpread(items3, arraySpreadResult);
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
    arr = { key, index: num };
    if (null != value) {
      obj = { prose: value };
      obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged = Object.assign(obj1);
    arr.hasWork = hasItem;
    arr.hasTodos = tmp19;
    if (obj1.has(num)) {
      const obj2 = { durationMs: obj1.get(num) };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    arr = items4.push(arr);
  }
  return items4;
};
export const turnLifecycle = function turnLifecycle(arr, turnActive) {
  const found = arr.filter((hasWork) => hasWork.hasWork || hasWork.hasTodos);
  const atResult = found.at(-1);
  let index;
  if (atResult != null) {
    index = atResult.index;
  }
  const atResult1 = arr.at(-1);
  if (atResult1 != null) {
    index = atResult1.index;
  }
  let tmp4;
  if (turnActive.turnActive) {
    if (null != index) {
      if (index === index) {
        tmp4 = index;
      }
    }
  }
  if (null != index) {
    obj = { lastWork: index };
  } else {
    obj = {};
  }
  const merged = Object.assign(obj);
  if (null != tmp4) {
    const obj2 = { open: tmp4 };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged1 = Object.assign(obj3);
  return {};
};
export const streamedMessages = function streamedMessages(steps) {
  let items = scanTurnColumn(steps).items;
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
          let flag = false;
          return false;
        }
      }
      diff = diff - 1;
    }
    return true;
  }
  return false;
};
export const announcementNotes = function announcementNotes(steps) {
  return steps.flatMap((kind, index) => {
    if ("announcement" === kind.kind) {
      if (null != kind.message) {
        if ("" !== kind.message) {
          obj = { key: null, content: null };
          const _HermesInternal = HermesInternal;
          obj.key = "note-" + index;
          obj.content = kind.message;
          const items = [obj];
        }
        return [];
      }
    }
  });
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
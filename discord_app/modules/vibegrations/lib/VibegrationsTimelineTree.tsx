// === Module 16036: buildTimelineTree ===

// Module 16036 (buildTimelineTree)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3469 */;
import closure_3 from "_slicedToArray" /* 32 */;

require = arg1;
function buildTimelineTree(steps, arg1) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  c0 = undefined;
  let map;
  map1 = undefined;
  c4 = undefined;
  let segmentOf;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  function ensure(steps) {
    if ("task" !== arg2) {
      if ("task" !== arg1) {
        let str = steps;
        if (steps == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + str + " " + arg1;
        obj = map1;
        let value = map1.get(combined);
        if (null != value) {
          return value;
        } else {
          obj = { id: null, kind: "step", detail: null, detailDrivenBy: null, status: "running", screenshots: null, attachments: null, touched: 0, segment: null };
          obj[0] = arg1;
          obj[2] = [];
          obj[3] = [];
          obj[5] = [];
          obj[6] = [];
          obj[8] = arg3;
          const result = obj.set(combined, obj);
          if (null != steps) {
            obj1 = map;
            value = map.get(steps);
            if (null == value) {
              obj = { taskId: null, task: null, steps: null };
              obj[0] = steps;
              obj1 = { id: "task", kind: "task", detail: null, detailDrivenBy: null, status: "running", screenshots: null, attachments: null, touched: 0, segment: null };
              obj1[2] = [];
              obj1[3] = [];
              obj1[5] = [];
              obj1[6] = [];
              obj1[8] = arg3;
              obj[1] = obj1;
              obj[2] = [];
              const result1 = obj1.set(steps, obj);
              value = obj;
            }
            steps = value.steps;
            steps.push(obj);
          } else {
            items.push(obj);
          }
          return obj;
        }
      }
    }
    if (null != steps) {
      let value1 = map.get(steps);
      if (null == value1) {
        const obj2 = { taskId: null, task: null, steps: null };
        obj2[0] = steps;
        const obj3 = { id: "task", kind: "task", detail: null, detailDrivenBy: null, status: "running", screenshots: null, attachments: null, touched: 0, segment: null };
        obj3[2] = [];
        obj3[3] = [];
        obj3[5] = [];
        obj3[6] = [];
        obj3[8] = arg3;
        obj2[1] = obj3;
        obj2[2] = [];
        const result2 = obj6.set(steps, obj2);
        value1 = obj2;
      }
      let task = value1.task;
      obj6 = map;
    } else if (task == null) {
      const obj4 = { id: "task", kind: "task", detail: null, detailDrivenBy: null, status: "running", screenshots: null, attachments: null, touched: 0, segment: null };
      obj4[2] = [];
      obj4[3] = [];
      obj4[5] = [];
      obj4[6] = [];
      obj4[8] = arg3;
      task = obj4;
    }
    return task;
  }
  let items = [];
  map = new Map();
  map1 = new Map();
  c4 = 0;
  segmentOf = ensure(steps).segmentOf;
  closure_7 = (function cancelledLaneIds(steps) {
    const set = new Set();
    const iter = steps[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if ("node" === nextResult.kind) {
        let tmp3 = nextResult;
        if (null != tmp2.node) {
          let tmp4 = nextResult;
          let task_id = tmp2.task_id;
          let tmp5 = task_id;
          let tmp6 = null != task_id;
          if (tmp6) {
            let tmp7 = task_id;
            tmp6 = "" !== tmp5;
          }
          if (tmp6) {
            let tmp8 = nextResult;
            let tmp9 = "task" !== tmp2.node.node_kind;
            if (tmp9) {
              let tmp10 = nextResult;
              tmp9 = "task" !== tmp2.node.id;
            }
            if (!tmp9) {
              let tmp11 = nextResult;
              if ("cancelled" === tmp2.node.status) {
                let tmp12 = task_id;
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
      hasItem = "error" !== tmp.kind;
    }
    if (hasItem) {
      hasItem = "terminal_error" !== tmp.kind;
    }
    if (hasItem) {
      hasItem = null != tmp.task_id;
    }
    if (hasItem) {
      hasItem = "" !== tmp.task_id;
    }
    if (hasItem) {
      hasItem = obj.has(tmp.task_id);
    }
    if (hasItem) {
      return 0;
    } else {
      let num = segmentOf[c8];
      if (num == null) {
        num = 0;
      }
      if ("node" === tmp.kind) {
        if (null != tmp.node) {
          ({ node, task_id } = tmp);
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
            let arraySpreadResult = HermesBuiltin.arraySpread(node.append_detail, HermesBuiltin.arraySpread(tmp14Result.detail, 0));
            tmp14Result.detail = items;
            const items1 = [];
            const append_detail = node.append_detail;
            arraySpreadResult = HermesBuiltin.arraySpread(tmp14Result.detailDrivenBy, 0);
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
      if ("error" === tmp.kind) {
        const _HermesInternal = HermesInternal;
        const tmp10 = ensure(undefined, "" + tmp.kind + "-" + c8, "step", num);
        sum1 = sum1 + 1;
        tmp10.touched = sum1;
        tmp10.labelKey = "error";
        tmp10.status = "failed";
        if (tmp13) {
          const items2 = [tmp.message];
          tmp10.detail = items2;
        }
        tmp13 = null != tmp.message && "" !== tmp.message;
      }
    }
    obj = size;
  }
  const entries = steps.entries();
  while (tmp3 !== undefined) {
    let tmp5 = map1;
    let tmp6 = map1(tmp4, 2);
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
      let tmp11 = nextResult;
      tmp10 = "running" !== tmp9.task.status;
    }
    if (!tmp10) {
      let tmp12 = nextResult;
      tmp9.task.status = "incomplete";
    }
    continue;
  }
  obj = { steps: items, tasks: items1 };
  if (null != c0) {
    obj = { turn: null };
    obj[0] = c0;
    obj1 = obj;
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
    let tmp6 = callback;
    let tmp7 = callback(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let tmp10 = tmp9;
    let segment = tmp9.segment;
    let tmp11 = segment;
    if (segment == null) {
      segment = num;
    }
    arr = segmentOf.push(segment);
    let tmp13 = tmp9;
    if ("thinking" !== tmp10.kind) {
      let tmp38 = isTurnWorkFrame;
      let tmp39 = tmp9;
      if (!isTurnWorkFrame(tmp10)) {
        let tmp14 = tmp9;
        if ("todos" !== tmp10.kind) {
          let tmp25 = tmp9;
          if ("assistant_delta" === tmp10.kind) {
            let tmp41 = tmp9;
            if (null == tmp10.task_id) {
              let tmp27 = tmp9;
              let str = tmp10.message;
              if (str == null) {
                str = "";
              }
              let tmp28 = str;
              if ("" !== str) {
                let tmp29 = tmp;
                if (null == tmp) {
                  let tmp32 = num;
                  num = num + 1;
                  let tmp33 = tmp11;
                  if (tmp11 == null) {
                    tmp33 = num;
                  }
                  let tmp34 = tmp8;
                  segmentOf[tmp8] = tmp33;
                  obj = { type: "message", key: null, segment: null, content: null };
                  let _HermesInternal2 = HermesInternal;
                  obj[1] = "message-" + tmp8;
                  obj[2] = tmp33;
                  let tmp35 = str;
                  obj[3] = tmp28;
                  tmp = obj;
                  arr = items.push(obj);
                } else {
                  let tmp30 = tmp;
                  let tmp31 = str;
                  tmp.content = tmp28;
                }
              }
              let tmp37 = tmp9;
              if (true === tmp10.message_finished) {
                tmp = null;
              }
            } else {
              let tmp26 = tmp9;
            }
          }
        } else {
          let tmp40 = tmp9;
          if (null != tmp10.task_id) {
            let tmp15 = tmp9;
          }
          let tmp16 = tmp9;
          let items2 = tmp10.items;
          if (items2 == null) {
            items2 = [];
          }
          let tmp17 = items2;
          if (0 === items2.length) {
            continue;
          } else {
            let tmp18 = tmp2;
            if (null != tmp2) {
              let tmp23 = tmp2;
              let tmp24 = items2;
              tmp2.todos = tmp17;
            } else {
              obj = { type: "todos", key: null, segment: null, todos: null };
              let tmp19 = tmp8;
              let _HermesInternal = HermesInternal;
              obj[1] = "todos-" + tmp8;
              let tmp20 = tmp11;
              if (tmp11 == null) {
                tmp20 = num;
              }
              obj[2] = tmp20;
              let tmp21 = items2;
              obj[3] = tmp17;
              tmp2 = obj;
              let arr1 = items.push(obj);
            }
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
      let tmp3 = nextResult;
      let tmp4 = null != tmp2.task_id;
      if (tmp4) {
        let tmp5 = nextResult;
        tmp4 = "" !== tmp2.task_id;
      }
      if (!tmp4) {
        let tmp6 = nextResult;
        let tmp7 = null != tmp2.segment;
        if (tmp7) {
          let tmp8 = nextResult;
          tmp7 = null != tmp2.duration;
        }
        if (tmp7) {
          let tmp9 = nextResult;
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
let obj = { assembling: messagesProxyDefault["9G3ZmA"], installing_deps: messagesProxyDefault.VZuRug, building: messagesProxyDefault["s+ylXP"], bundling: messagesProxyDefault.rEQlMx, committing: messagesProxyDefault.Yvyw1H, built: messagesProxyDefault.hOcVAj, build_error: messagesProxyDefault["6L9Vwt"], healthchecking: messagesProxyDefault.sz8yAj, awaiting_auth: messagesProxyDefault["orD+xo"], healthcheck_passed: messagesProxyDefault["x+sqTG"], healthcheck_failed: messagesProxyDefault.FUWbq1, deploying: messagesProxyDefault.wcXX8Z, preview_ready: messagesProxyDefault["78YNh7"], working: messagesProxyDefault.nv6pUM, error: messagesProxyDefault.j3hBoA };
let result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsTimelineTree.tsx");

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
  const intl = getSystemLocale.intl;
  if (nv6pUM == null) {
    nv6pUM = messagesProxyDefault.nv6pUM;
  }
  return intl.string(nv6pUM);
};
export const describeTaskStatus = function describeTaskStatus(status) {
  if ("running" === status) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(messagesProxyDefault["fW7T+d"]);
  } else if ("done" === status) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(messagesProxyDefault.X3c4hc);
  } else if ("failed" === status) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(messagesProxyDefault.LK4Wsd);
  } else if ("cancelled" === status) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(messagesProxyDefault.msWvKA);
  } else if ("incomplete" === status) {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.esfcU6);
  }
};
export { buildTimelineTree };
export const currentStep = function currentStep(arg0) {
  let tmp;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = tmp;
    let tmp5 = null == tmp;
    if (!tmp5) {
      let tmp6 = nextResult;
      let tmp7 = tmp;
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
export const turnSegments = function turnSegments(steps) {
  let hasItem;
  let tmp19;
  let value;
  let arr = arg1;
  if (arg1 === undefined) {
    arr = {};
  }
  let flag = arr.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  const items = scanTurnColumn(steps).items;
  buildTimelineTree(steps, { turnActive: flag });
  obj1 = segmentDurations(steps);
  const map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("message" === nextResult.type) {
      let tmp4 = nextResult;
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
      let tmp18 = num;
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
    arr = { key: null, index: null };
    arr[0] = key;
    arr[1] = num;
    if (null != value) {
      obj = { prose: null };
      obj[0] = value;
      obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged = Object.assign(obj1);
    arr.hasWork = hasItem;
    arr.hasTodos = tmp19;
    if (obj1.has(num)) {
      const obj2 = { durationMs: null };
      obj2[0] = obj1.get(num);
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
    obj = { lastWork: null };
    obj[0] = index;
  } else {
    obj = {};
  }
  const merged = Object.assign(obj);
  if (null != tmp4) {
    const obj2 = { open: null };
    obj2[0] = tmp4;
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
      ({ key: obj[0], content: obj[1], segment: obj[2] } = type);
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
      let tmp3 = diff;
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
  return steps.flatMap((kind) => {
    if ("announcement" === kind.kind) {
      if (null != kind.message) {
        if ("" !== kind.message) {
          obj = { key: null, content: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "note-" + arg1;
          obj[1] = kind.message;
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
      let tmp3 = diff;
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
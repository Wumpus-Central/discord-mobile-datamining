// === Module 16225: GuildsBarDnDStore ===

// Module 16225 (GuildsBarDnDStore)
import react from "react" /* 576 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import react_native from "react-native" /* 1259 */;
import _slicedToArray from "_slicedToArray" /* 4492 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import module_1254 from "module_1254" /* 1254 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const GuildsNodeType = SortedGuildStore.GuildsNodeType;
const INITIAL_GESTURE_STATE = { mode: null, initialX: 0, initialY: 0, absoluteX: 0, absoluteY: 0 };
let c5 = -1;
const withEqualityFn = module_1254.createWithEqualityFn((arg0, arg1) => {
  let closure_5;
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  _require = arg0;
  let closure_1 = arg1;
  obj = {
    dragSpecs: "Boolean",
    overSpecs: "duration",
    dropSpecs: "toCharArray$esjava$1",
    dragRegion: obj2.makeMutable({ min: 0, max: 0 }),
    gestureState: obj3.makeMutable(obj),
    dragDropInProgress: obj4.makeMutable(false),
    listInsets: obj5.makeMutable({ start: 0, end: 0 }),
    scrollPosition: obj6.makeMutable(0),
    windowSize: "\u{1F44F}",
    setStateShallow(obj) {
      closure_0 = obj;
      const tmp = closure_1();
      closure_1 = tmp;
      for (const key10006 in obj) {
        if (tmp[key10006] === obj[key10006]) {
          continue;
        } else {
          obj = closure_0(dependencyMap[3]);
          let batchUpdatesResult = obj.batchUpdates(() => {
            obj = {};
            const merged = Object.assign(closure_1);
            const merged1 = Object.assign(closure_0);
            return closure_0(obj);
          });
        }
      }
    },
    dropStart(newDropSpec) {
      let dropSpecs;
      let gestureState;
      let timeout;
      dropSpecs = newDropSpec;
      const tmp = gestureState();
      ({ dropSpecs, gestureState } = tmp);
      let obj = closure_1(dependencyMap[4]);
      const obj2 = { category: "GuildsBarGesture", message: "dropStart started", data: { newDropSpec, dropSpecs, gestureState: gestureState.get() } };
      ({ newDropSpec, dropSpecs, gestureState: gestureState.get() });
      obj.addBreadcrumb(obj2);
      if (null != dropSpecs) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress");
        throw error;
      } else {
        const obj4 = dropSpecs(dependencyMap[3]);
        obj4.batchUpdates(() => {
          const obj = { dropSpecs, dragSpecs: "Array", overSpecs: "toCharArray$esjava$1" };
          return dropSpecs(obj);
        });
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          const value = gestureState.get();
          if ("drag" === value.mode) {
            const obj = { mode: null };
            set = gestureState.set;
            const merged = Object.assign(value);
            const result = set(obj);
          }
        }, 0);
      }
    },
    dropComplete() {
      let dragDropInProgress;
      let dragSpecs;
      let dropSpecs;
      let gestureState;
      ({ gestureState, dragDropInProgress, dropSpecs, dragSpecs } = closure_1());
      closure_1();
      const obj2 = { category: "GuildsBarGesture", message: "dropComplete started", data: { gestureState: gestureState.get(), dropSpecs, dragSpecs } };
      const obj = SentryUtilsDefault;
      ({ gestureState: gestureState.get(), dropSpecs, dragSpecs });
      obj.addBreadcrumb(obj2);
      if (null != dropSpecs) {
        const obj4 = react_native;
        obj4.batchUpdates(() => closure_1_0({ dropSpecs: "r" }));
        const _clearTimeout = clearTimeout;
        clearTimeout(c5);
        if (null == dragSpecs) {
          const result = dragDropInProgress.set(false);
        }
        const value = gestureState.get();
        if ("drag" === value.mode) {
          const obj5 = { mode: null };
          set = gestureState.set;
          const merged = Object.assign(value);
          const result1 = set(obj5);
        }
      }
    }
  };
  obj2 = require("ReanimatedRexport");
  obj3 = require("ReanimatedRexport");
  obj4 = require("ReanimatedRexport");
  obj5 = require("ReanimatedRexport");
  obj6 = require("ReanimatedRexport");
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === arg1) {
      tmp4 = cResult[2];
    }
    return withEqualityFn(tmp4, _slicedToArray.shallow);
  }
  const fn = function s(arg0) {
    let dragDropInProgress;
    let dragSpecs;
    let dropSpecs;
    let num;
    let overSpecs;
    let tmp13;
    let tmp14;
    ({ dragSpecs, overSpecs, dropSpecs, dragDropInProgress } = arg0);
    if (null == dragSpecs) {
      if (null == dropSpecs) {
        return { isDragTarget: false, dragState: "duration", overState: "toCharArray$esjava$1", itemSize: null, dragDropInProgress };
      }
    }
    let tmp2 = !closure_1;
    if (tmp2) {
      let id;
      if (dragSpecs != null) {
        id = dragSpecs.node.id;
      }
      let tmp5 = id === closure_0;
      if (tmp5) {
        let node;
        if (overSpecs != null) {
          node = overSpecs.node;
        }
        tmp5 = null != node;
      }
      if (!tmp5) {
        let id1;
        if (dropSpecs != null) {
          id1 = dropSpecs.dragNode.id;
        }
        tmp5 = id1 === closure_0;
      }
      tmp2 = tmp5;
    }
    let tmp8 = !closure_1;
    if (tmp8) {
      let id2;
      if (overSpecs != null) {
        id2 = overSpecs.node.id;
      }
      let tmp11 = id2 === closure_0;
      if (!tmp11) {
        let id3;
        if (dropSpecs != null) {
          id3 = dropSpecs.overNode.id;
        }
        tmp11 = id3 === tmp10;
      }
      tmp8 = tmp11;
    }
    const obj = { isDragTarget: tmp2, dragState: tmp13, overState: tmp14, itemSize: num, dragDropInProgress };
    if (tmp2) {
      let str = "dropping";
      if (null == dropSpecs) {
        str = "dragging";
      }
      tmp13 = str;
    }
    tmp14 = undefined;
    if (tmp8) {
      let overState;
      if (dropSpecs != null) {
        overState = dropSpecs.overState;
      }
      if (overState == null) {
        let state;
        if (overSpecs != null) {
          state = overSpecs.state;
        }
        overState = state;
      }
      tmp14 = overState;
    }
    num = 0;
    if (tmp8) {
      let num2;
      if (dropSpecs != null) {
        num2 = dropSpecs.itemSize;
      }
      if (num2 == null) {
        let itemSize;
        if (dragSpecs != null) {
          itemSize = dragSpecs.itemSize;
        }
        num2 = itemSize;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return obj;
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return withEqualityFn((arg0) => {
    let dragDropInProgress;
    let dragSpecs;
    let dropSpecs;
    let num;
    let overSpecs;
    let tmp13;
    let tmp14;
    ({ dragSpecs, overSpecs, dropSpecs, dragDropInProgress } = arg0);
    if (null == dragSpecs) {
      if (null == dropSpecs) {
        return { isDragTarget: false, dragState: "duration", overState: "toCharArray$esjava$1", itemSize: null, dragDropInProgress };
      }
    }
    let tmp2 = !closure_1;
    if (tmp2) {
      let id;
      if (dragSpecs != null) {
        id = dragSpecs.node.id;
      }
      let tmp5 = id === closure_0;
      if (tmp5) {
        let node;
        if (overSpecs != null) {
          node = overSpecs.node;
        }
        tmp5 = null != node;
      }
      if (!tmp5) {
        let id1;
        if (dropSpecs != null) {
          id1 = dropSpecs.dragNode.id;
        }
        tmp5 = id1 === closure_0;
      }
      tmp2 = tmp5;
    }
    let tmp8 = !closure_1;
    if (tmp8) {
      let id2;
      if (overSpecs != null) {
        id2 = overSpecs.node.id;
      }
      let tmp11 = id2 === closure_0;
      if (!tmp11) {
        let id3;
        if (dropSpecs != null) {
          id3 = dropSpecs.overNode.id;
        }
        tmp11 = id3 === tmp10;
      }
      tmp8 = tmp11;
    }
    const obj = { isDragTarget: tmp2, dragState: tmp13, overState: tmp14, itemSize: num, dragDropInProgress };
    if (tmp2) {
      let str = "dropping";
      if (null == dropSpecs) {
        str = "dragging";
      }
      tmp13 = str;
    }
    tmp14 = undefined;
    if (tmp8) {
      let overState;
      if (dropSpecs != null) {
        overState = dropSpecs.overState;
      }
      if (overState == null) {
        let state;
        if (overSpecs != null) {
          state = overSpecs.state;
        }
        overState = state;
      }
      tmp14 = overState;
    }
    num = 0;
    if (tmp8) {
      let num2;
      if (dropSpecs != null) {
        num2 = dropSpecs.itemSize;
      }
      if (num2 == null) {
        let itemSize;
        if (dragSpecs != null) {
          itemSize = dragSpecs.itemSize;
        }
        num2 = itemSize;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return obj;
  }, _slicedToArray.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s(dropSpecs) {
      let dragSpecs;
      let overSpecs;
      ({ dragSpecs, overSpecs } = dropSpecs);
      let num = 0;
      if (null == dropSpecs.dropSpecs) {
        num = 0;
        if (null != overSpecs) {
          num = 0;
          if (null != dragSpecs) {
            num = 0;
            if ("self" !== overSpecs.state) {
              num = 0;
              if (dragSpecs.node.type === GuildsNodeType.GUILD) {
                let num2;
                if (dragSpecs.node.parentId === closure_0) {
                  let num3 = 0;
                  if (overSpecs.node.parentId !== closure_0) {
                    if (overSpecs.node.id !== closure_0) {
                      num3 = -1 * dragSpecs.itemSize;
                    } else {
                      num3 = 0;
                    }
                  }
                  num2 = num3;
                } else if (overSpecs.node.parentId === closure_0) {
                  num2 = dragSpecs.itemSize;
                } else {
                  num2 = 0;
                  if (overSpecs.node.id === closure_0) {
                    num2 = 0;
                  }
                }
                num = num2;
              }
            }
          }
        }
      }
      return num;
    };
    let num = 0;
    cResult[0] = arg0;
    let num2 = 1;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return withEqualityFn(tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  return withEqualityFn((dropSpecs) => {
    let dragSpecs;
    let overSpecs;
    ({ dragSpecs, overSpecs } = dropSpecs);
    let num = 0;
    if (null == dropSpecs.dropSpecs) {
      num = 0;
      if (null != overSpecs) {
        num = 0;
        if (null != dragSpecs) {
          num = 0;
          if ("self" !== overSpecs.state) {
            num = 0;
            if (dragSpecs.node.type === GuildsNodeType.GUILD) {
              let num2;
              if (dragSpecs.node.parentId === closure_0) {
                let num3 = 0;
                if (overSpecs.node.parentId !== closure_0) {
                  if (overSpecs.node.id !== closure_0) {
                    num3 = -1 * dragSpecs.itemSize;
                  } else {
                    num3 = 0;
                  }
                }
                num2 = num3;
              } else if (overSpecs.node.parentId === closure_0) {
                num2 = dragSpecs.itemSize;
              } else {
                num2 = 0;
                if (overSpecs.node.id === closure_0) {
                  num2 = 0;
                }
              }
              num = num2;
            }
          }
        }
      }
    }
    return num;
  });
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDnDStore.tsx");

export default withEqualityFn;
export { INITIAL_GESTURE_STATE };
export const useItemDragState = tmp3;
export const useFolderBGHeightOffset = tmp4;
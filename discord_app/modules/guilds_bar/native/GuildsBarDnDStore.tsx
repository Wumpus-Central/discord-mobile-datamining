// === Module 16284: GuildsBarDnDStore ===

// Module 16284 (GuildsBarDnDStore)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import _mod4184 from "module_4184" /* 4184 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import identity from "module_1244" /* 1244 */;
import size from "module_2" /* 2 */;

const GuildsNodeType = SortedGuildStore.GuildsNodeType;
const INITIAL_GESTURE_STATE = { mode: null, initialX: 0, initialY: 0, absoluteX: 0, absoluteY: 0 };
let c5 = -1;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  obj = { dragSpecs: "Boolean", overSpecs: "ip", dropSpecs: "isArray", dragRegion: require("ReanimatedRexport").makeMutable({ min: 0, max: 0 }), gestureState: null, dragDropInProgress: null, listInsets: "Success", scrollPosition: "oO.O", windowSize: "success", setStateShallow: null, dropStart: 0, dropComplete: "No Video Devices" };
  const obj2 = require("ReanimatedRexport");
  obj.gestureState = require("ReanimatedRexport").makeMutable(obj);
  const obj3 = require("ReanimatedRexport");
  obj.dragDropInProgress = require("ReanimatedRexport").makeMutable(false);
  let obj4 = require("ReanimatedRexport");
  obj.listInsets = require("ReanimatedRexport").makeMutable({ start: 0, end: 0 });
  const obj5 = require("ReanimatedRexport");
  obj.scrollPosition = require("ReanimatedRexport").makeMutable(0);
  obj.setStateShallow = function setStateShallow(obj) {
    closure_0 = obj;
    const tmp = closure_1();
    closure_1 = tmp;
    for (const key10006 in arg0) {
      if (tmp[key10006] === arg0[key10006]) {
        continue;
      } else {
        obj = closure_0(1249);
        let batchUpdatesResult = obj.batchUpdates(() => {
          const merged = Object.assign(closure_1);
          const merged1 = Object.assign(closure_0);
          return closure_0({});
        });
      }
    }
  };
  obj.dropStart = function dropStart(newDropSpec) {
    dropSpecs = newDropSpec;
    ({ dropSpecs, gestureState } = gestureState());
    closure_1(1232);
    let data = { category: "GuildsBarGesture", message: "dropStart started", data: null };
    data = { newDropSpec, dropSpecs, gestureState: gestureState.get() };
    data.data = data;
    data.addBreadcrumb(data);
    if (null != dropSpecs) {
      const _Error = Error;
      const error = new Error("GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress");
      throw error;
    } else {
      dropSpecs(1249).batchUpdates(() => dropSpecs({ dropSpecs, dragSpecs: "Array", overSpecs: "isArray" }));
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        obj = gestureState;
        value = gestureState.get();
        if ("drag" === value.mode) {
          obj = {};
          const merged = Object.assign(value);
          obj.mode = null;
          const result = obj.set(obj);
        }
      }, 0);
    }
    const tmp = gestureState();
  };
  obj.dropComplete = function dropComplete() {
    ({ gestureState, dragDropInProgress, dropSpecs, dragSpecs } = closure_1());
    let data = { category: "GuildsBarGesture", message: "dropComplete started", data: null };
    data = { gestureState: gestureState.get(), dropSpecs, dragSpecs };
    data.data = data;
    data.addBreadcrumb(data);
    if (null != dropSpecs) {
      ReactBatchUpdates.batchUpdates(() => closure_1_0({ dropSpecs: "Array" }));
      const _clearTimeout = clearTimeout;
      clearTimeout(c5);
      if (null == dragSpecs) {
        const result = dragDropInProgress.set(false);
      }
      value = gestureState.get();
      if ("drag" === value.mode) {
        const obj1 = {};
        const merged = Object.assign(value);
        obj1.mode = null;
        const result1 = gestureState.set(obj1);
      }
    }
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDnDStore.tsx");

export default withEqualityFn;
export { INITIAL_GESTURE_STATE };
export const useItemDragState = function useItemDragState(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return withEqualityFn((arg0) => {
    ({ dragSpecs, overSpecs, dropSpecs, dragDropInProgress } = arg0);
    if (null == dragSpecs) {
      if (null == dropSpecs) {
        obj = { isDragTarget: false, dragState: "ip", overState: "isArray", itemSize: null, dragDropInProgress };
        return obj;
      }
    }
    let tmp2 = !closure_1;
    if (!closure_1) {
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
        tmp5 = id1 === tmp4;
      }
      tmp2 = tmp5;
      tmp4 = closure_0;
    }
    let tmp8 = !tmp;
    if (!closure_1) {
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
    obj = { isDragTarget: tmp2, dragState: null, overState: null, itemSize: null, dragDropInProgress: null };
    if (tmp2) {
      let str = "dropping";
      if (null == dropSpecs) {
        str = "dragging";
      }
      const tmp13 = str;
    }
    obj.dragState = tmp13;
    let tmp14;
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
    obj.overState = tmp14;
    let num = 0;
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
    obj.itemSize = num;
    obj.dragDropInProgress = dragDropInProgress;
    return obj;
  }, _mod4184.shallow);
};
export const useFolderBGHeightOffset = function useFolderBGHeightOffset(arg0) {
  closure_0 = arg0;
  return withEqualityFn((dropSpecs) => {
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
              if (dragSpecs.node.parentId === closure_0) {
                if (overSpecs.node.parentId !== tmp3) {
                  if (overSpecs.node.id !== tmp3) {
                    dragSpecs = dragSpecs.itemSize;
                    const num3 = -1 * dragSpecs;
                  } else {
                    overSpecs = "after";
                  }
                }
              } else if (overSpecs.node.parentId === tmp3) {
              }
            }
          }
        }
      }
    }
    return num;
  });
};
// discord_app/modules/guilds_bar/native/GuildsBarDnDStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import insertUnsortedGuilds from "../../../stores/SortedGuildStore.tsx";
import identity from "../../../../_runtime/00700_identity.js";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const GuildsNodeType = insertUnsortedGuilds.GuildsNodeType;
let obj = { mode: null, initialX: 0, initialY: 0, absoluteX: 0, absoluteY: 0 };
let c5 = -1;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  closure_1 = arg1;
  obj = { dragSpecs: "Boolean", overSpecs: "disabled", dropSpecs: "isArray", dragRegion: require("../../reanimated/ReanimatedRexport.tsx").makeMutable({ min: 0, max: 0 }), gestureState: null, dragDropInProgress: null, listInsets: "sans-serif-medium", scrollPosition: "normal", windowSize: "<string:973079306>", setStateShallow: "<string:167772559>", dropStart: "<string:838861251>", dropComplete: "<string:2835350031>" };
  const obj2 = ReanimatedRexport;
  obj[4] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(obj);
  const obj3 = ReanimatedRexport;
  obj[5] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(false);
  let obj4 = ReanimatedRexport;
  obj[6] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable({ start: 0, end: 0 });
  const obj5 = ReanimatedRexport;
  obj[7] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(0);
  obj[9] = function setStateShallow(obj) {
    const callback = obj;
    const tmp = callback2();
    callback2 = tmp;
    for (const key10006 in arg0) {
      if (tmp[key10006] === arg0[key10006]) {
        continue;
      } else {
        obj = callback(dependencyMap[3]);
        let batchUpdatesResult = obj.batchUpdates(() => {
          obj = {};
          const merged = Object.assign(closure_1);
          const merged1 = Object.assign(obj);
          return obj(obj);
        });
      }
    }
  };
  obj[10] = function dropStart(newDropSpec) {
    const callback = newDropSpec;
    ({ dropSpecs, gestureState } = gestureState());
    callback2(dependencyMap[4]);
    obj = { newDropSpec, dropSpecs, gestureState: gestureState.get() };
    obj[2] = obj;
    obj.addBreadcrumb(obj);
    if (null != dropSpecs) {
      const _Error = Error;
      error = new Error("GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress");
      throw error;
    } else {
      callback(dependencyMap[3]).batchUpdates(() => newDropSpec({ dropSpecs: newDropSpec, dragSpecs: "Array", overSpecs: "text" }));
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        obj = gestureState;
        const value = gestureState.get();
        if ("drag" === value.mode) {
          obj = {};
          const merged = Object.assign(value);
          obj.mode = null;
          const result = obj.set(obj);
        }
      }, 0);
      const obj4 = callback(dependencyMap[3]);
    }
    const tmp = gestureState();
  };
  obj[11] = function dropComplete() {
    ({ gestureState, dragDropInProgress, dropSpecs, dragSpecs } = callback2());
    callback2(dependencyMap[4]);
    obj = { gestureState: gestureState.get(), dropSpecs, dragSpecs };
    obj[2] = obj;
    obj.addBreadcrumb(obj);
    if (null != dropSpecs) {
      callback(dependencyMap[3]).batchUpdates(() => callback({ dropSpecs: "r" }));
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_5);
      if (null == dragSpecs) {
        const result = dragDropInProgress.set(false);
      }
      const value = gestureState.get();
      if ("drag" === value.mode) {
        obj1 = {};
        const merged = Object.assign(value);
        obj1.mode = null;
        const result1 = gestureState.set(obj1);
      }
      const obj4 = callback(dependencyMap[3]);
    }
    const tmp = callback2();
  };
  return obj;
});
let result = obj132.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDnDStore.tsx");

export default withEqualityFn;
export const INITIAL_GESTURE_STATE = obj;
export const useItemDragState = function useItemDragState(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  return withEqualityFn((arg0) => {
    ({ dragSpecs, overSpecs, dropSpecs, dragDropInProgress } = arg0);
    if (null == dragSpecs) {
      if (null == dropSpecs) {
        obj = { isDragTarget: false, dragState: "disabled", overState: "isArray", itemSize: null, dragDropInProgress: true };
        obj[4] = dragDropInProgress;
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
        tmp5 = id1 === closure_0;
      }
      tmp2 = tmp5;
    }
    let tmp8 = !closure_1;
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
    obj[1] = tmp13;
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
    obj[2] = tmp14;
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
    obj[3] = num;
    obj[4] = dragDropInProgress;
    return obj;
  }, require("../../../../_runtime/04006_isIterable.js").shallow);
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
                if (overSpecs.node.parentId !== closure_0) {
                  if (overSpecs.node.id !== closure_0) {
                    dragSpecs = dragSpecs.itemSize;
                  } else {
                    overSpecs = "after";
                  }
                }
              } else if (overSpecs.node.parentId === closure_0) {
              }
            }
          }
        }
      }
    }
    return num;
  });
};
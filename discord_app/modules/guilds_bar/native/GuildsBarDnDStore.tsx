// discord_app/modules/guilds_bar/native/GuildsBarDnDStore.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod5055 from "../../../../_runtime/metro/05055__.js";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import identity from "../../../../_runtime/metro/01254__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const GuildsNodeType = SortedGuildStore.GuildsNodeType;
const INITIAL_GESTURE_STATE = { mode: null, initialX: 0, initialY: 0, absoluteX: 0, absoluteY: 0 };
let c5 = -1;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let obj = {
    dragSpecs: "Boolean",
    overSpecs: "description",
    dropSpecs: "isArray",
    dragRegion: require("../../../../_runtime/metro/01652__.js").makeMutable({ min: 0, max: 0 }),
    gestureState: null,
    dragDropInProgress: null,
    listInsets: "anatomical_heart",
    scrollPosition: true,
    windowSize: true,
    setStateShallow: true,
    dropStart: true,
    dropComplete: true,
  };
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  obj.gestureState = require("../../../../_runtime/metro/01652__.js").makeMutable(obj);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  obj.dragDropInProgress = require("../../../../_runtime/metro/01652__.js").makeMutable(false);
  let obj4 = require("../../../../_runtime/metro/01652__.js");
  obj.listInsets = require("../../../../_runtime/metro/01652__.js").makeMutable({ start: 0, end: 0 });
  let obj5 = require("../../../../_runtime/metro/01652__.js");
  obj.scrollPosition = require("../../../../_runtime/metro/01652__.js").makeMutable(0);
  obj.setStateShallow = function setStateShallow(obj) {
    closure_0 = obj;
    const tmp = closure_1();
    closure_1 = tmp;
    for (const key10006 in arg0) {
      if (tmp[key10006] === arg0[key10006]) {
        continue;
      } else {
        obj = closure_0(1259);
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
    const tmp = gestureState();
    let obj2 = { category: "GuildsBarGesture", message: "dropStart started", data: null };
    const obj = closure_1(1242);
    obj2.data = { newDropSpec, dropSpecs, gestureState: gestureState.get() };
    obj.addBreadcrumb(obj2);
    if (null != dropSpecs) {
      const _Error = Error;
      const error = new Error(
        "GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress",
      );
      throw error;
    } else {
      dropSpecs(1259).batchUpdates(() => dropSpecs({ dropSpecs, dragSpecs: "Array", overSpecs: "add" }));
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        value = gestureState.get();
        if ("drag" === value.mode) {
          const obj2 = {};
          const merged = Object.assign(value);
          obj2.mode = null;
          const result = gestureState.set(obj2);
        }
      }, 0);
      const obj4 = dropSpecs(1259);
    }
    const obj3 = { newDropSpec, dropSpecs, gestureState: gestureState.get() };
  };
  obj.dropComplete = function dropComplete() {
    ({ gestureState, dragDropInProgress, dropSpecs, dragSpecs } = closure_1());
    const tmp = closure_1();
    const obj2 = { category: "GuildsBarGesture", message: "dropComplete started", data: null };
    const obj = SentryUtilsDefault;
    obj2.data = { gestureState: gestureState.get(), dropSpecs, dragSpecs };
    obj.addBreadcrumb(obj2);
    if (null != dropSpecs) {
      ReactBatchUpdates.batchUpdates(() => closure_1_0({ dropSpecs: "uri" }));
      const _clearTimeout = clearTimeout;
      clearTimeout(c5);
      if (null == dragSpecs) {
        const result = dragDropInProgress.set(false);
      }
      value = gestureState.get();
      if ("drag" === value.mode) {
        const obj5 = {};
        const merged = Object.assign(value);
        obj5.mode = null;
        const result1 = gestureState.set(obj5);
      }
    }
    const obj3 = { gestureState: gestureState.get(), dropSpecs, dragSpecs };
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDnDStore.tsx");

export default withEqualityFn;
export { INITIAL_GESTURE_STATE };
export function useItemDragState(guildId, flag) {
  closure_0 = guildId;
  closure_1 = flag;
  return withEqualityFn((arg0) => {
    ({ dragSpecs, overSpecs, dropSpecs, dragDropInProgress } = arg0);
    if (null == dragSpecs) {
      if (null == dropSpecs) {
        const obj2 = {
          isDragTarget: false,
          dragState: "description",
          overState: "isArray",
          itemSize: null,
          dragDropInProgress,
        };
        return obj2;
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
    const obj = { isDragTarget: tmp2, dragState: null, overState: null, itemSize: null, dragDropInProgress: null };
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
        state = undefined;
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
  }, _mod5055.shallow);
}
export function useFolderBGHeightOffset(arg0) {
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
                    const num3 = -1 * dragSpecs;
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
}

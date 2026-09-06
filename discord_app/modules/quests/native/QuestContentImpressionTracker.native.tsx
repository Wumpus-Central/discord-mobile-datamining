// discord_app/modules/quests/native/QuestContentImpressionTracker.native.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = fn;
function AdContentImpressionTrackerBaseNative(skipRemountKey) {
  let obj = adContentIds2(504);
  let items = [AppStateStore];
  const tmp3 = obj.useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
  const ref = noop.useRef(null);
  const tmp5 = visibilityRef;
  let obj1 = adContentIds2(11486);
  const adContentImpressionTrackerProps = obj1.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  obj = {};
  let merged = Object.assign(skipRemountKey);
  obj.adContentIds = adContentIds;
  adContentIds2 = obj.adContentIds;
  visibilityRef = obj.visibilityRef;
  let overrideVisibility = obj.overrideVisibility;
  const joined = adContentIds2.join("_");
  let tmp6 = visibilityRef(8272)(tmp3);
  let items1 = [joined];
  const tmp10 = _slicedToArray(adContentIds2(8874).useRecyclingState(false, items1), 2);
  dependencyMap = tmp11;
  let items2 = [adContentIds2, tmp10[1], visibilityRef];
  const effect = noop.useEffect(() => {
    (function initHandlers(arg0) {
      ({ adContentIds, setVisible: children, visibilityRef } = arg0);
      if (null != visibilityRef) {
        function _loop(iter) {
          closure_0 = iter;
          const obj = {};
          const merged = Object.assign(visibilityRef.current.children[iter]);
          obj.calculateVisibility = function calculateVisibility() {
            let tmp4;
            if (visibilityRef != null) {
              const current = visibilityRef.current;
              if (current != null) {
                children = current.children;
                if (children != null) {
                  tmp4 = children[tmp3];
                }
              }
            }
            let layout;
            if (tmp4 != null) {
              layout = tmp4.layout;
            }
            let num = 0;
            if (null != layout) {
              let layout1;
              if (visibilityRef != null) {
                const parent = visibilityRef.current.parent;
                if (parent != null) {
                  layout1 = parent.layout;
                }
              }
              num = 0;
              if (null != layout1) {
                let str = visibilityRef.current.axis;
                if (str == null) {
                  str = "vertical";
                }
                if ("horizontal" === str) {
                  num = 0;
                  if (null != visibilityRef.current.parent.scrollX) {
                    const items = [tmp4.layout.x, tmp4.layout.x + tmp4.layout.width];
                    const items1 = [
                      visibilityRef.current.parent.scrollX,
                      visibilityRef.current.parent.scrollX + visibilityRef.current.parent.layout.width,
                    ];
                    let items3 = items1;
                    let items2 = items;
                    if (null != visibilityRef.current.parent.firstItemOffset) {
                      const firstItemOffset = visibilityRef.current.parent.firstItemOffset;
                      items2[0] = items2[0] + firstItemOffset;
                      items2[1] = items2[1] + firstItemOffset;
                    }
                    const _Math = Math;
                    const _Math2 = Math;
                    const bound = Math.max(items2[0], items3[0]);
                    const _Math3 = Math;
                    const _Math4 = Math;
                    num = Math.min(Math.max(0, Math.min(items2[1], items3[1]) - bound) / tmp4.layout.width, 1);
                  }
                } else {
                  num = 0;
                  if (null != visibilityRef.current.parent.scrollY) {
                    items2 = [tmp4.layout.y, tmp4.layout.y + tmp4.layout.height];
                    items3 = [
                      visibilityRef.current.parent.scrollY,
                      visibilityRef.current.parent.scrollY + visibilityRef.current.parent.layout.height,
                    ];
                    const height = tmp4.layout.height;
                  }
                }
              }
            }
            closure_2_0(num >= closure_3_6);
          };
          visibilityRef.current.children[iter] = obj;
        }
        const iter = adContentIds[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
    })({ adContentIds: children, setVisible, visibilityRef });
    children = undefined;
    if (visibilityRef != null) {
      let current = visibilityRef.current;
      if (current != null) {
        children = current.children;
      }
    }
    return () => {
      if (null != children) {
        for (const item10008 of adContentIds2) {
          let tmp4 = children[item10008];
          if (null != tmp4) {
            tmp5.calculateVisibility = undefined;
          }
          continue;
        }
      }
    };
  }, items2);
  if (overrideVisibility == null) {
    overrideVisibility = tmp10[0];
  }
  obj = { visible: overrideVisibility, visibleChanged: overrideVisibility !== tmp5(8272)(overrideVisibility) };
  obj1 = {};
  const merged1 = Object.assign(skipRemountKey);
  const merged2 = Object.assign(obj);
  obj1.focused = tmp3;
  obj1.focusedChanged = tmp3 !== tmp6;
  obj1.reference = ref;
  obj1.isFocused = tmp3;
  let key;
  if (!skipRemountKey.skipRemountKey) {
    key = adContentImpressionTrackerProps.key;
  }
  const obj2 = {};
  const merged3 = Object.assign(obj1);
  obj2.key = key;
  obj2.adContentIds = adContentIds;
  if (tmp17) {
    obj2.adCreativeType = tmp(5451).AdCreativeType.QUEST;
    let tmp19 = obj2;
  } else {
    obj2.adCreativeType = skipRemountKey.adCreativeType;
    tmp19 = obj2;
  }
  return createElement(adContentIds2(11487).QuestContentImpressionTracker, tmp19);
}
let closure_6 = fn(11196).MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const AppStates = fn(1074).AppStates;
const createElement = fn(19).createElement;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = function QuestContentImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <AdContentImpressionTrackerBaseNative />;
};
export const BillableAdPlacementImpressionTrackerNative = function BillableAdPlacementImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <AdContentImpressionTrackerBaseNative />;
};

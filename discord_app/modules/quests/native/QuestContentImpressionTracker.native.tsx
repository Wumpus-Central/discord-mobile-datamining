// discord_app/modules/quests/native/QuestContentImpressionTracker.native.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = fn;
function AdContentImpressionTrackerBaseNative(skipRemountKey) {
  let items = [AppStateStore];
  const tmp3 = adContentIds2(504).useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
  let obj = adContentIds2(504);
  const ref = noop.useRef(null);
  const tmp5 = visibilityRef;
  let tmp6 = visibilityRef(7712)(tmp3);
  const adContentImpressionTrackerProps = adContentIds2(10698).useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  const obj3 = {};
  let merged = Object.assign(skipRemountKey);
  obj3.adContentIds = adContentIds;
  adContentIds2 = obj3.adContentIds;
  visibilityRef = obj3.visibilityRef;
  let overrideVisibility = obj3.overrideVisibility;
  const joined = adContentIds2.join("_");
  const obj2 = adContentIds2(10698);
  let items1 = [joined];
  const tmp10 = _slicedToArray(adContentIds2(8171).useRecyclingState(false, items1), 2);
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
  const obj4 = adContentIds2(8171);
  const obj6 = {};
  const merged1 = Object.assign(skipRemountKey);
  const merged2 = Object.assign({
    visible: overrideVisibility,
    visibleChanged: overrideVisibility !== tmp5(7712)(overrideVisibility),
  });
  obj6.focused = tmp3;
  obj6.focusedChanged = tmp3 !== tmp6;
  obj6.reference = ref;
  obj6.isFocused = tmp3;
  let key;
  if (!skipRemountKey.skipRemountKey) {
    key = adContentImpressionTrackerProps.key;
  }
  const obj7 = {};
  const merged3 = Object.assign(obj6);
  obj7.key = key;
  obj7.adContentIds = adContentIds;
  if (tmp17) {
    obj7.adCreativeType = tmp(5758).AdCreativeType.QUEST;
    let tmp19 = obj7;
  } else {
    obj7.adCreativeType = skipRemountKey.adCreativeType;
    tmp19 = obj7;
  }
  return createElement(adContentIds2(10699).QuestContentImpressionTracker, tmp19);
}
let closure_6 = fn(7141).MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
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

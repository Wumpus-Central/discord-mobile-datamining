// discord_app/modules/quests/native/QuestContentImpressionTracker.native.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/native/AppStateStore.tsx";
import { MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE as closure_6 } from "../lib/analytics/ContentImpressionTrackerConstants.tsx";
import { AppStates } from "../../../Constants.tsx";
import { createElement } from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function AdContentImpressionTrackerBaseNative(skipRemountKey) {
  let obj = adContentIds2(589);
  let items = [closure_5];
  let tmp3 = obj.useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
  const ref = React.useRef(null);
  const tmp5 = visibilityRef;
  obj1 = adContentIds2(11006);
  const adContentImpressionTrackerProps = obj1.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  obj = {};
  let merged = Object.assign(skipRemountKey);
  obj.adContentIds = adContentIds;
  adContentIds2 = undefined;
  visibilityRef = undefined;
  adContentIds2 = obj.adContentIds;
  visibilityRef = obj.visibilityRef;
  let overrideVisibility = obj.overrideVisibility;
  dependencyMap = undefined;
  const joined = adContentIds2.join("_");
  let tmp6 = visibilityRef(8508)(tmp3);
  let items1 = [joined];
  const tmp10 = callback(adContentIds2(8037).useRecyclingState(false, items1), 2);
  dependencyMap = tmp11;
  let items2 = [adContentIds2, tmp10[1], visibilityRef];
  const effect = React.useEffect(() => {
    (function initHandlers(arg0) {
      ({ adContentIds, setVisible: children, visibilityRef } = arg0);
      if (null != visibilityRef) {
        function _loop(iter) {
          closure_0 = iter;
          const obj = {};
          const merged = Object.assign(visibilityRef.current.children[iter]);
          obj.calculateVisibility = function calculateVisibility() {
            let tmp4;
            if (closure_1_1 != null) {
              const current = tmp2.current;
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
              if (tmp2 != null) {
                const parent = tmp2.current.parent;
                if (parent != null) {
                  layout1 = parent.layout;
                }
              }
              num = 0;
              if (null != layout1) {
                let str = tmp2.current.axis;
                if (str == null) {
                  str = "vertical";
                }
                if ("horizontal" === str) {
                  num = 0;
                  if (null != tmp2.current.parent.scrollX) {
                    const items = [tmp4.layout.x, tmp4.layout.x + tmp4.layout.width];
                    const items1 = [tmp2.current.parent.scrollX, tmp2.current.parent.scrollX + tmp2.current.parent.layout.width];
                    let items3 = items1;
                    let items2 = items;
                    if (null != tmp2.current.parent.firstItemOffset) {
                      const firstItemOffset = tmp2.current.parent.firstItemOffset;
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
                  if (null != tmp2.current.parent.scrollY) {
                    items2 = [tmp4.layout.y, tmp4.layout.y + tmp4.layout.height];
                    items3 = [tmp2.current.parent.scrollY, tmp2.current.parent.scrollY + tmp2.current.parent.layout.height];
                    const height = tmp4.layout.height;
                  }
                }
              }
            }
            closure_0(num >= closure_2_6);
          };
          visibilityRef.current.children[iter] = obj;
        }
        const iter = adContentIds[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
    })({ adContentIds: children, setVisible: closure_2, visibilityRef });
    children = undefined;
    if (visibilityRef != null) {
      let current = visibilityRef.current;
      if (current != null) {
        children = current.children;
      }
    }
    return () => {
      if (null != children) {
        for (const item10008 of children) {
          let tmp3 = children;
          let tmp4 = children[item10008];
          if (null != tmp4) {
            let tmp6 = tmp4;
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
  obj = { visible: overrideVisibility, visibleChanged: overrideVisibility !== tmp5(8508)(overrideVisibility) };
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
    obj2.adCreativeType = tmp(7379).AdCreativeType.QUEST;
    let tmp19 = obj2;
  } else {
    obj2.adCreativeType = skipRemountKey.adCreativeType;
    tmp19 = obj2;
  }
  return createElement(adContentIds2(11007).QuestContentImpressionTracker, tmp19);
}
const result = require("set").fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = function QuestContentImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <AdContentImpressionTrackerBaseNative />;
};
export const BillableAdPlacementImpressionTrackerNative = function BillableAdPlacementImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <AdContentImpressionTrackerBaseNative />;
};
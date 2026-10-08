// === Module 11164: QuestContentImpressionTracker ===

// Module 11164 (QuestContentImpressionTracker)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import usePreviousDefault from "usePrevious" /* 5928 */;
import AdCreativeType from "AdCreativeType" /* 5984 */;
import ContentImpressionTrackerHooks from "ContentImpressionTrackerHooks" /* 10580 */;
import ContentImpressionTracker from "ContentImpressionTracker" /* 11165 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1998 */;

require = fn;
function initHandlers(arg0) {
  ({ adContentIds, setVisible: require, visibilityRef } = arg0);
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
            const children = current.children;
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
                const items1 = [visibilityRef.current.parent.scrollX, visibilityRef.current.parent.scrollX + visibilityRef.current.parent.layout.width];
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
                items3 = [visibilityRef.current.parent.scrollY, visibilityRef.current.parent.scrollY + visibilityRef.current.parent.layout.height];
                const height = tmp4.layout.height;
              }
            }
          }
        }
        require(num >= closure_6);
      };
      visibilityRef.current.children[iter] = obj;
    }
    const iter = adContentIds[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
}
let closure_6 = fn(7409).MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const AppStates = fn(1085).AppStates;
const createElement = fn(19).createElement;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibilityData(adContentIds) {
  const cResult = adContentIds(576).c(12);
  adContentIds = adContentIds.adContentIds;
  const visibilityRef = adContentIds.visibilityRef;
  let overrideVisibility = adContentIds.overrideVisibility;
  if (cResult[0] !== adContentIds) {
    const joined = adContentIds.join("_");
    cResult[0] = adContentIds;
    cResult[1] = joined;
    let tmp4 = joined;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const items = [tmp4];
    cResult[2] = tmp4;
    cResult[3] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[3];
  }
  const obj = adContentIds(576);
  const tmpResult = adContentIds(8600);
  const tmp9 = _slicedToArray(adContentIds(8600).useRecyclingState(false, tmp6), 2)[1];
  dependencyMap = tmp9;
  if (cResult[4] === adContentIds) {
    if (cResult[5] === tmp9) {
      if (cResult[6] === visibilityRef) {
        let tmp10 = cResult[7];
        let tmp11 = cResult[8];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      if (overrideVisibility == null) {
        overrideVisibility = tmp8;
      }
      const tmp16 = overrideVisibility !== visibilityRef(5928)(overrideVisibility);
      if (cResult[9] === overrideVisibility) {
        if (cResult[10] === tmp16) {
          let tmp18 = cResult[11];
        }
        return tmp18;
      }
      const obj2 = { visible: overrideVisibility, visibleChanged: tmp16 };
      cResult[9] = overrideVisibility;
      cResult[10] = tmp16;
      cResult[11] = obj2;
      tmp18 = obj2;
    }
  }
  const fn = function p() {
    initHandlers({ adContentIds: children, setVisible, visibilityRef });
    children = undefined;
    if (visibilityRef != null) {
      const current = visibilityRef.current;
      if (current != null) {
        children = current.children;
      }
    }
    return () => {
      if (null != children) {
        for (const item10008 of adContentIds) {
          let tmp4 = children[item10008];
          if (null != tmp4) {
            tmp5.calculateVisibility = undefined;
          }
          continue;
        }
      }
    };
  };
  const items1 = [adContentIds, tmp9, visibilityRef];
  cResult[4] = adContentIds;
  cResult[5] = tmp9;
  cResult[6] = visibilityRef;
  cResult[7] = fn;
  cResult[8] = items1;
  tmp11 = items1;
  tmp10 = fn;
  const tmp7 = _slicedToArray(adContentIds(8600).useRecyclingState(false, tmp6), 2);
}) : (function useVisibilityData(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const visibilityRef = adContentIds.visibilityRef;
  let overrideVisibility = adContentIds.overrideVisibility;
  const joined = adContentIds.join("_");
  const items = [joined];
  const tmp3 = _slicedToArray(adContentIds(8600).useRecyclingState(false, items), 2);
  dependencyMap = tmp4;
  const items1 = [adContentIds, tmp3[1], visibilityRef];
  const effect = noop.useEffect(() => {
    initHandlers({ adContentIds: children, setVisible, visibilityRef });
    children = undefined;
    if (visibilityRef != null) {
      const current = visibilityRef.current;
      if (current != null) {
        children = current.children;
      }
    }
    return () => {
      if (null != children) {
        for (const item10008 of adContentIds) {
          let tmp4 = children[item10008];
          if (null != tmp4) {
            tmp5.calculateVisibility = undefined;
          }
          continue;
        }
      }
    };
  }, items1);
  if (overrideVisibility == null) {
    overrideVisibility = tmp3[0];
  }
  const obj = adContentIds(8600);
  return { visible: overrideVisibility, visibleChanged: overrideVisibility !== visibilityRef(5928)(overrideVisibility) };
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function AdContentImpressionTrackerBaseNative(skipRemountKey) {
  const cResult = c.c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppStateStore];
    const fn = function c() {
      return state.getState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmp7 = initialize.useStateFromStores(tmp4, tmp5) === AppStates.ACTIVE;
  const tmpResult = initialize;
  const ref = noop.useRef(null);
  const tmp9 = usePreviousDefault(tmp7);
  const adContentImpressionTrackerProps = ContentImpressionTrackerHooks.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  if (cResult[2] === adContentIds) {
    if (cResult[3] === skipRemountKey) {
      let tmp12 = cResult[4];
    }
    const tmp15 = closure_11(tmp12);
    if (cResult[5] === tmp7) {
      if (cResult[6] === skipRemountKey) {
        if (cResult[7] === tmp16) {
          if (cResult[8] === tmp15) {
            let tmp17 = cResult[9];
          }
          if ("questOrQuests" in skipRemountKey) {
            if (cResult[10] === tmp17) {
              if (cResult[11] === tmp11) {
                if (cResult[12] === adContentIds) {
                  let tmp31 = cResult[13];
                }
                return tmp31;
              }
            }
            const obj2 = {};
            const merged = Object.assign(tmp17);
            obj2.key = tmp11;
            obj2.adContentIds = adContentIds;
            obj2.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
            const tmp36 = createElement(ContentImpressionTracker.QuestContentImpressionTracker, {});
            cResult[10] = tmp17;
            cResult[11] = tmp11;
            cResult[12] = adContentIds;
            cResult[13] = tmp36;
            tmp31 = tmp36;
          } else {
            if (cResult[14] === tmp17) {
              if (cResult[15] === tmp11) {
                if (cResult[16] === skipRemountKey.adCreativeType) {
                  if (cResult[17] === adContentIds) {
                    let tmp25 = cResult[18];
                  }
                  return tmp25;
                }
              }
            }
            const obj3 = {};
            const merged1 = Object.assign(tmp17);
            obj3.key = tmp11;
            obj3.adContentIds = adContentIds;
            obj3.adCreativeType = skipRemountKey.adCreativeType;
            const tmp30 = createElement(ContentImpressionTracker.QuestContentImpressionTracker, {});
            cResult[14] = tmp17;
            cResult[15] = tmp11;
            cResult[16] = skipRemountKey.adCreativeType;
            cResult[17] = adContentIds;
            cResult[18] = tmp30;
            tmp25 = tmp30;
          }
        }
      }
    }
    const obj4 = {};
    const merged2 = Object.assign(skipRemountKey);
    const merged3 = Object.assign(tmp15);
    obj4.focused = tmp7;
    obj4.focusedChanged = tmp7 !== tmp9;
    obj4.reference = ref;
    obj4.isFocused = tmp7;
    cResult[5] = tmp7;
    cResult[6] = skipRemountKey;
    cResult[7] = tmp7 !== tmp9;
    cResult[8] = tmp15;
    cResult[9] = obj4;
    tmp17 = obj4;
  }
  const obj5 = {};
  const merged4 = Object.assign(skipRemountKey);
  obj5.adContentIds = adContentIds;
  cResult[2] = adContentIds;
  cResult[3] = skipRemountKey;
  cResult[4] = obj5;
  tmp12 = obj5;
  const tmpResult2 = ContentImpressionTrackerHooks;
}) : (function AdContentImpressionTrackerBaseNative(skipRemountKey) {
  const items = [AppStateStore];
  const tmp3 = initialize.useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
  const ref = noop.useRef(null);
  const tmp5 = usePreviousDefault(tmp3);
  const adContentImpressionTrackerProps = ContentImpressionTrackerHooks.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  const obj3 = {};
  const merged = Object.assign(skipRemountKey);
  obj3.adContentIds = adContentIds;
  const obj4 = {};
  const merged1 = Object.assign(skipRemountKey);
  const merged2 = Object.assign(closure_11(obj3));
  obj4.focused = tmp3;
  obj4.focusedChanged = tmp3 !== tmp5;
  obj4.reference = ref;
  obj4.isFocused = tmp3;
  let key;
  if (!skipRemountKey.skipRemountKey) {
    key = adContentImpressionTrackerProps.key;
  }
  const obj5 = {};
  const merged3 = Object.assign(obj4);
  obj5.key = key;
  obj5.adContentIds = adContentIds;
  if (tmp13) {
    obj5.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
    let tmp15 = obj5;
  } else {
    obj5.adCreativeType = skipRemountKey.adCreativeType;
    tmp15 = obj5;
  }
  return createElement(ContentImpressionTracker.QuestContentImpressionTracker, tmp15);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestContentImpressionTrackerNative(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = <closure_12 />;
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function QuestContentImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <closure_12 />;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = tmp2;
export const BillableAdPlacementImpressionTrackerNative = ReactCompilerGating.isReactCompilerEnabled() ? (function BillableAdPlacementImpressionTrackerNative(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = <closure_12 />;
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function BillableAdPlacementImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <closure_12 />;
});
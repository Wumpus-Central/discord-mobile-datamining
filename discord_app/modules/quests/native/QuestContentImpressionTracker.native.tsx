// discord_app/modules/quests/native/QuestContentImpressionTracker.native.tsx
import react2 from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react3 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ContentImpressionTrackerConstants from "../lib/analytics/ContentImpressionTrackerConstants.tsx";
import usePreviousDefault from "../../../hooks/usePrevious.tsx";
import ContentImpressionTrackerHooks from "../lib/analytics/ContentImpressionTrackerHooks.tsx";
import ContentImpressionTracker from "../lib/analytics/ContentImpressionTracker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const react = react2;
let dependencyMap;

function initHandlers(arg0) {
  let adContentIds;
  let visibilityRef;
  ({ adContentIds, setVisible: require, visibilityRef } = arg0);
  if (null != visibilityRef) {
    function _loop(iter) {
      let closure_0 = iter;
      let children = visibilityRef.current.children;
      const obj = {
        calculateVisibility() {
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
              let items2;
              let items3;
              let height;
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
                  height = tmp4.layout.width;
                  items3 = items1;
                  items2 = items;
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
                  num = Math.min(Math.max(0, Math.min(items2[1], items3[1]) - bound) / height, 1);
                }
              } else {
                num = 0;
                if (null != visibilityRef.current.parent.scrollY) {
                  items2 = [tmp4.layout.y, tmp4.layout.y + tmp4.layout.height];
                  items3 = [
                    visibilityRef.current.parent.scrollY,
                    visibilityRef.current.parent.scrollY + visibilityRef.current.parent.layout.height,
                  ];
                  height = tmp4.layout.height;
                }
              }
            }
          }
          require(num >= closure_6);
        },
      };
      const merged = Object.assign(visibilityRef.current.children[iter]);
      children[iter] = obj;
    }
    const iter = adContentIds[Symbol.iterator]();
    let num = 0;
    const tmp3 = iter;
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
}
let closure_6 = ContentImpressionTrackerConstants.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const AppStates = Constants.AppStates;
const createElement = react2.createElement;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVisibilityData(adContentIds) {
      let setVisible;
      let tmp4;
      let tmp6;
      let obj = adContentIds(576);
      const cResult = obj.c(12);
      const tmp = adContentIds;
      adContentIds = adContentIds.adContentIds;
      const visibilityRef = adContentIds.visibilityRef;
      let overrideVisibility = adContentIds.overrideVisibility;
      if (cResult[0] !== adContentIds) {
        const joined = adContentIds.join("_");
        cResult[0] = adContentIds;
        cResult[1] = joined;
        tmp4 = joined;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const items = [tmp4];
        cResult[2] = tmp4;
        cResult[3] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult = tmp(8371);
      const tmp9 = _slicedToArray(tmpResult.useRecyclingState(false, tmp6), 2)[1];
      dependencyMap = tmp9;
      if (cResult[4] === adContentIds) {
        if (cResult[5] === tmp9) {
          let tmp10;
          let tmp11;
          if (cResult[6] === visibilityRef) {
            tmp10 = cResult[7];
            tmp11 = cResult[8];
          }
          const effect = react.useEffect(tmp10, tmp11);
          if (overrideVisibility == null) {
            overrideVisibility = tmp8;
          }
          const tmp16 = overrideVisibility !== visibilityRef(7946)(overrideVisibility);
          if (cResult[9] === overrideVisibility) {
            let tmp18;
            if (cResult[10] === tmp16) {
              tmp18 = cResult[11];
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
        let children;
        const obj = { adContentIds: children, setVisible, visibilityRef };
        initHandlers(obj);
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
    }
  : function useVisibilityData(adContentIds) {
      let first;
      let setVisible;
      let tmp5;
      adContentIds = adContentIds.adContentIds;
      const visibilityRef = adContentIds.visibilityRef;
      let overrideVisibility = adContentIds.overrideVisibility;
      const joined = adContentIds.join("_");
      let obj = adContentIds(8371);
      const items = [joined];
      [first, tmp5] = obj.useRecyclingState(false, items);
      dependencyMap = tmp5;
      const items1 = [adContentIds, tmp5, visibilityRef];
      const effect = react.useEffect(() => {
        let children;
        const obj = { adContentIds: children, setVisible, visibilityRef };
        initHandlers(obj);
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
        overrideVisibility = first;
      }
      const obj2 = {
        visible: overrideVisibility,
        visibleChanged: overrideVisibility !== visibilityRef(7946)(overrideVisibility),
      };
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AdContentImpressionTrackerBaseNative(skipRemountKey) {
      let state;
      let tmp4;
      let tmp5;
      const obj = react3;
      const cResult = obj.c(19);
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
      const tmpResult = get_initialized;
      const tmp7 = tmpResult.useStateFromStores(tmp4, tmp5) === AppStates.ACTIVE;
      const ref = react.useRef(null);
      const tmp9 = usePreviousDefault(tmp7);
      const tmpResult2 = ContentImpressionTrackerHooks;
      const adContentImpressionTrackerProps = tmpResult2.useAdContentImpressionTrackerProps(skipRemountKey);
      const adContentIds = adContentImpressionTrackerProps.adContentIds;
      if (cResult[2] === adContentIds) {
        let tmp12;
        if (cResult[3] === skipRemountKey) {
          tmp12 = cResult[4];
        }
        const tmp15 = closure_11(tmp12);
        if (cResult[5] === tmp7) {
          if (cResult[6] === skipRemountKey) {
            if ((cResult[7] === tmp7) !== tmp9) {
              let tmp17;
              if (cResult[8] === tmp15) {
                tmp17 = cResult[9];
              }
              if ("questOrQuests" in skipRemountKey) {
                if (cResult[10] === tmp17) {
                  if (cResult[11] === tmp11) {
                    let tmp31;
                    if (cResult[12] === adContentIds) {
                      tmp31 = cResult[13];
                    }
                    return tmp31;
                  }
                }
                const QuestContentImpressionTracker2 = ContentImpressionTracker.QuestContentImpressionTracker;
                const merged = Object.assign(tmp17);
                const tmp36 = (
                  <QuestContentImpressionTracker2
                    key={tmp11}
                    adContentIds={adContentIds}
                    adCreativeType={AdCreativeType.AdCreativeType.QUEST}
                  />
                );
                cResult[10] = tmp17;
                cResult[11] = tmp11;
                cResult[12] = adContentIds;
                cResult[13] = tmp36;
                tmp31 = tmp36;
              } else {
                if (cResult[14] === tmp17) {
                  if (cResult[15] === tmp11) {
                    if (cResult[16] === skipRemountKey.adCreativeType) {
                      let tmp25;
                      if (cResult[17] === adContentIds) {
                        tmp25 = cResult[18];
                      }
                      return tmp25;
                    }
                  }
                }
                const QuestContentImpressionTracker = ContentImpressionTracker.QuestContentImpressionTracker;
                const merged1 = Object.assign(tmp17);
                const tmp30 = (
                  <QuestContentImpressionTracker
                    key={tmp11}
                    adContentIds={adContentIds}
                    adCreativeType={skipRemountKey.adCreativeType}
                  />
                );
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
        const obj4 = { focused: tmp7, focusedChanged: tmp7 !== tmp9, reference: ref, isFocused: tmp7 };
        const merged2 = Object.assign(skipRemountKey);
        const merged3 = Object.assign(tmp15);
        cResult[5] = tmp7;
        cResult[6] = skipRemountKey;
        cResult[7] = tmp7 !== tmp9;
        cResult[8] = tmp15;
        cResult[9] = obj4;
        tmp17 = obj4;
      }
      const obj5 = { adContentIds };
      const merged4 = Object.assign(skipRemountKey);
      cResult[2] = adContentIds;
      cResult[3] = skipRemountKey;
      cResult[4] = obj5;
      tmp12 = obj5;
    }
  : function AdContentImpressionTrackerBaseNative(skipRemountKey) {
      let state;
      let tmp15;
      const items = [AppStateStore];
      const obj = get_initialized;
      const tmp3 = obj.useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
      const ref = react.useRef(null);
      const tmp5 = usePreviousDefault(tmp3);
      const obj2 = ContentImpressionTrackerHooks;
      const adContentImpressionTrackerProps = obj2.useAdContentImpressionTrackerProps(skipRemountKey);
      const adContentIds = adContentImpressionTrackerProps.adContentIds;
      const key = adContentImpressionTrackerProps.key;
      const obj3 = { adContentIds };
      const merged = Object.assign(skipRemountKey);
      const obj4 = { focused: tmp3, focusedChanged: tmp3 !== tmp5, reference: ref, isFocused: tmp3 };
      const tmp8 = closure_11(obj3);
      const merged1 = Object.assign(skipRemountKey);
      const merged2 = Object.assign(tmp8);
      let tmp11;
      if (!skipRemountKey.skipRemountKey) {
        tmp11 = key;
      }
      const obj5 = { key: tmp11, adContentIds };
      const QuestContentImpressionTracker = ContentImpressionTracker.QuestContentImpressionTracker;
      const tmp13 = "questOrQuests" in skipRemountKey;
      const merged3 = Object.assign(obj4);
      if (tmp13) {
        obj5.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
        tmp15 = obj5;
      } else {
        obj5.adCreativeType = skipRemountKey.adCreativeType;
        tmp15 = obj5;
      }
      return <QuestContentImpressionTracker {...tmp15} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestContentImpressionTrackerNative(arg0) {
      let tmp2;
      const obj = react3;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const merged = Object.assign(arg0);
        const tmp8 = <closure_12 />;
        cResult[0] = arg0;
        cResult[1] = tmp8;
        tmp2 = tmp8;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function QuestContentImpressionTrackerNative(arg0) {
      const merged = Object.assign(arg0);
      return <closure_12 />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BillableAdPlacementImpressionTrackerNative(arg0) {
      let tmp2;
      const obj = react3;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const merged = Object.assign(arg0);
        const tmp8 = <closure_12 />;
        cResult[0] = arg0;
        cResult[1] = tmp8;
        tmp2 = tmp8;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function BillableAdPlacementImpressionTrackerNative(arg0) {
      const merged = Object.assign(arg0);
      return <closure_12 />;
    };
const result = size.fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = tmp2;
export const BillableAdPlacementImpressionTrackerNative = tmp3;

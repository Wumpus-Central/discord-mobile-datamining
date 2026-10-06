// === Module 11725: useViewableAppLauncherHomeItems ===

// Module 11725 (useViewableAppLauncherHomeItems)
import react_mod from "react" /* 19 */;
import AppLauncherStore from "AppLauncherStore" /* 8960 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  let sharedValue;
  let sharedValue1;
  let obj = sharedValue(sharedValue1[3]);
  const cResult = obj.c(8);
  const obj2 = sharedValue(sharedValue1[4]);
  sharedValue = obj2.useSharedValue(false);
  let obj3 = sharedValue(sharedValue1[4]);
  sharedValue1 = obj3.useSharedValue(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {};
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  react = react.useRef(first);
  if (cResult[1] === sharedValue) {
    let tmp5;
    if (cResult[2] === sharedValue1) {
      tmp5 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === sharedValue) {
        let tmp6;
        if (cResult[6] === sharedValue1) {
          tmp6 = cResult[7];
        }
        return tmp6;
      }
    }
    const obj5 = { handleViewableItemsChanged: tmp5, hasViewedActivityItem: sharedValue, hasViewedLearnMoreItem: sharedValue1 };
    cResult[4] = tmp5;
    cResult[5] = sharedValue;
    cResult[6] = sharedValue1;
    cResult[7] = obj5;
    tmp6 = obj5;
  }
  const fn = function c(viewableItems) {
    let ref;
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      let obj3;
      item = item.item;
      const value = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SHELF_ITEM || closure_1_0.get();
      if (!value) {
        const result = closure_1_0.set(true);
      }
      const value2 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.LEARN_MORE || closure_1_1.get();
      if (!value2) {
        const result1 = closure_1_1.set(true);
      }
      const tmp11 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER && item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SECTION_HEADER || null != ref.current[item.sectionName];
      if (!tmp11) {
        ref.current[item.sectionName] = true;
        const obj = { type: sharedValue(sharedValue1[7]).ImpressionTypes.VIEW, name: sharedValue(sharedValue1[7]).ImpressionNames.APP_LAUNCHER_SECTION, properties: obj3 };
        const trackImpression = sharedValue(sharedValue1[6]).trackImpression;
        sharedValue(sharedValue1[6]);
        ({ sectionName: obj2.section_name, numItems: obj2.num_items, numVisibleItems: obj2.num_visible_items } = item);
        obj3 = { section_name: null, num_items: null, num_visible_items: null, source: AppLauncherStore.entrypoint() };
        trackImpression(obj);
      }
    });
  };
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp5 = fn;
}) : (() => {
  let items;
  let ref;
  let sharedValue;
  let sharedValue1;
  let obj = sharedValue(sharedValue1[4]);
  sharedValue = obj.useSharedValue(false);
  const obj2 = sharedValue(sharedValue1[4]);
  sharedValue1 = obj2.useSharedValue(false);
  ref = ref.useRef({});
  let obj3 = {
    handleViewableItemsChanged: ref.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        let obj3;
        item = item.item;
        const value = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SHELF_ITEM || closure_1_0.get();
        if (!value) {
          const result = closure_1_0.set(true);
        }
        const value2 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.LEARN_MORE || closure_1_1.get();
        if (!value2) {
          const result1 = closure_1_1.set(true);
        }
        const tmp11 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER && item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SECTION_HEADER || null != ref.current[item.sectionName];
        if (!tmp11) {
          ref.current[item.sectionName] = true;
          const obj = { type: sharedValue(sharedValue1[7]).ImpressionTypes.VIEW, name: sharedValue(sharedValue1[7]).ImpressionNames.APP_LAUNCHER_SECTION, properties: obj3 };
          const trackImpression = sharedValue(sharedValue1[6]).trackImpression;
          sharedValue(sharedValue1[6]);
          ({ sectionName: obj2.section_name, numItems: obj2.num_items, numVisibleItems: obj2.num_visible_items } = item);
          obj3 = { section_name: null, num_items: null, num_visible_items: null, source: AppLauncherStore.entrypoint() };
          trackImpression(obj);
        }
      });
    }, items),
    hasViewedActivityItem: sharedValue,
    hasViewedLearnMoreItem: sharedValue1
  };
  items = [sharedValue, sharedValue1, ref];
  return obj3;
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = tmp2;
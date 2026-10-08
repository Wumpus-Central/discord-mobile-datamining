// === Module 11790: useViewableAppLauncherHomeItems ===

// Module 11790 (useViewableAppLauncherHomeItems)
import noop from "module_19" /* 19 */;
import AppLauncherStore from "AppLauncherStore" /* 11791 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = ReactCompilerGating.isReactCompilerEnabled() ? (function useViewableAppLauncherHomeItems() {
  const cResult = sharedValue(sharedValue1[3]).c(8);
  let obj = sharedValue(sharedValue1[3]);
  sharedValue = sharedValue(sharedValue1[4]).useSharedValue(false);
  let obj2 = sharedValue(sharedValue1[4]);
  sharedValue1 = sharedValue(sharedValue1[4]).useSharedValue(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {};
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  noop = noop.useRef(first);
  if (cResult[1] === sharedValue) {
    if (cResult[2] === sharedValue1) {
      let tmp5 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === sharedValue) {
        if (cResult[6] === sharedValue1) {
          let tmp6 = cResult[7];
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
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      value = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SHELF_ITEM;
      if (!value) {
        value = closure_1_0.get();
      }
      if (!value) {
        const result = closure_1_0.set(true);
      }
      value2 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.LEARN_MORE;
      if (!value2) {
        value2 = closure_1_1.get();
      }
      if (!value2) {
        const result1 = closure_1_1.set(true);
      }
      let tmp11 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
      if (tmp11) {
        tmp11 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SECTION_HEADER;
      }
      if (!tmp11) {
        tmp11 = null != ref.current[item.sectionName];
      }
      if (!tmp11) {
        ref.current[item.sectionName] = true;
        const obj = { type: sharedValue(sharedValue1[7]).ImpressionTypes.VIEW, name: sharedValue(sharedValue1[7]).ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
        const obj2 = { section_name: null, num_items: null, num_visible_items: null, source: null };
        ({ sectionName: obj3.section_name, numItems: obj3.num_items, numVisibleItems: obj3.num_visible_items } = item);
        obj2.source = AppLauncherStore.entrypoint();
        obj.properties = obj2;
        sharedValue(sharedValue1[6]).trackImpression(obj);
        const tmpResult = sharedValue(sharedValue1[6]);
      }
    });
  };
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp5 = fn;
}) : (function useViewableAppLauncherHomeItems() {
  sharedValue = sharedValue(sharedValue1[4]).useSharedValue(false);
  let obj = sharedValue(sharedValue1[4]);
  sharedValue1 = sharedValue(sharedValue1[4]).useSharedValue(false);
  ref = ref.useRef({});
  const obj3 = { handleViewableItemsChanged: null, hasViewedActivityItem: sharedValue, hasViewedLearnMoreItem: sharedValue1 };
  const items = [sharedValue, sharedValue1, ref];
  obj3.handleViewableItemsChanged = ref.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      value = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SHELF_ITEM;
      if (!value) {
        value = closure_1_0.get();
      }
      if (!value) {
        const result = closure_1_0.set(true);
      }
      value2 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.LEARN_MORE;
      if (!value2) {
        value2 = closure_1_1.get();
      }
      if (!value2) {
        const result1 = closure_1_1.set(true);
      }
      let tmp11 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
      if (tmp11) {
        tmp11 = item.type !== sharedValue(sharedValue1[5]).AppLauncherHomeListItemType.SECTION_HEADER;
      }
      if (!tmp11) {
        tmp11 = null != ref.current[item.sectionName];
      }
      if (!tmp11) {
        ref.current[item.sectionName] = true;
        const obj = { type: sharedValue(sharedValue1[7]).ImpressionTypes.VIEW, name: sharedValue(sharedValue1[7]).ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
        const obj2 = { section_name: null, num_items: null, num_visible_items: null, source: null };
        ({ sectionName: obj3.section_name, numItems: obj3.num_items, numVisibleItems: obj3.num_visible_items } = item);
        obj2.source = AppLauncherStore.entrypoint();
        obj.properties = obj2;
        sharedValue(sharedValue1[6]).trackImpression(obj);
        const tmpResult = sharedValue(sharedValue1[6]);
      }
    });
  }, items);
  return obj3;
});
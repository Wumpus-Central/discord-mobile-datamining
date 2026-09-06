// === Module 12087: useViewableAppLauncherHomeItems ===

// Module 12087 (useViewableAppLauncherHomeItems)
import noop from "module_19" /* 19 */;
import AppLauncherStore from "AppLauncherStore" /* 9408 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = function useViewableAppLauncherHomeItems() {
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(false);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(false);
  ref = ref.useRef({});
  obj = { handleViewableItemsChanged: null, hasViewedActivityItem: sharedValue, hasViewedLearnMoreItem: sharedValue1 };
  const items = [sharedValue, sharedValue1, ref];
  obj.handleViewableItemsChanged = ref.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      value = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.SHELF_ITEM;
      if (!value) {
        value = closure_1_0.get();
      }
      if (!value) {
        const result = closure_1_0.set(true);
      }
      value = item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.LEARN_MORE;
      if (!value) {
        value = closure_1_1.get();
      }
      if (!value) {
        const result1 = closure_1_1.set(true);
      }
      let tmp11 = item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
      if (tmp11) {
        tmp11 = item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.SECTION_HEADER;
      }
      if (!tmp11) {
        tmp11 = null != ref.current[item.sectionName];
      }
      if (!tmp11) {
        ref.current[item.sectionName] = true;
        let obj = { type: tmp(tmp2[5]).ImpressionTypes.VIEW, name: tmp(tmp2[5]).ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
        obj = { section_name: null, num_items: null, num_visible_items: null, source: null };
        ({ sectionName: obj3.section_name, numItems: obj3.num_items, numVisibleItems: obj3.num_visible_items } = item);
        obj.source = AppLauncherStore.entrypoint();
        obj.properties = obj;
        tmp(tmp2[4]).trackImpression(obj);
        const tmpResult = tmp(tmp2[4]);
      }
    });
  }, items);
  return obj;
};
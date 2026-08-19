// === Module 11263: useViewableAppLauncherHomeItems ===

// Module 11263 (useViewableAppLauncherHomeItems)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleDismissWithDismissed" /* 11264 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = function useViewableAppLauncherHomeItems() {
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(false);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(false);
  ref = ref.useRef({});
  obj = {
    handleViewableItemsChanged: ref.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        item = item.item;
        let value = item.type !== closure_1_0(closure_1_1[3]).AppLauncherHomeListItemType.SHELF_ITEM;
        if (!value) {
          value = store.get();
        }
        if (!value) {
          const result = store.set(true);
        }
        value = item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.LEARN_MORE;
        if (!value) {
          value = store2.get();
        }
        if (!value) {
          const result1 = store2.set(true);
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
          let obj = { type: null, name: null, properties: null };
          obj[0] = tmp(tmp2[5]).ImpressionTypes.VIEW;
          obj[1] = tmp(tmp2[5]).ImpressionNames.APP_LAUNCHER_SECTION;
          obj = { section_name: null, num_items: null, num_visible_items: null, source: null };
          ({ sectionName: obj3[0], numItems: obj3[1], numVisibleItems: obj3[2] } = item);
          obj[3] = closure_1_3.entrypoint();
          obj[2] = obj;
          tmp(tmp2[4]).trackImpression(obj);
          const tmpResult = tmp(tmp2[4]);
        }
      });
    }, items),
    hasViewedActivityItem: sharedValue,
    hasViewedLearnMoreItem: sharedValue1
  };
  items = [sharedValue, sharedValue1, ref];
  return obj;
};
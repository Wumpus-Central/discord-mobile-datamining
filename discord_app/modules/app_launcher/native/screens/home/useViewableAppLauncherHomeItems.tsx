// discord_app/modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import handleDismissWithDismissed from "../../../AppLauncherStore.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = function useViewableAppLauncherHomeItems() {
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(false);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(false);
  ref = ref.useRef({});
  obj = {
    handleViewableItemsChanged: ref.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item, index) => {
        item = item.item;
        let value = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.SHELF_ITEM;
        if (!value) {
          value = store.get();
        }
        if (!value) {
          const result = store.set(true);
        }
        value = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.LEARN_MORE;
        if (!value) {
          value = store2.get();
        }
        if (!value) {
          const result1 = store2.set(true);
        }
        let tmp11 = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
        if (tmp11) {
          tmp11 = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.SECTION_HEADER;
        }
        if (!tmp11) {
          tmp11 = null != ref.current[item.sectionName];
        }
        if (!tmp11) {
          ref.current[item.sectionName] = true;
          let obj = { type: null, name: null, properties: null };
          obj[0] = sharedValue(sharedValue1[5]).ImpressionTypes.VIEW;
          obj[1] = sharedValue(sharedValue1[5]).ImpressionNames.APP_LAUNCHER_SECTION;
          obj = { section_name: null, num_items: null, num_visible_items: null, source: null };
          ({ sectionName: obj3[0], numItems: obj3[1], numVisibleItems: obj3[2] } = item);
          obj[3] = closure_1_3.entrypoint();
          obj[2] = obj;
          sharedValue(sharedValue1[4]).trackImpression(obj);
          const tmpResult = sharedValue(sharedValue1[4]);
        }
      });
    }, items),
    hasViewedActivityItem: sharedValue,
    hasViewedLearnMoreItem: sharedValue1
  };
  items = [sharedValue, sharedValue1, ref];
  return obj;
};
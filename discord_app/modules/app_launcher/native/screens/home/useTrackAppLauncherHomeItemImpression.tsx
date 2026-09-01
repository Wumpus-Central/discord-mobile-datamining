// discord_app/modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
import closure_3 from "../../../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx");

export const useTrackAppLauncherHomeItemImpression = function useTrackAppLauncherHomeItemImpression() {
  let obj = trackAppLauncherItemImpressionOnFirstView(11673);
  trackAppLauncherItemImpressionOnFirstView = obj.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  obj = {
    trackAppLauncherHomeItemImpression: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        item = item.item;
        if (item.type === closure_1_0(closure_1_2[2]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          let tmpResult = tmp(tmp2[3]);
          let flags = tmpResult.getApplicationFlags(item.application);
        } else if (item.type === tmp(tmp2[2]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          tmpResult = tmp(tmp2[3]);
          flags = tmpResult.getApplicationFlags(item.item.application);
        } else if (item.type === tmp(tmp2[2]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === tmp(tmp2[2]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
          ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
          applicationId = item.shelfItem1.application.id;
          const shelfItem2 = item.shelfItem2;
          if (shelfItem2 != null) {
            const id = shelfItem2.application.id;
          }
          flags = item.shelfItem1.application.flags;
          const shelfItem22 = item.shelfItem2;
          if (shelfItem22 != null) {
            const flags2 = shelfItem22.application.flags;
          }
        }
        let obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: closure_1_1(closure_1_2[4]).asUintN(32, flags) };
        callback(obj);
        if (tmp7) {
          obj = { itemKey: null, sectionName: null, sectionPosition: null, sectionOverallPosition: null, applicationId: null, applicationFlags: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "sectionName:" + item.sectionName + " applicationId:" + id;
          obj[1] = item.sectionName;
          obj[2] = shelfItem2SectionPosition;
          obj[3] = item.sectionOverallPosition;
          obj[4] = id;
          let asUintNResult;
          if (null != flags2) {
            asUintNResult = closure_1_1(tmp2[4]).asUintN(32, flags2);
            const tmp5Result = closure_1_1(tmp2[4]);
          }
          obj[5] = asUintNResult;
          callback(obj);
        }
      });
    }, items)
  };
  items = [trackAppLauncherItemImpressionOnFirstView];
  return obj;
};
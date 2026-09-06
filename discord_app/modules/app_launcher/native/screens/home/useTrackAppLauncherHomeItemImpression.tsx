// discord_app/modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
import BigFlagUtilsAll from "../../../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx",
);

export const useTrackAppLauncherHomeItemImpression = function useTrackAppLauncherHomeItemImpression() {
  let obj = trackAppLauncherItemImpressionOnFirstView(12101);
  trackAppLauncherItemImpressionOnFirstView =
    obj.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  obj = { trackAppLauncherHomeItemImpression: null };
  const items = [trackAppLauncherItemImpressionOnFirstView];
  obj.trackAppLauncherHomeItemImpression = noop.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      if (
        item.type ===
        trackAppLauncherItemImpressionOnFirstView(dependencyMap[2]).AppLauncherHomeListItemType.RECOMMENDATION_APP
      ) {
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
      let obj = {
        itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId,
        sectionName: item.sectionName,
        sectionPosition: shelfItem1SectionPosition,
        sectionOverallPosition: item.sectionOverallPosition,
        applicationId,
        applicationFlags: BigFlagUtilsAll.asUintN(32, flags),
      };
      closure_1_0(obj);
      if (tmp7) {
        obj = {
          itemKey: null,
          sectionName: null,
          sectionPosition: null,
          sectionOverallPosition: null,
          applicationId: null,
          applicationFlags: null,
        };
        const _HermesInternal = HermesInternal;
        obj.itemKey = "sectionName:" + item.sectionName + " applicationId:" + id;
        obj.sectionName = item.sectionName;
        obj.sectionPosition = shelfItem2SectionPosition;
        obj.sectionOverallPosition = item.sectionOverallPosition;
        obj.applicationId = id;
        let asUintNResult;
        if (null != flags2) {
          asUintNResult = require("BigFlagUtils").asUintN(32, flags2);
          const tmp5Result = require("BigFlagUtils");
        }
        obj.applicationFlags = asUintNResult;
        closure_1_0(obj);
      }
    });
  }, items);
  return obj;
};

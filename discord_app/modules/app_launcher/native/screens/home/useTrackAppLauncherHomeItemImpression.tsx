// === Module 11738: useTrackAppLauncherHomeItemImpression ===

// Module 11738 (useTrackAppLauncherHomeItemImpression)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let trackAppLauncherItemImpressionOnFirstView;
  let obj = trackAppLauncherItemImpressionOnFirstView(576);
  const cResult = obj.c(4);
  let obj2 = trackAppLauncherItemImpressionOnFirstView(11739);
  trackAppLauncherItemImpressionOnFirstView = obj2.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  if (cResult[0] !== trackAppLauncherItemImpressionOnFirstView) {
    const fn = function t(viewableItems) {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        let applicationId;
        let asUintNResult;
        let flags;
        let flags2;
        let id;
        let obj4;
        let shelfItem1SectionPosition;
        let shelfItem2SectionPosition;
        item = item.item;
        if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          const tmpResult = trackAppLauncherItemImpressionOnFirstView(dependencyMap[5]);
          flags = tmpResult.getApplicationFlags(item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          const tmpResult2 = trackAppLauncherItemImpressionOnFirstView(dependencyMap[5]);
          flags = tmpResult2.getApplicationFlags(item.item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
          ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
          applicationId = item.shelfItem1.application.id;
          const shelfItem2 = item.shelfItem2;
          if (shelfItem2 != null) {
            id = shelfItem2.application.id;
          }
          flags = item.shelfItem1.application.flags;
          const shelfItem22 = item.shelfItem2;
          if (shelfItem22 != null) {
            flags2 = shelfItem22.application.flags;
          }
        }
        const obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: obj4.asUintN(32, flags) };
        obj4 = BigFlagUtilsAll;
        closure_1_0(obj);
        const tmp7 = null != id && null != shelfItem2SectionPosition;
        if (tmp7) {
          const _HermesInternal = HermesInternal;
          const obj2 = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + id, sectionName: item.sectionName, sectionPosition: shelfItem2SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId: id, applicationFlags: asUintNResult };
          asUintNResult = undefined;
          if (null != flags2) {
            const tmp5Result = BigFlagUtilsAll;
            asUintNResult = tmp5Result.asUintN(32, flags2);
          }
          closure_1_0(obj2);
        }
      });
    };
    cResult[0] = trackAppLauncherItemImpressionOnFirstView;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== tmp2) {
    const obj3 = { trackAppLauncherHomeItemImpression: tmp2 };
    cResult[2] = tmp2;
    cResult[3] = obj3;
    tmp3 = obj3;
  } else {
    tmp3 = cResult[3];
  }
  return tmp3;
}) : (() => {
  let items;
  let trackAppLauncherItemImpressionOnFirstView;
  let obj = trackAppLauncherItemImpressionOnFirstView(11739);
  trackAppLauncherItemImpressionOnFirstView = obj.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  let obj2 = {
    trackAppLauncherHomeItemImpression: react.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        let applicationId;
        let asUintNResult;
        let flags;
        let flags2;
        let id;
        let obj4;
        let shelfItem1SectionPosition;
        let shelfItem2SectionPosition;
        item = item.item;
        if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          const tmpResult = trackAppLauncherItemImpressionOnFirstView(dependencyMap[5]);
          flags = tmpResult.getApplicationFlags(item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          const tmpResult2 = trackAppLauncherItemImpressionOnFirstView(dependencyMap[5]);
          flags = tmpResult2.getApplicationFlags(item.item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
          ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
          applicationId = item.shelfItem1.application.id;
          const shelfItem2 = item.shelfItem2;
          if (shelfItem2 != null) {
            id = shelfItem2.application.id;
          }
          flags = item.shelfItem1.application.flags;
          const shelfItem22 = item.shelfItem2;
          if (shelfItem22 != null) {
            flags2 = shelfItem22.application.flags;
          }
        }
        const obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: obj4.asUintN(32, flags) };
        obj4 = BigFlagUtilsAll;
        closure_1_0(obj);
        const tmp7 = null != id && null != shelfItem2SectionPosition;
        if (tmp7) {
          const _HermesInternal = HermesInternal;
          const obj2 = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + id, sectionName: item.sectionName, sectionPosition: shelfItem2SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId: id, applicationFlags: asUintNResult };
          asUintNResult = undefined;
          if (null != flags2) {
            const tmp5Result = BigFlagUtilsAll;
            asUintNResult = tmp5Result.asUintN(32, flags2);
          }
          closure_1_0(obj2);
        }
      });
    }, items)
  };
  items = [trackAppLauncherItemImpressionOnFirstView];
  return obj2;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx");

export const useTrackAppLauncherHomeItemImpression = tmp2;
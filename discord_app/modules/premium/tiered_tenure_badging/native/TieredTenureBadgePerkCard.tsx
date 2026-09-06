// === Module 13439: TieredTenureBadgePerkCard ===

// Module 13439 (TieredTenureBadgePerkCard)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 11157 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ badgeNameContainer: { flexDirection: "row" }, tenureRequirements: { marginStart: 4 }, image: { width: "100%", height: "100%" }, imageContainer: { height: 238, paddingVertical: 32 }, upcomingBadge: { opacity: 0.4 }, title: { marginTop: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export const TieredTenureBadgePerkCard = function TieredTenureBadgePerkCard() {
  let obj = tieredTenureBadgeData(11184);
  tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  let obj1 = tieredTenureBadgeData(11184);
  const premiumSince = obj1.usePremiumSince();
  let obj2 = tieredTenureBadgeData(13440);
  const timeUntilNextBadge = obj2.useTimeUntilNextBadge();
  const tmp6 = closure_9();
  let obj3 = tieredTenureBadgeData(504);
  const items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = tieredTenureBadgeData(11158);
  let id;
  if (tieredTenureBadgeData != null) {
    id = tieredTenureBadgeData.id;
  }
  const mobileTenureBadgeImages = obj4.useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const large = mobileTenureBadgeImages.large;
  }
  const items1 = [stateFromStores, ];
  let id1;
  if (tieredTenureBadgeData != null) {
    id1 = tieredTenureBadgeData.id;
  }
  items1[1] = id1;
  if (null == tieredTenureBadgeData) {
    return null;
  } else {
    const intl9 = tmp(1114).intl;
    let stringResult = intl9.string(tmp(1114).t["jyYgZ+"]);
    if (tieredTenureBadgeData.status === tmp(11184).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.O9TBwQ);
    } else if (tieredTenureBadgeData.status === tmp(11184).TieredTenureBadgeStatus.WITHHELD) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.lHYDUu);
    }
    let formatResult = null;
    let tmp14 = large;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (tmp(11184).TieredTenureBadgeStatus.EARNED !== status) {
        if (tmp(11184).TieredTenureBadgeStatus.WITHHELD !== status) {
          formatResult = null;
          tmp14 = large;
          if (tmp(11184).TieredTenureBadgeStatus.UPCOMING === status) {
            formatResult = null;
            tmp14 = large;
            if (null != timeUntilNextBadge) {
              const intl3 = tmp(1114).intl;
              obj = { timeFrame: null, date: null };
              const intl4 = tmp(1114).intl;
              obj = { days: timeUntilNextBadge.days };
              obj.timeFrame = intl4.formatToPlainString(tmp(1114).t["k2UNz+"], obj);
              const _Date = Date;
              const date = new Date(premiumSince);
              obj.date = date;
              formatResult = intl3.format(tmp(1114).t.vwLvec, obj);
              tmp14 = stateFromStores(13442);
            }
          }
        }
      }
      const intl5 = tmp(1114).intl;
      obj1 = { date: null };
      const _Date2 = Date;
      const date1 = new Date(premiumSince);
      obj1.date = date1;
      formatResult = intl5.format(tmp(1114).t.Hu4jfi, obj1);
      tmp14 = large;
    }
    obj2 = { style: tmp6.badgeNameContainer, children: null };
    obj3 = { variant: "heading-md/medium", color: "text-default", children: null };
    const intl6 = tmp(1114).intl;
    obj3.children = intl6.string(tieredTenureBadgeData.nameUnformatted);
    const items2 = [closure_7(tmp(4556).Text, obj3), ];
    obj4 = { variant: "heading-md/medium", color: "text-muted", style: tmp6.tenureRequirements, children: tmp(11183).getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths) };
    items2[1] = closure_7(tmp(4556).Text, obj4);
    obj2.children = items2;
    const items3 = [closure_8(View, obj2), ];
    let tmp30Result = null != formatResult;
    if (tmp30Result) {
      const obj5 = { variant: "heading-sm/normal", color: "text-muted", children: formatResult };
      tmp30Result = tmp30(tmp(4556).Text, obj5);
    }
    const obj6 = { children: null };
    items3[1] = tmp30Result;
    obj6.children = items3;
    const tmpResult = tmp(11183);
    const obj7 = { title: null, titleStyle: null, bodyComponent: null, cta: null, buttonOnPress: null, headerComponent: null, pillText: null };
    const tmp28Result = closure_8(View, obj6);
    const intl7 = tmp(1114).intl;
    obj7.title = intl7.string(tmp(1114).t.rnsqpa);
    obj7.titleStyle = tmp6.title;
    obj7.bodyComponent = tmp28Result;
    const intl8 = tmp(1114).intl;
    obj7.cta = intl8.string(tmp(1114).t.VsY8ZW);
    obj7.buttonOnPress = tmp11;
    const obj8 = { style: tmp6.imageContainer, children: null };
    const items4 = [tmp6.image, ];
    const tmp34 = stateFromStores(13416);
    let upcomingBadge = tieredTenureBadgeData.status === tmp(11184).TieredTenureBadgeStatus.UPCOMING;
    if (!upcomingBadge) {
      upcomingBadge = tieredTenureBadgeData.status === tmp(11184).TieredTenureBadgeStatus.WITHHELD;
    }
    if (upcomingBadge) {
      upcomingBadge = tmp6.upcomingBadge;
    }
    const obj9 = { resizeMode: "contain", style: null, source: null };
    items4[1] = upcomingBadge;
    obj9.style = items4;
    const obj10 = { uri: tmp14 };
    obj9.source = obj10;
    obj8.children = closure_7(stateFromStores(5587), obj9);
    obj7.headerComponent = closure_7(View, obj8);
    obj7.pillText = stringResult;
    return closure_7(tmp34, obj7);
  }
};